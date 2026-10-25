(function () {
  const DATA = {
 "players": [
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
   "winPct": 100,
   "diff": 53,
   "ppg": 21,
   "leagueRank": 82,
   "rating": 2.3,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.7,
   "playerId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9"
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
   "leagueRank": 69,
   "rating": 3.5,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1.2,
   "playerId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59"
  },
  {
   "name": "Andy Ead",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 84,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 42,
   "ppg": 21,
   "leagueRank": 72,
   "rating": 3.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d"
  },
  {
   "name": "Judy Qiu",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 64,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 41,
   "ppg": 21,
   "leagueRank": 52,
   "rating": 5.3,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.3,
   "playerId": "524b4051-2245-4d13-a9ec-2c2aac3ec980"
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 44,
   "wins": 43,
   "losses": 1,
   "pointsWon": 922,
   "totalPointsAgainst": 582,
   "mixedWins": 22,
   "mixedLosses": 1,
   "genderWins": 21,
   "genderLosses": 0,
   "clutchWins": 7,
   "clutchLosses": 1,
   "winPct": 97.7,
   "diff": 340,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 5,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.4,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "name": "Bud Heller",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 25,
   "losses": 1,
   "pointsWon": 544,
   "totalPointsAgainst": 355,
   "mixedWins": 13,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 96.2,
   "diff": 189,
   "ppg": 20.9,
   "leagueRank": 2,
   "rating": 3.6,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.8,
   "playerId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "name": "Jay Rohatgi",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 30,
   "losses": 2,
   "pointsWon": 657,
   "totalPointsAgainst": 497,
   "mixedWins": 15,
   "mixedLosses": 1,
   "genderWins": 15,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 93.8,
   "diff": 160,
   "ppg": 20.5,
   "leagueRank": 3,
   "rating": 3.3,
   "ratingGames": 32,
   "confidence": 87,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "f5831f41-366b-4666-b780-448fc7971ad7"
  },
  {
   "name": "Charlie Johnston",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 290,
   "totalPointsAgainst": 210,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 92.9,
   "diff": 80,
   "ppg": 20.7,
   "leagueRank": 30,
   "rating": 1.7,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1,
   "playerId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325"
  },
  {
   "name": "Alex Lee",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 32,
   "losses": 3,
   "pointsWon": 721,
   "totalPointsAgainst": 510,
   "mixedWins": 15,
   "mixedLosses": 2,
   "genderWins": 17,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 91.4,
   "diff": 211,
   "ppg": 20.6,
   "leagueRank": 4,
   "rating": 4,
   "ratingGames": 35,
   "confidence": 86,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.1,
   "playerId": "22e2201d-16d7-4474-847b-5f4f0cef44e6"
  },
  {
   "name": "Rebecca Lederman",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 35,
   "wins": 31,
   "losses": 4,
   "pointsWon": 718,
   "totalPointsAgainst": 533,
   "mixedWins": 14,
   "mixedLosses": 3,
   "genderWins": 17,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 88.6,
   "diff": 185,
   "ppg": 20.5,
   "leagueRank": 7,
   "rating": 2.7,
   "ratingGames": 35,
   "confidence": 86,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.2,
   "playerId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "name": "Kate Curren",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 22,
   "losses": 3,
   "pointsWon": 513,
   "totalPointsAgainst": 370,
   "mixedWins": 10,
   "mixedLosses": 2,
   "genderWins": 12,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 88,
   "diff": 143,
   "ppg": 20.5,
   "leagueRank": 5,
   "rating": 3.2,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.1,
   "playerId": "20e006d9-72f9-4f9e-bad5-750694224782"
  },
  {
   "name": "Jingwei Wu",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 29,
   "losses": 4,
   "pointsWon": 676,
   "totalPointsAgainst": 478,
   "mixedWins": 16,
   "mixedLosses": 1,
   "genderWins": 13,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 87.9,
   "diff": 198,
   "ppg": 20.5,
   "leagueRank": 6,
   "rating": 2.7,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.7,
   "playerId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "name": "Jaco De Waal",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 158,
   "totalPointsAgainst": 112,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 46,
   "ppg": 19.8,
   "leagueRank": 87,
   "rating": 2.2,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.7,
   "playerId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3"
  },
  {
   "name": "James Shaw",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 130,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 36,
   "ppg": 20.8,
   "leagueRank": 91,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.7,
   "playerId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "name": "Liby Saigal",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
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
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 24,
   "ppg": 20.8,
   "leagueRank": 84,
   "rating": 3.2,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "dc2026ad-428a-4822-ae40-889727c35b10"
  },
  {
   "name": "Kelly Hanson Word",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 48,
   "losses": 8,
   "pointsWon": 1142,
   "totalPointsAgainst": 807,
   "mixedWins": 22,
   "mixedLosses": 6,
   "genderWins": 26,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 85.7,
   "diff": 335,
   "ppg": 20.4,
   "leagueRank": 8,
   "rating": 3.2,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.2,
   "playerId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "name": "Jeffrey Susskind",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 263,
   "totalPointsAgainst": 183,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 80,
   "ppg": 20.2,
   "leagueRank": 44,
   "rating": 1.2,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": -1,
   "playerId": "fd8d97f4-ff3e-46e2-aa8f-e5408a6a9e9c"
  },
  {
   "name": "Carol Mastroianni",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 37,
   "wins": 31,
   "losses": 6,
   "pointsWon": 743,
   "totalPointsAgainst": 611,
   "mixedWins": 15,
   "mixedLosses": 3,
   "genderWins": 16,
   "genderLosses": 3,
   "clutchWins": 8,
   "clutchLosses": 1,
   "winPct": 83.8,
   "diff": 132,
   "ppg": 20.1,
   "leagueRank": 12,
   "rating": 1.7,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.7,
   "playerId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "name": "Stephanie Woomer",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 40,
   "losses": 8,
   "pointsWon": 978,
   "totalPointsAgainst": 753,
   "mixedWins": 21,
   "mixedLosses": 4,
   "genderWins": 19,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 83.3,
   "diff": 225,
   "ppg": 20.4,
   "leagueRank": 9,
   "rating": 2.8,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "name": "Amanda Quinn",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 242,
   "totalPointsAgainst": 183,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 59,
   "ppg": 20.2,
   "leagueRank": 79,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -1.3,
   "playerId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "name": "Clifford Luster",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 82,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 40,
   "ppg": 20.3,
   "leagueRank": 116,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.7,
   "playerId": "3f47746a-2105-493a-941a-b15c4b02a520"
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
   "leagueRank": 118,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 3,
   "strengthOfOpponents": -0.3,
   "playerId": "45efdf62-1562-4402-afee-8f0e1e3e81c1"
  },
  {
   "name": "Karan Pescatore",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 38,
   "losses": 8,
   "pointsWon": 932,
   "totalPointsAgainst": 711,
   "mixedWins": 17,
   "mixedLosses": 7,
   "genderWins": 21,
   "genderLosses": 1,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 82.6,
   "diff": 221,
   "ppg": 20.3,
   "leagueRank": 10,
   "rating": 2.3,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.3,
   "playerId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711"
  },
  {
   "name": "Jonathan Brand",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 31,
   "losses": 7,
   "pointsWon": 774,
   "totalPointsAgainst": 637,
   "mixedWins": 15,
   "mixedLosses": 3,
   "genderWins": 16,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 81.6,
   "diff": 137,
   "ppg": 20.4,
   "leagueRank": 11,
   "rating": 2.5,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.5,
   "playerId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe"
  },
  {
   "name": "Kim Hamilton",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 289,
   "totalPointsAgainst": 247,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 42,
   "ppg": 19.3,
   "leagueRank": 62,
   "rating": 1.3,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318"
  },
  {
   "name": "Yang Xu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 100,
   "totalPointsAgainst": 85,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 15,
   "ppg": 20,
   "leagueRank": 131,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.7,
   "playerId": "f607099c-35f9-448c-9077-1792b245f68e"
  },
  {
   "name": "Vicki Main",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 31,
   "losses": 8,
   "pointsWon": 783,
   "totalPointsAgainst": 645,
   "mixedWins": 16,
   "mixedLosses": 4,
   "genderWins": 15,
   "genderLosses": 4,
   "clutchWins": 11,
   "clutchLosses": 4,
   "winPct": 79.5,
   "diff": 138,
   "ppg": 20.1,
   "leagueRank": 15,
   "rating": 1.5,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.2,
   "playerId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "name": "Keith Goldberg",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 27,
   "losses": 7,
   "pointsWon": 686,
   "totalPointsAgainst": 530,
   "mixedWins": 11,
   "mixedLosses": 6,
   "genderWins": 16,
   "genderLosses": 1,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 79.4,
   "diff": 156,
   "ppg": 20.2,
   "leagueRank": 13,
   "rating": 2.2,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0,
   "playerId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8"
  },
  {
   "name": "Sandy Alkins",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 19,
   "losses": 5,
   "pointsWon": 485,
   "totalPointsAgainst": 378,
   "mixedWins": 11,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 79.2,
   "diff": 107,
   "ppg": 20.2,
   "leagueRank": 14,
   "rating": 1.6,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.2,
   "playerId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "name": "Simon Perry",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 279,
   "totalPointsAgainst": 244,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 78.6,
   "diff": 35,
   "ppg": 19.9,
   "leagueRank": 56,
   "rating": 2.6,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "03c7bdf6-926c-4d90-9416-117cd3478b50"
  },
  {
   "name": "Brian Gonzalez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 25,
   "losses": 7,
   "pointsWon": 639,
   "totalPointsAgainst": 508,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 14,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 78.1,
   "diff": 131,
   "ppg": 20,
   "leagueRank": 20,
   "rating": 0.8,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.7,
   "playerId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "name": "Daniel Chernin",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 21,
   "losses": 6,
   "pointsWon": 548,
   "totalPointsAgainst": 440,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 77.8,
   "diff": 108,
   "ppg": 20.3,
   "leagueRank": 17,
   "rating": 2,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.1,
   "playerId": "9fc26554-f672-4501-9d2e-a8553fd79eaf"
  },
  {
   "name": "Carly Pfeffer",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 52,
   "wins": 40,
   "losses": 12,
   "pointsWon": 1046,
   "totalPointsAgainst": 809,
   "mixedWins": 19,
   "mixedLosses": 7,
   "genderWins": 21,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 76.9,
   "diff": 237,
   "ppg": 20.1,
   "leagueRank": 18,
   "rating": 1.1,
   "ratingGames": 52,
   "confidence": 90,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.7,
   "playerId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "name": "Ryan Sherry",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 265,
   "totalPointsAgainst": 184,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 76.9,
   "diff": 81,
   "ppg": 20.4,
   "leagueRank": 46,
   "rating": 2.9,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.2,
   "playerId": "6d8254ae-6e00-4704-8c1e-936733eb9b09"
  },
  {
   "name": "Pam Boyd",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 42,
   "wins": 32,
   "losses": 10,
   "pointsWon": 839,
   "totalPointsAgainst": 674,
   "mixedWins": 17,
   "mixedLosses": 4,
   "genderWins": 15,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 76.2,
   "diff": 165,
   "ppg": 20,
   "leagueRank": 22,
   "rating": 1.4,
   "ratingGames": 42,
   "confidence": 88,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.5,
   "playerId": "04aefa29-20e3-41b7-a680-19d13f9d4289"
  },
  {
   "name": "Harriet Levin",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 16,
   "losses": 5,
   "pointsWon": 420,
   "totalPointsAgainst": 371,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 76.2,
   "diff": 49,
   "ppg": 20,
   "leagueRank": 19,
   "rating": 3.4,
   "ratingGames": 21,
   "confidence": 79,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.6,
   "playerId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "name": "Erika Simone",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 24,
   "losses": 8,
   "pointsWon": 651,
   "totalPointsAgainst": 517,
   "mixedWins": 12,
   "mixedLosses": 4,
   "genderWins": 12,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 75,
   "diff": 134,
   "ppg": 20.3,
   "leagueRank": 23,
   "rating": 0.6,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.9,
   "playerId": "04f98aa6-f69e-462c-9a13-4060a3072922"
  },
  {
   "name": "Todd Mitchell",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 402,
   "totalPointsAgainst": 329,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 73,
   "ppg": 20.1,
   "leagueRank": 25,
   "rating": 1.6,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0,
   "playerId": "164bf044-d118-4bee-8bd6-d0bad38b79ea"
  },
  {
   "name": "Brian Rowan",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 328,
   "totalPointsAgainst": 281,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 75,
   "diff": 47,
   "ppg": 20.5,
   "leagueRank": 42,
   "rating": 1.2,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.1,
   "playerId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423"
  },
  {
   "name": "Bill Brandt",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 401,
   "totalPointsAgainst": 364,
   "mixedWins": 9,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 37,
   "ppg": 20.1,
   "leagueRank": 36,
   "rating": -0.6,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.3,
   "playerId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "name": "Ed Saxman",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 237,
   "totalPointsAgainst": 208,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 29,
   "ppg": 19.8,
   "leagueRank": 100,
   "rating": 1.8,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "32244c70-6859-44af-a408-8294d65b592d"
  },
  {
   "name": "Sergey Sprikut",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 160,
   "totalPointsAgainst": 134,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 26,
   "ppg": 20,
   "leagueRank": 107,
   "rating": 1.8,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "28b4b9e6-0b25-473c-8386-2876bf60efab"
  },
  {
   "name": "Lance Stopek",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 154,
   "totalPointsAgainst": 146,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 8,
   "ppg": 19.3,
   "leagueRank": 142,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.9,
   "playerId": "3a249058-9862-4d27-9562-c73c5a685d96"
  },
  {
   "name": "Jim Darcangelo",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 40,
   "losses": 14,
   "pointsWon": 1078,
   "totalPointsAgainst": 916,
   "mixedWins": 21,
   "mixedLosses": 5,
   "genderWins": 19,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 74.1,
   "diff": 162,
   "ppg": 20,
   "leagueRank": 26,
   "rating": 1.8,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "0530512b-466d-4ff7-9e89-7961b4a63110"
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 34,
   "losses": 12,
   "pointsWon": 912,
   "totalPointsAgainst": 794,
   "mixedWins": 17,
   "mixedLosses": 5,
   "genderWins": 17,
   "genderLosses": 7,
   "clutchWins": 11,
   "clutchLosses": 3,
   "winPct": 73.9,
   "diff": 118,
   "ppg": 19.8,
   "leagueRank": 31,
   "rating": 1.4,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
  },
  {
   "name": "Marc Pellicane",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 11,
   "losses": 4,
   "pointsWon": 299,
   "totalPointsAgainst": 245,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 73.3,
   "diff": 54,
   "ppg": 19.9,
   "leagueRank": 71,
   "rating": 1.1,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.2,
   "playerId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81"
  },
  {
   "name": "Katherine Maruyama",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 33,
   "wins": 24,
   "losses": 9,
   "pointsWon": 663,
   "totalPointsAgainst": 501,
   "mixedWins": 12,
   "mixedLosses": 5,
   "genderWins": 12,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 72.7,
   "diff": 162,
   "ppg": 20.1,
   "leagueRank": 16,
   "rating": 3,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0,
   "playerId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "name": "Kate Siedell",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 45,
   "losses": 17,
   "pointsWon": 1249,
   "totalPointsAgainst": 988,
   "mixedWins": 22,
   "mixedLosses": 9,
   "genderWins": 23,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 72.6,
   "diff": 261,
   "ppg": 20.1,
   "leagueRank": 21,
   "rating": 2.3,
   "ratingGames": 62,
   "confidence": 91,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.2,
   "playerId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "name": "Stacey Frank",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 39,
   "losses": 15,
   "pointsWon": 1083,
   "totalPointsAgainst": 888,
   "mixedWins": 18,
   "mixedLosses": 8,
   "genderWins": 21,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 72.2,
   "diff": 195,
   "ppg": 20.1,
   "leagueRank": 24,
   "rating": 2.8,
   "ratingGames": 54,
   "confidence": 90,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "name": "Patricia Boyle",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 28,
   "losses": 11,
   "pointsWon": 740,
   "totalPointsAgainst": 667,
   "mixedWins": 16,
   "mixedLosses": 3,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 0,
   "winPct": 71.8,
   "diff": 73,
   "ppg": 19,
   "leagueRank": 43,
   "rating": 0,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.3,
   "playerId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "name": "Robert Finley",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 33,
   "losses": 13,
   "pointsWon": 907,
   "totalPointsAgainst": 761,
   "mixedWins": 17,
   "mixedLosses": 5,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 71.7,
   "diff": 146,
   "ppg": 19.7,
   "leagueRank": 34,
   "rating": 0.6,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.4,
   "playerId": "0d70122a-9002-461f-8600-a9afed2e8c3f"
  },
  {
   "name": "Matt Hancock",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 133,
   "totalPointsAgainst": 112,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 21,
   "ppg": 19,
   "leagueRank": 158,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.8,
   "playerId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad"
  },
  {
   "name": "Michael Dieterle",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 31,
   "losses": 13,
   "pointsWon": 882,
   "totalPointsAgainst": 755,
   "mixedWins": 15,
   "mixedLosses": 6,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 70.5,
   "diff": 127,
   "ppg": 20,
   "leagueRank": 35,
   "rating": 1,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.4,
   "playerId": "4259501c-f1e3-4859-acd0-c25f342a1b92"
  },
  {
   "name": "David Osborne",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 30,
   "losses": 13,
   "pointsWon": 846,
   "totalPointsAgainst": 688,
   "mixedWins": 15,
   "mixedLosses": 6,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 69.8,
   "diff": 158,
   "ppg": 19.7,
   "leagueRank": 28,
   "rating": 3.1,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "name": "Lindsay Duphily",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 23,
   "losses": 10,
   "pointsWon": 658,
   "totalPointsAgainst": 537,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 15,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 69.7,
   "diff": 121,
   "ppg": 19.9,
   "leagueRank": 27,
   "rating": 2.8,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894"
  },
  {
   "name": "Tera Baccile",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 39,
   "losses": 17,
   "pointsWon": 1083,
   "totalPointsAgainst": 962,
   "mixedWins": 18,
   "mixedLosses": 11,
   "genderWins": 21,
   "genderLosses": 6,
   "clutchWins": 14,
   "clutchLosses": 5,
   "winPct": 69.6,
   "diff": 121,
   "ppg": 19.3,
   "leagueRank": 40,
   "rating": 0.4,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.1,
   "playerId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "name": "Jorge Diaz",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 446,
   "totalPointsAgainst": 409,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 69.6,
   "diff": 37,
   "ppg": 19.4,
   "leagueRank": 45,
   "rating": 0.5,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -1.1,
   "playerId": "5384ac1d-574b-4fe8-9360-010e903e9ec0"
  },
  {
   "name": "Abraham Telechanski",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 26,
   "losses": 12,
   "pointsWon": 740,
   "totalPointsAgainst": 680,
   "mixedWins": 16,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 68.4,
   "diff": 60,
   "ppg": 19.5,
   "leagueRank": 38,
   "rating": 2.7,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "name": "Michael Swell",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 375,
   "totalPointsAgainst": 321,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 68.4,
   "diff": 54,
   "ppg": 19.7,
   "leagueRank": 33,
   "rating": 2.3,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "name": "Darren Saks",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 15,
   "losses": 7,
   "pointsWon": 426,
   "totalPointsAgainst": 344,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 68.2,
   "diff": 82,
   "ppg": 19.4,
   "leagueRank": 32,
   "rating": 2.6,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 29,
   "losses": 14,
   "pointsWon": 805,
   "totalPointsAgainst": 743,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 16,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 67.4,
   "diff": 62,
   "ppg": 18.7,
   "leagueRank": 48,
   "rating": 1.9,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Gary Sidhu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 20,
   "losses": 10,
   "pointsWon": 592,
   "totalPointsAgainst": 463,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 129,
   "ppg": 19.7,
   "leagueRank": 29,
   "rating": 3.2,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "name": "Jeff Lorman",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 18,
   "losses": 9,
   "pointsWon": 528,
   "totalPointsAgainst": 462,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 66,
   "ppg": 19.6,
   "leagueRank": 41,
   "rating": 0.2,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.3,
   "playerId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "name": "Michael Boyle",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 296,
   "totalPointsAgainst": 235,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 61,
   "ppg": 19.7,
   "leagueRank": 88,
   "rating": 0.5,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.1,
   "playerId": "84729bcd-2c46-4a3b-b0a3-13a7e7d46dfb"
  },
  {
   "name": "Chanda Mccoy",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 394,
   "totalPointsAgainst": 366,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 28,
   "ppg": 18.8,
   "leagueRank": 53,
   "rating": 0.7,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "name": "Stephen Locker",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 236,
   "totalPointsAgainst": 216,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 20,
   "ppg": 19.7,
   "leagueRank": 152,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "188607ba-a609-4881-87bb-7c997a032cc2"
  },
  {
   "name": "Andrea Dellechiaie",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 20,
   "ppg": 19.8,
   "leagueRank": 168,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.8,
   "playerId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7"
  },
  {
   "name": "Jacklyn Beck",
   "gender": "Female",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 18,
   "ppg": 20.3,
   "leagueRank": 139,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.5,
   "playerId": "08991f81-441f-4dd8-8332-4a50044d429d"
  },
  {
   "name": "John Sallo",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 106,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 13,
   "ppg": 19.8,
   "leagueRank": 134,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.2,
   "playerId": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0"
  },
  {
   "name": "Marek Beck",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 111,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 11,
   "ppg": 20.3,
   "leagueRank": 143,
   "rating": 1.9,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "a7e7f77c-ee2e-4de3-a26e-c74576b0fd56"
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
   "winPct": 66.7,
   "diff": 5,
   "ppg": 19.3,
   "leagueRank": 169,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "67b0e676-9779-4bcb-8c38-86f2c84e1d73"
  },
  {
   "name": "Susan Lyle",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 109,
   "totalPointsAgainst": 105,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 4,
   "ppg": 18.2,
   "leagueRank": 178,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.9,
   "playerId": "5b600631-57fc-476c-9bbb-6951d5ffd294"
  },
  {
   "name": "Michael Finkelstein",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 46,
   "wins": 30,
   "losses": 16,
   "pointsWon": 900,
   "totalPointsAgainst": 808,
   "mixedWins": 17,
   "mixedLosses": 9,
   "genderWins": 13,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 65.2,
   "diff": 92,
   "ppg": 19.6,
   "leagueRank": 50,
   "rating": 0.1,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.2,
   "playerId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "name": "Shaoyi Sun",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 24,
   "losses": 13,
   "pointsWon": 742,
   "totalPointsAgainst": 619,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 18,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 64.9,
   "diff": 123,
   "ppg": 20.1,
   "leagueRank": 37,
   "rating": 1.6,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.9,
   "playerId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "name": "David Dietzel",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 270,
   "totalPointsAgainst": 244,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 64.3,
   "diff": 26,
   "ppg": 19.3,
   "leagueRank": 96,
   "rating": 1.8,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "a792f1c9-2858-416c-a98b-a1b60b785864"
  },
  {
   "name": "Todd Gasparre",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 23,
   "losses": 13,
   "pointsWon": 719,
   "totalPointsAgainst": 643,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 63.9,
   "diff": 76,
   "ppg": 20,
   "leagueRank": 39,
   "rating": 2.1,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.7,
   "playerId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d"
  },
  {
   "name": "Emil Pescatore",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 30,
   "losses": 17,
   "pointsWon": 922,
   "totalPointsAgainst": 822,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 63.8,
   "diff": 100,
   "ppg": 19.6,
   "leagueRank": 51,
   "rating": 0,
   "ratingGames": 47,
   "confidence": 89,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0,
   "playerId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec"
  },
  {
   "name": "Tom Maley",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 12,
   "losses": 7,
   "pointsWon": 346,
   "totalPointsAgainst": 336,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 63.2,
   "diff": 10,
   "ppg": 18.2,
   "leagueRank": 103,
   "rating": -0.9,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "name": "Tom Zentmeyer",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 30,
   "losses": 18,
   "pointsWon": 940,
   "totalPointsAgainst": 843,
   "mixedWins": 14,
   "mixedLosses": 8,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 62.5,
   "diff": 97,
   "ppg": 19.6,
   "leagueRank": 47,
   "rating": 2.2,
   "ratingGames": 48,
   "confidence": 89,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "name": "Joseph Yi",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 148,
   "totalPointsAgainst": 148,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 0,
   "ppg": 18.5,
   "leagueRank": 148,
   "rating": 2.1,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.6,
   "playerId": "e882fe51-042a-4368-b34f-fbabad19d7c1"
  },
  {
   "name": "Michael Dombrowiecki",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 407,
   "totalPointsAgainst": 359,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 61.9,
   "diff": 48,
   "ppg": 19.4,
   "leagueRank": 49,
   "rating": 0.8,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040"
  },
  {
   "name": "Cynthia Eisen",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 16,
   "losses": 10,
   "pointsWon": 491,
   "totalPointsAgainst": 454,
   "mixedWins": 10,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 61.5,
   "diff": 37,
   "ppg": 18.9,
   "leagueRank": 58,
   "rating": 0.8,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "4c762958-33e1-4b41-8077-424cb639af7e"
  },
  {
   "name": "Liangjie Zhu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 54,
   "wins": 33,
   "losses": 21,
   "pointsWon": 1017,
   "totalPointsAgainst": 978,
   "mixedWins": 14,
   "mixedLosses": 13,
   "genderWins": 19,
   "genderLosses": 8,
   "clutchWins": 14,
   "clutchLosses": 5,
   "winPct": 61.1,
   "diff": 39,
   "ppg": 18.8,
   "leagueRank": 57,
   "rating": 2.3,
   "ratingGames": 54,
   "confidence": 90,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "name": "Thomas Ross",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 22,
   "losses": 14,
   "pointsWon": 680,
   "totalPointsAgainst": 649,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 61.1,
   "diff": 31,
   "ppg": 18.9,
   "leagueRank": 65,
   "rating": -0.1,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.5,
   "playerId": "eab86a29-43ef-4b31-ba94-928f57f56c9c"
  },
  {
   "name": "Barbara Hess",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 23,
   "losses": 15,
   "pointsWon": 705,
   "totalPointsAgainst": 681,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 15,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 60.5,
   "diff": 24,
   "ppg": 18.6,
   "leagueRank": 70,
   "rating": 0.2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3"
  },
  {
   "name": "Eric Luque",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 26,
   "losses": 17,
   "pointsWon": 801,
   "totalPointsAgainst": 784,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 13,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 60.5,
   "diff": 17,
   "ppg": 18.6,
   "leagueRank": 73,
   "rating": 0.1,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "name": "Jamila Sefiane",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 29,
   "losses": 19,
   "pointsWon": 913,
   "totalPointsAgainst": 864,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 17,
   "genderLosses": 8,
   "clutchWins": 11,
   "clutchLosses": 6,
   "winPct": 60.4,
   "diff": 49,
   "ppg": 19,
   "leagueRank": 60,
   "rating": 0.4,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.3,
   "playerId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "name": "Marykristin Haskell",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 15,
   "losses": 10,
   "pointsWon": 476,
   "totalPointsAgainst": 423,
   "mixedWins": 10,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 60,
   "diff": 53,
   "ppg": 19,
   "leagueRank": 55,
   "rating": 1.3,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "name": "Jane Meng",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 15,
   "losses": 10,
   "pointsWon": 492,
   "totalPointsAgainst": 452,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 60,
   "diff": 40,
   "ppg": 19.7,
   "leagueRank": 59,
   "rating": 0.2,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.7,
   "playerId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "name": "Cuc Dang",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 285,
   "totalPointsAgainst": 274,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 11,
   "ppg": 19,
   "leagueRank": 94,
   "rating": 0.5,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.5,
   "playerId": "817939be-36ae-4a5d-8c02-62138ab71d4c"
  },
  {
   "name": "Christopher Krecke",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 93,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 8,
   "ppg": 20.2,
   "leagueRank": 171,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 1,
   "playerId": "788eac4e-f5a9-42f5-a1f2-69fc2f299678"
  },
  {
   "name": "Mei Li",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 34,
   "losses": 23,
   "pointsWon": 1086,
   "totalPointsAgainst": 977,
   "mixedWins": 22,
   "mixedLosses": 14,
   "genderWins": 12,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 59.6,
   "diff": 109,
   "ppg": 19.1,
   "leagueRank": 54,
   "rating": 1.8,
   "ratingGames": 57,
   "confidence": 90,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "28330003-3125-4050-be9a-ddd726dccfe2"
  },
  {
   "name": "Cheryl Isbirian",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 240,
   "totalPointsAgainst": 201,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 58.3,
   "diff": 39,
   "ppg": 20,
   "leagueRank": 115,
   "rating": 2.1,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "23c87311-dae9-47a5-be80-30aab8231ce2"
  },
  {
   "name": "Lei Dong",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 32,
   "losses": 23,
   "pointsWon": 1058,
   "totalPointsAgainst": 1006,
   "mixedWins": 18,
   "mixedLosses": 14,
   "genderWins": 14,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 58.2,
   "diff": 52,
   "ppg": 19.2,
   "leagueRank": 67,
   "rating": 0.2,
   "ratingGames": 55,
   "confidence": 90,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "name": "Sarah Nazario",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 26,
   "losses": 19,
   "pointsWon": 851,
   "totalPointsAgainst": 782,
   "mixedWins": 14,
   "mixedLosses": 8,
   "genderWins": 12,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 57.8,
   "diff": 69,
   "ppg": 18.9,
   "leagueRank": 61,
   "rating": 0.7,
   "ratingGames": 45,
   "confidence": 88,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "name": "Liangang Liu",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 34,
   "losses": 25,
   "pointsWon": 1124,
   "totalPointsAgainst": 1100,
   "mixedWins": 16,
   "mixedLosses": 18,
   "genderWins": 18,
   "genderLosses": 7,
   "clutchWins": 15,
   "clutchLosses": 8,
   "winPct": 57.6,
   "diff": 24,
   "ppg": 19.1,
   "leagueRank": 74,
   "rating": 0.4,
   "ratingGames": 59,
   "confidence": 90,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920"
  },
  {
   "name": "Ann Betterton",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 24,
   "losses": 18,
   "pointsWon": 805,
   "totalPointsAgainst": 753,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 57.1,
   "diff": 52,
   "ppg": 19.2,
   "leagueRank": 63,
   "rating": 0.9,
   "ratingGames": 42,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "name": "Mark Fappiano",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 136,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": 16,
   "ppg": 19.4,
   "leagueRank": 153,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -1.4,
   "playerId": "14289b5c-46c9-4728-b43d-9f01eeb74b8d"
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
   "winPct": 57.1,
   "diff": 9,
   "ppg": 18.9,
   "leagueRank": 145,
   "rating": 1.3,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "cb93ea73-1422-4b53-9665-41182caba8c8"
  },
  {
   "name": "Rui Zhang",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 51,
   "wins": 29,
   "losses": 22,
   "pointsWon": 970,
   "totalPointsAgainst": 886,
   "mixedWins": 17,
   "mixedLosses": 12,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 56.9,
   "diff": 84,
   "ppg": 19,
   "leagueRank": 68,
   "rating": 0.3,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "name": "Janine Forrest",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 597,
   "totalPointsAgainst": 555,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 56.3,
   "diff": 42,
   "ppg": 18.7,
   "leagueRank": 77,
   "rating": 0.4,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "name": "Yang Wang",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 311,
   "totalPointsAgainst": 289,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 56.3,
   "diff": 22,
   "ppg": 19.4,
   "leagueRank": 98,
   "rating": 0.1,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "389300d9-75bf-4c93-9fbc-cab6881f49b4"
  },
  {
   "name": "Jennifer Qian",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 588,
   "totalPointsAgainst": 600,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 56.3,
   "diff": -12,
   "ppg": 18.4,
   "leagueRank": 86,
   "rating": 0,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "name": "Christine Dugan",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 52,
   "wins": 29,
   "losses": 23,
   "pointsWon": 952,
   "totalPointsAgainst": 921,
   "mixedWins": 16,
   "mixedLosses": 13,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 55.8,
   "diff": 31,
   "ppg": 18.3,
   "leagueRank": 78,
   "rating": 1.3,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0,
   "playerId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "name": "Katrina Mcintyre",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 15,
   "losses": 12,
   "pointsWon": 503,
   "totalPointsAgainst": 483,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 55.6,
   "diff": 20,
   "ppg": 18.6,
   "leagueRank": 75,
   "rating": 1.3,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "eeead4e9-eec9-4cfc-887d-44222225d436"
  },
  {
   "name": "Gina Pultorak",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 21,
   "losses": 17,
   "pointsWon": 730,
   "totalPointsAgainst": 670,
   "mixedWins": 12,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 55.3,
   "diff": 60,
   "ppg": 19.2,
   "leagueRank": 64,
   "rating": 0.9,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "43326f18-7e59-4bc6-8008-7ec14cbcb18a"
  },
  {
   "name": "Susan Debbs",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 377,
   "totalPointsAgainst": 342,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 55,
   "diff": 35,
   "ppg": 18.9,
   "leagueRank": 66,
   "rating": 0.6,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9"
  },
  {
   "name": "Alicia Maguire",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 15,
   "losses": 13,
   "pointsWon": 541,
   "totalPointsAgainst": 537,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 53.6,
   "diff": 4,
   "ppg": 19.3,
   "leagueRank": 81,
   "rating": 0.2,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "36927aca-827a-4408-ab82-9dc0d06e2c8d"
  },
  {
   "name": "Jonathan Goldner",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 24,
   "losses": 21,
   "pointsWon": 841,
   "totalPointsAgainst": 815,
   "mixedWins": 11,
   "mixedLosses": 11,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 53.3,
   "diff": 26,
   "ppg": 18.7,
   "leagueRank": 83,
   "rating": 0.5,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "5142be9e-adb4-4f40-8632-1f6daa6d824b"
  },
  {
   "name": "Sam Zhou",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 27,
   "losses": 24,
   "pointsWon": 950,
   "totalPointsAgainst": 925,
   "mixedWins": 18,
   "mixedLosses": 12,
   "genderWins": 9,
   "genderLosses": 12,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 52.9,
   "diff": 25,
   "ppg": 18.6,
   "leagueRank": 85,
   "rating": 0.2,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "name": "John Morabito",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 10,
   "losses": 9,
   "pointsWon": 371,
   "totalPointsAgainst": 346,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 52.6,
   "diff": 25,
   "ppg": 19.5,
   "leagueRank": 97,
   "rating": 1.2,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.7,
   "playerId": "a018e2a6-8278-4354-8802-810742e62edf"
  },
  {
   "name": "Eric Markowitz",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 15,
   "losses": 14,
   "pointsWon": 542,
   "totalPointsAgainst": 535,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 51.7,
   "diff": 7,
   "ppg": 18.7,
   "leagueRank": 90,
   "rating": -0.2,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948"
  },
  {
   "name": "Leon Li",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 19,
   "losses": 18,
   "pointsWon": 708,
   "totalPointsAgainst": 665,
   "mixedWins": 11,
   "mixedLosses": 12,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 51.4,
   "diff": 43,
   "ppg": 19.1,
   "leagueRank": 76,
   "rating": 2.3,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "name": "Derek Le",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 13,
   "losses": 13,
   "pointsWon": 478,
   "totalPointsAgainst": 461,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 17,
   "ppg": 18.4,
   "leagueRank": 93,
   "rating": 0.1,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "name": "Jill Scully",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 11,
   "losses": 11,
   "pointsWon": 412,
   "totalPointsAgainst": 397,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": 15,
   "ppg": 18.7,
   "leagueRank": 92,
   "rating": -0.6,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.1,
   "playerId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "name": "Jill Lesnik",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 105,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 10,
   "ppg": 19.2,
   "leagueRank": 191,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.8,
   "playerId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864"
  },
  {
   "name": "Kajal Sinkar",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 108,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 8,
   "ppg": 19.3,
   "leagueRank": 161,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "name": "Rick Vazquez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 112,
   "totalPointsAgainst": 110,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 2,
   "ppg": 18.7,
   "leagueRank": 203,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "e532dafb-ff0f-43fc-82be-687d34ab8c14"
  },
  {
   "name": "Picky Vorabouth",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 292,
   "totalPointsAgainst": 292,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 0,
   "ppg": 18.3,
   "leagueRank": 105,
   "rating": 2.7,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.6,
   "playerId": "38336cb3-6ff4-4187-abe5-3f0a819d0a0d"
  },
  {
   "name": "Guy Judkowski",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 336,
   "totalPointsAgainst": 340,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": -4,
   "ppg": 18.7,
   "leagueRank": 117,
   "rating": -1.1,
   "ratingGames": 18,
   "confidence": 79,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "aaddf7e8-7ad2-4472-a8bd-89e6d5abc78c"
  },
  {
   "name": "Amy Chrebet",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 15,
   "losses": 15,
   "pointsWon": 540,
   "totalPointsAgainst": 550,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": -10,
   "ppg": 18,
   "leagueRank": 102,
   "rating": -0.1,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "name": "Ceil Gomez",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 237,
   "totalPointsAgainst": 256,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -19,
   "ppg": 16.9,
   "leagueRank": 159,
   "rating": -0.7,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0,
   "playerId": "e1cb1b3c-8e14-423b-bf0f-5ad2dabd6a4c"
  },
  {
   "name": "Christine Papa",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 22,
   "losses": 23,
   "pointsWon": 828,
   "totalPointsAgainst": 802,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 14,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 48.9,
   "diff": 26,
   "ppg": 18.4,
   "leagueRank": 89,
   "rating": 0.7,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "name": "Eva Danieli",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 37,
   "wins": 18,
   "losses": 19,
   "pointsWon": 692,
   "totalPointsAgainst": 629,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 48.6,
   "diff": 63,
   "ppg": 18.7,
   "leagueRank": 80,
   "rating": 1.2,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "name": "Brett Kleger",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 23,
   "losses": 25,
   "pointsWon": 834,
   "totalPointsAgainst": 890,
   "mixedWins": 15,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 47.9,
   "diff": -56,
   "ppg": 17.4,
   "leagueRank": 108,
   "rating": -0.7,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0,
   "playerId": "5b11ac59-091a-46d3-beb5-2d65d5d77135"
  },
  {
   "name": "Scott Rubin",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 344,
   "totalPointsAgainst": 344,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 47.4,
   "diff": 0,
   "ppg": 18.1,
   "leagueRank": 121,
   "rating": -0.4,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "name": "John Pineda",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 333,
   "totalPointsAgainst": 359,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 47.4,
   "diff": -26,
   "ppg": 17.5,
   "leagueRank": 130,
   "rating": -1.2,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "name": "Stacy Garretson",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 15,
   "losses": 17,
   "pointsWon": 579,
   "totalPointsAgainst": 577,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 46.9,
   "diff": 2,
   "ppg": 18.1,
   "leagueRank": 101,
   "rating": 0.4,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2"
  },
  {
   "name": "Dottie Kelly",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 266,
   "totalPointsAgainst": 283,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 46.7,
   "diff": -17,
   "ppg": 17.7,
   "leagueRank": 147,
   "rating": 0.9,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.6,
   "playerId": "57a09a98-991d-47a7-a13d-fb2afa6bd8ef"
  },
  {
   "name": "Jiang Jin",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 12,
   "losses": 14,
   "pointsWon": 474,
   "totalPointsAgainst": 490,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 46.2,
   "diff": -16,
   "ppg": 18.2,
   "leagueRank": 106,
   "rating": -0.6,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "579cead3-d960-4c14-8905-8c17c70ca003"
  },
  {
   "name": "Bob Castellano",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 216,
   "totalPointsAgainst": 250,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 46.2,
   "diff": -34,
   "ppg": 16.6,
   "leagueRank": 193,
   "rating": -1.5,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5"
  },
  {
   "name": "Alice Napolitano",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 17,
   "losses": 20,
   "pointsWon": 676,
   "totalPointsAgainst": 657,
   "mixedWins": 11,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 45.9,
   "diff": 19,
   "ppg": 18.3,
   "leagueRank": 99,
   "rating": 0.9,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.9,
   "playerId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "name": "Denise Richmond",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 16,
   "losses": 19,
   "pointsWon": 617,
   "totalPointsAgainst": 671,
   "mixedWins": 7,
   "mixedLosses": 10,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 45.7,
   "diff": -54,
   "ppg": 17.6,
   "leagueRank": 112,
   "rating": -0.2,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.7,
   "playerId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "name": "Robert Block",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 31,
   "wins": 14,
   "losses": 17,
   "pointsWon": 552,
   "totalPointsAgainst": 587,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 45.2,
   "diff": -35,
   "ppg": 17.8,
   "leagueRank": 114,
   "rating": -1.6,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "23d1d322-f31d-46b3-bf95-d86faab58b06"
  },
  {
   "name": "Natasha De Carvalho",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 333,
   "totalPointsAgainst": 322,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 44.4,
   "diff": 11,
   "ppg": 18.5,
   "leagueRank": 95,
   "rating": 1.4,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "name": "Steven Gregov",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 11,
   "losses": 14,
   "pointsWon": 427,
   "totalPointsAgainst": 476,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 44,
   "diff": -49,
   "ppg": 17.1,
   "leagueRank": 181,
   "rating": -1.5,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0,
   "playerId": "3efad314-83fb-4441-a7bf-510228cea1f8"
  },
  {
   "name": "Janet Garrity",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 15,
   "losses": 20,
   "pointsWon": 652,
   "totalPointsAgainst": 671,
   "mixedWins": 6,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 42.9,
   "diff": -19,
   "ppg": 18.6,
   "leagueRank": 111,
   "rating": -1.4,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "name": "Tara Kramer",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 33,
   "wins": 14,
   "losses": 19,
   "pointsWon": 578,
   "totalPointsAgainst": 637,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 42.4,
   "diff": -59,
   "ppg": 17.5,
   "leagueRank": 119,
   "rating": -2.2,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "name": "Lance Brown",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 475,
   "totalPointsAgainst": 483,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 42.3,
   "diff": -8,
   "ppg": 18.3,
   "leagueRank": 104,
   "rating": 0.7,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "name": "Ed Gieske",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 470,
   "totalPointsAgainst": 502,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 42.3,
   "diff": -32,
   "ppg": 18.1,
   "leagueRank": 113,
   "rating": 0,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "314486b1-6723-4b33-9dba-fa5756065707"
  },
  {
   "name": "Richard Demeuse",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 18,
   "losses": 25,
   "pointsWon": 768,
   "totalPointsAgainst": 791,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 10,
   "winPct": 41.9,
   "diff": -23,
   "ppg": 17.9,
   "leagueRank": 110,
   "rating": 0.1,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "name": "Kristen Soucie",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 443,
   "totalPointsAgainst": 451,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 41.7,
   "diff": -8,
   "ppg": 18.5,
   "leagueRank": 109,
   "rating": -0.8,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4"
  },
  {
   "name": "Peter Shen",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 212,
   "totalPointsAgainst": 225,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 41.7,
   "diff": -13,
   "ppg": 17.7,
   "leagueRank": 189,
   "rating": -1.1,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "7417eca2-2140-47f9-bd14-be210ba9d630"
  },
  {
   "name": "Jay Zeng",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 410,
   "totalPointsAgainst": 451,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 39.1,
   "diff": -41,
   "ppg": 17.8,
   "leagueRank": 120,
   "rating": -1.3,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "abc4de4c-a9af-4b75-8e57-5b7374af96c2"
  },
  {
   "name": "Paul Rappoport",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 7,
   "losses": 11,
   "pointsWon": 305,
   "totalPointsAgainst": 351,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 38.9,
   "diff": -46,
   "ppg": 16.9,
   "leagueRank": 128,
   "rating": -0.8,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "f2258c77-73cb-49de-991e-ed0cc4f3f9e2"
  },
  {
   "name": "David Mcintyre",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 243,
   "totalPointsAgainst": 249,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 38.5,
   "diff": -6,
   "ppg": 18.7,
   "leagueRank": 182,
   "rating": -0.6,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "1f3700d5-63e4-495e-92c1-1248224ed61d"
  },
  {
   "name": "Ping Peng",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 239,
   "totalPointsAgainst": 252,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 38.5,
   "diff": -13,
   "ppg": 18.4,
   "leagueRank": 160,
   "rating": -0.2,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "name": "Sandra Thompson",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 18,
   "losses": 29,
   "pointsWon": 789,
   "totalPointsAgainst": 914,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 38.3,
   "diff": -125,
   "ppg": 16.8,
   "leagueRank": 129,
   "rating": -1.2,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "name": "Sandro Stefanelli",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 58,
   "wins": 22,
   "losses": 36,
   "pointsWon": 1011,
   "totalPointsAgainst": 1134,
   "mixedWins": 14,
   "mixedLosses": 17,
   "genderWins": 8,
   "genderLosses": 19,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 37.9,
   "diff": -123,
   "ppg": 17.4,
   "leagueRank": 126,
   "rating": -0.8,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "1872d8d8-f958-4747-af3a-443d5f88a1c3"
  },
  {
   "name": "Kenny Nguyen",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 139,
   "totalPointsAgainst": 161,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -22,
   "ppg": 17.4,
   "leagueRank": 212,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1,
   "playerId": "4af425bc-76cc-44a4-a366-503ab5d0995a"
  },
  {
   "name": "Kristina Rhodes",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 415,
   "totalPointsAgainst": 458,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": -43,
   "ppg": 17.3,
   "leagueRank": 123,
   "rating": -0.5,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "77ecd1c3-b1df-469a-83ba-d12bd56f2c6a"
  },
  {
   "name": "Mengchu Zhou",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 27,
   "wins": 10,
   "losses": 17,
   "pointsWon": 480,
   "totalPointsAgainst": 520,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 37,
   "diff": -40,
   "ppg": 17.8,
   "leagueRank": 125,
   "rating": -0.9,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "14fc7872-1e6f-419e-adcb-d8e63826a37d"
  },
  {
   "name": "Cindy Hu",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 15,
   "losses": 26,
   "pointsWon": 684,
   "totalPointsAgainst": 796,
   "mixedWins": 6,
   "mixedLosses": 16,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 36.6,
   "diff": -112,
   "ppg": 16.7,
   "leagueRank": 141,
   "rating": -2.6,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169"
  },
  {
   "name": "John Zhong",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 187,
   "totalPointsAgainst": 209,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 36.4,
   "diff": -22,
   "ppg": 17,
   "leagueRank": 199,
   "rating": -1.8,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "6bfd212d-c7b4-4eff-ae3c-5e9424080282"
  },
  {
   "name": "Lisa Mctague",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 166,
   "totalPointsAgainst": 216,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 36.4,
   "diff": -50,
   "ppg": 15.1,
   "leagueRank": 209,
   "rating": -0.5,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.9,
   "playerId": "0d68c1e4-633a-4b56-bb73-06365cf5bdcb"
  },
  {
   "name": "Art Muth",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 8,
   "losses": 14,
   "pointsWon": 378,
   "totalPointsAgainst": 428,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 36.4,
   "diff": -50,
   "ppg": 17.2,
   "leagueRank": 132,
   "rating": -1.1,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "name": "Ronnie Yin",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 53,
   "wins": 19,
   "losses": 34,
   "pointsWon": 884,
   "totalPointsAgainst": 1029,
   "mixedWins": 14,
   "mixedLosses": 14,
   "genderWins": 5,
   "genderLosses": 20,
   "clutchWins": 10,
   "clutchLosses": 1,
   "winPct": 35.8,
   "diff": -145,
   "ppg": 16.7,
   "leagueRank": 138,
   "rating": -1.8,
   "ratingGames": 53,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "name": "John Hauth",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 244,
   "totalPointsAgainst": 274,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 35.7,
   "diff": -30,
   "ppg": 17.4,
   "leagueRank": 202,
   "rating": -1.2,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "60e2facd-7ab0-4dee-9e9e-919be67cf30c"
  },
  {
   "name": "Lily Liu",
   "gender": "Female",
   "team": "Premiere",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 15,
   "losses": 27,
   "pointsWon": 710,
   "totalPointsAgainst": 799,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 6,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 35.7,
   "diff": -89,
   "ppg": 16.9,
   "leagueRank": 127,
   "rating": 0.3,
   "ratingGames": 42,
   "confidence": 88,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.4,
   "playerId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "name": "Tara Lombardo",
   "gender": "Female",
   "team": "Premiere",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 20,
   "losses": 36,
   "pointsWon": 966,
   "totalPointsAgainst": 1089,
   "mixedWins": 12,
   "mixedLosses": 19,
   "genderWins": 8,
   "genderLosses": 17,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 35.7,
   "diff": -123,
   "ppg": 17.3,
   "leagueRank": 124,
   "rating": 0.2,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.4,
   "playerId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "name": "Amy Johnson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 11,
   "losses": 20,
   "pointsWon": 548,
   "totalPointsAgainst": 606,
   "mixedWins": 4,
   "mixedLosses": 12,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 35.5,
   "diff": -58,
   "ppg": 17.7,
   "leagueRank": 133,
   "rating": -2.7,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.7,
   "playerId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "name": "Yi Gu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 13,
   "losses": 25,
   "pointsWon": 686,
   "totalPointsAgainst": 730,
   "mixedWins": 6,
   "mixedLosses": 13,
   "genderWins": 7,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 11,
   "winPct": 34.2,
   "diff": -44,
   "ppg": 18.1,
   "leagueRank": 122,
   "rating": -1,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "0640ecce-0b14-4eac-9cbd-be86592d6102"
  },
  {
   "name": "Michael Palmer",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 111,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -6,
   "ppg": 18.5,
   "leagueRank": 214,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "e8e215ab-475a-4265-8095-f7c872cd6c56"
  },
  {
   "name": "Thomas Schillow",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 283,
   "totalPointsAgainst": 296,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 33.3,
   "diff": -13,
   "ppg": 18.9,
   "leagueRank": 166,
   "rating": 0.1,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 1.4,
   "playerId": "4ab0fd39-c108-419c-80f8-0dbe37dd75be"
  },
  {
   "name": "Peg Varani",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 106,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17.7,
   "leagueRank": 221,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.3,
   "playerId": "382737d3-273d-4efd-8ded-d40aaf5c739e"
  },
  {
   "name": "Julio Vidal",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 104,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -16,
   "ppg": 17.3,
   "leagueRank": 223,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 1.3,
   "playerId": "fc3b9b5a-304a-47b3-bf34-d553c4873ccf"
  },
  {
   "name": "Peilin Zhang",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 103,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -18,
   "ppg": 17.2,
   "leagueRank": 219,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "af7b661e-bc26-4b53-8e7c-e5657bdba32a"
  },
  {
   "name": "Todd Law",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 212,
   "totalPointsAgainst": 236,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -24,
   "ppg": 17.7,
   "leagueRank": 201,
   "rating": -1.1,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "9b0fe5d7-4586-4629-8408-928794ca1c3b"
  },
  {
   "name": "David Eisen",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 193,
   "totalPointsAgainst": 227,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -34,
   "ppg": 16.1,
   "leagueRank": 210,
   "rating": -2.2,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "name": "Coby Resnick",
   "gender": "Female",
   "team": "Premiere",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 10,
   "losses": 20,
   "pointsWon": 493,
   "totalPointsAgainst": 577,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 33.3,
   "diff": -84,
   "ppg": 16.4,
   "leagueRank": 137,
   "rating": -0.7,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158"
  },
  {
   "name": "Marc Friedman",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 42,
   "wins": 14,
   "losses": 28,
   "pointsWon": 713,
   "totalPointsAgainst": 805,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 7,
   "genderLosses": 15,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 33.3,
   "diff": -92,
   "ppg": 17,
   "leagueRank": 140,
   "rating": -1.9,
   "ratingGames": 42,
   "confidence": 88,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "name": "Sue Johnson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 11,
   "losses": 22,
   "pointsWon": 560,
   "totalPointsAgainst": 655,
   "mixedWins": 6,
   "mixedLosses": 13,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 33.3,
   "diff": -95,
   "ppg": 17,
   "leagueRank": 144,
   "rating": -2.1,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "name": "Evelyn Du",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 15,
   "losses": 31,
   "pointsWon": 743,
   "totalPointsAgainst": 920,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 5,
   "genderLosses": 18,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 32.6,
   "diff": -177,
   "ppg": 16.2,
   "leagueRank": 154,
   "rating": -2,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "08547f36-c938-4f82-a783-9c89ab07500c"
  },
  {
   "name": "Ellen Xu",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 7,
   "losses": 16,
   "pointsWon": 392,
   "totalPointsAgainst": 452,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 30.4,
   "diff": -60,
   "ppg": 17,
   "leagueRank": 146,
   "rating": -1.8,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "b8ecc741-4ae9-4e26-b199-497d34dac2b9"
  },
  {
   "name": "Meryl Nadler",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 6,
   "losses": 14,
   "pointsWon": 355,
   "totalPointsAgainst": 394,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 30,
   "diff": -39,
   "ppg": 17.8,
   "leagueRank": 135,
   "rating": -1.7,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "name": "Nancy Blank",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 5,
   "losses": 12,
   "pointsWon": 272,
   "totalPointsAgainst": 320,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 29.4,
   "diff": -48,
   "ppg": 16,
   "leagueRank": 198,
   "rating": -1.5,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7"
  },
  {
   "name": "Jim Peng",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 7,
   "losses": 17,
   "pointsWon": 406,
   "totalPointsAgainst": 470,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 29.2,
   "diff": -64,
   "ppg": 16.9,
   "leagueRank": 151,
   "rating": -1.5,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "name": "Margaret Weidlich",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 7,
   "losses": 17,
   "pointsWon": 396,
   "totalPointsAgainst": 467,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 29.2,
   "diff": -71,
   "ppg": 16.5,
   "leagueRank": 164,
   "rating": -2.9,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.2,
   "playerId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "name": "Linda Zhu",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 7,
   "losses": 17,
   "pointsWon": 396,
   "totalPointsAgainst": 476,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 29.2,
   "diff": -80,
   "ppg": 16.5,
   "leagueRank": 149,
   "rating": -0.8,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "name": "Stepan Nevshehirlian",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 10,
   "losses": 25,
   "pointsWon": 571,
   "totalPointsAgainst": 679,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -108,
   "ppg": 16.3,
   "leagueRank": 150,
   "rating": -0.8,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383"
  },
  {
   "name": "Cynthia Covie",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 12,
   "losses": 30,
   "pointsWon": 674,
   "totalPointsAgainst": 827,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 17,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -153,
   "ppg": 16,
   "leagueRank": 155,
   "rating": -0.9,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.3,
   "playerId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "name": "John Darrah",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 13,
   "losses": 33,
   "pointsWon": 791,
   "totalPointsAgainst": 916,
   "mixedWins": 6,
   "mixedLosses": 19,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 28.3,
   "diff": -125,
   "ppg": 17.2,
   "leagueRank": 136,
   "rating": 0,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.5,
   "playerId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84"
  },
  {
   "name": "Chris Norton",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 15,
   "losses": 38,
   "pointsWon": 870,
   "totalPointsAgainst": 1064,
   "mixedWins": 7,
   "mixedLosses": 19,
   "genderWins": 8,
   "genderLosses": 19,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 28.3,
   "diff": -194,
   "ppg": 16.4,
   "leagueRank": 162,
   "rating": -1.5,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "395868e3-8573-41ad-9b13-84b6a7bf7f35"
  },
  {
   "name": "Talen Singer",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 297,
   "totalPointsAgainst": 353,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 27.8,
   "diff": -56,
   "ppg": 16.5,
   "leagueRank": 179,
   "rating": -0.8,
   "ratingGames": 18,
   "confidence": 79,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "d4cdb8c8-9220-4aa7-b48a-41f9f30dff51"
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 298,
   "totalPointsAgainst": 357,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 27.8,
   "diff": -59,
   "ppg": 16.6,
   "leagueRank": 156,
   "rating": -2.8,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "name": "Craig Batten",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 9,
   "losses": 24,
   "pointsWon": 538,
   "totalPointsAgainst": 656,
   "mixedWins": 4,
   "mixedLosses": 13,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 27.3,
   "diff": -118,
   "ppg": 16.3,
   "leagueRank": 167,
   "rating": -3.2,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d"
  },
  {
   "name": "James Gross",
   "gender": "Male",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 11,
   "losses": 30,
   "pointsWon": 642,
   "totalPointsAgainst": 803,
   "mixedWins": 6,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 26.8,
   "diff": -161,
   "ppg": 15.7,
   "leagueRank": 165,
   "rating": -1.2,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.5,
   "playerId": "6b3f649d-2418-4136-b045-4795d55e643d"
  },
  {
   "name": "Steve Gerwer",
   "gender": "Male",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 45,
   "wins": 12,
   "losses": 33,
   "pointsWon": 727,
   "totalPointsAgainst": 877,
   "mixedWins": 8,
   "mixedLosses": 15,
   "genderWins": 4,
   "genderLosses": 18,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 26.7,
   "diff": -150,
   "ppg": 16.2,
   "leagueRank": 157,
   "rating": -0.9,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.5,
   "playerId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
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
   "winPct": 25,
   "diff": -6,
   "ppg": 18.8,
   "leagueRank": 218,
   "rating": -0.9,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": -1.3,
   "playerId": "236ac99f-3ad9-42b7-bb97-a2c238fbbf98"
  },
  {
   "name": "Terry Gabel",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 140,
   "totalPointsAgainst": 164,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -24,
   "ppg": 17.5,
   "leagueRank": 215,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.2,
   "playerId": "ab357b8a-99d5-4fe3-aae6-25eb07662d7c"
  },
  {
   "name": "Lara Webb",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 133,
   "totalPointsAgainst": 159,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -26,
   "ppg": 16.6,
   "leagueRank": 216,
   "rating": 0.3,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1,
   "playerId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76"
  },
  {
   "name": "Xianguan Li",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 133,
   "totalPointsAgainst": 159,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -26,
   "ppg": 16.6,
   "leagueRank": 220,
   "rating": -0.6,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "5171167d-c9ee-4c90-abf5-7157d27d6f9e"
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
   "winPct": 25,
   "diff": -27,
   "ppg": 16.4,
   "leagueRank": 217,
   "rating": 1.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 2.8,
   "playerId": "034ca84d-576b-41d0-ba1c-103104b1be1f"
  },
  {
   "name": "Kevin Jackson",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 202,
   "totalPointsAgainst": 244,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -42,
   "ppg": 16.8,
   "leagueRank": 213,
   "rating": -2.2,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "de010831-4d74-40f1-8807-75b0d0447124"
  },
  {
   "name": "Jeffrey Rubin",
   "gender": "Male",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 4,
   "losses": 13,
   "pointsWon": 285,
   "totalPointsAgainst": 346,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 23.5,
   "diff": -61,
   "ppg": 16.8,
   "leagueRank": 200,
   "rating": -1.1,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "e3a89681-1dac-4f6e-8982-2245996406e6"
  },
  {
   "name": "Savita Nandal",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 214,
   "totalPointsAgainst": 263,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 23.1,
   "diff": -49,
   "ppg": 16.5,
   "leagueRank": 208,
   "rating": -2.4,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0,
   "playerId": "ce787b4f-30b9-4fd0-a12a-caba1f27ca68"
  },
  {
   "name": "Steve Hong",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 7,
   "losses": 26,
   "pointsWon": 554,
   "totalPointsAgainst": 658,
   "mixedWins": 5,
   "mixedLosses": 14,
   "genderWins": 2,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 21.2,
   "diff": -104,
   "ppg": 16.8,
   "leagueRank": 163,
   "rating": -0.6,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.3,
   "playerId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "name": "Erik Lombardo",
   "gender": "Male",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 38,
   "wins": 8,
   "losses": 30,
   "pointsWon": 571,
   "totalPointsAgainst": 763,
   "mixedWins": 7,
   "mixedLosses": 14,
   "genderWins": 1,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 21.1,
   "diff": -192,
   "ppg": 15,
   "leagueRank": 185,
   "rating": -2.7,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "name": "Laura Sweet",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 12,
   "losses": 45,
   "pointsWon": 904,
   "totalPointsAgainst": 1140,
   "mixedWins": 7,
   "mixedLosses": 20,
   "genderWins": 5,
   "genderLosses": 25,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 21.1,
   "diff": -236,
   "ppg": 15.9,
   "leagueRank": 173,
   "rating": -0.6,
   "ratingGames": 57,
   "confidence": 91,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.9,
   "playerId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "name": "June Lee",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 5,
   "losses": 19,
   "pointsWon": 395,
   "totalPointsAgainst": 479,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 20.8,
   "diff": -84,
   "ppg": 16.5,
   "leagueRank": 177,
   "rating": -2.7,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "c5098f72-b304-4552-b25b-8f4dec2709e0"
  },
  {
   "name": "David Marchese",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 5,
   "losses": 19,
   "pointsWon": 391,
   "totalPointsAgainst": 477,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 20.8,
   "diff": -86,
   "ppg": 16.3,
   "leagueRank": 176,
   "rating": -2.3,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "name": "Yang Ruan",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 78,
   "totalPointsAgainst": 102,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -24,
   "ppg": 15.6,
   "leagueRank": 231,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.3,
   "playerId": "313153f7-7e8f-4e60-9340-0e0d1a43d6be"
  },
  {
   "name": "Laura Govan",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 77,
   "totalPointsAgainst": 102,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -25,
   "ppg": 15.4,
   "leagueRank": 230,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.8,
   "playerId": "110b981a-77ae-42b0-8200-4e30e9ce157a"
  },
  {
   "name": "Greg Schipske",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 64,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -39,
   "ppg": 12.8,
   "leagueRank": 238,
   "rating": -2.8,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.3,
   "playerId": "cdd3c5e6-7a40-4b65-a175-7910ba8e9ef9"
  },
  {
   "name": "Alfonse Calato",
   "gender": "Male",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 8,
   "losses": 32,
   "pointsWon": 657,
   "totalPointsAgainst": 818,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 1,
   "genderLosses": 19,
   "clutchWins": 5,
   "clutchLosses": 12,
   "winPct": 20,
   "diff": -161,
   "ppg": 16.4,
   "leagueRank": 175,
   "rating": -1.9,
   "ratingGames": 40,
   "confidence": 89,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.4,
   "playerId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "name": "Tom Kresky",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 7,
   "losses": 30,
   "pointsWon": 609,
   "totalPointsAgainst": 756,
   "mixedWins": 3,
   "mixedLosses": 15,
   "genderWins": 4,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 18.9,
   "diff": -147,
   "ppg": 16.5,
   "leagueRank": 174,
   "rating": -1.8,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "name": "Jimmy Shapiro",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 6,
   "losses": 26,
   "pointsWon": 526,
   "totalPointsAgainst": 632,
   "mixedWins": 2,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 15,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 18.8,
   "diff": -106,
   "ppg": 16.4,
   "leagueRank": 170,
   "rating": -0.6,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.4,
   "playerId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "name": "Andrew Fleischer",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 5,
   "losses": 23,
   "pointsWon": 436,
   "totalPointsAgainst": 568,
   "mixedWins": 1,
   "mixedLosses": 17,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 17.9,
   "diff": -132,
   "ppg": 15.6,
   "leagueRank": 186,
   "rating": -2.2,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.3,
   "playerId": "d1b4ea08-869c-4a17-a8c3-e96b13dd8ec7"
  },
  {
   "name": "Wally Liu",
   "gender": "Male",
   "team": "Premiere",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 4,
   "losses": 19,
   "pointsWon": 359,
   "totalPointsAgainst": 472,
   "mixedWins": 2,
   "mixedLosses": 11,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 17.4,
   "diff": -113,
   "ppg": 15.6,
   "leagueRank": 184,
   "rating": -1.8,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.6,
   "playerId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7"
  },
  {
   "name": "Marr Flores",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 104,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -17,
   "ppg": 17.3,
   "leagueRank": 229,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 2,
   "playerId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66"
  },
  {
   "name": "James Price",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 98,
   "totalPointsAgainst": 115,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -17,
   "ppg": 16.3,
   "leagueRank": 227,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.2,
   "playerId": "c7a0b075-272d-4427-98c0-02955690731f"
  },
  {
   "name": "Christy Beale",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 89,
   "totalPointsAgainst": 115,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -26,
   "ppg": 14.8,
   "leagueRank": 232,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "d034daeb-3fd8-4273-80f5-3a272ceab674"
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
   "winPct": 16.7,
   "diff": -27,
   "ppg": 15.5,
   "leagueRank": 225,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 2.1,
   "playerId": "1762a9ad-6493-4407-a0ce-de2de697c313"
  },
  {
   "name": "Fabienne Yu",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 87,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -37,
   "ppg": 14.5,
   "leagueRank": 233,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 2.3,
   "playerId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea"
  },
  {
   "name": "John Ficarra",
   "gender": "Male",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 6,
   "losses": 30,
   "pointsWon": 531,
   "totalPointsAgainst": 733,
   "mixedWins": 2,
   "mixedLosses": 17,
   "genderWins": 4,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 16.7,
   "diff": -202,
   "ppg": 14.8,
   "leagueRank": 190,
   "rating": -2.2,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.8,
   "playerId": "b1a0876c-0702-497d-95a4-5a8a894ff2d5"
  },
  {
   "name": "Quen Koon Ng",
   "gender": "Female",
   "team": "Premiere",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 6,
   "losses": 30,
   "pointsWon": 523,
   "totalPointsAgainst": 735,
   "mixedWins": 2,
   "mixedLosses": 14,
   "genderWins": 4,
   "genderLosses": 16,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 16.7,
   "diff": -212,
   "ppg": 14.5,
   "leagueRank": 195,
   "rating": -3.1,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.4,
   "playerId": "6c655208-0558-4174-a618-7988d5783914"
  },
  {
   "name": "Emily Abbott",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 3,
   "losses": 16,
   "pointsWon": 306,
   "totalPointsAgainst": 392,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 15.8,
   "diff": -86,
   "ppg": 16.1,
   "leagueRank": 205,
   "rating": -2.2,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "d0a77087-5f1c-4d8c-841d-af39ac48dca3"
  },
  {
   "name": "Hayley Yandoli",
   "gender": "Female",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 7,
   "losses": 41,
   "pointsWon": 794,
   "totalPointsAgainst": 984,
   "mixedWins": 3,
   "mixedLosses": 21,
   "genderWins": 4,
   "genderLosses": 20,
   "clutchWins": 3,
   "clutchLosses": 15,
   "winPct": 14.6,
   "diff": -190,
   "ppg": 16.5,
   "leagueRank": 180,
   "rating": -1.8,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "1fc2dd51-135b-46d6-91ef-9291b573e78a"
  },
  {
   "name": "Ritu Chandra",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 112,
   "totalPointsAgainst": 144,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -32,
   "ppg": 16,
   "leagueRank": 226,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 2.4,
   "playerId": "37ce598e-d60f-4af8-b043-106d2ea1cdf1"
  },
  {
   "name": "Hal Golden",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 225,
   "totalPointsAgainst": 290,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -65,
   "ppg": 16.1,
   "leagueRank": 222,
   "rating": -2.2,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "name": "Wendy Zukerberg",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 199,
   "totalPointsAgainst": 290,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -91,
   "ppg": 14.2,
   "leagueRank": 211,
   "rating": -2.6,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.7,
   "playerId": "f34665bd-6866-415f-a498-21d7f69fb895"
  },
  {
   "name": "Derek Livingston",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 5,
   "losses": 30,
   "pointsWon": 540,
   "totalPointsAgainst": 711,
   "mixedWins": 1,
   "mixedLosses": 15,
   "genderWins": 4,
   "genderLosses": 15,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 14.3,
   "diff": -171,
   "ppg": 15.4,
   "leagueRank": 188,
   "rating": -2.3,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.3,
   "playerId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "name": "Lisa Loeber",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 5,
   "losses": 34,
   "pointsWon": 588,
   "totalPointsAgainst": 792,
   "mixedWins": 2,
   "mixedLosses": 17,
   "genderWins": 3,
   "genderLosses": 17,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 12.8,
   "diff": -204,
   "ppg": 15.1,
   "leagueRank": 192,
   "rating": -2,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.6,
   "playerId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd"
  },
  {
   "name": "Jieping Wang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 134,
   "totalPointsAgainst": 158,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -24,
   "ppg": 16.8,
   "leagueRank": 224,
   "rating": 0.5,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.3,
   "playerId": "c9088878-9755-4e32-abed-4a4e5a42f9a8"
  },
  {
   "name": "Susan Vinci",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 128,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -38,
   "ppg": 16,
   "leagueRank": 228,
   "rating": -1.2,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.1,
   "playerId": "2d636359-c53e-42db-a769-f58fb7c7a212"
  },
  {
   "name": "Sal Frangipane",
   "gender": "Male",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 5,
   "losses": 36,
   "pointsWon": 657,
   "totalPointsAgainst": 836,
   "mixedWins": 2,
   "mixedLosses": 16,
   "genderWins": 3,
   "genderLosses": 20,
   "clutchWins": 1,
   "clutchLosses": 10,
   "winPct": 12.2,
   "diff": -179,
   "ppg": 16,
   "leagueRank": 187,
   "rating": -1.3,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.8,
   "playerId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a"
  },
  {
   "name": "Nancy Lin",
   "gender": "Female",
   "team": "Premiere",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 6,
   "losses": 44,
   "pointsWon": 742,
   "totalPointsAgainst": 1031,
   "mixedWins": 1,
   "mixedLosses": 23,
   "genderWins": 5,
   "genderLosses": 21,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 12,
   "diff": -289,
   "ppg": 14.8,
   "leagueRank": 196,
   "rating": -3.1,
   "ratingGames": 50,
   "confidence": 90,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "name": "Kerry Gray-Style",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 4,
   "losses": 30,
   "pointsWon": 520,
   "totalPointsAgainst": 705,
   "mixedWins": 2,
   "mixedLosses": 15,
   "genderWins": 2,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 11.8,
   "diff": -185,
   "ppg": 15.3,
   "leagueRank": 194,
   "rating": -2.3,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.5,
   "playerId": "5d2f1c91-647e-4f06-bd5e-ad6550674ce4"
  },
  {
   "name": "Kelly Dalsey",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 5,
   "losses": 43,
   "pointsWon": 689,
   "totalPointsAgainst": 995,
   "mixedWins": 2,
   "mixedLosses": 22,
   "genderWins": 3,
   "genderLosses": 21,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 10.4,
   "diff": -306,
   "ppg": 14.4,
   "leagueRank": 204,
   "rating": -3.6,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6"
  },
  {
   "name": "Ping Yang",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 2,
   "losses": 20,
   "pointsWon": 342,
   "totalPointsAgainst": 458,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 15,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 9.1,
   "diff": -116,
   "ppg": 15.5,
   "leagueRank": 207,
   "rating": -4.5,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "a1b13a29-05c7-4582-9227-22a7bcb0e713"
  },
  {
   "name": "Tim Bruno",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 2,
   "losses": 24,
   "pointsWon": 400,
   "totalPointsAgainst": 542,
   "mixedWins": 1,
   "mixedLosses": 12,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 7.7,
   "diff": -142,
   "ppg": 15.4,
   "leagueRank": 197,
   "rating": -2,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.5,
   "playerId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "name": "Jiyun Yuh",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 43,
   "wins": 3,
   "losses": 40,
   "pointsWon": 646,
   "totalPointsAgainst": 888,
   "mixedWins": 1,
   "mixedLosses": 22,
   "genderWins": 2,
   "genderLosses": 18,
   "clutchWins": 0,
   "clutchLosses": 9,
   "winPct": 7,
   "diff": -242,
   "ppg": 15,
   "leagueRank": 206,
   "rating": -4.2,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
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
   "leagueRank": 251,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2b2d474d-281c-42d7-854b-6bfe32f20563"
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
   "leagueRank": 252,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3b22e073-2c4b-4245-a142-29441ec509a3"
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
   "leagueRank": 269,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6f2553e1-299a-407f-b919-41d4b3a84bae"
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
   "leagueRank": 258,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "aa73e326-7295-4153-8f57-b4903877923d"
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
   "leagueRank": 262,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f0ced78a-591c-415f-9839-a538a6cb0d2c"
  },
  {
   "name": "Johnson Chang",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 250,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6994f1c2-d156-436a-bbb6-e9e348bea33a"
  },
  {
   "name": "Gretchen Keith",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 254,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6a753670-d9fd-4b11-bd26-ff6214376fb7"
  },
  {
   "name": "John Rogers",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 260,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ea556dfe-e3ee-4ad0-ba0f-62e1e9f6bf89"
  },
  {
   "name": "Guy Ohn",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 257,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "name": "Todd Stein",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 79,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -26,
   "ppg": 15.8,
   "leagueRank": 239,
   "rating": -1.7,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5"
  },
  {
   "name": "John Dechristopher",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 99,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -27,
   "ppg": 16.5,
   "leagueRank": 237,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.6,
   "playerId": "57ad882f-2a78-4756-adcf-3839833ddcd3"
  },
  {
   "name": "Danny Mellul",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 75,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -30,
   "ppg": 15,
   "leagueRank": 240,
   "rating": -1.8,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "5dccd915-178e-4316-8e9b-e0a3db8edfa9"
  },
  {
   "name": "Lucy Chow",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 0,
   "outsideSub": true,
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
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -31,
   "ppg": 15.8,
   "leagueRank": 236,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.8,
   "playerId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "name": "Jean Rosenbaum",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 115,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -32,
   "ppg": 16.4,
   "leagueRank": 234,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.5,
   "playerId": "2b4a12ef-68c9-4ca5-a8f7-d1d58503bf1c"
  },
  {
   "name": "Albert Pamudji",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 73,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -32,
   "ppg": 14.6,
   "leagueRank": 241,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 2,
   "playerId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
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
   "winPct": 0,
   "diff": -43,
   "ppg": 13.8,
   "leagueRank": 242,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.4,
   "playerId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3"
  },
  {
   "name": "Rosalyn Goldsmith",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 61,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -44,
   "ppg": 12.2,
   "leagueRank": 247,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 2.4,
   "playerId": "545c12c3-3098-47ca-b35e-429f37f481f5"
  },
  {
   "name": "Dan Loreti",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 79,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -47,
   "ppg": 13.2,
   "leagueRank": 243,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 2.2,
   "playerId": "2ce4808a-9400-42cb-a756-fa8ecdf2a1eb"
  },
  {
   "name": "Dave Govan",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 36,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -48,
   "ppg": 9,
   "leagueRank": 248,
   "rating": -3.3,
   "ratingGames": 4,
   "confidence": 46,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.9,
   "playerId": "5c1e16e3-303e-48ca-8ad7-77077727394d"
  },
  {
   "name": "Lan Bin",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 120,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -48,
   "ppg": 15,
   "leagueRank": 235,
   "rating": -2.8,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "97ed17e1-9a68-45fe-adf5-f20d33ea7239"
  },
  {
   "name": "Laura Altieri",
   "gender": "Female",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 77,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -49,
   "ppg": 12.8,
   "leagueRank": 246,
   "rating": -2.7,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.8,
   "playerId": "16aee8ed-3398-46f5-bd76-ec71473a2db4"
  },
  {
   "name": "Gary Garretson",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 75,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -51,
   "ppg": 12.5,
   "leagueRank": 245,
   "rating": -2.6,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 2.1,
   "playerId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "name": "Kelly Walker",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 244,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.3,
   "playerId": "13c6962e-5a72-4d69-a262-5010f8390ddd"
  }
 ],
 "teams": [
  {
   "name": "Pickleball Palace",
   "w": 8,
   "l": 0,
   "pf": 5234,
   "pa": 4062,
   "gw": 202,
   "gl": 54,
   "diff": 1172,
   "gameDiff": 148,
   "power": 1.9,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     94,
     34
    ],
    "male": [
     51,
     13
    ],
    "female": [
     57,
     7
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 7,
   "l": 1,
   "pf": 5178,
   "pa": 4264,
   "gw": 189,
   "gl": 67,
   "diff": 914,
   "gameDiff": 122,
   "power": 1.6,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     98,
     30
    ],
    "male": [
     47,
     17
    ],
    "female": [
     44,
     20
    ]
   }
  },
  {
   "name": "Bounce Malvern Black",
   "w": 7,
   "l": 1,
   "pf": 5202,
   "pa": 4371,
   "gw": 185,
   "gl": 71,
   "diff": 831,
   "gameDiff": 114,
   "power": 1.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     90,
     38
    ],
    "male": [
     45,
     19
    ],
    "female": [
     50,
     14
    ]
   }
  },
  {
   "name": "Flemington Blue",
   "w": 6,
   "l": 2,
   "pf": 4054,
   "pa": 4047,
   "gw": 157,
   "gl": 99,
   "diff": 7,
   "gameDiff": 58,
   "power": -0.3,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     77,
     51
    ],
    "male": [
     36,
     28
    ],
    "female": [
     44,
     20
    ]
   }
  },
  {
   "name": "Pickle Place",
   "w": 5,
   "l": 4,
   "pf": 5321,
   "pa": 5142,
   "gw": 161,
   "gl": 127,
   "diff": 179,
   "gameDiff": 34,
   "power": 0.3,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     82,
     62
    ],
    "male": [
     46,
     26
    ],
    "female": [
     33,
     39
    ]
   }
  },
  {
   "name": "Stelton Sports",
   "w": 5,
   "l": 4,
   "pf": 5466,
   "pa": 5425,
   "gw": 143,
   "gl": 145,
   "diff": 41,
   "gameDiff": -2,
   "power": 0.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     73,
     71
    ],
    "male": [
     35,
     37
    ],
    "female": [
     35,
     37
    ]
   }
  },
  {
   "name": "Flemington Green",
   "w": 5,
   "l": 4,
   "pf": 5151,
   "pa": 5242,
   "gw": 138,
   "gl": 150,
   "diff": -91,
   "gameDiff": -12,
   "power": 0.1,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     65,
     79
    ],
    "male": [
     31,
     41
    ],
    "female": [
     42,
     30
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 3,
   "l": 4,
   "pf": 3688,
   "pa": 3517,
   "gw": 99,
   "gl": 125,
   "diff": 171,
   "gameDiff": -26,
   "power": 0.9,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     54,
     58
    ],
    "male": [
     27,
     29
    ],
    "female": [
     18,
     38
    ]
   }
  },
  {
   "name": "Allstar Pickler",
   "w": 2,
   "l": 5,
   "pf": 3875,
   "pa": 4207,
   "gw": 92,
   "gl": 132,
   "diff": -332,
   "gameDiff": -40,
   "power": -0.3,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     46,
     66
    ],
    "male": [
     32,
     24
    ],
    "female": [
     14,
     42
    ]
   }
  },
  {
   "name": "Bounce Malvern Boom",
   "w": 2,
   "l": 7,
   "pf": 5154,
   "pa": 5603,
   "gw": 117,
   "gl": 171,
   "diff": -449,
   "gameDiff": -54,
   "power": -0.5,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     59,
     85
    ],
    "male": [
     22,
     50
    ],
    "female": [
     36,
     36
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 0,
   "l": 9,
   "pf": 4691,
   "pa": 5833,
   "gw": 67,
   "gl": 221,
   "diff": -1142,
   "gameDiff": -154,
   "power": -1.4,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     38,
     106
    ],
    "male": [
     12,
     60
    ],
    "female": [
     17,
     55
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 0,
   "l": 9,
   "pf": 4602,
   "pa": 5903,
   "gw": 50,
   "gl": 238,
   "diff": -1301,
   "gameDiff": -188,
   "power": -1.7,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     24,
     120
    ],
    "male": [
     16,
     56
    ],
    "female": [
     10,
     62
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Nancy Blank",
   "b": "Jonathan Goldner",
   "team": "Pickle Place",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 3.8,
   "avgActual": 7.5,
   "avgExpected": -0.2,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "5142be9e-adb4-4f40-8632-1f6daa6d824b"
  },
  {
   "a": "Stacey Frank",
   "b": "Patricia Boyle",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.8,
   "avgActual": 7.5,
   "avgExpected": 2,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "a": "Susan Ackley",
   "b": "Tom Maley",
   "team": "Flemington Blue",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.7,
   "avgActual": 6.8,
   "avgExpected": 1.4,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Andrew Fleischer",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.6,
   "avgActual": 1.3,
   "avgExpected": -4.6,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "d1b4ea08-869c-4a17-a8c3-e96b13dd8ec7"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 8.6,
   "avgExpected": 4.2,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Leon Li",
   "b": "Ann Betterton",
   "team": "Stelton Sports",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 6,
   "avgExpected": 1.9,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Derek Le",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.2,
   "avgActual": 7.7,
   "avgExpected": 2.5,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Alice Napolitano",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 10.7,
   "avgExpected": 5.5,
   "aId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Ronnie Yin",
   "b": "Abraham Telechanski",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.2,
   "avgActual": 4.7,
   "avgExpected": -0.4,
   "aId": "988636eb-4604-44d6-af70-2732b787ec2a",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Jay Zeng",
   "b": "Sam Zhou",
   "team": "Stelton Sports",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 2.2,
   "avgActual": 1.4,
   "avgExpected": -2.5,
   "aId": "abc4de4c-a9af-4b75-8e57-5b7374af96c2",
   "bId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "a": "Sandra Thompson",
   "b": "David Marchese",
   "team": "Bounce Malvern Boom",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 2.1,
   "avgActual": 1,
   "avgExpected": -3.2,
   "aId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Steven Gregov",
   "b": "Scott Rubin",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 4.3,
   "avgExpected": -0.5,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Keith Goldberg",
   "b": "Jingwei Wu",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 2,
   "avgActual": 9.2,
   "avgExpected": 5.9,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "Christine Dugan",
   "b": "Brett Kleger",
   "team": "Bounce Malvern Boom",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 2,
   "avgActual": 4.3,
   "avgExpected": 1.4,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "5b11ac59-091a-46d3-beb5-2d65d5d77135"
  },
  {
   "a": "Eva Danieli",
   "b": "Darren Saks",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 9.3,
   "avgExpected": 4.9,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Tara Lombardo",
   "b": "Erik Lombardo",
   "team": "Premiere",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 1.9,
   "avgActual": -0.2,
   "avgExpected": -3,
   "aId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Sarah Nazario",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 6.3,
   "avgExpected": 2,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Carol Mastroianni",
   "team": "Flemington Blue",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 6.6,
   "avgExpected": 3.2,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Cynthia Eisen",
   "b": "Jonathan Goldner",
   "team": "Pickle Place",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 5,
   "avgExpected": 0.7,
   "aId": "4c762958-33e1-4b41-8077-424cb639af7e",
   "bId": "5142be9e-adb4-4f40-8632-1f6daa6d824b"
  },
  {
   "a": "Denise Richmond",
   "b": "Katrina Mcintyre",
   "team": "Flemington Green",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 2.6,
   "avgExpected": -0.6,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "eeead4e9-eec9-4cfc-887d-44222225d436"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Erik Lombardo",
   "team": "Premiere",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1.8,
   "avgActual": -1,
   "avgExpected": -4,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Cynthia Eisen",
   "b": "Marykristin Haskell",
   "team": "Pickle Place",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 7.7,
   "avgExpected": 3.5,
   "aId": "4c762958-33e1-4b41-8077-424cb639af7e",
   "bId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Eric Markowitz",
   "team": "Pickle Place",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 5.3,
   "avgExpected": 1.2,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948"
  },
  {
   "a": "Lily Liu",
   "b": "Steve Gerwer",
   "team": "Premiere",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 2.3,
   "avgExpected": -0.5,
   "aId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2",
   "bId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
  },
  {
   "a": "Bud Heller",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 8.7,
   "avgExpected": 4.8,
   "aId": "9282b1b2-6551-481c-b9b8-2a246a49a621",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Lance Brown",
   "b": "Meryl Nadler",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 2,
   "avgExpected": -1.3,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Emil Pescatore",
   "b": "Alex Lee",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 5.8,
   "avgExpected": 3,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "22e2201d-16d7-4474-847b-5f4f0cef44e6"
  },
  {
   "a": "Lisa Loeber",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 0,
   "avgExpected": -3.4,
   "aId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "Brian Rowan",
   "b": "Patricia Boyle",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 6.3,
   "avgExpected": 2.6,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "a": "Jiyun Yuh",
   "b": "Tim Bruno",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 1.6,
   "avgActual": -3.7,
   "avgExpected": -7.4,
   "aId": "c94ae231-9f0c-4212-b769-7bd708d8fc38",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Quen Koon Ng",
   "b": "Nancy Lin",
   "team": "Premiere",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 1.6,
   "avgActual": -3,
   "avgExpected": -5.5,
   "aId": "6c655208-0558-4174-a618-7988d5783914",
   "bId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "a": "Karan Pescatore",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 8.7,
   "avgExpected": 6,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Brandon Fulford",
   "b": "Liangjie Zhu",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2,
   "avgExpected": -0.9,
   "aId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Marc Harden",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 10,
   "avgExpected": 7.9,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 5.4,
   "avgExpected": 3,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Laura Sweet",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.5,
   "avgActual": -0.7,
   "avgExpected": -4.1,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Art Muth",
   "b": "Marc Friedman",
   "team": "Flemington Blue",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 0.3,
   "avgExpected": -2.8,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Liangang Liu",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 17,
   "w": 12,
   "l": 5,
   "synergy": 1.5,
   "avgActual": 2.2,
   "avgExpected": 0.4,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Ceil Gomez",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2,
   "avgExpected": -1,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "e1cb1b3c-8e14-423b-bf0f-5ad2dabd6a4c"
  },
  {
   "a": "John Pineda",
   "b": "Scott Rubin",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 4.7,
   "avgExpected": 1.2,
   "aId": "099e3831-88c1-4907-9869-f193db58b64b",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Christine Dugan",
   "b": "Kristina Rhodes",
   "team": "Bounce Malvern Boom",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 2.2,
   "avgExpected": -0.6,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "77ecd1c3-b1df-469a-83ba-d12bd56f2c6a"
  },
  {
   "a": "Alex Lee",
   "b": "Karan Pescatore",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 9.6,
   "avgExpected": 7.2,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711"
  },
  {
   "a": "Pam Boyd",
   "b": "Robert Finley",
   "team": "ACE Moorestown",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 5.6,
   "avgExpected": 3.6,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "0d70122a-9002-461f-8600-a9afed2e8c3f"
  },
  {
   "a": "Rui Zhang",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 7.1,
   "avgExpected": 5,
   "aId": "c218d668-b78a-4726-b2df-fe7730a50963",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Quen Koon Ng",
   "b": "Steve Gerwer",
   "team": "Premiere",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.4,
   "avgActual": -2.3,
   "avgExpected": -5.6,
   "aId": "6c655208-0558-4174-a618-7988d5783914",
   "bId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
  },
  {
   "a": "Kerry Gray-Style",
   "b": "Tom Kresky",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.4,
   "avgActual": -1,
   "avgExpected": -4.2,
   "aId": "5d2f1c91-647e-4f06-bd5e-ad6550674ce4",
   "bId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "a": "Chris Norton",
   "b": "Cindy Hu",
   "team": "Bounce Malvern Boom",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.4,
   "avgActual": -2.4,
   "avgExpected": -5,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169"
  },
  {
   "a": "Gina Pultorak",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 4.7,
   "avgExpected": 1.4,
   "aId": "43326f18-7e59-4bc6-8008-7ec14cbcb18a",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Kristen Soucie",
   "b": "Christine Papa",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 1,
   "avgExpected": -2,
   "aId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Michael Swell",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 5.3,
   "avgExpected": 2.7,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Sal Frangipane",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 1.3,
   "avgActual": -2.7,
   "avgExpected": -5.2,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a"
  },
  {
   "a": "Yi Gu",
   "b": "Amy Chrebet",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 0.5,
   "avgExpected": -2.2,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "a": "Richard Demeuse",
   "b": "Aimee Castellano",
   "team": "Flemington Green",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.4,
   "avgExpected": 0.1,
   "aId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Mei Li",
   "b": "Sam Zhou",
   "team": "Stelton Sports",
   "n": 16,
   "w": 12,
   "l": 4,
   "synergy": 1.3,
   "avgActual": 3.7,
   "avgExpected": 2,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "a": "Eva Danieli",
   "b": "Todd Gasparre",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 3.2,
   "avgExpected": 1,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d"
  },
  {
   "a": "Jorge Diaz",
   "b": "Amy Johnson",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.3,
   "avgExpected": 0.8,
   "aId": "5384ac1d-574b-4fe8-9360-010e903e9ec0",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "John Zhong",
   "b": "Liangjie Zhu",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.7,
   "avgExpected": 0.8,
   "aId": "6bfd212d-c7b4-4eff-ae3c-5e9424080282",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.2,
   "avgExpected": 1.1,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Sandra Thompson",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.2,
   "avgActual": -1,
   "avgExpected": -3.7,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "a": "Simon Perry",
   "b": "Carol Mastroianni",
   "team": "Flemington Blue",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 4.8,
   "avgExpected": 2.3,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Chris Norton",
   "b": "Linda Zhu",
   "team": "Bounce Malvern Boom",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.2,
   "avgActual": -2,
   "avgExpected": -4.1,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Steve Hong",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 1.8,
   "avgExpected": -0.7,
   "aId": "a861a127-253c-4cb2-a1d6-93a37558b93a",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "Stacy Garretson",
   "b": "Christine Papa",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3.5,
   "avgExpected": 1.1,
   "aId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Cheryl Isbirian",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 7,
   "avgExpected": 4.6,
   "aId": "23c87311-dae9-47a5-be80-30aab8231ce2",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Todd Mitchell",
   "b": "Rebecca Lederman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 7.7,
   "avgExpected": 4.9,
   "aId": "164bf044-d118-4bee-8bd6-d0bad38b79ea",
   "bId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "a": "Jamila Sefiane",
   "b": "Lindsay Duphily",
   "team": "Bounce Malvern Boom",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 6,
   "avgExpected": 4.3,
   "aId": "c0851114-0611-4b02-9589-fd249179eabc",
   "bId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894"
  },
  {
   "a": "Craig Batten",
   "b": "Eric Luque",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -0.7,
   "avgExpected": -2.9,
   "aId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "James Gross",
   "b": "John Ficarra",
   "team": "Premiere",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1.1,
   "avgActual": -3.8,
   "avgExpected": -5.6,
   "aId": "6b3f649d-2418-4136-b045-4795d55e643d",
   "bId": "b1a0876c-0702-497d-95a4-5a8a894ff2d5"
  },
  {
   "a": "Derek Livingston",
   "b": "John Darrah",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -0.7,
   "avgExpected": -3.3,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84"
  },
  {
   "a": "Savita Nandal",
   "b": "Paul Rappoport",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -3.7,
   "avgExpected": -6.2,
   "aId": "ce787b4f-30b9-4fd0-a12a-caba1f27ca68",
   "bId": "f2258c77-73cb-49de-991e-ed0cc4f3f9e2"
  },
  {
   "a": "Liangjie Zhu",
   "b": "Paul Rappoport",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 3.8,
   "avgExpected": 1.6,
   "aId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "bId": "f2258c77-73cb-49de-991e-ed0cc4f3f9e2"
  },
  {
   "a": "Ping Yang",
   "b": "Ellen Xu",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -3.7,
   "avgExpected": -6.3,
   "aId": "a1b13a29-05c7-4582-9227-22a7bcb0e713",
   "bId": "b8ecc741-4ae9-4e26-b199-497d34dac2b9"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.3,
   "avgExpected": -0.8,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "John Darrah",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 1,
   "avgActual": -0.7,
   "avgExpected": -2.1,
   "aId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Michael Dieterle",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 6.7,
   "avgExpected": 4.4,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Mei Li",
   "b": "Ann Betterton",
   "team": "Stelton Sports",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 5.3,
   "avgExpected": 3.2,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Coby Resnick",
   "b": "James Gross",
   "team": "Premiere",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 0.8,
   "avgExpected": -1.3,
   "aId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158",
   "bId": "6b3f649d-2418-4136-b045-4795d55e643d"
  },
  {
   "a": "Lisa Mctague",
   "b": "Alfonse Calato",
   "team": "Premiere",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": -1.7,
   "avgExpected": -4.1,
   "aId": "0d68c1e4-633a-4b56-bb73-06365cf5bdcb",
   "bId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "a": "Christine Papa",
   "b": "Katrina Mcintyre",
   "team": "Flemington Green",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 4.8,
   "avgExpected": 3.2,
   "aId": "d156a552-7fa9-488e-9bfa-745feb859950",
   "bId": "eeead4e9-eec9-4cfc-887d-44222225d436"
  },
  {
   "a": "Jiang Jin",
   "b": "Lindsay Duphily",
   "team": "Bounce Malvern Boom",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 6.5,
   "avgExpected": 4.7,
   "aId": "579cead3-d960-4c14-8905-8c17c70ca003",
   "bId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894"
  },
  {
   "a": "Craig Batten",
   "b": "Katrina Mcintyre",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": -0.3,
   "avgExpected": -2.5,
   "aId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d",
   "bId": "eeead4e9-eec9-4cfc-887d-44222225d436"
  },
  {
   "a": "Alicia Maguire",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.5,
   "avgExpected": 0.8,
   "aId": "36927aca-827a-4408-ab82-9dc0d06e2c8d",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Cuc Dang",
   "b": "Ronnie Yin",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": -0.3,
   "avgExpected": -2.5,
   "aId": "817939be-36ae-4a5d-8c02-62138ab71d4c",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Chris Norton",
   "b": "Brett Kleger",
   "team": "Bounce Malvern Boom",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.9,
   "avgActual": -2.3,
   "avgExpected": -3.7,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "5b11ac59-091a-46d3-beb5-2d65d5d77135"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Thomas Ross",
   "team": "Pickle Place",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.3,
   "avgExpected": 0.5,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "eab86a29-43ef-4b31-ba94-928f57f56c9c"
  },
  {
   "a": "Kate Curren",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 7.8,
   "avgExpected": 6.4,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Karan Pescatore",
   "b": "Rebecca Lederman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 8.3,
   "avgExpected": 6.2,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "a": "Jonathan Brand",
   "b": "Stacey Frank",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 5.4,
   "avgExpected": 3.9,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Denise Richmond",
   "b": "Eric Luque",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": -0.7,
   "avgExpected": -2.6,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "James Gross",
   "b": "Tara Lombardo",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.2,
   "avgExpected": -1.9,
   "aId": "6b3f649d-2418-4136-b045-4795d55e643d",
   "bId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "a": "Nancy Lin",
   "b": "John Ficarra",
   "team": "Premiere",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0.8,
   "avgActual": -5.4,
   "avgExpected": -6.6,
   "aId": "88bcb8e1-970f-4535-bec1-beb232f1f77a",
   "bId": "b1a0876c-0702-497d-95a4-5a8a894ff2d5"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Daniel Chernin",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 3.7,
   "avgExpected": 2.4,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "9fc26554-f672-4501-9d2e-a8553fd79eaf"
  },
  {
   "a": "Emil Pescatore",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 6,
   "avgExpected": 4.2,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Bill Brandt",
   "team": "Flemington Blue",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 6.3,
   "avgExpected": 4.6,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "a": "Jeff Lorman",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.2,
   "avgExpected": 2.8,
   "aId": "75789bbc-0dde-460e-b905-7bd1189c6a90",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Karan Pescatore",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 6.6,
   "avgExpected": 5.2,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Wally Liu",
   "b": "Lily Liu",
   "team": "Premiere",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.8,
   "avgActual": -2.3,
   "avgExpected": -3.6,
   "aId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7",
   "bId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "a": "Gina Pultorak",
   "b": "Tom Zentmeyer",
   "team": "Pickle Place",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.4,
   "avgExpected": 2.2,
   "aId": "43326f18-7e59-4bc6-8008-7ec14cbcb18a",
   "bId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "a": "Tom Zentmeyer",
   "b": "Thomas Ross",
   "team": "Pickle Place",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.8,
   "aId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "bId": "eab86a29-43ef-4b31-ba94-928f57f56c9c"
  },
  {
   "a": "Brett Kleger",
   "b": "Sandra Thompson",
   "team": "Bounce Malvern Boom",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.8,
   "avgExpected": -0.3,
   "aId": "5b11ac59-091a-46d3-beb5-2d65d5d77135",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "a": "Sal Frangipane",
   "b": "Nancy Lin",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.7,
   "avgActual": -4.7,
   "avgExpected": -6.2,
   "aId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a",
   "bId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 8.3,
   "avgExpected": 6.7,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Rebecca Lederman",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 6,
   "avgExpected": 4.9,
   "aId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Pam Boyd",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 10.7,
   "avgExpected": 9,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Marc Friedman",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1.5,
   "avgExpected": 0.2,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Susan Ackley",
   "b": "John Pineda",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0,
   "avgExpected": -1.7,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "a": "David Osborne",
   "b": "Aimee Castellano",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 5.3,
   "avgExpected": 3.7,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Evelyn Du",
   "b": "Abraham Telechanski",
   "team": "Allstar Pickler",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": -0.1,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Abraham Telechanski",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.8,
   "avgExpected": 1.4,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Charlie Johnston",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5,
   "avgExpected": 3.4,
   "aId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Eric Markowitz",
   "b": "Tom Zentmeyer",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.5,
   "avgExpected": -0.9,
   "aId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948",
   "bId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "a": "Robert Finley",
   "b": "Susan Debbs",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": -0.6,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9"
  },
  {
   "a": "Evelyn Du",
   "b": "Liangjie Zhu",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0.8,
   "avgExpected": -0.5,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Harriet Levin",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 4.5,
   "avgExpected": 3.3,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Kelly Dalsey",
   "b": "Derek Livingston",
   "team": "APC Garden State",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -6.4,
   "avgExpected": -7.5,
   "aId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "bId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "a": "David Mcintyre",
   "b": "Katrina Mcintyre",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": 0.1,
   "aId": "1f3700d5-63e4-495e-92c1-1248224ed61d",
   "bId": "eeead4e9-eec9-4cfc-887d-44222225d436"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Cindy Hu",
   "team": "Bounce Malvern Boom",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -5,
   "avgExpected": -5.9,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169"
  },
  {
   "a": "Craig Batten",
   "b": "David Osborne",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1,
   "avgExpected": -0.5,
   "aId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d",
   "bId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "a": "Sarah Nazario",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 4.7,
   "avgExpected": 3.8,
   "aId": "d457bcf7-383d-4b25-a7a9-a456e5803087",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Eva Danieli",
   "b": "Sarah Nazario",
   "team": "Jersey Pickleball Club",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 4.1,
   "avgExpected": 3.3,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "a": "Vicki Main",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.7,
   "avgExpected": 1.7,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Yi Gu",
   "b": "Todd Gasparre",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 0.9,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d"
  },
  {
   "a": "Michael Dieterle",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4,
   "avgExpected": 3,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Harriet Levin",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.4,
   "avgExpected": 0.4,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Tom Zentmeyer",
   "b": "Jay Rohatgi",
   "team": "Pickle Place",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6.9,
   "avgExpected": 6.1,
   "aId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "bId": "f5831f41-366b-4666-b780-448fc7971ad7"
  },
  {
   "a": "David Osborne",
   "b": "Richard Demeuse",
   "team": "Flemington Green",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 6,
   "avgExpected": 4.9,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Quen Koon Ng",
   "b": "John Ficarra",
   "team": "Premiere",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -6.7,
   "avgExpected": -7.7,
   "aId": "6c655208-0558-4174-a618-7988d5783914",
   "bId": "b1a0876c-0702-497d-95a4-5a8a894ff2d5"
  },
  {
   "a": "Yi Gu",
   "b": "Darren Saks",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.7,
   "avgExpected": 0.6,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Kelly Dalsey",
   "b": "Kerry Gray-Style",
   "team": "APC Garden State",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0.5,
   "avgActual": -7,
   "avgExpected": -7.8,
   "aId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "bId": "5d2f1c91-647e-4f06-bd5e-ad6550674ce4"
  },
  {
   "a": "Steve Gerwer",
   "b": "Alfonse Calato",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -1,
   "avgExpected": -1.9,
   "aId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd",
   "bId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "a": "Erika Simone",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6.3,
   "avgExpected": 5.1,
   "aId": "04f98aa6-f69e-462c-9a13-4060a3072922",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Sandra Thompson",
   "b": "Lindsay Duphily",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 1.9,
   "aId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "bId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894"
  },
  {
   "a": "John Darrah",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.4,
   "avgActual": -4.2,
   "avgExpected": -4.9,
   "aId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Art Muth",
   "b": "Sue Johnson",
   "team": "Flemington Blue",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.4,
   "avgActual": -3.3,
   "avgExpected": -4.1,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "a": "Michael Boyle",
   "b": "Patricia Boyle",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4.3,
   "avgExpected": 3.4,
   "aId": "84729bcd-2c46-4a3b-b0a3-13a7e7d46dfb",
   "bId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "a": "Laura Sweet",
   "b": "Lisa Loeber",
   "team": "APC Garden State",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.4,
   "avgActual": -5,
   "avgExpected": -5.7,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Lance Brown",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.7,
   "avgExpected": 2.7,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "a": "Coby Resnick",
   "b": "Tara Lombardo",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.6,
   "aId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158",
   "bId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "a": "Tara Lombardo",
   "b": "Alfonse Calato",
   "team": "Premiere",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1.2,
   "avgExpected": -1.9,
   "aId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "bId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "a": "Tom Zentmeyer",
   "b": "Marykristin Haskell",
   "team": "Pickle Place",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.3,
   "avgExpected": 0.5,
   "aId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "bId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "a": "Cynthia Covie",
   "b": "Andrew Fleischer",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1.3,
   "avgExpected": -2.4,
   "aId": "b146d15b-2ed7-4087-a6a0-90d4538aea72",
   "bId": "d1b4ea08-869c-4a17-a8c3-e96b13dd8ec7"
  },
  {
   "a": "Barbara Hess",
   "b": "Stacy Garretson",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1.3,
   "avgExpected": -2.3,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2"
  },
  {
   "a": "James Gross",
   "b": "Steve Gerwer",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -1,
   "avgExpected": -1.7,
   "aId": "6b3f649d-2418-4136-b045-4795d55e643d",
   "bId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
  },
  {
   "a": "Kate Siedell",
   "b": "Sandy Alkins",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.7,
   "avgExpected": 3.2,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Robert Finley",
   "b": "Stacey Frank",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.4,
   "avgExpected": 2.9,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Kelly Dalsey",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 9,
   "w": 1,
   "l": 8,
   "synergy": 0.3,
   "avgActual": -6.1,
   "avgExpected": -6.6,
   "aId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Stepan Nevshehirlian",
   "b": "John Darrah",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -0.7,
   "avgExpected": -1.2,
   "aId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383",
   "bId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84"
  },
  {
   "a": "Kristen Soucie",
   "b": "Richard Demeuse",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.7,
   "avgExpected": 0,
   "aId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Chris Norton",
   "team": "Bounce Malvern Boom",
   "n": 12,
   "w": 4,
   "l": 8,
   "synergy": 0.3,
   "avgActual": -2.2,
   "avgExpected": -2.7,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "395868e3-8573-41ad-9b13-84b6a7bf7f35"
  },
  {
   "a": "Amy Chrebet",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -0.2,
   "avgExpected": -0.8,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Michael Swell",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.3,
   "avgExpected": 0.6,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Amy Chrebet",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.3,
   "avgExpected": 3.5,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "a": "Sal Frangipane",
   "b": "James Gross",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -4.7,
   "avgExpected": -5.3,
   "aId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a",
   "bId": "6b3f649d-2418-4136-b045-4795d55e643d"
  },
  {
   "a": "Mei Li",
   "b": "Jennifer Qian",
   "team": "Stelton Sports",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.3,
   "avgExpected": -0.4,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "a": "Mengchu Zhou",
   "b": "Jay Zeng",
   "team": "Stelton Sports",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1.8,
   "avgExpected": -2.4,
   "aId": "14fc7872-1e6f-419e-adcb-d8e63826a37d",
   "bId": "abc4de4c-a9af-4b75-8e57-5b7374af96c2"
  },
  {
   "a": "Leon Li",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1.8,
   "avgExpected": 1.3,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Ann Betterton",
   "b": "Ellen Xu",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -1.3,
   "avgExpected": -2,
   "aId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "bId": "b8ecc741-4ae9-4e26-b199-497d34dac2b9"
  },
  {
   "a": "Coby Resnick",
   "b": "Steve Gerwer",
   "team": "Premiere",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -2.8,
   "avgExpected": -3.2,
   "aId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158",
   "bId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
  },
  {
   "a": "Lisa Loeber",
   "b": "Steve Hong",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -2.7,
   "avgExpected": -3.3,
   "aId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Eric Luque",
   "b": "Aimee Castellano",
   "team": "Flemington Green",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.4,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Yang Wang",
   "b": "Kim Hamilton",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 3.3,
   "avgExpected": 2.6,
   "aId": "389300d9-75bf-4c93-9fbc-cab6881f49b4",
   "bId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318"
  },
  {
   "a": "Marc Harden",
   "b": "Stacey Frank",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 9,
   "avgExpected": 8.3,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Susan Ackley",
   "b": "David Dietzel",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 2,
   "avgExpected": 1.4,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "a792f1c9-2858-416c-a98b-a1b60b785864"
  },
  {
   "a": "Robert Block",
   "b": "Jonathan Goldner",
   "team": "Pickle Place",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1,
   "avgExpected": -1.6,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "5142be9e-adb4-4f40-8632-1f6daa6d824b"
  },
  {
   "a": "Jorge Diaz",
   "b": "Sue Johnson",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 2,
   "aId": "5384ac1d-574b-4fe8-9360-010e903e9ec0",
   "bId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "a": "Mengchu Zhou",
   "b": "Jim Peng",
   "team": "Stelton Sports",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0.2,
   "avgActual": -2.9,
   "avgExpected": -3.1,
   "aId": "14fc7872-1e6f-419e-adcb-d8e63826a37d",
   "bId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "a": "Alex Lee",
   "b": "Rebecca Lederman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 7.3,
   "avgExpected": 6.8,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Rebecca Lederman",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 6,
   "avgExpected": 5.6,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "a": "Stepan Nevshehirlian",
   "b": "Steve Hong",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -0.7,
   "avgExpected": -1.2,
   "aId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Jingwei Wu",
   "b": "Vicki Main",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 6.2,
   "avgExpected": 5.9,
   "aId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Mei Li",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 3.3,
   "avgExpected": 3,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Steve Hong",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -4.3,
   "avgExpected": -4.8,
   "aId": "a861a127-253c-4cb2-a1d6-93a37558b93a",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Evelyn Du",
   "b": "Margaret Weidlich",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -5,
   "avgExpected": -5.4,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "a": "Alex Lee",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 7,
   "avgExpected": 6.6,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Susan Ackley",
   "b": "Bill Brandt",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 3.3,
   "avgExpected": 3.2,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Harriet Levin",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 2.5,
   "avgExpected": 2.3,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Marc Harden",
   "b": "Sandy Alkins",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 8,
   "avgExpected": 7.8,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Janet Garrity",
   "b": "Thomas Ross",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0,
   "avgExpected": -0.3,
   "aId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3",
   "bId": "eab86a29-43ef-4b31-ba94-928f57f56c9c"
  },
  {
   "a": "David Osborne",
   "b": "Eric Luque",
   "team": "Flemington Green",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 3.9,
   "avgExpected": 3.7,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Amy Johnson",
   "b": "Sue Johnson",
   "team": "Flemington Blue",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -3.3,
   "avgExpected": -3.5,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "a": "Ping Yang",
   "b": "June Lee",
   "team": "Stelton Sports",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -4.7,
   "avgExpected": -4.9,
   "aId": "a1b13a29-05c7-4582-9227-22a7bcb0e713",
   "bId": "c5098f72-b304-4552-b25b-8f4dec2709e0"
  },
  {
   "a": "Alex Lee",
   "b": "Daniel Chernin",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 4.5,
   "avgExpected": 4.4,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "9fc26554-f672-4501-9d2e-a8553fd79eaf"
  },
  {
   "a": "Jennifer Qian",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.5,
   "avgExpected": 2.3,
   "aId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Ryan Sherry",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 6.3,
   "avgExpected": 6.1,
   "aId": "6d8254ae-6e00-4704-8c1e-936733eb9b09",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Mengchu Zhou",
   "b": "Sam Zhou",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -2.3,
   "avgExpected": -2.5,
   "aId": "14fc7872-1e6f-419e-adcb-d8e63826a37d",
   "bId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "a": "Erika Simone",
   "b": "Vicki Main",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.3,
   "avgExpected": 2,
   "aId": "04f98aa6-f69e-462c-9a13-4060a3072922",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Erika Simone",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 3.3,
   "avgExpected": 3.1,
   "aId": "04f98aa6-f69e-462c-9a13-4060a3072922",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Nancy Blank",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -3.7,
   "avgExpected": -3.9,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Brett Kleger",
   "b": "David Marchese",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -4.7,
   "avgExpected": -5,
   "aId": "5b11ac59-091a-46d3-beb5-2d65d5d77135",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Susan Debbs",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.5,
   "aId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Ping Peng",
   "b": "Abraham Telechanski",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.3,
   "avgExpected": 2,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Jonathan Brand",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0,
   "avgActual": 8.4,
   "avgExpected": 8.5,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Sandra Thompson",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Boom",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -1.2,
   "avgExpected": -1.3,
   "aId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Daniel Chernin",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 5.8,
   "avgExpected": 5.8,
   "aId": "9fc26554-f672-4501-9d2e-a8553fd79eaf",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Sandra Thompson",
   "b": "Linda Zhu",
   "team": "Bounce Malvern Boom",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -3.6,
   "avgExpected": -3.7,
   "aId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Keith Goldberg",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 6,
   "avgExpected": 6,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Lisa Loeber",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2.7,
   "avgExpected": -2.7,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -2,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Christine Dugan",
   "b": "Talen Singer",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -0.7,
   "avgExpected": -0.6,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "d4cdb8c8-9220-4aa7-b48a-41f9f30dff51"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Alfonse Calato",
   "team": "Premiere",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": 0,
   "avgActual": -4.2,
   "avgExpected": -4.2,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "a": "Stepan Nevshehirlian",
   "b": "Jimmy Shapiro",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -1.5,
   "avgExpected": -1.5,
   "aId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383",
   "bId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "a": "Jane Meng",
   "b": "David Eisen",
   "team": "Pickle Place",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -4,
   "avgExpected": -3.9,
   "aId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "bId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "a": "Derek Livingston",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -5,
   "avgExpected": -5.1,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Kate Curren",
   "b": "Karan Pescatore",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 5.3,
   "avgExpected": 5.4,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 3,
   "avgExpected": 2.9,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Derek Livingston",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -4,
   "avgExpected": -3.8,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "John Darrah",
   "b": "Tom Kresky",
   "team": "APC Garden State",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": -0.1,
   "avgActual": -3,
   "avgExpected": -2.8,
   "aId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84",
   "bId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "a": "Stepan Nevshehirlian",
   "b": "Kelly Dalsey",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -5.7,
   "avgExpected": -5.5,
   "aId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383",
   "bId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6"
  },
  {
   "a": "Sandra Thompson",
   "b": "Cindy Hu",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.5,
   "aId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "bId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169"
  },
  {
   "a": "Jiang Jin",
   "b": "Cindy Hu",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": -2.3,
   "avgExpected": -2.2,
   "aId": "579cead3-d960-4c14-8905-8c17c70ca003",
   "bId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Steve Gerwer",
   "team": "Premiere",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -6.7,
   "avgExpected": -6.4,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
  },
  {
   "a": "Quen Koon Ng",
   "b": "Tara Lombardo",
   "team": "Premiere",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -4,
   "avgExpected": -3.7,
   "aId": "6c655208-0558-4174-a618-7988d5783914",
   "bId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "a": "Rui Zhang",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 16,
   "w": 10,
   "l": 6,
   "synergy": -0.1,
   "avgActual": 1.2,
   "avgExpected": 1.3,
   "aId": "c218d668-b78a-4726-b2df-fe7730a50963",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Pam Boyd",
   "b": "Sandy Alkins",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 5.3,
   "avgExpected": 5.5,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Laura Sweet",
   "b": "Andrew Fleischer",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -4.3,
   "avgExpected": -4.1,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "d1b4ea08-869c-4a17-a8c3-e96b13dd8ec7"
  },
  {
   "a": "Stacy Garretson",
   "b": "Aimee Castellano",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.7,
   "avgExpected": 0.9,
   "aId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Michael Dieterle",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2,
   "avgExpected": 2.1,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Darren Saks",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.5,
   "avgExpected": 0.7,
   "aId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Peter Shen",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.5,
   "aId": "7417eca2-2140-47f9-bd14-be210ba9d630",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Sal Frangipane",
   "b": "Tara Lombardo",
   "team": "Premiere",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -3.8,
   "avgExpected": -3.6,
   "aId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a",
   "bId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "a": "Lily Liu",
   "b": "Alfonse Calato",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -4.2,
   "avgExpected": -4,
   "aId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2",
   "bId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Kristina Rhodes",
   "team": "Bounce Malvern Boom",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.9,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "77ecd1c3-b1df-469a-83ba-d12bd56f2c6a"
  },
  {
   "a": "Yang Wang",
   "b": "Jeff Lorman",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.4,
   "aId": "389300d9-75bf-4c93-9fbc-cab6881f49b4",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Ping Peng",
   "b": "Liangjie Zhu",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.7,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Andrew Fleischer",
   "b": "Tim Bruno",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.3,
   "aId": "d1b4ea08-869c-4a17-a8c3-e96b13dd8ec7",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Liangang Liu",
   "b": "Leon Li",
   "team": "Stelton Sports",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1.8,
   "avgExpected": 2,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "a": "Robert Finley",
   "b": "Patricia Boyle",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0.8,
   "avgExpected": 1.3,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "a": "Tera Baccile",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 4.8,
   "avgExpected": 5.1,
   "aId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Cynthia Covie",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -4.8,
   "avgExpected": -4.5,
   "aId": "b146d15b-2ed7-4087-a6a0-90d4538aea72",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Christine Dugan",
   "team": "Bounce Malvern Boom",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -0.6,
   "avgExpected": -0.3,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "a": "Kristen Soucie",
   "b": "Eric Luque",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -0.3,
   "avgExpected": 0.2,
   "aId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Darren Saks",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 6,
   "avgExpected": 6.4,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Tara Lombardo",
   "b": "Lily Liu",
   "team": "Premiere",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -1.8,
   "avgExpected": -1.5,
   "aId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "bId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "a": "Emil Pescatore",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 3,
   "avgExpected": 3.3,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Christine Dugan",
   "b": "David Marchese",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.2,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Jiang Jin",
   "b": "Linda Zhu",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2,
   "avgExpected": -1.5,
   "aId": "579cead3-d960-4c14-8905-8c17c70ca003",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Keith Goldberg",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 4.6,
   "avgExpected": 5,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8"
  },
  {
   "a": "Yi Gu",
   "b": "Natasha De Carvalho",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -0.7,
   "avgExpected": -0.4,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "a": "Ann Betterton",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 4.5,
   "avgExpected": 4.9,
   "aId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Michael Swell",
   "b": "Todd Gasparre",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2,
   "avgExpected": 2.4,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d"
  },
  {
   "a": "Barbara Hess",
   "b": "Aimee Castellano",
   "team": "Flemington Green",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 1.6,
   "avgExpected": 1.9,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Dottie Kelly",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.2,
   "aId": "57a09a98-991d-47a7-a13d-fb2afa6bd8ef",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Ed Saxman",
   "b": "David Eisen",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -0.3,
   "avgExpected": 0.2,
   "aId": "32244c70-6859-44af-a408-8294d65b592d",
   "bId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "a": "Christine Dugan",
   "b": "Cindy Hu",
   "team": "Bounce Malvern Boom",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2,
   "avgExpected": 2.3,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169"
  },
  {
   "a": "Pam Boyd",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.7,
   "avgExpected": 4,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Stacey Frank",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 13,
   "w": 10,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 3.3,
   "avgExpected": 3.8,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Stepan Nevshehirlian",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -1.3,
   "avgExpected": -0.6,
   "aId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "Christine Dugan",
   "b": "Lindsay Duphily",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 5,
   "avgExpected": 5.7,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894"
  },
  {
   "a": "Hal Golden",
   "b": "Jiang Jin",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5,
   "avgExpected": -4.2,
   "aId": "476c99a2-15e5-4e99-8471-7c2b6394faa3",
   "bId": "579cead3-d960-4c14-8905-8c17c70ca003"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Boom",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.7,
   "avgExpected": 1.2,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Cindy Hu",
   "b": "Lindsay Duphily",
   "team": "Bounce Malvern Boom",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1.3,
   "avgExpected": 1.9,
   "aId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169",
   "bId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894"
  },
  {
   "a": "Emil Pescatore",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.4,
   "avgExpected": 2.9,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Karan Pescatore",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4.5,
   "avgExpected": 5,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Keith Goldberg",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4.8,
   "avgExpected": 5.3,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Tara Kramer",
   "b": "Aimee Castellano",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -0.2,
   "avgExpected": 0.3,
   "aId": "dae62b8e-5f8e-4721-8f41-3218518d1e30",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Michael Dieterle",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 2,
   "avgExpected": 2.6,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "4259501c-f1e3-4859-acd0-c25f342a1b92"
  },
  {
   "a": "James Gross",
   "b": "Alfonse Calato",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -4.2,
   "avgExpected": -3.7,
   "aId": "6b3f649d-2418-4136-b045-4795d55e643d",
   "bId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "a": "Barbara Hess",
   "b": "Christine Papa",
   "team": "Flemington Green",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.3,
   "avgExpected": 1.9,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Nancy Lin",
   "team": "Premiere",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -6.6,
   "avgExpected": -6.1,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "a": "Kelly Dalsey",
   "b": "Steve Hong",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -4.2,
   "avgExpected": -3.6,
   "aId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Susan Debbs",
   "b": "Jeff Lorman",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.8,
   "avgExpected": 1.4,
   "aId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Ed Gieske",
   "b": "Chris Norton",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -4,
   "avgExpected": -3.4,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "395868e3-8573-41ad-9b13-84b6a7bf7f35"
  },
  {
   "a": "Leon Li",
   "b": "June Lee",
   "team": "Stelton Sports",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -0.2,
   "avgExpected": 0.3,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "c5098f72-b304-4552-b25b-8f4dec2709e0"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 6.2,
   "avgExpected": 6.8,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Todd Mitchell",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.3,
   "avgExpected": 3.1,
   "aId": "164bf044-d118-4bee-8bd6-d0bad38b79ea",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Jane Meng",
   "b": "Jay Rohatgi",
   "team": "Pickle Place",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 5,
   "avgExpected": 6,
   "aId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "bId": "f5831f41-366b-4666-b780-448fc7971ad7"
  },
  {
   "a": "Nancy Lin",
   "b": "Lily Liu",
   "team": "Premiere",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -3.4,
   "avgExpected": -2.8,
   "aId": "88bcb8e1-970f-4535-bec1-beb232f1f77a",
   "bId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "a": "Yi Gu",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 1.4,
   "avgExpected": 2.2,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Emil Pescatore",
   "b": "Karan Pescatore",
   "team": "Pickleball Palace",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 0.8,
   "avgExpected": 1.3,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711"
  },
  {
   "a": "Emil Pescatore",
   "b": "Daniel Chernin",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 1.3,
   "avgExpected": 2.3,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "9fc26554-f672-4501-9d2e-a8553fd79eaf"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Vicki Main",
   "team": "Bounce Malvern Black",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 1.3,
   "avgExpected": 2,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Todd Gasparre",
   "b": "Sarah Nazario",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -0.7,
   "avgExpected": 0,
   "aId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d",
   "bId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "a": "Coby Resnick",
   "b": "Lily Liu",
   "team": "Premiere",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2,
   "avgExpected": -1,
   "aId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158",
   "bId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "a": "Tara Lombardo",
   "b": "John Ficarra",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -4.2,
   "avgExpected": -3.5,
   "aId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "bId": "b1a0876c-0702-497d-95a4-5a8a894ff2d5"
  },
  {
   "a": "Barbara Hess",
   "b": "Kevin Jackson",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -3.7,
   "avgExpected": -2.8,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "de010831-4d74-40f1-8807-75b0d0447124"
  },
  {
   "a": "Alicia Maguire",
   "b": "Tom Zentmeyer",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.3,
   "avgExpected": -0.3,
   "aId": "36927aca-827a-4408-ab82-9dc0d06e2c8d",
   "bId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "a": "Liangjie Zhu",
   "b": "Ronnie Yin",
   "team": "Allstar Pickler",
   "n": 13,
   "w": 6,
   "l": 7,
   "synergy": -0.5,
   "avgActual": -1.2,
   "avgExpected": -0.5,
   "aId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 2.1,
   "avgExpected": 2.8,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Robert Block",
   "b": "Gina Pultorak",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.2,
   "avgExpected": -0.2,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "43326f18-7e59-4bc6-8008-7ec14cbcb18a"
  },
  {
   "a": "Jane Meng",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.2,
   "avgExpected": 0.9,
   "aId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Christine Dugan",
   "b": "Hal Golden",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -2.3,
   "avgExpected": -1.3,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "a": "Liangang Liu",
   "b": "Jennifer Qian",
   "team": "Stelton Sports",
   "n": 12,
   "w": 6,
   "l": 6,
   "synergy": -0.5,
   "avgActual": -1.4,
   "avgExpected": -0.8,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "a": "Liangang Liu",
   "b": "Ann Betterton",
   "team": "Stelton Sports",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 0.9,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Ann Betterton",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 0.4,
   "avgExpected": 1.3,
   "aId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 4.3,
   "avgExpected": 5.4,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Pam Boyd",
   "b": "Stacey Frank",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 3.2,
   "avgExpected": 4,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Kerry Gray-Style",
   "b": "Andrew Fleischer",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -6,
   "avgExpected": -4.9,
   "aId": "5d2f1c91-647e-4f06-bd5e-ad6550674ce4",
   "bId": "d1b4ea08-869c-4a17-a8c3-e96b13dd8ec7"
  },
  {
   "a": "Liangang Liu",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.2,
   "avgExpected": 0.8,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Ellen Xu",
   "b": "June Lee",
   "team": "Stelton Sports",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -7,
   "avgExpected": -6.2,
   "aId": "b8ecc741-4ae9-4e26-b199-497d34dac2b9",
   "bId": "c5098f72-b304-4552-b25b-8f4dec2709e0"
  },
  {
   "a": "Cynthia Eisen",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1.3,
   "avgExpected": 2.5,
   "aId": "4c762958-33e1-4b41-8077-424cb639af7e",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Robert Finley",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 6,
   "avgExpected": 7,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Craig Batten",
   "b": "Richard Demeuse",
   "team": "Flemington Green",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -6,
   "avgExpected": -4.9,
   "aId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Craig Batten",
   "b": "Christine Papa",
   "team": "Flemington Green",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -3.2,
   "avgExpected": -2.1,
   "aId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Chris Norton",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Boom",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3,
   "avgExpected": -2,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "David Osborne",
   "b": "Christine Papa",
   "team": "Flemington Green",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 2.4,
   "avgExpected": 3.5,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Christine Dugan",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Boom",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 1.4,
   "avgExpected": 2.5,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Steve Gerwer",
   "b": "John Ficarra",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.9,
   "aId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd",
   "bId": "b1a0876c-0702-497d-95a4-5a8a894ff2d5"
  },
  {
   "a": "Simon Perry",
   "b": "Marc Friedman",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -0.7,
   "avgExpected": 0.6,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Keith Goldberg",
   "b": "Michael Dieterle",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 2.7,
   "avgExpected": 4.1,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "4259501c-f1e3-4859-acd0-c25f342a1b92"
  },
  {
   "a": "Yi Gu",
   "b": "Lance Brown",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -3,
   "avgExpected": -2.1,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "a": "Meryl Nadler",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3.3,
   "avgExpected": -2,
   "aId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Sam Zhou",
   "b": "Jim Peng",
   "team": "Stelton Sports",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -3.7,
   "avgExpected": -2.6,
   "aId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a",
   "bId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "a": "Abraham Telechanski",
   "b": "Paul Rappoport",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -0.7,
   "avgExpected": 0.4,
   "aId": "e022118e-9373-4e2a-94f6-391f4fb84a54",
   "bId": "f2258c77-73cb-49de-991e-ed0cc4f3f9e2"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -5.2,
   "avgExpected": -4,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Jay Rohatgi",
   "team": "Pickle Place",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 2.8,
   "avgExpected": 4,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "f5831f41-366b-4666-b780-448fc7971ad7"
  },
  {
   "a": "Wally Liu",
   "b": "Nancy Lin",
   "team": "Premiere",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -0.6,
   "avgActual": -7.1,
   "avgExpected": -6.2,
   "aId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7",
   "bId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "a": "Sal Frangipane",
   "b": "Erik Lombardo",
   "team": "Premiere",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.7,
   "avgActual": -7.5,
   "avgExpected": -6.2,
   "aId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Mei Li",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 14,
   "w": 8,
   "l": 6,
   "synergy": -0.7,
   "avgActual": 0.9,
   "avgExpected": 1.9,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Kerry Gray-Style",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -5,
   "avgExpected": -3.7,
   "aId": "5d2f1c91-647e-4f06-bd5e-ad6550674ce4",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Pam Boyd",
   "b": "Patricia Boyle",
   "team": "ACE Moorestown",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 0.4,
   "avgExpected": 1.5,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "a": "Vicki Main",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 3.4,
   "avgExpected": 4.6,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Michael Dieterle",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.8,
   "avgExpected": 2.1,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Bob Castellano",
   "b": "Richard Demeuse",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -4.3,
   "avgExpected": -2.7,
   "aId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Steve Hong",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3.3,
   "avgExpected": -1.7,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Leon Li",
   "b": "Jay Zeng",
   "team": "Stelton Sports",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -2.7,
   "avgExpected": -1.3,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "abc4de4c-a9af-4b75-8e57-5b7374af96c2"
  },
  {
   "a": "David Osborne",
   "b": "Stacy Garretson",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 3.7,
   "avgExpected": 5.4,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2"
  },
  {
   "a": "Coby Resnick",
   "b": "Hayley Yandoli",
   "team": "Premiere",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3.3,
   "avgExpected": -1.7,
   "aId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158",
   "bId": "1fc2dd51-135b-46d6-91ef-9291b573e78a"
  },
  {
   "a": "Kate Curren",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 3.3,
   "avgExpected": 4.9,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Michael Finkelstein",
   "b": "John Morabito",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.3,
   "avgExpected": -1.6,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "a018e2a6-8278-4354-8802-810742e62edf"
  },
  {
   "a": "Jim Darcangelo",
   "b": "John Morabito",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 2,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "a018e2a6-8278-4354-8802-810742e62edf"
  },
  {
   "a": "Jonathan Brand",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 1.3,
   "avgExpected": 2.6,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Laura Sweet",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -5.8,
   "avgExpected": -4.4,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "David Osborne",
   "b": "Denise Richmond",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.8,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "a": "Amy Chrebet",
   "b": "Sarah Nazario",
   "team": "Jersey Pickleball Club",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -1.9,
   "avgExpected": -0.6,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "a": "Susan Ackley",
   "b": "Carol Mastroianni",
   "team": "Flemington Blue",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": -0.8,
   "avgActual": 4.4,
   "avgExpected": 5.6,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "David Marchese",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -1.2,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Todd Gasparre",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1.3,
   "avgExpected": 0.6,
   "aId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Evelyn Du",
   "b": "Ronnie Yin",
   "team": "Allstar Pickler",
   "n": 9,
   "w": 1,
   "l": 8,
   "synergy": -0.9,
   "avgActual": -6.6,
   "avgExpected": -5.3,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Laura Sweet",
   "b": "Tom Kresky",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -5.2,
   "avgExpected": -3.6,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "a": "Derek Livingston",
   "b": "Tim Bruno",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -4,
   "avgExpected": -1.9,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Eva Danieli",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -1,
   "avgExpected": 0.4,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Picky Vorabouth",
   "b": "Liangjie Zhu",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 0.7,
   "avgExpected": 2.7,
   "aId": "38336cb3-6ff4-4187-abe5-3f0a819d0a0d",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Kerry Gray-Style",
   "b": "John Darrah",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -5.3,
   "avgExpected": -3.2,
   "aId": "5d2f1c91-647e-4f06-bd5e-ad6550674ce4",
   "bId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84"
  },
  {
   "a": "Yi Gu",
   "b": "Meryl Nadler",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -4,
   "avgExpected": -2.3,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -1.7,
   "avgExpected": 0.1,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Brett Kleger",
   "b": "Talen Singer",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -5,
   "avgExpected": -2.8,
   "aId": "5b11ac59-091a-46d3-beb5-2d65d5d77135",
   "bId": "d4cdb8c8-9220-4aa7-b48a-41f9f30dff51"
  },
  {
   "a": "Erika Simone",
   "b": "Jingwei Wu",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.9,
   "avgActual": 5.3,
   "avgExpected": 7,
   "aId": "04f98aa6-f69e-462c-9a13-4060a3072922",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "Alfonse Calato",
   "b": "Jeffrey Rubin",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -7,
   "avgExpected": -5.2,
   "aId": "ca6af12a-17d5-44b7-a137-49789e9eac2c",
   "bId": "e3a89681-1dac-4f6e-8982-2245996406e6"
  },
  {
   "a": "Susan Ackley",
   "b": "Amy Johnson",
   "team": "Flemington Blue",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.7,
   "avgExpected": 2.3,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Jill Scully",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.5,
   "avgExpected": 2.6,
   "aId": "754a47b8-0711-4929-928f-9bafe8f9dbc0",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Brett Kleger",
   "team": "Bounce Malvern Boom",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1,
   "avgActual": -3.2,
   "avgExpected": -1.4,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "5b11ac59-091a-46d3-beb5-2d65d5d77135"
  },
  {
   "a": "Yi Gu",
   "b": "Eva Danieli",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -3,
   "avgExpected": -1,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Quen Koon Ng",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -6.2,
   "avgExpected": -4.3,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "6c655208-0558-4174-a618-7988d5783914"
  },
  {
   "a": "Michael Dieterle",
   "b": "Vicki Main",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.8,
   "avgExpected": 2.7,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Jingwei Wu",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1,
   "avgActual": 5.3,
   "avgExpected": 7.2,
   "aId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Susan Ackley",
   "b": "Scott Rubin",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": 1.7,
   "avgExpected": 4,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Lisa Loeber",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -8.7,
   "avgExpected": -6.7,
   "aId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Barbara Hess",
   "b": "Eric Luque",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": -0.7,
   "avgExpected": 1.6,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Erik Lombardo",
   "b": "Alfonse Calato",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -8.7,
   "avgExpected": -6.7,
   "aId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd",
   "bId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "a": "Eric Markowitz",
   "b": "Todd Law",
   "team": "Pickle Place",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -3.3,
   "avgExpected": -1.1,
   "aId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948",
   "bId": "9b0fe5d7-4586-4629-8408-928794ca1c3b"
  },
  {
   "a": "Jorge Diaz",
   "b": "Tom Maley",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.1,
   "avgActual": -2.3,
   "avgExpected": 0.3,
   "aId": "5384ac1d-574b-4fe8-9360-010e903e9ec0",
   "bId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "a": "Jill Scully",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -2.3,
   "avgExpected": 0.3,
   "aId": "754a47b8-0711-4929-928f-9bafe8f9dbc0",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Jill Scully",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -3.7,
   "avgExpected": -1.1,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "a": "Kate Siedell",
   "b": "Patricia Boyle",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 3.3,
   "avgExpected": 5.5,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "a": "Brett Kleger",
   "b": "Kristina Rhodes",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -5,
   "avgExpected": -2.4,
   "aId": "5b11ac59-091a-46d3-beb5-2d65d5d77135",
   "bId": "77ecd1c3-b1df-469a-83ba-d12bd56f2c6a"
  },
  {
   "a": "Jeff Lorman",
   "b": "Stacey Frank",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 1,
   "avgExpected": 3.2,
   "aId": "75789bbc-0dde-460e-b905-7bd1189c6a90",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Susan Debbs",
   "b": "Stacey Frank",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 0.3,
   "avgExpected": 3,
   "aId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Ed Gieske",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Boom",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -0.2,
   "avgExpected": 1.7,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Ping Yang",
   "b": "Ann Betterton",
   "team": "Stelton Sports",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -6.3,
   "avgExpected": -3.9,
   "aId": "a1b13a29-05c7-4582-9227-22a7bcb0e713",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Mei Li",
   "b": "Liangang Liu",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -1,
   "avgExpected": 1.5,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920"
  },
  {
   "a": "Marc Friedman",
   "b": "Tom Maley",
   "team": "Flemington Blue",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -4.2,
   "avgExpected": -1.9,
   "aId": "d7bdde76-1007-4b20-a804-4efcd08c3598",
   "bId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "a": "Brian Rowan",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -1.2,
   "avgActual": 3.3,
   "avgExpected": 6.2,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Robert Finley",
   "b": "Jonathan Brand",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -1.2,
   "avgExpected": 0.9,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe"
  },
  {
   "a": "Quen Koon Ng",
   "b": "Erik Lombardo",
   "team": "Premiere",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -10,
   "avgExpected": -7.1,
   "aId": "6c655208-0558-4174-a618-7988d5783914",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Sarah Nazario",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1,
   "avgExpected": 1.1,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "a": "Denise Richmond",
   "b": "Tara Kramer",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -7.7,
   "avgExpected": -4.9,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -3.3,
   "avgExpected": -0.6,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Kelly Dalsey",
   "b": "Tim Bruno",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -11,
   "avgExpected": -8,
   "aId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Stepan Nevshehirlian",
   "b": "Derek Livingston",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -5.8,
   "avgExpected": -3.4,
   "aId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383",
   "bId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "a": "Janine Forrest",
   "b": "Jay Rohatgi",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 0,
   "avgExpected": 3,
   "aId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3",
   "bId": "f5831f41-366b-4666-b780-448fc7971ad7"
  },
  {
   "a": "Sal Frangipane",
   "b": "Steve Gerwer",
   "team": "Premiere",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1.3,
   "avgActual": -4.7,
   "avgExpected": -2.8,
   "aId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a",
   "bId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
  },
  {
   "a": "James Gross",
   "b": "Quen Koon Ng",
   "team": "Premiere",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.3,
   "avgActual": -7.6,
   "avgExpected": -5.3,
   "aId": "6b3f649d-2418-4136-b045-4795d55e643d",
   "bId": "6c655208-0558-4174-a618-7988d5783914"
  },
  {
   "a": "Mei Li",
   "b": "Ping Yang",
   "team": "Stelton Sports",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -5.5,
   "avgExpected": -2.9,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "a1b13a29-05c7-4582-9227-22a7bcb0e713"
  },
  {
   "a": "Nancy Blank",
   "b": "Thomas Ross",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -5.7,
   "avgExpected": -2.7,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "eab86a29-43ef-4b31-ba94-928f57f56c9c"
  },
  {
   "a": "Derek Livingston",
   "b": "Tom Kresky",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -7,
   "avgExpected": -4,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "a": "Cindy Hu",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -3.3,
   "avgExpected": -0.4,
   "aId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Alicia Maguire",
   "b": "Gina Pultorak",
   "team": "Pickle Place",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -3,
   "avgExpected": 0.1,
   "aId": "36927aca-827a-4408-ab82-9dc0d06e2c8d",
   "bId": "43326f18-7e59-4bc6-8008-7ec14cbcb18a"
  },
  {
   "a": "Robert Block",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -2.5,
   "avgExpected": 0.4,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Kelly Dalsey",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -8.2,
   "avgExpected": -5.4,
   "aId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Tara Lombardo",
   "team": "Premiere",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -3.8,
   "avgExpected": -1.5,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "a": "Leon Li",
   "b": "Ellen Xu",
   "team": "Stelton Sports",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -1.4,
   "avgExpected": 0.7,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "b8ecc741-4ae9-4e26-b199-497d34dac2b9"
  },
  {
   "a": "Coby Resnick",
   "b": "Nancy Lin",
   "team": "Premiere",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -10.7,
   "avgExpected": -7.5,
   "aId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158",
   "bId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Tom Zentmeyer",
   "team": "Pickle Place",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -2,
   "avgExpected": 0.3,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "a": "Jiang Jin",
   "b": "Brett Kleger",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -2.7,
   "avgExpected": 0.9,
   "aId": "579cead3-d960-4c14-8905-8c17c70ca003",
   "bId": "5b11ac59-091a-46d3-beb5-2d65d5d77135"
  },
  {
   "a": "Alex Lee",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.5,
   "avgActual": 3.8,
   "avgExpected": 6.7,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Jorge Diaz",
   "b": "Art Muth",
   "team": "Flemington Blue",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -3,
   "avgExpected": 0.2,
   "aId": "5384ac1d-574b-4fe8-9360-010e903e9ec0",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Craig Batten",
   "b": "Kristen Soucie",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -6.3,
   "avgExpected": -2.7,
   "aId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d",
   "bId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4"
  },
  {
   "a": "Christine Papa",
   "b": "Tara Kramer",
   "team": "Flemington Green",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -4.2,
   "avgExpected": -1,
   "aId": "d156a552-7fa9-488e-9bfa-745feb859950",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Sam Zhou",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2.5,
   "avgExpected": 0.8,
   "aId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Brian Gonzalez",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.6,
   "avgActual": -0.3,
   "avgExpected": 3.4,
   "aId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Evelyn Du",
   "b": "Wendy Zukerberg",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -11,
   "avgExpected": -7,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "f34665bd-6866-415f-a498-21d7f69fb895"
  },
  {
   "a": "Keith Goldberg",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.7,
   "avgActual": -2.3,
   "avgExpected": 1.7,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Keith Goldberg",
   "b": "Harriet Levin",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -1.3,
   "avgExpected": 2.7,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -4,
   "avgExpected": 0.1,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Christine Papa",
   "b": "Richard Demeuse",
   "team": "Flemington Green",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -2.5,
   "avgExpected": 1.2,
   "aId": "d156a552-7fa9-488e-9bfa-745feb859950",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Nancy Lin",
   "b": "Steve Gerwer",
   "team": "Premiere",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -11.7,
   "avgExpected": -7.4,
   "aId": "88bcb8e1-970f-4535-bec1-beb232f1f77a",
   "bId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Lily Liu",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -4.7,
   "avgExpected": -1.1,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "a": "David Osborne",
   "b": "Tara Kramer",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.8,
   "avgActual": 0.7,
   "avgExpected": 4.9,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Tom Kresky",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -6.3,
   "avgExpected": -2,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "Lisa Loeber",
   "b": "Andrew Fleischer",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -7.3,
   "avgExpected": -3,
   "aId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd",
   "bId": "d1b4ea08-869c-4a17-a8c3-e96b13dd8ec7"
  },
  {
   "a": "Sam Zhou",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -1.9,
   "avgActual": 0.1,
   "avgExpected": 3,
   "aId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Chris Norton",
   "b": "Sandra Thompson",
   "team": "Bounce Malvern Boom",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2,
   "avgActual": -9.2,
   "avgExpected": -5.3,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Ronnie Yin",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -11,
   "avgExpected": -6.1,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Todd Gasparre",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -2.1,
   "avgActual": 0.8,
   "avgExpected": 4.5,
   "aId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Christine Dugan",
   "b": "Sandra Thompson",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.3,
   "avgActual": -6.7,
   "avgExpected": -1.2,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "a": "Erika Simone",
   "b": "Jim Darcangelo",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.3,
   "avgActual": -0.3,
   "avgExpected": 5,
   "aId": "04f98aa6-f69e-462c-9a13-4060a3072922",
   "bId": "0530512b-466d-4ff7-9e89-7961b4a63110"
  },
  {
   "a": "Derek Le",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.4,
   "avgActual": -6.7,
   "avgExpected": -2,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Jingwei Wu",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -2.4,
   "avgActual": 0.4,
   "avgExpected": 4.7,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "James Gross",
   "b": "Erik Lombardo",
   "team": "Premiere",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -4,
   "avgActual": -12.7,
   "avgExpected": -3.4,
   "aId": "6b3f649d-2418-4136-b045-4795d55e643d",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
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
    "Bart Allgeier",
    "Sachin Pathare"
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
    "Karen Moliver"
   ]
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
   "subs": []
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
    "Roseann Catania"
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
    "Anthony Wands",
    "Picky Vorabouth",
    "Jieping Wang",
    "Wendy Zukerberg"
   ]
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
      "Michael Boyle"
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
      "Michael Boyle",
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
      "Michael Boyle"
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
      "Michael Boyle"
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
      "Michael Boyle"
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
      "Michael Boyle",
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
      "Michael Boyle"
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
      "Michael Boyle"
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
    "Marc Pellicane",
    "Amy Maussner"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickle Place",
   "away": "Bounce Malvern Boom",
   "time": "2026-08-29T14:00:00",
   "complete": true,
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
   "home": "Bounce Malvern Black",
   "away": "Flemington Green",
   "time": "2026-08-30T14:00:00",
   "complete": true,
   "homePoints": 667,
   "awayPoints": 478,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 22,
     "as": 24,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 9,
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
     "ff": 0,
     "hs": 21,
     "as": 23,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 21,
     "as": 12,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 21,
     "as": 8,
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
     "ff": 0,
     "hs": 21,
     "as": 12,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 10,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 21,
     "as": 10,
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
     "ff": 0,
     "hs": 23,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
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
     "ff": 0,
     "hs": 21,
     "as": 9,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 20,
     "as": 22,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "Gary Garretson",
      "Dan Loreti"
     ]
    }
   ],
   "subs": [
    "Dan Loreti",
    "Steven Gregov",
    "Gary Garretson"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Jersey Pickleball Club",
   "away": "Stelton Sports",
   "time": "2026-09-12T14:00:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 593,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Lance Brown"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Natasha De Carvalho",
      "Yi Gu"
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
     "as": 14,
     "h": [
      "Meryl Nadler",
      "Darren Saks"
     ],
     "a": [
      "Rui Zhang",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Nazario",
      "Amy Chrebet"
     ],
     "a": [
      "Jennifer Qian",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ],
     "a": [
      "Mei Li",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Darren Saks",
      "Todd Gasparre"
     ],
     "a": [
      "Jim Peng",
      "Peter Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yi Gu",
      "Lance Brown"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Natasha De Carvalho",
      "Yi Gu"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Sarah Nazario",
      "Todd Gasparre"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Rui Zhang",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alice Napolitano",
      "Darren Saks"
     ],
     "a": [
      "Ann Betterton",
      "Sam Zhou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Amy Chrebet"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Meryl Nadler"
     ],
     "a": [
      "Ann Betterton",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Michael Dombrowiecki",
      "Todd Gasparre"
     ],
     "a": [
      "Jim Peng",
      "Peter Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Darren Saks",
      "Lance Brown"
     ],
     "a": [
      "Sam Zhou",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Lance Brown"
     ],
     "a": [
      "Shaoyi Sun",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Todd Gasparre"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Yi Gu"
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
      "Alice Napolitano",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Ann Betterton",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Meryl Nadler",
      "Alice Napolitano"
     ],
     "a": [
      "Jennifer Qian",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Nazario",
      "Amy Chrebet"
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
     "as": 12,
     "h": [
      "Darren Saks",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jim Peng",
      "Sam Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Yi Gu",
      "Todd Gasparre"
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
     "as": 17,
     "h": [
      "Amy Chrebet",
      "Yi Gu"
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
     "as": 14,
     "h": [
      "Alice Napolitano",
      "Darren Saks"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Meryl Nadler",
      "Lance Brown"
     ],
     "a": [
      "Shaoyi Sun",
      "Peter Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meryl Nadler",
      "Natasha De Carvalho"
     ],
     "a": [
      "Rui Zhang",
      "Jennifer Qian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Sarah Nazario"
     ],
     "a": [
      "Mei Li",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Dombrowiecki",
      "Todd Gasparre"
     ],
     "a": [
      "Jim Peng",
      "Liangang Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Darren Saks",
      "Lance Brown"
     ],
     "a": [
      "Peter Shen",
      "Sam Zhou"
     ]
    }
   ],
   "subs": [
    "Peter Shen"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-19T12:00:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 527,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Hanson Word",
      "Ryan Sherry"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Alex Lee"
     ],
     "a": [
      "Eva Danieli",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karan Pescatore",
      "Christopher Krecke"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelly Hanson Word",
      "Rebecca Lederman"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Jill Lesnik"
     ],
     "a": [
      "Sarah Nazario",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Chernin",
      "Alex Lee"
     ],
     "a": [
      "Michael Swell",
      "Todd Gasparre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ryan Sherry",
      "Emil Pescatore"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Sarah Nazario",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
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
     "as": 5,
     "h": [
      "Jill Lesnik",
      "Ryan Sherry"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Christopher Krecke"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
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
      "Eva Danieli",
      "Sarah Nazario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Rebecca Lederman"
     ],
     "a": [
      "Alice Napolitano",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Sherry",
      "Christopher Krecke"
     ],
     "a": [
      "Michael Swell",
      "Todd Gasparre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Lee",
      "Emil Pescatore"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carly Pfeffer",
      "Emil Pescatore"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Hanson Word",
      "Daniel Chernin"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karan Pescatore",
      "Alex Lee"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jill Lesnik",
      "Christopher Krecke"
     ],
     "a": [
      "Natasha De Carvalho",
      "Todd Gasparre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karan Pescatore",
      "Jill Lesnik"
     ],
     "a": [
      "Sarah Nazario",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christopher Krecke",
      "Daniel Chernin"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Lee",
      "Emil Pescatore"
     ],
     "a": [
      "Lance Brown",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Daniel Chernin"
     ],
     "a": [
      "Alice Napolitano",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Eva Danieli",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Hanson Word",
      "Ryan Sherry"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rebecca Lederman",
      "Alex Lee"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rebecca Lederman",
      "Jill Lesnik"
     ],
     "a": [
      "Sarah Nazario",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kelly Hanson Word",
      "Karan Pescatore"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alex Lee",
      "Ryan Sherry"
     ],
     "a": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Daniel Chernin",
      "Emil Pescatore"
     ],
     "a": [
      "Yi Gu",
      "Lance Brown"
     ]
    }
   ],
   "subs": [
    "Christopher Krecke"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Allstar Pickler",
   "away": "Stelton Sports",
   "time": "2026-09-19T12:00:00",
   "complete": true,
   "homePoints": 587,
   "awayPoints": 621,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "John Zhong"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Brandon Fulford"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Picky Vorabouth",
      "Abraham Telechanski"
     ],
     "a": [
      "Rui Zhang",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Cuc Dang"
     ],
     "a": [
      "Ann Betterton",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Picky Vorabouth",
      "Kajal Sinkar"
     ],
     "a": [
      "Mei Li",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Liangjie Zhu",
      "John Zhong"
     ],
     "a": [
      "Jim Peng",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Brandon Fulford"
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
     "as": 15,
     "h": [
      "Savita Nandal",
      "Paul Rappoport"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Picky Vorabouth",
      "Brandon Fulford"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kajal Sinkar",
      "Abraham Telechanski"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Ellen Xu",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Picky Vorabouth",
      "Kajal Sinkar"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ronnie Yin",
      "Cuc Dang"
     ],
     "a": [
      "Shaoyi Sun",
      "Ellen Xu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Liangjie Zhu",
      "Paul Rappoport"
     ],
     "a": [
      "Mengchu Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "John Zhong",
      "Abraham Telechanski"
     ],
     "a": [
      "Sam Zhou",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Picky Vorabouth",
      "Liangjie Zhu"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Paul Rappoport"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Brandon Fulford"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Abraham Telechanski"
     ],
     "a": [
      "Ann Betterton",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Savita Nandal"
     ],
     "a": [
      "Ann Betterton",
      "Ellen Xu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Picky Vorabouth",
      "Ronnie Yin"
     ],
     "a": [
      "Rui Zhang",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ],
     "a": [
      "Jim Peng",
      "Leon Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Paul Rappoport"
     ],
     "a": [
      "Mengchu Zhou",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Paul Rappoport"
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
      "Savita Nandal",
      "John Zhong"
     ],
     "a": [
      "Jennifer Qian",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Picky Vorabouth",
      "Liangjie Zhu"
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
     "as": 15,
     "h": [
      "Ronnie Yin",
      "Abraham Telechanski"
     ],
     "a": [
      "Ellen Xu",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Kajal Sinkar"
     ],
     "a": [
      "Jennifer Qian",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cuc Dang",
      "Picky Vorabouth"
     ],
     "a": [
      "Ann Betterton",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "John Zhong"
     ],
     "a": [
      "Jim Peng",
      "Sam Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    }
   ],
   "subs": [
    "Picky Vorabouth",
    "Cuc Dang"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Flemington Blue",
   "away": "Premiere",
   "time": "2026-09-19T12:00:00",
   "complete": true,
   "homePoints": 627,
   "awayPoints": 575,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Susan Ackley",
      "Steven Gregov"
     ],
     "a": [
      "Quen Koon Ng",
      "Jeffrey Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Marc Friedman"
     ],
     "a": [
      "Lily Liu",
      "Steve Gerwer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carol Mastroianni",
      "Bill Brandt"
     ],
     "a": [
      "Tara Lombardo",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Scott Rubin"
     ],
     "a": [
      "Nancy Lin",
      "John Ficarra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Lily Liu",
      "Coby Resnick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ceil Gomez",
      "Chanda Mccoy"
     ],
     "a": [
      "Tara Lombardo",
      "Quen Koon Ng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bill Brandt",
      "John Pineda"
     ],
     "a": [
      "Jeffrey Rubin",
      "James Gross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steven Gregov",
      "Marc Friedman"
     ],
     "a": [
      "Steve Gerwer",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Bill Brandt"
     ],
     "a": [
      "Lily Liu",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Ackley",
      "Steven Gregov"
     ],
     "a": [
      "Nancy Lin",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ceil Gomez",
      "John Pineda"
     ],
     "a": [
      "Coby Resnick",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carol Mastroianni",
      "Scott Rubin"
     ],
     "a": [
      "Tara Lombardo",
      "John Ficarra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chanda Mccoy",
      "Ceil Gomez"
     ],
     "a": [
      "Coby Resnick",
      "Tara Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Nancy Lin",
      "Quen Koon Ng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bill Brandt",
      "Marc Friedman"
     ],
     "a": [
      "Jeffrey Rubin",
      "John Ficarra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "John Pineda",
      "Scott Rubin"
     ],
     "a": [
      "Sal Frangipane",
      "Steve Gerwer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chanda Mccoy",
      "Bill Brandt"
     ],
     "a": [
      "Nancy Lin",
      "Jeffrey Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Susan Ackley",
      "Scott Rubin"
     ],
     "a": [
      "Tara Lombardo",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Steven Gregov"
     ],
     "a": [
      "Lily Liu",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Quen Koon Ng",
      "Steve Gerwer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Chanda Mccoy"
     ],
     "a": [
      "Lily Liu",
      "Tara Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carol Mastroianni",
      "Ceil Gomez"
     ],
     "a": [
      "Coby Resnick",
      "Quen Koon Ng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Steven Gregov",
      "Scott Rubin"
     ],
     "a": [
      "Steve Gerwer",
      "John Ficarra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Marc Friedman",
      "John Pineda"
     ],
     "a": [
      "James Gross",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Ackley",
      "John Pineda"
     ],
     "a": [
      "Tara Lombardo",
      "Jeffrey Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chanda Mccoy",
      "Steven Gregov"
     ],
     "a": [
      "Lily Liu",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ceil Gomez",
      "Marc Friedman"
     ],
     "a": [
      "Coby Resnick",
      "Steve Gerwer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carol Mastroianni",
      "Bill Brandt"
     ],
     "a": [
      "Nancy Lin",
      "John Ficarra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Carol Mastroianni",
      "Chanda Mccoy"
     ],
     "a": [
      "Coby Resnick",
      "Nancy Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Ackley",
      "Ceil Gomez"
     ],
     "a": [
      "Lily Liu",
      "Quen Koon Ng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Steven Gregov",
      "Bill Brandt"
     ],
     "a": [
      "Jeffrey Rubin",
      "Sal Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Scott Rubin",
      "John Pineda"
     ],
     "a": [
      "Alfonse Calato",
      "James Gross"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Bounce Malvern Black",
   "away": "APC Garden State",
   "time": "2026-09-19T13:00:00",
   "complete": true,
   "homePoints": 662,
   "awayPoints": 524,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tera Baccile",
      "Jim Darcangelo"
     ],
     "a": [
      "Lara Webb",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Jiyun Yuh",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Erika Simone",
      "Derek Le"
     ],
     "a": [
      "Lisa Loeber",
      "Steve Hong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Erika Simone",
      "Stephanie Woomer"
     ],
     "a": [
      "Lisa Loeber",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vicki Main",
      "Tera Baccile"
     ],
     "a": [
      "Lara Webb",
      "Laura Sweet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Dieterle",
      "John Morabito"
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
      "Derek Le",
      "Michael Finkelstein"
     ],
     "a": [
      "Danny Mellul",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tera Baccile",
      "Michael Dieterle"
     ],
     "a": [
      "Lisa Loeber",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ],
     "a": [
      "Lara Webb",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "John Morabito"
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
     "as": 15,
     "h": [
      "Erika Simone",
      "Michael Finkelstein"
     ],
     "a": [
      "Laura Sweet",
      "Tom Kresky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Erika Simone",
      "Vicki Main"
     ],
     "a": [
      "Laura Sweet",
      "Lara Webb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tera Baccile",
      "Stephanie Woomer"
     ],
     "a": [
      "Jiyun Yuh",
      "Lisa Loeber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jim Darcangelo",
      "John Morabito"
     ],
     "a": [
      "Danny Mellul",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michael Dieterle",
      "Derek Le"
     ],
     "a": [
      "Steve Hong",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Laura Sweet",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Jim Darcangelo"
     ],
     "a": [
      "Lisa Loeber",
      "Danny Mellul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Derek Le"
     ],
     "a": [
      "Lara Webb",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Erika Simone",
      "John Morabito"
     ],
     "a": [
      "Jiyun Yuh",
      "Steve Hong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Vicki Main",
      "Stephanie Woomer"
     ],
     "a": [
      "Lisa Loeber",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Erika Simone",
      "Tera Baccile"
     ],
     "a": [
      "Lara Webb",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jim Darcangelo",
      "Derek Le"
     ],
     "a": [
      "John Darrah",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michael Finkelstein",
      "Michael Dieterle"
     ],
     "a": [
      "Danny Mellul",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Erika Simone",
      "Jim Darcangelo"
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
      "Stephanie Woomer",
      "Michael Dieterle"
     ],
     "a": [
      "Laura Sweet",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Lisa Loeber",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tera Baccile",
      "John Morabito"
     ],
     "a": [
      "Lara Webb",
      "Danny Mellul"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tera Baccile",
      "Stephanie Woomer"
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
     "as": 14,
     "h": [
      "Vicki Main",
      "Erika Simone"
     ],
     "a": [
      "Jiyun Yuh",
      "Lara Webb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Derek Le",
      "Michael Dieterle"
     ],
     "a": [
      "Tom Kresky",
      "John Darrah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ],
     "a": [
      "Steve Hong",
      "Jimmy Shapiro"
     ]
    }
   ],
   "subs": [
    "Lara Webb",
    "Danny Mellul"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickle Place",
   "away": "Flemington Green",
   "time": "2026-09-19T14:00:00",
   "complete": true,
   "homePoints": 473,
   "awayPoints": 442,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marykristin Haskell",
      "Jay Rohatgi"
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
     "as": 19,
     "h": [
      "Janet Garrity",
      "Thomas Ross"
     ],
     "a": [
      "Christine Papa",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dottie Kelly",
      "Tom Zentmeyer"
     ],
     "a": [
      "Aimee Castellano",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Denise Richmond",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Janine Forrest"
     ],
     "a": [
      "Katrina Mcintyre",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dottie Kelly",
      "Marykristin Haskell"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "David Osborne",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robert Block",
      "Thomas Ross"
     ],
     "a": [
      "David Mcintyre",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dottie Kelly",
      "Jay Rohatgi"
     ],
     "a": [
      "Denise Richmond",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Nancy Blank",
      "Thomas Ross"
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Jonathan Goldner"
     ],
     "a": [
      "Katrina Mcintyre",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Barbara Hess",
      "David Mcintyre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Marykristin Haskell"
     ],
     "a": [
      "Christine Papa",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Nancy Blank"
     ],
     "a": [
      "Aimee Castellano",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "David Mcintyre",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jay Rohatgi",
      "Robert Block"
     ],
     "a": [
      "Richard Demeuse",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nancy Blank",
      "Thomas Ross"
     ],
     "a": [
      "Barbara Hess",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dottie Kelly",
      "Jonathan Goldner"
     ],
     "a": [
      "Katrina Mcintyre",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Janet Garrity",
      "Robert Block"
     ],
     "a": [
      "Denise Richmond",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dottie Kelly",
      "Janine Forrest"
     ],
     "a": [
      "Katrina Mcintyre",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Nancy Blank"
     ],
     "a": [
      "Aimee Castellano",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jay Rohatgi",
      "Jonathan Goldner"
     ],
     "a": [
      "David Osborne",
      "David Mcintyre"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "Craig Batten",
      "Richard Demeuse"
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
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Marykristin Haskell",
      "Robert Block"
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nancy Blank",
      "Jonathan Goldner"
     ],
     "a": [
      "Denise Richmond",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dottie Kelly",
      "Thomas Ross"
     ],
     "a": [
      "Barbara Hess",
      "David Mcintyre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dottie Kelly",
      "Janine Forrest"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Nancy Blank"
     ],
     "a": [
      "Denise Richmond",
      "Katrina Mcintyre"
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
      "David Osborne",
      "Craig Batten"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jonathan Goldner",
      "Robert Block"
     ],
     "a": [
      "David Mcintyre",
      "Richard Demeuse"
     ]
    }
   ],
   "subs": [
    "David Mcintyre",
    "Dottie Kelly"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "ACE Moorestown",
   "away": "Bounce Malvern Boom",
   "time": "2026-09-19T14:00:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 494,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Jonathan Brand"
     ],
     "a": [
      "Kristina Rhodes",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stacey Frank",
      "James Shaw"
     ],
     "a": [
      "Christine Dugan",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Lucy Chow",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Linda Zhu",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Kristina Rhodes",
      "Sandra Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Boyd",
      "Sandy Alkins"
     ],
     "a": [
      "Linda Zhu",
      "Lucy Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jonathan Brand",
      "James Shaw"
     ],
     "a": [
      "Brett Kleger",
      "Talen Singer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Chris Norton",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sandy Alkins",
      "Jonathan Brand"
     ],
     "a": [
      "Kristina Rhodes",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Robert Finley"
     ],
     "a": [
      "Christine Dugan",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Pam Boyd",
      "James Shaw"
     ],
     "a": [
      "Lucy Chow",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Sandra Thompson",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sandy Alkins",
      "Kate Siedell"
     ],
     "a": [
      "Kristina Rhodes",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Linda Zhu",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "James Shaw",
      "Robert Finley"
     ],
     "a": [
      "Brett Kleger",
      "Chris Norton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jonathan Brand",
      "Marc Harden"
     ],
     "a": [
      "Ed Gieske",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacey Frank",
      "Jonathan Brand"
     ],
     "a": [
      "Christine Dugan",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Lucy Chow",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Sandra Thompson",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sandy Alkins",
      "James Shaw"
     ],
     "a": [
      "Linda Zhu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Christine Dugan",
      "Kristina Rhodes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sandy Alkins",
      "Pam Boyd"
     ],
     "a": [
      "Linda Zhu",
      "Lucy Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jonathan Brand",
      "James Shaw"
     ],
     "a": [
      "Brett Kleger",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Ed Gieske",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stacey Frank",
      "James Shaw"
     ],
     "a": [
      "Kristina Rhodes",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kate Siedell",
      "Jonathan Brand"
     ],
     "a": [
      "Christine Dugan",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sandy Alkins",
      "Robert Finley"
     ],
     "a": [
      "Sandra Thompson",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pam Boyd",
      "Marc Harden"
     ],
     "a": [
      "Linda Zhu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Kristina Rhodes",
      "Lucy Chow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Sandra Thompson",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Robert Finley",
      "James Shaw"
     ],
     "a": [
      "Brett Kleger",
      "Chris Norton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Marc Harden",
      "Jonathan Brand"
     ],
     "a": [
      "Sandro Stefanelli",
      "Ed Gieske"
     ]
    }
   ],
   "subs": [
    "James Shaw",
    "Lucy Chow"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Bounce Malvern Boom",
   "away": "Bounce Malvern Black",
   "time": "2026-09-23T19:00:00",
   "complete": true,
   "homePoints": 528,
   "awayPoints": 666,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kristina Rhodes",
      "Brett Kleger"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Chris Norton"
     ],
     "a": [
      "Stephanie Woomer",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ],
     "a": [
      "Vicki Main",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Talen Singer"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Linda Zhu",
      "Sandra Thompson"
     ],
     "a": [
      "Stephanie Woomer",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristina Rhodes",
      "Jamila Sefiane"
     ],
     "a": [
      "Katherine Maruyama",
      "Erika Simone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Marchese",
      "Sandro Stefanelli"
     ],
     "a": [
      "Michael Finkelstein",
      "Michael Dieterle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Talen Singer",
      "Brett Kleger"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Dugan",
      "Brett Kleger"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Chris Norton"
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
      "Jamila Sefiane",
      "David Marchese"
     ],
     "a": [
      "Vicki Main",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kristina Rhodes",
      "Sandro Stefanelli"
     ],
     "a": [
      "Erika Simone",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Linda Zhu"
     ],
     "a": [
      "Vicki Main",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Dugan",
      "Kristina Rhodes"
     ],
     "a": [
      "Erika Simone",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chris Norton",
      "Talen Singer"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brett Kleger",
      "Sandro Stefanelli"
     ],
     "a": [
      "Jingwei Wu",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Stephanie Woomer",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "David Marchese"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sandra Thompson",
      "Brett Kleger"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Talen Singer"
     ],
     "a": [
      "Erika Simone",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandra Thompson",
      "Jamila Sefiane"
     ],
     "a": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Christine Dugan",
      "Kristina Rhodes"
     ],
     "a": [
      "Vicki Main",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brett Kleger",
      "Chris Norton"
     ],
     "a": [
      "Michael Dieterle",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Talen Singer",
      "David Marchese"
     ],
     "a": [
      "Jingwei Wu",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jamila Sefiane",
      "Talen Singer"
     ],
     "a": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Dugan",
      "David Marchese"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristina Rhodes",
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
     "hs": 23,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Chris Norton"
     ],
     "a": [
      "Erika Simone",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kristina Rhodes",
      "Linda Zhu"
     ],
     "a": [
      "Katherine Maruyama",
      "Erika Simone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Dugan",
      "Jamila Sefiane"
     ],
     "a": [
      "Stephanie Woomer",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "David Marchese",
      "Brett Kleger"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sandro Stefanelli",
      "Chris Norton"
     ],
     "a": [
      "Michael Dieterle",
      "Derek Le"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "Premiere",
   "away": "Allstar Pickler",
   "time": "2026-09-26T12:00:00",
   "complete": true,
   "homePoints": 584,
   "awayPoints": 643,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jacklyn Beck",
      "Marek Beck"
     ],
     "a": [
      "Evelyn Du",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "a": [
      "Margaret Weidlich",
      "Mark Fappiano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nancy Lin",
      "John Ficarra"
     ],
     "a": [
      "Cuc Dang",
      "John Sallo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Alfonse Calato"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ],
     "a": [
      "Cuc Dang",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Evelyn Du",
      "Ronnie Yin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "John Ficarra",
      "James Gross"
     ],
     "a": [
      "Liangjie Zhu",
      "Mark Fappiano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeffrey Rubin",
      "Marek Beck"
     ],
     "a": [
      "Abraham Telechanski",
      "John Sallo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Hayley Yandoli",
      "Alfonse Calato"
     ],
     "a": [
      "Evelyn Du",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "James Gross"
     ],
     "a": [
      "Margaret Weidlich",
      "Mark Fappiano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Cuc Dang",
      "Yang Xu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jacklyn Beck",
      "Marek Beck"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Margaret Weidlich",
      "Cuc Dang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jacklyn Beck",
      "Hayley Yandoli"
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
     "as": 16,
     "h": [
      "John Ficarra",
      "James Gross"
     ],
     "a": [
      "John Sallo",
      "Yang Xu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alfonse Calato",
      "Jeffrey Rubin"
     ],
     "a": [
      "Abraham Telechanski",
      "Mark Fappiano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tara Lombardo",
      "Marek Beck"
     ],
     "a": [
      "Evelyn Du",
      "Mark Fappiano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jacklyn Beck",
      "Jeffrey Rubin"
     ],
     "a": [
      "Cuc Dang",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Quen Koon Ng",
      "John Ficarra"
     ],
     "a": [
      "Margaret Weidlich",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Erik Lombardo"
     ],
     "a": [
      "Ronnie Yin",
      "John Sallo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nancy Lin",
      "Hayley Yandoli"
     ],
     "a": [
      "Cuc Dang",
      "Evelyn Du"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tara Lombardo",
      "Jacklyn Beck"
     ],
     "a": [
      "Ronnie Yin",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alfonse Calato",
      "Marek Beck"
     ],
     "a": [
      "Liangjie Zhu",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Erik Lombardo",
      "James Gross"
     ],
     "a": [
      "Mark Fappiano",
      "Yang Xu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Jeffrey Rubin"
     ],
     "a": [
      "Cuc Dang",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Quen Koon Ng",
      "James Gross"
     ],
     "a": [
      "Evelyn Du",
      "Yang Xu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nancy Lin",
      "John Ficarra"
     ],
     "a": [
      "Margaret Weidlich",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tara Lombardo",
      "Alfonse Calato"
     ],
     "a": [
      "Ronnie Yin",
      "Mark Fappiano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Hayley Yandoli"
     ],
     "a": [
      "Evelyn Du",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tara Lombardo",
      "Jacklyn Beck"
     ],
     "a": [
      "Cuc Dang",
      "Ronnie Yin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Erik Lombardo",
      "Marek Beck"
     ],
     "a": [
      "John Sallo",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alfonse Calato",
      "Jeffrey Rubin"
     ],
     "a": [
      "Yang Xu",
      "Abraham Telechanski"
     ]
    }
   ],
   "subs": [
    "Jacklyn Beck",
    "Mark Fappiano",
    "Cuc Dang",
    "Marek Beck",
    "John Sallo",
    "Yang Xu"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "APC Garden State",
   "away": "Flemington Green",
   "time": "2026-09-26T13:00:00",
   "complete": true,
   "homePoints": 527,
   "awayPoints": 646,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "John Darrah"
     ],
     "a": [
      "Katrina Mcintyre",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Steve Hong"
     ],
     "a": [
      "Barbara Hess",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Jimmy Shapiro"
     ],
     "a": [
      "Aimee Castellano",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lisa Loeber",
      "Andrew Fleischer"
     ],
     "a": [
      "Christine Papa",
      "Craig Batten"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cynthia Covie",
      "Lisa Loeber"
     ],
     "a": [
      "Tara Kramer",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Kerry Gray-Style"
     ],
     "a": [
      "Kristen Soucie",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jimmy Shapiro",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "John Darrah",
      "Tom Kresky"
     ],
     "a": [
      "Bob Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lisa Loeber",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kerry Gray-Style",
      "Tom Kresky"
     ],
     "a": [
      "Kristen Soucie",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Steve Hong"
     ],
     "a": [
      "Katrina Mcintyre",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Andrew Fleischer"
     ],
     "a": [
      "Barbara Hess",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cynthia Covie",
      "Lisa Loeber"
     ],
     "a": [
      "Tara Kramer",
      "Aimee Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Kerry Gray-Style"
     ],
     "a": [
      "Katrina Mcintyre",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Darrah",
      "Andrew Fleischer"
     ],
     "a": [
      "Eric Luque",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stepan Nevshehirlian",
      "Jimmy Shapiro"
     ],
     "a": [
      "Craig Batten",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Tom Kresky"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lisa Loeber",
      "Jimmy Shapiro"
     ],
     "a": [
      "Kristen Soucie",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Andrew Fleischer"
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kelly Dalsey",
      "Steve Hong"
     ],
     "a": [
      "Katrina Mcintyre",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Kerry Gray-Style"
     ],
     "a": [
      "Christine Papa",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Dalsey",
      "Lisa Loeber"
     ],
     "a": [
      "Kristen Soucie",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "John Darrah",
      "Tom Kresky"
     ],
     "a": [
      "David Osborne",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Steve Hong",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Bob Castellano",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Andrew Fleischer"
     ],
     "a": [
      "Barbara Hess",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "John Darrah"
     ],
     "a": [
      "Tara Kramer",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lisa Loeber",
      "Steve Hong"
     ],
     "a": [
      "Kristen Soucie",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Jimmy Shapiro"
     ],
     "a": [
      "Aimee Castellano",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Kelly Dalsey"
     ],
     "a": [
      "Katrina Mcintyre",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lisa Loeber",
      "Kerry Gray-Style"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "John Darrah",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Craig Batten",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tom Kresky",
      "Jimmy Shapiro"
     ],
     "a": [
      "David Osborne",
      "Richard Demeuse"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "Pickle Place",
   "away": "ACE Moorestown",
   "time": "2026-09-26T14:00:00",
   "complete": true,
   "homePoints": 548,
   "awayPoints": 645,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Kate Siedell",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janet Garrity",
      "Thomas Ross"
     ],
     "a": [
      "Kim Hamilton",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jane Meng",
      "David Eisen"
     ],
     "a": [
      "Stacey Frank",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cynthia Eisen",
      "Jonathan Goldner"
     ],
     "a": [
      "Susan Debbs",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jane Meng",
      "Janet Garrity"
     ],
     "a": [
      "Stacey Frank",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cynthia Eisen",
      "Marykristin Haskell"
     ],
     "a": [
      "Susan Debbs",
      "Kim Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "Thomas Schillow",
      "Yang Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "David Eisen",
      "Ed Saxman"
     ],
     "a": [
      "Marc Harden",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "David Eisen"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Jonathan Goldner"
     ],
     "a": [
      "Stacey Frank",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jane Meng",
      "Ed Saxman"
     ],
     "a": [
      "Susan Debbs",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Thomas Ross"
     ],
     "a": [
      "Kim Hamilton",
      "Thomas Schillow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jane Meng",
      "Nancy Blank"
     ],
     "a": [
      "Stacey Frank",
      "Susan Debbs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cynthia Eisen",
      "Emily Abbott"
     ],
     "a": [
      "Kate Siedell",
      "Kim Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jonathan Goldner",
      "Thomas Ross"
     ],
     "a": [
      "Thomas Schillow",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ed Saxman",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jeff Lorman",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Thomas Ross"
     ],
     "a": [
      "Stacey Frank",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Kim Hamilton",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cynthia Eisen",
      "Ed Saxman"
     ],
     "a": [
      "Susan Debbs",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jane Meng",
      "David Eisen"
     ],
     "a": [
      "Kate Siedell",
      "Yang Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Janet Garrity"
     ],
     "a": [
      "Kate Siedell",
      "Susan Debbs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Nancy Blank"
     ],
     "a": [
      "Kim Hamilton",
      "Stacey Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "Thomas Schillow",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "David Eisen",
      "Jonathan Goldner"
     ],
     "a": [
      "Jeff Lorman",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Jonathan Goldner"
     ],
     "a": [
      "Kim Hamilton",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Janet Garrity",
      "Ed Saxman"
     ],
     "a": [
      "Susan Debbs",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cynthia Eisen",
      "Tom Zentmeyer"
     ],
     "a": [
      "Stacey Frank",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Emily Abbott",
      "David Eisen"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cynthia Eisen",
      "Nancy Blank"
     ],
     "a": [
      "Kim Hamilton",
      "Susan Debbs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Emily Abbott",
      "Marykristin Haskell"
     ],
     "a": [
      "Kate Siedell",
      "Stacey Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ed Saxman",
      "Thomas Ross"
     ],
     "a": [
      "Jeff Lorman",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "Thomas Schillow",
      "Yang Wang"
     ]
    }
   ],
   "subs": [
    "Ed Saxman",
    "Yang Wang",
    "Thomas Schillow",
    "Kim Hamilton",
    "David Eisen"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Stelton Sports",
   "away": "Bounce Malvern Boom",
   "time": "2026-09-27T12:00:00",
   "complete": true,
   "homePoints": 630,
   "awayPoints": 590,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ping Yang",
      "Sam Zhou"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Rui Zhang",
      "Leon Li"
     ],
     "a": [
      "Cindy Hu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Christine Dugan",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Sandra Thompson",
      "Brett Kleger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Ellen Xu"
     ],
     "a": [
      "Jamila Sefiane",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rui Zhang",
      "June Lee"
     ],
     "a": [
      "Linda Zhu",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jay Zeng",
      "Mengchu Zhou"
     ],
     "a": [
      "Brett Kleger",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sam Zhou",
      "Leon Li"
     ],
     "a": [
      "Jiang Jin",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rui Zhang",
      "Liangang Liu"
     ],
     "a": [
      "Jamila Sefiane",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Cindy Hu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ping Yang",
      "Mengchu Zhou"
     ],
     "a": [
      "Christine Dugan",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ellen Xu",
      "Leon Li"
     ],
     "a": [
      "Linda Zhu",
      "Jiang Jin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Ping Yang"
     ],
     "a": [
      "Jamila Sefiane",
      "Sandra Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mei Li",
      "Ellen Xu"
     ],
     "a": [
      "Cindy Hu",
      "Linda Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sam Zhou",
      "Jay Zeng"
     ],
     "a": [
      "Brett Kleger",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lei Dong",
      "Liangang Liu"
     ],
     "a": [
      "Chris Norton",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "June Lee",
      "Liangang Liu"
     ],
     "a": [
      "Cindy Hu",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mei Li",
      "Sam Zhou"
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
      "Rui Zhang",
      "Lei Dong"
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
     "as": 12,
     "h": [
      "Ann Betterton",
      "Leon Li"
     ],
     "a": [
      "Sandra Thompson",
      "Brett Kleger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ellen Xu",
      "June Lee"
     ],
     "a": [
      "Jamila Sefiane",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Rui Zhang",
      "Ann Betterton"
     ],
     "a": [
      "Cindy Hu",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Leon Li",
      "Jay Zeng"
     ],
     "a": [
      "Sandro Stefanelli",
      "Chris Norton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sam Zhou",
      "Mengchu Zhou"
     ],
     "a": [
      "Jiang Jin",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Cindy Hu",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Christine Dugan",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "June Lee",
      "Leon Li"
     ],
     "a": [
      "Linda Zhu",
      "Jiang Jin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ellen Xu",
      "June Lee"
     ],
     "a": [
      "Christine Dugan",
      "Cindy Hu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mei Li",
      "Ping Yang"
     ],
     "a": [
      "Jamila Sefiane",
      "Linda Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mengchu Zhou",
      "Jay Zeng"
     ],
     "a": [
      "Jiang Jin",
      "Brett Kleger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lei Dong",
      "Liangang Liu"
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
   "result": "away",
   "week": 6,
   "home": "Premiere",
   "away": "Pickle Place",
   "time": "2026-09-27T12:00:00",
   "complete": true,
   "homePoints": 502,
   "awayPoints": 634,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Steve Gerwer"
     ],
     "a": [
      "Marykristin Haskell",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Jeffrey Rubin"
     ],
     "a": [
      "Alicia Maguire",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Alfonse Calato"
     ],
     "a": [
      "Janet Garrity",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "a": [
      "Jane Meng",
      "David Eisen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Quen Koon Ng",
      "Hayley Yandoli"
     ],
     "a": [
      "Alicia Maguire",
      "Janet Garrity"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tara Lombardo",
      "Nancy Lin"
     ],
     "a": [
      "Jane Meng",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "Steve Gerwer"
     ],
     "a": [
      "Jay Rohatgi",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "John Ficarra",
      "Jeffrey Rubin"
     ],
     "a": [
      "Ed Saxman",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Sal Frangipane"
     ],
     "a": [
      "Alicia Maguire",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nancy Lin",
      "John Ficarra"
     ],
     "a": [
      "Jane Meng",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Alfonse Calato"
     ],
     "a": [
      "Cynthia Eisen",
      "Ed Saxman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Erik Lombardo"
     ],
     "a": [
      "Janet Garrity",
      "David Eisen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ],
     "a": [
      "Cynthia Eisen",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Janet Garrity",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alfonse Calato",
      "Jeffrey Rubin"
     ],
     "a": [
      "Eric Markowitz",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Ficarra",
      "Steve Gerwer"
     ],
     "a": [
      "David Eisen",
      "Ed Saxman"
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
      "Alicia Maguire",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Jeffrey Rubin"
     ],
     "a": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Cynthia Eisen",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "John Ficarra"
     ],
     "a": [
      "Janet Garrity",
      "Ed Saxman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Tara Lombardo"
     ],
     "a": [
      "Alicia Maguire",
      "Jane Meng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Hayley Yandoli"
     ],
     "a": [
      "Cynthia Eisen",
      "Janet Garrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Erik Lombardo",
      "Alfonse Calato"
     ],
     "a": [
      "Jay Rohatgi",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "Steve Gerwer"
     ],
     "a": [
      "David Eisen",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 4,
     "h": [
      "Quen Koon Ng",
      "John Ficarra"
     ],
     "a": [
      "Cynthia Eisen",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tara Lombardo",
      "Alfonse Calato"
     ],
     "a": [
      "Jane Meng",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hayley Yandoli",
      "Jeffrey Rubin"
     ],
     "a": [
      "Alicia Maguire",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Steve Gerwer"
     ],
     "a": [
      "Marykristin Haskell",
      "Ed Saxman"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Cynthia Eisen",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ],
     "a": [
      "Alicia Maguire",
      "Janet Garrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alfonse Calato",
      "Jeffrey Rubin"
     ],
     "a": [
      "Eric Markowitz",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Erik Lombardo",
      "Sal Frangipane"
     ],
     "a": [
      "David Eisen",
      "Ed Saxman"
     ]
    }
   ],
   "subs": [
    "Ed Saxman",
    "David Eisen"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Allstar Pickler",
   "away": "Flemington Green",
   "time": "2026-09-27T13:00:00",
   "complete": true,
   "homePoints": 547,
   "awayPoints": 608,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lan Bin",
      "Ping Peng"
     ],
     "a": [
      "Stacy Garretson",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Paul Rappoport"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Evelyn Du",
      "Abraham Telechanski"
     ],
     "a": [
      "Barbara Hess",
      "John Hauth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Margaret Weidlich"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Lan Bin"
     ],
     "a": [
      "Tara Kramer",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Liangjie Zhu",
      "Paul Rappoport"
     ],
     "a": [
      "Eric Luque",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Abraham Telechanski",
      "Ping Peng"
     ],
     "a": [
      "David Osborne",
      "John Hauth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lan Bin",
      "Jieping Wang"
     ],
     "a": [
      "Stacy Garretson",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Paul Rappoport"
     ],
     "a": [
      "Christine Papa",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Tara Kramer",
      "John Hauth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Evelyn Du",
      "Abraham Telechanski"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Evelyn Du"
     ],
     "a": [
      "Aimee Castellano",
      "Stacy Garretson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Lan Bin"
     ],
     "a": [
      "Barbara Hess",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Liangjie Zhu",
      "John Zhong"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Abraham Telechanski",
      "Ping Peng"
     ],
     "a": [
      "Richard Demeuse",
      "John Hauth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ronnie Yin",
      "Abraham Telechanski"
     ],
     "a": [
      "Barbara Hess",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lan Bin",
      "Jieping Wang"
     ],
     "a": [
      "Aimee Castellano",
      "John Hauth"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 7,
     "as": 9,
     "h": [
      "Evelyn Du",
      "Ping Peng"
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
     "as": 18,
     "h": [
      "Margaret Weidlich",
      "Liangjie Zhu"
     ],
     "a": [
      "Stacy Garretson",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Evelyn Du"
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Lan Bin"
     ],
     "a": [
      "Barbara Hess",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "John Zhong",
      "Paul Rappoport"
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
      "Liangjie Zhu",
      "Ping Peng"
     ],
     "a": [
      "Eric Luque",
      "John Hauth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Margaret Weidlich",
      "Abraham Telechanski"
     ],
     "a": [
      "Tara Kramer",
      "John Hauth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Ping Peng"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Jieping Wang"
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Lan Bin",
      "John Zhong"
     ],
     "a": [
      "Stacy Garretson",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Lan Bin"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Ronnie Yin"
     ],
     "a": [
      "Christine Papa",
      "Stacy Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Liangjie Zhu",
      "Jieping Wang"
     ],
     "a": [
      "Eric Luque",
      "John Hauth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Abraham Telechanski",
      "Paul Rappoport"
     ],
     "a": [
      "David Osborne",
      "Richard Demeuse"
     ]
    }
   ],
   "subs": [
    "Ping Peng",
    "Lan Bin",
    "Jieping Wang"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Flemington Blue",
   "away": "APC Garden State",
   "time": "2026-09-27T13:00:00",
   "complete": true,
   "homePoints": 639,
   "awayPoints": 569,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Bill Brandt"
     ],
     "a": [
      "Kelly Dalsey",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Scott Rubin"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amy Johnson",
      "Stephen Locker"
     ],
     "a": [
      "Cynthia Covie",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sue Johnson",
      "John Pineda"
     ],
     "a": [
      "Jiyun Yuh",
      "Derek Livingston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carol Mastroianni",
      "Susan Ackley"
     ],
     "a": [
      "Laura Sweet",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Bill Brandt",
      "Stephen Locker"
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
     "as": 13,
     "h": [
      "Scott Rubin",
      "Jorge Diaz"
     ],
     "a": [
      "Derek Livingston",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Scott Rubin"
     ],
     "a": [
      "Laura Sweet",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carol Mastroianni",
      "Bill Brandt"
     ],
     "a": [
      "Cynthia Covie",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Johnson",
      "John Pineda"
     ],
     "a": [
      "Jiyun Yuh",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Kelly Dalsey",
      "Steve Hong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carol Mastroianni",
      "Susan Ackley"
     ],
     "a": [
      "Cynthia Covie",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Kelly Dalsey",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Bill Brandt",
      "Scott Rubin"
     ],
     "a": [
      "Stepan Nevshehirlian",
      "Steve Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "John Pineda",
      "Stephen Locker"
     ],
     "a": [
      "Derek Livingston",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan Ackley",
      "Bill Brandt"
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
     "as": 16,
     "h": [
      "Carol Mastroianni",
      "Stephen Locker"
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
     "as": 16,
     "h": [
      "Amy Johnson",
      "Jorge Diaz"
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
     "as": 19,
     "h": [
      "Sue Johnson",
      "John Pineda"
     ],
     "a": [
      "Kelly Dalsey",
      "Derek Livingston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Sue Johnson"
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
     "as": 14,
     "h": [
      "Susan Ackley",
      "Amy Johnson"
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
     "as": 17,
     "h": [
      "Scott Rubin",
      "Stephen Locker"
     ],
     "a": [
      "John Darrah",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "John Pineda",
      "Jorge Diaz"
     ],
     "a": [
      "Derek Livingston",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Ackley",
      "Scott Rubin"
     ],
     "a": [
      "Jiyun Yuh",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carol Mastroianni",
      "Bill Brandt"
     ],
     "a": [
      "Kelly Dalsey",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Stephen Locker"
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
     "as": 14,
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Cynthia Covie",
      "Tom Kresky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan Ackley",
      "Sue Johnson"
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
     "as": 14,
     "h": [
      "Carol Mastroianni",
      "Amy Johnson"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "John Pineda",
      "Scott Rubin"
     ],
     "a": [
      "Derek Livingston",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bill Brandt",
      "Jorge Diaz"
     ],
     "a": [
      "Tom Kresky",
      "Steve Hong"
     ]
    }
   ],
   "subs": [
    "Stephen Locker"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Allstar Pickler",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-03T12:00:00",
   "complete": true,
   "homePoints": 576,
   "awayPoints": 628,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Evelyn Du",
      "Abraham Telechanski"
     ],
     "a": [
      "Alice Napolitano",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Paul Rappoport"
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
     "as": 23,
     "h": [
      "Liby Saigal",
      "Kenny Nguyen"
     ],
     "a": [
      "Eva Danieli",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Natasha De Carvalho",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Wendy Zukerberg"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ronnie Yin",
      "Liby Saigal"
     ],
     "a": [
      "Sarah Nazario",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Kenny Nguyen"
     ],
     "a": [
      "Gary Sidhu",
      "Todd Gasparre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Liangjie Zhu",
      "Paul Rappoport"
     ],
     "a": [
      "Yi Gu",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Liby Saigal",
      "Abraham Telechanski"
     ],
     "a": [
      "Alice Napolitano",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Paul Rappoport"
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
     "as": 11,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Meryl Nadler",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Kenny Nguyen"
     ],
     "a": [
      "Natasha De Carvalho",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Liby Saigal",
      "Ronnie Yin"
     ],
     "a": [
      "Alice Napolitano",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Wendy Zukerberg"
     ],
     "a": [
      "Sarah Nazario",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Liangjie Zhu",
      "Paul Rappoport"
     ],
     "a": [
      "Gary Sidhu",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Kenny Nguyen"
     ],
     "a": [
      "Todd Gasparre",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liby Saigal",
      "Abraham Telechanski"
     ],
     "a": [
      "Sarah Nazario",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Wendy Zukerberg",
      "Paul Rappoport"
     ],
     "a": [
      "Eva Danieli",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Evelyn Du",
      "Liangjie Zhu"
     ],
     "a": [
      "Natasha De Carvalho",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ronnie Yin",
      "Kenny Nguyen"
     ],
     "a": [
      "Meryl Nadler",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Liby Saigal",
      "Wendy Zukerberg"
     ],
     "a": [
      "Alice Napolitano",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Evelyn Du",
      "Savita Nandal"
     ],
     "a": [
      "Sarah Nazario",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Liangjie Zhu",
      "Kenny Nguyen"
     ],
     "a": [
      "Gary Sidhu",
      "Todd Gasparre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Abraham Telechanski",
      "Paul Rappoport"
     ],
     "a": [
      "Yi Gu",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Wendy Zukerberg",
      "Paul Rappoport"
     ],
     "a": [
      "Alice Napolitano",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liby Saigal",
      "Liangjie Zhu"
     ],
     "a": [
      "Eva Danieli",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Abraham Telechanski"
     ],
     "a": [
      "Natasha De Carvalho",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ronnie Yin",
      "Kenny Nguyen"
     ],
     "a": [
      "Meryl Nadler",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Evelyn Du",
      "Liby Saigal"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Wendy Zukerberg"
     ],
     "a": [
      "Sarah Nazario",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Paul Rappoport"
     ],
     "a": [
      "Gary Sidhu",
      "Lance Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Liangjie Zhu",
      "Kenny Nguyen"
     ],
     "a": [
      "Todd Gasparre",
      "Yi Gu"
     ]
    }
   ],
   "subs": [
    "Kenny Nguyen",
    "Liby Saigal",
    "Wendy Zukerberg"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Flemington Green",
   "away": "ACE Moorestown",
   "time": "2026-10-03T12:00:00",
   "complete": true,
   "homePoints": 538,
   "awayPoints": 640,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Richard Demeuse"
     ],
     "a": [
      "Kate Siedell",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Peilin Zhang"
     ],
     "a": [
      "Patricia Boyle",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Craig Batten"
     ],
     "a": [
      "Pam Boyd",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Papa",
      "Todd Stein"
     ],
     "a": [
      "Stacey Frank",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christine Papa",
      "Stacy Garretson"
     ],
     "a": [
      "Kim Hamilton",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Barbara Hess",
      "Aimee Castellano"
     ],
     "a": [
      "Pam Boyd",
      "Stacey Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Richard Demeuse",
      "Craig Batten"
     ],
     "a": [
      "Jaco De Waal",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Todd Stein",
      "Peilin Zhang"
     ],
     "a": [
      "Yang Wang",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Richard Demeuse"
     ],
     "a": [
      "Kim Hamilton",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Papa",
      "Todd Stein"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Craig Batten"
     ],
     "a": [
      "Pam Boyd",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Barbara Hess",
      "Kevin Jackson"
     ],
     "a": [
      "Patricia Boyle",
      "Robert Finley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aimee Castellano",
      "Kristen Soucie"
     ],
     "a": [
      "Patricia Boyle",
      "Pam Boyd"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Stacy Garretson"
     ],
     "a": [
      "Stacey Frank",
      "Kim Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Peilin Zhang",
      "Craig Batten"
     ],
     "a": [
      "Jaco De Waal",
      "Robert Finley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Richard Demeuse",
      "Kevin Jackson"
     ],
     "a": [
      "Yang Wang",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Todd Stein"
     ],
     "a": [
      "Stacey Frank",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stacy Garretson",
      "Peilin Zhang"
     ],
     "a": [
      "Pam Boyd",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Papa",
      "Richard Demeuse"
     ],
     "a": [
      "Kim Hamilton",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Kevin Jackson"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Aimee Castellano"
     ],
     "a": [
      "Stacey Frank",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kristen Soucie",
      "Christine Papa"
     ],
     "a": [
      "Patricia Boyle",
      "Kim Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Craig Batten",
      "Kevin Jackson"
     ],
     "a": [
      "Yang Wang",
      "Robert Finley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richard Demeuse",
      "Todd Stein"
     ],
     "a": [
      "Jeff Lorman",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Christine Papa",
      "Craig Batten"
     ],
     "a": [
      "Patricia Boyle",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Aimee Castellano",
      "Richard Demeuse"
     ],
     "a": [
      "Kate Siedell",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Kevin Jackson"
     ],
     "a": [
      "Stacey Frank",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Peilin Zhang"
     ],
     "a": [
      "Kim Hamilton",
      "Yang Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Aimee Castellano",
      "Christine Papa"
     ],
     "a": [
      "Kim Hamilton",
      "Patricia Boyle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Barbara Hess",
      "Stacy Garretson"
     ],
     "a": [
      "Kate Siedell",
      "Stacey Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Richard Demeuse",
      "Peilin Zhang"
     ],
     "a": [
      "Jeff Lorman",
      "Yang Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kevin Jackson",
      "Craig Batten"
     ],
     "a": [
      "Jaco De Waal",
      "Robert Finley"
     ]
    }
   ],
   "subs": [
    "Jaco De Waal",
    "Yang Wang",
    "Kim Hamilton",
    "Todd Stein",
    "Peilin Zhang",
    "Kevin Jackson"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Palace",
   "away": "Flemington Blue",
   "time": "2026-10-03T12:00:00",
   "complete": true,
   "homePoints": 661,
   "awayPoints": 493,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
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
      "Susan Ackley",
      "John Pineda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Hanson Word",
      "Daniel Chernin"
     ],
     "a": [
      "Ritu Chandra",
      "David Dietzel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karan Pescatore",
      "Bud Heller"
     ],
     "a": [
      "Fabienne Yu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Emil Pescatore"
     ],
     "a": [
      "Laura Govan",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelly Hanson Word",
      "Kate Curren"
     ],
     "a": [
      "Susan Ackley",
      "Ritu Chandra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rebecca Lederman",
      "Karan Pescatore"
     ],
     "a": [
      "Sue Johnson",
      "Fabienne Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Daniel Chernin",
      "Jeffrey Susskind"
     ],
     "a": [
      "Marc Friedman",
      "David Dietzel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Emil Pescatore",
      "Brian Gonzalez"
     ],
     "a": [
      "John Pineda",
      "Dave Govan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
     ],
     "a": [
      "Susan Ackley",
      "David Dietzel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rebecca Lederman",
      "Jeffrey Susskind"
     ],
     "a": [
      "Ritu Chandra",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Curren",
      "Bud Heller"
     ],
     "a": [
      "Laura Govan",
      "John Pineda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Sue Johnson",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carly Pfeffer",
      "Karan Pescatore"
     ],
     "a": [
      "Fabienne Yu",
      "Laura Govan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ],
     "a": [
      "Susan Ackley",
      "Ritu Chandra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Emil Pescatore",
      "Daniel Chernin"
     ],
     "a": [
      "John Pineda",
      "David Dietzel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jeffrey Susskind",
      "Bud Heller"
     ],
     "a": [
      "Marc Friedman",
      "Dave Govan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Hanson Word",
      "Jeffrey Susskind"
     ],
     "a": [
      "Ritu Chandra",
      "David Dietzel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kate Curren",
      "Emil Pescatore"
     ],
     "a": [
      "Susan Ackley",
      "John Pineda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Carly Pfeffer",
      "Brian Gonzalez"
     ],
     "a": [
      "Fabienne Yu",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rebecca Lederman",
      "Bud Heller"
     ],
     "a": [
      "Sue Johnson",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Curren",
      "Karan Pescatore"
     ],
     "a": [
      "Susan Ackley",
      "Fabienne Yu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carly Pfeffer",
      "Kelly Hanson Word"
     ],
     "a": [
      "Laura Govan",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeffrey Susskind",
      "Daniel Chernin"
     ],
     "a": [
      "Marc Friedman",
      "David Dietzel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Brian Gonzalez",
      "Bud Heller"
     ],
     "a": [
      "John Pineda",
      "Dave Govan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Rebecca Lederman",
      "Jeffrey Susskind"
     ],
     "a": [
      "Susan Ackley",
      "David Dietzel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Curren",
      "Brian Gonzalez"
     ],
     "a": [
      "Ritu Chandra",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kelly Hanson Word",
      "Daniel Chernin"
     ],
     "a": [
      "Sue Johnson",
      "Dave Govan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Laura Govan",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelly Hanson Word",
      "Kate Curren"
     ],
     "a": [
      "Susan Ackley",
      "Fabienne Yu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carly Pfeffer",
      "Rebecca Lederman"
     ],
     "a": [
      "Sue Johnson",
      "Ritu Chandra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Daniel Chernin",
      "Brian Gonzalez"
     ],
     "a": [
      "Albert Pamudji",
      "David Dietzel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bud Heller",
      "Jeffrey Susskind"
     ],
     "a": [
      "Marc Friedman",
      "John Pineda"
     ]
    }
   ],
   "subs": [
    "Laura Govan",
    "Ritu Chandra",
    "Dave Govan",
    "Fabienne Yu",
    "David Dietzel",
    "Albert Pamudji"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "APC Garden State",
   "away": "Bounce Malvern Boom",
   "time": "2026-10-03T13:00:00",
   "complete": true,
   "homePoints": 555,
   "awayPoints": 630,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lisa Loeber",
      "Tim Bruno"
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
     "as": 10,
     "h": [
      "Cynthia Covie",
      "Steve Hong"
     ],
     "a": [
      "Cindy Hu",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Andrew Fleischer"
     ],
     "a": [
      "Christine Dugan",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Jimmy Shapiro"
     ],
     "a": [
      "Sandra Thompson",
      "Talen Singer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Laura Sweet"
     ],
     "a": [
      "Jamila Sefiane",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ],
     "a": [
      "Lindsay Duphily",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jimmy Shapiro",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Jiang Jin",
      "Talen Singer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Derek Livingston",
      "Tim Bruno"
     ],
     "a": [
      "Brett Kleger",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Andrew Fleischer"
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
     "as": 7,
     "h": [
      "Laura Sweet",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Cindy Hu",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lisa Loeber",
      "Steve Hong"
     ],
     "a": [
      "Lindsay Duphily",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Derek Livingston"
     ],
     "a": [
      "Sandra Thompson",
      "Brett Kleger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Sweet",
      "Jiyun Yuh"
     ],
     "a": [
      "Jamila Sefiane",
      "Cindy Hu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Lisa Loeber"
     ],
     "a": [
      "Lindsay Duphily",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Derek Livingston",
      "Tim Bruno"
     ],
     "a": [
      "Jiang Jin",
      "David Marchese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Steve Hong",
      "Jimmy Shapiro"
     ],
     "a": [
      "Brett Kleger",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lisa Loeber",
      "Andrew Fleischer"
     ],
     "a": [
      "Cindy Hu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Tim Bruno"
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
      "Cynthia Covie",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Christine Dugan",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jiyun Yuh",
      "Steve Hong"
     ],
     "a": [
      "Sandra Thompson",
      "Brett Kleger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Laura Sweet"
     ],
     "a": [
      "Jamila Sefiane",
      "Lindsay Duphily"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelly Dalsey",
      "Lisa Loeber"
     ],
     "a": [
      "Cindy Hu",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jimmy Shapiro",
      "Derek Livingston"
     ],
     "a": [
      "Jiang Jin",
      "David Marchese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stepan Nevshehirlian",
      "Andrew Fleischer"
     ],
     "a": [
      "Sandro Stefanelli",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Tim Bruno"
     ],
     "a": [
      "Jamila Sefiane",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cynthia Covie",
      "Derek Livingston"
     ],
     "a": [
      "Cindy Hu",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Jimmy Shapiro"
     ],
     "a": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Steve Hong"
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
     "as": 23,
     "h": [
      "Laura Sweet",
      "Kelly Dalsey"
     ],
     "a": [
      "Jamila Sefiane",
      "Lindsay Duphily"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lisa Loeber",
      "Jiyun Yuh"
     ],
     "a": [
      "Christine Dugan",
      "Cindy Hu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jimmy Shapiro",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Brett Kleger",
      "Jiang Jin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrew Fleischer",
      "Tim Bruno"
     ],
     "a": [
      "Sandro Stefanelli",
      "David Marchese"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Stelton Sports",
   "away": "Premiere",
   "time": "2026-10-03T14:00:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 557,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jennifer Qian",
      "Sam Zhou"
     ],
     "a": [
      "Laura Altieri",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Hayley Yandoli",
      "Steve Gerwer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rui Zhang",
      "Peter Shen"
     ],
     "a": [
      "Coby Resnick",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Tara Lombardo",
      "Alfonse Calato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Ping Yang"
     ],
     "a": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Shaoyi Sun",
      "Mei Li"
     ],
     "a": [
      "Quen Koon Ng",
      "Laura Altieri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jay Zeng",
      "Peter Shen"
     ],
     "a": [
      "Sal Frangipane",
      "Steve Gerwer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lei Dong",
      "Sam Zhou"
     ],
     "a": [
      "John Ficarra",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Jay Zeng"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Quen Koon Ng",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Coby Resnick",
      "John Ficarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Hayley Yandoli",
      "Alfonse Calato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jennifer Qian",
      "Ping Yang"
     ],
     "a": [
      "Hayley Yandoli",
      "Coby Resnick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rui Zhang",
      "Shaoyi Sun"
     ],
     "a": [
      "Quen Koon Ng",
      "Laura Altieri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liangang Liu",
      "Sam Zhou"
     ],
     "a": [
      "Alfonse Calato",
      "Steve Gerwer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lei Dong",
      "Peter Shen"
     ],
     "a": [
      "Erik Lombardo",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Tara Lombardo",
      "John Ficarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mei Li",
      "Peter Shen"
     ],
     "a": [
      "Coby Resnick",
      "Steve Gerwer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shaoyi Sun",
      "Jay Zeng"
     ],
     "a": [
      "Hayley Yandoli",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ann Betterton",
      "Sam Zhou"
     ],
     "a": [
      "Laura Altieri",
      "James Gross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Ping Yang"
     ],
     "a": [
      "Quen Koon Ng",
      "Coby Resnick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Rui Zhang",
      "Ann Betterton"
     ],
     "a": [
      "Tara Lombardo",
      "Laura Altieri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jay Zeng",
      "Peter Shen"
     ],
     "a": [
      "Erik Lombardo",
      "Alfonse Calato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lei Dong",
      "Liangang Liu"
     ],
     "a": [
      "John Ficarra",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Laura Altieri",
      "John Ficarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Quen Koon Ng",
      "Steve Gerwer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Shaoyi Sun",
      "Peter Shen"
     ],
     "a": [
      "Tara Lombardo",
      "Sal Frangipane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mei Li",
      "Ping Yang"
     ],
     "a": [
      "Tara Lombardo",
      "Coby Resnick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shaoyi Sun",
      "Rui Zhang"
     ],
     "a": [
      "Quen Koon Ng",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sam Zhou",
      "Jay Zeng"
     ],
     "a": [
      "Alfonse Calato",
      "James Gross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lei Dong",
      "Liangang Liu"
     ],
     "a": [
      "Sal Frangipane",
      "Steve Gerwer"
     ]
    }
   ],
   "subs": [
    "Laura Altieri",
    "Peter Shen"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Bounce Malvern Black",
   "away": "Pickle Place",
   "time": "2026-10-03T14:00:00",
   "complete": true,
   "homePoints": 629,
   "awayPoints": 543,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Keith Goldberg"
     ],
     "a": [
      "Dottie Kelly",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Cynthia Eisen",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stephanie Woomer",
      "Jingwei Wu"
     ],
     "a": [
      "Gina Pultorak",
      "Guy Judkowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Janine Forrest",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Katherine Maruyama",
      "Harriet Levin"
     ],
     "a": [
      "Cynthia Eisen",
      "Dottie Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Vicki Main"
     ],
     "a": [
      "Janine Forrest",
      "Gina Pultorak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jingwei Wu",
      "Jim Darcangelo"
     ],
     "a": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Derek Le",
      "Michael Dieterle"
     ],
     "a": [
      "Jonathan Goldner",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Gina Pultorak",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ],
     "a": [
      "Cynthia Eisen",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Dottie Kelly",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephanie Woomer",
      "Derek Le"
     ],
     "a": [
      "Janine Forrest",
      "Guy Judkowski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tera Baccile",
      "Harriet Levin"
     ],
     "a": [
      "Dottie Kelly",
      "Janine Forrest"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vicki Main",
      "Stephanie Woomer"
     ],
     "a": [
      "Cynthia Eisen",
      "Gina Pultorak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Dieterle",
      "Jim Darcangelo"
     ],
     "a": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Guy Judkowski",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Gina Pultorak",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ],
     "a": [
      "Janine Forrest",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Derek Le"
     ],
     "a": [
      "Cynthia Eisen",
      "Guy Judkowski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Vicki Main",
      "Jingwei Wu"
     ],
     "a": [
      "Dottie Kelly",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Harriet Levin",
      "Katherine Maruyama"
     ],
     "a": [
      "Cynthia Eisen",
      "Dottie Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stephanie Woomer",
      "Tera Baccile"
     ],
     "a": [
      "Janine Forrest",
      "Gina Pultorak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Derek Le",
      "Michael Dieterle"
     ],
     "a": [
      "Guy Judkowski",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Michael Dieterle"
     ],
     "a": [
      "Cynthia Eisen",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Dottie Kelly",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ],
     "a": [
      "Janine Forrest",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Vicki Main",
      "Jingwei Wu"
     ],
     "a": [
      "Gina Pultorak",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Vicki Main"
     ],
     "a": [
      "Dottie Kelly",
      "Gina Pultorak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stephanie Woomer",
      "Harriet Levin"
     ],
     "a": [
      "Cynthia Eisen",
      "Janine Forrest"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jingwei Wu",
      "Michael Dieterle"
     ],
     "a": [
      "Jay Rohatgi",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ],
     "a": [
      "Guy Judkowski",
      "Tom Zentmeyer"
     ]
    }
   ],
   "subs": [
    "Dottie Kelly"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Stelton Sports",
   "away": "Pickleball Palace",
   "time": "2026-10-04T14:00:00",
   "complete": true,
   "homePoints": 537,
   "awayPoints": 641,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jennifer Qian",
      "Sam Zhou"
     ],
     "a": [
      "Karan Pescatore",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Carly Pfeffer",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "June Lee",
      "Leon Li"
     ],
     "a": [
      "Kelly Hanson Word",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Cheryl Isbirian",
      "Emil Pescatore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Ping Yang"
     ],
     "a": [
      "Cheryl Isbirian",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "June Lee",
      "Ellen Xu"
     ],
     "a": [
      "Amanda Quinn",
      "Karan Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jay Zeng",
      "Leon Li"
     ],
     "a": [
      "Charlie Johnston",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lei Dong",
      "Liangang Liu"
     ],
     "a": [
      "Emil Pescatore",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Amanda Quinn",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ellen Xu",
      "Leon Li"
     ],
     "a": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "June Lee",
      "Lei Dong"
     ],
     "a": [
      "Carly Pfeffer",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Ping Yang"
     ],
     "a": [
      "Cheryl Isbirian",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ellen Xu",
      "Ann Betterton"
     ],
     "a": [
      "Kelly Hanson Word",
      "Amanda Quinn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sam Zhou",
      "Jay Zeng"
     ],
     "a": [
      "Charlie Johnston",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Liangang Liu",
      "Leon Li"
     ],
     "a": [
      "Emil Pescatore",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Karan Pescatore",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ping Yang",
      "Sam Zhou"
     ],
     "a": [
      "Kelly Hanson Word",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Leon Li"
     ],
     "a": [
      "Cheryl Isbirian",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Amanda Quinn",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mei Li",
      "Ping Yang"
     ],
     "a": [
      "Carly Pfeffer",
      "Karan Pescatore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "June Lee",
      "Ellen Xu"
     ],
     "a": [
      "Amanda Quinn",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sam Zhou",
      "Jay Zeng"
     ],
     "a": [
      "Brian Gonzalez",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lei Dong",
      "Liangang Liu"
     ],
     "a": [
      "Bud Heller",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Qian",
      "Leon Li"
     ],
     "a": [
      "Cheryl Isbirian",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Amanda Quinn",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "June Lee",
      "Lei Dong"
     ],
     "a": [
      "Carly Pfeffer",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Kelly Hanson Word",
      "Bud Heller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ann Betterton",
      "Mei Li"
     ],
     "a": [
      "Karan Pescatore",
      "Cheryl Isbirian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ping Yang",
      "Ellen Xu"
     ],
     "a": [
      "Carly Pfeffer",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Leon Li",
      "Jay Zeng"
     ],
     "a": [
      "Emil Pescatore",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lei Dong",
      "Sam Zhou"
     ],
     "a": [
      "Charlie Johnston",
      "Brian Gonzalez"
     ]
    }
   ],
   "subs": [
    "Charlie Johnston",
    "Cheryl Isbirian"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Flemington Blue",
   "away": "Pickleball Palace",
   "time": "2026-10-10T12:00:00",
   "complete": true,
   "homePoints": 523,
   "awayPoints": 635,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Simon Perry"
     ],
     "a": [
      "Kate Curren",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Steven Gregov"
     ],
     "a": [
      "Kelly Hanson Word",
      "Ryan Sherry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Carly Pfeffer",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Karan Pescatore",
      "Alex Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Chanda Mccoy"
     ],
     "a": [
      "Carly Pfeffer",
      "Cheryl Isbirian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Amy Johnson"
     ],
     "a": [
      "Karan Pescatore",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Simon Perry",
      "Marc Friedman"
     ],
     "a": [
      "Alex Lee",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Steven Gregov",
      "Scott Rubin"
     ],
     "a": [
      "Rick Vazquez",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carol Mastroianni",
      "Simon Perry"
     ],
     "a": [
      "Cheryl Isbirian",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Scott Rubin"
     ],
     "a": [
      "Carly Pfeffer",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Kate Curren",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Marc Friedman"
     ],
     "a": [
      "Kelly Hanson Word",
      "Ryan Sherry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Chanda Mccoy"
     ],
     "a": [
      "Karan Pescatore",
      "Cheryl Isbirian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Ceil Gomez"
     ],
     "a": [
      "Kate Curren",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Steven Gregov",
      "Scott Rubin"
     ],
     "a": [
      "Brian Gonzalez",
      "Rick Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Art Muth",
      "Marc Friedman"
     ],
     "a": [
      "Ryan Sherry",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chanda Mccoy",
      "Simon Perry"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Kelly Hanson Word",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Art Muth"
     ],
     "a": [
      "Cheryl Isbirian",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Scott Rubin"
     ],
     "a": [
      "Kate Curren",
      "Ryan Sherry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ceil Gomez",
      "Chanda Mccoy"
     ],
     "a": [
      "Carly Pfeffer",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Carol Mastroianni"
     ],
     "a": [
      "Karan Pescatore",
      "Kate Curren"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Simon Perry",
      "Marc Friedman"
     ],
     "a": [
      "Rick Vazquez",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Steven Gregov",
      "Art Muth"
     ],
     "a": [
      "Brian Gonzalez",
      "Ryan Sherry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carol Mastroianni",
      "Simon Perry"
     ],
     "a": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Steven Gregov"
     ],
     "a": [
      "Carly Pfeffer",
      "Ryan Sherry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Scott Rubin"
     ],
     "a": [
      "Karan Pescatore",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ceil Gomez",
      "Art Muth"
     ],
     "a": [
      "Cheryl Isbirian",
      "Rick Vazquez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chanda Mccoy",
      "Carol Mastroianni"
     ],
     "a": [
      "Carly Pfeffer",
      "Cheryl Isbirian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Amy Johnson"
     ],
     "a": [
      "Kelly Hanson Word",
      "Kate Curren"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Simon Perry",
      "Scott Rubin"
     ],
     "a": [
      "Alex Lee",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Steven Gregov",
      "Marc Friedman"
     ],
     "a": [
      "Ryan Sherry",
      "Rick Vazquez"
     ]
    }
   ],
   "subs": [
    "Cheryl Isbirian",
    "Rick Vazquez"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Premiere",
   "away": "Stelton Sports",
   "time": "2026-10-10T12:00:00",
   "complete": true,
   "homePoints": 579,
   "awayPoints": 642,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Coby Resnick",
      "James Gross"
     ],
     "a": [
      "Rui Zhang",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lily Liu",
      "Steve Gerwer"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Alfonse Calato"
     ],
     "a": [
      "June Lee",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Mctague",
      "Sal Frangipane"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "Ellen Xu",
      "Ping Yang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Hayley Yandoli"
     ],
     "a": [
      "Mei Li",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Wally Liu",
      "Sal Frangipane"
     ],
     "a": [
      "Mengchu Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Steve Gerwer",
      "James Gross"
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
     "as": 14,
     "h": [
      "Lisa Mctague",
      "Sal Frangipane"
     ],
     "a": [
      "June Lee",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lily Liu",
      "Steve Gerwer"
     ],
     "a": [
      "Ellen Xu",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Alfonse Calato"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Coby Resnick",
      "James Gross"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hayley Yandoli",
      "Lisa Mctague"
     ],
     "a": [
      "Shaoyi Sun",
      "Rui Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "June Lee",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steve Gerwer",
      "James Gross"
     ],
     "a": [
      "Leon Li",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alfonse Calato",
      "Wally Liu"
     ],
     "a": [
      "Sam Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Wally Liu"
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
      "Coby Resnick",
      "Steve Gerwer"
     ],
     "a": [
      "Mei Li",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lisa Mctague",
      "Alfonse Calato"
     ],
     "a": [
      "Ellen Xu",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Hayley Yandoli",
      "Sal Frangipane"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lily Liu",
      "Hayley Yandoli"
     ],
     "a": [
      "Ellen Xu",
      "Ping Yang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Lisa Mctague"
     ],
     "a": [
      "Shaoyi Sun",
      "June Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Wally Liu",
      "Sal Frangipane"
     ],
     "a": [
      "Mengchu Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alfonse Calato",
      "James Gross"
     ],
     "a": [
      "Liangang Liu",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lily Liu",
      "James Gross"
     ],
     "a": [
      "Rui Zhang",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Lisa Mctague",
      "Alfonse Calato"
     ],
     "a": [
      "Ellen Xu",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Steve Gerwer"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Wally Liu"
     ],
     "a": [
      "Shaoyi Sun",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Nancy Lin"
     ],
     "a": [
      "Mei Li",
      "Rui Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lily Liu",
      "Coby Resnick"
     ],
     "a": [
      "June Lee",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "James Gross"
     ],
     "a": [
      "Leon Li",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Steve Gerwer",
      "Wally Liu"
     ],
     "a": [
      "Lei Dong",
      "Sam Zhou"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 8,
   "home": "Pickle Place",
   "away": "Bounce Malvern Black",
   "time": "2026-10-10T14:00:00",
   "complete": true,
   "homePoints": 575,
   "awayPoints": 667,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alicia Maguire",
      "Robert Block"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gina Pultorak",
      "Tom Zentmeyer"
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
     "as": 23,
     "h": [
      "Emily Abbott",
      "Eric Markowitz"
     ],
     "a": [
      "Vicki Main",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Terry Gabel",
      "Jonathan Goldner"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Terry Gabel"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alicia Maguire",
      "Gina Pultorak"
     ],
     "a": [
      "Vicki Main",
      "Erika Simone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robert Block",
      "Todd Law"
     ],
     "a": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ],
     "a": [
      "Michael Dieterle",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Terry Gabel",
      "Eric Markowitz"
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alicia Maguire",
      "Todd Law"
     ],
     "a": [
      "Tera Baccile",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gina Pultorak",
      "Jonathan Goldner"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
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
      "Erika Simone",
      "Michael Dieterle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Emily Abbott",
      "Terry Gabel"
     ],
     "a": [
      "Tera Baccile",
      "Erika Simone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gina Pultorak",
      "Alicia Maguire"
     ],
     "a": [
      "Vicki Main",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jim Darcangelo",
      "Jingwei Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonathan Goldner",
      "Robert Block"
     ],
     "a": [
      "Keith Goldberg",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alicia Maguire",
      "Tom Zentmeyer"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gina Pultorak",
      "Robert Block"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Todd Law"
     ],
     "a": [
      "Erika Simone",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Terry Gabel",
      "Eric Markowitz"
     ],
     "a": [
      "Jill Scully",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gina Pultorak",
      "Emily Abbott"
     ],
     "a": [
      "Tera Baccile",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alicia Maguire",
      "Terry Gabel"
     ],
     "a": [
      "Stephanie Woomer",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Robert Block",
      "Todd Law"
     ],
     "a": [
      "Keith Goldberg",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Terry Gabel",
      "Tom Zentmeyer"
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
      "Emily Abbott",
      "Jonathan Goldner"
     ],
     "a": [
      "Tera Baccile",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gina Pultorak",
      "Todd Law"
     ],
     "a": [
      "Vicki Main",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Alicia Maguire",
      "Eric Markowitz"
     ],
     "a": [
      "Erika Simone",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alicia Maguire",
      "Emily Abbott"
     ],
     "a": [
      "Erika Simone",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gina Pultorak",
      "Terry Gabel"
     ],
     "a": [
      "Stephanie Woomer",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Markowitz",
      "Todd Law"
     ],
     "a": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jingwei Wu",
      "Keith Goldberg"
     ]
    }
   ],
   "subs": [
    "Terry Gabel"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "ACE Moorestown",
   "away": "Flemington Green",
   "time": "2026-10-10T14:00:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 539,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacey Frank",
      "Jonathan Brand"
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
     "as": 10,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Katrina Mcintyre",
      "Joseph Yi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Debbs",
      "Jeff Lorman"
     ],
     "a": [
      "Tara Kramer",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Denise Richmond",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stacey Frank",
      "Kate Siedell"
     ],
     "a": [
      "Denise Richmond",
      "Katrina Mcintyre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Pam Boyd",
      "Patricia Boyle"
     ],
     "a": [
      "Christine Papa",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jonathan Brand",
      "Michael Boyle"
     ],
     "a": [
      "Eric Luque",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Craig Batten",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Jonathan Brand"
     ],
     "a": [
      "Katrina Mcintyre",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Jeff Lorman"
     ],
     "a": [
      "Christine Papa",
      "Joseph Yi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Debbs",
      "Marc Harden"
     ],
     "a": [
      "Tara Kramer",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Patricia Boyle",
      "Michael Boyle"
     ],
     "a": [
      "Denise Richmond",
      "Craig Batten"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Christine Papa",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Susan Debbs"
     ],
     "a": [
      "Denise Richmond",
      "Katrina Mcintyre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jeff Lorman",
      "Michael Boyle"
     ],
     "a": [
      "Eric Luque",
      "Craig Batten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jonathan Brand",
      "Robert Finley"
     ],
     "a": [
      "Richard Demeuse",
      "Joseph Yi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patricia Boyle",
      "Michael Boyle"
     ],
     "a": [
      "Katrina Mcintyre",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Christine Papa",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Debbs",
      "Jeff Lorman"
     ],
     "a": [
      "Tara Kramer",
      "Joseph Yi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Stacey Frank",
      "Marc Harden"
     ],
     "a": [
      "Denise Richmond",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Susan Debbs"
     ],
     "a": [
      "Christine Papa",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patricia Boyle",
      "Kate Siedell"
     ],
     "a": [
      "Katrina Mcintyre",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jonathan Brand",
      "Michael Boyle"
     ],
     "a": [
      "Richard Demeuse",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeff Lorman",
      "Robert Finley"
     ],
     "a": [
      "Eric Luque",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Debbs",
      "Robert Finley"
     ],
     "a": [
      "Christine Papa",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Michael Boyle"
     ],
     "a": [
      "Tara Kramer",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stacey Frank",
      "Jonathan Brand"
     ],
     "a": [
      "Katrina Mcintyre",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Jeff Lorman"
     ],
     "a": [
      "Denise Richmond",
      "Joseph Yi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Pam Boyd",
      "Patricia Boyle"
     ],
     "a": [
      "Denise Richmond",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Christine Papa",
      "Katrina Mcintyre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jeff Lorman",
      "Michael Boyle"
     ],
     "a": [
      "Craig Batten",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonathan Brand",
      "Robert Finley"
     ],
     "a": [
      "Eric Luque",
      "Joseph Yi"
     ]
    }
   ],
   "subs": [
    "Joseph Yi"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Bounce Malvern Boom",
   "away": "APC Garden State",
   "time": "2026-10-10T14:00:00",
   "complete": true,
   "homePoints": 653,
   "awayPoints": 500,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristina Rhodes",
      "Chris Norton"
     ],
     "a": [
      "Laura Sweet",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christine Dugan",
      "Brett Kleger"
     ],
     "a": [
      "Jiyun Yuh",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Ed Gieske"
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
     "as": 11,
     "h": [
      "Lindsay Duphily",
      "Matt Hancock"
     ],
     "a": [
      "Lisa Loeber",
      "Greg Schipske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lindsay Duphily",
      "Cindy Hu"
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
     "as": 14,
     "h": [
      "Christine Dugan",
      "Kristina Rhodes"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brett Kleger",
      "Chris Norton"
     ],
     "a": [
      "Jimmy Shapiro",
      "John Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ed Gieske",
      "Matt Hancock"
     ],
     "a": [
      "Andrew Fleischer",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jamila Sefiane",
      "Matt Hancock"
     ],
     "a": [
      "Jiyun Yuh",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristina Rhodes",
      "Sandro Stefanelli"
     ],
     "a": [
      "Kerry Gray-Style",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christine Dugan",
      "Ed Gieske"
     ],
     "a": [
      "Lisa Loeber",
      "John Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lindsay Duphily",
      "Brett Kleger"
     ],
     "a": [
      "Laura Sweet",
      "Greg Schipske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jamila Sefiane",
      "Lindsay Duphily"
     ],
     "a": [
      "Laura Sweet",
      "Cynthia Covie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kristina Rhodes",
      "Cindy Hu"
     ],
     "a": [
      "Lisa Loeber",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sandro Stefanelli",
      "Chris Norton"
     ],
     "a": [
      "Greg Schipske",
      "John Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Matt Hancock",
      "Ed Gieske"
     ],
     "a": [
      "Jimmy Shapiro",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jamila Sefiane",
      "Ed Gieske"
     ],
     "a": [
      "Cynthia Covie",
      "Greg Schipske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kristina Rhodes",
      "Brett Kleger"
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
     "as": 15,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Laura Sweet",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cindy Hu",
      "Chris Norton"
     ],
     "a": [
      "Jiyun Yuh",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lindsay Duphily",
      "Cindy Hu"
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
     "as": 11,
     "h": [
      "Jamila Sefiane",
      "Kristina Rhodes"
     ],
     "a": [
      "Cynthia Covie",
      "Lisa Loeber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Norton",
      "Sandro Stefanelli"
     ],
     "a": [
      "Tim Bruno",
      "John Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Matt Hancock",
      "Brett Kleger"
     ],
     "a": [
      "Jimmy Shapiro",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lindsay Duphily",
      "Ed Gieske"
     ],
     "a": [
      "Lisa Loeber",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Christine Dugan",
      "Brett Kleger"
     ],
     "a": [
      "Jiyun Yuh",
      "Greg Schipske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cindy Hu",
      "Matt Hancock"
     ],
     "a": [
      "Cynthia Covie",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Chris Norton"
     ],
     "a": [
      "Kerry Gray-Style",
      "John Dechristopher"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lindsay Duphily",
      "Jamila Sefiane"
     ],
     "a": [
      "Lisa Loeber",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cindy Hu",
      "Christine Dugan"
     ],
     "a": [
      "Jiyun Yuh",
      "Kerry Gray-Style"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matt Hancock",
      "Sandro Stefanelli"
     ],
     "a": [
      "Jimmy Shapiro",
      "John Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brett Kleger",
      "Chris Norton"
     ],
     "a": [
      "Andrew Fleischer",
      "Tim Bruno"
     ]
    }
   ],
   "subs": [
    "John Dechristopher",
    "Greg Schipske",
    "Matt Hancock"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Pickleball Palace",
   "away": "Premiere",
   "time": "2026-10-17T12:00:00",
   "complete": true,
   "homePoints": 668,
   "awayPoints": 427,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kate Curren",
      "Daniel Chernin"
     ],
     "a": [
      "Lily Liu",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Quen Koon Ng",
      "John Ficarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Hanson Word",
      "Alex Lee"
     ],
     "a": [
      "Tara Lombardo",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amanda Quinn",
      "Clifford Luster"
     ],
     "a": [
      "Nancy Lin",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Carly Pfeffer"
     ],
     "a": [
      "Quen Koon Ng",
      "Nancy Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelly Hanson Word",
      "Kate Curren"
     ],
     "a": [
      "Tara Lombardo",
      "Lily Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Clifford Luster",
      "Bud Heller"
     ],
     "a": [
      "Erik Lombardo",
      "Alfonse Calato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jeffrey Susskind",
      "Alex Lee"
     ],
     "a": [
      "James Gross",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carly Pfeffer",
      "Alex Lee"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelly Hanson Word",
      "Jeffrey Susskind"
     ],
     "a": [
      "Lisa Mctague",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amanda Quinn",
      "Daniel Chernin"
     ],
     "a": [
      "Tara Lombardo",
      "John Ficarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Dellechiaie",
      "Bud Heller"
     ],
     "a": [
      "Nancy Lin",
      "Sal Frangipane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Carly Pfeffer",
      "Kate Curren"
     ],
     "a": [
      "Tara Lombardo",
      "Lisa Mctague"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrea Dellechiaie",
      "Amanda Quinn"
     ],
     "a": [
      "Quen Koon Ng",
      "Nancy Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alex Lee",
      "Daniel Chernin"
     ],
     "a": [
      "John Ficarra",
      "Sal Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jeffrey Susskind",
      "Clifford Luster"
     ],
     "a": [
      "Alfonse Calato",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amanda Quinn",
      "Bud Heller"
     ],
     "a": [
      "Quen Koon Ng",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Andrea Dellechiaie",
      "Jeffrey Susskind"
     ],
     "a": [
      "Nancy Lin",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelly Hanson Word",
      "Daniel Chernin"
     ],
     "a": [
      "Lily Liu",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kate Curren",
      "Clifford Luster"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kate Curren",
      "Amanda Quinn"
     ],
     "a": [
      "Nancy Lin",
      "Lily Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Carly Pfeffer",
      "Kelly Hanson Word"
     ],
     "a": [
      "Quen Koon Ng",
      "Lisa Mctague"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Clifford Luster",
      "Jeffrey Susskind"
     ],
     "a": [
      "John Ficarra",
      "Alfonse Calato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Bud Heller",
      "Alex Lee"
     ],
     "a": [
      "Sal Frangipane",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Clifford Luster"
     ],
     "a": [
      "Tara Lombardo",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Lisa Mctague",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelly Hanson Word",
      "Bud Heller"
     ],
     "a": [
      "Quen Koon Ng",
      "Erik Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrea Dellechiaie",
      "Kelly Hanson Word"
     ],
     "a": [
      "Tara Lombardo",
      "Lily Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Amanda Quinn",
      "Carly Pfeffer"
     ],
     "a": [
      "Lisa Mctague",
      "Nancy Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Daniel Chernin",
      "Bud Heller"
     ],
     "a": [
      "Erik Lombardo",
      "Sal Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alex Lee",
      "Jeffrey Susskind"
     ],
     "a": [
      "John Ficarra",
      "James Gross"
     ]
    }
   ],
   "subs": [
    "Clifford Luster",
    "Andrea Dellechiaie"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Flemington Green",
   "away": "Bounce Malvern Boom",
   "time": "2026-10-17T12:00:00",
   "complete": true,
   "homePoints": 640,
   "awayPoints": 577,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Lindsay Duphily",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stacy Garretson",
      "David Osborne"
     ],
     "a": [
      "Sandra Thompson",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tara Kramer",
      "Andy Ead"
     ],
     "a": [
      "Cindy Hu",
      "Xianguan Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Papa",
      "Steven Gregov"
     ],
     "a": [
      "Kristina Rhodes",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Christine Papa"
     ],
     "a": [
      "Jamila Sefiane",
      "Lindsay Duphily"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aimee Castellano",
      "Tara Kramer"
     ],
     "a": [
      "Sandra Thompson",
      "Kristina Rhodes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Osborne",
      "Steven Gregov"
     ],
     "a": [
      "Chris Norton",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eric Luque",
      "Andy Ead"
     ],
     "a": [
      "Xianguan Li",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Barbara Hess",
      "Andy Ead"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Kevin Jackson"
     ],
     "a": [
      "Sandra Thompson",
      "Xianguan Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tara Kramer",
      "David Osborne"
     ],
     "a": [
      "Cindy Hu",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Aimee Castellano",
      "Steven Gregov"
     ],
     "a": [
      "Kristina Rhodes",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Papa",
      "Stacy Garretson"
     ],
     "a": [
      "Jamila Sefiane",
      "Lindsay Duphily"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Barbara Hess",
      "Tara Kramer"
     ],
     "a": [
      "Cindy Hu",
      "Kristina Rhodes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "David Osborne",
      "Eric Luque"
     ],
     "a": [
      "Ed Gieske",
      "Xianguan Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Steven Gregov",
      "Kevin Jackson"
     ],
     "a": [
      "Chris Norton",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Kevin Jackson"
     ],
     "a": [
      "Lindsay Duphily",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tara Kramer",
      "Eric Luque"
     ],
     "a": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Aimee Castellano",
      "Andy Ead"
     ],
     "a": [
      "Sandra Thompson",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Papa",
      "David Osborne"
     ],
     "a": [
      "Cindy Hu",
      "Xianguan Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aimee Castellano",
      "Barbara Hess"
     ],
     "a": [
      "Lindsay Duphily",
      "Sandra Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Garretson",
      "Tara Kramer"
     ],
     "a": [
      "Cindy Hu",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Andy Ead",
      "Kevin Jackson"
     ],
     "a": [
      "Sandro Stefanelli",
      "Xianguan Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Eric Luque",
      "Steven Gregov"
     ],
     "a": [
      "Chris Norton",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Lindsay Duphily",
      "Xianguan Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Kevin Jackson"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Papa",
      "Steven Gregov"
     ],
     "a": [
      "Sandra Thompson",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacy Garretson",
      "Eric Luque"
     ],
     "a": [
      "Cindy Hu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Barbara Hess"
     ],
     "a": [
      "Sandra Thompson",
      "Lindsay Duphily"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christine Papa",
      "Stacy Garretson"
     ],
     "a": [
      "Jamila Sefiane",
      "Cindy Hu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eric Luque",
      "Kevin Jackson"
     ],
     "a": [
      "Sandro Stefanelli",
      "Xianguan Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "David Osborne",
      "Andy Ead"
     ],
     "a": [
      "Ed Gieske",
      "Chris Norton"
     ]
    }
   ],
   "subs": [
    "Steven Gregov",
    "Xianguan Li",
    "Andy Ead",
    "Kevin Jackson"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "APC Garden State",
   "away": "Pickle Place",
   "time": "2026-10-17T13:00:00",
   "complete": true,
   "homePoints": 536,
   "awayPoints": 658,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Dalsey",
      "Tom Kresky"
     ],
     "a": [
      "Cynthia Eisen",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Laura Sweet",
      "John Darrah"
     ],
     "a": [
      "Gina Pultorak",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Steve Hong"
     ],
     "a": [
      "Marykristin Haskell",
      "Todd Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cynthia Covie",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Janine Forrest",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Yang Ruan"
     ],
     "a": [
      "Cynthia Eisen",
      "Gina Pultorak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Kerry Gray-Style"
     ],
     "a": [
      "Janine Forrest",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Derek Livingston",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Eric Markowitz",
      "Thomas Ross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "John Darrah",
      "Tom Kresky"
     ],
     "a": [
      "Jonathan Goldner",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Derek Livingston"
     ],
     "a": [
      "Cynthia Eisen",
      "Thomas Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yang Ruan",
      "John Darrah"
     ],
     "a": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Janine Forrest",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kerry Gray-Style",
      "Steve Hong"
     ],
     "a": [
      "Gina Pultorak",
      "Todd Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Kelly Dalsey"
     ],
     "a": [
      "Cynthia Eisen",
      "Janine Forrest"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Kerry Gray-Style"
     ],
     "a": [
      "Gina Pultorak",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tom Kresky",
      "Derek Livingston"
     ],
     "a": [
      "Eric Markowitz",
      "Robert Block"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stepan Nevshehirlian",
      "Steve Hong"
     ],
     "a": [
      "Todd Law",
      "Thomas Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Steve Hong"
     ],
     "a": [
      "Marykristin Haskell",
      "Thomas Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Derek Livingston"
     ],
     "a": [
      "Janine Forrest",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "John Darrah"
     ],
     "a": [
      "Gina Pultorak",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Yang Ruan",
      "Tom Kresky"
     ],
     "a": [
      "Cynthia Eisen",
      "Todd Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Kelly Dalsey"
     ],
     "a": [
      "Cynthia Eisen",
      "Janine Forrest"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cynthia Covie",
      "Laura Sweet"
     ],
     "a": [
      "Gina Pultorak",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "John Darrah",
      "Steve Hong"
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
     "as": 18,
     "h": [
      "Tom Kresky",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Eric Markowitz",
      "Todd Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Derek Livingston"
     ],
     "a": [
      "Cynthia Eisen",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Tom Kresky"
     ],
     "a": [
      "Gina Pultorak",
      "Thomas Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Sweet",
      "John Darrah"
     ],
     "a": [
      "Janine Forrest",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Yang Ruan",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Marykristin Haskell",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Kelly Dalsey"
     ],
     "a": [
      "Cynthia Eisen",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Yang Ruan"
     ],
     "a": [
      "Gina Pultorak",
      "Janine Forrest"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steve Hong",
      "Derek Livingston"
     ],
     "a": [
      "Jonathan Goldner",
      "Thomas Ross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Stepan Nevshehirlian",
      "John Darrah"
     ],
     "a": [
      "Eric Markowitz",
      "Todd Law"
     ]
    }
   ],
   "subs": [
    "Yang Ruan"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Bounce Malvern Black",
   "away": "ACE Moorestown",
   "time": "2026-10-17T14:00:00",
   "complete": true,
   "homePoints": 647,
   "awayPoints": 600,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Judy Qiu",
      "Keith Goldberg"
     ],
     "a": [
      "Kate Siedell",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Michael Dieterle"
     ],
     "a": [
      "Pam Boyd",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Erika Simone",
      "John Morabito"
     ],
     "a": [
      "Susan Debbs",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Stacey Frank",
      "Thomas Schillow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Harriet Levin",
      "Jill Scully"
     ],
     "a": [
      "Stacey Frank",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Vicki Main",
      "Judy Qiu"
     ],
     "a": [
      "Pam Boyd",
      "Patricia Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Michael Finkelstein",
      "John Morabito"
     ],
     "a": [
      "Jonathan Brand",
      "Robert Finley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jim Darcangelo",
      "Keith Goldberg"
     ],
     "a": [
      "Marc Pellicane",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Jim Darcangelo"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Erika Simone",
      "Keith Goldberg"
     ],
     "a": [
      "Patricia Boyle",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jill Scully",
      "Michael Dieterle"
     ],
     "a": [
      "Stacey Frank",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Susan Debbs",
      "Jonathan Brand"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Harriet Levin"
     ],
     "a": [
      "Kate Siedell",
      "Susan Debbs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Erika Simone",
      "Judy Qiu"
     ],
     "a": [
      "Stacey Frank",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michael Dieterle",
      "Michael Finkelstein"
     ],
     "a": [
      "Jeff Lorman",
      "Robert Finley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jim Darcangelo",
      "John Morabito"
     ],
     "a": [
      "Jonathan Brand",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Kate Siedell",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Pam Boyd",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jill Scully",
      "John Morabito"
     ],
     "a": [
      "Patricia Boyle",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Michael Finkelstein"
     ],
     "a": [
      "Susan Debbs",
      "Robert Finley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Jill Scully",
      "Judy Qiu"
     ],
     "a": [
      "Pam Boyd",
      "Patricia Boyle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Harriet Levin",
      "Erika Simone"
     ],
     "a": [
      "Stacey Frank",
      "Kate Siedell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Keith Goldberg",
      "Michael Dieterle"
     ],
     "a": [
      "Jonathan Brand",
      "Thomas Schillow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ],
     "a": [
      "Marc Pellicane",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Kate Siedell",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Judy Qiu",
      "Keith Goldberg"
     ],
     "a": [
      "Susan Debbs",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tera Baccile",
      "John Morabito"
     ],
     "a": [
      "Pam Boyd",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Stacey Frank",
      "Marc Pellicane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tera Baccile",
      "Harriet Levin"
     ],
     "a": [
      "Kate Siedell",
      "Pam Boyd"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Erika Simone",
      "Vicki Main"
     ],
     "a": [
      "Stacey Frank",
      "Susan Debbs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Keith Goldberg",
      "John Morabito"
     ],
     "a": [
      "Jonathan Brand",
      "Robert Finley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ],
     "a": [
      "Thomas Schillow",
      "Marc Pellicane"
     ]
    }
   ],
   "subs": [
    "Marc Pellicane",
    "Thomas Schillow",
    "Judy Qiu"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Stelton Sports",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-17T14:00:00",
   "complete": true,
   "homePoints": 581,
   "awayPoints": 626,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rui Zhang",
      "Leon Li"
     ],
     "a": [
      "Sarah Nazario",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Eva Danieli",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Amy Chrebet",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Sam Zhou"
     ],
     "a": [
      "Meryl Nadler",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ellen Xu",
      "June Lee"
     ],
     "a": [
      "Sarah Nazario",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shaoyi Sun",
      "Jennifer Qian"
     ],
     "a": [
      "Amy Chrebet",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mengchu Zhou",
      "Jay Zeng"
     ],
     "a": [
      "Gary Sidhu",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lei Dong",
      "Liangang Liu"
     ],
     "a": [
      "Todd Gasparre",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Sarah Nazario",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Eva Danieli",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Amy Chrebet",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ellen Xu",
      "Leon Li"
     ],
     "a": [
      "Meryl Nadler",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mei Li",
      "Jennifer Qian"
     ],
     "a": [
      "Sarah Nazario",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shaoyi Sun",
      "Ellen Xu"
     ],
     "a": [
      "Eva Danieli",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sam Zhou",
      "Jay Zeng"
     ],
     "a": [
      "Gary Sidhu",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Leon Li",
      "Mengchu Zhou"
     ],
     "a": [
      "Todd Gasparre",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Sarah Nazario",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Liangang Liu"
     ],
     "a": [
      "Eva Danieli",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Mengchu Zhou"
     ],
     "a": [
      "Amy Chrebet",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "June Lee",
      "Leon Li"
     ],
     "a": [
      "Meryl Nadler",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ellen Xu",
      "June Lee"
     ],
     "a": [
      "Sarah Nazario",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shaoyi Sun",
      "Rui Zhang"
     ],
     "a": [
      "Amy Chrebet",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mengchu Zhou",
      "Jay Zeng"
     ],
     "a": [
      "Todd Gasparre",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lei Dong",
      "Sam Zhou"
     ],
     "a": [
      "Yi Gu",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Mei Li",
      "Liangang Liu"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Eva Danieli",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Qian",
      "Leon Li"
     ],
     "a": [
      "Amy Chrebet",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Sam Zhou"
     ],
     "a": [
      "Meryl Nadler",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mei Li",
      "Rui Zhang"
     ],
     "a": [
      "Sarah Nazario",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shaoyi Sun",
      "June Lee"
     ],
     "a": [
      "Eva Danieli",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Leon Li",
      "Jay Zeng"
     ],
     "a": [
      "Todd Gasparre",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lei Dong",
      "Liangang Liu"
     ],
     "a": [
      "Yi Gu",
      "Lance Brown"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 9,
   "home": "Flemington Blue",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-18T11:00:00",
   "complete": true,
   "homePoints": 32,
   "awayPoints": 0,
   "homeGW": 32,
   "awayGW": 0,
   "games": [
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Susan Ackley",
      "Simon Perry"
     ],
     "a": [
      "Alice Napolitano",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chanda Mccoy",
      "John Pineda"
     ],
     "a": [
      "Natasha De Carvalho",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chaoxia Cheng",
      "Jorge Diaz"
     ],
     "a": [
      "Amy Chrebet",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Meryl Nadler",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chanda Mccoy",
      "Ceil Gomez"
     ],
     "a": [
      "Amy Chrebet",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Simon Perry",
      "John Pineda"
     ],
     "a": [
      "John Rogers",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jorge Diaz",
      "Steven Gregov"
     ],
     "a": [
      "Yi Gu",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chanda Mccoy",
      "Simon Perry"
     ],
     "a": [
      "Alice Napolitano",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Susan Ackley",
      "Steven Gregov"
     ],
     "a": [
      "Natasha De Carvalho",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chaoxia Cheng",
      "Marc Friedman"
     ],
     "a": [
      "Amy Chrebet",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Ceil Gomez",
      "Jorge Diaz"
     ],
     "a": [
      "Meryl Nadler",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chanda Mccoy",
      "Ceil Gomez"
     ],
     "a": [
      "Alice Napolitano",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Natasha De Carvalho",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Steven Gregov",
      "Simon Perry"
     ],
     "a": [
      "Darren Saks",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Marc Friedman",
      "John Pineda"
     ],
     "a": [
      "John Rogers",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Susan Ackley",
      "Simon Perry"
     ],
     "a": [
      "Alice Napolitano",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chaoxia Cheng",
      "Marc Friedman"
     ],
     "a": [
      "Natasha De Carvalho",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Carol Mastroianni",
      "Steven Gregov"
     ],
     "a": [
      "Amy Chrebet",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Ceil Gomez",
      "Jorge Diaz"
     ],
     "a": [
      "Meryl Nadler",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Susan Ackley",
      "Chaoxia Cheng"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Carol Mastroianni",
      "Chanda Mccoy"
     ],
     "a": [
      "Amy Chrebet",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "John Pineda",
      "Steven Gregov"
     ],
     "a": [
      "Darren Saks",
      "John Rogers"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Marc Friedman",
      "Jorge Diaz"
     ],
     "a": [
      "Yi Gu",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Carol Mastroianni",
      "Simon Perry"
     ],
     "a": [
      "Alice Napolitano",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chanda Mccoy",
      "Jorge Diaz"
     ],
     "a": [
      "Natasha De Carvalho",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chaoxia Cheng",
      "John Pineda"
     ],
     "a": [
      "Amy Chrebet",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Ceil Gomez",
      "Marc Friedman"
     ],
     "a": [
      "Meryl Nadler",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chanda Mccoy",
      "Chaoxia Cheng"
     ],
     "a": [
      "Alice Napolitano",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Susan Ackley",
      "Ceil Gomez"
     ],
     "a": [
      "Natasha De Carvalho",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Simon Perry",
      "Jorge Diaz"
     ],
     "a": [
      "Darren Saks",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "John Pineda",
      "Steven Gregov"
     ],
     "a": [
      "John Rogers",
      "Lance Brown"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 9,
   "home": "Premiere",
   "away": "Pickleball Palace",
   "time": "2026-10-18T12:00:00",
   "complete": true,
   "homePoints": 444,
   "awayPoints": 677,
   "homeGW": 1,
   "awayGW": 31,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Steve Gerwer"
     ],
     "a": [
      "Karan Pescatore",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "John Ficarra"
     ],
     "a": [
      "Carly Pfeffer",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "a": [
      "Rebecca Lederman",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Kelly Hanson Word",
      "Todd Mitchell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ],
     "a": [
      "Carly Pfeffer",
      "Karan Pescatore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Lily Liu"
     ],
     "a": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Erik Lombardo",
      "Sal Frangipane"
     ],
     "a": [
      "Charlie Johnston",
      "Todd Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "John Ficarra",
      "Wally Liu"
     ],
     "a": [
      "Emil Pescatore",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lily Liu",
      "Steve Gerwer"
     ],
     "a": [
      "Kelly Hanson Word",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Rebecca Lederman",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Sal Frangipane"
     ],
     "a": [
      "Karan Pescatore",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Wally Liu"
     ],
     "a": [
      "Carly Pfeffer",
      "Charlie Johnston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Lily Liu"
     ],
     "a": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Coby Resnick"
     ],
     "a": [
      "Kelly Hanson Word",
      "Karan Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "Steve Gerwer"
     ],
     "a": [
      "Emil Pescatore",
      "Charlie Johnston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "John Ficarra",
      "Wally Liu"
     ],
     "a": [
      "Brian Gonzalez",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Steve Gerwer"
     ],
     "a": [
      "Rebecca Lederman",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Hayley Yandoli",
      "Sal Frangipane"
     ],
     "a": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
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
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Carly Pfeffer",
      "Todd Mitchell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Lily Liu"
     ],
     "a": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Hayley Yandoli"
     ],
     "a": [
      "Carly Pfeffer",
      "Karan Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Wally Liu",
      "Erik Lombardo"
     ],
     "a": [
      "Brian Gonzalez",
      "Todd Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "Steve Gerwer"
     ],
     "a": [
      "Charlie Johnston",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hayley Yandoli",
      "Steve Gerwer"
     ],
     "a": [
      "Kelly Hanson Word",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Sal Frangipane"
     ],
     "a": [
      "Karan Pescatore",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Carly Pfeffer",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Coby Resnick",
      "John Ficarra"
     ],
     "a": [
      "Rebecca Lederman",
      "Todd Mitchell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Coby Resnick"
     ],
     "a": [
      "Carly Pfeffer",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Lily Liu"
     ],
     "a": [
      "Rebecca Lederman",
      "Karan Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "John Ficarra",
      "Steve Gerwer"
     ],
     "a": [
      "Emil Pescatore",
      "Todd Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Erik Lombardo",
      "Sal Frangipane"
     ],
     "a": [
      "Brian Gonzalez",
      "Charlie Johnston"
     ]
    }
   ],
   "subs": [
    "Charlie Johnston"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Premiere",
   "away": "Flemington Blue",
   "time": "2026-10-24T12:00:00",
   "complete": true,
   "homePoints": 586,
   "awayPoints": 631,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Steve Gerwer"
     ],
     "a": [
      "Susan Ackley",
      "David Dietzel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "James Gross"
     ],
     "a": [
      "Chanda Mccoy",
      "Jorge Diaz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "a": [
      "Carol Mastroianni",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Nancy Lin"
     ],
     "a": [
      "Susan Ackley",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tara Lombardo",
      "Lily Liu"
     ],
     "a": [
      "Amy Johnson",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Erik Lombardo",
      "Alfonse Calato"
     ],
     "a": [
      "David Dietzel",
      "Jorge Diaz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Steve Gerwer",
      "James Gross"
     ],
     "a": [
      "Tom Maley",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "James Gross"
     ],
     "a": [
      "Chanda Mccoy",
      "David Dietzel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Wally Liu"
     ],
     "a": [
      "Susan Ackley",
      "Tom Maley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Hayley Yandoli",
      "Alfonse Calato"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lily Liu",
      "Steve Gerwer"
     ],
     "a": [
      "Amy Johnson",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "Carol Mastroianni",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Hayley Yandoli"
     ],
     "a": [
      "Susan Ackley",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 31,
     "h": [
      "Steve Gerwer",
      "Alfonse Calato"
     ],
     "a": [
      "Jorge Diaz",
      "Tom Maley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Erik Lombardo",
      "Wally Liu"
     ],
     "a": [
      "Marc Friedman",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Susan Ackley",
      "Jorge Diaz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "James Gross"
     ],
     "a": [
      "Carol Mastroianni",
      "David Dietzel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Sue Johnson",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Coby Resnick",
      "Alfonse Calato"
     ],
     "a": [
      "Amy Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Nancy Lin"
     ],
     "a": [
      "Carol Mastroianni",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tara Lombardo",
      "Coby Resnick"
     ],
     "a": [
      "Susan Ackley",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alfonse Calato",
      "Wally Liu"
     ],
     "a": [
      "David Dietzel",
      "Tom Maley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "James Gross",
      "Steve Gerwer"
     ],
     "a": [
      "Art Muth",
      "Jorge Diaz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Chanda Mccoy",
      "Tom Maley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Wally Liu"
     ],
     "a": [
      "Carol Mastroianni",
      "David Dietzel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lily Liu",
      "Steve Gerwer"
     ],
     "a": [
      "Amy Johnson",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Coby Resnick",
      "James Gross"
     ],
     "a": [
      "Sue Johnson",
      "Jorge Diaz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Nancy Lin"
     ],
     "a": [
      "Carol Mastroianni",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lily Liu",
      "Hayley Yandoli"
     ],
     "a": [
      "Chanda Mccoy",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Alfonse Calato",
      "Steve Gerwer"
     ],
     "a": [
      "Tom Maley",
      "Jorge Diaz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Erik Lombardo",
      "James Gross"
     ],
     "a": [
      "Marc Friedman",
      "Art Muth"
     ]
    }
   ],
   "subs": [
    "David Dietzel"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "APC Garden State",
   "away": "Bounce Malvern Black",
   "time": "2026-10-24T12:00:00",
   "complete": true,
   "homePoints": 467,
   "awayPoints": 682,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kerry Gray-Style",
      "Andrew Fleischer"
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lisa Loeber",
      "John Darrah"
     ],
     "a": [
      "Erika Simone",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Jimmy Shapiro"
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kelly Walker",
      "Tom Kresky"
     ],
     "a": [
      "Jill Scully",
      "Michael Dieterle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Kerry Gray-Style"
     ],
     "a": [
      "Katherine Maruyama",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Lisa Loeber"
     ],
     "a": [
      "Erika Simone",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Derek Livingston",
      "Jimmy Shapiro"
     ],
     "a": [
      "Jingwei Wu",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "John Darrah",
      "Tom Kresky"
     ],
     "a": [
      "Michael Dieterle",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Tom Kresky"
     ],
     "a": [
      "Tera Baccile",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Derek Livingston"
     ],
     "a": [
      "Erika Simone",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "John Darrah"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Walker",
      "Andrew Fleischer"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Kelly Dalsey"
     ],
     "a": [
      "Tera Baccile",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelly Walker",
      "Lisa Loeber"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "John Darrah",
      "Tom Kresky"
     ],
     "a": [
      "Jim Darcangelo",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrew Fleischer",
      "Jimmy Shapiro"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Andrew Fleischer"
     ],
     "a": [
      "Erika Simone",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Sweet",
      "John Darrah"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Derek Livingston"
     ],
     "a": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lisa Loeber",
      "Jimmy Shapiro"
     ],
     "a": [
      "Jill Scully",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Laura Sweet"
     ],
     "a": [
      "Tera Baccile",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Walker",
      "Lisa Loeber"
     ],
     "a": [
      "Erika Simone",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Tom Kresky",
      "Derek Livingston"
     ],
     "a": [
      "Keith Goldberg",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrew Fleischer",
      "Jimmy Shapiro"
     ],
     "a": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelly Walker",
      "Derek Livingston"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Tom Kresky"
     ],
     "a": [
      "Erika Simone",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Laura Sweet",
      "John Darrah"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Andrew Fleischer"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Kelly Dalsey"
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
      "Laura Sweet",
      "Kelly Walker"
     ],
     "a": [
      "Erika Simone",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "John Darrah",
      "Derek Livingston"
     ],
     "a": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tom Kresky",
      "Jimmy Shapiro"
     ],
     "a": [
      "Keith Goldberg",
      "Jingwei Wu"
     ]
    }
   ],
   "subs": [
    "Kelly Walker"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Flemington Green",
   "away": "Pickle Place",
   "time": "2026-10-24T12:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 616,
   "awayPoints": 583,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Susan Lyle",
      "John Hauth"
     ],
     "a": [
      "Nancy Blank",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristen Soucie",
      "Stephen Locker"
     ],
     "a": [
      "Alicia Maguire",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stacy Garretson",
      "Michael Palmer"
     ],
     "a": [
      "Gina Pultorak",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Barbara Hess",
      "Eric Luque"
     ],
     "a": [
      "Janet Garrity",
      "Thomas Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Denise Richmond"
     ],
     "a": [
      "Gina Pultorak",
      "Peg Varani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kristen Soucie",
      "Susan Lyle"
     ],
     "a": [
      "Janet Garrity",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Osborne",
      "Stephen Locker"
     ],
     "a": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "John Hauth",
      "Michael Palmer"
     ],
     "a": [
      "Jonathan Goldner",
      "Thomas Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Lyle",
      "Stephen Locker"
     ],
     "a": [
      "Alicia Maguire",
      "Thomas Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Eric Luque"
     ],
     "a": [
      "Gina Pultorak",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Barbara Hess",
      "David Osborne"
     ],
     "a": [
      "Nancy Blank",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Denise Richmond",
      "Michael Palmer"
     ],
     "a": [
      "Peg Varani",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Barbara Hess",
      "Stacy Garretson"
     ],
     "a": [
      "Gina Pultorak",
      "Janet Garrity"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Denise Richmond"
     ],
     "a": [
      "Alicia Maguire",
      "Peg Varani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "John Hauth",
      "David Osborne"
     ],
     "a": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Palmer",
      "Eric Luque"
     ],
     "a": [
      "Jonathan Goldner",
      "Thomas Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan Lyle",
      "John Hauth"
     ],
     "a": [
      "Peg Varani",
      "Thomas Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stacy Garretson",
      "Stephen Locker"
     ],
     "a": [
      "Janet Garrity",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Denise Richmond",
      "David Osborne"
     ],
     "a": [
      "Alicia Maguire",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Eric Luque"
     ],
     "a": [
      "Nancy Blank",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristen Soucie",
      "Barbara Hess"
     ],
     "a": [
      "Gina Pultorak",
      "Nancy Blank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Denise Richmond",
      "Susan Lyle"
     ],
     "a": [
      "Alicia Maguire",
      "Janet Garrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Luque",
      "David Osborne"
     ],
     "a": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stephen Locker",
      "Michael Palmer"
     ],
     "a": [
      "Eric Markowitz",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "John Hauth"
     ],
     "a": [
      "Gina Pultorak",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stacy Garretson",
      "Michael Palmer"
     ],
     "a": [
      "Peg Varani",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Denise Richmond",
      "Eric Luque"
     ],
     "a": [
      "Janet Garrity",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Barbara Hess",
      "David Osborne"
     ],
     "a": [
      "Nancy Blank",
      "Thomas Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Denise Richmond",
      "Barbara Hess"
     ],
     "a": [
      "Alicia Maguire",
      "Gina Pultorak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Garretson",
      "Susan Lyle"
     ],
     "a": [
      "Nancy Blank",
      "Peg Varani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Luque",
      "David Osborne"
     ],
     "a": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "John Hauth",
      "Stephen Locker"
     ],
     "a": [
      "Eric Markowitz",
      "Jonathan Goldner"
     ]
    }
   ],
   "subs": [
    "Susan Lyle",
    "Stephen Locker",
    "Michael Palmer",
    "Peg Varani"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Bounce Malvern Boom",
   "away": "ACE Moorestown",
   "time": "2026-10-24T14:00:00",
   "complete": true,
   "homePoints": 485,
   "awayPoints": 664,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cindy Hu",
      "Chris Norton"
     ],
     "a": [
      "Pam Boyd",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "James Price"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jean Rosenbaum",
      "Sandro Stefanelli"
     ],
     "a": [
      "Patricia Boyle",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Dugan",
      "Brett Kleger"
     ],
     "a": [
      "Stacey Frank",
      "Lance Stopek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Christy Beale"
     ],
     "a": [
      "Kate Siedell",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Jean Rosenbaum"
     ],
     "a": [
      "Patricia Boyle",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brett Kleger",
      "Chris Norton"
     ],
     "a": [
      "Jonathan Brand",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "David Marchese",
      "James Price"
     ],
     "a": [
      "Brian Rowan",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Stacey Frank",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cindy Hu",
      "Chris Norton"
     ],
     "a": [
      "Patricia Boyle",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christy Beale",
      "David Marchese"
     ],
     "a": [
      "Pam Boyd",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jean Rosenbaum",
      "Brett Kleger"
     ],
     "a": [
      "Kate Siedell",
      "Brian Rowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christy Beale",
      "Sandra Thompson"
     ],
     "a": [
      "Pam Boyd",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jean Rosenbaum",
      "Cindy Hu"
     ],
     "a": [
      "Kate Siedell",
      "Patricia Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brett Kleger",
      "James Price"
     ],
     "a": [
      "Jonathan Brand",
      "Brian Rowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chris Norton",
      "Sandro Stefanelli"
     ],
     "a": [
      "Marc Harden",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christy Beale",
      "James Price"
     ],
     "a": [
      "Patricia Boyle",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Brett Kleger"
     ],
     "a": [
      "Stacey Frank",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cindy Hu",
      "Sandro Stefanelli"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sandra Thompson",
      "David Marchese"
     ],
     "a": [
      "Pam Boyd",
      "Brian Rowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Jean Rosenbaum"
     ],
     "a": [
      "Kate Siedell",
      "Pam Boyd"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cindy Hu",
      "Christine Dugan"
     ],
     "a": [
      "Stacey Frank",
      "Patricia Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chris Norton",
      "Brett Kleger"
     ],
     "a": [
      "Marc Harden",
      "Brian Rowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "David Marchese",
      "James Price"
     ],
     "a": [
      "Jonathan Brand",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "David Marchese"
     ],
     "a": [
      "Patricia Boyle",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christy Beale",
      "Chris Norton"
     ],
     "a": [
      "Stacey Frank",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jean Rosenbaum",
      "James Price"
     ],
     "a": [
      "Kate Siedell",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Cindy Hu",
      "Sandro Stefanelli"
     ],
     "a": [
      "Pam Boyd",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Christy Beale"
     ],
     "a": [
      "Stacey Frank",
      "Patricia Boyle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cindy Hu",
      "Jean Rosenbaum"
     ],
     "a": [
      "Kate Siedell",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sandro Stefanelli",
      "Chris Norton"
     ],
     "a": [
      "Brian Rowan",
      "Lance Stopek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "David Marchese",
      "Brett Kleger"
     ],
     "a": [
      "Jonathan Brand",
      "Marc Harden"
     ]
    }
   ],
   "subs": [
    "Brian Rowan",
    "Jean Rosenbaum",
    "Lance Stopek",
    "James Price"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Stelton Sports",
   "away": "Allstar Pickler",
   "time": "2026-10-24T14:00:00",
   "complete": true,
   "homePoints": 629,
   "awayPoints": 573,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Margaret Weidlich",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Jim Peng"
     ],
     "a": [
      "Evelyn Du",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Rui Zhang",
      "Leon Li"
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
     "as": 19,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Susan Vinci",
      "Ping Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mei Li",
      "Rui Zhang"
     ],
     "a": [
      "Evelyn Du",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shaoyi Sun",
      "Ann Betterton"
     ],
     "a": [
      "Margaret Weidlich",
      "Susan Vinci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sam Zhou",
      "Jim Peng"
     ],
     "a": [
      "Abraham Telechanski",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Leon Li",
      "Liangang Liu"
     ],
     "a": [
      "Liangjie Zhu",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Margaret Weidlich",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mei Li",
      "Liangang Liu"
     ],
     "a": [
      "Evelyn Du",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ann Betterton",
      "Leon Li"
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
     "as": 14,
     "h": [
      "Shaoyi Sun",
      "Sam Zhou"
     ],
     "a": [
      "Susan Vinci",
      "Ping Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Mei Li",
      "Rui Zhang"
     ],
     "a": [
      "Ronnie Yin",
      "Evelyn Du"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shaoyi Sun",
      "Ann Betterton"
     ],
     "a": [
      "Margaret Weidlich",
      "Susan Vinci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Mengchu Zhou",
      "Jim Peng"
     ],
     "a": [
      "Abraham Telechanski",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Liangang Liu",
      "Leon Li"
     ],
     "a": [
      "Liangjie Zhu",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Margaret Weidlich",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shaoyi Sun",
      "Mengchu Zhou"
     ],
     "a": [
      "Ronnie Yin",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ann Betterton",
      "Leon Li"
     ],
     "a": [
      "Susan Vinci",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Evelyn Du",
      "Ping Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shaoyi Sun",
      "Rui Zhang"
     ],
     "a": [
      "Susan Vinci",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Mei Li",
      "Ann Betterton"
     ],
     "a": [
      "Evelyn Du",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Liangang Liu",
      "Lei Dong"
     ],
     "a": [
      "Abraham Telechanski",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mengchu Zhou",
      "Jim Peng"
     ],
     "a": [
      "Liangjie Zhu",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Margaret Weidlich",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Sam Zhou"
     ],
     "a": [
      "Ronnie Yin",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rui Zhang",
      "Leon Li"
     ],
     "a": [
      "Evelyn Du",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Susan Vinci",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Shaoyi Sun",
      "Rui Zhang"
     ],
     "a": [
      "Margaret Weidlich",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mei Li",
      "Ann Betterton"
     ],
     "a": [
      "Evelyn Du",
      "Susan Vinci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mengchu Zhou",
      "Sam Zhou"
     ],
     "a": [
      "Liangjie Zhu",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Liangang Liu",
      "Lei Dong"
     ],
     "a": [
      "Abraham Telechanski",
      "Ping Peng"
     ]
    }
   ],
   "subs": [
    "Sergey Sprikut",
    "Susan Vinci",
    "Ping Peng"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Palace",
   "time": "2026-10-24T14:00:00",
   "complete": true,
   "homePoints": 588,
   "awayPoints": 633,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Gary Sidhu"
     ],
     "a": [
      "Kate Curren",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eva Danieli",
      "Todd Gasparre"
     ],
     "a": [
      "Rebecca Lederman",
      "Julio Vidal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Yi Gu"
     ],
     "a": [
      "Kelly Hanson Word",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alice Napolitano",
      "Darren Saks"
     ],
     "a": [
      "Karan Pescatore",
      "Todd Mitchell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Nazario",
      "Eva Danieli"
     ],
     "a": [
      "Carly Pfeffer",
      "Kate Curren"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Amy Chrebet"
     ],
     "a": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Yi Gu"
     ],
     "a": [
      "Emil Pescatore",
      "Alex Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Darren Saks",
      "Todd Gasparre"
     ],
     "a": [
      "Marr Flores",
      "Julio Vidal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Yi Gu"
     ],
     "a": [
      "Carly Pfeffer",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Darren Saks"
     ],
     "a": [
      "Rebecca Lederman",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sarah Nazario",
      "Gary Sidhu"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Amy Chrebet",
      "Todd Gasparre"
     ],
     "a": [
      "Kelly Hanson Word",
      "Marr Flores"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Alice Napolitano"
     ],
     "a": [
      "Kate Curren",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eva Danieli",
      "Amy Chrebet"
     ],
     "a": [
      "Karan Pescatore",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Darren Saks",
      "Gary Sidhu"
     ],
     "a": [
      "Alex Lee",
      "Todd Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Todd Gasparre",
      "Yi Gu"
     ],
     "a": [
      "Emil Pescatore",
      "Julio Vidal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Nazario",
      "Todd Gasparre"
     ],
     "a": [
      "Rebecca Lederman",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alice Napolitano",
      "Gary Sidhu"
     ],
     "a": [
      "Kate Curren",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eva Danieli",
      "Darren Saks"
     ],
     "a": [
      "Carly Pfeffer",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Chrebet",
      "Yi Gu"
     ],
     "a": [
      "Karan Pescatore",
      "Julio Vidal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Rebecca Lederman",
      "Karan Pescatore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Amy Chrebet"
     ],
     "a": [
      "Kate Curren",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Darren Saks",
      "Yi Gu"
     ],
     "a": [
      "Alex Lee",
      "Julio Vidal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gary Sidhu",
      "Todd Gasparre"
     ],
     "a": [
      "Emil Pescatore",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Nazario",
      "Gary Sidhu"
     ],
     "a": [
      "Carly Pfeffer",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Todd Gasparre"
     ],
     "a": [
      "Kate Curren",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eva Danieli",
      "Yi Gu"
     ],
     "a": [
      "Kelly Hanson Word",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Darren Saks"
     ],
     "a": [
      "Karan Pescatore",
      "Alex Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Amy Chrebet"
     ],
     "a": [
      "Kate Curren",
      "Karan Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Todd Gasparre"
     ],
     "a": [
      "Julio Vidal",
      "Todd Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Darren Saks",
      "Yi Gu"
     ],
     "a": [
      "Emil Pescatore",
      "Alex Lee"
     ]
    }
   ],
   "subs": [
    "Marr Flores",
    "Julio Vidal"
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "ACE Moorestown",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-25T09:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Patricia Boyle",
      "Jeff Lorman"
     ],
     "a": [
      "Sarah Nazario",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Natasha De Carvalho",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Alice Napolitano",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stacey Frank",
      "Jonathan Brand"
     ],
     "a": [
      "Eva Danieli",
      "Michael Swell"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Sarah Nazario",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sandy Alkins",
      "Pam Boyd"
     ],
     "a": [
      "Eva Danieli",
      "Alice Napolitano"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Brand",
      "Robert Finley"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "h": [
      "Marc Harden",
      "Michael Boyle"
     ],
     "a": [
      "Darren Saks",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sandy Alkins",
      "Jonathan Brand"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Patricia Boyle",
      "Michael Boyle"
     ],
     "a": [
      "Natasha De Carvalho",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Pam Boyd",
      "Marc Harden"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kate Siedell",
      "Jeff Lorman"
     ],
     "a": [
      "Eva Danieli",
      "Gary Sidhu"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Sarah Nazario",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "h": [
      "Stacey Frank",
      "Patricia Boyle"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Brand",
      "Michael Boyle"
     ],
     "a": [
      "Michael Swell",
      "Todd Gasparre"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jeff Lorman",
      "Robert Finley"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stacey Frank",
      "Robert Finley"
     ],
     "a": [
      "Sarah Nazario",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Patricia Boyle",
      "Jeff Lorman"
     ],
     "a": [
      "Natasha De Carvalho",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Pam Boyd",
      "Michael Boyle"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Eva Danieli",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "h": [
      "Stacey Frank",
      "Sandy Alkins"
     ],
     "a": [
      "Sarah Nazario",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "h": [
      "Pam Boyd",
      "Kate Siedell"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "h": [
      "Robert Finley",
      "Michael Boyle"
     ],
     "a": [
      "Gary Sidhu",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "h": [
      "Marc Harden",
      "Jonathan Brand"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stacey Frank",
      "Michael Boyle"
     ],
     "a": [
      "Natasha De Carvalho",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Patricia Boyle",
      "Jonathan Brand"
     ],
     "a": [
      "Alice Napolitano",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sandy Alkins",
      "Jeff Lorman"
     ],
     "a": [
      "Eva Danieli",
      "Todd Gasparre"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Sarah Nazario",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sandy Alkins",
      "Pam Boyd"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Boyle",
      "Marc Harden"
     ],
     "a": [
      "Michael Swell",
      "Todd Gasparre"
     ]
    },
    {
     "t": "male",
     "h": [
      "Robert Finley",
      "Jonathan Brand"
     ],
     "a": [
      "Darren Saks",
      "Gary Sidhu"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Stelton Sports",
   "time": "2026-10-25T12:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Cynthia Covie",
      "Tim Bruno"
     ],
     "a": [
      "Ann Betterton",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Laura Sweet",
      "John Darrah"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kelly Dalsey",
      "Tom Kresky"
     ],
     "a": [
      "Rui Zhang",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kerry Gray-Style",
      "Steve Hong"
     ],
     "a": [
      "Ellen Xu",
      "Jay Zeng"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kerry Gray-Style",
      "Kelly Dalsey"
     ],
     "a": [
      "Shaoyi Sun",
      "June Lee"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ],
     "a": [
      "Ellen Xu",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Darrah",
      "Tom Kresky"
     ],
     "a": [
      "Sam Zhou",
      "Jay Zeng"
     ]
    },
    {
     "t": "male",
     "h": [
      "Steve Hong",
      "Tim Bruno"
     ],
     "a": [
      "Lei Dong",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jiyun Yuh",
      "Tom Kresky"
     ],
     "a": [
      "Ann Betterton",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Covie",
      "Steve Hong"
     ],
     "a": [
      "Shaoyi Sun",
      "Jay Zeng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kerry Gray-Style",
      "Tim Bruno"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Laura Sweet",
      "John Darrah"
     ],
     "a": [
      "Ellen Xu",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kerry Gray-Style",
      "Kelly Dalsey"
     ],
     "a": [
      "Ann Betterton",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "h": [
      "Laura Sweet",
      "Jiyun Yuh"
     ],
     "a": [
      "June Lee",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tom Kresky",
      "Tim Bruno"
     ],
     "a": [
      "Leon Li",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Darrah",
      "Steve Hong"
     ],
     "a": [
      "Lei Dong",
      "Jay Zeng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kerry Gray-Style",
      "John Darrah"
     ],
     "a": [
      "Ann Betterton",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Covie",
      "Tim Bruno"
     ],
     "a": [
      "Shaoyi Sun",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kelly Dalsey",
      "Tom Kresky"
     ],
     "a": [
      "Rui Zhang",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jiyun Yuh",
      "Steve Hong"
     ],
     "a": [
      "June Lee",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "h": [
      "Laura Sweet",
      "Kerry Gray-Style"
     ],
     "a": [
      "Rui Zhang",
      "June Lee"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Covie",
      "Kelly Dalsey"
     ],
     "a": [
      "Ellen Xu",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tom Kresky",
      "Steve Hong"
     ],
     "a": [
      "Sam Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tim Bruno",
      "John Darrah"
     ],
     "a": [
      "Leon Li",
      "Jay Zeng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kelly Dalsey",
      "Tim Bruno"
     ],
     "a": [
      "Ann Betterton",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jiyun Yuh",
      "John Darrah"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Covie",
      "Steve Hong"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Laura Sweet",
      "Tom Kresky"
     ],
     "a": [
      "Ping Yang",
      "Jay Zeng"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Covie",
      "Laura Sweet"
     ],
     "a": [
      "Rui Zhang",
      "Ann Betterton"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kerry Gray-Style",
      "Jiyun Yuh"
     ],
     "a": [
      "June Lee",
      "Ellen Xu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Steve Hong",
      "Tim Bruno"
     ],
     "a": [
      "Leon Li",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Darrah",
      "Tom Kresky"
     ],
     "a": [
      "Lei Dong",
      "Sam Zhou"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickle Place",
   "away": "Allstar Pickler",
   "time": "2026-10-25T12:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Nancy Blank",
      "Jonathan Goldner"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jane Meng",
      "Eric Markowitz"
     ],
     "a": [
      "Evelyn Du",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marykristin Haskell",
      "Robert Block"
     ],
     "a": [
      "Lan Bin",
      "Sergey Sprikut"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gretchen Keith",
      "Thomas Ross"
     ],
     "a": [
      "Margaret Weidlich",
      "Yang Wang"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Gretchen Keith",
      "Marykristin Haskell"
     ],
     "a": [
      "Ronnie Yin",
      "Evelyn Du"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Alicia Maguire",
      "Nancy Blank"
     ],
     "a": [
      "Margaret Weidlich",
      "Lan Bin"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Goldner",
      "Robert Block"
     ],
     "a": [
      "Abraham Telechanski",
      "Sergey Sprikut"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Eric Markowitz",
      "Thomas Ross"
     ],
     "a": [
      "Liangjie Zhu",
      "Yang Wang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marykristin Haskell",
      "Jonathan Goldner"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Alicia Maguire",
      "Eric Markowitz"
     ],
     "a": [
      "Evelyn Du",
      "Sergey Sprikut"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jane Meng",
      "Thomas Ross"
     ],
     "a": [
      "Lan Bin",
      "Abraham Telechanski"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Blank",
      "Robert Block"
     ],
     "a": [
      "Margaret Weidlich",
      "Yang Wang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Gretchen Keith",
      "Jane Meng"
     ],
     "a": [
      "Ronnie Yin",
      "Evelyn Du"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Alicia Maguire",
      "Marykristin Haskell"
     ],
     "a": [
      "Margaret Weidlich",
      "Lan Bin"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Eric Markowitz",
      "Thomas Ross"
     ],
     "a": [
      "Abraham Telechanski",
      "Sergey Sprikut"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Goldner",
      "Robert Block"
     ],
     "a": [
      "Liangjie Zhu",
      "Yang Wang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Alicia Maguire",
      "Thomas Ross"
     ],
     "a": [
      "Evelyn Du",
      "Sergey Sprikut"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Blank",
      "Jonathan Goldner"
     ],
     "a": [
      "Margaret Weidlich",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gretchen Keith",
      "Eric Markowitz"
     ],
     "a": [
      "Ronnie Yin",
      "Abraham Telechanski"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jane Meng",
      "Robert Block"
     ],
     "a": [
      "Lan Bin",
      "Yang Wang"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Alicia Maguire",
      "Gretchen Keith"
     ],
     "a": [
      "Ronnie Yin",
      "Lan Bin"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Marykristin Haskell",
      "Nancy Blank"
     ],
     "a": [
      "Evelyn Du",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "male",
     "h": [
      "Robert Block",
      "Thomas Ross"
     ],
     "a": [
      "Liangjie Zhu",
      "Sergey Sprikut"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Eric Markowitz",
      "Jonathan Goldner"
     ],
     "a": [
      "Abraham Telechanski",
      "Yang Wang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ],
     "a": [
      "Ronnie Yin",
      "Sergey Sprikut"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jane Meng",
      "Jonathan Goldner"
     ],
     "a": [
      "Evelyn Du",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gretchen Keith",
      "Robert Block"
     ],
     "a": [
      "Lan Bin",
      "Yang Wang"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Blank",
      "Thomas Ross"
     ],
     "a": [
      "Margaret Weidlich",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "h": [
      "Alicia Maguire",
      "Nancy Blank"
     ],
     "a": [
      "Margaret Weidlich",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jane Meng",
      "Marykristin Haskell"
     ],
     "a": [
      "Evelyn Du",
      "Lan Bin"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Goldner",
      "Thomas Ross"
     ],
     "a": [
      "Abraham Telechanski",
      "Yang Wang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Eric Markowitz",
      "Robert Block"
     ],
     "a": [
      "Liangjie Zhu",
      "Sergey Sprikut"
     ],
     "aSub": [
      0,
      1
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Malvern Boom",
   "away": "Flemington Blue",
   "time": "2026-10-25T12:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Kristina Rhodes",
      "James Price"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jorge Diaz"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sandra Thompson",
      "David Marchese"
     ],
     "a": [
      "Carol Mastroianni",
      "Tom Maley"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jamila Sefiane",
      "Chris Norton"
     ],
     "a": [
      "Amy Johnson",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Dugan",
      "Jamila Sefiane"
     ],
     "a": [
      "Carol Mastroianni",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cindy Hu",
      "Kristina Rhodes"
     ],
     "a": [
      "Amy Johnson",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "h": [
      "David Marchese",
      "James Price"
     ],
     "a": [
      "Steven Gregov",
      "Jorge Diaz"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Sandro Stefanelli",
      "Chris Norton"
     ],
     "a": [
      "Marc Friedman",
      "Tom Maley"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sandra Thompson",
      "James Price"
     ],
     "a": [
      "Susan Ackley",
      "Steven Gregov"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Amy Johnson",
      "Jorge Diaz"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jamila Sefiane",
      "Chris Norton"
     ],
     "a": [
      "Carol Mastroianni",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cindy Hu",
      "Michael Finkelstein"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Sandra Thompson",
      "Cindy Hu"
     ],
     "a": [
      "Carol Mastroianni",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Dugan",
      "Kristina Rhodes"
     ],
     "a": [
      "Chaoxia Cheng",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "h": [
      "David Marchese",
      "Michael Finkelstein"
     ],
     "a": [
      "Tom Maley",
      "Steven Gregov"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Chris Norton",
      "Sandro Stefanelli"
     ],
     "a": [
      "Marc Friedman",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cindy Hu",
      "James Price"
     ],
     "a": [
      "Susan Ackley",
      "Jorge Diaz"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ],
     "a": [
      "Chaoxia Cheng",
      "Tom Maley"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sandra Thompson",
      "David Marchese"
     ],
     "a": [
      "Sue Johnson",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kristina Rhodes",
      "Michael Finkelstein"
     ],
     "a": [
      "Amy Johnson",
      "Art Muth"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Jamila Sefiane",
      "Sandra Thompson"
     ],
     "a": [
      "Carol Mastroianni",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Dugan",
      "Kristina Rhodes"
     ],
     "a": [
      "Chaoxia Cheng",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "h": [
      "Chris Norton",
      "James Price"
     ],
     "a": [
      "Jorge Diaz",
      "Marc Friedman"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Sandro Stefanelli",
      "David Marchese"
     ],
     "a": [
      "Art Muth",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sandra Thompson",
      "James Price"
     ],
     "a": [
      "Susan Ackley",
      "Steven Gregov"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kristina Rhodes",
      "Sandro Stefanelli"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jorge Diaz"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cindy Hu",
      "Chris Norton"
     ],
     "a": [
      "Carol Mastroianni",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Dugan",
      "David Marchese"
     ],
     "a": [
      "Amy Johnson",
      "Tom Maley"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kristina Rhodes",
      "Cindy Hu"
     ],
     "a": [
      "Carol Mastroianni",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Dugan",
      "Jamila Sefiane"
     ],
     "a": [
      "Susan Ackley",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "h": [
      "Chris Norton",
      "David Marchese"
     ],
     "a": [
      "Jorge Diaz",
      "Tom Maley"
     ]
    },
    {
     "t": "male",
     "h": [
      "Sandro Stefanelli",
      "James Price"
     ],
     "a": [
      "Art Muth",
      "Marc Friedman"
     ],
     "hSub": [
      0,
      1
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Malvern Black",
   "away": "Pickleball Palace",
   "time": "2026-10-25T15:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Jill Scully",
      "Jingwei Wu"
     ],
     "a": [
      "Rebecca Lederman",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Kate Curren",
      "Johnson Chang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Carly Pfeffer",
      "Emil Pescatore"
     ]
    },
    {
     "t": "female",
     "h": [
      "Vicki Main",
      "Harriet Levin"
     ],
     "a": [
      "Kelly Hanson Word",
      "Picky Vorabouth"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Stephanie Woomer",
      "Jill Scully"
     ],
     "a": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Finkelstein",
      "Derek Le"
     ],
     "a": [
      "Alex Lee",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jingwei Wu",
      "Jim Darcangelo"
     ],
     "a": [
      "Brian Gonzalez",
      "Johnson Chang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Kate Curren",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Rebecca Lederman",
      "Johnson Chang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Vicki Main",
      "Jingwei Wu"
     ],
     "a": [
      "Kelly Hanson Word",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jill Scully",
      "Jim Darcangelo"
     ],
     "a": [
      "Picky Vorabouth",
      "Brian Gonzalez"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Jill Scully",
      "Vicki Main"
     ],
     "a": [
      "Carly Pfeffer",
      "Picky Vorabouth"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Katherine Maruyama",
      "Harriet Levin"
     ],
     "a": [
      "Kate Curren",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Alex Lee",
      "Johnson Chang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ],
     "a": [
      "Brian Gonzalez",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Rebecca Lederman",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stephanie Woomer",
      "Derek Le"
     ],
     "a": [
      "Kate Curren",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ],
     "a": [
      "Carly Pfeffer",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Picky Vorabouth",
      "Johnson Chang"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Harriet Levin",
      "Katherine Maruyama"
     ],
     "a": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jill Scully",
      "Stephanie Woomer"
     ],
     "a": [
      "Kate Curren",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jingwei Wu",
      "Keith Goldberg"
     ],
     "a": [
      "Alex Lee",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jim Darcangelo",
      "Derek Le"
     ],
     "a": [
      "Emil Pescatore",
      "Johnson Chang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ],
     "a": [
      "Rebecca Lederman",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Vicki Main",
      "Jingwei Wu"
     ],
     "a": [
      "Kelly Hanson Word",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jill Scully",
      "Keith Goldberg"
     ],
     "a": [
      "Carly Pfeffer",
      "Johnson Chang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Picky Vorabouth",
      "Brian Gonzalez"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Harriet Levin",
      "Stephanie Woomer"
     ],
     "a": [
      "Rebecca Lederman",
      "Kate Curren"
     ]
    },
    {
     "t": "female",
     "h": [
      "Vicki Main",
      "Katherine Maruyama"
     ],
     "a": [
      "Kelly Hanson Word",
      "Picky Vorabouth"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Alex Lee",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ],
     "a": [
      "Brian Gonzalez",
      "Johnson Chang"
     ],
     "aSub": [
      0,
      1
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington Green",
   "away": "Premiere",
   "time": "2026-10-25T18:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Stacy Garretson",
      "Todd Stein"
     ],
     "a": [
      "Lisa Mctague",
      "Alfonse Calato"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Papa",
      "Eric Luque"
     ],
     "a": [
      "Tara Lombardo",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Barbara Hess",
      "David Osborne"
     ],
     "a": [
      "Lily Liu",
      "Guy Ohn"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kristen Soucie",
      "Scott Rubin"
     ],
     "a": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Barbara Hess",
      "Stacy Garretson"
     ],
     "a": [
      "Tara Lombardo",
      "Lisa Mctague"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kristen Soucie",
      "Tara Kramer"
     ],
     "a": [
      "Coby Resnick",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "male",
     "h": [
      "Todd Stein",
      "Scott Rubin"
     ],
     "a": [
      "Alfonse Calato",
      "Erik Lombardo"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "John Hauth",
      "David Osborne"
     ],
     "a": [
      "James Gross",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Kramer",
      "Todd Stein"
     ],
     "a": [
      "Coby Resnick",
      "Alfonse Calato"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stacy Garretson",
      "David Osborne"
     ],
     "a": [
      "Tara Lombardo",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Barbara Hess",
      "Eric Luque"
     ],
     "a": [
      "Hayley Yandoli",
      "Guy Ohn"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Papa",
      "John Hauth"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tara Kramer",
      "Barbara Hess"
     ],
     "a": [
      "Lily Liu",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kristen Soucie",
      "Christine Papa"
     ],
     "a": [
      "Coby Resnick",
      "Lisa Mctague"
     ]
    },
    {
     "t": "male",
     "h": [
      "Eric Luque",
      "David Osborne"
     ],
     "a": [
      "Guy Ohn",
      "Erik Lombardo"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Scott Rubin",
      "John Hauth"
     ],
     "a": [
      "James Gross",
      "Alfonse Calato"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Papa",
      "Todd Stein"
     ],
     "a": [
      "Coby Resnick",
      "James Gross"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Kramer",
      "Eric Luque"
     ],
     "a": [
      "Tara Lombardo",
      "Guy Ohn"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kristen Soucie",
      "John Hauth"
     ],
     "a": [
      "Lisa Mctague",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stacy Garretson",
      "Scott Rubin"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Barbara Hess",
      "Stacy Garretson"
     ],
     "a": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Papa",
      "Kristen Soucie"
     ],
     "a": [
      "Lily Liu",
      "Coby Resnick"
     ]
    },
    {
     "t": "male",
     "h": [
      "David Osborne",
      "Eric Luque"
     ],
     "a": [
      "Alfonse Calato",
      "Guy Ohn"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Scott Rubin",
      "Todd Stein"
     ],
     "a": [
      "Erik Lombardo",
      "Wally Liu"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Papa",
      "Scott Rubin"
     ],
     "a": [
      "Coby Resnick",
      "Alfonse Calato"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Kramer",
      "David Osborne"
     ],
     "a": [
      "Hayley Yandoli",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Barbara Hess",
      "Eric Luque"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Stacy Garretson",
      "John Hauth"
     ],
     "a": [
      "Lisa Mctague",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Papa",
      "Stacy Garretson"
     ],
     "a": [
      "Tara Lombardo",
      "Lily Liu"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kristen Soucie",
      "Tara Kramer"
     ],
     "a": [
      "Hayley Yandoli",
      "Lisa Mctague"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Hauth",
      "David Osborne"
     ],
     "a": [
      "James Gross",
      "Alfonse Calato"
     ]
    },
    {
     "t": "male",
     "h": [
      "Todd Stein",
      "Eric Luque"
     ],
     "a": [
      "Wally Liu",
      "Guy Ohn"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      0,
      1
     ]
    }
   ]
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
   "home": "Pickleball Palace",
   "away": "Stelton Sports",
   "time": "2026-10-31T12:00:00",
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
   "home": "Jersey Pickleball Club",
   "away": "Flemington Blue",
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
   "week": 11,
   "home": "ACE Moorestown",
   "away": "Pickle Place",
   "time": "2026-10-31T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Palace",
   "away": "ACE Moorestown",
   "time": "2026-11-01T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Jersey Pickleball Club",
   "away": "Bounce Malvern Black",
   "time": "2026-11-01T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Allstar Pickler",
   "away": "Flemington Blue",
   "time": "2026-11-01T14:00:00",
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
   "home": "Jersey Pickleball Club",
   "away": "Premiere",
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
   "home": "Bounce Malvern Boom",
   "away": "Pickle Place",
   "time": "2026-11-07T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Pickleball Club",
   "away": "Allstar Pickler",
   "time": "2026-11-08T15:00:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Brooke Obrien": "06b66cca-2292-4bbe-962e-1217c4418e18",
  "Anthony Aloi": "5dbd9fa7-3080-43af-8973-8a83c0da9d56",
  "Virasack Vorabouth": "a478ffa6-7bfc-4c67-9b3d-0aad661a58bc",
  "Joe Palumbo": "b39664c3-1a6e-4493-968f-6e7f7939f694",
  "Xilin Zhao": "bfecc55a-a909-44da-8292-6b59b37a6043",
  "Alex Miller": "d74d4a67-cb90-44d8-aeea-b48fab564427",
  "Yongzhe Tian": "e1a924b8-3b3a-4780-8348-08a730ba61f2",
  "Ben Xie": "ed9f303e-a29c-4172-a72d-6a9a31bf7124"
 },
 "availableSubs": [
  {
   "name": "Ron Skotarczak",
   "playerId": "034ca84d-576b-41d0-ba1c-103104b1be1f",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jacklyn Beck",
   "playerId": "08991f81-441f-4dd8-8332-4a50044d429d",
   "gender": "Female",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Lara Webb",
   "playerId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76",
   "gender": "Female",
   "team": "APC Garden State",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Marr Flores",
   "playerId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Laura Govan",
   "playerId": "110b981a-77ae-42b0-8200-4e30e9ce157a",
   "gender": "Female",
   "team": "Flemington Blue",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Brian Rowan",
   "playerId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kelly Walker",
   "playerId": "13c6962e-5a72-4d69-a262-5010f8390ddd",
   "gender": "Female",
   "team": "APC Garden State",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Mark Fappiano",
   "playerId": "14289b5c-46c9-4728-b43d-9f01eeb74b8d",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Laura Altieri",
   "playerId": "16aee8ed-3398-46f5-bd76-ec71473a2db4",
   "gender": "Female",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Anthony Wands",
   "playerId": "1762a9ad-6493-4407-a0ce-de2de697c313",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Stephen Locker",
   "playerId": "188607ba-a609-4881-87bb-7c997a032cc2",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jaco De Waal",
   "playerId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Charlie Johnston",
   "playerId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Marc Pellicane",
   "playerId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "David Mcintyre",
   "playerId": "1f3700d5-63e4-495e-92c1-1248224ed61d",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Bart Allgeier",
   "playerId": "236ac99f-3ad9-42b7-bb97-a2c238fbbf98",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Cheryl Isbirian",
   "playerId": "23c87311-dae9-47a5-be80-30aab8231ce2",
   "gender": "Female",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Sergey Sprikut",
   "playerId": "28b4b9e6-0b25-473c-8386-2876bf60efab",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jean Rosenbaum",
   "playerId": "2b4a12ef-68c9-4ca5-a8f7-d1d58503bf1c",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dan Loreti",
   "playerId": "2ce4808a-9400-42cb-a756-fa8ecdf2a1eb",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Susan Vinci",
   "playerId": "2d636359-c53e-42db-a769-f58fb7c7a212",
   "gender": "Female",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Yang Ruan",
   "playerId": "313153f7-7e8f-4e60-9340-0e0d1a43d6be",
   "gender": "Female",
   "team": "APC Garden State",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ed Saxman",
   "playerId": "32244c70-6859-44af-a408-8294d65b592d",
   "gender": "Male",
   "team": "Pickle Place",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ritu Chandra",
   "playerId": "37ce598e-d60f-4af8-b043-106d2ea1cdf1",
   "gender": "Female",
   "team": "Flemington Blue",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Peg Varani",
   "playerId": "382737d3-273d-4efd-8ded-d40aaf5c739e",
   "gender": "Female",
   "team": "Pickle Place",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Picky Vorabouth",
   "playerId": "38336cb3-6ff4-4187-abe5-3f0a819d0a0d",
   "gender": "Female",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Yang Wang",
   "playerId": "389300d9-75bf-4c93-9fbc-cab6881f49b4",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Lance Stopek",
   "playerId": "3a249058-9862-4d27-9562-c73c5a685d96",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Steven Gregov",
   "playerId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": false
  },
  {
   "name": "Clifford Luster",
   "playerId": "3f47746a-2105-493a-941a-b15c4b02a520",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "James Shaw",
   "playerId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Thomas Schillow",
   "playerId": "4ab0fd39-c108-419c-80f8-0dbe37dd75be",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kenny Nguyen",
   "playerId": "4af425bc-76cc-44a4-a366-503ab5d0995a",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kim Hamilton",
   "playerId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318",
   "gender": "Female",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Xianguan Li",
   "playerId": "5171167d-c9ee-4c90-abf5-7157d27d6f9e",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Judy Qiu",
   "playerId": "524b4051-2245-4d13-a9ec-2c2aac3ec980",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dottie Kelly",
   "playerId": "57a09a98-991d-47a7-a13d-fb2afa6bd8ef",
   "gender": "Female",
   "team": "Pickle Place",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "John Dechristopher",
   "playerId": "57ad882f-2a78-4756-adcf-3839833ddcd3",
   "gender": "Male",
   "team": "APC Garden State",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Susan Lyle",
   "playerId": "5b600631-57fc-476c-9bbb-6951d5ffd294",
   "gender": "Female",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dave Govan",
   "playerId": "5c1e16e3-303e-48ca-8ad7-77077727394d",
   "gender": "Male",
   "team": "Flemington Blue",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Anthony Aloi",
   "playerId": "5dbd9fa7-3080-43af-8973-8a83c0da9d56",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Danny Mellul",
   "playerId": "5dccd915-178e-4316-8e9b-e0a3db8edfa9",
   "gender": "Male",
   "team": "APC Garden State",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Todd Stein",
   "playerId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Karen Moliver",
   "playerId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9",
   "gender": "Female",
   "team": "Pickle Place",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Roseann Catania",
   "playerId": "67b0e676-9779-4bcb-8c38-86f2c84e1d73",
   "gender": "Female",
   "team": "Flemington Blue",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Johnson Chang",
   "playerId": "6994f1c2-d156-436a-bbb6-e9e348bea33a",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Gretchen Keith",
   "playerId": "6a753670-d9fd-4b11-bd26-ff6214376fb7",
   "gender": "Female",
   "team": "Pickle Place",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andy Ead",
   "playerId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Peter Shen",
   "playerId": "7417eca2-2140-47f9-bd14-be210ba9d630",
   "gender": "Male",
   "team": "Stelton Sports",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Christopher Krecke",
   "playerId": "788eac4e-f5a9-42f5-a1f2-69fc2f299678",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ping Peng",
   "playerId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Cuc Dang",
   "playerId": "817939be-36ae-4a5d-8c02-62138ab71d4c",
   "gender": "Female",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andrea Dellechiaie",
   "playerId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7",
   "gender": "Female",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Lucy Chow",
   "playerId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Michael Finkelstein",
   "playerId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "isCaptain": false,
   "outsideSub": false
  },
  {
   "name": "Amy Maussner",
   "playerId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3",
   "gender": "Female",
   "team": "APC Garden State",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Fabienne Yu",
   "playerId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea",
   "gender": "Female",
   "team": "Flemington Blue",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Lan Bin",
   "playerId": "97ed17e1-9a68-45fe-adf5-f20d33ea7239",
   "gender": "Female",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Virasack Vorabouth",
   "playerId": "a478ffa6-7bfc-4c67-9b3d-0aad661a58bc",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "David Dietzel",
   "playerId": "a792f1c9-2858-416c-a98b-a1b60b785864",
   "gender": "Male",
   "team": "Flemington Blue",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Marek Beck",
   "playerId": "a7e7f77c-ee2e-4de3-a26e-c74576b0fd56",
   "gender": "Male",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Terry Gabel",
   "playerId": "ab357b8a-99d5-4fe3-aae6-25eb07662d7c",
   "gender": "Female",
   "team": "Pickle Place",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Peilin Zhang",
   "playerId": "af7b661e-bc26-4b53-8e7c-e5657bdba32a",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "John Sallo",
   "playerId": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Joe Palumbo",
   "playerId": "b39664c3-1a6e-4493-968f-6e7f7939f694",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": true,
   "outsideSub": true
  },
  {
   "name": "Xilin Zhao",
   "playerId": "bfecc55a-a909-44da-8292-6b59b37a6043",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Scott Rubin",
   "playerId": "c12175df-b959-4efe-95e7-e5298b783da8",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": false
  },
  {
   "name": "James Price",
   "playerId": "c7a0b075-272d-4427-98c0-02955690731f",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jieping Wang",
   "playerId": "c9088878-9755-4e32-abed-4a4e5a42f9a8",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Sachin Pathare",
   "playerId": "cb93ea73-1422-4b53-9665-41182caba8c8",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Greg Schipske",
   "playerId": "cdd3c5e6-7a40-4b65-a175-7910ba8e9ef9",
   "gender": "Male",
   "team": "APC Garden State",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Matt Hancock",
   "playerId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Gary Garretson",
   "playerId": "d4126276-6b83-42be-b943-9957df46992c",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "David Eisen",
   "playerId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361",
   "gender": "Male",
   "team": "Pickle Place",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Alex Miller",
   "playerId": "d74d4a67-cb90-44d8-aeea-b48fab564427",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Liby Saigal",
   "playerId": "dc2026ad-428a-4822-ae40-889727c35b10",
   "gender": "Female",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kevin Jackson",
   "playerId": "de010831-4d74-40f1-8807-75b0d0447124",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Yongzhe Tian",
   "playerId": "e1a924b8-3b3a-4780-8348-08a730ba61f2",
   "gender": "Male",
   "team": "APC Garden State",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Rick Vazquez",
   "playerId": "e532dafb-ff0f-43fc-82be-687d34ab8c14",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Joseph Yi",
   "playerId": "e882fe51-042a-4368-b34f-fbabad19d7c1",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Michael Palmer",
   "playerId": "e8e215ab-475a-4265-8095-f7c872cd6c56",
   "gender": "Male",
   "team": "Flemington Green",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "John Rogers",
   "playerId": "ea556dfe-e3ee-4ad0-ba0f-62e1e9f6bf89",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ben Xie",
   "playerId": "ed9f303e-a29c-4172-a72d-6a9a31bf7124",
   "gender": "Male",
   "team": "Stelton Sports",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Wendy Zukerberg",
   "playerId": "f34665bd-6866-415f-a498-21d7f69fb895",
   "gender": "Female",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Guy Ohn",
   "playerId": "f394b637-236e-4fee-b26f-374c90c3dd1e",
   "gender": "Male",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Yang Xu",
   "playerId": "f607099c-35f9-448c-9077-1792b245f68e",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Albert Pamudji",
   "playerId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2",
   "gender": "Male",
   "team": "Flemington Blue",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Julio Vidal",
   "playerId": "fc3b9b5a-304a-47b3-bf34-d553c4873ccf",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  }
 ],
 "meta": {
  "matchesPlayed": 50,
  "provisionalMatches": 1,
  "weeks": "1-10",
  "totalPlayers": 255,
  "ratingHistoryWeeks": [
   {
    "week": 1,
    "label": "1",
    "seq": 0
   },
   {
    "week": 2,
    "label": "2",
    "seq": 2
   },
   {
    "week": 4,
    "label": "4",
    "seq": 3
   },
   {
    "week": 5,
    "label": "5",
    "seq": 4
   },
   {
    "week": 6,
    "label": "6a",
    "seq": 5
   },
   {
    "week": 6,
    "label": "6b",
    "seq": 6
   },
   {
    "week": 6,
    "label": "6c",
    "seq": 7
   },
   {
    "week": 7,
    "label": "7a",
    "seq": 8
   },
   {
    "week": 7,
    "label": "7b",
    "seq": 9
   },
   {
    "week": 8,
    "label": "8",
    "seq": 10
   },
   {
    "week": 9,
    "label": "9a",
    "seq": 11
   },
   {
    "week": 9,
    "label": "9b",
    "seq": 12
   },
   {
    "week": 10,
    "label": "10",
    "seq": 13
   }
  ],
  "divisionSlug": "2edc44e7",
  "hasPlayoffs": false,
  "typicalDay": "Saturdays",
  "detailFile": "compiled/detail-2edc44e7.js",
  "clubName": "",
  "divisionName": "4.0 (50+)",
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
   "crossPodMatchups": 12,
   "totalMatchups": 72,
   "reported": {
    "North": [
     "Allstar Pickler",
     "Flemington Blue",
     "Jersey Pickleball Club",
     "Pickleball Palace",
     "Premiere",
     "Stelton Sports"
    ],
    "South": [
     "ACE Moorestown",
     "APC Garden State",
     "Bounce Malvern Black",
     "Bounce Malvern Boom",
     "Flemington Green",
     "Pickle Place"
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
  DATA.meta.asOf = "2026-10-25T10:25:43.987Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["2edc44e7"] = DATA;
})();
