(function () {
  const DATA = {
 "players": [
  {
   "name": "Gary Sidhu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 67,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 80,
   "ppg": 21,
   "leagueRank": 4,
   "rating": 3.2,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -2.3,
   "playerId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "name": "Darren Saks",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 79,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 68,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 3.6,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.5,
   "playerId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "name": "Pam Boyd",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 102,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 66,
   "ppg": 21,
   "leagueRank": 8,
   "rating": 2.5,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.9,
   "playerId": "04aefa29-20e3-41b7-a680-19d13f9d4289"
  },
  {
   "name": "Marc Pellicane",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 106,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "winPct": 100,
   "diff": 62,
   "ppg": 21,
   "leagueRank": 7,
   "rating": 2.4,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "David Osborne",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 92,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 55,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 3.2,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.3,
   "playerId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "name": "Karen Moliver",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 94,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9",
   "winPct": 100,
   "diff": 53,
   "ppg": 21,
   "leagueRank": 9,
   "rating": 1.7,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -2.2
  },
  {
   "name": "Jane Meng",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 96,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 51,
   "ppg": 21,
   "leagueRank": 33,
   "rating": 2.4,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.6,
   "playerId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "name": "Michael Swell",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 56,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 49,
   "ppg": 21,
   "leagueRank": 5,
   "rating": 2.1,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -2,
   "playerId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "name": "Gina Pultorak",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 99,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "43326f18-7e59-4bc6-8008-7ec14cbcb18a",
   "winPct": 100,
   "diff": 48,
   "ppg": 21,
   "leagueRank": 10,
   "rating": 1.3,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.9
  },
  {
   "name": "Chaoxia Cheng",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 80,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 46,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 3.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.2,
   "playerId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59"
  },
  {
   "name": "Jay Rohatgi",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 103,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 44,
   "ppg": 21,
   "leagueRank": 12,
   "rating": 1.7,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.4,
   "playerId": "f5831f41-366b-4666-b780-448fc7971ad7"
  },
  {
   "name": "Michael Dombrowiecki",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 103,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "winPct": 100,
   "diff": 44,
   "ppg": 21,
   "leagueRank": 15,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Bud Heller",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 85,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 41,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 2.6,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "name": "Rebecca Lederman",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 110,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 37,
   "ppg": 21,
   "leagueRank": 13,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.3,
   "playerId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "name": "Janine Forrest",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 71,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 34,
   "ppg": 21,
   "leagueRank": 30,
   "rating": 0.7,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -2.1,
   "playerId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "name": "Carly Pfeffer",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 93,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 33,
   "ppg": 21,
   "leagueRank": 14,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -2,
   "playerId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "name": "Simon Perry",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 115,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "winPct": 100,
   "diff": 32,
   "ppg": 21,
   "leagueRank": 11,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 15,
   "losses": 1,
   "pointsWon": 334,
   "totalPointsAgainst": 222,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 93.8,
   "diff": 112,
   "ppg": 20.9,
   "leagueRank": 16,
   "rating": 2.9,
   "ratingGames": 16,
   "confidence": 67,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.1,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "name": "Alice Napolitano",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 165,
   "totalPointsAgainst": 98,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 67,
   "ppg": 20.6,
   "leagueRank": 17,
   "rating": 2.4,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.5,
   "playerId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "name": "Sarah Nazario",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 116,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "d457bcf7-383d-4b25-a7a9-a456e5803087",
   "winPct": 87.5,
   "diff": 50,
   "ppg": 20.8,
   "leagueRank": 19,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 50,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Amy Chrebet",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 124,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 42,
   "ppg": 20.8,
   "leagueRank": 21,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1.1,
   "playerId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "name": "Jonathan Brand",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 142,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 24,
   "ppg": 20.8,
   "leagueRank": 25,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe"
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 13,
   "losses": 2,
   "pointsWon": 310,
   "totalPointsAgainst": 248,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 86.7,
   "diff": 62,
   "ppg": 20.7,
   "leagueRank": 22,
   "rating": 1.3,
   "ratingGames": 15,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
  },
  {
   "name": "Tom Zentmeyer",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 99,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 46,
   "ppg": 20.7,
   "leagueRank": 41,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.6,
   "playerId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "name": "Daniel Chernin",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 112,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 33,
   "ppg": 20.7,
   "leagueRank": 23,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.8,
   "playerId": "9fc26554-f672-4501-9d2e-a8553fd79eaf"
  },
  {
   "name": "Eric Luque",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 144,
   "totalPointsAgainst": 115,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 29,
   "ppg": 20.6,
   "leagueRank": 18,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "name": "Lei Dong",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 139,
   "totalPointsAgainst": 113,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 26,
   "ppg": 19.9,
   "leagueRank": 20,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.7,
   "playerId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "name": "Carol Mastroianni",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 140,
   "totalPointsAgainst": 126,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 14,
   "ppg": 20,
   "leagueRank": 31,
   "rating": 0.8,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.1,
   "playerId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "name": "Thomas Ross",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 121,
   "totalPointsAgainst": 95,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 26,
   "ppg": 20.2,
   "leagueRank": 28,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.4,
   "playerId": "eab86a29-43ef-4b31-ba94-928f57f56c9c"
  },
  {
   "name": "Shauna Muller",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 25,
   "ppg": 20.7,
   "leagueRank": 26,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.9,
   "playerId": "45efdf62-1562-4402-afee-8f0e1e3e81c1"
  },
  {
   "name": "Karan Pescatore",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 120,
   "totalPointsAgainst": 96,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 24,
   "ppg": 20,
   "leagueRank": 27,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1,
   "playerId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711"
  },
  {
   "name": "Janet Garrity",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 121,
   "totalPointsAgainst": 102,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 19,
   "ppg": 20.2,
   "leagueRank": 66,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.4,
   "playerId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "name": "Robert Block",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 121,
   "totalPointsAgainst": 104,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 17,
   "ppg": 20.2,
   "leagueRank": 47,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.3,
   "playerId": "23d1d322-f31d-46b3-bf95-d86faab58b06"
  },
  {
   "name": "Brian Gonzalez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 118,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 14,
   "ppg": 19.7,
   "leagueRank": 36,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.9,
   "playerId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "name": "Bill Brandt",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 112,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "dc530014-0e3b-4485-b265-8555bafe6e19",
   "winPct": 83.3,
   "diff": 12,
   "ppg": 20.7,
   "leagueRank": 29,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Patricia Boyle",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 13,
   "losses": 3,
   "pointsWon": 322,
   "totalPointsAgainst": 258,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 81.3,
   "diff": 64,
   "ppg": 20.1,
   "leagueRank": 32,
   "rating": 1,
   "ratingGames": 16,
   "confidence": 68,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.8,
   "playerId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "name": "Robert Finley",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 321,
   "totalPointsAgainst": 249,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 72,
   "ppg": 20.1,
   "leagueRank": 35,
   "rating": 1.4,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "0d70122a-9002-461f-8600-a9afed2e8c3f"
  },
  {
   "name": "Sandy Alkins",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 323,
   "totalPointsAgainst": 267,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 56,
   "ppg": 20.2,
   "leagueRank": 38,
   "rating": -0.4,
   "ratingGames": 16,
   "confidence": 69,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -1,
   "playerId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "name": "Christopher Boyle",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 161,
   "totalPointsAgainst": 118,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "84729bcd-2c46-4a3b-b0a3-13a7e7d46dfb",
   "winPct": 75,
   "diff": 43,
   "ppg": 20.1,
   "leagueRank": 34,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.7
  },
  {
   "name": "Denise Richmond",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 158,
   "totalPointsAgainst": 140,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 18,
   "ppg": 19.8,
   "leagueRank": 40,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "name": "Alex Lee",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 137,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 33,
   "ppg": 19.6,
   "leagueRank": 39,
   "rating": 2.1,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "22e2201d-16d7-4474-847b-5f4f0cef44e6"
  },
  {
   "name": "Kelly Hanson Word",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 137,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 16,
   "ppg": 19.6,
   "leagueRank": 46,
   "rating": 0.3,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.5,
   "playerId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "name": "Lindsay Duphily",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 138,
   "totalPointsAgainst": 123,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 15,
   "ppg": 19.7,
   "leagueRank": 55,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894"
  },
  {
   "name": "Harriet Levin",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 139,
   "totalPointsAgainst": 136,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 3,
   "ppg": 19.9,
   "leagueRank": 42,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "name": "Kate Siedell",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 325,
   "totalPointsAgainst": 242,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 68.8,
   "diff": 83,
   "ppg": 20.3,
   "leagueRank": 37,
   "rating": 1.9,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.8,
   "playerId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "name": "Yi Gu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 121,
   "totalPointsAgainst": 92,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 29,
   "ppg": 20.2,
   "leagueRank": 43,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1.4,
   "playerId": "0640ecce-0b14-4eac-9cbd-be86592d6102"
  },
  {
   "name": "Guy Judkowski",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 107,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 12,
   "ppg": 19.8,
   "leagueRank": 53,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1.3,
   "playerId": "aaddf7e8-7ad2-4472-a8bd-89e6d5abc78c"
  },
  {
   "name": "David Mcintyre",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 106,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "1f3700d5-63e4-495e-92c1-1248224ed61d",
   "winPct": 66.7,
   "diff": 12,
   "ppg": 19.7,
   "leagueRank": 48,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Brett Kleger",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 11,
   "ppg": 20,
   "leagueRank": 44,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "5b11ac59-091a-46d3-beb5-2d65d5d77135"
  },
  {
   "name": "Emil Pescatore",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 112,
   "totalPointsAgainst": 106,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 6,
   "ppg": 18.7,
   "leagueRank": 56,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.9,
   "playerId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec"
  },
  {
   "name": "Roseann Catania",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 111,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "67b0e676-9779-4bcb-8c38-86f2c84e1d73",
   "winPct": 66.7,
   "diff": 5,
   "ppg": 19.3,
   "leagueRank": 52,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Eva Danieli",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 160,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 43,
   "ppg": 20,
   "leagueRank": 45,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.1,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "name": "Stacey Frank",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 160,
   "totalPointsAgainst": 141,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 19,
   "ppg": 20,
   "leagueRank": 49,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "name": "Katrina Mcintyre",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 154,
   "totalPointsAgainst": 138,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 16,
   "ppg": 19.3,
   "leagueRank": 51,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "eeead4e9-eec9-4cfc-887d-44222225d436"
  },
  {
   "name": "Brian Rowan",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 162,
   "totalPointsAgainst": 147,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "winPct": 62.5,
   "diff": 15,
   "ppg": 20.3,
   "leagueRank": 50,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 50,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Tom Maley",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 239,
   "totalPointsAgainst": 229,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 61.5,
   "diff": 10,
   "ppg": 18.4,
   "leagueRank": 60,
   "rating": -0.3,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "name": "Sachin Pathare",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 132,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "cb93ea73-1422-4b53-9665-41182caba8c8",
   "winPct": 57.1,
   "diff": 9,
   "ppg": 18.9,
   "leagueRank": 54,
   "rating": 2.2,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Sue Johnson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 137,
   "totalPointsAgainst": 130,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 7,
   "ppg": 19.6,
   "leagueRank": 57,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.8,
   "playerId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "name": "Tera Baccile",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 125,
   "totalPointsAgainst": 132,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -7,
   "ppg": 17.9,
   "leagueRank": 64,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1,
   "playerId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "name": "Amy Johnson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 217,
   "totalPointsAgainst": 209,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 54.5,
   "diff": 8,
   "ppg": 19.7,
   "leagueRank": 61,
   "rating": -0.6,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "name": "Mei Li",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 107,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 7,
   "ppg": 19,
   "leagueRank": 59,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "28330003-3125-4050-be9a-ddd726dccfe2"
  },
  {
   "name": "Sandra Thompson",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 4,
   "ppg": 18.8,
   "leagueRank": 70,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "name": "Rui Zhang",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 117,
   "totalPointsAgainst": 114,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 3,
   "ppg": 19.5,
   "leagueRank": 62,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "name": "Stephanie Woomer",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -3,
   "ppg": 18.8,
   "leagueRank": 63,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "name": "Tara Lombardo",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 101,
   "totalPointsAgainst": 118,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -17,
   "ppg": 16.8,
   "leagueRank": 74,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.4,
   "playerId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "name": "Liangang Liu",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 125,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -1,
   "ppg": 17.9,
   "leagueRank": 72,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920"
  },
  {
   "name": "Cindy Hu",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 137,
   "totalPointsAgainst": 141,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -4,
   "ppg": 19.6,
   "leagueRank": 67,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169"
  },
  {
   "name": "Marc Friedman",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 254,
   "totalPointsAgainst": 258,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -4,
   "ppg": 18.1,
   "leagueRank": 76,
   "rating": -1.3,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "name": "Sandro Stefanelli",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 120,
   "totalPointsAgainst": 136,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -16,
   "ppg": 17.1,
   "leagueRank": 68,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.2,
   "playerId": "1872d8d8-f958-4747-af3a-443d5f88a1c3"
  },
  {
   "name": "Jorge Diaz",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 178,
   "totalPointsAgainst": 185,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -7,
   "ppg": 17.8,
   "leagueRank": 79,
   "rating": 0.3,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0,
   "playerId": "5384ac1d-574b-4fe8-9360-010e903e9ec0"
  },
  {
   "name": "Ann Betterton",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 92,
   "totalPointsAgainst": 101,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -9,
   "ppg": 18.4,
   "leagueRank": 78,
   "rating": -0.5,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "name": "Christine Papa",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 151,
   "totalPointsAgainst": 150,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": 1,
   "ppg": 18.9,
   "leagueRank": 75,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "name": "Picky Vorabouth",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 147,
   "totalPointsAgainst": 152,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "38336cb3-6ff4-4187-abe5-3f0a819d0a0d",
   "winPct": 37.5,
   "diff": -5,
   "ppg": 18.4,
   "leagueRank": 73,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Kristen Soucie",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 148,
   "totalPointsAgainst": 158,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 37.5,
   "diff": -10,
   "ppg": 18.5,
   "leagueRank": 83,
   "rating": -1.6,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4"
  },
  {
   "name": "John Morabito",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 149,
   "totalPointsAgainst": 162,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -13,
   "ppg": 18.6,
   "leagueRank": 77,
   "rating": 0.1,
   "ratingGames": 8,
   "confidence": 51,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "a018e2a6-8278-4354-8802-810742e62edf"
  },
  {
   "name": "Jim Darcangelo",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 139,
   "totalPointsAgainst": 158,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -19,
   "ppg": 17.4,
   "leagueRank": 84,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.6,
   "playerId": "0530512b-466d-4ff7-9e89-7961b4a63110"
  },
  {
   "name": "Liangjie Zhu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 274,
   "totalPointsAgainst": 298,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -24,
   "ppg": 17.1,
   "leagueRank": 80,
   "rating": 0.6,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.7,
   "playerId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "name": "Richard Demeuse",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 118,
   "totalPointsAgainst": 107,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 33.3,
   "diff": 11,
   "ppg": 19.7,
   "leagueRank": 69,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.9,
   "playerId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "name": "John Zhong",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 3,
   "wins": 1,
   "losses": 2,
   "pointsWon": 58,
   "totalPointsAgainst": 60,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -2,
   "ppg": 19.3,
   "leagueRank": 104,
   "rating": -0.8,
   "ratingGames": 3,
   "confidence": 33,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "6bfd212d-c7b4-4eff-ae3c-5e9424080282"
  },
  {
   "name": "Jiang Jin",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 108,
   "totalPointsAgainst": 115,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -7,
   "ppg": 18,
   "leagueRank": 87,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "579cead3-d960-4c14-8905-8c17c70ca003"
  },
  {
   "name": "Jim Peng",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 109,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -7,
   "ppg": 18.2,
   "leagueRank": 82,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0,
   "playerId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "name": "Katherine Maruyama",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 110,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -10,
   "ppg": 18.3,
   "leagueRank": 81,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "name": "Mengchu Zhou",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 102,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17,
   "leagueRank": 86,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "14fc7872-1e6f-419e-adcb-d8e63826a37d"
  },
  {
   "name": "Craig Batten",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 102,
   "totalPointsAgainst": 116,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17,
   "leagueRank": 89,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d"
  },
  {
   "name": "Christine Dugan",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 101,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -18,
   "ppg": 16.8,
   "leagueRank": 71,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 214,
   "totalPointsAgainst": 235,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -21,
   "ppg": 17.8,
   "leagueRank": 85,
   "rating": -1,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "name": "Jamila Sefiane",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 97,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -22,
   "ppg": 16.2,
   "leagueRank": 65,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1,
   "playerId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "name": "Art Muth",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 174,
   "totalPointsAgainst": 199,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -25,
   "ppg": 17.4,
   "leagueRank": 90,
   "rating": -2.5,
   "ratingGames": 10,
   "confidence": 59,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "name": "Hal Golden",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 114,
   "totalPointsAgainst": 143,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -29,
   "ppg": 16.3,
   "leagueRank": 107,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "name": "Derek Livingston",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 159,
   "totalPointsAgainst": 222,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -63,
   "ppg": 14.5,
   "leagueRank": 98,
   "rating": -1.1,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.2,
   "playerId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "name": "Bart Allgeier",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 75,
   "totalPointsAgainst": 81,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "236ac99f-3ad9-42b7-bb97-a2c238fbbf98",
   "winPct": 25,
   "diff": -6,
   "ppg": 18.8,
   "leagueRank": 92,
   "rating": -0.5,
   "ratingGames": 4,
   "confidence": 38,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Ron Skotarczak",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 131,
   "totalPointsAgainst": 158,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "034ca84d-576b-41d0-ba1c-103104b1be1f",
   "winPct": 25,
   "diff": -27,
   "ppg": 16.4,
   "leagueRank": 91,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 47,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "June Lee",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 93,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -10,
   "ppg": 18.6,
   "leagueRank": 88,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "c5098f72-b304-4552-b25b-8f4dec2709e0"
  },
  {
   "name": "Jennifer Qian",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 87,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -16,
   "ppg": 17.4,
   "leagueRank": 93,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "name": "Andrew Fleischer",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 67,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -36,
   "ppg": 13.4,
   "leagueRank": 111,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.3,
   "playerId": "d1b4ea08-869c-4a17-a8c3-e96b13dd8ec7"
  },
  {
   "name": "Stepan Nevshehirlian",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 152,
   "totalPointsAgainst": 224,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 18.2,
   "diff": -72,
   "ppg": 13.8,
   "leagueRank": 110,
   "rating": -1.6,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.3,
   "playerId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383"
  },
  {
   "name": "Savita Nandal",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 103,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -21,
   "ppg": 17.2,
   "leagueRank": 95,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "ce787b4f-30b9-4fd0-a12a-caba1f27ca68"
  },
  {
   "name": "Tom Kresky",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 96,
   "totalPointsAgainst": 121,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -25,
   "ppg": 16,
   "leagueRank": 99,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "name": "Jay Zeng",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 99,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -25,
   "ppg": 16.5,
   "leagueRank": 103,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "abc4de4c-a9af-4b75-8e57-5b7374af96c2"
  },
  {
   "name": "Anthony Wands",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 93,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "1762a9ad-6493-4407-a0ce-de2de697c313",
   "winPct": 16.7,
   "diff": -27,
   "ppg": 15.5,
   "leagueRank": 102,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Erik Lombardo",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 93,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -30,
   "ppg": 15.5,
   "leagueRank": 101,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.4,
   "playerId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "name": "Jill Scully",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 90,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -32,
   "ppg": 15,
   "leagueRank": 108,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.2,
   "playerId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "name": "Nancy Lin",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 80,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -44,
   "ppg": 13.3,
   "leagueRank": 114,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.4,
   "playerId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "name": "Quen Koon Ng",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 72,
   "totalPointsAgainst": 123,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -51,
   "ppg": 12,
   "leagueRank": 119,
   "rating": -2.3,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.6,
   "playerId": "6c655208-0558-4174-a618-7988d5783914"
  },
  {
   "name": "James Gross",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 58,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -66,
   "ppg": 9.7,
   "leagueRank": 126,
   "rating": -3.2,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 2.2,
   "playerId": "6b3f649d-2418-4136-b045-4795d55e643d"
  },
  {
   "name": "John Darrah",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 223,
   "totalPointsAgainst": 263,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 15.4,
   "diff": -40,
   "ppg": 17.2,
   "leagueRank": 94,
   "rating": 0.1,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.8,
   "playerId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84"
  },
  {
   "name": "Lily Liu",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 109,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -36,
   "ppg": 15.6,
   "leagueRank": 105,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.4,
   "playerId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "name": "Michael Finkelstein",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 139,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -27,
   "ppg": 17.4,
   "leagueRank": 96,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.3,
   "playerId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "name": "Wendy Zukerberg",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 127,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "f34665bd-6866-415f-a498-21d7f69fb895",
   "winPct": 12.5,
   "diff": -39,
   "ppg": 15.9,
   "leagueRank": 106,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Cynthia Covie",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 117,
   "totalPointsAgainst": 163,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -46,
   "ppg": 14.6,
   "leagueRank": 112,
   "rating": -1.3,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1,
   "playerId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "name": "Evelyn Du",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 1,
   "losses": 14,
   "pointsWon": 234,
   "totalPointsAgainst": 312,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 6.7,
   "diff": -78,
   "ppg": 15.6,
   "leagueRank": 113,
   "rating": -1.7,
   "ratingGames": 15,
   "confidence": 69,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1,
   "playerId": "08547f36-c938-4f82-a783-9c89ab07500c"
  },
  {
   "name": "Ronnie Yin",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 1,
   "losses": 14,
   "pointsWon": 220,
   "totalPointsAgainst": 313,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 6.7,
   "diff": -93,
   "ppg": 14.7,
   "leagueRank": 117,
   "rating": -3.3,
   "ratingGames": 15,
   "confidence": 69,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "name": "Erika Simone",
   "gender": "Female",
   "team": "Bounce Malvern Black",
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
   "leagueRank": 183,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "04f98aa6-f69e-462c-9a13-4060a3072922"
  },
  {
   "name": "John Pineda",
   "gender": "Male",
   "team": "Flemington Blue",
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
   "leagueRank": 173,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "name": "Wally Liu",
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
   "leagueRank": 162,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7"
  },
  {
   "name": "Coby Resnick",
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
   "leagueRank": 176,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158"
  },
  {
   "name": "Todd Mitchell",
   "gender": "Male",
   "team": "Pickleball Palace",
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
   "playerId": "164bf044-d118-4bee-8bd6-d0bad38b79ea"
  },
  {
   "name": "Liz Cuozzo",
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
   "leagueRank": 139,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2b2d474d-281c-42d7-854b-6bfe32f20563"
  },
  {
   "name": "Jill Lesnik",
   "gender": "Female",
   "team": "Pickleball Palace",
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
   "playerId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864"
  },
  {
   "name": "Alicia Maguire",
   "gender": "Female",
   "team": "Pickle Place",
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
   "leagueRank": 24,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "36927aca-827a-4408-ab82-9dc0d06e2c8d"
  },
  {
   "name": "Keith Goldberg",
   "gender": "Male",
   "team": "Bounce Malvern Black",
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
   "playerId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8"
  },
  {
   "name": "Brad Daddis",
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
   "leagueRank": 140,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3b22e073-2c4b-4245-a142-29441ec509a3"
  },
  {
   "name": "Steven Gregov",
   "gender": "Male",
   "team": "Flemington Blue",
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
   "playerId": "3efad314-83fb-4441-a7bf-510228cea1f8"
  },
  {
   "name": "Michael Dieterle",
   "gender": "Male",
   "team": "Bounce Malvern Black",
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
   "leagueRank": 145,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4259501c-f1e3-4859-acd0-c25f342a1b92"
  },
  {
   "name": "Natasha De Carvalho",
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
   "leagueRank": 142,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "name": "Cynthia Eisen",
   "gender": "Female",
   "team": "Pickle Place",
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
   "leagueRank": 146,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4c762958-33e1-4b41-8077-424cb639af7e"
  },
  {
   "name": "Jonathan Goldner",
   "gender": "Male",
   "team": "Pickle Place",
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
   "playerId": "5142be9e-adb4-4f40-8632-1f6daa6d824b"
  },
  {
   "name": "Leon Li",
   "gender": "Male",
   "team": "Stelton Sports",
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
   "playerId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "name": "Rosalyn Goldsmith",
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
   "leagueRank": 152,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "545c12c3-3098-47ca-b35e-429f37f481f5"
  },
  {
   "name": "Jingwei Wu",
   "gender": "Male",
   "team": "Bounce Malvern Black",
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
   "leagueRank": 194,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "name": "Eric Markowitz",
   "gender": "Male",
   "team": "Pickle Place",
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
   "leagueRank": 166,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948"
  },
  {
   "name": "Lance Brown",
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
   "leagueRank": 135,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "name": "Ryan Sherry",
   "gender": "Male",
   "team": "Pickleball Palace",
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
   "leagueRank": 182,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6d8254ae-6e00-4704-8c1e-936733eb9b09"
  },
  {
   "name": "Zemin Zeng",
   "gender": "Male",
   "team": "Stelton Sports",
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
   "leagueRank": 197,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6f2553e1-299a-407f-b919-41d4b3a84bae"
  },
  {
   "name": "Margaret Weidlich",
   "gender": "Female",
   "team": "Allstar Pickler",
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
   "leagueRank": 193,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "name": "Susan Debbs",
   "gender": "Female",
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
   "leagueRank": 143,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9"
  },
  {
   "name": "Jeff Lorman",
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
   "leagueRank": 164,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "name": "Jimmy Shapiro",
   "gender": "Male",
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
   "leagueRank": 181,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "name": "Bob Castellano",
   "gender": "Male",
   "team": "Flemington Green",
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
   "leagueRank": 138,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5"
  },
  {
   "name": "Stacy Garretson",
   "gender": "Female",
   "team": "Flemington Green",
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
   "playerId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2"
  },
  {
   "name": "Vicki Main",
   "gender": "Female",
   "team": "Bounce Malvern Black",
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
   "playerId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "name": "Meryl Nadler",
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
   "leagueRank": 169,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "name": "Todd Law",
   "gender": "Male",
   "team": "Pickle Place",
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
   "playerId": "9b0fe5d7-4586-4629-8408-928794ca1c3b"
  },
  {
   "name": "Kajal Sinkar",
   "gender": "Female",
   "team": "Allstar Pickler",
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
   "leagueRank": 185,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "name": "Todd Gasparre",
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
   "leagueRank": 149,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d"
  },
  {
   "name": "Jaime Padilla",
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
   "leagueRank": 171,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "aa73e326-7295-4153-8f57-b4903877923d"
  },
  {
   "name": "David Marchese",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
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
   "leagueRank": 97,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "name": "Ellen Xu",
   "gender": "Female",
   "team": "Stelton Sports",
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
   "leagueRank": 195,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b8ecc741-4ae9-4e26-b199-497d34dac2b9"
  },
  {
   "name": "Scott Rubin",
   "gender": "Male",
   "team": "Flemington Blue",
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
   "leagueRank": 180,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "name": "Alfonse Calato",
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
   "leagueRank": 136,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "name": "Christy Beale",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
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
   "leagueRank": 133,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d034daeb-3fd8-4273-80f5-3a272ceab674"
  },
  {
   "name": "Emily Abbott",
   "gender": "Female",
   "team": "Pickle Place",
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
   "leagueRank": 115,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d0a77087-5f1c-4d8c-841d-af39ac48dca3"
  },
  {
   "name": "Talen Singer",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
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
   "leagueRank": 184,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d4cdb8c8-9220-4aa7-b48a-41f9f30dff51"
  },
  {
   "name": "Tara Kramer",
   "gender": "Female",
   "team": "Flemington Green",
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
   "leagueRank": 158,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "name": "Sam Zhou",
   "gender": "Male",
   "team": "Stelton Sports",
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
   "playerId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "name": "Abraham Telechanski",
   "gender": "Male",
   "team": "Allstar Pickler",
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
   "leagueRank": 189,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "name": "Ceil Gomez",
   "gender": "Female",
   "team": "Flemington Blue",
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
   "playerId": "e1cb1b3c-8e14-423b-bf0f-5ad2dabd6a4c"
  },
  {
   "name": "Jeffrey Rubin",
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
   "leagueRank": 179,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e3a89681-1dac-4f6e-8982-2245996406e6"
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "Flemington Green",
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
   "leagueRank": 137,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Marykristin Haskell",
   "gender": "Female",
   "team": "Pickle Place",
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
   "playerId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "name": "Dana Sun",
   "gender": "Female",
   "team": "Flemington Blue",
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
   "leagueRank": 186,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f0ced78a-591c-415f-9839-a538a6cb0d2c"
  },
  {
   "name": "Amanda Quinn",
   "gender": "Female",
   "team": "Pickleball Palace",
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
   "leagueRank": 174,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "name": "Paul Rappoport",
   "gender": "Male",
   "team": "Allstar Pickler",
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
   "leagueRank": 175,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f2258c77-73cb-49de-991e-ed0cc4f3f9e2"
  },
  {
   "name": "Shaoyi Sun",
   "gender": "Female",
   "team": "Stelton Sports",
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
   "leagueRank": 187,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "name": "Linda Zhu",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
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
   "leagueRank": 58,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "name": "Jeffrey Susskind",
   "gender": "Male",
   "team": "Pickleball Palace",
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
   "leagueRank": 188,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fd8d97f4-ff3e-46e2-aa8f-e5408a6a9e9c"
  },
  {
   "name": "Ping Yang",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 89,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -16,
   "ppg": 17.8,
   "leagueRank": 109,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "a1b13a29-05c7-4582-9227-22a7bcb0e713"
  },
  {
   "name": "Jieping Wang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
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
   "playerId": "c9088878-9755-4e32-abed-4a4e5a42f9a8",
   "winPct": 0,
   "diff": -26,
   "ppg": 14.5,
   "leagueRank": 131,
   "rating": -2,
   "ratingGames": 4,
   "confidence": 37,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Derek Le",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 128,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 0,
   "diff": -40,
   "ppg": 16,
   "leagueRank": 116,
   "rating": -1.5,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.4,
   "playerId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "name": "Amy Maussner",
   "gender": "Female",
   "team": "APC Garden State",
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
   "clutchLosses": 0,
   "playerId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3",
   "winPct": 0,
   "diff": -43,
   "ppg": 13.8,
   "leagueRank": 122,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Jiyun Yuh",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
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
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -44,
   "ppg": 15.5,
   "leagueRank": 118,
   "rating": -1.4,
   "ratingGames": 8,
   "confidence": 50,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1,
   "playerId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "name": "Steve Hong",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 59,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -46,
   "ppg": 11.8,
   "leagueRank": 129,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 2.4,
   "playerId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "name": "Sal Frangipane",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 100,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -47,
   "ppg": 14.3,
   "leagueRank": 120,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.9,
   "playerId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a"
  },
  {
   "name": "Lisa Loeber",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
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
   "clutchLosses": 0,
   "playerId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd",
   "winPct": 0,
   "diff": -47,
   "ppg": 13.2,
   "leagueRank": 128,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Kerry Gray-Style",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 96,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -51,
   "ppg": 13.7,
   "leagueRank": 124,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 1.7,
   "playerId": "5d2f1c91-647e-4f06-bd5e-ad6550674ce4"
  },
  {
   "name": "Chris Norton",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 74,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -52,
   "ppg": 12.3,
   "leagueRank": 100,
   "rating": -3.9,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.1,
   "playerId": "395868e3-8573-41ad-9b13-84b6a7bf7f35"
  },
  {
   "name": "Hayley Yandoli",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 93,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -54,
   "ppg": 13.3,
   "leagueRank": 125,
   "rating": -1.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.7,
   "playerId": "1fc2dd51-135b-46d6-91ef-9291b573e78a"
  },
  {
   "name": "John Ficarra",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 64,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -62,
   "ppg": 10.7,
   "leagueRank": 132,
   "rating": -3,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.7,
   "playerId": "b1a0876c-0702-497d-95a4-5a8a894ff2d5"
  },
  {
   "name": "Steve Gerwer",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 82,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -65,
   "ppg": 11.7,
   "leagueRank": 130,
   "rating": -2.8,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 2,
   "playerId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
  },
  {
   "name": "Tim Bruno",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 181,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -92,
   "ppg": 13.9,
   "leagueRank": 123,
   "rating": -2.2,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.3,
   "playerId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "name": "Laura Sweet",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 0,
   "losses": 15,
   "pointsWon": 211,
   "totalPointsAgainst": 315,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -104,
   "ppg": 14.1,
   "leagueRank": 121,
   "rating": -2.4,
   "ratingGames": 15,
   "confidence": 69,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.2,
   "playerId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "name": "Kelly Dalsey",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 0,
   "losses": 14,
   "pointsWon": 185,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -109,
   "ppg": 13.2,
   "leagueRank": 127,
   "rating": -3.1,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.1,
   "playerId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6"
  }
 ],
 "teams": [
  {
   "name": "Pickle Place",
   "w": 1,
   "l": 0,
   "pf": 668,
   "pa": 493,
   "gw": 29,
   "gl": 3,
   "diff": 175,
   "gameDiff": 26,
   "power": 0.9,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     15,
     1
    ],
    "male": [
     6,
     2
    ],
    "female": [
     8,
     0
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 1,
   "l": 0,
   "pf": 673,
   "pa": 437,
   "gw": 28,
   "gl": 4,
   "diff": 236,
   "gameDiff": 24,
   "power": 1.7,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     14,
     2
    ],
    "male": [
     8,
     0
    ],
    "female": [
     6,
     2
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 1,
   "l": 0,
   "pf": 654,
   "pa": 523,
   "gw": 27,
   "gl": 5,
   "diff": 131,
   "gameDiff": 22,
   "power": 0.9,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     12,
     4
    ],
    "male": [
     7,
     1
    ],
    "female": [
     8,
     0
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 2,
   "l": 0,
   "pf": 1321,
   "pa": 1013,
   "gw": 51,
   "gl": 13,
   "diff": 308,
   "gameDiff": 38,
   "power": 1.3,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     25,
     7
    ],
    "male": [
     14,
     2
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "Flemington Blue",
   "w": 2,
   "l": 0,
   "pf": 1109,
   "pa": 1021,
   "gw": 44,
   "gl": 20,
   "diff": 88,
   "gameDiff": 24,
   "power": 0.2,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
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
     15,
     1
    ]
   }
  },
  {
   "name": "Flemington Green",
   "w": 1,
   "l": 0,
   "pf": 644,
   "pa": 585,
   "gw": 19,
   "gl": 13,
   "diff": 59,
   "gameDiff": 6,
   "power": 0.5,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     9,
     7
    ],
    "male": [
     6,
     2
    ],
    "female": [
     4,
     4
    ]
   }
  },
  {
   "name": "Bounce Malvern Boom",
   "w": 0,
   "l": 1,
   "pf": 585,
   "pa": 644,
   "gw": 13,
   "gl": 19,
   "diff": -59,
   "gameDiff": -6,
   "power": -0.3,
   "powerRank": 8,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     7,
     9
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
   "name": "Stelton Sports",
   "w": 0,
   "l": 1,
   "pf": 595,
   "pa": 626,
   "gw": 12,
   "gl": 20,
   "diff": -31,
   "gameDiff": -8,
   "power": -0.3,
   "powerRank": 9,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     8,
     8
    ],
    "male": [
     3,
     5
    ],
    "female": [
     1,
     7
    ]
   }
  },
  {
   "name": "Bounce Malvern Black",
   "w": 0,
   "l": 1,
   "pf": 582,
   "pa": 656,
   "gw": 11,
   "gl": 21,
   "diff": -74,
   "gameDiff": -10,
   "power": 0,
   "powerRank": 7,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     7,
     9
    ],
    "male": [
     0,
     8
    ],
    "female": [
     4,
     4
    ]
   }
  },
  {
   "name": "Allstar Pickler",
   "w": 0,
   "l": 2,
   "pf": 949,
   "pa": 1137,
   "gw": 13,
   "gl": 51,
   "diff": -188,
   "gameDiff": -38,
   "power": -0.8,
   "powerRank": 10,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     7,
     25
    ],
    "male": [
     6,
     10
    ],
    "female": [
     0,
     16
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 0,
   "l": 1,
   "pf": 437,
   "pa": 673,
   "gw": 4,
   "gl": 28,
   "diff": -236,
   "gameDiff": -24,
   "power": -1.5,
   "powerRank": 11,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
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
     2,
     6
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 0,
   "l": 2,
   "pf": 924,
   "pa": 1333,
   "gw": 5,
   "gl": 59,
   "diff": -409,
   "gameDiff": -54,
   "power": -1.7,
   "powerRank": 12,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     1,
     31
    ],
    "male": [
     4,
     12
    ],
    "female": [
     0,
     16
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Susan Ackley",
   "b": "Tom Maley",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 6.3,
   "avgExpected": 2.6,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "a": "Kelly Dalsey",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 1.2,
   "avgActual": -5,
   "avgExpected": -7.8,
   "aId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Marc Harden",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 9,
   "avgExpected": 6.8,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Jorge Diaz",
   "b": "Amy Johnson",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 2.7,
   "avgExpected": 0.3,
   "aId": "5384ac1d-574b-4fe8-9360-010e903e9ec0",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Evelyn Du",
   "b": "Ronnie Yin",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -6.7,
   "avgExpected": -7.9,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Marc Harden",
   "b": "Sandy Alkins",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 6,
   "avgExpected": 5.1,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "John Darrah",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -4,
   "avgExpected": -3.8,
   "aId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Kate Siedell",
   "b": "Sandy Alkins",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3,
   "avgExpected": 3.3,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Marc Friedman",
   "b": "Tom Maley",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.7,
   "aId": "d7bdde76-1007-4b20-a804-4efcd08c3598",
   "bId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "a": "Susan Ackley",
   "b": "Amy Johnson",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 0.7,
   "avgExpected": 2.7,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Jorge Diaz",
   "b": "Art Muth",
   "team": "Flemington Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -5,
   "avgExpected": -2.7,
   "aId": "5384ac1d-574b-4fe8-9360-010e903e9ec0",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Robert Finley",
   "b": "Patricia Boyle",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 0.3,
   "avgExpected": 3.2,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "a": "Liangjie Zhu",
   "b": "Ronnie Yin",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -9,
   "avgExpected": -4.7,
   "aId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Flemington Blue",
   "away": "Allstar Pickler",
   "time": "2026-08-22T12:00:00",
   "complete": true,
   "homePoints": 483,
   "awayPoints": 426,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Tom Maley"
     ],
     "a": [
      "Evelyn Du",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chaoxia Cheng",
      "Marc Friedman"
     ],
     "a": [
      "Ronnie Yin",
      "Sachin Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amy Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Savita Nandal",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "",
      "Bart Allgeier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Susan Ackley",
      "Chaoxia Cheng"
     ],
     "a": [
      "Evelyn Du",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Savita Nandal",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Marc Friedman",
      "Tom Maley"
     ],
     "a": [
      "Liangjie Zhu",
      "Sachin Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Brandt",
      "Art Muth"
     ],
     "a": [
      "Bart Allgeier",
      "John Zhong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Marc Friedman"
     ],
     "a": [
      "Evelyn Du",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chaoxia Cheng",
      "Tom Maley"
     ],
     "a": [
      "Ronnie Yin",
      "Sachin Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amy Johnson",
      "Bill Brandt"
     ],
     "a": [
      "Savita Nandal",
      "Bart Allgeier"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "",
      "Brandon Fulford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chaoxia Cheng",
      "Susan Ackley"
     ],
     "a": [
      "Evelyn Du",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Savita Nandal",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bill Brandt",
      "Art Muth"
     ],
     "a": [
      "Liangjie Zhu",
      "John Zhong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jorge Diaz",
      "Marc Friedman"
     ],
     "a": [
      "Sachin Pathare",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Ackley",
      "Tom Maley"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Chaoxia Cheng",
      "Marc Friedman"
     ],
     "a": [
      "Evelyn Du",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Amy Johnson",
      "Bill Brandt"
     ],
     "a": [
      "Savita Nandal",
      "Sachin Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "",
      "Bart Allgeier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Ackley",
      "Amy Johnson"
     ],
     "a": [
      "Evelyn Du",
      "Savita Nandal"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Chaoxia Cheng"
     ],
     "a": [
      "Ronnie Yin",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tom Maley",
      "Jorge Diaz"
     ],
     "a": [
      "Liangjie Zhu",
      "Sachin Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bill Brandt",
      "Marc Friedman"
     ],
     "a": [
      "Brandon Fulford",
      "Bart Allgeier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Ackley",
      "Bill Brandt"
     ],
     "a": [
      "Savita Nandal",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chaoxia Cheng",
      "Tom Maley"
     ],
     "a": [
      "Evelyn Du",
      "Sachin Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Art Muth"
     ],
     "a": [
      "Ronnie Yin",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "",
      "Bart Allgeier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Ackley",
      "Sue Johnson"
     ],
     "a": [
      "Savita Nandal",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Amy Johnson",
      "Chaoxia Cheng"
     ],
     "a": [
      "Evelyn Du",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jorge Diaz",
      "Art Muth"
     ],
     "a": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tom Maley",
      "Marc Friedman"
     ],
     "a": [
      "Bart Allgeier",
      "John Zhong"
     ]
    }
   ],
   "subs": [
    "Sachin Pathare",
    "Bart Allgeier",
    "Bill Brandt"
   ]
  },
  {
   "result": null,
   "week": 1,
   "home": "Premiere",
   "away": "Pickleball Palace",
   "time": "2026-08-22T12:00:00",
   "complete": false
  },
  {
   "result": "away",
   "week": 1,
   "home": "Bounce Malvern Boom",
   "away": "Flemington Green",
   "time": "2026-08-22T14:00:00",
   "complete": true,
   "homePoints": 585,
   "awayPoints": 644,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lindsay Duphily",
      "Chris Norton"
     ],
     "a": [
      "Katrina Mcintyre",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Cindy Hu",
      "Sandro Stefanelli"
     ],
     "a": [
      "Denise Richmond",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Jiang Jin"
     ],
     "a": [
      "Christine Papa",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Dugan",
      "Hal Golden"
     ],
     "a": [
      "Kristen Soucie",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Jamila Sefiane"
     ],
     "a": [
      "Katrina Mcintyre",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lindsay Duphily",
      "Christine Dugan"
     ],
     "a": [
      "Christine Papa",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hal Golden",
      "Jiang Jin"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandro Stefanelli",
      "Brett Kleger"
     ],
     "a": [
      "Craig Batten",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Cindy Hu",
      "Hal Golden"
     ],
     "a": [
      "Katrina Mcintyre",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsay Duphily",
      "Brett Kleger"
     ],
     "a": [
      "Christine Papa",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Chris Norton"
     ],
     "a": [
      "Kristen Soucie",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Denise Richmond",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cindy Hu",
      "Sandra Thompson"
     ],
     "a": [
      "Katrina Mcintyre",
      "Kristen Soucie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsay Duphily",
      "Jamila Sefiane"
     ],
     "a": [
      "Christine Papa",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Hal Golden",
      "Sandro Stefanelli"
     ],
     "a": [
      "Craig Batten",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jiang Jin",
      "Chris Norton"
     ],
     "a": [
      "Richard Demeuse",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Hal Golden"
     ],
     "a": [
      "Denise Richmond",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sandra Thompson",
      "Brett Kleger"
     ],
     "a": [
      "Kristen Soucie",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ],
     "a": [
      "Katrina Mcintyre",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cindy Hu",
      "Jiang Jin"
     ],
     "a": [
      "Christine Papa",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Sandra Thompson"
     ],
     "a": [
      "Katrina Mcintyre",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Lindsay Duphily",
      "Cindy Hu"
     ],
     "a": [
      "Denise Richmond",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Hal Golden",
      "Chris Norton"
     ],
     "a": [
      "David Osborne",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jiang Jin",
      "Brett Kleger"
     ],
     "a": [
      "Craig Batten",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sandra Thompson",
      "Sandro Stefanelli"
     ],
     "a": [
      "Denise Richmond",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lindsay Duphily",
      "Jiang Jin"
     ],
     "a": [
      "Katrina Mcintyre",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cindy Hu",
      "Brett Kleger"
     ],
     "a": [
      "Kristen Soucie",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Chris Norton"
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsay Duphily",
      "Cindy Hu"
     ],
     "a": [
      "Christine Papa",
      "Kristen Soucie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Jamila Sefiane"
     ],
     "a": [
      "Katrina Mcintyre",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Chris Norton",
      "Sandro Stefanelli"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hal Golden",
      "Brett Kleger"
     ],
     "a": [
      "Richard Demeuse",
      "David Mcintyre"
     ]
    }
   ],
   "subs": [
    "David Mcintyre"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickle Place",
   "away": "APC Garden State",
   "time": "2026-08-22T14:00:00",
   "complete": true,
   "homePoints": 668,
   "awayPoints": 493,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gina Pultorak",
      "Jay Rohatgi"
     ],
     "a": [
      "Cynthia Covie",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Karen Moliver",
      "Tom Zentmeyer"
     ],
     "a": [
      "Kelly Dalsey",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Janet Garrity",
      "Robert Block"
     ],
     "a": [
      "Jiyun Yuh",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jane Meng",
      "Guy Judkowski"
     ],
     "a": [
      "Laura Sweet",
      "Tom Kresky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Janine Forrest",
      "Karen Moliver"
     ],
     "a": [
      "Kelly Dalsey",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jane Meng",
      "Gina Pultorak"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robert Block",
      "Thomas Ross"
     ],
     "a": [
      "John Darrah",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "Tim Bruno",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Guy Judkowski"
     ],
     "a": [
      "Cynthia Covie",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janine Forrest",
      "Robert Block"
     ],
     "a": [
      "Kelly Dalsey",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jane Meng",
      "Thomas Ross"
     ],
     "a": [
      "Jiyun Yuh",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gina Pultorak",
      "Tom Zentmeyer"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Janine Forrest",
      "Karen Moliver"
     ],
     "a": [
      "Cynthia Covie",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gina Pultorak",
      "Janet Garrity"
     ],
     "a": [
      "Kelly Dalsey",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "Derek Livingston",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Guy Judkowski",
      "Jay Rohatgi"
     ],
     "a": [
      "John Darrah",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karen Moliver",
      "Guy Judkowski"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Janine Forrest",
      "Jay Rohatgi"
     ],
     "a": [
      "Jiyun Yuh",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jane Meng",
      "Robert Block"
     ],
     "a": [
      "Cynthia Covie",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gina Pultorak",
      "Thomas Ross"
     ],
     "a": [
      "Kelly Dalsey",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janine Forrest",
      "Jane Meng"
     ],
     "a": [
      "Laura Sweet",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janet Garrity",
      "Karen Moliver"
     ],
     "a": [
      "Cynthia Covie",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jay Rohatgi",
      "Robert Block"
     ],
     "a": [
      "Tim Bruno",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Guy Judkowski",
      "Tom Zentmeyer"
     ],
     "a": [
      "Derek Livingston",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jane Meng",
      "Jay Rohatgi"
     ],
     "a": [
      "Laura Sweet",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karen Moliver",
      "Tom Zentmeyer"
     ],
     "a": [
      "Cynthia Covie",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janet Garrity",
      "Thomas Ross"
     ],
     "a": [
      "Jiyun Yuh",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gina Pultorak",
      "Robert Block"
     ],
     "a": [
      "Kelly Dalsey",
      "Tom Kresky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gina Pultorak",
      "Karen Moliver"
     ],
     "a": [
      "Laura Sweet",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jane Meng",
      "Janet Garrity"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Guy Judkowski",
      "Thomas Ross"
     ],
     "a": [
      "Derek Livingston",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "Stepan Nevshehirlian",
      "John Darrah"
     ]
    }
   ],
   "subs": [
    "Gina Pultorak",
    "Karen Moliver"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "ACE Moorestown",
   "away": "Bounce Malvern Black",
   "time": "2026-08-22T14:00:00",
   "complete": true,
   "homePoints": 656,
   "awayPoints": 582,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kate Siedell",
      "Brian Rowan"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Tera Baccile",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stacey Frank",
      "Jonathan Brand"
     ],
     "a": [
      "Katherine Maruyama",
      "John Morabito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patricia Boyle",
      "Robert Finley"
     ],
     "a": [
      "Jill Scully",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Tera Baccile",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Boyle",
      "Stacey Frank"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brian Rowan",
      "Jonathan Brand"
     ],
     "a": [
      "Michael Finkelstein",
      "John Morabito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sandy Alkins",
      "Jonathan Brand"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Patricia Boyle",
      "Robert Finley"
     ],
     "a": [
      "Tera Baccile",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stacey Frank",
      "Brian Rowan"
     ],
     "a": [
      "Harriet Levin",
      "John Morabito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Patricia Boyle",
      "Stacey Frank"
     ],
     "a": [
      "Jill Scully",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sandy Alkins",
      "Kate Siedell"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marc Harden",
      "Brian Rowan"
     ],
     "a": [
      "Derek Le",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Brand",
      "Robert Finley"
     ],
     "a": [
      "John Morabito",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patricia Boyle",
      "Brian Rowan"
     ],
     "a": [
      "Tera Baccile",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Jonathan Brand"
     ],
     "a": [
      "Katherine Maruyama",
      "John Morabito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Robert Finley"
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Jill Scully",
      "Derek Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Kate Siedell"
     ],
     "a": [
      "Tera Baccile",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patricia Boyle",
      "Sandy Alkins"
     ],
     "a": [
      "Katherine Maruyama",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Brand",
      "Marc Harden"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robert Finley",
      "Brian Rowan"
     ],
     "a": [
      "John Morabito",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sandy Alkins",
      "Brian Rowan"
     ],
     "a": [
      "Harriet Levin",
      "John Morabito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stacey Frank",
      "Robert Finley"
     ],
     "a": [
      "Tera Baccile",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Boyle",
      "Jonathan Brand"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Patricia Boyle",
      "Sandy Alkins"
     ],
     "a": [
      "Tera Baccile",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacey Frank",
      "Kate Siedell"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brian Rowan",
      "Marc Harden"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jonathan Brand",
      "Robert Finley"
     ],
     "a": [
      "Derek Le",
      "John Morabito"
     ]
    }
   ],
   "subs": [
    "Brian Rowan"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Premiere",
   "away": "Jersey Pickleball Club",
   "time": "2026-08-29T10:00:00",
   "complete": true,
   "homePoints": 437,
   "awayPoints": 673,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "John Ficarra"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lily Liu",
      "Steve Gerwer"
     ],
     "a": [
      "Sarah Nazario",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tara Lombardo",
      "James Gross"
     ],
     "a": [
      "Eva Danieli",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Sal Frangipane"
     ],
     "a": [
      "Amy Chrebet",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Tara Lombardo"
     ],
     "a": [
      "Alice Napolitano",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "Eva Danieli",
      "Sarah Nazario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Steve Gerwer",
      "Sal Frangipane"
     ],
     "a": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "James Gross",
      "Erik Lombardo"
     ],
     "a": [
      "Yi Gu",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Steve Gerwer"
     ],
     "a": [
      "Alice Napolitano",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lily Liu",
      "Sal Frangipane"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Lin",
      "John Ficarra"
     ],
     "a": [
      "Eva Danieli",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Erik Lombardo"
     ],
     "a": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tara Lombardo",
      "Quen Koon Ng"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "Amy Chrebet",
      "Sarah Nazario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "James Gross",
      "John Ficarra"
     ],
     "a": [
      "Michael Swell",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sal Frangipane",
      "Erik Lombardo"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Steve Gerwer"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "James Gross"
     ],
     "a": [
      "Sarah Nazario",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Eva Danieli",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lily Liu",
      "John Ficarra"
     ],
     "a": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lily Liu",
      "Tara Lombardo"
     ],
     "a": [
      "Alice Napolitano",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Quen Koon Ng"
     ],
     "a": [
      "Eva Danieli",
      "Sarah Nazario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Steve Gerwer",
      "John Ficarra"
     ],
     "a": [
      "Yi Gu",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "James Gross"
     ],
     "a": [
      "Darren Saks",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "James Gross"
     ],
     "a": [
      "Alice Napolitano",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Sal Frangipane"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Steve Gerwer"
     ],
     "a": [
      "Eva Danieli",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "a": [
      "Amy Chrebet",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lily Liu",
      "Hayley Yandoli"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Amy Chrebet",
      "Sarah Nazario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "John Ficarra"
     ],
     "a": [
      "Yi Gu",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steve Gerwer",
      "Erik Lombardo"
     ],
     "a": [
      "Darren Saks",
      "Michael Dombrowiecki"
     ]
    }
   ],
   "subs": [
    "Sarah Nazario",
    "Michael Dombrowiecki"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Palace",
   "away": "Allstar Pickler",
   "time": "2026-08-29T12:00:00",
   "complete": true,
   "homePoints": 654,
   "awayPoints": 523,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rebecca Lederman",
      "Alex Lee"
     ],
     "a": [
      "Evelyn Du",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Picky Vorabouth",
      "Anthony Wands"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Wendy Zukerberg",
      "Jieping Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Shauna Muller",
      "Daniel Chernin"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Hanson Word",
      "Shauna Muller"
     ],
     "a": [
      "Picky Vorabouth",
      "Wendy Zukerberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ],
     "a": [
      "Ronnie Yin",
      "Evelyn Du"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bud Heller",
      "Brian Gonzalez"
     ],
     "a": [
      "Jieping Wang",
      "Anthony Wands"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Daniel Chernin",
      "Alex Lee"
     ],
     "a": [
      "Liangjie Zhu",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
     ],
     "a": [
      "Evelyn Du",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rebecca Lederman",
      "Brian Gonzalez"
     ],
     "a": [
      "Picky Vorabouth",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Hanson Word",
      "Emil Pescatore"
     ],
     "a": [
      "Wendy Zukerberg",
      "Anthony Wands"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Karan Pescatore",
      "Alex Lee"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Hanson Word",
      "Rebecca Lederman"
     ],
     "a": [
      "Picky Vorabouth",
      "Wendy Zukerberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shauna Muller",
      "Karan Pescatore"
     ],
     "a": [
      "Ronnie Yin",
      "Evelyn Du"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Chernin",
      "Emil Pescatore"
     ],
     "a": [
      "Ron Skotarczak",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bud Heller",
      "Brian Gonzalez"
     ],
     "a": [
      "Liangjie Zhu",
      "Jieping Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kelly Hanson Word",
      "Daniel Chernin"
     ],
     "a": [
      "Wendy Zukerberg",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shauna Muller",
      "Alex Lee"
     ],
     "a": [
      "Picky Vorabouth",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rebecca Lederman",
      "Bud Heller"
     ],
     "a": [
      "Evelyn Du",
      "Anthony Wands"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Emil Pescatore"
     ],
     "a": [
      "Ronnie Yin",
      "Brandon Fulford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shauna Muller",
      "Rebecca Lederman"
     ],
     "a": [
      "Wendy Zukerberg",
      "Evelyn Du"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelly Hanson Word",
      "Karan Pescatore"
     ],
     "a": [
      "Ronnie Yin",
      "Picky Vorabouth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Lee",
      "Bud Heller"
     ],
     "a": [
      "Ron Skotarczak",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brian Gonzalez",
      "Emil Pescatore"
     ],
     "a": [
      "Jieping Wang",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kelly Hanson Word",
      "Alex Lee"
     ],
     "a": [
      "Picky Vorabouth",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shauna Muller",
      "Bud Heller"
     ],
     "a": [
      "Wendy Zukerberg",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Karan Pescatore",
      "Brian Gonzalez"
     ],
     "a": [
      "Evelyn Du",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
     ],
     "a": [
      "Ronnie Yin",
      "Anthony Wands"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karan Pescatore",
      "Kelly Hanson Word"
     ],
     "a": [
      "Picky Vorabouth",
      "Evelyn Du"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Rebecca Lederman"
     ],
     "a": [
      "Ronnie Yin",
      "Wendy Zukerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Daniel Chernin",
      "Alex Lee"
     ],
     "a": [
      "Ron Skotarczak",
      "Anthony Wands"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brian Gonzalez",
      "Emil Pescatore"
     ],
     "a": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ]
    }
   ],
   "subs": [
    "Ron Skotarczak",
    "Wendy Zukerberg",
    "Picky Vorabouth",
    "Jieping Wang",
    "Anthony Wands"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Flemington Blue",
   "away": "Stelton Sports",
   "time": "2026-08-29T12:00:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 595,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Simon Perry"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Tom Maley"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Roseann Catania",
      "Marc Friedman"
     ],
     "a": [
      "Rui Zhang",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Ann Betterton",
      "Jay Zeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "June Lee",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Simon Perry",
      "Tom Maley"
     ],
     "a": [
      "Jay Zeng",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Friedman",
      "Jorge Diaz"
     ],
     "a": [
      "Lei Dong",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan Ackley",
      "Simon Perry"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Roseann Catania",
      "Marc Friedman"
     ],
     "a": [
      "Mei Li",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Ping Yang",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Rui Zhang",
      "June Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Roseann Catania",
      "Sue Johnson"
     ],
     "a": [
      "Mei Li",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Simon Perry",
      "Tom Maley"
     ],
     "a": [
      "Jay Zeng",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Art Muth",
      "Marc Friedman"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Ackley",
      "Tom Maley"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carol Mastroianni",
      "Simon Perry"
     ],
     "a": [
      "Mei Li",
      "Jay Zeng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Marc Friedman"
     ],
     "a": [
      "Ann Betterton",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Amy Johnson"
     ],
     "a": [
      "June Lee",
      "Jennifer Qian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Roseann Catania",
      "Carol Mastroianni"
     ],
     "a": [
      "Rui Zhang",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tom Maley",
      "Marc Friedman"
     ],
     "a": [
      "Jay Zeng",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Art Muth",
      "Jorge Diaz"
     ],
     "a": [
      "Jim Peng",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Carol Mastroianni",
      "Simon Perry"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Tom Maley"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Ping Yang",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Roseann Catania",
      "Art Muth"
     ],
     "a": [
      "June Lee",
      "Jay Zeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Amy Johnson"
     ],
     "a": [
      "June Lee",
      "Ping Yang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Roseann Catania",
      "Carol Mastroianni"
     ],
     "a": [
      "Jennifer Qian",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Simon Perry",
      "Marc Friedman"
     ],
     "a": [
      "Jim Peng",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Art Muth",
      "Jorge Diaz"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    }
   ],
   "subs": [
    "Simon Perry",
    "Roseann Catania"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickle Place",
   "away": "Bounce Malvern Boom",
   "time": "2026-08-29T14:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 639,
   "awayPoints": 612,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jane Meng",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jamila Sefiane",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Guy Judkowski"
     ],
     "a": [
      "Christine Dugan",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alicia Maguire",
      "Jay Rohatgi"
     ],
     "a": [
      "Lindsay Duphily",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janine Forrest",
      "Robert Block"
     ],
     "a": [
      "Sandra Thompson",
      "Jiang Jin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alicia Maguire",
      "Janine Forrest"
     ],
     "a": [
      "Lindsay Duphily",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jane Meng",
      "Janet Garrity"
     ],
     "a": [
      "Sandra Thompson",
      "Linda Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "David Marchese",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jay Rohatgi",
      "Robert Block"
     ],
     "a": [
      "Sandro Stefanelli",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janet Garrity",
      "Guy Judkowski"
     ],
     "a": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Janine Forrest",
      "Tom Zentmeyer"
     ],
     "a": [
      "Christine Dugan",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jane Meng",
      "Thomas Ross"
     ],
     "a": [
      "Lindsay Duphily",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Robert Block"
     ],
     "a": [
      "Linda Zhu",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jane Meng",
      "Janine Forrest"
     ],
     "a": [
      "Linda Zhu",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alicia Maguire",
      "Emily Abbott"
     ],
     "a": [
      "Sandra Thompson",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Guy Judkowski",
      "Thomas Ross"
     ],
     "a": [
      "Jiang Jin",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "Chris Norton",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janet Garrity",
      "Robert Block"
     ],
     "a": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jane Meng",
      "Jay Rohatgi"
     ],
     "a": [
      "Lindsay Duphily",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Janine Forrest",
      "Thomas Ross"
     ],
     "a": [
      "Linda Zhu",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alicia Maguire",
      "Guy Judkowski"
     ],
     "a": [
      "Sandra Thompson",
      "David Marchese"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alicia Maguire",
      "Janet Garrity"
     ],
     "a": [
      "Sandra Thompson",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Janine Forrest"
     ],
     "a": [
      "Lindsay Duphily",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "Chris Norton",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Guy Judkowski",
      "Robert Block"
     ],
     "a": [
      "Sandro Stefanelli",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jamila Sefiane",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alicia Maguire",
      "Thomas Ross"
     ],
     "a": [
      "Christine Dugan",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Emily Abbott",
      "Jay Rohatgi"
     ],
     "a": [
      "Linda Zhu",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Jane Meng",
      "Robert Block"
     ],
     "a": [
      "Sandra Thompson",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Janet Garrity"
     ],
     "a": [
      "Lindsay Duphily",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alicia Maguire",
      "Jane Meng"
     ],
     "a": [
      "Christine Dugan",
      "Linda Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Guy Judkowski",
      "Jay Rohatgi"
     ],
     "a": [
      "Jiang Jin",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "Sandro Stefanelli",
      "Chris Norton"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "ACE Moorestown",
   "away": "APC Garden State",
   "time": "2026-08-29T14:00:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 431,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Boyle",
      "Christopher Boyle"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kate Siedell",
      "Marc Pellicane"
     ],
     "a": [
      "Kelly Dalsey",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Kerry Gray-Style",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Amy Maussner",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Patricia Boyle"
     ],
     "a": [
      "Laura Sweet",
      "Kerry Gray-Style"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pam Boyd",
      "Sandy Alkins"
     ],
     "a": [
      "Lisa Loeber",
      "Amy Maussner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christopher Boyle",
      "Marc Pellicane"
     ],
     "a": [
      "John Darrah",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Steve Hong",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Lisa Loeber",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patricia Boyle",
      "Robert Finley"
     ],
     "a": [
      "Kerry Gray-Style",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Christopher Boyle"
     ],
     "a": [
      "Kelly Dalsey",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sandy Alkins",
      "Marc Pellicane"
     ],
     "a": [
      "Laura Sweet",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Laura Sweet",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patricia Boyle",
      "Pam Boyd"
     ],
     "a": [
      "Amy Maussner",
      "Kerry Gray-Style"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Harden",
      "Marc Pellicane"
     ],
     "a": [
      "Tim Bruno",
      "Steve Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robert Finley",
      "Christopher Boyle"
     ],
     "a": [
      "Andrew Fleischer",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Boyle",
      "Christopher Boyle"
     ],
     "a": [
      "Kelly Dalsey",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sandy Alkins",
      "Marc Pellicane"
     ],
     "a": [
      "Lisa Loeber",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Amy Maussner",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Laura Sweet",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Siedell",
      "Patricia Boyle"
     ],
     "a": [
      "Kerry Gray-Style",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pam Boyd",
      "Sandy Alkins"
     ],
     "a": [
      "Lisa Loeber",
      "Amy Maussner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christopher Boyle",
      "Robert Finley"
     ],
     "a": [
      "John Darrah",
      "Derek Livingston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marc Pellicane",
      "Marc Harden"
     ],
     "a": [
      "Stepan Nevshehirlian",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kate Siedell",
      "Christopher Boyle"
     ],
     "a": [
      "Laura Sweet",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pam Boyd",
      "Marc Harden"
     ],
     "a": [
      "Kerry Gray-Style",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patricia Boyle",
      "Marc Pellicane"
     ],
     "a": [
      "Amy Maussner",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sandy Alkins",
      "Robert Finley"
     ],
     "a": [
      "Lisa Loeber",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Laura Sweet",
      "Lisa Loeber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pam Boyd",
      "Patricia Boyle"
     ],
     "a": [
      "Kelly Dalsey",
      "Kerry Gray-Style"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Harden",
      "Christopher Boyle"
     ],
     "a": [
      "Stepan Nevshehirlian",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robert Finley",
      "Marc Pellicane"
     ],
     "a": [
      "Derek Livingston",
      "Steve Hong"
     ]
    }
   ],
   "subs": [
    "Lisa Loeber",
    "Amy Maussner",
    "Christopher Boyle",
    "Marc Pellicane"
   ]
  },
  {
   "result": null,
   "week": 2,
   "home": "Bounce Malvern Black",
   "away": "Flemington Green",
   "time": "2026-08-30T14:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Tera Baccile",
      "Jingwei Wu"
     ],
     "a": [
      "Aimee Castellano",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ],
     "a": [
      "Denise Richmond",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Stacy Garretson",
      "Gary Garretson"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Tara Kramer",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "h": [
      "Katherine Maruyama",
      "Tera Baccile"
     ],
     "a": [
      "Aimee Castellano",
      "Stacy Garretson"
     ]
    },
    {
     "t": "female",
     "h": [
      "Stephanie Woomer",
      "Vicki Main"
     ],
     "a": [
      "Denise Richmond",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "Bob Castellano",
      "Dan Loreti"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Dieterle",
      "Michael Finkelstein"
     ],
     "a": [
      "Richard Demeuse",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stephanie Woomer",
      "Michael Dieterle"
     ],
     "a": [
      "Stacy Garretson",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Tara Kramer",
      "Dan Loreti"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tera Baccile",
      "Jim Darcangelo"
     ],
     "a": [
      "Aimee Castellano",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Vicki Main",
      "Jingwei Wu"
     ],
     "a": [
      "Denise Richmond",
      "Gary Garretson"
     ]
    },
    {
     "t": "female",
     "h": [
      "Stephanie Woomer",
      "Katherine Maruyama"
     ],
     "a": [
      "Aimee Castellano",
      "Stacy Garretson"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tera Baccile",
      "Vicki Main"
     ],
     "a": [
      "Denise Richmond",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jim Darcangelo",
      "Jingwei Wu"
     ],
     "a": [
      "Bob Castellano",
      "Dan Loreti"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Dieterle",
      "Keith Goldberg"
     ],
     "a": [
      "Gary Garretson",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Denise Richmond",
      "Gary Garretson"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Stacy Garretson",
      "Dan Loreti"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tera Baccile",
      "Jim Darcangelo"
     ],
     "a": [
      "Tara Kramer",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "h": [
      "Katherine Maruyama",
      "Vicki Main"
     ],
     "a": [
      "Aimee Castellano",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "h": [
      "Stephanie Woomer",
      "Tera Baccile"
     ],
     "a": [
      "Stacy Garretson",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jim Darcangelo",
      "Keith Goldberg"
     ],
     "a": [
      "Steven Gregov",
      "Dan Loreti"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ],
     "a": [
      "Bob Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tera Baccile",
      "Michael Dieterle"
     ],
     "a": [
      "Tara Kramer",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Denise Richmond",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ],
     "a": [
      "Stacy Garretson",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Aimee Castellano",
      "Gary Garretson"
     ]
    },
    {
     "t": "female",
     "h": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tera Baccile",
      "Vicki Main"
     ],
     "a": [
      "Stacy Garretson",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ],
     "a": [
      "Bob Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "Gary Garretson",
      "Dan Loreti"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 4,
   "home": "Jersey Pickleball Club",
   "away": "Stelton Sports",
   "time": "2026-09-12T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-19T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington Blue",
   "away": "Premiere",
   "time": "2026-09-19T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Allstar Pickler",
   "away": "Stelton Sports",
   "time": "2026-09-19T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Malvern Black",
   "away": "APC Garden State",
   "time": "2026-09-19T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "ACE Moorestown",
   "away": "Bounce Malvern Boom",
   "time": "2026-09-19T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle Place",
   "away": "Flemington Green",
   "time": "2026-09-19T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere",
   "away": "Allstar Pickler",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Flemington Blue",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "APC Garden State",
   "away": "Flemington Green",
   "time": "2026-09-26T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Malvern Boom",
   "away": "Bounce Malvern Black",
   "time": "2026-09-26T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickle Place",
   "away": "ACE Moorestown",
   "time": "2026-09-26T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Stelton Sports",
   "away": "Pickleball Palace",
   "time": "2026-09-26T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere",
   "away": "Pickle Place",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Stelton Sports",
   "away": "Bounce Malvern Boom",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Allstar Pickler",
   "away": "Flemington Green",
   "time": "2026-09-27T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Flemington Blue",
   "away": "APC Garden State",
   "time": "2026-09-27T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Palace",
   "away": "ACE Moorestown",
   "time": "2026-09-27T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Jersey Pickleball Club",
   "away": "Bounce Malvern Black",
   "time": "2026-09-27T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Allstar Pickler",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-03T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Palace",
   "away": "Flemington Blue",
   "time": "2026-10-03T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Flemington Green",
   "away": "ACE Moorestown",
   "time": "2026-10-03T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "APC Garden State",
   "away": "Bounce Malvern Boom",
   "time": "2026-10-03T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Stelton Sports",
   "away": "Premiere",
   "time": "2026-10-03T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Bounce Malvern Black",
   "away": "Pickle Place",
   "time": "2026-10-03T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Premiere",
   "away": "Stelton Sports",
   "time": "2026-10-10T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Flemington Blue",
   "away": "Pickleball Palace",
   "time": "2026-10-10T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Jersey Pickleball Club",
   "away": "Allstar Pickler",
   "time": "2026-10-10T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "ACE Moorestown",
   "away": "Flemington Green",
   "time": "2026-10-10T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickle Place",
   "away": "Bounce Malvern Black",
   "time": "2026-10-10T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Malvern Boom",
   "away": "APC Garden State",
   "time": "2026-10-10T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington Green",
   "away": "Bounce Malvern Boom",
   "time": "2026-10-17T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Allstar Pickler",
   "away": "Flemington Blue",
   "time": "2026-10-17T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Palace",
   "away": "Premiere",
   "time": "2026-10-17T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "APC Garden State",
   "away": "Pickle Place",
   "time": "2026-10-17T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Stelton Sports",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-17T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Malvern Black",
   "away": "ACE Moorestown",
   "time": "2026-10-17T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Bounce Malvern Black",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Premiere",
   "away": "Flemington Blue",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington Green",
   "away": "Pickle Place",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Malvern Boom",
   "away": "ACE Moorestown",
   "time": "2026-10-24T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Palace",
   "time": "2026-10-24T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Stelton Sports",
   "away": "Allstar Pickler",
   "time": "2026-10-24T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "ACE Moorestown",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Malvern Boom",
   "away": "Flemington Blue",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickle Place",
   "away": "Allstar Pickler",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Stelton Sports",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Malvern Black",
   "away": "Pickleball Palace",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington Green",
   "away": "Premiere",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Allstar Pickler",
   "away": "Premiere",
   "time": "2026-10-31T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Palace",
   "away": "Stelton Sports",
   "time": "2026-10-31T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Flemington Green",
   "away": "APC Garden State",
   "time": "2026-10-31T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Jersey Pickleball Club",
   "away": "Flemington Blue",
   "time": "2026-10-31T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "ACE Moorestown",
   "away": "Pickle Place",
   "time": "2026-10-31T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Malvern Black",
   "away": "Bounce Malvern Boom",
   "time": "2026-10-31T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Flemington Green",
   "away": "Bounce Malvern Black",
   "time": "2026-11-07T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Allstar Pickler",
   "away": "Pickleball Palace",
   "time": "2026-11-07T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "APC Garden State",
   "away": "ACE Moorestown",
   "time": "2026-11-07T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Bounce Malvern Boom",
   "away": "Pickle Place",
   "time": "2026-11-07T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Stelton Sports",
   "away": "Flemington Blue",
   "time": "2026-11-07T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Pickleball Club",
   "away": "Premiere",
   "time": "2026-11-07T14:00:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Nancy Blank": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
  "Brooke Obrien": "06b66cca-2292-4bbe-962e-1217c4418e18",
  "Dan Loreti": "2ce4808a-9400-42cb-a756-fa8ecdf2a1eb",
  "Yang Ruan": "313153f7-7e8f-4e60-9340-0e0d1a43d6be",
  "Kim Hamilton": "4d6a9dce-3c23-4d65-85f9-8b440c44a318",
  "Kristina Rhodes": "77ecd1c3-b1df-469a-83ba-d12bd56f2c6a",
  "Cuc Dang": "817939be-36ae-4a5d-8c02-62138ab71d4c",
  "Andrea Dellechiaie": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7",
  "Virasack Vorabouth": "a478ffa6-7bfc-4c67-9b3d-0aad661a58bc",
  "Joe Palumbo": "b39664c3-1a6e-4493-968f-6e7f7939f694",
  "Xilin Zhao": "bfecc55a-a909-44da-8292-6b59b37a6043",
  "Gary Garretson": "d4126276-6b83-42be-b943-9957df46992c",
  "Alex Miller": "d74d4a67-cb90-44d8-aeea-b48fab564427",
  "Yongzhe Tian": "e1a924b8-3b3a-4780-8348-08a730ba61f2",
  "Rick Vazquez": "e532dafb-ff0f-43fc-82be-687d34ab8c14",
  "Yang Xu": "f607099c-35f9-448c-9077-1792b245f68e"
 },
 "meta": {
  "matchesPlayed": 8,
  "weeks": "1-2",
  "totalPlayers": 182,
  "ratingHistoryWeeks": [
   1,
   2
  ],
  "divisionSlug": "2edc44e7",
  "hasPlayoffs": false,
  "typicalDay": "Saturdays",
  "detailFile": "detail-2edc44e7.js",
  "clubName": "",
  "divisionName": "4.0 (50+)",
  "leagueType": "travel",
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
   "crossPodMatchups": 12,
   "totalMatchups": 72,
   "reported": {
    "South": [
     "ACE Moorestown",
     "APC Garden State",
     "Bounce Malvern Black",
     "Bounce Malvern Boom",
     "Flemington Green",
     "Pickle Place"
    ],
    "North": [
     "Allstar Pickler",
     "Flemington Blue",
     "Jersey Pickleball Club",
     "Pickleball Palace",
     "Premiere",
     "Stelton Sports"
    ]
   },
   "schedule": {
    "Pod 1": [
     "ACE Moorestown",
     "Allstar Pickler",
     "APC Garden State",
     "Bounce Malvern Black",
     "Bounce Malvern Boom",
     "Flemington Blue",
     "Flemington Green",
     "Jersey Pickleball Club",
     "Pickle Place",
     "Pickleball Palace",
     "Premiere",
     "Stelton Sports"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-08-30";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["2edc44e7"] = DATA;
})();
