(function () {
  const DATA = {
 "players": [
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
   "playerId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "winPct": 100,
   "diff": 55,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 3.2,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.3
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
   "leagueRank": 4,
   "rating": 2.3,
   "ratingGames": 7,
   "confidence": 45,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.5
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
   "playerId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "winPct": 100,
   "diff": 51,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 2.5,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.4
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
   "leagueRank": 5,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1.6
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
   "playerId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59",
   "winPct": 100,
   "diff": 46,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 3.4,
   "ratingGames": 6,
   "confidence": 41,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1
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
   "playerId": "f5831f41-366b-4666-b780-448fc7971ad7",
   "winPct": 100,
   "diff": 44,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 2.1,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.9
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
   "playerId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3",
   "winPct": 100,
   "diff": 34,
   "ppg": 21,
   "leagueRank": 7,
   "rating": 0.9,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1.7
  },
  {
   "name": "Sue Johnson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 1,
   "wins": 1,
   "losses": 0,
   "pointsWon": 21,
   "totalPointsAgainst": 13,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "c6046610-1dba-4bad-bc89-57e5baa0983f",
   "winPct": 100,
   "diff": 8,
   "ppg": 21,
   "leagueRank": 26,
   "rating": 0.7,
   "ratingGames": 1,
   "confidence": 16,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.6
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 127,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "winPct": 87.5,
   "diff": 39,
   "ppg": 20.8,
   "leagueRank": 8,
   "rating": 1.6,
   "ratingGames": 8,
   "confidence": 48,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.1
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 165,
   "totalPointsAgainst": 127,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "winPct": 87.5,
   "diff": 38,
   "ppg": 20.6,
   "leagueRank": 9,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 44,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.9
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
   "playerId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "winPct": 87.5,
   "diff": 24,
   "ppg": 20.8,
   "leagueRank": 12,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.5
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
   "playerId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "winPct": 85.7,
   "diff": 46,
   "ppg": 20.7,
   "leagueRank": 10,
   "rating": 2.1,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.9
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
   "playerId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "winPct": 85.7,
   "diff": 29,
   "ppg": 20.6,
   "leagueRank": 11,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2
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
   "playerId": "eab86a29-43ef-4b31-ba94-928f57f56c9c",
   "winPct": 83.3,
   "diff": 26,
   "ppg": 20.2,
   "leagueRank": 13,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1
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
   "playerId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3",
   "winPct": 83.3,
   "diff": 19,
   "ppg": 20.2,
   "leagueRank": 15,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.2
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
   "playerId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "winPct": 83.3,
   "diff": 17,
   "ppg": 20.2,
   "leagueRank": 16,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1.2
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
   "leagueRank": 14,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Robert Finley",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 160,
   "totalPointsAgainst": 139,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "winPct": 75,
   "diff": 21,
   "ppg": 20,
   "leagueRank": 18,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6
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
   "playerId": "422cd941-43db-4123-a07e-3316583f51ee",
   "winPct": 75,
   "diff": 18,
   "ppg": 19.8,
   "leagueRank": 19,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1
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
   "playerId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894",
   "winPct": 71.4,
   "diff": 15,
   "ppg": 19.7,
   "leagueRank": 17,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.3
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
   "playerId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "winPct": 71.4,
   "diff": 3,
   "ppg": 19.9,
   "leagueRank": 21,
   "rating": 0.8,
   "ratingGames": 7,
   "confidence": 44,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4
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
   "leagueRank": 23,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.8
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
   "playerId": "aaddf7e8-7ad2-4472-a8bd-89e6d5abc78c",
   "winPct": 66.7,
   "diff": 12,
   "ppg": 19.8,
   "leagueRank": 27,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1
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
   "playerId": "5b11ac59-091a-46d3-beb5-2d65d5d77135",
   "winPct": 66.7,
   "diff": 11,
   "ppg": 20,
   "leagueRank": 20,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4
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
   "playerId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "winPct": 62.5,
   "diff": 19,
   "ppg": 20,
   "leagueRank": 22,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1
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
   "playerId": "eeead4e9-eec9-4cfc-887d-44222225d436",
   "winPct": 62.5,
   "diff": 16,
   "ppg": 19.3,
   "leagueRank": 25,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3
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
   "leagueRank": 24,
   "rating": 0.3,
   "ratingGames": 8,
   "confidence": 50,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Patricia Boyle",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 154,
   "totalPointsAgainst": 143,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "9fca325b-c7aa-493e-bd24-a4b782073699",
   "winPct": 62.5,
   "diff": 11,
   "ppg": 19.3,
   "leagueRank": 30,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 48,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Amy Johnson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 92,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "winPct": 60,
   "diff": 9,
   "ppg": 20.2,
   "leagueRank": 28,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1
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
   "leagueRank": 29,
   "rating": 1.7,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Tom Maley",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 124,
   "totalPointsAgainst": 126,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4",
   "winPct": 57.1,
   "diff": -2,
   "ppg": 17.7,
   "leagueRank": 36,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4
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
   "playerId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2",
   "winPct": 57.1,
   "diff": -7,
   "ppg": 17.9,
   "leagueRank": 35,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Liangjie Zhu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 154,
   "totalPointsAgainst": 140,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "winPct": 50,
   "diff": 14,
   "ppg": 19.3,
   "leagueRank": 31,
   "rating": 1.8,
   "ratingGames": 8,
   "confidence": 51,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Sandy Alkins",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 155,
   "totalPointsAgainst": 147,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b",
   "winPct": 50,
   "diff": 8,
   "ppg": 19.4,
   "leagueRank": 34,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5
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
   "playerId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "winPct": 50,
   "diff": 4,
   "ppg": 18.8,
   "leagueRank": 32,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Art Muth",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 77,
   "totalPointsAgainst": 79,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "winPct": 50,
   "diff": -2,
   "ppg": 19.3,
   "leagueRank": 37,
   "rating": -0.6,
   "ratingGames": 4,
   "confidence": 37,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3
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
   "playerId": "e05f57f5-c898-404e-b86f-c2460cc23b06",
   "winPct": 50,
   "diff": -3,
   "ppg": 18.8,
   "leagueRank": 33,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 105,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "winPct": 50,
   "diff": -12,
   "ppg": 17.5,
   "leagueRank": 42,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Marc Friedman",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 130,
   "totalPointsAgainst": 130,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "d7bdde76-1007-4b20-a804-4efcd08c3598",
   "winPct": 42.9,
   "diff": 0,
   "ppg": 18.6,
   "leagueRank": 41,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.1
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
   "playerId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169",
   "winPct": 42.9,
   "diff": -4,
   "ppg": 19.6,
   "leagueRank": 39,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1
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
   "playerId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "winPct": 42.9,
   "diff": -16,
   "ppg": 17.1,
   "leagueRank": 46,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Kate Siedell",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 157,
   "totalPointsAgainst": 146,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "winPct": 37.5,
   "diff": 11,
   "ppg": 19.6,
   "leagueRank": 38,
   "rating": 0.5,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0
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
   "playerId": "d156a552-7fa9-488e-9bfa-745feb859950",
   "winPct": 37.5,
   "diff": 1,
   "ppg": 18.9,
   "leagueRank": 43,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0
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
   "playerId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4",
   "winPct": 37.5,
   "diff": -10,
   "ppg": 18.5,
   "leagueRank": 47,
   "rating": -1.6,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2
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
   "playerId": "a018e2a6-8278-4354-8802-810742e62edf",
   "winPct": 37.5,
   "diff": -13,
   "ppg": 18.6,
   "leagueRank": 45,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 50,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6
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
   "playerId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "winPct": 37.5,
   "diff": -19,
   "ppg": 17.4,
   "leagueRank": 50,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.8
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
   "playerId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3",
   "winPct": 33.3,
   "diff": 11,
   "ppg": 19.7,
   "leagueRank": 40,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.9
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
   "playerId": "6bfd212d-c7b4-4eff-ae3c-5e9424080282",
   "winPct": 33.3,
   "diff": -2,
   "ppg": 19.3,
   "leagueRank": 44,
   "rating": -0.5,
   "ratingGames": 3,
   "confidence": 31,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0
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
   "playerId": "579cead3-d960-4c14-8905-8c17c70ca003",
   "winPct": 33.3,
   "diff": -7,
   "ppg": 18,
   "leagueRank": 48,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6
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
   "playerId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "winPct": 33.3,
   "diff": -10,
   "ppg": 18.3,
   "leagueRank": 49,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.4
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
   "playerId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d",
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17,
   "leagueRank": 52,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5
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
   "playerId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "winPct": 33.3,
   "diff": -18,
   "ppg": 16.8,
   "leagueRank": 53,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3
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
   "playerId": "c0851114-0611-4b02-9589-fd249179eabc",
   "winPct": 33.3,
   "diff": -22,
   "ppg": 16.2,
   "leagueRank": 54,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1
  },
  {
   "name": "Stepan Nevshehirlian",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 91,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383",
   "winPct": 33.3,
   "diff": -28,
   "ppg": 15.2,
   "leagueRank": 56,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.2
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
   "playerId": "476c99a2-15e5-4e99-8471-7c2b6394faa3",
   "winPct": 28.6,
   "diff": -29,
   "ppg": 16.3,
   "leagueRank": 57,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7
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
   "leagueRank": 51,
   "rating": -0.2,
   "ratingGames": 4,
   "confidence": 36,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Jorge Diaz",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 66,
   "totalPointsAgainst": 77,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "5384ac1d-574b-4fe8-9360-010e903e9ec0",
   "winPct": 25,
   "diff": -11,
   "ppg": 16.5,
   "leagueRank": 58,
   "rating": -0.9,
   "ratingGames": 4,
   "confidence": 38,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2
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
   "playerId": "ce787b4f-30b9-4fd0-a12a-caba1f27ca68",
   "winPct": 16.7,
   "diff": -21,
   "ppg": 17.2,
   "leagueRank": 59,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 42,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5
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
   "playerId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "winPct": 16.7,
   "diff": -25,
   "ppg": 16,
   "leagueRank": 60,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7
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
   "playerId": "754a47b8-0711-4929-928f-9bafe8f9dbc0",
   "winPct": 16.7,
   "diff": -32,
   "ppg": 15,
   "leagueRank": 64,
   "rating": -2.6,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Derek Livingston",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 87,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "winPct": 16.7,
   "diff": -37,
   "ppg": 14.5,
   "leagueRank": 62,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "John Darrah",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 126,
   "totalPointsAgainst": 142,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84",
   "winPct": 14.3,
   "diff": -16,
   "ppg": 18,
   "leagueRank": 55,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Ronnie Yin",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 106,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "988636eb-4604-44d6-af70-2732b787ec2a",
   "winPct": 14.3,
   "diff": -39,
   "ppg": 15.1,
   "leagueRank": 65,
   "rating": -1.8,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Evelyn Du",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 103,
   "totalPointsAgainst": 144,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "winPct": 14.3,
   "diff": -41,
   "ppg": 14.7,
   "leagueRank": 66,
   "rating": -2,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.3
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
   "playerId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "winPct": 12.5,
   "diff": -27,
   "ppg": 17.4,
   "leagueRank": 61,
   "rating": -1.3,
   "ratingGames": 8,
   "confidence": 51,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5
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
   "playerId": "b146d15b-2ed7-4087-a6a0-90d4538aea72",
   "winPct": 12.5,
   "diff": -46,
   "ppg": 14.6,
   "leagueRank": 63,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Tim Bruno",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 108,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f",
   "winPct": 0,
   "diff": -39,
   "ppg": 15.4,
   "leagueRank": 68,
   "rating": -0.7,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.5
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
   "playerId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "winPct": 0,
   "diff": -40,
   "ppg": 16,
   "leagueRank": 69,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 50,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.8
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
   "playerId": "c94ae231-9f0c-4212-b769-7bd708d8fc38",
   "winPct": 0,
   "diff": -44,
   "ppg": 15.5,
   "leagueRank": 67,
   "rating": -1.6,
   "ratingGames": 8,
   "confidence": 49,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.1
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
   "playerId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "winPct": 0,
   "diff": -52,
   "ppg": 12.3,
   "leagueRank": 72,
   "rating": -3.9,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Laura Sweet",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 112,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "winPct": 0,
   "diff": -56,
   "ppg": 14,
   "leagueRank": 70,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Kelly Dalsey",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 109,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "winPct": 0,
   "diff": -59,
   "ppg": 13.6,
   "leagueRank": 71,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.2
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
   "power": 1.2,
   "powerRank": 1,
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
   "name": "Flemington Blue",
   "w": 1,
   "l": 0,
   "pf": 483,
   "pa": 426,
   "gw": 24,
   "gl": 8,
   "diff": 57,
   "gameDiff": 16,
   "power": 0.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     13,
     3
    ],
    "male": [
     3,
     5
    ],
    "female": [
     8,
     0
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 1,
   "l": 0,
   "pf": 656,
   "pa": 582,
   "gw": 21,
   "gl": 11,
   "diff": 74,
   "gameDiff": 10,
   "power": 0.5,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     9,
     7
    ],
    "male": [
     8,
     0
    ],
    "female": [
     4,
     4
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
   "powerRank": 4,
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
   "powerRank": 5,
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
   "name": "Bounce Malvern Black",
   "w": 0,
   "l": 1,
   "pf": 582,
   "pa": 656,
   "gw": 11,
   "gl": 21,
   "diff": -74,
   "gameDiff": -10,
   "power": -0.5,
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
   "l": 1,
   "pf": 426,
   "pa": 483,
   "gw": 8,
   "gl": 24,
   "diff": -57,
   "gameDiff": -16,
   "power": -0.4,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     3,
     13
    ],
    "male": [
     5,
     3
    ],
    "female": [
     0,
     8
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 0,
   "l": 1,
   "pf": 493,
   "pa": 668,
   "gw": 3,
   "gl": 29,
   "diff": -175,
   "gameDiff": -26,
   "power": -1.2,
   "powerRank": 8,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     1,
     15
    ],
    "male": [
     2,
     6
    ],
    "female": [
     0,
     8
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 0,
   "l": 0,
   "pf": 0,
   "pa": 0,
   "gw": 0,
   "gl": 0,
   "diff": 0,
   "gameDiff": 0,
   "power": null,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     0,
     0
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 0,
   "l": 0,
   "pf": 0,
   "pa": 0,
   "gw": 0,
   "gl": 0,
   "diff": 0,
   "gameDiff": 0,
   "power": null,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     0,
     0
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 0,
   "l": 0,
   "pf": 0,
   "pa": 0,
   "gw": 0,
   "gl": 0,
   "diff": 0,
   "gameDiff": 0,
   "power": null,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     0,
     0
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Stelton Sports",
   "w": 0,
   "l": 0,
   "pf": 0,
   "pa": 0,
   "gw": 0,
   "gl": 0,
   "diff": 0,
   "gameDiff": 0,
   "power": null,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     0,
     0
    ],
    "female": [
     0,
     0
    ]
   }
  }
 ],
 "duos": [],
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
   "result": null,
   "week": 2,
   "home": "Premiere",
   "away": "Jersey Pickleball Club",
   "time": "2026-08-29T10:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Pickleball Palace",
   "away": "Allstar Pickler",
   "time": "2026-08-29T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Flemington Blue",
   "away": "Stelton Sports",
   "time": "2026-08-29T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Pickle Place",
   "away": "Bounce Malvern Boom",
   "time": "2026-08-29T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "ACE Moorestown",
   "away": "APC Garden State",
   "time": "2026-08-29T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Bounce Malvern Black",
   "away": "Flemington Green",
   "time": "2026-08-30T14:00:00",
   "complete": false
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
 "meta": {
  "matchesPlayed": 4,
  "weeks": "1",
  "totalPlayers": 72,
  "ratingHistoryWeeks": [
   1
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
  DATA.meta.asOf = "2026-08-25";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["2edc44e7"] = DATA;
})();
