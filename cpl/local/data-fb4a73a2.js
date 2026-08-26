(function () {
  const DATA = {
 "players": [
  {
   "name": "Gang Jia",
   "gender": "Male",
   "team": "Baby Got Backhand",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 290,
   "totalPointsAgainst": 239,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 6,
   "clutchLosses": 0,
   "winPct": 92.9,
   "diff": 51,
   "ppg": 20.7,
   "leagueRank": 7,
   "rating": 2.4,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "c6fdd8f8-783e-465b-8d50-31b7969a7fc6"
  },
  {
   "name": "Thania Padova",
   "gender": "Female",
   "team": "Kiss My Ace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 19,
   "losses": 3,
   "pointsWon": 450,
   "totalPointsAgainst": 318,
   "mixedWins": 12,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "b8205aff-6aa6-4abc-886c-beb676c45c04",
   "winPct": 86.4,
   "diff": 132,
   "ppg": 20.5,
   "leagueRank": 3,
   "rating": 6.2,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Shan Jiang",
   "gender": "Male",
   "team": "Court Jesters",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 22,
   "losses": 5,
   "pointsWon": 544,
   "totalPointsAgainst": 401,
   "mixedWins": 10,
   "mixedLosses": 3,
   "genderWins": 12,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 81.5,
   "diff": 143,
   "ppg": 20.1,
   "leagueRank": 1,
   "rating": 4.4,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "e5a25064-6ff4-4e66-b4c3-cc2dad0d4fb4"
  },
  {
   "name": "Bin Lu",
   "gender": "Male",
   "team": "Dink Responsibly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 34,
   "losses": 8,
   "pointsWon": 829,
   "totalPointsAgainst": 671,
   "mixedWins": 18,
   "mixedLosses": 4,
   "genderWins": 16,
   "genderLosses": 4,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 81,
   "diff": 158,
   "ppg": 19.7,
   "leagueRank": 2,
   "rating": 4.2,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "74b0ebe9-a153-4396-be45-1bdd288cdadd"
  },
  {
   "name": "Susan Li",
   "gender": "Female",
   "team": "Baby Got Backhand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 37,
   "losses": 11,
   "pointsWon": 946,
   "totalPointsAgainst": 776,
   "mixedWins": 20,
   "mixedLosses": 4,
   "genderWins": 17,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 77.1,
   "diff": 170,
   "ppg": 19.7,
   "leagueRank": 4,
   "rating": 2.1,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363"
  },
  {
   "name": "Crista Renauro",
   "gender": "Female",
   "team": "Baby Got Backhand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 35,
   "losses": 12,
   "pointsWon": 934,
   "totalPointsAgainst": 816,
   "mixedWins": 18,
   "mixedLosses": 5,
   "genderWins": 17,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 74.5,
   "diff": 118,
   "ppg": 19.9,
   "leagueRank": 8,
   "rating": 1.7,
   "ratingGames": 47,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "21785bf3-2af4-4120-a15c-d7824a55b711"
  },
  {
   "name": "Carolyn Mako",
   "gender": "Female",
   "team": "Court Jesters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 370,
   "totalPointsAgainst": 307,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "6f657f47-8452-4fa9-90fd-b63ed4f41a0b",
   "winPct": 73.7,
   "diff": 63,
   "ppg": 19.5,
   "leagueRank": 11,
   "rating": 2.4,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Francesca Bogiatzis",
   "gender": "Female",
   "team": "Baby Got Backhand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 32,
   "losses": 12,
   "pointsWon": 876,
   "totalPointsAgainst": 739,
   "mixedWins": 17,
   "mixedLosses": 5,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 72.7,
   "diff": 137,
   "ppg": 19.9,
   "leagueRank": 9,
   "rating": 1.5,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "142db61b-1736-473e-8e71-61baf2b2bae2"
  },
  {
   "name": "Adele Hackney",
   "gender": "Female",
   "team": "Baby Got Backhand",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 20,
   "losses": 8,
   "pointsWon": 554,
   "totalPointsAgainst": 472,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 71.4,
   "diff": 82,
   "ppg": 19.8,
   "leagueRank": 6,
   "rating": 3.8,
   "ratingGames": 28,
   "confidence": 82,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "name": "Tatiana Gaban",
   "gender": "Female",
   "team": "Dink Responsibly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 24,
   "losses": 10,
   "pointsWon": 666,
   "totalPointsAgainst": 550,
   "mixedWins": 11,
   "mixedLosses": 5,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 70.6,
   "diff": 116,
   "ppg": 19.6,
   "leagueRank": 5,
   "rating": 2.9,
   "ratingGames": 34,
   "confidence": 85,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "bfbefe4a-fa83-4446-9693-067b414321a5"
  },
  {
   "name": "Elizabeth Dailey",
   "gender": "Female",
   "team": "Baby Got Backhand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 30,
   "losses": 15,
   "pointsWon": 863,
   "totalPointsAgainst": 756,
   "mixedWins": 14,
   "mixedLosses": 8,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 66.7,
   "diff": 107,
   "ppg": 19.2,
   "leagueRank": 12,
   "rating": 0.1,
   "ratingGames": 45,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.1,
   "playerId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b"
  },
  {
   "name": "Sibi Thomas",
   "gender": "Male",
   "team": "Court Jesters",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 22,
   "losses": 11,
   "pointsWon": 637,
   "totalPointsAgainst": 561,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 14,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 76,
   "ppg": 19.3,
   "leagueRank": 10,
   "rating": 2.2,
   "ratingGames": 33,
   "confidence": 84,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "3127a3b2-11c9-4a02-b26d-05030387d80a"
  },
  {
   "name": "David Wisch",
   "gender": "Male",
   "team": "Baby Got Backhand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 28,
   "losses": 15,
   "pointsWon": 829,
   "totalPointsAgainst": 744,
   "mixedWins": 16,
   "mixedLosses": 5,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 65.1,
   "diff": 85,
   "ppg": 19.3,
   "leagueRank": 16,
   "rating": 0.3,
   "ratingGames": 43,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1,
   "playerId": "9e3072fb-dce5-48d8-b320-0fe5cb411d0f"
  },
  {
   "name": "Erickson Clarke",
   "gender": "Male",
   "team": "Baby Got Backhand",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 36,
   "losses": 20,
   "pointsWon": 1080,
   "totalPointsAgainst": 988,
   "mixedWins": 22,
   "mixedLosses": 5,
   "genderWins": 14,
   "genderLosses": 15,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 64.3,
   "diff": 92,
   "ppg": 19.3,
   "leagueRank": 13,
   "rating": 1.4,
   "ratingGames": 56,
   "confidence": 89,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "bdc98c78-ac6d-4d39-a7dc-9853dbb613b1"
  },
  {
   "name": "Biju Samuel",
   "gender": "Male",
   "team": "Baby Got Backhand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 30,
   "losses": 17,
   "pointsWon": 901,
   "totalPointsAgainst": 794,
   "mixedWins": 17,
   "mixedLosses": 7,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 63.8,
   "diff": 107,
   "ppg": 19.2,
   "leagueRank": 18,
   "rating": 0.5,
   "ratingGames": 47,
   "confidence": 88,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.2,
   "playerId": "4ac1d282-9162-4012-8e5f-14e9c9236f15"
  },
  {
   "name": "Yelena Grandel",
   "gender": "Female",
   "team": "Dink Responsibly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 26,
   "losses": 16,
   "pointsWon": 806,
   "totalPointsAgainst": 723,
   "mixedWins": 11,
   "mixedLosses": 10,
   "genderWins": 15,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 61.9,
   "diff": 83,
   "ppg": 19.2,
   "leagueRank": 15,
   "rating": 0.7,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.7,
   "playerId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779"
  },
  {
   "name": "Scott Gardo",
   "gender": "Male",
   "team": "Baby Got Backhand",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 31,
   "losses": 20,
   "pointsWon": 969,
   "totalPointsAgainst": 915,
   "mixedWins": 16,
   "mixedLosses": 9,
   "genderWins": 15,
   "genderLosses": 11,
   "clutchWins": 11,
   "clutchLosses": 5,
   "winPct": 60.8,
   "diff": 54,
   "ppg": 19,
   "leagueRank": 20,
   "rating": -1,
   "ratingGames": 51,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067"
  },
  {
   "name": "Rommel Santos",
   "gender": "Male",
   "team": "Dink Responsibly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 21,
   "losses": 15,
   "pointsWon": 672,
   "totalPointsAgainst": 661,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 58.3,
   "diff": 11,
   "ppg": 18.7,
   "leagueRank": 21,
   "rating": -0.2,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "8ce91d1e-e5eb-439f-b181-48332a03f660"
  },
  {
   "name": "Doug Johnson",
   "gender": "Male",
   "team": "Baby Got Backhand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 26,
   "losses": 19,
   "pointsWon": 840,
   "totalPointsAgainst": 815,
   "mixedWins": 14,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 57.8,
   "diff": 25,
   "ppg": 18.7,
   "leagueRank": 27,
   "rating": -0.9,
   "ratingGames": 45,
   "confidence": 87,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "e86cee45-ab6b-4ea6-99c6-10e16bc1a05d"
  },
  {
   "name": "Kerry Jiang",
   "gender": "Male",
   "team": "Dink Responsibly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 24,
   "losses": 18,
   "pointsWon": 816,
   "totalPointsAgainst": 695,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 10,
   "winPct": 57.1,
   "diff": 121,
   "ppg": 19.4,
   "leagueRank": 17,
   "rating": 1.4,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -1.1,
   "playerId": "21660a36-599f-4fde-8e76-cb23ff1313b7"
  },
  {
   "name": "Ben Philip",
   "gender": "Male",
   "team": "Kiss My Ace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 20,
   "losses": 16,
   "pointsWon": 657,
   "totalPointsAgainst": 628,
   "mixedWins": 11,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 55.6,
   "diff": 29,
   "ppg": 18.3,
   "leagueRank": 19,
   "rating": 1.9,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "7b2a15bb-889c-4566-a201-1287ae3cad55"
  },
  {
   "name": "Brenda Weckerly",
   "gender": "Female",
   "team": "Court Jesters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 15,
   "losses": 12,
   "pointsWon": 493,
   "totalPointsAgainst": 481,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "02393ba1-f669-4704-87de-0d61a131ee75",
   "winPct": 55.6,
   "diff": 12,
   "ppg": 18.3,
   "leagueRank": 23,
   "rating": 0.6,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0
  },
  {
   "name": "Jacqueline Ho",
   "gender": "Female",
   "team": "Kiss My Ace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 16,
   "losses": 13,
   "pointsWon": 537,
   "totalPointsAgainst": 489,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 55.2,
   "diff": 48,
   "ppg": 18.5,
   "leagueRank": 14,
   "rating": 2.8,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b"
  },
  {
   "name": "Laura Clarke",
   "gender": "Female",
   "team": "Baby Got Backhand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 24,
   "losses": 20,
   "pointsWon": 850,
   "totalPointsAgainst": 766,
   "mixedWins": 12,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 11,
   "winPct": 54.5,
   "diff": 84,
   "ppg": 19.3,
   "leagueRank": 24,
   "rating": -1.2,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.3,
   "playerId": "e17e166e-a76f-4334-a2d8-87ed2b172028"
  },
  {
   "name": "Jay Shah",
   "gender": "Male",
   "team": "Court Jesters",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 20,
   "losses": 17,
   "pointsWon": 682,
   "totalPointsAgainst": 672,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 54.1,
   "diff": 10,
   "ppg": 18.4,
   "leagueRank": 26,
   "rating": -0.7,
   "ratingGames": 37,
   "confidence": 85,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "cc1a90cf-8cc0-4cc5-b41f-27f7cab42b1e"
  },
  {
   "name": "Lori Wild",
   "gender": "Female",
   "team": "Court Jesters",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 22,
   "losses": 19,
   "pointsWon": 754,
   "totalPointsAgainst": 738,
   "mixedWins": 11,
   "mixedLosses": 11,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 53.7,
   "diff": 16,
   "ppg": 18.4,
   "leagueRank": 22,
   "rating": 0.6,
   "ratingGames": 41,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "name": "Mikhail Grandel",
   "gender": "Male",
   "team": "Dink Responsibly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 23,
   "losses": 20,
   "pointsWon": 795,
   "totalPointsAgainst": 751,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 53.5,
   "diff": 44,
   "ppg": 18.5,
   "leagueRank": 28,
   "rating": -1.1,
   "ratingGames": 43,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.9,
   "playerId": "fdf89c7e-792c-46bd-85b1-4159a12d586e"
  },
  {
   "name": "Sonia Tuhin",
   "gender": "Female",
   "team": "Dink Responsibly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 22,
   "losses": 20,
   "pointsWon": 750,
   "totalPointsAgainst": 753,
   "mixedWins": 10,
   "mixedLosses": 11,
   "genderWins": 12,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 52.4,
   "diff": -3,
   "ppg": 17.9,
   "leagueRank": 33,
   "rating": -1.5,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1,
   "playerId": "5acfafaf-212f-4824-a11d-c0b948585d75"
  },
  {
   "name": "John Romeo",
   "gender": "Male",
   "team": "Court Jesters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 157,
   "totalPointsAgainst": 143,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "813470f2-6efd-44e2-87b0-c373c5ecacfd",
   "winPct": 50,
   "diff": 14,
   "ppg": 19.6,
   "leagueRank": 47,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Matt Becker",
   "gender": "Male",
   "team": "Kiss My Ace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 143,
   "totalPointsAgainst": 140,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "604007f9-8645-4f0f-9909-e3a9b2fa6dd7",
   "winPct": 50,
   "diff": 3,
   "ppg": 17.9,
   "leagueRank": 50,
   "rating": 1.8,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Haidee Midgley",
   "gender": "Female",
   "team": "Dink Responsibly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 24,
   "losses": 25,
   "pointsWon": 898,
   "totalPointsAgainst": 897,
   "mixedWins": 13,
   "mixedLosses": 13,
   "genderWins": 11,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 49,
   "diff": 1,
   "ppg": 18.3,
   "leagueRank": 29,
   "rating": 0.5,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
  },
  {
   "name": "Lanz Santos",
   "gender": "Female",
   "team": "Dink Responsibly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 22,
   "losses": 23,
   "pointsWon": 818,
   "totalPointsAgainst": 823,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 14,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 48.9,
   "diff": -5,
   "ppg": 18.2,
   "leagueRank": 31,
   "rating": 0.4,
   "ratingGames": 45,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37"
  },
  {
   "name": "Doug Dougherty",
   "gender": "Male",
   "team": "Court Jesters",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 12,
   "losses": 13,
   "pointsWon": 439,
   "totalPointsAgainst": 465,
   "mixedWins": 3,
   "mixedLosses": 10,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 48,
   "diff": -26,
   "ppg": 17.6,
   "leagueRank": 35,
   "rating": 0.1,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "346a0f21-c662-4ff3-b830-5961a1a49072"
  },
  {
   "name": "Esha Gajjar",
   "gender": "Female",
   "team": "Kiss My Ace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 13,
   "losses": 15,
   "pointsWon": 517,
   "totalPointsAgainst": 514,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 46.4,
   "diff": 3,
   "ppg": 18.5,
   "leagueRank": 25,
   "rating": 2.1,
   "ratingGames": 28,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1,
   "playerId": "947cf956-08c0-44d2-9bae-2458fd24c9d0"
  },
  {
   "name": "Bonny Mayerberg",
   "gender": "Female",
   "team": "Court Jesters",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 21,
   "losses": 26,
   "pointsWon": 820,
   "totalPointsAgainst": 882,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 44.7,
   "diff": -62,
   "ppg": 17.4,
   "leagueRank": 38,
   "rating": -1.1,
   "ratingGames": 47,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "0e543890-4c91-45d2-bd5d-819dc476b245"
  },
  {
   "name": "Sean Kennedy",
   "gender": "Male",
   "team": "Court Jesters",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 21,
   "losses": 27,
   "pointsWon": 861,
   "totalPointsAgainst": 890,
   "mixedWins": 7,
   "mixedLosses": 17,
   "genderWins": 14,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 43.8,
   "diff": -29,
   "ppg": 17.9,
   "leagueRank": 34,
   "rating": 0.6,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.6,
   "playerId": "b8c63d85-8b6b-4b7f-948e-82f7e4df0bb8"
  },
  {
   "name": "Eric Pollock",
   "gender": "Male",
   "team": "Court Jesters",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 19,
   "losses": 25,
   "pointsWon": 823,
   "totalPointsAgainst": 835,
   "mixedWins": 7,
   "mixedLosses": 15,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 13,
   "winPct": 43.2,
   "diff": -12,
   "ppg": 18.7,
   "leagueRank": 32,
   "rating": -0.6,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "347f3214-5905-4d1b-8666-9290abe9b727"
  },
  {
   "name": "Michael Smith",
   "gender": "Male",
   "team": "Dink Responsibly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 446,
   "totalPointsAgainst": 447,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 41.7,
   "diff": -1,
   "ppg": 18.6,
   "leagueRank": 39,
   "rating": -1.7,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -1.4,
   "playerId": "b3d9070b-8036-402f-b0a1-23ae600f3410"
  },
  {
   "name": "Steve Ciocco",
   "gender": "Male",
   "team": "Dink Responsibly",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 23,
   "losses": 33,
   "pointsWon": 971,
   "totalPointsAgainst": 1064,
   "mixedWins": 12,
   "mixedLosses": 16,
   "genderWins": 11,
   "genderLosses": 17,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 41.1,
   "diff": -93,
   "ppg": 17.3,
   "leagueRank": 43,
   "rating": -1.7,
   "ratingGames": 56,
   "confidence": 89,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "c5578bac-f973-49f9-8bfe-ff866cc4f275"
  },
  {
   "name": "Barbara Taylor",
   "gender": "Female",
   "team": "Court Jesters",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 16,
   "losses": 23,
   "pointsWon": 646,
   "totalPointsAgainst": 755,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 14,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 41,
   "diff": -109,
   "ppg": 16.6,
   "leagueRank": 42,
   "rating": -1.6,
   "ratingGames": 39,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "d9f9ce7b-1e95-4564-bc45-e395c44c8409"
  },
  {
   "name": "Andrew Bush",
   "gender": "Male",
   "team": "Kiss My Ace",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 23,
   "losses": 34,
   "pointsWon": 1008,
   "totalPointsAgainst": 1057,
   "mixedWins": 12,
   "mixedLosses": 16,
   "genderWins": 11,
   "genderLosses": 18,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 40.4,
   "diff": -49,
   "ppg": 17.7,
   "leagueRank": 36,
   "rating": 0.2,
   "ratingGames": 57,
   "confidence": 89,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "name": "Sean Yu",
   "gender": "Male",
   "team": "Kiss My Ace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 11,
   "losses": 17,
   "pointsWon": 489,
   "totalPointsAgainst": 534,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 39.3,
   "diff": -45,
   "ppg": 17.5,
   "leagueRank": 37,
   "rating": 1.1,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.2,
   "playerId": "231403df-6e0f-4ff9-aa8b-99b6116858b0"
  },
  {
   "name": "Zach Derrick",
   "gender": "Male",
   "team": "Dink Responsibly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 238,
   "totalPointsAgainst": 249,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "85508a87-8a46-4c27-9b86-7323c2b37379",
   "winPct": 38.5,
   "diff": -11,
   "ppg": 18.3,
   "leagueRank": 48,
   "rating": 0.3,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Charles Buzad",
   "gender": "Male",
   "team": "Court Jesters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 153,
   "totalPointsAgainst": 153,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "5d3b9d31-abbd-49ef-b63b-fa8a30759147",
   "winPct": 37.5,
   "diff": 0,
   "ppg": 19.1,
   "leagueRank": 52,
   "rating": 2.8,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Danika Johnston",
   "gender": "Female",
   "team": "Court Jesters",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 17,
   "losses": 29,
   "pointsWon": 803,
   "totalPointsAgainst": 873,
   "mixedWins": 8,
   "mixedLosses": 16,
   "genderWins": 9,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 37,
   "diff": -70,
   "ppg": 17.5,
   "leagueRank": 40,
   "rating": -0.5,
   "ratingGames": 46,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "ce17c7e9-b59a-4927-910f-61838f00a559"
  },
  {
   "name": "Gretchen Schneider",
   "gender": "Female",
   "team": "Dink Responsibly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 11,
   "losses": 19,
   "pointsWon": 513,
   "totalPointsAgainst": 584,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 36.7,
   "diff": -71,
   "ppg": 17.1,
   "leagueRank": 46,
   "rating": -3.7,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1,
   "playerId": "ad671476-9113-4cc0-a49f-e7fea7d81f10"
  },
  {
   "name": "Eric Tran",
   "gender": "Male",
   "team": "Kiss My Ace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 17,
   "losses": 32,
   "pointsWon": 838,
   "totalPointsAgainst": 953,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 7,
   "genderLosses": 18,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 34.7,
   "diff": -115,
   "ppg": 17.1,
   "leagueRank": 41,
   "rating": -0.2,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "8b4fc403-adea-47a4-adad-a22a786313e9"
  },
  {
   "name": "Sarah Tantum",
   "gender": "Female",
   "team": "Kiss My Ace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 16,
   "losses": 36,
   "pointsWon": 890,
   "totalPointsAgainst": 1013,
   "mixedWins": 8,
   "mixedLosses": 18,
   "genderWins": 8,
   "genderLosses": 18,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 30.8,
   "diff": -123,
   "ppg": 17.1,
   "leagueRank": 44,
   "rating": -0.7,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "cf2132fb-7e7d-4ead-82b0-2a444451413c"
  },
  {
   "name": "Lauren Ricks",
   "gender": "Female",
   "team": "Kiss My Ace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 14,
   "losses": 35,
   "pointsWon": 813,
   "totalPointsAgainst": 957,
   "mixedWins": 6,
   "mixedLosses": 19,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 28.6,
   "diff": -144,
   "ppg": 16.6,
   "leagueRank": 45,
   "rating": -1.3,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "07e276d3-773e-4a62-865e-4248969ec4d3"
  },
  {
   "name": "Deanna Romeo",
   "gender": "Female",
   "team": "Court Jesters",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 4,
   "losses": 11,
   "pointsWon": 244,
   "totalPointsAgainst": 301,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 26.7,
   "diff": -57,
   "ppg": 16.3,
   "leagueRank": 54,
   "rating": -1.9,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "eee5fbd1-b320-4c9b-933e-58d380add794"
  },
  {
   "name": "Michelle Cresta",
   "gender": "Female",
   "team": "Kiss My Ace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 132,
   "totalPointsAgainst": 156,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "7f71eb00-0597-4783-b624-22e76ec1ad0a",
   "winPct": 25,
   "diff": -24,
   "ppg": 16.5,
   "leagueRank": 58,
   "rating": -2,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Dhara Metla",
   "gender": "Male",
   "team": "Court Jesters",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 6,
   "losses": 20,
   "pointsWon": 429,
   "totalPointsAgainst": 531,
   "mixedWins": 4,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 23.1,
   "diff": -102,
   "ppg": 16.5,
   "leagueRank": 51,
   "rating": -4.4,
   "ratingGames": 26,
   "confidence": 81,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "02451298-7305-4d83-9dd7-6314946b71ab"
  },
  {
   "name": "Tricia Burdo",
   "gender": "Female",
   "team": "Kiss My Ace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 9,
   "losses": 33,
   "pointsWon": 702,
   "totalPointsAgainst": 845,
   "mixedWins": 5,
   "mixedLosses": 16,
   "genderWins": 4,
   "genderLosses": 17,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 21.4,
   "diff": -143,
   "ppg": 16.7,
   "leagueRank": 49,
   "rating": -1.3,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.1,
   "playerId": "c1af6941-a826-4930-9aac-4c13837754a8"
  },
  {
   "name": "Sheree Ross",
   "gender": "Female",
   "team": "Court Jesters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 214,
   "totalPointsAgainst": 290,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "e3a5083d-9c55-4482-be06-647b8e86c504",
   "winPct": 14.3,
   "diff": -76,
   "ppg": 15.3,
   "leagueRank": 57,
   "rating": -1.5,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 2.1
  },
  {
   "name": "Kim Harris",
   "gender": "Female",
   "team": "Kiss My Ace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 128,
   "totalPointsAgainst": 162,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "3ed7cfb8-4271-48cf-a8a2-6ff983619d76",
   "winPct": 12.5,
   "diff": -34,
   "ppg": 16,
   "leagueRank": 59,
   "rating": -3.7,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0
  },
  {
   "name": "Carolyn King",
   "gender": "Female",
   "team": "Kiss My Ace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 4,
   "losses": 28,
   "pointsWon": 450,
   "totalPointsAgainst": 652,
   "mixedWins": 3,
   "mixedLosses": 13,
   "genderWins": 1,
   "genderLosses": 15,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 12.5,
   "diff": -202,
   "ppg": 14.1,
   "leagueRank": 53,
   "rating": -4.6,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.1,
   "playerId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e"
  },
  {
   "name": "Jarid Chan",
   "gender": "Male",
   "team": "Kiss My Ace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 4,
   "losses": 42,
   "pointsWon": 656,
   "totalPointsAgainst": 958,
   "mixedWins": 2,
   "mixedLosses": 21,
   "genderWins": 2,
   "genderLosses": 21,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 8.7,
   "diff": -302,
   "ppg": 14.3,
   "leagueRank": 55,
   "rating": -5.5,
   "ratingGames": 46,
   "confidence": 87,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.2,
   "playerId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5"
  },
  {
   "name": "Judy Dorazio",
   "gender": "Female",
   "team": "Dink Responsibly",
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
   "leagueRank": 64,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "67a7d5b3-d92d-45bb-b497-dc1ad9eb5891"
  },
  {
   "name": "Lucy Emery",
   "gender": "Female",
   "team": "Court Jesters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 119,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "1b650a10-7130-4103-aa32-060f8d48e92a",
   "winPct": 0,
   "diff": -49,
   "ppg": 14.9,
   "leagueRank": 60,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Howard Shotel",
   "gender": "Male",
   "team": "Kiss My Ace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 104,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -64,
   "ppg": 13,
   "leagueRank": 61,
   "rating": -4.5,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": -0.6,
   "playerId": "673fb019-c35d-42bb-95b4-df592becf1f7"
  },
  {
   "name": "Kevin Ewing",
   "gender": "Male",
   "team": "Kiss My Ace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 0,
   "losses": 24,
   "pointsWon": 330,
   "totalPointsAgainst": 504,
   "mixedWins": 0,
   "mixedLosses": 12,
   "genderWins": 0,
   "genderLosses": 12,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 0,
   "diff": -174,
   "ppg": 13.8,
   "leagueRank": 56,
   "rating": -4.4,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0,
   "playerId": "f330ab05-8344-4a75-bf22-e9420a70e42e"
  }
 ],
 "teams": [
  {
   "name": "Baby Got Backhand",
   "w": 8,
   "l": 0,
   "pf": 5058,
   "pa": 4491,
   "gw": 171,
   "gl": 85,
   "diff": 567,
   "gameDiff": 86,
   "power": 0.7,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     92,
     36
    ],
    "male": [
     36,
     28
    ],
    "female": [
     43,
     21
    ]
   }
  },
  {
   "name": "Dink Responsibly",
   "w": 5,
   "l": 3,
   "pf": 4872,
   "pa": 4633,
   "gw": 141,
   "gl": 115,
   "diff": 239,
   "gameDiff": 26,
   "power": 0.1,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     68,
     60
    ],
    "male": [
     36,
     28
    ],
    "female": [
     37,
     27
    ]
   }
  },
  {
   "name": "Court Jesters",
   "w": 2,
   "l": 6,
   "pf": 4679,
   "pa": 4829,
   "gw": 120,
   "gl": 136,
   "diff": -150,
   "gameDiff": -16,
   "power": -0.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     53,
     75
    ],
    "male": [
     38,
     26
    ],
    "female": [
     29,
     35
    ]
   }
  },
  {
   "name": "Kiss My Ace",
   "w": 1,
   "l": 7,
   "pf": 4359,
   "pa": 5015,
   "gw": 80,
   "gl": 176,
   "diff": -656,
   "gameDiff": -96,
   "power": -0.7,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     43,
     85
    ],
    "male": [
     18,
     46
    ],
    "female": [
     19,
     45
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Sibi Thomas",
   "b": "Doug Dougherty",
   "team": "Court Jesters",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.9,
   "avgActual": 8,
   "avgExpected": 1.1,
   "aId": "3127a3b2-11c9-4a02-b26d-05030387d80a",
   "bId": "346a0f21-c662-4ff3-b830-5961a1a49072"
  },
  {
   "a": "Carolyn Mako",
   "b": "Barbara Taylor",
   "team": "Court Jesters",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.8,
   "avgActual": 8,
   "avgExpected": 1.4,
   "aId": "6f657f47-8452-4fa9-90fd-b63ed4f41a0b",
   "bId": "d9f9ce7b-1e95-4564-bc45-e395c44c8409"
  },
  {
   "a": "Sonia Tuhin",
   "b": "Tatiana Gaban",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 6.8,
   "avgExpected": 2,
   "aId": "5acfafaf-212f-4824-a11d-c0b948585d75",
   "bId": "bfbefe4a-fa83-4446-9693-067b414321a5"
  },
  {
   "a": "Susan Li",
   "b": "Doug Johnson",
   "team": "Baby Got Backhand",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 7.3,
   "avgExpected": 2,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "e86cee45-ab6b-4ea6-99c6-10e16bc1a05d"
  },
  {
   "a": "Eric Tran",
   "b": "Tricia Burdo",
   "team": "Kiss My Ace",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 2.2,
   "avgActual": 1.4,
   "avgExpected": -1.9,
   "aId": "8b4fc403-adea-47a4-adad-a22a786313e9",
   "bId": "c1af6941-a826-4930-9aac-4c13837754a8"
  },
  {
   "a": "Elizabeth Dailey",
   "b": "Laura Clarke",
   "team": "Baby Got Backhand",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 2,
   "avgActual": 5.1,
   "avgExpected": 2.1,
   "aId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b",
   "bId": "e17e166e-a76f-4334-a2d8-87ed2b172028"
  },
  {
   "a": "Bin Lu",
   "b": "Mikhail Grandel",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 6,
   "avgExpected": 2.8,
   "aId": "74b0ebe9-a153-4396-be45-1bdd288cdadd",
   "bId": "fdf89c7e-792c-46bd-85b1-4159a12d586e"
  },
  {
   "a": "Lauren Ricks",
   "b": "Jarid Chan",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 1.8,
   "avgActual": -3.2,
   "avgExpected": -6.4,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5"
  },
  {
   "a": "Lauren Ricks",
   "b": "Jacqueline Ho",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 5.6,
   "avgExpected": 2.5,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b"
  },
  {
   "a": "Jay Shah",
   "b": "Barbara Taylor",
   "team": "Court Jesters",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 2.2,
   "avgExpected": -0.6,
   "aId": "cc1a90cf-8cc0-4cc5-b41f-27f7cab42b1e",
   "bId": "d9f9ce7b-1e95-4564-bc45-e395c44c8409"
  },
  {
   "a": "Erickson Clarke",
   "b": "Adele Hackney",
   "team": "Baby Got Backhand",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 5,
   "avgExpected": 2.5,
   "aId": "bdc98c78-ac6d-4d39-a7dc-9853dbb613b1",
   "bId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "a": "Bonny Mayerberg",
   "b": "Carolyn Mako",
   "team": "Court Jesters",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 5,
   "avgExpected": 1.6,
   "aId": "0e543890-4c91-45d2-bd5d-819dc476b245",
   "bId": "6f657f47-8452-4fa9-90fd-b63ed4f41a0b"
  },
  {
   "a": "Kerry Jiang",
   "b": "Rommel Santos",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 5.8,
   "avgExpected": 3.5,
   "aId": "21660a36-599f-4fde-8e76-cb23ff1313b7",
   "bId": "8ce91d1e-e5eb-439f-b181-48332a03f660"
  },
  {
   "a": "Bonny Mayerberg",
   "b": "Jay Shah",
   "team": "Court Jesters",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 1.7,
   "avgExpected": -1.6,
   "aId": "0e543890-4c91-45d2-bd5d-819dc476b245",
   "bId": "cc1a90cf-8cc0-4cc5-b41f-27f7cab42b1e"
  },
  {
   "a": "Elizabeth Dailey",
   "b": "David Wisch",
   "team": "Baby Got Backhand",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 6.2,
   "avgExpected": 3.6,
   "aId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b",
   "bId": "9e3072fb-dce5-48d8-b320-0fe5cb411d0f"
  },
  {
   "a": "Ben Philip",
   "b": "Esha Gajjar",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.8,
   "avgExpected": 1.5,
   "aId": "7b2a15bb-889c-4566-a201-1287ae3cad55",
   "bId": "947cf956-08c0-44d2-9bae-2458fd24c9d0"
  },
  {
   "a": "Lauren Ricks",
   "b": "Sarah Tantum",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.2,
   "avgActual": -0.8,
   "avgExpected": -3,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "cf2132fb-7e7d-4ead-82b0-2a444451413c"
  },
  {
   "a": "Yelena Grandel",
   "b": "Lanz Santos",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4,
   "avgExpected": 1.7,
   "aId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779",
   "bId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37"
  },
  {
   "a": "Gretchen Schneider",
   "b": "Michael Smith",
   "team": "Dink Responsibly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.2,
   "avgActual": -0.7,
   "avgExpected": -3.6,
   "aId": "ad671476-9113-4cc0-a49f-e7fea7d81f10",
   "bId": "b3d9070b-8036-402f-b0a1-23ae600f3410"
  },
  {
   "a": "Brenda Weckerly",
   "b": "Bonny Mayerberg",
   "team": "Court Jesters",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.4,
   "avgExpected": 0.2,
   "aId": "02393ba1-f669-4704-87de-0d61a131ee75",
   "bId": "0e543890-4c91-45d2-bd5d-819dc476b245"
  },
  {
   "a": "Bonny Mayerberg",
   "b": "Lori Wild",
   "team": "Court Jesters",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 0,
   "avgExpected": -2.4,
   "aId": "0e543890-4c91-45d2-bd5d-819dc476b245",
   "bId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "a": "Susan Li",
   "b": "Crista Renauro",
   "team": "Baby Got Backhand",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5.8,
   "avgExpected": 3.7,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "21785bf3-2af4-4120-a15c-d7824a55b711"
  },
  {
   "a": "Bin Lu",
   "b": "Haidee Midgley",
   "team": "Dink Responsibly",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 4.5,
   "avgExpected": 2.9,
   "aId": "74b0ebe9-a153-4396-be45-1bdd288cdadd",
   "bId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
  },
  {
   "a": "Erickson Clarke",
   "b": "Doug Johnson",
   "team": "Baby Got Backhand",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 1.1,
   "avgActual": 0.7,
   "avgExpected": -1,
   "aId": "bdc98c78-ac6d-4d39-a7dc-9853dbb613b1",
   "bId": "e86cee45-ab6b-4ea6-99c6-10e16bc1a05d"
  },
  {
   "a": "Susan Li",
   "b": "Erickson Clarke",
   "team": "Baby Got Backhand",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 5,
   "avgExpected": 2.4,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "bdc98c78-ac6d-4d39-a7dc-9853dbb613b1"
  },
  {
   "a": "Doug Dougherty",
   "b": "Sean Kennedy",
   "team": "Court Jesters",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 4,
   "avgExpected": 1.5,
   "aId": "346a0f21-c662-4ff3-b830-5961a1a49072",
   "bId": "b8c63d85-8b6b-4b7f-948e-82f7e4df0bb8"
  },
  {
   "a": "Susan Li",
   "b": "Adele Hackney",
   "team": "Baby Got Backhand",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 6.3,
   "avgExpected": 4,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "a": "Brenda Weckerly",
   "b": "Lori Wild",
   "team": "Court Jesters",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 3.7,
   "avgExpected": 1.3,
   "aId": "02393ba1-f669-4704-87de-0d61a131ee75",
   "bId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "a": "Sibi Thomas",
   "b": "Shan Jiang",
   "team": "Court Jesters",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1,
   "avgActual": 6.7,
   "avgExpected": 5,
   "aId": "3127a3b2-11c9-4a02-b26d-05030387d80a",
   "bId": "e5a25064-6ff4-4e66-b4c3-cc2dad0d4fb4"
  },
  {
   "a": "Francesca Bogiatzis",
   "b": "Biju Samuel",
   "team": "Baby Got Backhand",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": 3.4,
   "avgExpected": 1.6,
   "aId": "142db61b-1736-473e-8e71-61baf2b2bae2",
   "bId": "4ac1d282-9162-4012-8e5f-14e9c9236f15"
  },
  {
   "a": "Lanz Santos",
   "b": "Steve Ciocco",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.9,
   "avgActual": -2.2,
   "avgExpected": -3.6,
   "aId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37",
   "bId": "c5578bac-f973-49f9-8bfe-ff866cc4f275"
  },
  {
   "a": "Yelena Grandel",
   "b": "Sonia Tuhin",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.8,
   "avgExpected": 1.4,
   "aId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779",
   "bId": "5acfafaf-212f-4824-a11d-c0b948585d75"
  },
  {
   "a": "David Wisch",
   "b": "Laura Clarke",
   "team": "Baby Got Backhand",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 3.2,
   "avgExpected": 1.8,
   "aId": "9e3072fb-dce5-48d8-b320-0fe5cb411d0f",
   "bId": "e17e166e-a76f-4334-a2d8-87ed2b172028"
  },
  {
   "a": "Bonny Mayerberg",
   "b": "Sean Kennedy",
   "team": "Court Jesters",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1.3,
   "avgExpected": -0.5,
   "aId": "0e543890-4c91-45d2-bd5d-819dc476b245",
   "bId": "b8c63d85-8b6b-4b7f-948e-82f7e4df0bb8"
  },
  {
   "a": "Danika Johnston",
   "b": "Barbara Taylor",
   "team": "Court Jesters",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.8,
   "avgActual": -3.2,
   "avgExpected": -4.4,
   "aId": "ce17c7e9-b59a-4927-910f-61838f00a559",
   "bId": "d9f9ce7b-1e95-4564-bc45-e395c44c8409"
  },
  {
   "a": "Eric Pollock",
   "b": "Lori Wild",
   "team": "Court Jesters",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -1,
   "avgExpected": -2.9,
   "aId": "347f3214-5905-4d1b-8666-9290abe9b727",
   "bId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "a": "Eric Pollock",
   "b": "Jay Shah",
   "team": "Court Jesters",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 0,
   "avgExpected": -1.3,
   "aId": "347f3214-5905-4d1b-8666-9290abe9b727",
   "bId": "cc1a90cf-8cc0-4cc5-b41f-27f7cab42b1e"
  },
  {
   "a": "Sean Yu",
   "b": "Sarah Tantum",
   "team": "Kiss My Ace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1.3,
   "avgExpected": -0.5,
   "aId": "231403df-6e0f-4ff9-aa8b-99b6116858b0",
   "bId": "cf2132fb-7e7d-4ead-82b0-2a444451413c"
  },
  {
   "a": "Yelena Grandel",
   "b": "Tatiana Gaban",
   "team": "Dink Responsibly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.3,
   "avgExpected": 3.6,
   "aId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779",
   "bId": "bfbefe4a-fa83-4446-9693-067b414321a5"
  },
  {
   "a": "Jacqueline Ho",
   "b": "Esha Gajjar",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.3,
   "avgExpected": 1.9,
   "aId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b",
   "bId": "947cf956-08c0-44d2-9bae-2458fd24c9d0"
  },
  {
   "a": "Crista Renauro",
   "b": "Biju Samuel",
   "team": "Baby Got Backhand",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.7,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "4ac1d282-9162-4012-8e5f-14e9c9236f15"
  },
  {
   "a": "Kerry Jiang",
   "b": "Gretchen Schneider",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 0.8,
   "avgExpected": -0.3,
   "aId": "21660a36-599f-4fde-8e76-cb23ff1313b7",
   "bId": "ad671476-9113-4cc0-a49f-e7fea7d81f10"
  },
  {
   "a": "Crista Renauro",
   "b": "Erickson Clarke",
   "team": "Baby Got Backhand",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3,
   "avgExpected": 2,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "bdc98c78-ac6d-4d39-a7dc-9853dbb613b1"
  },
  {
   "a": "Tricia Burdo",
   "b": "Sarah Tantum",
   "team": "Kiss My Ace",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -1.8,
   "avgExpected": -2.8,
   "aId": "c1af6941-a826-4930-9aac-4c13837754a8",
   "bId": "cf2132fb-7e7d-4ead-82b0-2a444451413c"
  },
  {
   "a": "Carolyn King",
   "b": "Kevin Ewing",
   "team": "Kiss My Ace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -7.7,
   "avgExpected": -9,
   "aId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e",
   "bId": "f330ab05-8344-4a75-bf22-e9420a70e42e"
  },
  {
   "a": "Lanz Santos",
   "b": "Mikhail Grandel",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -0.8,
   "aId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37",
   "bId": "fdf89c7e-792c-46bd-85b1-4159a12d586e"
  },
  {
   "a": "Sonia Tuhin",
   "b": "Rommel Santos",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 1.9,
   "aId": "5acfafaf-212f-4824-a11d-c0b948585d75",
   "bId": "8ce91d1e-e5eb-439f-b181-48332a03f660"
  },
  {
   "a": "Brenda Weckerly",
   "b": "Sibi Thomas",
   "team": "Court Jesters",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 2,
   "aId": "02393ba1-f669-4704-87de-0d61a131ee75",
   "bId": "3127a3b2-11c9-4a02-b26d-05030387d80a"
  },
  {
   "a": "Francesca Bogiatzis",
   "b": "David Wisch",
   "team": "Baby Got Backhand",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 4.1,
   "avgExpected": 3.4,
   "aId": "142db61b-1736-473e-8e71-61baf2b2bae2",
   "bId": "9e3072fb-dce5-48d8-b320-0fe5cb411d0f"
  },
  {
   "a": "Scott Gardo",
   "b": "Biju Samuel",
   "team": "Baby Got Backhand",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 1.2,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "4ac1d282-9162-4012-8e5f-14e9c9236f15"
  },
  {
   "a": "Brenda Weckerly",
   "b": "Danika Johnston",
   "team": "Court Jesters",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.5,
   "avgExpected": -0.4,
   "aId": "02393ba1-f669-4704-87de-0d61a131ee75",
   "bId": "ce17c7e9-b59a-4927-910f-61838f00a559"
  },
  {
   "a": "Carolyn King",
   "b": "Sarah Tantum",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.5,
   "avgActual": -6.2,
   "avgExpected": -7.1,
   "aId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e",
   "bId": "cf2132fb-7e7d-4ead-82b0-2a444451413c"
  },
  {
   "a": "Scott Gardo",
   "b": "Erickson Clarke",
   "team": "Baby Got Backhand",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 0.8,
   "avgExpected": 0,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "bdc98c78-ac6d-4d39-a7dc-9853dbb613b1"
  },
  {
   "a": "Doug Dougherty",
   "b": "Eric Pollock",
   "team": "Court Jesters",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.7,
   "avgExpected": 0.6,
   "aId": "346a0f21-c662-4ff3-b830-5961a1a49072",
   "bId": "347f3214-5905-4d1b-8666-9290abe9b727"
  },
  {
   "a": "Bin Lu",
   "b": "Tatiana Gaban",
   "team": "Dink Responsibly",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 8.6,
   "avgExpected": 7.9,
   "aId": "74b0ebe9-a153-4396-be45-1bdd288cdadd",
   "bId": "bfbefe4a-fa83-4446-9693-067b414321a5"
  },
  {
   "a": "Francesca Bogiatzis",
   "b": "Erickson Clarke",
   "team": "Baby Got Backhand",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.3,
   "avgExpected": 2.4,
   "aId": "142db61b-1736-473e-8e71-61baf2b2bae2",
   "bId": "bdc98c78-ac6d-4d39-a7dc-9853dbb613b1"
  },
  {
   "a": "Tatiana Gaban",
   "b": "Steve Ciocco",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.7,
   "aId": "bfbefe4a-fa83-4446-9693-067b414321a5",
   "bId": "c5578bac-f973-49f9-8bfe-ff866cc4f275"
  },
  {
   "a": "Thania Padova",
   "b": "Steve Ciocco",
   "team": "Dink Responsibly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 3,
   "avgExpected": 2.1,
   "aId": "b8205aff-6aa6-4abc-886c-beb676c45c04",
   "bId": "c5578bac-f973-49f9-8bfe-ff866cc4f275"
  },
  {
   "a": "Steve Ciocco",
   "b": "Haidee Midgley",
   "team": "Dink Responsibly",
   "n": 12,
   "w": 4,
   "l": 8,
   "synergy": 0.3,
   "avgActual": -2.4,
   "avgExpected": -2.9,
   "aId": "c5578bac-f973-49f9-8bfe-ff866cc4f275",
   "bId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
  },
  {
   "a": "Scott Gardo",
   "b": "Elizabeth Dailey",
   "team": "Baby Got Backhand",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -0.2,
   "avgExpected": -0.7,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b"
  },
  {
   "a": "Eric Pollock",
   "b": "Sean Kennedy",
   "team": "Court Jesters",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.3,
   "avgActual": 0.3,
   "avgExpected": -0.1,
   "aId": "347f3214-5905-4d1b-8666-9290abe9b727",
   "bId": "b8c63d85-8b6b-4b7f-948e-82f7e4df0bb8"
  },
  {
   "a": "Esha Gajjar",
   "b": "Andrew Bush",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.4,
   "aId": "947cf956-08c0-44d2-9bae-2458fd24c9d0",
   "bId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "a": "Ben Philip",
   "b": "Eric Tran",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -0.4,
   "avgExpected": -0.9,
   "aId": "7b2a15bb-889c-4566-a201-1287ae3cad55",
   "bId": "8b4fc403-adea-47a4-adad-a22a786313e9"
  },
  {
   "a": "Tricia Burdo",
   "b": "Jarid Chan",
   "team": "Kiss My Ace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -5,
   "avgExpected": -5.8,
   "aId": "c1af6941-a826-4930-9aac-4c13837754a8",
   "bId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5"
  },
  {
   "a": "Sean Yu",
   "b": "Eric Tran",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1.4,
   "avgExpected": -1.9,
   "aId": "231403df-6e0f-4ff9-aa8b-99b6116858b0",
   "bId": "8b4fc403-adea-47a4-adad-a22a786313e9"
  },
  {
   "a": "Lauren Ricks",
   "b": "Eric Tran",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -3.5,
   "avgExpected": -4.1,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "8b4fc403-adea-47a4-adad-a22a786313e9"
  },
  {
   "a": "Eric Tran",
   "b": "Sarah Tantum",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -0.5,
   "avgExpected": -1,
   "aId": "8b4fc403-adea-47a4-adad-a22a786313e9",
   "bId": "cf2132fb-7e7d-4ead-82b0-2a444451413c"
  },
  {
   "a": "Sean Kennedy",
   "b": "Shan Jiang",
   "team": "Court Jesters",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.3,
   "avgExpected": 3.6,
   "aId": "b8c63d85-8b6b-4b7f-948e-82f7e4df0bb8",
   "bId": "e5a25064-6ff4-4e66-b4c3-cc2dad0d4fb4"
  },
  {
   "a": "Lanz Santos",
   "b": "Haidee Midgley",
   "team": "Dink Responsibly",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0.8,
   "avgExpected": 0.4,
   "aId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37",
   "bId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
  },
  {
   "a": "Jarid Chan",
   "b": "Sarah Tantum",
   "team": "Kiss My Ace",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -4.5,
   "avgExpected": -4.9,
   "aId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5",
   "bId": "cf2132fb-7e7d-4ead-82b0-2a444451413c"
  },
  {
   "a": "Eric Pollock",
   "b": "Barbara Taylor",
   "team": "Court Jesters",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0,
   "avgExpected": -0.3,
   "aId": "347f3214-5905-4d1b-8666-9290abe9b727",
   "bId": "d9f9ce7b-1e95-4564-bc45-e395c44c8409"
  },
  {
   "a": "Susan Li",
   "b": "Biju Samuel",
   "team": "Baby Got Backhand",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 3.6,
   "avgExpected": 3.4,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "4ac1d282-9162-4012-8e5f-14e9c9236f15"
  },
  {
   "a": "Kerry Jiang",
   "b": "Sonia Tuhin",
   "team": "Dink Responsibly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.8,
   "avgExpected": 2.6,
   "aId": "21660a36-599f-4fde-8e76-cb23ff1313b7",
   "bId": "5acfafaf-212f-4824-a11d-c0b948585d75"
  },
  {
   "a": "Francesca Bogiatzis",
   "b": "Laura Clarke",
   "team": "Baby Got Backhand",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 1.4,
   "avgExpected": 1.3,
   "aId": "142db61b-1736-473e-8e71-61baf2b2bae2",
   "bId": "e17e166e-a76f-4334-a2d8-87ed2b172028"
  },
  {
   "a": "Scott Gardo",
   "b": "Gang Jia",
   "team": "Baby Got Backhand",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.7,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "c6fdd8f8-783e-465b-8d50-31b7969a7fc6"
  },
  {
   "a": "Jarid Chan",
   "b": "Kevin Ewing",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -9.6,
   "avgExpected": -9.9,
   "aId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5",
   "bId": "f330ab05-8344-4a75-bf22-e9420a70e42e"
  },
  {
   "a": "Esha Gajjar",
   "b": "Sarah Tantum",
   "team": "Kiss My Ace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.3,
   "aId": "947cf956-08c0-44d2-9bae-2458fd24c9d0",
   "bId": "cf2132fb-7e7d-4ead-82b0-2a444451413c"
  },
  {
   "a": "Yelena Grandel",
   "b": "Haidee Midgley",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.5,
   "avgExpected": 1.2,
   "aId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779",
   "bId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
  },
  {
   "a": "Crista Renauro",
   "b": "Elizabeth Dailey",
   "team": "Baby Got Backhand",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0,
   "avgActual": 4,
   "avgExpected": 4.1,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b"
  },
  {
   "a": "Doug Dougherty",
   "b": "Danika Johnston",
   "team": "Court Jesters",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -1.2,
   "avgExpected": -1.2,
   "aId": "346a0f21-c662-4ff3-b830-5961a1a49072",
   "bId": "ce17c7e9-b59a-4927-910f-61838f00a559"
  },
  {
   "a": "Jacqueline Ho",
   "b": "Ben Philip",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 2.6,
   "avgExpected": 2.5,
   "aId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b",
   "bId": "7b2a15bb-889c-4566-a201-1287ae3cad55"
  },
  {
   "a": "Carolyn Mako",
   "b": "Lori Wild",
   "team": "Court Jesters",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.3,
   "avgExpected": 3.3,
   "aId": "6f657f47-8452-4fa9-90fd-b63ed4f41a0b",
   "bId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "a": "Kerry Jiang",
   "b": "Yelena Grandel",
   "team": "Dink Responsibly",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 4.4,
   "avgExpected": 4.5,
   "aId": "21660a36-599f-4fde-8e76-cb23ff1313b7",
   "bId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779"
  },
  {
   "a": "Yelena Grandel",
   "b": "Rommel Santos",
   "team": "Dink Responsibly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1.3,
   "avgExpected": 1.6,
   "aId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779",
   "bId": "8ce91d1e-e5eb-439f-b181-48332a03f660"
  },
  {
   "a": "Lori Wild",
   "b": "Deanna Romeo",
   "team": "Court Jesters",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -3.2,
   "avgExpected": -3.1,
   "aId": "b1066a81-7537-4512-939d-5acbf11ef9aa",
   "bId": "eee5fbd1-b320-4c9b-933e-58d380add794"
  },
  {
   "a": "Ben Philip",
   "b": "Andrew Bush",
   "team": "Kiss My Ace",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.1,
   "avgActual": 1.3,
   "avgExpected": 1.4,
   "aId": "7b2a15bb-889c-4566-a201-1287ae3cad55",
   "bId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "a": "Scott Gardo",
   "b": "Laura Clarke",
   "team": "Baby Got Backhand",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 1.8,
   "avgExpected": 1.9,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "e17e166e-a76f-4334-a2d8-87ed2b172028"
  },
  {
   "a": "Sean Kennedy",
   "b": "Danika Johnston",
   "team": "Court Jesters",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -3,
   "avgExpected": -2.7,
   "aId": "b8c63d85-8b6b-4b7f-948e-82f7e4df0bb8",
   "bId": "ce17c7e9-b59a-4927-910f-61838f00a559"
  },
  {
   "a": "Rommel Santos",
   "b": "Gretchen Schneider",
   "team": "Dink Responsibly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -2,
   "avgExpected": -1.6,
   "aId": "8ce91d1e-e5eb-439f-b181-48332a03f660",
   "bId": "ad671476-9113-4cc0-a49f-e7fea7d81f10"
  },
  {
   "a": "Sibi Thomas",
   "b": "Jay Shah",
   "team": "Court Jesters",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 3.3,
   "avgExpected": 3.7,
   "aId": "3127a3b2-11c9-4a02-b26d-05030387d80a",
   "bId": "cc1a90cf-8cc0-4cc5-b41f-27f7cab42b1e"
  },
  {
   "a": "Laura Clarke",
   "b": "Doug Johnson",
   "team": "Baby Got Backhand",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.5,
   "aId": "e17e166e-a76f-4334-a2d8-87ed2b172028",
   "bId": "e86cee45-ab6b-4ea6-99c6-10e16bc1a05d"
  },
  {
   "a": "Dhara Metla",
   "b": "Barbara Taylor",
   "team": "Court Jesters",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -6.3,
   "avgExpected": -6,
   "aId": "02451298-7305-4d83-9dd7-6314946b71ab",
   "bId": "d9f9ce7b-1e95-4564-bc45-e395c44c8409"
  },
  {
   "a": "Eric Tran",
   "b": "Carolyn King",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5.7,
   "avgExpected": -5.2,
   "aId": "8b4fc403-adea-47a4-adad-a22a786313e9",
   "bId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e"
  },
  {
   "a": "Michael Smith",
   "b": "Steve Ciocco",
   "team": "Dink Responsibly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -0.3,
   "avgExpected": 0.5,
   "aId": "b3d9070b-8036-402f-b0a1-23ae600f3410",
   "bId": "c5578bac-f973-49f9-8bfe-ff866cc4f275"
  },
  {
   "a": "Rommel Santos",
   "b": "Steve Ciocco",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -4.5,
   "avgExpected": -3.9,
   "aId": "8ce91d1e-e5eb-439f-b181-48332a03f660",
   "bId": "c5578bac-f973-49f9-8bfe-ff866cc4f275"
  },
  {
   "a": "Susan Li",
   "b": "Scott Gardo",
   "team": "Baby Got Backhand",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 2,
   "avgExpected": 2.5,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067"
  },
  {
   "a": "Yelena Grandel",
   "b": "Gretchen Schneider",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.2,
   "avgExpected": -0.7,
   "aId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779",
   "bId": "ad671476-9113-4cc0-a49f-e7fea7d81f10"
  },
  {
   "a": "Bin Lu",
   "b": "Thania Padova",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 8.3,
   "avgExpected": 8.8,
   "aId": "74b0ebe9-a153-4396-be45-1bdd288cdadd",
   "bId": "b8205aff-6aa6-4abc-886c-beb676c45c04"
  },
  {
   "a": "Jarid Chan",
   "b": "Andrew Bush",
   "team": "Kiss My Ace",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.4,
   "avgActual": -5,
   "avgExpected": -4.4,
   "aId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5",
   "bId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "a": "Francesca Bogiatzis",
   "b": "Elizabeth Dailey",
   "team": "Baby Got Backhand",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 3.5,
   "avgExpected": 4.2,
   "aId": "142db61b-1736-473e-8e71-61baf2b2bae2",
   "bId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b"
  },
  {
   "a": "Crista Renauro",
   "b": "Doug Johnson",
   "team": "Baby Got Backhand",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -1.2,
   "avgExpected": -0.4,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "e86cee45-ab6b-4ea6-99c6-10e16bc1a05d"
  },
  {
   "a": "Lori Wild",
   "b": "Shan Jiang",
   "team": "Court Jesters",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 4.4,
   "avgExpected": 5.1,
   "aId": "b1066a81-7537-4512-939d-5acbf11ef9aa",
   "bId": "e5a25064-6ff4-4e66-b4c3-cc2dad0d4fb4"
  },
  {
   "a": "Crista Renauro",
   "b": "Adele Hackney",
   "team": "Baby Got Backhand",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1.8,
   "avgExpected": 2.8,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "a": "Elizabeth Dailey",
   "b": "Erickson Clarke",
   "team": "Baby Got Backhand",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.5,
   "avgActual": 3,
   "avgExpected": 3.9,
   "aId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b",
   "bId": "bdc98c78-ac6d-4d39-a7dc-9853dbb613b1"
  },
  {
   "a": "Elizabeth Dailey",
   "b": "Adele Hackney",
   "team": "Baby Got Backhand",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.7,
   "avgExpected": 3.9,
   "aId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b",
   "bId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "a": "Sonia Tuhin",
   "b": "Lanz Santos",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -3.5,
   "avgExpected": -2.5,
   "aId": "5acfafaf-212f-4824-a11d-c0b948585d75",
   "bId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37"
  },
  {
   "a": "Adele Hackney",
   "b": "Doug Johnson",
   "team": "Baby Got Backhand",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.2,
   "avgExpected": -0.3,
   "aId": "c1e41980-e98d-4208-aa10-dc04e407cf8f",
   "bId": "e86cee45-ab6b-4ea6-99c6-10e16bc1a05d"
  },
  {
   "a": "Susan Li",
   "b": "Laura Clarke",
   "team": "Baby Got Backhand",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 2,
   "avgExpected": 2.8,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "e17e166e-a76f-4334-a2d8-87ed2b172028"
  },
  {
   "a": "Francesca Bogiatzis",
   "b": "Crista Renauro",
   "team": "Baby Got Backhand",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.4,
   "avgExpected": 2.3,
   "aId": "142db61b-1736-473e-8e71-61baf2b2bae2",
   "bId": "21785bf3-2af4-4120-a15c-d7824a55b711"
  },
  {
   "a": "Sean Kennedy",
   "b": "Sheree Ross",
   "team": "Court Jesters",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -6,
   "avgExpected": -5.1,
   "aId": "b8c63d85-8b6b-4b7f-948e-82f7e4df0bb8",
   "bId": "e3a5083d-9c55-4482-be06-647b8e86c504"
  },
  {
   "a": "Carolyn King",
   "b": "Tricia Burdo",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -5.8,
   "avgExpected": -4.6,
   "aId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e",
   "bId": "c1af6941-a826-4930-9aac-4c13837754a8"
  },
  {
   "a": "Eric Tran",
   "b": "Andrew Bush",
   "team": "Kiss My Ace",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -1.5,
   "avgExpected": -0.4,
   "aId": "8b4fc403-adea-47a4-adad-a22a786313e9",
   "bId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "a": "Lori Wild",
   "b": "Sean Kennedy",
   "team": "Court Jesters",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -1.4,
   "avgExpected": -0.4,
   "aId": "b1066a81-7537-4512-939d-5acbf11ef9aa",
   "bId": "b8c63d85-8b6b-4b7f-948e-82f7e4df0bb8"
  },
  {
   "a": "Kerry Jiang",
   "b": "Michael Smith",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 2,
   "avgExpected": 3.1,
   "aId": "21660a36-599f-4fde-8e76-cb23ff1313b7",
   "bId": "b3d9070b-8036-402f-b0a1-23ae600f3410"
  },
  {
   "a": "Eric Pollock",
   "b": "Danika Johnston",
   "team": "Court Jesters",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.7,
   "aId": "347f3214-5905-4d1b-8666-9290abe9b727",
   "bId": "ce17c7e9-b59a-4927-910f-61838f00a559"
  },
  {
   "a": "Danika Johnston",
   "b": "Sheree Ross",
   "team": "Court Jesters",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -5,
   "avgExpected": -3.7,
   "aId": "ce17c7e9-b59a-4927-910f-61838f00a559",
   "bId": "e3a5083d-9c55-4482-be06-647b8e86c504"
  },
  {
   "a": "Jacqueline Ho",
   "b": "Sarah Tantum",
   "team": "Kiss My Ace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2,
   "avgExpected": -0.3,
   "aId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b",
   "bId": "cf2132fb-7e7d-4ead-82b0-2a444451413c"
  },
  {
   "a": "Jacqueline Ho",
   "b": "Andrew Bush",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 1.8,
   "avgExpected": 3.5,
   "aId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b",
   "bId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "a": "Brenda Weckerly",
   "b": "Jay Shah",
   "team": "Court Jesters",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -1.2,
   "avgExpected": 0.5,
   "aId": "02393ba1-f669-4704-87de-0d61a131ee75",
   "bId": "cc1a90cf-8cc0-4cc5-b41f-27f7cab42b1e"
  },
  {
   "a": "Bin Lu",
   "b": "Steve Ciocco",
   "team": "Dink Responsibly",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -0.8,
   "avgExpected": 0.2,
   "aId": "74b0ebe9-a153-4396-be45-1bdd288cdadd",
   "bId": "c5578bac-f973-49f9-8bfe-ff866cc4f275"
  },
  {
   "a": "Biju Samuel",
   "b": "Erickson Clarke",
   "team": "Baby Got Backhand",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": -0.8,
   "avgActual": 0.6,
   "avgExpected": 1.6,
   "aId": "4ac1d282-9162-4012-8e5f-14e9c9236f15",
   "bId": "bdc98c78-ac6d-4d39-a7dc-9853dbb613b1"
  },
  {
   "a": "Lauren Ricks",
   "b": "Sean Yu",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -4,
   "avgExpected": -2.4,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "231403df-6e0f-4ff9-aa8b-99b6116858b0"
  },
  {
   "a": "Sean Yu",
   "b": "Jarid Chan",
   "team": "Kiss My Ace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -8.3,
   "avgExpected": -6.4,
   "aId": "231403df-6e0f-4ff9-aa8b-99b6116858b0",
   "bId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5"
  },
  {
   "a": "Sonia Tuhin",
   "b": "Gretchen Schneider",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -5.5,
   "avgExpected": -4,
   "aId": "5acfafaf-212f-4824-a11d-c0b948585d75",
   "bId": "ad671476-9113-4cc0-a49f-e7fea7d81f10"
  },
  {
   "a": "Sonia Tuhin",
   "b": "Michael Smith",
   "team": "Dink Responsibly",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -1.2,
   "avgExpected": 0.4,
   "aId": "5acfafaf-212f-4824-a11d-c0b948585d75",
   "bId": "b3d9070b-8036-402f-b0a1-23ae600f3410"
  },
  {
   "a": "Dhara Metla",
   "b": "Jay Shah",
   "team": "Court Jesters",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -6.5,
   "avgExpected": -4.6,
   "aId": "02451298-7305-4d83-9dd7-6314946b71ab",
   "bId": "cc1a90cf-8cc0-4cc5-b41f-27f7cab42b1e"
  },
  {
   "a": "Sarah Tantum",
   "b": "Andrew Bush",
   "team": "Kiss My Ace",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1,
   "avgActual": -2.6,
   "avgExpected": -1,
   "aId": "cf2132fb-7e7d-4ead-82b0-2a444451413c",
   "bId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "a": "Jacqueline Ho",
   "b": "Jarid Chan",
   "team": "Kiss My Ace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -6,
   "avgExpected": -3.7,
   "aId": "7317ce16-29ce-4976-ae0f-e8af7440ec7b",
   "bId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5"
  },
  {
   "a": "Gretchen Schneider",
   "b": "Lanz Santos",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.2,
   "avgExpected": -2.2,
   "aId": "ad671476-9113-4cc0-a49f-e7fea7d81f10",
   "bId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37"
  },
  {
   "a": "Lauren Ricks",
   "b": "Tricia Burdo",
   "team": "Kiss My Ace",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -1,
   "avgActual": -4.6,
   "avgExpected": -2.9,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "c1af6941-a826-4930-9aac-4c13837754a8"
  },
  {
   "a": "Carolyn King",
   "b": "Jarid Chan",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -11,
   "avgExpected": -9.1,
   "aId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e",
   "bId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5"
  },
  {
   "a": "Scott Gardo",
   "b": "David Wisch",
   "team": "Baby Got Backhand",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -0.6,
   "avgExpected": 1,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "9e3072fb-dce5-48d8-b320-0fe5cb411d0f"
  },
  {
   "a": "Tricia Burdo",
   "b": "Kevin Ewing",
   "team": "Kiss My Ace",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -7.6,
   "avgExpected": -5.6,
   "aId": "c1af6941-a826-4930-9aac-4c13837754a8",
   "bId": "f330ab05-8344-4a75-bf22-e9420a70e42e"
  },
  {
   "a": "Yelena Grandel",
   "b": "Mikhail Grandel",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779",
   "bId": "fdf89c7e-792c-46bd-85b1-4159a12d586e"
  },
  {
   "a": "Steve Ciocco",
   "b": "Mikhail Grandel",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -4,
   "avgExpected": -1.5,
   "aId": "c5578bac-f973-49f9-8bfe-ff866cc4f275",
   "bId": "fdf89c7e-792c-46bd-85b1-4159a12d586e"
  },
  {
   "a": "David Wisch",
   "b": "Doug Johnson",
   "team": "Baby Got Backhand",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -1.2,
   "avgActual": 0.3,
   "avgExpected": 2,
   "aId": "9e3072fb-dce5-48d8-b320-0fe5cb411d0f",
   "bId": "e86cee45-ab6b-4ea6-99c6-10e16bc1a05d"
  },
  {
   "a": "Dhara Metla",
   "b": "Bonny Mayerberg",
   "team": "Court Jesters",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.2,
   "avgActual": -6.6,
   "avgExpected": -4.5,
   "aId": "02451298-7305-4d83-9dd7-6314946b71ab",
   "bId": "0e543890-4c91-45d2-bd5d-819dc476b245"
  },
  {
   "a": "Lauren Ricks",
   "b": "Andrew Bush",
   "team": "Kiss My Ace",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -4.3,
   "avgExpected": -2.2,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "a": "Tatiana Gaban",
   "b": "Haidee Midgley",
   "team": "Dink Responsibly",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -0.4,
   "avgExpected": 1.6,
   "aId": "bfbefe4a-fa83-4446-9693-067b414321a5",
   "bId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
  },
  {
   "a": "Elizabeth Dailey",
   "b": "Doug Johnson",
   "team": "Baby Got Backhand",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.3,
   "avgActual": 0.3,
   "avgExpected": 2.5,
   "aId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b",
   "bId": "e86cee45-ab6b-4ea6-99c6-10e16bc1a05d"
  },
  {
   "a": "Sibi Thomas",
   "b": "Danika Johnston",
   "team": "Court Jesters",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -3,
   "avgExpected": -0.5,
   "aId": "3127a3b2-11c9-4a02-b26d-05030387d80a",
   "bId": "ce17c7e9-b59a-4927-910f-61838f00a559"
  },
  {
   "a": "Lauren Ricks",
   "b": "Esha Gajjar",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -4,
   "avgExpected": -1.2,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "947cf956-08c0-44d2-9bae-2458fd24c9d0"
  },
  {
   "a": "Lori Wild",
   "b": "Jay Shah",
   "team": "Court Jesters",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.5,
   "avgActual": 0,
   "avgExpected": 3.1,
   "aId": "b1066a81-7537-4512-939d-5acbf11ef9aa",
   "bId": "cc1a90cf-8cc0-4cc5-b41f-27f7cab42b1e"
  },
  {
   "a": "Bonny Mayerberg",
   "b": "Eric Pollock",
   "team": "Court Jesters",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -3,
   "avgExpected": 0.4,
   "aId": "0e543890-4c91-45d2-bd5d-819dc476b245",
   "bId": "347f3214-5905-4d1b-8666-9290abe9b727"
  },
  {
   "a": "Francesca Bogiatzis",
   "b": "Susan Li",
   "team": "Baby Got Backhand",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -1.5,
   "avgActual": 3.1,
   "avgExpected": 5.4,
   "aId": "142db61b-1736-473e-8e71-61baf2b2bae2",
   "bId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363"
  },
  {
   "a": "Crista Renauro",
   "b": "Laura Clarke",
   "team": "Baby Got Backhand",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -2,
   "avgExpected": 1.6,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "e17e166e-a76f-4334-a2d8-87ed2b172028"
  },
  {
   "a": "Lauren Ricks",
   "b": "Carolyn King",
   "team": "Kiss My Ace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -9.7,
   "avgExpected": -6.2,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e"
  },
  {
   "a": "Eric Tran",
   "b": "Kevin Ewing",
   "team": "Kiss My Ace",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -6.7,
   "avgExpected": -3.8,
   "aId": "8b4fc403-adea-47a4-adad-a22a786313e9",
   "bId": "f330ab05-8344-4a75-bf22-e9420a70e42e"
  },
  {
   "a": "Kerry Jiang",
   "b": "Mikhail Grandel",
   "team": "Dink Responsibly",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -1.6,
   "avgActual": 0.5,
   "avgExpected": 2.9,
   "aId": "21660a36-599f-4fde-8e76-cb23ff1313b7",
   "bId": "fdf89c7e-792c-46bd-85b1-4159a12d586e"
  },
  {
   "a": "Bin Lu",
   "b": "Lanz Santos",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -2,
   "avgExpected": 1.1,
   "aId": "74b0ebe9-a153-4396-be45-1bdd288cdadd",
   "bId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37"
  },
  {
   "a": "Sonia Tuhin",
   "b": "Mikhail Grandel",
   "team": "Dink Responsibly",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -1.3,
   "avgExpected": 1.3,
   "aId": "5acfafaf-212f-4824-a11d-c0b948585d75",
   "bId": "fdf89c7e-792c-46bd-85b1-4159a12d586e"
  },
  {
   "a": "Zach Derrick",
   "b": "Steve Ciocco",
   "team": "Dink Responsibly",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -6.7,
   "avgExpected": -2.8,
   "aId": "85508a87-8a46-4c27-9b86-7323c2b37379",
   "bId": "c5578bac-f973-49f9-8bfe-ff866cc4f275"
  },
  {
   "a": "Rommel Santos",
   "b": "Lanz Santos",
   "team": "Dink Responsibly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -1.2,
   "avgExpected": 1.9,
   "aId": "8ce91d1e-e5eb-439f-b181-48332a03f660",
   "bId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37"
  },
  {
   "a": "Yelena Grandel",
   "b": "Michael Smith",
   "team": "Dink Responsibly",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -3.3,
   "avgExpected": 0.3,
   "aId": "50f9c167-7ce1-42c3-953c-c0c1de8ce779",
   "bId": "b3d9070b-8036-402f-b0a1-23ae600f3410"
  },
  {
   "a": "Bonny Mayerberg",
   "b": "Doug Dougherty",
   "team": "Court Jesters",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -7.7,
   "avgExpected": -2.9,
   "aId": "0e543890-4c91-45d2-bd5d-819dc476b245",
   "bId": "346a0f21-c662-4ff3-b830-5961a1a49072"
  },
  {
   "a": "Eric Tran",
   "b": "Jarid Chan",
   "team": "Kiss My Ace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -12,
   "avgExpected": -6.4,
   "aId": "8b4fc403-adea-47a4-adad-a22a786313e9",
   "bId": "c3e8bfca-0071-4ddd-8366-0b4391b151d5"
  },
  {
   "a": "Bonny Mayerberg",
   "b": "Barbara Taylor",
   "team": "Court Jesters",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -3.4,
   "avgActual": -8.5,
   "avgExpected": -2.9,
   "aId": "0e543890-4c91-45d2-bd5d-819dc476b245",
   "bId": "d9f9ce7b-1e95-4564-bc45-e395c44c8409"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Kiss My Ace",
   "away": "Dink Responsibly",
   "time": "2026-07-01T19:30:00",
   "complete": true,
   "homePoints": 528,
   "awayPoints": 652,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Andrew Bush"
     ],
     "a": [
      "Haidee Midgley",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacqueline Ho",
      "Jarid Chan"
     ],
     "a": [
      "Lanz Santos",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Lauren Ricks",
      "Howard Shotel"
     ],
     "a": [
      "Gretchen Schneider",
      "Rommel Santos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Carolyn King",
      "Eric Tran"
     ],
     "a": [
      "Yelena Grandel",
      "Kerry Jiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Jacqueline Ho"
     ],
     "a": [
      "Haidee Midgley",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carolyn King",
      "Tricia Burdo"
     ],
     "a": [
      "Gretchen Schneider",
      "Sonia Tuhin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrew Bush",
      "Eric Tran"
     ],
     "a": [
      "Mikhail Grandel",
      "Rommel Santos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jarid Chan",
      "Howard Shotel"
     ],
     "a": [
      "Steve Ciocco",
      "Michael Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Jarid Chan"
     ],
     "a": [
      "Haidee Midgley",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacqueline Ho",
      "Andrew Bush"
     ],
     "a": [
      "Lanz Santos",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Howard Shotel"
     ],
     "a": [
      "Sonia Tuhin",
      "Michael Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Eric Tran"
     ],
     "a": [
      "Yelena Grandel",
      "Kerry Jiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jacqueline Ho",
      "Lauren Ricks"
     ],
     "a": [
      "Lanz Santos",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carolyn King",
      "Tricia Burdo"
     ],
     "a": [
      "Yelena Grandel",
      "Sonia Tuhin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andrew Bush",
      "Jarid Chan"
     ],
     "a": [
      "Mikhail Grandel",
      "Michael Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eric Tran",
      "Howard Shotel"
     ],
     "a": [
      "Rommel Santos",
      "Kerry Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Jarid Chan"
     ],
     "a": [
      "Gretchen Schneider",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lauren Ricks",
      "Andrew Bush"
     ],
     "a": [
      "Haidee Midgley",
      "Michael Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Eric Tran"
     ],
     "a": [
      "Yelena Grandel",
      "Rommel Santos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Carolyn King",
      "Howard Shotel"
     ],
     "a": [
      "Sonia Tuhin",
      "Kerry Jiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Tantum",
      "Lauren Ricks"
     ],
     "a": [
      "Lanz Santos",
      "Yelena Grandel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jacqueline Ho",
      "Carolyn King"
     ],
     "a": [
      "Haidee Midgley",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Andrew Bush",
      "Jarid Chan"
     ],
     "a": [
      "Steve Ciocco",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Eric Tran",
      "Howard Shotel"
     ],
     "a": [
      "Rommel Santos",
      "Kerry Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Andrew Bush"
     ],
     "a": [
      "Lanz Santos",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jacqueline Ho",
      "Jarid Chan"
     ],
     "a": [
      "Haidee Midgley",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carolyn King",
      "Eric Tran"
     ],
     "a": [
      "Gretchen Schneider",
      "Michael Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Howard Shotel"
     ],
     "a": [
      "Sonia Tuhin",
      "Rommel Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarah Tantum",
      "Jacqueline Ho"
     ],
     "a": [
      "Haidee Midgley",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Tricia Burdo"
     ],
     "a": [
      "Yelena Grandel",
      "Sonia Tuhin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrew Bush",
      "Eric Tran"
     ],
     "a": [
      "Steve Ciocco",
      "Michael Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jarid Chan",
      "Howard Shotel"
     ],
     "a": [
      "Mikhail Grandel",
      "Kerry Jiang"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Court Jesters",
   "away": "Baby Got Backhand",
   "time": "2026-07-01T19:30:00",
   "complete": true,
   "homePoints": 584,
   "awayPoints": 636,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lori Wild",
      "Jay Shah"
     ],
     "a": [
      "Adele Hackney",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brenda Weckerly",
      "Sibi Thomas"
     ],
     "a": [
      "Elizabeth Dailey",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Doug Dougherty"
     ],
     "a": [
      "Francesca Bogiatzis",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Deanna Romeo",
      "Sean Kennedy"
     ],
     "a": [
      "Laura Clarke",
      "Gang Jia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lori Wild",
      "Deanna Romeo"
     ],
     "a": [
      "Elizabeth Dailey",
      "Francesca Bogiatzis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brenda Weckerly",
      "Bonny Mayerberg"
     ],
     "a": [
      "Adele Hackney",
      "Crista Renauro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jay Shah",
      "Sibi Thomas"
     ],
     "a": [
      "Erickson Clarke",
      "Scott Gardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sean Kennedy",
      "Eric Pollock"
     ],
     "a": [
      "David Wisch",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brenda Weckerly",
      "Jay Shah"
     ],
     "a": [
      "Elizabeth Dailey",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lori Wild",
      "Sibi Thomas"
     ],
     "a": [
      "Adele Hackney",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Doug Dougherty"
     ],
     "a": [
      "Crista Renauro",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Deanna Romeo",
      "Eric Pollock"
     ],
     "a": [
      "Laura Clarke",
      "Gang Jia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lori Wild",
      "Brenda Weckerly"
     ],
     "a": [
      "Elizabeth Dailey",
      "Crista Renauro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Deanna Romeo",
      "Bonny Mayerberg"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sibi Thomas",
      "Doug Dougherty"
     ],
     "a": [
      "Scott Gardo",
      "David Wisch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sean Kennedy",
      "Eric Pollock"
     ],
     "a": [
      "Gang Jia",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Brenda Weckerly",
      "Jay Shah"
     ],
     "a": [
      "Adele Hackney",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lori Wild",
      "Doug Dougherty"
     ],
     "a": [
      "Crista Renauro",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Deanna Romeo",
      "Eric Pollock"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Gang Jia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bonny Mayerberg",
      "Sean Kennedy"
     ],
     "a": [
      "Laura Clarke",
      "Doug Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lori Wild",
      "Brenda Weckerly"
     ],
     "a": [
      "Adele Hackney",
      "Elizabeth Dailey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Deanna Romeo",
      "Bonny Mayerberg"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jay Shah",
      "Doug Dougherty"
     ],
     "a": [
      "Scott Gardo",
      "Gang Jia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sibi Thomas",
      "Sean Kennedy"
     ],
     "a": [
      "Erickson Clarke",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lori Wild",
      "Jay Shah"
     ],
     "a": [
      "Elizabeth Dailey",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brenda Weckerly",
      "Sibi Thomas"
     ],
     "a": [
      "Adele Hackney",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Deanna Romeo",
      "Sean Kennedy"
     ],
     "a": [
      "Crista Renauro",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Eric Pollock"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Doug Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lori Wild",
      "Deanna Romeo"
     ],
     "a": [
      "Adele Hackney",
      "Crista Renauro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brenda Weckerly",
      "Bonny Mayerberg"
     ],
     "a": [
      "Elizabeth Dailey",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jay Shah",
      "Sibi Thomas"
     ],
     "a": [
      "Erickson Clarke",
      "Scott Gardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Doug Dougherty",
      "Eric Pollock"
     ],
     "a": [
      "Gang Jia",
      "Doug Johnson"
     ]
    }
   ],
   "subs": [
    "Brenda Weckerly"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Dink Responsibly",
   "away": "Court Jesters",
   "time": "2026-07-08T19:30:00",
   "complete": true,
   "homePoints": 595,
   "awayPoints": 544,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Steve Ciocco"
     ],
     "a": [
      "Deanna Romeo",
      "Sibi Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lanz Santos",
      "Bin Lu"
     ],
     "a": [
      "Danika Johnston",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Yelena Grandel",
      "Rommel Santos"
     ],
     "a": [
      "Barbara Taylor",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sonia Tuhin",
      "Mikhail Grandel"
     ],
     "a": [
      "Bonny Mayerberg",
      "Dhara Metla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Haidee Midgley",
      "Tatiana Gaban"
     ],
     "a": [
      "Danika Johnston",
      "Barbara Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lanz Santos",
      "Sonia Tuhin"
     ],
     "a": [
      "Deanna Romeo",
      "Lori Wild"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Steve Ciocco",
      "Bin Lu"
     ],
     "a": [
      "Shan Jiang",
      "Sibi Thomas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mikhail Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Eric Pollock",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lanz Santos",
      "Steve Ciocco"
     ],
     "a": [
      "Danika Johnston",
      "Sibi Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Haidee Midgley",
      "Bin Lu"
     ],
     "a": [
      "Deanna Romeo",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tatiana Gaban",
      "Rommel Santos"
     ],
     "a": [
      "Lori Wild",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yelena Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Bonny Mayerberg",
      "Dhara Metla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lanz Santos",
      "Yelena Grandel"
     ],
     "a": [
      "Barbara Taylor",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tatiana Gaban",
      "Sonia Tuhin"
     ],
     "a": [
      "Deanna Romeo",
      "Lori Wild"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Steve Ciocco",
      "Rommel Santos"
     ],
     "a": [
      "Shan Jiang",
      "Eric Pollock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mikhail Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Sean Kennedy",
      "Dhara Metla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tatiana Gaban",
      "Rommel Santos"
     ],
     "a": [
      "Lori Wild",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Haidee Midgley",
      "Bin Lu"
     ],
     "a": [
      "Danika Johnston",
      "Sibi Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yelena Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Barbara Taylor",
      "Dhara Metla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sonia Tuhin",
      "Mikhail Grandel"
     ],
     "a": [
      "Bonny Mayerberg",
      "Sean Kennedy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Haidee Midgley",
      "Lanz Santos"
     ],
     "a": [
      "Danika Johnston",
      "Deanna Romeo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yelena Grandel",
      "Sonia Tuhin"
     ],
     "a": [
      "Barbara Taylor",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Steve Ciocco",
      "Rommel Santos"
     ],
     "a": [
      "Shan Jiang",
      "Eric Pollock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Bin Lu",
      "Mikhail Grandel"
     ],
     "a": [
      "Sibi Thomas",
      "Dhara Metla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Steve Ciocco"
     ],
     "a": [
      "Danika Johnston",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lanz Santos",
      "Mikhail Grandel"
     ],
     "a": [
      "Barbara Taylor",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tatiana Gaban",
      "Bin Lu"
     ],
     "a": [
      "Deanna Romeo",
      "Sibi Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sonia Tuhin",
      "Kerry Jiang"
     ],
     "a": [
      "Lori Wild",
      "Sean Kennedy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Haidee Midgley",
      "Lanz Santos"
     ],
     "a": [
      "Danika Johnston",
      "Deanna Romeo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tatiana Gaban",
      "Yelena Grandel"
     ],
     "a": [
      "Lori Wild",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Steve Ciocco",
      "Bin Lu"
     ],
     "a": [
      "Shan Jiang",
      "Sibi Thomas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rommel Santos",
      "Kerry Jiang"
     ],
     "a": [
      "Sean Kennedy",
      "Dhara Metla"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Baby Got Backhand",
   "away": "Kiss My Ace",
   "time": "2026-07-08T19:30:00",
   "complete": true,
   "homePoints": 610,
   "awayPoints": 550,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Adele Hackney",
      "Doug Johnson"
     ],
     "a": [
      "Esha Gajjar",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Francesca Bogiatzis",
      "David Wisch"
     ],
     "a": [
      "Sarah Tantum",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Laura Clarke",
      "Erickson Clarke"
     ],
     "a": [
      "Tricia Burdo",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Li",
      "Scott Gardo"
     ],
     "a": [
      "Lauren Ricks",
      "Kevin Ewing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Francesca Bogiatzis",
      "Laura Clarke"
     ],
     "a": [
      "Esha Gajjar",
      "Lauren Ricks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Adele Hackney",
      "Elizabeth Dailey"
     ],
     "a": [
      "Sarah Tantum",
      "Tricia Burdo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Doug Johnson",
      "David Wisch"
     ],
     "a": [
      "Ben Philip",
      "Andrew Bush"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Erickson Clarke",
      "Biju Samuel"
     ],
     "a": [
      "Kevin Ewing",
      "Jarid Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Francesca Bogiatzis",
      "Doug Johnson"
     ],
     "a": [
      "Sarah Tantum",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Adele Hackney",
      "David Wisch"
     ],
     "a": [
      "Esha Gajjar",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Elizabeth Dailey",
      "Biju Samuel"
     ],
     "a": [
      "Tricia Burdo",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Li",
      "Scott Gardo"
     ],
     "a": [
      "Lauren Ricks",
      "Jarid Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Francesca Bogiatzis",
      "Elizabeth Dailey"
     ],
     "a": [
      "Esha Gajjar",
      "Sarah Tantum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Clarke",
      "Susan Li"
     ],
     "a": [
      "Lauren Ricks",
      "Tricia Burdo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Wisch",
      "Erickson Clarke"
     ],
     "a": [
      "Andrew Bush",
      "Eric Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Scott Gardo",
      "Biju Samuel"
     ],
     "a": [
      "Kevin Ewing",
      "Jarid Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Adele Hackney",
      "Erickson Clarke"
     ],
     "a": [
      "Sarah Tantum",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Doug Johnson"
     ],
     "a": [
      "Esha Gajjar",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Laura Clarke",
      "Scott Gardo"
     ],
     "a": [
      "Lauren Ricks",
      "Jarid Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Li",
      "Biju Samuel"
     ],
     "a": [
      "Tricia Burdo",
      "Kevin Ewing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adele Hackney",
      "Francesca Bogiatzis"
     ],
     "a": [
      "Esha Gajjar",
      "Sarah Tantum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Laura Clarke",
      "Susan Li"
     ],
     "a": [
      "Lauren Ricks",
      "Tricia Burdo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Wisch",
      "Scott Gardo"
     ],
     "a": [
      "Ben Philip",
      "Eric Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Doug Johnson",
      "Erickson Clarke"
     ],
     "a": [
      "Andrew Bush",
      "Kevin Ewing"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Francesca Bogiatzis",
      "David Wisch"
     ],
     "a": [
      "Esha Gajjar",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adele Hackney",
      "Doug Johnson"
     ],
     "a": [
      "Sarah Tantum",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Elizabeth Dailey",
      "Erickson Clarke"
     ],
     "a": [
      "Lauren Ricks",
      "Kevin Ewing"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Clarke",
      "Biju Samuel"
     ],
     "a": [
      "Tricia Burdo",
      "Jarid Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Adele Hackney",
      "Elizabeth Dailey"
     ],
     "a": [
      "Esha Gajjar",
      "Lauren Ricks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Francesca Bogiatzis",
      "Susan Li"
     ],
     "a": [
      "Sarah Tantum",
      "Tricia Burdo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Doug Johnson",
      "David Wisch"
     ],
     "a": [
      "Ben Philip",
      "Andrew Bush"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Scott Gardo",
      "Biju Samuel"
     ],
     "a": [
      "Eric Tran",
      "Jarid Chan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Court Jesters",
   "away": "Kiss My Ace",
   "time": "2026-07-15T19:30:00",
   "complete": true,
   "homePoints": 588,
   "awayPoints": 530,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danika Johnston",
      "Sibi Thomas"
     ],
     "a": [
      "Jacqueline Ho",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brenda Weckerly",
      "Doug Dougherty"
     ],
     "a": [
      "Esha Gajjar",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lori Wild",
      "Shan Jiang"
     ],
     "a": [
      "Carolyn King",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Barbara Taylor",
      "Eric Pollock"
     ],
     "a": [
      "Tricia Burdo",
      "Jarid Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Danika Johnston",
      "Bonny Mayerberg"
     ],
     "a": [
      "Esha Gajjar",
      "Carolyn King"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brenda Weckerly",
      "Barbara Taylor"
     ],
     "a": [
      "Jacqueline Ho",
      "Lauren Ricks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sibi Thomas",
      "Doug Dougherty"
     ],
     "a": [
      "Ben Philip",
      "Andrew Bush"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Pollock",
      "Jay Shah"
     ],
     "a": [
      "Eric Tran",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brenda Weckerly",
      "Sibi Thomas"
     ],
     "a": [
      "Esha Gajjar",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Danika Johnston",
      "Doug Dougherty"
     ],
     "a": [
      "Jacqueline Ho",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Bonny Mayerberg",
      "Shan Jiang"
     ],
     "a": [
      "Lauren Ricks",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lori Wild",
      "Jay Shah"
     ],
     "a": [
      "Tricia Burdo",
      "Jarid Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brenda Weckerly",
      "Lori Wild"
     ],
     "a": [
      "Carolyn King",
      "Tricia Burdo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Barbara Taylor"
     ],
     "a": [
      "Jacqueline Ho",
      "Lauren Ricks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sibi Thomas",
      "Shan Jiang"
     ],
     "a": [
      "Ben Philip",
      "Eric Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eric Pollock",
      "Jay Shah"
     ],
     "a": [
      "Sean Yu",
      "Jarid Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Bonny Mayerberg",
      "Shan Jiang"
     ],
     "a": [
      "Lauren Ricks",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Danika Johnston",
      "Doug Dougherty"
     ],
     "a": [
      "Esha Gajjar",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Lori Wild",
      "Jay Shah"
     ],
     "a": [
      "Carolyn King",
      "Jarid Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Barbara Taylor",
      "Eric Pollock"
     ],
     "a": [
      "Tricia Burdo",
      "Sean Yu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Danika Johnston",
      "Brenda Weckerly"
     ],
     "a": [
      "Esha Gajjar",
      "Jacqueline Ho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lori Wild",
      "Barbara Taylor"
     ],
     "a": [
      "Carolyn King",
      "Tricia Burdo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sibi Thomas",
      "Shan Jiang"
     ],
     "a": [
      "Ben Philip",
      "Eric Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Doug Dougherty",
      "Eric Pollock"
     ],
     "a": [
      "Andrew Bush",
      "Jarid Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Danika Johnston",
      "Sibi Thomas"
     ],
     "a": [
      "Esha Gajjar",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brenda Weckerly",
      "Eric Pollock"
     ],
     "a": [
      "Carolyn King",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Doug Dougherty"
     ],
     "a": [
      "Jacqueline Ho",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barbara Taylor",
      "Jay Shah"
     ],
     "a": [
      "Lauren Ricks",
      "Sean Yu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Danika Johnston",
      "Brenda Weckerly"
     ],
     "a": [
      "Esha Gajjar",
      "Jacqueline Ho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bonny Mayerberg",
      "Lori Wild"
     ],
     "a": [
      "Lauren Ricks",
      "Tricia Burdo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sibi Thomas",
      "Doug Dougherty"
     ],
     "a": [
      "Ben Philip",
      "Andrew Bush"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Shan Jiang",
      "Jay Shah"
     ],
     "a": [
      "Sean Yu",
      "Jarid Chan"
     ]
    }
   ],
   "subs": [
    "Brenda Weckerly"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Baby Got Backhand",
   "away": "Dink Responsibly",
   "time": "2026-07-15T19:30:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 561,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Li",
      "Gang Jia"
     ],
     "a": [
      "Haidee Midgley",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Crista Renauro",
      "Biju Samuel"
     ],
     "a": [
      "Tatiana Gaban",
      "Zach Derrick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Francesca Bogiatzis",
      "Erickson Clarke"
     ],
     "a": [
      "Lanz Santos",
      "Kerry Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Clarke",
      "Scott Gardo"
     ],
     "a": [
      "Sonia Tuhin",
      "Michael Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Li",
      "Crista Renauro"
     ],
     "a": [
      "Haidee Midgley",
      "Tatiana Gaban"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Clarke",
      "Elizabeth Dailey"
     ],
     "a": [
      "Lanz Santos",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gang Jia",
      "Scott Gardo"
     ],
     "a": [
      "Zach Derrick",
      "Kerry Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Biju Samuel",
      "Erickson Clarke"
     ],
     "a": [
      "Steve Ciocco",
      "Rommel Santos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Susan Li",
      "Biju Samuel"
     ],
     "a": [
      "Haidee Midgley",
      "Zach Derrick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Crista Renauro",
      "Gang Jia"
     ],
     "a": [
      "Tatiana Gaban",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Francesca Bogiatzis",
      "Erickson Clarke"
     ],
     "a": [
      "Gretchen Schneider",
      "Rommel Santos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elizabeth Dailey",
      "Scott Gardo"
     ],
     "a": [
      "Sonia Tuhin",
      "Michael Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Crista Renauro",
      "Francesca Bogiatzis"
     ],
     "a": [
      "Tatiana Gaban",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Clarke",
      "Elizabeth Dailey"
     ],
     "a": [
      "Sonia Tuhin",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gang Jia",
      "Biju Samuel"
     ],
     "a": [
      "Zach Derrick",
      "Rommel Santos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Scott Gardo",
      "Erickson Clarke"
     ],
     "a": [
      "Kerry Jiang",
      "Michael Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Li",
      "Biju Samuel"
     ],
     "a": [
      "Lanz Santos",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Francesca Bogiatzis",
      "Gang Jia"
     ],
     "a": [
      "Haidee Midgley",
      "Rommel Santos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Scott Gardo"
     ],
     "a": [
      "Sonia Tuhin",
      "Kerry Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Clarke",
      "Erickson Clarke"
     ],
     "a": [
      "Gretchen Schneider",
      "Michael Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Susan Li",
      "Francesca Bogiatzis"
     ],
     "a": [
      "Tatiana Gaban",
      "Sonia Tuhin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Crista Renauro",
      "Laura Clarke"
     ],
     "a": [
      "Haidee Midgley",
      "Lanz Santos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gang Jia",
      "Biju Samuel"
     ],
     "a": [
      "Steve Ciocco",
      "Zach Derrick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Scott Gardo",
      "Erickson Clarke"
     ],
     "a": [
      "Kerry Jiang",
      "Michael Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Li",
      "Gang Jia"
     ],
     "a": [
      "Tatiana Gaban",
      "Zach Derrick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Crista Renauro",
      "Biju Samuel"
     ],
     "a": [
      "Haidee Midgley",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Clarke",
      "Scott Gardo"
     ],
     "a": [
      "Lanz Santos",
      "Rommel Santos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elizabeth Dailey",
      "Erickson Clarke"
     ],
     "a": [
      "Gretchen Schneider",
      "Kerry Jiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan Li",
      "Crista Renauro"
     ],
     "a": [
      "Haidee Midgley",
      "Tatiana Gaban"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Francesca Bogiatzis",
      "Elizabeth Dailey"
     ],
     "a": [
      "Sonia Tuhin",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gang Jia",
      "Scott Gardo"
     ],
     "a": [
      "Steve Ciocco",
      "Rommel Santos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Biju Samuel",
      "Erickson Clarke"
     ],
     "a": [
      "Zach Derrick",
      "Michael Smith"
     ]
    }
   ],
   "subs": [
    "Zach Derrick"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Dink Responsibly",
   "away": "Kiss My Ace",
   "time": "2026-07-22T19:30:00",
   "complete": true,
   "homePoints": 596,
   "awayPoints": 599,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Bin Lu"
     ],
     "a": [
      "Thania Padova",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tatiana Gaban",
      "Steve Ciocco"
     ],
     "a": [
      "Sarah Tantum",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gretchen Schneider",
      "Kerry Jiang"
     ],
     "a": [
      "Michelle Cresta",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yelena Grandel",
      "Mikhail Grandel"
     ],
     "a": [
      "Kim Harris",
      "Ben Philip"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Haidee Midgley",
      "Tatiana Gaban"
     ],
     "a": [
      "Thania Padova",
      "Kim Harris"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lanz Santos",
      "Gretchen Schneider"
     ],
     "a": [
      "Sarah Tantum",
      "Michelle Cresta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bin Lu",
      "Steve Ciocco"
     ],
     "a": [
      "Andrew Bush",
      "Ben Philip"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rommel Santos",
      "Kerry Jiang"
     ],
     "a": [
      "Sean Yu",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Steve Ciocco"
     ],
     "a": [
      "Thania Padova",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tatiana Gaban",
      "Bin Lu"
     ],
     "a": [
      "Kim Harris",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Yelena Grandel",
      "Mikhail Grandel"
     ],
     "a": [
      "Sarah Tantum",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lanz Santos",
      "Rommel Santos"
     ],
     "a": [
      "Michelle Cresta",
      "Ben Philip"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Lanz Santos"
     ],
     "a": [
      "Thania Padova",
      "Sarah Tantum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yelena Grandel",
      "Gretchen Schneider"
     ],
     "a": [
      "Kim Harris",
      "Michelle Cresta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bin Lu",
      "Rommel Santos"
     ],
     "a": [
      "Andrew Bush",
      "Sean Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Mikhail Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Ben Philip",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tatiana Gaban",
      "Steve Ciocco"
     ],
     "a": [
      "Thania Padova",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lanz Santos",
      "Rommel Santos"
     ],
     "a": [
      "Sarah Tantum",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yelena Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Michelle Cresta",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gretchen Schneider",
      "Mikhail Grandel"
     ],
     "a": [
      "Kim Harris",
      "Eric Tran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Haidee Midgley",
      "Tatiana Gaban"
     ],
     "a": [
      "Thania Padova",
      "Sarah Tantum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yelena Grandel",
      "Gretchen Schneider"
     ],
     "a": [
      "Kim Harris",
      "Michelle Cresta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Bin Lu",
      "Steve Ciocco"
     ],
     "a": [
      "Andrew Bush",
      "Sean Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mikhail Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Ben Philip",
      "Eric Tran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lanz Santos",
      "Bin Lu"
     ],
     "a": [
      "Thania Padova",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Steve Ciocco"
     ],
     "a": [
      "Sarah Tantum",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tatiana Gaban",
      "Kerry Jiang"
     ],
     "a": [
      "Michelle Cresta",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gretchen Schneider",
      "Rommel Santos"
     ],
     "a": [
      "Kim Harris",
      "Eric Tran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tatiana Gaban",
      "Yelena Grandel"
     ],
     "a": [
      "Thania Padova",
      "Kim Harris"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Haidee Midgley",
      "Lanz Santos"
     ],
     "a": [
      "Sarah Tantum",
      "Michelle Cresta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Steve Ciocco",
      "Mikhail Grandel"
     ],
     "a": [
      "Andrew Bush",
      "Ben Philip"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bin Lu",
      "Rommel Santos"
     ],
     "a": [
      "Sean Yu",
      "Eric Tran"
     ]
    }
   ],
   "subs": [
    "Michelle Cresta",
    "Kim Harris",
    "Thania Padova"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Court Jesters",
   "away": "Baby Got Backhand",
   "time": "2026-07-22T19:30:00",
   "complete": true,
   "homePoints": 542,
   "awayPoints": 651,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lucy Emery",
      "Sean Kennedy"
     ],
     "a": [
      "Susan Li",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Danika Johnston",
      "Eric Pollock"
     ],
     "a": [
      "Crista Renauro",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barbara Taylor",
      "Doug Dougherty"
     ],
     "a": [
      "Elizabeth Dailey",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bonny Mayerberg",
      "Jay Shah"
     ],
     "a": [
      "Laura Clarke",
      "Doug Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lucy Emery",
      "Bonny Mayerberg"
     ],
     "a": [
      "Crista Renauro",
      "Elizabeth Dailey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Danika Johnston",
      "Barbara Taylor"
     ],
     "a": [
      "Susan Li",
      "Francesca Bogiatzis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sean Kennedy",
      "Eric Pollock"
     ],
     "a": [
      "Biju Samuel",
      "Erickson Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jay Shah",
      "Dhara Metla"
     ],
     "a": [
      "Scott Gardo",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Danika Johnston",
      "Sean Kennedy"
     ],
     "a": [
      "Crista Renauro",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lucy Emery",
      "Eric Pollock"
     ],
     "a": [
      "Susan Li",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Barbara Taylor",
      "Doug Dougherty"
     ],
     "a": [
      "Francesca Bogiatzis",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Dhara Metla"
     ],
     "a": [
      "Laura Clarke",
      "Doug Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lucy Emery",
      "Danika Johnston"
     ],
     "a": [
      "Crista Renauro",
      "Francesca Bogiatzis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Barbara Taylor"
     ],
     "a": [
      "Elizabeth Dailey",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Pollock",
      "Doug Dougherty"
     ],
     "a": [
      "Erickson Clarke",
      "Scott Gardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jay Shah",
      "Dhara Metla"
     ],
     "a": [
      "Doug Johnson",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Danika Johnston",
      "Sean Kennedy"
     ],
     "a": [
      "Susan Li",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lucy Emery",
      "Doug Dougherty"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Dhara Metla"
     ],
     "a": [
      "Elizabeth Dailey",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Barbara Taylor",
      "Jay Shah"
     ],
     "a": [
      "Laura Clarke",
      "David Wisch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lucy Emery",
      "Danika Johnston"
     ],
     "a": [
      "Susan Li",
      "Crista Renauro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Barbara Taylor"
     ],
     "a": [
      "Elizabeth Dailey",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sean Kennedy",
      "Doug Dougherty"
     ],
     "a": [
      "Erickson Clarke",
      "Doug Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Pollock",
      "Jay Shah"
     ],
     "a": [
      "Biju Samuel",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lucy Emery",
      "Sean Kennedy"
     ],
     "a": [
      "Crista Renauro",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Danika Johnston",
      "Eric Pollock"
     ],
     "a": [
      "Susan Li",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Bonny Mayerberg",
      "Jay Shah"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 22,
     "h": [
      "Barbara Taylor",
      "Dhara Metla"
     ],
     "a": [
      "Elizabeth Dailey",
      "David Wisch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lucy Emery",
      "Bonny Mayerberg"
     ],
     "a": [
      "Susan Li",
      "Francesca Bogiatzis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Danika Johnston",
      "Barbara Taylor"
     ],
     "a": [
      "Crista Renauro",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sean Kennedy",
      "Eric Pollock"
     ],
     "a": [
      "Biju Samuel",
      "Erickson Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Doug Dougherty",
      "Dhara Metla"
     ],
     "a": [
      "Doug Johnson",
      "David Wisch"
     ]
    }
   ],
   "subs": [
    "Lucy Emery"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Court Jesters",
   "away": "Dink Responsibly",
   "time": "2026-07-29T19:30:00",
   "complete": true,
   "homePoints": 568,
   "awayPoints": 605,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lori Wild",
      "Sean Kennedy"
     ],
     "a": [
      "Tatiana Gaban",
      "Bin Lu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Eric Pollock"
     ],
     "a": [
      "Haidee Midgley",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carolyn Mako",
      "Doug Dougherty"
     ],
     "a": [
      "Yelena Grandel",
      "Zach Derrick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barbara Taylor",
      "Jay Shah"
     ],
     "a": [
      "Gretchen Schneider",
      "Kerry Jiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lori Wild",
      "Danika Johnston"
     ],
     "a": [
      "Haidee Midgley",
      "Yelena Grandel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Barbara Taylor"
     ],
     "a": [
      "Tatiana Gaban",
      "Sonia Tuhin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sean Kennedy",
      "Eric Pollock"
     ],
     "a": [
      "Steve Ciocco",
      "Bin Lu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jay Shah",
      "Dhara Metla"
     ],
     "a": [
      "Zach Derrick",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Sean Kennedy"
     ],
     "a": [
      "Haidee Midgley",
      "Bin Lu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lori Wild",
      "Eric Pollock"
     ],
     "a": [
      "Tatiana Gaban",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Danika Johnston",
      "Doug Dougherty"
     ],
     "a": [
      "Sonia Tuhin",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carolyn Mako",
      "Dhara Metla"
     ],
     "a": [
      "Gretchen Schneider",
      "Kerry Jiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bonny Mayerberg",
      "Carolyn Mako"
     ],
     "a": [
      "Yelena Grandel",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Danika Johnston",
      "Barbara Taylor"
     ],
     "a": [
      "Tatiana Gaban",
      "Sonia Tuhin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sean Kennedy",
      "Doug Dougherty"
     ],
     "a": [
      "Steve Ciocco",
      "Zach Derrick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jay Shah",
      "Dhara Metla"
     ],
     "a": [
      "Mikhail Grandel",
      "Kerry Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Danika Johnston",
      "Doug Dougherty"
     ],
     "a": [
      "Sonia Tuhin",
      "Zach Derrick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lori Wild",
      "Eric Pollock"
     ],
     "a": [
      "Haidee Midgley",
      "Bin Lu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carolyn Mako",
      "Dhara Metla"
     ],
     "a": [
      "Yelena Grandel",
      "Kerry Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Barbara Taylor",
      "Jay Shah"
     ],
     "a": [
      "Gretchen Schneider",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lori Wild",
      "Bonny Mayerberg"
     ],
     "a": [
      "Haidee Midgley",
      "Tatiana Gaban"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carolyn Mako",
      "Barbara Taylor"
     ],
     "a": [
      "Yelena Grandel",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sean Kennedy",
      "Doug Dougherty"
     ],
     "a": [
      "Steve Ciocco",
      "Zach Derrick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eric Pollock",
      "Jay Shah"
     ],
     "a": [
      "Bin Lu",
      "Kerry Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lori Wild",
      "Sean Kennedy"
     ],
     "a": [
      "Haidee Midgley",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bonny Mayerberg",
      "Jay Shah"
     ],
     "a": [
      "Yelena Grandel",
      "Zach Derrick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Danika Johnston",
      "Eric Pollock"
     ],
     "a": [
      "Tatiana Gaban",
      "Bin Lu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Barbara Taylor",
      "Dhara Metla"
     ],
     "a": [
      "Sonia Tuhin",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lori Wild",
      "Bonny Mayerberg"
     ],
     "a": [
      "Haidee Midgley",
      "Tatiana Gaban"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Danika Johnston",
      "Carolyn Mako"
     ],
     "a": [
      "Sonia Tuhin",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sean Kennedy",
      "Eric Pollock"
     ],
     "a": [
      "Steve Ciocco",
      "Bin Lu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Doug Dougherty",
      "Dhara Metla"
     ],
     "a": [
      "Mikhail Grandel",
      "Kerry Jiang"
     ]
    }
   ],
   "subs": [
    "Carolyn Mako",
    "Zach Derrick"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Baby Got Backhand",
   "away": "Kiss My Ace",
   "time": "2026-07-29T19:30:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 535,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Adele Hackney",
      "Biju Samuel"
     ],
     "a": [
      "Esha Gajjar",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Li",
      "Erickson Clarke"
     ],
     "a": [
      "Jacqueline Ho",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Francesca Bogiatzis",
      "Scott Gardo"
     ],
     "a": [
      "Sarah Tantum",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Elizabeth Dailey",
      "Doug Johnson"
     ],
     "a": [
      "Carolyn King",
      "Kevin Ewing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Adele Hackney",
      "Crista Renauro"
     ],
     "a": [
      "Jacqueline Ho",
      "Sarah Tantum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan Li",
      "Elizabeth Dailey"
     ],
     "a": [
      "Esha Gajjar",
      "Lauren Ricks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Biju Samuel",
      "Erickson Clarke"
     ],
     "a": [
      "Ben Philip",
      "Sean Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Doug Johnson",
      "David Wisch"
     ],
     "a": [
      "Andrew Bush",
      "Jarid Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Susan Li",
      "Biju Samuel"
     ],
     "a": [
      "Jacqueline Ho",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adele Hackney",
      "Erickson Clarke"
     ],
     "a": [
      "Esha Gajjar",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Crista Renauro",
      "Scott Gardo"
     ],
     "a": [
      "Lauren Ricks",
      "Jarid Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Francesca Bogiatzis",
      "David Wisch"
     ],
     "a": [
      "Carolyn King",
      "Kevin Ewing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan Li",
      "Francesca Bogiatzis"
     ],
     "a": [
      "Sarah Tantum",
      "Carolyn King"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Crista Renauro",
      "Elizabeth Dailey"
     ],
     "a": [
      "Esha Gajjar",
      "Lauren Ricks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Biju Samuel",
      "Scott Gardo"
     ],
     "a": [
      "Ben Philip",
      "Andrew Bush"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Doug Johnson",
      "David Wisch"
     ],
     "a": [
      "Jarid Chan",
      "Kevin Ewing"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Crista Renauro",
      "Scott Gardo"
     ],
     "a": [
      "Lauren Ricks",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Adele Hackney",
      "Erickson Clarke"
     ],
     "a": [
      "Jacqueline Ho",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Francesca Bogiatzis",
      "David Wisch"
     ],
     "a": [
      "Sarah Tantum",
      "Kevin Ewing"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Elizabeth Dailey",
      "Doug Johnson"
     ],
     "a": [
      "Carolyn King",
      "Jarid Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Adele Hackney",
      "Susan Li"
     ],
     "a": [
      "Jacqueline Ho",
      "Esha Gajjar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Francesca Bogiatzis",
      "Elizabeth Dailey"
     ],
     "a": [
      "Sarah Tantum",
      "Carolyn King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Biju Samuel",
      "Scott Gardo"
     ],
     "a": [
      "Ben Philip",
      "Andrew Bush"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Erickson Clarke",
      "Doug Johnson"
     ],
     "a": [
      "Sean Yu",
      "Kevin Ewing"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Adele Hackney",
      "Biju Samuel"
     ],
     "a": [
      "Jacqueline Ho",
      "Ben Philip"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan Li",
      "Doug Johnson"
     ],
     "a": [
      "Sarah Tantum",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Crista Renauro",
      "Erickson Clarke"
     ],
     "a": [
      "Esha Gajjar",
      "Sean Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Elizabeth Dailey",
      "David Wisch"
     ],
     "a": [
      "Lauren Ricks",
      "Jarid Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Adele Hackney",
      "Susan Li"
     ],
     "a": [
      "Jacqueline Ho",
      "Esha Gajjar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Crista Renauro",
      "Francesca Bogiatzis"
     ],
     "a": [
      "Lauren Ricks",
      "Carolyn King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Biju Samuel",
      "Erickson Clarke"
     ],
     "a": [
      "Ben Philip",
      "Sean Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Scott Gardo",
      "David Wisch"
     ],
     "a": [
      "Jarid Chan",
      "Kevin Ewing"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "Dink Responsibly",
   "away": "Baby Got Backhand",
   "time": "2026-08-05T19:30:00",
   "complete": true,
   "homePoints": 574,
   "awayPoints": 598,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thania Padova",
      "Bin Lu"
     ],
     "a": [
      "Adele Hackney",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Steve Ciocco"
     ],
     "a": [
      "Crista Renauro",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Yelena Grandel",
      "Mikhail Grandel"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sonia Tuhin",
      "Rommel Santos"
     ],
     "a": [
      "Laura Clarke",
      "David Wisch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Thania Padova",
      "Lanz Santos"
     ],
     "a": [
      "Crista Renauro",
      "Francesca Bogiatzis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Sonia Tuhin"
     ],
     "a": [
      "Adele Hackney",
      "Susan Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bin Lu",
      "Steve Ciocco"
     ],
     "a": [
      "Erickson Clarke",
      "Doug Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Rommel Santos",
      "Kerry Jiang"
     ],
     "a": [
      "Biju Samuel",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Haidee Midgley",
      "Bin Lu"
     ],
     "a": [
      "Crista Renauro",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Thania Padova",
      "Steve Ciocco"
     ],
     "a": [
      "Adele Hackney",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lanz Santos",
      "Mikhail Grandel"
     ],
     "a": [
      "Susan Li",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yelena Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Laura Clarke",
      "David Wisch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Haidee Midgley",
      "Yelena Grandel"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Laura Clarke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Lanz Santos",
      "Sonia Tuhin"
     ],
     "a": [
      "Adele Hackney",
      "Susan Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bin Lu",
      "Mikhail Grandel"
     ],
     "a": [
      "Erickson Clarke",
      "Biju Samuel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rommel Santos",
      "Kerry Jiang"
     ],
     "a": [
      "Scott Gardo",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lanz Santos",
      "Mikhail Grandel"
     ],
     "a": [
      "Susan Li",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thania Padova",
      "Steve Ciocco"
     ],
     "a": [
      "Crista Renauro",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Yelena Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Francesca Bogiatzis",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sonia Tuhin",
      "Rommel Santos"
     ],
     "a": [
      "Laura Clarke",
      "Scott Gardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Thania Padova",
      "Haidee Midgley"
     ],
     "a": [
      "Crista Renauro",
      "Adele Hackney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Yelena Grandel",
      "Sonia Tuhin"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Bin Lu",
      "Mikhail Grandel"
     ],
     "a": [
      "Erickson Clarke",
      "Biju Samuel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Steve Ciocco",
      "Rommel Santos"
     ],
     "a": [
      "Doug Johnson",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Thania Padova",
      "Bin Lu"
     ],
     "a": [
      "Crista Renauro",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Rommel Santos"
     ],
     "a": [
      "Francesca Bogiatzis",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lanz Santos",
      "Steve Ciocco"
     ],
     "a": [
      "Adele Hackney",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sonia Tuhin",
      "Kerry Jiang"
     ],
     "a": [
      "Susan Li",
      "Scott Gardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thania Padova",
      "Haidee Midgley"
     ],
     "a": [
      "Crista Renauro",
      "Adele Hackney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lanz Santos",
      "Yelena Grandel"
     ],
     "a": [
      "Susan Li",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bin Lu",
      "Steve Ciocco"
     ],
     "a": [
      "Erickson Clarke",
      "Doug Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mikhail Grandel",
      "Kerry Jiang"
     ],
     "a": [
      "Scott Gardo",
      "David Wisch"
     ]
    }
   ],
   "subs": [
    "Thania Padova"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Kiss My Ace",
   "away": "Court Jesters",
   "time": "2026-08-05T19:30:00",
   "complete": true,
   "homePoints": 538,
   "awayPoints": 656,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Eric Tran"
     ],
     "a": [
      "Carolyn Mako",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sarah Tantum",
      "Sean Yu"
     ],
     "a": [
      "Lori Wild",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carolyn King",
      "Kevin Ewing"
     ],
     "a": [
      "Danika Johnston",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Esha Gajjar",
      "Jarid Chan"
     ],
     "a": [
      "Brenda Weckerly",
      "Jay Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Tricia Burdo"
     ],
     "a": [
      "Lori Wild",
      "Danika Johnston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Esha Gajjar"
     ],
     "a": [
      "Carolyn Mako",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eric Tran",
      "Sean Yu"
     ],
     "a": [
      "Sean Kennedy",
      "Shan Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jarid Chan",
      "Andrew Bush"
     ],
     "a": [
      "Eric Pollock",
      "Sibi Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Eric Tran"
     ],
     "a": [
      "Lori Wild",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lauren Ricks",
      "Sean Yu"
     ],
     "a": [
      "Carolyn Mako",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Kevin Ewing"
     ],
     "a": [
      "Bonny Mayerberg",
      "Sibi Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carolyn King",
      "Andrew Bush"
     ],
     "a": [
      "Brenda Weckerly",
      "Jay Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Carolyn King"
     ],
     "a": [
      "Danika Johnston",
      "Brenda Weckerly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Esha Gajjar"
     ],
     "a": [
      "Carolyn Mako",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Eric Tran",
      "Kevin Ewing"
     ],
     "a": [
      "Sean Kennedy",
      "Eric Pollock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jarid Chan",
      "Andrew Bush"
     ],
     "a": [
      "Sibi Thomas",
      "Jay Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tricia Burdo",
      "Kevin Ewing"
     ],
     "a": [
      "Bonny Mayerberg",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Sean Yu"
     ],
     "a": [
      "Lori Wild",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carolyn King",
      "Andrew Bush"
     ],
     "a": [
      "Danika Johnston",
      "Jay Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Esha Gajjar",
      "Jarid Chan"
     ],
     "a": [
      "Brenda Weckerly",
      "Sibi Thomas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Sarah Tantum"
     ],
     "a": [
      "Lori Wild",
      "Carolyn Mako"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carolyn King",
      "Esha Gajjar"
     ],
     "a": [
      "Danika Johnston",
      "Brenda Weckerly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Tran",
      "Kevin Ewing"
     ],
     "a": [
      "Sean Kennedy",
      "Eric Pollock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sean Yu",
      "Jarid Chan"
     ],
     "a": [
      "Shan Jiang",
      "Jay Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Eric Tran"
     ],
     "a": [
      "Lori Wild",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Sarah Tantum",
      "Jarid Chan"
     ],
     "a": [
      "Danika Johnston",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Sean Yu"
     ],
     "a": [
      "Carolyn Mako",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Esha Gajjar",
      "Andrew Bush"
     ],
     "a": [
      "Bonny Mayerberg",
      "Sibi Thomas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Sarah Tantum"
     ],
     "a": [
      "Lori Wild",
      "Carolyn Mako"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Carolyn King"
     ],
     "a": [
      "Bonny Mayerberg",
      "Brenda Weckerly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Tran",
      "Sean Yu"
     ],
     "a": [
      "Sean Kennedy",
      "Shan Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kevin Ewing",
      "Andrew Bush"
     ],
     "a": [
      "Sibi Thomas",
      "Jay Shah"
     ]
    }
   ],
   "subs": [
    "Brenda Weckerly",
    "Carolyn Mako"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Baby Got Backhand",
   "away": "Court Jesters",
   "time": "2026-08-12T19:30:00",
   "complete": true,
   "homePoints": 614,
   "awayPoints": 630,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Francesca Bogiatzis",
      "Erickson Clarke"
     ],
     "a": [
      "Sheree Ross",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Li",
      "Biju Samuel"
     ],
     "a": [
      "Lori Wild",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Doug Johnson"
     ],
     "a": [
      "Carolyn Mako",
      "Sibi Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Laura Clarke",
      "Scott Gardo"
     ],
     "a": [
      "Barbara Taylor",
      "Jay Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Francesca Bogiatzis",
      "Crista Renauro"
     ],
     "a": [
      "Lori Wild",
      "Carolyn Mako"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan Li",
      "Laura Clarke"
     ],
     "a": [
      "Sheree Ross",
      "Danika Johnston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Erickson Clarke",
      "Biju Samuel"
     ],
     "a": [
      "Shan Jiang",
      "Sean Kennedy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Scott Gardo",
      "David Wisch"
     ],
     "a": [
      "Sibi Thomas",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Li",
      "Erickson Clarke"
     ],
     "a": [
      "Lori Wild",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Francesca Bogiatzis",
      "Biju Samuel"
     ],
     "a": [
      "Sheree Ross",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Crista Renauro",
      "Doug Johnson"
     ],
     "a": [
      "Danika Johnston",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "David Wisch"
     ],
     "a": [
      "Barbara Taylor",
      "Jay Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susan Li",
      "Elizabeth Dailey"
     ],
     "a": [
      "Carolyn Mako",
      "Barbara Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Crista Renauro",
      "Laura Clarke"
     ],
     "a": [
      "Sheree Ross",
      "Danika Johnston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Erickson Clarke",
      "Doug Johnson"
     ],
     "a": [
      "Shan Jiang",
      "Sibi Thomas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Scott Gardo",
      "David Wisch"
     ],
     "a": [
      "Eric Pollock",
      "Jay Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Crista Renauro",
      "Doug Johnson"
     ],
     "a": [
      "Danika Johnston",
      "Sibi Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Francesca Bogiatzis",
      "Biju Samuel"
     ],
     "a": [
      "Lori Wild",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Elizabeth Dailey",
      "David Wisch"
     ],
     "a": [
      "Carolyn Mako",
      "Jay Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Clarke",
      "Scott Gardo"
     ],
     "a": [
      "Barbara Taylor",
      "Eric Pollock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Francesca Bogiatzis",
      "Susan Li"
     ],
     "a": [
      "Lori Wild",
      "Sheree Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Laura Clarke"
     ],
     "a": [
      "Carolyn Mako",
      "Barbara Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Erickson Clarke",
      "Doug Johnson"
     ],
     "a": [
      "Shan Jiang",
      "Sibi Thomas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Biju Samuel",
      "Scott Gardo"
     ],
     "a": [
      "Sean Kennedy",
      "Jay Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Francesca Bogiatzis",
      "Erickson Clarke"
     ],
     "a": [
      "Lori Wild",
      "Shan Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Li",
      "Scott Gardo"
     ],
     "a": [
      "Carolyn Mako",
      "Sibi Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Crista Renauro",
      "Biju Samuel"
     ],
     "a": [
      "Sheree Ross",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Laura Clarke",
      "David Wisch"
     ],
     "a": [
      "Danika Johnston",
      "Eric Pollock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Francesca Bogiatzis",
      "Susan Li"
     ],
     "a": [
      "Lori Wild",
      "Sheree Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Crista Renauro",
      "Elizabeth Dailey"
     ],
     "a": [
      "Danika Johnston",
      "Barbara Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Erickson Clarke",
      "Biju Samuel"
     ],
     "a": [
      "Shan Jiang",
      "Sean Kennedy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Doug Johnson",
      "David Wisch"
     ],
     "a": [
      "Eric Pollock",
      "Jay Shah"
     ]
    }
   ],
   "subs": [
    "Sheree Ross",
    "Carolyn Mako"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Kiss My Ace",
   "away": "Dink Responsibly",
   "time": "2026-08-12T19:30:00",
   "complete": true,
   "homePoints": 564,
   "awayPoints": 629,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jacqueline Ho",
      "Ben Philip"
     ],
     "a": [
      "Haidee Midgley",
      "Bin Lu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lauren Ricks",
      "Andrew Bush"
     ],
     "a": [
      "Lanz Santos",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Jarid Chan"
     ],
     "a": [
      "Sonia Tuhin",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tricia Burdo",
      "Eric Tran"
     ],
     "a": [
      "Gretchen Schneider",
      "Kerry Jiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jacqueline Ho",
      "Tricia Burdo"
     ],
     "a": [
      "Lanz Santos",
      "Sonia Tuhin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Sarah Tantum"
     ],
     "a": [
      "Haidee Midgley",
      "Yelena Grandel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ben Philip",
      "Andrew Bush"
     ],
     "a": [
      "Bin Lu",
      "Steve Ciocco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eric Tran",
      "Kevin Ewing"
     ],
     "a": [
      "Mikhail Grandel",
      "Michael Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lauren Ricks",
      "Ben Philip"
     ],
     "a": [
      "Lanz Santos",
      "Bin Lu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jacqueline Ho",
      "Andrew Bush"
     ],
     "a": [
      "Haidee Midgley",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Sarah Tantum",
      "Jarid Chan"
     ],
     "a": [
      "Yelena Grandel",
      "Michael Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Kevin Ewing"
     ],
     "a": [
      "Gretchen Schneider",
      "Kerry Jiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jacqueline Ho",
      "Lauren Ricks"
     ],
     "a": [
      "Lanz Santos",
      "Yelena Grandel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tricia Burdo",
      "Sarah Tantum"
     ],
     "a": [
      "Sonia Tuhin",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrew Bush",
      "Jarid Chan"
     ],
     "a": [
      "Steve Ciocco",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eric Tran",
      "Kevin Ewing"
     ],
     "a": [
      "Kerry Jiang",
      "Michael Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Ben Philip"
     ],
     "a": [
      "Haidee Midgley",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jacqueline Ho",
      "Jarid Chan"
     ],
     "a": [
      "Yelena Grandel",
      "Bin Lu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Kevin Ewing"
     ],
     "a": [
      "Sonia Tuhin",
      "Kerry Jiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Tantum",
      "Eric Tran"
     ],
     "a": [
      "Gretchen Schneider",
      "Michael Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jacqueline Ho",
      "Lauren Ricks"
     ],
     "a": [
      "Haidee Midgley",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tricia Burdo",
      "Sarah Tantum"
     ],
     "a": [
      "Sonia Tuhin",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ben Philip",
      "Jarid Chan"
     ],
     "a": [
      "Steve Ciocco",
      "Kerry Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrew Bush",
      "Eric Tran"
     ],
     "a": [
      "Bin Lu",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jacqueline Ho",
      "Ben Philip"
     ],
     "a": [
      "Lanz Santos",
      "Steve Ciocco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Andrew Bush"
     ],
     "a": [
      "Haidee Midgley",
      "Bin Lu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tricia Burdo",
      "Eric Tran"
     ],
     "a": [
      "Yelena Grandel",
      "Mikhail Grandel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Kevin Ewing"
     ],
     "a": [
      "Sonia Tuhin",
      "Michael Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jacqueline Ho",
      "Tricia Burdo"
     ],
     "a": [
      "Haidee Midgley",
      "Yelena Grandel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lauren Ricks",
      "Sarah Tantum"
     ],
     "a": [
      "Lanz Santos",
      "Gretchen Schneider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ben Philip",
      "Andrew Bush"
     ],
     "a": [
      "Bin Lu",
      "Steve Ciocco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jarid Chan",
      "Kevin Ewing"
     ],
     "a": [
      "Kerry Jiang",
      "Michael Smith"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 8,
   "home": "Kiss My Ace",
   "away": "Baby Got Backhand",
   "time": "2026-08-19T19:30:00",
   "complete": true,
   "homePoints": 515,
   "awayPoints": 641,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Andrew Bush"
     ],
     "a": [
      "Crista Renauro",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sarah Tantum",
      "Eric Tran"
     ],
     "a": [
      "Susan Li",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carolyn King",
      "Matt Becker"
     ],
     "a": [
      "Elizabeth Dailey",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lauren Ricks",
      "Jarid Chan"
     ],
     "a": [
      "Laura Clarke",
      "Scott Gardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Sarah Tantum"
     ],
     "a": [
      "Crista Renauro",
      "Susan Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Carolyn King"
     ],
     "a": [
      "Elizabeth Dailey",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrew Bush",
      "Matt Becker"
     ],
     "a": [
      "Erickson Clarke",
      "Doug Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eric Tran",
      "Jarid Chan"
     ],
     "a": [
      "Biju Samuel",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Andrew Bush"
     ],
     "a": [
      "Susan Li",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tricia Burdo",
      "Eric Tran"
     ],
     "a": [
      "Elizabeth Dailey",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Matt Becker"
     ],
     "a": [
      "Crista Renauro",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carolyn King",
      "Jarid Chan"
     ],
     "a": [
      "Laura Clarke",
      "Scott Gardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Lauren Ricks"
     ],
     "a": [
      "Susan Li",
      "Laura Clarke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Carolyn King"
     ],
     "a": [
      "Crista Renauro",
      "Elizabeth Dailey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrew Bush",
      "Eric Tran"
     ],
     "a": [
      "Erickson Clarke",
      "Biju Samuel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matt Becker",
      "Jarid Chan"
     ],
     "a": [
      "Scott Gardo",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tricia Burdo",
      "Eric Tran"
     ],
     "a": [
      "Crista Renauro",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Andrew Bush"
     ],
     "a": [
      "Susan Li",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sarah Tantum",
      "Matt Becker"
     ],
     "a": [
      "Elizabeth Dailey",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Carolyn King",
      "Jarid Chan"
     ],
     "a": [
      "Laura Clarke",
      "David Wisch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Sarah Tantum"
     ],
     "a": [
      "Crista Renauro",
      "Susan Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Carolyn King"
     ],
     "a": [
      "Elizabeth Dailey",
      "Laura Clarke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrew Bush",
      "Eric Tran"
     ],
     "a": [
      "Erickson Clarke",
      "Doug Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Matt Becker",
      "Jarid Chan"
     ],
     "a": [
      "Scott Gardo",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Andrew Bush"
     ],
     "a": [
      "Crista Renauro",
      "Erickson Clarke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lauren Ricks",
      "Eric Tran"
     ],
     "a": [
      "Elizabeth Dailey",
      "Doug Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Jarid Chan"
     ],
     "a": [
      "Susan Li",
      "Biju Samuel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Carolyn King",
      "Matt Becker"
     ],
     "a": [
      "Laura Clarke",
      "David Wisch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tricia Burdo",
      "Lauren Ricks"
     ],
     "a": [
      "Susan Li",
      "Laura Clarke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Tantum",
      "Carolyn King"
     ],
     "a": [
      "Crista Renauro",
      "Elizabeth Dailey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrew Bush",
      "Matt Becker"
     ],
     "a": [
      "Doug Johnson",
      "Scott Gardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Eric Tran",
      "Jarid Chan"
     ],
     "a": [
      "Erickson Clarke",
      "Biju Samuel"
     ]
    }
   ],
   "subs": [
    "Matt Becker"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Dink Responsibly",
   "away": "Court Jesters",
   "time": "2026-08-19T19:30:00",
   "complete": true,
   "homePoints": 660,
   "awayPoints": 567,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Thania Padova",
      "Bin Lu"
     ],
     "a": [
      "Sheree Ross",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tatiana Gaban",
      "Steve Ciocco"
     ],
     "a": [
      "Barbara Taylor",
      "Charles Buzad"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Lanz Santos",
      "Rommel Santos"
     ],
     "a": [
      "Danika Johnston",
      "Dhara Metla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Yelena Grandel",
      "Michael Smith"
     ],
     "a": [
      "Brenda Weckerly",
      "John Romeo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Thania Padova",
      "Tatiana Gaban"
     ],
     "a": [
      "Sheree Ross",
      "Barbara Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lanz Santos",
      "Sonia Tuhin"
     ],
     "a": [
      "Brenda Weckerly",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Steve Ciocco",
      "Rommel Santos"
     ],
     "a": [
      "Sean Kennedy",
      "John Romeo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Bin Lu",
      "Mikhail Grandel"
     ],
     "a": [
      "Charles Buzad",
      "Dhara Metla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thania Padova",
      "Steve Ciocco"
     ],
     "a": [
      "Sheree Ross",
      "Charles Buzad"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tatiana Gaban",
      "Bin Lu"
     ],
     "a": [
      "Barbara Taylor",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sonia Tuhin",
      "Mikhail Grandel"
     ],
     "a": [
      "Danika Johnston",
      "Dhara Metla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Yelena Grandel",
      "Michael Smith"
     ],
     "a": [
      "Bonny Mayerberg",
      "John Romeo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tatiana Gaban",
      "Lanz Santos"
     ],
     "a": [
      "Barbara Taylor",
      "Danika Johnston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yelena Grandel",
      "Sonia Tuhin"
     ],
     "a": [
      "Brenda Weckerly",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Steve Ciocco",
      "Mikhail Grandel"
     ],
     "a": [
      "Sean Kennedy",
      "Charles Buzad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 21,
     "h": [
      "Rommel Santos",
      "Michael Smith"
     ],
     "a": [
      "John Romeo",
      "Dhara Metla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lanz Santos",
      "Bin Lu"
     ],
     "a": [
      "Sheree Ross",
      "Charles Buzad"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Thania Padova",
      "Mikhail Grandel"
     ],
     "a": [
      "Danika Johnston",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Yelena Grandel",
      "Rommel Santos"
     ],
     "a": [
      "Bonny Mayerberg",
      "John Romeo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sonia Tuhin",
      "Michael Smith"
     ],
     "a": [
      "Brenda Weckerly",
      "Dhara Metla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tatiana Gaban",
      "Yelena Grandel"
     ],
     "a": [
      "Sheree Ross",
      "Danika Johnston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Thania Padova",
      "Lanz Santos"
     ],
     "a": [
      "Barbara Taylor",
      "Brenda Weckerly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Bin Lu",
      "Steve Ciocco"
     ],
     "a": [
      "Sean Kennedy",
      "Charles Buzad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rommel Santos",
      "Michael Smith"
     ],
     "a": [
      "John Romeo",
      "Dhara Metla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Tatiana Gaban",
      "Steve Ciocco"
     ],
     "a": [
      "Sheree Ross",
      "Sean Kennedy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thania Padova",
      "Bin Lu"
     ],
     "a": [
      "Barbara Taylor",
      "Charles Buzad"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lanz Santos",
      "Mikhail Grandel"
     ],
     "a": [
      "Brenda Weckerly",
      "John Romeo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sonia Tuhin",
      "Rommel Santos"
     ],
     "a": [
      "Bonny Mayerberg",
      "Dhara Metla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Thania Padova",
      "Tatiana Gaban"
     ],
     "a": [
      "Sheree Ross",
      "Barbara Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yelena Grandel",
      "Sonia Tuhin"
     ],
     "a": [
      "Danika Johnston",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bin Lu",
      "Mikhail Grandel"
     ],
     "a": [
      "Sean Kennedy",
      "John Romeo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steve Ciocco",
      "Michael Smith"
     ],
     "a": [
      "Charles Buzad",
      "Dhara Metla"
     ]
    }
   ],
   "subs": [
    "Brenda Weckerly",
    "Sheree Ross",
    "John Romeo",
    "Charles Buzad",
    "Thania Padova"
   ]
  }
 ],
 "playoffs": [],
 "meta": {
  "matchesPlayed": 16,
  "weeks": "1-8",
  "totalPlayers": 61,
  "ratingHistoryWeeks": [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8
  ],
  "divisionSlug": "fb4a73a2",
  "hasPlayoffs": false,
  "typicalDay": "Wednesdays",
  "detailFile": "detail-fb4a73a2.js",
  "clubName": "Dill Dinkers - Hatboro",
  "divisionName": "3.25 - 3.75",
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
  window.CPL_DATASETS["fb4a73a2"] = DATA;
})();
