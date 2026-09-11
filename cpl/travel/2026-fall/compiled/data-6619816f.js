(function () {
  const DATA = {
 "players": [
  {
   "name": "Paula Ro",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 12,
   "losses": 0,
   "pointsWon": 252,
   "totalPointsAgainst": 186,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 0,
   "playerId": "27908231-74bb-4956-adc4-5429e16e55ea",
   "winPct": 100,
   "diff": 66,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 3.2,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Joshua Ahn",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 93,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "fff3fe71-d4a6-4103-9290-0ef57035471c",
   "winPct": 100,
   "diff": 33,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 3.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Marina Cozac",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 292,
   "totalPointsAgainst": 182,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 92.9,
   "diff": 110,
   "ppg": 20.9,
   "leagueRank": 2,
   "rating": 4.3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.5,
   "playerId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181"
  },
  {
   "name": "Kenoa Tio",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 250,
   "totalPointsAgainst": 191,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 91.7,
   "diff": 59,
   "ppg": 20.8,
   "leagueRank": 4,
   "rating": 1.7,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.5,
   "playerId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "name": "Kaylyn Swankoski",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 290,
   "totalPointsAgainst": 208,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 85.7,
   "diff": 82,
   "ppg": 20.7,
   "leagueRank": 5,
   "rating": 2.5,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.6,
   "playerId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "name": "Varun Prakash",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 288,
   "totalPointsAgainst": 230,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 58,
   "ppg": 20.6,
   "leagueRank": 8,
   "rating": 2.5,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "name": "Jenna Irwin",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 100,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 45,
   "ppg": 20.7,
   "leagueRank": 9,
   "rating": 3.3,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "name": "Jonah Fliegelman",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 108,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 37,
   "ppg": 20.7,
   "leagueRank": 6,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.2,
   "playerId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8"
  },
  {
   "name": "Chad Durkin",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 139,
   "totalPointsAgainst": 102,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 37,
   "ppg": 19.9,
   "leagueRank": 20,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.6,
   "playerId": "54ed1c79-aaa0-486d-851b-d5a4db375b94"
  },
  {
   "name": "Hruday Vemparala",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 142,
   "totalPointsAgainst": 109,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 33,
   "ppg": 20.3,
   "leagueRank": 21,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.4,
   "playerId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "name": "Meghan Mediratta",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 120,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 25,
   "ppg": 20.7,
   "leagueRank": 23,
   "rating": 0.8,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.1,
   "playerId": "abc80b43-6769-4254-ae9a-b4b63b06de1d"
  },
  {
   "name": "Rayna Baizman",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 95,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 29,
   "ppg": 20.7,
   "leagueRank": 10,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": -1.1,
   "playerId": "108620c9-1cbb-4ea0-846c-bc781f1decea"
  },
  {
   "name": "Rachel Berger",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 244,
   "totalPointsAgainst": 219,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 25,
   "ppg": 20.3,
   "leagueRank": 15,
   "rating": 1.2,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "name": "Conor Landrigan",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 121,
   "totalPointsAgainst": 102,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 19,
   "ppg": 20.2,
   "leagueRank": 14,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "name": "Jordan Denish",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 10,
   "ppg": 20.5,
   "leagueRank": 29,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "8ae25144-966d-4de1-9cb3-513f7f217170"
  },
  {
   "name": "Dylan Ashbach",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 282,
   "totalPointsAgainst": 218,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 78.6,
   "diff": 64,
   "ppg": 20.1,
   "leagueRank": 16,
   "rating": 0.9,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.7,
   "playerId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "name": "Teresa Wang",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 285,
   "totalPointsAgainst": 238,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 78.6,
   "diff": 47,
   "ppg": 20.4,
   "leagueRank": 12,
   "rating": 1.6,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1"
  },
  {
   "name": "Michaela Pierznik",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 261,
   "totalPointsAgainst": 233,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 76.9,
   "diff": 28,
   "ppg": 20.1,
   "leagueRank": 25,
   "rating": 0.6,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "name": "Yuki Kim",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 21,
   "wins": 16,
   "losses": 5,
   "pointsWon": 420,
   "totalPointsAgainst": 350,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 1,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 76.2,
   "diff": 70,
   "ppg": 20,
   "leagueRank": 13,
   "rating": 3.3,
   "ratingGames": 21,
   "confidence": 75,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "name": "Yoyo Shen",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 402,
   "totalPointsAgainst": 340,
   "mixedWins": 10,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 62,
   "ppg": 20.1,
   "leagueRank": 19,
   "rating": 1.5,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "name": "Emily Babinsky",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 396,
   "totalPointsAgainst": 360,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 8,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 36,
   "ppg": 19.8,
   "leagueRank": 27,
   "rating": 0.5,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "name": "Hannah Nussbaum",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 234,
   "totalPointsAgainst": 209,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 25,
   "ppg": 19.5,
   "leagueRank": 7,
   "rating": 1.5,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "name": "Anita Buggins",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 11,
   "losses": 4,
   "pointsWon": 298,
   "totalPointsAgainst": 274,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 73.3,
   "diff": 24,
   "ppg": 19.9,
   "leagueRank": 24,
   "rating": 1.5,
   "ratingGames": 15,
   "confidence": 69,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "name": "Kerrin Maurer",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 444,
   "totalPointsAgainst": 369,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 72.7,
   "diff": 75,
   "ppg": 20.2,
   "leagueRank": 18,
   "rating": 2.4,
   "ratingGames": 22,
   "confidence": 78,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e"
  },
  {
   "name": "Maanav Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 446,
   "totalPointsAgainst": 396,
   "mixedWins": 9,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 72.7,
   "diff": 50,
   "ppg": 20.3,
   "leagueRank": 22,
   "rating": 2.6,
   "ratingGames": 22,
   "confidence": 75,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "0a1270b0-26f6-4328-85bc-bf3f329a746e"
  },
  {
   "name": "William Hayes",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 143,
   "totalPointsAgainst": 109,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 34,
   "ppg": 20.4,
   "leagueRank": 35,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.4,
   "playerId": "4dfed1a1-5375-446c-98bc-69402e70e1d5"
  },
  {
   "name": "Chris Long",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 15,
   "losses": 6,
   "pointsWon": 422,
   "totalPointsAgainst": 396,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 71.4,
   "diff": 26,
   "ppg": 20.1,
   "leagueRank": 30,
   "rating": 1.5,
   "ratingGames": 21,
   "confidence": 77,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "name": "Alyssa Boyle",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 140,
   "totalPointsAgainst": 119,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 21,
   "ppg": 20,
   "leagueRank": 49,
   "rating": 0.8,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.8,
   "playerId": "22123177-1eb2-4285-bc92-f75799e175dd"
  },
  {
   "name": "Johny Mario",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 136,
   "totalPointsAgainst": 117,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 19,
   "ppg": 19.4,
   "leagueRank": 33,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -1.7,
   "playerId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "name": "Alexander Tong",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 258,
   "totalPointsAgainst": 227,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 69.2,
   "diff": 31,
   "ppg": 19.8,
   "leagueRank": 28,
   "rating": 2.7,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "name": "Andrew Wakefield",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 250,
   "totalPointsAgainst": 233,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 69.2,
   "diff": 17,
   "ppg": 19.2,
   "leagueRank": 11,
   "rating": 1.7,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "name": "Elysia Price",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 247,
   "totalPointsAgainst": 237,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 69.2,
   "diff": 10,
   "ppg": 19,
   "leagueRank": 41,
   "rating": 0.2,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "name": "Lou Frignito",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 322,
   "totalPointsAgainst": 242,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 68.8,
   "diff": 80,
   "ppg": 20.1,
   "leagueRank": 17,
   "rating": 2.9,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.2,
   "playerId": "1afca308-dca6-4828-946a-0ca6ad1b0c44"
  },
  {
   "name": "Gissel Escalante",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 296,
   "totalPointsAgainst": 263,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "63221cc8-e303-4675-8dde-4fc77e871627",
   "winPct": 66.7,
   "diff": 33,
   "ppg": 19.7,
   "leagueRank": 31,
   "rating": 2.3,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Cristi Landrigan",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 233,
   "totalPointsAgainst": 212,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 21,
   "ppg": 19.4,
   "leagueRank": 50,
   "rating": -0.9,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.9,
   "playerId": "1be028eb-1b92-4961-b508-fa0879c78017"
  },
  {
   "name": "Eric Lin",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 240,
   "totalPointsAgainst": 223,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 17,
   "ppg": 20,
   "leagueRank": 34,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "name": "Nathan Malhotra",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 102,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "98bd685a-3161-45fc-941f-3a8c9f4849cf",
   "winPct": 66.7,
   "diff": 17,
   "ppg": 19.8,
   "leagueRank": 42,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Amalia Ditrapani",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 115,
   "totalPointsAgainst": 102,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 13,
   "ppg": 19.2,
   "leagueRank": 56,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "32ac3308-4ddd-496b-8942-ca2422322c06"
  },
  {
   "name": "Robert Khalev",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 117,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 3,
   "ppg": 20,
   "leagueRank": 58,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "094c3b61-96e3-48c6-8172-10b7eaf528f4"
  },
  {
   "name": "Deepak Sunku",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 115,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "ce590106-6f19-43b7-8a91-4dc31d28eb31",
   "winPct": 66.7,
   "diff": 3,
   "ppg": 19.7,
   "leagueRank": 59,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Nick Meale",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 15,
   "losses": 8,
   "pointsWon": 451,
   "totalPointsAgainst": 394,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 65.2,
   "diff": 57,
   "ppg": 19.6,
   "leagueRank": 32,
   "rating": 1.7,
   "ratingGames": 23,
   "confidence": 78,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "name": "Taylor Hartman",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 274,
   "totalPointsAgainst": 259,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 15,
   "ppg": 19.6,
   "leagueRank": 39,
   "rating": 1.2,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "name": "Michelle Quach",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 276,
   "totalPointsAgainst": 262,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 14,
   "ppg": 19.7,
   "leagueRank": 43,
   "rating": 0.8,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "name": "Michael Li",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 14,
   "losses": 8,
   "pointsWon": 426,
   "totalPointsAgainst": 382,
   "mixedWins": 9,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 63.6,
   "diff": 44,
   "ppg": 19.4,
   "leagueRank": 36,
   "rating": 2.2,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "name": "Ally Yan",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 212,
   "totalPointsAgainst": 195,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 63.6,
   "diff": 17,
   "ppg": 19.3,
   "leagueRank": 38,
   "rating": 0.4,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "c4eafe22-4dce-47af-978a-5e4bd5afa11a"
  },
  {
   "name": "Jack Blumberg",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 162,
   "totalPointsAgainst": 140,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 62.5,
   "diff": 22,
   "ppg": 20.3,
   "leagueRank": 26,
   "rating": 1.7,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "name": "Ross Switkes",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 463,
   "totalPointsAgainst": 444,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 19,
   "ppg": 19.3,
   "leagueRank": 45,
   "rating": 1.2,
   "ratingGames": 24,
   "confidence": 79,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0,
   "playerId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "name": "Ruhi Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 457,
   "totalPointsAgainst": 439,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 62.5,
   "diff": 18,
   "ppg": 19,
   "leagueRank": 47,
   "rating": 1.4,
   "ratingGames": 24,
   "confidence": 78,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "name": "Jonah Karczmer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 157,
   "totalPointsAgainst": 141,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 16,
   "ppg": 19.6,
   "leagueRank": 40,
   "rating": 0.1,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "c33e6ff8-38a1-45ca-9abb-d05a7ae27079"
  },
  {
   "name": "Noelle Ramirez",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 153,
   "totalPointsAgainst": 140,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "f30428dd-bc5a-4535-94b3-b8779e958ada",
   "winPct": 62.5,
   "diff": 13,
   "ppg": 19.1,
   "leagueRank": 48,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 38,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Tin Wai Kwan",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 307,
   "totalPointsAgainst": 299,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 3,
   "playerId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "winPct": 62.5,
   "diff": 8,
   "ppg": 19.2,
   "leagueRank": 44,
   "rating": 1.1,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Katalina Wang",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 157,
   "totalPointsAgainst": 157,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "playerId": "2d602f38-7eda-4a7b-a3a2-98b40e443b79",
   "winPct": 62.5,
   "diff": 0,
   "ppg": 19.6,
   "leagueRank": 52,
   "rating": 0.1,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Zach Hollmann",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 419,
   "totalPointsAgainst": 384,
   "mixedWins": 8,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 61.9,
   "diff": 35,
   "ppg": 20,
   "leagueRank": 37,
   "rating": 1.5,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "name": "Shreyas Pani",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 399,
   "totalPointsAgainst": 373,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 61.9,
   "diff": 26,
   "ppg": 19,
   "leagueRank": 46,
   "rating": 1.6,
   "ratingGames": 21,
   "confidence": 77,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "name": "Lissa Eagles",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 12,
   "losses": 8,
   "pointsWon": 382,
   "totalPointsAgainst": 352,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 30,
   "ppg": 19.1,
   "leagueRank": 53,
   "rating": 0.3,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "name": "Joel Phillips",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 97,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 13,
   "ppg": 19.4,
   "leagueRank": 54,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.5,
   "playerId": "8f292eb8-a014-4618-9c0e-114c26463233"
  },
  {
   "name": "Alex Boory",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 93,
   "totalPointsAgainst": 90,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 3,
   "ppg": 18.6,
   "leagueRank": 110,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "name": "Patrick Ryan",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 14,
   "losses": 10,
   "pointsWon": 450,
   "totalPointsAgainst": 441,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 58.3,
   "diff": 9,
   "ppg": 18.8,
   "leagueRank": 55,
   "rating": 1,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0,
   "playerId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "name": "Danielle Bernero",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 226,
   "totalPointsAgainst": 233,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 58.3,
   "diff": -7,
   "ppg": 18.8,
   "leagueRank": 67,
   "rating": -1.3,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "317f260e-551b-4f91-ab92-71440e5f05be"
  },
  {
   "name": "Arianna Haresign",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 136,
   "totalPointsAgainst": 128,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 8,
   "ppg": 19.4,
   "leagueRank": 51,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "556f84fc-4f7c-4199-a104-6e906d71605c"
  },
  {
   "name": "Nathan Law",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 285,
   "totalPointsAgainst": 304,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 56.3,
   "diff": -19,
   "ppg": 17.8,
   "leagueRank": 78,
   "rating": -1.1,
   "ratingGames": 16,
   "confidence": 67,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "name": "Aurora Lewis",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 213,
   "totalPointsAgainst": 202,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": 11,
   "ppg": 19.4,
   "leagueRank": 57,
   "rating": -0.1,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.7,
   "playerId": "3fe06711-5561-47b8-ad95-382cd0bcff9a"
  },
  {
   "name": "Zoe Ousouljoglou",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 245,
   "totalPointsAgainst": 247,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 53.8,
   "diff": -2,
   "ppg": 18.8,
   "leagueRank": 61,
   "rating": 1.2,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1,
   "playerId": "269fe355-d2eb-41b8-9e92-a1438aec65e3"
  },
  {
   "name": "Caleb Perry-Abner",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 252,
   "totalPointsAgainst": 255,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 53.8,
   "diff": -3,
   "ppg": 19.4,
   "leagueRank": 69,
   "rating": -1,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "name": "Dilan Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 17,
   "wins": 9,
   "losses": 8,
   "pointsWon": 322,
   "totalPointsAgainst": 326,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 52.9,
   "diff": -4,
   "ppg": 18.9,
   "leagueRank": 66,
   "rating": -1,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "name": "Tess Fisher",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 117,
   "totalPointsAgainst": 102,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 15,
   "ppg": 19.5,
   "leagueRank": 62,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
  },
  {
   "name": "Zachary Lessner",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 225,
   "totalPointsAgainst": 213,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 12,
   "ppg": 18.8,
   "leagueRank": 70,
   "rating": -0.1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "name": "Charlotte Healey",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 226,
   "totalPointsAgainst": 218,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 8,
   "ppg": 18.8,
   "leagueRank": 72,
   "rating": -0.7,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "name": "Austin Williams",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 297,
   "totalPointsAgainst": 290,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 7,
   "ppg": 18.6,
   "leagueRank": 63,
   "rating": 0.6,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "name": "Ariana Rizvani",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 230,
   "totalPointsAgainst": 224,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 6,
   "ppg": 19.2,
   "leagueRank": 60,
   "rating": 0.5,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "1c7e9745-06f1-4486-9b14-5f4205128867"
  },
  {
   "name": "Bruno Casino",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 80,
   "totalPointsAgainst": 76,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 4,
   "ppg": 20,
   "leagueRank": 127,
   "rating": 2.1,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.4,
   "playerId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "name": "Ryan Furman",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 224,
   "totalPointsAgainst": 221,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "winPct": 50,
   "diff": 3,
   "ppg": 18.7,
   "leagueRank": 80,
   "rating": -0.8,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Elisangela Harrington",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 300,
   "totalPointsAgainst": 298,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 5,
   "playerId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "winPct": 50,
   "diff": 2,
   "ppg": 18.8,
   "leagueRank": 68,
   "rating": 0.3,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Jason Makarevic",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 267,
   "totalPointsAgainst": 267,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": 0,
   "ppg": 19.1,
   "leagueRank": 65,
   "rating": 0,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "name": "Nahla Bernhardt",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 228,
   "totalPointsAgainst": 229,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": -1,
   "ppg": 19,
   "leagueRank": 93,
   "rating": -1.7,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.6,
   "playerId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "name": "Eugene Zaslavsky",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 118,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb",
   "winPct": 50,
   "diff": -2,
   "ppg": 19.3,
   "leagueRank": 95,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Zach Bowe",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 111,
   "totalPointsAgainst": 114,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -3,
   "ppg": 18.5,
   "leagueRank": 77,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "name": "Manny Lai",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 153,
   "totalPointsAgainst": 159,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -6,
   "ppg": 19.1,
   "leagueRank": 76,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "name": "Lauren Mercado",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 109,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -8,
   "ppg": 18.2,
   "leagueRank": 104,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.1,
   "playerId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435"
  },
  {
   "name": "Damien Stahl",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 291,
   "totalPointsAgainst": 301,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -10,
   "ppg": 18.2,
   "leagueRank": 74,
   "rating": 0.3,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "name": "Matt Schall",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 22,
   "wins": 11,
   "losses": 11,
   "pointsWon": 391,
   "totalPointsAgainst": 407,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -16,
   "ppg": 17.8,
   "leagueRank": 84,
   "rating": -0.6,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "name": "Anthony Ursino",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 321,
   "totalPointsAgainst": 339,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -18,
   "ppg": 17.8,
   "leagueRank": 86,
   "rating": 0,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "1406ff1f-3597-4128-a629-7dfd1dfe1323"
  },
  {
   "name": "Joey Angelson",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 443,
   "totalPointsAgainst": 461,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": -18,
   "ppg": 18.5,
   "leagueRank": 75,
   "rating": 0.2,
   "ratingGames": 24,
   "confidence": 78,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "name": "Zach Hizer",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 272,
   "totalPointsAgainst": 279,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 46.7,
   "diff": -7,
   "ppg": 18.1,
   "leagueRank": 90,
   "rating": -0.6,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "name": "Chris Tabeling",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 275,
   "totalPointsAgainst": 291,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 46.7,
   "diff": -16,
   "ppg": 18.3,
   "leagueRank": 79,
   "rating": 0.9,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.3,
   "playerId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76"
  },
  {
   "name": "Chris Damato",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 245,
   "totalPointsAgainst": 250,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 46.2,
   "diff": -5,
   "ppg": 18.8,
   "leagueRank": 88,
   "rating": -0.9,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "name": "Robbie Oddy",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 11,
   "losses": 13,
   "pointsWon": 449,
   "totalPointsAgainst": 441,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 45.8,
   "diff": 8,
   "ppg": 18.7,
   "leagueRank": 73,
   "rating": 0.7,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0,
   "playerId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "name": "Anisha Malhotra",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 9,
   "losses": 11,
   "pointsWon": 390,
   "totalPointsAgainst": 376,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 45,
   "diff": 14,
   "ppg": 19.5,
   "leagueRank": 71,
   "rating": 0.4,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "2aa8b268-8c06-4453-9706-048009bf6af3"
  },
  {
   "name": "Sidd Pathare",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 9,
   "losses": 11,
   "pointsWon": 374,
   "totalPointsAgainst": 379,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 45,
   "diff": -5,
   "ppg": 18.7,
   "leagueRank": 89,
   "rating": -0.8,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "name": "Harriet Levin",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 337,
   "totalPointsAgainst": 349,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 44.4,
   "diff": -12,
   "ppg": 18.7,
   "leagueRank": 83,
   "rating": -0.5,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "name": "Richa Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 329,
   "totalPointsAgainst": 347,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 44.4,
   "diff": -18,
   "ppg": 18.3,
   "leagueRank": 94,
   "rating": 0.1,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "name": "Mickey Cook",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 305,
   "totalPointsAgainst": 303,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 43.8,
   "diff": 2,
   "ppg": 19.1,
   "leagueRank": 82,
   "rating": -0.4,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "name": "Eva Danieli",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 291,
   "totalPointsAgainst": 307,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 43.8,
   "diff": -16,
   "ppg": 18.2,
   "leagueRank": 98,
   "rating": -1.6,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.5,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "name": "Melissa Dardani",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 10,
   "losses": 13,
   "pointsWon": 420,
   "totalPointsAgainst": 433,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 43.5,
   "diff": -13,
   "ppg": 18.3,
   "leagueRank": 92,
   "rating": 0.1,
   "ratingGames": 23,
   "confidence": 79,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0,
   "playerId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "name": "Rachel Alfano",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 134,
   "totalPointsAgainst": 123,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": 11,
   "ppg": 19.1,
   "leagueRank": 107,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.4,
   "playerId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "name": "Annemarie Mccartney",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 135,
   "totalPointsAgainst": 135,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": 0,
   "ppg": 19.3,
   "leagueRank": 101,
   "rating": -0.1,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "name": "Suzi Battison",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 130,
   "totalPointsAgainst": 131,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -1,
   "ppg": 18.6,
   "leagueRank": 99,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.3,
   "playerId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "name": "Tyler Arsenault",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 136,
   "totalPointsAgainst": 141,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -5,
   "ppg": 19.4,
   "leagueRank": 87,
   "rating": -0.2,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "name": "Nick Dehmer",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 131,
   "totalPointsAgainst": 141,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -10,
   "ppg": 18.7,
   "leagueRank": 125,
   "rating": -0.2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.2,
   "playerId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "name": "Kevin Wysoczynski",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 215,
   "totalPointsAgainst": 222,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "f64f0cc2-6c82-4fe4-9992-747512700971",
   "winPct": 41.7,
   "diff": -7,
   "ppg": 17.9,
   "leagueRank": 105,
   "rating": -1.2,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Adam Beck",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 207,
   "totalPointsAgainst": 238,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": -31,
   "ppg": 17.3,
   "leagueRank": 100,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.7,
   "playerId": "7d836ecc-e553-4966-9c12-2dc698a545d0"
  },
  {
   "name": "Thomas Connolly",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 404,
   "totalPointsAgainst": 454,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": -50,
   "ppg": 16.8,
   "leagueRank": 123,
   "rating": -2,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "name": "Raneeta Sawhney-Rigby",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 97,
   "totalPointsAgainst": 92,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": 5,
   "ppg": 19.4,
   "leagueRank": 135,
   "rating": -0.2,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.8,
   "playerId": "8ee2191e-34c1-4f6b-b366-5a1bbc5bcb36"
  },
  {
   "name": "Daniel Gallegos",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 87,
   "totalPointsAgainst": 89,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -2,
   "ppg": 17.4,
   "leagueRank": 149,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.8,
   "playerId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "name": "Lynda Tomaru",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 179,
   "totalPointsAgainst": 189,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -10,
   "ppg": 17.9,
   "leagueRank": 102,
   "rating": -0.7,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e"
  },
  {
   "name": "Alex Abad",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 227,
   "totalPointsAgainst": 234,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 38.5,
   "diff": -7,
   "ppg": 17.5,
   "leagueRank": 113,
   "rating": 0.7,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.8,
   "playerId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "name": "Ken Velarde",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 8,
   "losses": 13,
   "pointsWon": 396,
   "totalPointsAgainst": 385,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 38.1,
   "diff": 11,
   "ppg": 18.9,
   "leagueRank": 91,
   "rating": 0.2,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "25aa47d0-76b8-48be-a5be-b1d33b423e82"
  },
  {
   "name": "Catherine Stewart",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 302,
   "totalPointsAgainst": 307,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": -5,
   "ppg": 18.9,
   "leagueRank": 96,
   "rating": 0.6,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "112622af-3d12-4dba-ad36-7601c8e6021c"
  },
  {
   "name": "Christine Sandella",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 146,
   "totalPointsAgainst": 152,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b",
   "winPct": 37.5,
   "diff": -6,
   "ppg": 18.3,
   "leagueRank": 103,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0
  },
  {
   "name": "Sheila Siu",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 143,
   "totalPointsAgainst": 151,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "25879a0b-5df5-4c12-9066-4aaaf4e6cbc0",
   "winPct": 37.5,
   "diff": -8,
   "ppg": 17.9,
   "leagueRank": 108,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Taylor Peracchio",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 140,
   "totalPointsAgainst": 153,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -13,
   "ppg": 17.5,
   "leagueRank": 114,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 38,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.2,
   "playerId": "4df44e08-a35c-4c4c-a311-861ef4d0897a"
  },
  {
   "name": "Chanda Mccoy",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 147,
   "totalPointsAgainst": 161,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "winPct": 37.5,
   "diff": -14,
   "ppg": 18.4,
   "leagueRank": 120,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Lilie Sen",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 144,
   "totalPointsAgainst": 159,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "winPct": 37.5,
   "diff": -15,
   "ppg": 18,
   "leagueRank": 112,
   "rating": -1,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Stacy Walkowitz",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 141,
   "totalPointsAgainst": 157,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -16,
   "ppg": 17.6,
   "leagueRank": 117,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "name": "Will Delaney",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 141,
   "totalPointsAgainst": 160,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -19,
   "ppg": 17.6,
   "leagueRank": 121,
   "rating": -2.2,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.9,
   "playerId": "a242cd39-8574-444a-99dc-95967faad87b"
  },
  {
   "name": "Mark Kilimnik",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 208,
   "totalPointsAgainst": 202,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 36.4,
   "diff": 6,
   "ppg": 18.9,
   "leagueRank": 97,
   "rating": 0.9,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "name": "Amy Yan",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 204,
   "totalPointsAgainst": 207,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 36.4,
   "diff": -3,
   "ppg": 18.5,
   "leagueRank": 109,
   "rating": -1.2,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "e121745d-7833-45f1-965b-67653bd4751e"
  },
  {
   "name": "Dipen Bhatt",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 198,
   "totalPointsAgainst": 211,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 36.4,
   "diff": -13,
   "ppg": 18,
   "leagueRank": 118,
   "rating": -0.6,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "name": "Kara Infante",
   "gender": "Female",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 8,
   "losses": 14,
   "pointsWon": 403,
   "totalPointsAgainst": 417,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 36.4,
   "diff": -14,
   "ppg": 18.3,
   "leagueRank": 111,
   "rating": -0.8,
   "ratingGames": 22,
   "confidence": 77,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "06edda3d-3a1f-4010-86fa-8ac767cd7079"
  },
  {
   "name": "Kelly Arvidson",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 8,
   "losses": 14,
   "pointsWon": 376,
   "totalPointsAgainst": 429,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 36.4,
   "diff": -53,
   "ppg": 17.1,
   "leagueRank": 132,
   "rating": -2.6,
   "ratingGames": 22,
   "confidence": 78,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "name": "Shashank Kamdar",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 262,
   "totalPointsAgainst": 251,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 35.7,
   "diff": 11,
   "ppg": 18.7,
   "leagueRank": 85,
   "rating": 1.1,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "name": "Brittany Hall",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 251,
   "totalPointsAgainst": 281,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 35.7,
   "diff": -30,
   "ppg": 17.9,
   "leagueRank": 116,
   "rating": 0,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "name": "William Lee",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 7,
   "losses": 13,
   "pointsWon": 337,
   "totalPointsAgainst": 390,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 35,
   "diff": -53,
   "ppg": 16.9,
   "leagueRank": 124,
   "rating": -0.4,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.2,
   "playerId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "name": "Ashwin Korde",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 111,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -6,
   "ppg": 18.5,
   "leagueRank": 148,
   "rating": -2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.4,
   "playerId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "name": "Stephen Conger",
   "gender": "Male",
   "team": "Jersey Devil",
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
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -8,
   "ppg": 17.8,
   "leagueRank": 136,
   "rating": -2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -1.4,
   "playerId": "24e70ef7-b98e-459e-8a19-19a2b66a054e"
  },
  {
   "name": "Aidan Jackson",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 6,
   "losses": 12,
   "pointsWon": 338,
   "totalPointsAgainst": 348,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 33.3,
   "diff": -10,
   "ppg": 18.8,
   "leagueRank": 106,
   "rating": 0,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "name": "Elliot Stevens",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 109,
   "totalPointsAgainst": 121,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -12,
   "ppg": 18.2,
   "leagueRank": 143,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -0.5,
   "playerId": "3c27afe7-2382-44c1-a50d-cf7326aa325a"
  },
  {
   "name": "Julia Sternberg",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 110,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -12,
   "ppg": 18.3,
   "leagueRank": 146,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.8,
   "playerId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "name": "Darren Johnson",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 110,
   "totalPointsAgainst": 122,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "00092e4b-b019-43ae-bfef-503e1fc6f657",
   "winPct": 33.3,
   "diff": -12,
   "ppg": 18.3,
   "leagueRank": 134,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Jen Vorel",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 215,
   "totalPointsAgainst": 228,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -13,
   "ppg": 17.9,
   "leagueRank": 122,
   "rating": -1.8,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "f9c1683f-9cc2-4b5d-aa29-f90e5102e687"
  },
  {
   "name": "Amanda Ksiezopolski",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 103,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17.2,
   "leagueRank": 152,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "name": "Sara Synn",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 102,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -17,
   "ppg": 17,
   "leagueRank": 155,
   "rating": -2.9,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90"
  },
  {
   "name": "Camrin Cronheim",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 277,
   "totalPointsAgainst": 295,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "playerId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "winPct": 33.3,
   "diff": -18,
   "ppg": 18.5,
   "leagueRank": 115,
   "rating": -0.1,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Kathleen Dougherty",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 99,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -21,
   "ppg": 16.5,
   "leagueRank": 154,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "name": "Andrew Bernard",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 205,
   "totalPointsAgainst": 230,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -25,
   "ppg": 17.1,
   "leagueRank": 138,
   "rating": -1.9,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "name": "Megan Harvey",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 204,
   "totalPointsAgainst": 235,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -31,
   "ppg": 17,
   "leagueRank": 130,
   "rating": -1.3,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161"
  },
  {
   "name": "Angela Luo",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 209,
   "totalPointsAgainst": 243,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -34,
   "ppg": 17.4,
   "leagueRank": 129,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "0cb538a5-0d5d-47a7-b854-38394ac9652f"
  },
  {
   "name": "Marcos Claros",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 197,
   "totalPointsAgainst": 235,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -38,
   "ppg": 16.4,
   "leagueRank": 142,
   "rating": -2.1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "839ee2ac-03d5-4fee-bc87-08709afae5f2"
  },
  {
   "name": "Jennifer Sanchez",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 228,
   "totalPointsAgainst": 256,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 30.8,
   "diff": -28,
   "ppg": 17.5,
   "leagueRank": 131,
   "rating": -1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d"
  },
  {
   "name": "Krysti Maronski-Neufeldt",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 136,
   "totalPointsAgainst": 136,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 28.6,
   "diff": 0,
   "ppg": 19.4,
   "leagueRank": 128,
   "rating": -0.1,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "29a7f562-a596-421f-a62d-33409169805d"
  },
  {
   "name": "Matthew Matro",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 130,
   "totalPointsAgainst": 142,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -12,
   "ppg": 18.6,
   "leagueRank": 133,
   "rating": -1.9,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "name": "Tom Laiso",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 242,
   "totalPointsAgainst": 279,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -37,
   "ppg": 17.3,
   "leagueRank": 140,
   "rating": -1.3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "13918154-3673-4dae-946a-2c2d4ac8863f"
  },
  {
   "name": "Anushk Gupta",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 236,
   "totalPointsAgainst": 279,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 28.6,
   "diff": -43,
   "ppg": 16.9,
   "leagueRank": 139,
   "rating": -1.1,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "1a851b17-0445-4807-b476-575fd261f774"
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 234,
   "totalPointsAgainst": 280,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -46,
   "ppg": 16.7,
   "leagueRank": 145,
   "rating": -2,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
  },
  {
   "name": "Julia Plein",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 166,
   "totalPointsAgainst": 214,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -48,
   "ppg": 15.1,
   "leagueRank": 150,
   "rating": -1.4,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.3,
   "playerId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "name": "Sebastian Ferrer",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 4,
   "losses": 11,
   "pointsWon": 268,
   "totalPointsAgainst": 291,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 26.7,
   "diff": -23,
   "ppg": 17.9,
   "leagueRank": 126,
   "rating": 0.7,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a"
  },
  {
   "name": "Ryan Rosen",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 4,
   "losses": 11,
   "pointsWon": 254,
   "totalPointsAgainst": 295,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 26.7,
   "diff": -41,
   "ppg": 16.9,
   "leagueRank": 137,
   "rating": -0.4,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.2,
   "playerId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "name": "Sarah Ross",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 5,
   "losses": 14,
   "pointsWon": 347,
   "totalPointsAgainst": 366,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 26.3,
   "diff": -19,
   "ppg": 18.3,
   "leagueRank": 119,
   "rating": 0.1,
   "ratingGames": 19,
   "confidence": 75,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "261d14c5-288e-4349-a3ed-50bad4b620c1"
  },
  {
   "name": "Hany Ibrahim",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 63,
   "totalPointsAgainst": 80,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "winPct": 25,
   "diff": -17,
   "ppg": 15.8,
   "leagueRank": 166,
   "rating": -1.5,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Sarah Kline",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 200,
   "totalPointsAgainst": 238,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -38,
   "ppg": 16.7,
   "leagueRank": 147,
   "rating": -1.6,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "name": "Sophia Kaufmann",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 194,
   "totalPointsAgainst": 242,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -48,
   "ppg": 16.2,
   "leagueRank": 151,
   "rating": -2.2,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
  },
  {
   "name": "Robert Schimony",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 5,
   "losses": 15,
   "pointsWon": 291,
   "totalPointsAgainst": 400,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -109,
   "ppg": 14.6,
   "leagueRank": 157,
   "rating": -3.9,
   "ratingGames": 20,
   "confidence": 76,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0,
   "playerId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "name": "Nam Barsh",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 231,
   "totalPointsAgainst": 261,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 23.1,
   "diff": -30,
   "ppg": 17.8,
   "leagueRank": 141,
   "rating": -1.4,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "name": "Erika Richards",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 4,
   "losses": 15,
   "pointsWon": 301,
   "totalPointsAgainst": 387,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 21.1,
   "diff": -86,
   "ppg": 15.8,
   "leagueRank": 153,
   "rating": -2.1,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "065e606f-3722-4434-8848-28e4d10ccabd"
  },
  {
   "name": "Claudya Elefante",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 20,
   "wins": 4,
   "losses": 16,
   "pointsWon": 350,
   "totalPointsAgainst": 409,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 20,
   "diff": -59,
   "ppg": 17.5,
   "leagueRank": 144,
   "rating": -1.3,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "name": "Keith Shedlock",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 106,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -17,
   "ppg": 17.7,
   "leagueRank": 160,
   "rating": -3.1,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.5,
   "playerId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "name": "Vince Abate",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 104,
   "totalPointsAgainst": 121,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "8257200c-7448-4527-92df-436d7bb18cac",
   "winPct": 16.7,
   "diff": -17,
   "ppg": 17.3,
   "leagueRank": 158,
   "rating": -2.9,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -1.6
  },
  {
   "name": "Morgan Fishman",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 199,
   "totalPointsAgainst": 244,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -45,
   "ppg": 16.6,
   "leagueRank": 156,
   "rating": -1.8,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1,
   "playerId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 111,
   "totalPointsAgainst": 163,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "winPct": 12.5,
   "diff": -52,
   "ppg": 13.9,
   "leagueRank": 162,
   "rating": -1.5,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Vaughn Mcclelland",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 111,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "c33f3ff1-2c81-4630-8980-64fa03a7b102",
   "winPct": 12.5,
   "diff": -55,
   "ppg": 13.9,
   "leagueRank": 163,
   "rating": -2.4,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Alyssa Tartaglia",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 188,
   "totalPointsAgainst": 268,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 7.7,
   "diff": -80,
   "ppg": 14.5,
   "leagueRank": 161,
   "rating": -2.5,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.4,
   "playerId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "name": "Zyril Carilo",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 237,
   "totalPointsAgainst": 292,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 7.1,
   "diff": -55,
   "ppg": 16.9,
   "leagueRank": 159,
   "rating": -2.1,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1,
   "playerId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "name": "Allison Tarnoff",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
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
   "playerId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510"
  },
  {
   "name": "Ali Husain",
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
   "leagueRank": 177,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "09d614ca-a9b2-44b6-a402-51046c6883af"
  },
  {
   "name": "Clayton Schmucker",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
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
   "playerId": "0be72348-4a00-413e-bf40-df6824c3cca3"
  },
  {
   "name": "Maeve Mcgowan",
   "gender": "Female",
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
   "leagueRank": 180,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c"
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
   "leagueRank": 184,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "369dca37-2d15-4559-96d1-26a78df236a1"
  },
  {
   "name": "Samantha Adler",
   "gender": "Female",
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
   "leagueRank": 169,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "49ef6026-5d4e-4686-801a-4a47fde8b597"
  },
  {
   "name": "Helen Liu",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
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
   "playerId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131"
  },
  {
   "name": "Matthew Chen",
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
   "leagueRank": 172,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
  },
  {
   "name": "Steven Fernandez",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
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
   "playerId": "7a9bc90f-45eb-410a-a56b-a1b7c9a8145c"
  },
  {
   "name": "Kishan Shah",
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
   "leagueRank": 187,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "name": "Margaret Robb",
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
   "leagueRank": 183,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "name": "Hector Irizarry",
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
   "leagueRank": 178,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "name": "Jacob Yandoli",
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
   "leagueRank": 190,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "name": "Dustin Rabinowitz",
   "gender": "Male",
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
   "leagueRank": 182,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "name": "Noah Goding",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 63,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -21,
   "ppg": 15.8,
   "leagueRank": 167,
   "rating": -1,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.6,
   "playerId": "80138d68-a74a-4f8c-aea1-7d31e682efa8"
  },
  {
   "name": "Zachery Corey",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 61,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -23,
   "ppg": 15.3,
   "leagueRank": 168,
   "rating": -3.1,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "4cc3e75e-499c-4c58-9146-d0d46fa15f71"
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
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
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -31,
   "ppg": 15.8,
   "leagueRank": 165,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Adrienne Butrymowicz",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 116,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -52,
   "ppg": 14.5,
   "leagueRank": 164,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 2,
   "playerId": "279df046-e022-4adf-a5ea-4072a29d9622"
  }
 ],
 "teams": [
  {
   "name": "Dill Dinkers Hatboro The Factory",
   "w": 2,
   "l": 0,
   "pf": 1329,
   "pa": 1060,
   "gw": 51,
   "gl": 13,
   "diff": 269,
   "gameDiff": 38,
   "power": 1.3,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     27,
     5
    ],
    "male": [
     13,
     3
    ],
    "female": [
     11,
     5
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 3,
   "l": 0,
   "pf": 1929,
   "pa": 1787,
   "gw": 58,
   "gl": 38,
   "diff": 142,
   "gameDiff": 20,
   "power": 0.8,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     27,
     21
    ],
    "male": [
     14,
     10
    ],
    "female": [
     17,
     7
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 2,
   "l": 1,
   "pf": 1933,
   "pa": 1796,
   "gw": 59,
   "gl": 37,
   "diff": 137,
   "gameDiff": 22,
   "power": 0.9,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     31,
     17
    ],
    "male": [
     10,
     14
    ],
    "female": [
     18,
     6
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 2,
   "l": 1,
   "pf": 1869,
   "pa": 1818,
   "gw": 47,
   "gl": 49,
   "diff": 51,
   "gameDiff": -2,
   "power": 0.7,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     24,
     24
    ],
    "male": [
     11,
     13
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 2,
   "l": 1,
   "pf": 1787,
   "pa": 1872,
   "gw": 43,
   "gl": 53,
   "diff": -85,
   "gameDiff": -10,
   "power": -0.3,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     24,
     24
    ],
    "male": [
     13,
     11
    ],
    "female": [
     6,
     18
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 1,
   "l": 1,
   "pf": 1278,
   "pa": 1261,
   "gw": 36,
   "gl": 28,
   "diff": 17,
   "gameDiff": 8,
   "power": -0.4,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     17,
     15
    ],
    "male": [
     6,
     10
    ],
    "female": [
     13,
     3
    ]
   }
  },
  {
   "name": "Bounce Philly",
   "w": 1,
   "l": 1,
   "pf": 1256,
   "pa": 1204,
   "gw": 34,
   "gl": 30,
   "diff": 52,
   "gameDiff": 4,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     16,
     16
    ],
    "male": [
     10,
     6
    ],
    "female": [
     8,
     8
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 1,
   "l": 1,
   "pf": 1193,
   "pa": 1278,
   "gw": 28,
   "gl": 36,
   "diff": -85,
   "gameDiff": -8,
   "power": -0.2,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     14,
     18
    ],
    "male": [
     7,
     9
    ],
    "female": [
     7,
     9
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 1,
   "l": 2,
   "pf": 1842,
   "pa": 1880,
   "gw": 49,
   "gl": 47,
   "diff": -38,
   "gameDiff": 2,
   "power": 0.2,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     26,
     22
    ],
    "male": [
     16,
     8
    ],
    "female": [
     7,
     17
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 1,
   "l": 2,
   "pf": 1802,
   "pa": 1893,
   "gw": 42,
   "gl": 54,
   "diff": -91,
   "gameDiff": -12,
   "power": -0.4,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     21,
     27
    ],
    "male": [
     9,
     15
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 0,
   "l": 3,
   "pf": 1795,
   "pa": 1860,
   "gw": 37,
   "gl": 59,
   "diff": -65,
   "gameDiff": -22,
   "power": -0.4,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     15,
     33
    ],
    "male": [
     10,
     14
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro Aces",
   "w": 0,
   "l": 3,
   "pf": 1648,
   "pa": 1952,
   "gw": 28,
   "gl": 68,
   "diff": -304,
   "gameDiff": -40,
   "power": -1.3,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     14,
     34
    ],
    "male": [
     9,
     15
    ],
    "female": [
     5,
     19
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Yuki Kim",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 4.7,
   "avgExpected": -0.4,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Thomas Connolly",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 2.1,
   "avgActual": 2.2,
   "avgExpected": -1.3,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Sebastian Ferrer",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 2.7,
   "avgExpected": -1.4,
   "aId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 5.3,
   "avgExpected": 1.3,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Ally Yan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 4.3,
   "avgExpected": 0.6,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "c4eafe22-4dce-47af-978a-5e4bd5afa11a"
  },
  {
   "a": "Kelly Arvidson",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 3.3,
   "avgExpected": -0.5,
   "aId": "c053f5d6-16e1-4847-b27b-49fe41f367c6",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Chris Long",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 2.7,
   "avgExpected": -0.8,
   "aId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Zach Hollmann",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 5.3,
   "avgExpected": 2.1,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Mickey Cook",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 2.3,
   "avgExpected": -1,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Lou Frignito",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 7.5,
   "avgExpected": 4.7,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Adam Beck",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": -0.7,
   "avgExpected": -4,
   "aId": "7d836ecc-e553-4966-9c12-2dc698a545d0",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "Anita Buggins",
   "b": "Nathan Law",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3,
   "avgExpected": 0.3,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "a": "Kara Infante",
   "b": "Ariana Rizvani",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 2,
   "avgExpected": -0.1,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "1c7e9745-06f1-4486-9b14-5f4205128867"
  },
  {
   "a": "Marina Cozac",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 8.7,
   "avgExpected": 6.3,
   "aId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181",
   "bId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "a": "Ken Velarde",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 2.5,
   "avgExpected": 0.5,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Patrick Ryan",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 3.8,
   "avgExpected": 2.4,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Ariana Rizvani",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.7,
   "avgExpected": 0.7,
   "aId": "1c7e9745-06f1-4486-9b14-5f4205128867",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "a": "Yoyo Shen",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 5.4,
   "avgExpected": 3.9,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.6,
   "avgExpected": 3.1,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Eric Lin",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 3.7,
   "avgExpected": 1.8,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1.7,
   "avgExpected": -0.2,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Nathan Law",
   "b": "Damien Stahl",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 0.3,
   "avgExpected": -1.1,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5,
   "avgExpected": 3.8,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Maanav Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.5,
   "avgExpected": 1.5,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 0.8,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Kara Infante",
   "b": "Aurora Lewis",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 3,
   "avgExpected": 1.6,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "3fe06711-5561-47b8-ad95-382cd0bcff9a"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -1.1,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Shreyas Pani",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.7,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Danielle Bernero",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 3.7,
   "avgExpected": 2.4,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Chris Tabeling",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.6,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Ken Velarde",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 1.2,
   "avgExpected": 0.5,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "a": "Maanav Shah",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.3,
   "avgExpected": 2.4,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Catherine Stewart",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -1,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Robbie Oddy",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.5,
   "avgExpected": 0.8,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.3,
   "avgExpected": 3.6,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Sidd Pathare",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1.5,
   "avgExpected": -2,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Teresa Wang",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5.7,
   "avgExpected": 4.9,
   "aId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Brittany Hall",
   "b": "Damien Stahl",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0.7,
   "avgExpected": -0.1,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Kelly Arvidson",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.6,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Erika Richards",
   "b": "William Lee",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -3.3,
   "avgExpected": -3.6,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Erika Richards",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -3.3,
   "avgExpected": -3.8,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Anushk Gupta",
   "b": "Sarah Ross",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.5,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "261d14c5-288e-4349-a3ed-50bad4b620c1"
  },
  {
   "a": "Shreyas Pani",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.9,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Gissel Escalante",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1.1,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "63221cc8-e303-4675-8dde-4fc77e871627"
  },
  {
   "a": "Harriet Levin",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.7,
   "avgExpected": 1.4,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Ryan Rosen",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -3,
   "avgExpected": -3.3,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Sarah Ross",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0,
   "avgActual": -1.8,
   "avgExpected": -1.7,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Lou Frignito",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 8,
   "avgExpected": 8.1,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Brittany Hall",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2.3,
   "avgExpected": -2.2,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "a": "Patrick Ryan",
   "b": "Kelly Arvidson",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -1.2,
   "avgExpected": -1.1,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Kenoa Tio",
   "b": "Marina Cozac",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 5.3,
   "avgExpected": 5.5,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181"
  },
  {
   "a": "Rachel Berger",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 2.7,
   "avgExpected": 2.9,
   "aId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Mickey Cook",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -0.2,
   "avgExpected": 0.1,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Sidd Pathare",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -0.7,
   "avgExpected": -0.2,
   "aId": "a73f249d-c1c9-4516-bc79-e9732581f098",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Marina Cozac",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 8.3,
   "avgExpected": 8.8,
   "aId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.4,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Michelle Quach",
   "b": "Caleb Perry-Abner",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.3,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "a": "Danielle Bernero",
   "b": "Michelle Quach",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -0.3,
   "avgExpected": 0.1,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Mickey Cook",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1.7,
   "avgExpected": 2.4,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "a": "Zach Hollmann",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.8,
   "avgExpected": 2.3,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Gissel Escalante",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.8,
   "aId": "63221cc8-e303-4675-8dde-4fc77e871627",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Richa Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -2.4,
   "avgExpected": -1.8,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Anthony Ursino",
   "b": "Sophia Kaufmann",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -5,
   "avgExpected": -4.2,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
  },
  {
   "a": "Varun Prakash",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 2.7,
   "avgExpected": 3.4,
   "aId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab",
   "bId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "a": "Ryan Furman",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.6,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Taylor Hartman",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1.3,
   "avgExpected": 2.1,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Tom Laiso",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2.2,
   "avgExpected": -1.6,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Kara Infante",
   "b": "Marcos Claros",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -4.5,
   "avgExpected": -3.7,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "839ee2ac-03d5-4fee-bc87-08709afae5f2"
  },
  {
   "a": "Megan Harvey",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -2.9,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Teresa Wang",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.5,
   "avgActual": 2.7,
   "avgExpected": 3.9,
   "aId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Anita Buggins",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 0,
   "avgExpected": 1.2,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "a": "Thomas Connolly",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3,
   "avgExpected": -1.9,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Richa Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.3,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Thomas Connolly",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2.3,
   "avgExpected": -0.6,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Maanav Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 2,
   "avgExpected": 3.3,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Morgan Fishman",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -4.7,
   "avgExpected": -3.4,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Kara Infante",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.3,
   "avgExpected": 1.2,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Adam Beck",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3.5,
   "avgExpected": -2.2,
   "aId": "7d836ecc-e553-4966-9c12-2dc698a545d0",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -4,
   "avgExpected": -2.4,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Anthony Ursino",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -5,
   "avgExpected": -3.4,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Angela Luo",
   "b": "Sophia Kaufmann",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -5.2,
   "avgExpected": -3.7,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
  },
  {
   "a": "Yuki Kim",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 1.3,
   "avgExpected": 2.7,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Susan Ackley",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3.5,
   "avgExpected": -1.6,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -3.7,
   "avgExpected": -1.5,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Matt Schall",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -1.7,
   "avgExpected": 0.4,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Chris Damato",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -2,
   "avgExpected": 0.4,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Thomas Connolly",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -4.3,
   "avgExpected": -1.9,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Austin Williams",
   "b": "Jen Vorel",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9",
   "bId": "f9c1683f-9cc2-4b5d-aa29-f90e5102e687"
  },
  {
   "a": "Catherine Stewart",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -1.7,
   "avgExpected": 0.6,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Yoyo Shen",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 0.7,
   "avgExpected": 3.1,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "William Lee",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -6,
   "avgExpected": -3.4,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -1.3,
   "avgExpected": 1.3,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Gissel Escalante",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1.7,
   "avgExpected": 0.6,
   "aId": "63221cc8-e303-4675-8dde-4fc77e871627",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Ryan Furman",
   "b": "Caleb Perry-Abner",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -3.2,
   "avgExpected": -0.8,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "a": "Kelly Arvidson",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -4.4,
   "avgExpected": -2.1,
   "aId": "c053f5d6-16e1-4847-b27b-49fe41f367c6",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Patrick Ryan",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -3,
   "avgExpected": 0.6,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Robbie Oddy",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -1.7,
   "avgExpected": 2.1,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -5.7,
   "avgExpected": -0.9,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Robert Schimony",
   "b": "Julia Plein",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -12,
   "avgExpected": -7,
   "aId": "b85c2074-a149-4382-8563-e1ff5b5d70bc",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Flemington",
   "away": "Pickle House",
   "time": "2026-08-26T19:00:00",
   "complete": true,
   "homePoints": 553,
   "awayPoints": 644,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Kerrin Maurer",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Ross Switkes"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
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
      "Emily Babinsky",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Kelly Arvidson"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suzi Battison",
      "Melissa Dardani"
     ],
     "a": [
      "Emily Babinsky",
      "Yoyo Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
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
     "as": 18,
     "h": [
      "Patrick Ryan",
      "Ross Switkes"
     ],
     "a": [
      "Mickey Cook",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ],
     "a": [
      "Kerrin Maurer",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Robbie Oddy"
     ],
     "a": [
      "Emily Babinsky",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Melissa Dardani",
      "Thomas Connolly"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Ross Switkes"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzi Battison",
      "Melissa Dardani"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Kelly Arvidson"
     ],
     "a": [
      "Emily Babinsky",
      "Yoyo Shen"
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
      "Mickey Cook",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patrick Ryan",
      "Ross Switkes"
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
     "as": 15,
     "h": [
      "Melissa Dardani",
      "Robbie Oddy"
     ],
     "a": [
      "Emily Babinsky",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Kerrin Maurer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Patrick Ryan"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Lissa Eagles",
      "Deepak Sunku"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Aimee Castellano"
     ],
     "a": [
      "Yoyo Shen",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Patrick Ryan"
     ],
     "a": [
      "Michael Li",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Thomas Connolly",
      "Ross Switkes"
     ],
     "a": [
      "Deepak Sunku",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Yoyo Shen",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Aimee Castellano",
      "Patrick Ryan"
     ],
     "a": [
      "Emily Babinsky",
      "Mickey Cook"
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
      "Lissa Eagles",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Kerrin Maurer",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ],
     "a": [
      "Lissa Eagles",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Aimee Castellano"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Ross Switkes"
     ],
     "a": [
      "Deepak Sunku",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Patrick Ryan"
     ],
     "a": [
      "Zach Hollmann",
      "Michael Li"
     ]
    }
   ],
   "subs": [
    "Deepak Sunku"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Monroe",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-08-26T19:00:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 639,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Chris Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Shreyas Pani"
     ],
     "a": [
      "Paula Ro",
      "Sidd Pathare"
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
      "Gissel Escalante",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Ally Yan",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Richa Shah",
      "Ruhi Shah"
     ],
     "a": [
      "Gissel Escalante",
      "Paula Ro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sophia Kaufmann",
      "Angela Luo"
     ],
     "a": [
      "Anisha Malhotra",
      "Amy Yan"
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
      "Chris Long",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Lin",
      "Shreyas Pani"
     ],
     "a": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Paula Ro",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Chris Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Amy Yan",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Angela Luo",
      "Eric Lin"
     ],
     "a": [
      "Ally Yan",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Gissel Escalante",
      "Paula Ro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Angela Luo"
     ],
     "a": [
      "Anisha Malhotra",
      "Ally Yan"
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
      "Chris Long",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shreyas Pani",
      "Anthony Ursino"
     ],
     "a": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Gissel Escalante",
      "Chris Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sophia Kaufmann",
      "Maanav Shah"
     ],
     "a": [
      "Ally Yan",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Ruhi Shah",
      "Eric Lin"
     ],
     "a": [
      "Anisha Malhotra",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Angela Luo",
      "Anthony Ursino"
     ],
     "a": [
      "Amy Yan",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Gissel Escalante",
      "Amy Yan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richa Shah",
      "Angela Luo"
     ],
     "a": [
      "Paula Ro",
      "Ally Yan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Maanav Shah",
      "Eric Lin"
     ],
     "a": [
      "Chris Long",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shreyas Pani",
      "Dilan Shah"
     ],
     "a": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Gissel Escalante",
      "Chris Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Eric Lin"
     ],
     "a": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Anthony Ursino"
     ],
     "a": [
      "Ally Yan",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Morgan Fishman",
      "Shreyas Pani"
     ],
     "a": [
      "Amy Yan",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Sophia Kaufmann"
     ],
     "a": [
      "Gissel Escalante",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Angela Luo"
     ],
     "a": [
      "Paula Ro",
      "Amy Yan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Maanav Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Chris Long",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eric Lin",
      "Shreyas Pani"
     ],
     "a": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ]
    }
   ],
   "subs": [
    "Paula Ro",
    "Gissel Escalante",
    "Camrin Cronheim"
   ]
  },
  {
   "result": null,
   "week": 1,
   "home": "ACE Moorestown",
   "away": "Bounce Philly",
   "time": "2026-08-26T19:30:00",
   "complete": false
  },
  {
   "result": "away",
   "week": 1,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 574,
   "awayPoints": 676,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Darren Johnson"
     ],
     "a": [
      "Marina Cozac",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Chris Tabeling"
     ],
     "a": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harriet Levin",
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
     "as": 24,
     "h": [
      "Megan Harvey",
      "Shashank Kamdar"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Harriet Levin"
     ],
     "a": [
      "Hannah Nussbaum",
      "Cristi Landrigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Nam Barsh"
     ],
     "a": [
      "Marina Cozac",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Nick Meale"
     ],
     "a": [
      "Conor Landrigan",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Chris Tabeling",
      "Darren Johnson"
     ],
     "a": [
      "Dylan Ashbach",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Nam Barsh",
      "Darren Johnson"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Zyril Carilo"
     ],
     "a": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Shashank Kamdar"
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
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Marina Cozac",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Megan Harvey"
     ],
     "a": [
      "Hannah Nussbaum",
      "Marina Cozac"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Sarah Kline"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Zyril Carilo"
     ],
     "a": [
      "Varun Prakash",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Dylan Ashbach",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Chris Tabeling"
     ],
     "a": [
      "Marina Cozac",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Shashank Kamdar"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Harriet Levin",
      "Darren Johnson"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nam Barsh",
      "Harriet Levin"
     ],
     "a": [
      "Cristi Landrigan",
      "Hannah Nussbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yuki Kim",
      "Sarah Kline"
     ],
     "a": [
      "Marina Cozac",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Darren Johnson"
     ],
     "a": [
      "Conor Landrigan",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Andrew Wakefield",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Chris Tabeling"
     ],
     "a": [
      "Marina Cozac",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Zyril Carilo"
     ],
     "a": [
      "Cristi Landrigan",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Shashank Kamdar"
     ],
     "a": [
      "Nahla Bernhardt",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Darren Johnson"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Varun Prakash"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nam Barsh",
      "Megan Harvey"
     ],
     "a": [
      "Cristi Landrigan",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Harriet Levin"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Nick Meale"
     ],
     "a": [
      "Dylan Ashbach",
      "Varun Prakash"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Chris Tabeling"
     ],
     "a": [
      "Kenoa Tio",
      "Andrew Wakefield"
     ]
    }
   ],
   "subs": [
    "Darren Johnson"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Home Court",
   "away": "Jersey Pickleball Club",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 630,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lynda Tomaru",
      "Elliot Stevens"
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
     "as": 9,
     "h": [
      "Sheila Siu",
      "Ken Velarde"
     ],
     "a": [
      "Eva Danieli",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Peracchio",
      "Daniel Gallegos"
     ],
     "a": [
      "Noelle Ramirez",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Tin Wai Kwan",
      "Zach Hizer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kara Infante",
      "Ariana Rizvani"
     ],
     "a": [
      "Tin Wai Kwan",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Peracchio",
      "Lynda Tomaru"
     ],
     "a": [
      "Eva Danieli",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ken Velarde",
      "Aidan Jackson"
     ],
     "a": [
      "Zach Hizer",
      "Andrew Bernard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Zachery Corey",
      "Elliot Stevens"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sheila Siu",
      "Aidan Jackson"
     ],
     "a": [
      "Eva Danieli",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Daniel Gallegos"
     ],
     "a": [
      "Noelle Ramirez",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Marcos Claros"
     ],
     "a": [
      "Tin Wai Kwan",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lynda Tomaru",
      "Elliot Stevens"
     ],
     "a": [
      "Joey Angelson",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kara Infante",
      "Ariana Rizvani"
     ],
     "a": [
      "Joey Angelson",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Peracchio",
      "Lynda Tomaru"
     ],
     "a": [
      "Eva Danieli",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Daniel Gallegos",
      "Ken Velarde"
     ],
     "a": [
      "Zach Hizer",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Aidan Jackson",
      "Elliot Stevens"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Aidan Jackson"
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
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Zachery Corey"
     ],
     "a": [
      "Noelle Ramirez",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Ken Velarde"
     ],
     "a": [
      "Eva Danieli",
      "Zach Hizer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ariana Rizvani",
      "Sheila Siu"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Kara Infante"
     ],
     "a": [
      "Tin Wai Kwan",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Daniel Gallegos",
      "Ken Velarde"
     ],
     "a": [
      "Andrew Bernard",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elliot Stevens",
      "Zachery Corey"
     ],
     "a": [
      "Zach Hizer",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lynda Tomaru",
      "Daniel Gallegos"
     ],
     "a": [
      "Eva Danieli",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kara Infante",
      "Aidan Jackson"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Zachery Corey"
     ],
     "a": [
      "Noelle Ramirez",
      "Zach Hizer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Marcos Claros"
     ],
     "a": [
      "Joey Angelson",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Sheila Siu"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Taylor Peracchio",
      "Kara Infante"
     ],
     "a": [
      "Tin Wai Kwan",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marcos Claros",
      "Elliot Stevens"
     ],
     "a": [
      "Matt Schall",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ken Velarde",
      "Aidan Jackson"
     ],
     "a": [
      "Robert Khalev",
      "Kevin Wysoczynski"
     ]
    }
   ],
   "subs": [
    "Tin Wai Kwan",
    "Noelle Ramirez",
    "Kevin Wysoczynski",
    "Sheila Siu"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Jersey Devil",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 605,
   "awayPoints": 648,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Will Delaney"
     ],
     "a": [
      "Michelle Quach",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Rachel Berger",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Robert Schimony"
     ],
     "a": [
      "Danielle Bernero",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Ryan Rosen"
     ],
     "a": [
      "Michaela Pierznik",
      "Ryan Furman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Sarah Ross"
     ],
     "a": [
      "Danielle Bernero",
      "Rachel Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Erika Richards",
      "Lilie Sen"
     ],
     "a": [
      "Michelle Quach",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Schimony",
      "William Lee"
     ],
     "a": [
      "Vince Abate",
      "Johny Mario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ryan Rosen",
      "Will Delaney"
     ],
     "a": [
      "Ryan Furman",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Will Delaney"
     ],
     "a": [
      "Rachel Berger",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Claudya Elefante",
      "Ryan Rosen"
     ],
     "a": [
      "Michelle Quach",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lilie Sen",
      "William Lee"
     ],
     "a": [
      "Lauren Mercado",
      "Vince Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Erika Richards",
      "Robert Schimony"
     ],
     "a": [
      "Michaela Pierznik",
      "Ryan Furman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Claudya Elefante",
      "Lilie Sen"
     ],
     "a": [
      "Michelle Quach",
      "Danielle Bernero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Erika Richards",
      "Sarah Ross"
     ],
     "a": [
      "Lauren Mercado",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ryan Rosen",
      "Robert Schimony"
     ],
     "a": [
      "Johny Mario",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Will Delaney",
      "William Lee"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Ryan Furman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Michelle Quach",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Ross",
      "Ryan Rosen"
     ],
     "a": [
      "Danielle Bernero",
      "Vince Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lilie Sen",
      "Will Delaney"
     ],
     "a": [
      "Michaela Pierznik",
      "Stephen Conger"
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
      "Rachel Berger",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Sarah Ross"
     ],
     "a": [
      "Rachel Berger",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Erika Richards",
      "Lilie Sen"
     ],
     "a": [
      "Lauren Mercado",
      "Michelle Quach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ryan Rosen",
      "Will Delaney"
     ],
     "a": [
      "Vince Abate",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "William Lee",
      "Robert Schimony"
     ],
     "a": [
      "Johny Mario",
      "Ryan Furman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Robert Schimony"
     ],
     "a": [
      "Danielle Bernero",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sarah Ross",
      "William Lee"
     ],
     "a": [
      "Lauren Mercado",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Erika Richards",
      "Ryan Rosen"
     ],
     "a": [
      "Rachel Berger",
      "Ryan Furman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Will Delaney"
     ],
     "a": [
      "Michaela Pierznik",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Lilie Sen"
     ],
     "a": [
      "Danielle Bernero",
      "Michelle Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Erika Richards"
     ],
     "a": [
      "Michaela Pierznik",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Ryan Rosen",
      "William Lee"
     ],
     "a": [
      "Johny Mario",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Robert Schimony",
      "Will Delaney"
     ],
     "a": [
      "Vince Abate",
      "Stephen Conger"
     ]
    }
   ],
   "subs": [
    "Ryan Furman",
    "Lilie Sen",
    "Vince Abate"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickle House",
   "time": "2026-09-02T19:00:00",
   "complete": true,
   "homePoints": 627,
   "awayPoints": 621,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Jason Makarevic"
     ],
     "a": [
      "Taylor Hartman",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
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
      "Ally Yan",
      "Sidd Pathare"
     ],
     "a": [
      "Emily Babinsky",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anisha Malhotra",
      "Chris Long"
     ],
     "a": [
      "Yoyo Shen",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gissel Escalante",
      "Anisha Malhotra"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Yan",
      "Zoe Ousouljoglou"
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
     "as": 16,
     "h": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ],
     "a": [
      "Zach Hollmann",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Long",
      "Joshua Ahn"
     ],
     "a": [
      "Michael Li",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zoe Ousouljoglou",
      "Chris Long"
     ],
     "a": [
      "Taylor Hartman",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Jason Makarevic"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amy Yan",
      "Joshua Ahn"
     ],
     "a": [
      "Lissa Eagles",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ally Yan",
      "Camrin Cronheim"
     ],
     "a": [
      "Emily Babinsky",
      "Mickey Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ally Yan",
      "Anisha Malhotra"
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
      "Gissel Escalante",
      "Zoe Ousouljoglou"
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
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Zach Hollmann",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joshua Ahn",
      "Sidd Pathare"
     ],
     "a": [
      "Mickey Cook",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Anisha Malhotra",
      "Camrin Cronheim"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gissel Escalante",
      "Chris Long"
     ],
     "a": [
      "Kerrin Maurer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Amy Yan",
      "Jason Makarevic"
     ],
     "a": [
      "Emily Babinsky",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ally Yan",
      "Joshua Ahn"
     ],
     "a": [
      "Lissa Eagles",
      "Mickey Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Amy Yan"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Anisha Malhotra"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Sidd Pathare"
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
     "as": 16,
     "h": [
      "Chris Long",
      "Joshua Ahn"
     ],
     "a": [
      "Zach Hollmann",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anisha Malhotra",
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
     "hs": 15,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Chris Long"
     ],
     "a": [
      "Kerrin Maurer",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Sidd Pathare"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ally Yan",
      "Jason Makarevic"
     ],
     "a": [
      "Lissa Eagles",
      "Mickey Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anisha Malhotra",
      "Amy Yan"
     ],
     "a": [
      "Yoyo Shen",
      "Emily Babinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gissel Escalante",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Long",
      "Jason Makarevic"
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
      "Joshua Ahn",
      "Sidd Pathare"
     ],
     "a": [
      "Zach Hollmann",
      "Dipen Bhatt"
     ]
    }
   ],
   "subs": [
    "Joshua Ahn",
    "Gissel Escalante",
    "Camrin Cronheim"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Bounce Malvern",
   "away": "ACE Moorestown",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 648,
   "awayPoints": 537,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nam Barsh",
      "Shashank Kamdar"
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
      "Harriet Levin",
      "Jonah Karczmer"
     ],
     "a": [
      "Anita Buggins",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Jennifer Sanchez",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Teresa Wang",
      "Nick Meale"
     ],
     "a": [
      "Brittany Hall",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Sarah Kline"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Teresa Wang"
     ],
     "a": [
      "Brittany Hall",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Jonah Karczmer"
     ],
     "a": [
      "Nathan Law",
      "Damien Stahl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Lou Frignito",
      "Nick Meale"
     ],
     "a": [
      "Marc Harden",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Teresa Wang",
      "Nick Meale"
     ],
     "a": [
      "Brittany Hall",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nam Barsh",
      "Jonah Karczmer"
     ],
     "a": [
      "Jennifer Sanchez",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Harriet Levin",
      "Shashank Kamdar"
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
     "as": 19,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Stacy Walkowitz",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Nam Barsh"
     ],
     "a": [
      "Jennifer Sanchez",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Harriet Levin"
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
     "as": 6,
     "h": [
      "Lou Frignito",
      "Nick Meale"
     ],
     "a": [
      "Damien Stahl",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shashank Kamdar",
      "Jonah Karczmer"
     ],
     "a": [
      "Nathan Law",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Jonah Karczmer"
     ],
     "a": [
      "Anita Buggins",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Teresa Wang",
      "Shashank Kamdar"
     ],
     "a": [
      "Brittany Hall",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Lou Frignito"
     ],
     "a": [
      "Stacy Walkowitz",
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
      "Nick Meale"
     ],
     "a": [
      "Jennifer Sanchez",
      "Damien Stahl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yuki Kim",
      "Sarah Kline"
     ],
     "a": [
      "Stacy Walkowitz",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Harriet Levin"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lou Frignito",
      "Jonah Karczmer"
     ],
     "a": [
      "Nathan Law",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nick Meale",
      "Shashank Kamdar"
     ],
     "a": [
      "Damien Stahl",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harriet Levin",
      "Lou Frignito"
     ],
     "a": [
      "Jennifer Sanchez",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Shashank Kamdar"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Teresa Wang",
      "Jonah Karczmer"
     ],
     "a": [
      "Brittany Hall",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Stacy Walkowitz",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Nam Barsh"
     ],
     "a": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yuki Kim",
      "Sarah Kline"
     ],
     "a": [
      "Brittany Hall",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "Nathan Law",
      "Damien Stahl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nick Meale",
      "Jonah Karczmer"
     ],
     "a": [
      "Marc Harden",
      "Vaughn Mcclelland"
     ]
    }
   ],
   "subs": [
    "Marc Harden",
    "Vaughn Mcclelland"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Home Court",
   "away": "Monroe",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 573,
   "awayPoints": 622,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Sandella",
      "Marcos Claros"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sheila Siu",
      "Noah Goding"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jen Vorel",
      "Ken Velarde"
     ],
     "a": [
      "Sara Synn",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kara Infante",
      "Austin Williams"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Christine Sandella",
      "Aurora Lewis"
     ],
     "a": [
      "Amalia Ditrapani",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kara Infante",
      "Jen Vorel"
     ],
     "a": [
      "Ruhi Shah",
      "Sara Synn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Noah Goding"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ken Velarde",
      "Austin Williams"
     ],
     "a": [
      "Shreyas Pani",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sheila Siu",
      "Noah Goding"
     ],
     "a": [
      "Amalia Ditrapani",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kara Infante",
      "Ken Velarde"
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
     "as": 15,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Sara Synn",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Sandella",
      "Marcos Claros"
     ],
     "a": [
      "Ruhi Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Sandella",
      "Jen Vorel"
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
     "as": 19,
     "h": [
      "Kara Infante",
      "Aurora Lewis"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marcos Claros",
      "Ken Velarde"
     ],
     "a": [
      "Dilan Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Austin Williams",
      "Noah Goding"
     ],
     "a": [
      "Shreyas Pani",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Aidan Jackson"
     ],
     "a": [
      "Ruhi Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sheila Siu",
      "Ken Velarde"
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
     "as": 17,
     "h": [
      "Christine Sandella",
      "Austin Williams"
     ],
     "a": [
      "Sara Synn",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Amalia Ditrapani",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Sandella",
      "Jen Vorel"
     ],
     "a": [
      "Ruhi Shah",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kara Infante",
      "Aurora Lewis"
     ],
     "a": [
      "Sara Synn",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ken Velarde",
      "Aidan Jackson"
     ],
     "a": [
      "Dilan Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marcos Claros",
      "Austin Williams"
     ],
     "a": [
      "Anthony Ursino",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Ruhi Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sheila Siu",
      "Aidan Jackson"
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
     "as": 23,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Amalia Ditrapani",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Sandella",
      "Ken Velarde"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jen Vorel",
      "Aurora Lewis"
     ],
     "a": [
      "Richa Shah",
      "Sara Synn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Sandella",
      "Kara Infante"
     ],
     "a": [
      "Ruhi Shah",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Marcos Claros"
     ],
     "a": [
      "Dilan Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Austin Williams",
      "Ken Velarde"
     ],
     "a": [
      "Eric Lin",
      "Shreyas Pani"
     ]
    }
   ],
   "subs": [
    "Christine Sandella",
    "Sheila Siu"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Bounce Philly",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 557,
   "awayPoints": 651,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hannah Nussbaum",
      "Andrew Wakefield"
     ],
     "a": [
      "Rachel Alfano",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Julia Plein",
      "Anushk Gupta"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Adam Beck"
     ],
     "a": [
      "Alyssa Boyle",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Elysia Price",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Erika Richards"
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
     "as": 16,
     "h": [
      "Alyssa Tartaglia",
      "Hannah Nussbaum"
     ],
     "a": [
      "Alyssa Boyle",
      "Rachel Alfano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrew Wakefield",
      "Anushk Gupta"
     ],
     "a": [
      "Ashwin Korde",
      "Alexander Tong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Robert Schimony",
      "William Lee"
     ],
     "a": [
      "Zachary Lessner",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Julia Plein",
      "Robert Schimony"
     ],
     "a": [
      "Rachel Alfano",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Ross",
      "Anushk Gupta"
     ],
     "a": [
      "Elysia Price",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Adam Beck"
     ],
     "a": [
      "Charlotte Healey",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
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
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Claudya Elefante"
     ],
     "a": [
      "Alyssa Boyle",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Robert Schimony"
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
      "Adam Beck",
      "William Lee"
     ],
     "a": [
      "Ashwin Korde",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Rachel Alfano",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hannah Nussbaum",
      "Andrew Wakefield"
     ],
     "a": [
      "Alex Abad",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Julia Plein",
      "Robert Schimony"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Adam Beck"
     ],
     "a": [
      "Elysia Price",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hannah Nussbaum",
      "Claudya Elefante"
     ],
     "a": [
      "Alex Abad",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Sarah Ross"
     ],
     "a": [
      "Alyssa Boyle",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anushk Gupta",
      "Andrew Wakefield"
     ],
     "a": [
      "Mark Kilimnik",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Robert Schimony",
      "Adam Beck"
     ],
     "a": [
      "Ashwin Korde",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Julia Plein",
      "William Lee"
     ],
     "a": [
      "Rachel Alfano",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Erika Richards",
      "Adam Beck"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
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
      "Sarah Ross",
      "Anushk Gupta"
     ],
     "a": [
      "Alex Abad",
      "Ashwin Korde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Hannah Nussbaum"
     ],
     "a": [
      "Elysia Price",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Erika Richards",
      "Julia Plein"
     ],
     "a": [
      "Alyssa Boyle",
      "Alex Abad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrew Wakefield",
      "Robert Schimony"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anushk Gupta",
      "William Lee"
     ],
     "a": [
      "Ashwin Korde",
      "Mark Kilimnik"
     ]
    }
   ],
   "subs": [
    "Hannah Nussbaum",
    "Andrew Wakefield"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Jersey Pickleball Club",
   "away": "Flemington",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 610,
   "awayPoints": 626,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Tom Laiso"
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
     "as": 8,
     "h": [
      "Catherine Stewart",
      "Kevin Wysoczynski"
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
      "Eva Danieli",
      "Matt Schall"
     ],
     "a": [
      "Elisangela Harrington",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katalina Wang",
      "Andrew Bernard"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Katalina Wang"
     ],
     "a": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joey Angelson",
      "Catherine Stewart"
     ],
     "a": [
      "Elisangela Harrington",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Matt Schall",
      "Andrew Bernard"
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
      "Sebastian Ferrer",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Patrick Ryan",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katalina Wang",
      "Tom Laiso"
     ],
     "a": [
      "Melissa Dardani",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Sebastian Ferrer"
     ],
     "a": [
      "Chanda Mccoy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Andrew Bernard"
     ],
     "a": [
      "Elisangela Harrington",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Catherine Stewart",
      "Matt Schall"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eva Danieli",
      "Catherine Stewart"
     ],
     "a": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joey Angelson",
      "Katalina Wang"
     ],
     "a": [
      "Elisangela Harrington",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tom Laiso",
      "Sebastian Ferrer"
     ],
     "a": [
      "Patrick Ryan",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joey Angelson",
      "Tom Laiso"
     ],
     "a": [
      "Melissa Dardani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Katalina Wang",
      "Sebastian Ferrer"
     ],
     "a": [
      "Chanda Mccoy",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Andrew Bernard"
     ],
     "a": [
      "Elisangela Harrington",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Katalina Wang"
     ],
     "a": [
      "Melissa Dardani",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eva Danieli",
      "Catherine Stewart"
     ],
     "a": [
      "Kelly Arvidson",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matt Schall",
      "Sebastian Ferrer"
     ],
     "a": [
      "Robbie Oddy",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Andrew Bernard"
     ],
     "a": [
      "Thomas Connolly",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Katalina Wang",
      "Andrew Bernard"
     ],
     "a": [
      "Melissa Dardani",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Catherine Stewart",
      "Matt Schall"
     ],
     "a": [
      "Chanda Mccoy",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Joey Angelson",
      "Sebastian Ferrer"
     ],
     "a": [
      "Elisangela Harrington",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eva Danieli",
      "Tom Laiso"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Catherine Stewart"
     ],
     "a": [
      "Melissa Dardani",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eva Danieli",
      "Katalina Wang"
     ],
     "a": [
      "Kelly Arvidson",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sebastian Ferrer",
      "Matt Schall"
     ],
     "a": [
      "Thomas Connolly",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Tom Laiso"
     ],
     "a": [
      "Robbie Oddy",
      "Patrick Ryan"
     ]
    }
   ],
   "subs": [
    "Katalina Wang",
    "Elisangela Harrington",
    "Kevin Wysoczynski",
    "Chanda Mccoy"
   ]
  },
  {
   "result": null,
   "week": 2,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-10-29T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nahla Bernhardt",
      "Joel Phillips"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Andrew Wakefield",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jonah Fliegelman",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nahla Bernhardt",
      "Joel Phillips"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Andrew Wakefield",
      "Varun Prakash"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jonah Fliegelman",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nahla Bernhardt",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Andrew Wakefield",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Varun Prakash",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nahla Bernhardt",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Andrew Wakefield",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Varun Prakash",
      "Joel Phillips"
     ]
    }
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-09T19:00:00",
   "complete": true,
   "homePoints": 663,
   "awayPoints": 562,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Paula Ro",
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
     "hs": 21,
     "as": 13,
     "h": [
      "Meghan Mediratta",
      "Chad Durkin"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Tin Wai Kwan",
      "Zach Hizer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zoe Ousouljoglou",
      "Chris Long"
     ],
     "a": [
      "Catherine Stewart",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Meghan Mediratta"
     ],
     "a": [
      "Tin Wai Kwan",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paula Ro",
      "Anisha Malhotra"
     ],
     "a": [
      "Catherine Stewart",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Long",
      "Chad Durkin"
     ],
     "a": [
      "Sebastian Ferrer",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hruday Vemparala",
      "Sidd Pathare"
     ],
     "a": [
      "Zach Hizer",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jenna Irwin",
      "Chad Durkin"
     ],
     "a": [
      "Joey Angelson",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Meghan Mediratta",
      "Hruday Vemparala"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ],
     "a": [
      "Tin Wai Kwan",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zoe Ousouljoglou",
      "Keith Shedlock"
     ],
     "a": [
      "Catherine Stewart",
      "Zach Hizer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Paula Ro",
      "Jenna Irwin"
     ],
     "a": [
      "Tin Wai Kwan",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meghan Mediratta",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Catherine Stewart",
      "Joey Angelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Long",
      "Chad Durkin"
     ],
     "a": [
      "Sebastian Ferrer",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Keith Shedlock"
     ],
     "a": [
      "Matt Schall",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Sidd Pathare"
     ],
     "a": [
      "Tin Wai Kwan",
      "Zach Hizer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Anisha Malhotra",
      "Keith Shedlock"
     ],
     "a": [
      "Joey Angelson",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jenna Irwin",
      "Chris Long"
     ],
     "a": [
      "Catherine Stewart",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Paula Ro",
      "Hruday Vemparala"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Paula Ro",
      "Meghan Mediratta"
     ],
     "a": [
      "Tin Wai Kwan",
      "Catherine Stewart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anisha Malhotra",
      "Jenna Irwin"
     ],
     "a": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chad Durkin",
      "Keith Shedlock"
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
     "as": 19,
     "h": [
      "Chris Long",
      "Sidd Pathare"
     ],
     "a": [
      "Sebastian Ferrer",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Chad Durkin"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Zoe Ousouljoglou",
      "Hruday Vemparala"
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
     "as": 15,
     "h": [
      "Jenna Irwin",
      "Sidd Pathare"
     ],
     "a": [
      "Catherine Stewart",
      "Zach Hizer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Meghan Mediratta",
      "Chris Long"
     ],
     "a": [
      "Tin Wai Kwan",
      "Matt Schall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Paula Ro",
      "Anisha Malhotra"
     ],
     "a": [
      "Tin Wai Kwan",
      "Catherine Stewart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Meghan Mediratta",
      "Jenna Irwin"
     ],
     "a": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chad Durkin",
      "Hruday Vemparala"
     ],
     "a": [
      "Zach Hizer",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Keith Shedlock",
      "Sidd Pathare"
     ],
     "a": [
      "Matt Schall",
      "Tom Laiso"
     ]
    }
   ],
   "subs": [
    "Paula Ro",
    "Tin Wai Kwan"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Monroe",
   "away": "Pickle House",
   "time": "2026-09-09T19:00:00",
   "complete": true,
   "homePoints": 616,
   "awayPoints": 668,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Angela Luo",
      "Maanav Shah"
     ],
     "a": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Richa Shah",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Emily Babinsky",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Anthony Ursino"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ruhi Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ruhi Shah",
      "Richa Shah"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angela Luo",
      "Morgan Fishman"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shreyas Pani",
      "Maanav Shah"
     ],
     "a": [
      "Nick Dehmer",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dilan Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Mickey Cook",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Taylor Hartman",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Lissa Eagles",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Kerrin Maurer",
      "Zach Hollmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Angela Luo"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maanav Shah",
      "Dilan Shah"
     ],
     "a": [
      "Nick Dehmer",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Shreyas Pani",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Michael Li",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Angela Luo",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Lissa Eagles",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sophia Kaufmann",
      "Anthony Ursino"
     ],
     "a": [
      "Kerrin Maurer",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ruhi Shah",
      "Dilan Shah"
     ],
     "a": [
      "Emily Babinsky",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ruhi Shah",
      "Sophia Kaufmann"
     ],
     "a": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Richa Shah",
      "Morgan Fishman"
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
     "as": 23,
     "h": [
      "Dilan Shah",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Dipen Bhatt",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Maanav Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Michael Li",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Taylor Hartman",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angela Luo",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Kerrin Maurer",
      "Dipen Bhatt"
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
      "Emily Babinsky",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
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
      "Sophia Kaufmann",
      "Angela Luo"
     ],
     "a": [
      "Emily Babinsky",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
     ],
     "a": [
      "Nick Dehmer",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Shreyas Pani",
      "Anthony Ursino"
     ],
     "a": [
      "Michael Li",
      "Dipen Bhatt"
     ]
    }
   ],
   "subs": [
    "Eugene Zaslavsky"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Home Court",
   "away": "Flemington",
   "time": "2026-09-09T19:30:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 608,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kara Infante",
      "Nathan Malhotra"
     ],
     "a": [
      "Melissa Dardani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Aidan Jackson"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aurora Lewis",
      "Ken Velarde"
     ],
     "a": [
      "Elisangela Harrington",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kara Infante",
      "Aurora Lewis"
     ],
     "a": [
      "Melissa Dardani",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lynda Tomaru",
      "Jen Vorel"
     ],
     "a": [
      "Kelly Arvidson",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Austin Williams",
      "Ken Velarde"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Nathan Malhotra"
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
     "as": 16,
     "h": [
      "Ariana Rizvani",
      "Aidan Jackson"
     ],
     "a": [
      "Melissa Dardani",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kara Infante",
      "Austin Williams"
     ],
     "a": [
      "Elisangela Harrington",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Hany Ibrahim"
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
     "as": 14,
     "h": [
      "Jen Vorel",
      "Ken Velarde"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Ariana Rizvani",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Melissa Dardani",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Jen Vorel"
     ],
     "a": [
      "Elisangela Harrington",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Austin Williams",
      "Ken Velarde"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aidan Jackson",
      "Hany Ibrahim"
     ],
     "a": [
      "Patrick Ryan",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Hany Ibrahim"
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
     "as": 19,
     "h": [
      "Aurora Lewis",
      "Nathan Malhotra"
     ],
     "a": [
      "Elisangela Harrington",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kara Infante",
      "Austin Williams"
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
     "as": 15,
     "h": [
      "Ariana Rizvani",
      "Aidan Jackson"
     ],
     "a": [
      "Kelly Arvidson",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ariana Rizvani",
      "Kara Infante"
     ],
     "a": [
      "Elisangela Harrington",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lynda Tomaru",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Austin Williams",
      "Nathan Malhotra"
     ],
     "a": [
      "Robbie Oddy",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ken Velarde",
      "Aidan Jackson"
     ],
     "a": [
      "Ross Switkes",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Melissa Dardani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Hany Ibrahim"
     ],
     "a": [
      "Elisangela Harrington",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kara Infante",
      "Nathan Malhotra"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Ken Velarde"
     ],
     "a": [
      "Susan Ackley",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ariana Rizvani",
      "Kara Infante"
     ],
     "a": [
      "Elisangela Harrington",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Ken Velarde"
     ],
     "a": [
      "Ross Switkes",
      "Robbie Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Austin Williams",
      "Nathan Malhotra"
     ],
     "a": [
      "Patrick Ryan",
      "Thomas Connolly"
     ]
    }
   ],
   "subs": [
    "Nathan Malhotra",
    "Elisangela Harrington",
    "Hany Ibrahim"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-09-09T19:30:00",
   "complete": true,
   "homePoints": 486,
   "awayPoints": 653,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Adam Beck"
     ],
     "a": [
      "Marina Cozac",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Ross",
      "Anushk Gupta"
     ],
     "a": [
      "Cristi Landrigan",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Ryan Rosen"
     ],
     "a": [
      "Rayna Baizman",
      "Varun Prakash"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Julia Plein"
     ],
     "a": [
      "Marina Cozac",
      "Cristi Landrigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Claudya Elefante"
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
     "as": 16,
     "h": [
      "Robert Schimony",
      "Adam Beck"
     ],
     "a": [
      "Dylan Ashbach",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Ryan Rosen"
     ],
     "a": [
      "Varun Prakash",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "William Lee"
     ],
     "a": [
      "Marina Cozac",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Julia Plein",
      "Robert Schimony"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Anushk Gupta"
     ],
     "a": [
      "Rayna Baizman",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Adam Beck"
     ],
     "a": [
      "Nahla Bernhardt",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Erika Richards",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Marina Cozac",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Ross",
      "Claudya Elefante"
     ],
     "a": [
      "Cristi Landrigan",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ryan Rosen",
      "Robert Schimony"
     ],
     "a": [
      "Dylan Ashbach",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "William Lee"
     ],
     "a": [
      "Kenoa Tio",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Ryan Rosen"
     ],
     "a": [
      "Marina Cozac",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Robert Schimony"
     ],
     "a": [
      "Cristi Landrigan",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julia Plein",
      "Adam Beck"
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
      "Erika Richards",
      "William Lee"
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
      "Sarah Ross",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Marina Cozac",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Erika Richards",
      "Julia Plein"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Adam Beck",
      "Robert Schimony"
     ],
     "a": [
      "Kenoa Tio",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Ryan Rosen"
     ],
     "a": [
      "Varun Prakash",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Erika Richards",
      "Adam Beck"
     ],
     "a": [
      "Marina Cozac",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Ryan Rosen"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "William Lee"
     ],
     "a": [
      "Cristi Landrigan",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Julia Plein",
      "Anushk Gupta"
     ],
     "a": [
      "Nahla Bernhardt",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Erika Richards"
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
     "as": 11,
     "h": [
      "Sarah Ross",
      "Julia Plein"
     ],
     "a": [
      "Cristi Landrigan",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ryan Rosen",
      "William Lee"
     ],
     "a": [
      "Dylan Ashbach",
      "Varun Prakash"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Robert Schimony"
     ],
     "a": [
      "Jonah Fliegelman",
      "Joel Phillips"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Jersey Devil",
   "away": "ACE Moorestown",
   "time": "2026-09-09T19:30:00",
   "complete": true,
   "homePoints": 630,
   "awayPoints": 656,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
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
      "Michelle Quach",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Anita Buggins",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Zach Bowe"
     ],
     "a": [
      "Jennifer Sanchez",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michaela Pierznik",
      "Matthew Matro"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Rachel Berger",
      "Danielle Bernero"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Arianna Haresign",
      "Michelle Quach"
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
      "Matthew Matro",
      "Zach Bowe"
     ],
     "a": [
      "Manny Lai",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ryan Furman",
      "Tyler Arsenault"
     ],
     "a": [
      "Jack Blumberg",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Michaela Pierznik",
      "Ryan Furman"
     ],
     "a": [
      "Brittany Hall",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michelle Quach",
      "Matthew Matro"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
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
     "as": 19,
     "h": [
      "Rachel Berger",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Jack Blumberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michelle Quach",
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
     "hs": 28,
     "as": 26,
     "h": [
      "Rachel Berger",
      "Danielle Bernero"
     ],
     "a": [
      "Jennifer Sanchez",
      "Krysti Maronski-Neufeldt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Matthew Matro"
     ],
     "a": [
      "Damien Stahl",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Caleb Perry-Abner",
      "Tyler Arsenault"
     ],
     "a": [
      "Manny Lai",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Ryan Furman"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Matthew Matro"
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
     "as": 14,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Anita Buggins",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Tyler Arsenault"
     ],
     "a": [
      "Brittany Hall",
      "Jack Blumberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Rachel Berger"
     ],
     "a": [
      "Jennifer Sanchez",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Michelle Quach"
     ],
     "a": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Manny Lai",
      "Jack Blumberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Furman",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Nathan Law",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Ryan Furman"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Matthew Matro"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michelle Quach",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Brittany Hall",
      "Damien Stahl"
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
      "Krysti Maronski-Neufeldt",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michaela Pierznik",
      "Rachel Berger"
     ],
     "a": [
      "Jennifer Sanchez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Arianna Haresign"
     ],
     "a": [
      "Anita Buggins",
      "Krysti Maronski-Neufeldt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Matthew Matro"
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
      "Caleb Perry-Abner",
      "Ryan Furman"
     ],
     "a": [
      "Damien Stahl",
      "Jack Blumberg"
     ]
    }
   ],
   "subs": [
    "Ryan Furman"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Bounce Philly",
   "away": "Bounce Malvern",
   "time": "2026-09-09T19:30:00",
   "complete": true,
   "homePoints": 605,
   "awayPoints": 647,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Bruno Casino"
     ],
     "a": [
      "Yuki Kim",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Harriet Levin",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Elysia Price",
      "Zachary Lessner"
     ],
     "a": [
      "Teresa Wang",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alex Abad",
      "Jordan Denish"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
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
      "Yuki Kim",
      "Teresa Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathleen Dougherty",
      "Elysia Price"
     ],
     "a": [
      "Harriet Levin",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mark Kilimnik",
      "Jordan Denish"
     ],
     "a": [
      "Lou Frignito",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bruno Casino",
      "Zachary Lessner"
     ],
     "a": [
      "Nick Meale",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Abad",
      "Alexander Tong"
     ],
     "a": [
      "Yuki Kim",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Julia Sternberg",
      "Bruno Casino"
     ],
     "a": [
      "Teresa Wang",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elysia Price",
      "Mark Kilimnik"
     ],
     "a": [
      "Tess Fisher",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Harriet Levin",
      "Zyril Carilo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alex Abad",
      "Elysia Price"
     ],
     "a": [
      "Teresa Wang",
      "Tess Fisher"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Charlotte Healey"
     ],
     "a": [
      "Harriet Levin",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Boory",
      "Bruno Casino"
     ],
     "a": [
      "Lou Frignito",
      "Zyril Carilo"
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
      "Nick Meale",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathleen Dougherty",
      "Alexander Tong"
     ],
     "a": [
      "Teresa Wang",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Zachary Lessner"
     ],
     "a": [
      "Megan Harvey",
      "Nick Meale"
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
      "Yuki Kim",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Julia Sternberg",
      "Jordan Denish"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alex Abad",
      "Kathleen Dougherty"
     ],
     "a": [
      "Yuki Kim",
      "Teresa Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elysia Price",
      "Julia Sternberg"
     ],
     "a": [
      "Tess Fisher",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alexander Tong",
      "Mark Kilimnik"
     ],
     "a": [
      "Lou Frignito",
      "Nick Meale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Jordan Denish",
      "Zachary Lessner"
     ],
     "a": [
      "Chris Tabeling",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Zachary Lessner"
     ],
     "a": [
      "Yuki Kim",
      "Lou Frignito"
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
      "Teresa Wang",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ],
     "a": [
      "Harriet Levin",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Elysia Price",
      "Alex Boory"
     ],
     "a": [
      "Megan Harvey",
      "Zyril Carilo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Abad",
      "Kathleen Dougherty"
     ],
     "a": [
      "Yuki Kim",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Elysia Price",
      "Julia Sternberg"
     ],
     "a": [
      "Megan Harvey",
      "Tess Fisher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Jordan Denish"
     ],
     "a": [
      "Lou Frignito",
      "Nick Meale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Alexander Tong"
     ],
     "a": [
      "Chris Tabeling",
      "Zyril Carilo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": null,
   "week": 4,
   "home": "Monroe",
   "away": "Flemington",
   "time": "2026-09-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Bounce Philly",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Home Court",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickle House",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Bounce Malvern",
   "away": "Jersey Devil",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "ACE Moorestown",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington",
   "away": "Home Court",
   "time": "2026-09-23T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle House",
   "away": "Monroe",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Malvern",
   "away": "Bounce Philly",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "ACE Moorestown",
   "away": "Jersey Devil",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "ACE Moorestown",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington",
   "away": "Bounce Malvern",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Jersey Pickleball Club",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle House",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Home Court",
   "away": "Bounce Philly",
   "time": "2026-09-27T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Monroe",
   "away": "Jersey Devil",
   "time": "2026-09-27T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Monroe",
   "away": "ACE Moorestown",
   "time": "2026-09-30T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Jersey Pickleball Club",
   "away": "Jersey Devil",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Malvern",
   "away": "Home Court",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickle House",
   "away": "Bounce Philly",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Flemington",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Monroe",
   "time": "2026-10-07T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Bounce Malvern",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Bounce Philly",
   "away": "ACE Moorestown",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickle House",
   "away": "Flemington",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Monroe",
   "away": "Home Court",
   "time": "2026-10-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Flemington",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Jersey Devil",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Philly",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "ACE Moorestown",
   "away": "Bounce Malvern",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickle House",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Monroe",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "ACE Moorestown",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Devil",
   "away": "Bounce Philly",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickle House",
   "away": "Home Court",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Bounce Malvern",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Flemington",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Devil",
   "away": "Home Court",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "ACE Moorestown",
   "away": "Pickle House",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Malvern",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Philly",
   "away": "Monroe",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington",
   "away": "Monroe",
   "time": "2026-10-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-10-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Bounce Philly",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "ACE Moorestown",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Jersey Pickleball Club",
   "away": "Pickle House",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Flemington",
   "time": "2026-11-04T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Philly",
   "away": "Jersey Devil",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Home Court",
   "away": "Pickle House",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Jersey Pickleball Club",
   "away": "Monroe",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-11-11T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Pickleball Club",
   "away": "Home Court",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "ACE Moorestown",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-11-11T19:30:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Justin Bautista": "27660961-6245-4b09-aafe-359ca3205797",
  "Ethan Henigan": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
  "Andrew Cooley": "4bc5dc80-f744-41e1-ab6e-a02c600abed8",
  "Stefanie Sohosky": "65aabbc7-a06a-4074-a5df-5b0938ede28a",
  "Elliott Albanese": "6af88387-5e2b-4ea7-b732-22885e4931a8",
  "Brandyn Schuchart": "9d821d34-4af3-4e4a-999d-25308b75ca0f",
  "Marc Padre": "a131a707-f20e-4838-9dcf-7cecb40c2705",
  "Christine Ferraez": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
 },
 "meta": {
  "matchesPlayed": 16,
  "provisionalMatches": 0,
  "weeks": "1-3",
  "totalPlayers": 180,
  "ratingHistoryWeeks": [
   {
    "week": 1,
    "label": "1",
    "seq": 0
   },
   {
    "week": 2,
    "label": "2",
    "seq": 1
   },
   {
    "week": 3,
    "label": "3",
    "seq": 2
   }
  ],
  "divisionSlug": "6619816f",
  "hasPlayoffs": false,
  "typicalDay": "Wednesdays",
  "detailFile": "compiled/detail-6619816f.js",
  "clubName": "",
  "divisionName": "4.5",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
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
   "crossPodMatchups": 18,
   "totalMatchups": 78,
   "reported": {
    "South": [
     "ACE Moorestown",
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro Aces",
     "Dill Dinkers Hatboro The Factory",
     "Jersey Devil"
    ],
    "North": [
     "Flemington",
     "Home Court",
     "Jersey Pickleball Club",
     "Monroe",
     "Pickle House",
     "Pickleball Kingdom Hillsborough"
    ]
   },
   "schedule": {
    "Pod 1": [
     "ACE Moorestown",
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro Aces",
     "Dill Dinkers Hatboro The Factory",
     "Flemington",
     "Home Court",
     "Jersey Devil",
     "Jersey Pickleball Club",
     "Monroe",
     "Pickle House",
     "Pickleball Kingdom Hillsborough"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-09-11T02:09:42.998Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["6619816f"] = DATA;
})();
