(function () {
  const DATA = {
 "players": [
  {
   "name": "Youyuan Xu",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 59,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 25,
   "ppg": 21,
   "leagueRank": 51,
   "rating": 3.2,
   "ratingGames": 4,
   "confidence": 47,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "77117159-ecf6-4d49-8e50-96c58992a3d7"
  },
  {
   "name": "Philip Gallione",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 73,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "0d88a741-db24-4c20-a7a8-5fea6e170778",
   "winPct": 100,
   "diff": 11,
   "ppg": 21,
   "leagueRank": 57,
   "rating": 0.5,
   "ratingGames": 4,
   "confidence": 48,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Dennis Higman",
   "gender": "Male",
   "team": "Players Courtyard Surge",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 43,
   "losses": 1,
   "pointsWon": 913,
   "totalPointsAgainst": 546,
   "mixedWins": 22,
   "mixedLosses": 1,
   "genderWins": 21,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 97.7,
   "diff": 367,
   "ppg": 20.8,
   "leagueRank": 1,
   "rating": 3.9,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": 3,
   "strengthOfOpponents": -0.6,
   "playerId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "name": "David Corwin",
   "gender": "Male",
   "team": "Players Courtyard Surge",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 52,
   "losses": 6,
   "pointsWon": 1200,
   "totalPointsAgainst": 827,
   "mixedWins": 26,
   "mixedLosses": 2,
   "genderWins": 26,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 89.7,
   "diff": 373,
   "ppg": 20.7,
   "leagueRank": 3,
   "rating": 4.1,
   "ratingGames": 58,
   "confidence": 92,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": 0.2,
   "playerId": "d026f18b-708f-49ce-99a2-77267ee0256e"
  },
  {
   "name": "Bob Sochor",
   "gender": "Male",
   "team": "Players Courtyard Surge",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 40,
   "losses": 6,
   "pointsWon": 951,
   "totalPointsAgainst": 594,
   "mixedWins": 20,
   "mixedLosses": 4,
   "genderWins": 20,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 87,
   "diff": 357,
   "ppg": 20.7,
   "leagueRank": 2,
   "rating": 5.8,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0.4,
   "playerId": "27be2d93-9ffb-48be-a464-e0ab103426e3"
  },
  {
   "name": "William Askin",
   "gender": "Male",
   "team": "Players Courtyard Surge",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 40,
   "losses": 6,
   "pointsWon": 948,
   "totalPointsAgainst": 689,
   "mixedWins": 16,
   "mixedLosses": 3,
   "genderWins": 24,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 87,
   "diff": 259,
   "ppg": 20.6,
   "leagueRank": 4,
   "rating": 3.3,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.2,
   "playerId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3"
  },
  {
   "name": "Amy Neckes",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 92,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "winPct": 83.3,
   "diff": 32,
   "ppg": 20.7,
   "leagueRank": 81,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 58,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Sandy Borowsky",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 96,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "c0cc236c-a442-42b0-b466-971432e9aadc",
   "winPct": 83.3,
   "diff": 28,
   "ppg": 20.7,
   "leagueRank": 101,
   "rating": 3,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Aarti Aziz",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 102,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "42031222-7198-45fb-a736-62aa0106be55",
   "winPct": 83.3,
   "diff": 20,
   "ppg": 20.3,
   "leagueRank": 97,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Dawn Kempton",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 42,
   "losses": 10,
   "pointsWon": 1060,
   "totalPointsAgainst": 808,
   "mixedWins": 25,
   "mixedLosses": 2,
   "genderWins": 17,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 80.8,
   "diff": 252,
   "ppg": 20.4,
   "leagueRank": 5,
   "rating": 2.8,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 2.7,
   "strengthOfOpponents": 0.5,
   "playerId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170"
  },
  {
   "name": "Marilyn Janssen",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 206,
   "totalPointsAgainst": 139,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "721ae7df-e56e-45a3-b814-ff040a4f5bb4",
   "winPct": 80,
   "diff": 67,
   "ppg": 20.6,
   "leagueRank": 58,
   "rating": 5.3,
   "ratingGames": 10,
   "confidence": 69,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Sarah Kirn",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "b73f9230-f485-4236-9f41-0ac9aaee98d5",
   "winPct": 80,
   "diff": 21,
   "ppg": 20.6,
   "leagueRank": 92,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Amy Moore",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 22,
   "losses": 6,
   "pointsWon": 559,
   "totalPointsAgainst": 423,
   "mixedWins": 11,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 78.6,
   "diff": 136,
   "ppg": 20,
   "leagueRank": 6,
   "rating": 2.6,
   "ratingGames": 28,
   "confidence": 86,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0.2,
   "playerId": "c037ad35-3550-447f-af7f-f62674d0c1ac"
  },
  {
   "name": "Andrea Schwab",
   "gender": "Female",
   "team": "ACE",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 54,
   "losses": 15,
   "pointsWon": 1385,
   "totalPointsAgainst": 1057,
   "mixedWins": 31,
   "mixedLosses": 8,
   "genderWins": 23,
   "genderLosses": 7,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 78.3,
   "diff": 328,
   "ppg": 20.1,
   "leagueRank": 7,
   "rating": 4.1,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "605d7726-f903-4606-ad3d-14964b9e2e1b"
  },
  {
   "name": "Gail Hannagan",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 40,
   "losses": 12,
   "pointsWon": 1045,
   "totalPointsAgainst": 836,
   "mixedWins": 17,
   "mixedLosses": 9,
   "genderWins": 23,
   "genderLosses": 3,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 76.9,
   "diff": 209,
   "ppg": 20.1,
   "leagueRank": 8,
   "rating": 3.4,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "name": "Ben Cheng",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 82,
   "totalPointsAgainst": 69,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "edbfd9e1-8cc4-4671-a852-09cdfe04651f",
   "winPct": 75,
   "diff": 13,
   "ppg": 20.5,
   "leagueRank": 111,
   "rating": 1,
   "ratingGames": 4,
   "confidence": 48,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Angela Bartelt",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 38,
   "losses": 13,
   "pointsWon": 1019,
   "totalPointsAgainst": 827,
   "mixedWins": 20,
   "mixedLosses": 6,
   "genderWins": 18,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 74.5,
   "diff": 192,
   "ppg": 20,
   "leagueRank": 9,
   "rating": 1.3,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.2,
   "playerId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc"
  },
  {
   "name": "Lolita Hagen",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 29,
   "losses": 10,
   "pointsWon": 770,
   "totalPointsAgainst": 636,
   "mixedWins": 15,
   "mixedLosses": 4,
   "genderWins": 14,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 74.4,
   "diff": 134,
   "ppg": 19.7,
   "leagueRank": 13,
   "rating": 1.1,
   "ratingGames": 39,
   "confidence": 89,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.2,
   "playerId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "name": "Mike Hardy",
   "gender": "Male",
   "team": "Monroe",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 51,
   "losses": 18,
   "pointsWon": 1354,
   "totalPointsAgainst": 1151,
   "mixedWins": 27,
   "mixedLosses": 8,
   "genderWins": 24,
   "genderLosses": 10,
   "clutchWins": 12,
   "clutchLosses": 5,
   "winPct": 73.9,
   "diff": 203,
   "ppg": 19.6,
   "leagueRank": 24,
   "rating": 3.2,
   "ratingGames": 69,
   "confidence": 93,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "name": "Ralph Lovelidge",
   "gender": "Male",
   "team": "Pickleball Lehigh Valley",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 40,
   "losses": 15,
   "pointsWon": 1068,
   "totalPointsAgainst": 947,
   "mixedWins": 23,
   "mixedLosses": 6,
   "genderWins": 17,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 3,
   "winPct": 72.7,
   "diff": 121,
   "ppg": 19.4,
   "leagueRank": 31,
   "rating": 3.6,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.1,
   "playerId": "4c163a81-fd29-498c-bf1b-4337a8215ad4"
  },
  {
   "name": "Robert Lee",
   "gender": "Male",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 24,
   "losses": 9,
   "pointsWon": 632,
   "totalPointsAgainst": 548,
   "mixedWins": 12,
   "mixedLosses": 6,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 84,
   "ppg": 19.2,
   "leagueRank": 38,
   "rating": 3.4,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "c7ffa10b-a10b-4adc-9fb6-46ed7afaeecb"
  },
  {
   "name": "Jason Fingerman",
   "gender": "Male",
   "team": "ACE",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 73,
   "wins": 53,
   "losses": 20,
   "pointsWon": 1435,
   "totalPointsAgainst": 1106,
   "mixedWins": 30,
   "mixedLosses": 5,
   "genderWins": 23,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 72.6,
   "diff": 329,
   "ppg": 19.7,
   "leagueRank": 11,
   "rating": 4,
   "ratingGames": 73,
   "confidence": 93,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.6,
   "playerId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "name": "Amy Clayman",
   "gender": "Female",
   "team": "ACE",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 29,
   "losses": 11,
   "pointsWon": 788,
   "totalPointsAgainst": 641,
   "mixedWins": 13,
   "mixedLosses": 5,
   "genderWins": 16,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 72.5,
   "diff": 147,
   "ppg": 19.7,
   "leagueRank": 14,
   "rating": 2.2,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "224e578f-ce44-4dbe-94d7-4e4dda113c63"
  },
  {
   "name": "Linda Landis",
   "gender": "Female",
   "team": "ACE",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 29,
   "losses": 11,
   "pointsWon": 800,
   "totalPointsAgainst": 688,
   "mixedWins": 14,
   "mixedLosses": 5,
   "genderWins": 15,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 72.5,
   "diff": 112,
   "ppg": 20,
   "leagueRank": 21,
   "rating": 1.7,
   "ratingGames": 40,
   "confidence": 89,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "3d1d0833-fbb7-483c-9b63-88a7f2064986"
  },
  {
   "name": "Heidi Weinroth",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 34,
   "losses": 13,
   "pointsWon": 919,
   "totalPointsAgainst": 792,
   "mixedWins": 19,
   "mixedLosses": 4,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 72.3,
   "diff": 127,
   "ppg": 19.6,
   "leagueRank": 22,
   "rating": 1.2,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2"
  },
  {
   "name": "Tao Zhu",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 18,
   "losses": 7,
   "pointsWon": 487,
   "totalPointsAgainst": 425,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 72,
   "diff": 62,
   "ppg": 19.5,
   "leagueRank": 23,
   "rating": 1.2,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91"
  },
  {
   "name": "Sarah Stangota",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 41,
   "losses": 16,
   "pointsWon": 1140,
   "totalPointsAgainst": 968,
   "mixedWins": 16,
   "mixedLosses": 12,
   "genderWins": 25,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 71.9,
   "diff": 172,
   "ppg": 20,
   "leagueRank": 18,
   "rating": 2.5,
   "ratingGames": 57,
   "confidence": 91,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "name": "Colleen Derose",
   "gender": "Female",
   "team": "ACE",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 33,
   "losses": 13,
   "pointsWon": 910,
   "totalPointsAgainst": 745,
   "mixedWins": 14,
   "mixedLosses": 10,
   "genderWins": 19,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 71.7,
   "diff": 165,
   "ppg": 19.8,
   "leagueRank": 16,
   "rating": 1.9,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.2,
   "playerId": "1b8d34a3-9006-4e6f-b475-e5f3b4f7e814"
  },
  {
   "name": "Kelley Batejan",
   "gender": "Female",
   "team": "ACE",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 45,
   "losses": 18,
   "pointsWon": 1253,
   "totalPointsAgainst": 992,
   "mixedWins": 20,
   "mixedLosses": 12,
   "genderWins": 25,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 71.4,
   "diff": 261,
   "ppg": 19.9,
   "leagueRank": 10,
   "rating": 2,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "name": "Cathy Fiebs",
   "gender": "Female",
   "team": "ACE",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 40,
   "losses": 16,
   "pointsWon": 1111,
   "totalPointsAgainst": 907,
   "mixedWins": 20,
   "mixedLosses": 9,
   "genderWins": 20,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 71.4,
   "diff": 204,
   "ppg": 19.8,
   "leagueRank": 15,
   "rating": 1.5,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0,
   "playerId": "b39f886b-aa7a-40ca-81a1-5963941e541f"
  },
  {
   "name": "Mariola Biekisz",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 131,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "188e1231-451b-48a6-84b8-9a9b11524618",
   "winPct": 71.4,
   "diff": 27,
   "ppg": 18.7,
   "leagueRank": 119,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Lynn Bresnahan",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 27,
   "losses": 11,
   "pointsWon": 755,
   "totalPointsAgainst": 646,
   "mixedWins": 12,
   "mixedLosses": 6,
   "genderWins": 15,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 71.1,
   "diff": 109,
   "ppg": 19.9,
   "leagueRank": 19,
   "rating": 0.1,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8"
  },
  {
   "name": "Joan Rudderow",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 39,
   "losses": 16,
   "pointsWon": 1090,
   "totalPointsAgainst": 861,
   "mixedWins": 25,
   "mixedLosses": 5,
   "genderWins": 14,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 70.9,
   "diff": 229,
   "ppg": 19.8,
   "leagueRank": 12,
   "rating": 1.7,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 2.8,
   "strengthOfOpponents": 0.3,
   "playerId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "name": "Tony Calderan",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 191,
   "totalPointsAgainst": 162,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "9024c317-0010-4e82-a07b-ce8bb2dee31a",
   "winPct": 70,
   "diff": 29,
   "ppg": 19.1,
   "leagueRank": 103,
   "rating": 0.4,
   "ratingGames": 10,
   "confidence": 68,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.1
  },
  {
   "name": "Marc Schwegel",
   "gender": "Male",
   "team": "ACE",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 39,
   "losses": 17,
   "pointsWon": 1082,
   "totalPointsAgainst": 911,
   "mixedWins": 23,
   "mixedLosses": 8,
   "genderWins": 16,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 69.6,
   "diff": 171,
   "ppg": 19.3,
   "leagueRank": 26,
   "rating": 2.3,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "b57cfd69-646a-4a7c-8189-fa96df33602c"
  },
  {
   "name": "Dawn Gordon",
   "gender": "Female",
   "team": "ACE",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 32,
   "losses": 14,
   "pointsWon": 916,
   "totalPointsAgainst": 766,
   "mixedWins": 13,
   "mixedLosses": 10,
   "genderWins": 19,
   "genderLosses": 4,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 69.6,
   "diff": 150,
   "ppg": 19.9,
   "leagueRank": 17,
   "rating": 0.6,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.8,
   "playerId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "name": "Jerry O’Loughlin",
   "gender": "Male",
   "team": "Home Court",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 29,
   "losses": 13,
   "pointsWon": 840,
   "totalPointsAgainst": 713,
   "mixedWins": 16,
   "mixedLosses": 6,
   "genderWins": 13,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 69,
   "diff": 127,
   "ppg": 20,
   "leagueRank": 25,
   "rating": 2.5,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "0b2d484f-d8ca-4241-85ec-0ebb91b80e9e"
  },
  {
   "name": "Cathy Matko",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 29,
   "losses": 13,
   "pointsWon": 824,
   "totalPointsAgainst": 702,
   "mixedWins": 11,
   "mixedLosses": 7,
   "genderWins": 18,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 69,
   "diff": 122,
   "ppg": 19.6,
   "leagueRank": 27,
   "rating": 2.8,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.7,
   "playerId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "name": "Greg Taylor",
   "gender": "Male",
   "team": "Players Courtyard Surge",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 24,
   "losses": 11,
   "pointsWon": 703,
   "totalPointsAgainst": 597,
   "mixedWins": 13,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 68.6,
   "diff": 106,
   "ppg": 20.1,
   "leagueRank": 20,
   "rating": 0.1,
   "ratingGames": 35,
   "confidence": 88,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.7,
   "playerId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
  },
  {
   "name": "David Cartwright",
   "gender": "Male",
   "team": "Home Court",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 39,
   "losses": 18,
   "pointsWon": 1134,
   "totalPointsAgainst": 961,
   "mixedWins": 20,
   "mixedLosses": 9,
   "genderWins": 19,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 68.4,
   "diff": 173,
   "ppg": 19.9,
   "leagueRank": 29,
   "rating": 2.8,
   "ratingGames": 57,
   "confidence": 91,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "name": "Jennifer Makfinsky",
   "gender": "Female",
   "team": "Monroe",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 75,
   "wins": 51,
   "losses": 24,
   "pointsWon": 1458,
   "totalPointsAgainst": 1266,
   "mixedWins": 28,
   "mixedLosses": 11,
   "genderWins": 23,
   "genderLosses": 13,
   "clutchWins": 13,
   "clutchLosses": 11,
   "winPct": 68,
   "diff": 192,
   "ppg": 19.4,
   "leagueRank": 33,
   "rating": 2.8,
   "ratingGames": 75,
   "confidence": 93,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
  },
  {
   "name": "Eric Brezina",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 44,
   "losses": 21,
   "pointsWon": 1277,
   "totalPointsAgainst": 1099,
   "mixedWins": 24,
   "mixedLosses": 7,
   "genderWins": 20,
   "genderLosses": 14,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 67.7,
   "diff": 178,
   "ppg": 19.6,
   "leagueRank": 30,
   "rating": 3.4,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "name": "Richard Fox",
   "gender": "Male",
   "team": "Players Courtyard Surge",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 25,
   "losses": 12,
   "pointsWon": 711,
   "totalPointsAgainst": 599,
   "mixedWins": 11,
   "mixedLosses": 6,
   "genderWins": 14,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 67.6,
   "diff": 112,
   "ppg": 19.2,
   "leagueRank": 28,
   "rating": 1.4,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.3,
   "playerId": "ef0bc1ce-6709-4172-97a6-8ea5a462bea4"
  },
  {
   "name": "Olga Khalev",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 240,
   "totalPointsAgainst": 198,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "429103e6-a3b1-4cb1-853d-bb4b849df001",
   "winPct": 66.7,
   "diff": 42,
   "ppg": 20,
   "leagueRank": 69,
   "rating": 1.6,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Renee Froeberg",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 222,
   "totalPointsAgainst": 192,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "3804b024-a017-4fa2-90d3-5d726e764f44",
   "winPct": 66.7,
   "diff": 30,
   "ppg": 18.5,
   "leagueRank": 113,
   "rating": 2.9,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Janine Thompson",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 121,
   "totalPointsAgainst": 103,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "e9c2ebf6-88d5-485d-be0f-8c71488231ae",
   "winPct": 66.7,
   "diff": 18,
   "ppg": 20.2,
   "leagueRank": 137,
   "rating": 2.7,
   "ratingGames": 6,
   "confidence": 58,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Scott Nissenbaum",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 76,
   "wins": 50,
   "losses": 26,
   "pointsWon": 1472,
   "totalPointsAgainst": 1279,
   "mixedWins": 22,
   "mixedLosses": 11,
   "genderWins": 28,
   "genderLosses": 15,
   "clutchWins": 14,
   "clutchLosses": 9,
   "winPct": 65.8,
   "diff": 193,
   "ppg": 19.4,
   "leagueRank": 40,
   "rating": 3.2,
   "ratingGames": 76,
   "confidence": 93,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "31690ced-f9c2-4b04-85cd-19ec22e55d48"
  },
  {
   "name": "Rachel Baluyot",
   "gender": "Female",
   "team": "Home Court",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 38,
   "losses": 20,
   "pointsWon": 1113,
   "totalPointsAgainst": 975,
   "mixedWins": 19,
   "mixedLosses": 9,
   "genderWins": 19,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 65.5,
   "diff": 138,
   "ppg": 19.2,
   "leagueRank": 39,
   "rating": 2.2,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.8,
   "playerId": "5e265a90-558b-4564-acd8-f358bab162a9"
  },
  {
   "name": "Steven Heller",
   "gender": "Male",
   "team": "Players Courtyard Surge",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 30,
   "losses": 16,
   "pointsWon": 877,
   "totalPointsAgainst": 763,
   "mixedWins": 16,
   "mixedLosses": 8,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 65.2,
   "diff": 114,
   "ppg": 19.1,
   "leagueRank": 32,
   "rating": 0.2,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.2,
   "playerId": "344856f5-8559-411b-8fe7-2b5405bb9db6"
  },
  {
   "name": "Sam Doctor",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 31,
   "losses": 17,
   "pointsWon": 941,
   "totalPointsAgainst": 858,
   "mixedWins": 17,
   "mixedLosses": 6,
   "genderWins": 14,
   "genderLosses": 11,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 64.6,
   "diff": 83,
   "ppg": 19.6,
   "leagueRank": 44,
   "rating": 2.7,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845"
  },
  {
   "name": "Pete Dunn",
   "gender": "Male",
   "team": "ACE",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 29,
   "losses": 16,
   "pointsWon": 863,
   "totalPointsAgainst": 771,
   "mixedWins": 18,
   "mixedLosses": 9,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 64.4,
   "diff": 92,
   "ppg": 19.2,
   "leagueRank": 37,
   "rating": 0.1,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.1,
   "playerId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "name": "Annette Marsh",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 28,
   "losses": 16,
   "pointsWon": 857,
   "totalPointsAgainst": 758,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 63.6,
   "diff": 99,
   "ppg": 19.5,
   "leagueRank": 41,
   "rating": 2.5,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "5db7fb50-d1a1-4c3f-8d61-34ca1947300c"
  },
  {
   "name": "Scott Auty",
   "gender": "Male",
   "team": "ACE",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 40,
   "losses": 23,
   "pointsWon": 1217,
   "totalPointsAgainst": 1069,
   "mixedWins": 21,
   "mixedLosses": 10,
   "genderWins": 19,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 63.5,
   "diff": 148,
   "ppg": 19.3,
   "leagueRank": 34,
   "rating": 1.4,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "53024744-72eb-4d56-b0c9-93a6201bdc33"
  },
  {
   "name": "Jack Tran",
   "gender": "Male",
   "team": "Montville",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 33,
   "losses": 19,
   "pointsWon": 1013,
   "totalPointsAgainst": 900,
   "mixedWins": 15,
   "mixedLosses": 12,
   "genderWins": 18,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 63.5,
   "diff": 113,
   "ppg": 19.5,
   "leagueRank": 49,
   "rating": 2.8,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "dbe6ecd1-6aad-4f8f-bc44-702ef0be5667"
  },
  {
   "name": "Jeffrey Lindstrom",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 82,
   "wins": 52,
   "losses": 30,
   "pointsWon": 1569,
   "totalPointsAgainst": 1351,
   "mixedWins": 24,
   "mixedLosses": 18,
   "genderWins": 28,
   "genderLosses": 12,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 63.4,
   "diff": 218,
   "ppg": 19.1,
   "leagueRank": 42,
   "rating": 1.3,
   "ratingGames": 82,
   "confidence": 93,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3,
   "playerId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69"
  },
  {
   "name": "Erik Jacobsen",
   "gender": "Male",
   "team": "Home Court",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 38,
   "losses": 22,
   "pointsWon": 1163,
   "totalPointsAgainst": 1067,
   "mixedWins": 17,
   "mixedLosses": 12,
   "genderWins": 21,
   "genderLosses": 10,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 63.3,
   "diff": 96,
   "ppg": 19.4,
   "leagueRank": 47,
   "rating": 2.8,
   "ratingGames": 60,
   "confidence": 91,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "name": "Rick Weiser",
   "gender": "Male",
   "team": "Players Courtyard Surge",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 22,
   "losses": 13,
   "pointsWon": 675,
   "totalPointsAgainst": 602,
   "mixedWins": 13,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 62.9,
   "diff": 73,
   "ppg": 19.3,
   "leagueRank": 36,
   "rating": -0.7,
   "ratingGames": 35,
   "confidence": 88,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.8,
   "playerId": "0748d687-13e0-403d-95de-28c640adaf43"
  },
  {
   "name": "Denise Rempson",
   "gender": "Female",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 33,
   "losses": 20,
   "pointsWon": 1024,
   "totalPointsAgainst": 914,
   "mixedWins": 16,
   "mixedLosses": 8,
   "genderWins": 17,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 62.3,
   "diff": 110,
   "ppg": 19.3,
   "leagueRank": 43,
   "rating": 2.2,
   "ratingGames": 53,
   "confidence": 90,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.8,
   "playerId": "2e13698d-f902-43c1-b5b1-226d40d7af3d"
  },
  {
   "name": "Tina Convery",
   "gender": "Female",
   "team": "Players Courtyard Surge",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 19,
   "losses": 12,
   "pointsWon": 597,
   "totalPointsAgainst": 510,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 61.3,
   "diff": 87,
   "ppg": 19.3,
   "leagueRank": 35,
   "rating": 1.2,
   "ratingGames": 31,
   "confidence": 87,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "f739e9d0-4a76-43d8-9423-4a0ddbfcd63d"
  },
  {
   "name": "Sharon Oddy",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 30,
   "losses": 19,
   "pointsWon": 936,
   "totalPointsAgainst": 849,
   "mixedWins": 16,
   "mixedLosses": 12,
   "genderWins": 14,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 61.2,
   "diff": 87,
   "ppg": 19.1,
   "leagueRank": 45,
   "rating": 1.6,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "name": "Suzane Sullivan",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 33,
   "losses": 21,
   "pointsWon": 1036,
   "totalPointsAgainst": 974,
   "mixedWins": 14,
   "mixedLosses": 11,
   "genderWins": 19,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 6,
   "winPct": 61.1,
   "diff": 62,
   "ppg": 19.2,
   "leagueRank": 53,
   "rating": 2.5,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1,
   "playerId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6"
  },
  {
   "name": "Barb Mulckhuyse",
   "gender": "Female",
   "team": "Players Courtyard Wave",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 73,
   "wins": 44,
   "losses": 29,
   "pointsWon": 1365,
   "totalPointsAgainst": 1326,
   "mixedWins": 25,
   "mixedLosses": 11,
   "genderWins": 19,
   "genderLosses": 18,
   "clutchWins": 14,
   "clutchLosses": 8,
   "winPct": 60.3,
   "diff": 39,
   "ppg": 18.7,
   "leagueRank": 68,
   "rating": 2.5,
   "ratingGames": 73,
   "confidence": 93,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "name": "John Sutton",
   "gender": "Male",
   "team": "Players Courtyard Surge",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 94,
   "totalPointsAgainst": 84,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "20cfac78-43bd-41c7-90e1-6edcc1bdc973",
   "winPct": 60,
   "diff": 10,
   "ppg": 18.8,
   "leagueRank": 138,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Brian Perlowitz",
   "gender": "Male",
   "team": "Home Court",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 28,
   "losses": 19,
   "pointsWon": 890,
   "totalPointsAgainst": 854,
   "mixedWins": 15,
   "mixedLosses": 13,
   "genderWins": 13,
   "genderLosses": 6,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 59.6,
   "diff": 36,
   "ppg": 18.9,
   "leagueRank": 55,
   "rating": 0.6,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1"
  },
  {
   "name": "Lawrence Padersky",
   "gender": "Male",
   "team": "ACE",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 26,
   "losses": 18,
   "pointsWon": 826,
   "totalPointsAgainst": 753,
   "mixedWins": 13,
   "mixedLosses": 10,
   "genderWins": 13,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 59.1,
   "diff": 73,
   "ppg": 18.8,
   "leagueRank": 48,
   "rating": 0.3,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.4,
   "playerId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "name": "Theresa Corderi",
   "gender": "Female",
   "team": "Montville",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 36,
   "losses": 25,
   "pointsWon": 1146,
   "totalPointsAgainst": 1083,
   "mixedWins": 22,
   "mixedLosses": 11,
   "genderWins": 14,
   "genderLosses": 14,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 59,
   "diff": 63,
   "ppg": 18.8,
   "leagueRank": 60,
   "rating": 1.8,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821"
  },
  {
   "name": "Pete Certo",
   "gender": "Male",
   "team": "ACE",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 20,
   "losses": 14,
   "pointsWon": 655,
   "totalPointsAgainst": 592,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 58.8,
   "diff": 63,
   "ppg": 19.3,
   "leagueRank": 46,
   "rating": 1.1,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "3572118b-4e01-4e64-96a4-a7cc80869425"
  },
  {
   "name": "Butch Kreilick",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 10,
   "losses": 7,
   "pointsWon": 312,
   "totalPointsAgainst": 288,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 58.8,
   "diff": 24,
   "ppg": 18.4,
   "leagueRank": 91,
   "rating": -0.4,
   "ratingGames": 17,
   "confidence": 78,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.5,
   "playerId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "name": "Karen Rosenberg",
   "gender": "Female",
   "team": "Monroe",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 37,
   "losses": 26,
   "pointsWon": 1184,
   "totalPointsAgainst": 1108,
   "mixedWins": 16,
   "mixedLosses": 12,
   "genderWins": 21,
   "genderLosses": 14,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 58.7,
   "diff": 76,
   "ppg": 18.8,
   "leagueRank": 52,
   "rating": -0.5,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.4,
   "playerId": "17fc1097-95ae-4095-a83d-ca9124bef274"
  },
  {
   "name": "Jeffrey Hartford",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 17,
   "losses": 12,
   "pointsWon": 539,
   "totalPointsAgainst": 528,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 58.6,
   "diff": 11,
   "ppg": 18.6,
   "leagueRank": 54,
   "rating": -0.6,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235"
  },
  {
   "name": "Andrea Finnegan",
   "gender": "Female",
   "team": "ACE",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 14,
   "losses": 10,
   "pointsWon": 439,
   "totalPointsAgainst": 414,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 25,
   "ppg": 18.3,
   "leagueRank": 62,
   "rating": -1.5,
   "ratingGames": 24,
   "confidence": 84,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.7,
   "playerId": "1e06822c-9c02-48d2-a4f7-6b3f71bd7d4b"
  },
  {
   "name": "Liane Feyas",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 135,
   "totalPointsAgainst": 134,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "2266824f-5ba8-4da3-a512-94c8e14f7c90",
   "winPct": 57.1,
   "diff": 1,
   "ppg": 19.3,
   "leagueRank": 164,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Dan Callaghan",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 74,
   "wins": 42,
   "losses": 32,
   "pointsWon": 1339,
   "totalPointsAgainst": 1277,
   "mixedWins": 17,
   "mixedLosses": 19,
   "genderWins": 25,
   "genderLosses": 13,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 56.8,
   "diff": 62,
   "ppg": 18.1,
   "leagueRank": 61,
   "rating": 0.7,
   "ratingGames": 74,
   "confidence": 93,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "name": "Eileen Moore",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 13,
   "losses": 10,
   "pointsWon": 438,
   "totalPointsAgainst": 415,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 56.5,
   "diff": 23,
   "ppg": 19,
   "leagueRank": 66,
   "rating": 1,
   "ratingGames": 23,
   "confidence": 83,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "13baa9f0-6b36-49e8-b085-c8933cb044b2"
  },
  {
   "name": "Eric Clayman",
   "gender": "Male",
   "team": "ACE",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 14,
   "losses": 11,
   "pointsWon": 465,
   "totalPointsAgainst": 441,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 56,
   "diff": 24,
   "ppg": 18.6,
   "leagueRank": 75,
   "rating": -1.1,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.4,
   "playerId": "ca8205f9-30ea-4e27-a901-f4156adf6b95"
  },
  {
   "name": "Neil Pratesi",
   "gender": "Male",
   "team": "Pickleball Lehigh Valley",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 33,
   "losses": 27,
   "pointsWon": 1146,
   "totalPointsAgainst": 1096,
   "mixedWins": 16,
   "mixedLosses": 14,
   "genderWins": 17,
   "genderLosses": 13,
   "clutchWins": 12,
   "clutchLosses": 13,
   "winPct": 55,
   "diff": 50,
   "ppg": 19.1,
   "leagueRank": 59,
   "rating": 1.5,
   "ratingGames": 60,
   "confidence": 91,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "fc7750bb-ae3e-4c36-8114-5b61f56aca52"
  },
  {
   "name": "Natalia Fischer",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 379,
   "totalPointsAgainst": 372,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 55,
   "diff": 7,
   "ppg": 19,
   "leagueRank": 86,
   "rating": 0.5,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "79578efc-55c2-49fb-9f69-2f776055ff70"
  },
  {
   "name": "Peggy Matzen",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 28,
   "losses": 23,
   "pointsWon": 971,
   "totalPointsAgainst": 947,
   "mixedWins": 17,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 54.9,
   "diff": 24,
   "ppg": 19,
   "leagueRank": 56,
   "rating": -0.2,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "name": "William Robertson",
   "gender": "Male",
   "team": "Pickleball Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 210,
   "totalPointsAgainst": 183,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "cedbddef-7cba-4aa9-a5e7-27609451fe5a",
   "winPct": 54.5,
   "diff": 27,
   "ppg": 19.1,
   "leagueRank": 142,
   "rating": 3.2,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Jemma Bucks",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 198,
   "totalPointsAgainst": 208,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 0,
   "playerId": "f0acebf7-62fd-455a-9fa4-c5ca589fc1b5",
   "winPct": 54.5,
   "diff": -10,
   "ppg": 18,
   "leagueRank": 163,
   "rating": -1.1,
   "ratingGames": 11,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Christine Steigerwalt",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 25,
   "losses": 21,
   "pointsWon": 857,
   "totalPointsAgainst": 828,
   "mixedWins": 15,
   "mixedLosses": 7,
   "genderWins": 10,
   "genderLosses": 14,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 54.3,
   "diff": 29,
   "ppg": 18.6,
   "leagueRank": 65,
   "rating": 1.2,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "33f1ae41-08db-4067-b5f5-f9324faf93f0"
  },
  {
   "name": "Paul Phillips",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 19,
   "losses": 16,
   "pointsWon": 640,
   "totalPointsAgainst": 639,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 10,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 54.3,
   "diff": 1,
   "ppg": 18.3,
   "leagueRank": 67,
   "rating": -0.3,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "name": "Petra Jones",
   "gender": "Female",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 25,
   "losses": 21,
   "pointsWon": 864,
   "totalPointsAgainst": 865,
   "mixedWins": 12,
   "mixedLosses": 12,
   "genderWins": 13,
   "genderLosses": 9,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 54.3,
   "diff": -1,
   "ppg": 18.8,
   "leagueRank": 78,
   "rating": 2,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "name": "Karen Veninger",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 23,
   "losses": 20,
   "pointsWon": 811,
   "totalPointsAgainst": 734,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 53.5,
   "diff": 77,
   "ppg": 18.9,
   "leagueRank": 50,
   "rating": 1.6,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "name": "Tim Cassidy",
   "gender": "Male",
   "team": "Home Court",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 17,
   "losses": 15,
   "pointsWon": 599,
   "totalPointsAgainst": 591,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 53.1,
   "diff": 8,
   "ppg": 18.7,
   "leagueRank": 72,
   "rating": 0.3,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "122aa85d-c1ca-448c-a8ab-e62db8a80af6"
  },
  {
   "name": "Ren Mortara",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 18,
   "losses": 16,
   "pointsWon": 638,
   "totalPointsAgainst": 627,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 52.9,
   "diff": 11,
   "ppg": 18.8,
   "leagueRank": 64,
   "rating": -0.2,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "name": "Anthony Leone",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 27,
   "losses": 24,
   "pointsWon": 936,
   "totalPointsAgainst": 957,
   "mixedWins": 14,
   "mixedLosses": 14,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 9,
   "winPct": 52.9,
   "diff": -21,
   "ppg": 18.4,
   "leagueRank": 77,
   "rating": -0.8,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.9,
   "playerId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "name": "Nancy Cook",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 19,
   "losses": 17,
   "pointsWon": 676,
   "totalPointsAgainst": 677,
   "mixedWins": 10,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 52.8,
   "diff": -1,
   "ppg": 18.8,
   "leagueRank": 79,
   "rating": 0.9,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "name": "Denise Stevens",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 30,
   "losses": 27,
   "pointsWon": 1078,
   "totalPointsAgainst": 1057,
   "mixedWins": 16,
   "mixedLosses": 15,
   "genderWins": 14,
   "genderLosses": 12,
   "clutchWins": 15,
   "clutchLosses": 12,
   "winPct": 52.6,
   "diff": 21,
   "ppg": 18.9,
   "leagueRank": 71,
   "rating": 1.3,
   "ratingGames": 57,
   "confidence": 91,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "name": "Jeffrey Quinlan",
   "gender": "Male",
   "team": "Monroe",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 34,
   "losses": 31,
   "pointsWon": 1215,
   "totalPointsAgainst": 1166,
   "mixedWins": 16,
   "mixedLosses": 15,
   "genderWins": 18,
   "genderLosses": 16,
   "clutchWins": 8,
   "clutchLosses": 14,
   "winPct": 52.3,
   "diff": 49,
   "ppg": 18.7,
   "leagueRank": 63,
   "rating": 1.4,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "name": "Lizabeth Hutchinson",
   "gender": "Female",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 23,
   "losses": 21,
   "pointsWon": 826,
   "totalPointsAgainst": 837,
   "mixedWins": 12,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 52.3,
   "diff": -11,
   "ppg": 18.8,
   "leagueRank": 80,
   "rating": 0.4,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "55f54df6-5682-4e88-a077-dc9274331ecd"
  },
  {
   "name": "Craig Mehnert",
   "gender": "Male",
   "team": "Players Courtyard Wave",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 36,
   "losses": 33,
   "pointsWon": 1284,
   "totalPointsAgainst": 1303,
   "mixedWins": 17,
   "mixedLosses": 15,
   "genderWins": 19,
   "genderLosses": 18,
   "clutchWins": 17,
   "clutchLosses": 12,
   "winPct": 52.2,
   "diff": -19,
   "ppg": 18.6,
   "leagueRank": 94,
   "rating": 1.7,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "371edee5-b6ce-436c-b3ef-b93807443dd8"
  },
  {
   "name": "Olga Turova",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 14,
   "losses": 13,
   "pointsWon": 494,
   "totalPointsAgainst": 500,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 51.9,
   "diff": -6,
   "ppg": 18.3,
   "leagueRank": 107,
   "rating": 0,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f"
  },
  {
   "name": "Ken Bienkowski",
   "gender": "Male",
   "team": "Montville",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 20,
   "losses": 19,
   "pointsWon": 741,
   "totalPointsAgainst": 728,
   "mixedWins": 10,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 51.3,
   "diff": 13,
   "ppg": 19,
   "leagueRank": 85,
   "rating": 1.5,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "5cc85746-e4a6-432e-bfe5-8166f02867ce"
  },
  {
   "name": "Dan Amabile",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 20,
   "losses": 19,
   "pointsWon": 720,
   "totalPointsAgainst": 726,
   "mixedWins": 12,
   "mixedLosses": 12,
   "genderWins": 8,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 51.3,
   "diff": -6,
   "ppg": 18.5,
   "leagueRank": 76,
   "rating": -0.2,
   "ratingGames": 39,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "3d3123f8-a4db-460f-8df3-70e6271cacfa"
  },
  {
   "name": "Anthony Deangelis",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 21,
   "losses": 20,
   "pointsWon": 773,
   "totalPointsAgainst": 769,
   "mixedWins": 11,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 51.2,
   "diff": 4,
   "ppg": 18.9,
   "leagueRank": 73,
   "rating": 0.3,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "4b9f7f7b-5027-482c-93aa-66ca594436db"
  },
  {
   "name": "Zalene Corey",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 88,
   "wins": 45,
   "losses": 43,
   "pointsWon": 1629,
   "totalPointsAgainst": 1557,
   "mixedWins": 24,
   "mixedLosses": 21,
   "genderWins": 21,
   "genderLosses": 22,
   "clutchWins": 10,
   "clutchLosses": 15,
   "winPct": 51.1,
   "diff": 72,
   "ppg": 18.5,
   "leagueRank": 70,
   "rating": 1.1,
   "ratingGames": 88,
   "confidence": 94,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "name": "Dave Sarmir",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 20,
   "losses": 20,
   "pointsWon": 748,
   "totalPointsAgainst": 730,
   "mixedWins": 10,
   "mixedLosses": 7,
   "genderWins": 10,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": 18,
   "ppg": 18.7,
   "leagueRank": 74,
   "rating": 0.6,
   "ratingGames": 40,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32"
  },
  {
   "name": "Victoria Stenroos",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 181,
   "totalPointsAgainst": 174,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "6898f005-e940-4d33-83f9-0300a1b90a5a",
   "winPct": 50,
   "diff": 7,
   "ppg": 18.1,
   "leagueRank": 154,
   "rating": 0.9,
   "ratingGames": 10,
   "confidence": 69,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Craig Walling",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 119,
   "totalPointsAgainst": 112,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "5f6dfa01-c062-4b00-a230-4aa19e54d74a",
   "winPct": 50,
   "diff": 7,
   "ppg": 19.8,
   "leagueRank": 165,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Andrea Kahn",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 110,
   "totalPointsAgainst": 105,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "a270d90c-cfd5-430c-989f-bf0b18f7a07d",
   "winPct": 50,
   "diff": 5,
   "ppg": 18.3,
   "leagueRank": 168,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Diana D'Amore",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 154,
   "totalPointsAgainst": 153,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 1,
   "ppg": 19.3,
   "leagueRank": 151,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "7c53de9a-6e46-4de8-918c-b5ebc56291be"
  },
  {
   "name": "Eddie Finocchiaro",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 107,
   "totalPointsAgainst": 107,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "58cf1f04-2fe4-4118-9b6f-159ace6f1b11",
   "winPct": 50,
   "diff": 0,
   "ppg": 17.8,
   "leagueRank": 170,
   "rating": 1.8,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Maureen Bruno",
   "gender": "Female",
   "team": "Monroe",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 26,
   "losses": 26,
   "pointsWon": 951,
   "totalPointsAgainst": 953,
   "mixedWins": 11,
   "mixedLosses": 14,
   "genderWins": 15,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": -2,
   "ppg": 18.3,
   "leagueRank": 84,
   "rating": -0.7,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "name": "Anita Gutierrez",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 115,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "3217faa9-af5d-4bc7-a5f0-0147b9b4fd7f",
   "winPct": 50,
   "diff": -2,
   "ppg": 18.8,
   "leagueRank": 174,
   "rating": 2.3,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Holly Ferguson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 22,
   "losses": 22,
   "pointsWon": 799,
   "totalPointsAgainst": 806,
   "mixedWins": 12,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": -7,
   "ppg": 18.2,
   "leagueRank": 83,
   "rating": -0.1,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "name": "Prashant Mehta",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 164,
   "totalPointsAgainst": 199,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -35,
   "ppg": 16.4,
   "leagueRank": 183,
   "rating": -1.4,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "555f88c0-56c7-4605-a47d-723083ec5129"
  },
  {
   "name": "Jason Belmont",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 24,
   "losses": 25,
   "pointsWon": 873,
   "totalPointsAgainst": 902,
   "mixedWins": 11,
   "mixedLosses": 14,
   "genderWins": 13,
   "genderLosses": 11,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 49,
   "diff": -29,
   "ppg": 17.8,
   "leagueRank": 110,
   "rating": 0.9,
   "ratingGames": 49,
   "confidence": 91,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.2,
   "playerId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c"
  },
  {
   "name": "Jake Denooyer",
   "gender": "Male",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 12,
   "losses": 13,
   "pointsWon": 469,
   "totalPointsAgainst": 473,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 48,
   "diff": -4,
   "ppg": 18.8,
   "leagueRank": 96,
   "rating": 1.4,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "a314079a-16b7-42f5-be34-41e1672f7377"
  },
  {
   "name": "Christina Samtmann",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 31,
   "losses": 34,
   "pointsWon": 1132,
   "totalPointsAgainst": 1171,
   "mixedWins": 14,
   "mixedLosses": 18,
   "genderWins": 17,
   "genderLosses": 16,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 47.7,
   "diff": -39,
   "ppg": 17.4,
   "leagueRank": 99,
   "rating": -0.4,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0,
   "playerId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce"
  },
  {
   "name": "Marianne Rosato",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 18,
   "losses": 20,
   "pointsWon": 691,
   "totalPointsAgainst": 707,
   "mixedWins": 10,
   "mixedLosses": 12,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 47.4,
   "diff": -16,
   "ppg": 18.2,
   "leagueRank": 90,
   "rating": 0.2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3"
  },
  {
   "name": "Darlene Fusco",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 25,
   "losses": 28,
   "pointsWon": 960,
   "totalPointsAgainst": 999,
   "mixedWins": 12,
   "mixedLosses": 12,
   "genderWins": 13,
   "genderLosses": 16,
   "clutchWins": 9,
   "clutchLosses": 11,
   "winPct": 47.2,
   "diff": -39,
   "ppg": 18.1,
   "leagueRank": 93,
   "rating": -0.6,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4"
  },
  {
   "name": "William Hutchinson",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 8,
   "losses": 9,
   "pointsWon": 290,
   "totalPointsAgainst": 322,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 47.1,
   "diff": -32,
   "ppg": 17.1,
   "leagueRank": 144,
   "rating": -2.5,
   "ratingGames": 17,
   "confidence": 78,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "c67420d9-3055-4cd2-80df-30fe850226ac"
  },
  {
   "name": "Diane Bracco",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 15,
   "losses": 17,
   "pointsWon": 576,
   "totalPointsAgainst": 585,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 46.9,
   "diff": -9,
   "ppg": 18,
   "leagueRank": 82,
   "rating": -1.6,
   "ratingGames": 32,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "name": "Diane Herbst",
   "gender": "Female",
   "team": "Montville",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 22,
   "losses": 25,
   "pointsWon": 844,
   "totalPointsAgainst": 906,
   "mixedWins": 11,
   "mixedLosses": 12,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 46.8,
   "diff": -62,
   "ppg": 18,
   "leagueRank": 114,
   "rating": -0.3,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9"
  },
  {
   "name": "Bill Lam",
   "gender": "Male",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 266,
   "totalPointsAgainst": 278,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 46.7,
   "diff": -12,
   "ppg": 17.7,
   "leagueRank": 159,
   "rating": 0.1,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "7fe8e4a4-6d94-4cb2-831f-23e53d4a8603"
  },
  {
   "name": "Rob Oddy",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 21,
   "losses": 24,
   "pointsWon": 795,
   "totalPointsAgainst": 871,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 12,
   "genderLosses": 12,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 46.7,
   "diff": -76,
   "ppg": 17.7,
   "leagueRank": 102,
   "rating": -1.6,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "name": "Scott Stenroos",
   "gender": "Male",
   "team": "Pickleball Lehigh Valley",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 25,
   "losses": 29,
   "pointsWon": 1005,
   "totalPointsAgainst": 1020,
   "mixedWins": 15,
   "mixedLosses": 14,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 13,
   "winPct": 46.3,
   "diff": -15,
   "ppg": 18.6,
   "leagueRank": 88,
   "rating": -0.1,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "cd325aa6-3b7f-43a8-a671-4dcd4da4b9a8"
  },
  {
   "name": "Mary Hain",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 74,
   "wins": 34,
   "losses": 40,
   "pointsWon": 1292,
   "totalPointsAgainst": 1382,
   "mixedWins": 17,
   "mixedLosses": 18,
   "genderWins": 17,
   "genderLosses": 22,
   "clutchWins": 13,
   "clutchLosses": 8,
   "winPct": 45.9,
   "diff": -90,
   "ppg": 17.5,
   "leagueRank": 108,
   "rating": -0.8,
   "ratingGames": 74,
   "confidence": 93,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "name": "Kim Slomeana",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 30,
   "losses": 36,
   "pointsWon": 1195,
   "totalPointsAgainst": 1221,
   "mixedWins": 16,
   "mixedLosses": 18,
   "genderWins": 14,
   "genderLosses": 18,
   "clutchWins": 12,
   "clutchLosses": 10,
   "winPct": 45.5,
   "diff": -26,
   "ppg": 18.1,
   "leagueRank": 98,
   "rating": -0.3,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8"
  },
  {
   "name": "Bob Debarge",
   "gender": "Male",
   "team": "Monroe",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 24,
   "losses": 29,
   "pointsWon": 940,
   "totalPointsAgainst": 988,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 14,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 45.3,
   "diff": -48,
   "ppg": 17.7,
   "leagueRank": 104,
   "rating": -0.1,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "e0d98c57-92dd-4719-ab14-3635205f3328"
  },
  {
   "name": "Mary Ann Villamor",
   "gender": "Female",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 9,
   "losses": 11,
   "pointsWon": 381,
   "totalPointsAgainst": 371,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 45,
   "diff": 10,
   "ppg": 19.1,
   "leagueRank": 100,
   "rating": -0.4,
   "ratingGames": 20,
   "confidence": 81,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "66903b1a-7538-4953-8360-cb8060604780"
  },
  {
   "name": "Kathi Sheehan",
   "gender": "Female",
   "team": "Home Court",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 19,
   "losses": 24,
   "pointsWon": 799,
   "totalPointsAgainst": 817,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 10,
   "winPct": 44.2,
   "diff": -18,
   "ppg": 18.6,
   "leagueRank": 89,
   "rating": -0.1,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "074e66af-6079-4c8e-aa69-e01f488ba5b0"
  },
  {
   "name": "Randy Kraftsow",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 14,
   "losses": 18,
   "pointsWon": 558,
   "totalPointsAgainst": 628,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 43.8,
   "diff": -70,
   "ppg": 17.4,
   "leagueRank": 122,
   "rating": -0.3,
   "ratingGames": 32,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "b4abc444-82dd-446c-b55e-ad3ca1610ebd"
  },
  {
   "name": "Brett Wilson",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 16,
   "losses": 21,
   "pointsWon": 680,
   "totalPointsAgainst": 696,
   "mixedWins": 10,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 43.2,
   "diff": -16,
   "ppg": 18.4,
   "leagueRank": 95,
   "rating": -0.7,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e"
  },
  {
   "name": "Calvin Giles",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 378,
   "totalPointsAgainst": 402,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -24,
   "ppg": 18,
   "leagueRank": 141,
   "rating": -1.1,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "6e9ad16e-485c-47b3-90fc-d713d861ca16"
  },
  {
   "name": "George Nouaime",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 25,
   "losses": 34,
   "pointsWon": 1036,
   "totalPointsAgainst": 1111,
   "mixedWins": 9,
   "mixedLosses": 17,
   "genderWins": 16,
   "genderLosses": 17,
   "clutchWins": 8,
   "clutchLosses": 10,
   "winPct": 42.4,
   "diff": -75,
   "ppg": 17.6,
   "leagueRank": 115,
   "rating": -0.4,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "379ba4b1-4102-4424-bdee-300e8e4fa35b"
  },
  {
   "name": "Charlie Kissane",
   "gender": "Male",
   "team": "ACE",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 8,
   "losses": 11,
   "pointsWon": 333,
   "totalPointsAgainst": 365,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 42.1,
   "diff": -32,
   "ppg": 17.5,
   "leagueRank": 155,
   "rating": -4,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1,
   "playerId": "093ee16e-d05f-4cd5-a93c-ea5ec98debac"
  },
  {
   "name": "Hafeez Saheed",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 16,
   "losses": 22,
   "pointsWon": 657,
   "totalPointsAgainst": 712,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 42.1,
   "diff": -55,
   "ppg": 17.3,
   "leagueRank": 109,
   "rating": -2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "name": "Reginald Escusa",
   "gender": "Male",
   "team": "Home Court",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 18,
   "losses": 25,
   "pointsWon": 801,
   "totalPointsAgainst": 803,
   "mixedWins": 6,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 41.9,
   "diff": -2,
   "ppg": 18.6,
   "leagueRank": 87,
   "rating": -0.6,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.6,
   "playerId": "0e46e51a-0af8-4bdc-afb1-f73098c1534b"
  },
  {
   "name": "Steven Ditizii",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 225,
   "totalPointsAgainst": 220,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "f4367c50-f924-4bd9-b825-78ee61e92c43",
   "winPct": 41.7,
   "diff": 5,
   "ppg": 18.8,
   "leagueRank": 153,
   "rating": 0.3,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Mark Leusner",
   "gender": "Male",
   "team": "Players Courtyard Wave",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 224,
   "totalPointsAgainst": 231,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "b6029771-28c1-4404-90d5-31cfc8bfaa29",
   "winPct": 41.7,
   "diff": -7,
   "ppg": 18.7,
   "leagueRank": 172,
   "rating": 0.3,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Sheila Curran",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 12,
   "losses": 17,
   "pointsWon": 515,
   "totalPointsAgainst": 535,
   "mixedWins": 3,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 41.4,
   "diff": -20,
   "ppg": 17.8,
   "leagueRank": 105,
   "rating": -0.3,
   "ratingGames": 29,
   "confidence": 86,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "name": "Kara Chubrik",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 18,
   "losses": 26,
   "pointsWon": 793,
   "totalPointsAgainst": 854,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 9,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 10,
   "winPct": 40.9,
   "diff": -61,
   "ppg": 18,
   "leagueRank": 112,
   "rating": -1.2,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "6848f02a-1acc-47f8-8743-3525311031a9"
  },
  {
   "name": "Matthew Colasanto",
   "gender": "Male",
   "team": "Monroe",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 21,
   "losses": 31,
   "pointsWon": 873,
   "totalPointsAgainst": 1002,
   "mixedWins": 9,
   "mixedLosses": 14,
   "genderWins": 12,
   "genderLosses": 17,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 40.4,
   "diff": -129,
   "ppg": 16.8,
   "leagueRank": 126,
   "rating": -1.7,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b"
  },
  {
   "name": "Kathy Demola",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 90,
   "totalPointsAgainst": 92,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "4fb2d558-dd30-4933-b80c-538cc63fedc0",
   "winPct": 40,
   "diff": -2,
   "ppg": 18,
   "leagueRank": 177,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Kristin Duva",
   "gender": "Female",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 14,
   "losses": 21,
   "pointsWon": 630,
   "totalPointsAgainst": 685,
   "mixedWins": 6,
   "mixedLosses": 10,
   "genderWins": 8,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 40,
   "diff": -55,
   "ppg": 18,
   "leagueRank": 123,
   "rating": -0.5,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "33bedbfd-6715-4614-8662-650a8bc4c678"
  },
  {
   "name": "Richard Ricciardi",
   "gender": "Male",
   "team": "Monroe",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 22,
   "losses": 33,
   "pointsWon": 993,
   "totalPointsAgainst": 1068,
   "mixedWins": 12,
   "mixedLosses": 18,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 11,
   "winPct": 40,
   "diff": -75,
   "ppg": 18.1,
   "leagueRank": 117,
   "rating": -0.2,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "705bad48-cc2d-40fe-b96f-409996010d0d"
  },
  {
   "name": "Mark Scott",
   "gender": "Male",
   "team": "Pickleball Lehigh Valley",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 19,
   "losses": 29,
   "pointsWon": 856,
   "totalPointsAgainst": 924,
   "mixedWins": 11,
   "mixedLosses": 13,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 39.6,
   "diff": -68,
   "ppg": 17.8,
   "leagueRank": 116,
   "rating": -1,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "08af9a6c-0a54-4c19-850c-377b20ae49d0"
  },
  {
   "name": "Scott Heist",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 17,
   "losses": 26,
   "pointsWon": 764,
   "totalPointsAgainst": 797,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 39.5,
   "diff": -33,
   "ppg": 17.8,
   "leagueRank": 106,
   "rating": -1.2,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "3949f105-cb2f-459e-8396-d0d76a350480"
  },
  {
   "name": "Bonnie Russo",
   "gender": "Female",
   "team": "Monroe",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 15,
   "losses": 23,
   "pointsWon": 653,
   "totalPointsAgainst": 736,
   "mixedWins": 8,
   "mixedLosses": 14,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 39.5,
   "diff": -83,
   "ppg": 17.2,
   "leagueRank": 124,
   "rating": -2.3,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "c32a3777-ab2f-457c-9232-39bee809dfc9"
  },
  {
   "name": "Patrick Phalen",
   "gender": "Male",
   "team": "Montville",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 12,
   "losses": 19,
   "pointsWon": 526,
   "totalPointsAgainst": 589,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 38.7,
   "diff": -63,
   "ppg": 17,
   "leagueRank": 133,
   "rating": -0.9,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "7cd73785-7cfc-490b-a713-26de64646d1c"
  },
  {
   "name": "Mary Foster",
   "gender": "Female",
   "team": "Players Courtyard Wave",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 22,
   "losses": 35,
   "pointsWon": 979,
   "totalPointsAgainst": 1082,
   "mixedWins": 5,
   "mixedLosses": 22,
   "genderWins": 17,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 38.6,
   "diff": -103,
   "ppg": 17.2,
   "leagueRank": 130,
   "rating": -0.2,
   "ratingGames": 57,
   "confidence": 91,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "71b7fe55-42fb-4b59-a77c-c14d62384125"
  },
  {
   "name": "Howard Eng",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 22,
   "losses": 36,
   "pointsWon": 1032,
   "totalPointsAgainst": 1113,
   "mixedWins": 12,
   "mixedLosses": 17,
   "genderWins": 10,
   "genderLosses": 19,
   "clutchWins": 8,
   "clutchLosses": 10,
   "winPct": 37.9,
   "diff": -81,
   "ppg": 17.8,
   "leagueRank": 131,
   "rating": 0.9,
   "ratingGames": 58,
   "confidence": 92,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.4,
   "playerId": "7727f912-4c91-468e-bc39-42aa85e084ab"
  },
  {
   "name": "Michelle Smith",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 14,
   "losses": 23,
   "pointsWon": 625,
   "totalPointsAgainst": 704,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 37.8,
   "diff": -79,
   "ppg": 16.9,
   "leagueRank": 125,
   "rating": -2.4,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "1e1ed1c7-86b8-4b90-ae25-eb543727e2b7"
  },
  {
   "name": "Tracy Waffenfeld",
   "gender": "Male",
   "team": "Montville",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 10,
   "losses": 17,
   "pointsWon": 450,
   "totalPointsAgainst": 515,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 37,
   "diff": -65,
   "ppg": 16.7,
   "leagueRank": 135,
   "rating": -2.2,
   "ratingGames": 27,
   "confidence": 85,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "2bc6c3c4-805a-4584-bbb9-6185448a3298"
  },
  {
   "name": "Jay Scheinman",
   "gender": "Male",
   "team": "Monroe",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 21,
   "losses": 36,
   "pointsWon": 968,
   "totalPointsAgainst": 1094,
   "mixedWins": 7,
   "mixedLosses": 21,
   "genderWins": 14,
   "genderLosses": 15,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 36.8,
   "diff": -126,
   "ppg": 17,
   "leagueRank": 127,
   "rating": -2.9,
   "ratingGames": 57,
   "confidence": 92,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "20efc741-170d-4866-a65a-add828350b9b"
  },
  {
   "name": "Bill Gold",
   "gender": "Male",
   "team": "Montville",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 11,
   "losses": 19,
   "pointsWon": 510,
   "totalPointsAgainst": 590,
   "mixedWins": 6,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 36.7,
   "diff": -80,
   "ppg": 17,
   "leagueRank": 136,
   "rating": -1.2,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "368337c0-e1f6-4cd2-89ec-41b1e06042ea"
  },
  {
   "name": "Paul Glickenhaus",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 188,
   "totalPointsAgainst": 196,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "7a41c8d6-ca5f-4bc5-8299-9e63b5ce97cd",
   "winPct": 36.4,
   "diff": -8,
   "ppg": 17.1,
   "leagueRank": 179,
   "rating": 0.5,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Ira Krassan",
   "gender": "Male",
   "team": "ACE",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 9,
   "losses": 16,
   "pointsWon": 450,
   "totalPointsAgainst": 450,
   "mixedWins": 4,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 36,
   "diff": 0,
   "ppg": 18,
   "leagueRank": 120,
   "rating": -1.7,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "03de01b1-2236-46cf-a94d-6f98cb142ddd"
  },
  {
   "name": "Sean Wilson",
   "gender": "Male",
   "team": "Pickleball Lehigh Valley",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 20,
   "losses": 36,
   "pointsWon": 1003,
   "totalPointsAgainst": 1091,
   "mixedWins": 10,
   "mixedLosses": 16,
   "genderWins": 10,
   "genderLosses": 20,
   "clutchWins": 7,
   "clutchLosses": 16,
   "winPct": 35.7,
   "diff": -88,
   "ppg": 17.9,
   "leagueRank": 121,
   "rating": -0.7,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "8682646a-b77e-4015-96a1-78fd223fd918"
  },
  {
   "name": "Nami Huang",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 16,
   "losses": 30,
   "pointsWon": 822,
   "totalPointsAgainst": 858,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 6,
   "genderLosses": 16,
   "clutchWins": 2,
   "clutchLosses": 11,
   "winPct": 34.8,
   "diff": -36,
   "ppg": 17.9,
   "leagueRank": 118,
   "rating": -1,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "481c21f0-8481-47e8-9eba-9ab21c167cf4"
  },
  {
   "name": "Sue Glass",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 24,
   "losses": 45,
   "pointsWon": 1160,
   "totalPointsAgainst": 1321,
   "mixedWins": 12,
   "mixedLosses": 21,
   "genderWins": 12,
   "genderLosses": 24,
   "clutchWins": 5,
   "clutchLosses": 11,
   "winPct": 34.8,
   "diff": -161,
   "ppg": 16.8,
   "leagueRank": 146,
   "rating": -0.8,
   "ratingGames": 69,
   "confidence": 93,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.2,
   "playerId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65"
  },
  {
   "name": "Ken Gross",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 20,
   "losses": 38,
   "pointsWon": 976,
   "totalPointsAgainst": 1120,
   "mixedWins": 12,
   "mixedLosses": 17,
   "genderWins": 8,
   "genderLosses": 21,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 34.5,
   "diff": -144,
   "ppg": 16.8,
   "leagueRank": 147,
   "rating": -0.7,
   "ratingGames": 58,
   "confidence": 92,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.4,
   "playerId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "name": "Lea Frank",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 12,
   "losses": 23,
   "pointsWon": 613,
   "totalPointsAgainst": 690,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 34.3,
   "diff": -77,
   "ppg": 17.5,
   "leagueRank": 132,
   "rating": -0.2,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "86364a42-9c6b-45f7-b67d-4b1bc5b4d7f7"
  },
  {
   "name": "Sandra Cassidy",
   "gender": "Female",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 14,
   "losses": 27,
   "pointsWon": 716,
   "totalPointsAgainst": 799,
   "mixedWins": 8,
   "mixedLosses": 15,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 34.1,
   "diff": -83,
   "ppg": 17.5,
   "leagueRank": 128,
   "rating": -1,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "7dd168b4-e6f6-4856-ac1a-685de96f17b4"
  },
  {
   "name": "Jeff Pillar",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 20,
   "losses": 39,
   "pointsWon": 1001,
   "totalPointsAgainst": 1125,
   "mixedWins": 9,
   "mixedLosses": 26,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 11,
   "winPct": 33.9,
   "diff": -124,
   "ppg": 17,
   "leagueRank": 129,
   "rating": -2.1,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6"
  },
  {
   "name": "Virna Schuck",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 108,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "39d80b41-0804-4cc7-b92f-b225849bb720",
   "winPct": 33.3,
   "diff": -8,
   "ppg": 18,
   "leagueRank": 194,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 2.2
  },
  {
   "name": "Jeff Kesner",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 105,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01",
   "winPct": 33.3,
   "diff": -10,
   "ppg": 17.5,
   "leagueRank": 191,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Holly Reinford",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 102,
   "totalPointsAgainst": 112,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "e6480c2c-59cd-48d0-945b-6f3bc3f566b5",
   "winPct": 33.3,
   "diff": -10,
   "ppg": 17,
   "leagueRank": 190,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Derrick Leikness",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 103,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "13a75bad-6627-4401-9c4d-d3b16f9c5f4d",
   "winPct": 33.3,
   "diff": -17,
   "ppg": 17.2,
   "leagueRank": 195,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0
  },
  {
   "name": "Jill Assante",
   "gender": "Female",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 10,
   "losses": 20,
   "pointsWon": 480,
   "totalPointsAgainst": 587,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -107,
   "ppg": 16,
   "leagueRank": 149,
   "rating": -2.4,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "3213af43-d560-41de-9963-8a647b7cc8a4"
  },
  {
   "name": "David Mcdonough",
   "gender": "Male",
   "team": "Players Courtyard Wave",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 15,
   "losses": 30,
   "pointsWon": 756,
   "totalPointsAgainst": 864,
   "mixedWins": 8,
   "mixedLosses": 16,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 33.3,
   "diff": -108,
   "ppg": 16.8,
   "leagueRank": 145,
   "rating": -0.2,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "7fc31e7b-bf19-43f2-a876-728d72287383"
  },
  {
   "name": "Jean Knab",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 70,
   "wins": 23,
   "losses": 47,
   "pointsWon": 1227,
   "totalPointsAgainst": 1345,
   "mixedWins": 12,
   "mixedLosses": 25,
   "genderWins": 11,
   "genderLosses": 22,
   "clutchWins": 4,
   "clutchLosses": 17,
   "winPct": 32.9,
   "diff": -118,
   "ppg": 17.5,
   "leagueRank": 139,
   "rating": 0.9,
   "ratingGames": 70,
   "confidence": 93,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "name": "Rani Gundavarapu",
   "gender": "Female",
   "team": "Montville",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 13,
   "losses": 27,
   "pointsWon": 686,
   "totalPointsAgainst": 783,
   "mixedWins": 6,
   "mixedLosses": 12,
   "genderWins": 7,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 32.5,
   "diff": -97,
   "ppg": 17.2,
   "leagueRank": 140,
   "rating": -0.1,
   "ratingGames": 40,
   "confidence": 89,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1,
   "playerId": "8b89397a-e680-47f5-bc37-151b91b6e157"
  },
  {
   "name": "Warren Meade",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 7,
   "losses": 16,
   "pointsWon": 405,
   "totalPointsAgainst": 462,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 30.4,
   "diff": -57,
   "ppg": 17.6,
   "leagueRank": 148,
   "rating": -1.6,
   "ratingGames": 23,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "57c42d81-72e1-4e3c-8f52-397d8030a513"
  },
  {
   "name": "David Cooley",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 13,
   "losses": 30,
   "pointsWon": 742,
   "totalPointsAgainst": 846,
   "mixedWins": 6,
   "mixedLosses": 14,
   "genderWins": 7,
   "genderLosses": 16,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 30.2,
   "diff": -104,
   "ppg": 17.3,
   "leagueRank": 134,
   "rating": -3.3,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "f0779bc8-629c-4623-a6fb-d85825784b9d"
  },
  {
   "name": "Debbie Carrano",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 8,
   "losses": 20,
   "pointsWon": 463,
   "totalPointsAgainst": 554,
   "mixedWins": 1,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 28.6,
   "diff": -91,
   "ppg": 16.5,
   "leagueRank": 158,
   "rating": -3.5,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "21122b6c-f414-471f-8485-080b0e014cab"
  },
  {
   "name": "Michelle Lehman",
   "gender": "Female",
   "team": "Players Courtyard Wave",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 14,
   "losses": 36,
   "pointsWon": 815,
   "totalPointsAgainst": 980,
   "mixedWins": 5,
   "mixedLosses": 18,
   "genderWins": 9,
   "genderLosses": 18,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 28,
   "diff": -165,
   "ppg": 16.3,
   "leagueRank": 156,
   "rating": -1.7,
   "ratingGames": 50,
   "confidence": 91,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.2,
   "playerId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "name": "Jerry Margulies",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 14,
   "losses": 37,
   "pointsWon": 883,
   "totalPointsAgainst": 1014,
   "mixedWins": 6,
   "mixedLosses": 17,
   "genderWins": 8,
   "genderLosses": 20,
   "clutchWins": 6,
   "clutchLosses": 11,
   "winPct": 27.5,
   "diff": -131,
   "ppg": 17.3,
   "leagueRank": 150,
   "rating": -0.8,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "name": "Joseph Koerner",
   "gender": "Male",
   "team": "Players Courtyard Wave",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 15,
   "losses": 40,
   "pointsWon": 854,
   "totalPointsAgainst": 1082,
   "mixedWins": 9,
   "mixedLosses": 21,
   "genderWins": 6,
   "genderLosses": 19,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 27.3,
   "diff": -228,
   "ppg": 15.5,
   "leagueRank": 162,
   "rating": -1.6,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "b49f166d-9cd4-4b86-961d-380dd8189a87"
  },
  {
   "name": "Karen Krusen",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 10,
   "losses": 27,
   "pointsWon": 621,
   "totalPointsAgainst": 699,
   "mixedWins": 5,
   "mixedLosses": 11,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 27,
   "diff": -78,
   "ppg": 16.8,
   "leagueRank": 152,
   "rating": -0.1,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "55e259be-63de-43c7-a5b2-3f6a191e2bdb"
  },
  {
   "name": "Linda Seemann",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 7,
   "losses": 19,
   "pointsWon": 434,
   "totalPointsAgainst": 505,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 26.9,
   "diff": -71,
   "ppg": 16.7,
   "leagueRank": 160,
   "rating": -1,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.8,
   "playerId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c"
  },
  {
   "name": "Cheryl Tarby",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 15,
   "losses": 41,
   "pointsWon": 941,
   "totalPointsAgainst": 1111,
   "mixedWins": 10,
   "mixedLosses": 15,
   "genderWins": 5,
   "genderLosses": 26,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 26.8,
   "diff": -170,
   "ppg": 16.8,
   "leagueRank": 157,
   "rating": -0.4,
   "ratingGames": 56,
   "confidence": 92,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.6,
   "playerId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "name": "Raymond Lormel",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 16,
   "losses": 44,
   "pointsWon": 980,
   "totalPointsAgainst": 1193,
   "mixedWins": 10,
   "mixedLosses": 22,
   "genderWins": 6,
   "genderLosses": 22,
   "clutchWins": 5,
   "clutchLosses": 12,
   "winPct": 26.7,
   "diff": -213,
   "ppg": 16.3,
   "leagueRank": 161,
   "rating": -1.7,
   "ratingGames": 60,
   "confidence": 92,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "c6bfaf46-bfa1-40eb-8774-04151364f747"
  },
  {
   "name": "Ray Suhocki",
   "gender": "Male",
   "team": "Pickleball Lehigh Valley",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 9,
   "losses": 27,
   "pointsWon": 619,
   "totalPointsAgainst": 713,
   "mixedWins": 5,
   "mixedLosses": 12,
   "genderWins": 4,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 25,
   "diff": -94,
   "ppg": 17.2,
   "leagueRank": 143,
   "rating": -2.7,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "f37395e3-2842-41e5-a849-16a964341f15"
  },
  {
   "name": "Eric Kirschner",
   "gender": "Male",
   "team": "Montville",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 5,
   "losses": 16,
   "pointsWon": 333,
   "totalPointsAgainst": 421,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 23.8,
   "diff": -88,
   "ppg": 15.9,
   "leagueRank": 171,
   "rating": -2.5,
   "ratingGames": 21,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "0bb58fc2-f7ba-4de8-9e1a-f691cb152b18"
  },
  {
   "name": "Jill Nixon",
   "gender": "Female",
   "team": "Players Courtyard Wave",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 202,
   "totalPointsAgainst": 267,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "playerId": "8c0ea31a-a5e4-49f4-b97c-703e6edfe6d2",
   "winPct": 23.1,
   "diff": -65,
   "ppg": 15.5,
   "leagueRank": 198,
   "rating": -4,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Christine Fletcher",
   "gender": "Female",
   "team": "Players Courtyard Wave",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 7,
   "losses": 26,
   "pointsWon": 513,
   "totalPointsAgainst": 652,
   "mixedWins": 4,
   "mixedLosses": 13,
   "genderWins": 3,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 21.2,
   "diff": -139,
   "ppg": 15.5,
   "leagueRank": 166,
   "rating": -1.7,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": -0.1,
   "playerId": "85b6cf96-6ca6-460f-924d-a70bce3ea487"
  },
  {
   "name": "Jayne Mayer",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 4,
   "losses": 15,
   "pointsWon": 301,
   "totalPointsAgainst": 383,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 21.1,
   "diff": -82,
   "ppg": 15.8,
   "leagueRank": 184,
   "rating": -2.6,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "c6743f83-5947-4eec-aca8-f4f19b1e7a35"
  },
  {
   "name": "Clare Scott",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 80,
   "totalPointsAgainst": 102,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "34c43b81-a4a2-4e8e-8bd2-b3d9f083a759",
   "winPct": 20,
   "diff": -22,
   "ppg": 16,
   "leagueRank": 200,
   "rating": -1.8,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Cynthia Wojtkowski",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 274,
   "totalPointsAgainst": 303,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 20,
   "diff": -29,
   "ppg": 18.3,
   "leagueRank": 181,
   "rating": -0.2,
   "ratingGames": 15,
   "confidence": 77,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "26b8531a-1f4c-4ffd-86ac-3ffb92eeee55"
  },
  {
   "name": "Clare Cruz",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 162,
   "totalPointsAgainst": 206,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "f54b54e0-be28-4155-a198-e63fc2ed0912",
   "winPct": 20,
   "diff": -44,
   "ppg": 16.2,
   "leagueRank": 197,
   "rating": -0.5,
   "ratingGames": 10,
   "confidence": 69,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Connie Cao",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 9,
   "losses": 38,
   "pointsWon": 685,
   "totalPointsAgainst": 946,
   "mixedWins": 7,
   "mixedLosses": 18,
   "genderWins": 2,
   "genderLosses": 20,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 19.1,
   "diff": -261,
   "ppg": 14.6,
   "leagueRank": 178,
   "rating": -3.5,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "6e5f012d-5fa9-4633-b91f-e4d216a8cc12"
  },
  {
   "name": "Francisco Miranda",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 8,
   "losses": 34,
   "pointsWon": 636,
   "totalPointsAgainst": 847,
   "mixedWins": 5,
   "mixedLosses": 18,
   "genderWins": 3,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 19,
   "diff": -211,
   "ppg": 15.1,
   "leagueRank": 175,
   "rating": -1.5,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.7,
   "playerId": "de5e7811-d3df-4987-9ca5-2a782f75b93b"
  },
  {
   "name": "Kristen Frendak",
   "gender": "Female",
   "team": "Montville",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 8,
   "losses": 35,
   "pointsWon": 665,
   "totalPointsAgainst": 879,
   "mixedWins": 4,
   "mixedLosses": 20,
   "genderWins": 4,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 18.6,
   "diff": -214,
   "ppg": 15.5,
   "leagueRank": 169,
   "rating": -2.7,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1,
   "playerId": "6389f8b2-7099-4e3a-ae3a-64cd8c99fcae"
  },
  {
   "name": "Michael Ross",
   "gender": "Male",
   "team": "Players Courtyard Wave",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 9,
   "losses": 41,
   "pointsWon": 736,
   "totalPointsAgainst": 1001,
   "mixedWins": 5,
   "mixedLosses": 19,
   "genderWins": 4,
   "genderLosses": 22,
   "clutchWins": 0,
   "clutchLosses": 7,
   "winPct": 18,
   "diff": -265,
   "ppg": 14.7,
   "leagueRank": 173,
   "rating": -3,
   "ratingGames": 50,
   "confidence": 91,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.1,
   "playerId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0"
  },
  {
   "name": "Mark Garner",
   "gender": "Male",
   "team": "Montville",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 6,
   "losses": 29,
   "pointsWon": 565,
   "totalPointsAgainst": 710,
   "mixedWins": 4,
   "mixedLosses": 14,
   "genderWins": 2,
   "genderLosses": 15,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 17.1,
   "diff": -145,
   "ppg": 16.1,
   "leagueRank": 167,
   "rating": -2.3,
   "ratingGames": 35,
   "confidence": 88,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "c9e3d3ee-24e9-437d-b770-fb4a3b5a37b3"
  },
  {
   "name": "Ed Mendoza",
   "gender": "Male",
   "team": "Players Courtyard Wave",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 4,
   "losses": 20,
   "pointsWon": 368,
   "totalPointsAgainst": 492,
   "mixedWins": 1,
   "mixedLosses": 10,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 16.7,
   "diff": -124,
   "ppg": 15.3,
   "leagueRank": 185,
   "rating": -2.9,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": -0.3,
   "playerId": "cb4a8451-13f9-4c27-8dc6-847fea7be9b4"
  },
  {
   "name": "Franchesa Mclean",
   "gender": "Female",
   "team": "Players Courtyard Wave",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 4,
   "losses": 21,
   "pointsWon": 382,
   "totalPointsAgainst": 509,
   "mixedWins": 1,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16,
   "diff": -127,
   "ppg": 15.3,
   "leagueRank": 188,
   "rating": -1.3,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1,
   "playerId": "84a3279f-7449-4f3a-9d37-1cb1bfe2c45e"
  },
  {
   "name": "Brian Schartz",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 201,
   "totalPointsAgainst": 261,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 15.4,
   "diff": -60,
   "ppg": 15.5,
   "leagueRank": 199,
   "rating": -2.3,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.8,
   "playerId": "6d468ccd-ec39-47be-8f06-028c695af323"
  },
  {
   "name": "Elizabeth Dziekonska",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 7,
   "losses": 39,
   "pointsWon": 676,
   "totalPointsAgainst": 923,
   "mixedWins": 4,
   "mixedLosses": 20,
   "genderWins": 3,
   "genderLosses": 19,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 15.2,
   "diff": -247,
   "ppg": 14.7,
   "leagueRank": 180,
   "rating": -4.1,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.2,
   "playerId": "028e04cc-f2eb-4248-a442-e2c874d224c6"
  },
  {
   "name": "Terri Pflueger",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 111,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7",
   "winPct": 14.3,
   "diff": -30,
   "ppg": 15.9,
   "leagueRank": 201,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Diane Otoole",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 97,
   "totalPointsAgainst": 135,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "78b94466-c121-4530-a60e-aa415cc73ba8",
   "winPct": 14.3,
   "diff": -38,
   "ppg": 13.9,
   "leagueRank": 203,
   "rating": -2.5,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Luz Bonner",
   "gender": "Female",
   "team": "Players Courtyard Wave",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 6,
   "losses": 37,
   "pointsWon": 642,
   "totalPointsAgainst": 881,
   "mixedWins": 1,
   "mixedLosses": 21,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 14,
   "diff": -239,
   "ppg": 14.9,
   "leagueRank": 182,
   "rating": -2.6,
   "ratingGames": 43,
   "confidence": 90,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "name": "Victoria Marchok",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 5,
   "losses": 32,
   "pointsWon": 505,
   "totalPointsAgainst": 751,
   "mixedWins": 5,
   "mixedLosses": 16,
   "genderWins": 0,
   "genderLosses": 16,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 13.5,
   "diff": -246,
   "ppg": 13.6,
   "leagueRank": 187,
   "rating": -4.3,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "106bdd70-60f1-4cf1-aaa9-fbe99c1d8bc7"
  },
  {
   "name": "Tom Giunta",
   "gender": "Male",
   "team": "Players Courtyard Wave",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 6,
   "losses": 40,
   "pointsWon": 624,
   "totalPointsAgainst": 943,
   "mixedWins": 2,
   "mixedLosses": 20,
   "genderWins": 4,
   "genderLosses": 20,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 13,
   "diff": -319,
   "ppg": 13.6,
   "leagueRank": 186,
   "rating": -2.7,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.2,
   "playerId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "name": "Tracey Klemick",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 1,
   "losses": 8,
   "pointsWon": 161,
   "totalPointsAgainst": 187,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "ee0ab5ac-db12-47f7-bcdb-1a9d452e0ff0",
   "winPct": 11.1,
   "diff": -26,
   "ppg": 17.9,
   "leagueRank": 193,
   "rating": -3.1,
   "ratingGames": 9,
   "confidence": 66,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Arnold Witte",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 4,
   "losses": 32,
   "pointsWon": 560,
   "totalPointsAgainst": 734,
   "mixedWins": 3,
   "mixedLosses": 16,
   "genderWins": 1,
   "genderLosses": 16,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 11.1,
   "diff": -174,
   "ppg": 15.6,
   "leagueRank": 176,
   "rating": -3,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0,
   "playerId": "b7955946-3573-43a8-912d-0e851e0ca827"
  },
  {
   "name": "Danya George",
   "gender": "Female",
   "team": "Players Courtyard Wave",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 6,
   "losses": 50,
   "pointsWon": 718,
   "totalPointsAgainst": 1149,
   "mixedWins": 3,
   "mixedLosses": 28,
   "genderWins": 3,
   "genderLosses": 22,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 10.7,
   "diff": -431,
   "ppg": 12.8,
   "leagueRank": 189,
   "rating": -5.2,
   "ratingGames": 56,
   "confidence": 92,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0,
   "playerId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "name": "Victoria Monaghan",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 146,
   "totalPointsAgainst": 208,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "97226c62-c274-4898-b99a-ae94e89da4f7",
   "winPct": 10,
   "diff": -62,
   "ppg": 14.6,
   "leagueRank": 202,
   "rating": -3.4,
   "ratingGames": 10,
   "confidence": 69,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Todd Gelfand",
   "gender": "Male",
   "team": "Players Courtyard Wave",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 114,
   "totalPointsAgainst": 207,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 10,
   "diff": -93,
   "ppg": 11.4,
   "leagueRank": 205,
   "rating": -3.6,
   "ratingGames": 10,
   "confidence": 68,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 1,
   "playerId": "370d2bae-330f-4377-b277-2ad2b1b6937e"
  },
  {
   "name": "Joseph Carrado",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 2,
   "losses": 28,
   "pointsWon": 393,
   "totalPointsAgainst": 624,
   "mixedWins": 1,
   "mixedLosses": 11,
   "genderWins": 1,
   "genderLosses": 17,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 6.7,
   "diff": -231,
   "ppg": 13.1,
   "leagueRank": 192,
   "rating": -5.4,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.1,
   "playerId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528"
  },
  {
   "name": "Edward Verish",
   "gender": "Male",
   "team": "Players Courtyard Wave",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 1,
   "losses": 40,
   "pointsWon": 459,
   "totalPointsAgainst": 859,
   "mixedWins": 0,
   "mixedLosses": 21,
   "genderWins": 1,
   "genderLosses": 19,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 2.4,
   "diff": -400,
   "ppg": 11.2,
   "leagueRank": 196,
   "rating": -6.2,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.3,
   "playerId": "bcbd0332-5104-40b6-a2a1-78fc174a0392"
  },
  {
   "name": "Hal Ornstein",
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
   "leagueRank": 224,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b781467d-013c-4c0b-85ed-d73ec716d701"
  },
  {
   "name": "Margaret Maurizi",
   "gender": "Female",
   "team": "Players Courtyard Wave",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 2,
   "wins": 0,
   "losses": 2,
   "pointsWon": 25,
   "totalPointsAgainst": 42,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "3f0df1b9-651c-4b4c-bca6-02fc0b49649b",
   "winPct": 0,
   "diff": -17,
   "ppg": 12.5,
   "leagueRank": 208,
   "rating": -1.2,
   "ratingGames": 2,
   "confidence": 31,
   "strengthOfPartners": -3.1,
   "strengthOfOpponents": 1
  },
  {
   "name": "Christy Walker",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 91,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "4076828c-aa6f-47c8-b495-55eed2afe29d",
   "winPct": 0,
   "diff": -35,
   "ppg": 15.2,
   "leagueRank": 204,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Joan Guadagnino",
   "gender": "Female",
   "team": "Pickleball Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 61,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "4da06bf7-dabf-4165-96c1-27ec54831422",
   "winPct": 0,
   "diff": -44,
   "ppg": 12.2,
   "leagueRank": 206,
   "rating": -4.6,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Denise Teter",
   "gender": "Female",
   "team": "Bounce Malvern",
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
   "leagueRank": 207,
   "rating": -2.4,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 2,
   "playerId": "b1ad67fc-ade5-4907-b41e-30fa6af56d57"
  },
  {
   "name": "Christine Aiese",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 67,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "d246e3f9-0b65-4dfb-bdea-eccaa6ea8d24",
   "winPct": 0,
   "diff": -59,
   "ppg": 11.2,
   "leagueRank": 209,
   "rating": -2.8,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Elsie Garcia",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 61,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "5e086f9d-8026-4ba1-8a9a-f67aa0ce78dd",
   "winPct": 0,
   "diff": -65,
   "ppg": 10.2,
   "leagueRank": 210,
   "rating": -4,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.5
  }
 ],
 "teams": [
  {
   "name": "Players Courtyard Surge",
   "w": 11,
   "l": 0,
   "pf": 7155,
   "pa": 5610,
   "gw": 269,
   "gl": 83,
   "diff": 1545,
   "gameDiff": 186,
   "power": 2,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     139,
     37
    ],
    "male": [
     70,
     18
    ],
    "female": [
     60,
     28
    ]
   }
  },
  {
   "name": "ACE",
   "w": 10,
   "l": 2,
   "pf": 7591,
   "pa": 6461,
   "gw": 257,
   "gl": 127,
   "diff": 1130,
   "gameDiff": 130,
   "power": 1.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     130,
     62
    ],
    "male": [
     54,
     42
    ],
    "female": [
     73,
     23
    ]
   }
  },
  {
   "name": "Flemington Blue",
   "w": 8,
   "l": 2,
   "pf": 6127,
   "pa": 5816,
   "gw": 186,
   "gl": 134,
   "diff": 311,
   "gameDiff": 52,
   "power": 0.8,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     85,
     75
    ],
    "male": [
     42,
     38
    ],
    "female": [
     59,
     21
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 7,
   "l": 3,
   "pf": 6243,
   "pa": 5904,
   "gw": 181,
   "gl": 139,
   "diff": 339,
   "gameDiff": 42,
   "power": 1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     93,
     67
    ],
    "male": [
     51,
     29
    ],
    "female": [
     37,
     43
    ]
   }
  },
  {
   "name": "Pickleball Lehigh Valley",
   "w": 6,
   "l": 4,
   "pf": 6100,
   "pa": 6196,
   "gw": 150,
   "gl": 170,
   "diff": -96,
   "gameDiff": -20,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     82,
     78
    ],
    "male": [
     35,
     45
    ],
    "female": [
     33,
     47
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 6,
   "l": 6,
   "pf": 7116,
   "pa": 7245,
   "gw": 189,
   "gl": 195,
   "diff": -129,
   "gameDiff": -6,
   "power": 0.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     89,
     103
    ],
    "male": [
     49,
     47
    ],
    "female": [
     51,
     45
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 6,
   "l": 6,
   "pf": 7048,
   "pa": 7115,
   "gw": 186,
   "gl": 198,
   "diff": -67,
   "gameDiff": -12,
   "power": 0.1,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     88,
     104
    ],
    "male": [
     56,
     40
    ],
    "female": [
     42,
     54
    ]
   }
  },
  {
   "name": "Flemington Green",
   "w": 3,
   "l": 7,
   "pf": 6104,
   "pa": 6038,
   "gw": 161,
   "gl": 159,
   "diff": 66,
   "gameDiff": 2,
   "power": 0.1,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     81,
     79
    ],
    "male": [
     36,
     44
    ],
    "female": [
     44,
     36
    ]
   }
  },
  {
   "name": "Montville",
   "w": 1,
   "l": 9,
   "pf": 5758,
   "pa": 6200,
   "gw": 136,
   "gl": 184,
   "diff": -442,
   "gameDiff": -48,
   "power": 0,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     69,
     91
    ],
    "male": [
     38,
     42
    ],
    "female": [
     29,
     51
    ]
   }
  },
  {
   "name": "Players Courtyard Wave",
   "w": 1,
   "l": 10,
   "pf": 5603,
   "pa": 6998,
   "gw": 99,
   "gl": 253,
   "diff": -1395,
   "gameDiff": -154,
   "power": -1.5,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     44,
     132
    ],
    "male": [
     24,
     64
    ],
    "female": [
     31,
     57
    ]
   }
  },
  {
   "name": "Mercer Bucks",
   "w": 1,
   "l": 11,
   "pf": 6371,
   "pa": 7633,
   "gw": 106,
   "gl": 278,
   "diff": -1262,
   "gameDiff": -172,
   "power": -1.3,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     60,
     132
    ],
    "male": [
     25,
     71
    ],
    "female": [
     21,
     75
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Linda Seemann",
   "b": "Maureen Bruno",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.6,
   "avgActual": 4,
   "avgExpected": -1.2,
   "aId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Pete Dunn",
   "b": "Lawrence Padersky",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 7.3,
   "avgExpected": 1.5,
   "aId": "8e45f538-d95a-4554-9ccf-443a06b5a89e",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Scott Heist",
   "b": "Peggy Matzen",
   "team": "Flemington Green",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 2.4,
   "avgActual": 2.8,
   "avgExpected": -1.1,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Victoria Marchok",
   "b": "Jason Belmont",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.4,
   "avgActual": 2.3,
   "avgExpected": -3.2,
   "aId": "106bdd70-60f1-4cf1-aaa9-fbe99c1d8bc7",
   "bId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c"
  },
  {
   "a": "Kelley Batejan",
   "b": "Andrea Schwab",
   "team": "ACE",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 10,
   "avgExpected": 5.2,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "605d7726-f903-4606-ad3d-14964b9e2e1b"
  },
  {
   "a": "Mike Hardy",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 7.3,
   "avgExpected": 2.8,
   "aId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Bonnie Russo",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 4.7,
   "avgExpected": -0.8,
   "aId": "c32a3777-ab2f-457c-9232-39bee809dfc9",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Rick Weiser",
   "b": "William Askin",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 8,
   "avgExpected": 2.9,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3"
  },
  {
   "a": "Theresa Corderi",
   "b": "Robert Lee",
   "team": "Montville",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 9.2,
   "avgExpected": 5.6,
   "aId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821",
   "bId": "c7ffa10b-a10b-4adc-9fb6-46ed7afaeecb"
  },
  {
   "a": "Angela Bartelt",
   "b": "Heidi Weinroth",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 5.3,
   "avgExpected": 0.2,
   "aId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc",
   "bId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2"
  },
  {
   "a": "Theresa Corderi",
   "b": "Patrick Phalen",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 6.3,
   "avgExpected": 1.4,
   "aId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821",
   "bId": "7cd73785-7cfc-490b-a713-26de64646d1c"
  },
  {
   "a": "Colleen Derose",
   "b": "Amy Clayman",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 7.8,
   "avgExpected": 3.5,
   "aId": "1b8d34a3-9006-4e6f-b475-e5f3b4f7e814",
   "bId": "224e578f-ce44-4dbe-94d7-4e4dda113c63"
  },
  {
   "a": "Darlene Fusco",
   "b": "Denise Stevens",
   "team": "Pickleball Lehigh Valley",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 2,
   "avgActual": 3.1,
   "avgExpected": 0,
   "aId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4",
   "bId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "a": "Zalene Corey",
   "b": "Mary Hain",
   "team": "Bounce Malvern",
   "n": 16,
   "w": 8,
   "l": 8,
   "synergy": 2,
   "avgActual": 1.9,
   "avgExpected": -0.7,
   "aId": "e0ffa27a-6b29-48f8-b162-154c995b3d97",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Renee Froeberg",
   "b": "Jack Tran",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 9.7,
   "avgExpected": 5,
   "aId": "3804b024-a017-4fa2-90d3-5d726e764f44",
   "bId": "dbe6ecd1-6aad-4f8f-bc44-702ef0be5667"
  },
  {
   "a": "Sam Doctor",
   "b": "David Cooley",
   "team": "Flemington Green",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 4,
   "avgExpected": 0.2,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "f0779bc8-629c-4623-a6fb-d85825784b9d"
  },
  {
   "a": "Ralph Lovelidge",
   "b": "Lea Frank",
   "team": "Pickleball Lehigh Valley",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 4.6,
   "avgExpected": 1.2,
   "aId": "4c163a81-fd29-498c-bf1b-4337a8215ad4",
   "bId": "86364a42-9c6b-45f7-b67d-4b1bc5b4d7f7"
  },
  {
   "a": "Olga Turova",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 5.3,
   "avgExpected": 1.6,
   "aId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Christine Steigerwalt",
   "b": "Ralph Lovelidge",
   "team": "Pickleball Lehigh Valley",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 5.6,
   "avgExpected": 2.4,
   "aId": "33f1ae41-08db-4067-b5f5-f9324faf93f0",
   "bId": "4c163a81-fd29-498c-bf1b-4337a8215ad4"
  },
  {
   "a": "Christine Steigerwalt",
   "b": "Suzane Sullivan",
   "team": "Pickleball Lehigh Valley",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 4.5,
   "avgExpected": 1.8,
   "aId": "33f1ae41-08db-4067-b5f5-f9324faf93f0",
   "bId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6"
  },
  {
   "a": "Dave Sarmir",
   "b": "Butch Kreilick",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 5.7,
   "avgExpected": 1.5,
   "aId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Bob Debarge",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 6.7,
   "avgExpected": 2.4,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "e0d98c57-92dd-4719-ab14-3635205f3328"
  },
  {
   "a": "Natalia Fischer",
   "b": "Tao Zhu",
   "team": "Flemington Blue",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 4.5,
   "avgExpected": 1.5,
   "aId": "79578efc-55c2-49fb-9f69-2f776055ff70",
   "bId": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91"
  },
  {
   "a": "Darlene Fusco",
   "b": "Sean Wilson",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 2.3,
   "avgExpected": -1.9,
   "aId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4",
   "bId": "8682646a-b77e-4015-96a1-78fd223fd918"
  },
  {
   "a": "Bill Lam",
   "b": "Jack Tran",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 7.3,
   "avgExpected": 3.4,
   "aId": "7fe8e4a4-6d94-4cb2-831f-23e53d4a8603",
   "bId": "dbe6ecd1-6aad-4f8f-bc44-702ef0be5667"
  },
  {
   "a": "Suzane Sullivan",
   "b": "Scott Stenroos",
   "team": "Pickleball Lehigh Valley",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 2.9,
   "avgExpected": 0.4,
   "aId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6",
   "bId": "cd325aa6-3b7f-43a8-a671-4dcd4da4b9a8"
  },
  {
   "a": "David Corwin",
   "b": "Richard Fox",
   "team": "Players Courtyard Surge",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 6.4,
   "avgExpected": 3.4,
   "aId": "d026f18b-708f-49ce-99a2-77267ee0256e",
   "bId": "ef0bc1ce-6709-4172-97a6-8ea5a462bea4"
  },
  {
   "a": "Andrea Finnegan",
   "b": "Dawn Gordon",
   "team": "ACE",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 5,
   "avgExpected": 1.7,
   "aId": "1e06822c-9c02-48d2-a4f7-6b3f71bd7d4b",
   "bId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "a": "Karen Veninger",
   "b": "Diane Bracco",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 6,
   "avgExpected": 2.5,
   "aId": "9057a78b-0136-4bb6-92e9-508f621b51e1",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Christina Samtmann",
   "b": "Scott Nissenbaum",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 5.5,
   "avgExpected": 2.7,
   "aId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce",
   "bId": "31690ced-f9c2-4b04-85cd-19ec22e55d48"
  },
  {
   "a": "Rick Weiser",
   "b": "Greg Taylor",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 9.3,
   "avgExpected": 5.3,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
  },
  {
   "a": "Nami Huang",
   "b": "Ray Suhocki",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 1.3,
   "avgExpected": -2.1,
   "aId": "481c21f0-8481-47e8-9eba-9ab21c167cf4",
   "bId": "f37395e3-2842-41e5-a849-16a964341f15"
  },
  {
   "a": "Jeffrey Hartford",
   "b": "Paul Phillips",
   "team": "Flemington Blue",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 2.2,
   "avgExpected": -0.5,
   "aId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Connie Cao",
   "b": "Howard Eng",
   "team": "Mercer Bucks",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 1.6,
   "avgActual": 0.6,
   "avgExpected": -2,
   "aId": "6e5f012d-5fa9-4633-b91f-e4d216a8cc12",
   "bId": "7727f912-4c91-468e-bc39-42aa85e084ab"
  },
  {
   "a": "Scott Auty",
   "b": "Marc Schwegel",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 4,
   "avgExpected": 0.2,
   "aId": "53024744-72eb-4d56-b0c9-93a6201bdc33",
   "bId": "b57cfd69-646a-4a7c-8189-fa96df33602c"
  },
  {
   "a": "Hafeez Saheed",
   "b": "Holly Ferguson",
   "team": "Flemington Blue",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.6,
   "avgActual": -0.5,
   "avgExpected": -3.2,
   "aId": "a0d294b1-27ed-4751-ae6c-eadf62746d20",
   "bId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "a": "Ken Bienkowski",
   "b": "Diane Herbst",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3,
   "avgExpected": -0.5,
   "aId": "5cc85746-e4a6-432e-bfe5-8166f02867ce",
   "bId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9"
  },
  {
   "a": "Rani Gundavarapu",
   "b": "Mark Garner",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.5,
   "avgActual": -2.3,
   "avgExpected": -5.7,
   "aId": "8b89397a-e680-47f5-bc37-151b91b6e157",
   "bId": "c9e3d3ee-24e9-437d-b770-fb4a3b5a37b3"
  },
  {
   "a": "Tim Cassidy",
   "b": "Erik Jacobsen",
   "team": "Home Court",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 4.9,
   "avgExpected": 2.4,
   "aId": "122aa85d-c1ca-448c-a8ab-e62db8a80af6",
   "bId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "a": "Annette Marsh",
   "b": "Karen Veninger",
   "team": "Flemington Green",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 9,
   "avgExpected": 5.5,
   "aId": "5db7fb50-d1a1-4c3f-8d61-34ca1947300c",
   "bId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "a": "Ira Krassan",
   "b": "Scott Auty",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 2.5,
   "avgExpected": -0.5,
   "aId": "03de01b1-2236-46cf-a94d-6f98cb142ddd",
   "bId": "53024744-72eb-4d56-b0c9-93a6201bdc33"
  },
  {
   "a": "Ed Mendoza",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 1.5,
   "avgActual": -4.5,
   "avgExpected": -7.4,
   "aId": "cb4a8451-13f9-4c27-8dc6-847fea7be9b4",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "George Nouaime",
   "b": "Dan Callaghan",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 1.4,
   "avgActual": 2.3,
   "avgExpected": 0.3,
   "aId": "379ba4b1-4102-4424-bdee-300e8e4fa35b",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Karen Krusen",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 1,
   "avgExpected": -2.2,
   "aId": "55e259be-63de-43c7-a5b2-3f6a191e2bdb",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Eric Brezina",
   "b": "Cathy Matko",
   "team": "Flemington Blue",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 6.3,
   "avgExpected": 3.9,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "a": "Karen Krusen",
   "b": "Jean Knab",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 2,
   "avgExpected": -0.5,
   "aId": "55e259be-63de-43c7-a5b2-3f6a191e2bdb",
   "bId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "a": "Dawn Kempton",
   "b": "Amy Moore",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 5,
   "avgExpected": 2.2,
   "aId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170",
   "bId": "c037ad35-3550-447f-af7f-f62674d0c1ac"
  },
  {
   "a": "Andrea Schwab",
   "b": "Jason Fingerman",
   "team": "ACE",
   "n": 11,
   "w": 10,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 7.2,
   "avgExpected": 5.3,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Amy Moore",
   "b": "David Corwin",
   "team": "Players Courtyard Surge",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 8.4,
   "avgExpected": 6,
   "aId": "c037ad35-3550-447f-af7f-f62674d0c1ac",
   "bId": "d026f18b-708f-49ce-99a2-77267ee0256e"
  },
  {
   "a": "Jason Belmont",
   "b": "Jerry Margulies",
   "team": "Mercer Bucks",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 4.3,
   "avgExpected": 2.3,
   "aId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c",
   "bId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "a": "Edward Verish",
   "b": "Luz Bonner",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 1.3,
   "avgActual": -7.2,
   "avgExpected": -9.9,
   "aId": "bcbd0332-5104-40b6-a2a1-78fc174a0392",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "a": "Marc Schwegel",
   "b": "Jason Fingerman",
   "team": "ACE",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 8,
   "avgExpected": 5.4,
   "aId": "b57cfd69-646a-4a7c-8189-fa96df33602c",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Mary Foster",
   "b": "Franchesa Mclean",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 0.5,
   "avgExpected": -2,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "84a3279f-7449-4f3a-9d37-1cb1bfe2c45e"
  },
  {
   "a": "Kelley Batejan",
   "b": "Jason Fingerman",
   "team": "ACE",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 8,
   "avgExpected": 5.9,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Howard Eng",
   "b": "Jean Knab",
   "team": "Mercer Bucks",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 1.7,
   "avgExpected": -0.5,
   "aId": "7727f912-4c91-468e-bc39-42aa85e084ab",
   "bId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "a": "Tracy Waffenfeld",
   "b": "Jake Denooyer",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.3,
   "avgExpected": -0.7,
   "aId": "2bc6c3c4-805a-4584-bbb9-6185448a3298",
   "bId": "a314079a-16b7-42f5-be34-41e1672f7377"
  },
  {
   "a": "Elizabeth Dziekonska",
   "b": "Jerry Margulies",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.3,
   "avgActual": -2.7,
   "avgExpected": -5.7,
   "aId": "028e04cc-f2eb-4248-a442-e2c874d224c6",
   "bId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "a": "Sam Doctor",
   "b": "Scott Heist",
   "team": "Flemington Green",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.5,
   "avgExpected": 1.3,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "3949f105-cb2f-459e-8396-d0d76a350480"
  },
  {
   "a": "Jennifer Makfinsky",
   "b": "Bob Debarge",
   "team": "Monroe",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 4,
   "avgExpected": 1.7,
   "aId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8",
   "bId": "e0d98c57-92dd-4719-ab14-3635205f3328"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Bonnie Russo",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 0.7,
   "avgExpected": -2.4,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "c32a3777-ab2f-457c-9232-39bee809dfc9"
  },
  {
   "a": "Michelle Smith",
   "b": "Calvin Giles",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2,
   "avgExpected": -1.1,
   "aId": "1e1ed1c7-86b8-4b90-ae25-eb543727e2b7",
   "bId": "6e9ad16e-485c-47b3-90fc-d713d861ca16"
  },
  {
   "a": "Steven Heller",
   "b": "Angela Bartelt",
   "team": "Players Courtyard Surge",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3.3,
   "avgExpected": 1.2,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc"
  },
  {
   "a": "Joseph Koerner",
   "b": "Barb Mulckhuyse",
   "team": "Players Courtyard Wave",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.3,
   "avgExpected": 0.4,
   "aId": "b49f166d-9cd4-4b86-961d-380dd8189a87",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Dan Amabile",
   "b": "Peggy Matzen",
   "team": "Flemington Green",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 1.6,
   "avgExpected": -0.6,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Jerry O’Loughlin",
   "b": "Rachel Baluyot",
   "team": "Home Court",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 5.6,
   "avgExpected": 3.9,
   "aId": "0b2d484f-d8ca-4241-85ec-0ebb91b80e9e",
   "bId": "5e265a90-558b-4564-acd8-f358bab162a9"
  },
  {
   "a": "Nami Huang",
   "b": "Ralph Lovelidge",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.7,
   "avgExpected": 1.8,
   "aId": "481c21f0-8481-47e8-9eba-9ab21c167cf4",
   "bId": "4c163a81-fd29-498c-bf1b-4337a8215ad4"
  },
  {
   "a": "Greg Taylor",
   "b": "Lolita Hagen",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 6.7,
   "avgExpected": 3.9,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "a": "William Askin",
   "b": "Richard Fox",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 8,
   "avgExpected": 5.5,
   "aId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3",
   "bId": "ef0bc1ce-6709-4172-97a6-8ea5a462bea4"
  },
  {
   "a": "Christina Samtmann",
   "b": "Michelle Smith",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 0.8,
   "avgExpected": -1.6,
   "aId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce",
   "bId": "1e1ed1c7-86b8-4b90-ae25-eb543727e2b7"
  },
  {
   "a": "Eric Kirschner",
   "b": "Diane Herbst",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -2.7,
   "avgExpected": -5.1,
   "aId": "0bb58fc2-f7ba-4de8-9e1a-f691cb152b18",
   "bId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9"
  },
  {
   "a": "Kristin Duva",
   "b": "Ken Bienkowski",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 1.8,
   "avgExpected": -0.4,
   "aId": "33bedbfd-6715-4614-8662-650a8bc4c678",
   "bId": "5cc85746-e4a6-432e-bfe5-8166f02867ce"
  },
  {
   "a": "Matthew Colasanto",
   "b": "Jennifer Makfinsky",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 4.7,
   "avgExpected": 2.1,
   "aId": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
   "bId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
  },
  {
   "a": "Sue Glass",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.1,
   "avgActual": -0.9,
   "avgExpected": -2.5,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Connie Cao",
   "b": "Raymond Lormel",
   "team": "Mercer Bucks",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 1.1,
   "avgActual": -4.4,
   "avgExpected": -6.1,
   "aId": "6e5f012d-5fa9-4633-b91f-e4d216a8cc12",
   "bId": "c6bfaf46-bfa1-40eb-8774-04151364f747"
  },
  {
   "a": "Mary Foster",
   "b": "Michelle Lehman",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 2,
   "avgExpected": 0,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "a": "Mary Foster",
   "b": "David Mcdonough",
   "team": "Players Courtyard Wave",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 0.2,
   "avgExpected": -1.7,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "7fc31e7b-bf19-43f2-a876-728d72287383"
  },
  {
   "a": "Heidi Weinroth",
   "b": "William Askin",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 9.7,
   "avgExpected": 7.1,
   "aId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2",
   "bId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3"
  },
  {
   "a": "Sarah Stangota",
   "b": "Anthony Leone",
   "team": "Flemington Blue",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 1.1,
   "avgActual": 1.8,
   "avgExpected": 0.3,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Pete Certo",
   "b": "Pete Dunn",
   "team": "ACE",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 1.7,
   "avgExpected": -0.1,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "a": "Kristin Duva",
   "b": "Mark Garner",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -3.2,
   "avgExpected": -5.4,
   "aId": "33bedbfd-6715-4614-8662-650a8bc4c678",
   "bId": "c9e3d3ee-24e9-437d-b770-fb4a3b5a37b3"
  },
  {
   "a": "Dennis Higman",
   "b": "Richard Fox",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 12,
   "avgExpected": 9.4,
   "aId": "b8fabebb-fd0f-49a8-929a-defbac098e43",
   "bId": "ef0bc1ce-6709-4172-97a6-8ea5a462bea4"
  },
  {
   "a": "Jerry O’Loughlin",
   "b": "Mary Ann Villamor",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 4,
   "avgExpected": 1.8,
   "aId": "0b2d484f-d8ca-4241-85ec-0ebb91b80e9e",
   "bId": "66903b1a-7538-4953-8360-cb8060604780"
  },
  {
   "a": "Elizabeth Dziekonska",
   "b": "Jean Knab",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 1.2,
   "avgExpected": -0.8,
   "aId": "028e04cc-f2eb-4248-a442-e2c874d224c6",
   "bId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "a": "Michelle Smith",
   "b": "Dan Callaghan",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3.3,
   "avgExpected": 1,
   "aId": "1e1ed1c7-86b8-4b90-ae25-eb543727e2b7",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Bob Sochor",
   "b": "Joan Rudderow",
   "team": "Players Courtyard Surge",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1,
   "avgActual": 7,
   "avgExpected": 5.4,
   "aId": "27be2d93-9ffb-48be-a464-e0ab103426e3",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Jeffrey Lindstrom",
   "b": "Mary Hain",
   "team": "Bounce Malvern",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": 1,
   "avgActual": 0.4,
   "avgExpected": -1,
   "aId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Cheryl Tarby",
   "b": "Francisco Miranda",
   "team": "Mercer Bucks",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1,
   "avgActual": -1.5,
   "avgExpected": -3.2,
   "aId": "c131fed2-9bcb-427c-99c1-b507dda92320",
   "bId": "de5e7811-d3df-4987-9ca5-2a782f75b93b"
  },
  {
   "a": "Craig Mehnert",
   "b": "Tom Giunta",
   "team": "Players Courtyard Wave",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 0.5,
   "avgExpected": -1.2,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "a": "Joseph Koerner",
   "b": "Luz Bonner",
   "team": "Players Courtyard Wave",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 1,
   "avgActual": -4.7,
   "avgExpected": -6.3,
   "aId": "b49f166d-9cd4-4b86-961d-380dd8189a87",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "a": "Karen Veninger",
   "b": "Nancy Cook",
   "team": "Flemington Green",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 4,
   "avgExpected": 1.9,
   "aId": "9057a78b-0136-4bb6-92e9-508f621b51e1",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Dawn Kempton",
   "b": "Joan Rudderow",
   "team": "Players Courtyard Surge",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1,
   "avgActual": 6.2,
   "avgExpected": 4.5,
   "aId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Gail Hannagan",
   "b": "Sarah Stangota",
   "team": "Flemington Blue",
   "n": 9,
   "w": 9,
   "l": 0,
   "synergy": 1,
   "avgActual": 8,
   "avgExpected": 6.5,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Jeffrey Hartford",
   "b": "Holly Ferguson",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 3,
   "avgExpected": 1,
   "aId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235",
   "bId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "a": "Eric Brezina",
   "b": "Tao Zhu",
   "team": "Flemington Blue",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1,
   "avgActual": 6.4,
   "avgExpected": 4.9,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91"
  },
  {
   "a": "Jay Scheinman",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 12,
   "w": 9,
   "l": 3,
   "synergy": 1,
   "avgActual": 2.5,
   "avgExpected": 1.1,
   "aId": "20efc741-170d-4866-a65a-add828350b9b",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Warren Meade",
   "b": "Sarah Stangota",
   "team": "Flemington Blue",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": 0.4,
   "avgExpected": -1.4,
   "aId": "57c42d81-72e1-4e3c-8f52-397d8030a513",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Denise Rempson",
   "b": "Rachel Baluyot",
   "team": "Home Court",
   "n": 14,
   "w": 11,
   "l": 3,
   "synergy": 1,
   "avgActual": 3.9,
   "avgExpected": 2.6,
   "aId": "2e13698d-f902-43c1-b5b1-226d40d7af3d",
   "bId": "5e265a90-558b-4564-acd8-f358bab162a9"
  },
  {
   "a": "Jennifer Makfinsky",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 4.2,
   "avgExpected": 2.5,
   "aId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Christina Samtmann",
   "b": "Kim Slomeana",
   "team": "Bounce Malvern",
   "n": 12,
   "w": 6,
   "l": 6,
   "synergy": 1,
   "avgActual": 1,
   "avgExpected": -0.4,
   "aId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce",
   "bId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8"
  },
  {
   "a": "Steven Heller",
   "b": "William Askin",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 9.3,
   "avgExpected": 7.3,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3"
  },
  {
   "a": "Kara Chubrik",
   "b": "Marianne Rosato",
   "team": "Flemington Green",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 0.3,
   "avgExpected": -1.2,
   "aId": "6848f02a-1acc-47f8-8743-3525311031a9",
   "bId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3"
  },
  {
   "a": "Kathi Sheehan",
   "b": "Sandra Cassidy",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 0,
   "avgExpected": -2.4,
   "aId": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
   "bId": "7dd168b4-e6f6-4856-ac1a-685de96f17b4"
  },
  {
   "a": "Dawn Kempton",
   "b": "David Corwin",
   "team": "Players Courtyard Surge",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 6.4,
   "avgExpected": 5.2,
   "aId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170",
   "bId": "d026f18b-708f-49ce-99a2-77267ee0256e"
  },
  {
   "a": "David Mcdonough",
   "b": "Barb Mulckhuyse",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2.4,
   "avgExpected": 0.8,
   "aId": "7fc31e7b-bf19-43f2-a876-728d72287383",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Craig Mehnert",
   "b": "Joseph Koerner",
   "team": "Players Courtyard Wave",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.9,
   "avgActual": -0.4,
   "avgExpected": -1.7,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "b49f166d-9cd4-4b86-961d-380dd8189a87"
  },
  {
   "a": "Olga Khalev",
   "b": "Rachel Baluyot",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 4.3,
   "avgExpected": 2.2,
   "aId": "429103e6-a3b1-4cb1-853d-bb4b849df001",
   "bId": "5e265a90-558b-4564-acd8-f358bab162a9"
  },
  {
   "a": "Denise Stevens",
   "b": "Neil Pratesi",
   "team": "Pickleball Lehigh Valley",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.9,
   "avgActual": 1.7,
   "avgExpected": 0.4,
   "aId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576",
   "bId": "fc7750bb-ae3e-4c36-8114-5b61f56aca52"
  },
  {
   "a": "Lea Frank",
   "b": "Sean Wilson",
   "team": "Pickleball Lehigh Valley",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.9,
   "avgActual": -2.3,
   "avgExpected": -3.7,
   "aId": "86364a42-9c6b-45f7-b67d-4b1bc5b4d7f7",
   "bId": "8682646a-b77e-4015-96a1-78fd223fd918"
  },
  {
   "a": "Dan Amabile",
   "b": "Karen Veninger",
   "team": "Flemington Green",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.9,
   "avgActual": 0.2,
   "avgExpected": -1.4,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "a": "Scott Nissenbaum",
   "b": "Mary Hain",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.7,
   "avgExpected": 1.2,
   "aId": "31690ced-f9c2-4b04-85cd-19ec22e55d48",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Sue Glass",
   "b": "Cheryl Tarby",
   "team": "Mercer Bucks",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.9,
   "avgActual": 0.1,
   "avgExpected": -1.3,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "a": "Francisco Miranda",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": -0.3,
   "avgExpected": -2.5,
   "aId": "de5e7811-d3df-4987-9ca5-2a782f75b93b",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Michael Ross",
   "b": "David Mcdonough",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.2,
   "avgExpected": -2,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "7fc31e7b-bf19-43f2-a876-728d72287383"
  },
  {
   "a": "Brett Wilson",
   "b": "Anthony Deangelis",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.7,
   "avgExpected": 0.6,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "4b9f7f7b-5027-482c-93aa-66ca594436db"
  },
  {
   "a": "Denise Rempson",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 5.4,
   "avgExpected": 4.2,
   "aId": "2e13698d-f902-43c1-b5b1-226d40d7af3d",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "a": "Brian Perlowitz",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 4.3,
   "avgExpected": 3.1,
   "aId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "a": "Hafeez Saheed",
   "b": "Sheila Curran",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 1,
   "avgExpected": -1.1,
   "aId": "a0d294b1-27ed-4751-ae6c-eadf62746d20",
   "bId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "a": "Christine Steigerwalt",
   "b": "Neil Pratesi",
   "team": "Pickleball Lehigh Valley",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.9,
   "avgExpected": 1.6,
   "aId": "33f1ae41-08db-4067-b5f5-f9324faf93f0",
   "bId": "fc7750bb-ae3e-4c36-8114-5b61f56aca52"
  },
  {
   "a": "Dennis Higman",
   "b": "Joan Rudderow",
   "team": "Players Courtyard Surge",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 6.9,
   "avgExpected": 5.7,
   "aId": "b8fabebb-fd0f-49a8-929a-defbac098e43",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "George Nouaime",
   "b": "Jeff Pillar",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.8,
   "avgActual": -1.7,
   "avgExpected": -3.1,
   "aId": "379ba4b1-4102-4424-bdee-300e8e4fa35b",
   "bId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6"
  },
  {
   "a": "Kim Slomeana",
   "b": "Jeff Pillar",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.8,
   "avgActual": -2.4,
   "avgExpected": -3.7,
   "aId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8",
   "bId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6"
  },
  {
   "a": "Dawn Gordon",
   "b": "Marc Schwegel",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 5.3,
   "avgExpected": 3.5,
   "aId": "756e256e-ea2f-4e25-9c6a-e780860d048f",
   "bId": "b57cfd69-646a-4a7c-8189-fa96df33602c"
  },
  {
   "a": "Cathy Fiebs",
   "b": "Jason Fingerman",
   "team": "ACE",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 8,
   "avgExpected": 6.8,
   "aId": "b39f886b-aa7a-40ca-81a1-5963941e541f",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Gail Hannagan",
   "b": "Sharon Oddy",
   "team": "Flemington Blue",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 5.8,
   "avgExpected": 4.3,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "a": "Michelle Lehman",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.8,
   "avgActual": -4.8,
   "avgExpected": -6.3,
   "aId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Reginald Escusa",
   "b": "Erik Jacobsen",
   "team": "Home Court",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.8,
   "avgActual": 0.1,
   "avgExpected": -1,
   "aId": "0e46e51a-0af8-4bdc-afb1-f73098c1534b",
   "bId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "a": "Brian Perlowitz",
   "b": "Lizabeth Hutchinson",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3,
   "avgExpected": 1.5,
   "aId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1",
   "bId": "55f54df6-5682-4e88-a077-dc9274331ecd"
  },
  {
   "a": "Cheryl Tarby",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -0.7,
   "avgExpected": -2.4,
   "aId": "c131fed2-9bcb-427c-99c1-b507dda92320",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Anthony Deangelis",
   "b": "Annette Marsh",
   "team": "Flemington Green",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 0.6,
   "avgExpected": -0.9,
   "aId": "4b9f7f7b-5027-482c-93aa-66ca594436db",
   "bId": "5db7fb50-d1a1-4c3f-8d61-34ca1947300c"
  },
  {
   "a": "Michael Ross",
   "b": "Joseph Koerner",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -1.2,
   "avgExpected": -2.8,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "b49f166d-9cd4-4b86-961d-380dd8189a87"
  },
  {
   "a": "Michael Ross",
   "b": "Christine Fletcher",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -2.7,
   "avgExpected": -4.3,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "85b6cf96-6ca6-460f-924d-a70bce3ea487"
  },
  {
   "a": "Rob Oddy",
   "b": "Ren Mortara",
   "team": "Flemington Blue",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.4,
   "avgExpected": -1.8,
   "aId": "89ba31d0-20be-4443-b93e-aab0866ad62d",
   "bId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "a": "Rani Gundavarapu",
   "b": "Diane Herbst",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -0.7,
   "avgExpected": -2.2,
   "aId": "8b89397a-e680-47f5-bc37-151b91b6e157",
   "bId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9"
  },
  {
   "a": "Angela Bartelt",
   "b": "Lolita Hagen",
   "team": "Players Courtyard Surge",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 6.4,
   "avgExpected": 5.1,
   "aId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc",
   "bId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Maureen Bruno",
   "team": "Monroe",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 1.6,
   "avgExpected": 0.4,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Sue Glass",
   "b": "Jean Knab",
   "team": "Mercer Bucks",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 0.7,
   "avgActual": -1.2,
   "avgExpected": -2.1,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "a": "Jason Belmont",
   "b": "Arnold Witte",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0,
   "avgExpected": -1.7,
   "aId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c",
   "bId": "b7955946-3573-43a8-912d-0e851e0ca827"
  },
  {
   "a": "Kathi Sheehan",
   "b": "Rachel Baluyot",
   "team": "Home Court",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2.6,
   "avgExpected": 1.4,
   "aId": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
   "bId": "5e265a90-558b-4564-acd8-f358bab162a9"
  },
  {
   "a": "William Hutchinson",
   "b": "Erik Jacobsen",
   "team": "Home Court",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2.2,
   "avgExpected": 0.9,
   "aId": "c67420d9-3055-4cd2-80df-30fe850226ac",
   "bId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "a": "Jason Fingerman",
   "b": "Lawrence Padersky",
   "team": "ACE",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 2.3,
   "avgExpected": 1.1,
   "aId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Nami Huang",
   "b": "Neil Pratesi",
   "team": "Pickleball Lehigh Valley",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.7,
   "avgActual": -0.1,
   "avgExpected": -1.1,
   "aId": "481c21f0-8481-47e8-9eba-9ab21c167cf4",
   "bId": "fc7750bb-ae3e-4c36-8114-5b61f56aca52"
  },
  {
   "a": "Jeffrey Lindstrom",
   "b": "Dan Callaghan",
   "team": "Bounce Malvern",
   "n": 18,
   "w": 15,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 5.2,
   "avgExpected": 4.3,
   "aId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Sarah Stangota",
   "b": "Cathy Matko",
   "team": "Flemington Blue",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.9,
   "avgExpected": 4.7,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "a": "Sharon Oddy",
   "b": "Eric Brezina",
   "team": "Flemington Blue",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.2,
   "avgExpected": 3.1,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Jeffrey Hartford",
   "b": "Gail Hannagan",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.8,
   "avgExpected": 1.3,
   "aId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235",
   "bId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "a": "Michael Ross",
   "b": "Barb Mulckhuyse",
   "team": "Players Courtyard Wave",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -0.4,
   "avgExpected": -1.5,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Dan Amabile",
   "b": "Anthony Deangelis",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2,
   "avgExpected": 0.4,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "4b9f7f7b-5027-482c-93aa-66ca594436db"
  },
  {
   "a": "Kim Slomeana",
   "b": "Dan Callaghan",
   "team": "Bounce Malvern",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": 0.7,
   "avgActual": 1.6,
   "avgExpected": 0.7,
   "aId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Joseph Carrado",
   "b": "Francisco Miranda",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -8.7,
   "avgExpected": -10.2,
   "aId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528",
   "bId": "de5e7811-d3df-4987-9ca5-2a782f75b93b"
  },
  {
   "a": "Sharon Oddy",
   "b": "Cathy Matko",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 5,
   "avgExpected": 3.3,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "a": "Dawn Gordon",
   "b": "Pete Dunn",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1.5,
   "avgExpected": 0.2,
   "aId": "756e256e-ea2f-4e25-9c6a-e780860d048f",
   "bId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "a": "Kathi Sheehan",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.7,
   "avgExpected": 0.9,
   "aId": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "a": "George Nouaime",
   "b": "Randy Kraftsow",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 0.3,
   "avgExpected": -1.4,
   "aId": "379ba4b1-4102-4424-bdee-300e8e4fa35b",
   "bId": "b4abc444-82dd-446c-b55e-ad3ca1610ebd"
  },
  {
   "a": "Jeff Pillar",
   "b": "Randy Kraftsow",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -0.7,
   "avgExpected": -2.2,
   "aId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6",
   "bId": "b4abc444-82dd-446c-b55e-ad3ca1610ebd"
  },
  {
   "a": "Jill Nixon",
   "b": "Barb Mulckhuyse",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 0.7,
   "avgExpected": -1,
   "aId": "8c0ea31a-a5e4-49f4-b97c-703e6edfe6d2",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Denise Rempson",
   "b": "Lizabeth Hutchinson",
   "team": "Home Court",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 3.3,
   "avgExpected": 1.8,
   "aId": "2e13698d-f902-43c1-b5b1-226d40d7af3d",
   "bId": "55f54df6-5682-4e88-a077-dc9274331ecd"
  },
  {
   "a": "Mark Scott",
   "b": "Scott Stenroos",
   "team": "Pickleball Lehigh Valley",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": 0.6,
   "avgActual": 0.2,
   "avgExpected": -0.6,
   "aId": "08af9a6c-0a54-4c19-850c-377b20ae49d0",
   "bId": "cd325aa6-3b7f-43a8-a671-4dcd4da4b9a8"
  },
  {
   "a": "Bob Sochor",
   "b": "Steven Heller",
   "team": "Players Courtyard Surge",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 7.2,
   "avgExpected": 6.2,
   "aId": "27be2d93-9ffb-48be-a464-e0ab103426e3",
   "bId": "344856f5-8559-411b-8fe7-2b5405bb9db6"
  },
  {
   "a": "Rick Weiser",
   "b": "Heidi Weinroth",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": 0,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2"
  },
  {
   "a": "Sue Glass",
   "b": "Connie Cao",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -5.2,
   "avgExpected": -6.2,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "6e5f012d-5fa9-4633-b91f-e4d216a8cc12"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 3.8,
   "avgExpected": 2.9,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Jason Belmont",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 0,
   "avgExpected": -1,
   "aId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Mike Hardy",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.3,
   "avgExpected": 3.4,
   "aId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Linda Landis",
   "b": "Marc Schwegel",
   "team": "ACE",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.8,
   "avgExpected": 3.8,
   "aId": "3d1d0833-fbb7-483c-9b63-88a7f2064986",
   "bId": "b57cfd69-646a-4a7c-8189-fa96df33602c"
  },
  {
   "a": "Rick Weiser",
   "b": "Lynn Bresnahan",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.8,
   "avgExpected": 1.6,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8"
  },
  {
   "a": "Kim Slomeana",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 1.7,
   "avgExpected": 0.8,
   "aId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Eric Brezina",
   "b": "Anthony Leone",
   "team": "Flemington Blue",
   "n": 16,
   "w": 10,
   "l": 6,
   "synergy": 0.6,
   "avgActual": 1.6,
   "avgExpected": 0.8,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Jay Scheinman",
   "b": "Bob Debarge",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.7,
   "avgExpected": -2.6,
   "aId": "20efc741-170d-4866-a65a-add828350b9b",
   "bId": "e0d98c57-92dd-4719-ab14-3635205f3328"
  },
  {
   "a": "George Nouaime",
   "b": "Mary Hain",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 1,
   "avgExpected": 0,
   "aId": "379ba4b1-4102-4424-bdee-300e8e4fa35b",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Diane Bracco",
   "b": "David Cooley",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.8,
   "avgExpected": -0.5,
   "aId": "c7dd526f-b8fe-4172-977d-912044350954",
   "bId": "f0779bc8-629c-4623-a6fb-d85825784b9d"
  },
  {
   "a": "Kristin Duva",
   "b": "Theresa Corderi",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.3,
   "avgExpected": 2.1,
   "aId": "33bedbfd-6715-4614-8662-650a8bc4c678",
   "bId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821"
  },
  {
   "a": "Bob Sochor",
   "b": "Dawn Kempton",
   "team": "Players Courtyard Surge",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 8.8,
   "avgExpected": 7.7,
   "aId": "27be2d93-9ffb-48be-a464-e0ab103426e3",
   "bId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170"
  },
  {
   "a": "Elizabeth Dziekonska",
   "b": "Joseph Carrado",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -8,
   "avgExpected": -9.5,
   "aId": "028e04cc-f2eb-4248-a442-e2c874d224c6",
   "bId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528"
  },
  {
   "a": "Rob Oddy",
   "b": "Cathy Matko",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.8,
   "aId": "89ba31d0-20be-4443-b93e-aab0866ad62d",
   "bId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "a": "Kristen Frendak",
   "b": "Mark Garner",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -5.7,
   "avgExpected": -7,
   "aId": "6389f8b2-7099-4e3a-ae3a-64cd8c99fcae",
   "bId": "c9e3d3ee-24e9-437d-b770-fb4a3b5a37b3"
  },
  {
   "a": "Robert Lee",
   "b": "Jack Tran",
   "team": "Montville",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.6,
   "avgExpected": 3.7,
   "aId": "c7ffa10b-a10b-4adc-9fb6-46ed7afaeecb",
   "bId": "dbe6ecd1-6aad-4f8f-bc44-702ef0be5667"
  },
  {
   "a": "Christine Fletcher",
   "b": "Michelle Lehman",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -0.2,
   "avgExpected": -1.3,
   "aId": "85b6cf96-6ca6-460f-924d-a70bce3ea487",
   "bId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "a": "Scott Nissenbaum",
   "b": "Randy Kraftsow",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -0.7,
   "avgExpected": -1.9,
   "aId": "31690ced-f9c2-4b04-85cd-19ec22e55d48",
   "bId": "b4abc444-82dd-446c-b55e-ad3ca1610ebd"
  },
  {
   "a": "Matthew Colasanto",
   "b": "Bob Debarge",
   "team": "Monroe",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -1.7,
   "avgExpected": -2.5,
   "aId": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
   "bId": "e0d98c57-92dd-4719-ab14-3635205f3328"
  },
  {
   "a": "Tom Giunta",
   "b": "Joseph Koerner",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.5,
   "avgActual": -5.2,
   "avgExpected": -6,
   "aId": "951454ae-d2ba-4339-99de-1a47c62bbaac",
   "bId": "b49f166d-9cd4-4b86-961d-380dd8189a87"
  },
  {
   "a": "Craig Mehnert",
   "b": "Michelle Lehman",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.5,
   "avgExpected": 0.5,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "a": "Amy Clayman",
   "b": "Kelley Batejan",
   "team": "ACE",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5.7,
   "avgExpected": 5,
   "aId": "224e578f-ce44-4dbe-94d7-4e4dda113c63",
   "bId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "a": "Kelley Batejan",
   "b": "Marc Schwegel",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 7,
   "avgExpected": 5.8,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "b57cfd69-646a-4a7c-8189-fa96df33602c"
  },
  {
   "a": "Lizabeth Hutchinson",
   "b": "Sandra Cassidy",
   "team": "Home Court",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.5,
   "avgActual": -0.6,
   "avgExpected": -1.3,
   "aId": "55f54df6-5682-4e88-a077-dc9274331ecd",
   "bId": "7dd168b4-e6f6-4856-ac1a-685de96f17b4"
  },
  {
   "a": "Dave Sarmir",
   "b": "Nancy Cook",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.9,
   "aId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Colleen Derose",
   "b": "Marc Schwegel",
   "team": "ACE",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.5,
   "avgActual": 3.6,
   "avgExpected": 2.9,
   "aId": "1b8d34a3-9006-4e6f-b475-e5f3b4f7e814",
   "bId": "b57cfd69-646a-4a7c-8189-fa96df33602c"
  },
  {
   "a": "Karen Veninger",
   "b": "Butch Kreilick",
   "team": "Flemington Green",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.3,
   "avgExpected": 3.4,
   "aId": "9057a78b-0136-4bb6-92e9-508f621b51e1",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Eric Brezina",
   "b": "Hafeez Saheed",
   "team": "Flemington Blue",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2.8,
   "avgExpected": 2.1,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Brett Wilson",
   "b": "Peggy Matzen",
   "team": "Flemington Green",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 2.7,
   "avgExpected": 1.5,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Anthony Deangelis",
   "b": "Kara Chubrik",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.1,
   "aId": "4b9f7f7b-5027-482c-93aa-66ca594436db",
   "bId": "6848f02a-1acc-47f8-8743-3525311031a9"
  },
  {
   "a": "Brett Wilson",
   "b": "Scott Heist",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.3,
   "avgExpected": 0.2,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "3949f105-cb2f-459e-8396-d0d76a350480"
  },
  {
   "a": "Debbie Carrano",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -2.5,
   "avgExpected": -3.5,
   "aId": "21122b6c-f414-471f-8485-080b0e014cab",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Sarah Stangota",
   "b": "Sheila Curran",
   "team": "Flemington Blue",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.8,
   "avgExpected": 0.7,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "a": "Heidi Weinroth",
   "b": "Richard Fox",
   "team": "Players Courtyard Surge",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 1.2,
   "aId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2",
   "bId": "ef0bc1ce-6709-4172-97a6-8ea5a462bea4"
  },
  {
   "a": "Angela Bartelt",
   "b": "Lynn Bresnahan",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 3.7,
   "avgExpected": 2.5,
   "aId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc",
   "bId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8"
  },
  {
   "a": "Steven Heller",
   "b": "Greg Taylor",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.5,
   "avgExpected": 0.6,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
  },
  {
   "a": "David Cartwright",
   "b": "Erik Jacobsen",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3.3,
   "avgExpected": 2.3,
   "aId": "d6a6177b-1ee7-410c-bafc-bf1a91628876",
   "bId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "a": "Ren Mortara",
   "b": "Paul Phillips",
   "team": "Flemington Blue",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 1.2,
   "avgExpected": 0.3,
   "aId": "91b2bf26-24f1-437f-82d4-f8ad382c0479",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Kara Chubrik",
   "b": "David Cooley",
   "team": "Flemington Green",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0.5,
   "avgActual": -3.6,
   "avgExpected": -4.4,
   "aId": "6848f02a-1acc-47f8-8743-3525311031a9",
   "bId": "f0779bc8-629c-4623-a6fb-d85825784b9d"
  },
  {
   "a": "Mark Scott",
   "b": "Darlene Fusco",
   "team": "Pickleball Lehigh Valley",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.4,
   "avgActual": -2.2,
   "avgExpected": -2.8,
   "aId": "08af9a6c-0a54-4c19-850c-377b20ae49d0",
   "bId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4"
  },
  {
   "a": "Dawn Kempton",
   "b": "Dennis Higman",
   "team": "Players Courtyard Surge",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 8.7,
   "avgExpected": 8.2,
   "aId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Randy Kraftsow",
   "b": "Dan Callaghan",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1.2,
   "avgExpected": -1.9,
   "aId": "b4abc444-82dd-446c-b55e-ad3ca1610ebd",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Connie Cao",
   "b": "Cheryl Tarby",
   "team": "Mercer Bucks",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": 0.4,
   "avgActual": -4.7,
   "avgExpected": -5.4,
   "aId": "6e5f012d-5fa9-4633-b91f-e4d216a8cc12",
   "bId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "a": "David Mcdonough",
   "b": "Franchesa Mclean",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.7,
   "avgExpected": -1.7,
   "aId": "7fc31e7b-bf19-43f2-a876-728d72287383",
   "bId": "84a3279f-7449-4f3a-9d37-1cb1bfe2c45e"
  },
  {
   "a": "Linda Landis",
   "b": "Jason Fingerman",
   "team": "ACE",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 3.3,
   "avgExpected": 2.4,
   "aId": "3d1d0833-fbb7-483c-9b63-88a7f2064986",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Sam Doctor",
   "b": "Nancy Cook",
   "team": "Flemington Green",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.2,
   "avgExpected": 2.5,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Lynn Bresnahan",
   "b": "Tina Convery",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 4,
   "avgExpected": 3.1,
   "aId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8",
   "bId": "f739e9d0-4a76-43d8-9423-4a0ddbfcd63d"
  },
  {
   "a": "Victoria Marchok",
   "b": "Jerry Margulies",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -4.7,
   "avgExpected": -5.6,
   "aId": "106bdd70-60f1-4cf1-aaa9-fbe99c1d8bc7",
   "bId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "a": "Olga Turova",
   "b": "Debbie Carrano",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.8,
   "aId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f",
   "bId": "21122b6c-f414-471f-8485-080b0e014cab"
  },
  {
   "a": "Howard Eng",
   "b": "Raymond Lormel",
   "team": "Mercer Bucks",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.3,
   "aId": "7727f912-4c91-468e-bc39-42aa85e084ab",
   "bId": "c6bfaf46-bfa1-40eb-8774-04151364f747"
  },
  {
   "a": "Warren Meade",
   "b": "Rob Oddy",
   "team": "Flemington Blue",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -5.2,
   "avgExpected": -6.1,
   "aId": "57c42d81-72e1-4e3c-8f52-397d8030a513",
   "bId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "a": "David Mcdonough",
   "b": "Edward Verish",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -6.7,
   "avgExpected": -7.6,
   "aId": "7fc31e7b-bf19-43f2-a876-728d72287383",
   "bId": "bcbd0332-5104-40b6-a2a1-78fc174a0392"
  },
  {
   "a": "Jerry O’Loughlin",
   "b": "Reginald Escusa",
   "team": "Home Court",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 2,
   "avgExpected": 1.4,
   "aId": "0b2d484f-d8ca-4241-85ec-0ebb91b80e9e",
   "bId": "0e46e51a-0af8-4bdc-afb1-f73098c1534b"
  },
  {
   "a": "William Askin",
   "b": "David Corwin",
   "team": "Players Courtyard Surge",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 6.8,
   "avgExpected": 6.2,
   "aId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3",
   "bId": "d026f18b-708f-49ce-99a2-77267ee0256e"
  },
  {
   "a": "Victoria Marchok",
   "b": "Howard Eng",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -5.3,
   "avgExpected": -6.2,
   "aId": "106bdd70-60f1-4cf1-aaa9-fbe99c1d8bc7",
   "bId": "7727f912-4c91-468e-bc39-42aa85e084ab"
  },
  {
   "a": "Bob Debarge",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 0.2,
   "avgExpected": -0.5,
   "aId": "e0d98c57-92dd-4719-ab14-3635205f3328",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Victoria Marchok",
   "b": "Karen Krusen",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -5.3,
   "avgExpected": -6.2,
   "aId": "106bdd70-60f1-4cf1-aaa9-fbe99c1d8bc7",
   "bId": "55e259be-63de-43c7-a5b2-3f6a191e2bdb"
  },
  {
   "a": "Jay Scheinman",
   "b": "Richard Ricciardi",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -3,
   "avgExpected": -3.8,
   "aId": "20efc741-170d-4866-a65a-add828350b9b",
   "bId": "705bad48-cc2d-40fe-b96f-409996010d0d"
  },
  {
   "a": "Ira Krassan",
   "b": "Dawn Gordon",
   "team": "ACE",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1,
   "avgExpected": 0.1,
   "aId": "03de01b1-2236-46cf-a94d-6f98cb142ddd",
   "bId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "a": "Jill Assante",
   "b": "Kristen Frendak",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -3.7,
   "avgExpected": -4.7,
   "aId": "3213af43-d560-41de-9963-8a647b7cc8a4",
   "bId": "6389f8b2-7099-4e3a-ae3a-64cd8c99fcae"
  },
  {
   "a": "Kristen Frendak",
   "b": "Rani Gundavarapu",
   "team": "Montville",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -6.2,
   "avgExpected": -6.9,
   "aId": "6389f8b2-7099-4e3a-ae3a-64cd8c99fcae",
   "bId": "8b89397a-e680-47f5-bc37-151b91b6e157"
  },
  {
   "a": "Scott Nissenbaum",
   "b": "Jeffrey Lindstrom",
   "team": "Bounce Malvern",
   "n": 17,
   "w": 11,
   "l": 6,
   "synergy": 0.3,
   "avgActual": 5.1,
   "avgExpected": 4.8,
   "aId": "31690ced-f9c2-4b04-85cd-19ec22e55d48",
   "bId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69"
  },
  {
   "a": "Bob Sochor",
   "b": "Dennis Higman",
   "team": "Players Courtyard Surge",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 11.7,
   "avgExpected": 11.3,
   "aId": "27be2d93-9ffb-48be-a464-e0ab103426e3",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Richard Ricciardi",
   "b": "Maureen Bruno",
   "team": "Monroe",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1.1,
   "avgExpected": -1.7,
   "aId": "705bad48-cc2d-40fe-b96f-409996010d0d",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Mary Foster",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -5.7,
   "avgExpected": -6.3,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Lizabeth Hutchinson",
   "b": "William Hutchinson",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -2.8,
   "avgExpected": -3.4,
   "aId": "55f54df6-5682-4e88-a077-dc9274331ecd",
   "bId": "c67420d9-3055-4cd2-80df-30fe850226ac"
  },
  {
   "a": "Brett Wilson",
   "b": "Marianne Rosato",
   "team": "Flemington Green",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 0.3,
   "avgActual": -0.1,
   "avgExpected": -0.5,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3"
  },
  {
   "a": "Sam Doctor",
   "b": "Kara Chubrik",
   "team": "Flemington Green",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.8,
   "avgExpected": 2.2,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "6848f02a-1acc-47f8-8743-3525311031a9"
  },
  {
   "a": "Mary Foster",
   "b": "Luz Bonner",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -2.7,
   "avgExpected": -3.3,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "a": "Darlene Fusco",
   "b": "Ralph Lovelidge",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0.3,
   "avgExpected": -0.4,
   "aId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4",
   "bId": "4c163a81-fd29-498c-bf1b-4337a8215ad4"
  },
  {
   "a": "Paul Phillips",
   "b": "Holly Ferguson",
   "team": "Flemington Blue",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.7,
   "avgExpected": 1.1,
   "aId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3",
   "bId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "a": "Gail Hannagan",
   "b": "Anthony Leone",
   "team": "Flemington Blue",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.4,
   "avgExpected": 0,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Gail Hannagan",
   "b": "Hafeez Saheed",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.2,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Sue Glass",
   "b": "Karen Krusen",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.8,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "55e259be-63de-43c7-a5b2-3f6a191e2bdb"
  },
  {
   "a": "Karen Veninger",
   "b": "Peggy Matzen",
   "team": "Flemington Green",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.2,
   "avgExpected": 2.6,
   "aId": "9057a78b-0136-4bb6-92e9-508f621b51e1",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Barb Mulckhuyse",
   "b": "Michelle Lehman",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.4,
   "aId": "b4b69268-6029-4071-84b1-45535a570f3a",
   "bId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "a": "Tim Cassidy",
   "b": "Sandra Cassidy",
   "team": "Home Court",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -1.2,
   "avgExpected": -1.7,
   "aId": "122aa85d-c1ca-448c-a8ab-e62db8a80af6",
   "bId": "7dd168b4-e6f6-4856-ac1a-685de96f17b4"
  },
  {
   "a": "Karen Krusen",
   "b": "Jerry Margulies",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -5,
   "avgExpected": -5.7,
   "aId": "55e259be-63de-43c7-a5b2-3f6a191e2bdb",
   "bId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "a": "Ren Mortara",
   "b": "Anthony Leone",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0.7,
   "avgExpected": 0,
   "aId": "91b2bf26-24f1-437f-82d4-f8ad382c0479",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Ralph Lovelidge",
   "b": "Neil Pratesi",
   "team": "Pickleball Lehigh Valley",
   "n": 14,
   "w": 11,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 2.9,
   "avgExpected": 2.7,
   "aId": "4c163a81-fd29-498c-bf1b-4337a8215ad4",
   "bId": "fc7750bb-ae3e-4c36-8114-5b61f56aca52"
  },
  {
   "a": "Scott Stenroos",
   "b": "Denise Stevens",
   "team": "Pickleball Lehigh Valley",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 1.3,
   "avgExpected": 0.9,
   "aId": "cd325aa6-3b7f-43a8-a671-4dcd4da4b9a8",
   "bId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "a": "Theresa Corderi",
   "b": "Rani Gundavarapu",
   "team": "Montville",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.2,
   "avgExpected": -0.1,
   "aId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821",
   "bId": "8b89397a-e680-47f5-bc37-151b91b6e157"
  },
  {
   "a": "Steven Heller",
   "b": "Heidi Weinroth",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1.7,
   "avgExpected": 1.3,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2"
  },
  {
   "a": "Karen Krusen",
   "b": "Cheryl Tarby",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0,
   "avgExpected": -0.5,
   "aId": "55e259be-63de-43c7-a5b2-3f6a191e2bdb",
   "bId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "a": "Jennifer Makfinsky",
   "b": "Richard Ricciardi",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1.8,
   "avgExpected": 1.4,
   "aId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8",
   "bId": "705bad48-cc2d-40fe-b96f-409996010d0d"
  },
  {
   "a": "Raymond Lormel",
   "b": "Francisco Miranda",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -4.2,
   "avgExpected": -4.6,
   "aId": "c6bfaf46-bfa1-40eb-8774-04151364f747",
   "bId": "de5e7811-d3df-4987-9ca5-2a782f75b93b"
  },
  {
   "a": "Tom Giunta",
   "b": "Barb Mulckhuyse",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "951454ae-d2ba-4339-99de-1a47c62bbaac",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Luz Bonner",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -8,
   "avgExpected": -8.5,
   "aId": "ef6c941f-29da-4723-95a8-63a508079685",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Kathi Sheehan",
   "b": "Lizabeth Hutchinson",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.5,
   "avgExpected": -1,
   "aId": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
   "bId": "55f54df6-5682-4e88-a077-dc9274331ecd"
  },
  {
   "a": "Anthony Deangelis",
   "b": "Dave Sarmir",
   "team": "Flemington Green",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0,
   "avgExpected": -0.4,
   "aId": "4b9f7f7b-5027-482c-93aa-66ca594436db",
   "bId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32"
  },
  {
   "a": "Kelley Batejan",
   "b": "Cathy Fiebs",
   "team": "ACE",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 5.5,
   "avgExpected": 5.3,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "b39f886b-aa7a-40ca-81a1-5963941e541f"
  },
  {
   "a": "Andrea Schwab",
   "b": "Cathy Fiebs",
   "team": "ACE",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 4.1,
   "avgExpected": 3.8,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "b39f886b-aa7a-40ca-81a1-5963941e541f"
  },
  {
   "a": "Joan Rudderow",
   "b": "Richard Fox",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.6,
   "aId": "dca2ce61-749b-421c-9205-0a16fc656a36",
   "bId": "ef0bc1ce-6709-4172-97a6-8ea5a462bea4"
  },
  {
   "a": "Theresa Corderi",
   "b": "Jack Tran",
   "team": "Montville",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 3.1,
   "avgExpected": 2.8,
   "aId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821",
   "bId": "dbe6ecd1-6aad-4f8f-bc44-702ef0be5667"
  },
  {
   "a": "Gail Hannagan",
   "b": "Cathy Matko",
   "team": "Flemington Blue",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 5,
   "avgExpected": 4.7,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "a": "Sue Glass",
   "b": "Jason Belmont",
   "team": "Mercer Bucks",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -0.7,
   "avgExpected": -1,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c"
  },
  {
   "a": "Scott Heist",
   "b": "Dave Sarmir",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 3.3,
   "avgExpected": 2.9,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32"
  },
  {
   "a": "Jill Assante",
   "b": "Rani Gundavarapu",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.3,
   "avgExpected": -1.9,
   "aId": "3213af43-d560-41de-9963-8a647b7cc8a4",
   "bId": "8b89397a-e680-47f5-bc37-151b91b6e157"
  },
  {
   "a": "Bill Gold",
   "b": "Mark Garner",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -3.7,
   "avgExpected": -4.2,
   "aId": "368337c0-e1f6-4cd2-89ec-41b1e06042ea",
   "bId": "c9e3d3ee-24e9-437d-b770-fb4a3b5a37b3"
  },
  {
   "a": "Kim Slomeana",
   "b": "George Nouaime",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 1.8,
   "aId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8",
   "bId": "379ba4b1-4102-4424-bdee-300e8e4fa35b"
  },
  {
   "a": "Angela Bartelt",
   "b": "Dennis Higman",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 9.3,
   "avgExpected": 8.8,
   "aId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Victoria Marchok",
   "b": "Joseph Carrado",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -6.7,
   "avgExpected": -7.2,
   "aId": "106bdd70-60f1-4cf1-aaa9-fbe99c1d8bc7",
   "bId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528"
  },
  {
   "a": "Amy Clayman",
   "b": "Linda Landis",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.8,
   "avgExpected": 3.3,
   "aId": "224e578f-ce44-4dbe-94d7-4e4dda113c63",
   "bId": "3d1d0833-fbb7-483c-9b63-88a7f2064986"
  },
  {
   "a": "Steven Heller",
   "b": "Lolita Hagen",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3,
   "avgExpected": 2.6,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "a": "George Nouaime",
   "b": "Brian Schartz",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -6.7,
   "avgExpected": -7,
   "aId": "379ba4b1-4102-4424-bdee-300e8e4fa35b",
   "bId": "6d468ccd-ec39-47be-8f06-028c695af323"
  },
  {
   "a": "Christina Samtmann",
   "b": "Dan Callaghan",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Rick Weiser",
   "b": "Steven Heller",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.4,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "344856f5-8559-411b-8fe7-2b5405bb9db6"
  },
  {
   "a": "Matthew Colasanto",
   "b": "Richard Ricciardi",
   "team": "Monroe",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -2.6,
   "avgExpected": -2.7,
   "aId": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
   "bId": "705bad48-cc2d-40fe-b96f-409996010d0d"
  },
  {
   "a": "Scott Auty",
   "b": "Dawn Gordon",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.8,
   "avgExpected": 3.7,
   "aId": "53024744-72eb-4d56-b0c9-93a6201bdc33",
   "bId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "a": "Edward Verish",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": 0.1,
   "avgActual": -9.5,
   "avgExpected": -9.6,
   "aId": "bcbd0332-5104-40b6-a2a1-78fc174a0392",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Annette Marsh",
   "b": "Kara Chubrik",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.5,
   "avgExpected": 2.3,
   "aId": "5db7fb50-d1a1-4c3f-8d61-34ca1947300c",
   "bId": "6848f02a-1acc-47f8-8743-3525311031a9"
  },
  {
   "a": "Craig Mehnert",
   "b": "Barb Mulckhuyse",
   "team": "Players Courtyard Wave",
   "n": 12,
   "w": 9,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 2.9,
   "avgExpected": 2.8,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Franchesa Mclean",
   "b": "Tom Giunta",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -7.2,
   "avgExpected": -7.4,
   "aId": "84a3279f-7449-4f3a-9d37-1cb1bfe2c45e",
   "bId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "a": "Heidi Weinroth",
   "b": "Greg Taylor",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.7,
   "aId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2",
   "bId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
  },
  {
   "a": "William Askin",
   "b": "Dennis Higman",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 7,
   "avgExpected": 6.8,
   "aId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Greg Taylor",
   "b": "Lynn Bresnahan",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.7,
   "avgExpected": 1.3,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8"
  },
  {
   "a": "Sarah Stangota",
   "b": "Paul Phillips",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.4,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Theresa Corderi",
   "b": "Ken Bienkowski",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.8,
   "avgExpected": 1.6,
   "aId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821",
   "bId": "5cc85746-e4a6-432e-bfe5-8166f02867ce"
  },
  {
   "a": "Richard Ricciardi",
   "b": "Bonnie Russo",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -0.7,
   "avgExpected": -1,
   "aId": "705bad48-cc2d-40fe-b96f-409996010d0d",
   "bId": "c32a3777-ab2f-457c-9232-39bee809dfc9"
  },
  {
   "a": "Matthew Colasanto",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -2.2,
   "avgExpected": -2.3,
   "aId": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Michael Ross",
   "b": "Edward Verish",
   "team": "Players Courtyard Wave",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": 0.1,
   "avgActual": -9,
   "avgExpected": -9.2,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "bcbd0332-5104-40b6-a2a1-78fc174a0392"
  },
  {
   "a": "Sean Wilson",
   "b": "Scott Stenroos",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -2,
   "aId": "8682646a-b77e-4015-96a1-78fd223fd918",
   "bId": "cd325aa6-3b7f-43a8-a671-4dcd4da4b9a8"
  },
  {
   "a": "Jay Scheinman",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -1.4,
   "avgExpected": -1.6,
   "aId": "20efc741-170d-4866-a65a-add828350b9b",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Ken Bienkowski",
   "b": "Mark Garner",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.3,
   "avgExpected": -0.5,
   "aId": "5cc85746-e4a6-432e-bfe5-8166f02867ce",
   "bId": "c9e3d3ee-24e9-437d-b770-fb4a3b5a37b3"
  },
  {
   "a": "Rob Oddy",
   "b": "Paul Phillips",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": -1.2,
   "avgExpected": -1.4,
   "aId": "89ba31d0-20be-4443-b93e-aab0866ad62d",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "William Hutchinson",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.5,
   "aId": "c67420d9-3055-4cd2-80df-30fe850226ac",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "a": "Brian Perlowitz",
   "b": "Mary Ann Villamor",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1.2,
   "aId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1",
   "bId": "66903b1a-7538-4953-8360-cb8060604780"
  },
  {
   "a": "Suzane Sullivan",
   "b": "Denise Stevens",
   "team": "Pickleball Lehigh Valley",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0,
   "avgExpected": -0.1,
   "aId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6",
   "bId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "a": "Darlene Fusco",
   "b": "Nami Huang",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.3,
   "avgExpected": -0.5,
   "aId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4",
   "bId": "481c21f0-8481-47e8-9eba-9ab21c167cf4"
  },
  {
   "a": "Craig Mehnert",
   "b": "Mark Leusner",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1.1,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "b6029771-28c1-4404-90d5-31cfc8bfaa29"
  },
  {
   "a": "Pete Dunn",
   "b": "Cathy Fiebs",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "8e45f538-d95a-4554-9ccf-443a06b5a89e",
   "bId": "b39f886b-aa7a-40ca-81a1-5963941e541f"
  },
  {
   "a": "Sean Wilson",
   "b": "Denise Stevens",
   "team": "Pickleball Lehigh Valley",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 0,
   "avgActual": 0.1,
   "avgExpected": 0.1,
   "aId": "8682646a-b77e-4015-96a1-78fd223fd918",
   "bId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "a": "Mark Scott",
   "b": "Sean Wilson",
   "team": "Pickleball Lehigh Valley",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0,
   "avgActual": -1.6,
   "avgExpected": -1.5,
   "aId": "08af9a6c-0a54-4c19-850c-377b20ae49d0",
   "bId": "8682646a-b77e-4015-96a1-78fd223fd918"
  },
  {
   "a": "Christina Samtmann",
   "b": "Jeff Pillar",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0,
   "avgActual": -3.9,
   "avgExpected": -3.9,
   "aId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce",
   "bId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6"
  },
  {
   "a": "Richard Ricciardi",
   "b": "Bob Debarge",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 1,
   "avgExpected": 1.1,
   "aId": "705bad48-cc2d-40fe-b96f-409996010d0d",
   "bId": "e0d98c57-92dd-4719-ab14-3635205f3328"
  },
  {
   "a": "Jennifer Makfinsky",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": 0,
   "avgActual": 5.3,
   "avgExpected": 5.3,
   "aId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Jennifer Makfinsky",
   "team": "Monroe",
   "n": 18,
   "w": 12,
   "l": 6,
   "synergy": 0,
   "avgActual": 2.6,
   "avgExpected": 2.6,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
  },
  {
   "a": "Kathi Sheehan",
   "b": "Brian Perlowitz",
   "team": "Home Court",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0,
   "avgActual": -1.7,
   "avgExpected": -1.7,
   "aId": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
   "bId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1"
  },
  {
   "a": "Sam Doctor",
   "b": "Anthony Deangelis",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "4b9f7f7b-5027-482c-93aa-66ca594436db"
  },
  {
   "a": "Tom Giunta",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -10.3,
   "avgExpected": -10.2,
   "aId": "951454ae-d2ba-4339-99de-1a47c62bbaac",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Jeffrey Hartford",
   "b": "Eric Brezina",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 1,
   "avgExpected": 0.9,
   "aId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Craig Mehnert",
   "b": "Ed Mendoza",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": -0.6,
   "avgExpected": -0.5,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "cb4a8451-13f9-4c27-8dc6-847fea7be9b4"
  },
  {
   "a": "Brett Wilson",
   "b": "Diane Bracco",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -1.7,
   "avgExpected": -1.6,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Kelley Batejan",
   "b": "Lawrence Padersky",
   "team": "ACE",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": 0.6,
   "avgExpected": 0.6,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Sandra Cassidy",
   "b": "Jayne Mayer",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -7.7,
   "avgExpected": -7.6,
   "aId": "7dd168b4-e6f6-4856-ac1a-685de96f17b4",
   "bId": "c6743f83-5947-4eec-aca8-f4f19b1e7a35"
  },
  {
   "a": "Jerry O’Loughlin",
   "b": "Tim Cassidy",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 1.9,
   "aId": "0b2d484f-d8ca-4241-85ec-0ebb91b80e9e",
   "bId": "122aa85d-c1ca-448c-a8ab-e62db8a80af6"
  },
  {
   "a": "Linda Seemann",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": 0.3,
   "avgExpected": 0.3,
   "aId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Andrea Schwab",
   "b": "Marc Schwegel",
   "team": "ACE",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0,
   "avgActual": 5.5,
   "avgExpected": 5.4,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "b57cfd69-646a-4a7c-8189-fa96df33602c"
  },
  {
   "a": "George Nouaime",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -0.5,
   "avgExpected": -0.5,
   "aId": "379ba4b1-4102-4424-bdee-300e8e4fa35b",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Reginald Escusa",
   "b": "Brian Perlowitz",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -1.9,
   "aId": "0e46e51a-0af8-4bdc-afb1-f73098c1534b",
   "bId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1"
  },
  {
   "a": "Ira Krassan",
   "b": "Pete Certo",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.7,
   "avgExpected": 2.6,
   "aId": "03de01b1-2236-46cf-a94d-6f98cb142ddd",
   "bId": "3572118b-4e01-4e64-96a4-a7cc80869425"
  },
  {
   "a": "Steven Heller",
   "b": "Lynn Bresnahan",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.5,
   "avgExpected": 2.4,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8"
  },
  {
   "a": "Kim Slomeana",
   "b": "Calvin Giles",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": -0.1,
   "aId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8",
   "bId": "6e9ad16e-485c-47b3-90fc-d713d861ca16"
  },
  {
   "a": "Sean Wilson",
   "b": "Neil Pratesi",
   "team": "Pickleball Lehigh Valley",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -0.9,
   "avgExpected": -0.8,
   "aId": "8682646a-b77e-4015-96a1-78fd223fd918",
   "bId": "fc7750bb-ae3e-4c36-8114-5b61f56aca52"
  },
  {
   "a": "Dennis Higman",
   "b": "David Corwin",
   "team": "Players Courtyard Surge",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 7.6,
   "avgExpected": 7.7,
   "aId": "b8fabebb-fd0f-49a8-929a-defbac098e43",
   "bId": "d026f18b-708f-49ce-99a2-77267ee0256e"
  },
  {
   "a": "Scott Nissenbaum",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 3.5,
   "avgExpected": 3.6,
   "aId": "31690ced-f9c2-4b04-85cd-19ec22e55d48",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Jean Knab",
   "b": "Arnold Witte",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -2.8,
   "avgExpected": -2.5,
   "aId": "abce612c-0edd-4b72-ab5a-f1983c38f545",
   "bId": "b7955946-3573-43a8-912d-0e851e0ca827"
  },
  {
   "a": "Elizabeth Dziekonska",
   "b": "Arnold Witte",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -7,
   "avgExpected": -6.9,
   "aId": "028e04cc-f2eb-4248-a442-e2c874d224c6",
   "bId": "b7955946-3573-43a8-912d-0e851e0ca827"
  },
  {
   "a": "Jennifer Makfinsky",
   "b": "Maureen Bruno",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.5,
   "avgExpected": 4.7,
   "aId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Scott Auty",
   "b": "Jason Fingerman",
   "team": "ACE",
   "n": 15,
   "w": 9,
   "l": 6,
   "synergy": -0.1,
   "avgActual": 2.5,
   "avgExpected": 2.7,
   "aId": "53024744-72eb-4d56-b0c9-93a6201bdc33",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Marc Schwegel",
   "b": "Eric Clayman",
   "team": "ACE",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.7,
   "avgExpected": 4.9,
   "aId": "b57cfd69-646a-4a7c-8189-fa96df33602c",
   "bId": "ca8205f9-30ea-4e27-a901-f4156adf6b95"
  },
  {
   "a": "Mary Foster",
   "b": "Barb Mulckhuyse",
   "team": "Players Courtyard Wave",
   "n": 14,
   "w": 9,
   "l": 5,
   "synergy": -0.1,
   "avgActual": 1.8,
   "avgExpected": 1.9,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Sandra Cassidy",
   "b": "Erik Jacobsen",
   "team": "Home Court",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -1.1,
   "avgExpected": -0.9,
   "aId": "7dd168b4-e6f6-4856-ac1a-685de96f17b4",
   "bId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "a": "Marianne Rosato",
   "b": "David Cooley",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.5,
   "avgExpected": -1.3,
   "aId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3",
   "bId": "f0779bc8-629c-4623-a6fb-d85825784b9d"
  },
  {
   "a": "William Askin",
   "b": "Lynn Bresnahan",
   "team": "Players Courtyard Surge",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 5.4,
   "avgExpected": 5.5,
   "aId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3",
   "bId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8"
  },
  {
   "a": "Heidi Weinroth",
   "b": "Lynn Bresnahan",
   "team": "Players Courtyard Surge",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2.2,
   "avgExpected": 2.4,
   "aId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2",
   "bId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8"
  },
  {
   "a": "Howard Eng",
   "b": "Jerry Margulies",
   "team": "Mercer Bucks",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.5,
   "aId": "7727f912-4c91-468e-bc39-42aa85e084ab",
   "bId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "a": "Sharon Oddy",
   "b": "Rob Oddy",
   "team": "Flemington Blue",
   "n": 13,
   "w": 6,
   "l": 7,
   "synergy": -0.1,
   "avgActual": -0.8,
   "avgExpected": -0.8,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "a": "Linda Landis",
   "b": "Kelley Batejan",
   "team": "ACE",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3.8,
   "avgExpected": 4.1,
   "aId": "3d1d0833-fbb7-483c-9b63-88a7f2064986",
   "bId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "a": "Elizabeth Dziekonska",
   "b": "Sue Glass",
   "team": "Mercer Bucks",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -4.3,
   "avgExpected": -4.2,
   "aId": "028e04cc-f2eb-4248-a442-e2c874d224c6",
   "bId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65"
  },
  {
   "a": "Jeff Pillar",
   "b": "Calvin Giles",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -3,
   "avgExpected": -2.7,
   "aId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6",
   "bId": "6e9ad16e-485c-47b3-90fc-d713d861ca16"
  },
  {
   "a": "Steven Heller",
   "b": "David Corwin",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.7,
   "avgExpected": 2.8,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "d026f18b-708f-49ce-99a2-77267ee0256e"
  },
  {
   "a": "Mark Scott",
   "b": "Christine Steigerwalt",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2.5,
   "avgExpected": -2.3,
   "aId": "08af9a6c-0a54-4c19-850c-377b20ae49d0",
   "bId": "33f1ae41-08db-4067-b5f5-f9324faf93f0"
  },
  {
   "a": "Gail Hannagan",
   "b": "Ren Mortara",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3.7,
   "avgExpected": 3.8,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "a": "Darlene Fusco",
   "b": "Suzane Sullivan",
   "team": "Pickleball Lehigh Valley",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 0.8,
   "avgExpected": 1,
   "aId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4",
   "bId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6"
  },
  {
   "a": "Lolita Hagen",
   "b": "Joan Rudderow",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.5,
   "aId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Christina Samtmann",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 0.8,
   "avgExpected": 1,
   "aId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "David Corwin",
   "b": "Joan Rudderow",
   "team": "Players Courtyard Surge",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 6,
   "avgExpected": 6.3,
   "aId": "d026f18b-708f-49ce-99a2-77267ee0256e",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Matthew Colasanto",
   "b": "Linda Seemann",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -5.7,
   "avgExpected": -5.2,
   "aId": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
   "bId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c"
  },
  {
   "a": "Amy Clayman",
   "b": "Eric Clayman",
   "team": "ACE",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": -0.2,
   "avgActual": 0.1,
   "avgExpected": 0.4,
   "aId": "224e578f-ce44-4dbe-94d7-4e4dda113c63",
   "bId": "ca8205f9-30ea-4e27-a901-f4156adf6b95"
  },
  {
   "a": "Tom Giunta",
   "b": "Michelle Lehman",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -8,
   "avgExpected": -7.6,
   "aId": "951454ae-d2ba-4339-99de-1a47c62bbaac",
   "bId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "a": "David Mcdonough",
   "b": "Tom Giunta",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -6.3,
   "avgExpected": -5.8,
   "aId": "7fc31e7b-bf19-43f2-a876-728d72287383",
   "bId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "a": "Jeff Pillar",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -1,
   "avgExpected": -0.6,
   "aId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Holly Ferguson",
   "b": "Cathy Matko",
   "team": "Flemington Blue",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0.3,
   "avgExpected": 0.7,
   "aId": "a1b6d08e-816a-4e07-84f2-616a7050b00b",
   "bId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "a": "Olga Turova",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.7,
   "avgExpected": 3.1,
   "aId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Jeffrey Hartford",
   "b": "Sharon Oddy",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 1.3,
   "avgExpected": 1.9,
   "aId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235",
   "bId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "a": "Brett Wilson",
   "b": "Kara Chubrik",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -0.2,
   "avgExpected": 0.1,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "6848f02a-1acc-47f8-8743-3525311031a9"
  },
  {
   "a": "Richard Ricciardi",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "705bad48-cc2d-40fe-b96f-409996010d0d",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Tom Giunta",
   "b": "Edward Verish",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -14.7,
   "avgExpected": -14.3,
   "aId": "951454ae-d2ba-4339-99de-1a47c62bbaac",
   "bId": "bcbd0332-5104-40b6-a2a1-78fc174a0392"
  },
  {
   "a": "Dan Amabile",
   "b": "Diane Bracco",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -1.3,
   "avgExpected": -0.9,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Kim Slomeana",
   "b": "Scott Nissenbaum",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.7,
   "avgExpected": 3.1,
   "aId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8",
   "bId": "31690ced-f9c2-4b04-85cd-19ec22e55d48"
  },
  {
   "a": "Mike Hardy",
   "b": "Maureen Bruno",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2,
   "avgExpected": 2.4,
   "aId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Jerry O’Loughlin",
   "b": "Denise Rempson",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2,
   "avgExpected": 2.4,
   "aId": "0b2d484f-d8ca-4241-85ec-0ebb91b80e9e",
   "bId": "2e13698d-f902-43c1-b5b1-226d40d7af3d"
  },
  {
   "a": "Mark Scott",
   "b": "Suzane Sullivan",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.5,
   "aId": "08af9a6c-0a54-4c19-850c-377b20ae49d0",
   "bId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6"
  },
  {
   "a": "Jill Assante",
   "b": "Ken Bienkowski",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.5,
   "aId": "3213af43-d560-41de-9963-8a647b7cc8a4",
   "bId": "5cc85746-e4a6-432e-bfe5-8166f02867ce"
  },
  {
   "a": "Ren Mortara",
   "b": "Sheila Curran",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "91b2bf26-24f1-437f-82d4-f8ad382c0479",
   "bId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "a": "Angela Bartelt",
   "b": "William Askin",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 3.7,
   "avgExpected": 4,
   "aId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc",
   "bId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3"
  },
  {
   "a": "Kristen Frendak",
   "b": "Jake Denooyer",
   "team": "Montville",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1.5,
   "avgExpected": -0.8,
   "aId": "6389f8b2-7099-4e3a-ae3a-64cd8c99fcae",
   "bId": "a314079a-16b7-42f5-be34-41e1672f7377"
  },
  {
   "a": "Randy Kraftsow",
   "b": "Mary Hain",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -5.2,
   "avgExpected": -4.7,
   "aId": "b4abc444-82dd-446c-b55e-ad3ca1610ebd",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Heidi Weinroth",
   "b": "Joan Rudderow",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.3,
   "avgExpected": 2.1,
   "aId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Jean Knab",
   "b": "Raymond Lormel",
   "team": "Mercer Bucks",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.3,
   "avgActual": -4.1,
   "avgExpected": -3.6,
   "aId": "abce612c-0edd-4b72-ab5a-f1983c38f545",
   "bId": "c6bfaf46-bfa1-40eb-8774-04151364f747"
  },
  {
   "a": "Eileen Moore",
   "b": "Peggy Matzen",
   "team": "Flemington Green",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.5,
   "aId": "13baa9f0-6b36-49e8-b085-c8933cb044b2",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Andrea Schwab",
   "b": "Pete Dunn",
   "team": "ACE",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 2.4,
   "avgExpected": 2.9,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "a": "Mark Scott",
   "b": "Ray Suhocki",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -2,
   "avgExpected": -1.3,
   "aId": "08af9a6c-0a54-4c19-850c-377b20ae49d0",
   "bId": "f37395e3-2842-41e5-a849-16a964341f15"
  },
  {
   "a": "Holly Ferguson",
   "b": "Tao Zhu",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 0.9,
   "aId": "a1b6d08e-816a-4e07-84f2-616a7050b00b",
   "bId": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91"
  },
  {
   "a": "Debbie Carrano",
   "b": "Richard Ricciardi",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3.7,
   "avgExpected": -3.1,
   "aId": "21122b6c-f414-471f-8485-080b0e014cab",
   "bId": "705bad48-cc2d-40fe-b96f-409996010d0d"
  },
  {
   "a": "Sharon Oddy",
   "b": "Sarah Stangota",
   "team": "Flemington Blue",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 2.9,
   "avgExpected": 3.4,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Pete Certo",
   "b": "Jason Fingerman",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 3,
   "avgExpected": 3.7,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Dan Amabile",
   "b": "Dave Sarmir",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2.7,
   "avgExpected": -2.2,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32"
  },
  {
   "a": "Matthew Colasanto",
   "b": "Bonnie Russo",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -6,
   "avgExpected": -5.5,
   "aId": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
   "bId": "c32a3777-ab2f-457c-9232-39bee809dfc9"
  },
  {
   "a": "Michael Ross",
   "b": "Tom Giunta",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -9,
   "avgExpected": -8.4,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "a": "Colleen Derose",
   "b": "Dawn Gordon",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 4.3,
   "avgExpected": 5.1,
   "aId": "1b8d34a3-9006-4e6f-b475-e5f3b4f7e814",
   "bId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "a": "Sharon Oddy",
   "b": "Ren Mortara",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0.7,
   "avgExpected": 1.3,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "a": "Amy Moore",
   "b": "Joan Rudderow",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 3,
   "avgExpected": 3.8,
   "aId": "c037ad35-3550-447f-af7f-f62674d0c1ac",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Nancy Cook",
   "b": "Peggy Matzen",
   "team": "Flemington Green",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -1.6,
   "avgExpected": -1.1,
   "aId": "c3649296-108a-4a74-ad2a-e045d2fdee4c",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "William Askin",
   "b": "Lolita Hagen",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.3,
   "avgExpected": 2,
   "aId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3",
   "bId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "a": "Theresa Corderi",
   "b": "Diane Herbst",
   "team": "Montville",
   "n": 12,
   "w": 7,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": -0.5,
   "aId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821",
   "bId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9"
  },
  {
   "a": "Jeffrey Lindstrom",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 20,
   "w": 13,
   "l": 7,
   "synergy": -0.4,
   "avgActual": 2.2,
   "avgExpected": 2.7,
   "aId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Michelle Smith",
   "b": "Kim Slomeana",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -4,
   "avgExpected": -3.2,
   "aId": "1e1ed1c7-86b8-4b90-ae25-eb543727e2b7",
   "bId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8"
  },
  {
   "a": "Bob Sochor",
   "b": "Angela Bartelt",
   "team": "Players Courtyard Surge",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 5,
   "avgExpected": 5.8,
   "aId": "27be2d93-9ffb-48be-a464-e0ab103426e3",
   "bId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc"
  },
  {
   "a": "Jean Knab",
   "b": "Cheryl Tarby",
   "team": "Mercer Bucks",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.4,
   "avgActual": -3.6,
   "avgExpected": -3,
   "aId": "abce612c-0edd-4b72-ab5a-f1983c38f545",
   "bId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "a": "Bob Debarge",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0.2,
   "avgExpected": 0.9,
   "aId": "e0d98c57-92dd-4719-ab14-3635205f3328",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Scott Auty",
   "b": "Kelley Batejan",
   "team": "ACE",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 4.6,
   "avgExpected": 5.3,
   "aId": "53024744-72eb-4d56-b0c9-93a6201bdc33",
   "bId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "a": "Kelley Batejan",
   "b": "Dawn Gordon",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 4,
   "avgExpected": 4.9,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "a": "Mary Foster",
   "b": "Edward Verish",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -7.7,
   "avgExpected": -6.8,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "bcbd0332-5104-40b6-a2a1-78fc174a0392"
  },
  {
   "a": "Joseph Koerner",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.4,
   "avgActual": -7.1,
   "avgExpected": -6.5,
   "aId": "b49f166d-9cd4-4b86-961d-380dd8189a87",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Craig Mehnert",
   "b": "Mary Foster",
   "team": "Players Courtyard Wave",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -2.4,
   "avgExpected": -1.8,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "71b7fe55-42fb-4b59-a77c-c14d62384125"
  },
  {
   "a": "Nami Huang",
   "b": "Denise Stevens",
   "team": "Pickleball Lehigh Valley",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -1.1,
   "avgExpected": -0.5,
   "aId": "481c21f0-8481-47e8-9eba-9ab21c167cf4",
   "bId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "a": "Dave Sarmir",
   "b": "Diane Bracco",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2.7,
   "avgExpected": -1.7,
   "aId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Darlene Fusco",
   "b": "Lea Frank",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -4,
   "avgExpected": -3.1,
   "aId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4",
   "bId": "86364a42-9c6b-45f7-b67d-4b1bc5b4d7f7"
  },
  {
   "a": "Anthony Leone",
   "b": "Cathy Matko",
   "team": "Flemington Blue",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.8,
   "avgExpected": -1,
   "aId": "a8715ef7-f760-4097-b642-eae44c0a5de7",
   "bId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "a": "Richard Ricciardi",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 0.3,
   "avgExpected": 1,
   "aId": "705bad48-cc2d-40fe-b96f-409996010d0d",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Connie Cao",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -4.7,
   "avgExpected": -3.7,
   "aId": "6e5f012d-5fa9-4633-b91f-e4d216a8cc12",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Linda Landis",
   "b": "Scott Auty",
   "team": "ACE",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 1.8,
   "avgExpected": 2.6,
   "aId": "3d1d0833-fbb7-483c-9b63-88a7f2064986",
   "bId": "53024744-72eb-4d56-b0c9-93a6201bdc33"
  },
  {
   "a": "Matthew Colasanto",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -2.9,
   "avgExpected": -2.2,
   "aId": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Heidi Weinroth",
   "b": "Amy Moore",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 2.7,
   "avgExpected": 3.6,
   "aId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2",
   "bId": "c037ad35-3550-447f-af7f-f62674d0c1ac"
  },
  {
   "a": "Pete Certo",
   "b": "Dawn Gordon",
   "team": "ACE",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 1.4,
   "avgExpected": 2.1,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "a": "Ira Krassan",
   "b": "Colleen Derose",
   "team": "ACE",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 0.4,
   "avgExpected": 1.1,
   "aId": "03de01b1-2236-46cf-a94d-6f98cb142ddd",
   "bId": "1b8d34a3-9006-4e6f-b475-e5f3b4f7e814"
  },
  {
   "a": "Dawn Kempton",
   "b": "Lolita Hagen",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -0.3,
   "avgExpected": 0.7,
   "aId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170",
   "bId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "a": "Theresa Corderi",
   "b": "Jake Denooyer",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.3,
   "avgExpected": -0.1,
   "aId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821",
   "bId": "a314079a-16b7-42f5-be34-41e1672f7377"
  },
  {
   "a": "Scott Nissenbaum",
   "b": "Jeff Pillar",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 1.3,
   "avgExpected": 2,
   "aId": "31690ced-f9c2-4b04-85cd-19ec22e55d48",
   "bId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6"
  },
  {
   "a": "Angela Bartelt",
   "b": "Dawn Kempton",
   "team": "Players Courtyard Surge",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 2.4,
   "avgExpected": 3.2,
   "aId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc",
   "bId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170"
  },
  {
   "a": "David Mcdonough",
   "b": "Michelle Lehman",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -4.3,
   "avgExpected": -3.2,
   "aId": "7fc31e7b-bf19-43f2-a876-728d72287383",
   "bId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "a": "Colleen Derose",
   "b": "Pete Dunn",
   "team": "ACE",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 2,
   "avgExpected": 2.8,
   "aId": "1b8d34a3-9006-4e6f-b475-e5f3b4f7e814",
   "bId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "a": "Colleen Derose",
   "b": "Andrea Schwab",
   "team": "ACE",
   "n": 11,
   "w": 9,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 4.1,
   "avgExpected": 4.8,
   "aId": "1b8d34a3-9006-4e6f-b475-e5f3b4f7e814",
   "bId": "605d7726-f903-4606-ad3d-14964b9e2e1b"
  },
  {
   "a": "Scott Heist",
   "b": "Marianne Rosato",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1.3,
   "avgExpected": 2.5,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3"
  },
  {
   "a": "Scott Stenroos",
   "b": "Ray Suhocki",
   "team": "Pickleball Lehigh Valley",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -3.7,
   "avgExpected": -2.8,
   "aId": "cd325aa6-3b7f-43a8-a671-4dcd4da4b9a8",
   "bId": "f37395e3-2842-41e5-a849-16a964341f15"
  },
  {
   "a": "Mark Scott",
   "b": "Nami Huang",
   "team": "Pickleball Lehigh Valley",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -1.6,
   "avgExpected": -0.8,
   "aId": "08af9a6c-0a54-4c19-850c-377b20ae49d0",
   "bId": "481c21f0-8481-47e8-9eba-9ab21c167cf4"
  },
  {
   "a": "Nami Huang",
   "b": "Lea Frank",
   "team": "Pickleball Lehigh Valley",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3.6,
   "avgExpected": -2.6,
   "aId": "481c21f0-8481-47e8-9eba-9ab21c167cf4",
   "bId": "86364a42-9c6b-45f7-b67d-4b1bc5b4d7f7"
  },
  {
   "a": "Kristen Frendak",
   "b": "Robert Lee",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": -2.3,
   "avgExpected": -1.2,
   "aId": "6389f8b2-7099-4e3a-ae3a-64cd8c99fcae",
   "bId": "c7ffa10b-a10b-4adc-9fb6-46ed7afaeecb"
  },
  {
   "a": "Ken Bienkowski",
   "b": "Jack Tran",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.5,
   "avgExpected": 2.5,
   "aId": "5cc85746-e4a6-432e-bfe5-8166f02867ce",
   "bId": "dbe6ecd1-6aad-4f8f-bc44-702ef0be5667"
  },
  {
   "a": "Jay Scheinman",
   "b": "Jennifer Makfinsky",
   "team": "Monroe",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -2,
   "avgExpected": -1.3,
   "aId": "20efc741-170d-4866-a65a-add828350b9b",
   "bId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
  },
  {
   "a": "Annette Marsh",
   "b": "Diane Bracco",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.7,
   "avgExpected": 0.6,
   "aId": "5db7fb50-d1a1-4c3f-8d61-34ca1947300c",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Kara Chubrik",
   "b": "Karen Veninger",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": -1.3,
   "avgExpected": -0.2,
   "aId": "6848f02a-1acc-47f8-8743-3525311031a9",
   "bId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "a": "Kim Slomeana",
   "b": "Mary Hain",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.7,
   "avgExpected": 0.3,
   "aId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Connie Cao",
   "b": "Jean Knab",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -5,
   "avgExpected": -3.7,
   "aId": "6e5f012d-5fa9-4633-b91f-e4d216a8cc12",
   "bId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "a": "Lizabeth Hutchinson",
   "b": "Erik Jacobsen",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.3,
   "avgExpected": 2.3,
   "aId": "55f54df6-5682-4e88-a077-dc9274331ecd",
   "bId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "a": "Rob Oddy",
   "b": "Hafeez Saheed",
   "team": "Flemington Blue",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -4.7,
   "avgExpected": -3.9,
   "aId": "89ba31d0-20be-4443-b93e-aab0866ad62d",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Lea Frank",
   "b": "Ray Suhocki",
   "team": "Pickleball Lehigh Valley",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -3.1,
   "aId": "86364a42-9c6b-45f7-b67d-4b1bc5b4d7f7",
   "bId": "f37395e3-2842-41e5-a849-16a964341f15"
  },
  {
   "a": "Kristin Duva",
   "b": "Rani Gundavarapu",
   "team": "Montville",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2.7,
   "avgExpected": -1.5,
   "aId": "33bedbfd-6715-4614-8662-650a8bc4c678",
   "bId": "8b89397a-e680-47f5-bc37-151b91b6e157"
  },
  {
   "a": "Maureen Bruno",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.3,
   "aId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Matthew Colasanto",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 0.4,
   "avgExpected": 1.5,
   "aId": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Elizabeth Dziekonska",
   "b": "Francisco Miranda",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -9.4,
   "avgExpected": -8.3,
   "aId": "028e04cc-f2eb-4248-a442-e2c874d224c6",
   "bId": "de5e7811-d3df-4987-9ca5-2a782f75b93b"
  },
  {
   "a": "Eileen Moore",
   "b": "Anthony Deangelis",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.6,
   "aId": "13baa9f0-6b36-49e8-b085-c8933cb044b2",
   "bId": "4b9f7f7b-5027-482c-93aa-66ca594436db"
  },
  {
   "a": "Craig Mehnert",
   "b": "David Mcdonough",
   "team": "Players Courtyard Wave",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 0.4,
   "avgExpected": 1.4,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "7fc31e7b-bf19-43f2-a876-728d72287383"
  },
  {
   "a": "Eileen Moore",
   "b": "Diane Bracco",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -0.7,
   "avgExpected": 0.6,
   "aId": "13baa9f0-6b36-49e8-b085-c8933cb044b2",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Jay Scheinman",
   "b": "Maureen Bruno",
   "team": "Monroe",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -4.3,
   "avgExpected": -3.4,
   "aId": "20efc741-170d-4866-a65a-add828350b9b",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Pete Dunn",
   "b": "Jason Fingerman",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 4.8,
   "avgExpected": 5.9,
   "aId": "8e45f538-d95a-4554-9ccf-443a06b5a89e",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Linda Landis",
   "b": "Lawrence Padersky",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 0.7,
   "avgExpected": 2.1,
   "aId": "3d1d0833-fbb7-483c-9b63-88a7f2064986",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Bob Debarge",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.3,
   "aId": "e0d98c57-92dd-4719-ab14-3635205f3328",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Tracy Waffenfeld",
   "b": "Patrick Phalen",
   "team": "Montville",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.9,
   "aId": "2bc6c3c4-805a-4584-bbb9-6185448a3298",
   "bId": "7cd73785-7cfc-490b-a713-26de64646d1c"
  },
  {
   "a": "Brett Wilson",
   "b": "David Cooley",
   "team": "Flemington Green",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.8,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "f0779bc8-629c-4623-a6fb-d85825784b9d"
  },
  {
   "a": "Charlie Kissane",
   "b": "Lawrence Padersky",
   "team": "ACE",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -5,
   "avgExpected": -3.5,
   "aId": "093ee16e-d05f-4cd5-a93c-ea5ec98debac",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Cheryl Tarby",
   "b": "Raymond Lormel",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -6,
   "avgExpected": -4.9,
   "aId": "c131fed2-9bcb-427c-99c1-b507dda92320",
   "bId": "c6bfaf46-bfa1-40eb-8774-04151364f747"
  },
  {
   "a": "Denise Rempson",
   "b": "Erik Jacobsen",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 3.3,
   "avgExpected": 4.7,
   "aId": "2e13698d-f902-43c1-b5b1-226d40d7af3d",
   "bId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "a": "Michelle Smith",
   "b": "Jeff Pillar",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -0.7,
   "avgActual": -6,
   "avgExpected": -4.9,
   "aId": "1e1ed1c7-86b8-4b90-ae25-eb543727e2b7",
   "bId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6"
  },
  {
   "a": "Rick Weiser",
   "b": "Tina Convery",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -1.2,
   "avgExpected": 0.2,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "f739e9d0-4a76-43d8-9423-4a0ddbfcd63d"
  },
  {
   "a": "Linda Seemann",
   "b": "Bob Debarge",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -3.3,
   "avgExpected": -1.8,
   "aId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c",
   "bId": "e0d98c57-92dd-4719-ab14-3635205f3328"
  },
  {
   "a": "Raymond Lormel",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -5.3,
   "avgExpected": -4.2,
   "aId": "c6bfaf46-bfa1-40eb-8774-04151364f747",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Andrea Schwab",
   "b": "Lawrence Padersky",
   "team": "ACE",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": -0.7,
   "avgActual": 2.9,
   "avgExpected": 3.8,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Sam Doctor",
   "b": "Dave Sarmir",
   "team": "Flemington Green",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.6,
   "avgExpected": 0.6,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32"
  },
  {
   "a": "Jason Belmont",
   "b": "Cheryl Tarby",
   "team": "Mercer Bucks",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -1.2,
   "avgExpected": -0.1,
   "aId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c",
   "bId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "a": "Kathi Sheehan",
   "b": "Denise Rempson",
   "team": "Home Court",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.7,
   "avgActual": -1.9,
   "avgExpected": -0.9,
   "aId": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
   "bId": "2e13698d-f902-43c1-b5b1-226d40d7af3d"
  },
  {
   "a": "Heidi Weinroth",
   "b": "Tina Convery",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.3,
   "avgExpected": 1.3,
   "aId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2",
   "bId": "f739e9d0-4a76-43d8-9423-4a0ddbfcd63d"
  },
  {
   "a": "Howard Eng",
   "b": "Joseph Carrado",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -6.7,
   "avgExpected": -5,
   "aId": "7727f912-4c91-468e-bc39-42aa85e084ab",
   "bId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528"
  },
  {
   "a": "Joseph Carrado",
   "b": "Arnold Witte",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -9.7,
   "avgExpected": -8.3,
   "aId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528",
   "bId": "b7955946-3573-43a8-912d-0e851e0ca827"
  },
  {
   "a": "Joseph Carrado",
   "b": "Raymond Lormel",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -7,
   "avgExpected": -5.4,
   "aId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528",
   "bId": "c6bfaf46-bfa1-40eb-8774-04151364f747"
  },
  {
   "a": "Craig Mehnert",
   "b": "Michael Ross",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3.2,
   "avgExpected": -1.9,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0"
  },
  {
   "a": "Dave Sarmir",
   "b": "Karen Veninger",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 0.7,
   "avgExpected": 2.2,
   "aId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32",
   "bId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "a": "Randy Kraftsow",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -4.2,
   "avgExpected": -2.6,
   "aId": "b4abc444-82dd-446c-b55e-ad3ca1610ebd",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Sue Glass",
   "b": "Jerry Margulies",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0.3,
   "avgExpected": 1.9,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "a": "Arnold Witte",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -6.3,
   "avgExpected": -4.5,
   "aId": "b7955946-3573-43a8-912d-0e851e0ca827",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Barb Mulckhuyse",
   "b": "Luz Bonner",
   "team": "Players Courtyard Wave",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -2.3,
   "avgExpected": -1.1,
   "aId": "b4b69268-6029-4071-84b1-45535a570f3a",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "a": "Kara Chubrik",
   "b": "Nancy Cook",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -5,
   "avgExpected": -3.1,
   "aId": "6848f02a-1acc-47f8-8743-3525311031a9",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Jerry O’Loughlin",
   "b": "Brian Perlowitz",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 2,
   "avgExpected": 3.7,
   "aId": "0b2d484f-d8ca-4241-85ec-0ebb91b80e9e",
   "bId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1"
  },
  {
   "a": "Sam Doctor",
   "b": "Peggy Matzen",
   "team": "Flemington Green",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 1.3,
   "avgExpected": 2.4,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Kathi Sheehan",
   "b": "Erik Jacobsen",
   "team": "Home Court",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -1.7,
   "avgExpected": -0.3,
   "aId": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
   "bId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "a": "Scott Auty",
   "b": "Cathy Fiebs",
   "team": "ACE",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": -0.8,
   "avgActual": 1.6,
   "avgExpected": 2.7,
   "aId": "53024744-72eb-4d56-b0c9-93a6201bdc33",
   "bId": "b39f886b-aa7a-40ca-81a1-5963941e541f"
  },
  {
   "a": "Amy Clayman",
   "b": "Dawn Gordon",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 3,
   "avgExpected": 4.6,
   "aId": "224e578f-ce44-4dbe-94d7-4e4dda113c63",
   "bId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "a": "Scott Nissenbaum",
   "b": "George Nouaime",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 1,
   "avgExpected": 2.2,
   "aId": "31690ced-f9c2-4b04-85cd-19ec22e55d48",
   "bId": "379ba4b1-4102-4424-bdee-300e8e4fa35b"
  },
  {
   "a": "Sue Glass",
   "b": "Howard Eng",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -4.2,
   "avgExpected": -2.7,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "7727f912-4c91-468e-bc39-42aa85e084ab"
  },
  {
   "a": "Warren Meade",
   "b": "Holly Ferguson",
   "team": "Flemington Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -1.1,
   "aId": "57c42d81-72e1-4e3c-8f52-397d8030a513",
   "bId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "a": "Craig Mehnert",
   "b": "Luz Bonner",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -4,
   "avgExpected": -2.2,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "a": "Dan Amabile",
   "b": "Annette Marsh",
   "team": "Flemington Green",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 2.2,
   "avgExpected": 3.7,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "5db7fb50-d1a1-4c3f-8d61-34ca1947300c"
  },
  {
   "a": "Howard Eng",
   "b": "Jason Belmont",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -2.2,
   "avgExpected": -0.7,
   "aId": "7727f912-4c91-468e-bc39-42aa85e084ab",
   "bId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c"
  },
  {
   "a": "Ken Bienkowski",
   "b": "Steven Ditizii",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.5,
   "aId": "5cc85746-e4a6-432e-bfe5-8166f02867ce",
   "bId": "f4367c50-f924-4bd9-b825-78ee61e92c43"
  },
  {
   "a": "Brian Perlowitz",
   "b": "Rachel Baluyot",
   "team": "Home Court",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.2,
   "aId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1",
   "bId": "5e265a90-558b-4564-acd8-f358bab162a9"
  },
  {
   "a": "Joseph Carrado",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -6.7,
   "avgExpected": -4.9,
   "aId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Steven Heller",
   "b": "Tina Convery",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -1.2,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "f739e9d0-4a76-43d8-9423-4a0ddbfcd63d"
  },
  {
   "a": "Sharon Oddy",
   "b": "Sheila Curran",
   "team": "Flemington Blue",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -0.2,
   "avgExpected": 1.4,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "a": "Jeff Pillar",
   "b": "Dan Callaghan",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -4,
   "avgExpected": -2.5,
   "aId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Sarah Stangota",
   "b": "Ren Mortara",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0.7,
   "avgExpected": 2.5,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "a": "Diane Herbst",
   "b": "Jack Tran",
   "team": "Montville",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -1.6,
   "avgExpected": -0.1,
   "aId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9",
   "bId": "dbe6ecd1-6aad-4f8f-bc44-702ef0be5667"
  },
  {
   "a": "Jason Belmont",
   "b": "Jean Knab",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -2,
   "avgExpected": -0.4,
   "aId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c",
   "bId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "a": "Jean Knab",
   "b": "Jerry Margulies",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -2.6,
   "avgExpected": -1,
   "aId": "abce612c-0edd-4b72-ab5a-f1983c38f545",
   "bId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "a": "Charlie Kissane",
   "b": "Scott Auty",
   "team": "ACE",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3.7,
   "avgExpected": -1.6,
   "aId": "093ee16e-d05f-4cd5-a93c-ea5ec98debac",
   "bId": "53024744-72eb-4d56-b0c9-93a6201bdc33"
  },
  {
   "a": "Dan Callaghan",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -3.7,
   "avgExpected": -1.9,
   "aId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Jerry Margulies",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -5.5,
   "avgExpected": -3.8,
   "aId": "e5bf1611-3d03-4600-9e72-301e91a9db18",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Michelle Lehman",
   "b": "Luz Bonner",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -8.7,
   "avgExpected": -6.6,
   "aId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "a": "Edward Verish",
   "b": "Michelle Lehman",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -9,
   "avgExpected": -7.4,
   "aId": "bcbd0332-5104-40b6-a2a1-78fc174a0392",
   "bId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "a": "Mary Foster",
   "b": "Tom Giunta",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -8,
   "avgExpected": -6.1,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "a": "Edward Verish",
   "b": "Ed Mendoza",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -11,
   "avgExpected": -8.9,
   "aId": "bcbd0332-5104-40b6-a2a1-78fc174a0392",
   "bId": "cb4a8451-13f9-4c27-8dc6-847fea7be9b4"
  },
  {
   "a": "Natalia Fischer",
   "b": "Holly Ferguson",
   "team": "Flemington Blue",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3,
   "avgExpected": -1.3,
   "aId": "79578efc-55c2-49fb-9f69-2f776055ff70",
   "bId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -1,
   "avgActual": 2.1,
   "avgExpected": 3.5,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Annette Marsh",
   "b": "Nancy Cook",
   "team": "Flemington Green",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1,
   "avgActual": -1.8,
   "avgExpected": 0,
   "aId": "5db7fb50-d1a1-4c3f-8d61-34ca1947300c",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "David Mcdonough",
   "b": "Luz Bonner",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -6,
   "avgExpected": -4,
   "aId": "7fc31e7b-bf19-43f2-a876-728d72287383",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "a": "Greg Taylor",
   "b": "William Askin",
   "team": "Players Courtyard Surge",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.8,
   "avgExpected": 2.8,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "a07a95ba-4732-4c20-a3eb-0e74b419aee3"
  },
  {
   "a": "Sue Glass",
   "b": "Raymond Lormel",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -2,
   "avgExpected": 0,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "c6bfaf46-bfa1-40eb-8774-04151364f747"
  },
  {
   "a": "Jean Knab",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1,
   "avgActual": -1.3,
   "avgExpected": 0.3,
   "aId": "abce612c-0edd-4b72-ab5a-f1983c38f545",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Michael Ross",
   "b": "Ed Mendoza",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -8.2,
   "avgExpected": -6.2,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "cb4a8451-13f9-4c27-8dc6-847fea7be9b4"
  },
  {
   "a": "Jerry O’Loughlin",
   "b": "Erik Jacobsen",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 0.7,
   "avgExpected": 2.9,
   "aId": "0b2d484f-d8ca-4241-85ec-0ebb91b80e9e",
   "bId": "e71f6e78-89f1-4535-acf1-79afdcb76fac"
  },
  {
   "a": "Jeff Pillar",
   "b": "Mary Hain",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1,
   "avgActual": -2.2,
   "avgExpected": -0.3,
   "aId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Jill Assante",
   "b": "Kristin Duva",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.7,
   "avgExpected": -2.4,
   "aId": "3213af43-d560-41de-9963-8a647b7cc8a4",
   "bId": "33bedbfd-6715-4614-8662-650a8bc4c678"
  },
  {
   "a": "Christine Fletcher",
   "b": "Tom Giunta",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -8.7,
   "avgExpected": -6.8,
   "aId": "85b6cf96-6ca6-460f-924d-a70bce3ea487",
   "bId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "a": "Marc Schwegel",
   "b": "Lawrence Padersky",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": -1,
   "avgExpected": 0.9,
   "aId": "b57cfd69-646a-4a7c-8189-fa96df33602c",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Howard Eng",
   "b": "Arnold Witte",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -5.7,
   "avgExpected": -3.4,
   "aId": "7727f912-4c91-468e-bc39-42aa85e084ab",
   "bId": "b7955946-3573-43a8-912d-0e851e0ca827"
  },
  {
   "a": "Robert Lee",
   "b": "Diane Herbst",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1,
   "avgActual": -0.2,
   "avgExpected": 1.7,
   "aId": "c7ffa10b-a10b-4adc-9fb6-46ed7afaeecb",
   "bId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9"
  },
  {
   "a": "Rick Weiser",
   "b": "Angela Bartelt",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -1.3,
   "avgExpected": 1.2,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc"
  },
  {
   "a": "Elizabeth Dziekonska",
   "b": "Raymond Lormel",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -7.5,
   "avgExpected": -5.4,
   "aId": "028e04cc-f2eb-4248-a442-e2c874d224c6",
   "bId": "c6bfaf46-bfa1-40eb-8774-04151364f747"
  },
  {
   "a": "Jay Scheinman",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -5.4,
   "avgExpected": -3.5,
   "aId": "20efc741-170d-4866-a65a-add828350b9b",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Bob Debarge",
   "b": "Maureen Bruno",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -3.7,
   "avgExpected": -1.1,
   "aId": "e0d98c57-92dd-4719-ab14-3635205f3328",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "a": "Eric Kirschner",
   "b": "Patrick Phalen",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -6.3,
   "avgExpected": -3.7,
   "aId": "0bb58fc2-f7ba-4de8-9e1a-f691cb152b18",
   "bId": "7cd73785-7cfc-490b-a713-26de64646d1c"
  },
  {
   "a": "Eric Brezina",
   "b": "Sarah Stangota",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 2,
   "avgExpected": 4.3,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Dawn Gordon",
   "b": "Cathy Fiebs",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 0.5,
   "avgExpected": 2.7,
   "aId": "756e256e-ea2f-4e25-9c6a-e780860d048f",
   "bId": "b39f886b-aa7a-40ca-81a1-5963941e541f"
  },
  {
   "a": "Jennifer Makfinsky",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 0.8,
   "avgExpected": 3,
   "aId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Christine Steigerwalt",
   "b": "Nami Huang",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -1.5,
   "avgExpected": 0.8,
   "aId": "33f1ae41-08db-4067-b5f5-f9324faf93f0",
   "bId": "481c21f0-8481-47e8-9eba-9ab21c167cf4"
  },
  {
   "a": "Richard Ricciardi",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -2,
   "avgExpected": 0.5,
   "aId": "705bad48-cc2d-40fe-b96f-409996010d0d",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Bill Gold",
   "b": "Kristen Frendak",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -8.7,
   "avgExpected": -5.8,
   "aId": "368337c0-e1f6-4cd2-89ec-41b1e06042ea",
   "bId": "6389f8b2-7099-4e3a-ae3a-64cd8c99fcae"
  },
  {
   "a": "Ralph Lovelidge",
   "b": "Denise Stevens",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 0.3,
   "avgExpected": 2.7,
   "aId": "4c163a81-fd29-498c-bf1b-4337a8215ad4",
   "bId": "fc2f208d-f6cc-4d5c-98d8-3f40e5856576"
  },
  {
   "a": "Elizabeth Dziekonska",
   "b": "Karen Krusen",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.2,
   "avgActual": -5.8,
   "avgExpected": -3.7,
   "aId": "028e04cc-f2eb-4248-a442-e2c874d224c6",
   "bId": "55e259be-63de-43c7-a5b2-3f6a191e2bdb"
  },
  {
   "a": "Scott Heist",
   "b": "Diane Bracco",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -3.5,
   "avgExpected": -1.2,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Scott Heist",
   "b": "David Cooley",
   "team": "Flemington Green",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1.2,
   "avgActual": -4.4,
   "avgExpected": -2.6,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "f0779bc8-629c-4623-a6fb-d85825784b9d"
  },
  {
   "a": "George Nouaime",
   "b": "Jeffrey Lindstrom",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -3,
   "avgExpected": -0.6,
   "aId": "379ba4b1-4102-4424-bdee-300e8e4fa35b",
   "bId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69"
  },
  {
   "a": "Howard Eng",
   "b": "Ken Gross",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1.3,
   "avgExpected": 1.5,
   "aId": "7727f912-4c91-468e-bc39-42aa85e084ab",
   "bId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "a": "Bonnie Russo",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -2,
   "avgExpected": 0.8,
   "aId": "c32a3777-ab2f-457c-9232-39bee809dfc9",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Pete Certo",
   "b": "Kelley Batejan",
   "team": "ACE",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -1.5,
   "avgExpected": 1,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "a": "Tracy Waffenfeld",
   "b": "Jill Assante",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -5.3,
   "avgExpected": -2.5,
   "aId": "2bc6c3c4-805a-4584-bbb9-6185448a3298",
   "bId": "3213af43-d560-41de-9963-8a647b7cc8a4"
  },
  {
   "a": "Bob Sochor",
   "b": "David Corwin",
   "team": "Players Courtyard Surge",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 6.8,
   "avgExpected": 8.8,
   "aId": "27be2d93-9ffb-48be-a464-e0ab103426e3",
   "bId": "d026f18b-708f-49ce-99a2-77267ee0256e"
  },
  {
   "a": "Victoria Marchok",
   "b": "Francisco Miranda",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -11,
   "avgExpected": -8.6,
   "aId": "106bdd70-60f1-4cf1-aaa9-fbe99c1d8bc7",
   "bId": "de5e7811-d3df-4987-9ca5-2a782f75b93b"
  },
  {
   "a": "Tony Calderan",
   "b": "Jayne Mayer",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -3.7,
   "avgExpected": -0.9,
   "aId": "9024c317-0010-4e82-a07b-ce8bb2dee31a",
   "bId": "c6743f83-5947-4eec-aca8-f4f19b1e7a35"
  },
  {
   "a": "Christina Samtmann",
   "b": "Calvin Giles",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -3.5,
   "avgExpected": -1.1,
   "aId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce",
   "bId": "6e9ad16e-485c-47b3-90fc-d713d861ca16"
  },
  {
   "a": "Reginald Escusa",
   "b": "Lizabeth Hutchinson",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -2.7,
   "avgExpected": -0.3,
   "aId": "0e46e51a-0af8-4bdc-afb1-f73098c1534b",
   "bId": "55f54df6-5682-4e88-a077-dc9274331ecd"
  },
  {
   "a": "Victoria Marchok",
   "b": "Connie Cao",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.2,
   "avgActual": -10.8,
   "avgExpected": -8.7,
   "aId": "106bdd70-60f1-4cf1-aaa9-fbe99c1d8bc7",
   "bId": "6e5f012d-5fa9-4633-b91f-e4d216a8cc12"
  },
  {
   "a": "Ray Suhocki",
   "b": "Neil Pratesi",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -4,
   "avgExpected": -1.3,
   "aId": "f37395e3-2842-41e5-a849-16a964341f15",
   "bId": "fc7750bb-ae3e-4c36-8114-5b61f56aca52"
  },
  {
   "a": "Natalia Fischer",
   "b": "Hafeez Saheed",
   "team": "Flemington Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -3.3,
   "avgExpected": -0.5,
   "aId": "79578efc-55c2-49fb-9f69-2f776055ff70",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Cynthia Wojtkowski",
   "b": "Jennifer Makfinsky",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 0,
   "avgExpected": 3,
   "aId": "26b8531a-1f4c-4ffd-86ac-3ffb92eeee55",
   "bId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
  },
  {
   "a": "Barb Mulckhuyse",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -5.8,
   "avgExpected": -3.5,
   "aId": "b4b69268-6029-4071-84b1-45535a570f3a",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Michael Ross",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.3,
   "avgActual": -11.2,
   "avgExpected": -8.8,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Brett Wilson",
   "b": "Dan Amabile",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -3.7,
   "avgExpected": -0.7,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "3d3123f8-a4db-460f-8df3-70e6271cacfa"
  },
  {
   "a": "Michael Ross",
   "b": "Michelle Lehman",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -6,
   "avgExpected": -2.9,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "a": "Christine Steigerwalt",
   "b": "Lea Frank",
   "team": "Pickleball Lehigh Valley",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -2,
   "avgExpected": 0.7,
   "aId": "33f1ae41-08db-4067-b5f5-f9324faf93f0",
   "bId": "86364a42-9c6b-45f7-b67d-4b1bc5b4d7f7"
  },
  {
   "a": "Darlene Fusco",
   "b": "Christine Steigerwalt",
   "team": "Pickleball Lehigh Valley",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -2.8,
   "avgExpected": -0.5,
   "aId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4",
   "bId": "33f1ae41-08db-4067-b5f5-f9324faf93f0"
  },
  {
   "a": "Francisco Miranda",
   "b": "Jerry Margulies",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -6.2,
   "avgExpected": -3.7,
   "aId": "de5e7811-d3df-4987-9ca5-2a782f75b93b",
   "bId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "a": "Victoria Marchok",
   "b": "Cheryl Tarby",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -9.3,
   "avgExpected": -6,
   "aId": "106bdd70-60f1-4cf1-aaa9-fbe99c1d8bc7",
   "bId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "a": "Pete Certo",
   "b": "Marc Schwegel",
   "team": "ACE",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -6.3,
   "avgExpected": -3.2,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "b57cfd69-646a-4a7c-8189-fa96df33602c"
  },
  {
   "a": "Mary Ann Villamor",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -1,
   "avgExpected": 2.3,
   "aId": "66903b1a-7538-4953-8360-cb8060604780",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "a": "Rachel Baluyot",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.4,
   "avgActual": 3,
   "avgExpected": 6.2,
   "aId": "5e265a90-558b-4564-acd8-f358bab162a9",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "a": "Darlene Fusco",
   "b": "Scott Stenroos",
   "team": "Pickleball Lehigh Valley",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -1.1,
   "avgExpected": 1.2,
   "aId": "0b40bb1c-5eb7-4684-a979-bb55ba7cf3e4",
   "bId": "cd325aa6-3b7f-43a8-a671-4dcd4da4b9a8"
  },
  {
   "a": "Ralph Lovelidge",
   "b": "Suzane Sullivan",
   "team": "Pickleball Lehigh Valley",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.5,
   "avgActual": 1.6,
   "avgExpected": 3.9,
   "aId": "4c163a81-fd29-498c-bf1b-4337a8215ad4",
   "bId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6"
  },
  {
   "a": "Christina Samtmann",
   "b": "George Nouaime",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -6.2,
   "avgExpected": -3.6,
   "aId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce",
   "bId": "379ba4b1-4102-4424-bdee-300e8e4fa35b"
  },
  {
   "a": "Maureen Bruno",
   "b": "Petra Jones",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -1.5,
   "avgExpected": 1.4,
   "aId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7",
   "bId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "a": "Sean Wilson",
   "b": "Ray Suhocki",
   "team": "Pickleball Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -6.7,
   "avgExpected": -3.3,
   "aId": "8682646a-b77e-4015-96a1-78fd223fd918",
   "bId": "f37395e3-2842-41e5-a849-16a964341f15"
  },
  {
   "a": "Scott Heist",
   "b": "Kara Chubrik",
   "team": "Flemington Green",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -7.2,
   "avgExpected": -4.3,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "6848f02a-1acc-47f8-8743-3525311031a9"
  },
  {
   "a": "Joseph Koerner",
   "b": "Michelle Lehman",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -7.7,
   "avgExpected": -4.2,
   "aId": "b49f166d-9cd4-4b86-961d-380dd8189a87",
   "bId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "a": "Scott Nissenbaum",
   "b": "Dan Callaghan",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -2.8,
   "avgExpected": 0.2,
   "aId": "31690ced-f9c2-4b04-85cd-19ec22e55d48",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Annette Marsh",
   "b": "Dave Sarmir",
   "team": "Flemington Green",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.6,
   "avgActual": 0.4,
   "avgExpected": 3.3,
   "aId": "5db7fb50-d1a1-4c3f-8d61-34ca1947300c",
   "bId": "72f52b9c-0500-49de-99e6-1f6dadaa5c32"
  },
  {
   "a": "Hafeez Saheed",
   "b": "Tao Zhu",
   "team": "Flemington Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -7,
   "avgExpected": -3.2,
   "aId": "a0d294b1-27ed-4751-ae6c-eadf62746d20",
   "bId": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91"
  },
  {
   "a": "Theresa Corderi",
   "b": "Kristen Frendak",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -6.7,
   "avgExpected": -2.8,
   "aId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821",
   "bId": "6389f8b2-7099-4e3a-ae3a-64cd8c99fcae"
  },
  {
   "a": "Karen Krusen",
   "b": "Howard Eng",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2,
   "avgExpected": 1.3,
   "aId": "55e259be-63de-43c7-a5b2-3f6a191e2bdb",
   "bId": "7727f912-4c91-468e-bc39-42aa85e084ab"
  },
  {
   "a": "Kelley Batejan",
   "b": "Pete Dunn",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -0.5,
   "avgExpected": 2.8,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "a": "Olga Turova",
   "b": "Prashant Mehta",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -5.5,
   "avgExpected": -2.4,
   "aId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f",
   "bId": "555f88c0-56c7-4605-a47d-723083ec5129"
  },
  {
   "a": "Dennis Higman",
   "b": "Lolita Hagen",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.6,
   "avgActual": 3,
   "avgExpected": 6.8,
   "aId": "b8fabebb-fd0f-49a8-929a-defbac098e43",
   "bId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "a": "Ralph Lovelidge",
   "b": "Sean Wilson",
   "team": "Pickleball Lehigh Valley",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.7,
   "avgActual": -3.4,
   "avgExpected": -0.8,
   "aId": "4c163a81-fd29-498c-bf1b-4337a8215ad4",
   "bId": "8682646a-b77e-4015-96a1-78fd223fd918"
  },
  {
   "a": "Elizabeth Dziekonska",
   "b": "Cheryl Tarby",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -6.7,
   "avgExpected": -2.8,
   "aId": "028e04cc-f2eb-4248-a442-e2c874d224c6",
   "bId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "a": "Reginald Escusa",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -3.3,
   "avgExpected": 0.7,
   "aId": "0e46e51a-0af8-4bdc-afb1-f73098c1534b",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "a": "Christine Fletcher",
   "b": "Danya George",
   "team": "Players Courtyard Wave",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.7,
   "avgActual": -9.7,
   "avgExpected": -6.8,
   "aId": "85b6cf96-6ca6-460f-924d-a70bce3ea487",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Michelle Smith",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -4.2,
   "avgExpected": -1,
   "aId": "1e1ed1c7-86b8-4b90-ae25-eb543727e2b7",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Christina Samtmann",
   "b": "Mary Hain",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.8,
   "avgActual": -4.3,
   "avgExpected": -1.4,
   "aId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Charlie Kissane",
   "b": "Jason Fingerman",
   "team": "ACE",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -4,
   "avgExpected": 0.1,
   "aId": "093ee16e-d05f-4cd5-a93c-ea5ec98debac",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Anthony Deangelis",
   "b": "Karen Veninger",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -1.5,
   "avgExpected": 2.1,
   "aId": "4b9f7f7b-5027-482c-93aa-66ca594436db",
   "bId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "a": "Angela Bartelt",
   "b": "Joan Rudderow",
   "team": "Players Courtyard Surge",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.8,
   "avgActual": -2.4,
   "avgExpected": 0.9,
   "aId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Tracy Waffenfeld",
   "b": "Kristen Frendak",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -10,
   "avgExpected": -5.7,
   "aId": "2bc6c3c4-805a-4584-bbb9-6185448a3298",
   "bId": "6389f8b2-7099-4e3a-ae3a-64cd8c99fcae"
  },
  {
   "a": "Ren Mortara",
   "b": "Hafeez Saheed",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -6,
   "avgExpected": -1.9,
   "aId": "91b2bf26-24f1-437f-82d4-f8ad382c0479",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Andrea Finnegan",
   "b": "Linda Landis",
   "team": "ACE",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2,
   "avgActual": -2,
   "avgExpected": 2.1,
   "aId": "1e06822c-9c02-48d2-a4f7-6b3f71bd7d4b",
   "bId": "3d1d0833-fbb7-483c-9b63-88a7f2064986"
  },
  {
   "a": "David Mcdonough",
   "b": "Joseph Koerner",
   "team": "Players Courtyard Wave",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2,
   "avgActual": -8.5,
   "avgExpected": -4.5,
   "aId": "7fc31e7b-bf19-43f2-a876-728d72287383",
   "bId": "b49f166d-9cd4-4b86-961d-380dd8189a87"
  },
  {
   "a": "Marianne Rosato",
   "b": "Peggy Matzen",
   "team": "Flemington Green",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -2,
   "avgActual": -4.4,
   "avgExpected": -0.8,
   "aId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Rick Weiser",
   "b": "Richard Fox",
   "team": "Players Courtyard Surge",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2,
   "avgActual": -3.7,
   "avgExpected": 1,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "ef0bc1ce-6709-4172-97a6-8ea5a462bea4"
  },
  {
   "a": "Mary Foster",
   "b": "Joseph Koerner",
   "team": "Players Courtyard Wave",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -8,
   "avgExpected": -3.2,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "b49f166d-9cd4-4b86-961d-380dd8189a87"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Jay Scheinman",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -8,
   "avgExpected": -3,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "20efc741-170d-4866-a65a-add828350b9b"
  },
  {
   "a": "Linda Seemann",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -6,
   "avgExpected": -0.8,
   "aId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Eric Brezina",
   "b": "Paul Phillips",
   "team": "Flemington Blue",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.2,
   "avgActual": -5.2,
   "avgExpected": -0.9,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Bill Gold",
   "b": "Rani Gundavarapu",
   "team": "Montville",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.3,
   "avgActual": -7.7,
   "avgExpected": -3.1,
   "aId": "368337c0-e1f6-4cd2-89ec-41b1e06042ea",
   "bId": "8b89397a-e680-47f5-bc37-151b91b6e157"
  },
  {
   "a": "Kim Slomeana",
   "b": "Jeffrey Lindstrom",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -3.5,
   "avgExpected": 1.4,
   "aId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8",
   "bId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69"
  },
  {
   "a": "Sue Glass",
   "b": "Joseph Carrado",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -9.3,
   "avgExpected": -3.8,
   "aId": "49fbb4da-a7d5-48fd-8943-209c70e6fe65",
   "bId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528"
  },
  {
   "a": "Andrea Finnegan",
   "b": "Andrea Schwab",
   "team": "ACE",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.4,
   "avgActual": -1.7,
   "avgExpected": 4,
   "aId": "1e06822c-9c02-48d2-a4f7-6b3f71bd7d4b",
   "bId": "605d7726-f903-4606-ad3d-14964b9e2e1b"
  },
  {
   "a": "Gail Hannagan",
   "b": "Eric Brezina",
   "team": "Flemington Blue",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -2.7,
   "avgActual": 1,
   "avgExpected": 6.5,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Connie Cao",
   "b": "Jason Belmont",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -3,
   "avgActual": -12.3,
   "avgExpected": -5.4,
   "aId": "6e5f012d-5fa9-4633-b91f-e4d216a8cc12",
   "bId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c"
  },
  {
   "a": "Dan Callaghan",
   "b": "Mary Hain",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -3.5,
   "avgActual": -10,
   "avgExpected": -3.7,
   "aId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Bonnie Russo",
   "b": "Maureen Bruno",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -3.5,
   "avgActual": -5.7,
   "avgExpected": 2.6,
   "aId": "c32a3777-ab2f-457c-9232-39bee809dfc9",
   "bId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Montville",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-03-01T13:00:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 647,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kristin Duva",
      "Jake Denooyer"
     ],
     "a": [
      "Christine Steigerwalt",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Eric Kirschner"
     ],
     "a": [
      "Darlene Fusco",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Rani Gundavarapu",
      "Jack Tran"
     ],
     "a": [
      "Denise Stevens",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Clare Cruz",
      "Ken Bienkowski"
     ],
     "a": [
      "Suzane Sullivan",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Theresa Corderi",
      "Diane Herbst"
     ],
     "a": [
      "Christine Steigerwalt",
      "Victoria Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Rani Gundavarapu",
      "Kristin Duva"
     ],
     "a": [
      "Suzane Sullivan",
      "Tracey Klemick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bill Lam",
      "Jack Tran"
     ],
     "a": [
      "Sean Wilson",
      "Mark Scott"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Bill Gold",
      "Eric Kirschner"
     ],
     "a": [
      "Neil Pratesi",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Theresa Corderi",
      "Jake Denooyer"
     ],
     "a": [
      "Christine Steigerwalt",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Clare Cruz",
      "Bill Lam"
     ],
     "a": [
      "Darlene Fusco",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Bill Gold"
     ],
     "a": [
      "Denise Stevens",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Diane Herbst",
      "Ken Bienkowski"
     ],
     "a": [
      "Victoria Stenroos",
      "Neil Pratesi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kristen Frendak",
      "Kristin Duva"
     ],
     "a": [
      "Denise Stevens",
      "Tracey Klemick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Theresa Corderi",
      "Rani Gundavarapu"
     ],
     "a": [
      "Suzane Sullivan",
      "Darlene Fusco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jack Tran",
      "Jake Denooyer"
     ],
     "a": [
      "Ralph Lovelidge",
      "Sean Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Kirschner",
      "Ken Bienkowski"
     ],
     "a": [
      "Mark Scott",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rani Gundavarapu",
      "Bill Gold"
     ],
     "a": [
      "Victoria Stenroos",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Clare Cruz",
      "Jack Tran"
     ],
     "a": [
      "Denise Stevens",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristin Duva",
      "Bill Lam"
     ],
     "a": [
      "Tracey Klemick",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Diane Herbst",
      "Eric Kirschner"
     ],
     "a": [
      "Suzane Sullivan",
      "Scott Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Clare Cruz",
      "Theresa Corderi"
     ],
     "a": [
      "Christine Steigerwalt",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Rani Gundavarapu"
     ],
     "a": [
      "Darlene Fusco",
      "Denise Stevens"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jake Denooyer",
      "Eric Kirschner"
     ],
     "a": [
      "Sean Wilson",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bill Gold",
      "Ken Bienkowski"
     ],
     "a": [
      "Mark Scott",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Diane Herbst",
      "Jack Tran"
     ],
     "a": [
      "Christine Steigerwalt",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Theresa Corderi",
      "Bill Lam"
     ],
     "a": [
      "Tracey Klemick",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Jake Denooyer"
     ],
     "a": [
      "Victoria Stenroos",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kristin Duva",
      "Ken Bienkowski"
     ],
     "a": [
      "Suzane Sullivan",
      "Neil Pratesi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rani Gundavarapu",
      "Diane Herbst"
     ],
     "a": [
      "Tracey Klemick",
      "Victoria Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kristin Duva",
      "Clare Cruz"
     ],
     "a": [
      "Christine Steigerwalt",
      "Darlene Fusco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jack Tran",
      "Bill Gold"
     ],
     "a": [
      "Neil Pratesi",
      "Mark Scott"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Bill Lam",
      "Eric Kirschner"
     ],
     "a": [
      "Ralph Lovelidge",
      "Scott Stenroos"
     ]
    }
   ],
   "subs": [
    "Victoria Stenroos",
    "Tracey Klemick",
    "Clare Cruz"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Players Courtyard Surge",
   "away": "Bounce Malvern",
   "time": "2026-03-01T13:00:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 460,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Angela Bartelt",
      "Steven Heller"
     ],
     "a": [
      "Mary Hain",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dawn Kempton",
      "David Corwin"
     ],
     "a": [
      "Randy Kraftsow",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tina Convery",
      "Richard Fox"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Joan Rudderow",
      "Bob Sochor"
     ],
     "a": [
      "Christina Samtmann",
      "George Nouaime"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lolita Hagen",
      "Joan Rudderow"
     ],
     "a": [
      "Kim Slomeana",
      "Michelle Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tina Convery",
      "Dawn Kempton"
     ],
     "a": [
      "Randy Kraftsow",
      "Mary Hain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Steven Heller",
      "Bob Sochor"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeff Pillar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dennis Higman",
      "David Corwin"
     ],
     "a": [
      "George Nouaime",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Kim Slomeana",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lolita Hagen",
      "Richard Fox"
     ],
     "a": [
      "Michelle Smith",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tina Convery",
      "Bob Sochor"
     ],
     "a": [
      "Christina Samtmann",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "Rick Weiser"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Angela Bartelt",
      "Dawn Kempton"
     ],
     "a": [
      "Mary Hain",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Heidi Weinroth",
      "Lolita Hagen"
     ],
     "a": [
      "Zalene Corey",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Steven Heller",
      "Richard Fox"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Corwin",
      "Rick Weiser"
     ],
     "a": [
      "Dan Callaghan",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Joan Rudderow",
      "David Corwin"
     ],
     "a": [
      "Michelle Smith",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Dawn Kempton",
      "Dennis Higman"
     ],
     "a": [
      "Christina Samtmann",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tina Convery",
      "Rick Weiser"
     ],
     "a": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Angela Bartelt",
      "Bob Sochor"
     ],
     "a": [
      "Kim Slomeana",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lolita Hagen",
      "Tina Convery"
     ],
     "a": [
      "Zalene Corey",
      "Michelle Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Heidi Weinroth",
      "Dawn Kempton"
     ],
     "a": [
      "Mary Hain",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rick Weiser",
      "Steven Heller"
     ],
     "a": [
      "Jeff Pillar",
      "George Nouaime"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Richard Fox",
      "Bob Sochor"
     ],
     "a": [
      "Dan Callaghan",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "Steven Heller"
     ],
     "a": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Angela Bartelt",
      "Rick Weiser"
     ],
     "a": [
      "Randy Kraftsow",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Dawn Kempton",
      "David Corwin"
     ],
     "a": [
      "Kim Slomeana",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Christina Samtmann",
      "Brian Schartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lolita Hagen",
      "Angela Bartelt"
     ],
     "a": [
      "Michelle Smith",
      "Kim Slomeana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Joan Rudderow",
      "Heidi Weinroth"
     ],
     "a": [
      "Randy Kraftsow",
      "Zalene Corey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Richard Fox",
      "David Corwin"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Dennis Higman",
      "Bob Sochor"
     ],
     "a": [
      "Brian Schartz",
      "George Nouaime"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Mercer Bucks",
   "away": "Monroe",
   "time": "2026-03-01T14:00:00",
   "complete": true,
   "homePoints": 512,
   "awayPoints": 652,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Raymond Lormel"
     ],
     "a": [
      "Karen Rosenberg",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jean Knab",
      "Arnold Witte"
     ],
     "a": [
      "Maureen Bruno",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Connie Cao",
      "Jason Belmont"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sue Glass",
      "Jerry Margulies"
     ],
     "a": [
      "Linda Seemann",
      "Bob Debarge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Cheryl Tarby"
     ],
     "a": [
      "Maureen Bruno",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sue Glass",
      "Connie Cao"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Cynthia Wojtkowski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Raymond Lormel",
      "Ken Gross"
     ],
     "a": [
      "Mike Hardy",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Francisco Miranda",
      "Jerry Margulies"
     ],
     "a": [
      "Bob Debarge",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Ken Gross"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Arnold Witte"
     ],
     "a": [
      "Linda Seemann",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cheryl Tarby",
      "Francisco Miranda"
     ],
     "a": [
      "Karen Rosenberg",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jean Knab",
      "Jason Belmont"
     ],
     "a": [
      "Cynthia Wojtkowski",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jean Knab",
      "Cheryl Tarby"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Cynthia Wojtkowski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sue Glass",
      "Connie Cao"
     ],
     "a": [
      "Maureen Bruno",
      "Linda Seemann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ken Gross",
      "Jason Belmont"
     ],
     "a": [
      "Mike Hardy",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Raymond Lormel",
      "Jerry Margulies"
     ],
     "a": [
      "Matthew Colasanto",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Ken Gross"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Arnold Witte"
     ],
     "a": [
      "Karen Rosenberg",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sue Glass",
      "Francisco Miranda"
     ],
     "a": [
      "Maureen Bruno",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jean Knab",
      "Raymond Lormel"
     ],
     "a": [
      "Linda Seemann",
      "Bob Debarge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Karen Krusen"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Connie Cao",
      "Cheryl Tarby"
     ],
     "a": [
      "Cynthia Wojtkowski",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ken Gross",
      "Arnold Witte"
     ],
     "a": [
      "Mike Hardy",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jason Belmont",
      "Jerry Margulies"
     ],
     "a": [
      "Richard Ricciardi",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sue Glass",
      "Ken Gross"
     ],
     "a": [
      "Linda Seemann",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Francisco Miranda"
     ],
     "a": [
      "Karen Rosenberg",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Connie Cao",
      "Raymond Lormel"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jean Knab",
      "Jerry Margulies"
     ],
     "a": [
      "Cynthia Wojtkowski",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jean Knab",
      "Sue Glass"
     ],
     "a": [
      "Karen Rosenberg",
      "Jennifer Makfinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Cheryl Tarby"
     ],
     "a": [
      "Maureen Bruno",
      "Linda Seemann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Arnold Witte",
      "Jason Belmont"
     ],
     "a": [
      "Mike Hardy",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Raymond Lormel",
      "Francisco Miranda"
     ],
     "a": [
      "Matthew Colasanto",
      "Bob Debarge"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "ACE",
   "away": "Players Courtyard Wave",
   "time": "2026-03-01T15:00:00",
   "complete": true,
   "homePoints": 653,
   "awayPoints": 470,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dawn Gordon",
      "Jason Fingerman"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kelley Batejan",
      "Scott Auty"
     ],
     "a": [
      "Luz Bonner",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Linda Landis",
      "Marc Schwegel"
     ],
     "a": [
      "Franchesa Mclean",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Clayman",
      "Eric Clayman"
     ],
     "a": [
      "Michelle Lehman",
      "David Mcdonough"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelley Batejan",
      "Dawn Gordon"
     ],
     "a": [
      "Danya George",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Andrea Finnegan",
      "Linda Landis"
     ],
     "a": [
      "Michelle Lehman",
      "Franchesa Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jason Fingerman",
      "Marc Schwegel"
     ],
     "a": [
      "Joseph Koerner",
      "Tom Giunta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Scott Auty",
      "Charlie Kissane"
     ],
     "a": [
      "Craig Mehnert",
      "Todd Gelfand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelley Batejan",
      "Scott Auty"
     ],
     "a": [
      "Mary Foster",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dawn Gordon",
      "Jason Fingerman"
     ],
     "a": [
      "Michelle Lehman",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Linda Landis",
      "Marc Schwegel"
     ],
     "a": [
      "Danya George",
      "Todd Gelfand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amy Clayman",
      "Eric Clayman"
     ],
     "a": [
      "Barb Mulckhuyse",
      "David Mcdonough"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelley Batejan",
      "Dawn Gordon"
     ],
     "a": [
      "Luz Bonner",
      "Barb Mulckhuyse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andrea Finnegan",
      "Linda Landis"
     ],
     "a": [
      "Mary Foster",
      "Franchesa Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jason Fingerman",
      "Marc Schwegel"
     ],
     "a": [
      "Joseph Koerner",
      "David Mcdonough"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Scott Auty",
      "Charlie Kissane"
     ],
     "a": [
      "Tom Giunta",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrea Finnegan",
      "Marc Schwegel"
     ],
     "a": [
      "Danya George",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Linda Landis",
      "Charlie Kissane"
     ],
     "a": [
      "Luz Bonner",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Michelle Lehman",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dawn Gordon",
      "Scott Auty"
     ],
     "a": [
      "Franchesa Mclean",
      "David Mcdonough"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelley Batejan",
      "Amy Clayman"
     ],
     "a": [
      "Michelle Lehman",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dawn Gordon",
      "Linda Landis"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Franchesa Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "Joseph Koerner",
      "Craig Mehnert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Marc Schwegel",
      "Eric Clayman"
     ],
     "a": [
      "Tom Giunta",
      "Todd Gelfand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kelley Batejan",
      "Marc Schwegel"
     ],
     "a": [
      "Luz Bonner",
      "Todd Gelfand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dawn Gordon",
      "Charlie Kissane"
     ],
     "a": [
      "Danya George",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andrea Finnegan",
      "Scott Auty"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Linda Landis",
      "Jason Fingerman"
     ],
     "a": [
      "Michelle Lehman",
      "David Mcdonough"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Kelley Batejan",
      "Amy Clayman"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dawn Gordon",
      "Andrea Finnegan"
     ],
     "a": [
      "Danya George",
      "Luz Bonner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Marc Schwegel",
      "Eric Clayman"
     ],
     "a": [
      "Todd Gelfand",
      "Edward Verish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "David Mcdonough",
      "Tom Giunta"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Flemington Green",
   "away": "Home Court",
   "time": "2026-03-01T16:00:00",
   "complete": true,
   "homePoints": 585,
   "awayPoints": 645,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Annette Marsh",
      "Dave Sarmir"
     ],
     "a": [
      "Kathi Sheehan",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eileen Moore",
      "Butch Kreilick"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "William Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "Brett Wilson"
     ],
     "a": [
      "Olga Khalev",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Cook",
      "David Cooley"
     ],
     "a": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eileen Moore",
      "Peggy Matzen"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Olga Khalev"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nancy Cook",
      "Kara Chubrik"
     ],
     "a": [
      "Kathi Sheehan",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dave Sarmir",
      "Butch Kreilick"
     ],
     "a": [
      "Brian Perlowitz",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "Sam Doctor"
     ],
     "a": [
      "Reginald Escusa",
      "Youyuan Xu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Annette Marsh",
      "David Cooley"
     ],
     "a": [
      "Kathi Sheehan",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Anthony Deangelis"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "William Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "Brett Wilson"
     ],
     "a": [
      "Diana D'Amore",
      "Youyuan Xu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kara Chubrik",
      "Sam Doctor"
     ],
     "a": [
      "Rachel Baluyot",
      "Reginald Escusa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nancy Cook",
      "Marianne Rosato"
     ],
     "a": [
      "Kathi Sheehan",
      "Olga Khalev"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Annette Marsh",
      "Eileen Moore"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Sandra Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Butch Kreilick",
      "David Cooley"
     ],
     "a": [
      "William Hutchinson",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dave Sarmir",
      "Brett Wilson"
     ],
     "a": [
      "Reginald Escusa",
      "Youyuan Xu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nancy Cook",
      "Dave Sarmir"
     ],
     "a": [
      "Sandra Cassidy",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eileen Moore",
      "Anthony Deangelis"
     ],
     "a": [
      "Diana D'Amore",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kara Chubrik",
      "Butch Kreilick"
     ],
     "a": [
      "Olga Khalev",
      "Youyuan Xu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Sam Doctor"
     ],
     "a": [
      "Rachel Baluyot",
      "Reginald Escusa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Annette Marsh",
      "Kara Chubrik"
     ],
     "a": [
      "Kathi Sheehan",
      "Lizabeth Hutchinson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Marianne Rosato"
     ],
     "a": [
      "Olga Khalev",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "David Cooley"
     ],
     "a": [
      "Brian Perlowitz",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sam Doctor",
      "Brett Wilson"
     ],
     "a": [
      "William Hutchinson",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eileen Moore",
      "Anthony Deangelis"
     ],
     "a": [
      "Kathi Sheehan",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marianne Rosato",
      "Dave Sarmir"
     ],
     "a": [
      "Olga Khalev",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Annette Marsh",
      "Butch Kreilick"
     ],
     "a": [
      "Sandra Cassidy",
      "William Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nancy Cook",
      "Brett Wilson"
     ],
     "a": [
      "Diana D'Amore",
      "Reginald Escusa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Annette Marsh",
      "Nancy Cook"
     ],
     "a": [
      "Sandra Cassidy",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Peggy Matzen",
      "Kara Chubrik"
     ],
     "a": [
      "Diana D'Amore",
      "Lizabeth Hutchinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dave Sarmir",
      "Anthony Deangelis"
     ],
     "a": [
      "Brian Perlowitz",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Cooley",
      "Sam Doctor"
     ],
     "a": [
      "William Hutchinson",
      "Jerry O’Loughlin"
     ]
    }
   ],
   "subs": [
    "Olga Khalev"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Players Courtyard Wave",
   "away": "ACE",
   "time": "2026-03-08T13:00:00",
   "complete": true,
   "homePoints": 448,
   "awayPoints": 658,
   "homeGW": 2,
   "awayGW": 30,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Mary Foster",
      "David Mcdonough"
     ],
     "a": [
      "Dawn Gordon",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Joseph Koerner"
     ],
     "a": [
      "Colleen Derose",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Tom Giunta"
     ],
     "a": [
      "Cathy Fiebs",
      "Scott Auty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Franchesa Mclean"
     ],
     "a": [
      "Andrea Schwab",
      "Colleen Derose"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Mary Foster",
      "Danya George"
     ],
     "a": [
      "Kelley Batejan",
      "Amy Clayman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Todd Gelfand"
     ],
     "a": [
      "Pete Dunn",
      "Marc Schwegel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Mcdonough",
      "Joseph Koerner"
     ],
     "a": [
      "Jason Fingerman",
      "Charlie Kissane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Foster",
      "Craig Mehnert"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Joseph Koerner"
     ],
     "a": [
      "Dawn Gordon",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Todd Gelfand"
     ],
     "a": [
      "Colleen Derose",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Danya George",
      "Tom Giunta"
     ],
     "a": [
      "Cathy Fiebs",
      "Scott Auty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ],
     "a": [
      "Dawn Gordon",
      "Amy Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Franchesa Mclean"
     ],
     "a": [
      "Kelley Batejan",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "David Mcdonough"
     ],
     "a": [
      "Pete Dunn",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Tom Giunta",
      "Todd Gelfand"
     ],
     "a": [
      "Scott Auty",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Joseph Koerner"
     ],
     "a": [
      "Andrea Schwab",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Luz Bonner",
      "David Mcdonough"
     ],
     "a": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Tom Giunta"
     ],
     "a": [
      "Colleen Derose",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Danya George",
      "Todd Gelfand"
     ],
     "a": [
      "Amy Clayman",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Danya George"
     ],
     "a": [
      "Colleen Derose",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Foster",
      "Luz Bonner"
     ],
     "a": [
      "Dawn Gordon",
      "Kelley Batejan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "David Mcdonough",
      "Joseph Koerner"
     ],
     "a": [
      "Jason Fingerman",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Tom Giunta"
     ],
     "a": [
      "Marc Schwegel",
      "Charlie Kissane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ],
     "a": [
      "Andrea Schwab",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Danya George",
      "David Mcdonough"
     ],
     "a": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Mary Foster",
      "Joseph Koerner"
     ],
     "a": [
      "Colleen Derose",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Margaret Maurizi",
      "Todd Gelfand"
     ],
     "a": [
      "Amy Clayman",
      "Charlie Kissane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Margaret Maurizi",
      "Luz Bonner"
     ],
     "a": [
      "Andrea Schwab",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ],
     "a": [
      "Kelley Batejan",
      "Colleen Derose"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Mcdonough",
      "Tom Giunta"
     ],
     "a": [
      "Scott Auty",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Craig Mehnert",
      "Joseph Koerner"
     ],
     "a": [
      "Jason Fingerman",
      "Charlie Kissane"
     ]
    }
   ],
   "subs": [
    "Margaret Maurizi"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Lehigh Valley",
   "away": "Flemington Green",
   "time": "2026-03-08T14:00:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 610,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Suzane Sullivan",
      "Neil Pratesi"
     ],
     "a": [
      "Karen Veninger",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lea Frank",
      "Ralph Lovelidge"
     ],
     "a": [
      "Eileen Moore",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Denise Stevens",
      "Sean Wilson"
     ],
     "a": [
      "Peggy Matzen",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Darlene Fusco",
      "Mark Scott"
     ],
     "a": [
      "Marianne Rosato",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lea Frank",
      "Clare Scott"
     ],
     "a": [
      "Karen Veninger",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Denise Stevens",
      "Nami Huang"
     ],
     "a": [
      "Eileen Moore",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Scott Stenroos",
      "Ray Suhocki"
     ],
     "a": [
      "Butch Kreilick",
      "Sam Doctor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ],
     "a": [
      "Dave Sarmir",
      "David Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Ralph Lovelidge"
     ],
     "a": [
      "Nancy Cook",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Clare Scott",
      "Ray Suhocki"
     ],
     "a": [
      "Peggy Matzen",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Darlene Fusco",
      "Scott Stenroos"
     ],
     "a": [
      "Marianne Rosato",
      "David Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nami Huang",
      "Mark Scott"
     ],
     "a": [
      "Diane Bracco",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lea Frank",
      "Nami Huang"
     ],
     "a": [
      "Eileen Moore",
      "Karen Veninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Denise Stevens",
      "Darlene Fusco"
     ],
     "a": [
      "Peggy Matzen",
      "Marianne Rosato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Sean Wilson",
      "Neil Pratesi"
     ],
     "a": [
      "Butch Kreilick",
      "Sam Doctor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mark Scott",
      "Scott Stenroos"
     ],
     "a": [
      "David Cooley",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lea Frank",
      "Scott Stenroos"
     ],
     "a": [
      "Nancy Cook",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzane Sullivan",
      "Ray Suhocki"
     ],
     "a": [
      "Karen Veninger",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Denise Stevens",
      "Neil Pratesi"
     ],
     "a": [
      "Marianne Rosato",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Clare Scott",
      "Sean Wilson"
     ],
     "a": [
      "Diane Bracco",
      "Dave Sarmir"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzane Sullivan",
      "Darlene Fusco"
     ],
     "a": [
      "Eileen Moore",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Clare Scott",
      "Nami Huang"
     ],
     "a": [
      "Nancy Cook",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mark Scott",
      "Ray Suhocki"
     ],
     "a": [
      "David Cooley",
      "Scott Heist"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ralph Lovelidge",
      "Sean Wilson"
     ],
     "a": [
      "Sam Doctor",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Darlene Fusco",
      "Ralph Lovelidge"
     ],
     "a": [
      "Eileen Moore",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lea Frank",
      "Sean Wilson"
     ],
     "a": [
      "Karen Veninger",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nami Huang",
      "Neil Pratesi"
     ],
     "a": [
      "Marianne Rosato",
      "David Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Scott Stenroos"
     ],
     "a": [
      "Peggy Matzen",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Suzane Sullivan",
      "Clare Scott"
     ],
     "a": [
      "Nancy Cook",
      "Karen Veninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Darlene Fusco",
      "Lea Frank"
     ],
     "a": [
      "Eileen Moore",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sean Wilson",
      "Mark Scott"
     ],
     "a": [
      "Butch Kreilick",
      "Dan Amabile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ralph Lovelidge",
      "Ray Suhocki"
     ],
     "a": [
      "Sam Doctor",
      "Dave Sarmir"
     ]
    }
   ],
   "subs": [
    "Clare Scott"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Bounce Malvern",
   "away": "Players Courtyard Surge",
   "time": "2026-03-08T14:30:00",
   "complete": true,
   "homePoints": 507,
   "awayPoints": 668,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Jeff Pillar"
     ],
     "a": [
      "Lynn Bresnahan",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christy Walker",
      "Scott Nissenbaum"
     ],
     "a": [
      "Dawn Kempton",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Hain",
      "Dan Callaghan"
     ],
     "a": [
      "Joan Rudderow",
      "Richard Fox"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Heidi Weinroth",
      "Greg Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Christy Walker"
     ],
     "a": [
      "Joan Rudderow",
      "Dawn Kempton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Denise Teter",
      "Kim Slomeana"
     ],
     "a": [
      "Sarah Kirn",
      "Tina Convery"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Scott Nissenbaum",
      "George Nouaime"
     ],
     "a": [
      "Dennis Higman",
      "William Askin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ],
     "a": [
      "Rick Weiser",
      "Richard Fox"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Denise Teter",
      "George Nouaime"
     ],
     "a": [
      "Joan Rudderow",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Mary Hain",
      "Dan Callaghan"
     ],
     "a": [
      "Dawn Kempton",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Heidi Weinroth",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Jeff Pillar"
     ],
     "a": [
      "Lynn Bresnahan",
      "Greg Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Christy Walker",
      "Kim Slomeana"
     ],
     "a": [
      "Tina Convery",
      "Sarah Kirn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Mary Hain"
     ],
     "a": [
      "Heidi Weinroth",
      "Lynn Bresnahan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ],
     "a": [
      "Greg Taylor",
      "Richard Fox"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "George Nouaime",
      "Jeff Pillar"
     ],
     "a": [
      "Dennis Higman",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Dan Callaghan"
     ],
     "a": [
      "Joan Rudderow",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Denise Teter",
      "Jeff Pillar"
     ],
     "a": [
      "Dawn Kempton",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christy Walker",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Sarah Kirn",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Mary Hain",
      "Scott Nissenbaum"
     ],
     "a": [
      "Tina Convery",
      "Richard Fox"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Christy Walker"
     ],
     "a": [
      "Sarah Kirn",
      "Heidi Weinroth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mary Hain",
      "Zalene Corey"
     ],
     "a": [
      "Tina Convery",
      "Lynn Bresnahan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Scott Nissenbaum",
      "Dan Callaghan"
     ],
     "a": [
      "Richard Fox",
      "David Corwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jeffrey Lindstrom",
      "George Nouaime"
     ],
     "a": [
      "Greg Taylor",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Jeff Pillar"
     ],
     "a": [
      "Heidi Weinroth",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christy Walker",
      "Scott Nissenbaum"
     ],
     "a": [
      "Joan Rudderow",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Denise Teter",
      "George Nouaime"
     ],
     "a": [
      "Dawn Kempton",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Lynn Bresnahan",
      "Rick Weiser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 2,
     "as": 21,
     "h": [
      "Mary Hain",
      "Denise Teter"
     ],
     "a": [
      "Joan Rudderow",
      "Tina Convery"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Zalene Corey",
      "Kim Slomeana"
     ],
     "a": [
      "Sarah Kirn",
      "Dawn Kempton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "George Nouaime",
      "Dan Callaghan"
     ],
     "a": [
      "Dennis Higman",
      "David Corwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ],
     "a": [
      "Rick Weiser",
      "William Askin"
     ]
    }
   ],
   "subs": [
    "Sarah Kirn",
    "Christy Walker"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Flemington Blue",
   "away": "Montville",
   "time": "2026-03-08T15:00:00",
   "complete": true,
   "homePoints": 614,
   "awayPoints": 566,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Stangota",
      "Jeffrey Hartford"
     ],
     "a": [
      "Diane Herbst",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cathy Matko",
      "Anthony Leone"
     ],
     "a": [
      "Theresa Corderi",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gail Hannagan",
      "Eric Brezina"
     ],
     "a": [
      "Rani Gundavarapu",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tao Zhu",
      "Paul Phillips"
     ],
     "a": [
      "Kristen Frendak",
      "Robert Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Stangota",
      "Cathy Matko"
     ],
     "a": [
      "Kristen Frendak",
      "Rani Gundavarapu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gail Hannagan",
      "Holly Ferguson"
     ],
     "a": [
      "Diane Herbst",
      "Theresa Corderi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeffrey Hartford",
      "Hafeez Saheed"
     ],
     "a": [
      "Bill Lam",
      "Mark Garner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eric Brezina",
      "Anthony Leone"
     ],
     "a": [
      "Jack Tran",
      "Bill Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Holly Ferguson",
      "Paul Phillips"
     ],
     "a": [
      "Kristen Frendak",
      "Bill Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tao Zhu",
      "Hafeez Saheed"
     ],
     "a": [
      "Rani Gundavarapu",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cathy Matko",
      "Eric Brezina"
     ],
     "a": [
      "Theresa Corderi",
      "Bill Lam"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Diane Herbst",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Tao Zhu"
     ],
     "a": [
      "Theresa Corderi",
      "Rani Gundavarapu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gail Hannagan",
      "Sarah Stangota"
     ],
     "a": [
      "Kristen Frendak",
      "Diane Herbst"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Anthony Leone"
     ],
     "a": [
      "Ken Bienkowski",
      "Jack Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Robert Lee",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cathy Matko",
      "Anthony Leone"
     ],
     "a": [
      "Diane Herbst",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Holly Ferguson",
      "Jeffrey Hartford"
     ],
     "a": [
      "Rani Gundavarapu",
      "Bill Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sarah Stangota",
      "Paul Phillips"
     ],
     "a": [
      "Kristen Frendak",
      "Bill Lam"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tao Zhu",
      "Hafeez Saheed"
     ],
     "a": [
      "Theresa Corderi",
      "Robert Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Stangota",
      "Holly Ferguson"
     ],
     "a": [
      "Theresa Corderi",
      "Kristen Frendak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gail Hannagan",
      "Cathy Matko"
     ],
     "a": [
      "Diane Herbst",
      "Rani Gundavarapu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Mark Garner",
      "Jack Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Brezina",
      "Hafeez Saheed"
     ],
     "a": [
      "Bill Lam",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tao Zhu",
      "Eric Brezina"
     ],
     "a": [
      "Kristen Frendak",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Theresa Corderi",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gail Hannagan",
      "Hafeez Saheed"
     ],
     "a": [
      "Diane Herbst",
      "Bill Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cathy Matko",
      "Jeffrey Hartford"
     ],
     "a": [
      "Rani Gundavarapu",
      "Mark Garner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cathy Matko",
      "Holly Ferguson"
     ],
     "a": [
      "Diane Herbst",
      "Theresa Corderi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gail Hannagan",
      "Sarah Stangota"
     ],
     "a": [
      "Kristen Frendak",
      "Rani Gundavarapu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Hafeez Saheed"
     ],
     "a": [
      "Robert Lee",
      "Bill Gold"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Paul Phillips",
      "Anthony Leone"
     ],
     "a": [
      "Jack Tran",
      "Bill Lam"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Monroe",
   "away": "Mercer Bucks",
   "time": "2026-03-08T15:00:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 573,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Maureen Bruno",
      "Jay Scheinman"
     ],
     "a": [
      "Karen Krusen",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ],
     "a": [
      "Sue Glass",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Olga Turova",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Connie Cao",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bonnie Russo",
      "Richard Ricciardi"
     ],
     "a": [
      "Victoria Marchok",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Maureen Bruno",
      "Debbie Carrano"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ],
     "a": [
      "Connie Cao",
      "Sue Glass"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeffrey Quinlan",
      "Matthew Colasanto"
     ],
     "a": [
      "Ken Gross",
      "Howard Eng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mike Hardy",
      "Jay Scheinman"
     ],
     "a": [
      "Francisco Miranda",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bonnie Russo",
      "Richard Ricciardi"
     ],
     "a": [
      "Victoria Marchok",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Olga Turova",
      "Mike Hardy"
     ],
     "a": [
      "Karen Krusen",
      "Francisco Miranda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Maureen Bruno",
      "Jay Scheinman"
     ],
     "a": [
      "Sue Glass",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jennifer Makfinsky",
      "Matthew Colasanto"
     ],
     "a": [
      "Cheryl Tarby",
      "Jason Belmont"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maureen Bruno",
      "Debbie Carrano"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Victoria Marchok"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Karen Rosenberg",
      "Jennifer Makfinsky"
     ],
     "a": [
      "Karen Krusen",
      "Connie Cao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jeffrey Quinlan",
      "Jay Scheinman"
     ],
     "a": [
      "Ken Gross",
      "Jason Belmont"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mike Hardy",
      "Matthew Colasanto"
     ],
     "a": [
      "Howard Eng",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Bonnie Russo",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ],
     "a": [
      "Sue Glass",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Olga Turova",
      "Jay Scheinman"
     ],
     "a": [
      "Connie Cao",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Debbie Carrano",
      "Richard Ricciardi"
     ],
     "a": [
      "Cheryl Tarby",
      "Francisco Miranda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karen Rosenberg",
      "Maureen Bruno"
     ],
     "a": [
      "Victoria Marchok",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Olga Turova",
      "Debbie Carrano"
     ],
     "a": [
      "Sue Glass",
      "Karen Krusen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Mike Hardy",
      "Jay Scheinman"
     ],
     "a": [
      "Raymond Lormel",
      "Francisco Miranda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jeffrey Quinlan",
      "Richard Ricciardi"
     ],
     "a": [
      "Jerry Margulies",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jennifer Makfinsky",
      "Jay Scheinman"
     ],
     "a": [
      "Connie Cao",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Bonnie Russo",
      "Mike Hardy"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Maureen Bruno",
      "Richard Ricciardi"
     ],
     "a": [
      "Karen Krusen",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Rosenberg",
      "Matthew Colasanto"
     ],
     "a": [
      "Victoria Marchok",
      "Jason Belmont"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Makfinsky",
      "Debbie Carrano"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Karen Krusen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Olga Turova",
      "Karen Rosenberg"
     ],
     "a": [
      "Cheryl Tarby",
      "Sue Glass"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Richard Ricciardi",
      "Matthew Colasanto"
     ],
     "a": [
      "Francisco Miranda",
      "Ken Gross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mike Hardy",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Jerry Margulies",
      "Howard Eng"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Mercer Bucks",
   "away": "Flemington Blue",
   "time": "2026-03-14T09:00:00",
   "complete": true,
   "homePoints": 536,
   "awayPoints": 631,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jean Knab",
      "Ken Gross"
     ],
     "a": [
      "Sarah Stangota",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Connie Cao",
      "Raymond Lormel"
     ],
     "a": [
      "Gail Hannagan",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sue Glass",
      "Jason Belmont"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Victoria Monaghan",
      "Francisco Miranda"
     ],
     "a": [
      "Holly Ferguson",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sue Glass",
      "Karen Krusen"
     ],
     "a": [
      "Sarah Stangota",
      "Gail Hannagan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cheryl Tarby",
      "Connie Cao"
     ],
     "a": [
      "Holly Ferguson",
      "Tao Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Howard Eng",
      "Raymond Lormel"
     ],
     "a": [
      "Anthony Leone",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jason Belmont",
      "Jerry Margulies"
     ],
     "a": [
      "Rob Oddy",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Victoria Monaghan",
      "Jerry Margulies"
     ],
     "a": [
      "Tao Zhu",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Krusen",
      "Ken Gross"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jean Knab",
      "Howard Eng"
     ],
     "a": [
      "Sarah Stangota",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cheryl Tarby",
      "Francisco Miranda"
     ],
     "a": [
      "Holly Ferguson",
      "Warren Meade"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Glass",
      "Jean Knab"
     ],
     "a": [
      "Sharon Oddy",
      "Gail Hannagan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Victoria Monaghan",
      "Connie Cao"
     ],
     "a": [
      "Sarah Stangota",
      "Tao Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ken Gross",
      "Jerry Margulies"
     ],
     "a": [
      "Jeffrey Hartford",
      "Warren Meade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jason Belmont",
      "Raymond Lormel"
     ],
     "a": [
      "Anthony Leone",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sue Glass",
      "Jason Belmont"
     ],
     "a": [
      "Holly Ferguson",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Francisco Miranda"
     ],
     "a": [
      "Sharon Oddy",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Connie Cao",
      "Howard Eng"
     ],
     "a": [
      "Gail Hannagan",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karen Krusen",
      "Raymond Lormel"
     ],
     "a": [
      "Tao Zhu",
      "Rob Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jean Knab",
      "Karen Krusen"
     ],
     "a": [
      "Sarah Stangota",
      "Sharon Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Victoria Monaghan"
     ],
     "a": [
      "Gail Hannagan",
      "Holly Ferguson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jerry Margulies",
      "Howard Eng"
     ],
     "a": [
      "Rob Oddy",
      "Warren Meade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ken Gross",
      "Francisco Miranda"
     ],
     "a": [
      "Anthony Leone",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jean Knab",
      "Raymond Lormel"
     ],
     "a": [
      "Tao Zhu",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Connie Cao",
      "Jerry Margulies"
     ],
     "a": [
      "Sharon Oddy",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sue Glass",
      "Howard Eng"
     ],
     "a": [
      "Gail Hannagan",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cheryl Tarby",
      "Jason Belmont"
     ],
     "a": [
      "Sarah Stangota",
      "Warren Meade"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sue Glass",
      "Jean Knab"
     ],
     "a": [
      "Gail Hannagan",
      "Sarah Stangota"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Victoria Monaghan"
     ],
     "a": [
      "Holly Ferguson",
      "Sharon Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jason Belmont",
      "Francisco Miranda"
     ],
     "a": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Howard Eng",
      "Ken Gross"
     ],
     "a": [
      "Anthony Leone",
      "Rob Oddy"
     ]
    }
   ],
   "subs": [
    "Victoria Monaghan"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Players Courtyard Wave",
   "away": "Flemington Green",
   "time": "2026-03-14T09:00:00",
   "complete": true,
   "homePoints": 529,
   "awayPoints": 649,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Ed Mendoza"
     ],
     "a": [
      "Karen Veninger",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Foster",
      "Craig Mehnert"
     ],
     "a": [
      "Peggy Matzen",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Barb Mulckhuyse",
      "Michael Ross"
     ],
     "a": [
      "Diane Bracco",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Franchesa Mclean",
      "David Mcdonough"
     ],
     "a": [
      "Kara Chubrik",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ],
     "a": [
      "Annette Marsh",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Danya George"
     ],
     "a": [
      "Karen Veninger",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ed Mendoza",
      "Craig Mehnert"
     ],
     "a": [
      "Butch Kreilick",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michael Ross",
      "Edward Verish"
     ],
     "a": [
      "Dan Amabile",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Danya George",
      "Michael Ross"
     ],
     "a": [
      "Karen Veninger",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Foster",
      "Ed Mendoza"
     ],
     "a": [
      "Annette Marsh",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michelle Lehman",
      "David Mcdonough"
     ],
     "a": [
      "Diane Bracco",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Edward Verish"
     ],
     "a": [
      "Kara Chubrik",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Mary Foster"
     ],
     "a": [
      "Peggy Matzen",
      "Karen Veninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Danya George"
     ],
     "a": [
      "Annette Marsh",
      "Kara Chubrik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Ross",
      "David Mcdonough"
     ],
     "a": [
      "Dan Amabile",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Ed Mendoza"
     ],
     "a": [
      "Butch Kreilick",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Luz Bonner",
      "Craig Mehnert"
     ],
     "a": [
      "Annette Marsh",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Edward Verish"
     ],
     "a": [
      "Kara Chubrik",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Michael Ross"
     ],
     "a": [
      "Peggy Matzen",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danya George",
      "David Mcdonough"
     ],
     "a": [
      "Diane Bracco",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ],
     "a": [
      "Diane Bracco",
      "Annette Marsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Luz Bonner"
     ],
     "a": [
      "Karen Veninger",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ed Mendoza",
      "Michael Ross"
     ],
     "a": [
      "Brett Wilson",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Mcdonough",
      "Edward Verish"
     ],
     "a": [
      "Dave Sarmir",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Ed Mendoza"
     ],
     "a": [
      "Karen Veninger",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Danya George",
      "Craig Mehnert"
     ],
     "a": [
      "Annette Marsh",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Edward Verish"
     ],
     "a": [
      "Peggy Matzen",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Luz Bonner",
      "David Mcdonough"
     ],
     "a": [
      "Kara Chubrik",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Foster",
      "Franchesa Mclean"
     ],
     "a": [
      "Diane Bracco",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Michelle Lehman"
     ],
     "a": [
      "Karen Veninger",
      "Kara Chubrik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ed Mendoza",
      "Michael Ross"
     ],
     "a": [
      "Dave Sarmir",
      "Butch Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Craig Mehnert",
      "David Mcdonough"
     ],
     "a": [
      "Scott Heist",
      "Brett Wilson"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "ACE",
   "away": "Home Court",
   "time": "2026-03-14T12:00:00",
   "complete": true,
   "homePoints": 658,
   "awayPoints": 571,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Lawrence Padersky"
     ],
     "a": [
      "Denise Rempson",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andrea Schwab",
      "Pete Dunn"
     ],
     "a": [
      "Virna Schuck",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Linda Landis",
      "Scott Auty"
     ],
     "a": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Marc Schwegel"
     ],
     "a": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelley Batejan",
      "Andrea Schwab"
     ],
     "a": [
      "Denise Rempson",
      "Kathi Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cathy Fiebs",
      "Linda Landis"
     ],
     "a": [
      "Rachel Baluyot",
      "Virna Schuck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Scott Auty",
      "Jason Fingerman"
     ],
     "a": [
      "David Cartwright",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pete Dunn",
      "Pete Certo"
     ],
     "a": [
      "Jerry O’Loughlin",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Virna Schuck",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Linda Landis",
      "Marc Schwegel"
     ],
     "a": [
      "Jayne Mayer",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Pete Certo"
     ],
     "a": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ],
     "a": [
      "Kathi Sheehan",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrea Schwab",
      "Cathy Fiebs"
     ],
     "a": [
      "Denise Rempson",
      "Kathi Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Linda Landis",
      "Kelley Batejan"
     ],
     "a": [
      "Jayne Mayer",
      "Sandra Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lawrence Padersky",
      "Pete Dunn"
     ],
     "a": [
      "David Cartwright",
      "Reginald Escusa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Scott Auty",
      "Marc Schwegel"
     ],
     "a": [
      "Tim Cassidy",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Linda Landis",
      "Jason Fingerman"
     ],
     "a": [
      "Virna Schuck",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cathy Fiebs",
      "Pete Certo"
     ],
     "a": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelley Batejan",
      "Scott Auty"
     ],
     "a": [
      "Denise Rempson",
      "Tim Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Linda Landis",
      "Andrea Schwab"
     ],
     "a": [
      "Rachel Baluyot",
      "Virna Schuck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelley Batejan",
      "Cathy Fiebs"
     ],
     "a": [
      "Jayne Mayer",
      "Denise Rempson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Pete Certo",
      "Marc Schwegel"
     ],
     "a": [
      "Jerry O’Loughlin",
      "David Cartwright"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Pete Dunn",
      "Jason Fingerman"
     ],
     "a": [
      "Erik Jacobsen",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Schwab",
      "Pete Dunn"
     ],
     "a": [
      "Denise Rempson",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Virna Schuck",
      "Tim Cassidy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Linda Landis",
      "Lawrence Padersky"
     ],
     "a": [
      "Sandra Cassidy",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelley Batejan",
      "Marc Schwegel"
     ],
     "a": [
      "Rachel Baluyot",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cathy Fiebs",
      "Andrea Schwab"
     ],
     "a": [
      "Rachel Baluyot",
      "Denise Rempson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Linda Landis",
      "Kelley Batejan"
     ],
     "a": [
      "Jayne Mayer",
      "Sandra Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pete Certo",
      "Lawrence Padersky"
     ],
     "a": [
      "David Cartwright",
      "Tim Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marc Schwegel",
      "Jason Fingerman"
     ],
     "a": [
      "Erik Jacobsen",
      "Jerry O’Loughlin"
     ]
    }
   ],
   "subs": [
    "Virna Schuck"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Monroe",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-03-14T12:00:00",
   "complete": true,
   "homePoints": 625,
   "awayPoints": 596,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Makfinsky",
      "Jay Scheinman"
     ],
     "a": [
      "Lea Frank",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Petra Jones",
      "Bob Debarge"
     ],
     "a": [
      "Denise Stevens",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maureen Bruno",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Darlene Fusco",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karen Rosenberg",
      "Mike Hardy"
     ],
     "a": [
      "Victoria Stenroos",
      "Sean Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Maureen Bruno"
     ],
     "a": [
      "Nami Huang",
      "Denise Stevens"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ],
     "a": [
      "Joan Guadagnino",
      "Darlene Fusco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Mike Hardy",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richard Ricciardi",
      "Bob Debarge"
     ],
     "a": [
      "Sean Wilson",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ],
     "a": [
      "Lea Frank",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Bob Debarge"
     ],
     "a": [
      "Victoria Stenroos",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Karen Rosenberg",
      "Jay Scheinman"
     ],
     "a": [
      "Nami Huang",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Petra Jones",
      "Richard Ricciardi"
     ],
     "a": [
      "Denise Stevens",
      "Scott Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jennifer Makfinsky",
      "Maureen Bruno"
     ],
     "a": [
      "Lea Frank",
      "Darlene Fusco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Petra Jones",
      "Linda Seemann"
     ],
     "a": [
      "Victoria Stenroos",
      "Joan Guadagnino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Richard Ricciardi",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Ralph Lovelidge",
      "Sean Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mike Hardy",
      "Jay Scheinman"
     ],
     "a": [
      "Mark Scott",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Petra Jones",
      "Mike Hardy"
     ],
     "a": [
      "Darlene Fusco",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Makfinsky",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Nami Huang",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Maureen Bruno",
      "Richard Ricciardi"
     ],
     "a": [
      "Denise Stevens",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karen Rosenberg",
      "Bob Debarge"
     ],
     "a": [
      "Joan Guadagnino",
      "Scott Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Makfinsky",
      "Linda Seemann"
     ],
     "a": [
      "Darlene Fusco",
      "Victoria Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maureen Bruno",
      "Karen Rosenberg"
     ],
     "a": [
      "Denise Stevens",
      "Joan Guadagnino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Mike Hardy",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bob Debarge",
      "Jay Scheinman"
     ],
     "a": [
      "Sean Wilson",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Rosenberg",
      "Mike Hardy"
     ],
     "a": [
      "Nami Huang",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Maureen Bruno",
      "Bob Debarge"
     ],
     "a": [
      "Victoria Stenroos",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jennifer Makfinsky",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Lea Frank",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Petra Jones",
      "Jay Scheinman"
     ],
     "a": [
      "Darlene Fusco",
      "Scott Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Petra Jones",
      "Linda Seemann"
     ],
     "a": [
      "Nami Huang",
      "Denise Stevens"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karen Rosenberg",
      "Jennifer Makfinsky"
     ],
     "a": [
      "Lea Frank",
      "Joan Guadagnino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mike Hardy",
      "Jay Scheinman"
     ],
     "a": [
      "Sean Wilson",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bob Debarge",
      "Richard Ricciardi"
     ],
     "a": [
      "Mark Scott",
      "Scott Stenroos"
     ]
    }
   ],
   "subs": [
    "Victoria Stenroos",
    "Joan Guadagnino"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Bounce Malvern",
   "away": "Montville",
   "time": "2026-03-14T12:00:00",
   "complete": true,
   "homePoints": 617,
   "awayPoints": 570,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Hain",
      "George Nouaime"
     ],
     "a": [
      "Theresa Corderi",
      "Bill Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kim Slomeana",
      "Dan Callaghan"
     ],
     "a": [
      "Rani Gundavarapu",
      "Patrick Phalen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Jill Assante",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christina Samtmann",
      "Jeff Pillar"
     ],
     "a": [
      "Diane Herbst",
      "Jake Denooyer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zalene Corey",
      "Mary Hain"
     ],
     "a": [
      "Jill Assante",
      "Rani Gundavarapu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kim Slomeana",
      "Christina Samtmann"
     ],
     "a": [
      "Theresa Corderi",
      "Diane Herbst"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Scott Nissenbaum",
      "George Nouaime"
     ],
     "a": [
      "Jake Denooyer",
      "Patrick Phalen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ],
     "a": [
      "Bill Gold",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "George Nouaime"
     ],
     "a": [
      "Rani Gundavarapu",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kim Slomeana",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Jill Assante",
      "Bill Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Hain",
      "Jeff Pillar"
     ],
     "a": [
      "Diane Herbst",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ],
     "a": [
      "Theresa Corderi",
      "Mark Garner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Zalene Corey",
      "Mary Hain"
     ],
     "a": [
      "Theresa Corderi",
      "Rani Gundavarapu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Christina Samtmann"
     ],
     "a": [
      "Jill Assante",
      "Diane Herbst"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ],
     "a": [
      "Jake Denooyer",
      "Mark Garner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dan Callaghan",
      "George Nouaime"
     ],
     "a": [
      "Tracy Waffenfeld",
      "Patrick Phalen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Jill Assante",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Jeff Pillar"
     ],
     "a": [
      "Diane Herbst",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Mary Hain",
      "Dan Callaghan"
     ],
     "a": [
      "Theresa Corderi",
      "Patrick Phalen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Christina Samtmann",
      "Scott Nissenbaum"
     ],
     "a": [
      "Rani Gundavarapu",
      "Bill Gold"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mary Hain",
      "Kim Slomeana"
     ],
     "a": [
      "Diane Herbst",
      "Rani Gundavarapu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christina Samtmann",
      "Zalene Corey"
     ],
     "a": [
      "Theresa Corderi",
      "Jill Assante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ],
     "a": [
      "Bill Gold",
      "Mark Garner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Scott Nissenbaum",
      "George Nouaime"
     ],
     "a": [
      "Jake Denooyer",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Zalene Corey",
      "Jeff Pillar"
     ],
     "a": [
      "Diane Herbst",
      "Bill Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Dan Callaghan"
     ],
     "a": [
      "Theresa Corderi",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Christina Samtmann",
      "Scott Nissenbaum"
     ],
     "a": [
      "Rani Gundavarapu",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Jill Assante",
      "Patrick Phalen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Zalene Corey"
     ],
     "a": [
      "Theresa Corderi",
      "Diane Herbst"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Hain",
      "Christina Samtmann"
     ],
     "a": [
      "Jill Assante",
      "Rani Gundavarapu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dan Callaghan",
      "Scott Nissenbaum"
     ],
     "a": [
      "Jake Denooyer",
      "Patrick Phalen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jeff Pillar",
      "George Nouaime"
     ],
     "a": [
      "Tracy Waffenfeld",
      "Mark Garner"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Players Courtyard Wave",
   "away": "Players Courtyard Surge",
   "time": "2026-03-15T13:00:00",
   "complete": true,
   "homePoints": 457,
   "awayPoints": 661,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mary Foster",
      "Craig Mehnert"
     ],
     "a": [
      "Angela Bartelt",
      "Bob Sochor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Edward Verish"
     ],
     "a": [
      "Lynn Bresnahan",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Luz Bonner",
      "David Mcdonough"
     ],
     "a": [
      "Lolita Hagen",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Tom Giunta"
     ],
     "a": [
      "Joan Rudderow",
      "Rick Weiser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mary Foster",
      "Barb Mulckhuyse"
     ],
     "a": [
      "Lolita Hagen",
      "Lynn Bresnahan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Michelle Lehman"
     ],
     "a": [
      "Heidi Weinroth",
      "Tina Convery"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "David Mcdonough"
     ],
     "a": [
      "Steven Heller",
      "Bob Sochor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Edward Verish",
      "Tom Giunta"
     ],
     "a": [
      "William Askin",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Foster",
      "Craig Mehnert"
     ],
     "a": [
      "Heidi Weinroth",
      "Bob Sochor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Tom Giunta"
     ],
     "a": [
      "Joan Rudderow",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "David Mcdonough"
     ],
     "a": [
      "Angela Bartelt",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Danya George",
      "Joseph Koerner"
     ],
     "a": [
      "Tina Convery",
      "William Askin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Danya George"
     ],
     "a": [
      "Angela Bartelt",
      "Tina Convery"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Michelle Lehman"
     ],
     "a": [
      "Joan Rudderow",
      "Lynn Bresnahan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Joseph Koerner"
     ],
     "a": [
      "Greg Taylor",
      "William Askin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Mcdonough",
      "Edward Verish"
     ],
     "a": [
      "Steven Heller",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Mary Foster",
      "Tom Giunta"
     ],
     "a": [
      "Joan Rudderow",
      "Bob Sochor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Edward Verish"
     ],
     "a": [
      "Heidi Weinroth",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "David Mcdonough"
     ],
     "a": [
      "Lolita Hagen",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Joseph Koerner"
     ],
     "a": [
      "Tina Convery",
      "Greg Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Luz Bonner"
     ],
     "a": [
      "Joan Rudderow",
      "Angela Bartelt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Franchesa Mclean",
      "Mary Foster"
     ],
     "a": [
      "Lolita Hagen",
      "Lynn Bresnahan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Craig Mehnert",
      "Joseph Koerner"
     ],
     "a": [
      "David Corwin",
      "Bob Sochor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Edward Verish",
      "Tom Giunta"
     ],
     "a": [
      "Greg Taylor",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ],
     "a": [
      "Angela Bartelt",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Foster",
      "David Mcdonough"
     ],
     "a": [
      "Lynn Bresnahan",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Tom Giunta"
     ],
     "a": [
      "Tina Convery",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Joseph Koerner"
     ],
     "a": [
      "Heidi Weinroth",
      "Greg Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barb Mulckhuyse",
      "Luz Bonner"
     ],
     "a": [
      "Lolita Hagen",
      "Joan Rudderow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Mary Foster",
      "Franchesa Mclean"
     ],
     "a": [
      "Angela Bartelt",
      "Heidi Weinroth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Tom Giunta"
     ],
     "a": [
      "David Corwin",
      "Bob Sochor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Joseph Koerner",
      "Edward Verish"
     ],
     "a": [
      "Steven Heller",
      "William Askin"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "ACE",
   "away": "Mercer Bucks",
   "time": "2026-03-15T15:00:00",
   "complete": true,
   "homePoints": 667,
   "awayPoints": 479,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrea Schwab",
      "Pete Dunn"
     ],
     "a": [
      "Jean Knab",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelley Batejan",
      "Marc Schwegel"
     ],
     "a": [
      "Victoria Marchok",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Francisco Miranda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Andrea Finnegan",
      "Pete Certo"
     ],
     "a": [
      "Sue Glass",
      "Joseph Carrado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Andrea Schwab",
      "Andrea Finnegan"
     ],
     "a": [
      "Cheryl Tarby",
      "Victoria Marchok"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amy Clayman",
      "Dawn Gordon"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Connie Cao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pete Dunn",
      "Jason Fingerman"
     ],
     "a": [
      "Raymond Lormel",
      "Howard Eng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marc Schwegel",
      "Eric Clayman"
     ],
     "a": [
      "Jerry Margulies",
      "Joseph Carrado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Connie Cao",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Andrea Schwab",
      "Pete Dunn"
     ],
     "a": [
      "Jean Knab",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Dawn Gordon",
      "Scott Auty"
     ],
     "a": [
      "Victoria Marchok",
      "Francisco Miranda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Clayman",
      "Eric Clayman"
     ],
     "a": [
      "Cheryl Tarby",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelley Batejan",
      "Cathy Fiebs"
     ],
     "a": [
      "Jean Knab",
      "Connie Cao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dawn Gordon",
      "Andrea Finnegan"
     ],
     "a": [
      "Cheryl Tarby",
      "Sue Glass"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pete Certo",
      "Eric Clayman"
     ],
     "a": [
      "Howard Eng",
      "Joseph Carrado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Scott Auty",
      "Pete Dunn"
     ],
     "a": [
      "Jason Belmont",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrea Schwab",
      "Marc Schwegel"
     ],
     "a": [
      "Victoria Marchok",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Connie Cao",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Pete Dunn"
     ],
     "a": [
      "Sue Glass",
      "Francisco Miranda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amy Clayman",
      "Jason Fingerman"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Finnegan",
      "Cathy Fiebs"
     ],
     "a": [
      "Sue Glass",
      "Elizabeth Dziekonska"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dawn Gordon",
      "Andrea Schwab"
     ],
     "a": [
      "Jean Knab",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marc Schwegel",
      "Eric Clayman"
     ],
     "a": [
      "Howard Eng",
      "Raymond Lormel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jason Fingerman",
      "Pete Certo"
     ],
     "a": [
      "Francisco Miranda",
      "Joseph Carrado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andrea Schwab",
      "Marc Schwegel"
     ],
     "a": [
      "Sue Glass",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amy Clayman",
      "Jason Fingerman"
     ],
     "a": [
      "Connie Cao",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dawn Gordon",
      "Scott Auty"
     ],
     "a": [
      "Jean Knab",
      "Joseph Carrado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelley Batejan",
      "Pete Dunn"
     ],
     "a": [
      "Victoria Marchok",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelley Batejan",
      "Andrea Schwab"
     ],
     "a": [
      "Cheryl Tarby",
      "Jean Knab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrea Finnegan",
      "Cathy Fiebs"
     ],
     "a": [
      "Sue Glass",
      "Elizabeth Dziekonska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "Jason Belmont",
      "Howard Eng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pete Certo",
      "Pete Dunn"
     ],
     "a": [
      "Francisco Miranda",
      "Jerry Margulies"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Montville",
   "away": "Flemington Green",
   "time": "2026-03-15T15:00:00",
   "complete": true,
   "homePoints": 574,
   "awayPoints": 625,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Theresa Corderi",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Annette Marsh",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Diane Otoole",
      "Steven Ditizii"
     ],
     "a": [
      "Mariola Biekisz",
      "David Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rani Gundavarapu",
      "Ken Bienkowski"
     ],
     "a": [
      "Marianne Rosato",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristin Duva",
      "Eric Kirschner"
     ],
     "a": [
      "Diane Bracco",
      "Dan Amabile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kristin Duva",
      "Diane Otoole"
     ],
     "a": [
      "Mariola Biekisz",
      "Annette Marsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jill Assante",
      "Rani Gundavarapu"
     ],
     "a": [
      "Marianne Rosato",
      "Kara Chubrik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patrick Phalen",
      "Mark Garner"
     ],
     "a": [
      "Anthony Deangelis",
      "Dave Sarmir"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Steven Ditizii",
      "Ken Bienkowski"
     ],
     "a": [
      "Dan Amabile",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Diane Otoole",
      "Eric Kirschner"
     ],
     "a": [
      "Annette Marsh",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristin Duva",
      "Ken Bienkowski"
     ],
     "a": [
      "Marianne Rosato",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jill Assante",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Diane Bracco",
      "David Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Theresa Corderi",
      "Steven Ditizii"
     ],
     "a": [
      "Kara Chubrik",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Diane Otoole",
      "Rani Gundavarapu"
     ],
     "a": [
      "Diane Bracco",
      "Mariola Biekisz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kristin Duva",
      "Theresa Corderi"
     ],
     "a": [
      "Kara Chubrik",
      "Annette Marsh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ken Bienkowski",
      "Mark Garner"
     ],
     "a": [
      "Dave Sarmir",
      "David Cooley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patrick Phalen",
      "Eric Kirschner"
     ],
     "a": [
      "Brett Wilson",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jill Assante",
      "Steven Ditizii"
     ],
     "a": [
      "Mariola Biekisz",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Diane Otoole",
      "Mark Garner"
     ],
     "a": [
      "Diane Bracco",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Theresa Corderi",
      "Patrick Phalen"
     ],
     "a": [
      "Marianne Rosato",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rani Gundavarapu",
      "Eric Kirschner"
     ],
     "a": [
      "Kara Chubrik",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kristin Duva",
      "Jill Assante"
     ],
     "a": [
      "Diane Bracco",
      "Annette Marsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rani Gundavarapu",
      "Theresa Corderi"
     ],
     "a": [
      "Marianne Rosato",
      "Mariola Biekisz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ken Bienkowski",
      "Patrick Phalen"
     ],
     "a": [
      "Scott Heist",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tracy Waffenfeld",
      "Steven Ditizii"
     ],
     "a": [
      "Brett Wilson",
      "David Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kristin Duva",
      "Mark Garner"
     ],
     "a": [
      "Annette Marsh",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rani Gundavarapu",
      "Steven Ditizii"
     ],
     "a": [
      "Mariola Biekisz",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Theresa Corderi",
      "Eric Kirschner"
     ],
     "a": [
      "Kara Chubrik",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Diane Otoole",
      "Ken Bienkowski"
     ],
     "a": [
      "Marianne Rosato",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Diane Otoole",
      "Jill Assante"
     ],
     "a": [
      "Annette Marsh",
      "Mariola Biekisz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kristin Duva",
      "Theresa Corderi"
     ],
     "a": [
      "Diane Bracco",
      "Kara Chubrik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ken Bienkowski",
      "Steven Ditizii"
     ],
     "a": [
      "Dan Amabile",
      "Dave Sarmir"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Patrick Phalen",
      "Tracy Waffenfeld"
     ],
     "a": [
      "David Cooley",
      "Scott Heist"
     ]
    }
   ],
   "subs": [
    "Mariola Biekisz",
    "Steven Ditizii",
    "Diane Otoole"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Monroe",
   "away": "Bounce Malvern",
   "time": "2026-03-15T15:00:00",
   "complete": true,
   "homePoints": 624,
   "awayPoints": 655,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Olga Turova",
      "Prashant Mehta"
     ],
     "a": [
      "Kim Slomeana",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Mary Hain",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Petra Jones",
      "Mike Hardy"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Cynthia Wojtkowski",
      "Bob Debarge"
     ],
     "a": [
      "Christina Samtmann",
      "George Nouaime"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Bonnie Russo",
      "Linda Seemann"
     ],
     "a": [
      "Zalene Corey",
      "Mary Hain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Debbie Carrano",
      "Cynthia Wojtkowski"
     ],
     "a": [
      "Randy Kraftsow",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeffrey Quinlan",
      "Mike Hardy"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richard Ricciardi",
      "Matthew Colasanto"
     ],
     "a": [
      "George Nouaime",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Debbie Carrano",
      "Bob Debarge"
     ],
     "a": [
      "Mary Hain",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Petra Jones",
      "Mike Hardy"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bonnie Russo",
      "Richard Ricciardi"
     ],
     "a": [
      "Kim Slomeana",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Olga Turova",
      "Prashant Mehta"
     ],
     "a": [
      "Randy Kraftsow",
      "Brian Schartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Debbie Carrano",
      "Petra Jones"
     ],
     "a": [
      "Mary Hain",
      "Zalene Corey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bonnie Russo",
      "Olga Turova"
     ],
     "a": [
      "Kim Slomeana",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeffrey Quinlan",
      "Richard Ricciardi"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "George Nouaime"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Matthew Colasanto",
      "Bob Debarge"
     ],
     "a": [
      "Scott Nissenbaum",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Olga Turova",
      "Mike Hardy"
     ],
     "a": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Petra Jones",
      "Matthew Colasanto"
     ],
     "a": [
      "Zalene Corey",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Cynthia Wojtkowski",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Randy Kraftsow",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bonnie Russo",
      "Prashant Mehta"
     ],
     "a": [
      "Christina Samtmann",
      "Brian Schartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cynthia Wojtkowski",
      "Debbie Carrano"
     ],
     "a": [
      "Randy Kraftsow",
      "Kim Slomeana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Petra Jones"
     ],
     "a": [
      "Zalene Corey",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Prashant Mehta",
      "Richard Ricciardi"
     ],
     "a": [
      "Scott Nissenbaum",
      "Brian Schartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 31,
     "as": 29,
     "h": [
      "Mike Hardy",
      "Matthew Colasanto"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bonnie Russo",
      "Matthew Colasanto"
     ],
     "a": [
      "Kim Slomeana",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Olga Turova",
      "Bob Debarge"
     ],
     "a": [
      "Randy Kraftsow",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Prashant Mehta"
     ],
     "a": [
      "Christina Samtmann",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Debbie Carrano",
      "Richard Ricciardi"
     ],
     "a": [
      "Mary Hain",
      "Brian Schartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Bonnie Russo",
      "Cynthia Wojtkowski"
     ],
     "a": [
      "Mary Hain",
      "Kim Slomeana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Petra Jones",
      "Debbie Carrano"
     ],
     "a": [
      "Zalene Corey",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Mike Hardy",
      "Matthew Colasanto"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bob Debarge",
      "Jeffrey Quinlan"
     ],
     "a": [
      "George Nouaime",
      "Brian Schartz"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Flemington Blue",
   "away": "Home Court",
   "time": "2026-03-15T15:00:00",
   "complete": true,
   "homePoints": 613,
   "awayPoints": 588,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sheila Curran",
      "Hafeez Saheed"
     ],
     "a": [
      "Jayne Mayer",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gail Hannagan",
      "Eric Brezina"
     ],
     "a": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sharon Oddy",
      "Rob Oddy"
     ],
     "a": [
      "Denise Rempson",
      "Reginald Escusa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gail Hannagan",
      "Sharon Oddy"
     ],
     "a": [
      "Denise Rempson",
      "Jayne Mayer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarah Stangota",
      "Cathy Matko"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Warren Meade"
     ],
     "a": [
      "Brian Perlowitz",
      "David Cartwright"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ],
     "a": [
      "Erik Jacobsen",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Jeffrey Hartford"
     ],
     "a": [
      "Denise Rempson",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cathy Matko",
      "Anthony Leone"
     ],
     "a": [
      "Sandra Cassidy",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Oddy",
      "Hafeez Saheed"
     ],
     "a": [
      "Jayne Mayer",
      "Tony Calderan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sheila Curran",
      "Warren Meade"
     ],
     "a": [
      "Diana D'Amore",
      "Tim Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cathy Matko",
      "Sharon Oddy"
     ],
     "a": [
      "Rachel Baluyot",
      "Denise Rempson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sheila Curran",
      "Sarah Stangota"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Sandra Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Anthony Leone"
     ],
     "a": [
      "Erik Jacobsen",
      "Tim Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Jeffrey Hartford"
     ],
     "a": [
      "Reginald Escusa",
      "Tony Calderan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
     ],
     "a": [
      "Jayne Mayer",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cathy Matko",
      "Warren Meade"
     ],
     "a": [
      "Diana D'Amore",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sheila Curran",
      "Hafeez Saheed"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Tim Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Stangota",
      "Sheila Curran"
     ],
     "a": [
      "Diana D'Amore",
      "Denise Rempson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gail Hannagan",
      "Sharon Oddy"
     ],
     "a": [
      "Jayne Mayer",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eric Brezina",
      "Rob Oddy"
     ],
     "a": [
      "Reginald Escusa",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeffrey Hartford",
      "Warren Meade"
     ],
     "a": [
      "Tony Calderan",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Stangota",
      "Warren Meade"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Cathy Matko",
      "Anthony Leone"
     ],
     "a": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sharon Oddy",
      "Jeffrey Hartford"
     ],
     "a": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gail Hannagan",
      "Hafeez Saheed"
     ],
     "a": [
      "Jayne Mayer",
      "Tony Calderan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gail Hannagan",
      "Sheila Curran"
     ],
     "a": [
      "Denise Rempson",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sharon Oddy",
      "Cathy Matko"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Diana D'Amore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Anthony Leone",
      "Eric Brezina"
     ],
     "a": [
      "Reginald Escusa",
      "David Cartwright"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Hafeez Saheed"
     ],
     "a": [
      "Erik Jacobsen",
      "Tony Calderan"
     ]
    }
   ],
   "subs": [
    "Tony Calderan"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Players Courtyard Surge",
   "away": "Players Courtyard Wave",
   "time": "2026-03-22T13:00:00",
   "complete": true,
   "homePoints": 657,
   "awayPoints": 430,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Angela Bartelt",
      "Bob Sochor"
     ],
     "a": [
      "Barb Mulckhuyse",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Heidi Weinroth",
      "Richard Fox"
     ],
     "a": [
      "Mary Foster",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lynn Bresnahan",
      "William Askin"
     ],
     "a": [
      "Franchesa Mclean",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Dawn Kempton",
      "Dennis Higman"
     ],
     "a": [
      "Luz Bonner",
      "Joseph Koerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Dawn Kempton",
      "Amy Moore"
     ],
     "a": [
      "Luz Bonner",
      "Barb Mulckhuyse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Heidi Weinroth",
      "Lynn Bresnahan"
     ],
     "a": [
      "Christine Fletcher",
      "Danya George"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Dennis Higman",
      "Bob Sochor"
     ],
     "a": [
      "Edward Verish",
      "Tom Giunta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Steven Heller",
      "William Askin"
     ],
     "a": [
      "Michael Ross",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lynn Bresnahan",
      "Richard Fox"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Dawn Kempton",
      "Bob Sochor"
     ],
     "a": [
      "Franchesa Mclean",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Amy Moore",
      "Greg Taylor"
     ],
     "a": [
      "Mary Foster",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Angela Bartelt",
      "Dennis Higman"
     ],
     "a": [
      "Danya George",
      "Joseph Koerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amy Moore",
      "Angela Bartelt"
     ],
     "a": [
      "Franchesa Mclean",
      "Luz Bonner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Heidi Weinroth",
      "Lynn Bresnahan"
     ],
     "a": [
      "Mary Foster",
      "Christine Fletcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Greg Taylor",
      "Richard Fox"
     ],
     "a": [
      "Tom Giunta",
      "David Mcdonough"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Steven Heller",
      "Bob Sochor"
     ],
     "a": [
      "Joseph Koerner",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Dawn Kempton",
      "Bob Sochor"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Heidi Weinroth",
      "William Askin"
     ],
     "a": [
      "Christine Fletcher",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amy Moore",
      "Steven Heller"
     ],
     "a": [
      "Mary Foster",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Angela Bartelt",
      "Greg Taylor"
     ],
     "a": [
      "Danya George",
      "Edward Verish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Angela Bartelt",
      "Dawn Kempton"
     ],
     "a": [
      "Christine Fletcher",
      "Franchesa Mclean"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Moore",
      "Heidi Weinroth"
     ],
     "a": [
      "Danya George",
      "Luz Bonner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Dennis Higman",
      "Bob Sochor"
     ],
     "a": [
      "Tom Giunta",
      "Michael Ross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "William Askin",
      "Richard Fox"
     ],
     "a": [
      "Edward Verish",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Amy Moore",
      "Dennis Higman"
     ],
     "a": [
      "Christine Fletcher",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lynn Bresnahan",
      "Greg Taylor"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dawn Kempton",
      "William Askin"
     ],
     "a": [
      "Mary Foster",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Angela Bartelt",
      "Steven Heller"
     ],
     "a": [
      "Danya George",
      "Michael Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dawn Kempton",
      "Heidi Weinroth"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Angela Bartelt",
      "Lynn Bresnahan"
     ],
     "a": [
      "Christine Fletcher",
      "Luz Bonner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Greg Taylor",
      "Steven Heller"
     ],
     "a": [
      "David Mcdonough",
      "Joseph Koerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 3,
     "h": [
      "Dennis Higman",
      "Richard Fox"
     ],
     "a": [
      "Tom Giunta",
      "Edward Verish"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Mercer Bucks",
   "away": "ACE",
   "time": "2026-03-22T14:00:00",
   "complete": true,
   "homePoints": 492,
   "awayPoints": 663,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Francisco Miranda"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jean Knab",
      "Raymond Lormel"
     ],
     "a": [
      "Colleen Derose",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Jerry Margulies"
     ],
     "a": [
      "Cathy Fiebs",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sue Glass",
      "Howard Eng"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sue Glass",
      "Jean Knab"
     ],
     "a": [
      "Andrea Finnegan",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Victoria Marchok",
      "Elizabeth Dziekonska"
     ],
     "a": [
      "Kelley Batejan",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Joseph Carrado",
      "Arnold Witte"
     ],
     "a": [
      "Pete Certo",
      "Ira Krassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Howard Eng",
      "Raymond Lormel"
     ],
     "a": [
      "Lawrence Padersky",
      "Charlie Kissane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Francisco Miranda"
     ],
     "a": [
      "Kelley Batejan",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Howard Eng"
     ],
     "a": [
      "Colleen Derose",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Joseph Carrado"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sue Glass",
      "Jerry Margulies"
     ],
     "a": [
      "Andrea Finnegan",
      "Charlie Kissane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jean Knab",
      "Cheryl Tarby"
     ],
     "a": [
      "Colleen Derose",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Victoria Marchok"
     ],
     "a": [
      "Cathy Fiebs",
      "Dawn Gordon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Raymond Lormel",
      "Arnold Witte"
     ],
     "a": [
      "Jason Fingerman",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jerry Margulies",
      "Francisco Miranda"
     ],
     "a": [
      "Pete Certo",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Joseph Carrado"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Victoria Marchok",
      "Arnold Witte"
     ],
     "a": [
      "Cathy Fiebs",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jean Knab",
      "Howard Eng"
     ],
     "a": [
      "Andrea Finnegan",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sue Glass",
      "Raymond Lormel"
     ],
     "a": [
      "Kelley Batejan",
      "Charlie Kissane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sue Glass",
      "Cheryl Tarby"
     ],
     "a": [
      "Colleen Derose",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Victoria Marchok"
     ],
     "a": [
      "Andrea Finnegan",
      "Kelley Batejan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Francisco Miranda",
      "Joseph Carrado"
     ],
     "a": [
      "Lawrence Padersky",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Howard Eng",
      "Jerry Margulies"
     ],
     "a": [
      "Jason Fingerman",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Victoria Marchok",
      "Francisco Miranda"
     ],
     "a": [
      "Andrea Schwab",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Arnold Witte"
     ],
     "a": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cheryl Tarby",
      "Raymond Lormel"
     ],
     "a": [
      "Colleen Derose",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jean Knab",
      "Jerry Margulies"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sue Glass",
      "Jean Knab"
     ],
     "a": [
      "Andrea Schwab",
      "Colleen Derose"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Elizabeth Dziekonska"
     ],
     "a": [
      "Cathy Fiebs",
      "Kelley Batejan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Arnold Witte",
      "Joseph Carrado"
     ],
     "a": [
      "Jason Fingerman",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Howard Eng",
      "Raymond Lormel"
     ],
     "a": [
      "Lawrence Padersky",
      "Charlie Kissane"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Bounce Malvern",
   "away": "Monroe",
   "time": "2026-03-22T14:30:00",
   "complete": true,
   "homePoints": 592,
   "awayPoints": 611,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kim Slomeana",
      "George Nouaime"
     ],
     "a": [
      "Maureen Bruno",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mary Hain",
      "Dan Callaghan"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "Jeff Pillar"
     ],
     "a": [
      "Karen Rosenberg",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Petra Jones",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Hain",
      "Zalene Corey"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kim Slomeana",
      "Christina Samtmann"
     ],
     "a": [
      "Maureen Bruno",
      "Bonnie Russo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jeff Pillar",
      "George Nouaime"
     ],
     "a": [
      "Mike Hardy",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ],
     "a": [
      "Jay Scheinman",
      "Eddie Finocchiaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Dan Callaghan"
     ],
     "a": [
      "Petra Jones",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Jeff Pillar"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "Calvin Giles"
     ],
     "a": [
      "Karen Rosenberg",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Bonnie Russo",
      "Eddie Finocchiaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Kim Slomeana"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Petra Jones"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Hain",
      "Christina Samtmann"
     ],
     "a": [
      "Karen Rosenberg",
      "Maureen Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dan Callaghan",
      "George Nouaime"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Jay Scheinman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jeff Pillar",
      "Calvin Giles"
     ],
     "a": [
      "Mike Hardy",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kim Slomeana",
      "Jeff Pillar"
     ],
     "a": [
      "Petra Jones",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Bonnie Russo",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Dan Callaghan"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "George Nouaime"
     ],
     "a": [
      "Maureen Bruno",
      "Eddie Finocchiaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christina Samtmann",
      "Zalene Corey"
     ],
     "a": [
      "Bonnie Russo",
      "Jennifer Makfinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mary Hain",
      "Kim Slomeana"
     ],
     "a": [
      "Petra Jones",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ],
     "a": [
      "Eddie Finocchiaro",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "George Nouaime",
      "Calvin Giles"
     ],
     "a": [
      "Jay Scheinman",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Hain",
      "Jeff Pillar"
     ],
     "a": [
      "Maureen Bruno",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Kim Slomeana",
      "George Nouaime"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Samtmann",
      "Dan Callaghan"
     ],
     "a": [
      "Karen Rosenberg",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Bonnie Russo",
      "Eddie Finocchiaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christina Samtmann",
      "Kim Slomeana"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Mary Hain",
      "Zalene Corey"
     ],
     "a": [
      "Maureen Bruno",
      "Petra Jones"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dan Callaghan",
      "Calvin Giles"
     ],
     "a": [
      "Mike Hardy",
      "Jay Scheinman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeffrey Lindstrom",
      "George Nouaime"
     ],
     "a": [
      "Matthew Colasanto",
      "Eddie Finocchiaro"
     ]
    }
   ],
   "subs": [
    "Eddie Finocchiaro"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Flemington Blue",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-03-22T15:00:00",
   "complete": true,
   "homePoints": 629,
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
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Denise Stevens",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Jeffrey Hartford"
     ],
     "a": [
      "Suzane Sullivan",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tao Zhu",
      "Eric Brezina"
     ],
     "a": [
      "Darlene Fusco",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Holly Ferguson",
      "Paul Phillips"
     ],
     "a": [
      "Lea Frank",
      "Ray Suhocki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gail Hannagan",
      "Cathy Matko"
     ],
     "a": [
      "Christine Steigerwalt",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sheila Curran",
      "Tao Zhu"
     ],
     "a": [
      "Nami Huang",
      "Denise Stevens"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Eric Brezina",
      "Paul Phillips"
     ],
     "a": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Hafeez Saheed"
     ],
     "a": [
      "Sean Wilson",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sheila Curran",
      "Jeffrey Hartford"
     ],
     "a": [
      "Nami Huang",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Holly Ferguson",
      "Hafeez Saheed"
     ],
     "a": [
      "Denise Stevens",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Anthony Leone"
     ],
     "a": [
      "Christine Steigerwalt",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cathy Matko",
      "Rob Oddy"
     ],
     "a": [
      "Lea Frank",
      "Ray Suhocki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Tao Zhu"
     ],
     "a": [
      "Suzane Sullivan",
      "Darlene Fusco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gail Hannagan",
      "Cathy Matko"
     ],
     "a": [
      "Denise Stevens",
      "Christine Steigerwalt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Anthony Leone"
     ],
     "a": [
      "Sean Wilson",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Paul Phillips",
      "Rob Oddy"
     ],
     "a": [
      "Ray Suhocki",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sharon Oddy",
      "Rob Oddy"
     ],
     "a": [
      "Lea Frank",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sheila Curran",
      "Anthony Leone"
     ],
     "a": [
      "Suzane Sullivan",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Holly Ferguson",
      "Jeffrey Hartford"
     ],
     "a": [
      "Nami Huang",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gail Hannagan",
      "Hafeez Saheed"
     ],
     "a": [
      "Denise Stevens",
      "Scott Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Oddy",
      "Cathy Matko"
     ],
     "a": [
      "Nami Huang",
      "Lea Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sheila Curran",
      "Gail Hannagan"
     ],
     "a": [
      "Darlene Fusco",
      "Christine Steigerwalt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Paul Phillips",
      "Jeffrey Hartford"
     ],
     "a": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Eric Brezina",
      "Hafeez Saheed"
     ],
     "a": [
      "Scott Stenroos",
      "Ray Suhocki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Lea Frank",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Cathy Matko",
      "Rob Oddy"
     ],
     "a": [
      "Suzane Sullivan",
      "Ray Suhocki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Hafeez Saheed"
     ],
     "a": [
      "Christine Steigerwalt",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Oddy",
      "Eric Brezina"
     ],
     "a": [
      "Darlene Fusco",
      "Mark Scott"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Gail Hannagan",
      "Sharon Oddy"
     ],
     "a": [
      "Denise Stevens",
      "Nami Huang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sheila Curran",
      "Cathy Matko"
     ],
     "a": [
      "Suzane Sullivan",
      "Darlene Fusco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anthony Leone",
      "Eric Brezina"
     ],
     "a": [
      "Ray Suhocki",
      "Sean Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paul Phillips",
      "Jeffrey Hartford"
     ],
     "a": [
      "Mark Scott",
      "Scott Stenroos"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Home Court",
   "away": "Montville",
   "time": "2026-03-22T15:00:00",
   "complete": true,
   "homePoints": 650,
   "awayPoints": 565,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kathi Sheehan",
      "Brian Perlowitz"
     ],
     "a": [
      "Kristin Duva",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Denise Rempson",
      "David Cartwright"
     ],
     "a": [
      "Rani Gundavarapu",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Theresa Corderi",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lizabeth Hutchinson",
      "Reginald Escusa"
     ],
     "a": [
      "Kristen Frendak",
      "Mark Garner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sandra Cassidy",
      "Lizabeth Hutchinson"
     ],
     "a": [
      "Jemma Bucks",
      "Kristen Frendak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kathi Sheehan",
      "Denise Rempson"
     ],
     "a": [
      "Rani Gundavarapu",
      "Kristin Duva"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Reginald Escusa",
      "Erik Jacobsen"
     ],
     "a": [
      "Ken Bienkowski",
      "Steven Ditizii"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "David Cartwright",
      "Brian Perlowitz"
     ],
     "a": [
      "Jack Tran",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Kristin Duva",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mary Ann Villamor",
      "David Cartwright"
     ],
     "a": [
      "Jemma Bucks",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lizabeth Hutchinson",
      "William Hutchinson"
     ],
     "a": [
      "Kristen Frendak",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ],
     "a": [
      "Theresa Corderi",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Baluyot",
      "Denise Rempson"
     ],
     "a": [
      "Theresa Corderi",
      "Rani Gundavarapu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sandra Cassidy",
      "Kathi Sheehan"
     ],
     "a": [
      "Kristin Duva",
      "Jemma Bucks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "William Hutchinson",
      "Erik Jacobsen"
     ],
     "a": [
      "Robert Lee",
      "Mark Garner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jerry O’Loughlin",
      "Brian Perlowitz"
     ],
     "a": [
      "Steven Ditizii",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Denise Rempson",
      "Erik Jacobsen"
     ],
     "a": [
      "Rani Gundavarapu",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Ann Villamor",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Kristen Frendak",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lizabeth Hutchinson",
      "David Cartwright"
     ],
     "a": [
      "Theresa Corderi",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ],
     "a": [
      "Jemma Bucks",
      "Robert Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sandra Cassidy",
      "Lizabeth Hutchinson"
     ],
     "a": [
      "Rani Gundavarapu",
      "Kristin Duva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kathi Sheehan",
      "Denise Rempson"
     ],
     "a": [
      "Theresa Corderi",
      "Jemma Bucks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "David Cartwright",
      "William Hutchinson"
     ],
     "a": [
      "Mark Garner",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jerry O’Loughlin",
      "Reginald Escusa"
     ],
     "a": [
      "Steven Ditizii",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lizabeth Hutchinson",
      "Erik Jacobsen"
     ],
     "a": [
      "Kristin Duva",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Denise Rempson",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Theresa Corderi",
      "Steven Ditizii"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rachel Baluyot",
      "David Cartwright"
     ],
     "a": [
      "Rani Gundavarapu",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mary Ann Villamor",
      "Brian Perlowitz"
     ],
     "a": [
      "Kristen Frendak",
      "Robert Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sandra Cassidy",
      "Kathi Sheehan"
     ],
     "a": [
      "Kristin Duva",
      "Theresa Corderi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Baluyot",
      "Denise Rempson"
     ],
     "a": [
      "Rani Gundavarapu",
      "Jemma Bucks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Reginald Escusa",
      "Brian Perlowitz"
     ],
     "a": [
      "Ken Bienkowski",
      "Steven Ditizii"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Cartwright",
      "Erik Jacobsen"
     ],
     "a": [
      "Jack Tran",
      "Robert Lee"
     ]
    }
   ],
   "subs": [
    "Steven Ditizii",
    "Jemma Bucks"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Flemington Green",
   "away": "Mercer Bucks",
   "time": "2026-03-28T12:00:00",
   "complete": true,
   "homePoints": 661,
   "awayPoints": 511,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Veninger",
      "David Cooley"
     ],
     "a": [
      "Sue Glass",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Eileen Moore",
      "Sam Doctor"
     ],
     "a": [
      "Jean Knab",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Peggy Matzen",
      "Dan Amabile"
     ],
     "a": [
      "Cheryl Tarby",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Marianne Rosato",
      "Brett Wilson"
     ],
     "a": [
      "Victoria Marchok",
      "Raymond Lormel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Karen Veninger",
      "Annette Marsh"
     ],
     "a": [
      "Sue Glass",
      "Connie Cao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Diane Bracco",
      "Eileen Moore"
     ],
     "a": [
      "Jean Knab",
      "Elizabeth Dziekonska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sam Doctor",
      "David Cooley"
     ],
     "a": [
      "Ken Gross",
      "Jerry Margulies"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Scott Heist",
      "Brett Wilson"
     ],
     "a": [
      "Howard Eng",
      "Joseph Carrado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Annette Marsh",
      "Dan Amabile"
     ],
     "a": [
      "Cheryl Tarby",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Peggy Matzen",
      "Sam Doctor"
     ],
     "a": [
      "Sue Glass",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Diane Bracco",
      "David Cooley"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Marianne Rosato",
      "Scott Heist"
     ],
     "a": [
      "Victoria Marchok",
      "Joseph Carrado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eileen Moore",
      "Annette Marsh"
     ],
     "a": [
      "Jean Knab",
      "Victoria Marchok"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Peggy Matzen",
      "Karen Veninger"
     ],
     "a": [
      "Cheryl Tarby",
      "Connie Cao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sam Doctor",
      "Brett Wilson"
     ],
     "a": [
      "Jason Belmont",
      "Jerry Margulies"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dan Amabile",
      "Anthony Deangelis"
     ],
     "a": [
      "Howard Eng",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Annette Marsh",
      "Dan Amabile"
     ],
     "a": [
      "Connie Cao",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Karen Veninger",
      "Anthony Deangelis"
     ],
     "a": [
      "Jean Knab",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Scott Heist"
     ],
     "a": [
      "Sue Glass",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marianne Rosato",
      "David Cooley"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Joseph Carrado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Peggy Matzen",
      "Eileen Moore"
     ],
     "a": [
      "Sue Glass",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Karen Veninger",
      "Diane Bracco"
     ],
     "a": [
      "Victoria Marchok",
      "Connie Cao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Brett Wilson",
      "Dan Amabile"
     ],
     "a": [
      "Ken Gross",
      "Jason Belmont"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sam Doctor",
      "Scott Heist"
     ],
     "a": [
      "Raymond Lormel",
      "Joseph Carrado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Annette Marsh",
      "Anthony Deangelis"
     ],
     "a": [
      "Jean Knab",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Peggy Matzen",
      "Sam Doctor"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marianne Rosato",
      "Brett Wilson"
     ],
     "a": [
      "Victoria Marchok",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Diane Bracco",
      "David Cooley"
     ],
     "a": [
      "Connie Cao",
      "Raymond Lormel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Karen Veninger",
      "Annette Marsh"
     ],
     "a": [
      "Jean Knab",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Eileen Moore",
      "Marianne Rosato"
     ],
     "a": [
      "Sue Glass",
      "Elizabeth Dziekonska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dan Amabile",
      "David Cooley"
     ],
     "a": [
      "Ken Gross",
      "Joseph Carrado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sam Doctor",
      "Scott Heist"
     ],
     "a": [
      "Howard Eng",
      "Jerry Margulies"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Players Courtyard Surge",
   "away": "Flemington Blue",
   "time": "2026-03-28T12:00:00",
   "complete": true,
   "homePoints": 645,
   "awayPoints": 556,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tina Convery",
      "Steven Heller"
     ],
     "a": [
      "Sarah Stangota",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dawn Kempton",
      "David Corwin"
     ],
     "a": [
      "Sharon Oddy",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Sheila Curran",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Heidi Weinroth",
      "Richard Fox"
     ],
     "a": [
      "Holly Ferguson",
      "Paul Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joan Rudderow",
      "Dawn Kempton"
     ],
     "a": [
      "Holly Ferguson",
      "Cathy Matko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "Lynn Bresnahan"
     ],
     "a": [
      "Sharon Oddy",
      "Sheila Curran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rick Weiser",
      "Greg Taylor"
     ],
     "a": [
      "Paul Phillips",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dennis Higman",
      "David Corwin"
     ],
     "a": [
      "Warren Meade",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joan Rudderow",
      "David Corwin"
     ],
     "a": [
      "Holly Ferguson",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lynn Bresnahan",
      "Greg Taylor"
     ],
     "a": [
      "Sheila Curran",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tina Convery",
      "Rick Weiser"
     ],
     "a": [
      "Sarah Stangota",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dawn Kempton",
      "Richard Fox"
     ],
     "a": [
      "Cathy Matko",
      "Rob Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dawn Kempton",
      "Tina Convery"
     ],
     "a": [
      "Sharon Oddy",
      "Sarah Stangota"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Heidi Weinroth"
     ],
     "a": [
      "Holly Ferguson",
      "Cathy Matko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Steven Heller",
      "David Corwin"
     ],
     "a": [
      "Eric Brezina",
      "Anthony Leone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Richard Fox",
      "Dennis Higman"
     ],
     "a": [
      "Paul Phillips",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lynn Bresnahan",
      "Steven Heller"
     ],
     "a": [
      "Cathy Matko",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joan Rudderow",
      "Greg Taylor"
     ],
     "a": [
      "Sharon Oddy",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Heidi Weinroth",
      "Rick Weiser"
     ],
     "a": [
      "Sarah Stangota",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dawn Kempton",
      "Dennis Higman"
     ],
     "a": [
      "Sheila Curran",
      "Paul Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lynn Bresnahan",
      "Tina Convery"
     ],
     "a": [
      "Sheila Curran",
      "Sarah Stangota"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joan Rudderow",
      "Dawn Kempton"
     ],
     "a": [
      "Holly Ferguson",
      "Sharon Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rick Weiser",
      "Richard Fox"
     ],
     "a": [
      "Anthony Leone",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dennis Higman",
      "David Corwin"
     ],
     "a": [
      "Warren Meade",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Heidi Weinroth",
      "Steven Heller"
     ],
     "a": [
      "Holly Ferguson",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lynn Bresnahan",
      "Rick Weiser"
     ],
     "a": [
      "Sarah Stangota",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tina Convery",
      "Greg Taylor"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Cathy Matko",
      "Anthony Leone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lynn Bresnahan",
      "Dawn Kempton"
     ],
     "a": [
      "Sheila Curran",
      "Sharon Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tina Convery",
      "Heidi Weinroth"
     ],
     "a": [
      "Cathy Matko",
      "Sarah Stangota"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steven Heller",
      "Greg Taylor"
     ],
     "a": [
      "Eric Brezina",
      "Anthony Leone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Richard Fox",
      "David Corwin"
     ],
     "a": [
      "Paul Phillips",
      "Ren Mortara"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Home Court",
   "away": "Monroe",
   "time": "2026-03-28T15:00:00",
   "complete": true,
   "homePoints": 671,
   "awayPoints": 510,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Olga Khalev",
      "Erik Jacobsen"
     ],
     "a": [
      "Olga Turova",
      "Prashant Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jayne Mayer",
      "Reginald Escusa"
     ],
     "a": [
      "Maureen Bruno",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Debbie Carrano",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kathi Sheehan",
      "David Cartwright"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jayne Mayer",
      "Mary Ann Villamor"
     ],
     "a": [
      "Maureen Bruno",
      "Petra Jones"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kathi Sheehan",
      "Olga Khalev"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "David Cartwright",
      "Philip Gallione"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Reginald Escusa",
      "Tony Calderan"
     ],
     "a": [
      "Bob Debarge",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jayne Mayer",
      "Tony Calderan"
     ],
     "a": [
      "Debbie Carrano",
      "Prashant Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rachel Baluyot",
      "David Cartwright"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mary Ann Villamor",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Petra Jones",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marilyn Janssen",
      "Erik Jacobsen"
     ],
     "a": [
      "Karen Rosenberg",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Baluyot",
      "Olga Khalev"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jayne Mayer",
      "Kathi Sheehan"
     ],
     "a": [
      "Debbie Carrano",
      "Olga Turova"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jerry O’Loughlin",
      "Reginald Escusa"
     ],
     "a": [
      "Matthew Colasanto",
      "Prashant Mehta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Philip Gallione",
      "Erik Jacobsen"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jayne Mayer",
      "Philip Gallione"
     ],
     "a": [
      "Maureen Bruno",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Petra Jones",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Marilyn Janssen",
      "Reginald Escusa"
     ],
     "a": [
      "Olga Turova",
      "Prashant Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kathi Sheehan",
      "Tony Calderan"
     ],
     "a": [
      "Debbie Carrano",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marilyn Janssen",
      "Olga Khalev"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Rachel Baluyot",
      "Kathi Sheehan"
     ],
     "a": [
      "Olga Turova",
      "Petra Jones"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Reginald Escusa",
      "Erik Jacobsen"
     ],
     "a": [
      "Jay Scheinman",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Cartwright",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Matthew Colasanto",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mary Ann Villamor",
      "Philip Gallione"
     ],
     "a": [
      "Debbie Carrano",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Olga Khalev",
      "Tony Calderan"
     ],
     "a": [
      "Karen Rosenberg",
      "Prashant Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathi Sheehan",
      "Erik Jacobsen"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Marilyn Janssen",
      "David Cartwright"
     ],
     "a": [
      "Olga Turova",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Olga Khalev",
      "Rachel Baluyot"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Marilyn Janssen",
      "Mary Ann Villamor"
     ],
     "a": [
      "Petra Jones",
      "Maureen Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tony Calderan",
      "David Cartwright"
     ],
     "a": [
      "Jay Scheinman",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Erik Jacobsen",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Matthew Colasanto",
      "Bob Debarge"
     ]
    }
   ],
   "subs": [
    "Philip Gallione",
    "Marilyn Janssen",
    "Olga Khalev",
    "Tony Calderan"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Montville",
   "away": "ACE",
   "time": "2026-03-28T15:00:00",
   "complete": true,
   "homePoints": 506,
   "awayPoints": 621,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anita Gutierrez",
      "Mark Garner"
     ],
     "a": [
      "Colleen Derose",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Christine Aiese",
      "Bill Lam"
     ],
     "a": [
      "Andrea Schwab",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Patrick Phalen"
     ],
     "a": [
      "Cathy Fiebs",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Renee Froeberg",
      "Jack Tran"
     ],
     "a": [
      "Amy Clayman",
      "Eric Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Renee Froeberg"
     ],
     "a": [
      "Colleen Derose",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Christine Aiese"
     ],
     "a": [
      "Dawn Gordon",
      "Linda Landis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bill Gold",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Marc Schwegel",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jack Tran",
      "Patrick Phalen"
     ],
     "a": [
      "Pete Certo",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Renee Froeberg",
      "Bill Lam"
     ],
     "a": [
      "Cathy Fiebs",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Mark Garner"
     ],
     "a": [
      "Dawn Gordon",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anita Gutierrez",
      "Bill Gold"
     ],
     "a": [
      "Amy Clayman",
      "Eric Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Renee Froeberg",
      "Elsie Garcia"
     ],
     "a": [
      "Colleen Derose",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anita Gutierrez",
      "Christine Aiese"
     ],
     "a": [
      "Amy Clayman",
      "Linda Landis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jack Tran",
      "Mark Garner"
     ],
     "a": [
      "Scott Auty",
      "Pete Certo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patrick Phalen",
      "Bill Gold"
     ],
     "a": [
      "Eric Clayman",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Patrick Phalen"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Jack Tran"
     ],
     "a": [
      "Colleen Derose",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anita Gutierrez",
      "Bill Lam"
     ],
     "a": [
      "Linda Landis",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christine Aiese",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christine Aiese",
      "Kristen Frendak"
     ],
     "a": [
      "Dawn Gordon",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Renee Froeberg",
      "Anita Gutierrez"
     ],
     "a": [
      "Amy Clayman",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bill Gold",
      "Mark Garner"
     ],
     "a": [
      "Scott Auty",
      "Ira Krassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bill Lam",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Eric Clayman",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Patrick Phalen"
     ],
     "a": [
      "Andrea Schwab",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Renee Froeberg",
      "Jack Tran"
     ],
     "a": [
      "Cathy Fiebs",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Mark Garner"
     ],
     "a": [
      "Colleen Derose",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anita Gutierrez",
      "Bill Gold"
     ],
     "a": [
      "Linda Landis",
      "Scott Auty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Christine Aiese"
     ],
     "a": [
      "Colleen Derose",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Renee Froeberg"
     ],
     "a": [
      "Amy Clayman",
      "Linda Landis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patrick Phalen",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Pete Certo",
      "Ira Krassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jack Tran",
      "Bill Lam"
     ],
     "a": [
      "Eric Clayman",
      "Marc Schwegel"
     ]
    }
   ],
   "subs": [
    "Renee Froeberg",
    "Anita Gutierrez",
    "Christine Aiese",
    "Elsie Garcia"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Lehigh Valley",
   "away": "Bounce Malvern",
   "time": "2026-03-28T15:00:00",
   "complete": true,
   "homePoints": 616,
   "awayPoints": 597,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzane Sullivan",
      "Mark Scott"
     ],
     "a": [
      "Michelle Smith",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Denise Stevens",
      "Sean Wilson"
     ],
     "a": [
      "Randy Kraftsow",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christine Steigerwalt",
      "Ralph Lovelidge"
     ],
     "a": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nami Huang",
      "Neil Pratesi"
     ],
     "a": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Darlene Fusco",
      "Suzane Sullivan"
     ],
     "a": [
      "Randy Kraftsow",
      "Michelle Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nami Huang",
      "Christine Steigerwalt"
     ],
     "a": [
      "Zalene Corey",
      "Mary Hain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Neil Pratesi",
      "Ralph Lovelidge"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Scott Stenroos",
      "Ray Suhocki"
     ],
     "a": [
      "George Nouaime",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Sean Wilson"
     ],
     "a": [
      "Randy Kraftsow",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Darlene Fusco",
      "Scott Stenroos"
     ],
     "a": [
      "Michelle Smith",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Ralph Lovelidge"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Christine Steigerwalt",
      "Mark Scott"
     ],
     "a": [
      "Mary Hain",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Nami Huang"
     ],
     "a": [
      "Mary Hain",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Darlene Fusco",
      "Denise Stevens"
     ],
     "a": [
      "Zalene Corey",
      "Michelle Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sean Wilson",
      "Neil Pratesi"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mark Scott",
      "Scott Stenroos"
     ],
     "a": [
      "Scott Nissenbaum",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Darlene Fusco",
      "Ray Suhocki"
     ],
     "a": [
      "Michelle Smith",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Scott Stenroos"
     ],
     "a": [
      "Randy Kraftsow",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nami Huang",
      "Ralph Lovelidge"
     ],
     "a": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Steigerwalt",
      "Neil Pratesi"
     ],
     "a": [
      "Zalene Corey",
      "Dan Callaghan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Darlene Fusco",
      "Christine Steigerwalt"
     ],
     "a": [
      "Randy Kraftsow",
      "Michelle Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Denise Stevens"
     ],
     "a": [
      "Zalene Corey",
      "Mary Hain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sean Wilson",
      "Mark Scott"
     ],
     "a": [
      "Dan Callaghan",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ralph Lovelidge",
      "Ray Suhocki"
     ],
     "a": [
      "Jeff Pillar",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nami Huang",
      "Ray Suhocki"
     ],
     "a": [
      "Randy Kraftsow",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Suzane Sullivan",
      "Scott Stenroos"
     ],
     "a": [
      "Michelle Smith",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Mark Scott"
     ],
     "a": [
      "Zalene Corey",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Denise Stevens",
      "Neil Pratesi"
     ],
     "a": [
      "Mary Hain",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christine Steigerwalt",
      "Suzane Sullivan"
     ],
     "a": [
      "Mary Hain",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Nami Huang",
      "Darlene Fusco"
     ],
     "a": [
      "Zalene Corey",
      "Michelle Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sean Wilson",
      "Ralph Lovelidge"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Neil Pratesi",
      "Ray Suhocki"
     ],
     "a": [
      "George Nouaime",
      "Dan Callaghan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Players Courtyard Surge",
   "away": "Monroe",
   "time": "2026-03-29T13:00:00",
   "complete": true,
   "homePoints": 658,
   "awayPoints": 467,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lolita Hagen",
      "Steven Heller"
     ],
     "a": [
      "Bonnie Russo",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dawn Kempton",
      "Dennis Higman"
     ],
     "a": [
      "Linda Seemann",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Moore",
      "David Corwin"
     ],
     "a": [
      "Maureen Bruno",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joan Rudderow",
      "Bob Sochor"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Bob Debarge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joan Rudderow",
      "Dawn Kempton"
     ],
     "a": [
      "Karen Rosenberg",
      "Linda Seemann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Angela Bartelt",
      "Heidi Weinroth"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Cynthia Wojtkowski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dennis Higman",
      "Bob Sochor"
     ],
     "a": [
      "Bob Debarge",
      "Jay Scheinman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Richard Fox",
      "David Corwin"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Moore",
      "Richard Fox"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Joan Rudderow",
      "Bob Sochor"
     ],
     "a": [
      "Maureen Bruno",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Heidi Weinroth",
      "Steven Heller"
     ],
     "a": [
      "Karen Rosenberg",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lolita Hagen",
      "David Corwin"
     ],
     "a": [
      "Bonnie Russo",
      "Bob Debarge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dawn Kempton",
      "Angela Bartelt"
     ],
     "a": [
      "Cynthia Wojtkowski",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lolita Hagen",
      "Amy Moore"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Dennis Higman",
      "Bob Sochor"
     ],
     "a": [
      "Paul Glickenhaus",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "David Corwin",
      "Steven Heller"
     ],
     "a": [
      "Richard Ricciardi",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Dawn Kempton",
      "David Corwin"
     ],
     "a": [
      "Bonnie Russo",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Heidi Weinroth",
      "Richard Fox"
     ],
     "a": [
      "Linda Seemann",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Angela Bartelt",
      "Bob Sochor"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Cynthia Wojtkowski",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lolita Hagen",
      "Angela Bartelt"
     ],
     "a": [
      "Maureen Bruno",
      "Linda Seemann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Joan Rudderow",
      "Amy Moore"
     ],
     "a": [
      "Karen Rosenberg",
      "Bonnie Russo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Bob Sochor",
      "David Corwin"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Richard Fox",
      "Steven Heller"
     ],
     "a": [
      "Richard Ricciardi",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lolita Hagen",
      "Dennis Higman"
     ],
     "a": [
      "Bonnie Russo",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "Steven Heller"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dawn Kempton",
      "Bob Sochor"
     ],
     "a": [
      "Cynthia Wojtkowski",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Heidi Weinroth",
      "Richard Fox"
     ],
     "a": [
      "Linda Seemann",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Moore",
      "Heidi Weinroth"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joan Rudderow",
      "Dawn Kempton"
     ],
     "a": [
      "Cynthia Wojtkowski",
      "Maureen Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Steven Heller",
      "Bob Sochor"
     ],
     "a": [
      "Matthew Colasanto",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dennis Higman",
      "Richard Fox"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Jay Scheinman"
     ]
    }
   ],
   "subs": [
    "Paul Glickenhaus"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Mercer Bucks",
   "away": "Players Courtyard Wave",
   "time": "2026-03-29T14:00:00",
   "complete": true,
   "homePoints": 612,
   "awayPoints": 578,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sue Glass",
      "Howard Eng"
     ],
     "a": [
      "Barb Mulckhuyse",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jean Knab",
      "Ken Gross"
     ],
     "a": [
      "Michelle Lehman",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Karen Krusen",
      "Jason Belmont"
     ],
     "a": [
      "Mary Foster",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Victoria Marchok",
      "Raymond Lormel"
     ],
     "a": [
      "Danya George",
      "Edward Verish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sue Glass",
      "Connie Cao"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Jean Knab",
      "Elizabeth Dziekonska"
     ],
     "a": [
      "Danya George",
      "Christine Fletcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Howard Eng",
      "Arnold Witte"
     ],
     "a": [
      "Craig Mehnert",
      "Ed Mendoza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ken Gross",
      "Joseph Carrado"
     ],
     "a": [
      "Joseph Koerner",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sue Glass",
      "Raymond Lormel"
     ],
     "a": [
      "Barb Mulckhuyse",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Karen Krusen",
      "Ken Gross"
     ],
     "a": [
      "Mary Foster",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Connie Cao",
      "Arnold Witte"
     ],
     "a": [
      "Michelle Lehman",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Victoria Marchok",
      "Jason Belmont"
     ],
     "a": [
      "Christine Fletcher",
      "Michael Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jean Knab",
      "Victoria Marchok"
     ],
     "a": [
      "Christine Fletcher",
      "Michelle Lehman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Krusen",
      "Elizabeth Dziekonska"
     ],
     "a": [
      "Mary Foster",
      "Danya George"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Howard Eng",
      "Jason Belmont"
     ],
     "a": [
      "Craig Mehnert",
      "David Mcdonough"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Raymond Lormel",
      "Joseph Carrado"
     ],
     "a": [
      "Edward Verish",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jean Knab",
      "Howard Eng"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elizabeth Dziekonska",
      "Arnold Witte"
     ],
     "a": [
      "Michelle Lehman",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sue Glass",
      "Joseph Carrado"
     ],
     "a": [
      "Christine Fletcher",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Connie Cao",
      "Ken Gross"
     ],
     "a": [
      "Danya George",
      "Ed Mendoza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sue Glass",
      "Karen Krusen"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Danya George"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Victoria Marchok",
      "Connie Cao"
     ],
     "a": [
      "Mary Foster",
      "Michelle Lehman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ken Gross",
      "Raymond Lormel"
     ],
     "a": [
      "Craig Mehnert",
      "David Mcdonough"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jason Belmont",
      "Arnold Witte"
     ],
     "a": [
      "Edward Verish",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jean Knab",
      "Jason Belmont"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Raymond Lormel"
     ],
     "a": [
      "Mary Foster",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Connie Cao",
      "Howard Eng"
     ],
     "a": [
      "Christine Fletcher",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Victoria Marchok",
      "Joseph Carrado"
     ],
     "a": [
      "Danya George",
      "Joseph Koerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jean Knab",
      "Karen Krusen"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sue Glass",
      "Elizabeth Dziekonska"
     ],
     "a": [
      "Christine Fletcher",
      "Michelle Lehman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Howard Eng",
      "Ken Gross"
     ],
     "a": [
      "Craig Mehnert",
      "Ed Mendoza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Arnold Witte",
      "Joseph Carrado"
     ],
     "a": [
      "David Mcdonough",
      "Michael Ross"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Bounce Malvern",
   "away": "ACE",
   "time": "2026-03-29T14:30:00",
   "complete": true,
   "homePoints": 557,
   "awayPoints": 617,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "George Nouaime"
     ],
     "a": [
      "Colleen Derose",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Randy Kraftsow",
      "Dan Callaghan"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Dawn Gordon",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Hain",
      "Scott Nissenbaum"
     ],
     "a": [
      "Amy Clayman",
      "Eric Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Zalene Corey",
      "Mary Hain"
     ],
     "a": [
      "Andrea Finnegan",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "Kim Slomeana"
     ],
     "a": [
      "Kelley Batejan",
      "Dawn Gordon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeff Pillar",
      "Calvin Giles"
     ],
     "a": [
      "Lawrence Padersky",
      "Marc Schwegel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dan Callaghan",
      "Scott Nissenbaum"
     ],
     "a": [
      "Scott Auty",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "Jeff Pillar"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Hain",
      "George Nouaime"
     ],
     "a": [
      "Colleen Derose",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Kelley Batejan",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Randy Kraftsow",
      "Dan Callaghan"
     ],
     "a": [
      "Dawn Gordon",
      "Ira Krassan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Randy Kraftsow"
     ],
     "a": [
      "Andrea Finnegan",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "Mary Hain"
     ],
     "a": [
      "Amy Clayman",
      "Colleen Derose"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeff Pillar",
      "Scott Nissenbaum"
     ],
     "a": [
      "Jason Fingerman",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Calvin Giles",
      "George Nouaime"
     ],
     "a": [
      "Scott Auty",
      "Eric Clayman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Randy Kraftsow",
      "George Nouaime"
     ],
     "a": [
      "Kelley Batejan",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kim Slomeana",
      "Dan Callaghan"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ],
     "a": [
      "Andrea Finnegan",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Amy Clayman",
      "Eric Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mary Hain",
      "Zalene Corey"
     ],
     "a": [
      "Colleen Derose",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Randy Kraftsow",
      "Christina Samtmann"
     ],
     "a": [
      "Kelley Batejan",
      "Andrea Finnegan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dan Callaghan",
      "Jeff Pillar"
     ],
     "a": [
      "Jason Fingerman",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Calvin Giles",
      "Scott Nissenbaum"
     ],
     "a": [
      "Scott Auty",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Calvin Giles"
     ],
     "a": [
      "Colleen Derose",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Zalene Corey",
      "George Nouaime"
     ],
     "a": [
      "Amy Clayman",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Randy Kraftsow",
      "Jeff Pillar"
     ],
     "a": [
      "Kelley Batejan",
      "Eric Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Randy Kraftsow",
      "Zalene Corey"
     ],
     "a": [
      "Colleen Derose",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kim Slomeana",
      "Christina Samtmann"
     ],
     "a": [
      "Andrea Finnegan",
      "Dawn Gordon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Scott Nissenbaum",
      "Calvin Giles"
     ],
     "a": [
      "Scott Auty",
      "Jason Fingerman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Dan Callaghan",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Ira Krassan",
      "Marc Schwegel"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Montville",
   "away": "Flemington Blue",
   "time": "2026-03-29T15:00:00",
   "complete": true,
   "homePoints": 532,
   "awayPoints": 619,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Eric Kirschner"
     ],
     "a": [
      "Gail Hannagan",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Diane Herbst",
      "Jack Tran"
     ],
     "a": [
      "Cathy Matko",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jill Assante",
      "Ken Bienkowski"
     ],
     "a": [
      "Holly Ferguson",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Theresa Corderi",
      "Patrick Phalen"
     ],
     "a": [
      "Sheila Curran",
      "Ren Mortara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Clare Cruz",
      "Kristen Frendak"
     ],
     "a": [
      "Gail Hannagan",
      "Cathy Matko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Theresa Corderi",
      "Diane Herbst"
     ],
     "a": [
      "Holly Ferguson",
      "Sheila Curran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mark Garner",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Eric Brezina",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jack Tran",
      "Patrick Phalen"
     ],
     "a": [
      "Warren Meade",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Clare Cruz",
      "Jack Tran"
     ],
     "a": [
      "Sharon Oddy",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Diane Herbst",
      "Eric Kirschner"
     ],
     "a": [
      "Gail Hannagan",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Theresa Corderi",
      "Ken Bienkowski"
     ],
     "a": [
      "Sarah Stangota",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jill Assante",
      "Mark Garner"
     ],
     "a": [
      "Sheila Curran",
      "Ren Mortara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Diane Herbst",
      "Jill Assante"
     ],
     "a": [
      "Sarah Stangota",
      "Sharon Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Theresa Corderi",
      "Kristen Frendak"
     ],
     "a": [
      "Cathy Matko",
      "Holly Ferguson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patrick Phalen",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Paul Phillips",
      "Rob Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jack Tran",
      "Eric Kirschner"
     ],
     "a": [
      "Hafeez Saheed",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Mark Garner"
     ],
     "a": [
      "Gail Hannagan",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Theresa Corderi",
      "Jack Tran"
     ],
     "a": [
      "Holly Ferguson",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Clare Cruz",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Cathy Matko",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jill Assante",
      "Ken Bienkowski"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Diane Herbst",
      "Clare Cruz"
     ],
     "a": [
      "Gail Hannagan",
      "Sarah Stangota"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jill Assante",
      "Kristen Frendak"
     ],
     "a": [
      "Sharon Oddy",
      "Sheila Curran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ken Bienkowski",
      "Mark Garner"
     ],
     "a": [
      "Eric Brezina",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Patrick Phalen",
      "Eric Kirschner"
     ],
     "a": [
      "Ren Mortara",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Theresa Corderi",
      "Jack Tran"
     ],
     "a": [
      "Sarah Stangota",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Diane Herbst",
      "Ken Bienkowski"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Holly Ferguson",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jill Assante",
      "Eric Kirschner"
     ],
     "a": [
      "Sheila Curran",
      "Eric Brezina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jill Assante",
      "Clare Cruz"
     ],
     "a": [
      "Sarah Stangota",
      "Gail Hannagan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Theresa Corderi",
      "Diane Herbst"
     ],
     "a": [
      "Cathy Matko",
      "Sheila Curran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jack Tran",
      "Ken Bienkowski"
     ],
     "a": [
      "Hafeez Saheed",
      "Rob Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Patrick Phalen",
      "Mark Garner"
     ],
     "a": [
      "Eric Brezina",
      "Ren Mortara"
     ]
    }
   ],
   "subs": [
    "Clare Cruz"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Flemington Green",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-03-29T15:00:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 641,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Veninger",
      "Dan Amabile"
     ],
     "a": [
      "Denise Stevens",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eileen Moore",
      "Sam Doctor"
     ],
     "a": [
      "Suzane Sullivan",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "David Cooley"
     ],
     "a": [
      "Christine Steigerwalt",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Peggy Matzen",
      "Brett Wilson"
     ],
     "a": [
      "Darlene Fusco",
      "Mark Scott"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eileen Moore",
      "Peggy Matzen"
     ],
     "a": [
      "Nami Huang",
      "Christine Steigerwalt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kara Chubrik",
      "Karen Veninger"
     ],
     "a": [
      "Suzane Sullivan",
      "Tracey Klemick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jeff Kesner",
      "Dan Amabile"
     ],
     "a": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 31,
     "as": 29,
     "h": [
      "Anthony Deangelis",
      "David Cooley"
     ],
     "a": [
      "Scott Stenroos",
      "Ray Suhocki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eileen Moore",
      "Anthony Deangelis"
     ],
     "a": [
      "Denise Stevens",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kara Chubrik",
      "Sam Doctor"
     ],
     "a": [
      "Nami Huang",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Veninger",
      "Jeff Kesner"
     ],
     "a": [
      "Suzane Sullivan",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "Brett Wilson"
     ],
     "a": [
      "Darlene Fusco",
      "Scott Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Veninger",
      "Peggy Matzen"
     ],
     "a": [
      "Nami Huang",
      "Denise Stevens"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marianne Rosato",
      "Eileen Moore"
     ],
     "a": [
      "Christine Steigerwalt",
      "Darlene Fusco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dan Amabile",
      "Brett Wilson"
     ],
     "a": [
      "Sean Wilson",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeff Kesner",
      "David Cooley"
     ],
     "a": [
      "Mark Scott",
      "Ray Suhocki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Veninger",
      "Jeff Kesner"
     ],
     "a": [
      "Denise Stevens",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Dan Amabile"
     ],
     "a": [
      "Suzane Sullivan",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marianne Rosato",
      "Anthony Deangelis"
     ],
     "a": [
      "Christine Steigerwalt",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kara Chubrik",
      "Sam Doctor"
     ],
     "a": [
      "Tracey Klemick",
      "Ray Suhocki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kara Chubrik",
      "Marianne Rosato"
     ],
     "a": [
      "Denise Stevens",
      "Darlene Fusco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Eileen Moore"
     ],
     "a": [
      "Suzane Sullivan",
      "Christine Steigerwalt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jeff Kesner",
      "Anthony Deangelis"
     ],
     "a": [
      "Ralph Lovelidge",
      "Sean Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brett Wilson",
      "David Cooley"
     ],
     "a": [
      "Mark Scott",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eileen Moore",
      "Dan Amabile"
     ],
     "a": [
      "Nami Huang",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Veninger",
      "Sam Doctor"
     ],
     "a": [
      "Darlene Fusco",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Peggy Matzen",
      "Anthony Deangelis"
     ],
     "a": [
      "Christine Steigerwalt",
      "Ray Suhocki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kara Chubrik",
      "David Cooley"
     ],
     "a": [
      "Tracey Klemick",
      "Scott Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Karen Veninger",
      "Eileen Moore"
     ],
     "a": [
      "Denise Stevens",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Peggy Matzen",
      "Marianne Rosato"
     ],
     "a": [
      "Nami Huang",
      "Tracey Klemick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sam Doctor",
      "Jeff Kesner"
     ],
     "a": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dan Amabile",
      "Brett Wilson"
     ],
     "a": [
      "Mark Scott",
      "Sean Wilson"
     ]
    }
   ],
   "subs": [
    "Jeff Kesner",
    "Tracey Klemick"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Players Courtyard Surge",
   "away": "Mercer Bucks",
   "time": "2026-04-12T13:00:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 451,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tina Convery",
      "Steven Heller"
     ],
     "a": [
      "Jean Knab",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lynn Bresnahan",
      "William Askin"
     ],
     "a": [
      "Cheryl Tarby",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amy Moore",
      "Bob Sochor"
     ],
     "a": [
      "Karen Krusen",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "Rick Weiser"
     ],
     "a": [
      "Connie Cao",
      "Howard Eng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Moore",
      "Joan Rudderow"
     ],
     "a": [
      "Karen Krusen",
      "Jean Knab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Lolita Hagen",
      "Tina Convery"
     ],
     "a": [
      "Connie Cao",
      "Victoria Marchok"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Greg Taylor",
      "Rick Weiser"
     ],
     "a": [
      "Arnold Witte",
      "Joseph Carrado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "David Corwin",
      "Bob Sochor"
     ],
     "a": [
      "Ken Gross",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lynn Bresnahan",
      "Steven Heller"
     ],
     "a": [
      "Victoria Marchok",
      "Joseph Carrado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "Bob Sochor"
     ],
     "a": [
      "Jean Knab",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amy Moore",
      "David Corwin"
     ],
     "a": [
      "Connie Cao",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joan Rudderow",
      "William Askin"
     ],
     "a": [
      "Cheryl Tarby",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tina Convery",
      "Joan Rudderow"
     ],
     "a": [
      "Jean Knab",
      "Karen Krusen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lolita Hagen",
      "Amy Moore"
     ],
     "a": [
      "Cheryl Tarby",
      "Connie Cao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Greg Taylor",
      "David Corwin"
     ],
     "a": [
      "Jerry Margulies",
      "Raymond Lormel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Steven Heller",
      "William Askin"
     ],
     "a": [
      "Howard Eng",
      "Arnold Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Angela Bartelt",
      "David Corwin"
     ],
     "a": [
      "Cheryl Tarby",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lynn Bresnahan",
      "Rick Weiser"
     ],
     "a": [
      "Connie Cao",
      "Joseph Carrado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Joan Rudderow",
      "Bob Sochor"
     ],
     "a": [
      "Jean Knab",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lolita Hagen",
      "Greg Taylor"
     ],
     "a": [
      "Victoria Marchok",
      "Arnold Witte"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tina Convery",
      "Lynn Bresnahan"
     ],
     "a": [
      "Victoria Marchok",
      "Connie Cao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Angela Bartelt"
     ],
     "a": [
      "Karen Krusen",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "William Askin",
      "Bob Sochor"
     ],
     "a": [
      "Ken Gross",
      "Jerry Margulies"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rick Weiser",
      "David Corwin"
     ],
     "a": [
      "Howard Eng",
      "Joseph Carrado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tina Convery",
      "Bob Sochor"
     ],
     "a": [
      "Karen Krusen",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lolita Hagen",
      "Steven Heller"
     ],
     "a": [
      "Jean Knab",
      "Arnold Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joan Rudderow",
      "Greg Taylor"
     ],
     "a": [
      "Victoria Marchok",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Amy Moore",
      "David Corwin"
     ],
     "a": [
      "Cheryl Tarby",
      "Raymond Lormel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lolita Hagen",
      "Angela Bartelt"
     ],
     "a": [
      "Jean Knab",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amy Moore",
      "Lynn Bresnahan"
     ],
     "a": [
      "Karen Krusen",
      "Victoria Marchok"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Rick Weiser",
      "William Askin"
     ],
     "a": [
      "Raymond Lormel",
      "Joseph Carrado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Greg Taylor",
      "Steven Heller"
     ],
     "a": [
      "Ken Gross",
      "Arnold Witte"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Bounce Malvern",
   "away": "Players Courtyard Wave",
   "time": "2026-04-12T14:30:00",
   "complete": true,
   "homePoints": 655,
   "awayPoints": 530,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christina Samtmann",
      "Jeff Pillar"
     ],
     "a": [
      "Mary Foster",
      "Mark Leusner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kim Slomeana",
      "Dan Callaghan"
     ],
     "a": [
      "Christine Fletcher",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michelle Smith",
      "George Nouaime"
     ],
     "a": [
      "Michelle Lehman",
      "Ed Mendoza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Zalene Corey",
      "Mary Hain"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Michelle Lehman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kim Slomeana",
      "Christina Samtmann"
     ],
     "a": [
      "Luz Bonner",
      "Danya George"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "George Nouaime",
      "Scott Nissenbaum"
     ],
     "a": [
      "Craig Mehnert",
      "Michael Ross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ],
     "a": [
      "Ed Mendoza",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michelle Smith",
      "Dan Callaghan"
     ],
     "a": [
      "Mary Foster",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mary Hain",
      "Jeff Pillar"
     ],
     "a": [
      "Christine Fletcher",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kim Slomeana",
      "George Nouaime"
     ],
     "a": [
      "Luz Bonner",
      "Mark Leusner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 3,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Danya George",
      "Edward Verish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "Kim Slomeana"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michelle Smith",
      "Mary Hain"
     ],
     "a": [
      "Danya George",
      "Michelle Lehman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jeff Pillar",
      "Dan Callaghan"
     ],
     "a": [
      "Craig Mehnert",
      "Mark Leusner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Scott Nissenbaum",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Ed Mendoza",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ],
     "a": [
      "Mary Foster",
      "Mark Leusner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Michelle Smith",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Luz Bonner",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kim Slomeana",
      "Dan Callaghan"
     ],
     "a": [
      "Christine Fletcher",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Mary Hain",
      "George Nouaime"
     ],
     "a": [
      "Danya George",
      "Michael Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kim Slomeana",
      "Zalene Corey"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Luz Bonner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Hain",
      "Christina Samtmann"
     ],
     "a": [
      "Michelle Lehman",
      "Christine Fletcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "George Nouaime",
      "Jeff Pillar"
     ],
     "a": [
      "Craig Mehnert",
      "Michael Ross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ],
     "a": [
      "Edward Verish",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michelle Smith",
      "Jeff Pillar"
     ],
     "a": [
      "Mary Foster",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kim Slomeana",
      "Scott Nissenbaum"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Mark Leusner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Danya George",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Christina Samtmann",
      "Dan Callaghan"
     ],
     "a": [
      "Michelle Lehman",
      "Edward Verish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zalene Corey",
      "Mary Hain"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Michelle Smith",
      "Christina Samtmann"
     ],
     "a": [
      "Luz Bonner",
      "Christine Fletcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "George Nouaime",
      "Scott Nissenbaum"
     ],
     "a": [
      "Craig Mehnert",
      "Mark Leusner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ],
     "a": [
      "Michael Ross",
      "Edward Verish"
     ]
    }
   ],
   "subs": [
    "Mark Leusner"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Flemington Blue",
   "away": "Flemington Green",
   "time": "2026-04-12T15:00:00",
   "complete": true,
   "homePoints": 599,
   "awayPoints": 592,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Annette Marsh",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Holly Ferguson",
      "Hafeez Saheed"
     ],
     "a": [
      "Karen Veninger",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sheila Curran",
      "Ren Mortara"
     ],
     "a": [
      "Nancy Cook",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tao Zhu",
      "Eric Brezina"
     ],
     "a": [
      "Kara Chubrik",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Natalia Fischer",
      "Tao Zhu"
     ],
     "a": [
      "Peggy Matzen",
      "Karen Veninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Stangota",
      "Sharon Oddy"
     ],
     "a": [
      "Kara Chubrik",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ren Mortara",
      "Anthony Leone"
     ],
     "a": [
      "Anthony Deangelis",
      "Dave Sarmir"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Hafeez Saheed",
      "Rob Oddy"
     ],
     "a": [
      "Sam Doctor",
      "David Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sheila Curran",
      "Anthony Leone"
     ],
     "a": [
      "Nancy Cook",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sharon Oddy",
      "Eric Brezina"
     ],
     "a": [
      "Annette Marsh",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Hafeez Saheed"
     ],
     "a": [
      "Peggy Matzen",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sarah Stangota",
      "Ren Mortara"
     ],
     "a": [
      "Kara Chubrik",
      "David Cooley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Stangota",
      "Sheila Curran"
     ],
     "a": [
      "Nancy Cook",
      "Annette Marsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tao Zhu",
      "Natalia Fischer"
     ],
     "a": [
      "Karen Veninger",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eric Brezina",
      "Rob Oddy"
     ],
     "a": [
      "Sam Doctor",
      "David Cooley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Ren Mortara",
      "Hafeez Saheed"
     ],
     "a": [
      "Scott Heist",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Eric Brezina"
     ],
     "a": [
      "Kara Chubrik",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Nancy Cook",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sharon Oddy",
      "Rob Oddy"
     ],
     "a": [
      "Karen Veninger",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Natalia Fischer",
      "Hafeez Saheed"
     ],
     "a": [
      "Annette Marsh",
      "David Cooley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Holly Ferguson",
      "Tao Zhu"
     ],
     "a": [
      "Kara Chubrik",
      "Annette Marsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Sheila Curran"
     ],
     "a": [
      "Peggy Matzen",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ren Mortara",
      "Rob Oddy"
     ],
     "a": [
      "Scott Heist",
      "Dave Sarmir"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anthony Leone",
      "Eric Brezina"
     ],
     "a": [
      "Anthony Deangelis",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Anthony Leone"
     ],
     "a": [
      "Karen Veninger",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
     ],
     "a": [
      "Annette Marsh",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Rob Oddy"
     ],
     "a": [
      "Peggy Matzen",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sheila Curran",
      "Hafeez Saheed"
     ],
     "a": [
      "Kara Chubrik",
      "David Cooley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Sheila Curran"
     ],
     "a": [
      "Karen Veninger",
      "Annette Marsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Stangota",
      "Sharon Oddy"
     ],
     "a": [
      "Peggy Matzen",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anthony Leone",
      "Eric Brezina"
     ],
     "a": [
      "Sam Doctor",
      "Dave Sarmir"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ren Mortara",
      "Rob Oddy"
     ],
     "a": [
      "Scott Heist",
      "David Cooley"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 7,
   "home": "Home Court",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-04-12T15:00:00",
   "complete": true,
   "homePoints": 628,
   "awayPoints": 587,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Denise Rempson",
      "David Cartwright"
     ],
     "a": [
      "Christine Steigerwalt",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ],
     "a": [
      "Nami Huang",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Darlene Fusco",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kathi Sheehan",
      "Brian Perlowitz"
     ],
     "a": [
      "Suzane Sullivan",
      "Scott Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathi Sheehan",
      "Denise Rempson"
     ],
     "a": [
      "Christine Steigerwalt",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rachel Baluyot",
      "Marilyn Janssen"
     ],
     "a": [
      "Denise Stevens",
      "Darlene Fusco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "David Cartwright",
      "Erik Jacobsen"
     ],
     "a": [
      "Ralph Lovelidge",
      "Sean Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Reginald Escusa",
      "Jerry O’Loughlin"
     ],
     "a": [
      "William Robertson",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ],
     "a": [
      "Denise Stevens",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ],
     "a": [
      "Nami Huang",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marilyn Janssen",
      "David Cartwright"
     ],
     "a": [
      "Suzane Sullivan",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lizabeth Hutchinson",
      "Erik Jacobsen"
     ],
     "a": [
      "Lea Frank",
      "Sean Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Denise Rempson",
      "Kathi Sheehan"
     ],
     "a": [
      "Suzane Sullivan",
      "Darlene Fusco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sandra Cassidy",
      "Lizabeth Hutchinson"
     ],
     "a": [
      "Denise Stevens",
      "Nami Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brian Perlowitz",
      "Tim Cassidy"
     ],
     "a": [
      "William Robertson",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Reginald Escusa",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Mark Scott",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Denise Rempson",
      "David Cartwright"
     ],
     "a": [
      "Christine Steigerwalt",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ],
     "a": [
      "Nami Huang",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Darlene Fusco",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Marilyn Janssen",
      "Reginald Escusa"
     ],
     "a": [
      "Lea Frank",
      "William Robertson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Marilyn Janssen",
      "Lizabeth Hutchinson"
     ],
     "a": [
      "Denise Stevens",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Rachel Baluyot",
      "Kathi Sheehan"
     ],
     "a": [
      "Christine Steigerwalt",
      "Lea Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Erik Jacobsen",
      "Reginald Escusa"
     ],
     "a": [
      "William Robertson",
      "Scott Stenroos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tim Cassidy",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Neil Pratesi",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sandra Cassidy",
      "Brian Perlowitz"
     ],
     "a": [
      "Denise Stevens",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lizabeth Hutchinson",
      "Reginald Escusa"
     ],
     "a": [
      "Nami Huang",
      "William Robertson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kathi Sheehan",
      "David Cartwright"
     ],
     "a": [
      "Christine Steigerwalt",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Denise Rempson",
      "Erik Jacobsen"
     ],
     "a": [
      "Lea Frank",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathi Sheehan",
      "Marilyn Janssen"
     ],
     "a": [
      "Denise Stevens",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rachel Baluyot",
      "Denise Rempson"
     ],
     "a": [
      "Christine Steigerwalt",
      "Darlene Fusco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Cartwright",
      "Erik Jacobsen"
     ],
     "a": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jerry O’Loughlin",
      "Brian Perlowitz"
     ],
     "a": [
      "Mark Scott",
      "Scott Stenroos"
     ]
    }
   ],
   "subs": [
    "Marilyn Janssen",
    "William Robertson"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Monroe",
   "away": "ACE",
   "time": "2026-04-12T15:00:00",
   "complete": true,
   "homePoints": 565,
   "awayPoints": 609,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Richard Ricciardi"
     ],
     "a": [
      "Cathy Fiebs",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Karen Rosenberg",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Kelley Batejan",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bonnie Russo",
      "Matthew Colasanto"
     ],
     "a": [
      "Linda Landis",
      "Scott Auty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Linda Seemann",
      "Petra Jones"
     ],
     "a": [
      "Cathy Fiebs",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ],
     "a": [
      "Amy Clayman",
      "Andrea Finnegan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Richard Ricciardi",
      "Jay Scheinman"
     ],
     "a": [
      "Jason Fingerman",
      "Ira Krassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mike Hardy",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Eric Clayman",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Petra Jones",
      "Matthew Colasanto"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Jay Scheinman"
     ],
     "a": [
      "Cathy Fiebs",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Makfinsky",
      "Richard Ricciardi"
     ],
     "a": [
      "Kelley Batejan",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karen Rosenberg",
      "Mike Hardy"
     ],
     "a": [
      "Linda Landis",
      "Ira Krassan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Karen Rosenberg",
      "Bonnie Russo"
     ],
     "a": [
      "Andrea Finnegan",
      "Linda Landis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Makfinsky",
      "Petra Jones"
     ],
     "a": [
      "Kelley Batejan",
      "Amy Clayman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeffrey Quinlan",
      "Matthew Colasanto"
     ],
     "a": [
      "Scott Auty",
      "Pete Certo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mike Hardy",
      "Jay Scheinman"
     ],
     "a": [
      "Eric Clayman",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Petra Jones",
      "Jay Scheinman"
     ],
     "a": [
      "Andrea Schwab",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Matthew Colasanto"
     ],
     "a": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ],
     "a": [
      "Andrea Finnegan",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bonnie Russo",
      "Richard Ricciardi"
     ],
     "a": [
      "Amy Clayman",
      "Eric Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Karen Rosenberg",
      "Linda Seemann"
     ],
     "a": [
      "Cathy Fiebs",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jennifer Makfinsky",
      "Bonnie Russo"
     ],
     "a": [
      "Kelley Batejan",
      "Linda Landis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mike Hardy",
      "Richard Ricciardi"
     ],
     "a": [
      "Pete Certo",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jeffrey Quinlan",
      "Jay Scheinman"
     ],
     "a": [
      "Scott Auty",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Petra Jones",
      "Richard Ricciardi"
     ],
     "a": [
      "Kelley Batejan",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Matthew Colasanto"
     ],
     "a": [
      "Andrea Schwab",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jennifer Makfinsky",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Andrea Finnegan",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Karen Rosenberg",
      "Mike Hardy"
     ],
     "a": [
      "Amy Clayman",
      "Eric Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bonnie Russo",
      "Petra Jones"
     ],
     "a": [
      "Andrea Finnegan",
      "Linda Landis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ],
     "a": [
      "Kelley Batejan",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jeffrey Quinlan",
      "Matthew Colasanto"
     ],
     "a": [
      "Pete Dunn",
      "Jason Fingerman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Mike Hardy",
      "Jay Scheinman"
     ],
     "a": [
      "Scott Auty",
      "Ira Krassan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 8,
   "home": "Players Courtyard Wave",
   "away": "Bounce Malvern",
   "time": "2026-04-19T13:00:00",
   "complete": true,
   "homePoints": 495,
   "awayPoints": 641,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Michael Ross"
     ],
     "a": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barb Mulckhuyse",
      "Tom Giunta"
     ],
     "a": [
      "Kim Slomeana",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michelle Lehman",
      "Craig Mehnert"
     ],
     "a": [
      "Michelle Smith",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Joseph Koerner"
     ],
     "a": [
      "Christina Samtmann",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Michelle Lehman"
     ],
     "a": [
      "Christina Samtmann",
      "Michelle Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Danya George",
      "Christine Fletcher"
     ],
     "a": [
      "Zalene Corey",
      "Kim Slomeana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Edward Verish"
     ],
     "a": [
      "Dan Callaghan",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Ross",
      "Joseph Koerner"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Danya George",
      "Tom Giunta"
     ],
     "a": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ],
     "a": [
      "Michelle Smith",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Michael Ross"
     ],
     "a": [
      "Kim Slomeana",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Edward Verish"
     ],
     "a": [
      "Christina Samtmann",
      "Dan Callaghan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Luz Bonner"
     ],
     "a": [
      "Christina Samtmann",
      "Kim Slomeana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Michelle Lehman"
     ],
     "a": [
      "Zalene Corey",
      "Michelle Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Craig Mehnert",
      "Joseph Koerner"
     ],
     "a": [
      "Jeff Pillar",
      "Dan Callaghan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Michael Ross",
      "Tom Giunta"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Craig Mehnert"
     ],
     "a": [
      "Kim Slomeana",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Barb Mulckhuyse",
      "Tom Giunta"
     ],
     "a": [
      "Christina Samtmann",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Joseph Koerner"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Danya George",
      "Edward Verish"
     ],
     "a": [
      "Michelle Smith",
      "Dan Callaghan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Barb Mulckhuyse",
      "Luz Bonner"
     ],
     "a": [
      "Christina Samtmann",
      "Michelle Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Danya George"
     ],
     "a": [
      "Zalene Corey",
      "Kim Slomeana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Edward Verish",
      "Michael Ross"
     ],
     "a": [
      "Dan Callaghan",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tom Giunta",
      "Joseph Koerner"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Luz Bonner",
      "Joseph Koerner"
     ],
     "a": [
      "Zalene Corey",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ],
     "a": [
      "Christina Samtmann",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Tom Giunta"
     ],
     "a": [
      "Kim Slomeana",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Michael Ross"
     ],
     "a": [
      "Michelle Smith",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Barb Mulckhuyse",
      "Christine Fletcher"
     ],
     "a": [
      "Kim Slomeana",
      "Michelle Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michelle Lehman",
      "Danya George"
     ],
     "a": [
      "Zalene Corey",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Joseph Koerner"
     ],
     "a": [
      "Scott Nissenbaum",
      "Dan Callaghan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Edward Verish",
      "Michael Ross"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Jeff Pillar"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 8,
   "home": "Pickleball Lehigh Valley",
   "away": "Montville",
   "time": "2026-04-19T14:00:00",
   "complete": true,
   "homePoints": 610,
   "awayPoints": 609,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzane Sullivan",
      "Ralph Lovelidge"
     ],
     "a": [
      "Theresa Corderi",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Denise Stevens",
      "Neil Pratesi"
     ],
     "a": [
      "Kristin Duva",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Mark Scott"
     ],
     "a": [
      "Diane Herbst",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Darlene Fusco",
      "Scott Stenroos"
     ],
     "a": [
      "Jill Assante",
      "Bill Gold"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Lea Frank"
     ],
     "a": [
      "Kristen Frendak",
      "Kristin Duva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Denise Stevens",
      "Suzane Sullivan"
     ],
     "a": [
      "Diane Herbst",
      "Theresa Corderi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Neil Pratesi",
      "Sean Wilson"
     ],
     "a": [
      "Jake Denooyer",
      "Jack Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mark Scott",
      "Ray Suhocki"
     ],
     "a": [
      "Tracy Waffenfeld",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Denise Stevens",
      "Ralph Lovelidge"
     ],
     "a": [
      "Diane Herbst",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Suzane Sullivan",
      "Scott Stenroos"
     ],
     "a": [
      "Kristin Duva",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Steigerwalt",
      "Neil Pratesi"
     ],
     "a": [
      "Theresa Corderi",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Nami Huang",
      "Ray Suhocki"
     ],
     "a": [
      "Jill Assante",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzane Sullivan",
      "Darlene Fusco"
     ],
     "a": [
      "Diane Herbst",
      "Kristin Duva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Christine Steigerwalt",
      "Nami Huang"
     ],
     "a": [
      "Kristen Frendak",
      "Jill Assante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ralph Lovelidge",
      "Sean Wilson"
     ],
     "a": [
      "Robert Lee",
      "Jack Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mark Scott",
      "Scott Stenroos"
     ],
     "a": [
      "Ken Bienkowski",
      "Bill Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lea Frank",
      "Ralph Lovelidge"
     ],
     "a": [
      "Kristin Duva",
      "Bill Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Mark Scott"
     ],
     "a": [
      "Theresa Corderi",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Darlene Fusco",
      "Ray Suhocki"
     ],
     "a": [
      "Kristen Frendak",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nami Huang",
      "Neil Pratesi"
     ],
     "a": [
      "Diane Herbst",
      "Jack Tran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Denise Stevens",
      "Darlene Fusco"
     ],
     "a": [
      "Theresa Corderi",
      "Kristen Frendak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nami Huang",
      "Lea Frank"
     ],
     "a": [
      "Kristin Duva",
      "Jill Assante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ],
     "a": [
      "Ken Bienkowski",
      "Robert Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ray Suhocki",
      "Sean Wilson"
     ],
     "a": [
      "Jake Denooyer",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Scott Stenroos"
     ],
     "a": [
      "Diane Herbst",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lea Frank",
      "Sean Wilson"
     ],
     "a": [
      "Theresa Corderi",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Darlene Fusco",
      "Mark Scott"
     ],
     "a": [
      "Kristen Frendak",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Ray Suhocki"
     ],
     "a": [
      "Kristin Duva",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzane Sullivan",
      "Christine Steigerwalt"
     ],
     "a": [
      "Theresa Corderi",
      "Diane Herbst"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nami Huang",
      "Lea Frank"
     ],
     "a": [
      "Kristin Duva",
      "Jill Assante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ],
     "a": [
      "Ken Bienkowski",
      "Jack Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Scott Stenroos",
      "Sean Wilson"
     ],
     "a": [
      "Jake Denooyer",
      "Bill Gold"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 8,
   "home": "Mercer Bucks",
   "away": "Players Courtyard Surge",
   "time": "2026-04-19T14:00:00",
   "complete": true,
   "homePoints": 508,
   "awayPoints": 653,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cheryl Tarby",
      "Jason Belmont"
     ],
     "a": [
      "Heidi Weinroth",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jean Knab",
      "Raymond Lormel"
     ],
     "a": [
      "Angela Bartelt",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sue Glass",
      "Arnold Witte"
     ],
     "a": [
      "Lolita Hagen",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Connie Cao",
      "Howard Eng"
     ],
     "a": [
      "Lynn Bresnahan",
      "Rick Weiser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Victoria Marchok",
      "Connie Cao"
     ],
     "a": [
      "Angela Bartelt",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jean Knab",
      "Sue Glass"
     ],
     "a": [
      "Lolita Hagen",
      "Heidi Weinroth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jason Belmont",
      "Ken Gross"
     ],
     "a": [
      "William Askin",
      "Dennis Higman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Francisco Miranda",
      "Howard Eng"
     ],
     "a": [
      "John Sutton",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Victoria Marchok",
      "Francisco Miranda"
     ],
     "a": [
      "Angela Bartelt",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jean Knab",
      "Ken Gross"
     ],
     "a": [
      "Lolita Hagen",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Connie Cao",
      "Raymond Lormel"
     ],
     "a": [
      "Lynn Bresnahan",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Arnold Witte"
     ],
     "a": [
      "Amy Neckes",
      "Rick Weiser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Connie Cao"
     ],
     "a": [
      "Heidi Weinroth",
      "Lynn Bresnahan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sue Glass",
      "Victoria Marchok"
     ],
     "a": [
      "Lolita Hagen",
      "Angela Bartelt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Howard Eng",
      "Jason Belmont"
     ],
     "a": [
      "Rick Weiser",
      "William Askin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ken Gross",
      "Raymond Lormel"
     ],
     "a": [
      "Greg Taylor",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Jason Belmont"
     ],
     "a": [
      "Amy Neckes",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jean Knab",
      "Arnold Witte"
     ],
     "a": [
      "Lolita Hagen",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Victoria Marchok",
      "Francisco Miranda"
     ],
     "a": [
      "Heidi Weinroth",
      "John Sutton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sue Glass",
      "Ken Gross"
     ],
     "a": [
      "Lynn Bresnahan",
      "William Askin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Glass",
      "Cheryl Tarby"
     ],
     "a": [
      "Lynn Bresnahan",
      "Angela Bartelt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jean Knab",
      "Connie Cao"
     ],
     "a": [
      "Amy Neckes",
      "Heidi Weinroth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Howard Eng",
      "Raymond Lormel"
     ],
     "a": [
      "Rick Weiser",
      "John Sutton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Arnold Witte",
      "Jason Belmont"
     ],
     "a": [
      "Greg Taylor",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jean Knab",
      "Arnold Witte"
     ],
     "a": [
      "Lolita Hagen",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Connie Cao",
      "Francisco Miranda"
     ],
     "a": [
      "Angela Bartelt",
      "John Sutton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sue Glass",
      "Ken Gross"
     ],
     "a": [
      "Amy Neckes",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Victoria Marchok",
      "Howard Eng"
     ],
     "a": [
      "Heidi Weinroth",
      "William Askin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sue Glass",
      "Jean Knab"
     ],
     "a": [
      "Amy Neckes",
      "Lynn Bresnahan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Victoria Marchok",
      "Cheryl Tarby"
     ],
     "a": [
      "Lolita Hagen",
      "Angela Bartelt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Raymond Lormel",
      "Francisco Miranda"
     ],
     "a": [
      "William Askin",
      "John Sutton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jason Belmont",
      "Howard Eng"
     ],
     "a": [
      "Steven Heller",
      "Greg Taylor"
     ]
    }
   ],
   "subs": [
    "Amy Neckes",
    "John Sutton"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "ACE",
   "away": "Monroe",
   "time": "2026-04-19T15:00:00",
   "complete": true,
   "homePoints": 631,
   "awayPoints": 581,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Liane Feyas",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Pete Certo"
     ],
     "a": [
      "Petra Jones",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Terri Pflueger",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Clayman",
      "Pete Dunn"
     ],
     "a": [
      "Bonnie Russo",
      "Derrick Leikness"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelley Batejan",
      "Cathy Fiebs"
     ],
     "a": [
      "Liane Feyas",
      "Terri Pflueger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Dawn Gordon",
      "Amy Clayman"
     ],
     "a": [
      "Debbie Carrano",
      "Petra Jones"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Scott Auty",
      "Jason Fingerman"
     ],
     "a": [
      "Mike Hardy",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eric Clayman",
      "Charlie Kissane"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Terri Pflueger",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Pete Certo"
     ],
     "a": [
      "Bonnie Russo",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Liane Feyas",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Amy Clayman",
      "Pete Dunn"
     ],
     "a": [
      "Debbie Carrano",
      "Derrick Leikness"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cathy Fiebs",
      "Dawn Gordon"
     ],
     "a": [
      "Liane Feyas",
      "Debbie Carrano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelley Batejan",
      "Amy Clayman"
     ],
     "a": [
      "Terri Pflueger",
      "Bonnie Russo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pete Certo",
      "Pete Dunn"
     ],
     "a": [
      "Mike Hardy",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eric Clayman",
      "Charlie Kissane"
     ],
     "a": [
      "Bob Debarge",
      "Derrick Leikness"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelley Batejan",
      "Pete Dunn"
     ],
     "a": [
      "Debbie Carrano",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ],
     "a": [
      "Bonnie Russo",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Scott Auty"
     ],
     "a": [
      "Petra Jones",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amy Clayman",
      "Eric Clayman"
     ],
     "a": [
      "Terri Pflueger",
      "Derrick Leikness"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelley Batejan",
      "Amy Clayman"
     ],
     "a": [
      "Debbie Carrano",
      "Petra Jones"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cathy Fiebs",
      "Dawn Gordon"
     ],
     "a": [
      "Liane Feyas",
      "Bonnie Russo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Pete Certo",
      "Pete Dunn"
     ],
     "a": [
      "Mike Hardy",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jason Fingerman",
      "Charlie Kissane"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Dawn Gordon",
      "Pete Dunn"
     ],
     "a": [
      "Liane Feyas",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ],
     "a": [
      "Terri Pflueger",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Scott Auty"
     ],
     "a": [
      "Debbie Carrano",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amy Clayman",
      "Eric Clayman"
     ],
     "a": [
      "Petra Jones",
      "Derrick Leikness"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Kelley Batejan"
     ],
     "a": [
      "Liane Feyas",
      "Terri Pflueger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Amy Clayman"
     ],
     "a": [
      "Petra Jones",
      "Bonnie Russo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jason Fingerman",
      "Pete Certo"
     ],
     "a": [
      "Mike Hardy",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Scott Auty",
      "Charlie Kissane"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Derrick Leikness"
     ]
    }
   ],
   "subs": [
    "Liane Feyas",
    "Derrick Leikness",
    "Terri Pflueger"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Home Court",
   "away": "Flemington Green",
   "time": "2026-04-19T15:00:00",
   "complete": true,
   "homePoints": 645,
   "awayPoints": 586,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kathi Sheehan",
      "Brian Perlowitz"
     ],
     "a": [
      "Karen Veninger",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Baluyot",
      "Ben Cheng"
     ],
     "a": [
      "Nancy Cook",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Aarti Aziz",
      "Erik Jacobsen"
     ],
     "a": [
      "Peggy Matzen",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Denise Rempson",
      "David Cartwright"
     ],
     "a": [
      "Diane Bracco",
      "Dan Amabile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kathi Sheehan",
      "Lizabeth Hutchinson"
     ],
     "a": [
      "Marianne Rosato",
      "Kara Chubrik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rachel Baluyot",
      "Denise Rempson"
     ],
     "a": [
      "Peggy Matzen",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Reginald Escusa",
      "Tim Cassidy"
     ],
     "a": [
      "Anthony Deangelis",
      "Brett Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Cartwright",
      "Brian Perlowitz"
     ],
     "a": [
      "Sam Doctor",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Mary Ann Villamor",
      "Brian Perlowitz"
     ],
     "a": [
      "Diane Bracco",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aarti Aziz",
      "David Cartwright"
     ],
     "a": [
      "Nancy Cook",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathi Sheehan",
      "Erik Jacobsen"
     ],
     "a": [
      "Karen Veninger",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lizabeth Hutchinson",
      "Reginald Escusa"
     ],
     "a": [
      "Peggy Matzen",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Denise Rempson",
      "Kathi Sheehan"
     ],
     "a": [
      "Karen Veninger",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rachel Baluyot",
      "Aarti Aziz"
     ],
     "a": [
      "Marianne Rosato",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Erik Jacobsen",
      "Tim Cassidy"
     ],
     "a": [
      "Anthony Deangelis",
      "Dan Amabile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Cartwright",
      "Ben Cheng"
     ],
     "a": [
      "Sam Doctor",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Denise Rempson",
      "Ben Cheng"
     ],
     "a": [
      "Diane Bracco",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lizabeth Hutchinson",
      "Brian Perlowitz"
     ],
     "a": [
      "Kara Chubrik",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Aarti Aziz",
      "Reginald Escusa"
     ],
     "a": [
      "Peggy Matzen",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mary Ann Villamor",
      "Tim Cassidy"
     ],
     "a": [
      "Nancy Cook",
      "Sam Doctor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lizabeth Hutchinson",
      "Mary Ann Villamor"
     ],
     "a": [
      "Peggy Matzen",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rachel Baluyot",
      "Kathi Sheehan"
     ],
     "a": [
      "Kara Chubrik",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Erik Jacobsen",
      "Reginald Escusa"
     ],
     "a": [
      "Anthony Deangelis",
      "Sam Doctor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "David Cartwright",
      "Tim Cassidy"
     ],
     "a": [
      "Dan Amabile",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Aarti Aziz",
      "Erik Jacobsen"
     ],
     "a": [
      "Karen Veninger",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kathi Sheehan",
      "Ben Cheng"
     ],
     "a": [
      "Marianne Rosato",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Denise Rempson",
      "David Cartwright"
     ],
     "a": [
      "Diane Bracco",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ],
     "a": [
      "Kara Chubrik",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Baluyot",
      "Denise Rempson"
     ],
     "a": [
      "Karen Veninger",
      "Diane Bracco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mary Ann Villamor",
      "Aarti Aziz"
     ],
     "a": [
      "Marianne Rosato",
      "Kara Chubrik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Cartwright",
      "Reginald Escusa"
     ],
     "a": [
      "Scott Heist",
      "Sam Doctor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tim Cassidy",
      "Erik Jacobsen"
     ],
     "a": [
      "Anthony Deangelis",
      "Brett Wilson"
     ]
    }
   ],
   "subs": [
    "Aarti Aziz",
    "Ben Cheng"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Players Courtyard Wave",
   "away": "Monroe",
   "time": "2026-04-25T13:00:00",
   "complete": true,
   "homePoints": 565,
   "awayPoints": 602,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Joseph Koerner"
     ],
     "a": [
      "Olga Turova",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Barb Mulckhuyse",
      "Michael Ross"
     ],
     "a": [
      "Karen Rosenberg",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Foster",
      "Craig Mehnert"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michelle Lehman",
      "Mark Leusner"
     ],
     "a": [
      "Debbie Carrano",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Danya George"
     ],
     "a": [
      "Karen Rosenberg",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Barb Mulckhuyse",
      "Michelle Lehman"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Debbie Carrano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tom Giunta",
      "Joseph Koerner"
     ],
     "a": [
      "Mike Hardy",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Michael Ross"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mary Foster",
      "Tom Giunta"
     ],
     "a": [
      "Karen Rosenberg",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Mark Leusner"
     ],
     "a": [
      "Maureen Bruno",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Joseph Koerner"
     ],
     "a": [
      "Olga Turova",
      "Bob Debarge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Danya George",
      "Jill Nixon"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Maureen Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mary Foster",
      "Michelle Lehman"
     ],
     "a": [
      "Karen Rosenberg",
      "Debbie Carrano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Ross",
      "Tom Giunta"
     ],
     "a": [
      "Jay Scheinman",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Mark Leusner"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Danya George",
      "Joseph Koerner"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Michael Ross"
     ],
     "a": [
      "Olga Turova",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michelle Lehman",
      "Craig Mehnert"
     ],
     "a": [
      "Maureen Bruno",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christine Fletcher",
      "Tom Giunta"
     ],
     "a": [
      "Karen Rosenberg",
      "Mike Hardy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Barb Mulckhuyse",
      "Jill Nixon"
     ],
     "a": [
      "Debbie Carrano",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mary Foster",
      "Michelle Lehman"
     ],
     "a": [
      "Karen Rosenberg",
      "Jennifer Makfinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joseph Koerner",
      "Mark Leusner"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Craig Mehnert",
      "Michael Ross"
     ],
     "a": [
      "Jay Scheinman",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mary Foster",
      "Craig Mehnert"
     ],
     "a": [
      "Olga Turova",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Mark Leusner"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Barb Mulckhuyse",
      "Joseph Koerner"
     ],
     "a": [
      "Debbie Carrano",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Danya George",
      "Tom Giunta"
     ],
     "a": [
      "Maureen Bruno",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ],
     "a": [
      "Maureen Bruno",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Michelle Lehman"
     ],
     "a": [
      "Debbie Carrano",
      "Olga Turova"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Ross",
      "Joseph Koerner"
     ],
     "a": [
      "Mike Hardy",
      "Jay Scheinman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Craig Mehnert",
      "Mark Leusner"
     ],
     "a": [
      "Bob Debarge",
      "Paul Glickenhaus"
     ]
    }
   ],
   "subs": [
    "Mark Leusner",
    "Paul Glickenhaus",
    "Jill Nixon"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Pickleball Lehigh Valley",
   "away": "Flemington Blue",
   "time": "2026-04-26T14:00:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 644,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Ralph Lovelidge"
     ],
     "a": [
      "Sarah Stangota",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nami Huang",
      "Scott Stenroos"
     ],
     "a": [
      "Natalia Fischer",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Denise Stevens",
      "Neil Pratesi"
     ],
     "a": [
      "Gail Hannagan",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lea Frank",
      "Ray Suhocki"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzane Sullivan",
      "Christine Steigerwalt"
     ],
     "a": [
      "Sarah Stangota",
      "Sharon Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Denise Stevens",
      "Darlene Fusco"
     ],
     "a": [
      "Cathy Matko",
      "Natalia Fischer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ],
     "a": [
      "Eric Brezina",
      "Paul Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sean Wilson",
      "Ray Suhocki"
     ],
     "a": [
      "Ren Mortara",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Scott Stenroos"
     ],
     "a": [
      "Tao Zhu",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nami Huang",
      "Neil Pratesi"
     ],
     "a": [
      "Sharon Oddy",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Denise Stevens",
      "Sean Wilson"
     ],
     "a": [
      "Cathy Matko",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Darlene Fusco",
      "Mark Scott"
     ],
     "a": [
      "Gail Hannagan",
      "Ren Mortara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Darlene Fusco"
     ],
     "a": [
      "Tao Zhu",
      "Natalia Fischer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nami Huang",
      "Lea Frank"
     ],
     "a": [
      "Gail Hannagan",
      "Sarah Stangota"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ralph Lovelidge",
      "Mark Scott"
     ],
     "a": [
      "Eric Brezina",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Neil Pratesi",
      "Ray Suhocki"
     ],
     "a": [
      "Paul Phillips",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Denise Stevens",
      "Scott Stenroos"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Sean Wilson"
     ],
     "a": [
      "Cathy Matko",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Steigerwalt",
      "Ralph Lovelidge"
     ],
     "a": [
      "Sarah Stangota",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lea Frank",
      "Mark Scott"
     ],
     "a": [
      "Natalia Fischer",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Nami Huang"
     ],
     "a": [
      "Tao Zhu",
      "Natalia Fischer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Suzane Sullivan",
      "Denise Stevens"
     ],
     "a": [
      "Gail Hannagan",
      "Cathy Matko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Scott Stenroos",
      "Sean Wilson"
     ],
     "a": [
      "Ren Mortara",
      "Paul Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mark Scott",
      "Ray Suhocki"
     ],
     "a": [
      "Hafeez Saheed",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Christine Steigerwalt",
      "Neil Pratesi"
     ],
     "a": [
      "Sarah Stangota",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Darlene Fusco",
      "Sean Wilson"
     ],
     "a": [
      "Tao Zhu",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nami Huang",
      "Ray Suhocki"
     ],
     "a": [
      "Sharon Oddy",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lea Frank",
      "Ralph Lovelidge"
     ],
     "a": [
      "Gail Hannagan",
      "Eric Brezina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Darlene Fusco",
      "Lea Frank"
     ],
     "a": [
      "Sarah Stangota",
      "Cathy Matko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Suzane Sullivan",
      "Denise Stevens"
     ],
     "a": [
      "Gail Hannagan",
      "Sharon Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Mark Scott",
      "Scott Stenroos"
     ],
     "a": [
      "Rob Oddy",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ],
     "a": [
      "Paul Phillips",
      "Eric Brezina"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 9,
   "home": "Mercer Bucks",
   "away": "Bounce Malvern",
   "time": "2026-04-26T14:00:00",
   "complete": true,
   "homePoints": 553,
   "awayPoints": 642,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Cheryl Tarby",
      "Ken Gross"
     ],
     "a": [
      "Kim Slomeana",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sue Glass",
      "Jason Belmont"
     ],
     "a": [
      "Christina Samtmann",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jean Knab",
      "Jerry Margulies"
     ],
     "a": [
      "Zalene Corey",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Howard Eng"
     ],
     "a": [
      "Michelle Smith",
      "Calvin Giles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sue Glass",
      "Victoria Monaghan"
     ],
     "a": [
      "Mary Hain",
      "Kim Slomeana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cheryl Tarby",
      "Jean Knab"
     ],
     "a": [
      "Zalene Corey",
      "Michelle Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jerry Margulies",
      "Joseph Carrado"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Howard Eng",
      "Francisco Miranda"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Victoria Monaghan",
      "Howard Eng"
     ],
     "a": [
      "Christina Samtmann",
      "Calvin Giles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Jason Belmont"
     ],
     "a": [
      "Mary Hain",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Francisco Miranda"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jean Knab",
      "Ken Gross"
     ],
     "a": [
      "Kim Slomeana",
      "Jeff Pillar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Victoria Monaghan",
      "Cheryl Tarby"
     ],
     "a": [
      "Kim Slomeana",
      "Michelle Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jean Knab",
      "Sue Glass"
     ],
     "a": [
      "Zalene Corey",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jerry Margulies",
      "Jason Belmont"
     ],
     "a": [
      "Dan Callaghan",
      "George Nouaime"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ken Gross",
      "Joseph Carrado"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Victoria Monaghan",
      "Ken Gross"
     ],
     "a": [
      "Christina Samtmann",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sue Glass",
      "Howard Eng"
     ],
     "a": [
      "Mary Hain",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Francisco Miranda"
     ],
     "a": [
      "Zalene Corey",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elizabeth Dziekonska",
      "Joseph Carrado"
     ],
     "a": [
      "Kim Slomeana",
      "Calvin Giles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sue Glass",
      "Cheryl Tarby"
     ],
     "a": [
      "Christina Samtmann",
      "Michelle Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Elizabeth Dziekonska",
      "Jean Knab"
     ],
     "a": [
      "Zalene Corey",
      "Mary Hain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ken Gross",
      "Jason Belmont"
     ],
     "a": [
      "Dan Callaghan",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Howard Eng",
      "Jerry Margulies"
     ],
     "a": [
      "Scott Nissenbaum",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sue Glass",
      "Joseph Carrado"
     ],
     "a": [
      "Michelle Smith",
      "Calvin Giles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Victoria Monaghan",
      "Francisco Miranda"
     ],
     "a": [
      "Mary Hain",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cheryl Tarby",
      "Howard Eng"
     ],
     "a": [
      "Kim Slomeana",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jean Knab",
      "Jerry Margulies"
     ],
     "a": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Elizabeth Dziekonska"
     ],
     "a": [
      "Michelle Smith",
      "Mary Hain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sue Glass",
      "Jean Knab"
     ],
     "a": [
      "Kim Slomeana",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Francisco Miranda",
      "Joseph Carrado"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ken Gross",
      "Jason Belmont"
     ],
     "a": [
      "Dan Callaghan",
      "George Nouaime"
     ]
    }
   ],
   "subs": [
    "Victoria Monaghan"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "ACE",
   "away": "Players Courtyard Surge",
   "time": "2026-04-26T15:00:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 650,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Andrea Schwab",
      "Jason Fingerman"
     ],
     "a": [
      "Joan Rudderow",
      "Bob Sochor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Colleen Derose",
      "Marc Schwegel"
     ],
     "a": [
      "Dawn Kempton",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Lolita Hagen",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dawn Gordon",
      "Pete Dunn"
     ],
     "a": [
      "Angela Bartelt",
      "Steven Heller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Linda Landis",
      "Colleen Derose"
     ],
     "a": [
      "Angela Bartelt",
      "Joan Rudderow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrea Schwab",
      "Cathy Fiebs"
     ],
     "a": [
      "Amy Moore",
      "Dawn Kempton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jason Fingerman",
      "Lawrence Padersky"
     ],
     "a": [
      "David Corwin",
      "Bob Sochor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marc Schwegel",
      "Scott Auty"
     ],
     "a": [
      "Greg Taylor",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Schwab",
      "Jason Fingerman"
     ],
     "a": [
      "Dawn Kempton",
      "Bob Sochor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Colleen Derose",
      "Marc Schwegel"
     ],
     "a": [
      "Joan Rudderow",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Amy Moore",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dawn Gordon",
      "Pete Dunn"
     ],
     "a": [
      "Lolita Hagen",
      "Steven Heller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Colleen Derose",
      "Linda Landis"
     ],
     "a": [
      "Amy Moore",
      "Joan Rudderow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Andrea Schwab"
     ],
     "a": [
      "Angela Bartelt",
      "Dawn Kempton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jason Fingerman",
      "Lawrence Padersky"
     ],
     "a": [
      "William Askin",
      "Bob Sochor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marc Schwegel",
      "Scott Auty"
     ],
     "a": [
      "Steven Heller",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Linda Landis",
      "Jason Fingerman"
     ],
     "a": [
      "Lolita Hagen",
      "Bob Sochor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 34,
     "as": 32,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Dawn Kempton",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dawn Gordon",
      "Marc Schwegel"
     ],
     "a": [
      "Amy Moore",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Colleen Derose",
      "Pete Dunn"
     ],
     "a": [
      "Angela Bartelt",
      "Greg Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Linda Landis"
     ],
     "a": [
      "Amy Moore",
      "Dawn Kempton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Colleen Derose",
      "Andrea Schwab"
     ],
     "a": [
      "Joan Rudderow",
      "Lolita Hagen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "Steven Heller",
      "Bob Sochor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Pete Dunn",
      "Marc Schwegel"
     ],
     "a": [
      "William Askin",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ],
     "a": [
      "Joan Rudderow",
      "Bob Sochor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrea Schwab",
      "Marc Schwegel"
     ],
     "a": [
      "Amy Moore",
      "David Corwin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dawn Gordon",
      "Lawrence Padersky"
     ],
     "a": [
      "Angela Bartelt",
      "William Askin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Colleen Derose",
      "Pete Dunn"
     ],
     "a": [
      "Lolita Hagen",
      "Greg Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Cathy Fiebs",
      "Dawn Gordon"
     ],
     "a": [
      "Lolita Hagen",
      "Dawn Kempton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrea Schwab",
      "Colleen Derose"
     ],
     "a": [
      "Angela Bartelt",
      "Joan Rudderow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lawrence Padersky",
      "Marc Schwegel"
     ],
     "a": [
      "Greg Taylor",
      "Bob Sochor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "William Askin",
      "David Corwin"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 9,
   "home": "Monroe",
   "away": "Players Courtyard Wave",
   "time": "2026-04-26T15:00:00",
   "complete": true,
   "homePoints": 619,
   "awayPoints": 532,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Petra Jones",
      "Matthew Colasanto"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karen Rosenberg",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Michelle Lehman",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maureen Bruno",
      "Richard Ricciardi"
     ],
     "a": [
      "Jill Nixon",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jennifer Makfinsky",
      "Jay Scheinman"
     ],
     "a": [
      "Danya George",
      "Ed Mendoza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Petra Jones",
      "Jennifer Makfinsky"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Michelle Lehman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Maureen Bruno",
      "Bonnie Russo"
     ],
     "a": [
      "Danya George",
      "Jill Nixon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeffrey Quinlan",
      "Richard Ricciardi"
     ],
     "a": [
      "Tom Giunta",
      "Craig Mehnert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Bob Debarge",
      "Jay Scheinman"
     ],
     "a": [
      "Ed Mendoza",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jennifer Makfinsky",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Petra Jones",
      "Jay Scheinman"
     ],
     "a": [
      "Michelle Lehman",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bonnie Russo",
      "Matthew Colasanto"
     ],
     "a": [
      "Danya George",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Karen Rosenberg",
      "Bob Debarge"
     ],
     "a": [
      "Jill Nixon",
      "Michael Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Rosenberg",
      "Bonnie Russo"
     ],
     "a": [
      "Michelle Lehman",
      "Jill Nixon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Maureen Bruno",
      "Petra Jones"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Danya George"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bob Debarge",
      "Matthew Colasanto"
     ],
     "a": [
      "Craig Mehnert",
      "Tom Giunta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jay Scheinman",
      "Richard Ricciardi"
     ],
     "a": [
      "Michael Ross",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Makfinsky",
      "Bob Debarge"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Maureen Bruno",
      "Matthew Colasanto"
     ],
     "a": [
      "Michelle Lehman",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Rosenberg",
      "Richard Ricciardi"
     ],
     "a": [
      "Danya George",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bonnie Russo",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Jill Nixon",
      "Craig Mehnert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Petra Jones",
      "Bonnie Russo"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Jill Nixon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karen Rosenberg",
      "Jennifer Makfinsky"
     ],
     "a": [
      "Danya George",
      "Michelle Lehman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jeffrey Quinlan",
      "Jay Scheinman"
     ],
     "a": [
      "Craig Mehnert",
      "Ed Mendoza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Richard Ricciardi",
      "Matthew Colasanto"
     ],
     "a": [
      "Tom Giunta",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Maureen Bruno",
      "Richard Ricciardi"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Jennifer Makfinsky",
      "Bob Debarge"
     ],
     "a": [
      "Michelle Lehman",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Bonnie Russo",
      "Jay Scheinman"
     ],
     "a": [
      "Jill Nixon",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Karen Rosenberg",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Danya George",
      "Michael Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Jill Nixon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Maureen Bruno",
      "Bonnie Russo"
     ],
     "a": [
      "Danya George",
      "Michelle Lehman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Bob Debarge",
      "Jay Scheinman"
     ],
     "a": [
      "Craig Mehnert",
      "Joseph Koerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeffrey Quinlan",
      "Matthew Colasanto"
     ],
     "a": [
      "Michael Ross",
      "Tom Giunta"
     ]
    }
   ],
   "subs": [
    "Jill Nixon"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Montville",
   "away": "Home Court",
   "time": "2026-04-26T15:00:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 605,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Patrick Phalen"
     ],
     "a": [
      "Denise Rempson",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 20,
     "h": [
      "Diane Herbst",
      "Robert Lee"
     ],
     "a": [
      "Kathi Sheehan",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kristin Duva",
      "Jack Tran"
     ],
     "a": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Renee Froeberg",
      "Bill Gold"
     ],
     "a": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Theresa Corderi",
      "Kristin Duva"
     ],
     "a": [
      "Sandra Cassidy",
      "Lizabeth Hutchinson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Diane Herbst",
      "Rani Gundavarapu"
     ],
     "a": [
      "Denise Rempson",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Mark Garner",
      "Eric Kirschner"
     ],
     "a": [
      "David Cartwright",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jack Tran",
      "Robert Lee"
     ],
     "a": [
      "Erik Jacobsen",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kristen Frendak",
      "Bill Gold"
     ],
     "a": [
      "Denise Rempson",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Diane Herbst",
      "Jack Tran"
     ],
     "a": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Renee Froeberg",
      "Patrick Phalen"
     ],
     "a": [
      "Jayne Mayer",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Theresa Corderi",
      "Robert Lee"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "William Hutchinson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rani Gundavarapu",
      "Kristin Duva"
     ],
     "a": [
      "Denise Rempson",
      "Lizabeth Hutchinson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Theresa Corderi",
      "Renee Froeberg"
     ],
     "a": [
      "Sandra Cassidy",
      "Jayne Mayer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robert Lee",
      "Eric Kirschner"
     ],
     "a": [
      "Erik Jacobsen",
      "Tim Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mark Garner",
      "Bill Gold"
     ],
     "a": [
      "David Cartwright",
      "William Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Theresa Corderi",
      "Jack Tran"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Diane Herbst",
      "Eric Kirschner"
     ],
     "a": [
      "Denise Rempson",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rani Gundavarapu",
      "Patrick Phalen"
     ],
     "a": [
      "Rachel Baluyot",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kristin Duva",
      "Mark Garner"
     ],
     "a": [
      "Jayne Mayer",
      "Tim Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rani Gundavarapu",
      "Kristen Frendak"
     ],
     "a": [
      "Denise Rempson",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Diane Herbst",
      "Kristin Duva"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Sandra Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Robert Lee",
      "Bill Gold"
     ],
     "a": [
      "Reginald Escusa",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jack Tran",
      "Eric Kirschner"
     ],
     "a": [
      "Tim Cassidy",
      "William Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kristin Duva",
      "Mark Garner"
     ],
     "a": [
      "Denise Rempson",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rani Gundavarapu",
      "Bill Gold"
     ],
     "a": [
      "Rachel Baluyot",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Theresa Corderi",
      "Robert Lee"
     ],
     "a": [
      "Jayne Mayer",
      "William Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Renee Froeberg",
      "Jack Tran"
     ],
     "a": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kristin Duva",
      "Renee Froeberg"
     ],
     "a": [
      "Rachel Baluyot",
      "Sandra Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Theresa Corderi",
      "Diane Herbst"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Denise Rempson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Eric Kirschner",
      "Patrick Phalen"
     ],
     "a": [
      "Brian Perlowitz",
      "David Cartwright"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jack Tran",
      "Robert Lee"
     ],
     "a": [
      "Reginald Escusa",
      "Erik Jacobsen"
     ]
    }
   ],
   "subs": [
    "Renee Froeberg"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Players Courtyard Wave",
   "away": "Mercer Bucks",
   "time": "2026-05-03T13:00:00",
   "complete": true,
   "homePoints": 569,
   "awayPoints": 591,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danya George",
      "Michael Ross"
     ],
     "a": [
      "Karen Krusen",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barb Mulckhuyse",
      "Joseph Koerner"
     ],
     "a": [
      "Cheryl Tarby",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christine Fletcher",
      "Craig Mehnert"
     ],
     "a": [
      "Jean Knab",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Foster",
      "David Mcdonough"
     ],
     "a": [
      "Sue Glass",
      "Ken Gross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Barb Mulckhuyse",
      "Danya George"
     ],
     "a": [
      "Sue Glass",
      "Elizabeth Dziekonska"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mary Foster",
      "Luz Bonner"
     ],
     "a": [
      "Jean Knab",
      "Connie Cao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Michael Ross",
      "Edward Verish"
     ],
     "a": [
      "Jason Belmont",
      "Jerry Margulies"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Craig Mehnert",
      "Tom Giunta"
     ],
     "a": [
      "Ken Gross",
      "Arnold Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Luz Bonner",
      "David Mcdonough"
     ],
     "a": [
      "Cheryl Tarby",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Danya George",
      "Joseph Koerner"
     ],
     "a": [
      "Sue Glass",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Edward Verish"
     ],
     "a": [
      "Connie Cao",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Barb Mulckhuyse",
      "Michael Ross"
     ],
     "a": [
      "Karen Krusen",
      "Arnold Witte"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Danya George"
     ],
     "a": [
      "Jean Knab",
      "Karen Krusen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ],
     "a": [
      "Cheryl Tarby",
      "Elizabeth Dziekonska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Mcdonough",
      "Craig Mehnert"
     ],
     "a": [
      "Raymond Lormel",
      "Howard Eng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tom Giunta",
      "Joseph Koerner"
     ],
     "a": [
      "Jason Belmont",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Tom Giunta"
     ],
     "a": [
      "Sue Glass",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Michael Ross"
     ],
     "a": [
      "Jean Knab",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Danya George",
      "Craig Mehnert"
     ],
     "a": [
      "Connie Cao",
      "Arnold Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mary Foster",
      "Edward Verish"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barb Mulckhuyse",
      "Luz Bonner"
     ],
     "a": [
      "Sue Glass",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mary Foster",
      "Michelle Lehman"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Karen Krusen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Ross",
      "Joseph Koerner"
     ],
     "a": [
      "Ken Gross",
      "Raymond Lormel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Craig Mehnert",
      "David Mcdonough"
     ],
     "a": [
      "Howard Eng",
      "Arnold Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Mary Foster",
      "Tom Giunta"
     ],
     "a": [
      "Jean Knab",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Fletcher",
      "David Mcdonough"
     ],
     "a": [
      "Connie Cao",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barb Mulckhuyse",
      "Craig Mehnert"
     ],
     "a": [
      "Karen Krusen",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Danya George",
      "Edward Verish"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Jason Belmont"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Barb Mulckhuyse",
      "Mary Foster"
     ],
     "a": [
      "Cheryl Tarby",
      "Connie Cao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Michelle Lehman"
     ],
     "a": [
      "Sue Glass",
      "Jean Knab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Craig Mehnert",
      "Joseph Koerner"
     ],
     "a": [
      "Jerry Margulies",
      "Arnold Witte"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "David Mcdonough",
      "Michael Ross"
     ],
     "a": [
      "Ken Gross",
      "Jason Belmont"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 10,
   "home": "Players Courtyard Surge",
   "away": "Monroe",
   "time": "2026-05-03T13:00:00",
   "complete": true,
   "homePoints": 651,
   "awayPoints": 595,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tina Convery",
      "William Askin"
     ],
     "a": [
      "Maureen Bruno",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Angela Bartelt",
      "David Corwin"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Heidi Weinroth",
      "Richard Fox"
     ],
     "a": [
      "Karen Rosenberg",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dawn Kempton",
      "Dennis Higman"
     ],
     "a": [
      "Petra Jones",
      "Jay Scheinman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Angela Bartelt",
      "Lynn Bresnahan"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joan Rudderow",
      "Dawn Kempton"
     ],
     "a": [
      "Maureen Bruno",
      "Olga Turova"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Richard Fox",
      "William Askin"
     ],
     "a": [
      "Matthew Colasanto",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rick Weiser",
      "Steven Heller"
     ],
     "a": [
      "Mike Hardy",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Olga Turova",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lynn Bresnahan",
      "Steven Heller"
     ],
     "a": [
      "Petra Jones",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dawn Kempton",
      "David Corwin"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Heidi Weinroth",
      "Rick Weiser"
     ],
     "a": [
      "Maureen Bruno",
      "Jay Scheinman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tina Convery",
      "Angela Bartelt"
     ],
     "a": [
      "Olga Turova",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Lynn Bresnahan",
      "Heidi Weinroth"
     ],
     "a": [
      "Petra Jones",
      "Jennifer Makfinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Richard Fox",
      "David Corwin"
     ],
     "a": [
      "Bob Debarge",
      "Mike Hardy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dennis Higman",
      "William Askin"
     ],
     "a": [
      "Richard Ricciardi",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Tina Convery",
      "Rick Weiser"
     ],
     "a": [
      "Maureen Bruno",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Angela Bartelt",
      "Dennis Higman"
     ],
     "a": [
      "Petra Jones",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dawn Kempton",
      "Steven Heller"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "David Corwin"
     ],
     "a": [
      "Karen Rosenberg",
      "Mike Hardy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lynn Bresnahan",
      "Dawn Kempton"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Heidi Weinroth",
      "Joan Rudderow"
     ],
     "a": [
      "Karen Rosenberg",
      "Maureen Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Corwin",
      "William Askin"
     ],
     "a": [
      "Mike Hardy",
      "Jay Scheinman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richard Fox",
      "Rick Weiser"
     ],
     "a": [
      "Matthew Colasanto",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joan Rudderow",
      "Richard Fox"
     ],
     "a": [
      "Maureen Bruno",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Angela Bartelt",
      "Rick Weiser"
     ],
     "a": [
      "Petra Jones",
      "Matthew Colasanto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dawn Kempton",
      "Dennis Higman"
     ],
     "a": [
      "Karen Rosenberg",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tina Convery",
      "Steven Heller"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Lynn Bresnahan"
     ],
     "a": [
      "Petra Jones",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "Tina Convery"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dennis Higman",
      "David Corwin"
     ],
     "a": [
      "Bob Debarge",
      "Mike Hardy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Steven Heller",
      "William Askin"
     ],
     "a": [
      "Richard Ricciardi",
      "Matthew Colasanto"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 10,
   "home": "ACE",
   "away": "Bounce Malvern",
   "time": "2026-05-03T15:00:00",
   "complete": true,
   "homePoints": 635,
   "awayPoints": 516,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrea Schwab",
      "Jason Fingerman"
     ],
     "a": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Linda Landis",
      "Scott Auty"
     ],
     "a": [
      "Kim Slomeana",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Colleen Derose",
      "Marc Schwegel"
     ],
     "a": [
      "Mary Hain",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Lawrence Padersky"
     ],
     "a": [
      "Randy Kraftsow",
      "Jeff Pillar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andrea Schwab",
      "Kelley Batejan"
     ],
     "a": [
      "Zalene Corey",
      "Mary Hain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Amy Clayman",
      "Colleen Derose"
     ],
     "a": [
      "Kim Slomeana",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Charlie Kissane",
      "Ira Krassan"
     ],
     "a": [
      "Calvin Giles",
      "Jeff Pillar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kelley Batejan",
      "Lawrence Padersky"
     ],
     "a": [
      "Kim Slomeana",
      "Calvin Giles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Linda Landis",
      "Scott Auty"
     ],
     "a": [
      "Randy Kraftsow",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Andrea Schwab",
      "Jason Fingerman"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Colleen Derose",
      "Marc Schwegel"
     ],
     "a": [
      "Christina Samtmann",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amy Clayman",
      "Linda Landis"
     ],
     "a": [
      "Mary Hain",
      "Christina Samtmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Andrea Schwab",
      "Kelley Batejan"
     ],
     "a": [
      "Zalene Corey",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Scott Auty",
      "Ira Krassan"
     ],
     "a": [
      "Dan Callaghan",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Charlie Kissane",
      "Lawrence Padersky"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Colleen Derose",
      "Ira Krassan"
     ],
     "a": [
      "Mary Hain",
      "Calvin Giles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Landis",
      "Lawrence Padersky"
     ],
     "a": [
      "Kim Slomeana",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Christina Samtmann",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrea Schwab",
      "Marc Schwegel"
     ],
     "a": [
      "Zalene Corey",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amy Clayman",
      "Colleen Derose"
     ],
     "a": [
      "Mary Hain",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Linda Landis",
      "Kelley Batejan"
     ],
     "a": [
      "Kim Slomeana",
      "Zalene Corey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Dan Callaghan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Charlie Kissane",
      "Marc Schwegel"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Colleen Derose",
      "Ira Krassan"
     ],
     "a": [
      "Christina Samtmann",
      "Calvin Giles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Schwab",
      "Marc Schwegel"
     ],
     "a": [
      "Randy Kraftsow",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Linda Landis",
      "Lawrence Padersky"
     ],
     "a": [
      "Kim Slomeana",
      "Dan Callaghan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelley Batejan",
      "Amy Clayman"
     ],
     "a": [
      "Mary Hain",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Andrea Schwab",
      "Colleen Derose"
     ],
     "a": [
      "Zalene Corey",
      "Christina Samtmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jason Fingerman",
      "Marc Schwegel"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Scott Auty",
      "Lawrence Padersky"
     ],
     "a": [
      "Dan Callaghan",
      "Jeff Pillar"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 10,
   "home": "Flemington Green",
   "away": "Montville",
   "time": "2026-05-03T15:00:00",
   "complete": true,
   "homePoints": 592,
   "awayPoints": 648,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Annette Marsh",
      "Anthony Deangelis"
     ],
     "a": [
      "Theresa Corderi",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Karen Veninger",
      "Dan Amabile"
     ],
     "a": [
      "Diane Herbst",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kara Chubrik",
      "David Cooley"
     ],
     "a": [
      "Jemma Bucks",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Peggy Matzen",
      "Sam Doctor"
     ],
     "a": [
      "Kristen Frendak",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nancy Cook",
      "Peggy Matzen"
     ],
     "a": [
      "Diane Herbst",
      "Jemma Bucks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Karen Veninger"
     ],
     "a": [
      "Jill Assante",
      "Janine Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "Dave Sarmir"
     ],
     "a": [
      "Robert Lee",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sam Doctor",
      "Scott Heist"
     ],
     "a": [
      "Ken Bienkowski",
      "Patrick Phalen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Scott Heist"
     ],
     "a": [
      "Jill Assante",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Annette Marsh",
      "Dan Amabile"
     ],
     "a": [
      "Theresa Corderi",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nancy Cook",
      "Dave Sarmir"
     ],
     "a": [
      "Diane Herbst",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kara Chubrik",
      "David Cooley"
     ],
     "a": [
      "Janine Thompson",
      "Patrick Phalen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Karen Veninger",
      "Nancy Cook"
     ],
     "a": [
      "Theresa Corderi",
      "Diane Herbst"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Peggy Matzen",
      "Annette Marsh"
     ],
     "a": [
      "Kristen Frendak",
      "Janine Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anthony Deangelis",
      "Sam Doctor"
     ],
     "a": [
      "Jack Tran",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dan Amabile",
      "Dave Sarmir"
     ],
     "a": [
      "Tracy Waffenfeld",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Diane Bracco",
      "David Cooley"
     ],
     "a": [
      "Jemma Bucks",
      "Patrick Phalen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Sam Doctor"
     ],
     "a": [
      "Janine Thompson",
      "Jack Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Karen Veninger",
      "Anthony Deangelis"
     ],
     "a": [
      "Theresa Corderi",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kara Chubrik",
      "Scott Heist"
     ],
     "a": [
      "Jill Assante",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 36,
     "as": 34,
     "h": [
      "Annette Marsh",
      "Nancy Cook"
     ],
     "a": [
      "Diane Herbst",
      "Janine Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Diane Bracco",
      "Kara Chubrik"
     ],
     "a": [
      "Jill Assante",
      "Kristen Frendak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Dan Amabile",
      "Dave Sarmir"
     ],
     "a": [
      "Robert Lee",
      "Jack Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "David Cooley",
      "Scott Heist"
     ],
     "a": [
      "Tracy Waffenfeld",
      "Patrick Phalen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Peggy Matzen",
      "Dan Amabile"
     ],
     "a": [
      "Jill Assante",
      "Patrick Phalen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nancy Cook",
      "Sam Doctor"
     ],
     "a": [
      "Kristen Frendak",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karen Veninger",
      "Dave Sarmir"
     ],
     "a": [
      "Jemma Bucks",
      "Robert Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Annette Marsh",
      "Anthony Deangelis"
     ],
     "a": [
      "Theresa Corderi",
      "Jack Tran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Annette Marsh",
      "Diane Bracco"
     ],
     "a": [
      "Theresa Corderi",
      "Diane Herbst"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Karen Veninger",
      "Kara Chubrik"
     ],
     "a": [
      "Jemma Bucks",
      "Janine Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "Dave Sarmir"
     ],
     "a": [
      "Robert Lee",
      "Jack Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Scott Heist",
      "David Cooley"
     ],
     "a": [
      "Ken Bienkowski",
      "Tracy Waffenfeld"
     ]
    }
   ],
   "subs": [
    "Janine Thompson",
    "Jemma Bucks"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Home Court",
   "away": "Flemington Blue",
   "time": "2026-05-03T15:00:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 602,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Denise Rempson",
      "David Cartwright"
     ],
     "a": [
      "Sarah Stangota",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ],
     "a": [
      "Cathy Matko",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lizabeth Hutchinson",
      "Brian Perlowitz"
     ],
     "a": [
      "Holly Ferguson",
      "Warren Meade"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lizabeth Hutchinson",
      "Mary Ann Villamor"
     ],
     "a": [
      "Sarah Stangota",
      "Cathy Matko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Denise Rempson",
      "Kathi Sheehan"
     ],
     "a": [
      "Gail Hannagan",
      "Natalia Fischer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Cartwright",
      "William Hutchinson"
     ],
     "a": [
      "Anthony Leone",
      "Rob Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Erik Jacobsen",
      "Tim Cassidy"
     ],
     "a": [
      "Ren Mortara",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Denise Rempson",
      "Brian Perlowitz"
     ],
     "a": [
      "Sharon Oddy",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Gail Hannagan",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathi Sheehan",
      "David Cartwright"
     ],
     "a": [
      "Sarah Stangota",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mary Ann Villamor",
      "Tim Cassidy"
     ],
     "a": [
      "Holly Ferguson",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sandra Cassidy",
      "Lizabeth Hutchinson"
     ],
     "a": [
      "Gail Hannagan",
      "Cathy Matko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rachel Baluyot",
      "Denise Rempson"
     ],
     "a": [
      "Natalia Fischer",
      "Holly Ferguson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Erik Jacobsen",
      "William Hutchinson"
     ],
     "a": [
      "Rob Oddy",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "David Cartwright",
      "Brian Perlowitz"
     ],
     "a": [
      "Anthony Leone",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kathi Sheehan",
      "Erik Jacobsen"
     ],
     "a": [
      "Natalia Fischer",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ],
     "a": [
      "Sarah Stangota",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lizabeth Hutchinson",
      "William Hutchinson"
     ],
     "a": [
      "Gail Hannagan",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mary Ann Villamor",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Sharon Oddy",
      "Ren Mortara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lizabeth Hutchinson",
      "Denise Rempson"
     ],
     "a": [
      "Holly Ferguson",
      "Natalia Fischer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kathi Sheehan",
      "Mary Ann Villamor"
     ],
     "a": [
      "Sarah Stangota",
      "Cathy Matko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Erik Jacobsen",
      "William Hutchinson"
     ],
     "a": [
      "Eric Brezina",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tim Cassidy",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Rob Oddy",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Ann Villamor",
      "David Cartwright"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Denise Rempson",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Gail Hannagan",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ],
     "a": [
      "Holly Ferguson",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ],
     "a": [
      "Natalia Fischer",
      "Warren Meade"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kathi Sheehan",
      "Sandra Cassidy"
     ],
     "a": [
      "Sarah Stangota",
      "Sharon Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rachel Baluyot",
      "Denise Rempson"
     ],
     "a": [
      "Cathy Matko",
      "Gail Hannagan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Erik Jacobsen",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Eric Brezina",
      "Anthony Leone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brian Perlowitz",
      "David Cartwright"
     ],
     "a": [
      "Rob Oddy",
      "Ren Mortara"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 11,
   "home": "Players Courtyard Surge",
   "away": "ACE",
   "time": "2026-05-17T13:00:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 556,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Richard Fox"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lolita Hagen",
      "William Askin"
     ],
     "a": [
      "Colleen Derose",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dawn Kempton",
      "David Corwin"
     ],
     "a": [
      "Cathy Fiebs",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Amy Moore",
      "Bob Sochor"
     ],
     "a": [
      "Kelley Batejan",
      "Pete Dunn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "Heidi Weinroth"
     ],
     "a": [
      "Linda Landis",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dawn Kempton",
      "Amy Moore"
     ],
     "a": [
      "Amy Clayman",
      "Colleen Derose"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dennis Higman",
      "Bob Sochor"
     ],
     "a": [
      "Jason Fingerman",
      "Scott Auty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "William Askin",
      "David Corwin"
     ],
     "a": [
      "Marc Schwegel",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Moore",
      "David Corwin"
     ],
     "a": [
      "Cathy Fiebs",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Heidi Weinroth",
      "Richard Fox"
     ],
     "a": [
      "Colleen Derose",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dawn Kempton",
      "Bob Sochor"
     ],
     "a": [
      "Andrea Schwab",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Kelley Batejan",
      "Pete Certo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "Joan Rudderow"
     ],
     "a": [
      "Cathy Fiebs",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dawn Kempton",
      "Lolita Hagen"
     ],
     "a": [
      "Linda Landis",
      "Amy Clayman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bob Sochor",
      "David Corwin"
     ],
     "a": [
      "Jason Fingerman",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Richard Fox",
      "William Askin"
     ],
     "a": [
      "Pete Certo",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Bob Sochor"
     ],
     "a": [
      "Linda Landis",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lolita Hagen",
      "David Corwin"
     ],
     "a": [
      "Kelley Batejan",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Moore",
      "Dennis Higman"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Angela Bartelt",
      "Richard Fox"
     ],
     "a": [
      "Colleen Derose",
      "Pete Dunn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "Amy Moore"
     ],
     "a": [
      "Colleen Derose",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dawn Kempton",
      "Lolita Hagen"
     ],
     "a": [
      "Cathy Fiebs",
      "Amy Clayman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "William Askin",
      "David Corwin"
     ],
     "a": [
      "Jason Fingerman",
      "Scott Auty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dennis Higman",
      "Bob Sochor"
     ],
     "a": [
      "Pete Certo",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "Richard Fox"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dawn Kempton",
      "David Corwin"
     ],
     "a": [
      "Linda Landis",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lolita Hagen",
      "Dennis Higman"
     ],
     "a": [
      "Kelley Batejan",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "William Askin"
     ],
     "a": [
      "Cathy Fiebs",
      "Pete Dunn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Lolita Hagen"
     ],
     "a": [
      "Andrea Schwab",
      "Colleen Derose"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dawn Kempton",
      "Angela Bartelt"
     ],
     "a": [
      "Kelley Batejan",
      "Linda Landis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dennis Higman",
      "David Corwin"
     ],
     "a": [
      "Pete Certo",
      "Jason Fingerman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "William Askin",
      "Richard Fox"
     ],
     "a": [
      "Scott Auty",
      "Pete Dunn"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 11,
   "home": "Pickleball Lehigh Valley",
   "away": "Home Court",
   "time": "2026-05-17T14:00:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 634,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Scott Stenroos"
     ],
     "a": [
      "Denise Rempson",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Denise Stevens",
      "Neil Pratesi"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Suzane Sullivan",
      "William Robertson"
     ],
     "a": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lea Frank",
      "Sean Wilson"
     ],
     "a": [
      "Mary Ann Villamor",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nami Huang",
      "Darlene Fusco"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Sandra Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Suzane Sullivan"
     ],
     "a": [
      "Rachel Baluyot",
      "Denise Rempson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Scott Stenroos",
      "Ray Suhocki"
     ],
     "a": [
      "David Cartwright",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Neil Pratesi",
      "William Robertson"
     ],
     "a": [
      "Erik Jacobsen",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Christine Steigerwalt",
      "William Robertson"
     ],
     "a": [
      "Kathi Sheehan",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Darlene Fusco",
      "Sean Wilson"
     ],
     "a": [
      "Mary Ann Villamor",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Neil Pratesi"
     ],
     "a": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nami Huang",
      "Ray Suhocki"
     ],
     "a": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Steigerwalt",
      "Lea Frank"
     ],
     "a": [
      "Kathi Sheehan",
      "Rachel Baluyot"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzane Sullivan",
      "Darlene Fusco"
     ],
     "a": [
      "Denise Rempson",
      "Lizabeth Hutchinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Scott Stenroos",
      "William Robertson"
     ],
     "a": [
      "Tim Cassidy",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sean Wilson",
      "Neil Pratesi"
     ],
     "a": [
      "Jerry O’Loughlin",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Darlene Fusco",
      "Sean Wilson"
     ],
     "a": [
      "Mary Ann Villamor",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nami Huang",
      "William Robertson"
     ],
     "a": [
      "Denise Rempson",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Denise Stevens",
      "Scott Stenroos"
     ],
     "a": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lea Frank",
      "Ray Suhocki"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Tim Cassidy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Darlene Fusco",
      "Nami Huang"
     ],
     "a": [
      "Sandra Cassidy",
      "Mary Ann Villamor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzane Sullivan",
      "Christine Steigerwalt"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Kathi Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Neil Pratesi",
      "Ray Suhocki"
     ],
     "a": [
      "Reginald Escusa",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Scott Stenroos",
      "Sean Wilson"
     ],
     "a": [
      "Erik Jacobsen",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzane Sullivan",
      "Scott Stenroos"
     ],
     "a": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nami Huang",
      "Neil Pratesi"
     ],
     "a": [
      "Denise Rempson",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Denise Stevens",
      "Sean Wilson"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lea Frank",
      "Ray Suhocki"
     ],
     "a": [
      "Kathi Sheehan",
      "Reginald Escusa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Denise Stevens"
     ],
     "a": [
      "Rachel Baluyot",
      "Denise Rempson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Steigerwalt",
      "Lea Frank"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Kathi Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "William Robertson",
      "Ray Suhocki"
     ],
     "a": [
      "Tim Cassidy",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Scott Stenroos",
      "Neil Pratesi"
     ],
     "a": [
      "Brian Perlowitz",
      "David Cartwright"
     ]
    }
   ],
   "subs": [
    "William Robertson"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Bounce Malvern",
   "away": "Mercer Bucks",
   "time": "2026-05-17T14:30:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 553,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mary Hain",
      "George Nouaime"
     ],
     "a": [
      "Jean Knab",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zalene Corey",
      "Calvin Giles"
     ],
     "a": [
      "Sue Glass",
      "Arnold Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christina Samtmann",
      "Scott Nissenbaum"
     ],
     "a": [
      "Sandy Borowsky",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kathy Demola",
      "Dan Callaghan"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Francisco Miranda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kathy Demola",
      "Michelle Smith"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Jean Knab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mary Hain",
      "Holly Reinford"
     ],
     "a": [
      "Sue Glass",
      "Andrea Kahn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dan Callaghan",
      "Jeff Pillar"
     ],
     "a": [
      "Ken Gross",
      "Raymond Lormel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ],
     "a": [
      "Francisco Miranda",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christina Samtmann",
      "Jeff Pillar"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Arnold Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michelle Smith",
      "Calvin Giles"
     ],
     "a": [
      "Sandy Borowsky",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Holly Reinford",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Andrea Kahn",
      "Francisco Miranda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zalene Corey",
      "George Nouaime"
     ],
     "a": [
      "Jean Knab",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kathy Demola",
      "Mary Hain"
     ],
     "a": [
      "Andrea Kahn",
      "Jean Knab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Holly Reinford",
      "Zalene Corey"
     ],
     "a": [
      "Sue Glass",
      "Sandy Borowsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dan Callaghan",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Francisco Miranda",
      "Raymond Lormel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "George Nouaime",
      "Scott Nissenbaum"
     ],
     "a": [
      "Ken Gross",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathy Demola",
      "Scott Nissenbaum"
     ],
     "a": [
      "Sandy Borowsky",
      "Raymond Lormel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michelle Smith",
      "Jeff Pillar"
     ],
     "a": [
      "Sue Glass",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Samtmann",
      "Calvin Giles"
     ],
     "a": [
      "Jean Knab",
      "Arnold Witte"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Mary Hain",
      "Holly Reinford"
     ],
     "a": [
      "Sandy Borowsky",
      "Andrea Kahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Zalene Corey",
      "Christina Samtmann"
     ],
     "a": [
      "Sue Glass",
      "Elizabeth Dziekonska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jeffrey Lindstrom",
      "Scott Nissenbaum"
     ],
     "a": [
      "Raymond Lormel",
      "Francisco Miranda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dan Callaghan",
      "George Nouaime"
     ],
     "a": [
      "Jerry Margulies",
      "Arnold Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathy Demola",
      "Calvin Giles"
     ],
     "a": [
      "Sue Glass",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Hain",
      "Jeff Pillar"
     ],
     "a": [
      "Andrea Kahn",
      "Arnold Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Holly Reinford",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Jean Knab",
      "Francisco Miranda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michelle Smith",
      "Dan Callaghan"
     ],
     "a": [
      "Sandy Borowsky",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Hain",
      "Christina Samtmann"
     ],
     "a": [
      "Elizabeth Dziekonska",
      "Jean Knab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Zalene Corey",
      "Holly Reinford"
     ],
     "a": [
      "Andrea Kahn",
      "Sue Glass"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeff Pillar",
      "Scott Nissenbaum"
     ],
     "a": [
      "Arnold Witte",
      "Raymond Lormel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "George Nouaime",
      "Dan Callaghan"
     ],
     "a": [
      "Ken Gross",
      "Francisco Miranda"
     ]
    }
   ],
   "subs": [
    "Sandy Borowsky",
    "Andrea Kahn",
    "Kathy Demola",
    "Holly Reinford"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Flemington Green",
   "away": "Flemington Blue",
   "time": "2026-05-17T15:00:00",
   "complete": true,
   "homePoints": 578,
   "awayPoints": 620,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Scott Heist"
     ],
     "a": [
      "Holly Ferguson",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Annette Marsh",
      "Sam Doctor"
     ],
     "a": [
      "Cathy Matko",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "Brett Wilson"
     ],
     "a": [
      "Sarah Stangota",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nancy Cook",
      "Craig Walling"
     ],
     "a": [
      "Gail Hannagan",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nancy Cook",
      "Annette Marsh"
     ],
     "a": [
      "Sarah Stangota",
      "Cathy Matko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Kara Chubrik"
     ],
     "a": [
      "Tao Zhu",
      "Natalia Fischer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Scott Heist",
      "David Cooley"
     ],
     "a": [
      "Ren Mortara",
      "Paul Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sam Doctor",
      "Craig Walling"
     ],
     "a": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nancy Cook",
      "Sam Doctor"
     ],
     "a": [
      "Tao Zhu",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kara Chubrik",
      "David Cooley"
     ],
     "a": [
      "Holly Ferguson",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "Craig Walling"
     ],
     "a": [
      "Gail Hannagan",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Brett Wilson"
     ],
     "a": [
      "Sarah Stangota",
      "Ren Mortara"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Annette Marsh",
      "Peggy Matzen"
     ],
     "a": [
      "Sarah Stangota",
      "Cathy Matko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marianne Rosato",
      "Kara Chubrik"
     ],
     "a": [
      "Tao Zhu",
      "Natalia Fischer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sam Doctor",
      "Scott Heist"
     ],
     "a": [
      "Eric Brezina",
      "Anthony Leone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brett Wilson",
      "David Cooley"
     ],
     "a": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Annette Marsh",
      "Sam Doctor"
     ],
     "a": [
      "Gail Hannagan",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kara Chubrik",
      "Brett Wilson"
     ],
     "a": [
      "Natalia Fischer",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marianne Rosato",
      "Craig Walling"
     ],
     "a": [
      "Holly Ferguson",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nancy Cook",
      "Scott Heist"
     ],
     "a": [
      "Sarah Stangota",
      "Eric Brezina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Annette Marsh",
      "Marianne Rosato"
     ],
     "a": [
      "Gail Hannagan",
      "Sarah Stangota"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nancy Cook",
      "Peggy Matzen"
     ],
     "a": [
      "Natalia Fischer",
      "Holly Ferguson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brett Wilson",
      "Craig Walling"
     ],
     "a": [
      "Paul Phillips",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Scott Heist",
      "David Cooley"
     ],
     "a": [
      "Anthony Leone",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Sam Doctor"
     ],
     "a": [
      "Holly Ferguson",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nancy Cook",
      "Craig Walling"
     ],
     "a": [
      "Natalia Fischer",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Annette Marsh",
      "Scott Heist"
     ],
     "a": [
      "Gail Hannagan",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kara Chubrik",
      "David Cooley"
     ],
     "a": [
      "Tao Zhu",
      "Paul Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Annette Marsh",
      "Nancy Cook"
     ],
     "a": [
      "Sarah Stangota",
      "Gail Hannagan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Marianne Rosato",
      "Kara Chubrik"
     ],
     "a": [
      "Holly Ferguson",
      "Natalia Fischer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sam Doctor",
      "Scott Heist"
     ],
     "a": [
      "Anthony Leone",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brett Wilson",
      "David Cooley"
     ],
     "a": [
      "Paul Phillips",
      "Jeffrey Hartford"
     ]
    }
   ],
   "subs": [
    "Craig Walling"
   ]
  }
 ],
 "playoffs": [
  {
   "result": "home",
   "round": 1,
   "home": "Flemington Blue",
   "away": "Flemington Green",
   "time": "2026-05-31T15:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 4,
   "homePoints": 628,
   "awayPoints": 574,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Nancy Cook",
      "David Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tao Zhu",
      "Eric Brezina"
     ],
     "a": [
      "Peggy Matzen",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Gail Hannagan",
      "Jeffrey Hartford"
     ],
     "a": [
      "Karen Veninger",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Kara Chubrik",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Natalia Fischer"
     ],
     "a": [
      "Peggy Matzen",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Holly Ferguson"
     ],
     "a": [
      "Diane Bracco",
      "Karen Veninger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Anthony Leone"
     ],
     "a": [
      "Sam Doctor",
      "David Cooley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Scott Heist",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Nancy Cook",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sarah Stangota",
      "Ren Mortara"
     ],
     "a": [
      "Kara Chubrik",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Holly Ferguson",
      "Paul Phillips"
     ],
     "a": [
      "Peggy Matzen",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tao Zhu",
      "Eric Brezina"
     ],
     "a": [
      "Diane Bracco",
      "Dave Sarmir"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gail Hannagan",
      "Natalia Fischer"
     ],
     "a": [
      "Karen Veninger",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sarah Stangota",
      "Tao Zhu"
     ],
     "a": [
      "Peggy Matzen",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ],
     "a": [
      "Dave Sarmir",
      "David Cooley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Ren Mortara",
      "Paul Phillips"
     ],
     "a": [
      "Brett Wilson",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Eric Brezina"
     ],
     "a": [
      "Karen Veninger",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Natalia Fischer",
      "Jeffrey Hartford"
     ],
     "a": [
      "Nancy Cook",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Kara Chubrik",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Diane Bracco",
      "Dan Amabile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Natalia Fischer",
      "Tao Zhu"
     ],
     "a": [
      "Nancy Cook",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gail Hannagan",
      "Sarah Stangota"
     ],
     "a": [
      "Karen Veninger",
      "Kara Chubrik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ],
     "a": [
      "David Cooley",
      "Sam Doctor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anthony Leone",
      "Ren Mortara"
     ],
     "a": [
      "Dan Amabile",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Stangota",
      "Ren Mortara"
     ],
     "a": [
      "Nancy Cook",
      "David Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Eric Brezina"
     ],
     "a": [
      "Kara Chubrik",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Peggy Matzen",
      "Dave Sarmir"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Natalia Fischer",
      "Paul Phillips"
     ],
     "a": [
      "Diane Bracco",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Natalia Fischer",
      "Tao Zhu"
     ],
     "a": [
      "Diane Bracco",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Sarah Stangota",
      "Gail Hannagan"
     ],
     "a": [
      "Karen Veninger",
      "Kara Chubrik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Brezina",
      "Anthony Leone"
     ],
     "a": [
      "Sam Doctor",
      "Dan Amabile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Paul Phillips",
      "Jeffrey Hartford"
     ],
     "a": [
      "Scott Heist",
      "Brett Wilson"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Home Court",
   "away": "Pickleball Lehigh Valley",
   "time": "2026-05-31T15:00:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 660,
   "awayPoints": 574,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kathi Sheehan",
      "Brian Perlowitz"
     ],
     "a": [
      "Christine Steigerwalt",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Denise Rempson",
      "David Cartwright"
     ],
     "a": [
      "Nami Huang",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lizabeth Hutchinson",
      "Erik Jacobsen"
     ],
     "a": [
      "Denise Stevens",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Darlene Fusco",
      "Sean Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Denise Rempson",
      "Lizabeth Hutchinson"
     ],
     "a": [
      "Suzane Sullivan",
      "Lea Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathi Sheehan",
      "Sandra Cassidy"
     ],
     "a": [
      "Darlene Fusco",
      "Denise Stevens"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "David Cartwright",
      "Brian Perlowitz"
     ],
     "a": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Reginald Escusa",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Sean Wilson",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Christine Steigerwalt",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Denise Rempson",
      "Erik Jacobsen"
     ],
     "a": [
      "Suzane Sullivan",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Ann Villamor",
      "Brian Perlowitz"
     ],
     "a": [
      "Darlene Fusco",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ],
     "a": [
      "Nami Huang",
      "Mark Scott"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Baluyot",
      "Denise Rempson"
     ],
     "a": [
      "Suzane Sullivan",
      "Denise Stevens"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lizabeth Hutchinson",
      "Kathi Sheehan"
     ],
     "a": [
      "Christine Steigerwalt",
      "Lea Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Erik Jacobsen",
      "Tim Cassidy"
     ],
     "a": [
      "Ralph Lovelidge",
      "Sean Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Reginald Escusa",
      "David Cartwright"
     ],
     "a": [
      "Neil Pratesi",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Denise Rempson",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Lea Frank",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lizabeth Hutchinson",
      "Erik Jacobsen"
     ],
     "a": [
      "Nami Huang",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ],
     "a": [
      "Christine Steigerwalt",
      "Mark Scott"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ],
     "a": [
      "Darlene Fusco",
      "Scott Stenroos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Denise Rempson",
      "Kathi Sheehan"
     ],
     "a": [
      "Nami Huang",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sandra Cassidy",
      "Lizabeth Hutchinson"
     ],
     "a": [
      "Denise Stevens",
      "Darlene Fusco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "David Cartwright",
      "Brian Perlowitz"
     ],
     "a": [
      "Ralph Lovelidge",
      "Scott Stenroos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Reginald Escusa",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Mark Scott",
      "Sean Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Ann Villamor",
      "Reginald Escusa"
     ],
     "a": [
      "Christine Steigerwalt",
      "Ralph Lovelidge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ],
     "a": [
      "Lea Frank",
      "Neil Pratesi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kathi Sheehan",
      "David Cartwright"
     ],
     "a": [
      "Denise Stevens",
      "Scott Stenroos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ],
     "a": [
      "Suzane Sullivan",
      "Mark Scott"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rachel Baluyot",
      "Denise Rempson"
     ],
     "a": [
      "Suzane Sullivan",
      "Christine Steigerwalt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lizabeth Hutchinson",
      "Mary Ann Villamor"
     ],
     "a": [
      "Nami Huang",
      "Lea Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Cartwright",
      "Jerry O’Loughlin"
     ],
     "a": [
      "Ralph Lovelidge",
      "Neil Pratesi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Erik Jacobsen",
      "Tim Cassidy"
     ],
     "a": [
      "Scott Stenroos",
      "Sean Wilson"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Players Courtyard Surge",
   "away": "Bounce Malvern",
   "time": "2026-05-31T14:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 4,
   "homePoints": 635,
   "awayPoints": 523,
   "homeGW": 23,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Amy Moore",
      "Bob Sochor"
     ],
     "a": [
      "Kim Slomeana",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "William Askin"
     ],
     "a": [
      "Christina Samtmann",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Joan Rudderow",
      "David Corwin"
     ],
     "a": [
      "Randy Kraftsow",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Angela Bartelt",
      "Dennis Higman"
     ],
     "a": [
      "Mary Hain",
      "Jeff Pillar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Lynn Bresnahan"
     ],
     "a": [
      "Mary Hain",
      "Christina Samtmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amy Moore",
      "Lolita Hagen"
     ],
     "a": [
      "Kim Slomeana",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Corwin",
      "Bob Sochor"
     ],
     "a": [
      "Dan Callaghan",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dennis Higman",
      "William Askin"
     ],
     "a": [
      "George Nouaime",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Angela Bartelt",
      "David Corwin"
     ],
     "a": [
      "Randy Kraftsow",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Bob Sochor"
     ],
     "a": [
      "Kim Slomeana",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lolita Hagen",
      "Steven Heller"
     ],
     "a": [
      "Mary Hain",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Moore",
      "Dennis Higman"
     ],
     "a": [
      "Christina Samtmann",
      "Jeff Pillar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Heidi Weinroth",
      "Angela Bartelt"
     ],
     "a": [
      "Christina Samtmann",
      "Kim Slomeana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Amy Moore",
      "Joan Rudderow"
     ],
     "a": [
      "Mary Hain",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "William Askin",
      "Steven Heller"
     ],
     "a": [
      "Dan Callaghan",
      "George Nouaime"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dennis Higman",
      "Bob Sochor"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lynn Bresnahan",
      "Rick Weiser"
     ],
     "a": [
      "Christina Samtmann",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "Steven Heller"
     ],
     "a": [
      "Mary Hain",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lolita Hagen",
      "William Askin"
     ],
     "a": [
      "Randy Kraftsow",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amy Moore",
      "David Corwin"
     ],
     "a": [
      "Kim Slomeana",
      "George Nouaime"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joan Rudderow",
      "Angela Bartelt"
     ],
     "a": [
      "Kim Slomeana",
      "Mary Hain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lynn Bresnahan",
      "Heidi Weinroth"
     ],
     "a": [
      "Christina Samtmann",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "William Askin",
      "Bob Sochor"
     ],
     "a": [
      "Dan Callaghan",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steven Heller",
      "Rick Weiser"
     ],
     "a": [
      "George Nouaime",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amy Moore",
      "Bob Sochor"
     ],
     "a": [
      "Kim Slomeana",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lynn Bresnahan",
      "Steven Heller"
     ],
     "a": [
      "Randy Kraftsow",
      "Scott Nissenbaum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Mary Hain",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lolita Hagen",
      "David Corwin"
     ],
     "a": [
      "Christina Samtmann",
      "George Nouaime"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lolita Hagen",
      "Angela Bartelt"
     ],
     "a": [
      "Kim Slomeana",
      "Christina Samtmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Moore",
      "Joan Rudderow"
     ],
     "a": [
      "Mary Hain",
      "Randy Kraftsow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dennis Higman",
      "David Corwin"
     ],
     "a": [
      "Dan Callaghan",
      "George Nouaime"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rick Weiser",
      "Bob Sochor"
     ],
     "a": [
      "Scott Nissenbaum",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Angela Bartelt",
      "David Corwin"
     ],
     "a": [
      "Kim Slomeana",
      "George Nouaime"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Joan Rudderow",
      "Amy Moore"
     ],
     "a": [
      "Christina Samtmann",
      "Mary Hain"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Bob Sochor",
      "Dennis Higman"
     ],
     "a": [
      "Scott Nissenbaum",
      "Dan Callaghan"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "ACE",
   "away": "Monroe",
   "time": "2026-05-31T15:00:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 656,
   "awayPoints": 567,
   "homeGW": 21,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Linda Landis",
      "Marc Schwegel"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Karen Rosenberg",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelley Batejan",
      "Pete Dunn"
     ],
     "a": [
      "Petra Jones",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Andrea Schwab",
      "Jason Fingerman"
     ],
     "a": [
      "Olga Turova",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Andrea Schwab",
      "Cathy Fiebs"
     ],
     "a": [
      "Petra Jones",
      "Bonnie Russo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Linda Landis"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "Mike Hardy",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Pete Dunn",
      "Lawrence Padersky"
     ],
     "a": [
      "Richard Ricciardi",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cathy Fiebs",
      "Marc Schwegel"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Schwab",
      "Pete Dunn"
     ],
     "a": [
      "Petra Jones",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dawn Gordon",
      "Lawrence Padersky"
     ],
     "a": [
      "Karen Rosenberg",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Olga Turova",
      "Bob Debarge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Schwab",
      "Linda Landis"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Petra Jones"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kelley Batejan",
      "Dawn Gordon"
     ],
     "a": [
      "Bonnie Russo",
      "Olga Turova"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jason Fingerman",
      "Pete Dunn"
     ],
     "a": [
      "Mike Hardy",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Scott Auty",
      "Lawrence Padersky"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cathy Fiebs",
      "Scott Auty"
     ],
     "a": [
      "Karen Rosenberg",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Andrea Schwab",
      "Jason Fingerman"
     ],
     "a": [
      "Petra Jones",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Lawrence Padersky"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dawn Gordon",
      "Marc Schwegel"
     ],
     "a": [
      "Bonnie Russo",
      "Bob Debarge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Linda Landis",
      "Dawn Gordon"
     ],
     "a": [
      "Karen Rosenberg",
      "Bonnie Russo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 29,
     "as": 31,
     "h": [
      "Andrea Schwab",
      "Kelley Batejan"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Olga Turova"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "Richard Ricciardi",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Pete Dunn",
      "Lawrence Padersky"
     ],
     "a": [
      "Mike Hardy",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cathy Fiebs",
      "Marc Schwegel"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Landis",
      "Jason Fingerman"
     ],
     "a": [
      "Olga Turova",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Petra Jones",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Scott Auty"
     ],
     "a": [
      "Karen Rosenberg",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Andrea Schwab",
      "Kelley Batejan"
     ],
     "a": [
      "Petra Jones",
      "Bonnie Russo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dawn Gordon",
      "Cathy Fiebs"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jason Fingerman",
      "Marc Schwegel"
     ],
     "a": [
      "Mike Hardy",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Scott Auty",
      "Pete Dunn"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Jay Scheinman"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "Linda Landis",
      "Lawrence Padersky"
     ],
     "a": [
      "Petra Jones",
      "Bob Debarge"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "Andrea Schwab",
      "Kelley Batejan"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "Jason Fingerman",
      "Scott Auty"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Mike Hardy"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 2,
   "home": "Flemington Blue",
   "away": "Home Court",
   "time": "2026-06-06T13:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "homePoints": 603,
   "awayPoints": 610,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
     ],
     "a": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Sandra Cassidy",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Rob Oddy"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Kathi Sheehan",
      "David Cartwright"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Natalia Fischer",
      "Tao Zhu"
     ],
     "a": [
      "Rachel Baluyot",
      "Mary Ann Villamor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Sharon Oddy"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Sandra Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Reginald Escusa",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anthony Leone",
      "Eric Brezina"
     ],
     "a": [
      "David Cartwright",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Natalia Fischer",
      "Eric Brezina"
     ],
     "a": [
      "Kathi Sheehan",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Anthony Leone"
     ],
     "a": [
      "Mary Ann Villamor",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Stangota",
      "Rob Oddy"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Tim Cassidy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gail Hannagan",
      "Jeffrey Hartford"
     ],
     "a": [
      "Rachel Baluyot",
      "David Cartwright"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Holly Ferguson",
      "Tao Zhu"
     ],
     "a": [
      "Sandra Cassidy",
      "Mary Ann Villamor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Stangota",
      "Gail Hannagan"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Kathi Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Ren Mortara"
     ],
     "a": [
      "Erik Jacobsen",
      "Tim Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ],
     "a": [
      "Jerry O’Loughlin",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Kathi Sheehan",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tao Zhu",
      "Paul Phillips"
     ],
     "a": [
      "Sandra Cassidy",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Ren Mortara"
     ],
     "a": [
      "Mary Ann Villamor",
      "Reginald Escusa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Rob Oddy"
     ],
     "a": [
      "Rachel Baluyot",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gail Hannagan",
      "Sarah Stangota"
     ],
     "a": [
      "Rachel Baluyot",
      "Kathi Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tao Zhu",
      "Natalia Fischer"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Sandra Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ],
     "a": [
      "David Cartwright",
      "Reginald Escusa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ren Mortara",
      "Paul Phillips"
     ],
     "a": [
      "Erik Jacobsen",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gail Hannagan",
      "Eric Brezina"
     ],
     "a": [
      "Lizabeth Hutchinson",
      "Erik Jacobsen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Rob Oddy"
     ],
     "a": [
      "Mary Ann Villamor",
      "Jerry O’Loughlin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Holly Ferguson",
      "Paul Phillips"
     ],
     "a": [
      "Sandra Cassidy",
      "Tim Cassidy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Rachel Baluyot",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Stangota",
      "Natalia Fischer"
     ],
     "a": [
      "Mary Ann Villamor",
      "Lizabeth Hutchinson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Sharon Oddy"
     ],
     "a": [
      "Rachel Baluyot",
      "Kathi Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Erik Jacobsen",
      "Tim Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Brezina",
      "Anthony Leone"
     ],
     "a": [
      "Brian Perlowitz",
      "David Cartwright"
     ]
    }
   ]
  },
  {
   "result": "away",
   "round": 2,
   "home": "Players Courtyard Surge",
   "away": "ACE",
   "time": "2026-06-06T13:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "homePoints": 578,
   "awayPoints": 617,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lolita Hagen",
      "Richard Fox"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amy Moore",
      "Dennis Higman"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "William Askin"
     ],
     "a": [
      "Cathy Fiebs",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dawn Kempton",
      "David Corwin"
     ],
     "a": [
      "Linda Landis",
      "Marc Schwegel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Amy Moore",
      "Dawn Kempton"
     ],
     "a": [
      "Andrea Schwab",
      "Colleen Derose"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Angela Bartelt"
     ],
     "a": [
      "Cathy Fiebs",
      "Kelley Batejan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "William Askin",
      "Richard Fox"
     ],
     "a": [
      "Jason Fingerman",
      "Scott Auty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Dennis Higman",
      "David Corwin"
     ],
     "a": [
      "Pete Dunn",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lolita Hagen",
      "William Askin"
     ],
     "a": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "Richard Fox"
     ],
     "a": [
      "Andrea Schwab",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Amy Moore",
      "David Corwin"
     ],
     "a": [
      "Linda Landis",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dawn Kempton",
      "Dennis Higman"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dawn Kempton",
      "Angela Bartelt"
     ],
     "a": [
      "Andrea Schwab",
      "Kelley Batejan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Moore",
      "Lolita Hagen"
     ],
     "a": [
      "Colleen Derose",
      "Linda Landis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richard Fox",
      "David Corwin"
     ],
     "a": [
      "Jason Fingerman",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "William Askin",
      "Dennis Higman"
     ],
     "a": [
      "Scott Auty",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lolita Hagen",
      "Greg Taylor"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Richard Fox"
     ],
     "a": [
      "Linda Landis",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Moore",
      "Dennis Higman"
     ],
     "a": [
      "Cathy Fiebs",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dawn Kempton",
      "David Corwin"
     ],
     "a": [
      "Dawn Gordon",
      "Marc Schwegel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Amy Moore",
      "Dawn Kempton"
     ],
     "a": [
      "Colleen Derose",
      "Andrea Schwab"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Angela Bartelt"
     ],
     "a": [
      "Cathy Fiebs",
      "Kelley Batejan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "William Askin",
      "David Corwin"
     ],
     "a": [
      "Jason Fingerman",
      "Scott Auty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Richard Fox",
      "Dennis Higman"
     ],
     "a": [
      "Pete Dunn",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lolita Hagen",
      "William Askin"
     ],
     "a": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Joan Rudderow",
      "Greg Taylor"
     ],
     "a": [
      "Linda Landis",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Amy Moore",
      "David Corwin"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Dawn Kempton",
      "Dennis Higman"
     ],
     "a": [
      "Dawn Gordon",
      "Marc Schwegel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lolita Hagen",
      "Dawn Kempton"
     ],
     "a": [
      "Andrea Schwab",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "Amy Moore"
     ],
     "a": [
      "Colleen Derose",
      "Kelley Batejan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "William Askin",
      "Greg Taylor"
     ],
     "a": [
      "Jason Fingerman",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dennis Higman",
      "David Corwin"
     ],
     "a": [
      "Scott Auty",
      "Lawrence Padersky"
     ]
    }
   ]
  },
  {
   "result": "away",
   "round": 3,
   "home": "Flemington Blue",
   "away": "ACE",
   "time": "2026-06-07T09:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "homePoints": 532,
   "awayPoints": 624,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Cathy Fiebs",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tao Zhu",
      "Eric Brezina"
     ],
     "a": [
      "Dawn Gordon",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gail Hannagan",
      "Jeffrey Hartford"
     ],
     "a": [
      "Kelley Batejan",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Ren Mortara"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Stangota",
      "Sharon Oddy"
     ],
     "a": [
      "Kelley Batejan",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tao Zhu",
      "Natalia Fischer"
     ],
     "a": [
      "Andrea Schwab",
      "Colleen Derose"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Pete Dunn",
      "Pete Certo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Ren Mortara"
     ],
     "a": [
      "Jason Fingerman",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Colleen Derose",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Ren Mortara"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Eric Brezina"
     ],
     "a": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Natalia Fischer",
      "Jeffrey Hartford"
     ],
     "a": [
      "Dawn Gordon",
      "Marc Schwegel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gail Hannagan",
      "Sharon Oddy"
     ],
     "a": [
      "Colleen Derose",
      "Kelley Batejan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Sarah Stangota"
     ],
     "a": [
      "Andrea Schwab",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Paul Phillips",
      "Ren Mortara"
     ],
     "a": [
      "Lawrence Padersky",
      "Scott Auty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Leone",
      "Eric Brezina"
     ],
     "a": [
      "Jason Fingerman",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tao Zhu",
      "Paul Phillips"
     ],
     "a": [
      "Andrea Schwab",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Jeffrey Hartford"
     ],
     "a": [
      "Cathy Fiebs",
      "Scott Auty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Anthony Leone"
     ],
     "a": [
      "Colleen Derose",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Tao Zhu"
     ],
     "a": [
      "Andrea Schwab",
      "Colleen Derose"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gail Hannagan",
      "Sarah Stangota"
     ],
     "a": [
      "Cathy Fiebs",
      "Kelley Batejan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anthony Leone",
      "Jeffrey Hartford"
     ],
     "a": [
      "Jason Fingerman",
      "Scott Auty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Paul Phillips",
      "Eric Brezina"
     ],
     "a": [
      "Lawrence Padersky",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Cathy Fiebs",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tao Zhu",
      "Paul Phillips"
     ],
     "a": [
      "Andrea Schwab",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Ren Mortara"
     ],
     "a": [
      "Kelley Batejan",
      "Marc Schwegel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gail Hannagan",
      "Eric Brezina"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gail Hannagan",
      "Sarah Stangota"
     ],
     "a": [
      "Colleen Derose",
      "Cathy Fiebs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Natalia Fischer"
     ],
     "a": [
      "Andrea Schwab",
      "Kelley Batejan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Jason Fingerman",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Eric Brezina",
      "Anthony Leone"
     ],
     "a": [
      "Lawrence Padersky",
      "Scott Auty"
     ]
    }
   ]
  }
 ],
 "extraPlayerIds": {
  "Reg Blaber": "03769e99-2521-4e52-bef4-cf55e57e9460",
  "Jana Bradley": "076a6405-8447-43b9-b8cf-1db5d857979c",
  "John Daniello": "1149300d-3cd0-48f8-b55b-6a133898e951",
  "Linda Parker-Ventura": "15415c20-492e-41b5-a5e0-61c4bb88c7cc",
  "William Heurich": "4a34b0f0-c926-4a04-9492-aa38ce2dcda2",
  "Pat Bernhard": "4b0745ef-f0ad-4cf4-9899-84a2c940609f",
  "Cindy Taglioli": "5ce451a1-01c9-4a8e-bbb6-847360c2a45d",
  "Kyle Kaczmarek": "7c0cc216-8e0c-402f-9b26-edd678a27c0d",
  "Neal Shipon": "7d298d79-0931-4682-8a6f-305e27d992b7",
  "Marvin Lao": "838de378-832d-4d6e-8e6a-44e1edb42719",
  "Joe Nuzzi": "a1ca4f2c-a5e3-4c95-b675-14a94dc5a7ea",
  "Dean Ackerman": "b20030a4-fceb-4d68-a287-65c19b8a5e64",
  "Lorraine Delcampo": "c48bcd8a-9960-40d5-9c89-f19f9db11de0",
  "Walter Jarrett": "ceb2aede-e2e6-47b3-ad72-17741086fa2b",
  "Martyn Babitz": "cf328b8f-9626-4bdf-8069-da6d0f8b17e9",
  "Fran Salm": "ee1784f6-59f1-4fd2-944e-f2683fb94262"
 },
 "meta": {
  "matchesPlayed": 60,
  "provisionalMatches": 0,
  "weeks": "1-11",
  "totalPlayers": 211,
  "ratingHistoryWeeks": [
   1,
   2,
   3,
   4,
   5,
   7,
   8,
   9,
   10,
   11
  ],
  "divisionSlug": "f05d9fac",
  "hasPlayoffs": true,
  "typicalDay": "Sundays",
  "detailFile": "detail-f05d9fac.js",
  "clubName": "",
  "divisionName": "3.0 (50+)",
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
   "crossPodMatchups": 10,
   "totalMatchups": 60,
   "reported": {
    "South": [
     "ACE",
     "Bounce Malvern",
     "Mercer Bucks",
     "Monroe",
     "Players Courtyard Surge",
     "Players Courtyard Wave"
    ],
    "North": [
     "Flemington Blue",
     "Flemington Green",
     "Home Court",
     "Montville",
     "Pickleball Lehigh Valley"
    ]
   },
   "schedule": {
    "Pod 1": [
     "ACE",
     "Bounce Malvern",
     "Flemington Blue",
     "Flemington Green",
     "Home Court",
     "Mercer Bucks",
     "Monroe",
     "Montville",
     "Pickleball Lehigh Valley",
     "Players Courtyard Surge",
     "Players Courtyard Wave"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-08-31T20:19:52.070Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["f05d9fac"] = DATA;
})();
