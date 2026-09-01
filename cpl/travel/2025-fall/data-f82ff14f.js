(function () {
  const DATA = {
 "players": [
  {
   "name": "Cindy Reuter",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 103,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "73c22fd0-1de5-4e43-9729-4ea44638bc5d",
   "winPct": 100,
   "diff": 65,
   "ppg": 21,
   "leagueRank": 46,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -3.2
  },
  {
   "name": "Ally Yan",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 80,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "c4eafe22-4dce-47af-978a-5e4bd5afa11a",
   "winPct": 100,
   "diff": 46,
   "ppg": 21,
   "leagueRank": 48,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -2.9
  },
  {
   "name": "Jen Vorel",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 100,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "f9c1683f-9cc2-4b5d-aa29-f90e5102e687",
   "winPct": 100,
   "diff": 26,
   "ppg": 21,
   "leagueRank": 78,
   "rating": 2.2,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Rachel Hannum",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 250,
   "totalPointsAgainst": 182,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "9e62411a-1a2e-4f18-972e-f13d9bf8ced7",
   "winPct": 91.7,
   "diff": 68,
   "ppg": 20.8,
   "leagueRank": 66,
   "rating": 3,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Alyssa Bialek",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 164,
   "totalPointsAgainst": 126,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "cefdb90b-ffad-4621-96e0-2da6f93b5889",
   "winPct": 87.5,
   "diff": 38,
   "ppg": 20.5,
   "leagueRank": 113,
   "rating": 3.1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Pooja Schuster",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 287,
   "totalPointsAgainst": 193,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "e5e64524-1909-4209-a940-8774d644af72",
   "winPct": 85.7,
   "diff": 94,
   "ppg": 20.5,
   "leagueRank": 62,
   "rating": 0.5,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -2.6
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 143,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 39,
   "ppg": 20.4,
   "leagueRank": 90,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -2.8,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Thomas Dill",
   "gender": "Male",
   "team": "Monroe",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 54,
   "losses": 10,
   "pointsWon": 1310,
   "totalPointsAgainst": 964,
   "mixedWins": 27,
   "mixedLosses": 6,
   "genderWins": 27,
   "genderLosses": 4,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 84.4,
   "diff": 346,
   "ppg": 20.5,
   "leagueRank": 1,
   "rating": 4.1,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "dbb4451c-263d-48e8-88c3-de221796f55b"
  },
  {
   "name": "Pearly Leung",
   "gender": "Female",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 16,
   "losses": 3,
   "pointsWon": 393,
   "totalPointsAgainst": 310,
   "mixedWins": 9,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 84.2,
   "diff": 83,
   "ppg": 20.7,
   "leagueRank": 70,
   "rating": 4.3,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 1.4,
   "playerId": "581070ec-7106-4558-bc86-4df0675682cb"
  },
  {
   "name": "Hannah Nussbaum",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 20,
   "losses": 4,
   "pointsWon": 489,
   "totalPointsAgainst": 388,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 15,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 83.3,
   "diff": 101,
   "ppg": 20.4,
   "leagueRank": 15,
   "rating": 2.5,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.2,
   "playerId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "name": "Amy Yan",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 88,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "e121745d-7833-45f1-965b-67653bd4751e",
   "winPct": 83.3,
   "diff": 36,
   "ppg": 20.7,
   "leagueRank": 88,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -2.8
  },
  {
   "name": "Kerrin Maurer",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 65,
   "wins": 53,
   "losses": 12,
   "pointsWon": 1325,
   "totalPointsAgainst": 1084,
   "mixedWins": 25,
   "mixedLosses": 6,
   "genderWins": 28,
   "genderLosses": 6,
   "clutchWins": 19,
   "clutchLosses": 6,
   "winPct": 81.5,
   "diff": 241,
   "ppg": 20.4,
   "leagueRank": 6,
   "rating": 3,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e"
  },
  {
   "name": "Hector Irizarry",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 44,
   "losses": 10,
   "pointsWon": 1094,
   "totalPointsAgainst": 878,
   "mixedWins": 21,
   "mixedLosses": 6,
   "genderWins": 23,
   "genderLosses": 4,
   "clutchWins": 11,
   "clutchLosses": 6,
   "winPct": 81.5,
   "diff": 216,
   "ppg": 20.3,
   "leagueRank": 8,
   "rating": 4.5,
   "ratingGames": 54,
   "confidence": 90,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.1,
   "playerId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "name": "Leo Kupferman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 29,
   "losses": 7,
   "pointsWon": 719,
   "totalPointsAgainst": 579,
   "mixedWins": 16,
   "mixedLosses": 3,
   "genderWins": 13,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 80.6,
   "diff": 140,
   "ppg": 20,
   "leagueRank": 11,
   "rating": 3.9,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "a5b2e149-de36-4d75-80af-218a03ff590d"
  },
  {
   "name": "Lindsey Thoeng",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 32,
   "losses": 8,
   "pointsWon": 807,
   "totalPointsAgainst": 617,
   "mixedWins": 17,
   "mixedLosses": 3,
   "genderWins": 15,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 80,
   "diff": 190,
   "ppg": 20.2,
   "leagueRank": 4,
   "rating": 3.2,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "name": "Casey Jannetta",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 98,
   "totalPointsAgainst": 94,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "d458764e-2d62-4817-a96e-9006fead6457",
   "winPct": 80,
   "diff": 4,
   "ppg": 19.6,
   "leagueRank": 147,
   "rating": 0.7,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Taylor Peracchio",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 74,
   "wins": 59,
   "losses": 15,
   "pointsWon": 1505,
   "totalPointsAgainst": 1162,
   "mixedWins": 27,
   "mixedLosses": 10,
   "genderWins": 32,
   "genderLosses": 5,
   "clutchWins": 15,
   "clutchLosses": 7,
   "winPct": 79.7,
   "diff": 343,
   "ppg": 20.3,
   "leagueRank": 3,
   "rating": 2.8,
   "ratingGames": 74,
   "confidence": 92,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.1,
   "playerId": "4df44e08-a35c-4c4c-a311-861ef4d0897a"
  },
  {
   "name": "Anisha Malhotra",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 42,
   "losses": 11,
   "pointsWon": 1065,
   "totalPointsAgainst": 869,
   "mixedWins": 22,
   "mixedLosses": 9,
   "genderWins": 20,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 79.2,
   "diff": 196,
   "ppg": 20.1,
   "leagueRank": 10,
   "rating": 2.5,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "2aa8b268-8c06-4453-9706-048009bf6af3"
  },
  {
   "name": "Ashley Georgevich",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 79,
   "wins": 62,
   "losses": 17,
   "pointsWon": 1582,
   "totalPointsAgainst": 1187,
   "mixedWins": 32,
   "mixedLosses": 9,
   "genderWins": 30,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 78.5,
   "diff": 395,
   "ppg": 20,
   "leagueRank": 5,
   "rating": 3.6,
   "ratingGames": 79,
   "confidence": 93,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "6953916c-867d-42fe-89ad-444aee6d40e8"
  },
  {
   "name": "Beatriz Lopez Albarracin",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 18,
   "losses": 5,
   "pointsWon": 467,
   "totalPointsAgainst": 364,
   "mixedWins": 10,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 78.3,
   "diff": 103,
   "ppg": 20.3,
   "leagueRank": 53,
   "rating": 4.1,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "73603f18-0adb-48db-8375-1a6deff6ddbb"
  },
  {
   "name": "Lindsey Taaffe",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 67,
   "wins": 52,
   "losses": 15,
   "pointsWon": 1329,
   "totalPointsAgainst": 1093,
   "mixedWins": 23,
   "mixedLosses": 8,
   "genderWins": 29,
   "genderLosses": 7,
   "clutchWins": 13,
   "clutchLosses": 3,
   "winPct": 77.6,
   "diff": 236,
   "ppg": 19.8,
   "leagueRank": 13,
   "rating": 2.7,
   "ratingGames": 67,
   "confidence": 92,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.6,
   "playerId": "8c4e6b34-2198-4797-ae86-65f97164eedd"
  },
  {
   "name": "Yoyo Shen",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 31,
   "losses": 9,
   "pointsWon": 812,
   "totalPointsAgainst": 592,
   "mixedWins": 15,
   "mixedLosses": 7,
   "genderWins": 16,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 77.5,
   "diff": 220,
   "ppg": 20.3,
   "leagueRank": 2,
   "rating": 3.8,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "name": "Kaylyn Swankoski",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 74,
   "wins": 57,
   "losses": 17,
   "pointsWon": 1485,
   "totalPointsAgainst": 1209,
   "mixedWins": 21,
   "mixedLosses": 9,
   "genderWins": 36,
   "genderLosses": 8,
   "clutchWins": 15,
   "clutchLosses": 5,
   "winPct": 77,
   "diff": 276,
   "ppg": 20.1,
   "leagueRank": 12,
   "rating": 3,
   "ratingGames": 74,
   "confidence": 92,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.5,
   "playerId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "name": "Taylor Hartman",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 45,
   "losses": 14,
   "pointsWon": 1177,
   "totalPointsAgainst": 1007,
   "mixedWins": 20,
   "mixedLosses": 8,
   "genderWins": 25,
   "genderLosses": 6,
   "clutchWins": 12,
   "clutchLosses": 5,
   "winPct": 76.3,
   "diff": 170,
   "ppg": 19.9,
   "leagueRank": 18,
   "rating": 2.1,
   "ratingGames": 59,
   "confidence": 91,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.4,
   "playerId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "name": "James Cannizzaro",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 34,
   "losses": 11,
   "pointsWon": 915,
   "totalPointsAgainst": 725,
   "mixedWins": 17,
   "mixedLosses": 5,
   "genderWins": 17,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 75.6,
   "diff": 190,
   "ppg": 20.3,
   "leagueRank": 9,
   "rating": 1.5,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.6,
   "playerId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "name": "Dilan Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 81,
   "wins": 61,
   "losses": 20,
   "pointsWon": 1627,
   "totalPointsAgainst": 1351,
   "mixedWins": 28,
   "mixedLosses": 13,
   "genderWins": 33,
   "genderLosses": 7,
   "clutchWins": 21,
   "clutchLosses": 11,
   "winPct": 75.3,
   "diff": 276,
   "ppg": 20.1,
   "leagueRank": 17,
   "rating": 2.9,
   "ratingGames": 81,
   "confidence": 93,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "name": "Corey Maryles",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 36,
   "losses": 12,
   "pointsWon": 959,
   "totalPointsAgainst": 774,
   "mixedWins": 19,
   "mixedLosses": 3,
   "genderWins": 17,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 75,
   "diff": 185,
   "ppg": 20,
   "leagueRank": 14,
   "rating": 3.8,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "a0d313f4-dca8-4931-8c34-1ad812541550"
  },
  {
   "name": "Obe Janvier",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 163,
   "totalPointsAgainst": 126,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "50fccc8f-a4a9-490b-a7d5-eebbda35bb22",
   "winPct": 75,
   "diff": 37,
   "ppg": 20.4,
   "leagueRank": 126,
   "rating": 1.5,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Tim Dowd",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 131,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28",
   "winPct": 75,
   "diff": 33,
   "ppg": 20.5,
   "leagueRank": 129,
   "rating": 1.1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Veronica Mogilevich",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 235,
   "totalPointsAgainst": 206,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 29,
   "ppg": 19.6,
   "leagueRank": 127,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "e5c6c85a-ef50-4076-b43c-bcbbe4dd930b"
  },
  {
   "name": "Nathan Malhotra",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 139,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "98bd685a-3161-45fc-941f-3a8c9f4849cf",
   "winPct": 75,
   "diff": 25,
   "ppg": 20.5,
   "leagueRank": 132,
   "rating": -1.4,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.9
  },
  {
   "name": "Victoria Collier",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 159,
   "totalPointsAgainst": 136,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "8b507ceb-c0fc-425e-a41f-37ddd8fc9225",
   "winPct": 75,
   "diff": 23,
   "ppg": 19.9,
   "leagueRank": 141,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0
  },
  {
   "name": "William Hayes",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 158,
   "totalPointsAgainst": 154,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 0,
   "playerId": "4dfed1a1-5375-446c-98bc-69402e70e1d5",
   "winPct": 75,
   "diff": 4,
   "ppg": 19.8,
   "leagueRank": 157,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Michael Li",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 28,
   "losses": 10,
   "pointsWon": 746,
   "totalPointsAgainst": 629,
   "mixedWins": 16,
   "mixedLosses": 4,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 73.7,
   "diff": 117,
   "ppg": 19.6,
   "leagueRank": 20,
   "rating": 0.8,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.1,
   "playerId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "name": "Suzi Battison",
   "gender": "Female",
   "team": "Flemington",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 79,
   "wins": 58,
   "losses": 21,
   "pointsWon": 1577,
   "totalPointsAgainst": 1226,
   "mixedWins": 28,
   "mixedLosses": 11,
   "genderWins": 30,
   "genderLosses": 10,
   "clutchWins": 10,
   "clutchLosses": 10,
   "winPct": 73.4,
   "diff": 351,
   "ppg": 20,
   "leagueRank": 16,
   "rating": 5.4,
   "ratingGames": 79,
   "confidence": 93,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "name": "Melissa Dardani",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 446,
   "totalPointsAgainst": 325,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 72.7,
   "diff": 121,
   "ppg": 20.3,
   "leagueRank": 55,
   "rating": 3.2,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.1,
   "playerId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "name": "Johanna Wagner",
   "gender": "Female",
   "team": "Home Court",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 83,
   "wins": 60,
   "losses": 23,
   "pointsWon": 1662,
   "totalPointsAgainst": 1338,
   "mixedWins": 30,
   "mixedLosses": 11,
   "genderWins": 30,
   "genderLosses": 12,
   "clutchWins": 13,
   "clutchLosses": 11,
   "winPct": 72.3,
   "diff": 324,
   "ppg": 20,
   "leagueRank": 19,
   "rating": 2.7,
   "ratingGames": 84,
   "confidence": 93,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "name": "Zoe Ousouljoglou",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 39,
   "losses": 15,
   "pointsWon": 1065,
   "totalPointsAgainst": 870,
   "mixedWins": 18,
   "mixedLosses": 10,
   "genderWins": 21,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 72.2,
   "diff": 195,
   "ppg": 19.7,
   "leagueRank": 22,
   "rating": 2.7,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.5,
   "playerId": "269fe355-d2eb-41b8-9e92-a1438aec65e3"
  },
  {
   "name": "Allison Tarnoff",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 38,
   "losses": 15,
   "pointsWon": 1038,
   "totalPointsAgainst": 934,
   "mixedWins": 25,
   "mixedLosses": 13,
   "genderWins": 13,
   "genderLosses": 2,
   "clutchWins": 12,
   "clutchLosses": 5,
   "winPct": 71.7,
   "diff": 104,
   "ppg": 19.6,
   "leagueRank": 34,
   "rating": 0.6,
   "ratingGames": 53,
   "confidence": 90,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510"
  },
  {
   "name": "Chris Bucaro",
   "gender": "Male",
   "team": "Monroe",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 70,
   "wins": 50,
   "losses": 20,
   "pointsWon": 1397,
   "totalPointsAgainst": 1172,
   "mixedWins": 22,
   "mixedLosses": 13,
   "genderWins": 28,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 71.4,
   "diff": 225,
   "ppg": 20,
   "leagueRank": 23,
   "rating": 2.5,
   "ratingGames": 70,
   "confidence": 92,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "0e43724a-794d-4218-9da4-d0e83d35ffb2"
  },
  {
   "name": "Jessica Pevny",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 45,
   "losses": 18,
   "pointsWon": 1234,
   "totalPointsAgainst": 1032,
   "mixedWins": 23,
   "mixedLosses": 10,
   "genderWins": 22,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 71.4,
   "diff": 202,
   "ppg": 19.6,
   "leagueRank": 24,
   "rating": 1,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.4,
   "playerId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "name": "Maanav Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 45,
   "losses": 18,
   "pointsWon": 1257,
   "totalPointsAgainst": 1077,
   "mixedWins": 18,
   "mixedLosses": 13,
   "genderWins": 27,
   "genderLosses": 5,
   "clutchWins": 13,
   "clutchLosses": 8,
   "winPct": 71.4,
   "diff": 180,
   "ppg": 20,
   "leagueRank": 27,
   "rating": 3.2,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1,
   "playerId": "0a1270b0-26f6-4328-85bc-bf3f329a746e"
  },
  {
   "name": "Ruhi Shah",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 49,
   "losses": 20,
   "pointsWon": 1386,
   "totalPointsAgainst": 1120,
   "mixedWins": 22,
   "mixedLosses": 13,
   "genderWins": 27,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 11,
   "winPct": 71,
   "diff": 266,
   "ppg": 20.1,
   "leagueRank": 21,
   "rating": 3.3,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.5,
   "playerId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "name": "Stephanie Bramer",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 44,
   "losses": 18,
   "pointsWon": 1200,
   "totalPointsAgainst": 1049,
   "mixedWins": 20,
   "mixedLosses": 9,
   "genderWins": 24,
   "genderLosses": 9,
   "clutchWins": 11,
   "clutchLosses": 5,
   "winPct": 71,
   "diff": 151,
   "ppg": 19.4,
   "leagueRank": 36,
   "rating": 1.9,
   "ratingGames": 62,
   "confidence": 92,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26"
  },
  {
   "name": "Noelle Ramirez",
   "gender": "Female",
   "team": "Home Court",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 33,
   "losses": 14,
   "pointsWon": 931,
   "totalPointsAgainst": 799,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 21,
   "genderLosses": 3,
   "clutchWins": 11,
   "clutchLosses": 6,
   "winPct": 70.2,
   "diff": 132,
   "ppg": 19.8,
   "leagueRank": 7,
   "rating": 3.2,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "name": "Eric Lin",
   "gender": "Male",
   "team": "Monroe",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 40,
   "wins": 28,
   "losses": 12,
   "pointsWon": 783,
   "totalPointsAgainst": 674,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 17,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 70,
   "diff": 109,
   "ppg": 19.6,
   "leagueRank": 28,
   "rating": 0.3,
   "ratingGames": 40,
   "confidence": 89,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.7,
   "playerId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "name": "Daniel Kulik",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 76,
   "wins": 53,
   "losses": 23,
   "pointsWon": 1499,
   "totalPointsAgainst": 1298,
   "mixedWins": 28,
   "mixedLosses": 10,
   "genderWins": 25,
   "genderLosses": 13,
   "clutchWins": 18,
   "clutchLosses": 13,
   "winPct": 69.7,
   "diff": 201,
   "ppg": 19.7,
   "leagueRank": 29,
   "rating": 1.6,
   "ratingGames": 76,
   "confidence": 93,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0,
   "playerId": "35d7ef89-3505-481a-8036-8c5d7954f9a8"
  },
  {
   "name": "Dylan Unkert",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 48,
   "losses": 21,
   "pointsWon": 1358,
   "totalPointsAgainst": 1213,
   "mixedWins": 26,
   "mixedLosses": 9,
   "genderWins": 22,
   "genderLosses": 12,
   "clutchWins": 19,
   "clutchLosses": 9,
   "winPct": 69.6,
   "diff": 145,
   "ppg": 19.7,
   "leagueRank": 37,
   "rating": 1.2,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.5,
   "playerId": "35415e5c-19db-4389-9839-b63d7e09851f"
  },
  {
   "name": "Jenna Irwin",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 74,
   "wins": 51,
   "losses": 23,
   "pointsWon": 1462,
   "totalPointsAgainst": 1216,
   "mixedWins": 25,
   "mixedLosses": 11,
   "genderWins": 26,
   "genderLosses": 12,
   "clutchWins": 12,
   "clutchLosses": 13,
   "winPct": 68.9,
   "diff": 246,
   "ppg": 19.8,
   "leagueRank": 26,
   "rating": 2.2,
   "ratingGames": 74,
   "confidence": 93,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "name": "Lynda Tomaru",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 31,
   "losses": 14,
   "pointsWon": 863,
   "totalPointsAgainst": 784,
   "mixedWins": 18,
   "mixedLosses": 9,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 68.9,
   "diff": 79,
   "ppg": 19.2,
   "leagueRank": 45,
   "rating": 1.1,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e"
  },
  {
   "name": "Anita Buggins",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 80,
   "wins": 55,
   "losses": 25,
   "pointsWon": 1574,
   "totalPointsAgainst": 1358,
   "mixedWins": 30,
   "mixedLosses": 13,
   "genderWins": 25,
   "genderLosses": 12,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 68.8,
   "diff": 216,
   "ppg": 19.7,
   "leagueRank": 38,
   "rating": 2.9,
   "ratingGames": 80,
   "confidence": 93,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7,
   "playerId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "name": "Rayna Baizman",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 64,
   "wins": 44,
   "losses": 20,
   "pointsWon": 1268,
   "totalPointsAgainst": 1085,
   "mixedWins": 21,
   "mixedLosses": 8,
   "genderWins": 23,
   "genderLosses": 12,
   "clutchWins": 14,
   "clutchLosses": 12,
   "winPct": 68.8,
   "diff": 183,
   "ppg": 19.8,
   "leagueRank": 30,
   "rating": 1.5,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.3,
   "playerId": "108620c9-1cbb-4ea0-846c-bc781f1decea"
  },
  {
   "name": "Christian Fechter",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 33,
   "losses": 15,
   "pointsWon": 940,
   "totalPointsAgainst": 829,
   "mixedWins": 16,
   "mixedLosses": 8,
   "genderWins": 17,
   "genderLosses": 7,
   "clutchWins": 14,
   "clutchLosses": 6,
   "winPct": 68.8,
   "diff": 111,
   "ppg": 19.6,
   "leagueRank": 35,
   "rating": 0.2,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.2,
   "playerId": "9a973334-7467-4873-9aa6-ca3a597e8caa"
  },
  {
   "name": "Emily Babinsky",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 314,
   "totalPointsAgainst": 251,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 68.8,
   "diff": 63,
   "ppg": 19.6,
   "leagueRank": 99,
   "rating": 1.4,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.1,
   "playerId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "name": "Nick Dehmer",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 70,
   "wins": 48,
   "losses": 22,
   "pointsWon": 1379,
   "totalPointsAgainst": 1234,
   "mixedWins": 26,
   "mixedLosses": 10,
   "genderWins": 22,
   "genderLosses": 12,
   "clutchWins": 15,
   "clutchLosses": 9,
   "winPct": 68.6,
   "diff": 145,
   "ppg": 19.7,
   "leagueRank": 40,
   "rating": 1.6,
   "ratingGames": 70,
   "confidence": 92,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "name": "Gissel Escalante",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 377,
   "totalPointsAgainst": 259,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 68.4,
   "diff": 118,
   "ppg": 19.8,
   "leagueRank": 82,
   "rating": 3.7,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.1,
   "playerId": "63221cc8-e303-4675-8dde-4fc77e871627"
  },
  {
   "name": "John Gargana",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 15,
   "losses": 7,
   "pointsWon": 432,
   "totalPointsAgainst": 379,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 68.2,
   "diff": 53,
   "ppg": 19.6,
   "leagueRank": 87,
   "rating": 1.5,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "e7ead4ec-3ab0-469f-9122-0a822f068415"
  },
  {
   "name": "Jordan Denish",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 34,
   "losses": 16,
   "pointsWon": 962,
   "totalPointsAgainst": 874,
   "mixedWins": 15,
   "mixedLosses": 10,
   "genderWins": 19,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 68,
   "diff": 88,
   "ppg": 19.2,
   "leagueRank": 49,
   "rating": 2,
   "ratingGames": 50,
   "confidence": 90,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1,
   "playerId": "8ae25144-966d-4de1-9cb3-513f7f217170"
  },
  {
   "name": "Trang Nguyen (Smile)",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 21,
   "losses": 10,
   "pointsWon": 621,
   "totalPointsAgainst": 534,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 67.7,
   "diff": 87,
   "ppg": 20,
   "leagueRank": 31,
   "rating": 1.5,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.3,
   "playerId": "60eb4808-3d54-429f-9910-11b14939a230"
  },
  {
   "name": "Elysia Price",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 74,
   "wins": 50,
   "losses": 24,
   "pointsWon": 1439,
   "totalPointsAgainst": 1219,
   "mixedWins": 23,
   "mixedLosses": 15,
   "genderWins": 27,
   "genderLosses": 9,
   "clutchWins": 14,
   "clutchLosses": 8,
   "winPct": 67.6,
   "diff": 220,
   "ppg": 19.4,
   "leagueRank": 32,
   "rating": 0.9,
   "ratingGames": 74,
   "confidence": 92,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.1,
   "playerId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "name": "Manpreet Singh",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 43,
   "wins": 29,
   "losses": 14,
   "pointsWon": 844,
   "totalPointsAgainst": 806,
   "mixedWins": 15,
   "mixedLosses": 6,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 18,
   "clutchLosses": 7,
   "winPct": 67.4,
   "diff": 38,
   "ppg": 19.6,
   "leagueRank": 63,
   "rating": 1.7,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.2,
   "playerId": "c7023f76-4d31-4566-a606-ef047e1220ad"
  },
  {
   "name": "Muhammad Usman",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 38,
   "losses": 19,
   "pointsWon": 1121,
   "totalPointsAgainst": 965,
   "mixedWins": 20,
   "mixedLosses": 8,
   "genderWins": 18,
   "genderLosses": 11,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 66.7,
   "diff": 156,
   "ppg": 19.7,
   "leagueRank": 39,
   "rating": 1.7,
   "ratingGames": 57,
   "confidence": 91,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "8adf5cec-e3bf-4b0e-9a7c-7d1ed650bddb"
  },
  {
   "name": "Gautham Bondugula",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 20,
   "losses": 10,
   "pointsWon": 594,
   "totalPointsAgainst": 489,
   "mixedWins": 12,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 66.7,
   "diff": 105,
   "ppg": 19.8,
   "leagueRank": 25,
   "rating": 1.6,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.3,
   "playerId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0"
  },
  {
   "name": "Shreyas Pani",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 22,
   "losses": 11,
   "pointsWon": 640,
   "totalPointsAgainst": 538,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 66.7,
   "diff": 102,
   "ppg": 19.4,
   "leagueRank": 33,
   "rating": 1.5,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "name": "Chrissy Sandella",
   "gender": "Female",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 412,
   "totalPointsAgainst": 350,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 62,
   "ppg": 19.6,
   "leagueRank": 81,
   "rating": 1,
   "ratingGames": 21,
   "confidence": 82,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3,
   "playerId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b"
  },
  {
   "name": "Doryan Amato",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 20,
   "losses": 10,
   "pointsWon": 574,
   "totalPointsAgainst": 515,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 59,
   "ppg": 19.1,
   "leagueRank": 50,
   "rating": 1.5,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "60448597-405f-4454-a0b8-15bb2e41373e"
  },
  {
   "name": "Alice Napolitano",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 95,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030",
   "winPct": 66.7,
   "diff": 24,
   "ppg": 19.8,
   "leagueRank": 140,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -2.9
  },
  {
   "name": "Madison Turosinski",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 236,
   "totalPointsAgainst": 214,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "d650893e-cd89-40d1-9175-69a1a6b5558f",
   "winPct": 66.7,
   "diff": 22,
   "ppg": 19.7,
   "leagueRank": 139,
   "rating": 0.7,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Stanley Bonczek",
   "gender": "Male",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 41,
   "losses": 21,
   "pointsWon": 1208,
   "totalPointsAgainst": 1052,
   "mixedWins": 26,
   "mixedLosses": 5,
   "genderWins": 15,
   "genderLosses": 16,
   "clutchWins": 10,
   "clutchLosses": 11,
   "winPct": 66.1,
   "diff": 156,
   "ppg": 19.5,
   "leagueRank": 42,
   "rating": 0.9,
   "ratingGames": 62,
   "confidence": 92,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3,
   "playerId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "name": "Lily Yip",
   "gender": "Female",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 25,
   "losses": 13,
   "pointsWon": 732,
   "totalPointsAgainst": 613,
   "mixedWins": 14,
   "mixedLosses": 5,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 65.8,
   "diff": 119,
   "ppg": 19.3,
   "leagueRank": 41,
   "rating": 2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "78f3d90b-c12f-4936-8283-659b53e37384"
  },
  {
   "name": "Paula Ro",
   "gender": "Female",
   "team": "Pickle Jar",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 25,
   "losses": 13,
   "pointsWon": 749,
   "totalPointsAgainst": 666,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 16,
   "genderLosses": 3,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 65.8,
   "diff": 83,
   "ppg": 19.7,
   "leagueRank": 47,
   "rating": 2.2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 1,
   "playerId": "27908231-74bb-4956-adc4-5429e16e55ea"
  },
  {
   "name": "Eugene Zaslavsky",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 17,
   "losses": 9,
   "pointsWon": 511,
   "totalPointsAgainst": 441,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 65.4,
   "diff": 70,
   "ppg": 19.7,
   "leagueRank": 65,
   "rating": -0.2,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1,
   "playerId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "name": "Bruno Casino Remondo",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 47,
   "losses": 25,
   "pointsWon": 1389,
   "totalPointsAgainst": 1328,
   "mixedWins": 22,
   "mixedLosses": 13,
   "genderWins": 25,
   "genderLosses": 12,
   "clutchWins": 20,
   "clutchLosses": 8,
   "winPct": 65.3,
   "diff": 61,
   "ppg": 19.3,
   "leagueRank": 69,
   "rating": 3.3,
   "ratingGames": 72,
   "confidence": 92,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "eb557a63-d8c4-46b4-9f21-67f59731f20f"
  },
  {
   "name": "Jeff Comer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 86,
   "wins": 56,
   "losses": 30,
   "pointsWon": 1703,
   "totalPointsAgainst": 1504,
   "mixedWins": 33,
   "mixedLosses": 10,
   "genderWins": 23,
   "genderLosses": 20,
   "clutchWins": 20,
   "clutchLosses": 18,
   "winPct": 65.1,
   "diff": 199,
   "ppg": 19.8,
   "leagueRank": 44,
   "rating": 2.1,
   "ratingGames": 86,
   "confidence": 93,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.8,
   "playerId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "name": "Will Kayal",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 80,
   "wins": 52,
   "losses": 28,
   "pointsWon": 1567,
   "totalPointsAgainst": 1360,
   "mixedWins": 28,
   "mixedLosses": 13,
   "genderWins": 24,
   "genderLosses": 15,
   "clutchWins": 11,
   "clutchLosses": 15,
   "winPct": 65,
   "diff": 207,
   "ppg": 19.6,
   "leagueRank": 43,
   "rating": 1.1,
   "ratingGames": 80,
   "confidence": 93,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.3,
   "playerId": "188d1b9d-5318-49c7-b737-38e656d3ddd5"
  },
  {
   "name": "Alvaro Regalado",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 13,
   "losses": 7,
   "pointsWon": 402,
   "totalPointsAgainst": 358,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 65,
   "diff": 44,
   "ppg": 20.1,
   "leagueRank": 98,
   "rating": 2.7,
   "ratingGames": 20,
   "confidence": 81,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 1.5,
   "playerId": "9e056bf3-21d0-43e3-b7e5-e245f8d0b154"
  },
  {
   "name": "Alexander Tong",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 82,
   "wins": 53,
   "losses": 29,
   "pointsWon": 1587,
   "totalPointsAgainst": 1451,
   "mixedWins": 25,
   "mixedLosses": 14,
   "genderWins": 28,
   "genderLosses": 15,
   "clutchWins": 15,
   "clutchLosses": 10,
   "winPct": 64.6,
   "diff": 136,
   "ppg": 19.4,
   "leagueRank": 58,
   "rating": 3,
   "ratingGames": 82,
   "confidence": 93,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "name": "Nathan Law",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 36,
   "losses": 20,
   "pointsWon": 1095,
   "totalPointsAgainst": 985,
   "mixedWins": 17,
   "mixedLosses": 11,
   "genderWins": 19,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 64.3,
   "diff": 110,
   "ppg": 19.6,
   "leagueRank": 56,
   "rating": 2,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "name": "Hruday Vemparala",
   "gender": "Male",
   "team": "Home Court",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 42,
   "losses": 24,
   "pointsWon": 1274,
   "totalPointsAgainst": 1140,
   "mixedWins": 26,
   "mixedLosses": 8,
   "genderWins": 16,
   "genderLosses": 16,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 63.6,
   "diff": 134,
   "ppg": 19.3,
   "leagueRank": 52,
   "rating": 0.7,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "name": "Ozair Ibrahim",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 79,
   "wins": 50,
   "losses": 29,
   "pointsWon": 1540,
   "totalPointsAgainst": 1370,
   "mixedWins": 31,
   "mixedLosses": 11,
   "genderWins": 19,
   "genderLosses": 18,
   "clutchWins": 12,
   "clutchLosses": 16,
   "winPct": 63.3,
   "diff": 170,
   "ppg": 19.5,
   "leagueRank": 54,
   "rating": 2.4,
   "ratingGames": 79,
   "confidence": 93,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.8,
   "playerId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "name": "Robbie Oddy",
   "gender": "Male",
   "team": "Flemington",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 84,
   "wins": 53,
   "losses": 31,
   "pointsWon": 1635,
   "totalPointsAgainst": 1489,
   "mixedWins": 33,
   "mixedLosses": 14,
   "genderWins": 20,
   "genderLosses": 17,
   "clutchWins": 15,
   "clutchLosses": 13,
   "winPct": 63.1,
   "diff": 146,
   "ppg": 19.5,
   "leagueRank": 59,
   "rating": 1.7,
   "ratingGames": 84,
   "confidence": 93,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.7,
   "playerId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "name": "Tin Wai Kwan",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 158,
   "totalPointsAgainst": 139,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "winPct": 62.5,
   "diff": 19,
   "ppg": 19.8,
   "leagueRank": 159,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Andrew Province",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 296,
   "totalPointsAgainst": 277,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "90c339d7-a7a8-4eec-b365-c51955d9801b",
   "winPct": 62.5,
   "diff": 19,
   "ppg": 18.5,
   "leagueRank": 142,
   "rating": 2.1,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Thomas Hoffman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 151,
   "totalPointsAgainst": 148,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "0e5f7ddd-f4e6-4fc8-8ac0-5e87d8a46533",
   "winPct": 62.5,
   "diff": 3,
   "ppg": 18.9,
   "leagueRank": 166,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.4
  },
  {
   "name": "Shelah Wallace",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 39,
   "losses": 24,
   "pointsWon": 1222,
   "totalPointsAgainst": 1125,
   "mixedWins": 17,
   "mixedLosses": 12,
   "genderWins": 22,
   "genderLosses": 12,
   "clutchWins": 13,
   "clutchLosses": 9,
   "winPct": 61.9,
   "diff": 97,
   "ppg": 19.4,
   "leagueRank": 67,
   "rating": 2.8,
   "ratingGames": 63,
   "confidence": 91,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.7,
   "playerId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "name": "Vishal Talreja",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 414,
   "totalPointsAgainst": 377,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 61.9,
   "diff": 37,
   "ppg": 19.7,
   "leagueRank": 106,
   "rating": -0.3,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.2,
   "playerId": "0f247a76-b314-4205-8245-1cfc2fcbc655"
  },
  {
   "name": "Yuki Kim",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 40,
   "losses": 25,
   "pointsWon": 1257,
   "totalPointsAgainst": 1145,
   "mixedWins": 22,
   "mixedLosses": 16,
   "genderWins": 18,
   "genderLosses": 9,
   "clutchWins": 11,
   "clutchLosses": 12,
   "winPct": 61.5,
   "diff": 112,
   "ppg": 19.3,
   "leagueRank": 61,
   "rating": 0.7,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "name": "Dustin Rabinowitz",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 30,
   "losses": 19,
   "pointsWon": 951,
   "totalPointsAgainst": 846,
   "mixedWins": 11,
   "mixedLosses": 11,
   "genderWins": 19,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 61.2,
   "diff": 105,
   "ppg": 19.4,
   "leagueRank": 60,
   "rating": 1.9,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.5,
   "playerId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "name": "Stacy Walkowitz",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 22,
   "losses": 14,
   "pointsWon": 681,
   "totalPointsAgainst": 653,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 13,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 3,
   "winPct": 61.1,
   "diff": 28,
   "ppg": 18.9,
   "leagueRank": 74,
   "rating": 0.2,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "name": "Gift Horn",
   "gender": "Female",
   "team": "Home Court",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 89,
   "wins": 54,
   "losses": 35,
   "pointsWon": 1727,
   "totalPointsAgainst": 1571,
   "mixedWins": 24,
   "mixedLosses": 20,
   "genderWins": 30,
   "genderLosses": 15,
   "clutchWins": 14,
   "clutchLosses": 13,
   "winPct": 60.7,
   "diff": 156,
   "ppg": 19.4,
   "leagueRank": 64,
   "rating": 0.9,
   "ratingGames": 89,
   "confidence": 94,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.4,
   "playerId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "name": "Lissa Eagles",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 71,
   "wins": 43,
   "losses": 28,
   "pointsWon": 1384,
   "totalPointsAgainst": 1247,
   "mixedWins": 17,
   "mixedLosses": 16,
   "genderWins": 26,
   "genderLosses": 12,
   "clutchWins": 12,
   "clutchLosses": 12,
   "winPct": 60.6,
   "diff": 137,
   "ppg": 19.5,
   "leagueRank": 57,
   "rating": 0.3,
   "ratingGames": 71,
   "confidence": 92,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.2,
   "playerId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "name": "Camrin Cronheim",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 68,
   "wins": 41,
   "losses": 27,
   "pointsWon": 1276,
   "totalPointsAgainst": 1218,
   "mixedWins": 25,
   "mixedLosses": 13,
   "genderWins": 16,
   "genderLosses": 14,
   "clutchWins": 14,
   "clutchLosses": 6,
   "winPct": 60.3,
   "diff": 58,
   "ppg": 18.8,
   "leagueRank": 75,
   "rating": -0.2,
   "ratingGames": 68,
   "confidence": 92,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.4,
   "playerId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "name": "David Lavy",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 21,
   "losses": 14,
   "pointsWon": 686,
   "totalPointsAgainst": 585,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 60,
   "diff": 101,
   "ppg": 19.6,
   "leagueRank": 51,
   "rating": 2.4,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.8,
   "playerId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "name": "Kishan Shah",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 33,
   "losses": 22,
   "pointsWon": 1059,
   "totalPointsAgainst": 981,
   "mixedWins": 19,
   "mixedLosses": 11,
   "genderWins": 14,
   "genderLosses": 11,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 60,
   "diff": 78,
   "ppg": 19.3,
   "leagueRank": 68,
   "rating": 1.2,
   "ratingGames": 55,
   "confidence": 90,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "name": "Jonah Fliegelman",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 33,
   "losses": 22,
   "pointsWon": 1053,
   "totalPointsAgainst": 994,
   "mixedWins": 18,
   "mixedLosses": 7,
   "genderWins": 15,
   "genderLosses": 15,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 60,
   "diff": 59,
   "ppg": 19.1,
   "leagueRank": 72,
   "rating": 1.1,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8"
  },
  {
   "name": "Sophy Siv",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 10,
   "losses": 7,
   "pointsWon": 319,
   "totalPointsAgainst": 310,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 58.8,
   "diff": 9,
   "ppg": 18.8,
   "leagueRank": 145,
   "rating": 0.1,
   "ratingGames": 17,
   "confidence": 76,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "ad5025f0-478c-47b3-a437-85e53a87daa2"
  },
  {
   "name": "Kara Infante",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 207,
   "totalPointsAgainst": 213,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "winPct": 58.3,
   "diff": -6,
   "ppg": 17.3,
   "leagueRank": 179,
   "rating": -0.3,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Carly Pfeffer",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 55,
   "wins": 32,
   "losses": 23,
   "pointsWon": 1019,
   "totalPointsAgainst": 945,
   "mixedWins": 14,
   "mixedLosses": 13,
   "genderWins": 18,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 58.2,
   "diff": 74,
   "ppg": 18.5,
   "leagueRank": 73,
   "rating": -0.9,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.3,
   "playerId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "name": "Claire Gaston",
   "gender": "Female",
   "team": "Monroe",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 68,
   "wins": 39,
   "losses": 29,
   "pointsWon": 1282,
   "totalPointsAgainst": 1215,
   "mixedWins": 23,
   "mixedLosses": 9,
   "genderWins": 16,
   "genderLosses": 20,
   "clutchWins": 14,
   "clutchLosses": 6,
   "winPct": 57.4,
   "diff": 67,
   "ppg": 18.9,
   "leagueRank": 77,
   "rating": 1,
   "ratingGames": 68,
   "confidence": 92,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.6,
   "playerId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "name": "Chaille Godinez",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 27,
   "losses": 20,
   "pointsWon": 888,
   "totalPointsAgainst": 878,
   "mixedWins": 13,
   "mixedLosses": 13,
   "genderWins": 14,
   "genderLosses": 7,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 57.4,
   "diff": 10,
   "ppg": 18.9,
   "leagueRank": 86,
   "rating": 0,
   "ratingGames": 47,
   "confidence": 89,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6"
  },
  {
   "name": "Vivekkumar Govindaswamy",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 133,
   "totalPointsAgainst": 131,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "a472cebf-6bf1-42d1-9a41-fc8940cbb021",
   "winPct": 57.1,
   "diff": 2,
   "ppg": 19,
   "leagueRank": 177,
   "rating": -1.5,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.1
  },
  {
   "name": "Dipen Bhatt",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 264,
   "totalPointsAgainst": 267,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -3,
   "ppg": 18.9,
   "leagueRank": 170,
   "rating": 0.1,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.4,
   "playerId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "name": "Morgan Fishman",
   "gender": "Female",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 29,
   "losses": 22,
   "pointsWon": 924,
   "totalPointsAgainst": 905,
   "mixedWins": 17,
   "mixedLosses": 8,
   "genderWins": 12,
   "genderLosses": 14,
   "clutchWins": 11,
   "clutchLosses": 4,
   "winPct": 56.9,
   "diff": 19,
   "ppg": 18.1,
   "leagueRank": 85,
   "rating": -1.4,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "name": "Chris Damato",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 33,
   "losses": 26,
   "pointsWon": 1138,
   "totalPointsAgainst": 1043,
   "mixedWins": 19,
   "mixedLosses": 7,
   "genderWins": 14,
   "genderLosses": 19,
   "clutchWins": 9,
   "clutchLosses": 12,
   "winPct": 55.9,
   "diff": 95,
   "ppg": 19.3,
   "leagueRank": 71,
   "rating": 1,
   "ratingGames": 59,
   "confidence": 91,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "name": "Kenoa Tio",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 83,
   "wins": 46,
   "losses": 37,
   "pointsWon": 1590,
   "totalPointsAgainst": 1503,
   "mixedWins": 23,
   "mixedLosses": 16,
   "genderWins": 23,
   "genderLosses": 21,
   "clutchWins": 13,
   "clutchLosses": 16,
   "winPct": 55.4,
   "diff": 87,
   "ppg": 19.2,
   "leagueRank": 76,
   "rating": 0.6,
   "ratingGames": 83,
   "confidence": 93,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.7,
   "playerId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "name": "Andrew Wakefield",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 67,
   "wins": 37,
   "losses": 30,
   "pointsWon": 1265,
   "totalPointsAgainst": 1233,
   "mixedWins": 21,
   "mixedLosses": 14,
   "genderWins": 16,
   "genderLosses": 16,
   "clutchWins": 15,
   "clutchLosses": 14,
   "winPct": 55.2,
   "diff": 32,
   "ppg": 18.9,
   "leagueRank": 91,
   "rating": 1.2,
   "ratingGames": 67,
   "confidence": 92,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "name": "Rachel Alfano",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 27,
   "losses": 22,
   "pointsWon": 908,
   "totalPointsAgainst": 886,
   "mixedWins": 16,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 55.1,
   "diff": 22,
   "ppg": 18.5,
   "leagueRank": 93,
   "rating": 0.5,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "name": "Matthew Chen",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 207,
   "totalPointsAgainst": 212,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "winPct": 54.5,
   "diff": -5,
   "ppg": 18.8,
   "leagueRank": 183,
   "rating": -0.1,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Rahul Datta",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 19,
   "losses": 16,
   "pointsWon": 662,
   "totalPointsAgainst": 660,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 54.3,
   "diff": 2,
   "ppg": 18.9,
   "leagueRank": 96,
   "rating": 0.8,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 1.3,
   "playerId": "acb08227-47a5-40fc-b720-3531084980f6"
  },
  {
   "name": "Hugh Laroque",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 32,
   "losses": 27,
   "pointsWon": 1096,
   "totalPointsAgainst": 1064,
   "mixedWins": 24,
   "mixedLosses": 14,
   "genderWins": 8,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 54.2,
   "diff": 32,
   "ppg": 18.6,
   "leagueRank": 89,
   "rating": 0.3,
   "ratingGames": 59,
   "confidence": 90,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "93c534a1-a23c-451f-8c73-3515f8a19bd5"
  },
  {
   "name": "Manny Lai",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 80,
   "wins": 43,
   "losses": 37,
   "pointsWon": 1519,
   "totalPointsAgainst": 1424,
   "mixedWins": 20,
   "mixedLosses": 20,
   "genderWins": 23,
   "genderLosses": 17,
   "clutchWins": 7,
   "clutchLosses": 15,
   "winPct": 53.8,
   "diff": 95,
   "ppg": 19,
   "leagueRank": 80,
   "rating": 2.1,
   "ratingGames": 80,
   "confidence": 93,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "name": "Sidd Pathare",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 24,
   "losses": 21,
   "pointsWon": 861,
   "totalPointsAgainst": 839,
   "mixedWins": 12,
   "mixedLosses": 9,
   "genderWins": 12,
   "genderLosses": 12,
   "clutchWins": 11,
   "clutchLosses": 9,
   "winPct": 53.3,
   "diff": 22,
   "ppg": 19.1,
   "leagueRank": 83,
   "rating": 0.1,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.7,
   "playerId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "name": "Jessica Hendry",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 47,
   "wins": 25,
   "losses": 22,
   "pointsWon": 911,
   "totalPointsAgainst": 865,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 53.2,
   "diff": 46,
   "ppg": 19.4,
   "leagueRank": 79,
   "rating": 2.1,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "name": "Arianna Haresign",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 79,
   "wins": 42,
   "losses": 37,
   "pointsWon": 1474,
   "totalPointsAgainst": 1433,
   "mixedWins": 20,
   "mixedLosses": 22,
   "genderWins": 22,
   "genderLosses": 15,
   "clutchWins": 10,
   "clutchLosses": 13,
   "winPct": 53.2,
   "diff": 41,
   "ppg": 18.7,
   "leagueRank": 95,
   "rating": 0.8,
   "ratingGames": 79,
   "confidence": 93,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7,
   "playerId": "556f84fc-4f7c-4199-a104-6e906d71605c"
  },
  {
   "name": "Anthony Ursino",
   "gender": "Male",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 17,
   "losses": 15,
   "pointsWon": 595,
   "totalPointsAgainst": 571,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 11,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 53.1,
   "diff": 24,
   "ppg": 18.6,
   "leagueRank": 92,
   "rating": 0.6,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "1406ff1f-3597-4128-a629-7dfd1dfe1323"
  },
  {
   "name": "Thomas Connolly",
   "gender": "Male",
   "team": "Flemington",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 70,
   "wins": 37,
   "losses": 33,
   "pointsWon": 1277,
   "totalPointsAgainst": 1279,
   "mixedWins": 16,
   "mixedLosses": 17,
   "genderWins": 21,
   "genderLosses": 16,
   "clutchWins": 15,
   "clutchLosses": 10,
   "winPct": 52.9,
   "diff": -2,
   "ppg": 18.2,
   "leagueRank": 105,
   "rating": -0.3,
   "ratingGames": 70,
   "confidence": 92,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "name": "Nate Otto",
   "gender": "Male",
   "team": "Flemington",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 68,
   "wins": 36,
   "losses": 32,
   "pointsWon": 1255,
   "totalPointsAgainst": 1270,
   "mixedWins": 21,
   "mixedLosses": 17,
   "genderWins": 15,
   "genderLosses": 15,
   "clutchWins": 16,
   "clutchLosses": 12,
   "winPct": 52.9,
   "diff": -15,
   "ppg": 18.5,
   "leagueRank": 108,
   "rating": 0.2,
   "ratingGames": 68,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "70e57f6a-3b00-4620-8c63-b1445cf7aab2"
  },
  {
   "name": "Richa Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 74,
   "wins": 39,
   "losses": 35,
   "pointsWon": 1336,
   "totalPointsAgainst": 1345,
   "mixedWins": 24,
   "mixedLosses": 12,
   "genderWins": 15,
   "genderLosses": 23,
   "clutchWins": 17,
   "clutchLosses": 8,
   "winPct": 52.7,
   "diff": -9,
   "ppg": 18.1,
   "leagueRank": 110,
   "rating": 0,
   "ratingGames": 74,
   "confidence": 92,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "name": "Tyler Arsenault",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 78,
   "wins": 41,
   "losses": 37,
   "pointsWon": 1468,
   "totalPointsAgainst": 1474,
   "mixedWins": 22,
   "mixedLosses": 16,
   "genderWins": 19,
   "genderLosses": 21,
   "clutchWins": 21,
   "clutchLosses": 11,
   "winPct": 52.6,
   "diff": -6,
   "ppg": 18.8,
   "leagueRank": 103,
   "rating": 1.6,
   "ratingGames": 78,
   "confidence": 93,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "name": "Patrick Ceccacci",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 32,
   "losses": 29,
   "pointsWon": 1144,
   "totalPointsAgainst": 1088,
   "mixedWins": 16,
   "mixedLosses": 14,
   "genderWins": 16,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 52.5,
   "diff": 56,
   "ppg": 18.8,
   "leagueRank": 84,
   "rating": -0.4,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "name": "Matthew Lucas",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 32,
   "losses": 29,
   "pointsWon": 1139,
   "totalPointsAgainst": 1129,
   "mixedWins": 13,
   "mixedLosses": 17,
   "genderWins": 19,
   "genderLosses": 12,
   "clutchWins": 11,
   "clutchLosses": 12,
   "winPct": 52.5,
   "diff": 10,
   "ppg": 18.7,
   "leagueRank": 102,
   "rating": 1.1,
   "ratingGames": 61,
   "confidence": 91,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "ce28bf66-5027-4f8b-b579-aa99d2ac96d3"
  },
  {
   "name": "Nahla Bernhardt",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 86,
   "wins": 45,
   "losses": 41,
   "pointsWon": 1601,
   "totalPointsAgainst": 1593,
   "mixedWins": 30,
   "mixedLosses": 13,
   "genderWins": 15,
   "genderLosses": 28,
   "clutchWins": 18,
   "clutchLosses": 13,
   "winPct": 52.3,
   "diff": 8,
   "ppg": 18.6,
   "leagueRank": 109,
   "rating": 2.1,
   "ratingGames": 86,
   "confidence": 93,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "name": "Michaela Pierznik",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 67,
   "wins": 35,
   "losses": 32,
   "pointsWon": 1262,
   "totalPointsAgainst": 1253,
   "mixedWins": 19,
   "mixedLosses": 16,
   "genderWins": 16,
   "genderLosses": 16,
   "clutchWins": 15,
   "clutchLosses": 7,
   "winPct": 52.2,
   "diff": 9,
   "ppg": 18.8,
   "leagueRank": 101,
   "rating": 0.7,
   "ratingGames": 67,
   "confidence": 92,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "name": "Christine Ferraez",
   "gender": "Female",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 24,
   "losses": 22,
   "pointsWon": 801,
   "totalPointsAgainst": 795,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 13,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 52.2,
   "diff": 6,
   "ppg": 17.4,
   "leagueRank": 112,
   "rating": -0.6,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.1,
   "playerId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "name": "Catherine Stewart",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 18,
   "losses": 17,
   "pointsWon": 649,
   "totalPointsAgainst": 629,
   "mixedWins": 13,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 51.4,
   "diff": 20,
   "ppg": 18.5,
   "leagueRank": 97,
   "rating": 0.7,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.8,
   "playerId": "112622af-3d12-4dba-ad36-7601c8e6021c"
  },
  {
   "name": "Jennifer Sanchez",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 74,
   "wins": 38,
   "losses": 36,
   "pointsWon": 1368,
   "totalPointsAgainst": 1392,
   "mixedWins": 16,
   "mixedLosses": 18,
   "genderWins": 22,
   "genderLosses": 18,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 51.4,
   "diff": -24,
   "ppg": 18.5,
   "leagueRank": 111,
   "rating": -0.4,
   "ratingGames": 74,
   "confidence": 92,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d"
  },
  {
   "name": "Zach Bowe",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 69,
   "wins": 35,
   "losses": 34,
   "pointsWon": 1300,
   "totalPointsAgainst": 1287,
   "mixedWins": 18,
   "mixedLosses": 19,
   "genderWins": 17,
   "genderLosses": 15,
   "clutchWins": 11,
   "clutchLosses": 12,
   "winPct": 50.7,
   "diff": 13,
   "ppg": 18.8,
   "leagueRank": 104,
   "rating": 1.3,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "name": "Keith Shedlock",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 36,
   "losses": 36,
   "pointsWon": 1354,
   "totalPointsAgainst": 1324,
   "mixedWins": 16,
   "mixedLosses": 18,
   "genderWins": 20,
   "genderLosses": 18,
   "clutchWins": 8,
   "clutchLosses": 14,
   "winPct": 50,
   "diff": 30,
   "ppg": 18.8,
   "leagueRank": 94,
   "rating": -1.5,
   "ratingGames": 72,
   "confidence": 92,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.1,
   "playerId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "name": "Elaine Bedell",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 80,
   "totalPointsAgainst": 67,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "1a7e1a70-9659-4424-b30b-d146c8ed3bd9",
   "winPct": 50,
   "diff": 13,
   "ppg": 20,
   "leagueRank": 171,
   "rating": 1.9,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Dhaval Bhavsar",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 103,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "93294277-1ed3-4757-973d-bb5c1c2a8898",
   "winPct": 50,
   "diff": 11,
   "ppg": 19,
   "leagueRank": 189,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Caitlyn Moore",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 117,
   "totalPointsAgainst": 108,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e",
   "winPct": 50,
   "diff": 9,
   "ppg": 19.5,
   "leagueRank": 176,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1.1
  },
  {
   "name": "Ethan Bakalinsky",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 151,
   "totalPointsAgainst": 143,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 8,
   "ppg": 18.9,
   "leagueRank": 193,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.9,
   "playerId": "49525e23-e8da-4563-a2f4-fed183fdfbd5"
  },
  {
   "name": "Elliott Albanese",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 112,
   "totalPointsAgainst": 105,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "winPct": 50,
   "diff": 7,
   "ppg": 18.7,
   "leagueRank": 185,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Nick Babinsky",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 141,
   "totalPointsAgainst": 153,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "9790dabb-8be3-48df-9fc4-eecb920ec98c",
   "winPct": 50,
   "diff": -12,
   "ppg": 17.6,
   "leagueRank": 210,
   "rating": -1.5,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Courtney Greener",
   "gender": "Female",
   "team": "Flemington",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 31,
   "losses": 32,
   "pointsWon": 1155,
   "totalPointsAgainst": 1115,
   "mixedWins": 18,
   "mixedLosses": 17,
   "genderWins": 13,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 13,
   "winPct": 49.2,
   "diff": 40,
   "ppg": 18.3,
   "leagueRank": 107,
   "rating": 0.3,
   "ratingGames": 63,
   "confidence": 91,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.5,
   "playerId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d"
  },
  {
   "name": "Patrick Ryan",
   "gender": "Male",
   "team": "Flemington",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 33,
   "losses": 36,
   "pointsWon": 1258,
   "totalPointsAgainst": 1281,
   "mixedWins": 16,
   "mixedLosses": 13,
   "genderWins": 17,
   "genderLosses": 23,
   "clutchWins": 11,
   "clutchLosses": 10,
   "winPct": 47.8,
   "diff": -23,
   "ppg": 18.2,
   "leagueRank": 119,
   "rating": 0.6,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "name": "Steven Maisonet",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 8,
   "losses": 9,
   "pointsWon": 323,
   "totalPointsAgainst": 322,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 47.1,
   "diff": 1,
   "ppg": 19,
   "leagueRank": 164,
   "rating": 0.2,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "d1bebcc0-9427-45af-9d16-cc023b5dd737"
  },
  {
   "name": "Amanda Ksiezopolski",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 16,
   "losses": 18,
   "pointsWon": 617,
   "totalPointsAgainst": 620,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 47.1,
   "diff": -3,
   "ppg": 18.1,
   "leagueRank": 116,
   "rating": 0.1,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.6,
   "playerId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "name": "Alex Abad",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 30,
   "losses": 34,
   "pointsWon": 1169,
   "totalPointsAgainst": 1178,
   "mixedWins": 15,
   "mixedLosses": 17,
   "genderWins": 15,
   "genderLosses": 17,
   "clutchWins": 6,
   "clutchLosses": 13,
   "winPct": 46.9,
   "diff": -9,
   "ppg": 18.3,
   "leagueRank": 117,
   "rating": 0.6,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "name": "Dylan Ashbach",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 81,
   "wins": 38,
   "losses": 43,
   "pointsWon": 1479,
   "totalPointsAgainst": 1507,
   "mixedWins": 18,
   "mixedLosses": 21,
   "genderWins": 20,
   "genderLosses": 22,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 46.9,
   "diff": -28,
   "ppg": 18.3,
   "leagueRank": 124,
   "rating": 1.8,
   "ratingGames": 81,
   "confidence": 93,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "name": "Geoff Watson",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 92,
   "wins": 43,
   "losses": 49,
   "pointsWon": 1705,
   "totalPointsAgainst": 1739,
   "mixedWins": 19,
   "mixedLosses": 26,
   "genderWins": 24,
   "genderLosses": 23,
   "clutchWins": 16,
   "clutchLosses": 21,
   "winPct": 46.7,
   "diff": -34,
   "ppg": 18.5,
   "leagueRank": 122,
   "rating": 2,
   "ratingGames": 92,
   "confidence": 93,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "41191982-ca10-4665-8eb2-6d5231b4a0c4"
  },
  {
   "name": "Mark Kilimnik",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 45,
   "wins": 21,
   "losses": 24,
   "pointsWon": 808,
   "totalPointsAgainst": 854,
   "mixedWins": 5,
   "mixedLosses": 17,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 46.7,
   "diff": -46,
   "ppg": 18,
   "leagueRank": 130,
   "rating": -0.8,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "name": "Alex Boory",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 13,
   "losses": 15,
   "pointsWon": 519,
   "totalPointsAgainst": 523,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 46.4,
   "diff": -4,
   "ppg": 18.5,
   "leagueRank": 136,
   "rating": -0.1,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "name": "Annemarie Mccartney",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 32,
   "losses": 37,
   "pointsWon": 1254,
   "totalPointsAgainst": 1288,
   "mixedWins": 16,
   "mixedLosses": 16,
   "genderWins": 16,
   "genderLosses": 21,
   "clutchWins": 7,
   "clutchLosses": 13,
   "winPct": 46.4,
   "diff": -34,
   "ppg": 18.2,
   "leagueRank": 123,
   "rating": 0,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "name": "Garv Singhal",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 25,
   "losses": 29,
   "pointsWon": 1012,
   "totalPointsAgainst": 1036,
   "mixedWins": 15,
   "mixedLosses": 12,
   "genderWins": 10,
   "genderLosses": 17,
   "clutchWins": 14,
   "clutchLosses": 13,
   "winPct": 46.3,
   "diff": -24,
   "ppg": 18.7,
   "leagueRank": 121,
   "rating": 1.3,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "name": "Cameron Barraco",
   "gender": "Female",
   "team": "Monroe",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 67,
   "wins": 31,
   "losses": 36,
   "pointsWon": 1203,
   "totalPointsAgainst": 1229,
   "mixedWins": 19,
   "mixedLosses": 16,
   "genderWins": 12,
   "genderLosses": 20,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 46.3,
   "diff": -26,
   "ppg": 18,
   "leagueRank": 120,
   "rating": -1.5,
   "ratingGames": 67,
   "confidence": 92,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "name": "Stefanie Sohosky",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 232,
   "totalPointsAgainst": 211,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 46.2,
   "diff": 21,
   "ppg": 17.8,
   "leagueRank": 181,
   "rating": 1.1,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.7,
   "playerId": "65aabbc7-a06a-4074-a5df-5b0938ede28a"
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 24,
   "losses": 28,
   "pointsWon": 932,
   "totalPointsAgainst": 915,
   "mixedWins": 14,
   "mixedLosses": 12,
   "genderWins": 10,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 46.2,
   "diff": 17,
   "ppg": 17.9,
   "leagueRank": 118,
   "rating": 0.5,
   "ratingGames": 52,
   "confidence": 90,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
  },
  {
   "name": "Joseph Lobiondo",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 12,
   "losses": 14,
   "pointsWon": 460,
   "totalPointsAgainst": 498,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 46.2,
   "diff": -38,
   "ppg": 17.7,
   "leagueRank": 144,
   "rating": -2.3,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0,
   "playerId": "031ef107-13a7-436a-9be5-5004d1aec615"
  },
  {
   "name": "Ben Mead",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 18,
   "losses": 21,
   "pointsWon": 710,
   "totalPointsAgainst": 758,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 46.2,
   "diff": -48,
   "ppg": 18.2,
   "leagueRank": 100,
   "rating": 0.5,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.4,
   "playerId": "7858dda8-168b-4a84-8d5d-7a6571e9313a"
  },
  {
   "name": "Chanda Mccoy",
   "gender": "Female",
   "team": "Flemington",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 30,
   "losses": 36,
   "pointsWon": 1184,
   "totalPointsAgainst": 1224,
   "mixedWins": 15,
   "mixedLosses": 17,
   "genderWins": 15,
   "genderLosses": 19,
   "clutchWins": 7,
   "clutchLosses": 11,
   "winPct": 45.5,
   "diff": -40,
   "ppg": 17.9,
   "leagueRank": 128,
   "rating": 0.1,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "name": "Ross Switkes",
   "gender": "Male",
   "team": "Flemington",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 75,
   "wins": 34,
   "losses": 41,
   "pointsWon": 1375,
   "totalPointsAgainst": 1408,
   "mixedWins": 16,
   "mixedLosses": 21,
   "genderWins": 18,
   "genderLosses": 20,
   "clutchWins": 12,
   "clutchLosses": 12,
   "winPct": 45.3,
   "diff": -33,
   "ppg": 18.3,
   "leagueRank": 125,
   "rating": 0.2,
   "ratingGames": 75,
   "confidence": 93,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "name": "Zachary Adler",
   "gender": "Male",
   "team": "Home Court",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 23,
   "losses": 28,
   "pointsWon": 958,
   "totalPointsAgainst": 942,
   "mixedWins": 13,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 16,
   "winPct": 45.1,
   "diff": 16,
   "ppg": 18.8,
   "leagueRank": 114,
   "rating": 0.7,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.8,
   "playerId": "1a45849d-879b-40a2-a0df-ec262414d1c3"
  },
  {
   "name": "Coby Golinkoff",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 17,
   "losses": 21,
   "pointsWon": 711,
   "totalPointsAgainst": 711,
   "mixedWins": 6,
   "mixedLosses": 14,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 44.7,
   "diff": 0,
   "ppg": 18.7,
   "leagueRank": 115,
   "rating": 0.2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "abe67fc6-e179-4ebc-babb-052f0666086b"
  },
  {
   "name": "Conor Landrigan",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 84,
   "wins": 37,
   "losses": 47,
   "pointsWon": 1529,
   "totalPointsAgainst": 1578,
   "mixedWins": 16,
   "mixedLosses": 28,
   "genderWins": 21,
   "genderLosses": 19,
   "clutchWins": 9,
   "clutchLosses": 13,
   "winPct": 44,
   "diff": -49,
   "ppg": 18.2,
   "leagueRank": 133,
   "rating": 0.6,
   "ratingGames": 84,
   "confidence": 93,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "name": "Jeffrey Lyons",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 303,
   "totalPointsAgainst": 308,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 43.8,
   "diff": -5,
   "ppg": 18.9,
   "leagueRank": 168,
   "rating": -0.5,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "100d1860-64f4-4cbe-bc6e-985509a01143"
  },
  {
   "name": "Drew Von Bargen",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 28,
   "losses": 37,
   "pointsWon": 1184,
   "totalPointsAgainst": 1248,
   "mixedWins": 19,
   "mixedLosses": 16,
   "genderWins": 9,
   "genderLosses": 21,
   "clutchWins": 14,
   "clutchLosses": 11,
   "winPct": 43.1,
   "diff": -64,
   "ppg": 18.2,
   "leagueRank": 134,
   "rating": -0.1,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "35880e0f-aba0-4a37-85fe-e09b057d63b2"
  },
  {
   "name": "Casey Olsen",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 121,
   "totalPointsAgainst": 131,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "5b30db7c-0cad-4f1d-b364-e4b5d7bfa965",
   "winPct": 42.9,
   "diff": -10,
   "ppg": 17.3,
   "leagueRank": 221,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Charlotte Healey",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 83,
   "wins": 35,
   "losses": 48,
   "pointsWon": 1512,
   "totalPointsAgainst": 1544,
   "mixedWins": 24,
   "mixedLosses": 21,
   "genderWins": 11,
   "genderLosses": 27,
   "clutchWins": 7,
   "clutchLosses": 24,
   "winPct": 42.2,
   "diff": -32,
   "ppg": 18.2,
   "leagueRank": 131,
   "rating": 0.1,
   "ratingGames": 84,
   "confidence": 93,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "name": "Amalia Ditrapani",
   "gender": "Female",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 15,
   "losses": 22,
   "pointsWon": 636,
   "totalPointsAgainst": 649,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 8,
   "winPct": 40.5,
   "diff": -13,
   "ppg": 17.2,
   "leagueRank": 135,
   "rating": -0.5,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "32ac3308-4ddd-496b-8942-ca2422322c06"
  },
  {
   "name": "Sommer Peterson",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 183,
   "totalPointsAgainst": 188,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -5,
   "ppg": 18.3,
   "leagueRank": 199,
   "rating": 1.3,
   "ratingGames": 10,
   "confidence": 68,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.3,
   "playerId": "d2675a15-8865-47ad-ac65-635217749262"
  },
  {
   "name": "Lauren Mercado",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 85,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "winPct": 40,
   "diff": -16,
   "ppg": 17,
   "leagueRank": 230,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Heather Gallagher",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 8,
   "losses": 12,
   "pointsWon": 357,
   "totalPointsAgainst": 383,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -26,
   "ppg": 17.9,
   "leagueRank": 173,
   "rating": 0.4,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "96c8ef56-bc40-42e9-bb6e-8054e4b27269"
  },
  {
   "name": "Julia Plein",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 18,
   "losses": 28,
   "pointsWon": 800,
   "totalPointsAgainst": 872,
   "mixedWins": 5,
   "mixedLosses": 16,
   "genderWins": 13,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 39.1,
   "diff": -72,
   "ppg": 17.4,
   "leagueRank": 143,
   "rating": -0.1,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "name": "Corey Reinhart",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 225,
   "totalPointsAgainst": 255,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 38.5,
   "diff": -30,
   "ppg": 17.3,
   "leagueRank": 213,
   "rating": -1.7,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "e67b0b81-0f98-44b5-b09f-3dc19785e36d"
  },
  {
   "name": "Jacob Rosengarten",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 204,
   "totalPointsAgainst": 260,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc",
   "winPct": 38.5,
   "diff": -56,
   "ppg": 15.7,
   "leagueRank": 228,
   "rating": -2.9,
   "ratingGames": 13,
   "confidence": 74,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Matthew Matro",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 71,
   "wins": 27,
   "losses": 44,
   "pointsWon": 1272,
   "totalPointsAgainst": 1340,
   "mixedWins": 12,
   "mixedLosses": 24,
   "genderWins": 15,
   "genderLosses": 20,
   "clutchWins": 8,
   "clutchLosses": 16,
   "winPct": 38,
   "diff": -68,
   "ppg": 17.9,
   "leagueRank": 137,
   "rating": 0.9,
   "ratingGames": 71,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "name": "Jase Volz",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 11,
   "losses": 18,
   "pointsWon": 518,
   "totalPointsAgainst": 553,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 37.9,
   "diff": -35,
   "ppg": 17.9,
   "leagueRank": 138,
   "rating": -1,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d"
  },
  {
   "name": "Zach Knapp",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 148,
   "totalPointsAgainst": 146,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "52084d79-6f78-408c-a7e0-310301b67043",
   "winPct": 37.5,
   "diff": 2,
   "ppg": 18.5,
   "leagueRank": 206,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1
  },
  {
   "name": "Michael Swell",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 15,
   "losses": 26,
   "pointsWon": 724,
   "totalPointsAgainst": 798,
   "mixedWins": 8,
   "mixedLosses": 12,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 36.6,
   "diff": -74,
   "ppg": 17.7,
   "leagueRank": 146,
   "rating": -0.5,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "name": "Jesse Peterson",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 189,
   "totalPointsAgainst": 214,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 36.4,
   "diff": -25,
   "ppg": 17.2,
   "leagueRank": 220,
   "rating": 0.1,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.3,
   "playerId": "3b223a49-ee59-4ef2-b8aa-80ef6094acd6"
  },
  {
   "name": "Kathleen Dougherty",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 24,
   "losses": 42,
   "pointsWon": 1122,
   "totalPointsAgainst": 1293,
   "mixedWins": 13,
   "mixedLosses": 18,
   "genderWins": 11,
   "genderLosses": 24,
   "clutchWins": 12,
   "clutchLosses": 11,
   "winPct": 36.4,
   "diff": -171,
   "ppg": 17,
   "leagueRank": 152,
   "rating": -2.1,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "name": "Becca Bender",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 91,
   "wins": 33,
   "losses": 58,
   "pointsWon": 1582,
   "totalPointsAgainst": 1760,
   "mixedWins": 23,
   "mixedLosses": 24,
   "genderWins": 10,
   "genderLosses": 34,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 36.3,
   "diff": -178,
   "ppg": 17.4,
   "leagueRank": 149,
   "rating": -0.8,
   "ratingGames": 91,
   "confidence": 93,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "name": "Emily Miller",
   "gender": "Female",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 9,
   "losses": 17,
   "pointsWon": 452,
   "totalPointsAgainst": 485,
   "mixedWins": 1,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 34.6,
   "diff": -33,
   "ppg": 17.4,
   "leagueRank": 163,
   "rating": -1.4,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.7,
   "playerId": "6ddfb7dc-84b5-403c-b5dc-6fe39bc3852c"
  },
  {
   "name": "Cristi Landrigan",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 84,
   "wins": 29,
   "losses": 55,
   "pointsWon": 1491,
   "totalPointsAgainst": 1628,
   "mixedWins": 15,
   "mixedLosses": 28,
   "genderWins": 14,
   "genderLosses": 27,
   "clutchWins": 12,
   "clutchLosses": 15,
   "winPct": 34.5,
   "diff": -137,
   "ppg": 17.8,
   "leagueRank": 148,
   "rating": 0.3,
   "ratingGames": 84,
   "confidence": 93,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "1be028eb-1b92-4961-b508-fa0879c78017"
  },
  {
   "name": "Claudya Elefante",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 17,
   "losses": 33,
   "pointsWon": 847,
   "totalPointsAgainst": 986,
   "mixedWins": 11,
   "mixedLosses": 17,
   "genderWins": 6,
   "genderLosses": 16,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 34,
   "diff": -139,
   "ppg": 16.9,
   "leagueRank": 161,
   "rating": -0.3,
   "ratingGames": 50,
   "confidence": 90,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.1,
   "playerId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "name": "Ramy Lawandy",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 113,
   "totalPointsAgainst": 119,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "71cff50c-738e-468b-823e-e7b1cf5ded73",
   "winPct": 33.3,
   "diff": -6,
   "ppg": 18.8,
   "leagueRank": 223,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 58,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Drew Sutton",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 111,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -11,
   "ppg": 18.5,
   "leagueRank": 227,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.7,
   "playerId": "c984dd20-74e5-425e-b700-13a91dc1aa13"
  },
  {
   "name": "Mark Pabalan",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 102,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "e13dcb52-e05d-4168-8a79-781a3aec9b2c",
   "winPct": 33.3,
   "diff": -20,
   "ppg": 17,
   "leagueRank": 235,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 58,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Peter Hwang",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 3,
   "losses": 6,
   "pointsWon": 153,
   "totalPointsAgainst": 179,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -26,
   "ppg": 17,
   "leagueRank": 233,
   "rating": -1.6,
   "ratingGames": 9,
   "confidence": 65,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "ea6e193e-df62-4132-8c46-cfc9247f7a00"
  },
  {
   "name": "Tim Le",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 192,
   "totalPointsAgainst": 230,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -38,
   "ppg": 16,
   "leagueRank": 232,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0,
   "playerId": "6326488b-c7f8-4fc7-8aed-6274b7366d07"
  },
  {
   "name": "Eric Kutzin",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 9,
   "losses": 18,
   "pointsWon": 499,
   "totalPointsAgainst": 537,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 33.3,
   "diff": -38,
   "ppg": 18.5,
   "leagueRank": 160,
   "rating": -0.3,
   "ratingGames": 27,
   "confidence": 85,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.3,
   "playerId": "c62728d5-ec2b-4ce7-b0e9-83a34fa325b1"
  },
  {
   "name": "Joel Phillips",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 14,
   "losses": 28,
   "pointsWon": 745,
   "totalPointsAgainst": 832,
   "mixedWins": 9,
   "mixedLosses": 13,
   "genderWins": 5,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 33.3,
   "diff": -87,
   "ppg": 17.7,
   "leagueRank": 151,
   "rating": -0.3,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9,
   "playerId": "8f292eb8-a014-4618-9c0e-114c26463233"
  },
  {
   "name": "Alyssa Tartaglia",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 93,
   "wins": 31,
   "losses": 62,
   "pointsWon": 1632,
   "totalPointsAgainst": 1835,
   "mixedWins": 14,
   "mixedLosses": 33,
   "genderWins": 17,
   "genderLosses": 29,
   "clutchWins": 12,
   "clutchLosses": 19,
   "winPct": 33.3,
   "diff": -203,
   "ppg": 17.5,
   "leagueRank": 153,
   "rating": -0.8,
   "ratingGames": 93,
   "confidence": 94,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.7,
   "playerId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "name": "Ethan Henigan",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 19,
   "losses": 39,
   "pointsWon": 1003,
   "totalPointsAgainst": 1131,
   "mixedWins": 11,
   "mixedLosses": 19,
   "genderWins": 8,
   "genderLosses": 20,
   "clutchWins": 7,
   "clutchLosses": 10,
   "winPct": 32.8,
   "diff": -128,
   "ppg": 17.3,
   "leagueRank": 156,
   "rating": -1,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23"
  },
  {
   "name": "Katarzyna Clevenger",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 71,
   "wins": 23,
   "losses": 48,
   "pointsWon": 1230,
   "totalPointsAgainst": 1365,
   "mixedWins": 11,
   "mixedLosses": 25,
   "genderWins": 12,
   "genderLosses": 23,
   "clutchWins": 5,
   "clutchLosses": 14,
   "winPct": 32.4,
   "diff": -135,
   "ppg": 17.3,
   "leagueRank": 155,
   "rating": 0.5,
   "ratingGames": 71,
   "confidence": 92,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "name": "Dominique Damerjian",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 18,
   "losses": 38,
   "pointsWon": 972,
   "totalPointsAgainst": 1108,
   "mixedWins": 10,
   "mixedLosses": 19,
   "genderWins": 8,
   "genderLosses": 19,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 32.1,
   "diff": -136,
   "ppg": 17.4,
   "leagueRank": 158,
   "rating": -1.2,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "733e7853-0fc0-40ee-a7ca-a0f00ef6fa7c"
  },
  {
   "name": "Margaret Robb",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 13,
   "losses": 28,
   "pointsWon": 690,
   "totalPointsAgainst": 803,
   "mixedWins": 5,
   "mixedLosses": 15,
   "genderWins": 8,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 31.7,
   "diff": -113,
   "ppg": 16.8,
   "leagueRank": 165,
   "rating": -0.7,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.2,
   "playerId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "name": "Jeff Wiedemann",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 6,
   "losses": 13,
   "pointsWon": 318,
   "totalPointsAgainst": 369,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 31.6,
   "diff": -51,
   "ppg": 16.7,
   "leagueRank": 212,
   "rating": -2.1,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "db67ae5b-a83f-4a72-a2da-5a510171f31a"
  },
  {
   "name": "Brittany Hall",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 288,
   "totalPointsAgainst": 321,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 31.3,
   "diff": -33,
   "ppg": 18,
   "leagueRank": 204,
   "rating": -1.3,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0,
   "playerId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "name": "Samuel Levinson",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 14,
   "losses": 31,
   "pointsWon": 737,
   "totalPointsAgainst": 884,
   "mixedWins": 8,
   "mixedLosses": 15,
   "genderWins": 6,
   "genderLosses": 16,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 31.1,
   "diff": -147,
   "ppg": 16.4,
   "leagueRank": 167,
   "rating": -1.4,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.2,
   "playerId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "name": "Jerry Hine",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 506,
   "totalPointsAgainst": 565,
   "mixedWins": 2,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 31,
   "diff": -59,
   "ppg": 17.4,
   "leagueRank": 154,
   "rating": -0.5,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "2f7417e0-7b26-4846-a1f4-9901c27bea7e"
  },
  {
   "name": "Lilie Sen",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 71,
   "wins": 22,
   "losses": 49,
   "pointsWon": 1220,
   "totalPointsAgainst": 1404,
   "mixedWins": 14,
   "mixedLosses": 19,
   "genderWins": 8,
   "genderLosses": 30,
   "clutchWins": 12,
   "clutchLosses": 15,
   "winPct": 31,
   "diff": -184,
   "ppg": 17.2,
   "leagueRank": 162,
   "rating": -1,
   "ratingGames": 71,
   "confidence": 92,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.8,
   "playerId": "3aa34138-1989-4d89-b656-3e0c44b23b6f"
  },
  {
   "name": "Johny Mario",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 7,
   "losses": 16,
   "pointsWon": 392,
   "totalPointsAgainst": 442,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 30.4,
   "diff": -50,
   "ppg": 17,
   "leagueRank": 196,
   "rating": -0.2,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "name": "Kaley Lai",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 8,
   "losses": 19,
   "pointsWon": 456,
   "totalPointsAgainst": 525,
   "mixedWins": 6,
   "mixedLosses": 11,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 29.6,
   "diff": -69,
   "ppg": 16.9,
   "leagueRank": 187,
   "rating": -1.7,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "354f7b98-2207-458f-af42-3e8a7a3630be"
  },
  {
   "name": "Saif Sarwar",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 14,
   "losses": 34,
   "pointsWon": 801,
   "totalPointsAgainst": 953,
   "mixedWins": 6,
   "mixedLosses": 21,
   "genderWins": 8,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 29.2,
   "diff": -152,
   "ppg": 16.7,
   "leagueRank": 172,
   "rating": -0.3,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.4,
   "playerId": "84375a64-3885-43be-ba98-0f520f51c11b"
  },
  {
   "name": "Joey Angelson",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 87,
   "wins": 25,
   "losses": 62,
   "pointsWon": 1377,
   "totalPointsAgainst": 1686,
   "mixedWins": 13,
   "mixedLosses": 33,
   "genderWins": 12,
   "genderLosses": 29,
   "clutchWins": 8,
   "clutchLosses": 12,
   "winPct": 28.7,
   "diff": -309,
   "ppg": 15.8,
   "leagueRank": 184,
   "rating": -0.7,
   "ratingGames": 87,
   "confidence": 93,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "name": "Annie Frame",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 116,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "548d19a2-6a90-4d8c-a7b1-f18cea65cc23",
   "winPct": 28.6,
   "diff": -25,
   "ppg": 16.6,
   "leagueRank": 237,
   "rating": -2.8,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Joshua Ahn",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 13,
   "losses": 33,
   "pointsWon": 771,
   "totalPointsAgainst": 912,
   "mixedWins": 7,
   "mixedLosses": 17,
   "genderWins": 6,
   "genderLosses": 16,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 28.3,
   "diff": -141,
   "ppg": 16.8,
   "leagueRank": 174,
   "rating": 0.1,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.5,
   "playerId": "fff3fe71-d4a6-4103-9290-0ef57035471c"
  },
  {
   "name": "Melody Grohotolski",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 9,
   "losses": 24,
   "pointsWon": 545,
   "totalPointsAgainst": 666,
   "mixedWins": 3,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 27.3,
   "diff": -121,
   "ppg": 16.5,
   "leagueRank": 178,
   "rating": -2,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "98c341d7-59e6-4f63-abf0-8bebd5644186"
  },
  {
   "name": "Julia Sternberg",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 10,
   "losses": 27,
   "pointsWon": 575,
   "totalPointsAgainst": 740,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 27,
   "diff": -165,
   "ppg": 15.5,
   "leagueRank": 191,
   "rating": -2.3,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.1,
   "playerId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "name": "Simon Rosenwasser",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 14,
   "losses": 38,
   "pointsWon": 840,
   "totalPointsAgainst": 1022,
   "mixedWins": 7,
   "mixedLosses": 20,
   "genderWins": 7,
   "genderLosses": 18,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 26.9,
   "diff": -182,
   "ppg": 16.2,
   "leagueRank": 182,
   "rating": -1.2,
   "ratingGames": 52,
   "confidence": 90,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.4,
   "playerId": "369dca37-2d15-4559-96d1-26a78df236a1"
  },
  {
   "name": "Nicole Devine",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 4,
   "losses": 11,
   "pointsWon": 247,
   "totalPointsAgainst": 301,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "2ce3e665-accd-487a-b17d-093382698f90",
   "winPct": 26.7,
   "diff": -54,
   "ppg": 16.5,
   "leagueRank": 224,
   "rating": -1.8,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Adrienne Butrymowicz",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 13,
   "losses": 36,
   "pointsWon": 781,
   "totalPointsAgainst": 955,
   "mixedWins": 3,
   "mixedLosses": 21,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 26.5,
   "diff": -174,
   "ppg": 15.9,
   "leagueRank": 186,
   "rating": -1.1,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "279df046-e022-4adf-a5ea-4072a29d9622"
  },
  {
   "name": "Eva Danieli",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 16,
   "losses": 45,
   "pointsWon": 933,
   "totalPointsAgainst": 1227,
   "mixedWins": 9,
   "mixedLosses": 21,
   "genderWins": 7,
   "genderLosses": 24,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 26.2,
   "diff": -294,
   "ppg": 15.3,
   "leagueRank": 194,
   "rating": -2.7,
   "ratingGames": 61,
   "confidence": 91,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.2,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "name": "Brian Strehle",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 6,
   "losses": 17,
   "pointsWon": 384,
   "totalPointsAgainst": 458,
   "mixedWins": 1,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 26.1,
   "diff": -74,
   "ppg": 16.7,
   "leagueRank": 211,
   "rating": -0.7,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "4565a452-004a-47c0-9700-aab647415acf"
  },
  {
   "name": "Gog Boonswang",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 70,
   "wins": 18,
   "losses": 52,
   "pointsWon": 1149,
   "totalPointsAgainst": 1366,
   "mixedWins": 10,
   "mixedLosses": 24,
   "genderWins": 8,
   "genderLosses": 28,
   "clutchWins": 4,
   "clutchLosses": 11,
   "winPct": 25.7,
   "diff": -217,
   "ppg": 16.4,
   "leagueRank": 175,
   "rating": -2.2,
   "ratingGames": 70,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68"
  },
  {
   "name": "Maddie Haines",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 134,
   "totalPointsAgainst": 163,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "107ebcc3-6f2a-4d8a-b388-413b9a4b0439",
   "winPct": 25,
   "diff": -29,
   "ppg": 16.8,
   "leagueRank": 242,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Jay Rohatgi",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 130,
   "totalPointsAgainst": 160,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "f5831f41-366b-4666-b780-448fc7971ad7",
   "winPct": 25,
   "diff": -30,
   "ppg": 16.3,
   "leagueRank": 244,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 2
  },
  {
   "name": "Erika Richards",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 282,
   "totalPointsAgainst": 322,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "winPct": 25,
   "diff": -40,
   "ppg": 17.6,
   "leagueRank": 215,
   "rating": -0.9,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Dottie Kelly",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 263,
   "totalPointsAgainst": 304,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -41,
   "ppg": 16.4,
   "leagueRank": 222,
   "rating": -0.7,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.4,
   "playerId": "57a09a98-991d-47a7-a13d-fb2afa6bd8ef"
  },
  {
   "name": "Christa Phillips",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 7,
   "losses": 21,
   "pointsWon": 455,
   "totalPointsAgainst": 564,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 25,
   "diff": -109,
   "ppg": 16.3,
   "leagueRank": 203,
   "rating": -0.2,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.4,
   "playerId": "7477b471-93f8-438f-9266-69bad2054cd9"
  },
  {
   "name": "Rich Gaborow",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 7,
   "losses": 21,
   "pointsWon": 450,
   "totalPointsAgainst": 564,
   "mixedWins": 3,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -114,
   "ppg": 16.1,
   "leagueRank": 205,
   "rating": -0.8,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.7,
   "playerId": "4482c5d0-0106-41d5-8214-d5e0aabb0d4f"
  },
  {
   "name": "Anthony Leung",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 18,
   "losses": 54,
   "pointsWon": 1197,
   "totalPointsAgainst": 1446,
   "mixedWins": 4,
   "mixedLosses": 25,
   "genderWins": 14,
   "genderLosses": 29,
   "clutchWins": 7,
   "clutchLosses": 13,
   "winPct": 25,
   "diff": -249,
   "ppg": 16.6,
   "leagueRank": 188,
   "rating": 0.2,
   "ratingGames": 73,
   "confidence": 92,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.7,
   "playerId": "48457f37-29a2-47e7-8b2e-62316ad44feb"
  },
  {
   "name": "Alicia Reed",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 9,
   "losses": 28,
   "pointsWon": 630,
   "totalPointsAgainst": 734,
   "mixedWins": 3,
   "mixedLosses": 15,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 24.3,
   "diff": -104,
   "ppg": 17,
   "leagueRank": 169,
   "rating": -1.3,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "3bebe02b-0d94-423c-b9c2-3420004a6d18"
  },
  {
   "name": "Vi Duong",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 6,
   "losses": 19,
   "pointsWon": 392,
   "totalPointsAgainst": 503,
   "mixedWins": 2,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 24,
   "diff": -111,
   "ppg": 15.7,
   "leagueRank": 208,
   "rating": -2,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1,
   "playerId": "b26cb702-4719-4bd5-bc2f-f4210cf25de4"
  },
  {
   "name": "Ashwin Korde",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 8,
   "losses": 27,
   "pointsWon": 573,
   "totalPointsAgainst": 698,
   "mixedWins": 4,
   "mixedLosses": 15,
   "genderWins": 4,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 22.9,
   "diff": -125,
   "ppg": 16.4,
   "leagueRank": 180,
   "rating": -4,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "name": "Daniel Gallegos",
   "gender": "Male",
   "team": "Pickle Jar",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 4,
   "losses": 14,
   "pointsWon": 319,
   "totalPointsAgainst": 359,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 22.2,
   "diff": -40,
   "ppg": 17.7,
   "leagueRank": 214,
   "rating": -1.4,
   "ratingGames": 18,
   "confidence": 79,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "name": "Jon Cedotal",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 5,
   "losses": 20,
   "pointsWon": 408,
   "totalPointsAgainst": 508,
   "mixedWins": 0,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 20,
   "diff": -100,
   "ppg": 16.3,
   "leagueRank": 207,
   "rating": -1.9,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "2a7a3b43-2d24-469a-b8a6-7f60da866270"
  },
  {
   "name": "Robert Khalev",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 9,
   "losses": 37,
   "pointsWon": 732,
   "totalPointsAgainst": 942,
   "mixedWins": 4,
   "mixedLosses": 21,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 6,
   "clutchLosses": 11,
   "winPct": 19.6,
   "diff": -210,
   "ppg": 15.9,
   "leagueRank": 197,
   "rating": -0.7,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.2,
   "playerId": "094c3b61-96e3-48c6-8172-10b7eaf528f4"
  },
  {
   "name": "Rachel Berger",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 7,
   "losses": 29,
   "pointsWon": 595,
   "totalPointsAgainst": 735,
   "mixedWins": 1,
   "mixedLosses": 15,
   "genderWins": 6,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 19.4,
   "diff": -140,
   "ppg": 16.5,
   "leagueRank": 192,
   "rating": -1.9,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "name": "Stephen Mcnamara",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 3,
   "losses": 13,
   "pointsWon": 250,
   "totalPointsAgainst": 329,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "245e949d-15e7-411e-9751-e19ca709f2cb",
   "winPct": 18.8,
   "diff": -79,
   "ppg": 15.6,
   "leagueRank": 234,
   "rating": -1.6,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 2.2
  },
  {
   "name": "Serena Martz",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 4,
   "losses": 18,
   "pointsWon": 286,
   "totalPointsAgainst": 444,
   "mixedWins": 1,
   "mixedLosses": 10,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 18.2,
   "diff": -158,
   "ppg": 13,
   "leagueRank": 252,
   "rating": -3.6,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.9,
   "playerId": "2db0eb6d-a738-4daa-9be3-8e7a535330ba"
  },
  {
   "name": "Lawrence Ly",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 10,
   "losses": 45,
   "pointsWon": 857,
   "totalPointsAgainst": 1113,
   "mixedWins": 0,
   "mixedLosses": 29,
   "genderWins": 10,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 18.2,
   "diff": -256,
   "ppg": 15.6,
   "leagueRank": 200,
   "rating": -1.5,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.5,
   "playerId": "a0a1cac1-7dc1-4058-bcc4-858517823a85"
  },
  {
   "name": "Nicholas Leung",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 11,
   "losses": 52,
   "pointsWon": 987,
   "totalPointsAgainst": 1288,
   "mixedWins": 2,
   "mixedLosses": 29,
   "genderWins": 9,
   "genderLosses": 23,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 17.5,
   "diff": -301,
   "ppg": 15.7,
   "leagueRank": 202,
   "rating": -1.3,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.6,
   "playerId": "583f4ed0-33f8-4e51-8642-089f7d7e0239"
  },
  {
   "name": "Braden Keith",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 104,
   "totalPointsAgainst": 123,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6",
   "winPct": 16.7,
   "diff": -19,
   "ppg": 17.3,
   "leagueRank": 241,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Lindsey Allumbaugh",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 95,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "6c8e2373-9549-4f25-9cbf-4264745eda64",
   "winPct": 16.7,
   "diff": -24,
   "ppg": 15.8,
   "leagueRank": 248,
   "rating": -2.2,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Mary Kate Kelly",
   "gender": "Female",
   "team": "Jersey Devil",
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
   "clutchLosses": 0,
   "playerId": "155e8c41-ac8a-4004-8169-5cca4a66f8d2",
   "winPct": 16.7,
   "diff": -24,
   "ppg": 16.7,
   "leagueRank": 247,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Rj Wohlbach",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 191,
   "totalPointsAgainst": 245,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "ade27a80-12bd-4b34-ba80-0b844b270c8f",
   "winPct": 16.7,
   "diff": -54,
   "ppg": 15.9,
   "leagueRank": 239,
   "rating": -2.8,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Sarah Nazario",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 161,
   "totalPointsAgainst": 248,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "d457bcf7-383d-4b25-a7a9-a456e5803087",
   "winPct": 16.7,
   "diff": -87,
   "ppg": 13.4,
   "leagueRank": 255,
   "rating": -1.6,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Matt Schall",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 9,
   "losses": 46,
   "pointsWon": 858,
   "totalPointsAgainst": 1118,
   "mixedWins": 4,
   "mixedLosses": 21,
   "genderWins": 5,
   "genderLosses": 25,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 16.4,
   "diff": -260,
   "ppg": 15.6,
   "leagueRank": 201,
   "rating": -1.8,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.9,
   "playerId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "name": "Robert Schimony",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 5,
   "losses": 26,
   "pointsWon": 493,
   "totalPointsAgainst": 633,
   "mixedWins": 1,
   "mixedLosses": 16,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 16.1,
   "diff": -140,
   "ppg": 15.9,
   "leagueRank": 198,
   "rating": -2.1,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "name": "Kerry Schaffer",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 5,
   "losses": 27,
   "pointsWon": 548,
   "totalPointsAgainst": 654,
   "mixedWins": 3,
   "mixedLosses": 13,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 15.6,
   "diff": -106,
   "ppg": 17.1,
   "leagueRank": 190,
   "rating": -2.9,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744"
  },
  {
   "name": "Rebecca Arleth",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 7,
   "losses": 40,
   "pointsWon": 714,
   "totalPointsAgainst": 950,
   "mixedWins": 3,
   "mixedLosses": 20,
   "genderWins": 4,
   "genderLosses": 20,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 14.9,
   "diff": -236,
   "ppg": 15.2,
   "leagueRank": 209,
   "rating": -2.8,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46"
  },
  {
   "name": "Austin Gow",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 118,
   "totalPointsAgainst": 142,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "winPct": 14.3,
   "diff": -24,
   "ppg": 16.9,
   "leagueRank": 245,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Sara Synn",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 98,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90",
   "winPct": 14.3,
   "diff": -47,
   "ppg": 14,
   "leagueRank": 265,
   "rating": -2.4,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Sebastian Ferrer",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 201,
   "totalPointsAgainst": 284,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -83,
   "ppg": 14.4,
   "leagueRank": 251,
   "rating": -1.7,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.1,
   "playerId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a"
  },
  {
   "name": "Robyn Himelstein",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 2,
   "losses": 13,
   "pointsWon": 227,
   "totalPointsAgainst": 304,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "950366ff-1da8-4617-b0d4-0ef68aefd473",
   "winPct": 13.3,
   "diff": -77,
   "ppg": 15.1,
   "leagueRank": 258,
   "rating": -1.3,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 2
  },
  {
   "name": "Liana Rose",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 2,
   "losses": 13,
   "pointsWon": 214,
   "totalPointsAgainst": 306,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "51f180a8-f6f7-4b6f-b409-e650739ba59e",
   "winPct": 13.3,
   "diff": -92,
   "ppg": 14.3,
   "leagueRank": 246,
   "rating": -1.6,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Adam Weinstock",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 142,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "c768dfd6-7463-45bb-a661-dc4074409315",
   "winPct": 12.5,
   "diff": -24,
   "ppg": 17.8,
   "leagueRank": 243,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 1
  },
  {
   "name": "Matt Levi",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 141,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "525c1c74-9391-4f92-abc8-4c7d1324dad1",
   "winPct": 12.5,
   "diff": -25,
   "ppg": 17.6,
   "leagueRank": 249,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Patricia Boyle",
   "gender": "Female",
   "team": "Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 124,
   "totalPointsAgainst": 161,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "9fca325b-c7aa-493e-bd24-a4b782073699",
   "winPct": 12.5,
   "diff": -37,
   "ppg": 15.5,
   "leagueRank": 253,
   "rating": -3.5,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Elise Van Ormer",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 121,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "959c8c5b-2b03-4809-b56c-40d9787e2554",
   "winPct": 12.5,
   "diff": -45,
   "ppg": 15.1,
   "leagueRank": 259,
   "rating": -2.9,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Tom Laiso",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 119,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "winPct": 12.5,
   "diff": -47,
   "ppg": 14.9,
   "leagueRank": 262,
   "rating": -2,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Stephen Conger",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 3,
   "losses": 22,
   "pointsWon": 395,
   "totalPointsAgainst": 515,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 12,
   "diff": -120,
   "ppg": 15.8,
   "leagueRank": 218,
   "rating": -3,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "24e70ef7-b98e-459e-8a19-19a2b66a054e"
  },
  {
   "name": "Cami Lee",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 8,
   "losses": 64,
   "pointsWon": 1028,
   "totalPointsAgainst": 1480,
   "mixedWins": 6,
   "mixedLosses": 29,
   "genderWins": 2,
   "genderLosses": 35,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 11.1,
   "diff": -452,
   "ppg": 14.3,
   "leagueRank": 219,
   "rating": -2.8,
   "ratingGames": 72,
   "confidence": 92,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.5,
   "playerId": "fe88c083-3162-4d64-901c-710c2e0ef84c"
  },
  {
   "name": "Drew Kolb",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 139,
   "totalPointsAgainst": 204,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 10,
   "diff": -65,
   "ppg": 13.9,
   "leagueRank": 256,
   "rating": -3.2,
   "ratingGames": 10,
   "confidence": 68,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "13f4a12a-1af3-4b0a-92b9-48ffe2b9ad64"
  },
  {
   "name": "Helen Liu",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 139,
   "totalPointsAgainst": 208,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 10,
   "diff": -69,
   "ppg": 13.9,
   "leagueRank": 257,
   "rating": -3.1,
   "ratingGames": 10,
   "confidence": 69,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131"
  },
  {
   "name": "Ann Betterton",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 81,
   "wins": 8,
   "losses": 73,
   "pointsWon": 1093,
   "totalPointsAgainst": 1665,
   "mixedWins": 8,
   "mixedLosses": 29,
   "genderWins": 0,
   "genderLosses": 44,
   "clutchWins": 1,
   "clutchLosses": 8,
   "winPct": 9.9,
   "diff": -572,
   "ppg": 13.5,
   "leagueRank": 225,
   "rating": -3.5,
   "ratingGames": 81,
   "confidence": 93,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.6,
   "playerId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "name": "Jesse Rosenberg",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 41,
   "wins": 4,
   "losses": 37,
   "pointsWon": 599,
   "totalPointsAgainst": 845,
   "mixedWins": 1,
   "mixedLosses": 19,
   "genderWins": 3,
   "genderLosses": 18,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 9.8,
   "diff": -246,
   "ppg": 14.6,
   "leagueRank": 217,
   "rating": -2.8,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.3,
   "playerId": "7fabbb34-3132-4dd7-93cc-ff6c31adac27"
  },
  {
   "name": "Danielle Bernero",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 202,
   "totalPointsAgainst": 250,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 8.3,
   "diff": -48,
   "ppg": 16.8,
   "leagueRank": 240,
   "rating": -3.2,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "317f260e-551b-4f91-ab92-71440e5f05be"
  },
  {
   "name": "Brad Oldham",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 2,
   "losses": 24,
   "pointsWon": 394,
   "totalPointsAgainst": 541,
   "mixedWins": 0,
   "mixedLosses": 13,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 7.7,
   "diff": -147,
   "ppg": 15.2,
   "leagueRank": 231,
   "rating": -2.3,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "name": "Jim Pagano",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 1,
   "losses": 14,
   "pointsWon": 181,
   "totalPointsAgainst": 311,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "f1012c67-b6ba-4270-8d7a-53a9aa34b7df",
   "winPct": 6.7,
   "diff": -130,
   "ppg": 12.1,
   "leagueRank": 271,
   "rating": -3.5,
   "ratingGames": 15,
   "confidence": 77,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Eric Pan",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 33,
   "wins": 2,
   "losses": 31,
   "pointsWon": 506,
   "totalPointsAgainst": 688,
   "mixedWins": 0,
   "mixedLosses": 18,
   "genderWins": 2,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 9,
   "winPct": 6.1,
   "diff": -182,
   "ppg": 15.3,
   "leagueRank": 216,
   "rating": -2.3,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 0.2,
   "playerId": "0ef2603e-114f-4683-8cef-a3d16ef94f5d"
  },
  {
   "name": "Bessie Hu",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 3,
   "losses": 57,
   "pointsWon": 842,
   "totalPointsAgainst": 1251,
   "mixedWins": 3,
   "mixedLosses": 31,
   "genderWins": 0,
   "genderLosses": 26,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 5,
   "diff": -409,
   "ppg": 14,
   "leagueRank": 226,
   "rating": -3.5,
   "ratingGames": 60,
   "confidence": 91,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.5,
   "playerId": "6914c9fc-a81e-4029-9d8a-2ca4c8b9fd59"
  },
  {
   "name": "Chelsea Pan",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 2,
   "losses": 45,
   "pointsWon": 642,
   "totalPointsAgainst": 977,
   "mixedWins": 1,
   "mixedLosses": 27,
   "genderWins": 1,
   "genderLosses": 18,
   "clutchWins": 0,
   "clutchLosses": 7,
   "winPct": 4.3,
   "diff": -335,
   "ppg": 13.7,
   "leagueRank": 229,
   "rating": -4.4,
   "ratingGames": 48,
   "confidence": 89,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0,
   "playerId": "1cbb6d7f-3b53-4fdd-a9dd-c1aa8362904a"
  },
  {
   "name": "Kristine Brink",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 2,
   "losses": 62,
   "pointsWon": 766,
   "totalPointsAgainst": 1337,
   "mixedWins": 2,
   "mixedLosses": 27,
   "genderWins": 0,
   "genderLosses": 35,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 3.1,
   "diff": -571,
   "ppg": 12,
   "leagueRank": 236,
   "rating": -4.6,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 0.9,
   "playerId": "24376866-24f2-4295-aecd-bfc95ca9ecbb"
  },
  {
   "name": "Marcos Claros",
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
   "leagueRank": 283,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "839ee2ac-03d5-4fee-bc87-08709afae5f2"
  },
  {
   "name": "Stephen Lucas",
   "gender": "Male",
   "team": "Lehigh Valley",
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
   "leagueRank": 288,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f2b998eb-74f9-4cc1-a13c-ba37518e6bcb"
  },
  {
   "name": "Frank Clark",
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
   "leagueRank": 282,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "name": "Franco Rifici Jr",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 92,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 4,
   "playerId": "be6641d1-7457-4cc2-8c43-c3c8641dd89e",
   "winPct": 0,
   "diff": -13,
   "ppg": 18.4,
   "leagueRank": 250,
   "rating": -1.4,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Thao Duong",
   "gender": "Male",
   "team": "Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 2,
   "wins": 0,
   "losses": 2,
   "pointsWon": 26,
   "totalPointsAgainst": 42,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "8079442e-47b1-453c-ae67-2de707a8bdde",
   "winPct": 0,
   "diff": -16,
   "ppg": 13,
   "leagueRank": 275,
   "rating": -1.4,
   "ratingGames": 2,
   "confidence": 30,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Susan Debbs",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 65,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9",
   "winPct": 0,
   "diff": -19,
   "ppg": 16.3,
   "leagueRank": 263,
   "rating": -1,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Scott Bohrer",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 80,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -25,
   "ppg": 16,
   "leagueRank": 261,
   "rating": -4.1,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": 0,
   "playerId": "7c8310a8-1a97-4c04-bbc0-519fe4132685"
  },
  {
   "name": "Kim Bohrer",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 71,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -34,
   "ppg": 14.2,
   "leagueRank": 270,
   "rating": -2.8,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.8,
   "playerId": "013a0ee8-d510-472a-b8fb-7d19b1d5dc31"
  },
  {
   "name": "Jake Treiber",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 69,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -36,
   "ppg": 13.8,
   "leagueRank": 272,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.5,
   "playerId": "f62a0929-a6a1-4ca9-a47c-875b7b56025a"
  },
  {
   "name": "Andrea Mui",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 89,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "7a1f2b24-7109-4933-9428-c8fef6eb8348",
   "winPct": 0,
   "diff": -37,
   "ppg": 14.8,
   "leagueRank": 267,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Marina Gurevich",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 91,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "8f2218cb-adf0-4dcb-85dc-94bbe063080d",
   "winPct": 0,
   "diff": -56,
   "ppg": 13,
   "leagueRank": 274,
   "rating": -3.8,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Liz Cuozzo",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 46,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -59,
   "ppg": 9.2,
   "leagueRank": 278,
   "rating": -3.5,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 2,
   "playerId": "2b2d474d-281c-42d7-854b-6bfe32f20563"
  },
  {
   "name": "Kelly Nicosia",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 88,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "dfa81e98-f244-4c5b-af61-8ba138708816",
   "winPct": 0,
   "diff": -59,
   "ppg": 12.6,
   "leagueRank": 276,
   "rating": -2.2,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 2
  },
  {
   "name": "Joshua Octaviano",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 193,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "37c7c06b-1600-450e-9f14-61d397872bc6",
   "winPct": 0,
   "diff": -80,
   "ppg": 14.8,
   "leagueRank": 264,
   "rating": -2.2,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Emily Su",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 0,
   "losses": 12,
   "pointsWon": 152,
   "totalPointsAgainst": 252,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "027988d5-1c42-4102-b21a-bfce0434d664",
   "winPct": 0,
   "diff": -100,
   "ppg": 12.7,
   "leagueRank": 268,
   "rating": -1.6,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Ceil Gomez",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 0,
   "losses": 12,
   "pointsWon": 152,
   "totalPointsAgainst": 252,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "e1cb1b3c-8e14-423b-bf0f-5ad2dabd6a4c",
   "winPct": 0,
   "diff": -100,
   "ppg": 12.7,
   "leagueRank": 269,
   "rating": -3.6,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Nicholas Lagrua",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 0,
   "losses": 12,
   "pointsWon": 137,
   "totalPointsAgainst": 252,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488",
   "winPct": 0,
   "diff": -115,
   "ppg": 11.4,
   "leagueRank": 273,
   "rating": -2.8,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Joseph Albanese",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 0,
   "losses": 15,
   "pointsWon": 155,
   "totalPointsAgainst": 315,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "ef0d1425-3573-439e-a197-69a837d1b27d",
   "winPct": 0,
   "diff": -160,
   "ppg": 10.3,
   "leagueRank": 266,
   "rating": -5.5,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.9
  }
 ],
 "teams": [
  {
   "name": "Pickle House",
   "w": 11,
   "l": 1,
   "pf": 7128,
   "pa": 6194,
   "gw": 273,
   "gl": 111,
   "diff": 934,
   "gameDiff": 162,
   "power": 1.6,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "South",
   "fmt": {
    "mixed": [
     137,
     55
    ],
    "male": [
     57,
     39
    ],
    "female": [
     79,
     17
    ]
   }
  },
  {
   "name": "Pickle Jar",
   "w": 10,
   "l": 2,
   "pf": 7744,
   "pa": 6579,
   "gw": 259,
   "gl": 125,
   "diff": 1165,
   "gameDiff": 134,
   "power": 1.6,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     124,
     68
    ],
    "male": [
     57,
     39
    ],
    "female": [
     78,
     18
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 9,
   "l": 3,
   "pf": 7579,
   "pa": 6675,
   "gw": 250,
   "gl": 134,
   "diff": 904,
   "gameDiff": 116,
   "power": 1.3,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     125,
     67
    ],
    "male": [
     56,
     40
    ],
    "female": [
     69,
     27
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 9,
   "l": 3,
   "pf": 7548,
   "pa": 6754,
   "gw": 242,
   "gl": 142,
   "diff": 794,
   "gameDiff": 100,
   "power": 1.3,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     128,
     64
    ],
    "male": [
     47,
     49
    ],
    "female": [
     67,
     29
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 7,
   "l": 5,
   "pf": 7665,
   "pa": 6882,
   "gw": 249,
   "gl": 135,
   "diff": 783,
   "gameDiff": 114,
   "power": 1.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "South",
   "fmt": {
    "mixed": [
     129,
     63
    ],
    "male": [
     48,
     48
    ],
    "female": [
     72,
     24
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 7,
   "l": 5,
   "pf": 7493,
   "pa": 6846,
   "gw": 237,
   "gl": 147,
   "diff": 647,
   "gameDiff": 90,
   "power": 1.1,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     122,
     70
    ],
    "male": [
     77,
     19
    ],
    "female": [
     38,
     58
    ]
   }
  },
  {
   "name": "Players Courtyard",
   "w": 7,
   "l": 5,
   "pf": 6699,
   "pa": 6661,
   "gw": 179,
   "gl": 205,
   "diff": 38,
   "gameDiff": -26,
   "power": 0.7,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "South",
   "fmt": {
    "mixed": [
     83,
     109
    ],
    "male": [
     53,
     43
    ],
    "female": [
     43,
     53
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 6,
   "l": 6,
   "pf": 7176,
   "pa": 7471,
   "gw": 171,
   "gl": 213,
   "diff": -295,
   "gameDiff": -42,
   "power": 0.4,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "South",
   "fmt": {
    "mixed": [
     85,
     107
    ],
    "male": [
     37,
     59
    ],
    "female": [
     49,
     47
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 5,
   "l": 7,
   "pf": 7316,
   "pa": 7015,
   "gw": 210,
   "gl": 174,
   "diff": 301,
   "gameDiff": 36,
   "power": 0.9,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     107,
     85
    ],
    "male": [
     50,
     46
    ],
    "female": [
     53,
     43
    ]
   }
  },
  {
   "name": "Bounce Philly",
   "w": 5,
   "l": 7,
   "pf": 7173,
   "pa": 7305,
   "gw": 188,
   "gl": 196,
   "diff": -132,
   "gameDiff": -8,
   "power": 0.4,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "South",
   "fmt": {
    "mixed": [
     92,
     100
    ],
    "male": [
     60,
     36
    ],
    "female": [
     36,
     60
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro",
   "w": 4,
   "l": 8,
   "pf": 6978,
   "pa": 7600,
   "gw": 147,
   "gl": 237,
   "diff": -622,
   "gameDiff": -90,
   "power": 0.1,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "South",
   "fmt": {
    "mixed": [
     80,
     112
    ],
    "male": [
     37,
     59
    ],
    "female": [
     30,
     66
    ]
   }
  },
  {
   "name": "Lehigh Valley",
   "w": 2,
   "l": 10,
   "pf": 6905,
   "pa": 7611,
   "gw": 137,
   "gl": 247,
   "diff": -706,
   "gameDiff": -110,
   "power": -0.3,
   "powerRank": 7,
   "pod": 1,
   "reportedPod": "South",
   "podName": "South",
   "fmt": {
    "mixed": [
     66,
     126
    ],
    "male": [
     44,
     52
    ],
    "female": [
     27,
     69
    ]
   }
  },
  {
   "name": "The Atlantic Club",
   "w": 2,
   "l": 10,
   "pf": 6178,
   "pa": 7785,
   "gw": 94,
   "gl": 290,
   "diff": -1607,
   "gameDiff": -196,
   "power": -1.5,
   "powerRank": 6,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     43,
     149
    ],
    "male": [
     22,
     74
    ],
    "female": [
     29,
     67
    ]
   }
  },
  {
   "name": "Pickleball HQ",
   "w": 0,
   "l": 12,
   "pf": 5751,
   "pa": 7955,
   "gw": 52,
   "gl": 332,
   "diff": -2204,
   "gameDiff": -280,
   "power": -2.2,
   "powerRank": 7,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     23,
     169
    ],
    "male": [
     27,
     69
    ],
    "female": [
     2,
     94
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Anthony Ursino",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.7,
   "avgActual": 6.8,
   "avgExpected": 1.3,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Alicia Reed",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 2.7,
   "avgActual": 2.5,
   "avgExpected": -2.1,
   "aId": "3bebe02b-0d94-423c-b9c2-3420004a6d18",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Suzi Battison",
   "b": "Emily Miller",
   "team": "Flemington",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 2.6,
   "avgActual": 8,
   "avgExpected": 3.7,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "6ddfb7dc-84b5-403c-b5dc-6fe39bc3852c"
  },
  {
   "a": "Lilie Sen",
   "b": "Garv Singhal",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 2.5,
   "avgActual": 2.7,
   "avgExpected": -1.5,
   "aId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "bId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "a": "Bessie Hu",
   "b": "Saif Sarwar",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 0.7,
   "avgExpected": -4.7,
   "aId": "6914c9fc-a81e-4029-9d8a-2ca4c8b9fd59",
   "bId": "84375a64-3885-43be-ba98-0f520f51c11b"
  },
  {
   "a": "Geoff Watson",
   "b": "Heather Gallagher",
   "team": "Lehigh Valley",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 6.5,
   "avgExpected": 2,
   "aId": "41191982-ca10-4665-8eb2-6d5231b4a0c4",
   "bId": "96c8ef56-bc40-42e9-bb6e-8054e4b27269"
  },
  {
   "a": "Christian Fechter",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 5,
   "avgExpected": 0.8,
   "aId": "9a973334-7467-4873-9aa6-ca3a597e8caa",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Corey Maryles",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 6.3,
   "avgExpected": 2.9,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "a0d313f4-dca8-4931-8c34-1ad812541550"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Leo Kupferman",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 9.2,
   "avgExpected": 5.5,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "a5b2e149-de36-4d75-80af-218a03ff590d"
  },
  {
   "a": "Ann Betterton",
   "b": "Joshua Ahn",
   "team": "Pickleball HQ",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": 2.1,
   "avgActual": -1.9,
   "avgExpected": -4.9,
   "aId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "bId": "fff3fe71-d4a6-4103-9290-0ef57035471c"
  },
  {
   "a": "Courtney Greener",
   "b": "Nate Otto",
   "team": "Flemington",
   "n": 12,
   "w": 7,
   "l": 5,
   "synergy": 2.1,
   "avgActual": 1.8,
   "avgExpected": -1,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "70e57f6a-3b00-4620-8c63-b1445cf7aab2"
  },
  {
   "a": "Chris Bucaro",
   "b": "Amalia Ditrapani",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 3.7,
   "avgExpected": -1.3,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "32ac3308-4ddd-496b-8942-ca2422322c06"
  },
  {
   "a": "Daniel Kulik",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 2.1,
   "avgActual": 5,
   "avgExpected": 1.7,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Tim Le",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 0,
   "avgExpected": -4.8,
   "aId": "6326488b-c7f8-4fc7-8aed-6274b7366d07",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Taylor Hartman",
   "b": "Lindsey Thoeng",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2,
   "avgActual": 9.3,
   "avgExpected": 5.2,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "a": "Thomas Connolly",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 14,
   "w": 9,
   "l": 5,
   "synergy": 2,
   "avgActual": 2.1,
   "avgExpected": -0.4,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Charlotte Healey",
   "b": "Julia Sternberg",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 2,
   "avgActual": 0.7,
   "avgExpected": -3.9,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "a": "Doryan Amato",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 9.7,
   "avgExpected": 5,
   "aId": "60448597-405f-4454-a0b8-15bb2e41373e",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Elysia Price",
   "b": "Melissa Dardani",
   "team": "Pickle Jar",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 8.8,
   "avgExpected": 4.9,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Daniel Gallegos",
   "b": "Rahul Datta",
   "team": "Pickle Jar",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 0.7,
   "avgExpected": -3.9,
   "aId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2",
   "bId": "acb08227-47a5-40fc-b720-3531084980f6"
  },
  {
   "a": "Matthew Matro",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": 1.9,
   "avgActual": 2,
   "avgExpected": -0.7,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Susan Ackley",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.9,
   "avgActual": 1.9,
   "avgExpected": -1.1,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Robert Khalev",
   "b": "Michael Swell",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.9,
   "avgActual": 0,
   "avgExpected": -3.5,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "a": "Robert Schimony",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 3.3,
   "avgExpected": -1.1,
   "aId": "b85c2074-a149-4382-8563-e1ff5b5d70bc",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Chris Damato",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 3.6,
   "avgExpected": 0.8,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro",
   "n": 15,
   "w": 12,
   "l": 3,
   "synergy": 1.8,
   "avgActual": 3.9,
   "avgExpected": 1.7,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Jase Volz",
   "b": "Dominique Damerjian",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 2.3,
   "avgExpected": -1.4,
   "aId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d",
   "bId": "733e7853-0fc0-40ee-a7ca-a0f00ef6fa7c"
  },
  {
   "a": "Lindsey Taaffe",
   "b": "Hugh Laroque",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 3.3,
   "avgExpected": -0.8,
   "aId": "8c4e6b34-2198-4797-ae86-65f97164eedd",
   "bId": "93c534a1-a23c-451f-8c73-3515f8a19bd5"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Ozair Ibrahim",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.8,
   "avgActual": 3,
   "avgExpected": 0.2,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Rachel Hannum",
   "b": "Julia Plein",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 8,
   "avgExpected": 3.9,
   "aId": "9e62411a-1a2e-4f18-972e-f13d9bf8ced7",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Nathan Law",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 3.2,
   "avgExpected": 0.1,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Ashley Georgevich",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 8.9,
   "avgExpected": 6.2,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "6953916c-867d-42fe-89ad-444aee6d40e8"
  },
  {
   "a": "Nick Dehmer",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 9.3,
   "avgExpected": 5.4,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Arianna Haresign",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 16,
   "w": 10,
   "l": 6,
   "synergy": 1.7,
   "avgActual": 3.9,
   "avgExpected": 1.8,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Brittany Hall",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 2.5,
   "avgExpected": -1,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Lily Yip",
   "team": "Home Court",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 6.3,
   "avgExpected": 3.5,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "78f3d90b-c12f-4936-8283-659b53e37384"
  },
  {
   "a": "Dylan Unkert",
   "b": "Kishan Shah",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 4.7,
   "avgExpected": 0.8,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "a": "Trang Nguyen (Smile)",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 4.8,
   "avgExpected": 1.4,
   "aId": "60eb4808-3d54-429f-9910-11b14939a230",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Chris Damato",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 8,
   "avgExpected": 4.2,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 14,
   "w": 13,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5.3,
   "avgExpected": 3.3,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Eric Kutzin",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 1,
   "avgExpected": -2.7,
   "aId": "c62728d5-ec2b-4ce7-b0e9-83a34fa325b1",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Doryan Amato",
   "b": "Gift Horn",
   "team": "Home Court",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 4.2,
   "avgExpected": 1.3,
   "aId": "60448597-405f-4454-a0b8-15bb2e41373e",
   "bId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "a": "Nathan Law",
   "b": "Ben Mead",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 2.5,
   "avgExpected": -0.8,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "7858dda8-168b-4a84-8d5d-7a6571e9313a"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 10.7,
   "avgExpected": 6.9,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Hector Irizarry",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 11,
   "w": 10,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 5.7,
   "avgExpected": 3.6,
   "aId": "a50a69d0-0a8c-4241-b768-846b1591d180",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Dylan Unkert",
   "b": "Nick Dehmer",
   "team": "Pickle House",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 3.5,
   "avgExpected": 1.5,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "a": "Cami Lee",
   "b": "Joshua Ahn",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.5,
   "avgActual": -1.6,
   "avgExpected": -4.2,
   "aId": "fe88c083-3162-4d64-901c-710c2e0ef84c",
   "bId": "fff3fe71-d4a6-4103-9290-0ef57035471c"
  },
  {
   "a": "Jerry Hine",
   "b": "Coby Golinkoff",
   "team": "Players Courtyard",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2.8,
   "avgExpected": -0.3,
   "aId": "2f7417e0-7b26-4846-a1f4-9901c27bea7e",
   "bId": "abe67fc6-e179-4ebc-babb-052f0666086b"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.5,
   "avgExpected": 1,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Paula Ro",
   "b": "Taylor Peracchio",
   "team": "Pickle Jar",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 4,
   "avgExpected": 1.8,
   "aId": "27908231-74bb-4956-adc4-5429e16e55ea",
   "bId": "4df44e08-a35c-4c4c-a311-861ef4d0897a"
  },
  {
   "a": "Rayna Baizman",
   "b": "Ozair Ibrahim",
   "team": "Bounce Malvern",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 4.5,
   "avgExpected": 2.4,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Lily Yip",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 7,
   "avgExpected": 3.5,
   "aId": "78f3d90b-c12f-4936-8283-659b53e37384",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Alicia Reed",
   "b": "Ethan Henigan",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 2,
   "avgExpected": -0.9,
   "aId": "3bebe02b-0d94-423c-b9c2-3420004a6d18",
   "bId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23"
  },
  {
   "a": "Camrin Cronheim",
   "b": "James Cannizzaro",
   "team": "Pickle Jar",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.2,
   "avgExpected": 0.4,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "a": "Trang Nguyen (Smile)",
   "b": "Jeff Comer",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 5,
   "avgExpected": 2.8,
   "aId": "60eb4808-3d54-429f-9910-11b14939a230",
   "bId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "a": "Jon Cedotal",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 1.4,
   "avgActual": -2.7,
   "avgExpected": -5.5,
   "aId": "2a7a3b43-2d24-469a-b8a6-7f60da866270",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 8.3,
   "avgExpected": 5.1,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Kishan Shah",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 2.5,
   "avgExpected": -0.3,
   "aId": "8ca1f741-6a67-4332-9ca7-082671211098",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Alex Abad",
   "b": "Julia Plein",
   "team": "Bounce Philly",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 5.5,
   "avgExpected": 2.8,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Anthony Leung",
   "b": "Cami Lee",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 0.8,
   "avgExpected": -2.1,
   "aId": "48457f37-29a2-47e7-8b2e-62316ad44feb",
   "bId": "fe88c083-3162-4d64-901c-710c2e0ef84c"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 3.3,
   "avgExpected": 0.2,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Matthew Lucas",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 2.7,
   "avgExpected": -0.7,
   "aId": "ce28bf66-5027-4f8b-b579-aa99d2ac96d3",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Kristine Brink",
   "b": "Nicholas Leung",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 1.4,
   "avgActual": -5.2,
   "avgExpected": -7.7,
   "aId": "24376866-24f2-4295-aecd-bfc95ca9ecbb",
   "bId": "583f4ed0-33f8-4e51-8642-089f7d7e0239"
  },
  {
   "a": "Michael Swell",
   "b": "Noelle Ramirez",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 4,
   "avgExpected": 0.7,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "a": "Christa Phillips",
   "b": "Noelle Ramirez",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 4.7,
   "avgExpected": 1.5,
   "aId": "7477b471-93f8-438f-9266-69bad2054cd9",
   "bId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Samuel Levinson",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.4,
   "avgActual": -1.6,
   "avgExpected": -4.1,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "a": "Ben Mead",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 1.8,
   "avgExpected": -0.8,
   "aId": "7858dda8-168b-4a84-8d5d-7a6571e9313a",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Matthew Chen",
   "b": "Johny Mario",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 2.5,
   "avgExpected": -0.3,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "a": "Chaille Godinez",
   "b": "Arianna Haresign",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 2.3,
   "avgExpected": -0.9,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "556f84fc-4f7c-4199-a104-6e906d71605c"
  },
  {
   "a": "Gog Boonswang",
   "b": "Katarzyna Clevenger",
   "team": "Lehigh Valley",
   "n": 16,
   "w": 6,
   "l": 10,
   "synergy": 1.3,
   "avgActual": -1.8,
   "avgExpected": -3.4,
   "aId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68",
   "bId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "a": "Robert Khalev",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.3,
   "avgActual": -2.4,
   "avgExpected": -4.7,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Rahul Datta",
   "b": "David Lavy",
   "team": "Pickle Jar",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.2,
   "avgExpected": -0.1,
   "aId": "acb08227-47a5-40fc-b720-3531084980f6",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Arianna Haresign",
   "b": "Matthew Matro",
   "team": "Jersey Devil",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": 1.3,
   "avgActual": 1.5,
   "avgExpected": -0.3,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "a": "Dominique Damerjian",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 1.3,
   "avgActual": -3.5,
   "avgExpected": -5.6,
   "aId": "733e7853-0fc0-40ee-a7ca-a0f00ef6fa7c",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Paula Ro",
   "b": "Camrin Cronheim",
   "team": "Pickle Jar",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 2.2,
   "avgExpected": -0.1,
   "aId": "27908231-74bb-4956-adc4-5429e16e55ea",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Leo Kupferman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 3.3,
   "avgExpected": 0.4,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "a5b2e149-de36-4d75-80af-218a03ff590d"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.5,
   "avgExpected": 1.7,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Susan Ackley",
   "b": "Suzi Battison",
   "team": "Flemington",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 7.2,
   "avgExpected": 4.9,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "a": "Rebecca Arleth",
   "b": "Margaret Robb",
   "team": "The Atlantic Club",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.3,
   "avgActual": -1.2,
   "avgExpected": -3.3,
   "aId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Lilie Sen",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.3,
   "avgActual": -1.8,
   "avgExpected": -4.1,
   "aId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Taylor Hartman",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 5.8,
   "avgExpected": 3.2,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Coby Golinkoff",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5,
   "avgExpected": 2.2,
   "aId": "abe67fc6-e179-4ebc-babb-052f0666086b",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Kishan Shah",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.8,
   "avgExpected": 2.3,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "a": "Nahla Bernhardt",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 15,
   "w": 10,
   "l": 5,
   "synergy": 1.2,
   "avgActual": 2.3,
   "avgExpected": 0.8,
   "aId": "9dae8c17-6878-473a-83e9-a43b434f876b",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 6.8,
   "avgExpected": 4.4,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Corey Maryles",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 9.8,
   "avgExpected": 7.3,
   "aId": "a0d313f4-dca8-4931-8c34-1ad812541550",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Jenna Irwin",
   "b": "Corey Maryles",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5.5,
   "avgExpected": 3.1,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "a0d313f4-dca8-4931-8c34-1ad812541550"
  },
  {
   "a": "Rachel Alfano",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.8,
   "avgExpected": 1.1,
   "aId": "ce7aca89-06ac-4cd9-8944-a482216ffd58",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Chelsea Pan",
   "b": "Cami Lee",
   "team": "Pickleball HQ",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 1.2,
   "avgActual": -4.6,
   "avgExpected": -6.4,
   "aId": "1cbb6d7f-3b53-4fdd-a9dd-c1aa8362904a",
   "bId": "fe88c083-3162-4d64-901c-710c2e0ef84c"
  },
  {
   "a": "Lindsey Thoeng",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2,
   "avgExpected": -0.4,
   "aId": "67977901-2346-49bb-93df-b59d31cb9a30",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Annemarie Mccartney",
   "b": "Sommer Peterson",
   "team": "Players Courtyard",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 0.8,
   "avgExpected": -1.5,
   "aId": "d08d78db-7d20-4dc2-a37b-41841c4624fd",
   "bId": "d2675a15-8865-47ad-ac65-635217749262"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Dominique Damerjian",
   "team": "Jersey Devil",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1.2,
   "avgActual": 0.2,
   "avgExpected": -1.8,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "733e7853-0fc0-40ee-a7ca-a0f00ef6fa7c"
  },
  {
   "a": "Suzi Battison",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 9,
   "avgExpected": 6.9,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Nicholas Leung",
   "b": "Lawrence Ly",
   "team": "Pickleball HQ",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 1.2,
   "avgActual": -1.3,
   "avgExpected": -3.2,
   "aId": "583f4ed0-33f8-4e51-8642-089f7d7e0239",
   "bId": "a0a1cac1-7dc1-4058-bcc4-858517823a85"
  },
  {
   "a": "Will Kayal",
   "b": "Taylor Peracchio",
   "team": "Pickle Jar",
   "n": 16,
   "w": 14,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 5.3,
   "avgExpected": 3.8,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "4df44e08-a35c-4c4c-a311-861ef4d0897a"
  },
  {
   "a": "Jordan Denish",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3.1,
   "avgExpected": 1.2,
   "aId": "8ae25144-966d-4de1-9cb3-513f7f217170",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Mark Kilimnik",
   "b": "Bruno Casino Remondo",
   "team": "Bounce Philly",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.2,
   "avgExpected": 0.6,
   "aId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1",
   "bId": "eb557a63-d8c4-46b4-9f21-67f59731f20f"
  },
  {
   "a": "Hruday Vemparala",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5.9,
   "avgExpected": 4.1,
   "aId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Alex Abad",
   "b": "Kathleen Dougherty",
   "team": "Bounce Philly",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 1.2,
   "avgActual": 0.7,
   "avgExpected": -1.2,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "a": "Mark Kilimnik",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3,
   "avgExpected": 1.2,
   "aId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Gift Horn",
   "b": "John Gargana",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4,
   "avgExpected": 1.3,
   "aId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "bId": "e7ead4ec-3ab0-469f-9122-0a822f068415"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.5,
   "avgExpected": 0.5,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Alex Boory",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3,
   "avgExpected": 0.9,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Morgan Fishman",
   "b": "Eugene Zaslavsky",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5.3,
   "avgExpected": 2.5,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 8,
   "avgExpected": 5.1,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Pearly Leung",
   "b": "Gift Horn",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.3,
   "avgExpected": 1.9,
   "aId": "581070ec-7106-4558-bc86-4df0675682cb",
   "bId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "a": "Eric Lin",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 5,
   "avgExpected": 2.8,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Nick Dehmer",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 2.4,
   "avgExpected": 0.6,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Kaylyn Swankoski",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 5.7,
   "avgExpected": 3,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Kristine Brink",
   "b": "Lawrence Ly",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 1.1,
   "avgActual": -7.7,
   "avgExpected": -9.9,
   "aId": "24376866-24f2-4295-aecd-bfc95ca9ecbb",
   "bId": "a0a1cac1-7dc1-4058-bcc4-858517823a85"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Ruhi Shah",
   "team": "Pickle Jar",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 5.4,
   "avgExpected": 3.8,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Michaela Pierznik",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3.7,
   "avgExpected": 2,
   "aId": "c885c4ae-2685-4fc8-9b35-40cf9f465915",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Eva Danieli",
   "b": "Margaret Robb",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 1.6,
   "avgExpected": -0.4,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Beatriz Lopez Albarracin",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 8.3,
   "avgExpected": 5.8,
   "aId": "73603f18-0adb-48db-8375-1a6deff6ddbb",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Lindsey Taaffe",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3.6,
   "avgExpected": 1.5,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "8c4e6b34-2198-4797-ae86-65f97164eedd"
  },
  {
   "a": "Anita Buggins",
   "b": "Stacy Walkowitz",
   "team": "Players Courtyard",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.3,
   "avgExpected": 2.7,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Nathan Law",
   "b": "Hector Irizarry",
   "team": "Players Courtyard",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1,
   "avgActual": 5.6,
   "avgExpected": 3.8,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 5.7,
   "avgExpected": 3.2,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Chris Bucaro",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1,
   "avgActual": 5.8,
   "avgExpected": 4,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Will Kayal",
   "b": "David Lavy",
   "team": "Pickle Jar",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 3.7,
   "avgExpected": 2.1,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Anthony Ursino",
   "b": "Eugene Zaslavsky",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 5,
   "avgExpected": 2.7,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "a": "Zachary Adler",
   "b": "Manpreet Singh",
   "team": "Home Court",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1,
   "avgActual": 2.9,
   "avgExpected": 1.2,
   "aId": "1a45849d-879b-40a2-a0df-ec262414d1c3",
   "bId": "c7023f76-4d31-4566-a606-ef047e1220ad"
  },
  {
   "a": "Ethan Henigan",
   "b": "Garv Singhal",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1,
   "avgActual": 0.5,
   "avgExpected": -1.1,
   "aId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "bId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Heather Gallagher",
   "team": "Lehigh Valley",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": 0,
   "avgExpected": -1.9,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "96c8ef56-bc40-42e9-bb6e-8054e4b27269"
  },
  {
   "a": "Jeffrey Lyons",
   "b": "Katarzyna Clevenger",
   "team": "Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 2,
   "avgExpected": 0,
   "aId": "100d1860-64f4-4cbe-bc6e-985509a01143",
   "bId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "a": "Amalia Ditrapani",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": 3.6,
   "avgExpected": 1.8,
   "aId": "32ac3308-4ddd-496b-8942-ca2422322c06",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Julia Sternberg",
   "b": "Bruno Casino Remondo",
   "team": "Bounce Philly",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1,
   "avgActual": -0.9,
   "avgExpected": -2.4,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "eb557a63-d8c4-46b4-9f21-67f59731f20f"
  },
  {
   "a": "Taylor Hartman",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 6.7,
   "avgExpected": 4.2,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Melody Grohotolski",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 0.7,
   "avgExpected": -1.6,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "98c341d7-59e6-4f63-abf0-8bebd5644186"
  },
  {
   "a": "Vi Duong",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": -0.7,
   "avgExpected": -2.8,
   "aId": "b26cb702-4719-4bd5-bc2f-f4210cf25de4",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Anita Buggins",
   "team": "Players Courtyard",
   "n": 17,
   "w": 11,
   "l": 6,
   "synergy": 0.9,
   "avgActual": 1.4,
   "avgExpected": 0.3,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "a": "Eric Lin",
   "b": "Thomas Dill",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 7.8,
   "avgExpected": 6,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "dbb4451c-263d-48e8-88c3-de221796f55b"
  },
  {
   "a": "Catherine Stewart",
   "b": "Thomas Dill",
   "team": "Monroe",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 4.6,
   "avgExpected": 3.1,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "dbb4451c-263d-48e8-88c3-de221796f55b"
  },
  {
   "a": "Maanav Shah",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.3,
   "avgExpected": 3.5,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Ruhi Shah",
   "team": "Pickle Jar",
   "n": 15,
   "w": 11,
   "l": 4,
   "synergy": 0.9,
   "avgActual": 3.6,
   "avgExpected": 2.5,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Jonah Fliegelman",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2.5,
   "avgExpected": 1,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8"
  },
  {
   "a": "Charlotte Healey",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 4,
   "avgExpected": 2.6,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Lily Yip",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 7.8,
   "avgExpected": 6.2,
   "aId": "78f3d90b-c12f-4936-8283-659b53e37384",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Claudya Elefante",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -0.3,
   "avgExpected": -1.7,
   "aId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Robert Khalev",
   "b": "Sebastian Ferrer",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -4,
   "avgExpected": -6,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a"
  },
  {
   "a": "Robert Khalev",
   "b": "Christa Phillips",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0,
   "avgExpected": -2.1,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "7477b471-93f8-438f-9266-69bad2054cd9"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Joel Phillips",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.9,
   "avgActual": -1.7,
   "avgExpected": -3.1,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "8f292eb8-a014-4618-9c0e-114c26463233"
  },
  {
   "a": "Matthew Matro",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -2,
   "avgExpected": -4.1,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Rebecca Arleth",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.9,
   "avgActual": -5.7,
   "avgExpected": -7.6,
   "aId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Chaille Godinez",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 1.6,
   "avgExpected": 0.2,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Suzi Battison",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 5.3,
   "avgExpected": 3.2,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Taylor Hartman",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 4.5,
   "avgExpected": 2.8,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Richa Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 22,
   "w": 16,
   "l": 6,
   "synergy": 0.8,
   "avgActual": 2.6,
   "avgExpected": 1.7,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Jase Volz",
   "b": "Matthew Matro",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 0.3,
   "avgExpected": -1.4,
   "aId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d",
   "bId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "a": "Daniel Kulik",
   "b": "Leo Kupferman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 3.7,
   "avgExpected": 1.9,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "a5b2e149-de36-4d75-80af-218a03ff590d"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.2,
   "avgExpected": 2.9,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Manpreet Singh",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 0.3,
   "avgExpected": -1.6,
   "aId": "c7023f76-4d31-4566-a606-ef047e1220ad",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Kristine Brink",
   "b": "Jesse Rosenberg",
   "team": "Pickleball HQ",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": 0.8,
   "avgActual": -7.5,
   "avgExpected": -8.8,
   "aId": "24376866-24f2-4295-aecd-bfc95ca9ecbb",
   "bId": "7fabbb34-3132-4dd7-93cc-ff6c31adac27"
  },
  {
   "a": "Adrienne Butrymowicz",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -7.3,
   "avgExpected": -9.2,
   "aId": "279df046-e022-4adf-a5ea-4072a29d9622",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Erika Richards",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 0.5,
   "avgExpected": -1.1,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Jenna Irwin",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 7,
   "avgExpected": 5.3,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Alex Boory",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 1.7,
   "avgExpected": -0.2,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Anthony Leung",
   "b": "Liana Rose",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.7,
   "avgExpected": -2.6,
   "aId": "48457f37-29a2-47e7-8b2e-62316ad44feb",
   "bId": "51f180a8-f6f7-4b6f-b409-e650739ba59e"
  },
  {
   "a": "Geoff Watson",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 24,
   "w": 12,
   "l": 12,
   "synergy": 0.7,
   "avgActual": 0,
   "avgExpected": -0.9,
   "aId": "41191982-ca10-4665-8eb2-6d5231b4a0c4",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": 0.7,
   "avgActual": 1.1,
   "avgExpected": 0.1,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Jenna Irwin",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": 0.7,
   "avgActual": 1.7,
   "avgExpected": 0.8,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Christian Fechter",
   "b": "Corey Maryles",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5,
   "avgExpected": 3.7,
   "aId": "9a973334-7467-4873-9aa6-ca3a597e8caa",
   "bId": "a0d313f4-dca8-4931-8c34-1ad812541550"
  },
  {
   "a": "Gog Boonswang",
   "b": "Cristi Landrigan",
   "team": "Lehigh Valley",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.7,
   "avgActual": -1.4,
   "avgExpected": -2.5,
   "aId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68",
   "bId": "1be028eb-1b92-4961-b508-fa0879c78017"
  },
  {
   "a": "Claire Gaston",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 12,
   "w": 3,
   "l": 9,
   "synergy": 0.7,
   "avgActual": -2.2,
   "avgExpected": -3,
   "aId": "7f62f4db-d0cf-4990-a324-63aeb985a840",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Saif Sarwar",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0.7,
   "avgActual": -3.2,
   "avgExpected": -4.3,
   "aId": "84375a64-3885-43be-ba98-0f520f51c11b",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Dylan Unkert",
   "team": "Pickle House",
   "n": 13,
   "w": 12,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.6,
   "avgExpected": 2.7,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "35415e5c-19db-4389-9839-b63d7e09851f"
  },
  {
   "a": "Kenoa Tio",
   "b": "Jeff Comer",
   "team": "Bounce Malvern",
   "n": 19,
   "w": 11,
   "l": 8,
   "synergy": 0.7,
   "avgActual": 1.9,
   "avgExpected": 1.1,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "a": "Bessie Hu",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 12,
   "w": 0,
   "l": 12,
   "synergy": 0.7,
   "avgActual": -6.4,
   "avgExpected": -7.4,
   "aId": "6914c9fc-a81e-4029-9d8a-2ca4c8b9fd59",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Thomas Connolly",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 12,
   "w": 6,
   "l": 6,
   "synergy": 0.7,
   "avgActual": -1.4,
   "avgExpected": -2.3,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 14,
   "w": 11,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 2.1,
   "avgExpected": 1.3,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Jesse Rosenberg",
   "b": "Lawrence Ly",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.7,
   "avgActual": -2.8,
   "avgExpected": -4.1,
   "aId": "7fabbb34-3132-4dd7-93cc-ff6c31adac27",
   "bId": "a0a1cac1-7dc1-4058-bcc4-858517823a85"
  },
  {
   "a": "Maanav Shah",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.7,
   "avgExpected": -0.5,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Brittany Hall",
   "b": "Jerry Hine",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -0.7,
   "avgExpected": -2.2,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "2f7417e0-7b26-4846-a1f4-9901c27bea7e"
  },
  {
   "a": "Charlotte Healey",
   "b": "Bruno Casino Remondo",
   "team": "Bounce Philly",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 2.2,
   "avgExpected": 1.2,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "eb557a63-d8c4-46b4-9f21-67f59731f20f"
  },
  {
   "a": "Elysia Price",
   "b": "Ruhi Shah",
   "team": "Pickle Jar",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 5.1,
   "avgExpected": 4.2,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Lindsey Taaffe",
   "b": "Ozair Ibrahim",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4,
   "avgExpected": 2.6,
   "aId": "8c4e6b34-2198-4797-ae86-65f97164eedd",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Joey Angelson",
   "b": "Christa Phillips",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -3.2,
   "avgExpected": -4.5,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "7477b471-93f8-438f-9266-69bad2054cd9"
  },
  {
   "a": "Erika Richards",
   "b": "Lilie Sen",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -0.5,
   "avgExpected": -1.9,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "3aa34138-1989-4d89-b656-3e0c44b23b6f"
  },
  {
   "a": "Stephen Conger",
   "b": "Drew Von Bargen",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -2.5,
   "avgExpected": -3.9,
   "aId": "24e70ef7-b98e-459e-8a19-19a2b66a054e",
   "bId": "35880e0f-aba0-4a37-85fe-e09b057d63b2"
  },
  {
   "a": "Michael Swell",
   "b": "Matt Schall",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -3,
   "avgExpected": -4.6,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Hugh Laroque",
   "b": "Ozair Ibrahim",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.5,
   "avgExpected": 2.1,
   "aId": "93c534a1-a23c-451f-8c73-3515f8a19bd5",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Elysia Price",
   "b": "Pooja Schuster",
   "team": "Pickle Jar",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 10.7,
   "avgExpected": 9,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "e5e64524-1909-4209-a940-8774d644af72"
  },
  {
   "a": "Danielle Bernero",
   "b": "Steven Maisonet",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -1,
   "avgExpected": -2.7,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "d1bebcc0-9427-45af-9d16-cc023b5dd737"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Madison Turosinski",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.5,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "d650893e-cd89-40d1-9175-69a1a6b5558f"
  },
  {
   "a": "Kenoa Tio",
   "b": "Hugh Laroque",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.3,
   "avgExpected": 1.6,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "93c534a1-a23c-451f-8c73-3515f8a19bd5"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Dipen Bhatt",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -1,
   "avgExpected": -2.5,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Leo Kupferman",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.5,
   "avgExpected": 1.5,
   "aId": "a5b2e149-de36-4d75-80af-218a03ff590d",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.6,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Conor Landrigan",
   "b": "Matthew Lucas",
   "team": "Lehigh Valley",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": 0.6,
   "avgActual": 2.2,
   "avgExpected": 1.3,
   "aId": "931df78f-b759-497d-ba8d-be7d3f41f668",
   "bId": "ce28bf66-5027-4f8b-b579-aa99d2ac96d3"
  },
  {
   "a": "Nicholas Leung",
   "b": "Cami Lee",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -5.6,
   "avgExpected": -6.6,
   "aId": "583f4ed0-33f8-4e51-8642-089f7d7e0239",
   "bId": "fe88c083-3162-4d64-901c-710c2e0ef84c"
  },
  {
   "a": "Chelsea Pan",
   "b": "Anthony Leung",
   "team": "Pickleball HQ",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": 0.6,
   "avgActual": -4.7,
   "avgExpected": -5.5,
   "aId": "1cbb6d7f-3b53-4fdd-a9dd-c1aa8362904a",
   "bId": "48457f37-29a2-47e7-8b2e-62316ad44feb"
  },
  {
   "a": "Eric Pan",
   "b": "Anthony Leung",
   "team": "Pickleball HQ",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": 0.6,
   "avgActual": -3.3,
   "avgExpected": -4.1,
   "aId": "0ef2603e-114f-4683-8cef-a3d16ef94f5d",
   "bId": "48457f37-29a2-47e7-8b2e-62316ad44feb"
  },
  {
   "a": "Rayna Baizman",
   "b": "Kenoa Tio",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 1.3,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "a": "Rayna Baizman",
   "b": "Kaylyn Swankoski",
   "team": "Bounce Malvern",
   "n": 14,
   "w": 12,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 5.1,
   "avgExpected": 4.3,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.2,
   "avgExpected": 0.2,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Patrick Ceccacci",
   "b": "Eric Kutzin",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -2.7,
   "avgExpected": -3.9,
   "aId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c",
   "bId": "c62728d5-ec2b-4ce7-b0e9-83a34fa325b1"
  },
  {
   "a": "Chaille Godinez",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.1,
   "avgExpected": 1.2,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Chanda Mccoy",
   "team": "Flemington",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.5,
   "avgExpected": 1.6,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 2.4,
   "avgExpected": 1.3,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Zachary Adler",
   "b": "Gift Horn",
   "team": "Home Court",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -0.2,
   "avgExpected": -1.1,
   "aId": "1a45849d-879b-40a2-a0df-ec262414d1c3",
   "bId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Garv Singhal",
   "team": "Dill Dinkers Hatboro",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.5,
   "avgExpected": 0.6,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "a": "Hugh Laroque",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.6,
   "avgActual": 1.2,
   "avgExpected": 0.3,
   "aId": "93c534a1-a23c-451f-8c73-3515f8a19bd5",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Eric Kutzin",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.3,
   "avgExpected": -1,
   "aId": "c62728d5-ec2b-4ce7-b0e9-83a34fa325b1",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Jordan Denish",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.6,
   "avgExpected": 1.6,
   "aId": "8ae25144-966d-4de1-9cb3-513f7f217170",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Dylan Unkert",
   "b": "Taylor Hartman",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 2.7,
   "avgExpected": 1.3,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "a": "Ben Mead",
   "b": "Stacy Walkowitz",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0.3,
   "avgExpected": -1.1,
   "aId": "7858dda8-168b-4a84-8d5d-7a6571e9313a",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Ben Mead",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1,
   "avgExpected": -0.3,
   "aId": "7858dda8-168b-4a84-8d5d-7a6571e9313a",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Ozair Ibrahim",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 3.4,
   "avgExpected": 2.5,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Kerry Schaffer",
   "b": "Katarzyna Clevenger",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.3,
   "avgExpected": -1.2,
   "aId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744",
   "bId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "a": "Rebecca Arleth",
   "b": "Brad Oldham",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -3.5,
   "avgExpected": -4.6,
   "aId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Stacy Walkowitz",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 1.7,
   "avgExpected": 1,
   "aId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Anita Buggins",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 2.8,
   "avgExpected": 2.1,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Lindsey Thoeng",
   "team": "Pickle House",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 8.4,
   "avgExpected": 7.5,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "a": "Daniel Kulik",
   "b": "Ashley Georgevich",
   "team": "Pickleball Palace",
   "n": 15,
   "w": 14,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5.5,
   "avgExpected": 4.8,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "6953916c-867d-42fe-89ad-444aee6d40e8"
  },
  {
   "a": "Geoff Watson",
   "b": "Conor Landrigan",
   "team": "Lehigh Valley",
   "n": 14,
   "w": 9,
   "l": 5,
   "synergy": 0.5,
   "avgActual": 1.4,
   "avgExpected": 0.7,
   "aId": "41191982-ca10-4665-8eb2-6d5231b4a0c4",
   "bId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "a": "Ross Switkes",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.3,
   "aId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Suzi Battison",
   "team": "Flemington",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.4,
   "avgExpected": -0.4,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "a": "Kaley Lai",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 0.5,
   "avgActual": 1,
   "avgExpected": 0.3,
   "aId": "354f7b98-2207-458f-af42-3e8a7a3630be",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Jerry Hine",
   "b": "Nathan Law",
   "team": "Players Courtyard",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 2,
   "aId": "2f7417e0-7b26-4846-a1f4-9901c27bea7e",
   "bId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "a": "Michaela Pierznik",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.5,
   "avgActual": 1.1,
   "avgExpected": 0.4,
   "aId": "c885c4ae-2685-4fc8-9b35-40cf9f465915",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4,
   "avgExpected": 2.9,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Kristine Brink",
   "b": "Bessie Hu",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -9,
   "avgExpected": -9.9,
   "aId": "24376866-24f2-4295-aecd-bfc95ca9ecbb",
   "bId": "6914c9fc-a81e-4029-9d8a-2ca4c8b9fd59"
  },
  {
   "a": "Will Kayal",
   "b": "Zoe Ousouljoglou",
   "team": "Pickle Jar",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 4.1,
   "avgExpected": 3.4,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "269fe355-d2eb-41b8-9e92-a1438aec65e3"
  },
  {
   "a": "Jordan Denish",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 15,
   "w": 12,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 2.7,
   "avgExpected": 2.1,
   "aId": "8ae25144-966d-4de1-9cb3-513f7f217170",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 2.1,
   "avgExpected": 1.3,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Sophy Siv",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 4.3,
   "avgExpected": 3.2,
   "aId": "ad5025f0-478c-47b3-a437-85e53a87daa2",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -1.1,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Muhammad Usman",
   "team": "Pickle Jar",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1,
   "avgExpected": 0.3,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "8adf5cec-e3bf-4b0e-9a7c-7d1ed650bddb"
  },
  {
   "a": "Muhammad Usman",
   "b": "Rahul Datta",
   "team": "Pickle Jar",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "8adf5cec-e3bf-4b0e-9a7c-7d1ed650bddb",
   "bId": "acb08227-47a5-40fc-b720-3531084980f6"
  },
  {
   "a": "Zachary Adler",
   "b": "Doryan Amato",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1,
   "avgExpected": 0.1,
   "aId": "1a45849d-879b-40a2-a0df-ec262414d1c3",
   "bId": "60448597-405f-4454-a0b8-15bb2e41373e"
  },
  {
   "a": "Jenna Irwin",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 2.3,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Will Kayal",
   "b": "James Cannizzaro",
   "team": "Pickle Jar",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 4,
   "avgExpected": 3.2,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "a": "Gift Horn",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4,
   "avgExpected": 3.1,
   "aId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Elysia Price",
   "team": "Pickle Jar",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 1.2,
   "avgExpected": 0.4,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Christa Phillips",
   "b": "Matt Schall",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.5,
   "avgActual": -4.2,
   "avgExpected": -5.1,
   "aId": "7477b471-93f8-438f-9266-69bad2054cd9",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -2.7,
   "avgExpected": -3.8,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Rich Gaborow",
   "b": "Rebecca Arleth",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -3.5,
   "avgExpected": -4.5,
   "aId": "4482c5d0-0106-41d5-8214-d5e0aabb0d4f",
   "bId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46"
  },
  {
   "a": "Hannah Nussbaum",
   "b": "Lindsey Taaffe",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6.3,
   "avgExpected": 5.4,
   "aId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e",
   "bId": "8c4e6b34-2198-4797-ae86-65f97164eedd"
  },
  {
   "a": "Taylor Peracchio",
   "b": "Pooja Schuster",
   "team": "Pickle Jar",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 11,
   "avgExpected": 10,
   "aId": "4df44e08-a35c-4c4c-a311-861ef4d0897a",
   "bId": "e5e64524-1909-4209-a940-8774d644af72"
  },
  {
   "a": "Amalia Ditrapani",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 1.4,
   "avgExpected": 0.5,
   "aId": "32ac3308-4ddd-496b-8942-ca2422322c06",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Taylor Hartman",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 7,
   "avgExpected": 5.9,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Lilie Sen",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.7,
   "aId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Kishan Shah",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5.3,
   "avgExpected": 4.3,
   "aId": "8ca1f741-6a67-4332-9ca7-082671211098",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Anita Buggins",
   "b": "Nathan Law",
   "team": "Players Courtyard",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 4.3,
   "avgExpected": 3.9,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "a": "Robert Khalev",
   "b": "Matt Schall",
   "team": "The Atlantic Club",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": 0.4,
   "avgActual": -3.2,
   "avgExpected": -3.8,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Joey Angelson",
   "b": "Dipen Bhatt",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.5,
   "avgExpected": 1.6,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Conor Landrigan",
   "team": "Lehigh Valley",
   "n": 21,
   "w": 9,
   "l": 12,
   "synergy": 0.4,
   "avgActual": -0.4,
   "avgExpected": -0.9,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Vi Duong",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -2,
   "avgExpected": -2.9,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "b26cb702-4719-4bd5-bc2f-f4210cf25de4"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Julia Plein",
   "team": "Bounce Philly",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0.4,
   "avgActual": -3,
   "avgExpected": -3.6,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Morgan Fishman",
   "b": "Thomas Dill",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 6.5,
   "avgExpected": 5.7,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "dbb4451c-263d-48e8-88c3-de221796f55b"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 11,
   "w": 4,
   "l": 7,
   "synergy": 0.4,
   "avgActual": -0.8,
   "avgExpected": -1.4,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Anita Buggins",
   "b": "Coby Golinkoff",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1,
   "avgExpected": 0.2,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "abe67fc6-e179-4ebc-babb-052f0666086b"
  },
  {
   "a": "Kenoa Tio",
   "b": "Kaylyn Swankoski",
   "team": "Bounce Malvern",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.4,
   "avgActual": 2.9,
   "avgExpected": 2.3,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.3,
   "avgExpected": 1.4,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Chelsea Pan",
   "b": "Bessie Hu",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -9,
   "avgExpected": -9.8,
   "aId": "1cbb6d7f-3b53-4fdd-a9dd-c1aa8362904a",
   "bId": "6914c9fc-a81e-4029-9d8a-2ca4c8b9fd59"
  },
  {
   "a": "Will Kayal",
   "b": "Shreyas Pani",
   "team": "Pickle Jar",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.9,
   "avgExpected": 2.3,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Yuki Kim",
   "b": "Ozair Ibrahim",
   "team": "Bounce Malvern",
   "n": 13,
   "w": 9,
   "l": 4,
   "synergy": 0.4,
   "avgActual": 2.6,
   "avgExpected": 2.1,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Eva Danieli",
   "b": "Matt Schall",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": -0.7,
   "avgExpected": -1.7,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Matt Schall",
   "b": "Samuel Levinson",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -4.4,
   "avgExpected": -5.1,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "a": "Adrienne Butrymowicz",
   "b": "Joey Angelson",
   "team": "The Atlantic Club",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 0.4,
   "avgActual": -1.4,
   "avgExpected": -1.9,
   "aId": "279df046-e022-4adf-a5ea-4072a29d9622",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Kerry Schaffer",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -2.7,
   "avgExpected": -3.6,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744"
  },
  {
   "a": "Susan Ackley",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4.7,
   "avgExpected": 3.8,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Corey Maryles",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 3.4,
   "avgExpected": 2.6,
   "aId": "a0d313f4-dca8-4931-8c34-1ad812541550",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Conor Landrigan",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.4,
   "avgActual": -1,
   "avgExpected": -1.6,
   "aId": "931df78f-b759-497d-ba8d-be7d3f41f668",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Dustin Rabinowitz",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 5.1,
   "avgExpected": 4.5,
   "aId": "d23839c0-334b-4423-9305-0c6281523d5d",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Rich Gaborow",
   "b": "Brad Oldham",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -2.7,
   "avgExpected": -3.5,
   "aId": "4482c5d0-0106-41d5-8214-d5e0aabb0d4f",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Christian Fechter",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1,
   "avgExpected": 0.1,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "9a973334-7467-4873-9aa6-ca3a597e8caa"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.5,
   "avgExpected": 0,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Leo Kupferman",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 5,
   "avgExpected": 4.4,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "a5b2e149-de36-4d75-80af-218a03ff590d"
  },
  {
   "a": "Daniel Kulik",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.3,
   "avgActual": 0.3,
   "avgExpected": -0.1,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Daniel Kulik",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 4.4,
   "avgExpected": 3.9,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Alex Abad",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -3.8,
   "avgExpected": -4.3,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Kerry Schaffer",
   "b": "Matthew Lucas",
   "team": "Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.4,
   "aId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744",
   "bId": "ce28bf66-5027-4f8b-b579-aa99d2ac96d3"
  },
  {
   "a": "Chris Bucaro",
   "b": "Thomas Dill",
   "team": "Monroe",
   "n": 11,
   "w": 11,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 7.8,
   "avgExpected": 7.4,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "dbb4451c-263d-48e8-88c3-de221796f55b"
  },
  {
   "a": "Nate Otto",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -0.1,
   "avgExpected": -0.5,
   "aId": "70e57f6a-3b00-4620-8c63-b1445cf7aab2",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Rayna Baizman",
   "b": "Jeff Comer",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.2,
   "avgExpected": 2.7,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "a": "Anthony Leung",
   "b": "Lawrence Ly",
   "team": "Pickleball HQ",
   "n": 14,
   "w": 6,
   "l": 8,
   "synergy": 0.3,
   "avgActual": -1.9,
   "avgExpected": -2.3,
   "aId": "48457f37-29a2-47e7-8b2e-62316ad44feb",
   "bId": "a0a1cac1-7dc1-4058-bcc4-858517823a85"
  },
  {
   "a": "Jessica Pevny",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1.1,
   "avgExpected": 0.7,
   "aId": "f472188b-24d9-4bf7-9f70-746d496f57d4",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Jesse Rosenberg",
   "b": "Saif Sarwar",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -2,
   "avgExpected": -2.7,
   "aId": "7fabbb34-3132-4dd7-93cc-ff6c31adac27",
   "bId": "84375a64-3885-43be-ba98-0f520f51c11b"
  },
  {
   "a": "Adrienne Butrymowicz",
   "b": "Michael Swell",
   "team": "The Atlantic Club",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -0.8,
   "avgExpected": -1.3,
   "aId": "279df046-e022-4adf-a5ea-4072a29d9622",
   "bId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "a": "Hruday Vemparala",
   "b": "John Gargana",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0.8,
   "avgExpected": 0.2,
   "aId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285",
   "bId": "e7ead4ec-3ab0-469f-9122-0a822f068415"
  },
  {
   "a": "Amalia Ditrapani",
   "b": "Thomas Dill",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 4,
   "avgExpected": 3.4,
   "aId": "32ac3308-4ddd-496b-8942-ca2422322c06",
   "bId": "dbb4451c-263d-48e8-88c3-de221796f55b"
  },
  {
   "a": "Jessica Hendry",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.3,
   "avgExpected": 2.5,
   "aId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Joey Angelson",
   "b": "Samuel Levinson",
   "team": "The Atlantic Club",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -2.3,
   "avgExpected": -2.8,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.5,
   "avgExpected": 3.9,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Beatriz Lopez Albarracin",
   "b": "Alvaro Regalado",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1.5,
   "avgExpected": 1,
   "aId": "73603f18-0adb-48db-8375-1a6deff6ddbb",
   "bId": "9e056bf3-21d0-43e3-b7e5-e245f8d0b154"
  },
  {
   "a": "Vishal Talreja",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.2,
   "avgExpected": 0.7,
   "aId": "0f247a76-b314-4205-8245-1cfc2fcbc655",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Taylor Peracchio",
   "b": "Gissel Escalante",
   "team": "Pickle Jar",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 8.3,
   "avgExpected": 7.7,
   "aId": "4df44e08-a35c-4c4c-a311-861ef4d0897a",
   "bId": "63221cc8-e303-4675-8dde-4fc77e871627"
  },
  {
   "a": "Kristine Brink",
   "b": "Joshua Octaviano",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -7.3,
   "avgExpected": -8,
   "aId": "24376866-24f2-4295-aecd-bfc95ca9ecbb",
   "bId": "37c7c06b-1600-450e-9f14-61d397872bc6"
  },
  {
   "a": "Kenoa Tio",
   "b": "Trang Nguyen (Smile)",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1.7,
   "avgExpected": 0.9,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "60eb4808-3d54-429f-9910-11b14939a230"
  },
  {
   "a": "Trang Nguyen (Smile)",
   "b": "Kaylyn Swankoski",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 4,
   "avgExpected": 3.3,
   "aId": "60eb4808-3d54-429f-9910-11b14939a230",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Ethan Henigan",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -4.2,
   "avgExpected": -4.7,
   "aId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "Nick Dehmer",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.7,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Chris Bucaro",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 22,
   "w": 11,
   "l": 11,
   "synergy": 0.2,
   "avgActual": 0.6,
   "avgExpected": 0.4,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Maanav Shah",
   "b": "Catherine Stewart",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2.8,
   "avgExpected": 2.4,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "112622af-3d12-4dba-ad36-7601c8e6021c"
  },
  {
   "a": "Emily Su",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -7.7,
   "avgExpected": -8.2,
   "aId": "027988d5-1c42-4102-b21a-bfce0434d664",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Yoyo Shen",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 5.5,
   "avgExpected": 5.1,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Hugh Laroque",
   "team": "Bounce Malvern",
   "n": 20,
   "w": 14,
   "l": 6,
   "synergy": 0.2,
   "avgActual": 1.2,
   "avgExpected": 1,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "93c534a1-a23c-451f-8c73-3515f8a19bd5"
  },
  {
   "a": "Kristine Brink",
   "b": "Anthony Leung",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -6.2,
   "avgExpected": -6.7,
   "aId": "24376866-24f2-4295-aecd-bfc95ca9ecbb",
   "bId": "48457f37-29a2-47e7-8b2e-62316ad44feb"
  },
  {
   "a": "Paula Ro",
   "b": "Ruhi Shah",
   "team": "Pickle Jar",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 4.8,
   "avgExpected": 4.5,
   "aId": "27908231-74bb-4956-adc4-5429e16e55ea",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Chaille Godinez",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2.2,
   "avgExpected": 1.8,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Claire Gaston",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 2.7,
   "avgExpected": 2.4,
   "aId": "7f62f4db-d0cf-4990-a324-63aeb985a840",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Matt Schall",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -3.7,
   "avgExpected": -4.1,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Susan Ackley",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.4,
   "avgExpected": -0.8,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Johanna Wagner",
   "b": "Noelle Ramirez",
   "team": "Home Court",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 7,
   "avgExpected": 6.7,
   "aId": "e447eb0f-dc19-4616-a7f4-b53de776db3b",
   "bId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "a": "Joel Phillips",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.5,
   "avgExpected": -0.8,
   "aId": "8f292eb8-a014-4618-9c0e-114c26463233",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Gift Horn",
   "b": "Chrissy Sandella",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.6,
   "aId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "bId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b"
  },
  {
   "a": "Anthony Ursino",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.3,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Claire Gaston",
   "b": "Thomas Dill",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 8,
   "avgExpected": 7.6,
   "aId": "7f62f4db-d0cf-4990-a324-63aeb985a840",
   "bId": "dbb4451c-263d-48e8-88c3-de221796f55b"
  },
  {
   "a": "Beatriz Lopez Albarracin",
   "b": "Gift Horn",
   "team": "Home Court",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 4.2,
   "avgExpected": 3.8,
   "aId": "73603f18-0adb-48db-8375-1a6deff6ddbb",
   "bId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "a": "Lilie Sen",
   "b": "Andrew Wakefield",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1.5,
   "avgExpected": 1.1,
   "aId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "bId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "a": "Pearly Leung",
   "b": "Manpreet Singh",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.5,
   "aId": "581070ec-7106-4558-bc86-4df0675682cb",
   "bId": "c7023f76-4d31-4566-a606-ef047e1220ad"
  },
  {
   "a": "Zachary Adler",
   "b": "Beatriz Lopez Albarracin",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.5,
   "aId": "1a45849d-879b-40a2-a0df-ec262414d1c3",
   "bId": "73603f18-0adb-48db-8375-1a6deff6ddbb"
  },
  {
   "a": "Melody Grohotolski",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -3.4,
   "avgExpected": -3.8,
   "aId": "98c341d7-59e6-4f63-abf0-8bebd5644186",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Kishan Shah",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.7,
   "avgExpected": 3.1,
   "aId": "8ca1f741-6a67-4332-9ca7-082671211098",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Anita Buggins",
   "b": "Hector Irizarry",
   "team": "Players Courtyard",
   "n": 14,
   "w": 12,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 6.1,
   "avgExpected": 6.1,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Jon Cedotal",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -2.6,
   "avgExpected": -2.7,
   "aId": "2a7a3b43-2d24-469a-b8a6-7f60da866270",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Dylan Unkert",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.6,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Matt Schall",
   "b": "Dipen Bhatt",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1.1,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Julia Plein",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -5,
   "avgExpected": -5.1,
   "aId": "f3d99274-413c-4720-9c8d-1a71f9b2e717",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Anthony Leung",
   "b": "Saif Sarwar",
   "team": "Pickleball HQ",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -2,
   "avgExpected": -2.1,
   "aId": "48457f37-29a2-47e7-8b2e-62316ad44feb",
   "bId": "84375a64-3885-43be-ba98-0f520f51c11b"
  },
  {
   "a": "Taylor Peracchio",
   "b": "Daniel Gallegos",
   "team": "Pickle Jar",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.7,
   "aId": "4df44e08-a35c-4c4c-a311-861ef4d0897a",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Taylor Peracchio",
   "b": "David Lavy",
   "team": "Pickle Jar",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 3.5,
   "avgExpected": 3.3,
   "aId": "4df44e08-a35c-4c4c-a311-861ef4d0897a",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Patrick Ryan",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 16,
   "w": 7,
   "l": 9,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.1,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.3,
   "avgExpected": 2.2,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Matthew Matro",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.8,
   "avgExpected": 0.7,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "a": "Tyler Arsenault",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 1.1,
   "avgExpected": 1,
   "aId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Eric Kutzin",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.8,
   "avgExpected": 0.6,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "c62728d5-ec2b-4ce7-b0e9-83a34fa325b1"
  },
  {
   "a": "Jordan Denish",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.1,
   "aId": "8ae25144-966d-4de1-9cb3-513f7f217170",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Bruno Casino Remondo",
   "team": "Bounce Philly",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": 0.1,
   "avgActual": -1.2,
   "avgExpected": -1.3,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "eb557a63-d8c4-46b4-9f21-67f59731f20f"
  },
  {
   "a": "Bruno Casino Remondo",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -0.4,
   "avgExpected": -0.6,
   "aId": "eb557a63-d8c4-46b4-9f21-67f59731f20f",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Jeff Comer",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 0,
   "avgExpected": -0.1,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "a": "Maanav Shah",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.7,
   "avgExpected": -1,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -3.2,
   "avgExpected": -3.4,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Rachel Alfano",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.8,
   "avgExpected": 1.6,
   "aId": "ce7aca89-06ac-4cd9-8944-a482216ffd58",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Muhammad Usman",
   "b": "Elysia Price",
   "team": "Pickle Jar",
   "n": 14,
   "w": 11,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 3.2,
   "avgExpected": 3.1,
   "aId": "8adf5cec-e3bf-4b0e-9a7c-7d1ed650bddb",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Ethan Henigan",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro",
   "n": 14,
   "w": 6,
   "l": 8,
   "synergy": 0.1,
   "avgActual": -1.8,
   "avgExpected": -1.9,
   "aId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Rayna Baizman",
   "b": "Lindsey Taaffe",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.6,
   "avgExpected": 2.4,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "8c4e6b34-2198-4797-ae86-65f97164eedd"
  },
  {
   "a": "Hruday Vemparala",
   "b": "Noelle Ramirez",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.3,
   "aId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285",
   "bId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "a": "Ethan Henigan",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -0.2,
   "avgExpected": -0.4,
   "aId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Jeffrey Lyons",
   "b": "Geoff Watson",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "100d1860-64f4-4cbe-bc6e-985509a01143",
   "bId": "41191982-ca10-4665-8eb2-6d5231b4a0c4"
  },
  {
   "a": "Rebecca Arleth",
   "b": "Samuel Levinson",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -2,
   "avgExpected": -2.3,
   "aId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46",
   "bId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "a": "Rich Gaborow",
   "b": "Samuel Levinson",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -2.7,
   "avgExpected": -2.8,
   "aId": "4482c5d0-0106-41d5-8214-d5e0aabb0d4f",
   "bId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "a": "Yoyo Shen",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 5.3,
   "avgExpected": 5.1,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Susan Ackley",
   "b": "Chanda Mccoy",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -3.7,
   "avgExpected": -4,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "a": "Chris Damato",
   "b": "Kishan Shah",
   "team": "Pickle House",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0,
   "avgActual": 1.3,
   "avgExpected": 1.3,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Christian Fechter",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0,
   "avgActual": 6.2,
   "avgExpected": 6.2,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "9a973334-7467-4873-9aa6-ca3a597e8caa"
  },
  {
   "a": "Catherine Stewart",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 0,
   "avgActual": -0.6,
   "avgExpected": -0.5,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Suzi Battison",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 18,
   "w": 15,
   "l": 3,
   "synergy": 0,
   "avgActual": 4.3,
   "avgExpected": 4.3,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Will Kayal",
   "b": "Melissa Dardani",
   "team": "Pickle Jar",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 5.2,
   "avgExpected": 5.2,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.6,
   "avgExpected": 1.6,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Dominique Damerjian",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0,
   "avgActual": -0.1,
   "avgExpected": -0.2,
   "aId": "733e7853-0fc0-40ee-a7ca-a0f00ef6fa7c",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Jase Volz",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.8,
   "avgExpected": 0.8,
   "aId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Arianna Haresign",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0,
   "avgActual": 2.6,
   "avgExpected": 2.5,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Robbie Oddy",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 12,
   "w": 6,
   "l": 6,
   "synergy": 0,
   "avgActual": 1.1,
   "avgExpected": 1.1,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Kristine Brink",
   "b": "Joshua Ahn",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -3.3,
   "avgExpected": -3.3,
   "aId": "24376866-24f2-4295-aecd-bfc95ca9ecbb",
   "bId": "fff3fe71-d4a6-4103-9290-0ef57035471c"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Joey Angelson",
   "team": "The Atlantic Club",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -2,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Susan Ackley",
   "b": "Nate Otto",
   "team": "Flemington",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0,
   "avgActual": 0.6,
   "avgExpected": 0.6,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "70e57f6a-3b00-4620-8c63-b1445cf7aab2"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Camrin Cronheim",
   "team": "Pickle Jar",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.5,
   "avgExpected": 1.6,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Taylor Hartman",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0,
   "avgActual": 4,
   "avgExpected": 4.1,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "a": "Lindsey Taaffe",
   "b": "Jeff Comer",
   "team": "Bounce Malvern",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": 0,
   "avgActual": 3.8,
   "avgExpected": 3.9,
   "aId": "8c4e6b34-2198-4797-ae86-65f97164eedd",
   "bId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "a": "Joel Phillips",
   "b": "Garv Singhal",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -1.2,
   "avgExpected": -1.2,
   "aId": "8f292eb8-a014-4618-9c0e-114c26463233",
   "bId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Christian Fechter",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 1.3,
   "avgExpected": 1.3,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "9a973334-7467-4873-9aa6-ca3a597e8caa"
  },
  {
   "a": "Chrissy Sandella",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.5,
   "avgExpected": 3.6,
   "aId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Thomas Dill",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.6,
   "avgExpected": 2.7,
   "aId": "dbb4451c-263d-48e8-88c3-de221796f55b",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Shreyas Pani",
   "b": "Elysia Price",
   "team": "Pickle Jar",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.7,
   "avgExpected": 1.6,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Kenoa Tio",
   "b": "Hannah Nussbaum",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0,
   "avgActual": 1.1,
   "avgExpected": 1.1,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "a": "Robert Schimony",
   "b": "Garv Singhal",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -3.3,
   "avgExpected": -3.4,
   "aId": "b85c2074-a149-4382-8563-e1ff5b5d70bc",
   "bId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "a": "Adrienne Butrymowicz",
   "b": "Rebecca Arleth",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -3.7,
   "avgExpected": -3.8,
   "aId": "279df046-e022-4adf-a5ea-4072a29d9622",
   "bId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46"
  },
  {
   "a": "Alex Boory",
   "b": "Julia Plein",
   "team": "Bounce Philly",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0,
   "avgActual": -1.2,
   "avgExpected": -1.3,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Stacy Walkowitz",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.6,
   "aId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Stacy Walkowitz",
   "team": "Players Courtyard",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -0.2,
   "avgExpected": 0,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Lilie Sen",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.1,
   "avgActual": -4.7,
   "avgExpected": -4.6,
   "aId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Nick Dehmer",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.2,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Corey Maryles",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.1,
   "avgActual": 1.9,
   "avgExpected": 2,
   "aId": "a0d313f4-dca8-4931-8c34-1ad812541550",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 15,
   "w": 8,
   "l": 7,
   "synergy": -0.1,
   "avgActual": 0.9,
   "avgExpected": 1.1,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Alex Abad",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.4,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Maanav Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 15,
   "w": 13,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 4.1,
   "avgExpected": 4.2,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Ann Betterton",
   "b": "Ceil Gomez",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -9.3,
   "avgExpected": -9.1,
   "aId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "bId": "e1cb1b3c-8e14-423b-bf0f-5ad2dabd6a4c"
  },
  {
   "a": "Courtney Greener",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -0.8,
   "avgExpected": -0.7,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Nate Otto",
   "team": "Flemington",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -0.5,
   "avgExpected": -0.4,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "70e57f6a-3b00-4620-8c63-b1445cf7aab2"
  },
  {
   "a": "Taylor Peracchio",
   "b": "Elysia Price",
   "team": "Pickle Jar",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3.6,
   "avgExpected": 3.7,
   "aId": "4df44e08-a35c-4c4c-a311-861ef4d0897a",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Ruhi Shah",
   "b": "Melissa Dardani",
   "team": "Pickle Jar",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 5,
   "avgExpected": 5.2,
   "aId": "a2d56e71-3895-4316-9e9e-17565fb62295",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Muhammad Usman",
   "b": "Ruhi Shah",
   "team": "Pickle Jar",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 4.7,
   "avgExpected": 4.8,
   "aId": "8adf5cec-e3bf-4b0e-9a7c-7d1ed650bddb",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Hugh Laroque",
   "b": "Corey Reinhart",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -4,
   "avgExpected": -3.9,
   "aId": "93c534a1-a23c-451f-8c73-3515f8a19bd5",
   "bId": "e67b0b81-0f98-44b5-b09f-3dc19785e36d"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Ashley Georgevich",
   "team": "Pickleball Palace",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 4.1,
   "avgExpected": 4.2,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "6953916c-867d-42fe-89ad-444aee6d40e8"
  },
  {
   "a": "Julia Sternberg",
   "b": "Julia Plein",
   "team": "Bounce Philly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -4.2,
   "avgExpected": -4.1,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Dustin Rabinowitz",
   "b": "Bruno Casino Remondo",
   "team": "Bounce Philly",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4,
   "avgExpected": 4.1,
   "aId": "d23839c0-334b-4423-9305-0c6281523d5d",
   "bId": "eb557a63-d8c4-46b4-9f21-67f59731f20f"
  },
  {
   "a": "Arianna Haresign",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.6,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Matthew Matro",
   "b": "Sophy Siv",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.6,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "ad5025f0-478c-47b3-a437-85e53a87daa2"
  },
  {
   "a": "Johanna Wagner",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 4.7,
   "avgExpected": 4.8,
   "aId": "e447eb0f-dc19-4616-a7f4-b53de776db3b",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Manpreet Singh",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.8,
   "avgExpected": 2.9,
   "aId": "c7023f76-4d31-4566-a606-ef047e1220ad",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Courtney Greener",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -1.5,
   "avgExpected": -1.4,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.5,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Lawrence Ly",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -8,
   "avgExpected": -7.7,
   "aId": "a0a1cac1-7dc1-4058-bcc4-858517823a85",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Dominique Damerjian",
   "b": "Johny Mario",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -3.5,
   "avgExpected": -3.3,
   "aId": "733e7853-0fc0-40ee-a7ca-a0f00ef6fa7c",
   "bId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "a": "Christian Fechter",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 1.5,
   "avgExpected": 1.7,
   "aId": "9a973334-7467-4873-9aa6-ca3a597e8caa",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Anthony Ursino",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.4,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Margaret Robb",
   "b": "Samuel Levinson",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -3.2,
   "avgExpected": -3.1,
   "aId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7",
   "bId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "a": "Anthony Ursino",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1.7,
   "avgExpected": 2,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Gissel Escalante",
   "b": "James Cannizzaro",
   "team": "Pickle Jar",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2,
   "avgExpected": 2.3,
   "aId": "63221cc8-e303-4675-8dde-4fc77e871627",
   "bId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "a": "Joseph Lobiondo",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.4,
   "aId": "031ef107-13a7-436a-9be5-5004d1aec615",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Melody Grohotolski",
   "b": "Rj Wohlbach",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -6,
   "avgExpected": -5.8,
   "aId": "98c341d7-59e6-4f63-abf0-8bebd5644186",
   "bId": "ade27a80-12bd-4b34-ba80-0b844b270c8f"
  },
  {
   "a": "Lindsey Thoeng",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 6.2,
   "avgExpected": 6.5,
   "aId": "67977901-2346-49bb-93df-b59d31cb9a30",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro",
   "n": 15,
   "w": 7,
   "l": 8,
   "synergy": -0.2,
   "avgActual": -0.7,
   "avgExpected": -0.5,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.5,
   "avgExpected": 2.8,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Jenna Irwin",
   "b": "Leo Kupferman",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 4,
   "avgExpected": 4.4,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "a5b2e149-de36-4d75-80af-218a03ff590d"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 11,
   "w": 3,
   "l": 8,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.4,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Gog Boonswang",
   "b": "Matthew Lucas",
   "team": "Lehigh Valley",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -0.6,
   "avgExpected": -0.3,
   "aId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68",
   "bId": "ce28bf66-5027-4f8b-b579-aa99d2ac96d3"
  },
  {
   "a": "Maanav Shah",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": -0.2,
   "avgActual": 2.4,
   "avgExpected": 2.6,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Nicholas Leung",
   "b": "Jesse Rosenberg",
   "team": "Pickleball HQ",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -6.2,
   "avgExpected": -5.8,
   "aId": "583f4ed0-33f8-4e51-8642-089f7d7e0239",
   "bId": "7fabbb34-3132-4dd7-93cc-ff6c31adac27"
  },
  {
   "a": "Dilan Shah",
   "b": "Thomas Dill",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 6.3,
   "avgExpected": 6.8,
   "aId": "91d23f87-e0fc-4448-890e-c3abd96c70b4",
   "bId": "dbb4451c-263d-48e8-88c3-de221796f55b"
  },
  {
   "a": "Richa Shah",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": -0.2,
   "avgActual": 0.4,
   "avgExpected": 0.7,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Anita Buggins",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 3.3,
   "avgExpected": 3.6,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Thomas Connolly",
   "b": "Nate Otto",
   "team": "Flemington",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -1.6,
   "avgExpected": -1.3,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "70e57f6a-3b00-4620-8c63-b1445cf7aab2"
  },
  {
   "a": "Patrick Ceccacci",
   "b": "Leo Kupferman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1,
   "avgExpected": 1.4,
   "aId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c",
   "bId": "a5b2e149-de36-4d75-80af-218a03ff590d"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Ozair Ibrahim",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.5,
   "avgExpected": 2.9,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Julia Sternberg",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -3.7,
   "avgExpected": -3.2,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Alicia Reed",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -3.2,
   "avgExpected": -2.8,
   "aId": "3bebe02b-0d94-423c-b9c2-3420004a6d18",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Kenoa Tio",
   "b": "Lindsey Taaffe",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 1.6,
   "avgExpected": 2,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "8c4e6b34-2198-4797-ae86-65f97164eedd"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Lindsey Taaffe",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.5,
   "avgExpected": 2.9,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "8c4e6b34-2198-4797-ae86-65f97164eedd"
  },
  {
   "a": "Nathan Law",
   "b": "Stacy Walkowitz",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.8,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Melody Grohotolski",
   "b": "Katarzyna Clevenger",
   "team": "Lehigh Valley",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3.5,
   "avgExpected": -2.8,
   "aId": "98c341d7-59e6-4f63-abf0-8bebd5644186",
   "bId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "a": "Kerry Schaffer",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.3,
   "avgActual": -4.1,
   "avgExpected": -3.6,
   "aId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Geoff Watson",
   "b": "Brian Strehle",
   "team": "Lehigh Valley",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1.2,
   "avgExpected": -0.7,
   "aId": "41191982-ca10-4665-8eb2-6d5231b4a0c4",
   "bId": "4565a452-004a-47c0-9700-aab647415acf"
  },
  {
   "a": "Hector Irizarry",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.3,
   "avgExpected": 2.8,
   "aId": "a50a69d0-0a8c-4241-b768-846b1591d180",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Dylan Unkert",
   "b": "Lindsey Thoeng",
   "team": "Pickle House",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 4.2,
   "avgExpected": 4.6,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "a": "Leo Kupferman",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 3.7,
   "avgExpected": 4.4,
   "aId": "a5b2e149-de36-4d75-80af-218a03ff590d",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Brad Oldham",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -7.7,
   "avgExpected": -7,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Saif Sarwar",
   "b": "Cami Lee",
   "team": "Pickleball HQ",
   "n": 12,
   "w": 1,
   "l": 11,
   "synergy": -0.3,
   "avgActual": -4.6,
   "avgExpected": -4.2,
   "aId": "84375a64-3885-43be-ba98-0f520f51c11b",
   "bId": "fe88c083-3162-4d64-901c-710c2e0ef84c"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Jeff Comer",
   "team": "Bounce Malvern",
   "n": 14,
   "w": 11,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 3.1,
   "avgExpected": 3.5,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "a": "Arianna Haresign",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 14,
   "w": 8,
   "l": 6,
   "synergy": -0.3,
   "avgActual": 0.5,
   "avgExpected": 0.8,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Nicholas Leung",
   "b": "Bessie Hu",
   "team": "Pickleball HQ",
   "n": 10,
   "w": 1,
   "l": 9,
   "synergy": -0.3,
   "avgActual": -6.5,
   "avgExpected": -6.1,
   "aId": "583f4ed0-33f8-4e51-8642-089f7d7e0239",
   "bId": "6914c9fc-a81e-4029-9d8a-2ca4c8b9fd59"
  },
  {
   "a": "Shreyas Pani",
   "b": "Taylor Peracchio",
   "team": "Pickle Jar",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 3.4,
   "avgExpected": 3.9,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "4df44e08-a35c-4c4c-a311-861ef4d0897a"
  },
  {
   "a": "Maanav Shah",
   "b": "Amanda Ksiezopolski",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1.2,
   "avgExpected": -0.6,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "a": "Jerry Hine",
   "b": "Jeff Wiedemann",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.7,
   "avgExpected": -0.9,
   "aId": "2f7417e0-7b26-4846-a1f4-9901c27bea7e",
   "bId": "db67ae5b-a83f-4a72-a2da-5a510171f31a"
  },
  {
   "a": "Charlotte Healey",
   "b": "Kathleen Dougherty",
   "team": "Bounce Philly",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.3,
   "avgActual": -3.6,
   "avgExpected": -3.1,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "a": "Lilie Sen",
   "b": "Joel Phillips",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -2.4,
   "avgExpected": -1.9,
   "aId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "bId": "8f292eb8-a014-4618-9c0e-114c26463233"
  },
  {
   "a": "Zach Bowe",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.3,
   "avgExpected": 2.9,
   "aId": "eebadc3a-5763-4612-9232-d3a98ea188d6",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Jordan Denish",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1.1,
   "avgExpected": 1.7,
   "aId": "8ae25144-966d-4de1-9cb3-513f7f217170",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Rebecca Arleth",
   "b": "Joey Angelson",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -7,
   "avgExpected": -6.4,
   "aId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Andrew Province",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -0.2,
   "avgExpected": 0.3,
   "aId": "90c339d7-a7a8-4eec-b365-c51955d9801b",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Robert Schimony",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5.3,
   "avgExpected": -4.6,
   "aId": "b85c2074-a149-4382-8563-e1ff5b5d70bc",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Gog Boonswang",
   "b": "Geoff Watson",
   "team": "Lehigh Valley",
   "n": 14,
   "w": 3,
   "l": 11,
   "synergy": -0.4,
   "avgActual": -3,
   "avgExpected": -2.5,
   "aId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68",
   "bId": "41191982-ca10-4665-8eb2-6d5231b4a0c4"
  },
  {
   "a": "Nathan Law",
   "b": "Coby Golinkoff",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 1,
   "avgExpected": 2,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "abe67fc6-e179-4ebc-babb-052f0666086b"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Nick Dehmer",
   "team": "Pickle House",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 2.7,
   "avgExpected": 3.3,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "a": "Ethan Henigan",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -3,
   "avgExpected": -2.3,
   "aId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Lindsey Thoeng",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 0.8,
   "avgExpected": 1.5,
   "aId": "67977901-2346-49bb-93df-b59d31cb9a30",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Kishan Shah",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": -0.4,
   "avgActual": 0.5,
   "avgExpected": 1.1,
   "aId": "8ca1f741-6a67-4332-9ca7-082671211098",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Robert Khalev",
   "b": "Joey Angelson",
   "team": "The Atlantic Club",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.4,
   "avgActual": -5.1,
   "avgExpected": -4.5,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 5.3,
   "avgExpected": 5.9,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 5.7,
   "avgExpected": 6.3,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Eric Lin",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0.5,
   "avgExpected": 1.4,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Morgan Fishman",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0.3,
   "avgExpected": 1,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Courtney Greener",
   "b": "Suzi Battison",
   "team": "Flemington",
   "n": 14,
   "w": 8,
   "l": 6,
   "synergy": -0.4,
   "avgActual": 3.6,
   "avgExpected": 4.1,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "a": "Elysia Price",
   "b": "Rahul Datta",
   "team": "Pickle Jar",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.8,
   "avgExpected": -2,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "acb08227-47a5-40fc-b720-3531084980f6"
  },
  {
   "a": "Robbie Oddy",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -0.3,
   "avgExpected": 0.3,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 14,
   "w": 5,
   "l": 9,
   "synergy": -0.4,
   "avgActual": -2.2,
   "avgExpected": -1.7,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Matthew Matro",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": -0.4,
   "avgActual": -1.8,
   "avgExpected": -1.2,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 4,
   "avgExpected": 4.8,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Daniel Kulik",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 0.8,
   "avgExpected": 1.4,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Eugene Zaslavsky",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0.3,
   "avgExpected": 1.2,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "a": "Gift Horn",
   "b": "Hruday Vemparala",
   "team": "Home Court",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 1.1,
   "avgExpected": 1.7,
   "aId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "bId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "a": "Lilie Sen",
   "b": "Ethan Henigan",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -3.2,
   "avgExpected": -2.5,
   "aId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "bId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Garv Singhal",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -0.1,
   "avgExpected": 0.4,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "a": "Maanav Shah",
   "b": "Anthony Ursino",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 1.3,
   "avgExpected": 2.3,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "1406ff1f-3597-4128-a629-7dfd1dfe1323"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Nick Dehmer",
   "team": "Pickle House",
   "n": 12,
   "w": 9,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 2.7,
   "avgExpected": 3.3,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "a": "Gog Boonswang",
   "b": "Conor Landrigan",
   "team": "Lehigh Valley",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": -0.5,
   "avgActual": -3.3,
   "avgExpected": -2.7,
   "aId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68",
   "bId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "a": "Conor Landrigan",
   "b": "Katarzyna Clevenger",
   "team": "Lehigh Valley",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.5,
   "avgActual": -1.4,
   "avgExpected": -0.6,
   "aId": "931df78f-b759-497d-ba8d-be7d3f41f668",
   "bId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.2,
   "avgExpected": -0.3,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Eric Lin",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 4,
   "avgExpected": 5.2,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Dominique Damerjian",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -2.1,
   "avgExpected": -1.4,
   "aId": "733e7853-0fc0-40ee-a7ca-a0f00ef6fa7c",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Rachel Berger",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -4.5,
   "avgExpected": -3.7,
   "aId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Arianna Haresign",
   "b": "Jase Volz",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -0.5,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Suzi Battison",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 3.7,
   "avgExpected": 4.9,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Chaille Godinez",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -2,
   "avgExpected": -1.1,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Hruday Vemparala",
   "team": "Home Court",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 1,
   "avgExpected": 1.9,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "a": "Emily Miller",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -5.7,
   "avgExpected": -4.5,
   "aId": "6ddfb7dc-84b5-403c-b5dc-6fe39bc3852c",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Patrick Ceccacci",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -1.4,
   "avgExpected": -0.6,
   "aId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Paula Ro",
   "b": "James Cannizzaro",
   "team": "Pickle Jar",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.3,
   "avgExpected": 3.5,
   "aId": "27908231-74bb-4956-adc4-5429e16e55ea",
   "bId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "a": "Alex Boory",
   "b": "Kathleen Dougherty",
   "team": "Bounce Philly",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3,
   "avgExpected": -2.1,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "a": "Bessie Hu",
   "b": "Cami Lee",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -8,
   "avgExpected": -7,
   "aId": "6914c9fc-a81e-4029-9d8a-2ca4c8b9fd59",
   "bId": "fe88c083-3162-4d64-901c-710c2e0ef84c"
  },
  {
   "a": "Alvaro Regalado",
   "b": "Gift Horn",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": 0.1,
   "aId": "9e056bf3-21d0-43e3-b7e5-e245f8d0b154",
   "bId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "a": "Coby Golinkoff",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -3.2,
   "avgExpected": -2.2,
   "aId": "abe67fc6-e179-4ebc-babb-052f0666086b",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Geoff Watson",
   "b": "Kerry Schaffer",
   "team": "Lehigh Valley",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.6,
   "avgActual": -3.2,
   "avgExpected": -2.1,
   "aId": "41191982-ca10-4665-8eb2-6d5231b4a0c4",
   "bId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744"
  },
  {
   "a": "Geoff Watson",
   "b": "Matthew Lucas",
   "team": "Lehigh Valley",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 0.7,
   "avgExpected": 1.6,
   "aId": "41191982-ca10-4665-8eb2-6d5231b4a0c4",
   "bId": "ce28bf66-5027-4f8b-b579-aa99d2ac96d3"
  },
  {
   "a": "Nicholas Leung",
   "b": "Joshua Ahn",
   "team": "Pickleball HQ",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.6,
   "avgActual": -2.7,
   "avgExpected": -1.9,
   "aId": "583f4ed0-33f8-4e51-8642-089f7d7e0239",
   "bId": "fff3fe71-d4a6-4103-9290-0ef57035471c"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 11,
   "w": 4,
   "l": 7,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -1.2,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Suzi Battison",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 2.7,
   "avgExpected": 4,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Paula Ro",
   "b": "Rahul Datta",
   "team": "Pickle Jar",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2.3,
   "avgExpected": -0.9,
   "aId": "27908231-74bb-4956-adc4-5429e16e55ea",
   "bId": "acb08227-47a5-40fc-b720-3531084980f6"
  },
  {
   "a": "Patrick Ceccacci",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -2.1,
   "avgExpected": -1.2,
   "aId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Hruday Vemparala",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 1.9,
   "avgExpected": 2.8,
   "aId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": -0.6,
   "avgActual": -3.4,
   "avgExpected": -2.6,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Dylan Unkert",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1.5,
   "avgExpected": -0.2,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Nicholas Leung",
   "b": "Saif Sarwar",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2.7,
   "avgExpected": -1.6,
   "aId": "583f4ed0-33f8-4e51-8642-089f7d7e0239",
   "bId": "84375a64-3885-43be-ba98-0f520f51c11b"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Kenoa Tio",
   "team": "Bounce Malvern",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": -0.6,
   "avgActual": -0.5,
   "avgExpected": 0.4,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 1.3,
   "avgExpected": 2.5,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "James Cannizzaro",
   "b": "Elysia Price",
   "team": "Pickle Jar",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 3.8,
   "avgExpected": 4.9,
   "aId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1.3,
   "avgExpected": 0.2,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Chrissy Sandella",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1,
   "avgExpected": 0.4,
   "aId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Alvaro Regalado",
   "b": "Manpreet Singh",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 0.7,
   "avgExpected": 2.1,
   "aId": "9e056bf3-21d0-43e3-b7e5-e245f8d0b154",
   "bId": "c7023f76-4d31-4566-a606-ef047e1220ad"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Andrew Province",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 0,
   "avgExpected": 1.4,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "90c339d7-a7a8-4eec-b365-c51955d9801b"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Coby Golinkoff",
   "team": "Players Courtyard",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -1.5,
   "avgExpected": -0.3,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "abe67fc6-e179-4ebc-babb-052f0666086b"
  },
  {
   "a": "Gog Boonswang",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -4.1,
   "avgExpected": -3,
   "aId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 14,
   "w": 8,
   "l": 6,
   "synergy": -0.7,
   "avgActual": 0.4,
   "avgExpected": 1.3,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Daniel Kulik",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 2.2,
   "avgExpected": 3.4,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Vi Duong",
   "b": "Matthew Lucas",
   "team": "Lehigh Valley",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -3,
   "avgExpected": -1.8,
   "aId": "b26cb702-4719-4bd5-bc2f-f4210cf25de4",
   "bId": "ce28bf66-5027-4f8b-b579-aa99d2ac96d3"
  },
  {
   "a": "Bessie Hu",
   "b": "Lawrence Ly",
   "team": "Pickleball HQ",
   "n": 14,
   "w": 0,
   "l": 14,
   "synergy": -0.7,
   "avgActual": -7.2,
   "avgExpected": -6.3,
   "aId": "6914c9fc-a81e-4029-9d8a-2ca4c8b9fd59",
   "bId": "a0a1cac1-7dc1-4058-bcc4-858517823a85"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Taylor Peracchio",
   "team": "Pickle Jar",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 4.4,
   "avgExpected": 5.3,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "4df44e08-a35c-4c4c-a311-861ef4d0897a"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Rahul Datta",
   "team": "Pickle Jar",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -1,
   "avgExpected": 0.2,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "acb08227-47a5-40fc-b720-3531084980f6"
  },
  {
   "a": "Catherine Stewart",
   "b": "Amanda Ksiezopolski",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -4.7,
   "avgExpected": -3.1,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "a": "Alex Abad",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -0.7,
   "avgExpected": 0.7,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Kaley Lai",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -4,
   "avgExpected": -2.8,
   "aId": "354f7b98-2207-458f-af42-3e8a7a3630be",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Garv Singhal",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": -1.3,
   "avgExpected": 0.2,
   "aId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Lindsey Taaffe",
   "team": "Bounce Malvern",
   "n": 15,
   "w": 11,
   "l": 4,
   "synergy": -0.7,
   "avgActual": 3.9,
   "avgExpected": 4.7,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "8c4e6b34-2198-4797-ae86-65f97164eedd"
  },
  {
   "a": "Lindsey Taaffe",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 1,
   "avgExpected": 2.4,
   "aId": "8c4e6b34-2198-4797-ae86-65f97164eedd",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Taylor Hartman",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 1,
   "avgExpected": 2.1,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Gift Horn",
   "b": "Noelle Ramirez",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.7,
   "avgActual": 3.7,
   "avgExpected": 5.2,
   "aId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "bId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "James Cannizzaro",
   "team": "Pickle Jar",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.7,
   "avgActual": 6.3,
   "avgExpected": 8,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "a": "James Cannizzaro",
   "b": "Ruhi Shah",
   "team": "Pickle Jar",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 2.3,
   "avgExpected": 4.1,
   "aId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Alex Boory",
   "b": "Bruno Casino Remondo",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.8,
   "avgExpected": 2.1,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "eb557a63-d8c4-46b4-9f21-67f59731f20f"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.3,
   "avgExpected": 1.4,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Susan Ackley",
   "b": "Emily Miller",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -4.7,
   "avgExpected": -3.3,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "6ddfb7dc-84b5-403c-b5dc-6fe39bc3852c"
  },
  {
   "a": "Anita Buggins",
   "b": "Ben Mead",
   "team": "Players Courtyard",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -0.8,
   "avgExpected": 0.5,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "7858dda8-168b-4a84-8d5d-7a6571e9313a"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Joel Phillips",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2.7,
   "avgExpected": -1.1,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "8f292eb8-a014-4618-9c0e-114c26463233"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Julia Sternberg",
   "team": "Bounce Philly",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -9.2,
   "avgExpected": -7.8,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "a": "Jerry Hine",
   "b": "Danielle Bernero",
   "team": "Players Courtyard",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -4.7,
   "avgExpected": -3.4,
   "aId": "2f7417e0-7b26-4846-a1f4-9901c27bea7e",
   "bId": "317f260e-551b-4f91-ab92-71440e5f05be"
  },
  {
   "a": "Joseph Lobiondo",
   "b": "Kara Infante",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -5.7,
   "avgExpected": -4.1,
   "aId": "031ef107-13a7-436a-9be5-5004d1aec615",
   "bId": "06edda3d-3a1f-4010-86fa-8ac767cd7079"
  },
  {
   "a": "Jordan Denish",
   "b": "Madison Turosinski",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.7,
   "avgExpected": 0.9,
   "aId": "8ae25144-966d-4de1-9cb3-513f7f217170",
   "bId": "d650893e-cd89-40d1-9175-69a1a6b5558f"
  },
  {
   "a": "Nathan Law",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": -0.8,
   "avgActual": 1.4,
   "avgExpected": 2.5,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Drew Kolb",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -7,
   "avgExpected": -5.1,
   "aId": "13f4a12a-1af3-4b0a-92b9-48ffe2b9ad64",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 0.1,
   "avgExpected": 1.4,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Christian Fechter",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1.3,
   "avgExpected": 0.6,
   "aId": "9a973334-7467-4873-9aa6-ca3a597e8caa",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Katarzyna Clevenger",
   "team": "Lehigh Valley",
   "n": 13,
   "w": 5,
   "l": 8,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -2,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "a": "Maanav Shah",
   "b": "Thomas Dill",
   "team": "Monroe",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 5.3,
   "avgExpected": 6.5,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "dbb4451c-263d-48e8-88c3-de221796f55b"
  },
  {
   "a": "Chris Damato",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -1.1,
   "avgExpected": 0.2,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Dylan Unkert",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 4.8,
   "avgExpected": 6.3,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Tyler Arsenault",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.7,
   "aId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Rayna Baizman",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0.8,
   "avgExpected": 2.4,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "108620c9-1cbb-4ea0-846c-bc781f1decea"
  },
  {
   "a": "Gift Horn",
   "b": "Manpreet Singh",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -1.6,
   "avgExpected": -0.1,
   "aId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "bId": "c7023f76-4d31-4566-a606-ef047e1220ad"
  },
  {
   "a": "Zachary Adler",
   "b": "Gautham Bondugula",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 1.3,
   "avgExpected": 3.1,
   "aId": "1a45849d-879b-40a2-a0df-ec262414d1c3",
   "bId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0"
  },
  {
   "a": "Joel Phillips",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -2.2,
   "avgExpected": -0.8,
   "aId": "8f292eb8-a014-4618-9c0e-114c26463233",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Alicia Reed",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -6,
   "avgExpected": -4.4,
   "aId": "3bebe02b-0d94-423c-b9c2-3420004a6d18",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "Taylor Hartman",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -2,
   "avgExpected": -0.5,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Kristine Brink",
   "b": "Cami Lee",
   "team": "Pickleball HQ",
   "n": 10,
   "w": 0,
   "l": 10,
   "synergy": -0.8,
   "avgActual": -10.1,
   "avgExpected": -9,
   "aId": "24376866-24f2-4295-aecd-bfc95ca9ecbb",
   "bId": "fe88c083-3162-4d64-901c-710c2e0ef84c"
  },
  {
   "a": "Ruhi Shah",
   "b": "David Lavy",
   "team": "Pickle Jar",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1.3,
   "avgExpected": 0.6,
   "aId": "a2d56e71-3895-4316-9e9e-17565fb62295",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 2.7,
   "avgExpected": 4.5,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Joey Angelson",
   "b": "Margaret Robb",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -3.6,
   "avgExpected": -2.1,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Rebecca Arleth",
   "b": "Noelle Ramirez",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -5.3,
   "avgExpected": -3.4,
   "aId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46",
   "bId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "a": "Chaille Godinez",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0.4,
   "avgExpected": 1.9,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0.3,
   "avgExpected": 1.9,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -7.2,
   "avgExpected": -5.4,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Daniel Kulik",
   "b": "Christian Fechter",
   "team": "Pickleball Palace",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 0.4,
   "avgExpected": 1.7,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "9a973334-7467-4873-9aa6-ca3a597e8caa"
  },
  {
   "a": "Eric Pan",
   "b": "Chelsea Pan",
   "team": "Pickleball HQ",
   "n": 14,
   "w": 0,
   "l": 14,
   "synergy": -0.9,
   "avgActual": -7.1,
   "avgExpected": -5.9,
   "aId": "0ef2603e-114f-4683-8cef-a3d16ef94f5d",
   "bId": "1cbb6d7f-3b53-4fdd-a9dd-c1aa8362904a"
  },
  {
   "a": "Chris Bucaro",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 2.2,
   "avgExpected": 3.6,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Anisha Malhotra",
   "team": "Pickle House",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": -0.9,
   "avgActual": 4,
   "avgExpected": 5.5,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "2aa8b268-8c06-4453-9706-048009bf6af3"
  },
  {
   "a": "Shreyas Pani",
   "b": "Camrin Cronheim",
   "team": "Pickle Jar",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -1.7,
   "avgExpected": -0.2,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Julia Sternberg",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.9,
   "avgActual": -6.6,
   "avgExpected": -5.1,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Rayna Baizman",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.9,
   "avgActual": 0.4,
   "avgExpected": 1.8,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Richa Shah",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.9,
   "avgActual": -4.9,
   "avgExpected": -3.6,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Chris Bucaro",
   "b": "Amanda Ksiezopolski",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 1,
   "avgExpected": 3.1,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "a": "Chris Bucaro",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 11,
   "w": 9,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 4,
   "avgExpected": 5.2,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Will Kayal",
   "b": "Muhammad Usman",
   "team": "Pickle Jar",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": -0.9,
   "avgActual": -0.1,
   "avgExpected": 1.1,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "8adf5cec-e3bf-4b0e-9a7c-7d1ed650bddb"
  },
  {
   "a": "Matthew Matro",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -1.7,
   "avgExpected": -0.4,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Jessica Hendry",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -2.6,
   "avgExpected": -0.9,
   "aId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Katarzyna Clevenger",
   "b": "Matthew Lucas",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -4.3,
   "avgExpected": -2.2,
   "aId": "adc8c45e-c260-49fe-a318-ee643df2b86f",
   "bId": "ce28bf66-5027-4f8b-b579-aa99d2ac96d3"
  },
  {
   "a": "Michael Swell",
   "b": "Margaret Robb",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -3.3,
   "avgExpected": -1.2,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Serena Martz",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -8.2,
   "avgExpected": -6.4,
   "aId": "2db0eb6d-a738-4daa-9be3-8e7a535330ba",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Taylor Peracchio",
   "b": "James Cannizzaro",
   "team": "Pickle Jar",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.9,
   "avgActual": 6.7,
   "avgExpected": 8.7,
   "aId": "4df44e08-a35c-4c4c-a311-861ef4d0897a",
   "bId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "a": "Nicole Devine",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -4.2,
   "avgExpected": -2.5,
   "aId": "2ce3e665-accd-487a-b17d-093382698f90",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Brian Strehle",
   "b": "Kerry Schaffer",
   "team": "Lehigh Valley",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -7.7,
   "avgExpected": -5.8,
   "aId": "4565a452-004a-47c0-9700-aab647415acf",
   "bId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Taylor Hartman",
   "team": "Pickle House",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -1,
   "avgActual": 2,
   "avgExpected": 3.4,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.8,
   "avgExpected": 2.5,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Adrienne Butrymowicz",
   "b": "Brad Oldham",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -9,
   "avgExpected": -6.7,
   "aId": "279df046-e022-4adf-a5ea-4072a29d9622",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Joey Angelson",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": -1,
   "avgActual": -4.4,
   "avgExpected": -3,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -8,
   "avgExpected": -5.7,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Morgan Fishman",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1,
   "avgActual": -0.2,
   "avgExpected": 1.6,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Ruhi Shah",
   "b": "Rahul Datta",
   "team": "Pickle Jar",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.3,
   "avgExpected": 2.3,
   "aId": "a2d56e71-3895-4316-9e9e-17565fb62295",
   "bId": "acb08227-47a5-40fc-b720-3531084980f6"
  },
  {
   "a": "Will Kayal",
   "b": "Daniel Gallegos",
   "team": "Pickle Jar",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -3.7,
   "avgExpected": -1.4,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Jerry Hine",
   "b": "Kaley Lai",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -8,
   "avgExpected": -5.7,
   "aId": "2f7417e0-7b26-4846-a1f4-9901c27bea7e",
   "bId": "354f7b98-2207-458f-af42-3e8a7a3630be"
  },
  {
   "a": "Gift Horn",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 12,
   "w": 6,
   "l": 6,
   "synergy": -1,
   "avgActual": 1.9,
   "avgExpected": 3.2,
   "aId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Chris Bucaro",
   "b": "Eugene Zaslavsky",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 2.3,
   "avgExpected": 4.7,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "a": "Anthony Ursino",
   "b": "Amanda Ksiezopolski",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": -1.3,
   "avgExpected": 1.1,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "a": "Will Kayal",
   "b": "Paula Ro",
   "team": "Pickle Jar",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "27908231-74bb-4956-adc4-5429e16e55ea"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1,
   "avgActual": -3.3,
   "avgExpected": -1.6,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Matthew Lucas",
   "team": "Lehigh Valley",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -1,
   "avgActual": -0.7,
   "avgExpected": 0.7,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "ce28bf66-5027-4f8b-b579-aa99d2ac96d3"
  },
  {
   "a": "Nate Otto",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -1,
   "avgActual": -2.1,
   "avgExpected": -0.6,
   "aId": "70e57f6a-3b00-4620-8c63-b1445cf7aab2",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Kristine Brink",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 13,
   "w": 0,
   "l": 13,
   "synergy": -1,
   "avgActual": -10.8,
   "avgExpected": -9.4,
   "aId": "24376866-24f2-4295-aecd-bfc95ca9ecbb",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Nick Dehmer",
   "b": "Kishan Shah",
   "team": "Pickle House",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1,
   "avgActual": -1.4,
   "avgExpected": 0.4,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "a": "Stephen Mcnamara",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -6.7,
   "avgExpected": -4.2,
   "aId": "245e949d-15e7-411e-9751-e19ca709f2cb",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Nick Dehmer",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -3.2,
   "avgExpected": -1,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Katarzyna Clevenger",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 11,
   "w": 3,
   "l": 8,
   "synergy": -1.1,
   "avgActual": -2.5,
   "avgExpected": -0.9,
   "aId": "adc8c45e-c260-49fe-a318-ee643df2b86f",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Alexander Tong",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -3.6,
   "avgExpected": -1.6,
   "aId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Ann Betterton",
   "b": "Cami Lee",
   "team": "Pickleball HQ",
   "n": 9,
   "w": 0,
   "l": 9,
   "synergy": -1.1,
   "avgActual": -9.8,
   "avgExpected": -8.2,
   "aId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "bId": "fe88c083-3162-4d64-901c-710c2e0ef84c"
  },
  {
   "a": "Dylan Unkert",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -1.1,
   "avgActual": 0,
   "avgExpected": 1.7,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Kenoa Tio",
   "b": "Peter Hwang",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -4.7,
   "avgExpected": -2.1,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "ea6e193e-df62-4132-8c46-cfc9247f7a00"
  },
  {
   "a": "Chelsea Pan",
   "b": "Kristine Brink",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -13.2,
   "avgExpected": -11,
   "aId": "1cbb6d7f-3b53-4fdd-a9dd-c1aa8362904a",
   "bId": "24376866-24f2-4295-aecd-bfc95ca9ecbb"
  },
  {
   "a": "Michael Swell",
   "b": "Samuel Levinson",
   "team": "The Atlantic Club",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -3.2,
   "avgExpected": -1.4,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "a": "Alex Abad",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 0,
   "avgExpected": 1.9,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Elysia Price",
   "team": "Pickle Jar",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 2,
   "avgExpected": 4.2,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Anthony Leung",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -6.8,
   "avgExpected": -4.8,
   "aId": "48457f37-29a2-47e7-8b2e-62316ad44feb",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Jon Cedotal",
   "b": "Joel Phillips",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5,
   "avgExpected": -2.8,
   "aId": "2a7a3b43-2d24-469a-b8a6-7f60da866270",
   "bId": "8f292eb8-a014-4618-9c0e-114c26463233"
  },
  {
   "a": "Daniel Kulik",
   "b": "Corey Maryles",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 2,
   "avgExpected": 4.1,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "a0d313f4-dca8-4931-8c34-1ad812541550"
  },
  {
   "a": "Nahla Bernhardt",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -4.2,
   "avgExpected": -2.3,
   "aId": "9dae8c17-6878-473a-83e9-a43b434f876b",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Dottie Kelly",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -6.3,
   "avgExpected": -3.7,
   "aId": "57a09a98-991d-47a7-a13d-fb2afa6bd8ef",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Robert Khalev",
   "b": "Simon Rosenwasser",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -8,
   "avgExpected": -5.3,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "369dca37-2d15-4559-96d1-26a78df236a1"
  },
  {
   "a": "Suzi Battison",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 13,
   "w": 9,
   "l": 4,
   "synergy": -1.2,
   "avgActual": 2.6,
   "avgExpected": 4.2,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Charlotte Healey",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -2.7,
   "avgExpected": -0.6,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Stephen Conger",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -3.3,
   "avgExpected": -0.5,
   "aId": "24e70ef7-b98e-459e-8a19-19a2b66a054e",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Lily Yip",
   "b": "Manpreet Singh",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -2.2,
   "avgExpected": 0.2,
   "aId": "78f3d90b-c12f-4936-8283-659b53e37384",
   "bId": "c7023f76-4d31-4566-a606-ef047e1220ad"
  },
  {
   "a": "Jeff Wiedemann",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -4.7,
   "avgExpected": -2.3,
   "aId": "db67ae5b-a83f-4a72-a2da-5a510171f31a",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Nahla Bernhardt",
   "b": "Garv Singhal",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.2,
   "avgActual": 0.1,
   "avgExpected": 2,
   "aId": "9dae8c17-6878-473a-83e9-a43b434f876b",
   "bId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "a": "Taylor Hartman",
   "b": "Nick Dehmer",
   "team": "Pickle House",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -1.2,
   "avgActual": 0.3,
   "avgExpected": 2,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "a": "Conor Landrigan",
   "b": "Heather Gallagher",
   "team": "Lehigh Valley",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -4.2,
   "avgExpected": -1.8,
   "aId": "931df78f-b759-497d-ba8d-be7d3f41f668",
   "bId": "96c8ef56-bc40-42e9-bb6e-8054e4b27269"
  },
  {
   "a": "Joey Angelson",
   "b": "Matt Schall",
   "team": "The Atlantic Club",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": -1.2,
   "avgActual": -7.9,
   "avgExpected": -6.1,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Johny Mario",
   "team": "Jersey Devil",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -4.3,
   "avgExpected": -1.6,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "a": "Joseph Lobiondo",
   "b": "Hruday Vemparala",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2.2,
   "avgExpected": 0.2,
   "aId": "031ef107-13a7-436a-9be5-5004d1aec615",
   "bId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "a": "Ethan Henigan",
   "b": "Andrew Wakefield",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -3,
   "avgExpected": -0.2,
   "aId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "bId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Geoff Watson",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -3.7,
   "avgExpected": -0.7,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "41191982-ca10-4665-8eb2-6d5231b4a0c4"
  },
  {
   "a": "Nate Otto",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -0.8,
   "avgExpected": 1.5,
   "aId": "70e57f6a-3b00-4620-8c63-b1445cf7aab2",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Jeff Comer",
   "b": "Ozair Ibrahim",
   "team": "Bounce Malvern",
   "n": 18,
   "w": 8,
   "l": 10,
   "synergy": -1.3,
   "avgActual": 0.4,
   "avgExpected": 1.9,
   "aId": "afacd45c-4801-4062-9401-f721e8d73d08",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Lily Yip",
   "b": "Gift Horn",
   "team": "Home Court",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -0.2,
   "avgExpected": 2,
   "aId": "78f3d90b-c12f-4936-8283-659b53e37384",
   "bId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "a": "Zachary Adler",
   "b": "Hruday Vemparala",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -2.7,
   "avgExpected": -0.2,
   "aId": "1a45849d-879b-40a2-a0df-ec262414d1c3",
   "bId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Corey Maryles",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -1,
   "avgExpected": 2.1,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "a0d313f4-dca8-4931-8c34-1ad812541550"
  },
  {
   "a": "Heather Gallagher",
   "b": "Becca Bender",
   "team": "Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -5,
   "avgExpected": -2,
   "aId": "96c8ef56-bc40-42e9-bb6e-8054e4b27269",
   "bId": "f3ad3318-f3d7-4fa2-9d19-01e04f4b02f3"
  },
  {
   "a": "Jordan Denish",
   "b": "Bruno Casino Remondo",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 1.3,
   "avgExpected": 4.3,
   "aId": "8ae25144-966d-4de1-9cb3-513f7f217170",
   "bId": "eb557a63-d8c4-46b4-9f21-67f59731f20f"
  },
  {
   "a": "Susan Ackley",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -3.5,
   "avgExpected": -1.4,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Adrienne Butrymowicz",
   "b": "Rich Gaborow",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -6.3,
   "avgExpected": -3.2,
   "aId": "279df046-e022-4adf-a5ea-4072a29d9622",
   "bId": "4482c5d0-0106-41d5-8214-d5e0aabb0d4f"
  },
  {
   "a": "Pearly Leung",
   "b": "Johanna Wagner",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 2.3,
   "avgExpected": 4.9,
   "aId": "581070ec-7106-4558-bc86-4df0675682cb",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Hector Irizarry",
   "team": "Players Courtyard",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -0.3,
   "avgExpected": 1.9,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Alicia Reed",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -6.3,
   "avgExpected": -3.1,
   "aId": "3bebe02b-0d94-423c-b9c2-3420004a6d18",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Jenna Irwin",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 3.2,
   "avgExpected": 5.5,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Adrienne Butrymowicz",
   "b": "Simon Rosenwasser",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -7,
   "avgExpected": -3.7,
   "aId": "279df046-e022-4adf-a5ea-4072a29d9622",
   "bId": "369dca37-2d15-4559-96d1-26a78df236a1"
  },
  {
   "a": "Patrick Ryan",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -1.5,
   "avgExpected": 1.3,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Stephen Conger",
   "b": "Matthew Matro",
   "team": "Jersey Devil",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -6.5,
   "avgExpected": -3.8,
   "aId": "24e70ef7-b98e-459e-8a19-19a2b66a054e",
   "bId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "a": "Lilie Sen",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro",
   "n": 13,
   "w": 4,
   "l": 9,
   "synergy": -1.4,
   "avgActual": -2.7,
   "avgExpected": -0.9,
   "aId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": -1.4,
   "avgActual": -7,
   "avgExpected": -4.9,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -1.4,
   "avgActual": -4.6,
   "avgExpected": -2.3,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Jon Cedotal",
   "b": "Lilie Sen",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -8.3,
   "avgExpected": -5,
   "aId": "2a7a3b43-2d24-469a-b8a6-7f60da866270",
   "bId": "3aa34138-1989-4d89-b656-3e0c44b23b6f"
  },
  {
   "a": "Liana Rose",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -11,
   "avgExpected": -7.7,
   "aId": "51f180a8-f6f7-4b6f-b409-e650739ba59e",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Annemarie Mccartney",
   "b": "Manny Lai",
   "team": "Players Courtyard",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -1.5,
   "avgActual": -1.1,
   "avgExpected": 1.2,
   "aId": "d08d78db-7d20-4dc2-a37b-41841c4624fd",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Lilie Sen",
   "b": "Alicia Reed",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -1.5,
   "avgActual": -5.6,
   "avgExpected": -3.2,
   "aId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "bId": "3bebe02b-0d94-423c-b9c2-3420004a6d18"
  },
  {
   "a": "Jase Volz",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -3.6,
   "avgExpected": -1,
   "aId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Emily Miller",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -6,
   "avgExpected": -2.9,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "6ddfb7dc-84b5-403c-b5dc-6fe39bc3852c"
  },
  {
   "a": "Susan Ackley",
   "b": "Courtney Greener",
   "team": "Flemington",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -1.5,
   "avgActual": -0.2,
   "avgExpected": 2,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d"
  },
  {
   "a": "Anthony Leung",
   "b": "Joshua Ahn",
   "team": "Pickleball HQ",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.5,
   "avgActual": -3.5,
   "avgExpected": -1,
   "aId": "48457f37-29a2-47e7-8b2e-62316ad44feb",
   "bId": "fff3fe71-d4a6-4103-9290-0ef57035471c"
  },
  {
   "a": "Zachary Adler",
   "b": "Stanley Bonczek",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -3,
   "avgExpected": 0,
   "aId": "1a45849d-879b-40a2-a0df-ec262414d1c3",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Dominique Damerjian",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -4.2,
   "avgExpected": -1.3,
   "aId": "733e7853-0fc0-40ee-a7ca-a0f00ef6fa7c",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Charlotte Healey",
   "b": "Julia Plein",
   "team": "Bounce Philly",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -3.8,
   "avgExpected": -0.9,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -6.2,
   "avgExpected": -3.1,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -5.2,
   "avgExpected": -2.4,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Mark Kilimnik",
   "b": "Julia Plein",
   "team": "Bounce Philly",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.6,
   "avgActual": -5,
   "avgExpected": -2.2,
   "aId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Chris Bucaro",
   "b": "Anthony Ursino",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2.3,
   "avgExpected": 1.4,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "1406ff1f-3597-4128-a629-7dfd1dfe1323"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Gift Horn",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.6,
   "avgActual": 0.7,
   "avgExpected": 4.5,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "a": "Lawrence Ly",
   "b": "Cami Lee",
   "team": "Pickleball HQ",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.6,
   "avgActual": -6.3,
   "avgExpected": -3.7,
   "aId": "a0a1cac1-7dc1-4058-bcc4-858517823a85",
   "bId": "fe88c083-3162-4d64-901c-710c2e0ef84c"
  },
  {
   "a": "Anthony Leung",
   "b": "Bessie Hu",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -5.7,
   "avgExpected": -2,
   "aId": "48457f37-29a2-47e7-8b2e-62316ad44feb",
   "bId": "6914c9fc-a81e-4029-9d8a-2ca4c8b9fd59"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Lindsey Thoeng",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.6,
   "avgActual": 2.7,
   "avgExpected": 6.5,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "a": "Kenoa Tio",
   "b": "Ozair Ibrahim",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -1.3,
   "avgExpected": 1.3,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Patrick Ceccacci",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -1.7,
   "avgExpected": 1.5,
   "aId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Amalia Ditrapani",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -1.6,
   "avgActual": -6.9,
   "avgExpected": -4.4,
   "aId": "32ac3308-4ddd-496b-8942-ca2422322c06",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Rebecca Arleth",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -6.7,
   "avgExpected": -2.8,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "4b0e05c5-0640-4a71-8716-9d5abbf8bf46"
  },
  {
   "a": "Chris Damato",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.7,
   "avgActual": 1,
   "avgExpected": 3.9,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Hector Irizarry",
   "b": "Steven Maisonet",
   "team": "Players Courtyard",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -0.6,
   "avgExpected": 2.5,
   "aId": "a50a69d0-0a8c-4241-b768-846b1591d180",
   "bId": "d1bebcc0-9427-45af-9d16-cc023b5dd737"
  },
  {
   "a": "Robert Khalev",
   "b": "Margaret Robb",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -8.7,
   "avgExpected": -4.6,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Nicholas Lagrua",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -12.3,
   "avgExpected": -8.4,
   "aId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Geoff Watson",
   "b": "Melody Grohotolski",
   "team": "Lehigh Valley",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -5.2,
   "avgExpected": -1.6,
   "aId": "41191982-ca10-4665-8eb2-6d5231b4a0c4",
   "bId": "98c341d7-59e6-4f63-abf0-8bebd5644186"
  },
  {
   "a": "Nicholas Leung",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -8.7,
   "avgExpected": -4.4,
   "aId": "583f4ed0-33f8-4e51-8642-089f7d7e0239",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Daniel Gallegos",
   "b": "Camrin Cronheim",
   "team": "Pickle Jar",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.8,
   "avgActual": -7.7,
   "avgExpected": -4.2,
   "aId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.8,
   "avgActual": -1.8,
   "avgExpected": 1.4,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Brittany Hall",
   "b": "Jeff Wiedemann",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -7,
   "avgExpected": -2.7,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "db67ae5b-a83f-4a72-a2da-5a510171f31a"
  },
  {
   "a": "Doryan Amato",
   "b": "Hruday Vemparala",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -1,
   "avgExpected": 3.2,
   "aId": "60448597-405f-4454-a0b8-15bb2e41373e",
   "bId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "a": "Courtney Greener",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -9.3,
   "avgExpected": -4.9,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Jesse Rosenberg",
   "b": "Ann Betterton",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -11.3,
   "avgExpected": -7,
   "aId": "7fabbb34-3132-4dd7-93cc-ff6c31adac27",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Gissel Escalante",
   "b": "Elysia Price",
   "team": "Pickle Jar",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -2.7,
   "avgExpected": 1.1,
   "aId": "63221cc8-e303-4675-8dde-4fc77e871627",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Michael Swell",
   "b": "Stefanie Sohosky",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2,
   "avgActual": -0.7,
   "avgExpected": 4,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "65aabbc7-a06a-4074-a5df-5b0938ede28a"
  },
  {
   "a": "Will Kayal",
   "b": "Ruhi Shah",
   "team": "Pickle Jar",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -2.1,
   "avgActual": -0.7,
   "avgExpected": 3.4,
   "aId": "188d1b9d-5318-49c7-b737-38e656d3ddd5",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Johanna Wagner",
   "b": "John Gargana",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -1.2,
   "avgExpected": 3,
   "aId": "e447eb0f-dc19-4616-a7f4-b53de776db3b",
   "bId": "e7ead4ec-3ab0-469f-9122-0a822f068415"
  },
  {
   "a": "Rayna Baizman",
   "b": "Trang Nguyen (Smile)",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -1.6,
   "avgExpected": 2.2,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "60eb4808-3d54-429f-9910-11b14939a230"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Nate Otto",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -2.2,
   "avgActual": -4.7,
   "avgExpected": -0.4,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "70e57f6a-3b00-4620-8c63-b1445cf7aab2"
  },
  {
   "a": "Dylan Unkert",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2.4,
   "avgActual": -4.4,
   "avgExpected": 0,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Arianna Haresign",
   "b": "Dominique Damerjian",
   "team": "Jersey Devil",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2.5,
   "avgActual": -5.6,
   "avgExpected": -1,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "733e7853-0fc0-40ee-a7ca-a0f00ef6fa7c"
  },
  {
   "a": "Camrin Cronheim",
   "b": "David Lavy",
   "team": "Pickle Jar",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.6,
   "avgActual": -6.7,
   "avgExpected": -0.6,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Hugh Laroque",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -2.7,
   "avgActual": -3.1,
   "avgExpected": 1.1,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "93c534a1-a23c-451f-8c73-3515f8a19bd5"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Lehigh Valley",
   "away": "Players Courtyard",
   "time": "2025-08-20T19:00:00",
   "complete": true,
   "homePoints": 508,
   "awayPoints": 629,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ],
     "a": [
      "Jennifer Sanchez",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Vi Duong",
      "Jay Rohatgi"
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
     "as": 17,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Brian Strehle"
     ],
     "a": [
      "Stacy Walkowitz",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Becca Bender",
      "Vi Duong"
     ],
     "a": [
      "Annemarie Mccartney",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Melody Grohotolski",
      "Katarzyna Clevenger"
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
      "Geoff Watson",
      "Gog Boonswang"
     ],
     "a": [
      "Manny Lai",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brian Strehle",
      "Jay Rohatgi"
     ],
     "a": [
      "Hector Irizarry",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Brian Strehle"
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
     "as": 12,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Annemarie Mccartney",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ],
     "a": [
      "Stacy Walkowitz",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melody Grohotolski",
      "Jay Rohatgi"
     ],
     "a": [
      "Jennifer Sanchez",
      "Hector Irizarry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Becca Bender"
     ],
     "a": [
      "Jennifer Sanchez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Melody Grohotolski"
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
      "Brian Strehle",
      "Jay Rohatgi"
     ],
     "a": [
      "Nathan Law",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Gog Boonswang"
     ],
     "a": [
      "Manny Lai",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Becca Bender",
      "Jay Rohatgi"
     ],
     "a": [
      "Stacy Walkowitz",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Vi Duong",
      "Gog Boonswang"
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
     "as": 15,
     "h": [
      "Katarzyna Clevenger",
      "Brian Strehle"
     ],
     "a": [
      "Jennifer Sanchez",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Melody Grohotolski",
      "Geoff Watson"
     ],
     "a": [
      "Annemarie Mccartney",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Becca Bender",
      "Kerry Schaffer"
     ],
     "a": [
      "Jennifer Sanchez",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Melody Grohotolski",
      "Vi Duong"
     ],
     "a": [
      "Annemarie Mccartney",
      "Anita Buggins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Brian Strehle"
     ],
     "a": [
      "Manny Lai",
      "Hector Irizarry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gog Boonswang",
      "Jay Rohatgi"
     ],
     "a": [
      "Nathan Law",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Becca Bender",
      "Gog Boonswang"
     ],
     "a": [
      "Jennifer Sanchez",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Vi Duong",
      "Brian Strehle"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Jay Rohatgi"
     ],
     "a": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Geoff Watson"
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
     "as": 16,
     "h": [
      "Katarzyna Clevenger",
      "Vi Duong"
     ],
     "a": [
      "Jennifer Sanchez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Melody Grohotolski",
      "Kerry Schaffer"
     ],
     "a": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Geoff Watson",
      "Brian Strehle"
     ],
     "a": [
      "Manny Lai",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gog Boonswang",
      "Jay Rohatgi"
     ],
     "a": [
      "Hector Irizarry",
      "Nathan Law"
     ]
    }
   ],
   "subs": [
    "Jay Rohatgi"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Dill Dinkers Hatboro",
   "away": "Pickle House",
   "time": "2025-08-20T19:30:00",
   "complete": true,
   "homePoints": 509,
   "awayPoints": 651,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alicia Reed",
      "Andrew Wakefield"
     ],
     "a": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Ethan Henigan"
     ],
     "a": [
      "Anisha Malhotra",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lilie Sen",
      "Robert Schimony"
     ],
     "a": [
      "Lissa Eagles",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ],
     "a": [
      "Lindsey Thoeng",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Alicia Reed"
     ],
     "a": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Lilie Sen"
     ],
     "a": [
      "Lindsey Thoeng",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Jon Cedotal"
     ],
     "a": [
      "Nick Dehmer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robert Schimony",
      "Ethan Henigan"
     ],
     "a": [
      "Chris Damato",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alicia Reed",
      "Dylan Ashbach"
     ],
     "a": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
     ],
     "a": [
      "Kerrin Maurer",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Robert Schimony"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Drew Kolb"
     ],
     "a": [
      "Lindsey Thoeng",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Lilie Sen"
     ],
     "a": [
      "Taylor Hartman",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Alicia Reed"
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
      "Dylan Ashbach",
      "Andrew Wakefield"
     ],
     "a": [
      "Nick Dehmer",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Drew Kolb",
      "Ethan Henigan"
     ],
     "a": [
      "Dylan Unkert",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Ethan Henigan"
     ],
     "a": [
      "Taylor Hartman",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alicia Reed",
      "Andrew Wakefield"
     ],
     "a": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Drew Kolb"
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
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ],
     "a": [
      "Lindsey Thoeng",
      "Dylan Unkert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Alicia Reed"
     ],
     "a": [
      "Taylor Hartman",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jon Cedotal",
      "Ethan Henigan"
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ],
     "a": [
      "Nick Dehmer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Jon Cedotal"
     ],
     "a": [
      "Lindsey Thoeng",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
     ],
     "a": [
      "Lissa Eagles",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alicia Reed",
      "Dylan Ashbach"
     ],
     "a": [
      "Anisha Malhotra",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Drew Kolb"
     ],
     "a": [
      "Kerrin Maurer",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alyssa Tartaglia",
      "Nahla Bernhardt"
     ],
     "a": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Alicia Reed"
     ],
     "a": [
      "Anisha Malhotra",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jon Cedotal",
      "Dylan Ashbach"
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Robert Schimony",
      "Drew Kolb"
     ],
     "a": [
      "Michael Li",
      "Dylan Unkert"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "The Atlantic Club",
   "away": "Pickleball Palace",
   "time": "2025-08-27T19:00:00",
   "complete": true,
   "homePoints": 457,
   "awayPoints": 671,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Brad Oldham"
     ],
     "a": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Simon Rosenwasser"
     ],
     "a": [
      "Jessica Pevny",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Robert Khalev"
     ],
     "a": [
      "Stephanie Bramer",
      "Corey Maryles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelly Nicosia",
      "Dipen Bhatt"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Sarah Nazario"
     ],
     "a": [
      "Ashley Georgevich",
      "Jessica Pevny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kelly Nicosia",
      "Joey Angelson"
     ],
     "a": [
      "Stephanie Bramer",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dipen Bhatt",
      "Simon Rosenwasser"
     ],
     "a": [
      "Corey Maryles",
      "Christian Fechter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Matt Schall",
      "Robert Khalev"
     ],
     "a": [
      "Leo Kupferman",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Matt Schall"
     ],
     "a": [
      "Ashley Georgevich",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joey Angelson",
      "Dipen Bhatt"
     ],
     "a": [
      "Stephanie Bramer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Brad Oldham"
     ],
     "a": [
      "Jessica Pevny",
      "Corey Maryles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Robert Khalev"
     ],
     "a": [
      "Jenna Irwin",
      "Leo Kupferman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Sarah Nazario"
     ],
     "a": [
      "Jessica Pevny",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Kelly Nicosia"
     ],
     "a": [
      "Stephanie Bramer",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matt Schall",
      "Brad Oldham"
     ],
     "a": [
      "Christian Fechter",
      "Daniel Kulik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Simon Rosenwasser",
      "Dipen Bhatt"
     ],
     "a": [
      "Corey Maryles",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Simon Rosenwasser"
     ],
     "a": [
      "Ashley Georgevich",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Robert Khalev"
     ],
     "a": [
      "Stephanie Bramer",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Brad Oldham"
     ],
     "a": [
      "Jessica Pevny",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Nicosia",
      "Dipen Bhatt"
     ],
     "a": [
      "Jenna Irwin",
      "Corey Maryles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kelly Nicosia",
      "Eva Danieli"
     ],
     "a": [
      "Stephanie Bramer",
      "Jessica Pevny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adrienne Butrymowicz",
      "Sarah Nazario"
     ],
     "a": [
      "Jenna Irwin",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brad Oldham",
      "Simon Rosenwasser"
     ],
     "a": [
      "Leo Kupferman",
      "Christian Fechter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Matt Schall",
      "Robert Khalev"
     ],
     "a": [
      "Keith Shedlock",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Matt Schall"
     ],
     "a": [
      "Jenna Irwin",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Robert Khalev"
     ],
     "a": [
      "Ashley Georgevich",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Dipen Bhatt"
     ],
     "a": [
      "Stephanie Bramer",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kelly Nicosia",
      "Simon Rosenwasser"
     ],
     "a": [
      "Jessica Pevny",
      "Corey Maryles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Joey Angelson"
     ],
     "a": [
      "Stephanie Bramer",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kelly Nicosia",
      "Sarah Nazario"
     ],
     "a": [
      "Jessica Pevny",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Simon Rosenwasser",
      "Brad Oldham"
     ],
     "a": [
      "Corey Maryles",
      "Leo Kupferman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matt Schall",
      "Dipen Bhatt"
     ],
     "a": [
      "Christian Fechter",
      "Keith Shedlock"
     ]
    }
   ],
   "subs": [
    "Sarah Nazario",
    "Kelly Nicosia"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Lehigh Valley",
   "away": "Bounce Philly",
   "time": "2025-08-27T19:00:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 592,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Alex Abad",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
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
     "as": 11,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Kathleen Dougherty",
      "Braden Keith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vi Duong",
      "Matthew Lucas"
     ],
     "a": [
      "Rachel Alfano",
      "Austin Gow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Becca Bender",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Julia Plein",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Vi Duong",
      "Cristi Landrigan"
     ],
     "a": [
      "Alex Abad",
      "Rachel Alfano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Geoff Watson",
      "Matthew Lucas"
     ],
     "a": [
      "Alexander Tong",
      "Casey Jannetta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gog Boonswang",
      "Conor Landrigan"
     ],
     "a": [
      "Braden Keith",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Geoff Watson"
     ],
     "a": [
      "Julia Plein",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
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
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Alex Abad",
      "Casey Jannetta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Vi Duong",
      "Matthew Lucas"
     ],
     "a": [
      "Kathleen Dougherty",
      "Austin Gow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Vi Duong",
      "Cristi Landrigan"
     ],
     "a": [
      "Alex Abad",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Katarzyna Clevenger",
      "Becca Bender"
     ],
     "a": [
      "Charlotte Healey",
      "Julia Plein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Geoff Watson",
      "Gog Boonswang"
     ],
     "a": [
      "Alexander Tong",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Matthew Lucas",
      "Conor Landrigan"
     ],
     "a": [
      "Braden Keith",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Becca Bender",
      "Gog Boonswang"
     ],
     "a": [
      "Julia Plein",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katarzyna Clevenger",
      "Conor Landrigan"
     ],
     "a": [
      "Rachel Alfano",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Geoff Watson"
     ],
     "a": [
      "Alex Abad",
      "Casey Jannetta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerry Schaffer",
      "Matthew Lucas"
     ],
     "a": [
      "Kathleen Dougherty",
      "Braden Keith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
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
      "Becca Bender",
      "Kerry Schaffer"
     ],
     "a": [
      "Kathleen Dougherty",
      "Rachel Alfano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Matthew Lucas",
      "Conor Landrigan"
     ],
     "a": [
      "Austin Gow",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Gog Boonswang"
     ],
     "a": [
      "Alexander Tong",
      "Casey Jannetta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Cristi Landrigan",
      "Gog Boonswang"
     ],
     "a": [
      "Kathleen Dougherty",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Becca Bender",
      "Geoff Watson"
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
      "Kerry Schaffer",
      "Matthew Lucas"
     ],
     "a": [
      "Julia Plein",
      "Braden Keith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Katarzyna Clevenger",
      "Conor Landrigan"
     ],
     "a": [
      "Charlotte Healey",
      "Austin Gow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Becca Bender",
      "Kerry Schaffer"
     ],
     "a": [
      "Julia Plein",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Cristi Landrigan"
     ],
     "a": [
      "Alex Abad",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Conor Landrigan"
     ],
     "a": [
      "Austin Gow",
      "Casey Jannetta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gog Boonswang",
      "Matthew Lucas"
     ],
     "a": [
      "Braden Keith",
      "Alexander Tong"
     ]
    }
   ],
   "subs": [
    "Casey Jannetta",
    "Braden Keith",
    "Austin Gow"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Pickleball HQ",
   "away": "Monroe",
   "time": "2025-08-27T19:00:00",
   "complete": true,
   "homePoints": 451,
   "awayPoints": 682,
   "homeGW": 1,
   "awayGW": 31,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Cami Lee",
      "Nicholas Leung"
     ],
     "a": [
      "Catherine Stewart",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ann Betterton",
      "Joshua Ahn"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Emily Su",
      "Saif Sarwar"
     ],
     "a": [
      "Claire Gaston",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Anthony Leung"
     ],
     "a": [
      "Richa Shah",
      "Thomas Dill"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cami Lee",
      "Ann Betterton"
     ],
     "a": [
      "Cameron Barraco",
      "Claire Gaston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Emily Su",
      "Ceil Gomez"
     ],
     "a": [
      "Catherine Stewart",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anthony Leung",
      "Eric Pan"
     ],
     "a": [
      "Dilan Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Nicholas Leung",
      "Joshua Ahn"
     ],
     "a": [
      "Eric Lin",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Cami Lee",
      "Saif Sarwar"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Emily Su",
      "Jesse Rosenberg"
     ],
     "a": [
      "Catherine Stewart",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Nicholas Leung"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Anthony Leung"
     ],
     "a": [
      "Morgan Fishman",
      "Thomas Dill"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Cami Lee",
      "Chelsea Pan"
     ],
     "a": [
      "Morgan Fishman",
      "Claire Gaston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Ann Betterton"
     ],
     "a": [
      "Catherine Stewart",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jesse Rosenberg",
      "Nicholas Leung"
     ],
     "a": [
      "Dilan Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anthony Leung",
      "Eric Pan"
     ],
     "a": [
      "Thomas Dill",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Eric Pan"
     ],
     "a": [
      "Morgan Fishman",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ann Betterton",
      "Saif Sarwar"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cami Lee",
      "Nicholas Leung"
     ],
     "a": [
      "Claire Gaston",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Emily Su",
      "Joshua Ahn"
     ],
     "a": [
      "Catherine Stewart",
      "Thomas Dill"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Cami Lee",
      "Chelsea Pan"
     ],
     "a": [
      "Cameron Barraco",
      "Morgan Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Emily Su",
      "Ceil Gomez"
     ],
     "a": [
      "Catherine Stewart",
      "Claire Gaston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anthony Leung",
      "Saif Sarwar"
     ],
     "a": [
      "Dilan Shah",
      "Thomas Dill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jesse Rosenberg",
      "Joshua Ahn"
     ],
     "a": [
      "Maanav Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Saif Sarwar"
     ],
     "a": [
      "Morgan Fishman",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Jesse Rosenberg"
     ],
     "a": [
      "Catherine Stewart",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cami Lee",
      "Joshua Ahn"
     ],
     "a": [
      "Claire Gaston",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Eric Pan"
     ],
     "a": [
      "Cameron Barraco",
      "Eric Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cami Lee",
      "Ceil Gomez"
     ],
     "a": [
      "Cameron Barraco",
      "Morgan Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Emily Su",
      "Ann Betterton"
     ],
     "a": [
      "Richa Shah",
      "Claire Gaston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anthony Leung",
      "Saif Sarwar"
     ],
     "a": [
      "Maanav Shah",
      "Thomas Dill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joshua Ahn",
      "Nicholas Leung"
     ],
     "a": [
      "Chris Bucaro",
      "Eric Lin"
     ]
    }
   ],
   "subs": [
    "Emily Su",
    "Ceil Gomez"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickle Jar",
   "away": "Flemington",
   "time": "2025-08-27T19:30:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 589,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elysia Price",
      "Will Kayal"
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
      "Ruhi Shah",
      "Rahul Datta"
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
     "as": 13,
     "h": [
      "Melissa Dardani",
      "David Lavy"
     ],
     "a": [
      "Courtney Greener",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Taylor Peracchio",
      "Daniel Gallegos"
     ],
     "a": [
      "Chanda Mccoy",
      "Nate Otto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Taylor Peracchio",
      "Elysia Price"
     ],
     "a": [
      "Courtney Greener",
      "Suzi Battison"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Melissa Dardani",
      "Ruhi Shah"
     ],
     "a": [
      "Christine Ferraez",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rahul Datta",
      "David Lavy"
     ],
     "a": [
      "Robbie Oddy",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Muhammad Usman"
     ],
     "a": [
      "Ross Switkes",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elysia Price",
      "Rahul Datta"
     ],
     "a": [
      "Suzi Battison",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Will Kayal"
     ],
     "a": [
      "Courtney Greener",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Muhammad Usman"
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
      "Taylor Peracchio",
      "Daniel Gallegos"
     ],
     "a": [
      "Chanda Mccoy",
      "Nate Otto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Melissa Dardani",
      "Ruhi Shah"
     ],
     "a": [
      "Suzi Battison",
      "Courtney Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Peracchio",
      "Elysia Price"
     ],
     "a": [
      "Chanda Mccoy",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rahul Datta",
      "David Lavy"
     ],
     "a": [
      "Robbie Oddy",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Muhammad Usman"
     ],
     "a": [
      "Ross Switkes",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Peracchio",
      "David Lavy"
     ],
     "a": [
      "Suzi Battison",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Muhammad Usman"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Elysia Price",
      "Rahul Datta"
     ],
     "a": [
      "Christine Ferraez",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ruhi Shah",
      "Will Kayal"
     ],
     "a": [
      "Chanda Mccoy",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Taylor Peracchio",
      "Ruhi Shah"
     ],
     "a": [
      "Suzi Battison",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Melissa Dardani",
      "Elysia Price"
     ],
     "a": [
      "Courtney Greener",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Daniel Gallegos",
      "Rahul Datta"
     ],
     "a": [
      "Robbie Oddy",
      "Nate Otto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Will Kayal",
      "David Lavy"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Elysia Price",
      "David Lavy"
     ],
     "a": [
      "Suzi Battison",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Melissa Dardani",
      "Will Kayal"
     ],
     "a": [
      "Courtney Greener",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Muhammad Usman"
     ],
     "a": [
      "Christine Ferraez",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ruhi Shah",
      "Rahul Datta"
     ],
     "a": [
      "Chanda Mccoy",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 34,
     "as": 36,
     "h": [
      "Ruhi Shah",
      "Melissa Dardani"
     ],
     "a": [
      "Suzi Battison",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Peracchio",
      "Elysia Price"
     ],
     "a": [
      "Courtney Greener",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Muhammad Usman",
      "David Lavy"
     ],
     "a": [
      "Robbie Oddy",
      "Nate Otto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Will Kayal"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickle House",
   "away": "Players Courtyard",
   "time": "2025-08-27T19:30:00",
   "complete": true,
   "homePoints": 650,
   "awayPoints": 563,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yoyo Shen",
      "Nick Dehmer"
     ],
     "a": [
      "Helen Liu",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsey Thoeng",
      "Sidd Pathare"
     ],
     "a": [
      "Anita Buggins",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kerrin Maurer",
      "Dylan Unkert"
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
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Chris Damato"
     ],
     "a": [
      "Sommer Peterson",
      "Jesse Peterson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Lindsey Thoeng"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anisha Malhotra",
      "Kerrin Maurer"
     ],
     "a": [
      "Annemarie Mccartney",
      "Sommer Peterson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dylan Unkert",
      "Chris Damato"
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
     "as": 17,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
     ],
     "a": [
      "Coby Golinkoff",
      "Jesse Peterson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ],
     "a": [
      "Kaley Lai",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lindsey Thoeng",
      "Dylan Unkert"
     ],
     "a": [
      "Anita Buggins",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Chris Damato"
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
     "as": 16,
     "h": [
      "Lissa Eagles",
      "Nick Dehmer"
     ],
     "a": [
      "Sommer Peterson",
      "Jesse Peterson"
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
      "Jennifer Sanchez",
      "Helen Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lindsey Thoeng",
      "Yoyo Shen"
     ],
     "a": [
      "Sommer Peterson",
      "Kaley Lai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dylan Unkert",
      "Chris Damato"
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
     "as": 23,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
     ],
     "a": [
      "Coby Golinkoff",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yoyo Shen",
      "Sidd Pathare"
     ],
     "a": [
      "Kaley Lai",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lindsey Thoeng",
      "Dylan Unkert"
     ],
     "a": [
      "Annemarie Mccartney",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Jennifer Sanchez",
      "Jesse Peterson"
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
      "Helen Liu",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anisha Malhotra",
      "Kerrin Maurer"
     ],
     "a": [
      "Helen Liu",
      "Kaley Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lindsey Thoeng",
      "Lissa Eagles"
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
      "Chris Damato",
      "Sidd Pathare"
     ],
     "a": [
      "Manny Lai",
      "Jerry Hine"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Jesse Peterson",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Nick Dehmer"
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
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ],
     "a": [
      "Jennifer Sanchez",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Lindsey Thoeng",
      "Chris Damato"
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
     "as": 6,
     "h": [
      "Yoyo Shen",
      "Dylan Unkert"
     ],
     "a": [
      "Helen Liu",
      "Jerry Hine"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsey Thoeng",
      "Yoyo Shen"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Annemarie Mccartney",
      "Sommer Peterson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Nathan Law",
      "Jerry Hine"
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
      "Manny Lai",
      "Jesse Peterson"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2025-08-27T19:30:00",
   "complete": true,
   "homePoints": 632,
   "awayPoints": 592,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Tyler Arsenault"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Drew Von Bargen"
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
     "as": 14,
     "h": [
      "Arianna Haresign",
      "Matthew Matro"
     ],
     "a": [
      "Yuki Kim",
      "Corey Reinhart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Zach Bowe"
     ],
     "a": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shelah Wallace",
      "Arianna Haresign"
     ],
     "a": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Berger",
      "Michaela Pierznik"
     ],
     "a": [
      "Yuki Kim",
      "Lindsey Allumbaugh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Jeff Comer",
      "Hugh Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Matthew Matro",
      "Jase Volz"
     ],
     "a": [
      "Kenoa Tio",
      "Peter Hwang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Matthew Matro"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
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
      "Rayna Baizman",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dominique Damerjian",
      "Jase Volz"
     ],
     "a": [
      "Allison Tarnoff",
      "Corey Reinhart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Drew Von Bargen"
     ],
     "a": [
      "Lindsey Allumbaugh",
      "Hugh Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shelah Wallace",
      "Dominique Damerjian"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Lindsey Allumbaugh"
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
      "Rayna Baizman",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Drew Von Bargen"
     ],
     "a": [
      "Jeff Comer",
      "Corey Reinhart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Zach Bowe",
      "Jase Volz"
     ],
     "a": [
      "Kenoa Tio",
      "Peter Hwang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Tyler Arsenault"
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
     "as": 14,
     "h": [
      "Michaela Pierznik",
      "Zach Bowe"
     ],
     "a": [
      "Lindsey Allumbaugh",
      "Peter Hwang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Drew Von Bargen"
     ],
     "a": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Arianna Haresign",
      "Jase Volz"
     ],
     "a": [
      "Yuki Kim",
      "Corey Reinhart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shelah Wallace",
      "Arianna Haresign"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Dominique Damerjian"
     ],
     "a": [
      "Yuki Kim",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Zach Bowe"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Drew Von Bargen"
     ],
     "a": [
      "Hugh Laroque",
      "Corey Reinhart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Matthew Matro"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Dominique Damerjian",
      "Zach Bowe"
     ],
     "a": [
      "Rayna Baizman",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Yuki Kim",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shelah Wallace",
      "Jase Volz"
     ],
     "a": [
      "Lindsey Allumbaugh",
      "Peter Hwang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shelah Wallace",
      "Dominique Damerjian"
     ],
     "a": [
      "Lindsey Allumbaugh",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tyler Arsenault",
      "Zach Bowe"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matthew Matro",
      "Jase Volz"
     ],
     "a": [
      "Hugh Laroque",
      "Peter Hwang"
     ]
    }
   ],
   "subs": [
    "Lindsey Allumbaugh"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Flemington",
   "away": "Pickleball HQ",
   "time": "2025-09-03T19:30:00",
   "complete": true,
   "homePoints": 669,
   "awayPoints": 466,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Kristine Brink",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Thomas Connolly"
     ],
     "a": [
      "Ann Betterton",
      "Joshua Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chanda Mccoy",
      "Nate Otto"
     ],
     "a": [
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christine Ferraez",
      "Ross Switkes"
     ],
     "a": [
      "Chelsea Pan",
      "Eric Pan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Suzi Battison",
      "Lynda Tomaru"
     ],
     "a": [
      "Emily Su",
      "Kristine Brink"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chanda Mccoy",
      "Aimee Castellano"
     ],
     "a": [
      "Bessie Hu",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Patrick Ryan"
     ],
     "a": [
      "Lawrence Ly",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nate Otto",
      "Thomas Connolly"
     ],
     "a": [
      "Joshua Ahn",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Aimee Castellano",
      "Patrick Ryan"
     ],
     "a": [
      "Chelsea Pan",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chanda Mccoy",
      "Nate Otto"
     ],
     "a": [
      "Emily Su",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christine Ferraez",
      "Ross Switkes"
     ],
     "a": [
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Ann Betterton",
      "Joshua Ahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christine Ferraez",
      "Lynda Tomaru"
     ],
     "a": [
      "Chelsea Pan",
      "Kristine Brink"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Suzi Battison",
      "Aimee Castellano"
     ],
     "a": [
      "Ann Betterton",
      "Emily Su"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Robbie Oddy",
      "Ross Switkes"
     ],
     "a": [
      "Lawrence Ly",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patrick Ryan",
      "Thomas Connolly"
     ],
     "a": [
      "Joshua Ahn",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Ferraez",
      "Robbie Oddy"
     ],
     "a": [
      "Chelsea Pan",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lynda Tomaru",
      "Ross Switkes"
     ],
     "a": [
      "Ann Betterton",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Kristine Brink",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chanda Mccoy",
      "Patrick Ryan"
     ],
     "a": [
      "Bessie Hu",
      "Joshua Ahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Suzi Battison",
      "Aimee Castellano"
     ],
     "a": [
      "Emily Su",
      "Ann Betterton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chanda Mccoy",
      "Christine Ferraez"
     ],
     "a": [
      "Bessie Hu",
      "Kristine Brink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nate Otto",
      "Thomas Connolly"
     ],
     "a": [
      "Anthony Leung",
      "Eric Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ross Switkes",
      "Patrick Ryan"
     ],
     "a": [
      "Joshua Ahn",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Chelsea Pan",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Emily Su",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Aimee Castellano",
      "Nate Otto"
     ],
     "a": [
      "Kristine Brink",
      "Joshua Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Chanda Mccoy",
      "Patrick Ryan"
     ],
     "a": [
      "Bessie Hu",
      "Nicholas Leung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Suzi Battison",
      "Christine Ferraez"
     ],
     "a": [
      "Emily Su",
      "Kristine Brink"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lynda Tomaru",
      "Aimee Castellano"
     ],
     "a": [
      "Bessie Hu",
      "Chelsea Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Patrick Ryan",
      "Thomas Connolly"
     ],
     "a": [
      "Anthony Leung",
      "Eric Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Ross Switkes",
      "Nate Otto"
     ],
     "a": [
      "Nicholas Leung",
      "Lawrence Ly"
     ]
    }
   ],
   "subs": [
    "Emily Su"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickle Jar",
   "away": "Pickleball Palace",
   "time": "2025-09-03T19:30:00",
   "complete": true,
   "homePoints": 650,
   "awayPoints": 618,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Jessica Pevny",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
     ],
     "a": [
      "Stephanie Bramer",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Paula Ro",
      "Rahul Datta"
     ],
     "a": [
      "Jenna Irwin",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Zoe Ousouljoglou",
      "Shreyas Pani"
     ],
     "a": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ruhi Shah",
      "Paula Ro"
     ],
     "a": [
      "Jessica Pevny",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Carly Pfeffer",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Daniel Gallegos"
     ],
     "a": [
      "Leo Kupferman",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rahul Datta",
      "Shreyas Pani"
     ],
     "a": [
      "Eric Kutzin",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Paula Ro",
      "Rahul Datta"
     ],
     "a": [
      "Ashley Georgevich",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Will Kayal"
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
     "as": 15,
     "h": [
      "Zoe Ousouljoglou",
      "Daniel Gallegos"
     ],
     "a": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Camrin Cronheim"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Carly Pfeffer",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Paula Ro"
     ],
     "a": [
      "Stephanie Bramer",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rahul Datta",
      "Daniel Gallegos"
     ],
     "a": [
      "Leo Kupferman",
      "Daniel Kulik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Will Kayal",
      "Shreyas Pani"
     ],
     "a": [
      "Keith Shedlock",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paula Ro",
      "Camrin Cronheim"
     ],
     "a": [
      "Stephanie Bramer",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ],
     "a": [
      "Ashley Georgevich",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Taylor Peracchio",
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
     "hs": 19,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Rahul Datta"
     ],
     "a": [
      "Carly Pfeffer",
      "Leo Kupferman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Taylor Peracchio",
      "Paula Ro"
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
     "as": 13,
     "h": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Stephanie Bramer",
      "Jessica Pevny"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Will Kayal",
      "Daniel Gallegos"
     ],
     "a": [
      "Eric Kutzin",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Camrin Cronheim",
      "Shreyas Pani"
     ],
     "a": [
      "Keith Shedlock",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Peracchio",
      "Daniel Gallegos"
     ],
     "a": [
      "Stephanie Bramer",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Will Kayal"
     ],
     "a": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Paula Ro",
      "Camrin Cronheim"
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
      "Zoe Ousouljoglou",
      "Rahul Datta"
     ],
     "a": [
      "Jessica Pevny",
      "Leo Kupferman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Carly Pfeffer",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Peracchio",
      "Paula Ro"
     ],
     "a": [
      "Jenna Irwin",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rahul Datta",
      "Shreyas Pani"
     ],
     "a": [
      "Eric Kutzin",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Daniel Gallegos"
     ],
     "a": [
      "Keith Shedlock",
      "Leo Kupferman"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Bounce Malvern",
   "away": "Bounce Philly",
   "time": "2025-09-03T19:30:00",
   "complete": true,
   "homePoints": 657,
   "awayPoints": 519,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Jeff Comer"
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
      "Yuki Kim",
      "Ozair Ibrahim"
     ],
     "a": [
      "Charlotte Healey",
      "Jordan Denish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rayna Baizman",
      "Hugh Laroque"
     ],
     "a": [
      "Kim Bohrer",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ],
     "a": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Charlotte Healey",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Allison Tarnoff"
     ],
     "a": [
      "Julia Sternberg",
      "Julia Plein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Jeff Comer",
      "Ozair Ibrahim"
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
     "as": 15,
     "h": [
      "Kenoa Tio",
      "Corey Reinhart"
     ],
     "a": [
      "Ashwin Korde",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kaylyn Swankoski",
      "Ozair Ibrahim"
     ],
     "a": [
      "Charlotte Healey",
      "Alexander Tong"
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
      "Julia Sternberg",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Kim Bohrer",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Yuki Kim",
      "Kenoa Tio"
     ],
     "a": [
      "Julia Plein",
      "Ashwin Korde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Rayna Baizman",
      "Yuki Kim"
     ],
     "a": [
      "Julia Sternberg",
      "Kim Bohrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ],
     "a": [
      "Julia Plein",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jeff Comer",
      "Kenoa Tio"
     ],
     "a": [
      "Jordan Denish",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hugh Laroque",
      "Corey Reinhart"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Yuki Kim",
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
     "as": 11,
     "h": [
      "Rayna Baizman",
      "Ozair Ibrahim"
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
     "as": 17,
     "h": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ],
     "a": [
      "Julia Plein",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ],
     "a": [
      "Kathleen Dougherty",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Allison Tarnoff"
     ],
     "a": [
      "Rachel Alfano",
      "Kim Bohrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kaylyn Swankoski",
      "Yuki Kim"
     ],
     "a": [
      "Julia Plein",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Ozair Ibrahim",
      "Corey Reinhart"
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
      "Jeff Comer",
      "Jonah Fliegelman"
     ],
     "a": [
      "Mark Kilimnik",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rayna Baizman",
      "Kenoa Tio"
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
     "as": 13,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Kathleen Dougherty",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yuki Kim",
      "Jonah Fliegelman"
     ],
     "a": [
      "Rachel Alfano",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ],
     "a": [
      "Charlotte Healey",
      "Jordan Denish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yuki Kim",
      "Allison Tarnoff"
     ],
     "a": [
      "Kim Bohrer",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Charlotte Healey",
      "Rachel Alfano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ],
     "a": [
      "Alexander Tong",
      "Jordan Denish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Corey Reinhart",
      "Hugh Laroque"
     ],
     "a": [
      "Bruno Casino Remondo",
      "Dustin Rabinowitz"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Players Courtyard",
   "away": "Jersey Devil",
   "time": "2025-09-03T19:30:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 599,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
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
      "Annemarie Mccartney",
      "Manny Lai"
     ],
     "a": [
      "Michaela Pierznik",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Nathan Law"
     ],
     "a": [
      "Sophy Siv",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Brittany Hall",
      "Coby Golinkoff"
     ],
     "a": [
      "Chaille Godinez",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Stacy Walkowitz"
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
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
      "Chaille Godinez",
      "Michaela Pierznik"
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
      "Tyler Arsenault",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hector Irizarry",
      "Steven Maisonet"
     ],
     "a": [
      "Matthew Matro",
      "Zach Bowe"
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
      "Shelah Wallace",
      "Stephen Conger"
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
      "Michaela Pierznik",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anita Buggins",
      "Coby Golinkoff"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
     ],
     "a": [
      "Sophy Siv",
      "Zach Bowe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Annemarie Mccartney"
     ],
     "a": [
      "Shelah Wallace",
      "Sophy Siv"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Walkowitz",
      "Jennifer Sanchez"
     ],
     "a": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Coby Golinkoff",
      "Steven Maisonet"
     ],
     "a": [
      "Matthew Matro",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hector Irizarry",
      "Manny Lai"
     ],
     "a": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Steven Maisonet"
     ],
     "a": [
      "Chaille Godinez",
      "Zach Bowe"
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
      "Shelah Wallace",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Nathan Law"
     ],
     "a": [
      "Sophy Siv",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Stacy Walkowitz",
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
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Sanchez",
      "Brittany Hall"
     ],
     "a": [
      "Chaille Godinez",
      "Sophy Siv"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anita Buggins",
      "Stacy Walkowitz"
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
     "as": 15,
     "h": [
      "Hector Irizarry",
      "Coby Golinkoff"
     ],
     "a": [
      "Tyler Arsenault",
      "Stephen Conger"
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
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anita Buggins",
      "Nathan Law"
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
      "Jennifer Sanchez",
      "Coby Golinkoff"
     ],
     "a": [
      "Chaille Godinez",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
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
     "as": 14,
     "h": [
      "Stacy Walkowitz",
      "Manny Lai"
     ],
     "a": [
      "Sophy Siv",
      "Matthew Matro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Brittany Hall"
     ],
     "a": [
      "Chaille Godinez",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hector Irizarry",
      "Manny Lai"
     ],
     "a": [
      "Matthew Matro",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Coby Golinkoff",
      "Nathan Law"
     ],
     "a": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Monroe",
   "away": "Home Court",
   "time": "2025-09-03T19:30:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 630,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Claire Gaston",
      "Dilan Shah"
     ],
     "a": [
      "Gift Horn",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Johanna Wagner",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Lily Yip",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Tin Wai Kwan",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Catherine Stewart",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Gift Horn",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Richa Shah"
     ],
     "a": [
      "Lily Yip",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
     ],
     "a": [
      "Manpreet Singh",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Chris Bucaro",
      "Anthony Ursino"
     ],
     "a": [
      "Gautham Bondugula",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Catherine Stewart",
      "Maanav Shah"
     ],
     "a": [
      "Gift Horn",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Johanna Wagner",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Anthony Ursino"
     ],
     "a": [
      "Lily Yip",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Tin Wai Kwan",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Richa Shah"
     ],
     "a": [
      "Johanna Wagner",
      "Gift Horn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Claire Gaston"
     ],
     "a": [
      "Lily Yip",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
     ],
     "a": [
      "Manpreet Singh",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chris Bucaro",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Hruday Vemparala",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Gift Horn",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Catherine Stewart",
      "Maanav Shah"
     ],
     "a": [
      "Johanna Wagner",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Lily Yip",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Amanda Ksiezopolski",
      "Anthony Ursino"
     ],
     "a": [
      "Tin Wai Kwan",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Richa Shah"
     ],
     "a": [
      "Gift Horn",
      "Lily Yip"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Claire Gaston",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Tin Wai Kwan",
      "Johanna Wagner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dilan Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Manpreet Singh",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Maanav Shah",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Hruday Vemparala",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Gift Horn",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amanda Ksiezopolski",
      "Chris Bucaro"
     ],
     "a": [
      "Johanna Wagner",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Maanav Shah"
     ],
     "a": [
      "Lily Yip",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Anthony Ursino"
     ],
     "a": [
      "Tin Wai Kwan",
      "Stanley Bonczek"
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
      "Gift Horn",
      "Lily Yip"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Johanna Wagner",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dilan Shah",
      "Chris Bucaro"
     ],
     "a": [
      "Manpreet Singh",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anthony Ursino",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Hruday Vemparala",
      "Stanley Bonczek"
     ]
    }
   ],
   "subs": [
    "Tin Wai Kwan"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "The Atlantic Club",
   "away": "Pickleball HQ",
   "time": "2025-09-10T19:00:00",
   "complete": true,
   "homePoints": 657,
   "awayPoints": 537,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Stefanie Sohosky",
      "Michael Swell"
     ],
     "a": [
      "Marina Gurevich",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joey Angelson",
      "Simon Rosenwasser"
     ],
     "a": [
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eva Danieli",
      "Matt Schall"
     ],
     "a": [
      "Chelsea Pan",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Adrienne Butrymowicz",
      "Dipen Bhatt"
     ],
     "a": [
      "Cami Lee",
      "Saif Sarwar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Joey Angelson",
      "Stefanie Sohosky"
     ],
     "a": [
      "Ann Betterton",
      "Cami Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Adrienne Butrymowicz",
      "Alice Napolitano"
     ],
     "a": [
      "Marina Gurevich",
      "Chelsea Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Samuel Levinson",
      "Michael Swell"
     ],
     "a": [
      "Lawrence Ly",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dipen Bhatt",
      "Matt Schall"
     ],
     "a": [
      "Jesse Rosenberg",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Simon Rosenwasser"
     ],
     "a": [
      "Ann Betterton",
      "Saif Sarwar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Samuel Levinson"
     ],
     "a": [
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stefanie Sohosky",
      "Michael Swell"
     ],
     "a": [
      "Chelsea Pan",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joey Angelson",
      "Dipen Bhatt"
     ],
     "a": [
      "Marina Gurevich",
      "Eric Pan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joey Angelson",
      "Eva Danieli"
     ],
     "a": [
      "Ann Betterton",
      "Bessie Hu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stefanie Sohosky",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Marina Gurevich",
      "Cami Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matt Schall",
      "Samuel Levinson"
     ],
     "a": [
      "Saif Sarwar",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Simon Rosenwasser",
      "Dipen Bhatt"
     ],
     "a": [
      "Anthony Leung",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stefanie Sohosky",
      "Simon Rosenwasser"
     ],
     "a": [
      "Ann Betterton",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eva Danieli",
      "Matt Schall"
     ],
     "a": [
      "Chelsea Pan",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Adrienne Butrymowicz",
      "Michael Swell"
     ],
     "a": [
      "Cami Lee",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Samuel Levinson"
     ],
     "a": [
      "Bessie Hu",
      "Saif Sarwar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Ann Betterton",
      "Cami Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eva Danieli",
      "Alice Napolitano"
     ],
     "a": [
      "Marina Gurevich",
      "Chelsea Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Simon Rosenwasser",
      "Matt Schall"
     ],
     "a": [
      "Anthony Leung",
      "Lawrence Ly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dipen Bhatt",
      "Michael Swell"
     ],
     "a": [
      "Saif Sarwar",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alice Napolitano",
      "Simon Rosenwasser"
     ],
     "a": [
      "Marina Gurevich",
      "Saif Sarwar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stefanie Sohosky",
      "Matt Schall"
     ],
     "a": [
      "Bessie Hu",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joey Angelson",
      "Dipen Bhatt"
     ],
     "a": [
      "Chelsea Pan",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eva Danieli",
      "Samuel Levinson"
     ],
     "a": [
      "Cami Lee",
      "Lawrence Ly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Stefanie Sohosky",
      "Joey Angelson"
     ],
     "a": [
      "Cami Lee",
      "Marina Gurevich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alice Napolitano",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Ann Betterton",
      "Bessie Hu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Samuel Levinson",
      "Michael Swell"
     ],
     "a": [
      "Lawrence Ly",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Matt Schall"
     ],
     "a": [
      "Anthony Leung",
      "Eric Pan"
     ]
    }
   ],
   "subs": [
    "Alice Napolitano",
    "Marina Gurevich"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Flemington",
   "away": "Monroe",
   "time": "2025-09-10T19:30:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 571,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chanda Mccoy",
      "Nate Otto"
     ],
     "a": [
      "Cameron Barraco",
      "Dilan Shah"
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
      "Serena Martz",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
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
     "as": 13,
     "h": [
      "Susan Ackley",
      "Patrick Ryan"
     ],
     "a": [
      "Richa Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chanda Mccoy",
      "Lynda Tomaru"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Morgan Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Suzi Battison",
      "Emily Miller"
     ],
     "a": [
      "Richa Shah",
      "Serena Martz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Thomas Connolly",
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
     "hs": 21,
     "as": 19,
     "h": [
      "Robbie Oddy",
      "Ross Switkes"
     ],
     "a": [
      "Thomas Dill",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chanda Mccoy",
      "Nate Otto"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan Ackley",
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
     "as": 19,
     "h": [
      "Lynda Tomaru",
      "Ross Switkes"
     ],
     "a": [
      "Morgan Fishman",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chanda Mccoy",
      "Lynda Tomaru"
     ],
     "a": [
      "Richa Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Suzi Battison",
      "Emily Miller"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Morgan Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Ross Switkes"
     ],
     "a": [
      "Maanav Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Patrick Ryan",
      "Thomas Connolly"
     ],
     "a": [
      "Dilan Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Nate Otto"
     ],
     "a": [
      "Morgan Fishman",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Serena Martz",
      "Thomas Dill"
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
      "Emily Miller",
      "Ross Switkes"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Chris Bucaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Richa Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Emily Miller"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Serena Martz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Patrick Ryan"
     ],
     "a": [
      "Chris Bucaro",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Maanav Shah",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Emily Miller",
      "Ross Switkes"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
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
     "as": 14,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Morgan Fishman",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Ackley",
      "Nate Otto"
     ],
     "a": [
      "Serena Martz",
      "Eric Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Richa Shah",
      "Serena Martz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chanda Mccoy",
      "Emily Miller"
     ],
     "a": [
      "Morgan Fishman",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Patrick Ryan"
     ],
     "a": [
      "Thomas Dill",
      "Chris Bucaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nate Otto",
      "Thomas Connolly"
     ],
     "a": [
      "Dilan Shah",
      "Eric Lin"
     ]
    }
   ],
   "subs": [
    "Serena Martz"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Players Courtyard",
   "away": "Bounce Philly",
   "time": "2025-09-10T19:30:00",
   "complete": true,
   "homePoints": 616,
   "awayPoints": 579,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anita Buggins",
      "Hector Irizarry"
     ],
     "a": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Manny Lai"
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
      "Annemarie Mccartney",
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
     "hs": 13,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Jeff Wiedemann"
     ],
     "a": [
      "Charlotte Healey",
      "Dustin Rabinowitz"
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
      "Alex Abad",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stacy Walkowitz",
      "Annemarie Mccartney"
     ],
     "a": [
      "Julia Sternberg",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hector Irizarry",
      "Manny Lai"
     ],
     "a": [
      "Bruno Casino Remondo",
      "Alexander Tong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jerry Hine",
      "Jeff Wiedemann"
     ],
     "a": [
      "Scott Bohrer",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Anita Buggins",
      "Hector Irizarry"
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
     "as": 12,
     "h": [
      "Jennifer Sanchez",
      "Coby Golinkoff"
     ],
     "a": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Jerry Hine"
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
     "as": 12,
     "h": [
      "Annemarie Mccartney",
      "Manny Lai"
     ],
     "a": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Annemarie Mccartney",
      "Kaley Lai"
     ],
     "a": [
      "Alex Abad",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Stacy Walkowitz"
     ],
     "a": [
      "Kathleen Dougherty",
      "Charlotte Healey"
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
      "Bruno Casino Remondo",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Coby Golinkoff",
      "Jerry Hine"
     ],
     "a": [
      "Scott Bohrer",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Coby Golinkoff"
     ],
     "a": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
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
     "as": 12,
     "h": [
      "Kaley Lai",
      "Manny Lai"
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
     "as": 16,
     "h": [
      "Anita Buggins",
      "Jeff Wiedemann"
     ],
     "a": [
      "Alex Abad",
      "Scott Bohrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ],
     "a": [
      "Alex Abad",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Stacy Walkowitz"
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
      "Manny Lai",
      "Coby Golinkoff"
     ],
     "a": [
      "Alexander Tong",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hector Irizarry",
      "Jeff Wiedemann"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Bruno Casino Remondo"
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
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kaley Lai",
      "Jerry Hine"
     ],
     "a": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Manny Lai"
     ],
     "a": [
      "Alex Abad",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Jeff Wiedemann"
     ],
     "a": [
      "Kathleen Dougherty",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ],
     "a": [
      "Alex Abad",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Brittany Hall",
      "Jennifer Sanchez"
     ],
     "a": [
      "Rachel Alfano",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Coby Golinkoff",
      "Jerry Hine"
     ],
     "a": [
      "Bruno Casino Remondo",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Manny Lai",
      "Jeff Wiedemann"
     ],
     "a": [
      "Alexander Tong",
      "Mark Kilimnik"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Pickle Jar",
   "away": "Home Court",
   "time": "2025-09-10T19:30:00",
   "complete": true,
   "homePoints": 599,
   "awayPoints": 644,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Zoe Ousouljoglou",
      "Rahul Datta"
     ],
     "a": [
      "Gift Horn",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Johanna Wagner",
      "John Gargana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Paula Ro",
      "Daniel Gallegos"
     ],
     "a": [
      "Lily Yip",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
     ],
     "a": [
      "Doryan Amato",
      "Manpreet Singh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ruhi Shah",
      "Elysia Price"
     ],
     "a": [
      "Gift Horn",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Peracchio",
      "Paula Ro"
     ],
     "a": [
      "Lily Yip",
      "Doryan Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Rahul Datta"
     ],
     "a": [
      "Manpreet Singh",
      "Zachary Adler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Camrin Cronheim",
      "Muhammad Usman"
     ],
     "a": [
      "Hruday Vemparala",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
     ],
     "a": [
      "Gift Horn",
      "Zachary Adler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elysia Price",
      "Rahul Datta"
     ],
     "a": [
      "Johanna Wagner",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Lily Yip",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Daniel Gallegos"
     ],
     "a": [
      "Doryan Amato",
      "John Gargana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Gift Horn",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Ruhi Shah",
      "Elysia Price"
     ],
     "a": [
      "Lily Yip",
      "Doryan Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Daniel Gallegos"
     ],
     "a": [
      "Manpreet Singh",
      "Zachary Adler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rahul Datta",
      "Muhammad Usman"
     ],
     "a": [
      "Hruday Vemparala",
      "John Gargana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Rahul Datta"
     ],
     "a": [
      "Gift Horn",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ],
     "a": [
      "Johanna Wagner",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Paula Ro",
      "Will Kayal"
     ],
     "a": [
      "Lily Yip",
      "Zachary Adler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Elysia Price",
      "Muhammad Usman"
     ],
     "a": [
      "Doryan Amato",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Peracchio",
      "Paula Ro"
     ],
     "a": [
      "Gift Horn",
      "Lily Yip"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elysia Price",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Johanna Wagner",
      "Doryan Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Daniel Gallegos"
     ],
     "a": [
      "Zachary Adler",
      "John Gargana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Will Kayal",
      "Muhammad Usman"
     ],
     "a": [
      "Hruday Vemparala",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Will Kayal"
     ],
     "a": [
      "Gift Horn",
      "John Gargana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Elysia Price",
      "Muhammad Usman"
     ],
     "a": [
      "Johanna Wagner",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ],
     "a": [
      "Lily Yip",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Paula Ro",
      "Rahul Datta"
     ],
     "a": [
      "Doryan Amato",
      "Zachary Adler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Paula Ro"
     ],
     "a": [
      "Gift Horn",
      "Doryan Amato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Johanna Wagner",
      "Lily Yip"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Will Kayal",
      "Daniel Gallegos"
     ],
     "a": [
      "Manpreet Singh",
      "John Gargana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rahul Datta",
      "Muhammad Usman"
     ],
     "a": [
      "Gautham Bondugula",
      "Zachary Adler"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Dill Dinkers Hatboro",
   "away": "Lehigh Valley",
   "time": "2025-09-10T19:30:00",
   "complete": true,
   "homePoints": 642,
   "awayPoints": 639,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Claudya Elefante",
      "Ethan Henigan"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Garv Singhal"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Dylan Ashbach"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lilie Sen",
      "Joel Phillips"
     ],
     "a": [
      "Kerry Schaffer",
      "Matthew Lucas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Nahla Bernhardt"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Cristi Landrigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alicia Reed",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Kerry Schaffer",
      "Melody Grohotolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Dylan Ashbach",
      "Joel Phillips"
     ],
     "a": [
      "Geoff Watson",
      "Gog Boonswang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Garv Singhal",
      "Drew Kolb"
     ],
     "a": [
      "Conor Landrigan",
      "Matthew Lucas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ],
     "a": [
      "Melody Grohotolski",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lilie Sen",
      "Garv Singhal"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Robert Schimony"
     ],
     "a": [
      "Cristi Landrigan",
      "Matthew Lucas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alicia Reed",
      "Joel Phillips"
     ],
     "a": [
      "Becca Bender",
      "Gog Boonswang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lilie Sen",
      "Nahla Bernhardt"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Becca Bender"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Alicia Reed"
     ],
     "a": [
      "Kerry Schaffer",
      "Cristi Landrigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Joel Phillips"
     ],
     "a": [
      "Geoff Watson",
      "Conor Landrigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Robert Schimony",
      "Drew Kolb"
     ],
     "a": [
      "Matthew Lucas",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alicia Reed",
      "Drew Kolb"
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
     "as": 18,
     "h": [
      "Nahla Bernhardt",
      "Garv Singhal"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alyssa Tartaglia",
      "Dylan Ashbach"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Claudya Elefante",
      "Ethan Henigan"
     ],
     "a": [
      "Kerry Schaffer",
      "Matthew Lucas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Alicia Reed"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Melody Grohotolski"
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
      "Becca Bender",
      "Kerry Schaffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Garv Singhal",
      "Ethan Henigan"
     ],
     "a": [
      "Matthew Lucas",
      "Geoff Watson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Robert Schimony",
      "Drew Kolb"
     ],
     "a": [
      "Conor Landrigan",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alicia Reed",
      "Robert Schimony"
     ],
     "a": [
      "Melody Grohotolski",
      "Geoff Watson"
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
      "Katarzyna Clevenger",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Lilie Sen",
      "Ethan Henigan"
     ],
     "a": [
      "Cristi Landrigan",
      "Matthew Lucas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alyssa Tartaglia",
      "Garv Singhal"
     ],
     "a": [
      "Becca Bender",
      "Gog Boonswang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Alicia Reed",
      "Lilie Sen"
     ],
     "a": [
      "Becca Bender",
      "Cristi Landrigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Melody Grohotolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Garv Singhal"
     ],
     "a": [
      "Conor Landrigan",
      "Geoff Watson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ethan Henigan",
      "Drew Kolb"
     ],
     "a": [
      "Matthew Lucas",
      "Gog Boonswang"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Jersey Devil",
   "away": "Pickle House",
   "time": "2025-09-10T19:30:00",
   "complete": true,
   "homePoints": 537,
   "awayPoints": 672,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Anisha Malhotra",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Matthew Matro"
     ],
     "a": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Jake Treiber"
     ],
     "a": [
      "Lindsey Thoeng",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Tyler Arsenault"
     ],
     "a": [
      "Taylor Hartman",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Michaela Pierznik"
     ],
     "a": [
      "Anisha Malhotra",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Arianna Haresign"
     ],
     "a": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Stephen Conger",
      "Jake Treiber"
     ],
     "a": [
      "Michael Li",
      "Nick Dehmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Tyler Arsenault"
     ],
     "a": [
      "Dylan Unkert",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
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
      "Michaela Pierznik",
      "Matthew Matro"
     ],
     "a": [
      "Kerrin Maurer",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Jake Treiber"
     ],
     "a": [
      "Lindsey Thoeng",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Zach Bowe"
     ],
     "a": [
      "Taylor Hartman",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Dominique Damerjian",
      "Rachel Berger"
     ],
     "a": [
      "Lindsey Thoeng",
      "Kerrin Maurer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Arianna Haresign"
     ],
     "a": [
      "Taylor Hartman",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stephen Conger",
      "Jake Treiber"
     ],
     "a": [
      "Michael Li",
      "Nick Dehmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Zach Bowe"
     ],
     "a": [
      "Sidd Pathare",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Matthew Matro"
     ],
     "a": [
      "Anisha Malhotra",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Zach Bowe"
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
      "Rachel Berger",
      "Stephen Conger"
     ],
     "a": [
      "Lindsey Thoeng",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Tyler Arsenault"
     ],
     "a": [
      "Taylor Hartman",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Rachel Berger"
     ],
     "a": [
      "Lindsey Thoeng",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Dominique Damerjian"
     ],
     "a": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Tyler Arsenault",
      "Jake Treiber"
     ],
     "a": [
      "Sidd Pathare",
      "Nick Dehmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Matthew Matro",
      "Zach Bowe"
     ],
     "a": [
      "Michael Li",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Shelah Wallace",
      "Matthew Matro"
     ],
     "a": [
      "Anisha Malhotra",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Tyler Arsenault"
     ],
     "a": [
      "Kerrin Maurer",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Stephen Conger"
     ],
     "a": [
      "Lindsey Thoeng",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michaela Pierznik",
      "Zach Bowe"
     ],
     "a": [
      "Taylor Hartman",
      "Sidd Pathare"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Michaela Pierznik"
     ],
     "a": [
      "Lindsey Thoeng",
      "Taylor Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Shelah Wallace",
      "Dominique Damerjian"
     ],
     "a": [
      "Kerrin Maurer",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Sidd Pathare",
      "Nick Dehmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Matthew Matro",
      "Stephen Conger"
     ],
     "a": [
      "Michael Li",
      "Kishan Shah"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickleball HQ",
   "away": "Flemington",
   "time": "2025-09-17T19:00:00",
   "complete": true,
   "homePoints": 508,
   "awayPoints": 658,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Lawrence Ly"
     ],
     "a": [
      "Lynda Tomaru",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cami Lee",
      "Saif Sarwar"
     ],
     "a": [
      "Chanda Mccoy",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ann Betterton",
      "Joshua Ahn"
     ],
     "a": [
      "Susan Ackley",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Anthony Leung"
     ],
     "a": [
      "Christine Ferraez",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Ann Betterton"
     ],
     "a": [
      "Courtney Greener",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Cami Lee",
      "Kristine Brink"
     ],
     "a": [
      "Chanda Mccoy",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Saif Sarwar",
      "Joshua Ahn"
     ],
     "a": [
      "Nate Otto",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Lawrence Ly",
      "Anthony Leung"
     ],
     "a": [
      "Robbie Oddy",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Saif Sarwar"
     ],
     "a": [
      "Courtney Greener",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Lawrence Ly"
     ],
     "a": [
      "Chanda Mccoy",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Anthony Leung"
     ],
     "a": [
      "Susan Ackley",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cami Lee",
      "Nicholas Leung"
     ],
     "a": [
      "Christine Ferraez",
      "Nate Otto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cami Lee",
      "Chelsea Pan"
     ],
     "a": [
      "Courtney Greener",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Kristine Brink"
     ],
     "a": [
      "Lynda Tomaru",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Anthony Leung",
      "Joshua Ahn"
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
     "as": 15,
     "h": [
      "Lawrence Ly",
      "Nicholas Leung"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Eric Pan"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Joshua Ahn"
     ],
     "a": [
      "Christine Ferraez",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cami Lee",
      "Saif Sarwar"
     ],
     "a": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Nicholas Leung"
     ],
     "a": [
      "Chanda Mccoy",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Chelsea Pan"
     ],
     "a": [
      "Courtney Greener",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Kristine Brink"
     ],
     "a": [
      "Chanda Mccoy",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Saif Sarwar",
      "Nicholas Leung"
     ],
     "a": [
      "Nate Otto",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anthony Leung",
      "Lawrence Ly"
     ],
     "a": [
      "Robbie Oddy",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Nicholas Leung"
     ],
     "a": [
      "Courtney Greener",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cami Lee",
      "Lawrence Ly"
     ],
     "a": [
      "Chanda Mccoy",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Eric Pan"
     ],
     "a": [
      "Susan Ackley",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Joshua Ahn"
     ],
     "a": [
      "Lynda Tomaru",
      "Thomas Connolly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Cami Lee"
     ],
     "a": [
      "Courtney Greener",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Bessie Hu"
     ],
     "a": [
      "Christine Ferraez",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nicholas Leung",
      "Joshua Ahn"
     ],
     "a": [
      "Ross Switkes",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anthony Leung",
      "Saif Sarwar"
     ],
     "a": [
      "Nate Otto",
      "Patrick Ryan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Bounce Malvern",
   "away": "Pickle House",
   "time": "2025-09-17T19:30:00",
   "complete": true,
   "homePoints": 613,
   "awayPoints": 622,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Jeff Comer"
     ],
     "a": [
      "Lindsey Thoeng",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Ozair Ibrahim"
     ],
     "a": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Taylor Hartman",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rayna Baizman",
      "Yuki Kim"
     ],
     "a": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kaylyn Swankoski",
      "Lindsey Taaffe"
     ],
     "a": [
      "Lindsey Thoeng",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ozair Ibrahim",
      "Jeff Comer"
     ],
     "a": [
      "Nick Dehmer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonah Fliegelman",
      "Kenoa Tio"
     ],
     "a": [
      "Kishan Shah",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ],
     "a": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ],
     "a": [
      "Lindsey Thoeng",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lindsey Taaffe",
      "Ozair Ibrahim"
     ],
     "a": [
      "Taylor Hartman",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Yuki Kim"
     ],
     "a": [
      "Kerrin Maurer",
      "Taylor Hartman"
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
      "Lindsey Thoeng",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hugh Laroque",
      "Jonah Fliegelman"
     ],
     "a": [
      "Nick Dehmer",
      "Kishan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeff Comer",
      "Kenoa Tio"
     ],
     "a": [
      "Dylan Unkert",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ],
     "a": [
      "Lindsey Thoeng",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ],
     "a": [
      "Taylor Hartman",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ],
     "a": [
      "Lissa Eagles",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Hugh Laroque"
     ],
     "a": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsey Taaffe",
      "Rayna Baizman"
     ],
     "a": [
      "Kerrin Maurer",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ],
     "a": [
      "Dylan Unkert",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Hugh Laroque",
      "Jonah Fliegelman"
     ],
     "a": [
      "Kishan Shah",
      "Nick Dehmer"
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
      "Lissa Eagles",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Hugh Laroque"
     ],
     "a": [
      "Lindsey Thoeng",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kaylyn Swankoski",
      "Ozair Ibrahim"
     ],
     "a": [
      "Taylor Hartman",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lindsey Taaffe",
      "Jeff Comer"
     ],
     "a": [
      "Kerrin Maurer",
      "Sidd Pathare"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Lindsey Thoeng",
      "Taylor Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Yuki Kim"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kenoa Tio",
      "Jonah Fliegelman"
     ],
     "a": [
      "Nick Dehmer",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ozair Ibrahim",
      "Jeff Comer"
     ],
     "a": [
      "Kishan Shah",
      "Dylan Unkert"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Home Court",
   "away": "Monroe",
   "time": "2025-09-17T19:30:00",
   "complete": true,
   "homePoints": 601,
   "awayPoints": 621,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gift Horn",
      "Zachary Adler"
     ],
     "a": [
      "Veronica Mogilevich",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Johanna Wagner",
      "Stephen Mcnamara"
     ],
     "a": [
      "Catherine Stewart",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "Hruday Vemparala"
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
     "as": 19,
     "h": [
      "Doryan Amato",
      "John Gargana"
     ],
     "a": [
      "Amalia Ditrapani",
      "Ethan Bakalinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gift Horn",
      "Doryan Amato"
     ],
     "a": [
      "Richa Shah",
      "Claire Gaston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Johanna Wagner",
      "Noelle Ramirez"
     ],
     "a": [
      "Veronica Mogilevich",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Zachary Adler",
      "Stephen Mcnamara"
     ],
     "a": [
      "Thomas Dill",
      "Ethan Bakalinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "John Gargana"
     ],
     "a": [
      "Dilan Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Johanna Wagner",
      "John Gargana"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gift Horn",
      "Stephen Mcnamara"
     ],
     "a": [
      "Catherine Stewart",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Noelle Ramirez",
      "Zachary Adler"
     ],
     "a": [
      "Claire Gaston",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Hruday Vemparala"
     ],
     "a": [
      "Veronica Mogilevich",
      "Ethan Bakalinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gift Horn",
      "Noelle Ramirez"
     ],
     "a": [
      "Richa Shah",
      "Claire Gaston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Johanna Wagner",
      "Doryan Amato"
     ],
     "a": [
      "Catherine Stewart",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zachary Adler",
      "John Gargana"
     ],
     "a": [
      "Thomas Dill",
      "Ethan Bakalinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Stephen Mcnamara"
     ],
     "a": [
      "Dilan Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gift Horn",
      "John Gargana"
     ],
     "a": [
      "Claire Gaston",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Johanna Wagner",
      "Hruday Vemparala"
     ],
     "a": [
      "Catherine Stewart",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Noelle Ramirez",
      "Stephen Mcnamara"
     ],
     "a": [
      "Veronica Mogilevich",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Doryan Amato",
      "Zachary Adler"
     ],
     "a": [
      "Amalia Ditrapani",
      "Ethan Bakalinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gift Horn",
      "Doryan Amato"
     ],
     "a": [
      "Richa Shah",
      "Catherine Stewart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Johanna Wagner",
      "Noelle Ramirez"
     ],
     "a": [
      "Veronica Mogilevich",
      "Claire Gaston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Zachary Adler",
      "Hruday Vemparala"
     ],
     "a": [
      "Maanav Shah",
      "Thomas Dill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stephen Mcnamara",
      "John Gargana"
     ],
     "a": [
      "Dilan Shah",
      "Ethan Bakalinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gift Horn",
      "Zachary Adler"
     ],
     "a": [
      "Claire Gaston",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Johanna Wagner",
      "John Gargana"
     ],
     "a": [
      "Catherine Stewart",
      "Ethan Bakalinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Noelle Ramirez",
      "Hruday Vemparala"
     ],
     "a": [
      "Amalia Ditrapani",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Stephen Mcnamara"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Gift Horn",
      "Johanna Wagner"
     ],
     "a": [
      "Catherine Stewart",
      "Veronica Mogilevich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Doryan Amato",
      "Noelle Ramirez"
     ],
     "a": [
      "Claire Gaston",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zachary Adler",
      "Stephen Mcnamara"
     ],
     "a": [
      "Maanav Shah",
      "Thomas Dill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "John Gargana",
      "Hruday Vemparala"
     ],
     "a": [
      "Dilan Shah",
      "Ethan Bakalinsky"
     ]
    }
   ],
   "subs": [
    "Stephen Mcnamara"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Pickle Jar",
   "time": "2025-09-17T19:30:00",
   "complete": true,
   "homePoints": 578,
   "awayPoints": 636,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ],
     "a": [
      "Taylor Peracchio",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Leo Kupferman"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Rahul Datta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Corey Maryles"
     ],
     "a": [
      "Ruhi Shah",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stephanie Bramer",
      "Eric Kutzin"
     ],
     "a": [
      "Paula Ro",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stephanie Bramer",
      "Jessica Pevny"
     ],
     "a": [
      "Taylor Peracchio",
      "Paula Ro"
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
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Leo Kupferman",
      "Eric Kutzin"
     ],
     "a": [
      "Rahul Datta",
      "David Lavy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Corey Maryles",
      "Keith Shedlock"
     ],
     "a": [
      "Will Kayal",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jenna Irwin",
      "Leo Kupferman"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Rahul Datta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stephanie Bramer",
      "Patrick Ceccacci"
     ],
     "a": [
      "Taylor Peracchio",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Eric Kutzin"
     ],
     "a": [
      "Paula Ro",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Keith Shedlock"
     ],
     "a": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Jessica Hendry"
     ],
     "a": [
      "Taylor Peracchio",
      "Paula Ro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stephanie Bramer",
      "Jessica Pevny"
     ],
     "a": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Leo Kupferman",
      "Keith Shedlock"
     ],
     "a": [
      "Rahul Datta",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Corey Maryles",
      "Patrick Ceccacci"
     ],
     "a": [
      "David Lavy",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stephanie Bramer",
      "Corey Maryles"
     ],
     "a": [
      "Taylor Peracchio",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jessica Pevny",
      "Eric Kutzin"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
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
      "Paula Ro",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Keith Shedlock"
     ],
     "a": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stephanie Bramer",
      "Jenna Irwin"
     ],
     "a": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Hendry",
      "Carly Pfeffer"
     ],
     "a": [
      "Ruhi Shah",
      "Paula Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Leo Kupferman",
      "Corey Maryles"
     ],
     "a": [
      "Rahul Datta",
      "David Lavy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Keith Shedlock",
      "Eric Kutzin"
     ],
     "a": [
      "James Cannizzaro",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Corey Maryles"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jessica Hendry",
      "Eric Kutzin"
     ],
     "a": [
      "Taylor Peracchio",
      "Rahul Datta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jenna Irwin",
      "Leo Kupferman"
     ],
     "a": [
      "Ruhi Shah",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Patrick Ceccacci"
     ],
     "a": [
      "Paula Ro",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Jessica Pevny"
     ],
     "a": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Carly Pfeffer"
     ],
     "a": [
      "Ruhi Shah",
      "Paula Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Corey Maryles",
      "Keith Shedlock"
     ],
     "a": [
      "Rahul Datta",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Leo Kupferman",
      "Patrick Ceccacci"
     ],
     "a": [
      "David Lavy",
      "Camrin Cronheim"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Bounce Philly",
   "away": "Dill Dinkers Hatboro",
   "time": "2025-09-17T19:30:00",
   "complete": true,
   "homePoints": 608,
   "awayPoints": 629,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alex Abad",
      "Ashwin Korde"
     ],
     "a": [
      "Nahla Bernhardt",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Julia Plein",
      "Mark Kilimnik"
     ],
     "a": [
      "Claudya Elefante",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Charlotte Healey",
      "Alexander Tong"
     ],
     "a": [
      "Alicia Reed",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Charlotte Healey",
      "Kathleen Dougherty"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Abad",
      "Julia Plein"
     ],
     "a": [
      "Lilie Sen",
      "Alicia Reed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alexander Tong",
      "Ashwin Korde"
     ],
     "a": [
      "Garv Singhal",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mark Kilimnik",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Dylan Ashbach",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
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
      "Kathleen Dougherty",
      "Alexander Tong"
     ],
     "a": [
      "Lilie Sen",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Julia Plein",
      "Mark Kilimnik"
     ],
     "a": [
      "Claudya Elefante",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alex Abad",
      "Ashwin Korde"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Garv Singhal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Abad",
      "Kathleen Dougherty"
     ],
     "a": [
      "Alicia Reed",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Charlotte Healey",
      "Julia Plein"
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
      "Alexander Tong",
      "Ashwin Korde"
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
     "as": 15,
     "h": [
      "Mark Kilimnik",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Joel Phillips",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Mark Kilimnik"
     ],
     "a": [
      "Alicia Reed",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
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
     "as": 15,
     "h": [
      "Alex Abad",
      "Alexander Tong"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Julia Plein",
      "Ashwin Korde"
     ],
     "a": [
      "Lilie Sen",
      "Garv Singhal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Alex Abad",
      "Julia Plein"
     ],
     "a": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Kathleen Dougherty"
     ],
     "a": [
      "Alicia Reed",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bruno Casino Remondo",
      "Ashwin Korde"
     ],
     "a": [
      "Andrew Wakefield",
      "Garv Singhal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mark Kilimnik",
      "Alexander Tong"
     ],
     "a": [
      "Joel Phillips",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alexander Tong"
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
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Claudya Elefante",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Julia Plein",
      "Ashwin Korde"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Abad",
      "Mark Kilimnik"
     ],
     "a": [
      "Alicia Reed",
      "Ethan Henigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Abad",
      "Charlotte Healey"
     ],
     "a": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kathleen Dougherty",
      "Julia Plein"
     ],
     "a": [
      "Claudya Elefante",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bruno Casino Remondo",
      "Ashwin Korde"
     ],
     "a": [
      "Dylan Ashbach",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Alexander Tong",
      "Mark Kilimnik"
     ],
     "a": [
      "Garv Singhal",
      "Joel Phillips"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "Pickleball HQ",
   "away": "Home Court",
   "time": "2025-09-24T19:00:00",
   "complete": true,
   "homePoints": 415,
   "awayPoints": 669,
   "homeGW": 2,
   "awayGW": 30,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Lawrence Ly"
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
      "Cami Lee",
      "Anthony Leung"
     ],
     "a": [
      "Johanna Wagner",
      "John Gargana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Eric Pan"
     ],
     "a": [
      "Cindy Reuter",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Joshua Ahn"
     ],
     "a": [
      "Lily Yip",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Cami Lee"
     ],
     "a": [
      "Gift Horn",
      "Cindy Reuter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 3,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Ann Betterton"
     ],
     "a": [
      "Johanna Wagner",
      "Lily Yip"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jesse Rosenberg",
      "Joshua Ahn"
     ],
     "a": [
      "Hruday Vemparala",
      "John Gargana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anthony Leung",
      "Lawrence Ly"
     ],
     "a": [
      "Stanley Bonczek",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Lawrence Ly"
     ],
     "a": [
      "Gift Horn",
      "John Gargana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Eric Pan"
     ],
     "a": [
      "Johanna Wagner",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Nicholas Leung"
     ],
     "a": [
      "Cindy Reuter",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Cami Lee",
      "Jesse Rosenberg"
     ],
     "a": [
      "Lily Yip",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Bessie Hu"
     ],
     "a": [
      "Gift Horn",
      "Lily Yip"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Cami Lee",
      "Kristine Brink"
     ],
     "a": [
      "Johanna Wagner",
      "Cindy Reuter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jesse Rosenberg",
      "Lawrence Ly"
     ],
     "a": [
      "Hruday Vemparala",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Anthony Leung",
      "Eric Pan"
     ],
     "a": [
      "John Gargana",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Nicholas Leung"
     ],
     "a": [
      "Gift Horn",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Jesse Rosenberg"
     ],
     "a": [
      "Johanna Wagner",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Anthony Leung"
     ],
     "a": [
      "Cindy Reuter",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cami Lee",
      "Joshua Ahn"
     ],
     "a": [
      "Lily Yip",
      "John Gargana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Cami Lee"
     ],
     "a": [
      "Gift Horn",
      "Cindy Reuter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Kristine Brink"
     ],
     "a": [
      "Johanna Wagner",
      "Lily Yip"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nicholas Leung",
      "Jesse Rosenberg"
     ],
     "a": [
      "Hruday Vemparala",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Leung",
      "Eric Pan"
     ],
     "a": [
      "John Gargana",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Lawrence Ly"
     ],
     "a": [
      "Gift Horn",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Joshua Ahn"
     ],
     "a": [
      "Johanna Wagner",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Eric Pan"
     ],
     "a": [
      "Cindy Reuter",
      "John Gargana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Nicholas Leung"
     ],
     "a": [
      "Lily Yip",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Cami Lee"
     ],
     "a": [
      "Gift Horn",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Kristine Brink"
     ],
     "a": [
      "Cindy Reuter",
      "Lily Yip"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joshua Ahn",
      "Anthony Leung"
     ],
     "a": [
      "Hruday Vemparala",
      "John Gargana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nicholas Leung",
      "Eric Pan"
     ],
     "a": [
      "Gautham Bondugula",
      "Stanley Bonczek"
     ]
    }
   ],
   "subs": [
    "Cindy Reuter"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Lehigh Valley",
   "away": "Bounce Malvern",
   "time": "2025-09-24T19:00:00",
   "complete": true,
   "homePoints": 530,
   "awayPoints": 663,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Lindsey Taaffe",
      "Kenoa Tio"
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
      "Kaylyn Swankoski",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Becca Bender",
      "Geoff Watson"
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
      "Vi Duong",
      "Matthew Lucas"
     ],
     "a": [
      "Yuki Kim",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Lindsey Taaffe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Becca Bender",
      "Vi Duong"
     ],
     "a": [
      "Rayna Baizman",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Conor Landrigan",
      "Gog Boonswang"
     ],
     "a": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Geoff Watson",
      "Matthew Lucas"
     ],
     "a": [
      "Kenoa Tio",
      "Peter Hwang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Geoff Watson"
     ],
     "a": [
      "Lindsey Taaffe",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Becca Bender",
      "Gog Boonswang"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Vi Duong",
      "Matthew Lucas"
     ],
     "a": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Conor Landrigan"
     ],
     "a": [
      "Yuki Kim",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Becca Bender",
      "Cristi Landrigan"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Yuki Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Vi Duong"
     ],
     "a": [
      "Rayna Baizman",
      "Lindsey Taaffe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Conor Landrigan",
      "Matthew Lucas"
     ],
     "a": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gog Boonswang",
      "Geoff Watson"
     ],
     "a": [
      "Jonah Fliegelman",
      "Peter Hwang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Gog Boonswang"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Matthew Lucas"
     ],
     "a": [
      "Lindsey Taaffe",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Becca Bender",
      "Conor Landrigan"
     ],
     "a": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Heather Gallagher",
      "Geoff Watson"
     ],
     "a": [
      "Yuki Kim",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Becca Bender"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Lindsey Taaffe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cristi Landrigan",
      "Heather Gallagher"
     ],
     "a": [
      "Rayna Baizman",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Conor Landrigan",
      "Geoff Watson"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Matthew Lucas",
      "Gog Boonswang"
     ],
     "a": [
      "Peter Hwang",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ],
     "a": [
      "Lindsey Taaffe",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Heather Gallagher",
      "Conor Landrigan"
     ],
     "a": [
      "Yuki Kim",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Rayna Baizman",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Cristi Landrigan",
      "Matthew Lucas"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Becca Bender",
      "Heather Gallagher"
     ],
     "a": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Yuki Kim",
      "Lindsey Taaffe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Gog Boonswang"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Conor Landrigan",
      "Matthew Lucas"
     ],
     "a": [
      "Ozair Ibrahim",
      "Peter Hwang"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "The Atlantic Club",
   "away": "Pickle Jar",
   "time": "2025-09-24T19:00:00",
   "complete": true,
   "homePoints": 446,
   "awayPoints": 667,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christa Phillips",
      "Sebastian Ferrer"
     ],
     "a": [
      "Taylor Peracchio",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Michael Swell"
     ],
     "a": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Matt Schall"
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
      "Liz Cuozzo",
      "Samuel Levinson"
     ],
     "a": [
      "Elysia Price",
      "Muhammad Usman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Christa Phillips"
     ],
     "a": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Ruhi Shah",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Samuel Levinson",
      "Matt Schall"
     ],
     "a": [
      "Camrin Cronheim",
      "Muhammad Usman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Robert Khalev",
      "Sebastian Ferrer"
     ],
     "a": [
      "James Cannizzaro",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Liz Cuozzo",
      "Sebastian Ferrer"
     ],
     "a": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Michael Swell"
     ],
     "a": [
      "Taylor Peracchio",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christa Phillips",
      "Robert Khalev"
     ],
     "a": [
      "Elysia Price",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Samuel Levinson"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Liz Cuozzo",
      "Eva Danieli"
     ],
     "a": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christa Phillips",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Elysia Price",
      "Taylor Peracchio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sebastian Ferrer",
      "Matt Schall"
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
      "Robert Khalev",
      "Michael Swell"
     ],
     "a": [
      "James Cannizzaro",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Robert Khalev"
     ],
     "a": [
      "Ruhi Shah",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Joey Angelson",
      "Samuel Levinson"
     ],
     "a": [
      "Elysia Price",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Liz Cuozzo",
      "Matt Schall"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christa Phillips",
      "Michael Swell"
     ],
     "a": [
      "Taylor Peracchio",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christa Phillips",
      "Joey Angelson"
     ],
     "a": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Taylor Peracchio",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Swell",
      "Samuel Levinson"
     ],
     "a": [
      "Shreyas Pani",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Robert Khalev",
      "Sebastian Ferrer"
     ],
     "a": [
      "Will Kayal",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Samuel Levinson"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Robert Khalev"
     ],
     "a": [
      "Ruhi Shah",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Sebastian Ferrer"
     ],
     "a": [
      "Taylor Peracchio",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christa Phillips",
      "Matt Schall"
     ],
     "a": [
      "Elysia Price",
      "James Cannizzaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Liz Cuozzo"
     ],
     "a": [
      "Ruhi Shah",
      "Elysia Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michael Swell",
      "Sebastian Ferrer"
     ],
     "a": [
      "Shreyas Pani",
      "Will Kayal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Matt Schall",
      "Samuel Levinson"
     ],
     "a": [
      "Muhammad Usman",
      "James Cannizzaro"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Players Courtyard",
   "away": "Dill Dinkers Hatboro",
   "time": "2025-09-24T19:30:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 611,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Jeff Wiedemann"
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
     "as": 16,
     "h": [
      "Brittany Hall",
      "Jerry Hine"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anita Buggins",
      "Nathan Law"
     ],
     "a": [
      "Lilie Sen",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
     ],
     "a": [
      "Erika Richards",
      "Jon Cedotal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Annemarie Mccartney",
      "Sommer Peterson"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Lilie Sen",
      "Erika Richards"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nathan Law",
      "Jerry Hine"
     ],
     "a": [
      "Andrew Wakefield",
      "Jon Cedotal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Manny Lai",
      "Jeff Wiedemann"
     ],
     "a": [
      "Garv Singhal",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kaley Lai",
      "Jerry Hine"
     ],
     "a": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Jeff Wiedemann"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anita Buggins",
      "Manny Lai"
     ],
     "a": [
      "Lilie Sen",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sommer Peterson",
      "Nathan Law"
     ],
     "a": [
      "Erika Richards",
      "Jon Cedotal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Sommer Peterson"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brittany Hall",
      "Jennifer Sanchez"
     ],
     "a": [
      "Lilie Sen",
      "Erika Richards"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeff Wiedemann",
      "Jerry Hine"
     ],
     "a": [
      "Andrew Wakefield",
      "Jon Cedotal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Garv Singhal",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Brittany Hall",
      "Jerry Hine"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
     ],
     "a": [
      "Nahla Bernhardt",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anita Buggins",
      "Jeff Wiedemann"
     ],
     "a": [
      "Lilie Sen",
      "Jon Cedotal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kaley Lai",
      "Manny Lai"
     ],
     "a": [
      "Erika Richards",
      "Garv Singhal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anita Buggins",
      "Sommer Peterson"
     ],
     "a": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Kaley Lai"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Erika Richards"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Manny Lai",
      "Jeff Wiedemann"
     ],
     "a": [
      "Garv Singhal",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nathan Law",
      "Jerry Hine"
     ],
     "a": [
      "Jon Cedotal",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaley Lai",
      "Manny Lai"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Jon Cedotal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sommer Peterson",
      "Jerry Hine"
     ],
     "a": [
      "Nahla Bernhardt",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Jeff Wiedemann"
     ],
     "a": [
      "Lilie Sen",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anita Buggins",
      "Nathan Law"
     ],
     "a": [
      "Erika Richards",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ],
     "a": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Sanchez",
      "Brittany Hall"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Erika Richards"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Garv Singhal",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jeff Wiedemann",
      "Jerry Hine"
     ],
     "a": [
      "Joel Phillips",
      "Jon Cedotal"
     ]
    }
   ],
   "subs": [
    "Erika Richards"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Bounce Philly",
   "away": "Jersey Devil",
   "time": "2025-09-24T19:30:00",
   "complete": true,
   "homePoints": 666,
   "awayPoints": 531,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Alfano",
      "Alexander Tong"
     ],
     "a": [
      "Dominique Damerjian",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Alex Boory"
     ],
     "a": [
      "Chaille Godinez",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Abad",
      "Jordan Denish"
     ],
     "a": [
      "Mary Kate Kelly",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Abad",
      "Rachel Alfano"
     ],
     "a": [
      "Mary Kate Kelly",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kathleen Dougherty",
      "Charlotte Healey"
     ],
     "a": [
      "Dominique Damerjian",
      "Rachel Berger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bruno Casino Remondo",
      "Jordan Denish"
     ],
     "a": [
      "Ben Mead",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Alexander Tong",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Johny Mario",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Dominique Damerjian",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Arianna Haresign",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Alex Abad",
      "Alexander Tong"
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
      "Kathleen Dougherty",
      "Alex Boory"
     ],
     "a": [
      "Chaille Godinez",
      "Stephen Conger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rachel Alfano",
      "Charlotte Healey"
     ],
     "a": [
      "Mary Kate Kelly",
      "Dominique Damerjian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Alex Abad"
     ],
     "a": [
      "Chaille Godinez",
      "Rachel Berger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jordan Denish",
      "Alexander Tong"
     ],
     "a": [
      "Drew Von Bargen",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Bruno Casino Remondo",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Ben Mead",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Charlotte Healey",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Dominique Damerjian",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Rachel Alfano",
      "Jordan Denish"
     ],
     "a": [
      "Chaille Godinez",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Matro"
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
      "Rachel Berger",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Abad",
      "Charlotte Healey"
     ],
     "a": [
      "Arianna Haresign",
      "Dominique Damerjian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Rachel Alfano",
      "Kathleen Dougherty"
     ],
     "a": [
      "Mary Kate Kelly",
      "Chaille Godinez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alexander Tong",
      "Jordan Denish"
     ],
     "a": [
      "Matthew Matro",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bruno Casino Remondo",
      "Alex Boory"
     ],
     "a": [
      "Ben Mead",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rachel Alfano",
      "Jordan Denish"
     ],
     "a": [
      "Mary Kate Kelly",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Charlotte Healey",
      "Alexander Tong"
     ],
     "a": [
      "Arianna Haresign",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Kathleen Dougherty",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Chaille Godinez",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alex Abad",
      "Alex Boory"
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
     "as": 15,
     "h": [
      "Alex Abad",
      "Charlotte Healey"
     ],
     "a": [
      "Mary Kate Kelly",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Alfano",
      "Kathleen Dougherty"
     ],
     "a": [
      "Dominique Damerjian",
      "Rachel Berger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bruno Casino Remondo",
      "Jordan Denish"
     ],
     "a": [
      "Ben Mead",
      "Matthew Matro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alexander Tong",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Stephen Conger",
      "Johny Mario"
     ]
    }
   ],
   "subs": [
    "Mary Kate Kelly",
    "Ben Mead"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Pickleball Palace",
   "away": "Flemington",
   "time": "2025-09-24T19:30:00",
   "complete": true,
   "homePoints": 651,
   "awayPoints": 582,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jenna Irwin",
      "Corey Maryles"
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
     "as": 12,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
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
      "Jessica Hendry",
      "Patrick Ceccacci"
     ],
     "a": [
      "Chanda Mccoy",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Stephanie Bramer",
      "Christian Fechter"
     ],
     "a": [
      "Lynda Tomaru",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Jessica Hendry"
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
     "as": 13,
     "h": [
      "Ashley Georgevich",
      "Stephanie Bramer"
     ],
     "a": [
      "Chanda Mccoy",
      "Emily Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Corey Maryles",
      "Patrick Ceccacci"
     ],
     "a": [
      "Robbie Oddy",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Daniel Kulik",
      "Keith Shedlock"
     ],
     "a": [
      "Thomas Connolly",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ],
     "a": [
      "Suzi Battison",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Stephanie Bramer",
      "Christian Fechter"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
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
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Lynda Tomaru",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Stephanie Bramer"
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
     "as": 8,
     "h": [
      "Jenna Irwin",
      "Ashley Georgevich"
     ],
     "a": [
      "Chanda Mccoy",
      "Emily Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Kulik",
      "Keith Shedlock"
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
     "as": 12,
     "h": [
      "Corey Maryles",
      "Christian Fechter"
     ],
     "a": [
      "Thomas Connolly",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Stephanie Bramer",
      "Corey Maryles"
     ],
     "a": [
      "Suzi Battison",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Hendry",
      "Christian Fechter"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ashley Georgevich",
      "Patrick Ceccacci"
     ],
     "a": [
      "Emily Miller",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Ashley Georgevich"
     ],
     "a": [
      "Suzi Battison",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephanie Bramer",
      "Jenna Irwin"
     ],
     "a": [
      "Lynda Tomaru",
      "Emily Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Corey Maryles",
      "Keith Shedlock"
     ],
     "a": [
      "Robbie Oddy",
      "Nate Otto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Kulik",
      "Christian Fechter"
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
     "as": 14,
     "h": [
      "Stephanie Bramer",
      "Corey Maryles"
     ],
     "a": [
      "Suzi Battison",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jessica Hendry",
      "Keith Shedlock"
     ],
     "a": [
      "Courtney Greener",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jenna Irwin",
      "Daniel Kulik"
     ],
     "a": [
      "Emily Miller",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Patrick Ceccacci"
     ],
     "a": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stephanie Bramer",
      "Ashley Georgevich"
     ],
     "a": [
      "Suzi Battison",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Jessica Hendry"
     ],
     "a": [
      "Lynda Tomaru",
      "Emily Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Corey Maryles",
      "Patrick Ceccacci"
     ],
     "a": [
      "Nate Otto",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Daniel Kulik",
      "Christian Fechter"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 7,
   "home": "The Atlantic Club",
   "away": "Flemington",
   "time": "2025-10-01T19:00:00",
   "complete": true,
   "homePoints": 531,
   "awayPoints": 676,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adrienne Butrymowicz",
      "Michael Swell"
     ],
     "a": [
      "Chanda Mccoy",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Rich Gaborow"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joey Angelson",
      "Matt Schall"
     ],
     "a": [
      "Lynda Tomaru",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rebecca Arleth",
      "Robert Khalev"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stefanie Sohosky",
      "Rebecca Arleth"
     ],
     "a": [
      "Suzi Battison",
      "Courtney Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Chanda Mccoy",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matt Schall",
      "Robert Khalev"
     ],
     "a": [
      "Robbie Oddy",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rich Gaborow",
      "Brad Oldham"
     ],
     "a": [
      "Nate Otto",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Michael Swell"
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
      "Stefanie Sohosky",
      "Brad Oldham"
     ],
     "a": [
      "Courtney Greener",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Robert Khalev"
     ],
     "a": [
      "Lynda Tomaru",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Sarah Nazario",
      "Rich Gaborow"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stefanie Sohosky",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Suzi Battison",
      "Christine Ferraez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Rebecca Arleth"
     ],
     "a": [
      "Lynda Tomaru",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matt Schall",
      "Michael Swell"
     ],
     "a": [
      "Robbie Oddy",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rich Gaborow",
      "Brad Oldham"
     ],
     "a": [
      "Nate Otto",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Stefanie Sohosky",
      "Robert Khalev"
     ],
     "a": [
      "Suzi Battison",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Rebecca Arleth",
      "Rich Gaborow"
     ],
     "a": [
      "Courtney Greener",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Brad Oldham"
     ],
     "a": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Michael Swell"
     ],
     "a": [
      "Chanda Mccoy",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Rebecca Arleth"
     ],
     "a": [
      "Courtney Greener",
      "Suzi Battison"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Christine Ferraez",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Robert Khalev",
      "Michael Swell"
     ],
     "a": [
      "Robbie Oddy",
      "Nate Otto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matt Schall",
      "Rich Gaborow"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Matt Schall"
     ],
     "a": [
      "Suzi Battison",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stefanie Sohosky",
      "Michael Swell"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Robert Khalev"
     ],
     "a": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Brad Oldham"
     ],
     "a": [
      "Chanda Mccoy",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stefanie Sohosky",
      "Sarah Nazario"
     ],
     "a": [
      "Christine Ferraez",
      "Suzi Battison"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Rebecca Arleth"
     ],
     "a": [
      "Lynda Tomaru",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Matt Schall",
      "Robert Khalev"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michael Swell",
      "Brad Oldham"
     ],
     "a": [
      "Robbie Oddy",
      "Nate Otto"
     ]
    }
   ],
   "subs": [
    "Sarah Nazario"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Lehigh Valley",
   "away": "Jersey Devil",
   "time": "2025-10-01T19:00:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 605,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Dominique Damerjian",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Heather Gallagher",
      "Matthew Lucas"
     ],
     "a": [
      "Michaela Pierznik",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Jeffrey Lyons"
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
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Heather Gallagher"
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Becca Bender",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Sophy Siv",
      "Dominique Damerjian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Conor Landrigan",
      "Geoff Watson"
     ],
     "a": [
      "Zach Bowe",
      "Jase Volz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeffrey Lyons",
      "Matthew Lucas"
     ],
     "a": [
      "Drew Von Bargen",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Jeffrey Lyons"
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
     "as": 17,
     "h": [
      "Heather Gallagher",
      "Geoff Watson"
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
     "as": 15,
     "h": [
      "Becca Bender",
      "Matthew Lucas"
     ],
     "a": [
      "Sophy Siv",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Conor Landrigan"
     ],
     "a": [
      "Dominique Damerjian",
      "Jase Volz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Becca Bender",
      "Elaine Bedell"
     ],
     "a": [
      "Shelah Wallace",
      "Sophy Siv"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Conor Landrigan",
      "Matthew Lucas"
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
      "Jeffrey Lyons",
      "Geoff Watson"
     ],
     "a": [
      "Jase Volz",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cristi Landrigan",
      "Matthew Lucas"
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
     "as": 18,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Dominique Damerjian",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Katarzyna Clevenger",
      "Jeffrey Lyons"
     ],
     "a": [
      "Arianna Haresign",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Heather Gallagher",
      "Conor Landrigan"
     ],
     "a": [
      "Shelah Wallace",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Becca Bender"
     ],
     "a": [
      "Arianna Haresign",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cristi Landrigan",
      "Elaine Bedell"
     ],
     "a": [
      "Michaela Pierznik",
      "Sophy Siv"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Lucas",
      "Geoff Watson"
     ],
     "a": [
      "Zach Bowe",
      "Jase Volz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Conor Landrigan",
      "Jeffrey Lyons"
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
     "as": 13,
     "h": [
      "Elaine Bedell",
      "Geoff Watson"
     ],
     "a": [
      "Sophy Siv",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Becca Bender",
      "Jeffrey Lyons"
     ],
     "a": [
      "Dominique Damerjian",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Katarzyna Clevenger",
      "Matthew Lucas"
     ],
     "a": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Heather Gallagher"
     ],
     "a": [
      "Shelah Wallace",
      "Dominique Damerjian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Katarzyna Clevenger",
      "Elaine Bedell"
     ],
     "a": [
      "Michaela Pierznik",
      "Sophy Siv"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Geoff Watson",
      "Jeffrey Lyons"
     ],
     "a": [
      "Tyler Arsenault",
      "Jase Volz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Matthew Lucas",
      "Conor Landrigan"
     ],
     "a": [
      "Drew Von Bargen",
      "Johny Mario"
     ]
    }
   ],
   "subs": [
    "Elaine Bedell"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Palace",
   "away": "Home Court",
   "time": "2025-10-01T19:30:00",
   "complete": true,
   "homePoints": 648,
   "awayPoints": 594,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Hendry",
      "Eric Kutzin"
     ],
     "a": [
      "Gift Horn",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Jenna Irwin",
      "Daniel Kulik"
     ],
     "a": [
      "Johanna Wagner",
      "Zachary Adler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stephanie Bramer",
      "Christian Fechter"
     ],
     "a": [
      "Lily Yip",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ashley Georgevich",
      "Corey Maryles"
     ],
     "a": [
      "Chrissy Sandella",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jenna Irwin",
      "Jessica Hendry"
     ],
     "a": [
      "Gift Horn",
      "Lily Yip"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stephanie Bramer",
      "Jessica Pevny"
     ],
     "a": [
      "Johanna Wagner",
      "Chrissy Sandella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Daniel Kulik",
      "Eric Kutzin"
     ],
     "a": [
      "Manpreet Singh",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Corey Maryles",
      "Christian Fechter"
     ],
     "a": [
      "Stanley Bonczek",
      "Zachary Adler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stephanie Bramer",
      "Corey Maryles"
     ],
     "a": [
      "Gift Horn",
      "Zachary Adler"
     ]
    },
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
      "Lily Yip",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jessica Pevny",
      "Eric Kutzin"
     ],
     "a": [
      "Chrissy Sandella",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Johanna Wagner",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Stephanie Bramer"
     ],
     "a": [
      "Gift Horn",
      "Lily Yip"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ashley Georgevich",
      "Jessica Pevny"
     ],
     "a": [
      "Johanna Wagner",
      "Chrissy Sandella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Daniel Kulik",
      "Corey Maryles"
     ],
     "a": [
      "Manpreet Singh",
      "Zachary Adler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christian Fechter",
      "Eric Kutzin"
     ],
     "a": [
      "Stanley Bonczek",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jenna Irwin",
      "Daniel Kulik"
     ],
     "a": [
      "Gift Horn",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Christian Fechter"
     ],
     "a": [
      "Johanna Wagner",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Hendry",
      "Corey Maryles"
     ],
     "a": [
      "Lily Yip",
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
      "Eric Kutzin"
     ],
     "a": [
      "Chrissy Sandella",
      "Zachary Adler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Pevny",
      "Jessica Hendry"
     ],
     "a": [
      "Gift Horn",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stephanie Bramer",
      "Jenna Irwin"
     ],
     "a": [
      "Lily Yip",
      "Chrissy Sandella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christian Fechter",
      "Daniel Kulik"
     ],
     "a": [
      "Manpreet Singh",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Corey Maryles",
      "Eric Kutzin"
     ],
     "a": [
      "Stanley Bonczek",
      "Zachary Adler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Eric Kutzin"
     ],
     "a": [
      "Gift Horn",
      "Zachary Adler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jenna Irwin",
      "Corey Maryles"
     ],
     "a": [
      "Johanna Wagner",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Lily Yip",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Pevny",
      "Christian Fechter"
     ],
     "a": [
      "Chrissy Sandella",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ],
     "a": [
      "Gift Horn",
      "Chrissy Sandella"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Hendry",
      "Stephanie Bramer"
     ],
     "a": [
      "Johanna Wagner",
      "Lily Yip"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christian Fechter",
      "Eric Kutzin"
     ],
     "a": [
      "Manpreet Singh",
      "Zachary Adler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Corey Maryles",
      "Daniel Kulik"
     ],
     "a": [
      "Stephen Mcnamara",
      "Stanley Bonczek"
     ]
    }
   ],
   "subs": [
    "Stephen Mcnamara"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickle Jar",
   "away": "Monroe",
   "time": "2025-10-01T19:30:00",
   "complete": true,
   "homePoints": 617,
   "awayPoints": 614,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
     ],
     "a": [
      "Claire Gaston",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Paula Ro",
      "James Cannizzaro"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elysia Price",
      "Muhammad Usman"
     ],
     "a": [
      "Richa Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Elysia Price"
     ],
     "a": [
      "Richa Shah",
      "Catherine Stewart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ruhi Shah",
      "Paula Ro"
     ],
     "a": [
      "Claire Gaston",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Will Kayal",
      "Muhammad Usman"
     ],
     "a": [
      "Anthony Ursino",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Shreyas Pani",
      "Camrin Cronheim"
     ],
     "a": [
      "Maanav Shah",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Shreyas Pani"
     ],
     "a": [
      "Catherine Stewart",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elysia Price",
      "Muhammad Usman"
     ],
     "a": [
      "Claire Gaston",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Paula Ro",
      "Will Kayal"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Cameron Barraco",
      "Thomas Dill"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Peracchio",
      "Paula Ro"
     ],
     "a": [
      "Richa Shah",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ruhi Shah",
      "Elysia Price"
     ],
     "a": [
      "Cameron Barraco",
      "Catherine Stewart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shreyas Pani",
      "Will Kayal"
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
      "Muhammad Usman",
      "Camrin Cronheim"
     ],
     "a": [
      "Thomas Dill",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
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
     "as": 8,
     "h": [
      "Elysia Price",
      "Shreyas Pani"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Paula Ro",
      "Camrin Cronheim"
     ],
     "a": [
      "Claire Gaston",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ruhi Shah",
      "Muhammad Usman"
     ],
     "a": [
      "Catherine Stewart",
      "Thomas Dill"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ruhi Shah",
      "Paula Ro"
     ],
     "a": [
      "Catherine Stewart",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Peracchio",
      "Elysia Price"
     ],
     "a": [
      "Claire Gaston",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Will Kayal",
      "Shreyas Pani"
     ],
     "a": [
      "Dilan Shah",
      "Thomas Dill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Camrin Cronheim",
      "Muhammad Usman"
     ],
     "a": [
      "Chris Bucaro",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ruhi Shah",
      "Muhammad Usman"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Paula Ro",
      "Will Kayal"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elysia Price",
      "Camrin Cronheim"
     ],
     "a": [
      "Catherine Stewart",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Peracchio",
      "Shreyas Pani"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ruhi Shah",
      "Elysia Price"
     ],
     "a": [
      "Claire Gaston",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Paula Ro"
     ],
     "a": [
      "Catherine Stewart",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Muhammad Usman",
      "Will Kayal"
     ],
     "a": [
      "Thomas Dill",
      "Chris Bucaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Shreyas Pani",
      "Camrin Cronheim"
     ],
     "a": [
      "Maanav Shah",
      "Anthony Ursino"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Hatboro",
   "time": "2025-10-01T19:30:00",
   "complete": true,
   "homePoints": 662,
   "awayPoints": 515,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
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
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yuki Kim",
      "Ozair Ibrahim"
     ],
     "a": [
      "Claudya Elefante",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lindsey Taaffe",
      "Jeff Comer"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Alicia Reed",
      "Robert Schimony"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lindsey Taaffe",
      "Hannah Nussbaum"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Claudya Elefante",
      "Alicia Reed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ],
     "a": [
      "Jon Cedotal",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kenoa Tio",
      "Jonah Fliegelman"
     ],
     "a": [
      "Garv Singhal",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lindsey Taaffe",
      "Jeff Comer"
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
     "as": 11,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Claudya Elefante",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yuki Kim",
      "Ozair Ibrahim"
     ],
     "a": [
      "Alicia Reed",
      "Robert Schimony"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hannah Nussbaum",
      "Lindsey Taaffe"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Claudya Elefante",
      "Alicia Reed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jonah Fliegelman",
      "Hugh Laroque"
     ],
     "a": [
      "Jon Cedotal",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ozair Ibrahim",
      "Jeff Comer"
     ],
     "a": [
      "Garv Singhal",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lindsey Taaffe",
      "Ozair Ibrahim"
     ],
     "a": [
      "Claudya Elefante",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ],
     "a": [
      "Nahla Bernhardt",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rayna Baizman",
      "Kenoa Tio"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Robert Schimony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Jonah Fliegelman"
     ],
     "a": [
      "Alicia Reed",
      "Ethan Henigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Allison Tarnoff",
      "Hannah Nussbaum"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Alicia Reed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kaylyn Swankoski",
      "Yuki Kim"
     ],
     "a": [
      "Claudya Elefante",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hugh Laroque",
      "Ozair Ibrahim"
     ],
     "a": [
      "Robert Schimony",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jonah Fliegelman",
      "Kenoa Tio"
     ],
     "a": [
      "Jon Cedotal",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yuki Kim",
      "Hugh Laroque"
     ],
     "a": [
      "Alicia Reed",
      "Jon Cedotal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Robert Schimony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ],
     "a": [
      "Nahla Bernhardt",
      "Garv Singhal"
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
      "Claudya Elefante",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsey Taaffe",
      "Rayna Baizman"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Alicia Reed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kaylyn Swankoski",
      "Hannah Nussbaum"
     ],
     "a": [
      "Claudya Elefante",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hugh Laroque",
      "Jonah Fliegelman"
     ],
     "a": [
      "Dylan Ashbach",
      "Robert Schimony"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jeff Comer",
      "Kenoa Tio"
     ],
     "a": [
      "Garv Singhal",
      "Jon Cedotal"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 7,
   "home": "Bounce Philly",
   "away": "Pickle House",
   "time": "2025-10-01T19:30:00",
   "complete": true,
   "homePoints": 548,
   "awayPoints": 638,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Alex Abad",
      "Ashwin Korde"
     ],
     "a": [
      "Lindsey Thoeng",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alexander Tong"
     ],
     "a": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Julia Plein",
      "Kathleen Dougherty"
     ],
     "a": [
      "Lindsey Thoeng",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alex Abad",
      "Rachel Alfano"
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
     "as": 19,
     "h": [
      "Alexander Tong",
      "Jordan Denish"
     ],
     "a": [
      "Michael Li",
      "Nick Dehmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bruno Casino Remondo",
      "Mark Kilimnik"
     ],
     "a": [
      "Sidd Pathare",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Julia Plein",
      "Ashwin Korde"
     ],
     "a": [
      "Lindsey Thoeng",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Alfano",
      "Jordan Denish"
     ],
     "a": [
      "Lissa Eagles",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alex Abad",
      "Alexander Tong"
     ],
     "a": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alex Abad",
      "Rachel Alfano"
     ],
     "a": [
      "Lissa Eagles",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Kathleen Dougherty"
     ],
     "a": [
      "Lindsey Thoeng",
      "Kerrin Maurer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bruno Casino Remondo",
      "Mark Kilimnik"
     ],
     "a": [
      "Michael Li",
      "Dylan Unkert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alexander Tong",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Sidd Pathare",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Julia Plein",
      "Ashwin Korde"
     ],
     "a": [
      "Lindsey Thoeng",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Abad",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Jordan Denish"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Anisha Malhotra",
      "Michael Li"
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
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Julia Plein"
     ],
     "a": [
      "Lindsey Thoeng",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alexander Tong",
      "Jordan Denish"
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
     "as": 16,
     "h": [
      "Bruno Casino Remondo",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Michael Li",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Alfano",
      "Alexander Tong"
     ],
     "a": [
      "Kerrin Maurer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Julia Plein",
      "Mark Kilimnik"
     ],
     "a": [
      "Anisha Malhotra",
      "Nick Dehmer"
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
      "Lindsey Thoeng",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Abad",
      "Jordan Denish"
     ],
     "a": [
      "Lissa Eagles",
      "Dylan Unkert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Rachel Alfano"
     ],
     "a": [
      "Lissa Eagles",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 20,
     "h": [
      "Alex Abad",
      "Charlotte Healey"
     ],
     "a": [
      "Kerrin Maurer",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Dylan Unkert",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jordan Denish",
      "Mark Kilimnik"
     ],
     "a": [
      "Sidd Pathare",
      "Michael Li"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickle Jar",
   "away": "Pickleball HQ",
   "time": "2025-10-04T15:00:00",
   "complete": true,
   "homePoints": 680,
   "awayPoints": 453,
   "homeGW": 31,
   "awayGW": 1,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amy Yan",
      "James Cannizzaro"
     ],
     "a": [
      "Ann Betterton",
      "Joshua Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
     ],
     "a": [
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Elysia Price",
      "Muhammad Usman"
     ],
     "a": [
      "Cami Lee",
      "Saif Sarwar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pooja Schuster",
      "Camrin Cronheim"
     ],
     "a": [
      "Kristine Brink",
      "Anthony Leung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Taylor Peracchio",
      "Pooja Schuster"
     ],
     "a": [
      "Ann Betterton",
      "Ceil Gomez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Elysia Price",
      "Ally Yan"
     ],
     "a": [
      "Bessie Hu",
      "Cami Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Camrin Cronheim",
      "James Cannizzaro"
     ],
     "a": [
      "Joshua Ahn",
      "Nicholas Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Will Kayal",
      "Shreyas Pani"
     ],
     "a": [
      "Anthony Leung",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Amy Yan",
      "James Cannizzaro"
     ],
     "a": [
      "Ceil Gomez",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Elysia Price",
      "Muhammad Usman"
     ],
     "a": [
      "Bessie Hu",
      "Joshua Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
     ],
     "a": [
      "Cami Lee",
      "Saif Sarwar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ally Yan",
      "Shreyas Pani"
     ],
     "a": [
      "Kristine Brink",
      "Nicholas Leung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Elysia Price",
      "Ally Yan"
     ],
     "a": [
      "Ceil Gomez",
      "Cami Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Taylor Peracchio",
      "Amy Yan"
     ],
     "a": [
      "Ann Betterton",
      "Kristine Brink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Camrin Cronheim",
      "Muhammad Usman"
     ],
     "a": [
      "Anthony Leung",
      "Lawrence Ly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Will Kayal",
      "Shreyas Pani"
     ],
     "a": [
      "Joshua Ahn",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Elysia Price",
      "James Cannizzaro"
     ],
     "a": [
      "Kristine Brink",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Taylor Peracchio",
      "Muhammad Usman"
     ],
     "a": [
      "Bessie Hu",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pooja Schuster",
      "Shreyas Pani"
     ],
     "a": [
      "Ceil Gomez",
      "Saif Sarwar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ally Yan",
      "Camrin Cronheim"
     ],
     "a": [
      "Ann Betterton",
      "Joshua Ahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ally Yan",
      "Amy Yan"
     ],
     "a": [
      "Bessie Hu",
      "Ceil Gomez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Taylor Peracchio",
      "Pooja Schuster"
     ],
     "a": [
      "Ann Betterton",
      "Cami Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Camrin Cronheim",
      "Shreyas Pani"
     ],
     "a": [
      "Saif Sarwar",
      "Nicholas Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Will Kayal",
      "Muhammad Usman"
     ],
     "a": [
      "Anthony Leung",
      "Joshua Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ally Yan",
      "James Cannizzaro"
     ],
     "a": [
      "Kristine Brink",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Elysia Price",
      "Camrin Cronheim"
     ],
     "a": [
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pooja Schuster",
      "Muhammad Usman"
     ],
     "a": [
      "Ann Betterton",
      "Saif Sarwar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Amy Yan",
      "Will Kayal"
     ],
     "a": [
      "Cami Lee",
      "Joshua Ahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Peracchio",
      "Amy Yan"
     ],
     "a": [
      "Ceil Gomez",
      "Ann Betterton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elysia Price",
      "Pooja Schuster"
     ],
     "a": [
      "Kristine Brink",
      "Cami Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Will Kayal",
      "Camrin Cronheim"
     ],
     "a": [
      "Nicholas Leung",
      "Lawrence Ly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "James Cannizzaro",
      "Shreyas Pani"
     ],
     "a": [
      "Anthony Leung",
      "Saif Sarwar"
     ]
    }
   ],
   "subs": [
    "Ally Yan",
    "Pooja Schuster",
    "Amy Yan",
    "Ceil Gomez"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Home Court",
   "away": "The Atlantic Club",
   "time": "2025-10-04T15:00:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 575,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gift Horn",
      "Stanley Bonczek"
     ],
     "a": [
      "Noelle Ramirez",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Wagner",
      "Hruday Vemparala"
     ],
     "a": [
      "Christa Phillips",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Lily Yip",
      "Gautham Bondugula"
     ],
     "a": [
      "Joey Angelson",
      "Samuel Levinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Caitlyn Moore",
      "Zachary Adler"
     ],
     "a": [
      "Rebecca Arleth",
      "Rich Gaborow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gift Horn",
      "Johanna Wagner"
     ],
     "a": [
      "Noelle Ramirez",
      "Christa Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lily Yip",
      "Caitlyn Moore"
     ],
     "a": [
      "Joey Angelson",
      "Margaret Robb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stanley Bonczek",
      "Zachary Adler"
     ],
     "a": [
      "Michael Swell",
      "Robert Khalev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gautham Bondugula",
      "Hruday Vemparala"
     ],
     "a": [
      "Samuel Levinson",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chrissy Sandella",
      "Stanley Bonczek"
     ],
     "a": [
      "Noelle Ramirez",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gift Horn",
      "Hruday Vemparala"
     ],
     "a": [
      "Margaret Robb",
      "Rich Gaborow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lily Yip",
      "Zachary Adler"
     ],
     "a": [
      "Joey Angelson",
      "Samuel Levinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Caitlyn Moore",
      "Gautham Bondugula"
     ],
     "a": [
      "Rebecca Arleth",
      "Robert Khalev"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gift Horn",
      "Chrissy Sandella"
     ],
     "a": [
      "Noelle Ramirez",
      "Christa Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Johanna Wagner",
      "Caitlyn Moore"
     ],
     "a": [
      "Rebecca Arleth",
      "Margaret Robb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Hruday Vemparala",
      "Stanley Bonczek"
     ],
     "a": [
      "Samuel Levinson",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gautham Bondugula",
      "Zachary Adler"
     ],
     "a": [
      "Matt Schall",
      "Rich Gaborow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Gift Horn",
      "Gautham Bondugula"
     ],
     "a": [
      "Joey Angelson",
      "Rich Gaborow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Johanna Wagner",
      "Stanley Bonczek"
     ],
     "a": [
      "Christa Phillips",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lily Yip",
      "Hruday Vemparala"
     ],
     "a": [
      "Margaret Robb",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chrissy Sandella",
      "Zachary Adler"
     ],
     "a": [
      "Rebecca Arleth",
      "Samuel Levinson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lily Yip",
      "Caitlyn Moore"
     ],
     "a": [
      "Joey Angelson",
      "Christa Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Johanna Wagner",
      "Chrissy Sandella"
     ],
     "a": [
      "Noelle Ramirez",
      "Rebecca Arleth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Zachary Adler"
     ],
     "a": [
      "Samuel Levinson",
      "Rich Gaborow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gautham Bondugula",
      "Stanley Bonczek"
     ],
     "a": [
      "Michael Swell",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chrissy Sandella",
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
     "hs": 26,
     "as": 24,
     "h": [
      "Caitlyn Moore",
      "Stanley Bonczek"
     ],
     "a": [
      "Christa Phillips",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gift Horn",
      "Zachary Adler"
     ],
     "a": [
      "Margaret Robb",
      "Samuel Levinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Johanna Wagner",
      "Gautham Bondugula"
     ],
     "a": [
      "Noelle Ramirez",
      "Rich Gaborow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lily Yip",
      "Johanna Wagner"
     ],
     "a": [
      "Christa Phillips",
      "Margaret Robb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gift Horn",
      "Chrissy Sandella"
     ],
     "a": [
      "Rebecca Arleth",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hruday Vemparala",
      "Stanley Bonczek"
     ],
     "a": [
      "Samuel Levinson",
      "Rich Gaborow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Gautham Bondugula",
      "Zachary Adler"
     ],
     "a": [
      "Matt Schall",
      "Michael Swell"
     ]
    }
   ],
   "subs": [
    "Caitlyn Moore"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Palace",
   "away": "Monroe",
   "time": "2025-10-04T15:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 557,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Pevny",
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
     "hs": 21,
     "as": 17,
     "h": [
      "Stephanie Bramer",
      "Ramy Lawandy"
     ],
     "a": [
      "Claire Gaston",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Richa Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ashley Georgevich",
      "Leo Kupferman"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jenna Irwin",
      "Stephanie Bramer"
     ],
     "a": [
      "Morgan Fishman",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ashley Georgevich",
      "Jessica Pevny"
     ],
     "a": [
      "Claire Gaston",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Leo Kupferman",
      "Daniel Kulik"
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
      "Patrick Ceccacci",
      "Ramy Lawandy"
     ],
     "a": [
      "Eric Lin",
      "Anthony Ursino"
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
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stephanie Bramer",
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
     "hs": 21,
     "as": 18,
     "h": [
      "Jenna Irwin",
      "Leo Kupferman"
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
     "as": 19,
     "h": [
      "Jessica Pevny",
      "Keith Shedlock"
     ],
     "a": [
      "Amalia Ditrapani",
      "Eric Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jenna Irwin",
      "Stephanie Bramer"
     ],
     "a": [
      "Claire Gaston",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ashley Georgevich",
      "Jessica Pevny"
     ],
     "a": [
      "Morgan Fishman",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patrick Ceccacci",
      "Ramy Lawandy"
     ],
     "a": [
      "Chris Bucaro",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Leo Kupferman",
      "Keith Shedlock"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Daniel Kulik"
     ],
     "a": [
      "Amalia Ditrapani",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephanie Bramer",
      "Leo Kupferman"
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
      "Ashley Georgevich",
      "Ramy Lawandy"
     ],
     "a": [
      "Claire Gaston",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Morgan Fishman",
      "Eric Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Ashley Georgevich",
      "Stephanie Bramer"
     ],
     "a": [
      "Richa Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jenna Irwin",
      "Jessica Pevny"
     ],
     "a": [
      "Morgan Fishman",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Leo Kupferman",
      "Daniel Kulik"
     ],
     "a": [
      "Dilan Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Patrick Ceccacci",
      "Keith Shedlock"
     ],
     "a": [
      "Maanav Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephanie Bramer",
      "Keith Shedlock"
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
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Claire Gaston",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jenna Irwin",
      "Ramy Lawandy"
     ],
     "a": [
      "Cameron Barraco",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Pevny",
      "Leo Kupferman"
     ],
     "a": [
      "Amalia Ditrapani",
      "Chris Bucaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Ashley Georgevich",
      "Stephanie Bramer"
     ],
     "a": [
      "Richa Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Jessica Pevny"
     ],
     "a": [
      "Claire Gaston",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Leo Kupferman",
      "Patrick Ceccacci"
     ],
     "a": [
      "Maanav Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Daniel Kulik",
      "Ramy Lawandy"
     ],
     "a": [
      "Dilan Shah",
      "Anthony Ursino"
     ]
    }
   ],
   "subs": [
    "Ramy Lawandy"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Flemington",
   "away": "The Atlantic Club",
   "time": "2025-10-04T18:00:00",
   "complete": true,
   "homePoints": 667,
   "awayPoints": 499,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Noelle Ramirez",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Emily Miller",
      "Obe Janvier"
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
      "Susan Ackley",
      "Tim Dowd"
     ],
     "a": [
      "Christa Phillips",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Courtney Greener",
      "Thomas Connolly"
     ],
     "a": [
      "Rebecca Arleth",
      "Tom Laiso"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Courtney Greener",
      "Susan Ackley"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Suzi Battison",
      "Emily Miller"
     ],
     "a": [
      "Christa Phillips",
      "Margaret Robb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Matt Schall",
      "Robert Khalev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tim Dowd",
      "Obe Janvier"
     ],
     "a": [
      "Michael Swell",
      "Tom Laiso"
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
      "Noelle Ramirez",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Ackley",
      "Tim Dowd"
     ],
     "a": [
      "Margaret Robb",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Emily Miller",
      "Obe Janvier"
     ],
     "a": [
      "Rebecca Arleth",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Courtney Greener",
      "Thomas Connolly"
     ],
     "a": [
      "Eva Danieli",
      "Robert Khalev"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Emily Miller"
     ],
     "a": [
      "Noelle Ramirez",
      "Christa Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Suzi Battison",
      "Courtney Greener"
     ],
     "a": [
      "Rebecca Arleth",
      "Joey Angelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tim Dowd",
      "Obe Janvier"
     ],
     "a": [
      "Michael Swell",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Robert Khalev",
      "Tom Laiso"
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
      "Joey Angelson",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Emily Miller",
      "Tim Dowd"
     ],
     "a": [
      "Christa Phillips",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Courtney Greener",
      "Obe Janvier"
     ],
     "a": [
      "Margaret Robb",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan Ackley",
      "Robbie Oddy"
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
     "as": 15,
     "h": [
      "Suzi Battison",
      "Courtney Greener"
     ],
     "a": [
      "Noelle Ramirez",
      "Rebecca Arleth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan Ackley",
      "Emily Miller"
     ],
     "a": [
      "Margaret Robb",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robbie Oddy",
      "Tim Dowd"
     ],
     "a": [
      "Michael Swell",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Obe Janvier"
     ],
     "a": [
      "Matt Schall",
      "Robert Khalev"
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
      "Christa Phillips",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Robbie Oddy"
     ],
     "a": [
      "Noelle Ramirez",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Emily Miller",
      "Tim Dowd"
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
     "as": 6,
     "h": [
      "Courtney Greener",
      "Obe Janvier"
     ],
     "a": [
      "Margaret Robb",
      "Robert Khalev"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Suzi Battison",
      "Emily Miller"
     ],
     "a": [
      "Christa Phillips",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Courtney Greener",
      "Susan Ackley"
     ],
     "a": [
      "Eva Danieli",
      "Rebecca Arleth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thomas Connolly",
      "Obe Janvier"
     ],
     "a": [
      "Matt Schall",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 32,
     "h": [
      "Robbie Oddy",
      "Tim Dowd"
     ],
     "a": [
      "Michael Swell",
      "Robert Khalev"
     ]
    }
   ],
   "subs": [
    "Obe Janvier",
    "Tim Dowd",
    "Tom Laiso"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Monroe",
   "away": "Pickle Jar",
   "time": "2025-10-04T18:00:00",
   "complete": true,
   "homePoints": 613,
   "awayPoints": 665,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Richa Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Elysia Price",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Morgan Fishman",
      "Maanav Shah"
     ],
     "a": [
      "Paula Ro",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Claire Gaston",
      "Dilan Shah"
     ],
     "a": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Amalia Ditrapani",
      "Eric Lin"
     ],
     "a": [
      "Victoria Collier",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richa Shah",
      "Amalia Ditrapani"
     ],
     "a": [
      "Victoria Collier",
      "Paula Ro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Cameron Barraco"
     ],
     "a": [
      "Ruhi Shah",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dilan Shah",
      "Chris Bucaro"
     ],
     "a": [
      "Camrin Cronheim",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Eric Lin",
      "Maanav Shah"
     ],
     "a": [
      "Will Kayal",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Paula Ro",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amalia Ditrapani",
      "Eric Lin"
     ],
     "a": [
      "Elysia Price",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Victoria Collier",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Ruhi Shah",
      "James Cannizzaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Cameron Barraco"
     ],
     "a": [
      "Ruhi Shah",
      "Elysia Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Amalia Ditrapani"
     ],
     "a": [
      "Victoria Collier",
      "Paula Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eric Lin",
      "Chris Bucaro"
     ],
     "a": [
      "David Lavy",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maanav Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Muhammad Usman",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Elysia Price",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claire Gaston",
      "Maanav Shah"
     ],
     "a": [
      "Paula Ro",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Victoria Collier",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Claire Gaston",
      "Richa Shah"
     ],
     "a": [
      "Victoria Collier",
      "Elysia Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Amalia Ditrapani"
     ],
     "a": [
      "Ruhi Shah",
      "Paula Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
     ],
     "a": [
      "David Lavy",
      "Will Kayal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eric Lin",
      "Anthony Ursino"
     ],
     "a": [
      "Camrin Cronheim",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Amalia Ditrapani",
      "Chris Bucaro"
     ],
     "a": [
      "Elysia Price",
      "Shreyas Pani"
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
      "Victoria Collier",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Ruhi Shah",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claire Gaston",
      "Dilan Shah"
     ],
     "a": [
      "Paula Ro",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Richa Shah"
     ],
     "a": [
      "Victoria Collier",
      "Elysia Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Cameron Barraco"
     ],
     "a": [
      "Ruhi Shah",
      "Paula Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chris Bucaro",
      "Anthony Ursino"
     ],
     "a": [
      "Camrin Cronheim",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
     ],
     "a": [
      "David Lavy",
      "Will Kayal"
     ]
    }
   ],
   "subs": [
    "Victoria Collier"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "The Atlantic Club",
   "away": "Monroe",
   "time": "2025-10-08T19:00:00",
   "complete": true,
   "homePoints": 520,
   "awayPoints": 658,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Matt Schall"
     ],
     "a": [
      "Amalia Ditrapani",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Serena Martz",
      "Matt Levi"
     ],
     "a": [
      "Morgan Fishman",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Margaret Robb",
      "Samuel Levinson"
     ],
     "a": [
      "Cameron Barraco",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Simon Rosenwasser"
     ],
     "a": [
      "Claire Gaston",
      "Chris Bucaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Serena Martz"
     ],
     "a": [
      "Richa Shah",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Margaret Robb"
     ],
     "a": [
      "Morgan Fishman",
      "Claire Gaston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Samuel Levinson",
      "Matt Levi"
     ],
     "a": [
      "Dilan Shah",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matt Schall",
      "Simon Rosenwasser"
     ],
     "a": [
      "Chris Bucaro",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Serena Martz",
      "Samuel Levinson"
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
     "as": 23,
     "h": [
      "Eva Danieli",
      "Matt Levi"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Matt Schall"
     ],
     "a": [
      "Claire Gaston",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joey Angelson",
      "Simon Rosenwasser"
     ],
     "a": [
      "Amalia Ditrapani",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Margaret Robb"
     ],
     "a": [
      "Richa Shah",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eva Danieli",
      "Serena Martz"
     ],
     "a": [
      "Morgan Fishman",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Samuel Levinson",
      "Simon Rosenwasser"
     ],
     "a": [
      "Dilan Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Matt Schall",
      "Matt Levi"
     ],
     "a": [
      "Thomas Dill",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Margaret Robb",
      "Simon Rosenwasser"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Serena Martz",
      "Samuel Levinson"
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
      "Eva Danieli",
      "Matt Levi"
     ],
     "a": [
      "Morgan Fishman",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Matt Schall"
     ],
     "a": [
      "Claire Gaston",
      "Thomas Dill"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joey Angelson",
      "Serena Martz"
     ],
     "a": [
      "Cameron Barraco",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Eva Danieli",
      "Margaret Robb"
     ],
     "a": [
      "Richa Shah",
      "Claire Gaston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matt Levi",
      "Simon Rosenwasser"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Thomas Dill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matt Schall",
      "Samuel Levinson"
     ],
     "a": [
      "Dilan Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Samuel Levinson"
     ],
     "a": [
      "Morgan Fishman",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Serena Martz",
      "Matt Schall"
     ],
     "a": [
      "Amalia Ditrapani",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Simon Rosenwasser"
     ],
     "a": [
      "Richa Shah",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Matt Levi"
     ],
     "a": [
      "Claire Gaston",
      "Chris Bucaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Serena Martz",
      "Margaret Robb"
     ],
     "a": [
      "Richa Shah",
      "Claire Gaston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Joey Angelson",
      "Eva Danieli"
     ],
     "a": [
      "Cameron Barraco",
      "Morgan Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Matt Schall",
      "Matt Levi"
     ],
     "a": [
      "Dilan Shah",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Samuel Levinson",
      "Simon Rosenwasser"
     ],
     "a": [
      "Chris Bucaro",
      "Thomas Dill"
     ]
    }
   ],
   "subs": [
    "Matt Levi"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Players Courtyard",
   "away": "Bounce Malvern",
   "time": "2025-10-08T19:30:00",
   "complete": true,
   "homePoints": 582,
   "awayPoints": 584,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Robyn Himelstein",
      "Nathan Law"
     ],
     "a": [
      "Rayna Baizman",
      "Jeff Comer"
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
      "Lindsey Taaffe",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
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
     "as": 18,
     "h": [
      "Annemarie Mccartney",
      "Ben Mead"
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
     "as": 19,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Lindsey Taaffe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Robyn Himelstein"
     ],
     "a": [
      "Rayna Baizman",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jeff Wiedemann",
      "Jesse Peterson"
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
     "as": 11,
     "h": [
      "Hector Irizarry",
      "Manny Lai"
     ],
     "a": [
      "Jonah Fliegelman",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Nathan Law"
     ],
     "a": [
      "Yuki Kim",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Anita Buggins",
      "Hector Irizarry"
     ],
     "a": [
      "Rayna Baizman",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kaley Lai",
      "Jesse Peterson"
     ],
     "a": [
      "Lindsey Taaffe",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Jeff Wiedemann"
     ],
     "a": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Lindsey Taaffe",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Robyn Himelstein"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jesse Peterson",
      "Jeff Wiedemann"
     ],
     "a": [
      "Jonah Fliegelman",
      "Hugh Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hector Irizarry",
      "Nathan Law"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anita Buggins",
      "Ben Mead"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Sanchez",
      "Jesse Peterson"
     ],
     "a": [
      "Yuki Kim",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kaley Lai",
      "Manny Lai"
     ],
     "a": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robyn Himelstein",
      "Hector Irizarry"
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
      "Jennifer Sanchez",
      "Robyn Himelstein"
     ],
     "a": [
      "Lindsey Taaffe",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Kaley Lai"
     ],
     "a": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Manny Lai",
      "Nathan Law"
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
     "as": 15,
     "h": [
      "Hector Irizarry",
      "Jesse Peterson"
     ],
     "a": [
      "Jonah Fliegelman",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kaley Lai",
      "Manny Lai"
     ],
     "a": [
      "Yuki Kim",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robyn Himelstein",
      "Jeff Wiedemann"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jeff Comer"
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
      "Lindsey Taaffe",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Annemarie Mccartney",
      "Ben Mead"
     ],
     "a": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Robyn Himelstein"
     ],
     "a": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ],
     "a": [
      "Rayna Baizman",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nathan Law",
      "Ben Mead"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Manny Lai",
      "Jeff Wiedemann"
     ],
     "a": [
      "Ozair Ibrahim",
      "Jonah Fliegelman"
     ]
    }
   ],
   "subs": [
    "Robyn Himelstein"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Pickle House",
   "away": "Lehigh Valley",
   "time": "2025-10-08T19:30:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 523,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yoyo Shen",
      "Chris Damato"
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
     "as": 14,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Dottie Kelly",
      "Jim Pagano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anisha Malhotra",
      "Taylor Hartman"
     ],
     "a": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Becca Bender",
      "Dottie Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sidd Pathare",
      "Chris Damato"
     ],
     "a": [
      "Geoff Watson",
      "Jim Pagano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dylan Unkert",
      "Nick Dehmer"
     ],
     "a": [
      "Conor Landrigan",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Becca Bender",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Cristi Landrigan",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yoyo Shen",
      "Dylan Unkert"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Jim Pagano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ],
     "a": [
      "Dottie Kelly",
      "Gog Boonswang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Taylor Hartman",
      "Yoyo Shen"
     ],
     "a": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lissa Eagles",
      "Kerrin Maurer"
     ],
     "a": [
      "Dottie Kelly",
      "Becca Bender"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Dylan Unkert",
      "Michael Li"
     ],
     "a": [
      "Geoff Watson",
      "Gog Boonswang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sidd Pathare",
      "Chris Damato"
     ],
     "a": [
      "Conor Landrigan",
      "Jim Pagano"
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
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Michael Li"
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
     "as": 5,
     "h": [
      "Yoyo Shen",
      "Sidd Pathare"
     ],
     "a": [
      "Dottie Kelly",
      "Jim Pagano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerrin Maurer",
      "Anisha Malhotra"
     ],
     "a": [
      "Cristi Landrigan",
      "Becca Bender"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yoyo Shen",
      "Lissa Eagles"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Dottie Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Geoff Watson",
      "Conor Landrigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Chris Damato",
      "Michael Li"
     ],
     "a": [
      "Gog Boonswang",
      "Jim Pagano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lissa Eagles",
      "Michael Li"
     ],
     "a": [
      "Becca Bender",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Hartman",
      "Sidd Pathare"
     ],
     "a": [
      "Dottie Kelly",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ],
     "a": [
      "Cristi Landrigan",
      "Jim Pagano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ],
     "a": [
      "Cristi Landrigan",
      "Dottie Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lissa Eagles",
      "Yoyo Shen"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Becca Bender"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Li",
      "Nick Dehmer"
     ],
     "a": [
      "Geoff Watson",
      "Conor Landrigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dylan Unkert",
      "Chris Damato"
     ],
     "a": [
      "Gog Boonswang",
      "Jim Pagano"
     ]
    }
   ],
   "subs": [
    "Jim Pagano"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Pickleball Palace",
   "away": "Pickleball HQ",
   "time": "2025-10-08T19:30:00",
   "complete": true,
   "homePoints": 675,
   "awayPoints": 436,
   "homeGW": 31,
   "awayGW": 1,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ],
     "a": [
      "Cami Lee",
      "Saif Sarwar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ashley Georgevich",
      "Christian Fechter"
     ],
     "a": [
      "Kristine Brink",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ],
     "a": [
      "Bessie Hu",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Jessica Pevny",
      "Corey Maryles"
     ],
     "a": [
      "Ann Betterton",
      "Anthony Leung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jessica Hendry",
      "Carly Pfeffer"
     ],
     "a": [
      "Kristine Brink",
      "Bessie Hu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jenna Irwin",
      "Ashley Georgevich"
     ],
     "a": [
      "Ann Betterton",
      "Cami Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Keith Shedlock",
      "Corey Maryles"
     ],
     "a": [
      "Saif Sarwar",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Christian Fechter",
      "Patrick Ceccacci"
     ],
     "a": [
      "Anthony Leung",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Kristine Brink",
      "Nicholas Leung"
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
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ],
     "a": [
      "Cami Lee",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jessica Pevny",
      "Christian Fechter"
     ],
     "a": [
      "Ann Betterton",
      "Saif Sarwar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carly Pfeffer",
      "Jessica Pevny"
     ],
     "a": [
      "Ann Betterton",
      "Cami Lee"
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
      "Bessie Hu",
      "Kristine Brink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Daniel Kulik",
      "Keith Shedlock"
     ],
     "a": [
      "Jesse Rosenberg",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Patrick Ceccacci",
      "Corey Maryles"
     ],
     "a": [
      "Nicholas Leung",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ashley Georgevich",
      "Christian Fechter"
     ],
     "a": [
      "Kristine Brink",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jenna Irwin",
      "Patrick Ceccacci"
     ],
     "a": [
      "Ann Betterton",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Pevny",
      "Daniel Kulik"
     ],
     "a": [
      "Cami Lee",
      "Saif Sarwar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Hendry",
      "Keith Shedlock"
     ],
     "a": [
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jessica Pevny",
      "Jessica Hendry"
     ],
     "a": [
      "Kristine Brink",
      "Cami Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ],
     "a": [
      "Bessie Hu",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Corey Maryles",
      "Christian Fechter"
     ],
     "a": [
      "Anthony Leung",
      "Saif Sarwar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ],
     "a": [
      "Nicholas Leung",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Carly Pfeffer",
      "Corey Maryles"
     ],
     "a": [
      "Ann Betterton",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jenna Irwin",
      "Patrick Ceccacci"
     ],
     "a": [
      "Cami Lee",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jessica Hendry",
      "Christian Fechter"
     ],
     "a": [
      "Bessie Hu",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jessica Pevny",
      "Keith Shedlock"
     ],
     "a": [
      "Kristine Brink",
      "Anthony Leung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jenna Irwin",
      "Carly Pfeffer"
     ],
     "a": [
      "Cami Lee",
      "Kristine Brink"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ashley Georgevich",
      "Jessica Pevny"
     ],
     "a": [
      "Bessie Hu",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Corey Maryles",
      "Keith Shedlock"
     ],
     "a": [
      "Anthony Leung",
      "Lawrence Ly"
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
      "Nicholas Leung",
      "Saif Sarwar"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 8,
   "home": "Home Court",
   "away": "Flemington",
   "time": "2025-10-08T19:30:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 561,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
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
     "as": 23,
     "h": [
      "Johanna Wagner",
      "Manpreet Singh"
     ],
     "a": [
      "Courtney Greener",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "Stanley Bonczek"
     ],
     "a": [
      "Chanda Mccoy",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jen Vorel",
      "Vishal Talreja"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gift Horn",
      "Beatriz Lopez Albarracin"
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
     "as": 14,
     "h": [
      "Johanna Wagner",
      "Noelle Ramirez"
     ],
     "a": [
      "Susan Ackley",
      "Emily Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Manpreet Singh",
      "Alvaro Regalado"
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
      "Vishal Talreja",
      "Stanley Bonczek"
     ],
     "a": [
      "Nate Otto",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
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
     "as": 19,
     "h": [
      "Gift Horn",
      "Manpreet Singh"
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
     "as": 12,
     "h": [
      "Jen Vorel",
      "Vishal Talreja"
     ],
     "a": [
      "Chanda Mccoy",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Johanna Wagner",
      "Stanley Bonczek"
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
     "as": 15,
     "h": [
      "Johanna Wagner",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Suzi Battison",
      "Courtney Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gift Horn",
      "Noelle Ramirez"
     ],
     "a": [
      "Susan Ackley",
      "Emily Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alvaro Regalado",
      "Vishal Talreja"
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
     "as": 16,
     "h": [
      "Manpreet Singh",
      "Stanley Bonczek"
     ],
     "a": [
      "Nate Otto",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Johanna Wagner",
      "Alvaro Regalado"
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
     "as": 18,
     "h": [
      "Jen Vorel",
      "Stanley Bonczek"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "Manpreet Singh"
     ],
     "a": [
      "Chanda Mccoy",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Beatriz Lopez Albarracin",
      "Vishal Talreja"
     ],
     "a": [
      "Emily Miller",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Gift Horn",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Suzi Battison",
      "Emily Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Noelle Ramirez",
      "Jen Vorel"
     ],
     "a": [
      "Chanda Mccoy",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Manpreet Singh",
      "Vishal Talreja"
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
     "as": 9,
     "h": [
      "Stanley Bonczek",
      "Alvaro Regalado"
     ],
     "a": [
      "Nate Otto",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gift Horn",
      "Alvaro Regalado"
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
     "as": 19,
     "h": [
      "Jen Vorel",
      "Stanley Bonczek"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Johanna Wagner",
      "Manpreet Singh"
     ],
     "a": [
      "Chanda Mccoy",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Noelle Ramirez",
      "Vishal Talreja"
     ],
     "a": [
      "Emily Miller",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gift Horn",
      "Johanna Wagner"
     ],
     "a": [
      "Suzi Battison",
      "Emily Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jen Vorel",
      "Noelle Ramirez"
     ],
     "a": [
      "Chanda Mccoy",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Manpreet Singh",
      "Alvaro Regalado"
     ],
     "a": [
      "Robbie Oddy",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Vishal Talreja",
      "Stanley Bonczek"
     ],
     "a": [
      "Nate Otto",
      "Thomas Connolly"
     ]
    }
   ],
   "subs": [
    "Jen Vorel"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Hatboro",
   "time": "2025-10-08T19:30:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 603,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Jase Volz"
     ],
     "a": [
      "Claudya Elefante",
      "Ethan Henigan"
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
      "Alyssa Tartaglia",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Chaille Godinez",
      "Matthew Matro"
     ],
     "a": [
      "Lilie Sen",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ],
     "a": [
      "Erika Richards",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Shelah Wallace",
      "Arianna Haresign"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Claudya Elefante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Michaela Pierznik"
     ],
     "a": [
      "Lilie Sen",
      "Erika Richards"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Zach Bowe",
      "Matthew Matro"
     ],
     "a": [
      "Garv Singhal",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dominique Damerjian",
      "Jase Volz"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Matthew Matro"
     ],
     "a": [
      "Claudya Elefante",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michaela Pierznik",
      "Zach Bowe"
     ],
     "a": [
      "Lilie Sen",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chaille Godinez",
      "Tyler Arsenault"
     ],
     "a": [
      "Erika Richards",
      "Joel Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shelah Wallace",
      "Chaille Godinez"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Claudya Elefante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Dominique Damerjian"
     ],
     "a": [
      "Lilie Sen",
      "Erika Richards"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tyler Arsenault",
      "Matthew Matro"
     ],
     "a": [
      "Garv Singhal",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Drew Von Bargen",
      "Jase Volz"
     ],
     "a": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Matthew Matro"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Michaela Pierznik",
      "Drew Von Bargen"
     ],
     "a": [
      "Claudya Elefante",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Lilie Sen",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Jase Volz"
     ],
     "a": [
      "Erika Richards",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michaela Pierznik",
      "Arianna Haresign"
     ],
     "a": [
      "Claudya Elefante",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dominique Damerjian",
      "Shelah Wallace"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Erika Richards"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zach Bowe",
      "Jase Volz"
     ],
     "a": [
      "Joel Phillips",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Dylan Ashbach",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Arianna Haresign",
      "Matthew Matro"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
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
      "Claudya Elefante",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ],
     "a": [
      "Lilie Sen",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chaille Godinez",
      "Zach Bowe"
     ],
     "a": [
      "Erika Richards",
      "Ethan Henigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Shelah Wallace",
      "Chaille Godinez"
     ],
     "a": [
      "Claudya Elefante",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Michaela Pierznik"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Erika Richards"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tyler Arsenault",
      "Matthew Matro"
     ],
     "a": [
      "Garv Singhal",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jase Volz",
      "Zach Bowe"
     ],
     "a": [
      "Dylan Ashbach",
      "Ethan Henigan"
     ]
    }
   ],
   "subs": [
    "Erika Richards"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Lehigh Valley",
   "away": "Dill Dinkers Hatboro",
   "time": "2025-10-15T19:00:00",
   "complete": true,
   "homePoints": 601,
   "awayPoints": 606,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
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
     "as": 11,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Robert Schimony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Alicia Reed",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Vi Duong",
      "Matthew Lucas"
     ],
     "a": [
      "Lilie Sen",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Becca Bender",
      "Vi Duong"
     ],
     "a": [
      "Lilie Sen",
      "Alicia Reed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Conor Landrigan",
      "Matthew Lucas"
     ],
     "a": [
      "Andrew Wakefield",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Gog Boonswang"
     ],
     "a": [
      "Garv Singhal",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Becca Bender",
      "Conor Landrigan"
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
     "as": 8,
     "h": [
      "Cristi Landrigan",
      "Matthew Lucas"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Robert Schimony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vi Duong",
      "Gog Boonswang"
     ],
     "a": [
      "Alicia Reed",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Geoff Watson"
     ],
     "a": [
      "Lilie Sen",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vi Duong",
      "Cristi Landrigan"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Becca Bender",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Alicia Reed",
      "Lilie Sen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matthew Lucas",
      "Gog Boonswang"
     ],
     "a": [
      "Andrew Wakefield",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Conor Landrigan"
     ],
     "a": [
      "Garv Singhal",
      "Robert Schimony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Heather Gallagher",
      "Matthew Lucas"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ],
     "a": [
      "Lilie Sen",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Alicia Reed",
      "Garv Singhal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cristi Landrigan",
      "Heather Gallagher"
     ],
     "a": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Becca Bender"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Alicia Reed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Matthew Lucas"
     ],
     "a": [
      "Andrew Wakefield",
      "Garv Singhal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Conor Landrigan",
      "Gog Boonswang"
     ],
     "a": [
      "Dylan Ashbach",
      "Robert Schimony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katarzyna Clevenger",
      "Matthew Lucas"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Gog Boonswang"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Heather Gallagher",
      "Geoff Watson"
     ],
     "a": [
      "Lilie Sen",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Becca Bender",
      "Conor Landrigan"
     ],
     "a": [
      "Alicia Reed",
      "Robert Schimony"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Heather Gallagher",
      "Becca Bender"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Alicia Reed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Geoff Watson",
      "Conor Landrigan"
     ],
     "a": [
      "Andrew Wakefield",
      "Garv Singhal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Matthew Lucas",
      "Gog Boonswang"
     ],
     "a": [
      "Dylan Ashbach",
      "Ethan Henigan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 9,
   "home": "Pickle Jar",
   "away": "The Atlantic Club",
   "time": "2025-10-15T19:30:00",
   "complete": true,
   "homePoints": 672,
   "awayPoints": 343,
   "homeGW": 32,
   "awayGW": 0,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Elysia Price",
      "Muhammad Usman"
     ],
     "a": [
      "Rebecca Arleth",
      "Joseph Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Joey Angelson",
      "Jim Pagano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Melissa Dardani",
      "Will Kayal"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Rich Gaborow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Taylor Peracchio",
      "James Cannizzaro"
     ],
     "a": [
      "Eva Danieli",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Taylor Peracchio",
      "Gissel Escalante"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Elysia Price",
      "Melissa Dardani"
     ],
     "a": [
      "Eva Danieli",
      "Rebecca Arleth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "James Cannizzaro",
      "Muhammad Usman"
     ],
     "a": [
      "Joseph Albanese",
      "Rich Gaborow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Will Kayal",
      "David Lavy"
     ],
     "a": [
      "Nicholas Lagrua",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Elysia Price",
      "James Cannizzaro"
     ],
     "a": [
      "Rebecca Arleth",
      "Joseph Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Joey Angelson",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Jim Pagano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Gissel Escalante",
      "David Lavy"
     ],
     "a": [
      "Eva Danieli",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Taylor Peracchio",
      "Gissel Escalante"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Melissa Dardani"
     ],
     "a": [
      "Eva Danieli",
      "Rebecca Arleth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "David Lavy",
      "Muhammad Usman"
     ],
     "a": [
      "Joseph Albanese",
      "Rich Gaborow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "James Cannizzaro",
      "Will Kayal"
     ],
     "a": [
      "Jim Pagano",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Peracchio",
      "David Lavy"
     ],
     "a": [
      "Joey Angelson",
      "Rich Gaborow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Melissa Dardani",
      "Will Kayal"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Joseph Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ruhi Shah",
      "Muhammad Usman"
     ],
     "a": [
      "Eva Danieli",
      "Jim Pagano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Gissel Escalante",
      "Camrin Cronheim"
     ],
     "a": [
      "Rebecca Arleth",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Gissel Escalante",
      "Ruhi Shah"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Melissa Dardani",
      "Elysia Price"
     ],
     "a": [
      "Rebecca Arleth",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "David Lavy",
      "James Cannizzaro"
     ],
     "a": [
      "Joseph Albanese",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Will Kayal",
      "Shreyas Pani"
     ],
     "a": [
      "Jim Pagano",
      "Rich Gaborow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Taylor Peracchio",
      "David Lavy"
     ],
     "a": [
      "Eva Danieli",
      "Jim Pagano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Melissa Dardani",
      "Shreyas Pani"
     ],
     "a": [
      "Joey Angelson",
      "Joseph Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gissel Escalante",
      "James Cannizzaro"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elysia Price",
      "Muhammad Usman"
     ],
     "a": [
      "Rebecca Arleth",
      "Rich Gaborow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ruhi Shah",
      "Elysia Price"
     ],
     "a": [
      "Joey Angelson",
      "Rebecca Arleth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Gissel Escalante",
      "Melissa Dardani"
     ],
     "a": [
      "Eva Danieli",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Will Kayal",
      "Muhammad Usman"
     ],
     "a": [
      "Nicholas Lagrua",
      "Rich Gaborow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "David Lavy",
      "Shreyas Pani"
     ],
     "a": [
      "Jim Pagano",
      "Jacob Rosengarten"
     ]
    }
   ],
   "subs": [
    "Jacob Rosengarten",
    "Joseph Albanese",
    "Nicholas Lagrua",
    "Jim Pagano"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Home Court",
   "away": "Pickleball HQ",
   "time": "2025-10-15T19:30:00",
   "complete": true,
   "homePoints": 663,
   "awayPoints": 475,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Johanna Wagner",
      "Hruday Vemparala"
     ],
     "a": [
      "Chelsea Pan",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Doryan Amato",
      "Stanley Bonczek"
     ],
     "a": [
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Beatriz Lopez Albarracin",
      "Nathan Malhotra"
     ],
     "a": [
      "Cami Lee",
      "Saif Sarwar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gift Horn",
      "Vishal Talreja"
     ],
     "a": [
      "Ann Betterton",
      "Anthony Leung"
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
      "Ann Betterton",
      "Cami Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chrissy Sandella",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Chelsea Pan",
      "Kristine Brink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Hruday Vemparala",
      "Nathan Malhotra"
     ],
     "a": [
      "Nicholas Leung",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Vishal Talreja",
      "Stanley Bonczek"
     ],
     "a": [
      "Anthony Leung",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Wagner",
      "Nathan Malhotra"
     ],
     "a": [
      "Chelsea Pan",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Beatriz Lopez Albarracin",
      "Stanley Bonczek"
     ],
     "a": [
      "Bessie Hu",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Doryan Amato",
      "Hruday Vemparala"
     ],
     "a": [
      "Kristine Brink",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chrissy Sandella",
      "Vishal Talreja"
     ],
     "a": [
      "Ann Betterton",
      "Saif Sarwar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Gift Horn",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Chelsea Pan",
      "Bessie Hu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Wagner",
      "Chrissy Sandella"
     ],
     "a": [
      "Kristine Brink",
      "Cami Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hruday Vemparala",
      "Nathan Malhotra"
     ],
     "a": [
      "Joshua Octaviano",
      "Saif Sarwar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stanley Bonczek",
      "Vishal Talreja"
     ],
     "a": [
      "Anthony Leung",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Wagner",
      "Stanley Bonczek"
     ],
     "a": [
      "Bessie Hu",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chrissy Sandella",
      "Nathan Malhotra"
     ],
     "a": [
      "Ann Betterton",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Doryan Amato",
      "Vishal Talreja"
     ],
     "a": [
      "Cami Lee",
      "Saif Sarwar"
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
      "Kristine Brink",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Johanna Wagner",
      "Doryan Amato"
     ],
     "a": [
      "Ann Betterton",
      "Cami Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gift Horn",
      "Chrissy Sandella"
     ],
     "a": [
      "Bessie Hu",
      "Chelsea Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Hruday Vemparala",
      "Vishal Talreja"
     ],
     "a": [
      "Anthony Leung",
      "Saif Sarwar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Stanley Bonczek",
      "Nathan Malhotra"
     ],
     "a": [
      "Nicholas Leung",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Doryan Amato",
      "Nathan Malhotra"
     ],
     "a": [
      "Kristine Brink",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Chrissy Sandella",
      "Hruday Vemparala"
     ],
     "a": [
      "Ann Betterton",
      "Lawrence Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gift Horn",
      "Stanley Bonczek"
     ],
     "a": [
      "Cami Lee",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 11,
     "h": [
      "Johanna Wagner",
      "Vishal Talreja"
     ],
     "a": [
      "Chelsea Pan",
      "Anthony Leung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Gift Horn",
      "Johanna Wagner"
     ],
     "a": [
      "Chelsea Pan",
      "Kristine Brink"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Chrissy Sandella",
      "Doryan Amato"
     ],
     "a": [
      "Bessie Hu",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Hruday Vemparala"
     ],
     "a": [
      "Anthony Leung",
      "Saif Sarwar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nathan Malhotra",
      "Vishal Talreja"
     ],
     "a": [
      "Nicholas Leung",
      "Joshua Octaviano"
     ]
    }
   ],
   "subs": [
    "Nathan Malhotra",
    "Joshua Octaviano"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Flemington",
   "away": "Pickleball Palace",
   "time": "2025-10-15T19:30:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 632,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
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
      "Jessica Hendry",
      "Corey Maryles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Courtney Greener",
      "Patrick Ryan"
     ],
     "a": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Jessica Pevny",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Nate Otto"
     ],
     "a": [
      "Ashley Georgevich",
      "Leo Kupferman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Susan Ackley"
     ],
     "a": [
      "Stephanie Bramer",
      "Jessica Pevny"
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
      "Jessica Hendry",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Keith Shedlock",
      "Leo Kupferman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nate Otto",
      "Patrick Ryan"
     ],
     "a": [
      "Daniel Kulik",
      "Corey Maryles"
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
      "Jessica Pevny",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Courtney Greener",
      "Patrick Ryan"
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
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Ashley Georgevich",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Nate Otto"
     ],
     "a": [
      "Stephanie Bramer",
      "Corey Maryles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Courtney Greener",
      "Suzi Battison"
     ],
     "a": [
      "Stephanie Bramer",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Susan Ackley"
     ],
     "a": [
      "Ashley Georgevich",
      "Jessica Pevny"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ross Switkes",
      "Patrick Ryan"
     ],
     "a": [
      "Christian Fechter",
      "Leo Kupferman"
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
      "Daniel Kulik",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Chanda Mccoy",
      "Ross Switkes"
     ],
     "a": [
      "Carly Pfeffer",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Ashley Georgevich",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Nate Otto"
     ],
     "a": [
      "Jessica Hendry",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Stephanie Bramer",
      "Corey Maryles"
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
      "Stephanie Bramer",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Chanda Mccoy"
     ],
     "a": [
      "Jessica Hendry",
      "Ashley Georgevich"
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
      "Corey Maryles",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ross Switkes",
      "Nate Otto"
     ],
     "a": [
      "Daniel Kulik",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Ross Switkes"
     ],
     "a": [
      "Stephanie Bramer",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Courtney Greener",
      "Nate Otto"
     ],
     "a": [
      "Jessica Pevny",
      "Corey Maryles"
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
      "Jessica Hendry",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lynda Tomaru",
      "Chanda Mccoy"
     ],
     "a": [
      "Carly Pfeffer",
      "Jessica Hendry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Jessica Pevny",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Patrick Ryan"
     ],
     "a": [
      "Corey Maryles",
      "Christian Fechter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Nate Otto"
     ],
     "a": [
      "Leo Kupferman",
      "Keith Shedlock"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 9,
   "home": "Bounce Philly",
   "away": "Players Courtyard",
   "time": "2025-10-15T19:30:00",
   "complete": true,
   "homePoints": 625,
   "awayPoints": 590,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Rachel Alfano",
      "Alexander Tong"
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
     "as": 19,
     "h": [
      "Julia Plein",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Annemarie Mccartney",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Ashwin Korde"
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
      "Alex Abad",
      "Jordan Denish"
     ],
     "a": [
      "Helen Liu",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Abad",
      "Rachel Alfano"
     ],
     "a": [
      "Kaley Lai",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Julia Sternberg",
      "Charlotte Healey"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jordan Denish",
      "Alexander Tong"
     ],
     "a": [
      "Hector Irizarry",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dustin Rabinowitz",
      "Ashwin Korde"
     ],
     "a": [
      "Mark Pabalan",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Ashwin Korde"
     ],
     "a": [
      "Helen Liu",
      "Coby Golinkoff"
     ]
    },
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
      "Jennifer Sanchez",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Abad",
      "Alex Boory"
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
     "as": 12,
     "h": [
      "Julia Sternberg",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Anita Buggins",
      "Mark Pabalan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Abad",
      "Julia Plein"
     ],
     "a": [
      "Kaley Lai",
      "Helen Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Charlotte Healey",
      "Rachel Alfano"
     ],
     "a": [
      "Jennifer Sanchez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dustin Rabinowitz",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Coby Golinkoff",
      "Ben Mead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alexander Tong",
      "Jordan Denish"
     ],
     "a": [
      "Hector Irizarry",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Anita Buggins",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Abad",
      "Alexander Tong"
     ],
     "a": [
      "Helen Liu",
      "Mark Pabalan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julia Plein",
      "Alex Boory"
     ],
     "a": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Julia Sternberg",
      "Jordan Denish"
     ],
     "a": [
      "Kaley Lai",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alex Abad",
      "Charlotte Healey"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rachel Alfano",
      "Julia Plein"
     ],
     "a": [
      "Annemarie Mccartney",
      "Kaley Lai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jordan Denish",
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
     "hs": 20,
     "as": 22,
     "h": [
      "Bruno Casino Remondo",
      "Alex Boory"
     ],
     "a": [
      "Ben Mead",
      "Mark Pabalan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Abad",
      "Ashwin Korde"
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
     "as": 12,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Jennifer Sanchez",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Annemarie Mccartney",
      "Mark Pabalan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julia Sternberg",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julia Sternberg",
      "Julia Plein"
     ],
     "a": [
      "Jennifer Sanchez",
      "Helen Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Abad",
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
     "as": 23,
     "h": [
      "Alexander Tong",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Ben Mead",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jordan Denish",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Mark Pabalan",
      "Manny Lai"
     ]
    }
   ],
   "subs": [
    "Mark Pabalan"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Pickle House",
   "away": "Jersey Devil",
   "time": "2025-10-15T19:30:00",
   "complete": true,
   "homePoints": 633,
   "awayPoints": 577,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
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
      "Shelah Wallace",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lissa Eagles",
      "Kishan Shah"
     ],
     "a": [
      "Dominique Damerjian",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Emily Babinsky",
      "Nick Dehmer"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Sidd Pathare"
     ],
     "a": [
      "Chaille Godinez",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yoyo Shen",
      "Emily Babinsky"
     ],
     "a": [
      "Dominique Damerjian",
      "Chaille Godinez"
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
      "Matthew Matro",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
     ],
     "a": [
      "Johny Mario",
      "Matthew Chen"
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
      "Dominique Damerjian",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Sidd Pathare"
     ],
     "a": [
      "Chaille Godinez",
      "Tyler Arsenault"
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
      "Shelah Wallace",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Dylan Unkert"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Matro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Yoyo Shen",
      "Lissa Eagles"
     ],
     "a": [
      "Chaille Godinez",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Shelah Wallace",
      "Dominique Damerjian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dylan Unkert",
      "Chris Damato"
     ],
     "a": [
      "Johny Mario",
      "Jase Volz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kishan Shah",
      "Sidd Pathare"
     ],
     "a": [
      "Matthew Matro",
      "Tyler Arsenault"
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
      "Dominique Damerjian",
      "Matthew Matro"
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
      "Chaille Godinez",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yoyo Shen",
      "Nick Dehmer"
     ],
     "a": [
      "Shelah Wallace",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Sidd Pathare"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Taylor Hartman"
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
     "as": 13,
     "h": [
      "Yoyo Shen",
      "Emily Babinsky"
     ],
     "a": [
      "Chaille Godinez",
      "Dominique Damerjian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Matthew Matro",
      "Jase Volz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chris Damato",
      "Sidd Pathare"
     ],
     "a": [
      "Matthew Chen",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lissa Eagles",
      "Kishan Shah"
     ],
     "a": [
      "Dominique Damerjian",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yoyo Shen",
      "Dylan Unkert"
     ],
     "a": [
      "Arianna Haresign",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Shelah Wallace",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Nick Dehmer"
     ],
     "a": [
      "Chaille Godinez",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Shelah Wallace",
      "Chaille Godinez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yoyo Shen",
      "Lissa Eagles"
     ],
     "a": [
      "Dominique Damerjian",
      "Arianna Haresign"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Damato",
      "Kishan Shah"
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
     "as": 16,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Matthew Chen",
      "Matthew Matro"
     ]
    }
   ],
   "subs": [
    "Matthew Chen"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Pickle House",
   "away": "Dill Dinkers Hatboro",
   "time": "2025-10-22T19:30:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 554,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Hartman",
      "Dylan Unkert"
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
     "as": 16,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yoyo Shen",
      "Sidd Pathare"
     ],
     "a": [
      "Claudya Elefante",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kerrin Maurer",
      "Chris Damato"
     ],
     "a": [
      "Lilie Sen",
      "Jon Cedotal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Anisha Malhotra"
     ],
     "a": [
      "Claudya Elefante",
      "Lilie Sen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kishan Shah",
      "Chris Damato"
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
      "Dylan Unkert",
      "Sidd Pathare"
     ],
     "a": [
      "Joel Phillips",
      "Jon Cedotal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kerrin Maurer",
      "Dylan Unkert"
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
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Joel Phillips"
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
      "Claudya Elefante",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lissa Eagles",
      "Kishan Shah"
     ],
     "a": [
      "Lilie Sen",
      "Jon Cedotal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lissa Eagles",
      "Yoyo Shen"
     ],
     "a": [
      "Claudya Elefante",
      "Lilie Sen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
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
     "as": 8,
     "h": [
      "Dylan Unkert",
      "Kishan Shah"
     ],
     "a": [
      "Joel Phillips",
      "Jon Cedotal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
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
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Jon Cedotal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Yoyo Shen",
      "Nick Dehmer"
     ],
     "a": [
      "Claudya Elefante",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lissa Eagles",
      "Kishan Shah"
     ],
     "a": [
      "Lilie Sen",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Kerrin Maurer"
     ],
     "a": [
      "Nahla Bernhardt",
      "Claudya Elefante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Yoyo Shen"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Lilie Sen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Andrew Wakefield",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kishan Shah",
      "Chris Damato"
     ],
     "a": [
      "Jon Cedotal",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
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
      "Taylor Hartman",
      "Kishan Shah"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Jon Cedotal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ],
     "a": [
      "Claudya Elefante",
      "Joel Phillips"
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
      "Lilie Sen",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yoyo Shen",
      "Taylor Hartman"
     ],
     "a": [
      "Nahla Bernhardt",
      "Lilie Sen"
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
      "Alyssa Tartaglia",
      "Claudya Elefante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Andrew Wakefield",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Kishan Shah",
      "Sidd Pathare"
     ],
     "a": [
      "Dylan Ashbach",
      "Jon Cedotal"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 10,
   "home": "Flemington",
   "away": "Pickle Jar",
   "time": "2025-10-22T19:30:00",
   "complete": true,
   "homePoints": 575,
   "awayPoints": 635,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Taylor Peracchio",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Elysia Price",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Patrick Ryan"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Ross Switkes"
     ],
     "a": [
      "Melissa Dardani",
      "Rahul Datta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Christine Ferraez"
     ],
     "a": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Lynda Tomaru"
     ],
     "a": [
      "Melissa Dardani",
      "Gissel Escalante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nate Otto",
      "Patrick Ryan"
     ],
     "a": [
      "David Lavy",
      "Rahul Datta"
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
      "Camrin Cronheim",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Ferraez",
      "Robbie Oddy"
     ],
     "a": [
      "Melissa Dardani",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Susan Ackley",
      "Nate Otto"
     ],
     "a": [
      "Taylor Peracchio",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Patrick Ryan"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Suzi Battison",
      "Ross Switkes"
     ],
     "a": [
      "Elysia Price",
      "Rahul Datta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Susan Ackley"
     ],
     "a": [
      "Taylor Peracchio",
      "Gissel Escalante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Suzi Battison",
      "Lynda Tomaru"
     ],
     "a": [
      "Elysia Price",
      "Melissa Dardani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nate Otto",
      "Patrick Ryan"
     ],
     "a": [
      "Will Kayal",
      "Muhammad Usman"
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
      "Camrin Cronheim",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Ross Switkes"
     ],
     "a": [
      "Taylor Peracchio",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Melissa Dardani",
      "Will Kayal"
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
      "Elysia Price",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Ackley",
      "Nate Otto"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Rahul Datta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Christine Ferraez"
     ],
     "a": [
      "Elysia Price",
      "Gissel Escalante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Chanda Mccoy"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Melissa Dardani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thomas Connolly",
      "Patrick Ryan"
     ],
     "a": [
      "Rahul Datta",
      "Muhammad Usman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Nate Otto"
     ],
     "a": [
      "Will Kayal",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Nate Otto"
     ],
     "a": [
      "Elysia Price",
      "Rahul Datta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Susan Ackley",
      "Patrick Ryan"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Taylor Peracchio",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lynda Tomaru",
      "Ross Switkes"
     ],
     "a": [
      "Melissa Dardani",
      "Muhammad Usman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Chanda Mccoy"
     ],
     "a": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Gissel Escalante",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patrick Ryan",
      "Ross Switkes"
     ],
     "a": [
      "David Lavy",
      "Will Kayal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Thomas Connolly",
      "Nate Otto"
     ],
     "a": [
      "Camrin Cronheim",
      "Rahul Datta"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 10,
   "home": "Monroe",
   "away": "Pickleball HQ",
   "time": "2025-10-22T19:30:00",
   "complete": true,
   "homePoints": 675,
   "awayPoints": 454,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Chelsea Pan",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Morgan Fishman",
      "Thomas Dill"
     ],
     "a": [
      "Andrea Mui",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amanda Ksiezopolski",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Liana Rose",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amalia Ditrapani",
      "Eric Lin"
     ],
     "a": [
      "Kristine Brink",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Morgan Fishman",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Chelsea Pan",
      "Kristine Brink"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cameron Barraco",
      "Veronica Mogilevich"
     ],
     "a": [
      "Ann Betterton",
      "Liana Rose"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Bucaro",
      "Eric Lin"
     ],
     "a": [
      "Anthony Leung",
      "Eric Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eugene Zaslavsky",
      "Anthony Ursino"
     ],
     "a": [
      "Nicholas Leung",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Veronica Mogilevich",
      "Thomas Dill"
     ],
     "a": [
      "Andrea Mui",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Liana Rose",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amalia Ditrapani",
      "Eric Lin"
     ],
     "a": [
      "Kristine Brink",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Ann Betterton",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Morgan Fishman",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Ann Betterton",
      "Kristine Brink"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Amalia Ditrapani",
      "Cameron Barraco"
     ],
     "a": [
      "Liana Rose",
      "Chelsea Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Lin",
      "Anthony Ursino"
     ],
     "a": [
      "Joshua Octaviano",
      "Eric Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Thomas Dill",
      "Chris Bucaro"
     ],
     "a": [
      "Anthony Leung",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amalia Ditrapani",
      "Thomas Dill"
     ],
     "a": [
      "Liana Rose",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Andrea Mui",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Veronica Mogilevich",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Chelsea Pan",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amanda Ksiezopolski",
      "Anthony Ursino"
     ],
     "a": [
      "Ann Betterton",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Morgan Fishman",
      "Veronica Mogilevich"
     ],
     "a": [
      "Kristine Brink",
      "Ann Betterton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Amanda Ksiezopolski",
      "Amalia Ditrapani"
     ],
     "a": [
      "Liana Rose",
      "Andrea Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thomas Dill",
      "Anthony Ursino"
     ],
     "a": [
      "Joshua Octaviano",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Bucaro",
      "Eric Lin"
     ],
     "a": [
      "Jesse Rosenberg",
      "Nicholas Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Veronica Mogilevich",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Ann Betterton",
      "Eric Pan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amalia Ditrapani",
      "Thomas Dill"
     ],
     "a": [
      "Andrea Mui",
      "Anthony Leung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amanda Ksiezopolski",
      "Chris Bucaro"
     ],
     "a": [
      "Liana Rose",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cameron Barraco",
      "Eric Lin"
     ],
     "a": [
      "Chelsea Pan",
      "Jesse Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Morgan Fishman",
      "Amalia Ditrapani"
     ],
     "a": [
      "Ann Betterton",
      "Chelsea Pan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cameron Barraco",
      "Veronica Mogilevich"
     ],
     "a": [
      "Kristine Brink",
      "Andrea Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Eugene Zaslavsky",
      "Anthony Ursino"
     ],
     "a": [
      "Joshua Octaviano",
      "Eric Pan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thomas Dill",
      "Chris Bucaro"
     ],
     "a": [
      "Anthony Leung",
      "Nicholas Leung"
     ]
    }
   ],
   "subs": [
    "Liana Rose",
    "Joshua Octaviano",
    "Andrea Mui"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Bounce Philly",
   "away": "Bounce Malvern",
   "time": "2025-10-22T19:30:00",
   "complete": true,
   "homePoints": 559,
   "awayPoints": 651,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Charlotte Healey",
      "Alexander Tong"
     ],
     "a": [
      "Lindsey Taaffe",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Julia Plein",
      "Bruno Casino Remondo"
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
      "Julia Sternberg",
      "Alex Boory"
     ],
     "a": [
      "Yuki Kim",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Abad",
      "Jordan Denish"
     ],
     "a": [
      "Rayna Baizman",
      "Jeff Comer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Alex Abad",
      "Charlotte Healey"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Julia Plein",
      "Julia Sternberg"
     ],
     "a": [
      "Lindsey Taaffe",
      "Hannah Nussbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jordan Denish",
      "Alexander Tong"
     ],
     "a": [
      "Ozair Ibrahim",
      "Jeff Comer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Kenoa Tio",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
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
     "as": 23,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Yuki Kim",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Julia Sternberg",
      "Dustin Rabinowitz"
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
      "Alex Abad",
      "Jordan Denish"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alex Abad"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Yuki Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Julia Sternberg"
     ],
     "a": [
      "Hannah Nussbaum",
      "Lindsey Taaffe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alexander Tong",
      "Jordan Denish"
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
     "as": 17,
     "h": [
      "Dustin Rabinowitz",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Kenoa Tio",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ],
     "a": [
      "Lindsey Taaffe",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julia Plein",
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
     "hs": 20,
     "as": 22,
     "h": [
      "Alex Abad",
      "Alex Boory"
     ],
     "a": [
      "Yuki Kim",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Julia Plein"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alex Abad",
      "Kathleen Dougherty"
     ],
     "a": [
      "Yuki Kim",
      "Lindsey Taaffe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mark Kilimnik",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alexander Tong",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Jonah Fliegelman",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Julia Sternberg",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Julia Plein",
      "Alex Boory"
     ],
     "a": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kathleen Dougherty",
      "Alexander Tong"
     ],
     "a": [
      "Yuki Kim",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Charlotte Healey",
      "Jordan Denish"
     ],
     "a": [
      "Lindsey Taaffe",
      "Jeff Comer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Julia Plein",
      "Julia Sternberg"
     ],
     "a": [
      "Hannah Nussbaum",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alex Abad",
      "Kathleen Dougherty"
     ],
     "a": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bruno Casino Remondo",
      "Mark Kilimnik"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jordan Denish",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Jonah Fliegelman",
      "Ozair Ibrahim"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 10,
   "home": "Pickleball Palace",
   "away": "The Atlantic Club",
   "time": "2025-10-22T19:30:00",
   "complete": true,
   "homePoints": 679,
   "awayPoints": 495,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ],
     "a": [
      "Serena Martz",
      "Joseph Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephanie Bramer",
      "Christian Fechter"
     ],
     "a": [
      "Joey Angelson",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ashley Georgevich",
      "Keith Shedlock"
     ],
     "a": [
      "Christa Phillips",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Pevny",
      "Patrick Ceccacci"
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
     "as": 13,
     "h": [
      "Stephanie Bramer",
      "Jessica Pevny"
     ],
     "a": [
      "Christa Phillips",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ],
     "a": [
      "Eva Danieli",
      "Serena Martz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christian Fechter",
      "Daniel Kulik"
     ],
     "a": [
      "Joseph Albanese",
      "Robert Khalev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Keith Shedlock",
      "Patrick Ceccacci"
     ],
     "a": [
      "Matt Schall",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Carly Pfeffer",
      "Christian Fechter"
     ],
     "a": [
      "Eva Danieli",
      "Joseph Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Joey Angelson",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stephanie Bramer",
      "Patrick Ceccacci"
     ],
     "a": [
      "Christa Phillips",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jessica Pevny",
      "Keith Shedlock"
     ],
     "a": [
      "Serena Martz",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ],
     "a": [
      "Christa Phillips",
      "Serena Martz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Pevny",
      "Stephanie Bramer"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christian Fechter",
      "Daniel Kulik"
     ],
     "a": [
      "Matt Schall",
      "Robert Khalev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Keith Shedlock",
      "Patrick Ceccacci"
     ],
     "a": [
      "Simon Rosenwasser",
      "Joseph Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jessica Pevny",
      "Keith Shedlock"
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
     "as": 17,
     "h": [
      "Ashley Georgevich",
      "Christian Fechter"
     ],
     "a": [
      "Christa Phillips",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ],
     "a": [
      "Eva Danieli",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Stephanie Bramer",
      "Daniel Kulik"
     ],
     "a": [
      "Serena Martz",
      "Joseph Albanese"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ashley Georgevich",
      "Jessica Pevny"
     ],
     "a": [
      "Christa Phillips",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stephanie Bramer",
      "Carly Pfeffer"
     ],
     "a": [
      "Eva Danieli",
      "Serena Martz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Christian Fechter",
      "Patrick Ceccacci"
     ],
     "a": [
      "Matt Schall",
      "Joseph Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Kulik",
      "Keith Shedlock"
     ],
     "a": [
      "Simon Rosenwasser",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stephanie Bramer",
      "Patrick Ceccacci"
     ],
     "a": [
      "Joey Angelson",
      "Joseph Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jessica Pevny",
      "Christian Fechter"
     ],
     "a": [
      "Christa Phillips",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Carly Pfeffer",
      "Keith Shedlock"
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
     "as": 9,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Serena Martz",
      "Matt Schall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ashley Georgevich",
      "Stephanie Bramer"
     ],
     "a": [
      "Joey Angelson",
      "Serena Martz"
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
      "Eva Danieli",
      "Christa Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ],
     "a": [
      "Matt Schall",
      "Robert Khalev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christian Fechter",
      "Keith Shedlock"
     ],
     "a": [
      "Simon Rosenwasser",
      "Joseph Albanese"
     ]
    }
   ],
   "subs": [
    "Joseph Albanese"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Jersey Devil",
   "away": "Players Courtyard",
   "time": "2025-10-22T19:30:00",
   "complete": true,
   "homePoints": 622,
   "awayPoints": 642,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Jase Volz"
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
     "as": 23,
     "h": [
      "Michaela Pierznik",
      "Matthew Matro"
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
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Annemarie Mccartney",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chaille Godinez",
      "Zach Bowe"
     ],
     "a": [
      "Stacy Walkowitz",
      "Steven Maisonet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Michaela Pierznik"
     ],
     "a": [
      "Annemarie Mccartney",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Arianna Haresign",
      "Shelah Wallace"
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
      "Drew Von Bargen",
      "Zach Bowe"
     ],
     "a": [
      "Ben Mead",
      "Steven Maisonet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Matthew Matro"
     ],
     "a": [
      "Manny Lai",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Matthew Matro"
     ],
     "a": [
      "Jennifer Sanchez",
      "Hector Irizarry"
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
      "Anita Buggins",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chaille Godinez",
      "Jase Volz"
     ],
     "a": [
      "Danielle Bernero",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
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
      "Shelah Wallace",
      "Rachel Berger"
     ],
     "a": [
      "Jennifer Sanchez",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Michaela Pierznik",
      "Chaille Godinez"
     ],
     "a": [
      "Annemarie Mccartney",
      "Danielle Bernero"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Manny Lai",
      "Steven Maisonet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Zach Bowe",
      "Matthew Matro"
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
     "as": 18,
     "h": [
      "Chaille Godinez",
      "Tyler Arsenault"
     ],
     "a": [
      "Danielle Bernero",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Jase Volz"
     ],
     "a": [
      "Annemarie Mccartney",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ],
     "a": [
      "Stacy Walkowitz",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Arianna Haresign",
      "Matthew Matro"
     ],
     "a": [
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Michaela Pierznik"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Arianna Haresign",
      "Chaille Godinez"
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
     "as": 18,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Manny Lai",
      "Ben Mead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jase Volz",
      "Matthew Matro"
     ],
     "a": [
      "Steven Maisonet",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Drew Von Bargen"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Tyler Arsenault"
     ],
     "a": [
      "Anita Buggins",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Jase Volz"
     ],
     "a": [
      "Danielle Bernero",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michaela Pierznik",
      "Zach Bowe"
     ],
     "a": [
      "Jennifer Sanchez",
      "Hector Irizarry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Arianna Haresign",
      "Rachel Berger"
     ],
     "a": [
      "Jennifer Sanchez",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michaela Pierznik",
      "Chaille Godinez"
     ],
     "a": [
      "Annemarie Mccartney",
      "Anita Buggins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Manny Lai",
      "Ben Mead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Matthew Matro"
     ],
     "a": [
      "Steven Maisonet",
      "Hector Irizarry"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 10,
   "home": "Home Court",
   "away": "Pickleball Palace",
   "time": "2025-10-23T19:30:00",
   "complete": true,
   "homePoints": 564,
   "awayPoints": 576,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gift Horn",
      "Drew Sutton"
     ],
     "a": [
      "Stephanie Bramer",
      "Corey Maryles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Johanna Wagner",
      "Joseph Lobiondo"
     ],
     "a": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Casey Olsen",
      "Hruday Vemparala"
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
     "as": 19,
     "h": [
      "Pearly Leung",
      "Manpreet Singh"
     ],
     "a": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Johanna Wagner",
      "Casey Olsen"
     ],
     "a": [
      "Carly Pfeffer",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pearly Leung",
      "Gift Horn"
     ],
     "a": [
      "Stephanie Bramer",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Manpreet Singh",
      "Zachary Adler"
     ],
     "a": [
      "Corey Maryles",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joseph Lobiondo",
      "Drew Sutton"
     ],
     "a": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gift Horn",
      "Zachary Adler"
     ],
     "a": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Casey Olsen",
      "Joseph Lobiondo"
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
     "as": 15,
     "h": [
      "Johanna Wagner",
      "Manpreet Singh"
     ],
     "a": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pearly Leung",
      "Hruday Vemparala"
     ],
     "a": [
      "Carly Pfeffer",
      "Corey Maryles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pearly Leung",
      "Johanna Wagner"
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
      "Gift Horn",
      "Casey Olsen"
     ],
     "a": [
      "Stephanie Bramer",
      "Jessica Hendry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Drew Sutton",
      "Manpreet Singh"
     ],
     "a": [
      "Corey Maryles",
      "Daniel Kulik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Hruday Vemparala",
      "Joseph Lobiondo"
     ],
     "a": [
      "Patrick Ceccacci",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Casey Olsen",
      "Zachary Adler"
     ],
     "a": [
      "Stephanie Bramer",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Johanna Wagner",
      "Joseph Lobiondo"
     ],
     "a": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 2,
     "as": 6,
     "h": [
      "Pearly Leung",
      "Drew Sutton"
     ],
     "a": [
      "Ashley Georgevich",
      "Corey Maryles"
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
      "Gift Horn",
      "Johanna Wagner"
     ],
     "a": [
      "Carly Pfeffer",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Pearly Leung",
      "Casey Olsen"
     ],
     "a": [
      "Jessica Hendry",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Manpreet Singh",
      "Drew Sutton"
     ],
     "a": [
      "Corey Maryles",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zachary Adler",
      "Hruday Vemparala"
     ],
     "a": [
      "Daniel Kulik",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Casey Olsen",
      "Zachary Adler"
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
     "as": 19,
     "h": [
      "Gift Horn",
      "Drew Sutton"
     ],
     "a": [
      "Ashley Georgevich",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Pearly Leung",
      "Manpreet Singh"
     ],
     "a": [
      "Jessica Hendry",
      "Corey Maryles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Wagner",
      "Hruday Vemparala"
     ],
     "a": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Casey Olsen",
      "Gift Horn"
     ],
     "a": [
      "Stephanie Bramer",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Johanna Wagner",
      "Pearly Leung"
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
     "as": 19,
     "h": [
      "Manpreet Singh",
      "Zachary Adler"
     ],
     "a": [
      "Patrick Ceccacci",
      "Daniel Kulik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Drew Sutton",
      "Joseph Lobiondo"
     ],
     "a": [
      "Corey Maryles",
      "Keith Shedlock"
     ]
    }
   ],
   "subs": [
    "Casey Olsen"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Pickleball HQ",
   "away": "The Atlantic Club",
   "time": "2025-10-29T19:00:00",
   "complete": true,
   "homePoints": 577,
   "awayPoints": 645,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ann Betterton",
      "Joshua Ahn"
     ],
     "a": [
      "Joey Angelson",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Bessie Hu",
      "Nicholas Leung"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cami Lee",
      "Anthony Leung"
     ],
     "a": [
      "Rebecca Arleth",
      "Samuel Levinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Eric Pan"
     ],
     "a": [
      "Margaret Robb",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Kristine Brink"
     ],
     "a": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cami Lee",
      "Chelsea Pan"
     ],
     "a": [
      "Margaret Robb",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nicholas Leung",
      "Joshua Ahn"
     ],
     "a": [
      "Michael Swell",
      "Samuel Levinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Saif Sarwar",
      "Anthony Leung"
     ],
     "a": [
      "Simon Rosenwasser",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Nicholas Leung"
     ],
     "a": [
      "Joey Angelson",
      "Samuel Levinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristine Brink",
      "Joshua Ahn"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cami Lee",
      "Saif Sarwar"
     ],
     "a": [
      "Rebecca Arleth",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Eric Pan"
     ],
     "a": [
      "Eva Danieli",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Ann Betterton"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Rebecca Arleth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cami Lee",
      "Bessie Hu"
     ],
     "a": [
      "Margaret Robb",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nicholas Leung",
      "Saif Sarwar"
     ],
     "a": [
      "Jacob Rosengarten",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anthony Leung",
      "Joshua Ahn"
     ],
     "a": [
      "Simon Rosenwasser",
      "Samuel Levinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cami Lee",
      "Saif Sarwar"
     ],
     "a": [
      "Joey Angelson",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Nicholas Leung"
     ],
     "a": [
      "Rebecca Arleth",
      "Samuel Levinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Anthony Leung"
     ],
     "a": [
      "Margaret Robb",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Jesse Rosenberg"
     ],
     "a": [
      "Eva Danieli",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Cami Lee"
     ],
     "a": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Ann Betterton"
     ],
     "a": [
      "Margaret Robb",
      "Rebecca Arleth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Pan",
      "Jesse Rosenberg"
     ],
     "a": [
      "Jacob Rosengarten",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anthony Leung",
      "Nicholas Leung"
     ],
     "a": [
      "Samuel Levinson",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Anthony Leung"
     ],
     "a": [
      "Joey Angelson",
      "Samuel Levinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kristine Brink",
      "Jesse Rosenberg"
     ],
     "a": [
      "Rebecca Arleth",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chelsea Pan",
      "Joshua Ahn"
     ],
     "a": [
      "Eva Danieli",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ann Betterton",
      "Saif Sarwar"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Ann Betterton"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Chelsea Pan",
      "Cami Lee"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Margaret Robb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anthony Leung",
      "Saif Sarwar"
     ],
     "a": [
      "Michael Swell",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nicholas Leung",
      "Joshua Ahn"
     ],
     "a": [
      "Samuel Levinson",
      "Jacob Rosengarten"
     ]
    }
   ],
   "subs": [
    "Jacob Rosengarten"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Bounce Malvern",
   "away": "Lehigh Valley",
   "time": "2025-10-29T19:30:00",
   "complete": true,
   "homePoints": 664,
   "awayPoints": 555,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Trang Nguyen (Smile)",
      "Ozair Ibrahim"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lindsey Taaffe",
      "Jeff Comer"
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
     "as": 17,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Kerry Schaffer",
      "Brian Strehle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lindsey Taaffe",
      "Hannah Nussbaum"
     ],
     "a": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Trang Nguyen (Smile)",
      "Yuki Kim"
     ],
     "a": [
      "Becca Bender",
      "Kerry Schaffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ],
     "a": [
      "Geoff Watson",
      "Gog Boonswang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kenoa Tio",
      "Corey Reinhart"
     ],
     "a": [
      "Conor Landrigan",
      "Brian Strehle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ],
     "a": [
      "Cristi Landrigan",
      "Brian Strehle"
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
      "Kerry Schaffer",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Kenoa Tio"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yuki Kim",
      "Hugh Laroque"
     ],
     "a": [
      "Becca Bender",
      "Gog Boonswang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lindsey Taaffe",
      "Yuki Kim"
     ],
     "a": [
      "Cristi Landrigan",
      "Becca Bender"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Trang Nguyen (Smile)",
      "Hannah Nussbaum"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Kerry Schaffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kenoa Tio",
      "Ozair Ibrahim"
     ],
     "a": [
      "Geoff Watson",
      "Gog Boonswang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hugh Laroque",
      "Corey Reinhart"
     ],
     "a": [
      "Conor Landrigan",
      "Brian Strehle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lindsey Taaffe",
      "Jeff Comer"
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
      "Yuki Kim",
      "Ozair Ibrahim"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Kerry Schaffer",
      "Brian Strehle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Yuki Kim",
      "Hannah Nussbaum"
     ],
     "a": [
      "Cristi Landrigan",
      "Kerry Schaffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Trang Nguyen (Smile)",
      "Allison Tarnoff"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Becca Bender"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Corey Reinhart",
      "Jeff Comer"
     ],
     "a": [
      "Geoff Watson",
      "Brian Strehle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ],
     "a": [
      "Conor Landrigan",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ],
     "a": [
      "Kerry Schaffer",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ],
     "a": [
      "Becca Bender",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lindsey Taaffe",
      "Kenoa Tio"
     ],
     "a": [
      "Cristi Landrigan",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yuki Kim",
      "Hugh Laroque"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Brian Strehle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsey Taaffe",
      "Hannah Nussbaum"
     ],
     "a": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Trang Nguyen (Smile)",
      "Allison Tarnoff"
     ],
     "a": [
      "Becca Bender",
      "Kerry Schaffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hugh Laroque",
      "Corey Reinhart"
     ],
     "a": [
      "Geoff Watson",
      "Brian Strehle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kenoa Tio",
      "Jeff Comer"
     ],
     "a": [
      "Conor Landrigan",
      "Gog Boonswang"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 11,
   "home": "Dill Dinkers Hatboro",
   "away": "Players Courtyard",
   "time": "2025-10-29T19:30:00",
   "complete": true,
   "homePoints": 634,
   "awayPoints": 568,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alyssa Bialek",
      "Andrew Province"
     ],
     "a": [
      "Susan Debbs",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Ethan Henigan"
     ],
     "a": [
      "Jennifer Sanchez",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ],
     "a": [
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
     ],
     "a": [
      "Annemarie Mccartney",
      "Steven Maisonet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nahla Bernhardt",
      "Alyssa Bialek"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lilie Sen",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Annemarie Mccartney",
      "Danielle Bernero"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andrew Wakefield",
      "Dylan Ashbach"
     ],
     "a": [
      "Hector Irizarry",
      "Steven Maisonet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ethan Henigan",
      "Andrew Province"
     ],
     "a": [
      "Ben Mead",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lilie Sen",
      "Andrew Wakefield"
     ],
     "a": [
      "Danielle Bernero",
      "Jerry Hine"
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
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alyssa Bialek",
      "Andrew Province"
     ],
     "a": [
      "Jennifer Sanchez",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Ethan Henigan"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Tartaglia",
      "Claudya Elefante"
     ],
     "a": [
      "Jennifer Sanchez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nahla Bernhardt",
      "Alyssa Bialek"
     ],
     "a": [
      "Anita Buggins",
      "Susan Debbs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Dylan Ashbach",
      "Andrew Province"
     ],
     "a": [
      "Hector Irizarry",
      "Steven Maisonet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Andrew Wakefield",
      "Ethan Henigan"
     ],
     "a": [
      "Manny Lai",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lilie Sen",
      "Ethan Henigan"
     ],
     "a": [
      "Annemarie Mccartney",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
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
      "Nahla Bernhardt",
      "Andrew Province"
     ],
     "a": [
      "Anita Buggins",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alyssa Bialek",
      "Dylan Ashbach"
     ],
     "a": [
      "Jennifer Sanchez",
      "Hector Irizarry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lilie Sen",
      "Claudya Elefante"
     ],
     "a": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alyssa Tartaglia",
      "Alyssa Bialek"
     ],
     "a": [
      "Jennifer Sanchez",
      "Susan Debbs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrew Wakefield",
      "Andrew Province"
     ],
     "a": [
      "Manny Lai",
      "Jerry Hine"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ethan Henigan",
      "Dylan Ashbach"
     ],
     "a": [
      "Ben Mead",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alyssa Bialek",
      "Andrew Wakefield"
     ],
     "a": [
      "Jennifer Sanchez",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alyssa Tartaglia",
      "Ethan Henigan"
     ],
     "a": [
      "Danielle Bernero",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Claudya Elefante",
      "Dylan Ashbach"
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
     "as": 13,
     "h": [
      "Nahla Bernhardt",
      "Andrew Province"
     ],
     "a": [
      "Anita Buggins",
      "Ben Mead"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ],
     "a": [
      "Annemarie Mccartney",
      "Susan Debbs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Alyssa Bialek"
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
      "Dylan Ashbach",
      "Andrew Province"
     ],
     "a": [
      "Ben Mead",
      "Manny Lai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrew Wakefield",
      "Ethan Henigan"
     ],
     "a": [
      "Coby Golinkoff",
      "Jerry Hine"
     ]
    }
   ],
   "subs": [
    "Alyssa Bialek",
    "Andrew Province",
    "Susan Debbs"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Jersey Devil",
   "away": "Bounce Philly",
   "time": "2025-10-29T19:30:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 593,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Matthew Matro"
     ],
     "a": [
      "Rachel Alfano",
      "Jordan Denish"
     ]
    },
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
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shelah Wallace",
      "Zach Bowe"
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
      "Chaille Godinez",
      "Drew Von Bargen"
     ],
     "a": [
      "Julia Sternberg",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shelah Wallace",
      "Arianna Haresign"
     ],
     "a": [
      "Rachel Alfano",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chaille Godinez",
      "Sophy Siv"
     ],
     "a": [
      "Julia Sternberg",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Matthew Matro"
     ],
     "a": [
      "Jordan Denish",
      "Alexander Tong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zach Bowe",
      "Stephen Conger"
     ],
     "a": [
      "Bruno Casino Remondo",
      "Ashwin Korde"
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
      "Rachel Alfano",
      "Jordan Denish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Arianna Haresign",
      "Matthew Matro"
     ],
     "a": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Tyler Arsenault"
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
     "as": 10,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
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
     "as": 19,
     "h": [
      "Arianna Haresign",
      "Chaille Godinez"
     ],
     "a": [
      "Kathleen Dougherty",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Shelah Wallace",
      "Sophy Siv"
     ],
     "a": [
      "Rachel Alfano",
      "Julia Sternberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Stephen Conger"
     ],
     "a": [
      "Bruno Casino Remondo",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Alexander Tong",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chaille Godinez",
      "Tyler Arsenault"
     ],
     "a": [
      "Charlotte Healey",
      "Jordan Denish"
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
      "Julia Sternberg",
      "Bruno Casino Remondo"
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
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sophy Siv",
      "Matthew Matro"
     ],
     "a": [
      "Alex Abad",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chaille Godinez",
      "Michaela Pierznik"
     ],
     "a": [
      "Charlotte Healey",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Shelah Wallace"
     ],
     "a": [
      "Alex Abad",
      "Rachel Alfano"
     ]
    },
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
      "Alexander Tong",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephen Conger",
      "Drew Von Bargen"
     ],
     "a": [
      "Ashwin Korde",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Shelah Wallace",
      "Stephen Conger"
     ],
     "a": [
      "Kathleen Dougherty",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Michaela Pierznik",
      "Drew Von Bargen"
     ],
     "a": [
      "Julia Sternberg",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sophy Siv",
      "Matthew Matro"
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
     "as": 23,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
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
     "as": 18,
     "h": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ],
     "a": [
      "Julia Sternberg",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Sophy Siv"
     ],
     "a": [
      "Charlotte Healey",
      "Alex Abad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matthew Matro",
      "Zach Bowe"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Jordan Denish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Drew Von Bargen",
      "Tyler Arsenault"
     ],
     "a": [
      "Bruno Casino Remondo",
      "Mark Kilimnik"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 11,
   "home": "Monroe",
   "away": "Flemington",
   "time": "2025-10-29T19:30:00",
   "complete": true,
   "homePoints": 591,
   "awayPoints": 566,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Richa Shah",
      "Thomas Dill"
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
     "as": 23,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amalia Ditrapani",
      "Dilan Shah"
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
     "as": 9,
     "h": [
      "Claire Gaston",
      "Maanav Shah"
     ],
     "a": [
      "Christine Ferraez",
      "Thomas Connolly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Cameron Barraco"
     ],
     "a": [
      "Suzi Battison",
      "Courtney Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amalia Ditrapani",
      "Richa Shah"
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
     "as": 18,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
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
     "as": 10,
     "h": [
      "Thomas Dill",
      "Chris Bucaro"
     ],
     "a": [
      "Nate Otto",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amalia Ditrapani",
      "Thomas Dill"
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
     "as": 15,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
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
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Susan Ackley",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Morgan Fishman"
     ],
     "a": [
      "Suzi Battison",
      "Courtney Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amalia Ditrapani",
      "Richa Shah"
     ],
     "a": [
      "Christine Ferraez",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Thomas Dill",
      "Maanav Shah"
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
     "as": 9,
     "h": [
      "Dilan Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
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
     "as": 23,
     "h": [
      "Cameron Barraco",
      "Thomas Dill"
     ],
     "a": [
      "Courtney Greener",
      "Nate Otto"
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
      "Susan Ackley",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Maanav Shah"
     ],
     "a": [
      "Christine Ferraez",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Amalia Ditrapani"
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
     "as": 15,
     "h": [
      "Claire Gaston",
      "Richa Shah"
     ],
     "a": [
      "Courtney Greener",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
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
     "as": 12,
     "h": [
      "Thomas Dill",
      "Chris Bucaro"
     ],
     "a": [
      "Thomas Connolly",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Richa Shah",
      "Chris Bucaro"
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
     "as": 10,
     "h": [
      "Claire Gaston",
      "Dilan Shah"
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
     "as": 19,
     "h": [
      "Cameron Barraco",
      "Thomas Dill"
     ],
     "a": [
      "Susan Ackley",
      "Nate Otto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Morgan Fishman",
      "Maanav Shah"
     ],
     "a": [
      "Christine Ferraez",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Amalia Ditrapani"
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
     "as": 12,
     "h": [
      "Claire Gaston",
      "Richa Shah"
     ],
     "a": [
      "Courtney Greener",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maanav Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Ross Switkes",
      "Nate Otto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Chris Bucaro",
      "Dilan Shah"
     ],
     "a": [
      "Thomas Connolly",
      "Patrick Ryan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 11,
   "home": "Home Court",
   "away": "Pickle Jar",
   "time": "2025-10-29T19:30:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 619,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pearly Leung",
      "Manpreet Singh"
     ],
     "a": [
      "Gissel Escalante",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Zachary Adler"
     ],
     "a": [
      "Elysia Price",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
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
     "as": 15,
     "h": [
      "Gift Horn",
      "Hruday Vemparala"
     ],
     "a": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Doryan Amato",
      "Gift Horn"
     ],
     "a": [
      "Elysia Price",
      "Gissel Escalante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Beatriz Lopez Albarracin",
      "Pearly Leung"
     ],
     "a": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alvaro Regalado",
      "Manpreet Singh"
     ],
     "a": [
      "Will Kayal",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joseph Lobiondo",
      "Zachary Adler"
     ],
     "a": [
      "Camrin Cronheim",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
     ],
     "a": [
      "Gissel Escalante",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gift Horn",
      "Hruday Vemparala"
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
      "Doryan Amato",
      "Zachary Adler"
     ],
     "a": [
      "Elysia Price",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pearly Leung",
      "Manpreet Singh"
     ],
     "a": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gift Horn",
      "Pearly Leung"
     ],
     "a": [
      "Elysia Price",
      "Gissel Escalante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Beatriz Lopez Albarracin",
      "Doryan Amato"
     ],
     "a": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Joseph Lobiondo"
     ],
     "a": [
      "Camrin Cronheim",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Alvaro Regalado",
      "Manpreet Singh"
     ],
     "a": [
      "Will Kayal",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kara Infante",
      "Joseph Lobiondo"
     ],
     "a": [
      "Gissel Escalante",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Doryan Amato",
      "Manpreet Singh"
     ],
     "a": [
      "Elysia Price",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Beatriz Lopez Albarracin",
      "Zachary Adler"
     ],
     "a": [
      "Ruhi Shah",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pearly Leung",
      "Alvaro Regalado"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Muhammad Usman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Kara Infante"
     ],
     "a": [
      "Gissel Escalante",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gift Horn",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Elysia Price",
      "Ruhi Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Alvaro Regalado"
     ],
     "a": [
      "James Cannizzaro",
      "Will Kayal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Manpreet Singh",
      "Zachary Adler"
     ],
     "a": [
      "Camrin Cronheim",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gift Horn",
      "Alvaro Regalado"
     ],
     "a": [
      "Ruhi Shah",
      "Muhammad Usman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Beatriz Lopez Albarracin",
      "Zachary Adler"
     ],
     "a": [
      "Elysia Price",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kara Infante",
      "Joseph Lobiondo"
     ],
     "a": [
      "Gissel Escalante",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pearly Leung",
      "Hruday Vemparala"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Kara Infante"
     ],
     "a": [
      "Gissel Escalante",
      "Ruhi Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gift Horn",
      "Pearly Leung"
     ],
     "a": [
      "Elysia Price",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Manpreet Singh",
      "Joseph Lobiondo"
     ],
     "a": [
      "Muhammad Usman",
      "Will Kayal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zachary Adler",
      "Hruday Vemparala"
     ],
     "a": [
      "Camrin Cronheim",
      "James Cannizzaro"
     ]
    }
   ],
   "subs": [
    "Kara Infante"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Bounce Philly",
   "away": "Lehigh Valley",
   "time": "2025-11-01T09:00:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 558,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Madison Turosinski",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
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
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Abad",
      "Jordan Denish"
     ],
     "a": [
      "Melody Grohotolski",
      "Brian Strehle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Hannum",
      "Ashwin Korde"
     ],
     "a": [
      "Patricia Boyle",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alex Abad",
      "Julia Plein"
     ],
     "a": [
      "Cristi Landrigan",
      "Patricia Boyle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Madison Turosinski",
      "Kathleen Dougherty"
     ],
     "a": [
      "Becca Bender",
      "Melody Grohotolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Bruno Casino Remondo",
      "Mark Kilimnik"
     ],
     "a": [
      "Matthew Lucas",
      "Brian Strehle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jordan Denish",
      "Alexander Tong"
     ],
     "a": [
      "Conor Landrigan",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Becca Bender",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Charlotte Healey",
      "Jordan Denish"
     ],
     "a": [
      "Cristi Landrigan",
      "Matthew Lucas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Madison Turosinski",
      "Mark Kilimnik"
     ],
     "a": [
      "Melody Grohotolski",
      "Rj Wohlbach"
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
      "Patricia Boyle",
      "Geoff Watson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Hannum",
      "Julia Plein"
     ],
     "a": [
      "Cristi Landrigan",
      "Becca Bender"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kathleen Dougherty",
      "Alex Abad"
     ],
     "a": [
      "Melody Grohotolski",
      "Patricia Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jordan Denish",
      "Alexander Tong"
     ],
     "a": [
      "Matthew Lucas",
      "Geoff Watson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bruno Casino Remondo",
      "Ashwin Korde"
     ],
     "a": [
      "Brian Strehle",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Charlotte Healey",
      "Alexander Tong"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Julia Plein",
      "Alex Boory"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rachel Hannum",
      "Jordan Denish"
     ],
     "a": [
      "Melody Grohotolski",
      "Brian Strehle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alex Abad",
      "Mark Kilimnik"
     ],
     "a": [
      "Patricia Boyle",
      "Matthew Lucas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Madison Turosinski",
      "Kathleen Dougherty"
     ],
     "a": [
      "Cristi Landrigan",
      "Patricia Boyle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Julia Plein",
      "Rachel Hannum"
     ],
     "a": [
      "Becca Bender",
      "Melody Grohotolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alex Boory",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Matthew Lucas",
      "Brian Strehle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alexander Tong",
      "Ashwin Korde"
     ],
     "a": [
      "Geoff Watson",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Cristi Landrigan",
      "Matthew Lucas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Madison Turosinski",
      "Jordan Denish"
     ],
     "a": [
      "Becca Bender",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rachel Hannum",
      "Alex Boory"
     ],
     "a": [
      "Melody Grohotolski",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Abad",
      "Ashwin Korde"
     ],
     "a": [
      "Patricia Boyle",
      "Brian Strehle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Abad",
      "Kathleen Dougherty"
     ],
     "a": [
      "Becca Bender",
      "Patricia Boyle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Charlotte Healey",
      "Julia Plein"
     ],
     "a": [
      "Melody Grohotolski",
      "Cristi Landrigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Bruno Casino Remondo"
     ],
     "a": [
      "Conor Landrigan",
      "Matthew Lucas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mark Kilimnik",
      "Alexander Tong"
     ],
     "a": [
      "Rj Wohlbach",
      "Brian Strehle"
     ]
    }
   ],
   "subs": [
    "Rachel Hannum",
    "Madison Turosinski",
    "Rj Wohlbach",
    "Patricia Boyle"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Bounce Malvern",
   "away": "Jersey Devil",
   "time": "2025-11-01T09:00:00",
   "complete": true,
   "homePoints": 666,
   "awayPoints": 543,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Ozair Ibrahim"
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
     "as": 13,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Dominique Damerjian",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lindsey Taaffe",
      "Kenoa Tio"
     ],
     "a": [
      "Maddie Haines",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rayna Baizman",
      "Jeff Comer"
     ],
     "a": [
      "Rachel Berger",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Trang Nguyen (Smile)",
      "Rayna Baizman"
     ],
     "a": [
      "Maddie Haines",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Dominique Damerjian",
      "Rachel Berger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jonah Fliegelman",
      "Kenoa Tio"
     ],
     "a": [
      "Zach Bowe",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ozair Ibrahim",
      "Jeff Comer"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Dominique Damerjian",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
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
      "Yuki Kim",
      "Ozair Ibrahim"
     ],
     "a": [
      "Maddie Haines",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Matro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rayna Baizman",
      "Trang Nguyen (Smile)"
     ],
     "a": [
      "Michaela Pierznik",
      "Maddie Haines"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Dominique Damerjian",
      "Rachel Berger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kenoa Tio",
      "Jonah Fliegelman"
     ],
     "a": [
      "Drew Von Bargen",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ],
     "a": [
      "Zach Bowe",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lindsey Taaffe",
      "Jonah Fliegelman"
     ],
     "a": [
      "Dominique Damerjian",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ],
     "a": [
      "Michaela Pierznik",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Hugh Laroque"
     ],
     "a": [
      "Maddie Haines",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Trang Nguyen (Smile)",
      "Kenoa Tio"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Matro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Trang Nguyen (Smile)",
      "Yuki Kim"
     ],
     "a": [
      "Dominique Damerjian",
      "Michaela Pierznik"
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
      "Rachel Berger",
      "Maddie Haines"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonah Fliegelman",
      "Hugh Laroque"
     ],
     "a": [
      "Drew Von Bargen",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeff Comer",
      "Kenoa Tio"
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
      "Yuki Kim",
      "Hugh Laroque"
     ],
     "a": [
      "Maddie Haines",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ],
     "a": [
      "Dominique Damerjian",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
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
     "as": 17,
     "h": [
      "Lindsey Taaffe",
      "Jonah Fliegelman"
     ],
     "a": [
      "Michaela Pierznik",
      "Zach Bowe"
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
      "Michaela Pierznik",
      "Dominique Damerjian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsey Taaffe",
      "Allison Tarnoff"
     ],
     "a": [
      "Rachel Berger",
      "Maddie Haines"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeff Comer",
      "Kenoa Tio"
     ],
     "a": [
      "Matthew Matro",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Ozair Ibrahim",
      "Jonah Fliegelman"
     ],
     "a": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ]
    }
   ],
   "subs": [
    "Maddie Haines"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Players Courtyard",
   "away": "Pickle House",
   "time": "2025-11-01T09:00:00",
   "complete": true,
   "homePoints": 0,
   "awayPoints": 32,
   "homeGW": 0,
   "awayGW": 32,
   "games": [
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kerrin Maurer",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Anisha Malhotra",
      "Yoyo Shen"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Nick Dehmer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Yoyo Shen",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Nick Dehmer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Anisha Malhotra",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Yoyo Shen",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Anisha Malhotra",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kishan Shah",
      "Nick Dehmer"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Li",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Anisha Malhotra",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kerrin Maurer",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Anisha Malhotra",
      "Yoyo Shen"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Nick Dehmer",
      "Kishan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Li",
      "Dylan Unkert"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 11,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Philly",
   "time": "2025-11-01T12:00:00",
   "complete": true,
   "homePoints": 582,
   "awayPoints": 636,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Andrew Wakefield"
     ],
     "a": [
      "Kathleen Dougherty",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nicole Devine",
      "Andrew Province"
     ],
     "a": [
      "Rachel Hannum",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Ethan Henigan"
     ],
     "a": [
      "Charlotte Healey",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Joel Phillips"
     ],
     "a": [
      "Madison Turosinski",
      "Jordan Denish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Lilie Sen"
     ],
     "a": [
      "Madison Turosinski",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Nicole Devine"
     ],
     "a": [
      "Rachel Hannum",
      "Julia Plein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ethan Henigan",
      "Joel Phillips"
     ],
     "a": [
      "Jordan Denish",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrew Province",
      "Dylan Ashbach"
     ],
     "a": [
      "Alexander Tong",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nicole Devine",
      "Andrew Wakefield"
     ],
     "a": [
      "Julia Plein",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Joel Phillips"
     ],
     "a": [
      "Charlotte Healey",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Andrew Province"
     ],
     "a": [
      "Rachel Hannum",
      "Jordan Denish"
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
      "Madison Turosinski",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Lilie Sen"
     ],
     "a": [
      "Madison Turosinski",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nahla Bernhardt",
      "Nicole Devine"
     ],
     "a": [
      "Julia Plein",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Andrew Wakefield",
      "Ethan Henigan"
     ],
     "a": [
      "Alex Boory",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrew Province",
      "Dylan Ashbach"
     ],
     "a": [
      "Jordan Denish",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lilie Sen",
      "Joel Phillips"
     ],
     "a": [
      "Charlotte Healey",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nicole Devine",
      "Dylan Ashbach"
     ],
     "a": [
      "Madison Turosinski",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Andrew Province"
     ],
     "a": [
      "Rachel Hannum",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
     ],
     "a": [
      "Julia Plein",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ],
     "a": [
      "Charlotte Healey",
      "Rachel Hannum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nicole Devine",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Julia Plein",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrew Wakefield",
      "Andrew Province"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Ethan Henigan"
     ],
     "a": [
      "Alexander Tong",
      "Jordan Denish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Ethan Henigan"
     ],
     "a": [
      "Julia Plein",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Alyssa Tartaglia",
      "Joel Phillips"
     ],
     "a": [
      "Rachel Hannum",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nicole Devine",
      "Andrew Province"
     ],
     "a": [
      "Kathleen Dougherty",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ],
     "a": [
      "Madison Turosinski",
      "Jordan Denish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ],
     "a": [
      "Charlotte Healey",
      "Rachel Hannum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nicole Devine",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Madison Turosinski",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Ethan Henigan"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Jordan Denish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andrew Wakefield",
      "Andrew Province"
     ],
     "a": [
      "Alexander Tong",
      "Mark Kilimnik"
     ]
    }
   ],
   "subs": [
    "Rachel Hannum",
    "Madison Turosinski",
    "Andrew Province",
    "Nicole Devine"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Players Courtyard",
   "away": "Lehigh Valley",
   "time": "2025-11-01T12:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 604,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anita Buggins",
      "Nathan Law"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Jerry Hine"
     ],
     "a": [
      "Melody Grohotolski",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Annie Frame",
      "Franco Rifici Jr"
     ],
     "a": [
      "Dottie Kelly",
      "Matthew Lucas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Cristi Landrigan",
      "Becca Bender"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kaley Lai",
      "Annie Frame"
     ],
     "a": [
      "Dottie Kelly",
      "Melody Grohotolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Geoff Watson",
      "William Hayes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dhaval Bhavsar",
      "Franco Rifici Jr"
     ],
     "a": [
      "Matthew Lucas",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Jerry Hine"
     ],
     "a": [
      "Cristi Landrigan",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kaley Lai",
      "Nathan Law"
     ],
     "a": [
      "Melody Grohotolski",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jennifer Sanchez",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Dottie Kelly",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Anita Buggins",
      "Manny Lai"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Anita Buggins",
      "Annie Frame"
     ],
     "a": [
      "Cristi Landrigan",
      "Dottie Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kaley Lai",
      "Jennifer Sanchez"
     ],
     "a": [
      "Becca Bender",
      "Melody Grohotolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Manny Lai",
      "Franco Rifici Jr"
     ],
     "a": [
      "William Hayes",
      "Matthew Lucas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nathan Law",
      "Jerry Hine"
     ],
     "a": [
      "Geoff Watson",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anita Buggins",
      "Franco Rifici Jr"
     ],
     "a": [
      "Becca Bender",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Annie Frame",
      "Nathan Law"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Sanchez",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Melody Grohotolski",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kaley Lai",
      "Manny Lai"
     ],
     "a": [
      "Dottie Kelly",
      "Matthew Lucas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Annie Frame",
      "Danielle Bernero"
     ],
     "a": [
      "Melody Grohotolski",
      "Dottie Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Cristi Landrigan",
      "Becca Bender"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nathan Law",
      "Jerry Hine"
     ],
     "a": [
      "William Hayes",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Manny Lai",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Geoff Watson",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
     ],
     "a": [
      "Cristi Landrigan",
      "Matthew Lucas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Annie Frame",
      "Franco Rifici Jr"
     ],
     "a": [
      "Becca Bender",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anita Buggins",
      "Nathan Law"
     ],
     "a": [
      "Melody Grohotolski",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kaley Lai",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Dottie Kelly",
      "Rj Wohlbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Sanchez",
      "Danielle Bernero"
     ],
     "a": [
      "Cristi Landrigan",
      "Melody Grohotolski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anita Buggins",
      "Annie Frame"
     ],
     "a": [
      "Becca Bender",
      "Dottie Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jerry Hine",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Geoff Watson",
      "William Hayes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Matthew Lucas",
      "Conor Landrigan"
     ]
    }
   ],
   "subs": [
    "William Hayes",
    "Dhaval Bhavsar",
    "Annie Frame",
    "Rj Wohlbach",
    "Franco Rifici Jr"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Pickle House",
   "away": "Bounce Malvern",
   "time": "2025-11-01T12:00:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 617,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Lindsey Taaffe",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Yoyo Shen",
      "Kishan Shah"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Noelle Ramirez",
      "Dylan Unkert"
     ],
     "a": [
      "Rayna Baizman",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Michael Li"
     ],
     "a": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lissa Eagles",
      "Yoyo Shen"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Yuki Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anisha Malhotra",
      "Noelle Ramirez"
     ],
     "a": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nick Dehmer",
      "Kishan Shah"
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
     "as": 18,
     "h": [
      "Michael Li",
      "Dylan Unkert"
     ],
     "a": [
      "Kenoa Tio",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yoyo Shen",
      "Michael Li"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ],
     "a": [
      "Rayna Baizman",
      "Ozair Ibrahim"
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
      "Lindsey Taaffe",
      "Jeff Comer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anisha Malhotra",
      "Noelle Ramirez"
     ],
     "a": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Hugh Laroque",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Damato",
      "Michael Li"
     ],
     "a": [
      "Jonah Fliegelman",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "Kishan Shah"
     ],
     "a": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yoyo Shen",
      "Michael Li"
     ],
     "a": [
      "Yuki Kim",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
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
      "Lindsey Taaffe",
      "Jeff Comer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Noelle Ramirez",
      "Kerrin Maurer"
     ],
     "a": [
      "Lindsey Taaffe",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lissa Eagles",
      "Anisha Malhotra"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Trang Nguyen (Smile)"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chris Damato",
      "Kishan Shah"
     ],
     "a": [
      "Ozair Ibrahim",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Kishan Shah"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kerrin Maurer",
      "Michael Li"
     ],
     "a": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Chris Damato"
     ],
     "a": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "Dylan Unkert"
     ],
     "a": [
      "Yuki Kim",
      "Hugh Laroque"
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
      "Rayna Baizman",
      "Trang Nguyen (Smile)"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anisha Malhotra",
      "Yoyo Shen"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Li",
      "Nick Dehmer"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Dylan Unkert",
      "Chris Damato"
     ],
     "a": [
      "Ozair Ibrahim",
      "Jonah Fliegelman"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 12,
   "home": "The Atlantic Club",
   "away": "Home Court",
   "time": "2025-11-05T19:00:00",
   "complete": true,
   "homePoints": 508,
   "awayPoints": 656,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rebecca Arleth",
      "Brad Oldham"
     ],
     "a": [
      "Gift Horn",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Samuel Levinson"
     ],
     "a": [
      "Johanna Wagner",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Simon Rosenwasser"
     ],
     "a": [
      "Noelle Ramirez",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Margaret Robb",
      "Rich Gaborow"
     ],
     "a": [
      "Kara Infante",
      "Zach Knapp"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Gift Horn",
      "Kara Infante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Rebecca Arleth"
     ],
     "a": [
      "Johanna Wagner",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brad Oldham",
      "Rich Gaborow"
     ],
     "a": [
      "Hruday Vemparala",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Simon Rosenwasser",
      "Samuel Levinson"
     ],
     "a": [
      "Zach Knapp",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Rich Gaborow"
     ],
     "a": [
      "Gift Horn",
      "Zach Knapp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Simon Rosenwasser"
     ],
     "a": [
      "Johanna Wagner",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Samuel Levinson"
     ],
     "a": [
      "Noelle Ramirez",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rebecca Arleth",
      "Brad Oldham"
     ],
     "a": [
      "Kara Infante",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Rebecca Arleth"
     ],
     "a": [
      "Gift Horn",
      "Kara Infante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Johanna Wagner",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brad Oldham",
      "Samuel Levinson"
     ],
     "a": [
      "Hruday Vemparala",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Simon Rosenwasser",
      "Rich Gaborow"
     ],
     "a": [
      "Zach Knapp",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rebecca Arleth",
      "Simon Rosenwasser"
     ],
     "a": [
      "Gift Horn",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Brad Oldham"
     ],
     "a": [
      "Johanna Wagner",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joey Angelson",
      "Samuel Levinson"
     ],
     "a": [
      "Noelle Ramirez",
      "Zach Knapp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Rich Gaborow"
     ],
     "a": [
      "Kara Infante",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Rebecca Arleth"
     ],
     "a": [
      "Gift Horn",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Margaret Robb"
     ],
     "a": [
      "Noelle Ramirez",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brad Oldham",
      "Rich Gaborow"
     ],
     "a": [
      "Hruday Vemparala",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Simon Rosenwasser",
      "Samuel Levinson"
     ],
     "a": [
      "Joseph Lobiondo",
      "Zach Knapp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Adrienne Butrymowicz",
      "Brad Oldham"
     ],
     "a": [
      "Gift Horn",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Simon Rosenwasser"
     ],
     "a": [
      "Johanna Wagner",
      "Zach Knapp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rebecca Arleth",
      "Rich Gaborow"
     ],
     "a": [
      "Noelle Ramirez",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Samuel Levinson"
     ],
     "a": [
      "Kara Infante",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Rebecca Arleth"
     ],
     "a": [
      "Gift Horn",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Margaret Robb",
      "Adrienne Butrymowicz"
     ],
     "a": [
      "Johanna Wagner",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Samuel Levinson",
      "Rich Gaborow"
     ],
     "a": [
      "Hruday Vemparala",
      "Zach Knapp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Simon Rosenwasser",
      "Brad Oldham"
     ],
     "a": [
      "Joseph Lobiondo",
      "Stanley Bonczek"
     ]
    }
   ],
   "subs": [
    "Kara Infante",
    "Zach Knapp"
   ]
  },
  {
   "result": "away",
   "week": 12,
   "home": "Pickleball HQ",
   "away": "Pickle Jar",
   "time": "2025-11-05T19:00:00",
   "complete": true,
   "homePoints": 497,
   "awayPoints": 645,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Liana Rose",
      "Joshua Ahn"
     ],
     "a": [
      "Taylor Peracchio",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cami Lee",
      "Anthony Leung"
     ],
     "a": [
      "Pooja Schuster",
      "Vivekkumar Govindaswamy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Tim Le"
     ],
     "a": [
      "Elysia Price",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Jesse Rosenberg"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "James Cannizzaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Liana Rose",
      "Ann Betterton"
     ],
     "a": [
      "Taylor Peracchio",
      "Pooja Schuster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Cami Lee",
      "Kristine Brink"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jesse Rosenberg",
      "Lawrence Ly"
     ],
     "a": [
      "Camrin Cronheim",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anthony Leung",
      "Joshua Ahn"
     ],
     "a": [
      "James Cannizzaro",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Lawrence Ly"
     ],
     "a": [
      "Taylor Peracchio",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Liana Rose",
      "Anthony Leung"
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
      "Kristine Brink",
      "Tim Le"
     ],
     "a": [
      "Elysia Price",
      "Elliott Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cami Lee",
      "Joshua Ahn"
     ],
     "a": [
      "Pooja Schuster",
      "Vivekkumar Govindaswamy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Ann Betterton"
     ],
     "a": [
      "Taylor Peracchio",
      "Pooja Schuster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cami Lee",
      "Liana Rose"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anthony Leung",
      "Joshua Ahn"
     ],
     "a": [
      "James Cannizzaro",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jesse Rosenberg",
      "Tim Le"
     ],
     "a": [
      "Vivekkumar Govindaswamy",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Joshua Ahn"
     ],
     "a": [
      "Taylor Peracchio",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cami Lee",
      "Lawrence Ly"
     ],
     "a": [
      "Pooja Schuster",
      "Elliott Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Liana Rose",
      "Anthony Leung"
     ],
     "a": [
      "Elysia Price",
      "Vivekkumar Govindaswamy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Jesse Rosenberg"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Liana Rose",
      "Cami Lee"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Taylor Peracchio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Ann Betterton"
     ],
     "a": [
      "Elysia Price",
      "Pooja Schuster"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joshua Ahn",
      "Tim Le"
     ],
     "a": [
      "Elliott Albanese",
      "Vivekkumar Govindaswamy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lawrence Ly",
      "Jesse Rosenberg"
     ],
     "a": [
      "James Cannizzaro",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Liana Rose",
      "Jesse Rosenberg"
     ],
     "a": [
      "Taylor Peracchio",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Lawrence Ly"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ann Betterton",
      "Tim Le"
     ],
     "a": [
      "Elysia Price",
      "Vivekkumar Govindaswamy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cami Lee",
      "Anthony Leung"
     ],
     "a": [
      "Pooja Schuster",
      "Elliott Albanese"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Liana Rose",
      "Ann Betterton"
     ],
     "a": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Cami Lee"
     ],
     "a": [
      "Elysia Price",
      "Pooja Schuster"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joshua Ahn",
      "Tim Le"
     ],
     "a": [
      "Will Kayal",
      "Vivekkumar Govindaswamy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lawrence Ly",
      "Anthony Leung"
     ],
     "a": [
      "James Cannizzaro",
      "Elliott Albanese"
     ]
    }
   ],
   "subs": [
    "Pooja Schuster",
    "Vivekkumar Govindaswamy",
    "Elliott Albanese",
    "Liana Rose"
   ]
  },
  {
   "result": "home",
   "week": 12,
   "home": "Monroe",
   "away": "Pickleball Palace",
   "time": "2025-11-05T19:30:00",
   "complete": true,
   "homePoints": 628,
   "awayPoints": 605,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
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
     "as": 12,
     "h": [
      "Claire Gaston",
      "Dilan Shah"
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
     "as": 16,
     "h": [
      "Catherine Stewart",
      "Thomas Dill"
     ],
     "a": [
      "Ashley Georgevich",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Maanav Shah"
     ],
     "a": [
      "Jessica Hendry",
      "Eric Kutzin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Richa Shah",
      "Catherine Stewart"
     ],
     "a": [
      "Jenna Irwin",
      "Jessica Hendry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Cameron Barraco"
     ],
     "a": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Bucaro",
      "Dilan Shah"
     ],
     "a": [
      "Eric Kutzin",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Thomas Dill",
      "Maanav Shah"
     ],
     "a": [
      "Christian Fechter",
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
      "Maanav Shah"
     ],
     "a": [
      "Carly Pfeffer",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Thomas Dill"
     ],
     "a": [
      "Ashley Georgevich",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Eric Lin"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Cameron Barraco"
     ],
     "a": [
      "Jenna Irwin",
      "Jessica Hendry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Catherine Stewart"
     ],
     "a": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Bucaro",
      "Eric Lin"
     ],
     "a": [
      "Christian Fechter",
      "Keith Shedlock"
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
      "Daniel Kulik",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Jessica Hendry",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Ashley Georgevich",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amanda Ksiezopolski",
      "Thomas Dill"
     ],
     "a": [
      "Jenna Irwin",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Eric Lin"
     ],
     "a": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Claire Gaston"
     ],
     "a": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Richa Shah",
      "Catherine Stewart"
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
     "as": 16,
     "h": [
      "Maanav Shah",
      "Dilan Shah"
     ],
     "a": [
      "Christian Fechter",
      "Daniel Kulik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Thomas Dill",
      "Eric Lin"
     ],
     "a": [
      "Patrick Ceccacci",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Claire Gaston",
      "Chris Bucaro"
     ],
     "a": [
      "Jessica Hendry",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Amanda Ksiezopolski",
      "Eric Lin"
     ],
     "a": [
      "Ashley Georgevich",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Jenna Irwin",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Cameron Barraco",
      "Thomas Dill"
     ],
     "a": [
      "Carly Pfeffer",
      "Christian Fechter"
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
      "Ashley Georgevich",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Catherine Stewart"
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
     "as": 17,
     "h": [
      "Dilan Shah",
      "Chris Bucaro"
     ],
     "a": [
      "Eric Kutzin",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thomas Dill",
      "Maanav Shah"
     ],
     "a": [
      "Daniel Kulik",
      "Keith Shedlock"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 12,
   "home": "Pickle House",
   "away": "Bounce Philly",
   "time": "2025-11-05T19:30:00",
   "complete": true,
   "homePoints": 617,
   "awayPoints": 589,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Chris Damato"
     ],
     "a": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Adam Weinstock"
     ],
     "a": [
      "Julia Sternberg",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lissa Eagles",
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
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Robyn Himelstein",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lissa Eagles",
      "Yoyo Shen"
     ],
     "a": [
      "Kathleen Dougherty",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Hartman",
      "Anisha Malhotra"
     ],
     "a": [
      "Robyn Himelstein",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nick Dehmer",
      "Kishan Shah"
     ],
     "a": [
      "Bruno Casino Remondo",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Adam Weinstock",
      "Chris Damato"
     ],
     "a": [
      "Alexander Tong",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Kathleen Dougherty",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Adam Weinstock"
     ],
     "a": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lissa Eagles",
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
     "as": 15,
     "h": [
      "Yoyo Shen",
      "Chris Damato"
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
     "as": 8,
     "h": [
      "Yoyo Shen",
      "Lissa Eagles"
     ],
     "a": [
      "Kathleen Dougherty",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anisha Malhotra",
      "Taylor Hartman"
     ],
     "a": [
      "Charlotte Healey",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nick Dehmer",
      "Chris Damato"
     ],
     "a": [
      "Bruno Casino Remondo",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Adam Weinstock",
      "Kishan Shah"
     ],
     "a": [
      "Alexander Tong",
      "Dustin Rabinowitz"
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
      "Julia Sternberg",
      "Bruno Casino Remondo"
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
      "Kathleen Dougherty",
      "Alex Boory"
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
      "Robyn Himelstein",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Anisha Malhotra",
      "Adam Weinstock"
     ],
     "a": [
      "Charlotte Healey",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Julia Sternberg",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Yoyo Shen",
      "Anisha Malhotra"
     ],
     "a": [
      "Charlotte Healey",
      "Kathleen Dougherty"
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
      "Bruno Casino Remondo",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Adam Weinstock",
      "Kishan Shah"
     ],
     "a": [
      "Alexander Tong",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Kishan Shah"
     ],
     "a": [
      "Julia Sternberg",
      "Bruno Casino Remondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Taylor Hartman",
      "Adam Weinstock"
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
     "as": 18,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Kathleen Dougherty",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Robyn Himelstein",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Yoyo Shen",
      "Anisha Malhotra"
     ],
     "a": [
      "Kathleen Dougherty",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Taylor Hartman"
     ],
     "a": [
      "Charlotte Healey",
      "Julia Sternberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Adam Weinstock",
      "Chris Damato"
     ],
     "a": [
      "Bruno Casino Remondo",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kishan Shah",
      "Nick Dehmer"
     ],
     "a": [
      "Alexander Tong",
      "Mark Kilimnik"
     ]
    }
   ],
   "subs": [
    "Adam Weinstock",
    "Robyn Himelstein"
   ]
  },
  {
   "result": "home",
   "week": 12,
   "home": "Jersey Devil",
   "away": "Lehigh Valley",
   "time": "2025-11-05T19:30:00",
   "complete": true,
   "homePoints": 640,
   "awayPoints": 605,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dominique Damerjian",
      "Zach Bowe"
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
     "as": 16,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michaela Pierznik",
      "Drew Von Bargen"
     ],
     "a": [
      "Kerry Schaffer",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Berger",
      "Johny Mario"
     ],
     "a": [
      "Becca Bender",
      "Jeffrey Lyons"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Arianna Haresign"
     ],
     "a": [
      "Cristi Landrigan",
      "Becca Bender"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Rachel Berger"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Kerry Schaffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Conor Landrigan",
      "Geoff Watson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zach Bowe",
      "Matthew Chen"
     ],
     "a": [
      "Jeffrey Lyons",
      "Gog Boonswang"
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
      "Becca Bender",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dominique Damerjian",
      "Drew Von Bargen"
     ],
     "a": [
      "Cristi Landrigan",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Lauren Mercado",
      "Johny Mario"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Jeffrey Lyons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ],
     "a": [
      "Kerry Schaffer",
      "Geoff Watson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ],
     "a": [
      "Cristi Landrigan",
      "Kerry Schaffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Lauren Mercado"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Becca Bender"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Geoff Watson",
      "Gog Boonswang"
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
      "Conor Landrigan",
      "Jeffrey Lyons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michaela Pierznik",
      "Tyler Arsenault"
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
     "as": 19,
     "h": [
      "Rachel Berger",
      "Matthew Chen"
     ],
     "a": [
      "Kerry Schaffer",
      "Jeffrey Lyons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Drew Von Bargen"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ],
     "a": [
      "Cristi Landrigan",
      "Becca Bender"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lauren Mercado",
      "Dominique Damerjian"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Kerry Schaffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Conor Landrigan",
      "Geoff Watson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matthew Chen",
      "Johny Mario"
     ],
     "a": [
      "Jeffrey Lyons",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Becca Bender",
      "Geoff Watson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Zach Bowe"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Jeffrey Lyons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michaela Pierznik",
      "Drew Von Bargen"
     ],
     "a": [
      "Kerry Schaffer",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dominique Damerjian",
      "Matthew Chen"
     ],
     "a": [
      "Cristi Landrigan",
      "Gog Boonswang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Dominique Damerjian"
     ],
     "a": [
      "Cristi Landrigan",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Michaela Pierznik",
      "Lauren Mercado"
     ],
     "a": [
      "Kerry Schaffer",
      "Becca Bender"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tyler Arsenault",
      "Zach Bowe"
     ],
     "a": [
      "Conor Landrigan",
      "Gog Boonswang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Drew Von Bargen",
      "Johny Mario"
     ],
     "a": [
      "Geoff Watson",
      "Jeffrey Lyons"
     ]
    }
   ],
   "subs": [
    "Matthew Chen",
    "Lauren Mercado"
   ]
  },
  {
   "result": "away",
   "week": 12,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Malvern",
   "time": "2025-11-05T19:30:00",
   "complete": true,
   "homePoints": 537,
   "awayPoints": 683,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Nahla Bernhardt",
      "Joel Phillips"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nicole Devine",
      "Dylan Ashbach"
     ],
     "a": [
      "Lindsey Taaffe",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Ethan Henigan"
     ],
     "a": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Robert Schimony"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Nicole Devine"
     ],
     "a": [
      "Lindsey Taaffe",
      "Hannah Nussbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Tartaglia",
      "Lilie Sen"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dylan Ashbach",
      "Joel Phillips"
     ],
     "a": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ethan Henigan",
      "Robert Schimony"
     ],
     "a": [
      "Kenoa Tio",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Ethan Henigan"
     ],
     "a": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Joel Phillips"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Dylan Ashbach"
     ],
     "a": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nicole Devine",
      "Nahla Bernhardt"
     ],
     "a": [
      "Lindsey Taaffe",
      "Hannah Nussbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Trang Nguyen (Smile)"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ],
     "a": [
      "Ozair Ibrahim",
      "Hugh Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joel Phillips",
      "Robert Schimony"
     ],
     "a": [
      "Kenoa Tio",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
     ],
     "a": [
      "Lindsey Taaffe",
      "Kenoa Tio"
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
      "Allison Tarnoff",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Joel Phillips"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nicole Devine",
      "Ethan Henigan"
     ],
     "a": [
      "Rayna Baizman",
      "Jeff Comer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alyssa Tartaglia",
      "Nahla Bernhardt"
     ],
     "a": [
      "Hannah Nussbaum",
      "Trang Nguyen (Smile)"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Nicole Devine"
     ],
     "a": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
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
      "Jeff Comer",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robert Schimony",
      "Ethan Henigan"
     ],
     "a": [
      "Kenoa Tio",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Dylan Ashbach"
     ],
     "a": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Claudya Elefante",
      "Joel Phillips"
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
     "as": 23,
     "h": [
      "Alyssa Tartaglia",
      "Robert Schimony"
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
     "as": 23,
     "h": [
      "Nicole Devine",
      "Andrew Wakefield"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Hugh Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Nicole Devine"
     ],
     "a": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nahla Bernhardt",
      "Lilie Sen"
     ],
     "a": [
      "Hannah Nussbaum",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ethan Henigan",
      "Joel Phillips"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Robert Schimony",
      "Dylan Ashbach"
     ],
     "a": [
      "Hugh Laroque",
      "Ozair Ibrahim"
     ]
    }
   ],
   "subs": [
    "Nicole Devine"
   ]
  },
  {
   "result": "away",
   "week": 13,
   "home": "Pickleball HQ",
   "away": "Pickleball Palace",
   "time": "2025-11-12T19:00:00",
   "complete": true,
   "homePoints": 482,
   "awayPoints": 637,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cami Lee",
      "Nicholas Leung"
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
     "as": 18,
     "h": [
      "Ann Betterton",
      "Saif Sarwar"
     ],
     "a": [
      "Jessica Pevny",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sara Synn",
      "Jesse Rosenberg"
     ],
     "a": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Tim Le"
     ],
     "a": [
      "Jenna Irwin",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Ann Betterton"
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
      "Bessie Hu",
      "Cami Lee"
     ],
     "a": [
      "Jessica Pevny",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nicholas Leung",
      "Lawrence Ly"
     ],
     "a": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Saif Sarwar",
      "Joshua Ahn"
     ],
     "a": [
      "Keith Shedlock",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sara Synn",
      "Lawrence Ly"
     ],
     "a": [
      "Carly Pfeffer",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cami Lee",
      "Joshua Ahn"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bessie Hu",
      "Saif Sarwar"
     ],
     "a": [
      "Jessica Pevny",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Tim Le"
     ],
     "a": [
      "Ashley Georgevich",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sara Synn",
      "Bessie Hu"
     ],
     "a": [
      "Carly Pfeffer",
      "Jessica Pevny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 3,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Ann Betterton"
     ],
     "a": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jesse Rosenberg",
      "Nicholas Leung"
     ],
     "a": [
      "Keith Shedlock",
      "Daniel Kulik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Saif Sarwar",
      "Tim Le"
     ],
     "a": [
      "Patrick Ceccacci",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Jesse Rosenberg"
     ],
     "a": [
      "Jenna Irwin",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cami Lee",
      "Lawrence Ly"
     ],
     "a": [
      "Jessica Pevny",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sara Synn",
      "Nicholas Leung"
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
     "as": 15,
     "h": [
      "Ann Betterton",
      "Tim Le"
     ],
     "a": [
      "Ashley Georgevich",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Cami Lee",
      "Bessie Hu"
     ],
     "a": [
      "Carly Pfeffer",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sara Synn",
      "Kristine Brink"
     ],
     "a": [
      "Jessica Pevny",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tim Le",
      "Nicholas Leung"
     ],
     "a": [
      "Daniel Kulik",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jesse Rosenberg",
      "Lawrence Ly"
     ],
     "a": [
      "Keith Shedlock",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cami Lee",
      "Nicholas Leung"
     ],
     "a": [
      "Jessica Pevny",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bessie Hu",
      "Saif Sarwar"
     ],
     "a": [
      "Ashley Georgevich",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sara Synn",
      "Jesse Rosenberg"
     ],
     "a": [
      "Carly Pfeffer",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kristine Brink",
      "Lawrence Ly"
     ],
     "a": [
      "Jenna Irwin",
      "Daniel Kulik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bessie Hu",
      "Ann Betterton"
     ],
     "a": [
      "Jenna Irwin",
      "Jessica Pevny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cami Lee",
      "Sara Synn"
     ],
     "a": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Saif Sarwar",
      "Tim Le"
     ],
     "a": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nicholas Leung",
      "Lawrence Ly"
     ],
     "a": [
      "Keith Shedlock",
      "Thomas Hoffman"
     ]
    }
   ],
   "subs": [
    "Thomas Hoffman",
    "Sara Synn"
   ]
  },
  {
   "result": "away",
   "week": 13,
   "home": "Lehigh Valley",
   "away": "Pickle House",
   "time": "2025-11-12T19:00:00",
   "complete": true,
   "homePoints": 564,
   "awayPoints": 637,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Heather Gallagher",
      "Geoff Watson"
     ],
     "a": [
      "Emily Babinsky",
      "Nick Babinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Becca Bender",
      "Matthew Lucas"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Vi Duong",
      "Thao Duong"
     ],
     "a": [
      "Taylor Hartman",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Vi Duong",
      "Melody Grohotolski"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Heather Gallagher",
      "Becca Bender"
     ],
     "a": [
      "Lissa Eagles",
      "Taylor Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Gog Boonswang"
     ],
     "a": [
      "Nick Babinsky",
      "Kishan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Conor Landrigan",
      "Matthew Lucas"
     ],
     "a": [
      "Dylan Unkert",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Melody Grohotolski",
      "Geoff Watson"
     ],
     "a": [
      "Kerrin Maurer",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Emily Babinsky",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Becca Bender",
      "Matthew Lucas"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vi Duong",
      "Thao Duong"
     ],
     "a": [
      "Taylor Hartman",
      "Nick Babinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cristi Landrigan",
      "Melody Grohotolski"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Heather Gallagher",
      "Vi Duong"
     ],
     "a": [
      "Emily Babinsky",
      "Taylor Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Geoff Watson",
      "Gog Boonswang"
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Conor Landrigan",
      "Matthew Lucas"
     ],
     "a": [
      "Nick Babinsky",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Heather Gallagher",
      "Conor Landrigan"
     ],
     "a": [
      "Taylor Hartman",
      "Nick Babinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Kerrin Maurer",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vi Duong",
      "Matthew Lucas"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Melody Grohotolski",
      "Gog Boonswang"
     ],
     "a": [
      "Emily Babinsky",
      "Kishan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Melody Grohotolski",
      "Becca Bender"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Vi Duong",
      "Heather Gallagher"
     ],
     "a": [
      "Emily Babinsky",
      "Taylor Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Geoff Watson",
      "Conor Landrigan"
     ],
     "a": [
      "Dylan Unkert",
      "Kishan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Matthew Lucas",
      "Gog Boonswang"
     ],
     "a": [
      "Nick Babinsky",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Gog Boonswang"
     ],
     "a": [
      "Kerrin Maurer",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Vi Duong",
      "Matthew Lucas"
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
      "Heather Gallagher",
      "Conor Landrigan"
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
     "as": 11,
     "h": [
      "Becca Bender",
      "Geoff Watson"
     ],
     "a": [
      "Lissa Eagles",
      "Nick Babinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cristi Landrigan",
      "Heather Gallagher"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Becca Bender",
      "Melody Grohotolski"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Geoff Watson",
      "Matthew Lucas"
     ],
     "a": [
      "Kishan Shah",
      "Nick Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Conor Landrigan",
      "Gog Boonswang"
     ],
     "a": [
      "Dylan Unkert",
      "Chris Damato"
     ]
    }
   ],
   "subs": [
    "Nick Babinsky",
    "Thao Duong"
   ]
  },
  {
   "result": "away",
   "week": 13,
   "home": "Bounce Malvern",
   "away": "Players Courtyard",
   "time": "2025-11-12T19:30:00",
   "complete": true,
   "homePoints": 613,
   "awayPoints": 642,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ],
     "a": [
      "Jennifer Sanchez",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
     ],
     "a": [
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Kenoa Tio"
     ],
     "a": [
      "Annemarie Mccartney",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Yuki Kim",
      "Ozair Ibrahim"
     ],
     "a": [
      "Stacy Walkowitz",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Trang Nguyen (Smile)"
     ],
     "a": [
      "Annemarie Mccartney",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ozair Ibrahim",
      "Jonah Fliegelman"
     ],
     "a": [
      "Hector Irizarry",
      "Manny Lai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeff Comer",
      "Kenoa Tio"
     ],
     "a": [
      "Nathan Law",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Hugh Laroque"
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
     "as": 15,
     "h": [
      "Trang Nguyen (Smile)",
      "Kenoa Tio"
     ],
     "a": [
      "Jennifer Sanchez",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Jonah Fliegelman"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ],
     "a": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rayna Baizman",
      "Trang Nguyen (Smile)"
     ],
     "a": [
      "Jennifer Sanchez",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ],
     "a": [
      "Hector Irizarry",
      "Ben Mead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hugh Laroque",
      "Kenoa Tio"
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
     "as": 18,
     "h": [
      "Kaylyn Swankoski",
      "Ozair Ibrahim"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Jonah Fliegelman"
     ],
     "a": [
      "Stacy Walkowitz",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Allison Tarnoff",
      "Hugh Laroque"
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
     "as": 23,
     "h": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
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
      "Jennifer Sanchez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Allison Tarnoff"
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
     "as": 23,
     "h": [
      "Kenoa Tio",
      "Jeff Comer"
     ],
     "a": [
      "Nathan Law",
      "Ben Mead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonah Fliegelman",
      "Ozair Ibrahim"
     ],
     "a": [
      "Hector Irizarry",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsey Taaffe",
      "Jonah Fliegelman"
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
     "as": 10,
     "h": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ],
     "a": [
      "Jennifer Sanchez",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
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
     "as": 23,
     "h": [
      "Yuki Kim",
      "Hugh Laroque"
     ],
     "a": [
      "Stacy Walkowitz",
      "Ben Mead"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Trang Nguyen (Smile)",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Lindsey Taaffe",
      "Rayna Baizman"
     ],
     "a": [
      "Annemarie Mccartney",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ],
     "a": [
      "Hector Irizarry",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jeff Comer",
      "Jonah Fliegelman"
     ],
     "a": [
      "Manny Lai",
      "Ben Mead"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 13,
   "home": "Flemington",
   "away": "Home Court",
   "time": "2025-11-12T19:30:00",
   "complete": true,
   "homePoints": 553,
   "awayPoints": 626,
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
      "Ross Switkes"
     ],
     "a": [
      "Gift Horn",
      "Vishal Talreja"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chanda Mccoy",
      "Robbie Oddy"
     ],
     "a": [
      "Johanna Wagner",
      "Joseph Lobiondo"
     ]
    },
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
      "Beatriz Lopez Albarracin",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Thomas Connolly"
     ],
     "a": [
      "Pearly Leung",
      "Zachary Adler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Courtney Greener"
     ],
     "a": [
      "Johanna Wagner",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Lynda Tomaru"
     ],
     "a": [
      "Pearly Leung",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Patrick Ryan",
      "Ross Switkes"
     ],
     "a": [
      "Vishal Talreja",
      "Alvaro Regalado"
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
      "Joseph Lobiondo",
      "Zachary Adler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Zachary Adler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Ross Switkes"
     ],
     "a": [
      "Gift Horn",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Thomas Connolly"
     ],
     "a": [
      "Pearly Leung",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Ackley",
      "Patrick Ryan"
     ],
     "a": [
      "Noelle Ramirez",
      "Vishal Talreja"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Susan Ackley"
     ],
     "a": [
      "Pearly Leung",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Chanda Mccoy"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ross Switkes",
      "Patrick Ryan"
     ],
     "a": [
      "Alvaro Regalado",
      "Zachary Adler"
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
      "Joseph Lobiondo",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Ross Switkes"
     ],
     "a": [
      "Noelle Ramirez",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Johanna Wagner",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Thomas Connolly"
     ],
     "a": [
      "Gift Horn",
      "Zachary Adler"
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
      "Beatriz Lopez Albarracin",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Christine Ferraez"
     ],
     "a": [
      "Gift Horn",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Courtney Greener"
     ],
     "a": [
      "Johanna Wagner",
      "Pearly Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patrick Ryan",
      "Thomas Connolly"
     ],
     "a": [
      "Alvaro Regalado",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Robbie Oddy",
      "Ross Switkes"
     ],
     "a": [
      "Stanley Bonczek",
      "Vishal Talreja"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chanda Mccoy",
      "Thomas Connolly"
     ],
     "a": [
      "Noelle Ramirez",
      "Zachary Adler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Patrick Ryan"
     ],
     "a": [
      "Pearly Leung",
      "Alvaro Regalado"
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
      "Johanna Wagner",
      "Vishal Talreja"
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
      "Gift Horn",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Chanda Mccoy"
     ],
     "a": [
      "Noelle Ramirez",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Courtney Greener"
     ],
     "a": [
      "Gift Horn",
      "Pearly Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Patrick Ryan",
      "Thomas Connolly"
     ],
     "a": [
      "Stanley Bonczek",
      "Zachary Adler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ross Switkes",
      "Robbie Oddy"
     ],
     "a": [
      "Joseph Lobiondo",
      "Vishal Talreja"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 13,
   "home": "Monroe",
   "away": "The Atlantic Club",
   "time": "2025-11-12T19:30:00",
   "complete": true,
   "homePoints": 679,
   "awayPoints": 502,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Claire Gaston",
      "Dilan Shah"
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
     "as": 12,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Eva Danieli",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Morgan Fishman",
      "Thomas Dill"
     ],
     "a": [
      "Margaret Robb",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Richa Shah",
      "Eric Lin"
     ],
     "a": [
      "Rebecca Arleth",
      "Brad Oldham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Morgan Fishman"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Richa Shah",
      "Cameron Barraco"
     ],
     "a": [
      "Rebecca Arleth",
      "Margaret Robb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Thomas Dill",
      "Dilan Shah"
     ],
     "a": [
      "Simon Rosenwasser",
      "Robert Khalev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Bucaro",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Brad Oldham",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Joey Angelson",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Claire Gaston",
      "Thomas Dill"
     ],
     "a": [
      "Margaret Robb",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cameron Barraco",
      "Eric Lin"
     ],
     "a": [
      "Rebecca Arleth",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Morgan Fishman",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Eva Danieli",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Claire Gaston",
      "Richa Shah"
     ],
     "a": [
      "Margaret Robb",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Morgan Fishman",
      "Cameron Barraco"
     ],
     "a": [
      "Rebecca Arleth",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dilan Shah",
      "Chris Bucaro"
     ],
     "a": [
      "Sebastian Ferrer",
      "Robert Khalev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Thomas Dill",
      "Eric Lin"
     ],
     "a": [
      "Brad Oldham",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Richa Shah",
      "Dilan Shah"
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
     "as": 17,
     "h": [
      "Morgan Fishman",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Eva Danieli",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Claire Gaston",
      "Thomas Dill"
     ],
     "a": [
      "Margaret Robb",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Rebecca Arleth",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Richa Shah",
      "Cameron Barraco"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Morgan Fishman"
     ],
     "a": [
      "Rebecca Arleth",
      "Margaret Robb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dilan Shah",
      "Eric Lin"
     ],
     "a": [
      "Robert Khalev",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Bucaro",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Sebastian Ferrer",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Claire Gaston",
      "Dilan Shah"
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
     "as": 14,
     "h": [
      "Cameron Barraco",
      "Thomas Dill"
     ],
     "a": [
      "Eva Danieli",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Richa Shah",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Margaret Robb",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Morgan Fishman",
      "Eric Lin"
     ],
     "a": [
      "Rebecca Arleth",
      "Brad Oldham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Claire Gaston",
      "Cameron Barraco"
     ],
     "a": [
      "Joey Angelson",
      "Rebecca Arleth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Morgan Fishman",
      "Richa Shah"
     ],
     "a": [
      "Eva Danieli",
      "Margaret Robb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Lin",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Sebastian Ferrer",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Thomas Dill",
      "Chris Bucaro"
     ],
     "a": [
      "Simon Rosenwasser",
      "Nicholas Lagrua"
     ]
    }
   ],
   "subs": [
    "Nicholas Lagrua"
   ]
  },
  {
   "result": "away",
   "week": 13,
   "home": "Dill Dinkers Hatboro",
   "away": "Jersey Devil",
   "time": "2025-11-12T19:30:00",
   "complete": true,
   "homePoints": 556,
   "awayPoints": 631,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Ethan Henigan"
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
     "as": 18,
     "h": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ],
     "a": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Elise Van Ormer",
      "Andrew Wakefield"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Garv Singhal"
     ],
     "a": [
      "Chaille Godinez",
      "Zach Bowe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Elise Van Ormer"
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Claudya Elefante"
     ],
     "a": [
      "Chaille Godinez",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Andrew Wakefield",
      "Dylan Ashbach"
     ],
     "a": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Garv Singhal",
      "Robert Schimony"
     ],
     "a": [
      "Matthew Matro",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
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
      "Alyssa Tartaglia",
      "Robert Schimony"
     ],
     "a": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elise Van Ormer",
      "Garv Singhal"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Ethan Henigan"
     ],
     "a": [
      "Chaille Godinez",
      "Zach Bowe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Elise Van Ormer"
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alyssa Tartaglia",
      "Claudya Elefante"
     ],
     "a": [
      "Chaille Godinez",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrew Wakefield",
      "Dylan Ashbach"
     ],
     "a": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Garv Singhal",
      "Ethan Henigan"
     ],
     "a": [
      "Zach Bowe",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
     ],
     "a": [
      "Chaille Godinez",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Dylan Ashbach"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Robert Schimony"
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
     "as": 19,
     "h": [
      "Elise Van Ormer",
      "Garv Singhal"
     ],
     "a": [
      "Michaela Pierznik",
      "Matthew Matro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nahla Bernhardt",
      "Claudya Elefante"
     ],
     "a": [
      "Shelah Wallace",
      "Chaille Godinez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Elise Van Ormer"
     ],
     "a": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrew Wakefield",
      "Garv Singhal"
     ],
     "a": [
      "Tyler Arsenault",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Ethan Henigan"
     ],
     "a": [
      "Matthew Matro",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nahla Bernhardt",
      "Garv Singhal"
     ],
     "a": [
      "Chaille Godinez",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Elise Van Ormer",
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
     "hs": 19,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
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
     "hs": 20,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Robert Schimony"
     ],
     "a": [
      "Michaela Pierznik",
      "Matthew Matro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Claudya Elefante"
     ],
     "a": [
      "Shelah Wallace",
      "Chaille Godinez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Elise Van Ormer",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robert Schimony",
      "Garv Singhal"
     ],
     "a": [
      "Zach Bowe",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ethan Henigan",
      "Dylan Ashbach"
     ],
     "a": [
      "Matthew Matro",
      "Drew Von Bargen"
     ]
    }
   ],
   "subs": [
    "Elise Van Ormer"
   ]
  }
 ],
 "playoffs": [
  {
   "result": "home",
   "round": 1,
   "home": "Pickle Jar",
   "away": "Monroe",
   "time": "2025-11-19T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 4,
   "homePoints": 645,
   "awayPoints": 592,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
     ],
     "a": [
      "Catherine Stewart",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Paula Ro",
      "David Lavy"
     ],
     "a": [
      "Claire Gaston",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gissel Escalante",
      "James Cannizzaro"
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
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Claire Gaston",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gissel Escalante",
      "Ruhi Shah"
     ],
     "a": [
      "Catherine Stewart",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "James Cannizzaro",
      "Rahul Datta"
     ],
     "a": [
      "Thomas Dill",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Will Kayal",
      "David Lavy"
     ],
     "a": [
      "Chris Bucaro",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
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
     "as": 9,
     "h": [
      "Gissel Escalante",
      "David Lavy"
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
      "Paula Ro",
      "Rahul Datta"
     ],
     "a": [
      "Catherine Stewart",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Will Kayal"
     ],
     "a": [
      "Claire Gaston",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Catherine Stewart",
      "Richa Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gissel Escalante",
      "Paula Ro"
     ],
     "a": [
      "Claire Gaston",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rahul Datta",
      "James Cannizzaro"
     ],
     "a": [
      "Thomas Dill",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "David Lavy",
      "Camrin Cronheim"
     ],
     "a": [
      "Dilan Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Paula Ro",
      "Rahul Datta"
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
     "as": 16,
     "h": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ],
     "a": [
      "Claire Gaston",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Peracchio",
      "David Lavy"
     ],
     "a": [
      "Cameron Barraco",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gissel Escalante",
      "James Cannizzaro"
     ],
     "a": [
      "Catherine Stewart",
      "Dilan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Taylor Peracchio",
      "Paula Ro"
     ],
     "a": [
      "Catherine Stewart",
      "Claire Gaston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Richa Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Lavy",
      "Rahul Datta"
     ],
     "a": [
      "Thomas Dill",
      "Chris Bucaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "James Cannizzaro"
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
     "as": 19,
     "h": [
      "Gissel Escalante",
      "David Lavy"
     ],
     "a": [
      "Catherine Stewart",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Peracchio",
      "Rahul Datta"
     ],
     "a": [
      "Claire Gaston",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Zoe Ousouljoglou",
      "Will Kayal"
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
     "as": 15,
     "h": [
      "Paula Ro",
      "Camrin Cronheim"
     ],
     "a": [
      "Cameron Barraco",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Gissel Escalante",
      "Ruhi Shah"
     ],
     "a": [
      "Richa Shah",
      "Claire Gaston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Catherine Stewart",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rahul Datta",
      "David Lavy"
     ],
     "a": [
      "Dilan Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "James Cannizzaro",
      "Will Kayal"
     ],
     "a": [
      "Thomas Dill",
      "Chris Bucaro"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Pickleball Palace",
   "away": "Home Court",
   "time": "2025-11-19T19:30:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 649,
   "awayPoints": 587,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Pevny",
      "Christian Fechter"
     ],
     "a": [
      "Gift Horn",
      "Juan Navarro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Leo Kupferman"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephanie Bramer",
      "Corey Maryles"
     ],
     "a": [
      "Johanna Wagner",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jenna Irwin",
      "Patrick Ceccacci"
     ],
     "a": [
      "Chrissy Sandella",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jenna Irwin",
      "Stephanie Bramer"
     ],
     "a": [
      "Pearly Leung",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Jessica Pevny"
     ],
     "a": [
      "Johanna Wagner",
      "Chrissy Sandella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Leo Kupferman",
      "Daniel Kulik"
     ],
     "a": [
      "Alvaro Regalado",
      "Juan Navarro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Corey Maryles",
      "Christian Fechter"
     ],
     "a": [
      "Austin Williams",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Pearly Leung",
      "Juan Navarro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Stephanie Bramer",
      "Corey Maryles"
     ],
     "a": [
      "Chrissy Sandella",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ],
     "a": [
      "Johanna Wagner",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jessica Pevny",
      "Leo Kupferman"
     ],
     "a": [
      "Gift Horn",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Jenna Irwin"
     ],
     "a": [
      "Pearly Leung",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ashley Georgevich",
      "Stephanie Bramer"
     ],
     "a": [
      "Gift Horn",
      "Johanna Wagner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Corey Maryles",
      "Christian Fechter"
     ],
     "a": [
      "Alvaro Regalado",
      "Juan Navarro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Leo Kupferman",
      "Patrick Ceccacci"
     ],
     "a": [
      "Hruday Vemparala",
      "Austin Williams"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Leo Kupferman"
     ],
     "a": [
      "Pearly Leung",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Corey Maryles"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Christian Fechter"
     ],
     "a": [
      "Johanna Wagner",
      "Juan Navarro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Chrissy Sandella",
      "Austin Williams"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Jessica Pevny"
     ],
     "a": [
      "Pearly Leung",
      "Gift Horn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ashley Georgevich",
      "Stephanie Bramer"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Chrissy Sandella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Leo Kupferman",
      "Daniel Kulik"
     ],
     "a": [
      "Alvaro Regalado",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Corey Maryles",
      "Patrick Ceccacci"
     ],
     "a": [
      "Hruday Vemparala",
      "Juan Navarro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ashley Georgevich",
      "Leo Kupferman"
     ],
     "a": [
      "Pearly Leung",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jenna Irwin",
      "Corey Maryles"
     ],
     "a": [
      "Gift Horn",
      "Austin Williams"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Juan Navarro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stephanie Bramer",
      "Christian Fechter"
     ],
     "a": [
      "Chrissy Sandella",
      "Joseph Lobiondo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Jenna Irwin"
     ],
     "a": [
      "Pearly Leung",
      "Gift Horn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Pevny",
      "Ashley Georgevich"
     ],
     "a": [
      "Johanna Wagner",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Corey Maryles",
      "Leo Kupferman"
     ],
     "a": [
      "Alvaro Regalado",
      "Austin Williams"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Daniel Kulik",
      "Christian Fechter"
     ],
     "a": [
      "Juan Navarro",
      "Hruday Vemparala"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Pickle House",
   "away": "Jersey Devil",
   "time": "2025-11-19T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 4,
   "homePoints": 644,
   "awayPoints": 574,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Sidd Pathare"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anisha Malhotra",
      "Chris Damato"
     ],
     "a": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "Yoyo Shen",
      "Michael Li"
     ],
     "a": [
      "Chaille Godinez",
      "Zach Bowe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Shelah Wallace",
      "Dominique Damerjian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yoyo Shen",
      "Anisha Malhotra"
     ],
     "a": [
      "Arianna Haresign",
      "Michaela Pierznik"
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
      "Nick Dehmer",
      "Kishan Shah"
     ],
     "a": [
      "Matthew Matro",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Chaille Godinez",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
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
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yoyo Shen",
      "Nick Dehmer"
     ],
     "a": [
      "Dominique Damerjian",
      "Jase Volz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Taylor Hartman"
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lissa Eagles",
      "Yoyo Shen"
     ],
     "a": [
      "Chaille Godinez",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kishan Shah",
      "Sidd Pathare"
     ],
     "a": [
      "Drew Von Bargen",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Li",
      "Nick Dehmer"
     ],
     "a": [
      "Matthew Matro",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
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
      "Yoyo Shen",
      "Kishan Shah"
     ],
     "a": [
      "Michaela Pierznik",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lissa Eagles",
      "Nick Dehmer"
     ],
     "a": [
      "Chaille Godinez",
      "Tyler Arsenault"
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
      "Dominique Damerjian",
      "Jase Volz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Taylor Hartman",
      "Anisha Malhotra"
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lissa Eagles",
      "Yoyo Shen"
     ],
     "a": [
      "Chaille Godinez",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Damato",
      "Kishan Shah"
     ],
     "a": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
     ],
     "a": [
      "Zach Bowe",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Kishan Shah"
     ],
     "a": [
      "Michaela Pierznik",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Michael Li"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
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
      "Shelah Wallace",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Sidd Pathare"
     ],
     "a": [
      "Chaille Godinez",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Yoyo Shen"
     ],
     "a": [
      "Shelah Wallace",
      "Dominique Damerjian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lissa Eagles",
      "Anisha Malhotra"
     ],
     "a": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Li",
      "Nick Dehmer"
     ],
     "a": [
      "Tyler Arsenault",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chris Damato",
      "Kishan Shah"
     ],
     "a": [
      "Matthew Matro",
      "Drew Von Bargen"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Bounce Malvern",
   "away": "Players Courtyard",
   "time": "2025-11-19T19:30:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 679,
   "awayPoints": 658,
   "homeGW": 19,
   "awayGW": 16,
   "games": [
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
      "Annemarie Mccartney",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ],
     "a": [
      "Jennifer Sanchez",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ],
     "a": [
      "Stacy Walkowitz",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lindsey Taaffe",
      "Hugh Laroque"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Hannah Nussbaum",
      "Lindsey Taaffe"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Stacy Walkowitz",
      "Anita Buggins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jeff Comer",
      "Kenoa Tio"
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
     "as": 8,
     "h": [
      "Ozair Ibrahim",
      "Jonah Fliegelman"
     ],
     "a": [
      "Ben Mead",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ],
     "a": [
      "Annemarie Mccartney",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ],
     "a": [
      "Stacy Walkowitz",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ],
     "a": [
      "Anita Buggins",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kaylyn Swankoski",
      "Hugh Laroque"
     ],
     "a": [
      "Kaley Lai",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
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
      "Lindsey Taaffe",
      "Trang Nguyen (Smile)"
     ],
     "a": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jonah Fliegelman",
      "Ozair Ibrahim"
     ],
     "a": [
      "Ben Mead",
      "Manny Lai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hugh Laroque",
      "Kenoa Tio"
     ],
     "a": [
      "Nathan Law",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Jonah Fliegelman"
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
     "as": 17,
     "h": [
      "Kaylyn Swankoski",
      "Jeff Comer"
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
      "Lindsey Taaffe",
      "Hugh Laroque"
     ],
     "a": [
      "Anita Buggins",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Trang Nguyen (Smile)",
      "Ozair Ibrahim"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jerry Hine"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsey Taaffe",
      "Hannah Nussbaum"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Trang Nguyen (Smile)",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jeff Comer",
      "Ozair Ibrahim"
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
      "Kenoa Tio",
      "Jonah Fliegelman"
     ],
     "a": [
      "Ben Mead",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Hugh Laroque"
     ],
     "a": [
      "Jennifer Sanchez",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Jonah Fliegelman"
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
     "as": 16,
     "h": [
      "Trang Nguyen (Smile)",
      "Ozair Ibrahim"
     ],
     "a": [
      "Annemarie Mccartney",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ],
     "a": [
      "Stacy Walkowitz",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hannah Nussbaum",
      "Rayna Baizman"
     ],
     "a": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsey Taaffe",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Jennifer Sanchez",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jeff Comer",
      "Jonah Fliegelman"
     ],
     "a": [
      "Nathan Law",
      "Ben Mead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kenoa Tio",
      "Hugh Laroque"
     ],
     "a": [
      "Manny Lai",
      "Jerry Hine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaylyn Swankoski",
      "Ozair Ibrahim"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lindsey Taaffe",
      "Hannah Nussbaum"
     ],
     "a": [
      "Jennifer Sanchez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeff Comer",
      "Jonah Fliegelman"
     ],
     "a": [
      "Ben Mead",
      "Manny Lai"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 2,
   "home": "Pickle Jar",
   "away": "Pickleball Palace",
   "time": "2025-12-03T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "homePoints": 666,
   "awayPoints": 636,
   "homeGW": 19,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gissel Escalante",
      "James Cannizzaro"
     ],
     "a": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Stephanie Bramer",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Zoe Ousouljoglou",
      "David Lavy"
     ],
     "a": [
      "Jessica Hendry",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Taylor Peracchio",
      "Rahul Datta"
     ],
     "a": [
      "Carly Pfeffer",
      "Leo Kupferman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gissel Escalante",
      "Paula Ro"
     ],
     "a": [
      "Carly Pfeffer",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Jessica Hendry",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "James Cannizzaro"
     ],
     "a": [
      "Leo Kupferman",
      "Christian Fechter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "David Lavy",
      "Rahul Datta"
     ],
     "a": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Rahul Datta"
     ],
     "a": [
      "Ashley Georgevich",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Paula Ro",
      "Camrin Cronheim"
     ],
     "a": [
      "Jenna Irwin",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ruhi Shah",
      "David Lavy"
     ],
     "a": [
      "Stephanie Bramer",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gissel Escalante",
      "James Cannizzaro"
     ],
     "a": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Paula Ro",
      "Gissel Escalante"
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
     "as": 16,
     "h": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Jenna Irwin",
      "Jessica Hendry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "James Cannizzaro"
     ],
     "a": [
      "Leo Kupferman",
      "Eric Kutzin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Lavy",
      "Rahul Datta"
     ],
     "a": [
      "Daniel Kulik",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ruhi Shah",
      "James Cannizzaro"
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
      "Zoe Ousouljoglou",
      "Rahul Datta"
     ],
     "a": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Gissel Escalante",
      "David Lavy"
     ],
     "a": [
      "Jenna Irwin",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Paula Ro",
      "Camrin Cronheim"
     ],
     "a": [
      "Ashley Georgevich",
      "Leo Kupferman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ruhi Shah",
      "Gissel Escalante"
     ],
     "a": [
      "Stephanie Bramer",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Paula Ro",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Ashley Georgevich",
      "Jessica Hendry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "David Lavy",
      "Camrin Cronheim"
     ],
     "a": [
      "Daniel Kulik",
      "Christian Fechter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rahul Datta",
      "James Cannizzaro"
     ],
     "a": [
      "Leo Kupferman",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
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
      "Ruhi Shah",
      "David Lavy"
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
     "as": 20,
     "h": [
      "Gissel Escalante",
      "Rahul Datta"
     ],
     "a": [
      "Stephanie Bramer",
      "Leo Kupferman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Paula Ro",
      "James Cannizzaro"
     ],
     "a": [
      "Jessica Hendry",
      "Eric Kutzin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paula Ro",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Gissel Escalante"
     ],
     "a": [
      "Stephanie Bramer",
      "Jessica Hendry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rahul Datta",
      "James Cannizzaro"
     ],
     "a": [
      "Leo Kupferman",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Camrin Cronheim",
      "David Lavy"
     ],
     "a": [
      "Eric Kutzin",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gissel Escalante",
      "Rahul Datta"
     ],
     "a": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Ashley Georgevich",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Camrin Cronheim",
      "David Lavy"
     ],
     "a": [
      "Leo Kupferman",
      "Eric Kutzin"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 2,
   "home": "Pickle House",
   "away": "Bounce Malvern",
   "time": "2025-12-03T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "homePoints": 614,
   "awayPoints": 605,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Hartman",
      "Michael Li"
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
     "as": 15,
     "h": [
      "Kerrin Maurer",
      "Chris Damato"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lindsey Thoeng",
      "Sidd Pathare"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Lindsey Taaffe",
      "Hugh Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lindsey Thoeng",
      "Taylor Hartman"
     ],
     "a": [
      "Hannah Nussbaum",
      "Lindsey Taaffe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kerrin Maurer",
      "Yoyo Shen"
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
     "as": 14,
     "h": [
      "Kishan Shah",
      "Nick Dehmer"
     ],
     "a": [
      "Jeff Comer",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chris Damato",
      "Michael Li"
     ],
     "a": [
      "Jonah Fliegelman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsey Thoeng",
      "Michael Li"
     ],
     "a": [
      "Hannah Nussbaum",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Yoyo Shen",
      "Sidd Pathare"
     ],
     "a": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anisha Malhotra",
      "Kishan Shah"
     ],
     "a": [
      "Lindsey Taaffe",
      "Hugh Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yoyo Shen",
      "Taylor Hartman"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anisha Malhotra",
      "Kerrin Maurer"
     ],
     "a": [
      "Lindsey Taaffe",
      "Trang Nguyen (Smile)"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kishan Shah",
      "Sidd Pathare"
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
     "as": 18,
     "h": [
      "Chris Damato",
      "Michael Li"
     ],
     "a": [
      "Kenoa Tio",
      "Hugh Laroque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Chris Damato"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Kishan Shah"
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
     "as": 19,
     "h": [
      "Lindsey Thoeng",
      "Michael Li"
     ],
     "a": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Lindsey Taaffe",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Taylor Hartman"
     ],
     "a": [
      "Hannah Nussbaum",
      "Lindsey Taaffe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerrin Maurer",
      "Lindsey Thoeng"
     ],
     "a": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sidd Pathare",
      "Chris Damato"
     ],
     "a": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michael Li",
      "Nick Dehmer"
     ],
     "a": [
      "Kenoa Tio",
      "Hugh Laroque"
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
      "Lindsey Taaffe",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lindsey Thoeng",
      "Sidd Pathare"
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
     "as": 17,
     "h": [
      "Yoyo Shen",
      "Michael Li"
     ],
     "a": [
      "Trang Nguyen (Smile)",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsey Thoeng",
      "Kerrin Maurer"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yoyo Shen",
      "Taylor Hartman"
     ],
     "a": [
      "Lindsey Taaffe",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kishan Shah",
      "Chris Damato"
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
     "as": 19,
     "h": [
      "Michael Li",
      "Nick Dehmer"
     ],
     "a": [
      "Ozair Ibrahim",
      "Hugh Laroque"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 3,
   "home": "Pickle Jar",
   "away": "Pickle House",
   "time": "2025-12-07T10:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 1,
   "homePoints": 634,
   "awayPoints": 631,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zoe Ousouljoglou",
      "David Lavy"
     ],
     "a": [
      "Taylor Hartman",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ruhi Shah",
      "Camrin Cronheim"
     ],
     "a": [
      "Anisha Malhotra",
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
      "James Cannizzaro"
     ],
     "a": [
      "Yoyo Shen",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Rahul Datta"
     ],
     "a": [
      "Lindsey Thoeng",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Paula Ro"
     ],
     "a": [
      "Lindsey Thoeng",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "James Cannizzaro",
      "Camrin Cronheim"
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Lavy",
      "Rahul Datta"
     ],
     "a": [
      "Nick Dehmer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "David Lavy"
     ],
     "a": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
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
     "hs": 13,
     "as": 21,
     "h": [
      "Paula Ro",
      "James Cannizzaro"
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
     "as": 17,
     "h": [
      "Gissel Escalante",
      "Rahul Datta"
     ],
     "a": [
      "Lindsey Thoeng",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Peracchio",
      "Paula Ro"
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
      "Ruhi Shah",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Lindsey Thoeng",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Camrin Cronheim",
      "James Cannizzaro"
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rahul Datta",
      "David Lavy"
     ],
     "a": [
      "Nick Dehmer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Rahul Datta"
     ],
     "a": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Paula Ro",
      "James Cannizzaro"
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
      "David Lavy"
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
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ],
     "a": [
      "Lindsey Thoeng",
      "Kishan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Anisha Malhotra",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ruhi Shah",
      "Gissel Escalante"
     ],
     "a": [
      "Taylor Hartman",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Lavy",
      "Camrin Cronheim"
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
      "James Cannizzaro",
      "Rahul Datta"
     ],
     "a": [
      "Nick Dehmer",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Peracchio",
      "Rahul Datta"
     ],
     "a": [
      "Anisha Malhotra",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gissel Escalante",
      "James Cannizzaro"
     ],
     "a": [
      "Taylor Hartman",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "David Lavy"
     ],
     "a": [
      "Lindsey Thoeng",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Paula Ro",
      "Camrin Cronheim"
     ],
     "a": [
      "Yoyo Shen",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zoe Ousouljoglou",
      "Taylor Peracchio"
     ],
     "a": [
      "Lindsey Thoeng",
      "Taylor Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ruhi Shah",
      "Gissel Escalante"
     ],
     "a": [
      "Yoyo Shen",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "David Lavy",
      "Camrin Cronheim"
     ],
     "a": [
      "Michael Li",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "James Cannizzaro",
      "Rahul Datta"
     ],
     "a": [
      "Nick Dehmer",
      "Kishan Shah"
     ]
    }
   ]
  }
 ],
 "extraPlayerIds": {
  "Noah Waterman": "10b3cb4a-6b21-4652-890f-477034721ab5",
  "Dan Presuto": "1b9ae752-9cd4-49e8-aac7-136e5742f9ee",
  "Sari Lee": "5b494e51-05a8-48a9-8b83-6ce10869d0cf",
  "Richard Celler": "636e734c-c88e-40aa-b418-65072bd05cf9",
  "Vinay Bahuguna": "7b94f6a6-5006-41fd-8eaf-90bfd2bba520",
  "John Canini": "9d778b5f-49bc-4c2f-bdcb-e244966b6e22",
  "Juan Navarro": "a6ec9d87-8baa-41cf-9f09-3177c222dba8",
  "Joe Palumbo": "b39664c3-1a6e-4493-968f-6e7f7939f694",
  "Sarah West": "b8f63309-b5da-4b30-b190-8eccef09d35e",
  "Austin Williams": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9",
  "Nissim Fadida": "bc812947-abde-46ce-9f6a-ab6475fbbf99",
  "Shari Silverman": "d2e52b65-809f-4df7-8604-baee685a23df",
  "Liby Saigal": "dc2026ad-428a-4822-ae40-889727c35b10",
  "Kevin Wysoczynski": "f64f0cc2-6c82-4fe4-9992-747512700971"
 },
 "meta": {
  "matchesPlayed": 84,
  "provisionalMatches": 0,
  "weeks": "1-13",
  "totalPlayers": 275,
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
   12,
   13
  ],
  "divisionSlug": "f82ff14f",
  "hasPlayoffs": true,
  "typicalDay": "Wednesdays",
  "detailFile": "detail-f82ff14f.js",
  "clubName": "",
  "divisionName": "4.5",
  "leagueType": "travel",
  "seasonSlug": "2025-fall",
  "seasonLabel": "Fall 2025",
  "seasonStatus": "archived",
  "podCount": 2,
  "podNames": [
   "South",
   "North"
  ],
  "podSource": "api",
  "reportedPods": [
   "North",
   "South"
  ]
 }
};
  DATA.meta.asOf = "2026-09-01T00:51:28.650Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["f82ff14f"] = DATA;
})();
