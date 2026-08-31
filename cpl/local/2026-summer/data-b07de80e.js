(function () {
  const DATA = {
 "players": [
  {
   "name": "Casey Jannetta",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 87,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "d458764e-2d62-4817-a96e-9006fead6457",
   "winPct": 100,
   "diff": 39,
   "ppg": 21,
   "leagueRank": 29,
   "rating": 2.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Jordan Demcher",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 118,
   "totalPointsAgainst": 100,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "winPct": 83.3,
   "diff": 18,
   "ppg": 19.7,
   "leagueRank": 53,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Matt Enz",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 14,
   "losses": 4,
   "pointsWon": 367,
   "totalPointsAgainst": 285,
   "mixedWins": 8,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "winPct": 77.8,
   "diff": 82,
   "ppg": 20.4,
   "leagueRank": 20,
   "rating": 2.2,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Kim Mchugh",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 18,
   "losses": 6,
   "pointsWon": 473,
   "totalPointsAgainst": 428,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 45,
   "ppg": 19.7,
   "leagueRank": 6,
   "rating": -1,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.6,
   "playerId": "d67489d0-d69c-425e-86a7-0f7ade15ed25"
  },
  {
   "name": "Jane Meng",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 240,
   "totalPointsAgainst": 200,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "winPct": 75,
   "diff": 40,
   "ppg": 20,
   "leagueRank": 39,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Lincoln Jensen",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 239,
   "totalPointsAgainst": 218,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 21,
   "ppg": 19.9,
   "leagueRank": 42,
   "rating": 0.2,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -1.1,
   "playerId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "name": "Chris Fratinardo",
   "gender": "Male",
   "team": "Drop it Like it's Hot",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 31,
   "losses": 11,
   "pointsWon": 823,
   "totalPointsAgainst": 721,
   "mixedWins": 11,
   "mixedLosses": 7,
   "genderWins": 20,
   "genderLosses": 4,
   "clutchWins": 13,
   "clutchLosses": 5,
   "winPct": 73.8,
   "diff": 102,
   "ppg": 19.6,
   "leagueRank": 3,
   "rating": 2.1,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.9,
   "playerId": "99779531-e32b-47d5-b580-171a74844d91"
  },
  {
   "name": "Vanessa Zommi Kungne",
   "gender": "Female",
   "team": "Baby Got Backhands",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 26,
   "losses": 10,
   "pointsWon": 719,
   "totalPointsAgainst": 576,
   "mixedWins": 15,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 72.2,
   "diff": 143,
   "ppg": 20,
   "leagueRank": 1,
   "rating": 3.1,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "c1c58200-c49c-4797-9c4a-cee408744794"
  },
  {
   "name": "Priya Narahari",
   "gender": "Female",
   "team": "The Young Guns",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 23,
   "losses": 9,
   "pointsWon": 599,
   "totalPointsAgainst": 554,
   "mixedWins": 13,
   "mixedLosses": 2,
   "genderWins": 10,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 2,
   "winPct": 71.9,
   "diff": 45,
   "ppg": 18.7,
   "leagueRank": 8,
   "rating": 1,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "ca490492-2de9-4f43-a01d-e340d9f34788"
  },
  {
   "name": "Nam Barsh",
   "gender": "Female",
   "team": "Kitchen Chaos",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 40,
   "losses": 16,
   "pointsWon": 1106,
   "totalPointsAgainst": 970,
   "mixedWins": 22,
   "mixedLosses": 7,
   "genderWins": 18,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 71.4,
   "diff": 136,
   "ppg": 19.8,
   "leagueRank": 2,
   "rating": 4.5,
   "ratingGames": 56,
   "confidence": 89,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.5,
   "playerId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "name": "Kim Bohrer",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 19,
   "losses": 8,
   "pointsWon": 528,
   "totalPointsAgainst": 428,
   "mixedWins": 10,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 70.4,
   "diff": 100,
   "ppg": 19.6,
   "leagueRank": 4,
   "rating": 2.4,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "013a0ee8-d510-472a-b8fb-7d19b1d5dc31"
  },
  {
   "name": "Harrison Bohrer",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 21,
   "losses": 9,
   "pointsWon": 589,
   "totalPointsAgainst": 535,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 13,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 70,
   "diff": 54,
   "ppg": 19.6,
   "leagueRank": 7,
   "rating": -0.7,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1.4,
   "playerId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
  },
  {
   "name": "Stephanie Woomer",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 255,
   "totalPointsAgainst": 236,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "e05f57f5-c898-404e-b86f-c2460cc23b06",
   "winPct": 69.2,
   "diff": 19,
   "ppg": 19.6,
   "leagueRank": 33,
   "rating": 1.7,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Tejas Goculdas",
   "gender": "Male",
   "team": "Kitchen Chaos",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 38,
   "losses": 18,
   "pointsWon": 1092,
   "totalPointsAgainst": 978,
   "mixedWins": 20,
   "mixedLosses": 6,
   "genderWins": 18,
   "genderLosses": 12,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 67.9,
   "diff": 114,
   "ppg": 19.5,
   "leagueRank": 5,
   "rating": 4.1,
   "ratingGames": 56,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.5,
   "playerId": "53929301-6ce2-40b9-b161-9ca68e3d4eaf"
  },
  {
   "name": "Andre Cristobal",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 404,
   "totalPointsAgainst": 363,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "50d796da-0ac2-4f94-af29-212d7865f473",
   "winPct": 66.7,
   "diff": 41,
   "ppg": 19.2,
   "leagueRank": 32,
   "rating": 1.9,
   "ratingGames": 21,
   "confidence": 79,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 1
  },
  {
   "name": "Jessica Pao",
   "gender": "Female",
   "team": "The Young Guns",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 16,
   "losses": 8,
   "pointsWon": 450,
   "totalPointsAgainst": 425,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 25,
   "ppg": 18.8,
   "leagueRank": 14,
   "rating": -0.1,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.5,
   "playerId": "5e52dba4-992f-4352-b538-d2534d423c80"
  },
  {
   "name": "Claudya Elefante",
   "gender": "Female",
   "team": "Kitchen Chaos",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 18,
   "losses": 10,
   "pointsWon": 551,
   "totalPointsAgainst": 520,
   "mixedWins": 13,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 64.3,
   "diff": 31,
   "ppg": 19.7,
   "leagueRank": 9,
   "rating": 1.4,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 1.3,
   "playerId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "name": "Ed Gieske",
   "gender": "Male",
   "team": "Drop it Like it's Hot",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 19,
   "losses": 11,
   "pointsWon": 576,
   "totalPointsAgainst": 537,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 8,
   "clutchLosses": 1,
   "winPct": 63.3,
   "diff": 39,
   "ppg": 19.2,
   "leagueRank": 10,
   "rating": 0.1,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -1.3,
   "playerId": "314486b1-6723-4b33-9dba-fa5756065707"
  },
  {
   "name": "Christy Beale",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 23,
   "losses": 14,
   "pointsWon": 683,
   "totalPointsAgainst": 644,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 62.2,
   "diff": 39,
   "ppg": 18.5,
   "leagueRank": 18,
   "rating": 1,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "d034daeb-3fd8-4273-80f5-3a272ceab674"
  },
  {
   "name": "Andrew Neave",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 22,
   "losses": 14,
   "pointsWon": 680,
   "totalPointsAgainst": 638,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 14,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 61.1,
   "diff": 42,
   "ppg": 18.9,
   "leagueRank": 24,
   "rating": -1.2,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1.5,
   "playerId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0"
  },
  {
   "name": "Taina Wesner",
   "gender": "Female",
   "team": "Baby Got Backhands",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 33,
   "losses": 22,
   "pointsWon": 1058,
   "totalPointsAgainst": 947,
   "mixedWins": 14,
   "mixedLosses": 10,
   "genderWins": 19,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 60,
   "diff": 111,
   "ppg": 19.2,
   "leagueRank": 11,
   "rating": 2.4,
   "ratingGames": 56,
   "confidence": 90,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.9,
   "playerId": "583c5e68-0868-4a21-b1f0-0e68b9559476"
  },
  {
   "name": "Sarah Ross",
   "gender": "Female",
   "team": "Baby Got Backhands",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 29,
   "losses": 20,
   "pointsWon": 947,
   "totalPointsAgainst": 881,
   "mixedWins": 19,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 59.2,
   "diff": 66,
   "ppg": 19.3,
   "leagueRank": 16,
   "rating": 2.1,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 1.4,
   "playerId": "261d14c5-288e-4349-a3ed-50bad4b620c1"
  },
  {
   "name": "Frank Fang",
   "gender": "Male",
   "team": "Drop it Like it's Hot",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 29,
   "losses": 20,
   "pointsWon": 931,
   "totalPointsAgainst": 901,
   "mixedWins": 10,
   "mixedLosses": 15,
   "genderWins": 19,
   "genderLosses": 5,
   "clutchWins": 13,
   "clutchLosses": 6,
   "winPct": 59.2,
   "diff": 30,
   "ppg": 19,
   "leagueRank": 21,
   "rating": 0.8,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "77381bfa-76d6-45ca-ba7d-9dc142cacd32"
  },
  {
   "name": "Jon Wheel",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 229,
   "totalPointsAgainst": 212,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "980c2469-2017-4943-bc0d-5c49f0526f85",
   "winPct": 58.3,
   "diff": 17,
   "ppg": 19.1,
   "leagueRank": 60,
   "rating": 0.5,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -1
  },
  {
   "name": "Alex Fad",
   "gender": "Male",
   "team": "Kitchen Chaos",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 235,
   "totalPointsAgainst": 233,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 4,
   "playerId": "ecde54a3-2395-4a5b-8ccd-ffad7b992b07",
   "winPct": 58.3,
   "diff": 2,
   "ppg": 19.6,
   "leagueRank": 71,
   "rating": 0.2,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Harvey Mitchell",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 32,
   "losses": 23,
   "pointsWon": 1054,
   "totalPointsAgainst": 975,
   "mixedWins": 16,
   "mixedLosses": 12,
   "genderWins": 16,
   "genderLosses": 11,
   "clutchWins": 12,
   "clutchLosses": 9,
   "winPct": 58.2,
   "diff": 79,
   "ppg": 19.2,
   "leagueRank": 13,
   "rating": 2.6,
   "ratingGames": 55,
   "confidence": 89,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.2,
   "playerId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "name": "Tera Baccile",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 25,
   "losses": 18,
   "pointsWon": 802,
   "totalPointsAgainst": 740,
   "mixedWins": 9,
   "mixedLosses": 11,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 58.1,
   "diff": 62,
   "ppg": 18.7,
   "leagueRank": 15,
   "rating": 2.3,
   "ratingGames": 43,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "name": "Jeff Zamorski",
   "gender": "Male",
   "team": "Drop it Like it's Hot",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 32,
   "losses": 24,
   "pointsWon": 1075,
   "totalPointsAgainst": 953,
   "mixedWins": 14,
   "mixedLosses": 17,
   "genderWins": 18,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 10,
   "winPct": 57.1,
   "diff": 122,
   "ppg": 19.2,
   "leagueRank": 12,
   "rating": 2.8,
   "ratingGames": 56,
   "confidence": 89,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1,
   "playerId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "name": "Emily Ocasio",
   "gender": "Female",
   "team": "The Young Guns",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 24,
   "losses": 18,
   "pointsWon": 796,
   "totalPointsAgainst": 744,
   "mixedWins": 14,
   "mixedLosses": 7,
   "genderWins": 10,
   "genderLosses": 11,
   "clutchWins": 10,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 52,
   "ppg": 19,
   "leagueRank": 17,
   "rating": 2.7,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.3,
   "playerId": "12584e84-045d-4de1-8edc-7ccbcb1ee27a"
  },
  {
   "name": "Erika Richards",
   "gender": "Female",
   "team": "Drop it Like it's Hot",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 28,
   "losses": 21,
   "pointsWon": 928,
   "totalPointsAgainst": 889,
   "mixedWins": 11,
   "mixedLosses": 10,
   "genderWins": 17,
   "genderLosses": 11,
   "clutchWins": 10,
   "clutchLosses": 9,
   "winPct": 57.1,
   "diff": 39,
   "ppg": 18.9,
   "leagueRank": 19,
   "rating": 1.9,
   "ratingGames": 49,
   "confidence": 89,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "065e606f-3722-4434-8848-28e4d10ccabd"
  },
  {
   "name": "Jonathan Goldner",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 271,
   "totalPointsAgainst": 260,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 3,
   "playerId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "winPct": 57.1,
   "diff": 11,
   "ppg": 19.4,
   "leagueRank": 54,
   "rating": 2,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Julia Plein",
   "gender": "Female",
   "team": "The Young Guns",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 131,
   "totalPointsAgainst": 120,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "f3d99274-413c-4720-9c8d-1a71f9b2e717",
   "winPct": 57.1,
   "diff": 11,
   "ppg": 18.7,
   "leagueRank": 68,
   "rating": 2.5,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Peilei Cao",
   "gender": "Female",
   "team": "Drop it Like it's Hot",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 128,
   "totalPointsAgainst": 131,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "52c4a07c-503b-4413-b169-0ea86004eb5f",
   "winPct": 57.1,
   "diff": -3,
   "ppg": 18.3,
   "leagueRank": 78,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0
  },
  {
   "name": "Michael Taylor",
   "gender": "Male",
   "team": "Baby Got Backhands",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 27,
   "losses": 22,
   "pointsWon": 942,
   "totalPointsAgainst": 864,
   "mixedWins": 17,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 10,
   "winPct": 55.1,
   "diff": 78,
   "ppg": 19.2,
   "leagueRank": 22,
   "rating": 2,
   "ratingGames": 49,
   "confidence": 87,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1,
   "playerId": "23871699-a12b-4eb6-89cb-62fec790e3fb"
  },
  {
   "name": "Vicki Main",
   "gender": "Female",
   "team": "The Young Guns",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 28,
   "losses": 23,
   "pointsWon": 947,
   "totalPointsAgainst": 885,
   "mixedWins": 12,
   "mixedLosses": 13,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 54.9,
   "diff": 62,
   "ppg": 18.6,
   "leagueRank": 25,
   "rating": 1.6,
   "ratingGames": 51,
   "confidence": 89,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "name": "Matthew Shusterman",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 27,
   "losses": 23,
   "pointsWon": 937,
   "totalPointsAgainst": 881,
   "mixedWins": 18,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 54,
   "diff": 56,
   "ppg": 18.7,
   "leagueRank": 23,
   "rating": 1.1,
   "ratingGames": 50,
   "confidence": 89,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "c979c513-454d-434c-8a65-3b5fea8a8d7d"
  },
  {
   "name": "Graham Heavenrich",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 560,
   "totalPointsAgainst": 549,
   "mixedWins": 5,
   "mixedLosses": 10,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 53.3,
   "diff": 11,
   "ppg": 18.7,
   "leagueRank": 31,
   "rating": 0.6,
   "ratingGames": 31,
   "confidence": 84,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90"
  },
  {
   "name": "Carolina Reese",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 9,
   "losses": 8,
   "pointsWon": 310,
   "totalPointsAgainst": 321,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 52.9,
   "diff": -11,
   "ppg": 18.2,
   "leagueRank": 51,
   "rating": -2.1,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "8f93a05d-c51e-48c4-901c-4ddbe881b309"
  },
  {
   "name": "Kevin Basch",
   "gender": "Male",
   "team": "Drop it Like it's Hot",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 19,
   "losses": 17,
   "pointsWon": 656,
   "totalPointsAgainst": 672,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 52.8,
   "diff": -16,
   "ppg": 18.2,
   "leagueRank": 37,
   "rating": -1.8,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1,
   "playerId": "8c307e80-6a67-476f-be7c-de3b1442b95a"
  },
  {
   "name": "Jingwei Wu",
   "gender": "Male",
   "team": "Baby Got Backhands",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 29,
   "losses": 27,
   "pointsWon": 1060,
   "totalPointsAgainst": 998,
   "mixedWins": 16,
   "mixedLosses": 9,
   "genderWins": 13,
   "genderLosses": 18,
   "clutchWins": 6,
   "clutchLosses": 11,
   "winPct": 51.8,
   "diff": 62,
   "ppg": 18.9,
   "leagueRank": 27,
   "rating": 2.3,
   "ratingGames": 56,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.3,
   "playerId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "name": "Andrew Cho",
   "gender": "Male",
   "team": "Baby Got Backhands",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 15,
   "losses": 14,
   "pointsWon": 533,
   "totalPointsAgainst": 550,
   "mixedWins": 10,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 51.7,
   "diff": -17,
   "ppg": 18.4,
   "leagueRank": 34,
   "rating": -1.3,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "51ed4464-321f-4720-bd77-10936d1aed4f"
  },
  {
   "name": "James Price",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 19,
   "losses": 18,
   "pointsWon": 659,
   "totalPointsAgainst": 658,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 51.4,
   "diff": 1,
   "ppg": 17.8,
   "leagueRank": 35,
   "rating": -0.5,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "c7a0b075-272d-4427-98c0-02955690731f"
  },
  {
   "name": "Kathy Cripps",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 21,
   "losses": 20,
   "pointsWon": 766,
   "totalPointsAgainst": 726,
   "mixedWins": 10,
   "mixedLosses": 10,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 51.2,
   "diff": 40,
   "ppg": 18.7,
   "leagueRank": 26,
   "rating": 1.4,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "6fbd0766-6774-4ed3-8fc2-10e7f2330ec0"
  },
  {
   "name": "Allison Hartman",
   "gender": "Female",
   "team": "The Young Guns",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 21,
   "losses": 20,
   "pointsWon": 761,
   "totalPointsAgainst": 749,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 51.2,
   "diff": 12,
   "ppg": 18.6,
   "leagueRank": 36,
   "rating": -0.5,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "a6b783cc-7aeb-476e-adcc-da306772071c"
  },
  {
   "name": "Megan Harvey",
   "gender": "Female",
   "team": "Drop it Like it's Hot",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 28,
   "losses": 27,
   "pointsWon": 1026,
   "totalPointsAgainst": 982,
   "mixedWins": 20,
   "mixedLosses": 11,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 7,
   "clutchLosses": 13,
   "winPct": 50.9,
   "diff": 44,
   "ppg": 18.7,
   "leagueRank": 28,
   "rating": 2.2,
   "ratingGames": 55,
   "confidence": 89,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.5,
   "playerId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161"
  },
  {
   "name": "Matt Hancock",
   "gender": "Male",
   "team": "Drop it Like it's Hot",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 18,
   "losses": 18,
   "pointsWon": 674,
   "totalPointsAgainst": 652,
   "mixedWins": 4,
   "mixedLosses": 14,
   "genderWins": 14,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 50,
   "diff": 22,
   "ppg": 18.7,
   "leagueRank": 30,
   "rating": 0,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.9,
   "playerId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad"
  },
  {
   "name": "Sal Bwint",
   "gender": "Male",
   "team": "Baby Got Backhands",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 15,
   "losses": 15,
   "pointsWon": 553,
   "totalPointsAgainst": 550,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 50,
   "diff": 3,
   "ppg": 18.4,
   "leagueRank": 38,
   "rating": -0.8,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -1.1,
   "playerId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e"
  },
  {
   "name": "Jacinth Chikkala",
   "gender": "Male",
   "team": "Drop it Like it's Hot",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 265,
   "totalPointsAgainst": 262,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 5,
   "playerId": "c586ef6f-ad9c-4a4d-b16b-499622349707",
   "winPct": 50,
   "diff": 3,
   "ppg": 18.9,
   "leagueRank": 48,
   "rating": 0.4,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Jr Burrs",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 108,
   "totalPointsAgainst": 107,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "870112b1-afc3-4ff6-b784-7f872210bf37",
   "winPct": 50,
   "diff": 1,
   "ppg": 18,
   "leagueRank": 85,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0
  },
  {
   "name": "Nancy Blank",
   "gender": "Female",
   "team": "Baby Got Backhands",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 15,
   "losses": 15,
   "pointsWon": 529,
   "totalPointsAgainst": 552,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": -23,
   "ppg": 17.6,
   "leagueRank": 44,
   "rating": -1.8,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -1,
   "playerId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7"
  },
  {
   "name": "Todd Law",
   "gender": "Male",
   "team": "Kitchen Chaos",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 308,
   "totalPointsAgainst": 339,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -31,
   "ppg": 17.1,
   "leagueRank": 52,
   "rating": -1,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": -0.9,
   "playerId": "9b0fe5d7-4586-4629-8408-928794ca1c3b"
  },
  {
   "name": "Jenn Smith",
   "gender": "Female",
   "team": "Baby Got Backhands",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 402,
   "totalPointsAgainst": 436,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -34,
   "ppg": 16.8,
   "leagueRank": 46,
   "rating": -1.8,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.8,
   "playerId": "32a22b16-1052-4c22-bdf9-9b48a1d73c84"
  },
  {
   "name": "Tracey Carney",
   "gender": "Female",
   "team": "Kitchen Chaos",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 12,
   "losses": 13,
   "pointsWon": 450,
   "totalPointsAgainst": 475,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 48,
   "diff": -25,
   "ppg": 18,
   "leagueRank": 40,
   "rating": -0.8,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "2b02f2fe-f8f7-42a7-bb36-d3f2322cec7c"
  },
  {
   "name": "Scott Kacelowicz",
   "gender": "Male",
   "team": "Baby Got Backhands",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 13,
   "losses": 17,
   "pointsWon": 554,
   "totalPointsAgainst": 560,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 6,
   "playerId": "388605d8-e76a-43a2-bcd8-e48a6215d38b",
   "winPct": 43.3,
   "diff": -6,
   "ppg": 18.5,
   "leagueRank": 41,
   "rating": -0.7,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0
  },
  {
   "name": "Mary Callaghan",
   "gender": "Female",
   "team": "Baby Got Backhands",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 16,
   "losses": 21,
   "pointsWon": 663,
   "totalPointsAgainst": 697,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 43.2,
   "diff": -34,
   "ppg": 17.9,
   "leagueRank": 50,
   "rating": -1.4,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "7ed1c503-4fef-4347-87c6-f8ca1a4acdd0"
  },
  {
   "name": "Evan Oneill",
   "gender": "Male",
   "team": "Baby Got Backhands",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 115,
   "totalPointsAgainst": 130,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "8e119985-738c-4059-ad64-069c01252df3",
   "winPct": 42.9,
   "diff": -15,
   "ppg": 16.4,
   "leagueRank": 88,
   "rating": -0.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Keith Goldberg",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 375,
   "totalPointsAgainst": 409,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 3,
   "playerId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "winPct": 42.9,
   "diff": -34,
   "ppg": 17.9,
   "leagueRank": 45,
   "rating": 0.4,
   "ratingGames": 21,
   "confidence": 79,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Chris Norton",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 15,
   "losses": 22,
   "pointsWon": 644,
   "totalPointsAgainst": 697,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 40.5,
   "diff": -53,
   "ppg": 17.4,
   "leagueRank": 59,
   "rating": -2.5,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "395868e3-8573-41ad-9b13-84b6a7bf7f35"
  },
  {
   "name": "Jared Quereau",
   "gender": "Male",
   "team": "The Young Guns",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 14,
   "losses": 21,
   "pointsWon": 608,
   "totalPointsAgainst": 688,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 11,
   "clutchWins": 9,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -80,
   "ppg": 17.4,
   "leagueRank": 57,
   "rating": -0.6,
   "ratingGames": 35,
   "confidence": 84,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.6,
   "playerId": "b1814193-753a-460b-8911-8722c57efb86"
  },
  {
   "name": "Robert Block",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 17,
   "losses": 26,
   "pointsWon": 762,
   "totalPointsAgainst": 818,
   "mixedWins": 10,
   "mixedLosses": 12,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 39.5,
   "diff": -56,
   "ppg": 17.7,
   "leagueRank": 56,
   "rating": -2.2,
   "ratingGames": 43,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "23d1d322-f31d-46b3-bf95-d86faab58b06"
  },
  {
   "name": "Kathy BernéT",
   "gender": "Female",
   "team": "Drop it Like it's Hot",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 14,
   "losses": 22,
   "pointsWon": 636,
   "totalPointsAgainst": 682,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 38.9,
   "diff": -46,
   "ppg": 17.7,
   "leagueRank": 55,
   "rating": -1.9,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.7,
   "playerId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4"
  },
  {
   "name": "Jamila Sefiane",
   "gender": "Female",
   "team": "Kitchen Chaos",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 14,
   "losses": 22,
   "pointsWon": 638,
   "totalPointsAgainst": 700,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 38.9,
   "diff": -62,
   "ppg": 17.7,
   "leagueRank": 47,
   "rating": -0.9,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.5,
   "playerId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "name": "Mara Boast",
   "gender": "Female",
   "team": "The Young Guns",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 8,
   "losses": 13,
   "pointsWon": 392,
   "totalPointsAgainst": 405,
   "mixedWins": 2,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 38.1,
   "diff": -13,
   "ppg": 18.7,
   "leagueRank": 43,
   "rating": 1.1,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.7,
   "playerId": "75a01ddc-a43e-4853-bff8-5f88628c2204"
  },
  {
   "name": "Jenna Posner",
   "gender": "Female",
   "team": "Drop it Like it's Hot",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 412,
   "totalPointsAgainst": 452,
   "mixedWins": 4,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 37.5,
   "diff": -40,
   "ppg": 17.2,
   "leagueRank": 61,
   "rating": -2.5,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.9,
   "playerId": "6be7fecc-58ce-4a10-b2f9-bf98567f3427"
  },
  {
   "name": "Katherine Maruyama",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 13,
   "losses": 22,
   "pointsWon": 605,
   "totalPointsAgainst": 645,
   "mixedWins": 5,
   "mixedLosses": 14,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 37.1,
   "diff": -40,
   "ppg": 17.3,
   "leagueRank": 49,
   "rating": 1.2,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.6,
   "playerId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "name": "Jodi Evans",
   "gender": "Female",
   "team": "Baby Got Backhands",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 8,
   "losses": 16,
   "pointsWon": 430,
   "totalPointsAgainst": 459,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 33.3,
   "diff": -29,
   "ppg": 17.9,
   "leagueRank": 64,
   "rating": -1.7,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.9,
   "playerId": "0470dc02-2e17-4eeb-b282-4767b17e733e"
  },
  {
   "name": "Michael Finkelstein",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 9,
   "losses": 18,
   "pointsWon": 474,
   "totalPointsAgainst": 511,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 33.3,
   "diff": -37,
   "ppg": 17.6,
   "leagueRank": 58,
   "rating": 0.1,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.1,
   "playerId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "name": "Russell Cripps",
   "gender": "Male",
   "team": "Kitchen Chaos",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 12,
   "losses": 24,
   "pointsWon": 620,
   "totalPointsAgainst": 723,
   "mixedWins": 6,
   "mixedLosses": 12,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 33.3,
   "diff": -103,
   "ppg": 17.2,
   "leagueRank": 63,
   "rating": -2.1,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "43d2bf2c-e732-4ce8-adae-035d989fa792"
  },
  {
   "name": "Sandro Stefanelli",
   "gender": "Male",
   "team": "Kitchen Chaos",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 17,
   "losses": 35,
   "pointsWon": 888,
   "totalPointsAgainst": 1036,
   "mixedWins": 8,
   "mixedLosses": 20,
   "genderWins": 9,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 12,
   "winPct": 32.7,
   "diff": -148,
   "ppg": 17.1,
   "leagueRank": 65,
   "rating": -1.5,
   "ratingGames": 52,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "1872d8d8-f958-4747-af3a-443d5f88a1c3"
  },
  {
   "name": "David Marchese",
   "gender": "Male",
   "team": "Kitchen Chaos",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 6,
   "losses": 13,
   "pointsWon": 337,
   "totalPointsAgainst": 374,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 31.6,
   "diff": -37,
   "ppg": 17.7,
   "leagueRank": 73,
   "rating": -1.8,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "name": "Sandra Thompson",
   "gender": "Female",
   "team": "Kitchen Chaos",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 9,
   "losses": 21,
   "pointsWon": 491,
   "totalPointsAgainst": 581,
   "mixedWins": 5,
   "mixedLosses": 10,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 30,
   "diff": -90,
   "ppg": 16.4,
   "leagueRank": 67,
   "rating": -2.1,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0,
   "playerId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "name": "Jim Darcangelo",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 117,
   "totalPointsAgainst": 142,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "winPct": 28.6,
   "diff": -25,
   "ppg": 16.7,
   "leagueRank": 89,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 2.2
  },
  {
   "name": "Madeleine Shusterman",
   "gender": "Female",
   "team": "Shrinky Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 114,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "357f1431-e723-4249-9c5c-c8ffa1a43a57",
   "winPct": 28.6,
   "diff": -29,
   "ppg": 16.3,
   "leagueRank": 90,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 2.6
  },
  {
   "name": "Kathleen Dougherty",
   "gender": "Female",
   "team": "The Young Guns",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 113,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "winPct": 28.6,
   "diff": -30,
   "ppg": 16.1,
   "leagueRank": 92,
   "rating": -1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Dan Ladislaw",
   "gender": "Male",
   "team": "Shrinky Dinks",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 8,
   "losses": 20,
   "pointsWon": 500,
   "totalPointsAgainst": 556,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 28.6,
   "diff": -56,
   "ppg": 17.9,
   "leagueRank": 62,
   "rating": 0.8,
   "ratingGames": 28,
   "confidence": 81,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.7,
   "playerId": "31b78615-afb3-4856-8cb1-de2b8d43a115"
  },
  {
   "name": "Ange Bradley",
   "gender": "Female",
   "team": "Drop it Like it's Hot",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 293,
   "totalPointsAgainst": 365,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 27.8,
   "diff": -72,
   "ppg": 16.3,
   "leagueRank": 81,
   "rating": -2.5,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "0ea06752-4e43-4708-8d85-b0499137f61e"
  },
  {
   "name": "Christine Dugan",
   "gender": "Female",
   "team": "Kitchen Chaos",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 9,
   "losses": 24,
   "pointsWon": 554,
   "totalPointsAgainst": 654,
   "mixedWins": 3,
   "mixedLosses": 12,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 27.3,
   "diff": -100,
   "ppg": 16.8,
   "leagueRank": 66,
   "rating": -1.2,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "name": "Jennifer Land",
   "gender": "Female",
   "team": "Kitchen Chaos",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 8,
   "losses": 22,
   "pointsWon": 513,
   "totalPointsAgainst": 600,
   "mixedWins": 3,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 26.7,
   "diff": -87,
   "ppg": 17.1,
   "leagueRank": 69,
   "rating": -2.8,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": -1.2,
   "playerId": "f5d084ba-6230-41b2-99f9-f014c072276a"
  },
  {
   "name": "Barb Flynn",
   "gender": "Female",
   "team": "The Young Guns",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 8,
   "losses": 22,
   "pointsWon": 494,
   "totalPointsAgainst": 588,
   "mixedWins": 4,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 26.7,
   "diff": -94,
   "ppg": 16.5,
   "leagueRank": 77,
   "rating": -4.3,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.9,
   "playerId": "3bb1ba9d-c06d-4eea-9baa-37aad39428f3"
  },
  {
   "name": "Tim Phelan",
   "gender": "Male",
   "team": "Baby Got Backhands",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 6,
   "losses": 18,
   "pointsWon": 411,
   "totalPointsAgainst": 478,
   "mixedWins": 2,
   "mixedLosses": 10,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 25,
   "diff": -67,
   "ppg": 17.1,
   "leagueRank": 76,
   "rating": -4.3,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -1.7,
   "playerId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "name": "Linda Zhu",
   "gender": "Female",
   "team": "Drop it Like it's Hot",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 9,
   "losses": 27,
   "pointsWon": 613,
   "totalPointsAgainst": 723,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 10,
   "winPct": 25,
   "diff": -110,
   "ppg": 17,
   "leagueRank": 74,
   "rating": -2.6,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "name": "Marykristin Haskell",
   "gender": "Female",
   "team": "Drop it Like it's Hot",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 228,
   "totalPointsAgainst": 257,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 23.1,
   "diff": -29,
   "ppg": 17.5,
   "leagueRank": 82,
   "rating": 0.2,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.3,
   "playerId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "name": "Jean Rosenbaum",
   "gender": "Female",
   "team": "Kitchen Chaos",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 4,
   "losses": 14,
   "pointsWon": 302,
   "totalPointsAgainst": 345,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 22.2,
   "diff": -43,
   "ppg": 16.8,
   "leagueRank": 75,
   "rating": -0.2,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.1,
   "playerId": "2b4a12ef-68c9-4ca5-a8f7-d1d58503bf1c"
  },
  {
   "name": "Jeff Jensen",
   "gender": "Male",
   "team": "Baby Got Backhands",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 4,
   "losses": 14,
   "pointsWon": 289,
   "totalPointsAgainst": 363,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 22.2,
   "diff": -74,
   "ppg": 16.1,
   "leagueRank": 83,
   "rating": -3.1,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0,
   "playerId": "42f84841-e4ed-4503-ae05-c8fe6c351ca7"
  },
  {
   "name": "Debra Schlosser",
   "gender": "Female",
   "team": "Drop it Like it's Hot",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 4,
   "losses": 14,
   "pointsWon": 278,
   "totalPointsAgainst": 356,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 22.2,
   "diff": -78,
   "ppg": 15.4,
   "leagueRank": 87,
   "rating": -4,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "c06ede91-f79c-483b-ae5e-34baae517dad"
  },
  {
   "name": "Saul Barsh",
   "gender": "Male",
   "team": "Kitchen Chaos",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 6,
   "losses": 42,
   "pointsWon": 794,
   "totalPointsAgainst": 989,
   "mixedWins": 4,
   "mixedLosses": 20,
   "genderWins": 2,
   "genderLosses": 22,
   "clutchWins": 2,
   "clutchLosses": 11,
   "winPct": 12.5,
   "diff": -195,
   "ppg": 16.5,
   "leagueRank": 80,
   "rating": -4.7,
   "ratingGames": 48,
   "confidence": 87,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -1.1,
   "playerId": "0a78359b-1de2-4ba8-adb8-d2006d923908"
  },
  {
   "name": "Quincy Zhang",
   "gender": "Female",
   "team": "Kitchen Chaos",
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
   "playerId": "30c66392-1494-4e99-a538-b3f06dda6681"
  },
  {
   "name": "Jeff Merten",
   "gender": "Male",
   "team": "Baby Got Backhands",
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
   "leagueRank": 95,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "545fe5ef-8c22-454d-b251-1c26ef5b4151"
  }
 ],
 "teams": [
  {
   "name": "The Young Guns",
   "w": 6,
   "l": 2,
   "pf": 4895,
   "pa": 4727,
   "gw": 143,
   "gl": 113,
   "diff": 168,
   "gameDiff": 30,
   "power": 0.5,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     67,
     61
    ],
    "male": [
     42,
     22
    ],
    "female": [
     34,
     30
    ]
   }
  },
  {
   "name": "Drop it Like it's Hot",
   "w": 5,
   "l": 3,
   "pf": 4841,
   "pa": 4834,
   "gw": 129,
   "gl": 127,
   "diff": 7,
   "gameDiff": 2,
   "power": 0.2,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     56,
     72
    ],
    "male": [
     49,
     15
    ],
    "female": [
     24,
     40
    ]
   }
  },
  {
   "name": "Baby Got Backhands",
   "w": 4,
   "l": 4,
   "pf": 4855,
   "pa": 4773,
   "gw": 129,
   "gl": 127,
   "diff": 82,
   "gameDiff": 2,
   "power": 0.3,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     73,
     55
    ],
    "male": [
     23,
     41
    ],
    "female": [
     33,
     31
    ]
   }
  },
  {
   "name": "Shrinky Dinks",
   "w": 4,
   "l": 4,
   "pf": 4792,
   "pa": 4753,
   "gw": 129,
   "gl": 127,
   "diff": 39,
   "gameDiff": 2,
   "power": 0.4,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     64,
     64
    ],
    "male": [
     23,
     41
    ],
    "female": [
     42,
     22
    ]
   }
  },
  {
   "name": "Kitchen Chaos",
   "w": 1,
   "l": 7,
   "pf": 4748,
   "pa": 5044,
   "gw": 110,
   "gl": 146,
   "diff": -296,
   "gameDiff": -36,
   "power": -0.3,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     60,
     68
    ],
    "male": [
     23,
     41
    ],
    "female": [
     27,
     37
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Robert Block",
   "b": "Kathy Cripps",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 7.3,
   "avgExpected": 2,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "6fbd0766-6774-4ed3-8fc2-10e7f2330ec0"
  },
  {
   "a": "Tejas Goculdas",
   "b": "Claudya Elefante",
   "team": "Kitchen Chaos",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 5.6,
   "avgExpected": 2.2,
   "aId": "53929301-6ce2-40b9-b161-9ca68e3d4eaf",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Jenn Smith",
   "b": "Sal Bwint",
   "team": "Baby Got Backhands",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 2.3,
   "avgExpected": -1.9,
   "aId": "32a22b16-1052-4c22-bdf9-9b48a1d73c84",
   "bId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e"
  },
  {
   "a": "Jamila Sefiane",
   "b": "Nam Barsh",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 6.3,
   "avgExpected": 1.6,
   "aId": "c0851114-0611-4b02-9589-fd249179eabc",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Todd Law",
   "b": "Sandra Thompson",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2,
   "avgActual": 2,
   "avgExpected": -1.9,
   "aId": "9b0fe5d7-4586-4629-8408-928794ca1c3b",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "a": "Ed Gieske",
   "b": "Frank Fang",
   "team": "Drop it Like it's Hot",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 6.8,
   "avgExpected": 3.3,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "77381bfa-76d6-45ca-ba7d-9dc142cacd32"
  },
  {
   "a": "Robert Block",
   "b": "Michael Finkelstein",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 0,
   "avgExpected": -4,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Andrew Cho",
   "b": "Vanessa Zommi Kungne",
   "team": "Baby Got Backhands",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 6.5,
   "avgExpected": 3,
   "aId": "51ed4464-321f-4720-bd77-10936d1aed4f",
   "bId": "c1c58200-c49c-4797-9c4a-cee408744794"
  },
  {
   "a": "Vicki Main",
   "b": "Allison Hartman",
   "team": "The Young Guns",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.6,
   "avgActual": 2.2,
   "avgExpected": -0.5,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "a6b783cc-7aeb-476e-adcc-da306772071c"
  },
  {
   "a": "Scott Kacelowicz",
   "b": "Vanessa Zommi Kungne",
   "team": "Baby Got Backhands",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5.2,
   "avgExpected": 2.5,
   "aId": "388605d8-e76a-43a2-bcd8-e48a6215d38b",
   "bId": "c1c58200-c49c-4797-9c4a-cee408744794"
  },
  {
   "a": "Kim Bohrer",
   "b": "Tera Baccile",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 11.7,
   "avgExpected": 7.9,
   "aId": "013a0ee8-d510-472a-b8fb-7d19b1d5dc31",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Harvey Mitchell",
   "team": "The Young Guns",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5,
   "avgExpected": 1.8,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "a": "Matthew Shusterman",
   "b": "Tera Baccile",
   "team": "Shrinky Dinks",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 6.5,
   "avgExpected": 3.2,
   "aId": "c979c513-454d-434c-8a65-3b5fea8a8d7d",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Matthew Shusterman",
   "b": "Christy Beale",
   "team": "Shrinky Dinks",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6.3,
   "avgExpected": 3.4,
   "aId": "c979c513-454d-434c-8a65-3b5fea8a8d7d",
   "bId": "d034daeb-3fd8-4273-80f5-3a272ceab674"
  },
  {
   "a": "Kathy BernéT",
   "b": "Linda Zhu",
   "team": "Drop it Like it's Hot",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.5,
   "avgActual": -0.8,
   "avgExpected": -3.6,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Tera Baccile",
   "team": "Shrinky Dinks",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.5,
   "avgActual": 2.3,
   "avgExpected": -0.2,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Mary Callaghan",
   "b": "Sal Bwint",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.3,
   "avgExpected": -0.2,
   "aId": "7ed1c503-4fef-4347-87c6-f8ca1a4acdd0",
   "bId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e"
  },
  {
   "a": "Ed Gieske",
   "b": "Debra Schlosser",
   "team": "Drop it Like it's Hot",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 0.7,
   "avgExpected": -2.8,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "c06ede91-f79c-483b-ae5e-34baae517dad"
  },
  {
   "a": "Megan Harvey",
   "b": "Chris Fratinardo",
   "team": "Drop it Like it's Hot",
   "n": 12,
   "w": 9,
   "l": 3,
   "synergy": 1.4,
   "avgActual": 3.2,
   "avgExpected": 1.3,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "99779531-e32b-47d5-b580-171a74844d91"
  },
  {
   "a": "Michael Taylor",
   "b": "Sarah Ross",
   "team": "Baby Got Backhands",
   "n": 13,
   "w": 9,
   "l": 4,
   "synergy": 1.3,
   "avgActual": 2.8,
   "avgExpected": 1.1,
   "aId": "23871699-a12b-4eb6-89cb-62fec790e3fb",
   "bId": "261d14c5-288e-4349-a3ed-50bad4b620c1"
  },
  {
   "a": "Christine Dugan",
   "b": "Russell Cripps",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": -0.7,
   "avgExpected": -3.4,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "43d2bf2c-e732-4ce8-adae-035d989fa792"
  },
  {
   "a": "Jean Rosenbaum",
   "b": "Jamila Sefiane",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 1,
   "avgExpected": -2.1,
   "aId": "2b4a12ef-68c9-4ca5-a8f7-d1d58503bf1c",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Kathy Cripps",
   "b": "Jane Meng",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 8.7,
   "avgExpected": 5.6,
   "aId": "6fbd0766-6774-4ed3-8fc2-10e7f2330ec0",
   "bId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "a": "Erika Richards",
   "b": "Kathy BernéT",
   "team": "Drop it Like it's Hot",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 2.1,
   "avgExpected": 0.1,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4"
  },
  {
   "a": "Barb Flynn",
   "b": "Jon Wheel",
   "team": "The Young Guns",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 2.3,
   "avgExpected": -0.4,
   "aId": "3bb1ba9d-c06d-4eea-9baa-37aad39428f3",
   "bId": "980c2469-2017-4943-bc0d-5c49f0526f85"
  },
  {
   "a": "James Price",
   "b": "Matthew Shusterman",
   "team": "Shrinky Dinks",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 5,
   "avgExpected": 2.9,
   "aId": "c7a0b075-272d-4427-98c0-02955690731f",
   "bId": "c979c513-454d-434c-8a65-3b5fea8a8d7d"
  },
  {
   "a": "Sarah Ross",
   "b": "Jingwei Wu",
   "team": "Baby Got Backhands",
   "n": 14,
   "w": 9,
   "l": 5,
   "synergy": 1.2,
   "avgActual": 3.1,
   "avgExpected": 1.5,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "Taina Wesner",
   "b": "Jingwei Wu",
   "team": "Baby Got Backhands",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 3.4,
   "avgExpected": 1.7,
   "aId": "583c5e68-0868-4a21-b1f0-0e68b9559476",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "Kevin Basch",
   "b": "Matt Hancock",
   "team": "Drop it Like it's Hot",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.1,
   "avgExpected": 0.2,
   "aId": "8c307e80-6a67-476f-be7c-de3b1442b95a",
   "bId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad"
  },
  {
   "a": "Erika Richards",
   "b": "Jenna Posner",
   "team": "Drop it Like it's Hot",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.7,
   "avgExpected": 0.9,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "6be7fecc-58ce-4a10-b2f9-bf98567f3427"
  },
  {
   "a": "Christine Dugan",
   "b": "Nam Barsh",
   "team": "Kitchen Chaos",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 0.8,
   "avgExpected": -0.9,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Jessica Pao",
   "team": "The Young Guns",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 1.7,
   "avgExpected": -0.8,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "5e52dba4-992f-4352-b538-d2534d423c80"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Jamila Sefiane",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 0,
   "avgExpected": -2,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Emily Ocasio",
   "b": "Vicki Main",
   "team": "The Young Guns",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.5,
   "avgExpected": 1.7,
   "aId": "12584e84-045d-4de1-8edc-7ccbcb1ee27a",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "James Price",
   "b": "Kim Mchugh",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 4.3,
   "avgExpected": 2.3,
   "aId": "c7a0b075-272d-4427-98c0-02955690731f",
   "bId": "d67489d0-d69c-425e-86a7-0f7ade15ed25"
  },
  {
   "a": "Sal Bwint",
   "b": "Tim Phelan",
   "team": "Baby Got Backhands",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 0.3,
   "avgExpected": -1.1,
   "aId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Russell Cripps",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.5,
   "avgExpected": -2.3,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "43d2bf2c-e732-4ce8-adae-035d989fa792"
  },
  {
   "a": "Erika Richards",
   "b": "Megan Harvey",
   "team": "Drop it Like it's Hot",
   "n": 14,
   "w": 8,
   "l": 6,
   "synergy": 0.9,
   "avgActual": 1.6,
   "avgExpected": 0.4,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161"
  },
  {
   "a": "Taina Wesner",
   "b": "Mary Callaghan",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2,
   "avgExpected": -0.1,
   "aId": "583c5e68-0868-4a21-b1f0-0e68b9559476",
   "bId": "7ed1c503-4fef-4347-87c6-f8ca1a4acdd0"
  },
  {
   "a": "Carolina Reese",
   "b": "James Price",
   "team": "Shrinky Dinks",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1.5,
   "avgExpected": 0,
   "aId": "8f93a05d-c51e-48c4-901c-4ddbe881b309",
   "bId": "c7a0b075-272d-4427-98c0-02955690731f"
  },
  {
   "a": "Matt Enz",
   "b": "Vicki Main",
   "team": "The Young Guns",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 7.3,
   "avgExpected": 5.6,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Kevin Basch",
   "b": "Jeff Zamorski",
   "team": "Drop it Like it's Hot",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 3.2,
   "avgExpected": 1.7,
   "aId": "8c307e80-6a67-476f-be7c-de3b1442b95a",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Erika Richards",
   "b": "Kevin Basch",
   "team": "Drop it Like it's Hot",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2,
   "avgExpected": 0,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "8c307e80-6a67-476f-be7c-de3b1442b95a"
  },
  {
   "a": "Dan Ladislaw",
   "b": "Michael Finkelstein",
   "team": "Shrinky Dinks",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.7,
   "avgExpected": -2.2,
   "aId": "31b78615-afb3-4856-8cb1-de2b8d43a115",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Christy Beale",
   "b": "Kim Mchugh",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.5,
   "aId": "d034daeb-3fd8-4273-80f5-3a272ceab674",
   "bId": "d67489d0-d69c-425e-86a7-0f7ade15ed25"
  },
  {
   "a": "Robert Block",
   "b": "Chris Norton",
   "team": "Shrinky Dinks",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -1.2,
   "avgExpected": -2.5,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "395868e3-8573-41ad-9b13-84b6a7bf7f35"
  },
  {
   "a": "Emily Ocasio",
   "b": "Jared Quereau",
   "team": "The Young Guns",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -0.7,
   "avgExpected": -1.8,
   "aId": "12584e84-045d-4de1-8edc-7ccbcb1ee27a",
   "bId": "b1814193-753a-460b-8911-8722c57efb86"
  },
  {
   "a": "Chris Norton",
   "b": "Jane Meng",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 4.7,
   "avgExpected": 3,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "a": "Sandra Thompson",
   "b": "Nam Barsh",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1.8,
   "avgExpected": 0.4,
   "aId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Kathy Cripps",
   "b": "Matthew Shusterman",
   "team": "Shrinky Dinks",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 3.6,
   "avgExpected": 2.3,
   "aId": "6fbd0766-6774-4ed3-8fc2-10e7f2330ec0",
   "bId": "c979c513-454d-434c-8a65-3b5fea8a8d7d"
  },
  {
   "a": "Kim Bohrer",
   "b": "Matthew Shusterman",
   "team": "Shrinky Dinks",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.3,
   "avgExpected": 3.3,
   "aId": "013a0ee8-d510-472a-b8fb-7d19b1d5dc31",
   "bId": "c979c513-454d-434c-8a65-3b5fea8a8d7d"
  },
  {
   "a": "Michael Taylor",
   "b": "Taina Wesner",
   "team": "Baby Got Backhands",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 1.4,
   "aId": "23871699-a12b-4eb6-89cb-62fec790e3fb",
   "bId": "583c5e68-0868-4a21-b1f0-0e68b9559476"
  },
  {
   "a": "Tracey Carney",
   "b": "Jennifer Land",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0,
   "avgExpected": -1.2,
   "aId": "2b02f2fe-f8f7-42a7-bb36-d3f2322cec7c",
   "bId": "f5d084ba-6230-41b2-99f9-f014c072276a"
  },
  {
   "a": "Saul Barsh",
   "b": "Jennifer Land",
   "team": "Kitchen Chaos",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": 0.6,
   "avgActual": -3.7,
   "avgExpected": -4.6,
   "aId": "0a78359b-1de2-4ba8-adb8-d2006d923908",
   "bId": "f5d084ba-6230-41b2-99f9-f014c072276a"
  },
  {
   "a": "Nancy Blank",
   "b": "Jodi Evans",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -1,
   "avgExpected": -2.5,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "0470dc02-2e17-4eeb-b282-4767b17e733e"
  },
  {
   "a": "Jenna Posner",
   "b": "Matt Hancock",
   "team": "Drop it Like it's Hot",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 0.6,
   "avgExpected": -0.4,
   "aId": "6be7fecc-58ce-4a10-b2f9-bf98567f3427",
   "bId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad"
  },
  {
   "a": "Emily Ocasio",
   "b": "Mara Boast",
   "team": "The Young Guns",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -0.9,
   "aId": "12584e84-045d-4de1-8edc-7ccbcb1ee27a",
   "bId": "75a01ddc-a43e-4853-bff8-5f88628c2204"
  },
  {
   "a": "Christy Beale",
   "b": "Tera Baccile",
   "team": "Shrinky Dinks",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.7,
   "avgExpected": 3.9,
   "aId": "d034daeb-3fd8-4273-80f5-3a272ceab674",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Russell Cripps",
   "b": "Jamila Sefiane",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -2.2,
   "avgExpected": -3.3,
   "aId": "43d2bf2c-e732-4ce8-adae-035d989fa792",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Harrison Bohrer",
   "b": "Lincoln Jensen",
   "team": "The Young Guns",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.4,
   "aId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42",
   "bId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Andre Cristobal",
   "team": "The Young Guns",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.5,
   "avgExpected": 0.8,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "50d796da-0ac2-4f94-af29-212d7865f473"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Tejas Goculdas",
   "team": "Kitchen Chaos",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -0.4,
   "avgExpected": -0.9,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "53929301-6ce2-40b9-b161-9ca68e3d4eaf"
  },
  {
   "a": "Mara Boast",
   "b": "Jared Quereau",
   "team": "The Young Guns",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -4.3,
   "avgExpected": -5.3,
   "aId": "75a01ddc-a43e-4853-bff8-5f88628c2204",
   "bId": "b1814193-753a-460b-8911-8722c57efb86"
  },
  {
   "a": "Andrew Neave",
   "b": "Jessica Pao",
   "team": "The Young Guns",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3,
   "avgExpected": 2.3,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "5e52dba4-992f-4352-b538-d2534d423c80"
  },
  {
   "a": "Chris Fratinardo",
   "b": "Jeff Zamorski",
   "team": "Drop it Like it's Hot",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 3.7,
   "avgExpected": 3.2,
   "aId": "99779531-e32b-47d5-b580-171a74844d91",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Robert Block",
   "b": "Christy Beale",
   "team": "Shrinky Dinks",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2,
   "avgExpected": 1.3,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "d034daeb-3fd8-4273-80f5-3a272ceab674"
  },
  {
   "a": "Matt Hancock",
   "b": "Jeff Zamorski",
   "team": "Drop it Like it's Hot",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4.3,
   "avgExpected": 3.3,
   "aId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Andrew Cho",
   "b": "Tim Phelan",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -4.3,
   "avgExpected": -5.2,
   "aId": "51ed4464-321f-4720-bd77-10936d1aed4f",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Barb Flynn",
   "b": "Vicki Main",
   "team": "The Young Guns",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -1.5,
   "avgExpected": -2.3,
   "aId": "3bb1ba9d-c06d-4eea-9baa-37aad39428f3",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Ed Gieske",
   "b": "Matt Hancock",
   "team": "Drop it Like it's Hot",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.7,
   "avgExpected": 2.1,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad"
  },
  {
   "a": "Kim Mchugh",
   "b": "Stephanie Woomer",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 4,
   "avgExpected": 3.1,
   "aId": "d67489d0-d69c-425e-86a7-0f7ade15ed25",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Andre Cristobal",
   "b": "Harvey Mitchell",
   "team": "The Young Guns",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.8,
   "avgExpected": 3.1,
   "aId": "50d796da-0ac2-4f94-af29-212d7865f473",
   "bId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "a": "Jenn Smith",
   "b": "Jeff Jensen",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -2.7,
   "avgExpected": -3.4,
   "aId": "32a22b16-1052-4c22-bdf9-9b48a1d73c84",
   "bId": "42f84841-e4ed-4503-ae05-c8fe6c351ca7"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Allison Hartman",
   "team": "The Young Guns",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0.6,
   "avgExpected": 0.3,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "a6b783cc-7aeb-476e-adcc-da306772071c"
  },
  {
   "a": "Chris Norton",
   "b": "Christy Beale",
   "team": "Shrinky Dinks",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.2,
   "avgExpected": -1.6,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "d034daeb-3fd8-4273-80f5-3a272ceab674"
  },
  {
   "a": "Saul Barsh",
   "b": "Sandro Stefanelli",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -5.5,
   "avgExpected": -5.9,
   "aId": "0a78359b-1de2-4ba8-adb8-d2006d923908",
   "bId": "1872d8d8-f958-4747-af3a-443d5f88a1c3"
  },
  {
   "a": "Jodi Evans",
   "b": "Andrew Cho",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": -2.3,
   "avgExpected": -2.9,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "51ed4464-321f-4720-bd77-10936d1aed4f"
  },
  {
   "a": "Kathy Cripps",
   "b": "Katherine Maruyama",
   "team": "Shrinky Dinks",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.3,
   "aId": "6fbd0766-6774-4ed3-8fc2-10e7f2330ec0",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Jean Rosenbaum",
   "b": "Todd Law",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.2,
   "aId": "2b4a12ef-68c9-4ca5-a8f7-d1d58503bf1c",
   "bId": "9b0fe5d7-4586-4629-8408-928794ca1c3b"
  },
  {
   "a": "Kim Bohrer",
   "b": "Kathy Cripps",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3,
   "avgExpected": 2.6,
   "aId": "013a0ee8-d510-472a-b8fb-7d19b1d5dc31",
   "bId": "6fbd0766-6774-4ed3-8fc2-10e7f2330ec0"
  },
  {
   "a": "Chris Norton",
   "b": "James Price",
   "team": "Shrinky Dinks",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": 0.1,
   "avgActual": -2.5,
   "avgExpected": -2.6,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "c7a0b075-272d-4427-98c0-02955690731f"
  },
  {
   "a": "Michael Taylor",
   "b": "Jingwei Wu",
   "team": "Baby Got Backhands",
   "n": 14,
   "w": 7,
   "l": 7,
   "synergy": 0.1,
   "avgActual": 1.7,
   "avgExpected": 1.6,
   "aId": "23871699-a12b-4eb6-89cb-62fec790e3fb",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "Saul Barsh",
   "b": "Jean Rosenbaum",
   "team": "Kitchen Chaos",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -3.6,
   "avgExpected": -3.8,
   "aId": "0a78359b-1de2-4ba8-adb8-d2006d923908",
   "bId": "2b4a12ef-68c9-4ca5-a8f7-d1d58503bf1c"
  },
  {
   "a": "Megan Harvey",
   "b": "Jeff Zamorski",
   "team": "Drop it Like it's Hot",
   "n": 15,
   "w": 8,
   "l": 7,
   "synergy": 0.1,
   "avgActual": 2.2,
   "avgExpected": 2.1,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Katherine Maruyama",
   "team": "Shrinky Dinks",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -0.2,
   "avgExpected": -0.3,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Tera Baccile",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0,
   "avgExpected": -0.3,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Emily Ocasio",
   "b": "Harvey Mitchell",
   "team": "The Young Guns",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0,
   "avgActual": 2.9,
   "avgExpected": 2.9,
   "aId": "12584e84-045d-4de1-8edc-7ccbcb1ee27a",
   "bId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "a": "Nancy Blank",
   "b": "Taina Wesner",
   "team": "Baby Got Backhands",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.6,
   "avgExpected": 1.7,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "583c5e68-0868-4a21-b1f0-0e68b9559476"
  },
  {
   "a": "Jodi Evans",
   "b": "Sal Bwint",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 3,
   "avgExpected": 2.9,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e"
  },
  {
   "a": "Vicki Main",
   "b": "Priya Narahari",
   "team": "The Young Guns",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 0.7,
   "avgExpected": 0.6,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "ca490492-2de9-4f43-a01d-e340d9f34788"
  },
  {
   "a": "Jenn Smith",
   "b": "Mary Callaghan",
   "team": "Baby Got Backhands",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.3,
   "avgExpected": 0.3,
   "aId": "32a22b16-1052-4c22-bdf9-9b48a1d73c84",
   "bId": "7ed1c503-4fef-4347-87c6-f8ca1a4acdd0"
  },
  {
   "a": "Robert Block",
   "b": "Stephanie Woomer",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.3,
   "avgExpected": 2.4,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Dan Ladislaw",
   "b": "Katherine Maruyama",
   "team": "Shrinky Dinks",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -2.1,
   "avgExpected": -1.9,
   "aId": "31b78615-afb3-4856-8cb1-de2b8d43a115",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Andrew Neave",
   "b": "Harrison Bohrer",
   "team": "The Young Guns",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.2,
   "avgExpected": 2.3,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
  },
  {
   "a": "Saul Barsh",
   "b": "Jamila Sefiane",
   "team": "Kitchen Chaos",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -3.1,
   "avgExpected": -3,
   "aId": "0a78359b-1de2-4ba8-adb8-d2006d923908",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Jodi Evans",
   "b": "Mary Callaghan",
   "team": "Baby Got Backhands",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -1.8,
   "avgExpected": -1.7,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "7ed1c503-4fef-4347-87c6-f8ca1a4acdd0"
  },
  {
   "a": "Tracey Carney",
   "b": "Sandra Thompson",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -4,
   "avgExpected": -3.8,
   "aId": "2b02f2fe-f8f7-42a7-bb36-d3f2322cec7c",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "a": "Allison Hartman",
   "b": "Priya Narahari",
   "team": "The Young Guns",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.7,
   "avgExpected": 2.9,
   "aId": "a6b783cc-7aeb-476e-adcc-da306772071c",
   "bId": "ca490492-2de9-4f43-a01d-e340d9f34788"
  },
  {
   "a": "Tejas Goculdas",
   "b": "Nam Barsh",
   "team": "Kitchen Chaos",
   "n": 14,
   "w": 12,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 4.9,
   "avgExpected": 5.1,
   "aId": "53929301-6ce2-40b9-b161-9ca68e3d4eaf",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Keith Goldberg",
   "b": "Tera Baccile",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -0.7,
   "avgExpected": -0.2,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Robert Block",
   "b": "Jane Meng",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.5,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "a": "Frank Fang",
   "b": "Chris Fratinardo",
   "team": "Drop it Like it's Hot",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.4,
   "avgExpected": 2.6,
   "aId": "77381bfa-76d6-45ca-ba7d-9dc142cacd32",
   "bId": "99779531-e32b-47d5-b580-171a74844d91"
  },
  {
   "a": "Kathy BernéT",
   "b": "Kevin Basch",
   "team": "Drop it Like it's Hot",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -2.8,
   "avgExpected": -2.3,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "8c307e80-6a67-476f-be7c-de3b1442b95a"
  },
  {
   "a": "Harvey Mitchell",
   "b": "Priya Narahari",
   "team": "The Young Guns",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386",
   "bId": "ca490492-2de9-4f43-a01d-e340d9f34788"
  },
  {
   "a": "Taina Wesner",
   "b": "Vanessa Zommi Kungne",
   "team": "Baby Got Backhands",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 5.8,
   "avgExpected": 6.3,
   "aId": "583c5e68-0868-4a21-b1f0-0e68b9559476",
   "bId": "c1c58200-c49c-4797-9c4a-cee408744794"
  },
  {
   "a": "Russell Cripps",
   "b": "Tejas Goculdas",
   "team": "Kitchen Chaos",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -0.8,
   "avgExpected": -0.4,
   "aId": "43d2bf2c-e732-4ce8-adae-035d989fa792",
   "bId": "53929301-6ce2-40b9-b161-9ca68e3d4eaf"
  },
  {
   "a": "Harrison Bohrer",
   "b": "Allison Hartman",
   "team": "The Young Guns",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.8,
   "avgExpected": 1.3,
   "aId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42",
   "bId": "a6b783cc-7aeb-476e-adcc-da306772071c"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Christy Beale",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.5,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "d034daeb-3fd8-4273-80f5-3a272ceab674"
  },
  {
   "a": "Jodi Evans",
   "b": "Tim Phelan",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.5,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Tracey Carney",
   "b": "Nam Barsh",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 1,
   "avgExpected": 1.7,
   "aId": "2b02f2fe-f8f7-42a7-bb36-d3f2322cec7c",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Jessica Pao",
   "b": "Priya Narahari",
   "team": "The Young Guns",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -0.3,
   "avgExpected": 0.6,
   "aId": "5e52dba4-992f-4352-b538-d2534d423c80",
   "bId": "ca490492-2de9-4f43-a01d-e340d9f34788"
  },
  {
   "a": "Ange Bradley",
   "b": "Kevin Basch",
   "team": "Drop it Like it's Hot",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.8,
   "avgExpected": -1.1,
   "aId": "0ea06752-4e43-4708-8d85-b0499137f61e",
   "bId": "8c307e80-6a67-476f-be7c-de3b1442b95a"
  },
  {
   "a": "Ed Gieske",
   "b": "Kevin Basch",
   "team": "Drop it Like it's Hot",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 0.5,
   "avgExpected": 1.4,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "8c307e80-6a67-476f-be7c-de3b1442b95a"
  },
  {
   "a": "Kathy BernéT",
   "b": "Matt Hancock",
   "team": "Drop it Like it's Hot",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 0.4,
   "avgExpected": 1.1,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad"
  },
  {
   "a": "Debra Schlosser",
   "b": "Linda Zhu",
   "team": "Drop it Like it's Hot",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -7,
   "avgExpected": -6.2,
   "aId": "c06ede91-f79c-483b-ae5e-34baae517dad",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Sarah Ross",
   "b": "Taina Wesner",
   "team": "Baby Got Backhands",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": -0.5,
   "avgActual": 0.7,
   "avgExpected": 1.4,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "583c5e68-0868-4a21-b1f0-0e68b9559476"
  },
  {
   "a": "Frank Fang",
   "b": "Linda Zhu",
   "team": "Drop it Like it's Hot",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": -0.5,
   "avgActual": -2.9,
   "avgExpected": -2.2,
   "aId": "77381bfa-76d6-45ca-ba7d-9dc142cacd32",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Scott Kacelowicz",
   "b": "Mary Callaghan",
   "team": "Baby Got Backhands",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -2,
   "avgExpected": -1.2,
   "aId": "388605d8-e76a-43a2-bcd8-e48a6215d38b",
   "bId": "7ed1c503-4fef-4347-87c6-f8ca1a4acdd0"
  },
  {
   "a": "Emily Ocasio",
   "b": "Priya Narahari",
   "team": "The Young Guns",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.2,
   "aId": "12584e84-045d-4de1-8edc-7ccbcb1ee27a",
   "bId": "ca490492-2de9-4f43-a01d-e340d9f34788"
  },
  {
   "a": "Chris Norton",
   "b": "Kim Mchugh",
   "team": "Shrinky Dinks",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.6,
   "avgActual": 0.1,
   "avgExpected": 1.1,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "d67489d0-d69c-425e-86a7-0f7ade15ed25"
  },
  {
   "a": "Jessica Pao",
   "b": "Vicki Main",
   "team": "The Young Guns",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 0.3,
   "avgExpected": 1.4,
   "aId": "5e52dba4-992f-4352-b538-d2534d423c80",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Tejas Goculdas",
   "b": "David Marchese",
   "team": "Kitchen Chaos",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 0,
   "avgExpected": 1,
   "aId": "53929301-6ce2-40b9-b161-9ca68e3d4eaf",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Harrison Bohrer",
   "b": "Priya Narahari",
   "team": "The Young Guns",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 3,
   "avgExpected": 4.2,
   "aId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42",
   "bId": "ca490492-2de9-4f43-a01d-e340d9f34788"
  },
  {
   "a": "Mara Boast",
   "b": "Harvey Mitchell",
   "team": "The Young Guns",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -2.2,
   "avgExpected": -1,
   "aId": "75a01ddc-a43e-4853-bff8-5f88628c2204",
   "bId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "a": "Vicki Main",
   "b": "Jared Quereau",
   "team": "The Young Guns",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3,
   "avgExpected": -1.7,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "b1814193-753a-460b-8911-8722c57efb86"
  },
  {
   "a": "Jeff Zamorski",
   "b": "Linda Zhu",
   "team": "Drop it Like it's Hot",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.9,
   "aId": "f8687730-86a2-4769-a38b-7c0269ee88f5",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Dan Ladislaw",
   "b": "Tera Baccile",
   "team": "Shrinky Dinks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.9,
   "aId": "31b78615-afb3-4856-8cb1-de2b8d43a115",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Nancy Blank",
   "b": "Tim Phelan",
   "team": "Baby Got Backhands",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2.5,
   "avgExpected": -1.2,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Nancy Blank",
   "b": "Jenn Smith",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -6,
   "avgExpected": -4.5,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "32a22b16-1052-4c22-bdf9-9b48a1d73c84"
  },
  {
   "a": "Vicki Main",
   "b": "Harvey Mitchell",
   "team": "The Young Guns",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 1.4,
   "avgExpected": 2.5,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "a": "Kim Bohrer",
   "b": "Robert Block",
   "team": "Shrinky Dinks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -2.7,
   "avgExpected": -1.4,
   "aId": "013a0ee8-d510-472a-b8fb-7d19b1d5dc31",
   "bId": "23d1d322-f31d-46b3-bf95-d86faab58b06"
  },
  {
   "a": "Barb Flynn",
   "b": "Allison Hartman",
   "team": "The Young Guns",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -3.7,
   "avgExpected": -2.6,
   "aId": "3bb1ba9d-c06d-4eea-9baa-37aad39428f3",
   "bId": "a6b783cc-7aeb-476e-adcc-da306772071c"
  },
  {
   "a": "Nancy Blank",
   "b": "Sal Bwint",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": -2,
   "avgExpected": -0.4,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Tracey Carney",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": -2.3,
   "avgExpected": -0.8,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "2b02f2fe-f8f7-42a7-bb36-d3f2322cec7c"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Sandra Thompson",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -9,
   "avgExpected": -7.3,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "a": "Kathy BernéT",
   "b": "Ed Gieske",
   "team": "Drop it Like it's Hot",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 1.3,
   "avgExpected": 2.7,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "314486b1-6723-4b33-9dba-fa5756065707"
  },
  {
   "a": "Ange Bradley",
   "b": "Kathy BernéT",
   "team": "Drop it Like it's Hot",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -6,
   "avgExpected": -4.4,
   "aId": "0ea06752-4e43-4708-8d85-b0499137f61e",
   "bId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4"
  },
  {
   "a": "Scott Kacelowicz",
   "b": "Jingwei Wu",
   "team": "Baby Got Backhands",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.7,
   "avgActual": -1.1,
   "avgExpected": -0.1,
   "aId": "388605d8-e76a-43a2-bcd8-e48a6215d38b",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "Andre Cristobal",
   "b": "Vicki Main",
   "team": "The Young Guns",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.9,
   "aId": "50d796da-0ac2-4f94-af29-212d7865f473",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Jamila Sefiane",
   "b": "Jennifer Land",
   "team": "Kitchen Chaos",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.2,
   "avgExpected": -1.7,
   "aId": "c0851114-0611-4b02-9589-fd249179eabc",
   "bId": "f5d084ba-6230-41b2-99f9-f014c072276a"
  },
  {
   "a": "Carolina Reese",
   "b": "Matthew Shusterman",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -3.3,
   "avgExpected": -1.3,
   "aId": "8f93a05d-c51e-48c4-901c-4ddbe881b309",
   "bId": "c979c513-454d-434c-8a65-3b5fea8a8d7d"
  },
  {
   "a": "Robert Block",
   "b": "Dan Ladislaw",
   "team": "Shrinky Dinks",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -6,
   "avgExpected": -4.1,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "31b78615-afb3-4856-8cb1-de2b8d43a115"
  },
  {
   "a": "Russell Cripps",
   "b": "Jennifer Land",
   "team": "Kitchen Chaos",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3.2,
   "avgExpected": -1.5,
   "aId": "43d2bf2c-e732-4ce8-adae-035d989fa792",
   "bId": "f5d084ba-6230-41b2-99f9-f014c072276a"
  },
  {
   "a": "Saul Barsh",
   "b": "Russell Cripps",
   "team": "Kitchen Chaos",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -0.9,
   "avgActual": -5.7,
   "avgExpected": -4.3,
   "aId": "0a78359b-1de2-4ba8-adb8-d2006d923908",
   "bId": "43d2bf2c-e732-4ce8-adae-035d989fa792"
  },
  {
   "a": "Andrew Neave",
   "b": "Barb Flynn",
   "team": "The Young Guns",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1,
   "avgActual": -4.7,
   "avgExpected": -3,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "3bb1ba9d-c06d-4eea-9baa-37aad39428f3"
  },
  {
   "a": "Jared Quereau",
   "b": "Harvey Mitchell",
   "team": "The Young Guns",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": -1,
   "avgActual": -2.9,
   "avgExpected": -1.5,
   "aId": "b1814193-753a-460b-8911-8722c57efb86",
   "bId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "a": "Andrew Neave",
   "b": "Allison Hartman",
   "team": "The Young Guns",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -1.2,
   "avgExpected": 0.7,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "a6b783cc-7aeb-476e-adcc-da306772071c"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Christine Dugan",
   "team": "Kitchen Chaos",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -1.1,
   "avgActual": -7,
   "avgExpected": -5.3,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "a": "Erika Richards",
   "b": "Jeff Zamorski",
   "team": "Drop it Like it's Hot",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -1.1,
   "avgActual": 1.1,
   "avgExpected": 2.7,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Robert Block",
   "b": "Matthew Shusterman",
   "team": "Shrinky Dinks",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -1.3,
   "avgExpected": 0.4,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "c979c513-454d-434c-8a65-3b5fea8a8d7d"
  },
  {
   "a": "Jane Meng",
   "b": "Kim Mchugh",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 0,
   "avgExpected": 2.6,
   "aId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "bId": "d67489d0-d69c-425e-86a7-0f7ade15ed25"
  },
  {
   "a": "Christine Dugan",
   "b": "Jean Rosenbaum",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -5.7,
   "avgExpected": -2.9,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "2b4a12ef-68c9-4ca5-a8f7-d1d58503bf1c"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Nam Barsh",
   "team": "Kitchen Chaos",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -2.4,
   "avgExpected": -0.4,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Megan Harvey",
   "b": "Linda Zhu",
   "team": "Drop it Like it's Hot",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.3,
   "avgActual": -4.8,
   "avgExpected": -2.7,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Kathy BernéT",
   "b": "Frank Fang",
   "team": "Drop it Like it's Hot",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -3.5,
   "avgExpected": -0.7,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "77381bfa-76d6-45ca-ba7d-9dc142cacd32"
  },
  {
   "a": "Megan Harvey",
   "b": "Marykristin Haskell",
   "team": "Drop it Like it's Hot",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -4.7,
   "avgExpected": -1.3,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "a": "Robert Block",
   "b": "Katherine Maruyama",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -9.3,
   "avgExpected": -5.7,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Andrew Cho",
   "b": "Jingwei Wu",
   "team": "Baby Got Backhands",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -3.7,
   "avgExpected": -0.6,
   "aId": "51ed4464-321f-4720-bd77-10936d1aed4f",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "Kathy Cripps",
   "b": "Tera Baccile",
   "team": "Shrinky Dinks",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -2,
   "avgExpected": 0.7,
   "aId": "6fbd0766-6774-4ed3-8fc2-10e7f2330ec0",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Claudya Elefante",
   "b": "Nam Barsh",
   "team": "Kitchen Chaos",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -1.5,
   "avgActual": 0.3,
   "avgExpected": 2.5,
   "aId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Russell Cripps",
   "b": "Sandra Thompson",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -8.3,
   "avgExpected": -4.7,
   "aId": "43d2bf2c-e732-4ce8-adae-035d989fa792",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "a": "Andrew Neave",
   "b": "Jon Wheel",
   "team": "The Young Guns",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -1.5,
   "avgExpected": 1.7,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "980c2469-2017-4943-bc0d-5c49f0526f85"
  },
  {
   "a": "Nancy Blank",
   "b": "Scott Kacelowicz",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -5.7,
   "avgExpected": -1.9,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "388605d8-e76a-43a2-bcd8-e48a6215d38b"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Vicki Main",
   "team": "The Young Guns",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2.7,
   "avgExpected": 0.5,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Kathy Cripps",
   "b": "Michael Finkelstein",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -5.3,
   "avgExpected": -1.5,
   "aId": "6fbd0766-6774-4ed3-8fc2-10e7f2330ec0",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Kathy Cripps",
   "b": "Carolina Reese",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -3.7,
   "avgExpected": 0.4,
   "aId": "6fbd0766-6774-4ed3-8fc2-10e7f2330ec0",
   "bId": "8f93a05d-c51e-48c4-901c-4ddbe881b309"
  },
  {
   "a": "Sarah Ross",
   "b": "Vanessa Zommi Kungne",
   "team": "Baby Got Backhands",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -1.2,
   "avgExpected": 2.5,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "c1c58200-c49c-4797-9c4a-cee408744794"
  },
  {
   "a": "Sarah Ross",
   "b": "Mary Callaghan",
   "team": "Baby Got Backhands",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -5.5,
   "avgExpected": -1.7,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "7ed1c503-4fef-4347-87c6-f8ca1a4acdd0"
  },
  {
   "a": "Erika Richards",
   "b": "Chris Fratinardo",
   "team": "Drop it Like it's Hot",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -1.4,
   "avgExpected": 1.9,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "99779531-e32b-47d5-b580-171a74844d91"
  },
  {
   "a": "Ed Gieske",
   "b": "Jenna Posner",
   "team": "Drop it Like it's Hot",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2,
   "avgActual": -2.7,
   "avgExpected": 1.3,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "6be7fecc-58ce-4a10-b2f9-bf98567f3427"
  },
  {
   "a": "Mary Callaghan",
   "b": "Tim Phelan",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -7.7,
   "avgExpected": -2.6,
   "aId": "7ed1c503-4fef-4347-87c6-f8ca1a4acdd0",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Sandra Thompson",
   "b": "Jennifer Land",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -8.3,
   "avgExpected": -3.2,
   "aId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "bId": "f5d084ba-6230-41b2-99f9-f014c072276a"
  },
  {
   "a": "Debra Schlosser",
   "b": "Matt Hancock",
   "team": "Drop it Like it's Hot",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -6.7,
   "avgExpected": -1.6,
   "aId": "c06ede91-f79c-483b-ae5e-34baae517dad",
   "bId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad"
  },
  {
   "a": "James Price",
   "b": "Christy Beale",
   "team": "Shrinky Dinks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -6,
   "avgExpected": -1.6,
   "aId": "c7a0b075-272d-4427-98c0-02955690731f",
   "bId": "d034daeb-3fd8-4273-80f5-3a272ceab674"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Matthew Shusterman",
   "team": "Shrinky Dinks",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2.2,
   "avgActual": -4.8,
   "avgExpected": -0.8,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "c979c513-454d-434c-8a65-3b5fea8a8d7d"
  },
  {
   "a": "Emily Ocasio",
   "b": "Allison Hartman",
   "team": "The Young Guns",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.3,
   "avgActual": -3.5,
   "avgExpected": 1.1,
   "aId": "12584e84-045d-4de1-8edc-7ccbcb1ee27a",
   "bId": "a6b783cc-7aeb-476e-adcc-da306772071c"
  },
  {
   "a": "Christine Dugan",
   "b": "Tejas Goculdas",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -6.7,
   "avgExpected": -1,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "53929301-6ce2-40b9-b161-9ca68e3d4eaf"
  },
  {
   "a": "James Price",
   "b": "Tera Baccile",
   "team": "Shrinky Dinks",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -5.3,
   "avgExpected": 0.2,
   "aId": "c7a0b075-272d-4427-98c0-02955690731f",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Jenn Smith",
   "b": "Vanessa Zommi Kungne",
   "team": "Baby Got Backhands",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.5,
   "avgActual": -3,
   "avgExpected": 2.9,
   "aId": "32a22b16-1052-4c22-bdf9-9b48a1d73c84",
   "bId": "c1c58200-c49c-4797-9c4a-cee408744794"
  },
  {
   "a": "Saul Barsh",
   "b": "Todd Law",
   "team": "Kitchen Chaos",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -2.6,
   "avgActual": -7.5,
   "avgExpected": -3.2,
   "aId": "0a78359b-1de2-4ba8-adb8-d2006d923908",
   "bId": "9b0fe5d7-4586-4629-8408-928794ca1c3b"
  },
  {
   "a": "Christine Dugan",
   "b": "Jamila Sefiane",
   "team": "Kitchen Chaos",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.7,
   "avgActual": -7.7,
   "avgExpected": -1.5,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Shrinky Dinks",
   "away": "The Young Guns",
   "time": "2026-06-17T19:00:00",
   "complete": true,
   "homePoints": 556,
   "awayPoints": 610,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Dan Ladislaw"
     ],
     "a": [
      "Vicki Main",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kim Bohrer",
      "Robert Block"
     ],
     "a": [
      "Emily Ocasio",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carolina Reese",
      "Matthew Shusterman"
     ],
     "a": [
      "Allison Hartman",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kim Mchugh",
      "Chris Norton"
     ],
     "a": [
      "Barb Flynn",
      "Andrew Neave"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katherine Maruyama",
      "Kim Bohrer"
     ],
     "a": [
      "Emily Ocasio",
      "Allison Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christy Beale",
      "Kim Mchugh"
     ],
     "a": [
      "Vicki Main",
      "Jessica Pao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dan Ladislaw",
      "Robert Block"
     ],
     "a": [
      "Andre Cristobal",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chris Norton",
      "James Price"
     ],
     "a": [
      "Graham Heavenrich",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christy Beale",
      "Dan Ladislaw"
     ],
     "a": [
      "Emily Ocasio",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Robert Block"
     ],
     "a": [
      "Vicki Main",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kim Bohrer",
      "Matthew Shusterman"
     ],
     "a": [
      "Jessica Pao",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Carolina Reese",
      "James Price"
     ],
     "a": [
      "Barb Flynn",
      "Andrew Neave"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christy Beale",
      "Carolina Reese"
     ],
     "a": [
      "Allison Hartman",
      "Barb Flynn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kim Bohrer",
      "Kim Mchugh"
     ],
     "a": [
      "Vicki Main",
      "Jessica Pao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dan Ladislaw",
      "Matthew Shusterman"
     ],
     "a": [
      "Andre Cristobal",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chris Norton",
      "James Price"
     ],
     "a": [
      "Harrison Bohrer",
      "Andrew Neave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kim Bohrer",
      "Matthew Shusterman"
     ],
     "a": [
      "Jessica Pao",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Robert Block"
     ],
     "a": [
      "Emily Ocasio",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carolina Reese",
      "James Price"
     ],
     "a": [
      "Allison Hartman",
      "Andrew Neave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kim Mchugh",
      "Chris Norton"
     ],
     "a": [
      "Barb Flynn",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Christy Beale"
     ],
     "a": [
      "Emily Ocasio",
      "Vicki Main"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carolina Reese",
      "Kim Mchugh"
     ],
     "a": [
      "Allison Hartman",
      "Barb Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dan Ladislaw",
      "Matthew Shusterman"
     ],
     "a": [
      "Andre Cristobal",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Robert Block",
      "Chris Norton"
     ],
     "a": [
      "Harvey Mitchell",
      "Andrew Neave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Dan Ladislaw"
     ],
     "a": [
      "Emily Ocasio",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christy Beale",
      "Chris Norton"
     ],
     "a": [
      "Allison Hartman",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kim Bohrer",
      "Robert Block"
     ],
     "a": [
      "Vicki Main",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kim Mchugh",
      "James Price"
     ],
     "a": [
      "Jessica Pao",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Christy Beale"
     ],
     "a": [
      "Emily Ocasio",
      "Vicki Main"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kim Bohrer",
      "Carolina Reese"
     ],
     "a": [
      "Jessica Pao",
      "Barb Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Dan Ladislaw",
      "Robert Block"
     ],
     "a": [
      "Andre Cristobal",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matthew Shusterman",
      "James Price"
     ],
     "a": [
      "Harrison Bohrer",
      "Andrew Neave"
     ]
    }
   ],
   "subs": [
    "Andre Cristobal"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Kitchen Chaos",
   "away": "Baby Got Backhands",
   "time": "2026-06-17T19:00:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 643,
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
      "Tejas Goculdas"
     ],
     "a": [
      "Taina Wesner",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Sarah Ross",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jamila Sefiane",
      "David Marchese"
     ],
     "a": [
      "Mary Callaghan",
      "Andrew Cho"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Land",
      "Russell Cripps"
     ],
     "a": [
      "Jodi Evans",
      "Tim Phelan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nam Barsh",
      "Tracey Carney"
     ],
     "a": [
      "Sarah Ross",
      "Mary Callaghan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Jennifer Land"
     ],
     "a": [
      "Taina Wesner",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Russell Cripps",
      "Saul Barsh"
     ],
     "a": [
      "Andrew Cho",
      "Sal Bwint"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Tejas Goculdas"
     ],
     "a": [
      "Sarah Ross",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nam Barsh",
      "Sandro Stefanelli"
     ],
     "a": [
      "Taina Wesner",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tracey Carney",
      "David Marchese"
     ],
     "a": [
      "Nancy Blank",
      "Sal Bwint"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jamila Sefiane",
      "Saul Barsh"
     ],
     "a": [
      "Jodi Evans",
      "Tim Phelan"
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
      "Mary Callaghan",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tracey Carney",
      "Jennifer Land"
     ],
     "a": [
      "Taina Wesner",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Tejas Goculdas",
      "David Marchese"
     ],
     "a": [
      "Jingwei Wu",
      "Andrew Cho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Russell Cripps",
      "Saul Barsh"
     ],
     "a": [
      "Sal Bwint",
      "Tim Phelan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tracey Carney",
      "David Marchese"
     ],
     "a": [
      "Nancy Blank",
      "Andrew Cho"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Sandro Stefanelli"
     ],
     "a": [
      "Sarah Ross",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jamila Sefiane",
      "Saul Barsh"
     ],
     "a": [
      "Mary Callaghan",
      "Tim Phelan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jennifer Land",
      "Russell Cripps"
     ],
     "a": [
      "Jodi Evans",
      "Sal Bwint"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nam Barsh",
      "Christine Dugan"
     ],
     "a": [
      "Sarah Ross",
      "Taina Wesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jamila Sefiane",
      "Jennifer Land"
     ],
     "a": [
      "Mary Callaghan",
      "Jodi Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Tejas Goculdas",
      "David Marchese"
     ],
     "a": [
      "Jingwei Wu",
      "Andrew Cho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sandro Stefanelli",
      "Russell Cripps"
     ],
     "a": [
      "Michael Taylor",
      "Tim Phelan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nam Barsh",
      "Tejas Goculdas"
     ],
     "a": [
      "Sarah Ross",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Dugan",
      "Russell Cripps"
     ],
     "a": [
      "Mary Callaghan",
      "Andrew Cho"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 2,
     "as": 21,
     "h": [
      "Tracey Carney",
      "Sandro Stefanelli"
     ],
     "a": [
      "Taina Wesner",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Land",
      "Saul Barsh"
     ],
     "a": [
      "Nancy Blank",
      "Sal Bwint"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Nam Barsh",
      "Christine Dugan"
     ],
     "a": [
      "Sarah Ross",
      "Taina Wesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tracey Carney",
      "Jamila Sefiane"
     ],
     "a": [
      "Nancy Blank",
      "Jodi Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Marchese",
      "Saul Barsh"
     ],
     "a": [
      "Sal Bwint",
      "Tim Phelan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "The Young Guns",
   "away": "Kitchen Chaos",
   "time": "2026-06-24T19:00:00",
   "complete": true,
   "homePoints": 637,
   "awayPoints": 573,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emily Ocasio",
      "Harvey Mitchell"
     ],
     "a": [
      "Tracey Carney",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mara Boast",
      "Jared Quereau"
     ],
     "a": [
      "Nam Barsh",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessica Pao",
      "Matt Enz"
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
     "as": 19,
     "h": [
      "Priya Narahari",
      "Harrison Bohrer"
     ],
     "a": [
      "Jean Rosenbaum",
      "Saul Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Vicki Main"
     ],
     "a": [
      "Nam Barsh",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mara Boast",
      "Priya Narahari"
     ],
     "a": [
      "Tracey Carney",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Harvey Mitchell",
      "Jared Quereau"
     ],
     "a": [
      "Tejas Goculdas",
      "Andre Cristobal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Harrison Bohrer",
      "Andrew Neave"
     ],
     "a": [
      "Sandro Stefanelli",
      "Russell Cripps"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mara Boast",
      "Harvey Mitchell"
     ],
     "a": [
      "Nam Barsh",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Jared Quereau"
     ],
     "a": [
      "Tracey Carney",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Vicki Main",
      "Matt Enz"
     ],
     "a": [
      "Sandra Thompson",
      "Russell Cripps"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Pao",
      "Andrew Neave"
     ],
     "a": [
      "Jean Rosenbaum",
      "Saul Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mara Boast",
      "Jessica Pao"
     ],
     "a": [
      "Jamila Sefiane",
      "Jean Rosenbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vicki Main",
      "Priya Narahari"
     ],
     "a": [
      "Tracey Carney",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harvey Mitchell",
      "Matt Enz"
     ],
     "a": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harrison Bohrer",
      "Andrew Neave"
     ],
     "a": [
      "Russell Cripps",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Vicki Main",
      "Matt Enz"
     ],
     "a": [
      "Sandra Thompson",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Jared Quereau"
     ],
     "a": [
      "Nam Barsh",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jessica Pao",
      "Andrew Neave"
     ],
     "a": [
      "Jamila Sefiane",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Priya Narahari",
      "Harrison Bohrer"
     ],
     "a": [
      "Jean Rosenbaum",
      "Russell Cripps"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Mara Boast"
     ],
     "a": [
      "Nam Barsh",
      "Tracey Carney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Pao",
      "Priya Narahari"
     ],
     "a": [
      "Jamila Sefiane",
      "Jean Rosenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Harvey Mitchell",
      "Matt Enz"
     ],
     "a": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jared Quereau",
      "Harrison Bohrer"
     ],
     "a": [
      "Andre Cristobal",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Emily Ocasio",
      "Harvey Mitchell"
     ],
     "a": [
      "Nam Barsh",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mara Boast",
      "Harrison Bohrer"
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
     "as": 15,
     "h": [
      "Vicki Main",
      "Jared Quereau"
     ],
     "a": [
      "Tracey Carney",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Priya Narahari",
      "Andrew Neave"
     ],
     "a": [
      "Sandra Thompson",
      "Russell Cripps"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Emily Ocasio",
      "Mara Boast"
     ],
     "a": [
      "Nam Barsh",
      "Tracey Carney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Jessica Pao"
     ],
     "a": [
      "Sandra Thompson",
      "Jean Rosenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Harvey Mitchell",
      "Jared Quereau"
     ],
     "a": [
      "Tejas Goculdas",
      "Andre Cristobal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Matt Enz",
      "Andrew Neave"
     ],
     "a": [
      "Russell Cripps",
      "Saul Barsh"
     ]
    }
   ],
   "subs": [
    "Matt Enz",
    "Andre Cristobal"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Drop it Like it's Hot",
   "away": "Shrinky Dinks",
   "time": "2026-06-24T19:00:00",
   "complete": true,
   "homePoints": 631,
   "awayPoints": 609,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Megan Harvey",
      "Chris Fratinardo"
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Erika Richards",
      "Jeff Zamorski"
     ],
     "a": [
      "Kathy Cripps",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kathy BernéT",
      "Frank Fang"
     ],
     "a": [
      "Jane Meng",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ange Bradley",
      "Kevin Basch"
     ],
     "a": [
      "Kim Mchugh",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Linda Zhu"
     ],
     "a": [
      "Kathy Cripps",
      "Jane Meng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Erika Richards",
      "Ange Bradley"
     ],
     "a": [
      "Tera Baccile",
      "Christy Beale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ],
     "a": [
      "Jonathan Goldner",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kevin Basch",
      "Ed Gieske"
     ],
     "a": [
      "Robert Block",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Erika Richards",
      "Chris Fratinardo"
     ],
     "a": [
      "Kathy Cripps",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Jeff Zamorski"
     ],
     "a": [
      "Tera Baccile",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Frank Fang"
     ],
     "a": [
      "Christy Beale",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Kim Mchugh",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Erika Richards",
      "Kathy BernéT"
     ],
     "a": [
      "Jane Meng",
      "Kim Mchugh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Ange Bradley"
     ],
     "a": [
      "Tera Baccile",
      "Christy Beale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Fratinardo",
      "Frank Fang"
     ],
     "a": [
      "Jonathan Goldner",
      "Robert Block"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kevin Basch",
      "Ed Gieske"
     ],
     "a": [
      "Matthew Shusterman",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Frank Fang"
     ],
     "a": [
      "Christy Beale",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Megan Harvey",
      "Jeff Zamorski"
     ],
     "a": [
      "Kathy Cripps",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Jane Meng",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ange Bradley",
      "Kevin Basch"
     ],
     "a": [
      "Kim Mchugh",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Megan Harvey",
      "Erika Richards"
     ],
     "a": [
      "Kathy Cripps",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kathy BernéT",
      "Ange Bradley"
     ],
     "a": [
      "Jane Meng",
      "Kim Mchugh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Chris Fratinardo",
      "Frank Fang"
     ],
     "a": [
      "Jonathan Goldner",
      "Robert Block"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jeff Zamorski",
      "Kevin Basch"
     ],
     "a": [
      "Keith Goldberg",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Megan Harvey",
      "Chris Fratinardo"
     ],
     "a": [
      "Kathy Cripps",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Erika Richards",
      "Kevin Basch"
     ],
     "a": [
      "Jane Meng",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Jeff Zamorski"
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ange Bradley",
      "Ed Gieske"
     ],
     "a": [
      "Christy Beale",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Megan Harvey",
      "Erika Richards"
     ],
     "a": [
      "Kathy Cripps",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Kathy BernéT"
     ],
     "a": [
      "Christy Beale",
      "Kim Mchugh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ],
     "a": [
      "Jonathan Goldner",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Frank Fang",
      "Ed Gieske"
     ],
     "a": [
      "Matthew Shusterman",
      "Chris Norton"
     ]
    }
   ],
   "subs": [
    "Jane Meng",
    "Jonathan Goldner",
    "Keith Goldberg"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Kitchen Chaos",
   "away": "Drop it Like it's Hot",
   "time": "2026-07-01T19:00:00",
   "complete": true,
   "homePoints": 634,
   "awayPoints": 634,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Claudya Elefante",
      "David Marchese"
     ],
     "a": [
      "Erika Richards",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nam Barsh",
      "Tejas Goculdas"
     ],
     "a": [
      "Megan Harvey",
      "Chris Fratinardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jennifer Land",
      "Sandro Stefanelli"
     ],
     "a": [
      "Linda Zhu",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sandra Thompson",
      "Alex Fad"
     ],
     "a": [
      "Kathy BernéT",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Tracey Carney"
     ],
     "a": [
      "Megan Harvey",
      "Linda Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nam Barsh",
      "Sandra Thompson"
     ],
     "a": [
      "Erika Richards",
      "Debra Schlosser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "David Marchese",
      "Tejas Goculdas"
     ],
     "a": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Alex Fad",
      "Saul Barsh"
     ],
     "a": [
      "Frank Fang",
      "Kevin Basch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nam Barsh",
      "David Marchese"
     ],
     "a": [
      "Megan Harvey",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Tejas Goculdas"
     ],
     "a": [
      "Erika Richards",
      "Chris Fratinardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tracey Carney",
      "Sandro Stefanelli"
     ],
     "a": [
      "Debra Schlosser",
      "Kevin Basch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jennifer Land",
      "Saul Barsh"
     ],
     "a": [
      "Kathy BernéT",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nam Barsh",
      "Jennifer Land"
     ],
     "a": [
      "Linda Zhu",
      "Kathy BernéT"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tracey Carney",
      "Sandra Thompson"
     ],
     "a": [
      "Erika Richards",
      "Debra Schlosser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Marchese",
      "Sandro Stefanelli"
     ],
     "a": [
      "Chris Fratinardo",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Fad",
      "Saul Barsh"
     ],
     "a": [
      "Kevin Basch",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Tracey Carney",
      "Sandro Stefanelli"
     ],
     "a": [
      "Debra Schlosser",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Claudya Elefante",
      "Tejas Goculdas"
     ],
     "a": [
      "Megan Harvey",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Land",
      "Saul Barsh"
     ],
     "a": [
      "Linda Zhu",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandra Thompson",
      "Alex Fad"
     ],
     "a": [
      "Kathy BernéT",
      "Kevin Basch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Nam Barsh"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Land",
      "Sandra Thompson"
     ],
     "a": [
      "Linda Zhu",
      "Kathy BernéT"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Marchese",
      "Sandro Stefanelli"
     ],
     "a": [
      "Chris Fratinardo",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tejas Goculdas",
      "Alex Fad"
     ],
     "a": [
      "Jeff Zamorski",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "David Marchese"
     ],
     "a": [
      "Megan Harvey",
      "Chris Fratinardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nam Barsh",
      "Alex Fad"
     ],
     "a": [
      "Linda Zhu",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 31,
     "h": [
      "Tracey Carney",
      "Tejas Goculdas"
     ],
     "a": [
      "Erika Richards",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Saul Barsh"
     ],
     "a": [
      "Debra Schlosser",
      "Kevin Basch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Nam Barsh"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tracey Carney",
      "Jennifer Land"
     ],
     "a": [
      "Debra Schlosser",
      "Kathy BernéT"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Marchese",
      "Tejas Goculdas"
     ],
     "a": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sandro Stefanelli",
      "Saul Barsh"
     ],
     "a": [
      "Kevin Basch",
      "Matt Hancock"
     ]
    }
   ],
   "subs": [
    "Alex Fad"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Baby Got Backhands",
   "away": "The Young Guns",
   "time": "2026-07-01T19:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 607,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Sarah Ross",
      "Jingwei Wu"
     ],
     "a": [
      "Priya Narahari",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taina Wesner",
      "Michael Taylor"
     ],
     "a": [
      "Vicki Main",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mary Callaghan",
      "Scott Kacelowicz"
     ],
     "a": [
      "Allison Hartman",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jenn Smith",
      "Andrew Cho"
     ],
     "a": [
      "Barb Flynn",
      "Jon Wheel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Vanessa Zommi Kungne"
     ],
     "a": [
      "Vicki Main",
      "Allison Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taina Wesner",
      "Jenn Smith"
     ],
     "a": [
      "Priya Narahari",
      "Jessica Pao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jingwei Wu",
      "Michael Taylor"
     ],
     "a": [
      "Andre Cristobal",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrew Cho",
      "Tim Phelan"
     ],
     "a": [
      "Graham Heavenrich",
      "Andrew Neave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taina Wesner",
      "Jingwei Wu"
     ],
     "a": [
      "Vicki Main",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarah Ross",
      "Michael Taylor"
     ],
     "a": [
      "Priya Narahari",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vanessa Zommi Kungne",
      "Scott Kacelowicz"
     ],
     "a": [
      "Jessica Pao",
      "Andrew Neave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Callaghan",
      "Tim Phelan"
     ],
     "a": [
      "Barb Flynn",
      "Jon Wheel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taina Wesner",
      "Mary Callaghan"
     ],
     "a": [
      "Allison Hartman",
      "Barb Flynn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Vanessa Zommi Kungne",
      "Jenn Smith"
     ],
     "a": [
      "Priya Narahari",
      "Jessica Pao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jingwei Wu",
      "Scott Kacelowicz"
     ],
     "a": [
      "Andre Cristobal",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrew Cho",
      "Tim Phelan"
     ],
     "a": [
      "Andrew Neave",
      "Jon Wheel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Vanessa Zommi Kungne",
      "Scott Kacelowicz"
     ],
     "a": [
      "Jessica Pao",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Ross",
      "Michael Taylor"
     ],
     "a": [
      "Vicki Main",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Mary Callaghan",
      "Tim Phelan"
     ],
     "a": [
      "Allison Hartman",
      "Jon Wheel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jenn Smith",
      "Andrew Cho"
     ],
     "a": [
      "Barb Flynn",
      "Andrew Neave"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Taina Wesner"
     ],
     "a": [
      "Vicki Main",
      "Priya Narahari"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mary Callaghan",
      "Jenn Smith"
     ],
     "a": [
      "Allison Hartman",
      "Barb Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jingwei Wu",
      "Scott Kacelowicz"
     ],
     "a": [
      "Andre Cristobal",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Michael Taylor",
      "Andrew Cho"
     ],
     "a": [
      "Harvey Mitchell",
      "Jon Wheel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Ross",
      "Jingwei Wu"
     ],
     "a": [
      "Vicki Main",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 12,
     "h": [
      "Taina Wesner",
      "Andrew Cho"
     ],
     "a": [
      "Allison Hartman",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Vanessa Zommi Kungne",
      "Michael Taylor"
     ],
     "a": [
      "Priya Narahari",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jenn Smith",
      "Tim Phelan"
     ],
     "a": [
      "Jessica Pao",
      "Andrew Neave"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sarah Ross",
      "Taina Wesner"
     ],
     "a": [
      "Vicki Main",
      "Priya Narahari"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Vanessa Zommi Kungne",
      "Mary Callaghan"
     ],
     "a": [
      "Jessica Pao",
      "Barb Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jingwei Wu",
      "Michael Taylor"
     ],
     "a": [
      "Andre Cristobal",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Scott Kacelowicz",
      "Tim Phelan"
     ],
     "a": [
      "Andrew Neave",
      "Jon Wheel"
     ]
    }
   ],
   "subs": [
    "Andre Cristobal",
    "Scott Kacelowicz",
    "Jon Wheel"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "The Young Guns",
   "away": "Drop it Like it's Hot",
   "time": "2026-07-08T19:00:00",
   "complete": true,
   "homePoints": 582,
   "awayPoints": 602,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Julia Plein",
      "Jared Quereau"
     ],
     "a": [
      "Erika Richards",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Vicki Main",
      "Harvey Mitchell"
     ],
     "a": [
      "Megan Harvey",
      "Jacinth Chikkala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Allison Hartman",
      "Jr Burrs"
     ],
     "a": [
      "Peilei Cao",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Barb Flynn",
      "Jon Wheel"
     ],
     "a": [
      "Jenna Posner",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Julia Plein",
      "Priya Narahari"
     ],
     "a": [
      "Megan Harvey",
      "Peilei Cao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Vicki Main",
      "Barb Flynn"
     ],
     "a": [
      "Erika Richards",
      "Kathy BernéT"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jared Quereau",
      "Harvey Mitchell"
     ],
     "a": [
      "Jacinth Chikkala",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jon Wheel",
      "Andrew Neave"
     ],
     "a": [
      "Frank Fang",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Vicki Main",
      "Jared Quereau"
     ],
     "a": [
      "Peilei Cao",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Julia Plein",
      "Harvey Mitchell"
     ],
     "a": [
      "Erika Richards",
      "Jacinth Chikkala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Priya Narahari",
      "Jr Burrs"
     ],
     "a": [
      "Kathy BernéT",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Allison Hartman",
      "Andrew Neave"
     ],
     "a": [
      "Jenna Posner",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Allison Hartman"
     ],
     "a": [
      "Peilei Cao",
      "Jenna Posner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Priya Narahari",
      "Barb Flynn"
     ],
     "a": [
      "Erika Richards",
      "Kathy BernéT"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jared Quereau",
      "Jr Burrs"
     ],
     "a": [
      "Jacinth Chikkala",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jon Wheel",
      "Andrew Neave"
     ],
     "a": [
      "Matt Hancock",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Priya Narahari",
      "Jr Burrs"
     ],
     "a": [
      "Kathy BernéT",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Julia Plein",
      "Harvey Mitchell"
     ],
     "a": [
      "Megan Harvey",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Allison Hartman",
      "Andrew Neave"
     ],
     "a": [
      "Peilei Cao",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barb Flynn",
      "Jon Wheel"
     ],
     "a": [
      "Jenna Posner",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Julia Plein",
      "Vicki Main"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Allison Hartman",
      "Barb Flynn"
     ],
     "a": [
      "Peilei Cao",
      "Jenna Posner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jared Quereau",
      "Jr Burrs"
     ],
     "a": [
      "Jacinth Chikkala",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Harvey Mitchell",
      "Jon Wheel"
     ],
     "a": [
      "Jeff Zamorski",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Julia Plein",
      "Jared Quereau"
     ],
     "a": [
      "Megan Harvey",
      "Jacinth Chikkala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vicki Main",
      "Jon Wheel"
     ],
     "a": [
      "Peilei Cao",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Priya Narahari",
      "Harvey Mitchell"
     ],
     "a": [
      "Erika Richards",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Barb Flynn",
      "Andrew Neave"
     ],
     "a": [
      "Kathy BernéT",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Julia Plein",
      "Vicki Main"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Priya Narahari",
      "Allison Hartman"
     ],
     "a": [
      "Kathy BernéT",
      "Jenna Posner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jared Quereau",
      "Harvey Mitchell"
     ],
     "a": [
      "Jacinth Chikkala",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jr Burrs",
      "Andrew Neave"
     ],
     "a": [
      "Matt Hancock",
      "Ed Gieske"
     ]
    }
   ],
   "subs": [
    "Jacinth Chikkala",
    "Jon Wheel",
    "Julia Plein",
    "Peilei Cao",
    "Jr Burrs"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Baby Got Backhands",
   "away": "Shrinky Dinks",
   "time": "2026-07-08T19:00:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 611,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Ross",
      "Jingwei Wu"
     ],
     "a": [
      "Tera Baccile",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taina Wesner",
      "Michael Taylor"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Scott Kacelowicz"
     ],
     "a": [
      "Kathy Cripps",
      "James Price"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jodi Evans",
      "Andrew Cho"
     ],
     "a": [
      "Christy Beale",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sarah Ross",
      "Vanessa Zommi Kungne"
     ],
     "a": [
      "Katherine Maruyama",
      "Kathy Cripps"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Taina Wesner",
      "Jodi Evans"
     ],
     "a": [
      "Tera Baccile",
      "Carolina Reese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jingwei Wu",
      "Michael Taylor"
     ],
     "a": [
      "Keith Goldberg",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Andrew Cho",
      "Alex Fad"
     ],
     "a": [
      "James Price",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Taina Wesner",
      "Jingwei Wu"
     ],
     "a": [
      "Katherine Maruyama",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Michael Taylor"
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Vanessa Zommi Kungne",
      "Scott Kacelowicz"
     ],
     "a": [
      "Carolina Reese",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nancy Blank",
      "Alex Fad"
     ],
     "a": [
      "Christy Beale",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Taina Wesner",
      "Nancy Blank"
     ],
     "a": [
      "Kathy Cripps",
      "Christy Beale"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Vanessa Zommi Kungne",
      "Jodi Evans"
     ],
     "a": [
      "Tera Baccile",
      "Carolina Reese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jingwei Wu",
      "Scott Kacelowicz"
     ],
     "a": [
      "Keith Goldberg",
      "James Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrew Cho",
      "Alex Fad"
     ],
     "a": [
      "Matthew Shusterman",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Vanessa Zommi Kungne",
      "Scott Kacelowicz"
     ],
     "a": [
      "Carolina Reese",
      "James Price"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Ross",
      "Michael Taylor"
     ],
     "a": [
      "Katherine Maruyama",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nancy Blank",
      "Alex Fad"
     ],
     "a": [
      "Kathy Cripps",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Andrew Cho"
     ],
     "a": [
      "Christy Beale",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Taina Wesner"
     ],
     "a": [
      "Katherine Maruyama",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Nancy Blank",
      "Jodi Evans"
     ],
     "a": [
      "Kathy Cripps",
      "Christy Beale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jingwei Wu",
      "Scott Kacelowicz"
     ],
     "a": [
      "Keith Goldberg",
      "James Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Taylor",
      "Andrew Cho"
     ],
     "a": [
      "Dan Ladislaw",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Ross",
      "Jingwei Wu"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taina Wesner",
      "Andrew Cho"
     ],
     "a": [
      "Kathy Cripps",
      "James Price"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vanessa Zommi Kungne",
      "Michael Taylor"
     ],
     "a": [
      "Tera Baccile",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jodi Evans",
      "Alex Fad"
     ],
     "a": [
      "Carolina Reese",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Ross",
      "Taina Wesner"
     ],
     "a": [
      "Katherine Maruyama",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vanessa Zommi Kungne",
      "Nancy Blank"
     ],
     "a": [
      "Carolina Reese",
      "Christy Beale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jingwei Wu",
      "Michael Taylor"
     ],
     "a": [
      "Keith Goldberg",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Scott Kacelowicz",
      "Alex Fad"
     ],
     "a": [
      "Matthew Shusterman",
      "Robert Block"
     ]
    }
   ],
   "subs": [
    "Scott Kacelowicz",
    "Keith Goldberg",
    "Alex Fad"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Drop it Like it's Hot",
   "away": "Baby Got Backhands",
   "time": "2026-07-15T19:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 615,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Megan Harvey",
      "Chris Fratinardo"
     ],
     "a": [
      "Taina Wesner",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marykristin Haskell",
      "Jeff Zamorski"
     ],
     "a": [
      "Sarah Ross",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jenna Posner",
      "Frank Fang"
     ],
     "a": [
      "Mary Callaghan",
      "Sal Bwint"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Debra Schlosser",
      "Matt Hancock"
     ],
     "a": [
      "Jenn Smith",
      "Jeff Jensen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Megan Harvey",
      "Linda Zhu"
     ],
     "a": [
      "Sarah Ross",
      "Mary Callaghan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marykristin Haskell",
      "Debra Schlosser"
     ],
     "a": [
      "Taina Wesner",
      "Vanessa Zommi Kungne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Matt Hancock",
      "Ed Gieske"
     ],
     "a": [
      "Sal Bwint",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Marykristin Haskell",
      "Chris Fratinardo"
     ],
     "a": [
      "Sarah Ross",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Jeff Zamorski"
     ],
     "a": [
      "Taina Wesner",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Frank Fang"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jenna Posner",
      "Ed Gieske"
     ],
     "a": [
      "Jenn Smith",
      "Jeff Jensen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marykristin Haskell",
      "Jenna Posner"
     ],
     "a": [
      "Mary Callaghan",
      "Jenn Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Debra Schlosser"
     ],
     "a": [
      "Taina Wesner",
      "Vanessa Zommi Kungne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Fratinardo",
      "Frank Fang"
     ],
     "a": [
      "Jingwei Wu",
      "Sal Bwint"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matt Hancock",
      "Ed Gieske"
     ],
     "a": [
      "Matt Enz",
      "Jeff Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Frank Fang"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Sal Bwint"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Megan Harvey",
      "Jeff Zamorski"
     ],
     "a": [
      "Sarah Ross",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jenna Posner",
      "Ed Gieske"
     ],
     "a": [
      "Mary Callaghan",
      "Jeff Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Debra Schlosser",
      "Matt Hancock"
     ],
     "a": [
      "Jenn Smith",
      "Matt Enz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Marykristin Haskell"
     ],
     "a": [
      "Sarah Ross",
      "Taina Wesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jenna Posner",
      "Debra Schlosser"
     ],
     "a": [
      "Mary Callaghan",
      "Jenn Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chris Fratinardo",
      "Frank Fang"
     ],
     "a": [
      "Jingwei Wu",
      "Sal Bwint"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jeff Zamorski",
      "Matt Hancock"
     ],
     "a": [
      "Michael Taylor",
      "Jeff Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Megan Harvey",
      "Chris Fratinardo"
     ],
     "a": [
      "Sarah Ross",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marykristin Haskell",
      "Matt Hancock"
     ],
     "a": [
      "Mary Callaghan",
      "Sal Bwint"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Jeff Zamorski"
     ],
     "a": [
      "Taina Wesner",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Debra Schlosser",
      "Ed Gieske"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Matt Enz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Marykristin Haskell"
     ],
     "a": [
      "Sarah Ross",
      "Taina Wesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Linda Zhu",
      "Jenna Posner"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Jenn Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Frank Fang",
      "Ed Gieske"
     ],
     "a": [
      "Matt Enz",
      "Jeff Jensen"
     ]
    }
   ],
   "subs": [
    "Matt Enz"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Shrinky Dinks",
   "away": "Kitchen Chaos",
   "time": "2026-07-15T19:00:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 588,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Madeleine Shusterman",
      "Jim Darcangelo"
     ],
     "a": [
      "Nam Barsh",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Matthew Shusterman"
     ],
     "a": [
      "Claudya Elefante",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kim Mchugh",
      "Casey Jannetta"
     ],
     "a": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christy Beale",
      "Robert Block"
     ],
     "a": [
      "Jean Rosenbaum",
      "Saul Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Madeleine Shusterman",
      "Kim Bohrer"
     ],
     "a": [
      "Claudya Elefante",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephanie Woomer",
      "Christy Beale"
     ],
     "a": [
      "Nam Barsh",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Matthew Shusterman"
     ],
     "a": [
      "Jonathan Goldner",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Robert Block",
      "Chris Norton"
     ],
     "a": [
      "Sandro Stefanelli",
      "Todd Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ],
     "a": [
      "Claudya Elefante",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Madeleine Shusterman",
      "Matthew Shusterman"
     ],
     "a": [
      "Nam Barsh",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kim Bohrer",
      "Casey Jannetta"
     ],
     "a": [
      "Sandra Thompson",
      "Todd Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kim Mchugh",
      "Chris Norton"
     ],
     "a": [
      "Jean Rosenbaum",
      "Saul Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephanie Woomer",
      "Kim Mchugh"
     ],
     "a": [
      "Christine Dugan",
      "Jean Rosenbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kim Bohrer",
      "Christy Beale"
     ],
     "a": [
      "Nam Barsh",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Casey Jannetta"
     ],
     "a": [
      "Jonathan Goldner",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Robert Block",
      "Chris Norton"
     ],
     "a": [
      "Todd Law",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kim Bohrer",
      "Casey Jannetta"
     ],
     "a": [
      "Sandra Thompson",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Madeleine Shusterman",
      "Matthew Shusterman"
     ],
     "a": [
      "Claudya Elefante",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kim Mchugh",
      "Chris Norton"
     ],
     "a": [
      "Christine Dugan",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christy Beale",
      "Robert Block"
     ],
     "a": [
      "Jean Rosenbaum",
      "Todd Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Madeleine Shusterman",
      "Stephanie Woomer"
     ],
     "a": [
      "Claudya Elefante",
      "Nam Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kim Mchugh",
      "Christy Beale"
     ],
     "a": [
      "Christine Dugan",
      "Jean Rosenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jim Darcangelo",
      "Casey Jannetta"
     ],
     "a": [
      "Jonathan Goldner",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matthew Shusterman",
      "Robert Block"
     ],
     "a": [
      "Tejas Goculdas",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Madeleine Shusterman",
      "Jim Darcangelo"
     ],
     "a": [
      "Claudya Elefante",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephanie Woomer",
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
     "hs": 18,
     "as": 21,
     "h": [
      "Kim Bohrer",
      "Matthew Shusterman"
     ],
     "a": [
      "Nam Barsh",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christy Beale",
      "Chris Norton"
     ],
     "a": [
      "Sandra Thompson",
      "Todd Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Madeleine Shusterman",
      "Stephanie Woomer"
     ],
     "a": [
      "Claudya Elefante",
      "Nam Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kim Bohrer",
      "Kim Mchugh"
     ],
     "a": [
      "Sandra Thompson",
      "Jean Rosenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Matthew Shusterman"
     ],
     "a": [
      "Jonathan Goldner",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Casey Jannetta",
      "Chris Norton"
     ],
     "a": [
      "Todd Law",
      "Saul Barsh"
     ]
    }
   ],
   "subs": [
    "Casey Jannetta",
    "Stephanie Woomer",
    "Jonathan Goldner",
    "Jim Darcangelo",
    "Madeleine Shusterman"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Kitchen Chaos",
   "away": "The Young Guns",
   "time": "2026-07-22T19:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 645,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Claudya Elefante",
      "Tejas Goculdas"
     ],
     "a": [
      "Emily Ocasio",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Nam Barsh",
      "Sandro Stefanelli"
     ],
     "a": [
      "Mara Boast",
      "Jacinth Chikkala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Russell Cripps"
     ],
     "a": [
      "Vicki Main",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jean Rosenbaum",
      "Todd Law"
     ],
     "a": [
      "Allison Hartman",
      "Andrew Neave"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Claudya Elefante",
      "Christine Dugan"
     ],
     "a": [
      "Mara Boast",
      "Vicki Main"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nam Barsh",
      "Jean Rosenbaum"
     ],
     "a": [
      "Emily Ocasio",
      "Priya Narahari"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ],
     "a": [
      "Jacinth Chikkala",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Todd Law",
      "Saul Barsh"
     ],
     "a": [
      "Matt Enz",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nam Barsh",
      "Tejas Goculdas"
     ],
     "a": [
      "Mara Boast",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Claudya Elefante",
      "Sandro Stefanelli"
     ],
     "a": [
      "Emily Ocasio",
      "Jacinth Chikkala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Russell Cripps"
     ],
     "a": [
      "Priya Narahari",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Saul Barsh"
     ],
     "a": [
      "Allison Hartman",
      "Andrew Neave"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nam Barsh",
      "Jamila Sefiane"
     ],
     "a": [
      "Vicki Main",
      "Allison Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Jean Rosenbaum"
     ],
     "a": [
      "Emily Ocasio",
      "Priya Narahari"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tejas Goculdas",
      "Russell Cripps"
     ],
     "a": [
      "Jacinth Chikkala",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Todd Law",
      "Saul Barsh"
     ],
     "a": [
      "Harrison Bohrer",
      "Andrew Neave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Russell Cripps"
     ],
     "a": [
      "Priya Narahari",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Claudya Elefante",
      "Sandro Stefanelli"
     ],
     "a": [
      "Mara Boast",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Saul Barsh"
     ],
     "a": [
      "Vicki Main",
      "Andrew Neave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jean Rosenbaum",
      "Todd Law"
     ],
     "a": [
      "Allison Hartman",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Nam Barsh"
     ],
     "a": [
      "Mara Boast",
      "Emily Ocasio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Jean Rosenbaum"
     ],
     "a": [
      "Vicki Main",
      "Allison Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tejas Goculdas",
      "Russell Cripps"
     ],
     "a": [
      "Jacinth Chikkala",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sandro Stefanelli",
      "Todd Law"
     ],
     "a": [
      "Harvey Mitchell",
      "Andrew Neave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Claudya Elefante",
      "Tejas Goculdas"
     ],
     "a": [
      "Mara Boast",
      "Jacinth Chikkala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nam Barsh",
      "Todd Law"
     ],
     "a": [
      "Vicki Main",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Emily Ocasio",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jean Rosenbaum",
      "Saul Barsh"
     ],
     "a": [
      "Priya Narahari",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Nam Barsh"
     ],
     "a": [
      "Mara Boast",
      "Emily Ocasio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Jamila Sefiane"
     ],
     "a": [
      "Priya Narahari",
      "Allison Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ],
     "a": [
      "Jacinth Chikkala",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Russell Cripps",
      "Saul Barsh"
     ],
     "a": [
      "Harrison Bohrer",
      "Andrew Neave"
     ]
    }
   ],
   "subs": [
    "Matt Enz",
    "Jacinth Chikkala"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Shrinky Dinks",
   "away": "Drop it Like it's Hot",
   "time": "2026-07-22T19:00:00",
   "complete": true,
   "homePoints": 572,
   "awayPoints": 551,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christy Beale",
      "James Price"
     ],
     "a": [
      "Erika Richards",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Chris Norton"
     ],
     "a": [
      "Megan Harvey",
      "Chris Fratinardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kim Bohrer",
      "Michael Finkelstein"
     ],
     "a": [
      "Marykristin Haskell",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kathy Cripps",
      "Robert Block"
     ],
     "a": [
      "Ange Bradley",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christy Beale",
      "Katherine Maruyama"
     ],
     "a": [
      "Megan Harvey",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Kathy Cripps"
     ],
     "a": [
      "Erika Richards",
      "Kathy BernéT"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "James Price",
      "Chris Norton"
     ],
     "a": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Robert Block",
      "Matthew Shusterman"
     ],
     "a": [
      "Frank Fang",
      "Kevin Basch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tera Baccile",
      "James Price"
     ],
     "a": [
      "Megan Harvey",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christy Beale",
      "Chris Norton"
     ],
     "a": [
      "Erika Richards",
      "Chris Fratinardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Kathy BernéT",
      "Kevin Basch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kim Bohrer",
      "Matthew Shusterman"
     ],
     "a": [
      "Ange Bradley",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tera Baccile",
      "Kim Bohrer"
     ],
     "a": [
      "Marykristin Haskell",
      "Ange Bradley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Kathy Cripps"
     ],
     "a": [
      "Erika Richards",
      "Kathy BernéT"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "James Price",
      "Michael Finkelstein"
     ],
     "a": [
      "Chris Fratinardo",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Robert Block",
      "Matthew Shusterman"
     ],
     "a": [
      "Kevin Basch",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Kathy BernéT",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christy Beale",
      "Chris Norton"
     ],
     "a": [
      "Megan Harvey",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kim Bohrer",
      "Matthew Shusterman"
     ],
     "a": [
      "Marykristin Haskell",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kathy Cripps",
      "Robert Block"
     ],
     "a": [
      "Ange Bradley",
      "Kevin Basch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christy Beale",
      "Tera Baccile"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kim Bohrer",
      "Kathy Cripps"
     ],
     "a": [
      "Marykristin Haskell",
      "Ange Bradley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "James Price",
      "Michael Finkelstein"
     ],
     "a": [
      "Chris Fratinardo",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chris Norton",
      "Robert Block"
     ],
     "a": [
      "Jeff Zamorski",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christy Beale",
      "James Price"
     ],
     "a": [
      "Megan Harvey",
      "Chris Fratinardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Robert Block"
     ],
     "a": [
      "Marykristin Haskell",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Chris Norton"
     ],
     "a": [
      "Erika Richards",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kathy Cripps",
      "Matthew Shusterman"
     ],
     "a": [
      "Kathy BernéT",
      "Kevin Basch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christy Beale",
      "Tera Baccile"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Katherine Maruyama",
      "Kim Bohrer"
     ],
     "a": [
      "Kathy BernéT",
      "Ange Bradley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "James Price",
      "Chris Norton"
     ],
     "a": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michael Finkelstein",
      "Matthew Shusterman"
     ],
     "a": [
      "Kevin Basch",
      "Matt Hancock"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "The Young Guns",
   "away": "Shrinky Dinks",
   "time": "2026-07-29T19:00:00",
   "complete": true,
   "homePoints": 622,
   "awayPoints": 571,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Emily Ocasio",
      "Harvey Mitchell"
     ],
     "a": [
      "Tera Baccile",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Priya Narahari",
      "Jared Quereau"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Allison Hartman",
      "Graham Heavenrich"
     ],
     "a": [
      "Kathy Cripps",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Barb Flynn",
      "Andrew Neave"
     ],
     "a": [
      "Christy Beale",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Emily Ocasio",
      "Vicki Main"
     ],
     "a": [
      "Katherine Maruyama",
      "Kathy Cripps"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Priya Narahari",
      "Barb Flynn"
     ],
     "a": [
      "Tera Baccile",
      "Christy Beale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Harvey Mitchell",
      "Jared Quereau"
     ],
     "a": [
      "Michael Finkelstein",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrew Neave",
      "Jordan Demcher"
     ],
     "a": [
      "Matthew Shusterman",
      "James Price"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Priya Narahari",
      "Harvey Mitchell"
     ],
     "a": [
      "Katherine Maruyama",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emily Ocasio",
      "Jared Quereau"
     ],
     "a": [
      "Tera Baccile",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Vicki Main",
      "Graham Heavenrich"
     ],
     "a": [
      "Christy Beale",
      "James Price"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Allison Hartman",
      "Jordan Demcher"
     ],
     "a": [
      "Carolina Reese",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Priya Narahari",
      "Allison Hartman"
     ],
     "a": [
      "Kathy Cripps",
      "Carolina Reese"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vicki Main",
      "Barb Flynn"
     ],
     "a": [
      "Tera Baccile",
      "Christy Beale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Harvey Mitchell",
      "Graham Heavenrich"
     ],
     "a": [
      "Michael Finkelstein",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrew Neave",
      "Jordan Demcher"
     ],
     "a": [
      "James Price",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Vicki Main",
      "Graham Heavenrich"
     ],
     "a": [
      "Christy Beale",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emily Ocasio",
      "Jared Quereau"
     ],
     "a": [
      "Katherine Maruyama",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Allison Hartman",
      "Jordan Demcher"
     ],
     "a": [
      "Kathy Cripps",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Barb Flynn",
      "Andrew Neave"
     ],
     "a": [
      "Carolina Reese",
      "James Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Priya Narahari"
     ],
     "a": [
      "Katherine Maruyama",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Allison Hartman",
      "Barb Flynn"
     ],
     "a": [
      "Kathy Cripps",
      "Carolina Reese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Harvey Mitchell",
      "Graham Heavenrich"
     ],
     "a": [
      "Michael Finkelstein",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jared Quereau",
      "Andrew Neave"
     ],
     "a": [
      "Dan Ladislaw",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Emily Ocasio",
      "Harvey Mitchell"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Priya Narahari",
      "Andrew Neave"
     ],
     "a": [
      "Kathy Cripps",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Vicki Main",
      "Jared Quereau"
     ],
     "a": [
      "Tera Baccile",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Barb Flynn",
      "Jordan Demcher"
     ],
     "a": [
      "Christy Beale",
      "James Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Emily Ocasio",
      "Priya Narahari"
     ],
     "a": [
      "Katherine Maruyama",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Vicki Main",
      "Allison Hartman"
     ],
     "a": [
      "Kathy Cripps",
      "Carolina Reese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Harvey Mitchell",
      "Jared Quereau"
     ],
     "a": [
      "Michael Finkelstein",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Graham Heavenrich",
      "Jordan Demcher"
     ],
     "a": [
      "James Price",
      "Chris Norton"
     ]
    }
   ],
   "subs": [
    "Jordan Demcher"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Baby Got Backhands",
   "away": "Kitchen Chaos",
   "time": "2026-07-29T19:00:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 581,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarah Ross",
      "Jingwei Wu"
     ],
     "a": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Taina Wesner",
      "Michael Taylor"
     ],
     "a": [
      "Nam Barsh",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Scott Kacelowicz"
     ],
     "a": [
      "Jamila Sefiane",
      "Russell Cripps"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jodi Evans",
      "Sal Bwint"
     ],
     "a": [
      "Jennifer Land",
      "Saul Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Mary Callaghan"
     ],
     "a": [
      "Nam Barsh",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Taina Wesner",
      "Jodi Evans"
     ],
     "a": [
      "Christine Dugan",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jingwei Wu",
      "Michael Taylor"
     ],
     "a": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sal Bwint",
      "Tim Phelan"
     ],
     "a": [
      "Russell Cripps",
      "Todd Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taina Wesner",
      "Jingwei Wu"
     ],
     "a": [
      "Nam Barsh",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sarah Ross",
      "Michael Taylor"
     ],
     "a": [
      "Christine Dugan",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mary Callaghan",
      "Scott Kacelowicz"
     ],
     "a": [
      "Sandra Thompson",
      "Todd Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Jennifer Land",
      "Saul Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Taina Wesner",
      "Nancy Blank"
     ],
     "a": [
      "Jamila Sefiane",
      "Jennifer Land"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mary Callaghan",
      "Jodi Evans"
     ],
     "a": [
      "Christine Dugan",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jingwei Wu",
      "Scott Kacelowicz"
     ],
     "a": [
      "Tejas Goculdas",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sal Bwint",
      "Tim Phelan"
     ],
     "a": [
      "Todd Law",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mary Callaghan",
      "Scott Kacelowicz"
     ],
     "a": [
      "Sandra Thompson",
      "Russell Cripps"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sarah Ross",
      "Michael Taylor"
     ],
     "a": [
      "Nam Barsh",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Jamila Sefiane",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Sal Bwint"
     ],
     "a": [
      "Jennifer Land",
      "Todd Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarah Ross",
      "Taina Wesner"
     ],
     "a": [
      "Nam Barsh",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Jodi Evans"
     ],
     "a": [
      "Jamila Sefiane",
      "Jennifer Land"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jingwei Wu",
      "Scott Kacelowicz"
     ],
     "a": [
      "Tejas Goculdas",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Taylor",
      "Sal Bwint"
     ],
     "a": [
      "Sandro Stefanelli",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Jingwei Wu"
     ],
     "a": [
      "Nam Barsh",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Taina Wesner",
      "Sal Bwint"
     ],
     "a": [
      "Jamila Sefiane",
      "Russell Cripps"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Callaghan",
      "Michael Taylor"
     ],
     "a": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jodi Evans",
      "Tim Phelan"
     ],
     "a": [
      "Sandra Thompson",
      "Todd Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Taina Wesner"
     ],
     "a": [
      "Nam Barsh",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mary Callaghan",
      "Nancy Blank"
     ],
     "a": [
      "Sandra Thompson",
      "Jennifer Land"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jingwei Wu",
      "Michael Taylor"
     ],
     "a": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Scott Kacelowicz",
      "Tim Phelan"
     ],
     "a": [
      "Todd Law",
      "Saul Barsh"
     ]
    }
   ],
   "subs": [
    "Scott Kacelowicz"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Kitchen Chaos",
   "away": "Shrinky Dinks",
   "time": "2026-08-05T19:00:00",
   "complete": true,
   "homePoints": 558,
   "awayPoints": 652,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nam Barsh",
      "Tejas Goculdas"
     ],
     "a": [
      "Kathy Cripps",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Tera Baccile",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "David Marchese"
     ],
     "a": [
      "Stephanie Woomer",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Land",
      "Russell Cripps"
     ],
     "a": [
      "Kim Mchugh",
      "James Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Sandra Thompson"
     ],
     "a": [
      "Tera Baccile",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Jennifer Land"
     ],
     "a": [
      "Kathy Cripps",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ],
     "a": [
      "Michael Finkelstein",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Russell Cripps",
      "Saul Barsh"
     ],
     "a": [
      "Robert Block",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Tejas Goculdas"
     ],
     "a": [
      "Tera Baccile",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nam Barsh",
      "Sandro Stefanelli"
     ],
     "a": [
      "Kathy Cripps",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "David Marchese"
     ],
     "a": [
      "Jane Meng",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Jamila Sefiane",
      "Saul Barsh"
     ],
     "a": [
      "Kim Mchugh",
      "James Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Jamila Sefiane"
     ],
     "a": [
      "Stephanie Woomer",
      "Kim Mchugh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Jennifer Land"
     ],
     "a": [
      "Kathy Cripps",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tejas Goculdas",
      "David Marchese"
     ],
     "a": [
      "Michael Finkelstein",
      "Robert Block"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Russell Cripps",
      "Saul Barsh"
     ],
     "a": [
      "Chris Norton",
      "James Price"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "David Marchese"
     ],
     "a": [
      "Jane Meng",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Sandro Stefanelli"
     ],
     "a": [
      "Tera Baccile",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Saul Barsh"
     ],
     "a": [
      "Stephanie Woomer",
      "James Price"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Land",
      "Russell Cripps"
     ],
     "a": [
      "Kim Mchugh",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Christine Dugan"
     ],
     "a": [
      "Tera Baccile",
      "Kathy Cripps"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Jennifer Land"
     ],
     "a": [
      "Stephanie Woomer",
      "Kim Mchugh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tejas Goculdas",
      "David Marchese"
     ],
     "a": [
      "Michael Finkelstein",
      "Robert Block"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sandro Stefanelli",
      "Russell Cripps"
     ],
     "a": [
      "Matthew Shusterman",
      "James Price"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nam Barsh",
      "Tejas Goculdas"
     ],
     "a": [
      "Tera Baccile",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Dugan",
      "Russell Cripps"
     ],
     "a": [
      "Stephanie Woomer",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Sandro Stefanelli"
     ],
     "a": [
      "Kathy Cripps",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Land",
      "Saul Barsh"
     ],
     "a": [
      "Jane Meng",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Nam Barsh",
      "Christine Dugan"
     ],
     "a": [
      "Tera Baccile",
      "Kathy Cripps"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Jamila Sefiane"
     ],
     "a": [
      "Jane Meng",
      "Kim Mchugh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tejas Goculdas",
      "Sandro Stefanelli"
     ],
     "a": [
      "Michael Finkelstein",
      "Matthew Shusterman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Marchese",
      "Saul Barsh"
     ],
     "a": [
      "Chris Norton",
      "James Price"
     ]
    }
   ],
   "subs": [
    "Stephanie Woomer",
    "Jane Meng"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Baby Got Backhands",
   "away": "Drop it Like it's Hot",
   "time": "2026-08-05T19:00:00",
   "complete": true,
   "homePoints": 574,
   "awayPoints": 576,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Taina Wesner",
      "Jingwei Wu"
     ],
     "a": [
      "Erika Richards",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Callaghan",
      "Evan Oneill"
     ],
     "a": [
      "Megan Harvey",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nancy Blank",
      "Andrew Cho"
     ],
     "a": [
      "Linda Zhu",
      "Kevin Basch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jenn Smith",
      "Sal Bwint"
     ],
     "a": [
      "Debra Schlosser",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Taina Wesner",
      "Vanessa Zommi Kungne"
     ],
     "a": [
      "Megan Harvey",
      "Linda Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mary Callaghan",
      "Jenn Smith"
     ],
     "a": [
      "Erika Richards",
      "Jenna Posner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jingwei Wu",
      "Evan Oneill"
     ],
     "a": [
      "Jeff Zamorski",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sal Bwint",
      "Tim Phelan"
     ],
     "a": [
      "Kevin Basch",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mary Callaghan",
      "Jingwei Wu"
     ],
     "a": [
      "Megan Harvey",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taina Wesner",
      "Evan Oneill"
     ],
     "a": [
      "Erika Richards",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Vanessa Zommi Kungne",
      "Andrew Cho"
     ],
     "a": [
      "Jenna Posner",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Debra Schlosser",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Callaghan",
      "Nancy Blank"
     ],
     "a": [
      "Linda Zhu",
      "Debra Schlosser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vanessa Zommi Kungne",
      "Jenn Smith"
     ],
     "a": [
      "Erika Richards",
      "Jenna Posner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jingwei Wu",
      "Andrew Cho"
     ],
     "a": [
      "Jeff Zamorski",
      "Kevin Basch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sal Bwint",
      "Tim Phelan"
     ],
     "a": [
      "Matt Hancock",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vanessa Zommi Kungne",
      "Andrew Cho"
     ],
     "a": [
      "Jenna Posner",
      "Kevin Basch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Taina Wesner",
      "Evan Oneill"
     ],
     "a": [
      "Megan Harvey",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Linda Zhu",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jenn Smith",
      "Sal Bwint"
     ],
     "a": [
      "Debra Schlosser",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taina Wesner",
      "Mary Callaghan"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nancy Blank",
      "Jenn Smith"
     ],
     "a": [
      "Linda Zhu",
      "Debra Schlosser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jingwei Wu",
      "Andrew Cho"
     ],
     "a": [
      "Jeff Zamorski",
      "Kevin Basch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Evan Oneill",
      "Sal Bwint"
     ],
     "a": [
      "Frank Fang",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Taina Wesner",
      "Jingwei Wu"
     ],
     "a": [
      "Megan Harvey",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mary Callaghan",
      "Sal Bwint"
     ],
     "a": [
      "Linda Zhu",
      "Kevin Basch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Vanessa Zommi Kungne",
      "Evan Oneill"
     ],
     "a": [
      "Erika Richards",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jenn Smith",
      "Tim Phelan"
     ],
     "a": [
      "Jenna Posner",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taina Wesner",
      "Mary Callaghan"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Vanessa Zommi Kungne",
      "Nancy Blank"
     ],
     "a": [
      "Jenna Posner",
      "Debra Schlosser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Jingwei Wu",
      "Evan Oneill"
     ],
     "a": [
      "Jeff Zamorski",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andrew Cho",
      "Tim Phelan"
     ],
     "a": [
      "Matt Hancock",
      "Ed Gieske"
     ]
    }
   ],
   "subs": [
    "Evan Oneill"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "The Young Guns",
   "away": "Baby Got Backhands",
   "time": "2026-08-12T19:00:00",
   "complete": true,
   "homePoints": 574,
   "awayPoints": 615,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mara Boast",
      "Harvey Mitchell"
     ],
     "a": [
      "Taina Wesner",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emily Ocasio",
      "Jared Quereau"
     ],
     "a": [
      "Sarah Ross",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Pao",
      "Graham Heavenrich"
     ],
     "a": [
      "Mary Callaghan",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Allison Hartman",
      "Harrison Bohrer"
     ],
     "a": [
      "Jodi Evans",
      "Jeff Jensen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mara Boast",
      "Vicki Main"
     ],
     "a": [
      "Sarah Ross",
      "Mary Callaghan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Allison Hartman"
     ],
     "a": [
      "Taina Wesner",
      "Vanessa Zommi Kungne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Harvey Mitchell",
      "Jared Quereau"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Harrison Bohrer",
      "Lincoln Jensen"
     ],
     "a": [
      "Scott Kacelowicz",
      "Andrew Cho"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Harvey Mitchell"
     ],
     "a": [
      "Sarah Ross",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Mara Boast",
      "Jared Quereau"
     ],
     "a": [
      "Taina Wesner",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vicki Main",
      "Graham Heavenrich"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Andrew Cho"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Pao",
      "Lincoln Jensen"
     ],
     "a": [
      "Jodi Evans",
      "Jeff Jensen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Emily Ocasio",
      "Jessica Pao"
     ],
     "a": [
      "Mary Callaghan",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vicki Main",
      "Allison Hartman"
     ],
     "a": [
      "Taina Wesner",
      "Vanessa Zommi Kungne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harvey Mitchell",
      "Graham Heavenrich"
     ],
     "a": [
      "Jingwei Wu",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Harrison Bohrer",
      "Lincoln Jensen"
     ],
     "a": [
      "Andrew Cho",
      "Jeff Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Vicki Main",
      "Graham Heavenrich"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mara Boast",
      "Jared Quereau"
     ],
     "a": [
      "Sarah Ross",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Pao",
      "Lincoln Jensen"
     ],
     "a": [
      "Mary Callaghan",
      "Jeff Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Allison Hartman",
      "Harrison Bohrer"
     ],
     "a": [
      "Jodi Evans",
      "Andrew Cho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mara Boast",
      "Emily Ocasio"
     ],
     "a": [
      "Sarah Ross",
      "Taina Wesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessica Pao",
      "Allison Hartman"
     ],
     "a": [
      "Mary Callaghan",
      "Jodi Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Harvey Mitchell",
      "Graham Heavenrich"
     ],
     "a": [
      "Jingwei Wu",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jared Quereau",
      "Harrison Bohrer"
     ],
     "a": [
      "Michael Taylor",
      "Jeff Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mara Boast",
      "Harvey Mitchell"
     ],
     "a": [
      "Sarah Ross",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Emily Ocasio",
      "Harrison Bohrer"
     ],
     "a": [
      "Mary Callaghan",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Vicki Main",
      "Jared Quereau"
     ],
     "a": [
      "Taina Wesner",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Allison Hartman",
      "Lincoln Jensen"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Andrew Cho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mara Boast",
      "Emily Ocasio"
     ],
     "a": [
      "Sarah Ross",
      "Taina Wesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Vicki Main",
      "Jessica Pao"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Jodi Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harvey Mitchell",
      "Jared Quereau"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Graham Heavenrich",
      "Lincoln Jensen"
     ],
     "a": [
      "Andrew Cho",
      "Jeff Jensen"
     ]
    }
   ],
   "subs": [
    "Scott Kacelowicz"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Drop it Like it's Hot",
   "away": "Kitchen Chaos",
   "time": "2026-08-12T19:00:00",
   "complete": true,
   "homePoints": 627,
   "awayPoints": 630,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Megan Harvey",
      "Chris Fratinardo"
     ],
     "a": [
      "Claudya Elefante",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Erika Richards",
      "Jeff Zamorski"
     ],
     "a": [
      "Nam Barsh",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathy BernéT",
      "Frank Fang"
     ],
     "a": [
      "Tracey Carney",
      "Russell Cripps"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ange Bradley",
      "Kevin Basch"
     ],
     "a": [
      "Jennifer Land",
      "Saul Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Linda Zhu"
     ],
     "a": [
      "Nam Barsh",
      "Tracey Carney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Erika Richards",
      "Ange Bradley"
     ],
     "a": [
      "Claudya Elefante",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ],
     "a": [
      "Tejas Goculdas",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kevin Basch",
      "Ed Gieske"
     ],
     "a": [
      "Russell Cripps",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Erika Richards",
      "Chris Fratinardo"
     ],
     "a": [
      "Nam Barsh",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Megan Harvey",
      "Jeff Zamorski"
     ],
     "a": [
      "Claudya Elefante",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Linda Zhu",
      "Frank Fang"
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
     "as": 13,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Jennifer Land",
      "Saul Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Erika Richards",
      "Kathy BernéT"
     ],
     "a": [
      "Tracey Carney",
      "Jennifer Land"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Linda Zhu",
      "Ange Bradley"
     ],
     "a": [
      "Claudya Elefante",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Fratinardo",
      "Frank Fang"
     ],
     "a": [
      "Tejas Goculdas",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kevin Basch",
      "Ed Gieske"
     ],
     "a": [
      "Sandro Stefanelli",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Linda Zhu",
      "Frank Fang"
     ],
     "a": [
      "Jamila Sefiane",
      "Russell Cripps"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Jeff Zamorski"
     ],
     "a": [
      "Nam Barsh",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Tracey Carney",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ange Bradley",
      "Kevin Basch"
     ],
     "a": [
      "Jennifer Land",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Megan Harvey",
      "Erika Richards"
     ],
     "a": [
      "Nam Barsh",
      "Claudya Elefante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Ange Bradley"
     ],
     "a": [
      "Tracey Carney",
      "Jennifer Land"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Fratinardo",
      "Frank Fang"
     ],
     "a": [
      "Tejas Goculdas",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeff Zamorski",
      "Kevin Basch"
     ],
     "a": [
      "Keith Goldberg",
      "Saul Barsh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Chris Fratinardo"
     ],
     "a": [
      "Nam Barsh",
      "Tejas Goculdas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Erika Richards",
      "Kevin Basch"
     ],
     "a": [
      "Tracey Carney",
      "Russell Cripps"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Jeff Zamorski"
     ],
     "a": [
      "Claudya Elefante",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ange Bradley",
      "Ed Gieske"
     ],
     "a": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Erika Richards"
     ],
     "a": [
      "Nam Barsh",
      "Claudya Elefante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Linda Zhu",
      "Kathy BernéT"
     ],
     "a": [
      "Jamila Sefiane",
      "Jennifer Land"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ],
     "a": [
      "Tejas Goculdas",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Frank Fang",
      "Ed Gieske"
     ],
     "a": [
      "Sandro Stefanelli",
      "Saul Barsh"
     ]
    }
   ],
   "subs": [
    "Keith Goldberg"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Shrinky Dinks",
   "away": "Baby Got Backhands",
   "time": "2026-08-19T19:00:00",
   "complete": true,
   "homePoints": 621,
   "awayPoints": 555,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Sarah Ross",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kathy Cripps",
      "Dan Ladislaw"
     ],
     "a": [
      "Taina Wesner",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kim Bohrer",
      "Robert Block"
     ],
     "a": [
      "Nancy Blank",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tera Baccile",
      "James Price"
     ],
     "a": [
      "Jenn Smith",
      "Sal Bwint"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Katherine Maruyama",
      "Tera Baccile"
     ],
     "a": [
      "Taina Wesner",
      "Nancy Blank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kathy Cripps",
      "Kim Bohrer"
     ],
     "a": [
      "Sarah Ross",
      "Vanessa Zommi Kungne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michael Finkelstein",
      "Dan Ladislaw"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "James Price",
      "Matthew Shusterman"
     ],
     "a": [
      "Scott Kacelowicz",
      "Jeff Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kathy Cripps",
      "Michael Finkelstein"
     ],
     "a": [
      "Taina Wesner",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Katherine Maruyama",
      "Dan Ladislaw"
     ],
     "a": [
      "Sarah Ross",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 32,
     "h": [
      "Kim Bohrer",
      "Robert Block"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Jeff Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Tera Baccile",
      "Matthew Shusterman"
     ],
     "a": [
      "Jenn Smith",
      "Sal Bwint"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Kathy Cripps"
     ],
     "a": [
      "Taina Wesner",
      "Vanessa Zommi Kungne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Tera Baccile",
      "Kim Bohrer"
     ],
     "a": [
      "Nancy Blank",
      "Jenn Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dan Ladislaw",
      "Robert Block"
     ],
     "a": [
      "Michael Taylor",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "James Price",
      "Matthew Shusterman"
     ],
     "a": [
      "Sal Bwint",
      "Jeff Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathy Cripps",
      "Michael Finkelstein"
     ],
     "a": [
      "Sarah Ross",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Robert Block"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tera Baccile",
      "Matthew Shusterman"
     ],
     "a": [
      "Nancy Blank",
      "Sal Bwint"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kim Bohrer",
      "James Price"
     ],
     "a": [
      "Jenn Smith",
      "Jeff Jensen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Kathy Cripps"
     ],
     "a": [
      "Sarah Ross",
      "Taina Wesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Tera Baccile",
      "Kim Bohrer"
     ],
     "a": [
      "Nancy Blank",
      "Jenn Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Finkelstein",
      "Robert Block"
     ],
     "a": [
      "Michael Taylor",
      "Sal Bwint"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dan Ladislaw",
      "James Price"
     ],
     "a": [
      "Jingwei Wu",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Taina Wesner",
      "Michael Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kathy Cripps",
      "Dan Ladislaw"
     ],
     "a": [
      "Sarah Ross",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tera Baccile",
      "James Price"
     ],
     "a": [
      "Vanessa Zommi Kungne",
      "Scott Kacelowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kim Bohrer",
      "Matthew Shusterman"
     ],
     "a": [
      "Nancy Blank",
      "Jeff Jensen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Tera Baccile"
     ],
     "a": [
      "Sarah Ross",
      "Vanessa Zommi Kungne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kathy Cripps",
      "Kim Bohrer"
     ],
     "a": [
      "Taina Wesner",
      "Jenn Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michael Finkelstein",
      "Dan Ladislaw"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Block",
      "Matthew Shusterman"
     ],
     "a": [
      "Sal Bwint",
      "Jeff Jensen"
     ]
    }
   ],
   "subs": [
    "Scott Kacelowicz"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Drop it Like it's Hot",
   "away": "The Young Guns",
   "time": "2026-08-19T19:00:00",
   "complete": true,
   "homePoints": 611,
   "awayPoints": 618,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Megan Harvey",
      "Chris Fratinardo"
     ],
     "a": [
      "Emily Ocasio",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Erika Richards",
      "Jeff Zamorski"
     ],
     "a": [
      "Kathleen Dougherty",
      "Jared Quereau"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jenna Posner",
      "Frank Fang"
     ],
     "a": [
      "Vicki Main",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kathy BernéT",
      "Kevin Basch"
     ],
     "a": [
      "Barb Flynn",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Megan Harvey",
      "Linda Zhu"
     ],
     "a": [
      "Kathleen Dougherty",
      "Vicki Main"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Erika Richards",
      "Kathy BernéT"
     ],
     "a": [
      "Emily Ocasio",
      "Allison Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ],
     "a": [
      "Jared Quereau",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kevin Basch",
      "Matt Hancock"
     ],
     "a": [
      "Harvey Mitchell",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Erika Richards",
      "Chris Fratinardo"
     ],
     "a": [
      "Kathleen Dougherty",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Megan Harvey",
      "Jeff Zamorski"
     ],
     "a": [
      "Emily Ocasio",
      "Jared Quereau"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Frank Fang"
     ],
     "a": [
      "Allison Hartman",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jenna Posner",
      "Matt Hancock"
     ],
     "a": [
      "Barb Flynn",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Erika Richards",
      "Jenna Posner"
     ],
     "a": [
      "Vicki Main",
      "Barb Flynn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Kathy BernéT"
     ],
     "a": [
      "Emily Ocasio",
      "Allison Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chris Fratinardo",
      "Frank Fang"
     ],
     "a": [
      "Jared Quereau",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kevin Basch",
      "Matt Hancock"
     ],
     "a": [
      "Harrison Bohrer",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Frank Fang"
     ],
     "a": [
      "Allison Hartman",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Megan Harvey",
      "Jeff Zamorski"
     ],
     "a": [
      "Kathleen Dougherty",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jenna Posner",
      "Matt Hancock"
     ],
     "a": [
      "Vicki Main",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kathy BernéT",
      "Kevin Basch"
     ],
     "a": [
      "Barb Flynn",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Megan Harvey",
      "Erika Richards"
     ],
     "a": [
      "Kathleen Dougherty",
      "Emily Ocasio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jenna Posner",
      "Kathy BernéT"
     ],
     "a": [
      "Vicki Main",
      "Barb Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Fratinardo",
      "Frank Fang"
     ],
     "a": [
      "Jared Quereau",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeff Zamorski",
      "Kevin Basch"
     ],
     "a": [
      "Graham Heavenrich",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Megan Harvey",
      "Chris Fratinardo"
     ],
     "a": [
      "Kathleen Dougherty",
      "Jared Quereau"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Erika Richards",
      "Kevin Basch"
     ],
     "a": [
      "Vicki Main",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Jeff Zamorski"
     ],
     "a": [
      "Emily Ocasio",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Matt Hancock"
     ],
     "a": [
      "Allison Hartman",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Megan Harvey",
      "Erika Richards"
     ],
     "a": [
      "Kathleen Dougherty",
      "Emily Ocasio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Linda Zhu",
      "Jenna Posner"
     ],
     "a": [
      "Allison Hartman",
      "Barb Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ],
     "a": [
      "Jared Quereau",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Frank Fang",
      "Matt Hancock"
     ],
     "a": [
      "Harrison Bohrer",
      "Lincoln Jensen"
     ]
    }
   ],
   "subs": [
    "Kathleen Dougherty"
   ]
  }
 ],
 "playoffs": [
  {
   "result": "away",
   "round": 1,
   "home": "The Young Guns",
   "away": "Drop it Like it's Hot",
   "time": "2026-08-28T18:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "provisional": true,
   "homePoints": 603,
   "awayPoints": 609,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Andre Cristobal"
     ],
     "a": [
      "Erika Richards",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jessica Pao",
      "Graham Heavenrich"
     ],
     "a": [
      "Megan Harvey",
      "Chris Fratinardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Allison Hartman",
      "Harvey Mitchell"
     ],
     "a": [
      "Kathy BernéT",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Barb Flynn",
      "Lincoln Jensen"
     ],
     "a": [
      "Ange Bradley",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Emily Ocasio",
      "Vicki Main"
     ],
     "a": [
      "Megan Harvey",
      "Kathy BernéT"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jessica Pao",
      "Barb Flynn"
     ],
     "a": [
      "Erika Richards",
      "Jenna Posner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Andre Cristobal",
      "Graham Heavenrich"
     ],
     "a": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lincoln Jensen",
      "Harrison Bohrer"
     ],
     "a": [
      "Frank Fang",
      "Kevin Basch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jessica Pao",
      "Andre Cristobal"
     ],
     "a": [
      "Megan Harvey",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Emily Ocasio",
      "Graham Heavenrich"
     ],
     "a": [
      "Erika Richards",
      "Chris Fratinardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Harvey Mitchell"
     ],
     "a": [
      "Jenna Posner",
      "Kevin Basch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Allison Hartman",
      "Harrison Bohrer"
     ],
     "a": [
      "Ange Bradley",
      "Matt Hancock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Pao",
      "Allison Hartman"
     ],
     "a": [
      "Kathy BernéT",
      "Ange Bradley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vicki Main",
      "Barb Flynn"
     ],
     "a": [
      "Erika Richards",
      "Jenna Posner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andre Cristobal",
      "Harvey Mitchell"
     ],
     "a": [
      "Chris Fratinardo",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lincoln Jensen",
      "Harrison Bohrer"
     ],
     "a": [
      "Kevin Basch",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Vicki Main",
      "Harvey Mitchell"
     ],
     "a": [
      "Jenna Posner",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Graham Heavenrich"
     ],
     "a": [
      "Megan Harvey",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allison Hartman",
      "Harrison Bohrer"
     ],
     "a": [
      "Kathy BernéT",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Barb Flynn",
      "Lincoln Jensen"
     ],
     "a": [
      "Ange Bradley",
      "Kevin Basch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Jessica Pao"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Allison Hartman",
      "Barb Flynn"
     ],
     "a": [
      "Kathy BernéT",
      "Ange Bradley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andre Cristobal",
      "Harvey Mitchell"
     ],
     "a": [
      "Chris Fratinardo",
      "Frank Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Graham Heavenrich",
      "Lincoln Jensen"
     ],
     "a": [
      "Jeff Zamorski",
      "Matt Hancock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emily Ocasio",
      "Andre Cristobal"
     ],
     "a": [
      "Megan Harvey",
      "Chris Fratinardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jessica Pao",
      "Lincoln Jensen"
     ],
     "a": [
      "Kathy BernéT",
      "Frank Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Vicki Main",
      "Graham Heavenrich"
     ],
     "a": [
      "Erika Richards",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Barb Flynn",
      "Harrison Bohrer"
     ],
     "a": [
      "Jenna Posner",
      "Kevin Basch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Ocasio",
      "Jessica Pao"
     ],
     "a": [
      "Megan Harvey",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Vicki Main",
      "Allison Hartman"
     ],
     "a": [
      "Jenna Posner",
      "Ange Bradley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Andre Cristobal",
      "Graham Heavenrich"
     ],
     "a": [
      "Chris Fratinardo",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Harvey Mitchell",
      "Harrison Bohrer"
     ],
     "a": [
      "Kevin Basch",
      "Matt Hancock"
     ]
    }
   ]
  }
 ],
 "extraPlayerIds": {
  "Brittney Lew": "57fabc8d-1a33-4757-b7f4-e3a161b65008",
  "Ryan Rosen": "97f2b250-2030-4296-be61-63cffb17043b",
  "Harriet Levin": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
 },
 "meta": {
  "matchesPlayed": 20,
  "provisionalMatches": 0,
  "weeks": "1-10",
  "totalPlayers": 88,
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
   10
  ],
  "divisionSlug": "b07de80e",
  "hasPlayoffs": true,
  "typicalDay": "Wednesdays",
  "detailFile": "detail-b07de80e.js",
  "clubName": "Bounce - Malvern",
  "divisionName": "4.0 - 4.5",
  "leagueType": "local",
  "seasonSlug": "2026-summer",
  "seasonLabel": "Summer 2026",
  "seasonStatus": "current",
  "podCount": 1,
  "podNames": null,
  "podSource": "schedule",
  "reportedPods": null
 }
};
  DATA.meta.asOf = "2026-08-31T20:15:13.493Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["b07de80e"] = DATA;
})();
