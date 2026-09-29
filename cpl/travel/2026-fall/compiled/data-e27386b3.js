(function () {
  const DATA = {
 "players": [
  {
   "name": "Veronica Rosas",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 74,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 52,
   "ppg": 21,
   "leagueRank": 80,
   "rating": 3.8,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -1.5,
   "playerId": "abab39fe-af60-4956-9f97-460189ab90dc"
  },
  {
   "name": "Jessica Neglia",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 59,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 46,
   "ppg": 21,
   "leagueRank": 93,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -4.3,
   "playerId": "7c876269-7c67-41a9-9857-2dae62608a57"
  },
  {
   "name": "Paul Mattessich",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 96,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 30,
   "ppg": 21,
   "leagueRank": 99,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.9,
   "playerId": "274efbd2-5814-4956-834d-b6389c1b2f1c"
  },
  {
   "name": "Manuel Martorell",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 27,
   "ppg": 21,
   "leagueRank": 112,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -2.4,
   "playerId": "df4f8592-f2f0-4913-a881-54cf6afaf148"
  },
  {
   "name": "Sarah Dente",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 29,
   "losses": 2,
   "pointsWon": 641,
   "totalPointsAgainst": 455,
   "mixedWins": 13,
   "mixedLosses": 2,
   "genderWins": 16,
   "genderLosses": 0,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 93.5,
   "diff": 186,
   "ppg": 20.7,
   "leagueRank": 1,
   "rating": 3.7,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.1,
   "playerId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f"
  },
  {
   "name": "Vanessa Tortorice",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 24,
   "losses": 2,
   "pointsWon": 540,
   "totalPointsAgainst": 370,
   "mixedWins": 12,
   "mixedLosses": 1,
   "genderWins": 12,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 92.3,
   "diff": 170,
   "ppg": 20.8,
   "leagueRank": 5,
   "rating": 1.9,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": -0.9,
   "playerId": "818811e5-0eb6-4611-8ac3-f65c10316305"
  },
  {
   "name": "Salini Sontyana",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 262,
   "totalPointsAgainst": 202,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 92.3,
   "diff": 60,
   "ppg": 20.2,
   "leagueRank": 29,
   "rating": 0.4,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.4,
   "playerId": "591f053c-743f-44e3-83da-6ad000b7e992"
  },
  {
   "name": "Kevin Altieri",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 19,
   "losses": 2,
   "pointsWon": 426,
   "totalPointsAgainst": 294,
   "mixedWins": 8,
   "mixedLosses": 1,
   "genderWins": 11,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 90.5,
   "diff": 132,
   "ppg": 20.3,
   "leagueRank": 8,
   "rating": 0.5,
   "ratingGames": 21,
   "confidence": 79,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": -1.7,
   "playerId": "9b8a71a7-9173-4757-8937-8364922234ef"
  },
  {
   "name": "Kimberley Levins",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 18,
   "losses": 2,
   "pointsWon": 413,
   "totalPointsAgainst": 238,
   "mixedWins": 10,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 90,
   "diff": 175,
   "ppg": 20.7,
   "leagueRank": 2,
   "rating": 4,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -0.8,
   "playerId": "c132bfd5-ae12-478d-86bc-e483f85cb26a"
  },
  {
   "name": "Stephen Fredericksen",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 17,
   "losses": 2,
   "pointsWon": 393,
   "totalPointsAgainst": 313,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 1,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 89.5,
   "diff": 80,
   "ppg": 20.7,
   "leagueRank": 7,
   "rating": 2.2,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "name": "Cesar Alvarez",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 31,
   "losses": 4,
   "pointsWon": 723,
   "totalPointsAgainst": 522,
   "mixedWins": 16,
   "mixedLosses": 1,
   "genderWins": 15,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 88.6,
   "diff": 201,
   "ppg": 20.7,
   "leagueRank": 4,
   "rating": 4.9,
   "ratingGames": 35,
   "confidence": 84,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.7,
   "playerId": "3b7c9eab-a6e2-4e8d-b0f6-bb9a6b6dc0eb"
  },
  {
   "name": "Michele Costigan",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 20,
   "losses": 3,
   "pointsWon": 462,
   "totalPointsAgainst": 353,
   "mixedWins": 12,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 87,
   "diff": 109,
   "ppg": 20.1,
   "leagueRank": 9,
   "rating": 3.5,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "fda078f4-e367-425d-9f16-501fdb5088e8"
  },
  {
   "name": "Halimah Maideen",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 20,
   "losses": 3,
   "pointsWon": 466,
   "totalPointsAgainst": 373,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 11,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 87,
   "diff": 93,
   "ppg": 20.3,
   "leagueRank": 11,
   "rating": 2.8,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "5ad51afd-7edc-43c3-b279-8c57c54cc38c"
  },
  {
   "name": "Alina Allakhveranova",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 19,
   "losses": 3,
   "pointsWon": 447,
   "totalPointsAgainst": 324,
   "mixedWins": 9,
   "mixedLosses": 2,
   "genderWins": 10,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 86.4,
   "diff": 123,
   "ppg": 20.3,
   "leagueRank": 10,
   "rating": 3,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": 0.3,
   "playerId": "bbf13d1a-5393-4549-9d15-c5d2975f3e55"
  },
  {
   "name": "Yash Mehta",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 37,
   "losses": 6,
   "pointsWon": 883,
   "totalPointsAgainst": 577,
   "mixedWins": 19,
   "mixedLosses": 2,
   "genderWins": 18,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 86,
   "diff": 306,
   "ppg": 20.5,
   "leagueRank": 3,
   "rating": 7.2,
   "ratingGames": 43,
   "confidence": 88,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "adc25ed0-4bc3-47da-9509-4caeb8f90185"
  },
  {
   "name": "Thomas Carretta",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 290,
   "totalPointsAgainst": 165,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 85.7,
   "diff": 125,
   "ppg": 20.7,
   "leagueRank": 6,
   "rating": 3.2,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -1.3,
   "playerId": "7aaf5ebf-3b96-4c58-9c7d-ae33fb1b9d7c"
  },
  {
   "name": "Allison Sobieski",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 20,
   "wins": 17,
   "losses": 3,
   "pointsWon": 399,
   "totalPointsAgainst": 278,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 85,
   "diff": 121,
   "ppg": 20,
   "leagueRank": 17,
   "rating": 2.1,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": -0.5,
   "playerId": "7a2cb26b-6e52-4dbd-bab4-83536f4500bb"
  },
  {
   "name": "Chris Balta",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 22,
   "losses": 4,
   "pointsWon": 528,
   "totalPointsAgainst": 386,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 14,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 84.6,
   "diff": 142,
   "ppg": 20.3,
   "leagueRank": 19,
   "rating": 1.2,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": -0.9,
   "playerId": "2be2d2b6-177e-4378-a33d-49005788a7fd"
  },
  {
   "name": "Marcus Burritt",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 38,
   "losses": 7,
   "pointsWon": 907,
   "totalPointsAgainst": 741,
   "mixedWins": 20,
   "mixedLosses": 3,
   "genderWins": 18,
   "genderLosses": 4,
   "clutchWins": 10,
   "clutchLosses": 1,
   "winPct": 84.4,
   "diff": 166,
   "ppg": 20.2,
   "leagueRank": 16,
   "rating": 4,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "9605152c-b88b-40bd-b870-e2ea577e376a"
  },
  {
   "name": "Eva Rodriguez",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 38,
   "wins": 32,
   "losses": 6,
   "pointsWon": 779,
   "totalPointsAgainst": 601,
   "mixedWins": 16,
   "mixedLosses": 2,
   "genderWins": 16,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 84.2,
   "diff": 178,
   "ppg": 20.5,
   "leagueRank": 13,
   "rating": 1.9,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": 3.5,
   "strengthOfOpponents": 0.5,
   "playerId": "899c49f1-1839-4eb3-b87e-26a2dba51764"
  },
  {
   "name": "Thuy Le",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 16,
   "losses": 3,
   "pointsWon": 393,
   "totalPointsAgainst": 323,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 84.2,
   "diff": 70,
   "ppg": 20.7,
   "leagueRank": 12,
   "rating": 3.1,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "name": "Zyanya Flores",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 31,
   "losses": 6,
   "pointsWon": 733,
   "totalPointsAgainst": 530,
   "mixedWins": 17,
   "mixedLosses": 2,
   "genderWins": 14,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 83.8,
   "diff": 203,
   "ppg": 19.8,
   "leagueRank": 22,
   "rating": 2.3,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.4,
   "playerId": "148bddd6-0d6a-468a-903d-84ba2da82239"
  },
  {
   "name": "Holden Smith",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 20,
   "losses": 4,
   "pointsWon": 483,
   "totalPointsAgainst": 377,
   "mixedWins": 11,
   "mixedLosses": 1,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 83.3,
   "diff": 106,
   "ppg": 20.1,
   "leagueRank": 14,
   "rating": 3.6,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "679d2999-1bf2-40ae-a420-9edf09aa8723"
  },
  {
   "name": "Kay Defilippo",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 115,
   "totalPointsAgainst": 115,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 0,
   "ppg": 19.2,
   "leagueRank": 205,
   "rating": -2,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.8,
   "playerId": "688f64da-600b-4449-b9dc-fd2cab2a25a9"
  },
  {
   "name": "Michael Alfaro",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 29,
   "wins": 24,
   "losses": 5,
   "pointsWon": 588,
   "totalPointsAgainst": 439,
   "mixedWins": 16,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 82.8,
   "diff": 149,
   "ppg": 20.3,
   "leagueRank": 20,
   "rating": 2.1,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": -0.1,
   "playerId": "d060c2f3-016e-4260-97fc-d0cbea4415f5"
  },
  {
   "name": "Chris Alworth",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 14,
   "losses": 3,
   "pointsWon": 351,
   "totalPointsAgainst": 260,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 82.4,
   "diff": 91,
   "ppg": 20.6,
   "leagueRank": 15,
   "rating": 2.8,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.1,
   "playerId": "286cbda4-8288-4a14-931c-f84521407eb7"
  },
  {
   "name": "Kellie Roshak",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 30,
   "losses": 7,
   "pointsWon": 754,
   "totalPointsAgainst": 581,
   "mixedWins": 14,
   "mixedLosses": 3,
   "genderWins": 16,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 81.1,
   "diff": 173,
   "ppg": 20.4,
   "leagueRank": 18,
   "rating": 3.5,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "fd9c829a-50de-40a1-8342-7a6afe0fc7b4"
  },
  {
   "name": "Ryan Peixoto",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 28,
   "losses": 7,
   "pointsWon": 695,
   "totalPointsAgainst": 556,
   "mixedWins": 16,
   "mixedLosses": 4,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 9,
   "clutchLosses": 2,
   "winPct": 80,
   "diff": 139,
   "ppg": 19.9,
   "leagueRank": 25,
   "rating": 2.7,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "95fdba0f-fc53-412d-b050-19808558761f"
  },
  {
   "name": "James Cooper",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 20,
   "losses": 5,
   "pointsWon": 506,
   "totalPointsAgainst": 411,
   "mixedWins": 11,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 80,
   "diff": 95,
   "ppg": 20.2,
   "leagueRank": 32,
   "rating": 1.6,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0,
   "playerId": "37355d05-aa6b-42d5-a4a2-874c8774bb5d"
  },
  {
   "name": "Filomena Rega",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 16,
   "losses": 4,
   "pointsWon": 397,
   "totalPointsAgainst": 325,
   "mixedWins": 10,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 72,
   "ppg": 19.9,
   "leagueRank": 35,
   "rating": 0.8,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.2,
   "playerId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "name": "Holly Siu",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 200,
   "totalPointsAgainst": 170,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 30,
   "ppg": 20,
   "leagueRank": 105,
   "rating": 0.8,
   "ratingGames": 10,
   "confidence": 67,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0,
   "playerId": "a791b8f6-0e4e-4f6c-afdf-48fa30ef9069"
  },
  {
   "name": "Lionell Matthews",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 22,
   "losses": 6,
   "pointsWon": 576,
   "totalPointsAgainst": 434,
   "mixedWins": 12,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 78.6,
   "diff": 142,
   "ppg": 20.6,
   "leagueRank": 24,
   "rating": 2,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.4,
   "playerId": "331d44ad-9004-4801-9978-45938dc3272d"
  },
  {
   "name": "Meggie Hodgson",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 22,
   "losses": 6,
   "pointsWon": 561,
   "totalPointsAgainst": 462,
   "mixedWins": 12,
   "mixedLosses": 3,
   "genderWins": 10,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 78.6,
   "diff": 99,
   "ppg": 20,
   "leagueRank": 27,
   "rating": 2.9,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "6386e6cb-1a79-4148-ba25-d735ad30054c"
  },
  {
   "name": "Huifang Yao",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 18,
   "losses": 5,
   "pointsWon": 469,
   "totalPointsAgainst": 357,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 78.3,
   "diff": 112,
   "ppg": 20.4,
   "leagueRank": 23,
   "rating": 2.5,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.1,
   "playerId": "0678b5e4-cf92-49cb-8689-2d90cc356950"
  },
  {
   "name": "John Danks",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 18,
   "losses": 5,
   "pointsWon": 464,
   "totalPointsAgainst": 369,
   "mixedWins": 13,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 78.3,
   "diff": 95,
   "ppg": 20.2,
   "leagueRank": 21,
   "rating": 3.8,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7,
   "playerId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "name": "Andrea Popovich",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 7,
   "losses": 2,
   "pointsWon": 180,
   "totalPointsAgainst": 140,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 77.8,
   "diff": 40,
   "ppg": 20,
   "leagueRank": 136,
   "rating": 1.9,
   "ratingGames": 9,
   "confidence": 65,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "bb972ecf-d484-48e5-a77c-1a7389abe438"
  },
  {
   "name": "Mai Chan",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 13,
   "losses": 4,
   "pointsWon": 333,
   "totalPointsAgainst": 254,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 76.5,
   "diff": 79,
   "ppg": 19.6,
   "leagueRank": 28,
   "rating": 2.6,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.8,
   "playerId": "e24d689e-39dd-4423-a9db-0fae7bcc51b4"
  },
  {
   "name": "Kevin Algarme",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 19,
   "losses": 6,
   "pointsWon": 497,
   "totalPointsAgainst": 403,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 76,
   "diff": 94,
   "ppg": 19.9,
   "leagueRank": 34,
   "rating": 2.3,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0.6,
   "playerId": "af1295ea-6786-47fd-8c51-dae10f13070a"
  },
  {
   "name": "Rhys Gardiner",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 19,
   "losses": 6,
   "pointsWon": 494,
   "totalPointsAgainst": 419,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 10,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 76,
   "diff": 75,
   "ppg": 19.8,
   "leagueRank": 30,
   "rating": 4.1,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1,
   "playerId": "084d4f59-84ab-40bb-8503-0495501e1ea9"
  },
  {
   "name": "Kerry Eskay",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 28,
   "losses": 9,
   "pointsWon": 748,
   "totalPointsAgainst": 568,
   "mixedWins": 12,
   "mixedLosses": 6,
   "genderWins": 16,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 75.7,
   "diff": 180,
   "ppg": 20.2,
   "leagueRank": 26,
   "rating": 3.6,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "8dc8f169-bf38-463a-b8a0-6c238e275325"
  },
  {
   "name": "Charlene De Lara",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 27,
   "losses": 9,
   "pointsWon": 714,
   "totalPointsAgainst": 591,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 17,
   "genderLosses": 0,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 123,
   "ppg": 19.8,
   "leagueRank": 37,
   "rating": 2.1,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "16f9fddd-e9cd-4e65-9090-2764c44fc74a"
  },
  {
   "name": "Suzane Sullivan",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 27,
   "losses": 9,
   "pointsWon": 720,
   "totalPointsAgainst": 598,
   "mixedWins": 14,
   "mixedLosses": 4,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 122,
   "ppg": 20,
   "leagueRank": 36,
   "rating": 2.3,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6"
  },
  {
   "name": "Raymond Duong",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 404,
   "totalPointsAgainst": 337,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 10,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 67,
   "ppg": 20.2,
   "leagueRank": 33,
   "rating": 3.1,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "9b7fad1a-a312-4d60-94e8-a1e138bb38fb"
  },
  {
   "name": "Josh Ruble",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 18,
   "losses": 6,
   "pointsWon": 471,
   "totalPointsAgainst": 417,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 54,
   "ppg": 19.6,
   "leagueRank": 46,
   "rating": 2,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "c44c6a71-87d4-4003-8fcb-bb812a3307a3"
  },
  {
   "name": "Brittni Veyna",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 161,
   "totalPointsAgainst": 129,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 32,
   "ppg": 20.1,
   "leagueRank": 94,
   "rating": 3.1,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "bf60680b-003f-4083-b6ce-25bf3a7cd964"
  },
  {
   "name": "Megan Quigley",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 29,
   "losses": 10,
   "pointsWon": 768,
   "totalPointsAgainst": 623,
   "mixedWins": 12,
   "mixedLosses": 7,
   "genderWins": 17,
   "genderLosses": 3,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 74.4,
   "diff": 145,
   "ppg": 19.7,
   "leagueRank": 31,
   "rating": 4.4,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "37d69abc-9610-4c03-a618-f905bd0e2fb1"
  },
  {
   "name": "Srinath Katari",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 374,
   "totalPointsAgainst": 327,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 73.7,
   "diff": 47,
   "ppg": 19.7,
   "leagueRank": 53,
   "rating": 0.7,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "abd6070d-3dd7-4313-b27e-2f2c702d0dd5"
  },
  {
   "name": "Carlos Echenique",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 25,
   "losses": 9,
   "pointsWon": 678,
   "totalPointsAgainst": 547,
   "mixedWins": 12,
   "mixedLosses": 4,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 73.5,
   "diff": 131,
   "ppg": 19.9,
   "leagueRank": 38,
   "rating": 1.8,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.2,
   "playerId": "74530d59-ff19-42a4-87d4-0e3b9e516c66"
  },
  {
   "name": "Kristin Larosa",
   "gender": "Female",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 25,
   "losses": 9,
   "pointsWon": 685,
   "totalPointsAgainst": 580,
   "mixedWins": 13,
   "mixedLosses": 5,
   "genderWins": 12,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 73.5,
   "diff": 105,
   "ppg": 20.1,
   "leagueRank": 39,
   "rating": 1.8,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "03162d88-f7e2-4381-9ede-fd884d73940b"
  },
  {
   "name": "William Waggenspack",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 24,
   "losses": 9,
   "pointsWon": 650,
   "totalPointsAgainst": 565,
   "mixedWins": 13,
   "mixedLosses": 5,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 9,
   "clutchLosses": 3,
   "winPct": 72.7,
   "diff": 85,
   "ppg": 19.7,
   "leagueRank": 48,
   "rating": 3,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.9,
   "playerId": "8aaeb517-ab68-4f67-9b9b-e347909f52e7"
  },
  {
   "name": "Gail Hannagan",
   "gender": "Female",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 421,
   "totalPointsAgainst": 341,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 72.7,
   "diff": 80,
   "ppg": 19.1,
   "leagueRank": 49,
   "rating": 1.2,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.9,
   "playerId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "name": "Oanh Quach",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 436,
   "totalPointsAgainst": 390,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 0,
   "winPct": 72.7,
   "diff": 46,
   "ppg": 19.8,
   "leagueRank": 58,
   "rating": 0,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.7,
   "playerId": "b4ac779e-91e0-46f1-a4c7-92e1068db57a"
  },
  {
   "name": "Jasmine Nguyen",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 441,
   "totalPointsAgainst": 396,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 72.7,
   "diff": 45,
   "ppg": 20,
   "leagueRank": 52,
   "rating": 0.3,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.2,
   "playerId": "8621d525-134a-4647-a7bd-98c3a357cdc3"
  },
  {
   "name": "Agnieszka Procner",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 200,
   "totalPointsAgainst": 177,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 72.7,
   "diff": 23,
   "ppg": 18.2,
   "leagueRank": 163,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "87f99a20-26ed-4aa8-88de-2842f5a4e389"
  },
  {
   "name": "Brandon Agudelo",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 21,
   "losses": 8,
   "pointsWon": 582,
   "totalPointsAgainst": 477,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 13,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 72.4,
   "diff": 105,
   "ppg": 20.1,
   "leagueRank": 40,
   "rating": 1.8,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0.5,
   "playerId": "a2c6fd48-c70a-4dc1-a1e0-4c177c4b0f58"
  },
  {
   "name": "Esterlina Wiest",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 21,
   "losses": 8,
   "pointsWon": 574,
   "totalPointsAgainst": 485,
   "mixedWins": 15,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 72.4,
   "diff": 89,
   "ppg": 19.8,
   "leagueRank": 42,
   "rating": 2,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.5,
   "playerId": "b43f9cca-12f6-4af2-bcb7-1b9debd7514a"
  },
  {
   "name": "Craig Batzar",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 13,
   "losses": 5,
   "pointsWon": 350,
   "totalPointsAgainst": 306,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 72.2,
   "diff": 44,
   "ppg": 19.4,
   "leagueRank": 56,
   "rating": 0.8,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "44890b21-f104-4e68-a0a1-607034c2dde6"
  },
  {
   "name": "Cory Mintz",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 13,
   "losses": 5,
   "pointsWon": 350,
   "totalPointsAgainst": 314,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 0,
   "winPct": 72.2,
   "diff": 36,
   "ppg": 19.4,
   "leagueRank": 71,
   "rating": 0.1,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1,
   "playerId": "33feb337-f2ab-4e6d-819b-9535ec743685"
  },
  {
   "name": "Jimmy Tom",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 25,
   "wins": 18,
   "losses": 7,
   "pointsWon": 497,
   "totalPointsAgainst": 404,
   "mixedWins": 10,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 72,
   "diff": 93,
   "ppg": 19.9,
   "leagueRank": 41,
   "rating": 2.3,
   "ratingGames": 25,
   "confidence": 81,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "4e873e4f-16c8-4504-a702-941e045a7d3b"
  },
  {
   "name": "Jayson Lee",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 18,
   "losses": 7,
   "pointsWon": 500,
   "totalPointsAgainst": 421,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 72,
   "diff": 79,
   "ppg": 20,
   "leagueRank": 47,
   "rating": 1.7,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.3,
   "playerId": "145a759d-3547-4ba8-a466-85f7c857a392"
  },
  {
   "name": "Aidan Fredericks",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 266,
   "totalPointsAgainst": 209,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 57,
   "ppg": 19,
   "leagueRank": 51,
   "rating": 1.8,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce"
  },
  {
   "name": "Abby Sprinkel",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 15,
   "losses": 6,
   "pointsWon": 421,
   "totalPointsAgainst": 378,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 71.4,
   "diff": 43,
   "ppg": 20,
   "leagueRank": 61,
   "rating": 0.6,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "491af413-7874-492a-9c92-6dccc6b736e5"
  },
  {
   "name": "Froilan Sunga",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 15,
   "losses": 6,
   "pointsWon": 412,
   "totalPointsAgainst": 378,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 71.4,
   "diff": 34,
   "ppg": 19.6,
   "leagueRank": 72,
   "rating": 0.7,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "af6465d2-7a02-4dc5-a6b4-62cee62fe93a"
  },
  {
   "name": "Donna Stone",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 135,
   "totalPointsAgainst": 115,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 20,
   "ppg": 19.3,
   "leagueRank": 230,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "af8a6e4b-f588-45db-906e-5766f1307e50"
  },
  {
   "name": "David Tran",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
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
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 15,
   "ppg": 19.7,
   "leagueRank": 221,
   "rating": 1.3,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "ef0a27b4-d6b4-4141-a8f1-448c710934ac"
  },
  {
   "name": "Brittany Riccitiello",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 24,
   "losses": 10,
   "pointsWon": 679,
   "totalPointsAgainst": 563,
   "mixedWins": 14,
   "mixedLosses": 3,
   "genderWins": 10,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 70.6,
   "diff": 116,
   "ppg": 20,
   "leagueRank": 43,
   "rating": 1.7,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0.4,
   "playerId": "aea847ce-8af4-4809-b421-b25faeef0563"
  },
  {
   "name": "Grady Craig",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 27,
   "wins": 19,
   "losses": 8,
   "pointsWon": 532,
   "totalPointsAgainst": 468,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 70.4,
   "diff": 64,
   "ppg": 19.7,
   "leagueRank": 54,
   "rating": 1,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.1,
   "playerId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "name": "Meghan Klein",
   "gender": "Female",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 28,
   "losses": 12,
   "pointsWon": 771,
   "totalPointsAgainst": 628,
   "mixedWins": 13,
   "mixedLosses": 7,
   "genderWins": 15,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 70,
   "diff": 143,
   "ppg": 19.3,
   "leagueRank": 44,
   "rating": 3.1,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909"
  },
  {
   "name": "Miles Townsend",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 30,
   "wins": 21,
   "losses": 9,
   "pointsWon": 580,
   "totalPointsAgainst": 513,
   "mixedWins": 12,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 70,
   "diff": 67,
   "ppg": 19.3,
   "leagueRank": 69,
   "rating": 0.1,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.2,
   "playerId": "cf59ad9f-a37d-44d2-abcf-5ec17532a6aa"
  },
  {
   "name": "Barbara Fontanella",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 196,
   "totalPointsAgainst": 163,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 70,
   "diff": 33,
   "ppg": 19.6,
   "leagueRank": 137,
   "rating": 0.8,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.7,
   "playerId": "3390e1cb-1881-414b-b8cf-9a0c06d13a0f"
  },
  {
   "name": "Kelly Aylward",
   "gender": "Female",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 441,
   "totalPointsAgainst": 362,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 69.6,
   "diff": 79,
   "ppg": 19.2,
   "leagueRank": 67,
   "rating": 1,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.7,
   "playerId": "6068d706-4a9a-4475-8d31-d5a900172f27"
  },
  {
   "name": "Colin Mackey",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 432,
   "totalPointsAgainst": 420,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 14,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 69.6,
   "diff": 12,
   "ppg": 18.8,
   "leagueRank": 91,
   "rating": -0.1,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "6e5d2bb6-bf2e-4f06-a2f8-24af7eca9cf8"
  },
  {
   "name": "Jeannine Calhoun",
   "gender": "Female",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 18,
   "losses": 8,
   "pointsWon": 495,
   "totalPointsAgainst": 429,
   "mixedWins": 8,
   "mixedLosses": 5,
   "genderWins": 10,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 69.2,
   "diff": 66,
   "ppg": 19,
   "leagueRank": 68,
   "rating": 0.8,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "name": "Ismael Hernandez",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 20,
   "losses": 9,
   "pointsWon": 553,
   "totalPointsAgainst": 483,
   "mixedWins": 13,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 69,
   "diff": 70,
   "ppg": 19.1,
   "leagueRank": 65,
   "rating": 1.8,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "262cf0be-4906-46fb-ab84-f4aa760bac58"
  },
  {
   "name": "Danica Bramschreiber",
   "gender": "Female",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 26,
   "losses": 12,
   "pointsWon": 747,
   "totalPointsAgainst": 648,
   "mixedWins": 15,
   "mixedLosses": 4,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 68.4,
   "diff": 99,
   "ppg": 19.7,
   "leagueRank": 55,
   "rating": 2.4,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "362cbda8-a78b-43bb-b653-1daef081ce2f"
  },
  {
   "name": "Julianna Rodrigues",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 28,
   "losses": 13,
   "pointsWon": 813,
   "totalPointsAgainst": 692,
   "mixedWins": 12,
   "mixedLosses": 7,
   "genderWins": 16,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 68.3,
   "diff": 121,
   "ppg": 19.8,
   "leagueRank": 45,
   "rating": 4.4,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1,
   "playerId": "77c32d66-d466-4308-9c45-1639e1925b70"
  },
  {
   "name": "Terri Pflueger",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 34,
   "wins": 23,
   "losses": 11,
   "pointsWon": 676,
   "totalPointsAgainst": 558,
   "mixedWins": 11,
   "mixedLosses": 5,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 67.6,
   "diff": 118,
   "ppg": 19.9,
   "leagueRank": 64,
   "rating": 0.5,
   "ratingGames": 34,
   "confidence": 85,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.6,
   "playerId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "name": "Lakshmikanth Chaluvadi",
   "gender": "Male",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 27,
   "losses": 13,
   "pointsWon": 771,
   "totalPointsAgainst": 659,
   "mixedWins": 12,
   "mixedLosses": 6,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 67.5,
   "diff": 112,
   "ppg": 19.3,
   "leagueRank": 59,
   "rating": 2.1,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "377302a4-12da-4449-bbfc-a28248436679"
  },
  {
   "name": "Adam Werwie",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 29,
   "losses": 14,
   "pointsWon": 861,
   "totalPointsAgainst": 707,
   "mixedWins": 14,
   "mixedLosses": 6,
   "genderWins": 15,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 67.4,
   "diff": 154,
   "ppg": 20,
   "leagueRank": 50,
   "rating": 2.5,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "name": "Cassie Lou",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 16,
   "losses": 8,
   "pointsWon": 480,
   "totalPointsAgainst": 400,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 66.7,
   "diff": 80,
   "ppg": 20,
   "leagueRank": 63,
   "rating": 1,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.1,
   "playerId": "27f83d5a-2e86-4e5b-af70-9394a8765ac6"
  },
  {
   "name": "Jane Pascua",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 22,
   "losses": 11,
   "pointsWon": 658,
   "totalPointsAgainst": 582,
   "mixedWins": 8,
   "mixedLosses": 5,
   "genderWins": 14,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 66.7,
   "diff": 76,
   "ppg": 19.9,
   "leagueRank": 57,
   "rating": 2.9,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "5c79bec7-67d9-4d8b-beef-a6f423475522"
  },
  {
   "name": "Eric Brezina",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 408,
   "totalPointsAgainst": 338,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 70,
   "ppg": 19.4,
   "leagueRank": 66,
   "rating": 0.4,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1,
   "playerId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "name": "Evelyn Geating",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 18,
   "losses": 9,
   "pointsWon": 527,
   "totalPointsAgainst": 477,
   "mixedWins": 9,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 50,
   "ppg": 19.5,
   "leagueRank": 73,
   "rating": 1.3,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.7,
   "playerId": "798a21bd-83e7-42e9-bd86-c74448c7dada"
  },
  {
   "name": "Meg Kelly",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 16,
   "losses": 8,
   "pointsWon": 462,
   "totalPointsAgainst": 420,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 42,
   "ppg": 19.3,
   "leagueRank": 75,
   "rating": 2,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.8,
   "playerId": "bf9f2dd4-3b39-4c8c-b768-04a47d1b23f9"
  },
  {
   "name": "Joseph Gronczewski",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 99,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 23,
   "ppg": 20.3,
   "leagueRank": 182,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.9,
   "playerId": "f6eef486-8999-4247-a7d8-20251377021c"
  },
  {
   "name": "Gene Stahl",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 117,
   "totalPointsAgainst": 95,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 22,
   "ppg": 19.5,
   "leagueRank": 215,
   "rating": 2.9,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.1,
   "playerId": "4686f4c7-52b1-456e-8793-d3d1a4bd4878"
  },
  {
   "name": "Christopher Moscony",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 107,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 15,
   "ppg": 20.3,
   "leagueRank": 171,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "f64241ba-e625-4065-b72f-777f5a8fb2bd"
  },
  {
   "name": "Paul Sokolson",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 104,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 14,
   "ppg": 19.7,
   "leagueRank": 212,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.8,
   "playerId": "b754b9dc-11ea-4958-8c14-0f667cc0f57e"
  },
  {
   "name": "Jimmy Duong",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 6,
   "losses": 3,
   "pointsWon": 170,
   "totalPointsAgainst": 170,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 0,
   "ppg": 18.9,
   "leagueRank": 198,
   "rating": -1.2,
   "ratingGames": 10,
   "confidence": 67,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.5,
   "playerId": "c19baf91-31e2-4024-881f-d5c4cdb9d311"
  },
  {
   "name": "Suki Wong",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 27,
   "losses": 14,
   "pointsWon": 778,
   "totalPointsAgainst": 719,
   "mixedWins": 13,
   "mixedLosses": 7,
   "genderWins": 14,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 65.9,
   "diff": 59,
   "ppg": 19,
   "leagueRank": 84,
   "rating": 1,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "b92a5442-fd20-4e2f-896b-26cc5cfa5ea5"
  },
  {
   "name": "Mike Hardy",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 17,
   "losses": 9,
   "pointsWon": 523,
   "totalPointsAgainst": 429,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 65.4,
   "diff": 94,
   "ppg": 20.1,
   "leagueRank": 62,
   "rating": 1.2,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.4,
   "playerId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "name": "Hee Kim",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 17,
   "losses": 9,
   "pointsWon": 499,
   "totalPointsAgainst": 472,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 65.4,
   "diff": 27,
   "ppg": 19.2,
   "leagueRank": 97,
   "rating": -0.3,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "03fa8bb2-957d-45f2-9e41-628a2c5ac9e0"
  },
  {
   "name": "Bill Dower",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 22,
   "losses": 12,
   "pointsWon": 663,
   "totalPointsAgainst": 587,
   "mixedWins": 14,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 64.7,
   "diff": 76,
   "ppg": 19.5,
   "leagueRank": 78,
   "rating": 1,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "f920b62c-0fa3-417a-ac3e-b7bb6f555fc4"
  },
  {
   "name": "Abby Viola",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 11,
   "losses": 6,
   "pointsWon": 314,
   "totalPointsAgainst": 301,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 64.7,
   "diff": 13,
   "ppg": 18.5,
   "leagueRank": 129,
   "rating": -1.1,
   "ratingGames": 17,
   "confidence": 76,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.1,
   "playerId": "711bd5d7-fb81-448d-b5db-89e773115943"
  },
  {
   "name": "Liane Feyas",
   "gender": "Female",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 28,
   "wins": 18,
   "losses": 10,
   "pointsWon": 558,
   "totalPointsAgainst": 449,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 64.3,
   "diff": 109,
   "ppg": 19.9,
   "leagueRank": 60,
   "rating": 3.3,
   "ratingGames": 28,
   "confidence": 82,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "2266824f-5ba8-4da3-a512-94c8e14f7c90"
  },
  {
   "name": "Patricia San Andres",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 18,
   "losses": 10,
   "pointsWon": 536,
   "totalPointsAgainst": 489,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 64.3,
   "diff": 47,
   "ppg": 19.1,
   "leagueRank": 88,
   "rating": 0.9,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.5,
   "playerId": "42e86266-ff96-4961-8e27-adeac7084f59"
  },
  {
   "name": "Rosellen Perlowitz",
   "gender": "Female",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 25,
   "losses": 14,
   "pointsWon": 753,
   "totalPointsAgainst": 696,
   "mixedWins": 13,
   "mixedLosses": 6,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 64.1,
   "diff": 57,
   "ppg": 19.3,
   "leagueRank": 82,
   "rating": 1.5,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf"
  },
  {
   "name": "Taylor Runyen",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 14,
   "losses": 8,
   "pointsWon": 430,
   "totalPointsAgainst": 373,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 63.6,
   "diff": 57,
   "ppg": 19.5,
   "leagueRank": 77,
   "rating": 2.1,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "cda5a763-48f3-4303-8579-42ff05230f45"
  },
  {
   "name": "James Gillick",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 14,
   "losses": 8,
   "pointsWon": 442,
   "totalPointsAgainst": 393,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 63.6,
   "diff": 49,
   "ppg": 20.1,
   "leagueRank": 74,
   "rating": 1.5,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "60dda206-8284-415e-b83e-3836d61e6701"
  },
  {
   "name": "Linda Seemann",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 212,
   "totalPointsAgainst": 170,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 63.6,
   "diff": 42,
   "ppg": 19.3,
   "leagueRank": 116,
   "rating": 1.2,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.1,
   "playerId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c"
  },
  {
   "name": "Amanda Zhou",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 216,
   "totalPointsAgainst": 184,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 63.6,
   "diff": 32,
   "ppg": 19.6,
   "leagueRank": 167,
   "rating": 0.8,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "70422d8a-2761-48c4-ac68-ae5bfe532394"
  },
  {
   "name": "Victor Salicetti",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 41,
   "wins": 26,
   "losses": 15,
   "pointsWon": 797,
   "totalPointsAgainst": 731,
   "mixedWins": 11,
   "mixedLosses": 10,
   "genderWins": 15,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 63.4,
   "diff": 66,
   "ppg": 19.4,
   "leagueRank": 87,
   "rating": 0.9,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "08cb8582-4347-4694-9f58-7e479aa3b7a5"
  },
  {
   "name": "Gerry Bissinger",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 19,
   "losses": 11,
   "pointsWon": 569,
   "totalPointsAgainst": 528,
   "mixedWins": 11,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 63.3,
   "diff": 41,
   "ppg": 19,
   "leagueRank": 95,
   "rating": 1.4,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "44999222-7eed-49f7-982b-10ad7155256a"
  },
  {
   "name": "Radhika Sud",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 12,
   "losses": 7,
   "pointsWon": 367,
   "totalPointsAgainst": 325,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 63.2,
   "diff": 42,
   "ppg": 19.3,
   "leagueRank": 86,
   "rating": 0.1,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.1,
   "playerId": "f3d6a801-faed-44cb-a7fa-fd0b3bdff981"
  },
  {
   "name": "Sabiha Kermalli",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 12,
   "losses": 7,
   "pointsWon": 365,
   "totalPointsAgainst": 338,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 63.2,
   "diff": 27,
   "ppg": 19.2,
   "leagueRank": 92,
   "rating": 1.4,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "7909f81b-3c87-4f6a-8476-50ae30e2ab4b"
  },
  {
   "name": "Sean Greener",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 20,
   "losses": 12,
   "pointsWon": 636,
   "totalPointsAgainst": 542,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 62.5,
   "diff": 94,
   "ppg": 19.9,
   "leagueRank": 79,
   "rating": 1.6,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "12f33b3a-b4ea-4b31-affa-dc7917dce94b"
  },
  {
   "name": "Ryan Benetz",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 320,
   "totalPointsAgainst": 266,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 62.5,
   "diff": 54,
   "ppg": 20,
   "leagueRank": 70,
   "rating": 0.3,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.5,
   "playerId": "841719cb-612f-4fea-bb1b-ef09935bb8ba"
  },
  {
   "name": "Jonathan Jamison",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 406,
   "totalPointsAgainst": 357,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 61.9,
   "diff": 49,
   "ppg": 19.3,
   "leagueRank": 81,
   "rating": 0.5,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "8b4ec650-391b-47a7-90e3-af9989d74df0"
  },
  {
   "name": "Taylor Newell",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 392,
   "totalPointsAgainst": 369,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 61.9,
   "diff": 23,
   "ppg": 18.7,
   "leagueRank": 100,
   "rating": 2,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "ff4f3e35-1472-444c-b4d0-aa381bbd12d1"
  },
  {
   "name": "Paul Matzko",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 21,
   "losses": 13,
   "pointsWon": 625,
   "totalPointsAgainst": 627,
   "mixedWins": 12,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 61.8,
   "diff": -2,
   "ppg": 18.4,
   "leagueRank": 127,
   "rating": 0.5,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "name": "Kenneth Ocasio",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 16,
   "losses": 10,
   "pointsWon": 503,
   "totalPointsAgainst": 448,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 61.5,
   "diff": 55,
   "ppg": 19.3,
   "leagueRank": 89,
   "rating": 0.1,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.2,
   "playerId": "1c908613-b93b-43b3-b084-b2da12b2faa2"
  },
  {
   "name": "Anne Buckley",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 19,
   "losses": 12,
   "pointsWon": 588,
   "totalPointsAgainst": 541,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 61.3,
   "diff": 47,
   "ppg": 19,
   "leagueRank": 90,
   "rating": 2.2,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "07881006-c083-4729-8424-410aeee08940"
  },
  {
   "name": "Jonathan Wong",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 14,
   "losses": 9,
   "pointsWon": 449,
   "totalPointsAgainst": 414,
   "mixedWins": 4,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 60.9,
   "diff": 35,
   "ppg": 19.5,
   "leagueRank": 85,
   "rating": 1.8,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "6bc511e7-c686-4a9b-866a-d109aed9104d"
  },
  {
   "name": "Joseph Mckenna",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 15,
   "losses": 10,
   "pointsWon": 474,
   "totalPointsAgainst": 420,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 54,
   "ppg": 19,
   "leagueRank": 96,
   "rating": 1.1,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.7,
   "playerId": "551c6f9d-b1e1-4b5b-a8cb-bea20a14d9ff"
  },
  {
   "name": "Sarah Stangota",
   "gender": "Female",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 25,
   "wins": 15,
   "losses": 10,
   "pointsWon": 479,
   "totalPointsAgainst": 425,
   "mixedWins": 8,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 60,
   "diff": 54,
   "ppg": 19.2,
   "leagueRank": 83,
   "rating": 2.3,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "name": "Alex Sanchez",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 12,
   "losses": 8,
   "pointsWon": 388,
   "totalPointsAgainst": 360,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 60,
   "diff": 28,
   "ppg": 19.4,
   "leagueRank": 107,
   "rating": 0,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.4,
   "playerId": "5509090f-bf75-4166-a5ab-c7688cf54353"
  },
  {
   "name": "Robert Paniti",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 21,
   "losses": 14,
   "pointsWon": 668,
   "totalPointsAgainst": 645,
   "mixedWins": 12,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 12,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 23,
   "ppg": 19.1,
   "leagueRank": 114,
   "rating": 0.6,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "d17ff3de-7455-4efb-b1be-4c61b5acbdf2"
  },
  {
   "name": "Lydia Madrilejos",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 97,
   "totalPointsAgainst": 92,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 5,
   "ppg": 19.4,
   "leagueRank": 272,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "39aae561-e09c-4f74-873b-2b5a36c15d05"
  },
  {
   "name": "Amanda Nguyen",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 12,
   "losses": 8,
   "pointsWon": 370,
   "totalPointsAgainst": 368,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 60,
   "diff": 2,
   "ppg": 18.5,
   "leagueRank": 124,
   "rating": 0.7,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e"
  },
  {
   "name": "Jayne Mayer",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 91,
   "totalPointsAgainst": 92,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": -1,
   "ppg": 18.2,
   "leagueRank": 286,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "c6743f83-5947-4eec-aca8-f4f19b1e7a35"
  },
  {
   "name": "Alyssa Beattie",
   "gender": "Female",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 42,
   "wins": 25,
   "losses": 17,
   "pointsWon": 810,
   "totalPointsAgainst": 772,
   "mixedWins": 14,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 59.5,
   "diff": 38,
   "ppg": 19.3,
   "leagueRank": 102,
   "rating": 1.8,
   "ratingGames": 42,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf"
  },
  {
   "name": "Jason Paderon",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 13,
   "losses": 9,
   "pointsWon": 415,
   "totalPointsAgainst": 377,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 59.1,
   "diff": 38,
   "ppg": 18.9,
   "leagueRank": 117,
   "rating": -0.3,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.8,
   "playerId": "6a1fa95d-2df5-4870-a4b6-51775620f7cf"
  },
  {
   "name": "Ed Amato",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 17,
   "losses": 12,
   "pointsWon": 545,
   "totalPointsAgainst": 528,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 58.6,
   "diff": 17,
   "ppg": 18.8,
   "leagueRank": 110,
   "rating": 1.3,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "name": "Maridel Ablaza",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 14,
   "losses": 10,
   "pointsWon": 463,
   "totalPointsAgainst": 437,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 58.3,
   "diff": 26,
   "ppg": 19.3,
   "leagueRank": 103,
   "rating": 0.7,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.7,
   "playerId": "c868d44f-a501-4c1a-8d17-fd6e4a338308"
  },
  {
   "name": "Matthew Rafaniello",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 14,
   "losses": 10,
   "pointsWon": 452,
   "totalPointsAgainst": 440,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 12,
   "ppg": 18.8,
   "leagueRank": 115,
   "rating": 1.2,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "021fbd88-6b98-47eb-aa92-96ed959d8a4b"
  },
  {
   "name": "Supriya Kothakonda",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 228,
   "totalPointsAgainst": 221,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 7,
   "ppg": 19,
   "leagueRank": 154,
   "rating": 1.2,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18"
  },
  {
   "name": "Danny Ruiz",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 227,
   "totalPointsAgainst": 223,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 4,
   "ppg": 18.9,
   "leagueRank": 156,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "cf86f914-08ca-4df6-9cdb-74a23afc2478"
  },
  {
   "name": "Prasad Mittapalli",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 18,
   "losses": 13,
   "pointsWon": 587,
   "totalPointsAgainst": 549,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 58.1,
   "diff": 38,
   "ppg": 18.9,
   "leagueRank": 109,
   "rating": 1.4,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 1.2,
   "playerId": "11ccd85e-b03b-43d1-ae48-bc26b6eb19c8"
  },
  {
   "name": "Tomas Ruiz",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 11,
   "losses": 8,
   "pointsWon": 363,
   "totalPointsAgainst": 340,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 57.9,
   "diff": 23,
   "ppg": 19.1,
   "leagueRank": 108,
   "rating": 0.3,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "933eb2e5-0a4b-46be-945d-be9e6c70dc7b"
  },
  {
   "name": "Rachel Searby",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 24,
   "losses": 18,
   "pointsWon": 822,
   "totalPointsAgainst": 742,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 57.1,
   "diff": 80,
   "ppg": 19.6,
   "leagueRank": 101,
   "rating": 1.2,
   "ratingGames": 42,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "3648420d-4dae-4404-8b67-3162f343f6aa"
  },
  {
   "name": "Thao Tran",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 20,
   "losses": 15,
   "pointsWon": 664,
   "totalPointsAgainst": 614,
   "mixedWins": 11,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 57.1,
   "diff": 50,
   "ppg": 19,
   "leagueRank": 104,
   "rating": 1.5,
   "ratingGames": 35,
   "confidence": 86,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "a7416218-74a3-40c5-9327-97840c949fc4"
  },
  {
   "name": "Andrea Galanti",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 20,
   "losses": 15,
   "pointsWon": 655,
   "totalPointsAgainst": 605,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 57.1,
   "diff": 50,
   "ppg": 18.7,
   "leagueRank": 121,
   "rating": 1.6,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "name": "Brandi Horowitz",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 16,
   "losses": 12,
   "pointsWon": 528,
   "totalPointsAgainst": 496,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 57.1,
   "diff": 32,
   "ppg": 18.9,
   "leagueRank": 126,
   "rating": -0.1,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "bc3fda4d-3cf9-4daf-a2f1-6010ce63195e"
  },
  {
   "name": "David Schwartz",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 35,
   "wins": 20,
   "losses": 15,
   "pointsWon": 667,
   "totalPointsAgainst": 647,
   "mixedWins": 14,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 57.1,
   "diff": 20,
   "ppg": 19.1,
   "leagueRank": 128,
   "rating": 0.3,
   "ratingGames": 35,
   "confidence": 86,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "908a8539-b3a5-437a-957f-e900db3c01b9"
  },
  {
   "name": "Nicole Dunbar",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 133,
   "totalPointsAgainst": 139,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -6,
   "ppg": 19,
   "leagueRank": 280,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.1,
   "playerId": "bd063e35-9767-47d6-81e8-58b1625fb2b0"
  },
  {
   "name": "Jonathan Weisbrod",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 126,
   "totalPointsAgainst": 134,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -8,
   "ppg": 18,
   "leagueRank": 288,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0,
   "playerId": "76ad1c55-bbb8-4ea7-9ff4-7fa3f1c96f3f"
  },
  {
   "name": "Connie Tom",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 13,
   "losses": 10,
   "pointsWon": 438,
   "totalPointsAgainst": 390,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 56.5,
   "diff": 48,
   "ppg": 19,
   "leagueRank": 111,
   "rating": 0,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0,
   "playerId": "493b9730-cc53-4634-9561-49c6f1ddcb08"
  },
  {
   "name": "James Conroy",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 13,
   "losses": 10,
   "pointsWon": 397,
   "totalPointsAgainst": 399,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 56.5,
   "diff": -2,
   "ppg": 17.3,
   "leagueRank": 155,
   "rating": -0.5,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "name": "Maxwell Winters",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 609,
   "totalPointsAgainst": 554,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 12,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 56.3,
   "diff": 55,
   "ppg": 19,
   "leagueRank": 113,
   "rating": 0.9,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "d5037744-373a-485e-9fd3-5564495b8c2d"
  },
  {
   "name": "Melanie Gibson",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 307,
   "totalPointsAgainst": 281,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 56.3,
   "diff": 26,
   "ppg": 19.2,
   "leagueRank": 134,
   "rating": -1.4,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.4,
   "playerId": "1fe72cf8-6731-4673-b424-3ae625f4319a"
  },
  {
   "name": "Sophie O’Driscoll",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 14,
   "losses": 11,
   "pointsWon": 484,
   "totalPointsAgainst": 430,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 56,
   "diff": 54,
   "ppg": 19.4,
   "leagueRank": 98,
   "rating": 1.5,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "40f98b81-c10a-4e0b-9154-3a8ffa3d784c"
  },
  {
   "name": "Lauren Gabat",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 14,
   "losses": 11,
   "pointsWon": 467,
   "totalPointsAgainst": 434,
   "mixedWins": 9,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 56,
   "diff": 33,
   "ppg": 18.7,
   "leagueRank": 123,
   "rating": 1,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.5,
   "playerId": "ef0b7b1a-41ac-4ccd-b502-a68ad5549a3b"
  },
  {
   "name": "Andy Pineda",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 14,
   "losses": 11,
   "pointsWon": 481,
   "totalPointsAgainst": 465,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 56,
   "diff": 16,
   "ppg": 19.2,
   "leagueRank": 125,
   "rating": 0.8,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "bb6c579d-1627-4971-ad0f-4be65598d579"
  },
  {
   "name": "Brad De Jesus",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 14,
   "losses": 11,
   "pointsWon": 465,
   "totalPointsAgainst": 471,
   "mixedWins": 8,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 56,
   "diff": -6,
   "ppg": 18.6,
   "leagueRank": 144,
   "rating": 0.3,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "0dcffbac-6931-400d-b652-41c2720e6311"
  },
  {
   "name": "Jeff Stephenson",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 14,
   "losses": 11,
   "pointsWon": 440,
   "totalPointsAgainst": 456,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 56,
   "diff": -16,
   "ppg": 17.6,
   "leagueRank": 169,
   "rating": -1.1,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "002d90d8-3c20-4fe1-adcd-154e02a75a8b"
  },
  {
   "name": "Katelyn Carretas",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 14,
   "losses": 11,
   "pointsWon": 451,
   "totalPointsAgainst": 470,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 56,
   "diff": -19,
   "ppg": 18,
   "leagueRank": 165,
   "rating": -0.7,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "9564f996-6460-4bbd-b589-270545a1d4ef"
  },
  {
   "name": "Ashley Altman",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 19,
   "losses": 15,
   "pointsWon": 649,
   "totalPointsAgainst": 614,
   "mixedWins": 9,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 55.9,
   "diff": 35,
   "ppg": 19.1,
   "leagueRank": 122,
   "rating": 1.2,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "57cb28c4-947f-4ea0-a6eb-5e21a777552a"
  },
  {
   "name": "Nikki Nigro",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 20,
   "losses": 16,
   "pointsWon": 681,
   "totalPointsAgainst": 631,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 55.6,
   "diff": 50,
   "ppg": 18.9,
   "leagueRank": 119,
   "rating": 2.4,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "01c2e4d1-3738-4ee6-8878-4a2559ec006a"
  },
  {
   "name": "Joseph Korom",
   "gender": "Male",
   "team": "Open Play",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 16,
   "losses": 13,
   "pointsWon": 570,
   "totalPointsAgainst": 491,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 55.2,
   "diff": 79,
   "ppg": 19.7,
   "leagueRank": 76,
   "rating": 3.9,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "f014daaa-0b2e-4e20-b820-79741affdbcd"
  },
  {
   "name": "Robynn Reeder",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 379,
   "totalPointsAgainst": 369,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 55,
   "diff": 10,
   "ppg": 19,
   "leagueRank": 130,
   "rating": 1.7,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.5,
   "playerId": "f2b0152e-161a-48bc-86c4-afc14231862c"
  },
  {
   "name": "Aseem Sharma",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 390,
   "totalPointsAgainst": 390,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 55,
   "diff": 0,
   "ppg": 19.5,
   "leagueRank": 118,
   "rating": 2.2,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.6,
   "playerId": "efd507a8-9626-47ba-b98d-3406a951f838"
  },
  {
   "name": "Line Barlow",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 17,
   "losses": 14,
   "pointsWon": 602,
   "totalPointsAgainst": 553,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 54.8,
   "diff": 49,
   "ppg": 19.4,
   "leagueRank": 106,
   "rating": 2,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "20f0fb60-8e60-448c-b971-40fb6e7fca23"
  },
  {
   "name": "Quynh Nguyen",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 17,
   "losses": 14,
   "pointsWon": 574,
   "totalPointsAgainst": 549,
   "mixedWins": 12,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 54.8,
   "diff": 25,
   "ppg": 18.5,
   "leagueRank": 138,
   "rating": 0,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1"
  },
  {
   "name": "John Waggoner",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 17,
   "losses": 14,
   "pointsWon": 586,
   "totalPointsAgainst": 568,
   "mixedWins": 9,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 54.8,
   "diff": 18,
   "ppg": 18.9,
   "leagueRank": 133,
   "rating": 0.8,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "46d96287-f2e2-4de7-8593-fcde564b9273"
  },
  {
   "name": "Emiliya Mizrahi",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 208,
   "totalPointsAgainst": 201,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 54.5,
   "diff": 7,
   "ppg": 18.9,
   "leagueRank": 222,
   "rating": 0.3,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.5,
   "playerId": "f173be84-93c7-46b8-b828-d44ddc52d63c"
  },
  {
   "name": "Papa Aggrey",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 13,
   "losses": 11,
   "pointsWon": 451,
   "totalPointsAgainst": 400,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 54.2,
   "diff": 51,
   "ppg": 18.8,
   "leagueRank": 120,
   "rating": 1.3,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "b113d589-6857-4555-95d4-935d5f62e50c"
  },
  {
   "name": "Jonathan Briones",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 245,
   "totalPointsAgainst": 239,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 53.8,
   "diff": 6,
   "ppg": 18.8,
   "leagueRank": 140,
   "rating": 1,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.5,
   "playerId": "774f6fd0-33aa-47c2-8b61-167976b46b8e"
  },
  {
   "name": "Mark Wenstrom",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 235,
   "totalPointsAgainst": 239,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": -4,
   "ppg": 18.1,
   "leagueRank": 204,
   "rating": 0.9,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.5,
   "playerId": "12159177-8eb2-4e6f-bb4f-22575eeed130"
  },
  {
   "name": "David Cartwright",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 14,
   "losses": 12,
   "pointsWon": 469,
   "totalPointsAgainst": 475,
   "mixedWins": 10,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": -6,
   "ppg": 18,
   "leagueRank": 160,
   "rating": 0.3,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "name": "Thuy Nguyen",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 28,
   "wins": 15,
   "losses": 13,
   "pointsWon": 526,
   "totalPointsAgainst": 498,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 53.6,
   "diff": 28,
   "ppg": 18.8,
   "leagueRank": 131,
   "rating": 1,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "8ea3584b-11a3-4d0c-ace0-bce5bd3a00f1"
  },
  {
   "name": "Inho Andrew Yuh",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 293,
   "totalPointsAgainst": 268,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 53.3,
   "diff": 25,
   "ppg": 19.5,
   "leagueRank": 132,
   "rating": -0.6,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.6,
   "playerId": "d642aa89-5ebe-4bcb-a5e7-fdcc3a9b916e"
  },
  {
   "name": "Robert Courchain",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 283,
   "totalPointsAgainst": 265,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 53.3,
   "diff": 18,
   "ppg": 18.9,
   "leagueRank": 141,
   "rating": -0.2,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.9,
   "playerId": "371bb742-9ea6-464a-8c27-df8469b90a62"
  },
  {
   "name": "David Horowitz",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 275,
   "totalPointsAgainst": 264,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 53.3,
   "diff": 11,
   "ppg": 18.3,
   "leagueRank": 146,
   "rating": 0.2,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "8dc8c957-0a4a-411d-b49a-35a35174a5ac"
  },
  {
   "name": "Lanz Santos",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 280,
   "totalPointsAgainst": 275,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 53.3,
   "diff": 5,
   "ppg": 18.7,
   "leagueRank": 139,
   "rating": 0.9,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37"
  },
  {
   "name": "Barbara Mccarron",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 260,
   "totalPointsAgainst": 278,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 53.3,
   "diff": -18,
   "ppg": 17.3,
   "leagueRank": 179,
   "rating": -0.2,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "9179cc04-34f4-48f4-b30d-69ec894d05f4"
  },
  {
   "name": "Brian Seligson",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 17,
   "losses": 15,
   "pointsWon": 597,
   "totalPointsAgainst": 583,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 53.1,
   "diff": 14,
   "ppg": 18.7,
   "leagueRank": 147,
   "rating": -0.3,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "66cca19b-c691-4ee2-addb-f8344943103e"
  },
  {
   "name": "Howie Knudson",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 17,
   "losses": 15,
   "pointsWon": 604,
   "totalPointsAgainst": 610,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 53.1,
   "diff": -6,
   "ppg": 18.9,
   "leagueRank": 161,
   "rating": -1.6,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0,
   "playerId": "45973650-1f33-43dc-a0f1-1fce356962e0"
  },
  {
   "name": "Maggie Wang",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 9,
   "losses": 8,
   "pointsWon": 310,
   "totalPointsAgainst": 311,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 52.9,
   "diff": -1,
   "ppg": 18.2,
   "leagueRank": 164,
   "rating": 0.1,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "0c1f375a-1567-4b92-8fb2-907a22d8e2ee"
  },
  {
   "name": "Jonathan Nieves",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 10,
   "losses": 9,
   "pointsWon": 365,
   "totalPointsAgainst": 355,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 52.6,
   "diff": 10,
   "ppg": 19.2,
   "leagueRank": 142,
   "rating": 0.3,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "bf68b168-b0fb-4c26-bcd0-a9c888363778"
  },
  {
   "name": "Michael Van Horn",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 22,
   "losses": 20,
   "pointsWon": 784,
   "totalPointsAgainst": 776,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 9,
   "genderLosses": 11,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 52.4,
   "diff": 8,
   "ppg": 18.7,
   "leagueRank": 135,
   "rating": 2,
   "ratingGames": 42,
   "confidence": 88,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "0782db8d-bb52-4a47-88b5-00e8db2358c4"
  },
  {
   "name": "Matthew Ferrante",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 13,
   "losses": 12,
   "pointsWon": 456,
   "totalPointsAgainst": 472,
   "mixedWins": 4,
   "mixedLosses": 9,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 52,
   "diff": -16,
   "ppg": 18.2,
   "leagueRank": 175,
   "rating": -1.9,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.5,
   "playerId": "b813a895-871c-4e52-a0f8-e723f4066ead"
  },
  {
   "name": "Alan Weissman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 14,
   "losses": 13,
   "pointsWon": 482,
   "totalPointsAgainst": 487,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 51.9,
   "diff": -5,
   "ppg": 17.9,
   "leagueRank": 174,
   "rating": -1.5,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.9,
   "playerId": "12febf17-8650-40dd-92ca-a0bda06caf0f"
  },
  {
   "name": "Jaymie Vincelli",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 18,
   "losses": 17,
   "pointsWon": 651,
   "totalPointsAgainst": 629,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 51.4,
   "diff": 22,
   "ppg": 18.6,
   "leagueRank": 145,
   "rating": 0.5,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "daba10b1-0903-4d21-b71f-f2b670a0b428"
  },
  {
   "name": "Rob Stever",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 20,
   "losses": 19,
   "pointsWon": 713,
   "totalPointsAgainst": 712,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 51.3,
   "diff": 1,
   "ppg": 18.3,
   "leagueRank": 162,
   "rating": 0.6,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "519426b7-932a-4dd5-9865-ebaadb3d226d"
  },
  {
   "name": "Juri Solano",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 21,
   "losses": 20,
   "pointsWon": 761,
   "totalPointsAgainst": 783,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 51.2,
   "diff": -22,
   "ppg": 18.6,
   "leagueRank": 152,
   "rating": 1.1,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0"
  },
  {
   "name": "Minjel Shah",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 120,
   "totalPointsAgainst": 93,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 27,
   "ppg": 20,
   "leagueRank": 208,
   "rating": 2.9,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "name": "Peter Cao",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 311,
   "totalPointsAgainst": 291,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": 20,
   "ppg": 19.4,
   "leagueRank": 143,
   "rating": -1,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.7,
   "playerId": "9472956b-d6dc-4e8b-ae94-523874e5510a"
  },
  {
   "name": "Timothy Lowry",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 16,
   "losses": 16,
   "pointsWon": 605,
   "totalPointsAgainst": 589,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 16,
   "ppg": 18.9,
   "leagueRank": 148,
   "rating": 0.4,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "5165ace6-688d-451a-9f96-8e5500cbf46d"
  },
  {
   "name": "Lee Latini",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 193,
   "totalPointsAgainst": 178,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 15,
   "ppg": 19.3,
   "leagueRank": 186,
   "rating": -0.6,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1.4,
   "playerId": "e5a9569f-f8ce-4c71-912c-a6872bb7de77"
  },
  {
   "name": "Freddy Li",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 464,
   "totalPointsAgainst": 450,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": 14,
   "ppg": 19.3,
   "leagueRank": 151,
   "rating": -1.6,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 2.9,
   "strengthOfOpponents": 0.2,
   "playerId": "455cc819-6519-4c36-9dd7-2dbb33845102"
  },
  {
   "name": "Wendy Braithwaite",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 229,
   "totalPointsAgainst": 216,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 13,
   "ppg": 19.1,
   "leagueRank": 193,
   "rating": 0.6,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "0214a334-0b6c-4a34-9f61-c4aadd8ad06e"
  },
  {
   "name": "Danielle Kuti",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
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
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 10,
   "ppg": 19.2,
   "leagueRank": 291,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "c3902bc0-35a6-490d-9909-6f19b1224b99"
  },
  {
   "name": "Darren Zheng",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 193,
   "totalPointsAgainst": 186,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 7,
   "ppg": 19.3,
   "leagueRank": 228,
   "rating": 0.5,
   "ratingGames": 10,
   "confidence": 67,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "fcedde03-815a-4405-9065-c0a473654b8c"
  },
  {
   "name": "Christina Vuong",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 117,
   "totalPointsAgainst": 110,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 7,
   "ppg": 19.5,
   "leagueRank": 276,
   "rating": 1.9,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1,
   "playerId": "1c8ac03f-c618-46c4-bed2-c8391c4e1028"
  },
  {
   "name": "Lisa Dinh",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 458,
   "totalPointsAgainst": 455,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": 3,
   "ppg": 19.1,
   "leagueRank": 150,
   "rating": 0.1,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "aaf27c02-6d20-4a96-835c-3084d799ac0f"
  },
  {
   "name": "Jenny Lin",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 109,
   "totalPointsAgainst": 106,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": 3,
   "ppg": 18.2,
   "leagueRank": 300,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "d45c0c05-5f76-4025-a4e6-8442591e88ab"
  },
  {
   "name": "Robert Janukowicz",
   "gender": "Male",
   "team": "Open Play",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 112,
   "totalPointsAgainst": 112,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 0,
   "ppg": 18.7,
   "leagueRank": 295,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "fe90f290-74af-47c7-9711-ee0079260258"
  },
  {
   "name": "Susan Dente",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 115,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -2,
   "ppg": 18.8,
   "leagueRank": 306,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1,
   "playerId": "b7915e66-3b19-4197-8258-8fa2bd226780"
  },
  {
   "name": "Tony Wong",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 183,
   "totalPointsAgainst": 187,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -4,
   "ppg": 18.3,
   "leagueRank": 251,
   "rating": 0.1,
   "ratingGames": 10,
   "confidence": 67,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.9,
   "playerId": "e3828158-4c75-4583-9a96-c00b2e01252f"
  },
  {
   "name": "Meredith Janeiro",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 249,
   "totalPointsAgainst": 254,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -5,
   "ppg": 17.8,
   "leagueRank": 219,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.2,
   "playerId": "4ec66b93-76c9-45ef-b5cb-0b1209e876d9"
  },
  {
   "name": "Jackie Bowes",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 302,
   "totalPointsAgainst": 307,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -5,
   "ppg": 18.9,
   "leagueRank": 168,
   "rating": -0.9,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "a111c97f-aba4-4850-902b-0730e2160f76"
  },
  {
   "name": "Dung Pham",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 228,
   "totalPointsAgainst": 233,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -5,
   "ppg": 19,
   "leagueRank": 159,
   "rating": -0.2,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "fed512a2-1ec3-42c8-b81d-fe88d4bcae63"
  },
  {
   "name": "Christopher Sachs",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 13,
   "losses": 13,
   "pointsWon": 450,
   "totalPointsAgainst": 457,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 8,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -7,
   "ppg": 17.3,
   "leagueRank": 192,
   "rating": -0.5,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "52e5dfee-42f1-4c8f-b3ee-ca7c6e49a7fb"
  },
  {
   "name": "Deb Morisie",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 216,
   "totalPointsAgainst": 223,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -7,
   "ppg": 18,
   "leagueRank": 220,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.5,
   "playerId": "94d76c8a-d5ee-444b-aa23-3c3ec71e2387"
  },
  {
   "name": "Tom Dominczyk",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 102,
   "totalPointsAgainst": 110,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -8,
   "ppg": 17,
   "leagueRank": 310,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5"
  },
  {
   "name": "Briane Cornish",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 102,
   "totalPointsAgainst": 119,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -17,
   "ppg": 17,
   "leagueRank": 317,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "f0f1b01e-6653-44a4-8773-97a78ce3e757"
  },
  {
   "name": "Diahann Ouly",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 15,
   "losses": 16,
   "pointsWon": 566,
   "totalPointsAgainst": 580,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 48.4,
   "diff": -14,
   "ppg": 18.3,
   "leagueRank": 185,
   "rating": -1.3,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "7f49224e-d530-48a6-acc3-30d8b6357a82"
  },
  {
   "name": "Brian Perlowitz",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 15,
   "losses": 16,
   "pointsWon": 565,
   "totalPointsAgainst": 580,
   "mixedWins": 12,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 48.4,
   "diff": -15,
   "ppg": 18.2,
   "leagueRank": 178,
   "rating": -1.1,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1"
  },
  {
   "name": "Megan Torres",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 13,
   "losses": 14,
   "pointsWon": 503,
   "totalPointsAgainst": 471,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 48.1,
   "diff": 32,
   "ppg": 18.6,
   "leagueRank": 153,
   "rating": -0.2,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "45590591-9a85-4098-8ba9-36fc0fa18f4c"
  },
  {
   "name": "Andrew Kimmel",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 13,
   "losses": 14,
   "pointsWon": 509,
   "totalPointsAgainst": 505,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 48.1,
   "diff": 4,
   "ppg": 18.9,
   "leagueRank": 157,
   "rating": 1.2,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "cbd9ae00-0624-49d3-b733-55a2765aff37"
  },
  {
   "name": "Adele Hackney",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 12,
   "losses": 13,
   "pointsWon": 462,
   "totalPointsAgainst": 486,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 48,
   "diff": -24,
   "ppg": 18.5,
   "leagueRank": 166,
   "rating": 2.1,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.4,
   "playerId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "name": "Keith Fallon",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 11,
   "losses": 12,
   "pointsWon": 409,
   "totalPointsAgainst": 400,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 47.8,
   "diff": 9,
   "ppg": 17.8,
   "leagueRank": 197,
   "rating": -1.8,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.1,
   "playerId": "49a11c9c-4eed-430b-8c58-053c30246d45"
  },
  {
   "name": "Jamie West",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 366,
   "totalPointsAgainst": 373,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 47.6,
   "diff": -7,
   "ppg": 17.4,
   "leagueRank": 199,
   "rating": -1.7,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.4,
   "playerId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "name": "Haidee Midgley",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 381,
   "totalPointsAgainst": 404,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 47.6,
   "diff": -23,
   "ppg": 18.1,
   "leagueRank": 176,
   "rating": 0,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
  },
  {
   "name": "Jessica Wormeck",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 361,
   "totalPointsAgainst": 346,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 47.4,
   "diff": 15,
   "ppg": 19,
   "leagueRank": 149,
   "rating": 1.3,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "name": "Karthik Duraiyappan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 349,
   "totalPointsAgainst": 360,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 47.4,
   "diff": -11,
   "ppg": 18.4,
   "leagueRank": 196,
   "rating": -1.2,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.1,
   "playerId": "6d4e3d3a-9162-4ee5-a04f-f82a10552bd5"
  },
  {
   "name": "Derek Lombardi",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 326,
   "totalPointsAgainst": 357,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 47.4,
   "diff": -31,
   "ppg": 17.2,
   "leagueRank": 213,
   "rating": 0.1,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.3,
   "playerId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72"
  },
  {
   "name": "Jason Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 34,
   "wins": 16,
   "losses": 18,
   "pointsWon": 608,
   "totalPointsAgainst": 609,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 47.1,
   "diff": -1,
   "ppg": 17.9,
   "leagueRank": 177,
   "rating": -0.1,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "91ee10a7-dbc3-4beb-81cd-3b154b2af0ac"
  },
  {
   "name": "Rebecca Woofter",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 15,
   "losses": 17,
   "pointsWon": 575,
   "totalPointsAgainst": 576,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 46.9,
   "diff": -1,
   "ppg": 18,
   "leagueRank": 173,
   "rating": 0.2,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "4032408a-b5eb-41c5-a865-fca764d688a5"
  },
  {
   "name": "Thang Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 15,
   "losses": 17,
   "pointsWon": 615,
   "totalPointsAgainst": 616,
   "mixedWins": 11,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 46.9,
   "diff": -1,
   "ppg": 19.2,
   "leagueRank": 158,
   "rating": 0.1,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "915d5222-71a9-4dae-9899-f200fcc8110e"
  },
  {
   "name": "Giang Nguyen",
   "gender": "Male",
   "team": "Open Play",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 272,
   "totalPointsAgainst": 296,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 46.7,
   "diff": -24,
   "ppg": 18.1,
   "leagueRank": 184,
   "rating": 1.4,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.8,
   "playerId": "5dd85d77-40ad-476d-a1a4-90dfcfed61a9"
  },
  {
   "name": "Viviane Tran",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 13,
   "losses": 15,
   "pointsWon": 515,
   "totalPointsAgainst": 508,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 46.4,
   "diff": 7,
   "ppg": 18.4,
   "leagueRank": 172,
   "rating": 0,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "323329ee-8ba1-4c23-a5f5-1592464e8e0b"
  },
  {
   "name": "Diana Dibuccio",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 235,
   "totalPointsAgainst": 246,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 46.2,
   "diff": -11,
   "ppg": 18.1,
   "leagueRank": 243,
   "rating": -1.5,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "f1342844-3771-46a6-bada-39bd0aa96692"
  },
  {
   "name": "Jenny Winters",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 26,
   "wins": 12,
   "losses": 14,
   "pointsWon": 465,
   "totalPointsAgainst": 477,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 46.2,
   "diff": -12,
   "ppg": 17.9,
   "leagueRank": 201,
   "rating": -1.3,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "ea0e9b2c-cdde-48d1-8585-fd47053329b6"
  },
  {
   "name": "Robin Pagotto",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 11,
   "losses": 13,
   "pointsWon": 423,
   "totalPointsAgainst": 438,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 45.8,
   "diff": -15,
   "ppg": 17.6,
   "leagueRank": 207,
   "rating": -1.2,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "d2016fbf-e18d-4051-b3d2-18612ff2a5bf"
  },
  {
   "name": "Corey Abrams",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 215,
   "totalPointsAgainst": 206,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 45.5,
   "diff": 9,
   "ppg": 19.5,
   "leagueRank": 206,
   "rating": -0.2,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3,
   "playerId": "1a37dcd5-8896-4e3e-8219-898b6a418e86"
  },
  {
   "name": "Jeff Kesner",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 15,
   "losses": 18,
   "pointsWon": 590,
   "totalPointsAgainst": 599,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 45.5,
   "diff": -9,
   "ppg": 17.9,
   "leagueRank": 188,
   "rating": -0.4,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01"
  },
  {
   "name": "Jillian Sorrentino",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 193,
   "totalPointsAgainst": 219,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 45.5,
   "diff": -26,
   "ppg": 17.5,
   "leagueRank": 273,
   "rating": 0.4,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 2.3,
   "playerId": "e08d5c89-c2a7-494f-bc55-2a33e22917fd"
  },
  {
   "name": "Marc Matalon",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 9,
   "losses": 11,
   "pointsWon": 372,
   "totalPointsAgainst": 358,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 45,
   "diff": 14,
   "ppg": 18.6,
   "leagueRank": 170,
   "rating": -0.1,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "7891b1eb-476e-4105-b7d3-36853c9e3b28"
  },
  {
   "name": "Peter Lien",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 13,
   "losses": 16,
   "pointsWon": 528,
   "totalPointsAgainst": 531,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 44.8,
   "diff": -3,
   "ppg": 18.2,
   "leagueRank": 180,
   "rating": -0.5,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "86851415-5e99-413d-b521-cd3b3edc1137"
  },
  {
   "name": "Joan Harris",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 13,
   "losses": 16,
   "pointsWon": 534,
   "totalPointsAgainst": 537,
   "mixedWins": 7,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 44.8,
   "diff": -3,
   "ppg": 18.4,
   "leagueRank": 189,
   "rating": -0.8,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "b0132c9e-2a21-45c8-b04d-b84aec626e68"
  },
  {
   "name": "Rakesh Roy",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 17,
   "losses": 21,
   "pointsWon": 679,
   "totalPointsAgainst": 722,
   "mixedWins": 10,
   "mixedLosses": 10,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 44.7,
   "diff": -43,
   "ppg": 17.9,
   "leagueRank": 194,
   "rating": 0.6,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "name": "Jennifer Lynch",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 14,
   "losses": 18,
   "pointsWon": 596,
   "totalPointsAgainst": 605,
   "mixedWins": 5,
   "mixedLosses": 10,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 43.8,
   "diff": -9,
   "ppg": 18.6,
   "leagueRank": 181,
   "rating": 0.6,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.1,
   "playerId": "54a0bc36-2277-4497-bb82-d8499157c1fe"
  },
  {
   "name": "Katie Li",
   "gender": "Female",
   "team": "Open Play",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 14,
   "losses": 18,
   "pointsWon": 568,
   "totalPointsAgainst": 581,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 43.8,
   "diff": -13,
   "ppg": 17.8,
   "leagueRank": 183,
   "rating": 1.2,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "b9087267-ae35-4c4d-baf5-90a51346fb9b"
  },
  {
   "name": "Kim Kronberger",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 359,
   "totalPointsAgainst": 394,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -35,
   "ppg": 17.1,
   "leagueRank": 224,
   "rating": -1.2,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "54f3fa64-a224-4f3d-86a4-4353ea31f5a8"
  },
  {
   "name": "Jen Ogorzat",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 14,
   "losses": 19,
   "pointsWon": 559,
   "totalPointsAgainst": 614,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 42.4,
   "diff": -55,
   "ppg": 16.9,
   "leagueRank": 216,
   "rating": 1,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.2,
   "playerId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "name": "Stephanie Taxter",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 479,
   "totalPointsAgainst": 503,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 42.3,
   "diff": -24,
   "ppg": 18.4,
   "leagueRank": 190,
   "rating": 0.9,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "66a38d92-6b44-498c-8828-a8f7cd95fb9f"
  },
  {
   "name": "Mike Fede",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 8,
   "losses": 11,
   "pointsWon": 332,
   "totalPointsAgainst": 349,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 42.1,
   "diff": -17,
   "ppg": 17.5,
   "leagueRank": 218,
   "rating": -1.2,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.8,
   "playerId": "7663a676-aec1-4dea-9f73-4127a2c88dbb"
  },
  {
   "name": "Patricia Majowicz",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 230,
   "totalPointsAgainst": 209,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": 21,
   "ppg": 19.2,
   "leagueRank": 202,
   "rating": 1.8,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "95bb08f8-b0f7-4849-852e-6bebeb9e3e53"
  },
  {
   "name": "Lisa Sardo",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 227,
   "totalPointsAgainst": 225,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": 2,
   "ppg": 18.9,
   "leagueRank": 226,
   "rating": 0.2,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "5679ab92-a579-42bc-bece-440d1f952f66"
  },
  {
   "name": "Alexis Kerven",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 15,
   "losses": 21,
   "pointsWon": 654,
   "totalPointsAgainst": 662,
   "mixedWins": 8,
   "mixedLosses": 14,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 10,
   "winPct": 41.7,
   "diff": -8,
   "ppg": 18.2,
   "leagueRank": 203,
   "rating": -0.2,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "a2b836f4-8bfa-4baf-b01a-e342f5947c04"
  },
  {
   "name": "John Defilippo",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 197,
   "totalPointsAgainst": 205,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": -8,
   "ppg": 16.4,
   "leagueRank": 225,
   "rating": -0.1,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "a5e93c3d-2397-4974-b96c-035f5ec57152"
  },
  {
   "name": "Helen Goh",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 416,
   "totalPointsAgainst": 474,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": -58,
   "ppg": 17.3,
   "leagueRank": 239,
   "rating": -2.5,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "45230dff-64e7-49b9-b211-595fad5c3e40"
  },
  {
   "name": "Iqra Hasan-Calmo",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 12,
   "losses": 17,
   "pointsWon": 506,
   "totalPointsAgainst": 541,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 41.4,
   "diff": -35,
   "ppg": 17.4,
   "leagueRank": 210,
   "rating": 0.7,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "29c4170e-eb9f-400b-bc22-92f83e056e22"
  },
  {
   "name": "Tiffany Weinert",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 7,
   "losses": 10,
   "pointsWon": 285,
   "totalPointsAgainst": 333,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 41.2,
   "diff": -48,
   "ppg": 16.8,
   "leagueRank": 253,
   "rating": -2.8,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.9,
   "playerId": "f8f61519-1394-4768-b963-f811c2b407a0"
  },
  {
   "name": "Lily Hahn",
   "gender": "Female",
   "team": "Open Play",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 18,
   "losses": 26,
   "pointsWon": 724,
   "totalPointsAgainst": 816,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 17,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 40.9,
   "diff": -92,
   "ppg": 16.5,
   "leagueRank": 231,
   "rating": 0.3,
   "ratingGames": 44,
   "confidence": 88,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.1,
   "playerId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833"
  },
  {
   "name": "Hailee Kurlander",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 11,
   "losses": 16,
   "pointsWon": 492,
   "totalPointsAgainst": 487,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 40.7,
   "diff": 5,
   "ppg": 18.2,
   "leagueRank": 200,
   "rating": -0.2,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "04504eed-6831-4a3d-9854-8a6ba147e1a8"
  },
  {
   "name": "Reuben Zilber",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 13,
   "losses": 19,
   "pointsWon": 564,
   "totalPointsAgainst": 577,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 40.6,
   "diff": -13,
   "ppg": 17.6,
   "leagueRank": 211,
   "rating": -0.1,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "af3befcf-981a-433d-a065-c107cdfa42c4"
  },
  {
   "name": "Marvin Steller",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 13,
   "losses": 19,
   "pointsWon": 594,
   "totalPointsAgainst": 616,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 40.6,
   "diff": -22,
   "ppg": 18.6,
   "leagueRank": 195,
   "rating": 0.5,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "a11d0ccc-a000-4582-bf88-f27df93e00d2"
  },
  {
   "name": "David Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 96,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": 0,
   "ppg": 19.2,
   "leagueRank": 304,
   "rating": 1.2,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "d59aa569-3fe7-439b-aa5a-c42424c91608"
  },
  {
   "name": "Rodney Godwin",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 76,
   "totalPointsAgainst": 100,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -24,
   "ppg": 15.2,
   "leagueRank": 341,
   "rating": -3.1,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -1.2,
   "playerId": "ac299e7b-727b-439c-9f99-1bb4b1a5a6a9"
  },
  {
   "name": "David Abiog",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 414,
   "totalPointsAgainst": 439,
   "mixedWins": 4,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 39.1,
   "diff": -25,
   "ppg": 18,
   "leagueRank": 214,
   "rating": -0.2,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "d2679852-b0e5-4853-abdf-3253a22fdea4"
  },
  {
   "name": "Luan Vo",
   "gender": "Male",
   "team": "Open Play",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 419,
   "totalPointsAgainst": 446,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 39.1,
   "diff": -27,
   "ppg": 18.2,
   "leagueRank": 209,
   "rating": -0.6,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "9b11aeff-377e-48f3-9770-14388ac96b68"
  },
  {
   "name": "Jasmine Ho",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 7,
   "losses": 11,
   "pointsWon": 344,
   "totalPointsAgainst": 341,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 38.9,
   "diff": 3,
   "ppg": 19.1,
   "leagueRank": 187,
   "rating": 0.2,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "681fe702-3295-4dba-98a2-15e8aedc2873"
  },
  {
   "name": "Sultane Cosaj",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 7,
   "losses": 11,
   "pointsWon": 311,
   "totalPointsAgainst": 337,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 38.9,
   "diff": -26,
   "ppg": 17.3,
   "leagueRank": 241,
   "rating": -1.6,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "c80624a6-0c31-4792-bc8d-c9f1d2153dca"
  },
  {
   "name": "Elisabeth Marshall",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 10,
   "losses": 16,
   "pointsWon": 447,
   "totalPointsAgainst": 484,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 38.5,
   "diff": -37,
   "ppg": 17.2,
   "leagueRank": 234,
   "rating": -1,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "2036b1b8-bfb1-49e9-8a36-3e2d91bc336a"
  },
  {
   "name": "Kelly Bowers",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 8,
   "losses": 13,
   "pointsWon": 390,
   "totalPointsAgainst": 393,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 38.1,
   "diff": -3,
   "ppg": 18.6,
   "leagueRank": 191,
   "rating": 1.4,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.1,
   "playerId": "25c2cf33-ede0-4610-85d6-e08cddc05484"
  },
  {
   "name": "Matthew Cohen",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 432,
   "totalPointsAgainst": 456,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 37.5,
   "diff": -24,
   "ppg": 18,
   "leagueRank": 223,
   "rating": -0.7,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "d068c594-50ee-495b-8997-766c9f6c68d5"
  },
  {
   "name": "Thomas Lum",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 12,
   "losses": 20,
   "pointsWon": 569,
   "totalPointsAgainst": 623,
   "mixedWins": 2,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 37.5,
   "diff": -54,
   "ppg": 17.8,
   "leagueRank": 235,
   "rating": -0.8,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0,
   "playerId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7"
  },
  {
   "name": "Jason Rosenberg",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 210,
   "totalPointsAgainst": 223,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 36.4,
   "diff": -13,
   "ppg": 19.1,
   "leagueRank": 265,
   "rating": 1.8,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.8,
   "playerId": "ce12bbc9-1bf3-48fa-8c54-15afb33e1dcb"
  },
  {
   "name": "Jose Chariez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 8,
   "losses": 14,
   "pointsWon": 377,
   "totalPointsAgainst": 422,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 36.4,
   "diff": -45,
   "ppg": 17.1,
   "leagueRank": 250,
   "rating": -1.3,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "4dc234ca-c486-4a9f-adb5-0ab8e257379d"
  },
  {
   "name": "Kris Miller",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 9,
   "losses": 16,
   "pointsWon": 451,
   "totalPointsAgainst": 484,
   "mixedWins": 3,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 36,
   "diff": -33,
   "ppg": 18,
   "leagueRank": 227,
   "rating": -0.7,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.3,
   "playerId": "8f90f526-02c7-43e5-84ee-60cc2e7fd1b4"
  },
  {
   "name": "Charishma Serrano",
   "gender": "Female",
   "team": "Open Play",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 9,
   "losses": 16,
   "pointsWon": 417,
   "totalPointsAgainst": 476,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 36,
   "diff": -59,
   "ppg": 16.7,
   "leagueRank": 245,
   "rating": 0.2,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "5fdbcd51-c12c-49f7-84f6-31f8b00ea8b1"
  },
  {
   "name": "Michele Iannella",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 39,
   "wins": 14,
   "losses": 25,
   "pointsWon": 685,
   "totalPointsAgainst": 768,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 35.9,
   "diff": -83,
   "ppg": 17.6,
   "leagueRank": 236,
   "rating": -0.6,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "2ce4041d-b45e-4c9f-87ec-c6ec04dec0e8"
  },
  {
   "name": "Ryan Ablaza",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 243,
   "totalPointsAgainst": 272,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 35.7,
   "diff": -29,
   "ppg": 17.4,
   "leagueRank": 248,
   "rating": -1.5,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "15b54109-a001-4ad0-acde-bbb49a5909b5"
  },
  {
   "name": "Devin Kenny",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 28,
   "wins": 10,
   "losses": 18,
   "pointsWon": 496,
   "totalPointsAgainst": 552,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 35.7,
   "diff": -56,
   "ppg": 17.7,
   "leagueRank": 233,
   "rating": -0.6,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "6a04fe9c-1b2d-4504-b705-db9bd71e94bf"
  },
  {
   "name": "Butch Kreilick",
   "gender": "Male",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 12,
   "losses": 22,
   "pointsWon": 598,
   "totalPointsAgainst": 651,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 9,
   "winPct": 35.3,
   "diff": -53,
   "ppg": 17.6,
   "leagueRank": 244,
   "rating": -2.1,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "name": "Steven Fernandez",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 12,
   "losses": 22,
   "pointsWon": 578,
   "totalPointsAgainst": 658,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 35.3,
   "diff": -80,
   "ppg": 17,
   "leagueRank": 246,
   "rating": -0.8,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "name": "Tuan Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 7,
   "losses": 13,
   "pointsWon": 356,
   "totalPointsAgainst": 378,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 35,
   "diff": -22,
   "ppg": 17.8,
   "leagueRank": 232,
   "rating": -0.5,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "7bafdd3b-e5cd-4d7a-9098-515a2b560851"
  },
  {
   "name": "Claire Nguyen",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 7,
   "losses": 13,
   "pointsWon": 349,
   "totalPointsAgainst": 374,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 35,
   "diff": -25,
   "ppg": 17.5,
   "leagueRank": 240,
   "rating": -0.7,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0,
   "playerId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3"
  },
  {
   "name": "Marvin Lao",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 7,
   "losses": 13,
   "pointsWon": 344,
   "totalPointsAgainst": 396,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 35,
   "diff": -52,
   "ppg": 17.2,
   "leagueRank": 256,
   "rating": -1.8,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "838de378-832d-4d6e-8e6a-44e1edb42719"
  },
  {
   "name": "Todd Woodard",
   "gender": "Male",
   "team": "Open Play",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 8,
   "losses": 15,
   "pointsWon": 362,
   "totalPointsAgainst": 451,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 34.8,
   "diff": -89,
   "ppg": 15.7,
   "leagueRank": 263,
   "rating": -0.3,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.9,
   "playerId": "f7632286-b2a6-4f7d-aef2-bc85e4b308b0"
  },
  {
   "name": "Sandy Duarte",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 10,
   "losses": 19,
   "pointsWon": 503,
   "totalPointsAgainst": 573,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 34.5,
   "diff": -70,
   "ppg": 17.3,
   "leagueRank": 258,
   "rating": -1.8,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "be1f6512-56a2-4b91-b483-7677af01867a"
  },
  {
   "name": "Diana Tabia",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 11,
   "losses": 21,
   "pointsWon": 559,
   "totalPointsAgainst": 615,
   "mixedWins": 5,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 34.4,
   "diff": -56,
   "ppg": 17.5,
   "leagueRank": 247,
   "rating": -1.4,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.6,
   "playerId": "7494f19a-141d-4c00-8d37-d5e79eca4853"
  },
  {
   "name": "Kristin Granath",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 11,
   "losses": 21,
   "pointsWon": 564,
   "totalPointsAgainst": 626,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 34.4,
   "diff": -62,
   "ppg": 17.6,
   "leagueRank": 238,
   "rating": -0.6,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "560573da-979a-4ae6-ae00-90d223db2816"
  },
  {
   "name": "Julianna Aiello",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 101,
   "totalPointsAgainst": 111,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -10,
   "ppg": 16.8,
   "leagueRank": 321,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.4,
   "playerId": "c1fc38fe-8943-422e-8400-0f93d16db597"
  },
  {
   "name": "Dan Perkins",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 88,
   "totalPointsAgainst": 108,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -20,
   "ppg": 14.7,
   "leagueRank": 327,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 2.8,
   "playerId": "1684c22c-38ed-4f23-83bf-7dbd39607280"
  },
  {
   "name": "Gabe Nacion",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 10,
   "losses": 20,
   "pointsWon": 541,
   "totalPointsAgainst": 581,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 33.3,
   "diff": -40,
   "ppg": 18,
   "leagueRank": 229,
   "rating": -0.3,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "b18fc532-a96e-400d-a321-73d52554df87"
  },
  {
   "name": "Sahil Agarwala",
   "gender": "Male",
   "team": "Open Play",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 253,
   "totalPointsAgainst": 298,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -45,
   "ppg": 16.9,
   "leagueRank": 259,
   "rating": -1,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "b845549e-8d1c-4f75-8010-630a9fb9281d"
  },
  {
   "name": "Paul Michael Serrano",
   "gender": "Male",
   "team": "Open Play",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 9,
   "losses": 18,
   "pointsWon": 473,
   "totalPointsAgainst": 529,
   "mixedWins": 5,
   "mixedLosses": 12,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 33.3,
   "diff": -56,
   "ppg": 17.5,
   "leagueRank": 242,
   "rating": -0.6,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.1,
   "playerId": "b0097209-2d93-4856-8887-b040299f9dbd"
  },
  {
   "name": "Karen Marshall",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 13,
   "losses": 27,
   "pointsWon": 706,
   "totalPointsAgainst": 769,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 4,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 10,
   "winPct": 32.5,
   "diff": -63,
   "ppg": 17.7,
   "leagueRank": 237,
   "rating": 0.1,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "53a84b91-acc8-4a27-a7e5-2081e1afcc98"
  },
  {
   "name": "Kenneth Bautista",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 7,
   "losses": 15,
   "pointsWon": 411,
   "totalPointsAgainst": 427,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 8,
   "winPct": 31.8,
   "diff": -16,
   "ppg": 18.7,
   "leagueRank": 217,
   "rating": 0.6,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "c383dca8-551f-4776-90d7-7f57248d1680"
  },
  {
   "name": "Margo Langer",
   "gender": "Female",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 7,
   "losses": 15,
   "pointsWon": 379,
   "totalPointsAgainst": 402,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 31.8,
   "diff": -23,
   "ppg": 17.2,
   "leagueRank": 252,
   "rating": -2,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75"
  },
  {
   "name": "Matthew Marciani",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 7,
   "losses": 15,
   "pointsWon": 372,
   "totalPointsAgainst": 425,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 31.8,
   "diff": -53,
   "ppg": 16.9,
   "leagueRank": 262,
   "rating": -1.3,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "ec0da4c0-f52a-4ab9-a579-6ca3d815f19c"
  },
  {
   "name": "Matt Soliman",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 6,
   "losses": 13,
   "pointsWon": 325,
   "totalPointsAgainst": 377,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 31.6,
   "diff": -52,
   "ppg": 17.1,
   "leagueRank": 264,
   "rating": -2.2,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "a955b9bb-4b46-4bb5-af0e-2f8c89009b22"
  },
  {
   "name": "Annica Jin-Hendel",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 263,
   "totalPointsAgainst": 309,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 31.3,
   "diff": -46,
   "ppg": 16.4,
   "leagueRank": 268,
   "rating": -2.1,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "3eccc234-1e37-493c-b4d6-626f1b482fec"
  },
  {
   "name": "Thomas Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 10,
   "losses": 23,
   "pointsWon": 587,
   "totalPointsAgainst": 629,
   "mixedWins": 5,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 30.3,
   "diff": -42,
   "ppg": 17.8,
   "leagueRank": 249,
   "rating": -1.6,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "9c6d4e1a-71eb-4c19-af5b-7efc2758939a"
  },
  {
   "name": "Jeff Pzena",
   "gender": "Male",
   "team": "Open Play",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 161,
   "totalPointsAgainst": 199,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 30,
   "diff": -38,
   "ppg": 16.1,
   "leagueRank": 311,
   "rating": -0.1,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.8,
   "playerId": "51439438-8246-4751-b526-a10c54fb0b73"
  },
  {
   "name": "Nicole Melchionna",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 6,
   "losses": 14,
   "pointsWon": 317,
   "totalPointsAgainst": 390,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 30,
   "diff": -73,
   "ppg": 15.9,
   "leagueRank": 270,
   "rating": 0.4,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -3.2,
   "strengthOfOpponents": 0.5,
   "playerId": "cce11776-3ad2-4727-8b1d-7e848a1343de"
  },
  {
   "name": "Jennifer Guldin",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 11,
   "losses": 26,
   "pointsWon": 642,
   "totalPointsAgainst": 728,
   "mixedWins": 4,
   "mixedLosses": 14,
   "genderWins": 7,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 29.7,
   "diff": -86,
   "ppg": 17.4,
   "leagueRank": 255,
   "rating": -0.2,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "584e770c-86b1-4561-ba01-4ef1aad6ff9b"
  },
  {
   "name": "Jamie Walsh",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 5,
   "losses": 12,
   "pointsWon": 300,
   "totalPointsAgainst": 322,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 29.4,
   "diff": -22,
   "ppg": 17.6,
   "leagueRank": 254,
   "rating": -2.2,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "0decf4d5-453b-41f8-b5f8-3ff5ba34237a"
  },
  {
   "name": "Sheila Curran",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 125,
   "totalPointsAgainst": 140,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -15,
   "ppg": 17.9,
   "leagueRank": 328,
   "rating": 0.8,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.7,
   "playerId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "name": "Lana Engler Carss",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 123,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -15,
   "ppg": 17.6,
   "leagueRank": 332,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 2.1,
   "playerId": "e832c271-3f52-48b6-8a3f-bdf699531a03"
  },
  {
   "name": "Taryn Seidner",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 229,
   "totalPointsAgainst": 273,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -44,
   "ppg": 16.4,
   "leagueRank": 293,
   "rating": -0.5,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1,
   "playerId": "2dd97210-f5b8-4645-b400-a2611539cca8"
  },
  {
   "name": "Juliana Berg",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 226,
   "totalPointsAgainst": 283,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -57,
   "ppg": 16.1,
   "leagueRank": 305,
   "rating": -2.5,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "8f9fe430-75af-43c9-9eb3-371d0a9d70d7"
  },
  {
   "name": "Nathan Trimmer",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 10,
   "losses": 25,
   "pointsWon": 580,
   "totalPointsAgainst": 693,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 28.6,
   "diff": -113,
   "ppg": 16.6,
   "leagueRank": 267,
   "rating": -1.7,
   "ratingGames": 35,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "9541ec05-a25a-4577-b59c-bdf04006b1b6"
  },
  {
   "name": "Elizabeth Dailey",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 7,
   "losses": 18,
   "pointsWon": 415,
   "totalPointsAgainst": 499,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 28,
   "diff": -84,
   "ppg": 16.6,
   "leagueRank": 271,
   "rating": -1.6,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b"
  },
  {
   "name": "Robert Hudson",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 315,
   "totalPointsAgainst": 336,
   "mixedWins": 0,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 27.8,
   "diff": -21,
   "ppg": 17.5,
   "leagueRank": 260,
   "rating": -2.6,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0.2,
   "playerId": "23c04a93-9526-468c-8fdd-a2b36fb10941"
  },
  {
   "name": "Alex Glushek",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 36,
   "wins": 10,
   "losses": 26,
   "pointsWon": 622,
   "totalPointsAgainst": 701,
   "mixedWins": 5,
   "mixedLosses": 14,
   "genderWins": 5,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 27.8,
   "diff": -79,
   "ppg": 17.3,
   "leagueRank": 257,
   "rating": -0.3,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "65e58579-8b95-46f1-9e95-a3e53347de32"
  },
  {
   "name": "Patti Calhoon",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 194,
   "totalPointsAgainst": 225,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 27.3,
   "diff": -31,
   "ppg": 17.6,
   "leagueRank": 294,
   "rating": -2.2,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.8,
   "playerId": "dda14163-7c4e-4316-90f1-0a3852107876"
  },
  {
   "name": "Catherine Malabanan",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 185,
   "totalPointsAgainst": 220,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -35,
   "ppg": 16.8,
   "leagueRank": 302,
   "rating": -1.7,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "431b6290-28c1-49a9-b2a1-a0bb26532cca"
  },
  {
   "name": "Taylor Leuck",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 6,
   "losses": 16,
   "pointsWon": 389,
   "totalPointsAgainst": 429,
   "mixedWins": 2,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 27.3,
   "diff": -40,
   "ppg": 17.7,
   "leagueRank": 261,
   "rating": -0.4,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1,
   "playerId": "72954591-9ccc-4961-8505-b9da6cee2320"
  },
  {
   "name": "Rachael Osetkowski",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 7,
   "losses": 20,
   "pointsWon": 451,
   "totalPointsAgainst": 534,
   "mixedWins": 3,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 25.9,
   "diff": -83,
   "ppg": 16.7,
   "leagueRank": 266,
   "rating": 0.2,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "2f50700d-74d4-426f-85c9-b894f72096f0"
  },
  {
   "name": "Lawrence Dipietro",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 11,
   "losses": 32,
   "pointsWon": 730,
   "totalPointsAgainst": 864,
   "mixedWins": 4,
   "mixedLosses": 17,
   "genderWins": 7,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 11,
   "winPct": 25.6,
   "diff": -134,
   "ppg": 17,
   "leagueRank": 269,
   "rating": -1.5,
   "ratingGames": 43,
   "confidence": 88,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "c521a44b-2c1e-43f3-bd58-eccadd1d0433"
  },
  {
   "name": "Dhanesh Ghia",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 76,
   "totalPointsAgainst": 82,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -6,
   "ppg": 19,
   "leagueRank": 338,
   "rating": 0.9,
   "ratingGames": 4,
   "confidence": 45,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 2.2,
   "playerId": "9311307c-4c96-4876-9403-41a71e785c3a"
  },
  {
   "name": "Maria Keselman",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 71,
   "totalPointsAgainst": 80,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -9,
   "ppg": 17.8,
   "leagueRank": 347,
   "rating": -0.7,
   "ratingGames": 4,
   "confidence": 45,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "ea2f2b11-2538-4f55-b87f-53aea4f5d4d7"
  },
  {
   "name": "Jaerene Medeiros",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 68,
   "totalPointsAgainst": 82,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -14,
   "ppg": 17,
   "leagueRank": 345,
   "rating": -1.8,
   "ratingGames": 4,
   "confidence": 45,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 1,
   "playerId": "ee6add19-54b8-42db-b4ea-81ea6c1ec00a"
  },
  {
   "name": "Jessica Kopec",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 6,
   "losses": 18,
   "pointsWon": 380,
   "totalPointsAgainst": 467,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 25,
   "diff": -87,
   "ppg": 15.8,
   "leagueRank": 284,
   "rating": -1.8,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "3b6e4a3b-d867-475c-9418-ea6f854b8dd8"
  },
  {
   "name": "Susan Li",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 6,
   "losses": 19,
   "pointsWon": 427,
   "totalPointsAgainst": 505,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 24,
   "diff": -78,
   "ppg": 17.1,
   "leagueRank": 275,
   "rating": -2,
   "ratingGames": 25,
   "confidence": 81,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363"
  },
  {
   "name": "Peter Hackney",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 5,
   "losses": 16,
   "pointsWon": 353,
   "totalPointsAgainst": 422,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 23.8,
   "diff": -69,
   "ppg": 16.8,
   "leagueRank": 274,
   "rating": 0.2,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.4,
   "playerId": "0839ae18-ad84-45e6-bfde-3d0855e06b22"
  },
  {
   "name": "James Yu",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 8,
   "losses": 26,
   "pointsWon": 547,
   "totalPointsAgainst": 673,
   "mixedWins": 4,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 23.5,
   "diff": -126,
   "ppg": 16.1,
   "leagueRank": 282,
   "rating": -1.9,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "125cee00-5416-44ef-81e6-00818e3c64f6"
  },
  {
   "name": "Rachel Appleton",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 7,
   "losses": 23,
   "pointsWon": 489,
   "totalPointsAgainst": 598,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 16,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 23.3,
   "diff": -109,
   "ppg": 16.3,
   "leagueRank": 281,
   "rating": -2,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "db90de13-5c04-4d76-b9b8-2cd30c9900a8"
  },
  {
   "name": "Jebril Guevarra",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 7,
   "losses": 24,
   "pointsWon": 502,
   "totalPointsAgainst": 628,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 22.6,
   "diff": -126,
   "ppg": 16.2,
   "leagueRank": 290,
   "rating": -2.1,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "08175577-0ebd-4e9d-99f8-27910ed5f02f"
  },
  {
   "name": "Rashmi Patade",
   "gender": "Female",
   "team": "Open Play",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 199,
   "totalPointsAgainst": 285,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 21.4,
   "diff": -86,
   "ppg": 14.2,
   "leagueRank": 318,
   "rating": -0.7,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -2.9,
   "strengthOfOpponents": 1.2,
   "playerId": "c56ab685-5c55-4437-98a6-7a9b8c95895d"
  },
  {
   "name": "Michael Guldin",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 6,
   "losses": 22,
   "pointsWon": 474,
   "totalPointsAgainst": 569,
   "mixedWins": 1,
   "mixedLosses": 14,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 21.4,
   "diff": -95,
   "ppg": 16.9,
   "leagueRank": 278,
   "rating": -1.4,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "a147036c-405c-4d49-be3b-00a1270f848f"
  },
  {
   "name": "Isha Rahalkar",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 4,
   "losses": 15,
   "pointsWon": 330,
   "totalPointsAgainst": 382,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 21.1,
   "diff": -52,
   "ppg": 17.4,
   "leagueRank": 279,
   "rating": -2.4,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "9e3df962-0702-4e31-b6bb-6ade42de72f4"
  },
  {
   "name": "Mayra Tuba",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 4,
   "losses": 15,
   "pointsWon": 311,
   "totalPointsAgainst": 364,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 21.1,
   "diff": -53,
   "ppg": 16.4,
   "leagueRank": 277,
   "rating": -0.5,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "72a2a3e0-df8e-4e68-a685-c6e493bb44f2"
  },
  {
   "name": "Elpidio Arias",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 4,
   "losses": 15,
   "pointsWon": 300,
   "totalPointsAgainst": 381,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 21.1,
   "diff": -81,
   "ppg": 15.8,
   "leagueRank": 296,
   "rating": -1.6,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "76dcad38-def0-4d35-a58c-8490c6eb642e"
  },
  {
   "name": "Morgan Valencia King",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 5,
   "losses": 19,
   "pointsWon": 398,
   "totalPointsAgainst": 491,
   "mixedWins": 3,
   "mixedLosses": 11,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 20.8,
   "diff": -93,
   "ppg": 16.6,
   "leagueRank": 285,
   "rating": -2.2,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "ac049c23-359d-4508-8bc1-274a7276239c"
  },
  {
   "name": "Trisha Marion",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 7,
   "losses": 27,
   "pointsWon": 550,
   "totalPointsAgainst": 689,
   "mixedWins": 3,
   "mixedLosses": 14,
   "genderWins": 4,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 20.6,
   "diff": -139,
   "ppg": 16.2,
   "leagueRank": 287,
   "rating": -1.4,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 0.1,
   "playerId": "5956c13a-1fe1-45b2-bd4f-d0200d4adda5"
  },
  {
   "name": "Rohit Kumar",
   "gender": "Male",
   "team": "Open Play",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 87,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -16,
   "ppg": 17.4,
   "leagueRank": 340,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -3.2,
   "strengthOfOpponents": 0.3,
   "playerId": "b419f11c-70a5-4f4b-86cf-27626609f808"
  },
  {
   "name": "Sharon Oddy",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 65,
   "totalPointsAgainst": 98,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -33,
   "ppg": 13,
   "leagueRank": 359,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.9,
   "playerId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "name": "Melissa Mackey",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 246,
   "totalPointsAgainst": 299,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -53,
   "ppg": 16.4,
   "leagueRank": 292,
   "rating": -3.1,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "eb92331b-662d-4f91-bf8a-aa8b93c0c02b"
  },
  {
   "name": "Andrew Frey",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 241,
   "totalPointsAgainst": 301,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -60,
   "ppg": 16.1,
   "leagueRank": 289,
   "rating": -0.4,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.7,
   "playerId": "beb70730-42da-4979-93b9-bd5c88a52d75"
  },
  {
   "name": "Alex Lopez",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 232,
   "totalPointsAgainst": 293,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 20,
   "diff": -61,
   "ppg": 15.5,
   "leagueRank": 297,
   "rating": -2,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": -0.6,
   "playerId": "93fde1cd-1880-495a-bde8-06dde4e159bf"
  },
  {
   "name": "David Burke",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 9,
   "losses": 36,
   "pointsWon": 731,
   "totalPointsAgainst": 895,
   "mixedWins": 5,
   "mixedLosses": 17,
   "genderWins": 4,
   "genderLosses": 19,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 20,
   "diff": -164,
   "ppg": 16.2,
   "leagueRank": 283,
   "rating": -0.8,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.4,
   "playerId": "69b99d4e-f80c-480a-a008-33ff326a3c93"
  },
  {
   "name": "Jade Chin",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 9,
   "losses": 36,
   "pointsWon": 671,
   "totalPointsAgainst": 893,
   "mixedWins": 4,
   "mixedLosses": 18,
   "genderWins": 5,
   "genderLosses": 18,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 20,
   "diff": -222,
   "ppg": 14.9,
   "leagueRank": 301,
   "rating": -1.6,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.5,
   "playerId": "4fcda82e-e24a-45d7-9784-c230d47a113b"
  },
  {
   "name": "Sarah Silva",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 5,
   "losses": 21,
   "pointsWon": 405,
   "totalPointsAgainst": 525,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 0,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 19.2,
   "diff": -120,
   "ppg": 15.6,
   "leagueRank": 299,
   "rating": -2,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1,
   "playerId": "341e5936-88d4-4231-8cc3-1285a0c2f3e1"
  },
  {
   "name": "Jason Heiselman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 4,
   "losses": 17,
   "pointsWon": 323,
   "totalPointsAgainst": 425,
   "mixedWins": 2,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 19,
   "diff": -102,
   "ppg": 15.4,
   "leagueRank": 308,
   "rating": -3.4,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "24b7e6fe-4568-4d20-9cea-6b29169d486e"
  },
  {
   "name": "Emily Sowa",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 21,
   "wins": 4,
   "losses": 17,
   "pointsWon": 297,
   "totalPointsAgainst": 418,
   "mixedWins": 3,
   "mixedLosses": 10,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 19,
   "diff": -121,
   "ppg": 14.1,
   "leagueRank": 309,
   "rating": -3.2,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
   "playerId": "42d01dab-4aca-4c74-aa73-47be4fbff788"
  },
  {
   "name": "Jason Grote",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 6,
   "losses": 27,
   "pointsWon": 522,
   "totalPointsAgainst": 669,
   "mixedWins": 3,
   "mixedLosses": 13,
   "genderWins": 3,
   "genderLosses": 14,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 18.2,
   "diff": -147,
   "ppg": 15.8,
   "leagueRank": 298,
   "rating": -2.1,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.1,
   "playerId": "a7e6fe82-3337-42eb-b7b6-8cdde6523ace"
  },
  {
   "name": "Simon Burns",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 5,
   "losses": 23,
   "pointsWon": 415,
   "totalPointsAgainst": 572,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 17.9,
   "diff": -157,
   "ppg": 14.8,
   "leagueRank": 315,
   "rating": -5.1,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "3a1cc58f-1661-41c2-b2cb-4e39a1b60bac"
  },
  {
   "name": "Kerrin Wolf",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 100,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -24,
   "ppg": 16.7,
   "leagueRank": 337,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.7,
   "playerId": "380c17c0-ffb6-491c-8771-061102f4ed98"
  },
  {
   "name": "Crizle Ong",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 93,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -31,
   "ppg": 15.5,
   "leagueRank": 343,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 2.1,
   "playerId": "611e6c5a-d294-40b0-bf75-afbca58b145a"
  },
  {
   "name": "Natalia Maciejewicz",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 93,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -31,
   "ppg": 15.5,
   "leagueRank": 350,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "ffd29340-40ba-4a85-a922-f93075d9b0df"
  },
  {
   "name": "Maryjane Fajardo",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 79,
   "totalPointsAgainst": 119,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -40,
   "ppg": 13.2,
   "leagueRank": 357,
   "rating": -2.3,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -3.1,
   "strengthOfOpponents": -0.1,
   "playerId": "8416fd0a-5644-46d0-b00e-48009144847d"
  },
  {
   "name": "Brandon Helicher",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 3,
   "losses": 15,
   "pointsWon": 285,
   "totalPointsAgainst": 370,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -85,
   "ppg": 15.8,
   "leagueRank": 303,
   "rating": -1.9,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": -0.1,
   "playerId": "d3120166-5a46-4711-9975-819941f623c8"
  },
  {
   "name": "Lukas Chrebet",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 4,
   "losses": 23,
   "pointsWon": 417,
   "totalPointsAgainst": 544,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 14.8,
   "diff": -127,
   "ppg": 15.4,
   "leagueRank": 307,
   "rating": -3.2,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0,
   "playerId": "42795346-b8aa-4e5d-80a5-8a1768c094e8"
  },
  {
   "name": "Karen Krasko",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 110,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -35,
   "ppg": 15.7,
   "leagueRank": 351,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.5,
   "playerId": "98676da5-63a9-4561-8e5b-9e4b932d7b8b"
  },
  {
   "name": "Joshua Reyes",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 100,
   "totalPointsAgainst": 139,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -39,
   "ppg": 14.3,
   "leagueRank": 355,
   "rating": -1.9,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.3,
   "playerId": "3d42cfa3-1b3f-49e0-9955-6832d51e6318"
  },
  {
   "name": "Alicia Valko",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 91,
   "totalPointsAgainst": 140,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -49,
   "ppg": 13,
   "leagueRank": 361,
   "rating": -2.9,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.5,
   "playerId": "2d0e1678-9ee4-4889-960c-69370ae8b999"
  },
  {
   "name": "Anbu Cheeralan",
   "gender": "Male",
   "team": "Open Play",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 3,
   "losses": 19,
   "pointsWon": 310,
   "totalPointsAgainst": 451,
   "mixedWins": 3,
   "mixedLosses": 10,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 13.6,
   "diff": -141,
   "ppg": 14.1,
   "leagueRank": 314,
   "rating": -1.1,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 1.3,
   "playerId": "77f81ccf-106a-4a27-9c3d-5b5383c5db5a"
  },
  {
   "name": "Nancy Pace",
   "gender": "Female",
   "team": "Open Play",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 2,
   "losses": 13,
   "pointsWon": 215,
   "totalPointsAgainst": 296,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 13.3,
   "diff": -81,
   "ppg": 14.3,
   "leagueRank": 313,
   "rating": -0.7,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 1.2,
   "playerId": "b051e0af-ace0-4fa2-a58d-e4898c03fa95"
  },
  {
   "name": "Yawen Zhang",
   "gender": "Female",
   "team": "Open Play",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 112,
   "totalPointsAgainst": 163,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -51,
   "ppg": 14,
   "leagueRank": 349,
   "rating": -1,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 1.4,
   "playerId": "771ab070-5ea6-4b8f-ba6b-b42a50712034"
  },
  {
   "name": "Illyce Katz",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 107,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -59,
   "ppg": 13.4,
   "leagueRank": 356,
   "rating": -5.4,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "de04d961-7500-4b47-9e75-f882615afb19"
  },
  {
   "name": "Sherry Tomaino",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 106,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 12.5,
   "diff": -60,
   "ppg": 13.3,
   "leagueRank": 354,
   "rating": -2.6,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.9,
   "playerId": "981ae183-14b1-4b7f-880e-8f03e94ca703"
  },
  {
   "name": "Zoe Zapf",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 2,
   "losses": 14,
   "pointsWon": 209,
   "totalPointsAgainst": 327,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -118,
   "ppg": 13.1,
   "leagueRank": 320,
   "rating": -2.3,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": 1,
   "playerId": "d0f30788-f690-40db-8709-f1e485efc940"
  },
  {
   "name": "Michele Sagurton",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 4,
   "losses": 29,
   "pointsWon": 436,
   "totalPointsAgainst": 675,
   "mixedWins": 1,
   "mixedLosses": 14,
   "genderWins": 3,
   "genderLosses": 15,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 12.1,
   "diff": -239,
   "ppg": 13.2,
   "leagueRank": 322,
   "rating": -4.6,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.2,
   "playerId": "caa5146b-9cc5-4a02-adf0-c70e822854fc"
  },
  {
   "name": "Katherine Mott",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 3,
   "losses": 24,
   "pointsWon": 413,
   "totalPointsAgainst": 556,
   "mixedWins": 0,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 11.1,
   "diff": -143,
   "ppg": 15.3,
   "leagueRank": 312,
   "rating": -3,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0,
   "playerId": "014db139-e54f-4546-8fdb-77dfe90e5780"
  },
  {
   "name": "Katie O'Mara",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 3,
   "losses": 24,
   "pointsWon": 377,
   "totalPointsAgainst": 555,
   "mixedWins": 1,
   "mixedLosses": 12,
   "genderWins": 2,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 11.1,
   "diff": -178,
   "ppg": 14,
   "leagueRank": 319,
   "rating": -2.6,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.8,
   "playerId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "name": "Tyler Kellner",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 173,
   "totalPointsAgainst": 205,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 10,
   "diff": -32,
   "ppg": 17.3,
   "leagueRank": 316,
   "rating": -1.5,
   "ratingGames": 10,
   "confidence": 68,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.4,
   "playerId": "6d5137ae-c91c-4070-9012-aa20f6cb62a3"
  },
  {
   "name": "Rick Khounlavouth",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 166,
   "totalPointsAgainst": 202,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 10,
   "diff": -36,
   "ppg": 16.6,
   "leagueRank": 331,
   "rating": -1.9,
   "ratingGames": 10,
   "confidence": 68,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.2,
   "playerId": "081547e3-0672-4e71-8ccd-b223d5ecc211"
  },
  {
   "name": "Patricia Tuquero",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 2,
   "losses": 20,
   "pointsWon": 310,
   "totalPointsAgainst": 454,
   "mixedWins": 2,
   "mixedLosses": 9,
   "genderWins": 0,
   "genderLosses": 11,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 9.1,
   "diff": -144,
   "ppg": 14.1,
   "leagueRank": 323,
   "rating": -3.4,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "5f5166e1-3615-47ee-b4d6-d03093f180a4"
  },
  {
   "name": "Ross Bienstock",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 2,
   "losses": 23,
   "pointsWon": 334,
   "totalPointsAgainst": 516,
   "mixedWins": 0,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 8,
   "diff": -182,
   "ppg": 13.4,
   "leagueRank": 325,
   "rating": -3.5,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 0.3,
   "playerId": "4464f477-6545-4e8f-8893-af53a8eeefb5"
  },
  {
   "name": "Kordell Alexander",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 2,
   "losses": 23,
   "pointsWon": 326,
   "totalPointsAgainst": 521,
   "mixedWins": 0,
   "mixedLosses": 11,
   "genderWins": 2,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 8,
   "diff": -195,
   "ppg": 13,
   "leagueRank": 329,
   "rating": -3.6,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.7,
   "playerId": "133e6ef0-6318-407f-8110-d088f7e00fdc"
  },
  {
   "name": "Udita Agarwala",
   "gender": "Female",
   "team": "Open Play",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 2,
   "losses": 26,
   "pointsWon": 362,
   "totalPointsAgainst": 584,
   "mixedWins": 2,
   "mixedLosses": 13,
   "genderWins": 0,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 7.1,
   "diff": -222,
   "ppg": 12.9,
   "leagueRank": 330,
   "rating": -4.8,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "2351aaff-bff5-4734-9b22-20ce6988c40d"
  },
  {
   "name": "Michelle Cobos",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 2,
   "losses": 27,
   "pointsWon": 398,
   "totalPointsAgainst": 596,
   "mixedWins": 1,
   "mixedLosses": 12,
   "genderWins": 1,
   "genderLosses": 15,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 6.9,
   "diff": -198,
   "ppg": 13.7,
   "leagueRank": 324,
   "rating": -3.5,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.6,
   "playerId": "94e54237-56df-41b2-8b89-675a69762740"
  },
  {
   "name": "Adolfo Nicdao",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 1,
   "losses": 16,
   "pointsWon": 207,
   "totalPointsAgainst": 355,
   "mixedWins": 1,
   "mixedLosses": 10,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 5.9,
   "diff": -148,
   "ppg": 12.2,
   "leagueRank": 335,
   "rating": -3.7,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": -3.1,
   "strengthOfOpponents": 0.5,
   "playerId": "8113bbe4-2b33-431a-8f71-61121ebc956f"
  },
  {
   "name": "Ricardo Fontanilla",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 1,
   "losses": 19,
   "pointsWon": 268,
   "totalPointsAgainst": 418,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 0,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 5,
   "diff": -150,
   "ppg": 13.4,
   "leagueRank": 326,
   "rating": -2.8,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 1,
   "playerId": "7db295d5-04dd-42cb-bbed-e4ec7856e654"
  },
  {
   "name": "Lili Zhang",
   "gender": "Female",
   "team": "Open Play",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 1,
   "losses": 25,
   "pointsWon": 341,
   "totalPointsAgainst": 544,
   "mixedWins": 0,
   "mixedLosses": 13,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 3.8,
   "diff": -203,
   "ppg": 13.1,
   "leagueRank": 333,
   "rating": -5.2,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "219b369d-c5eb-4ef8-bcea-559f56d94ff0"
  },
  {
   "name": "Carly Magarrell",
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
   "leagueRank": 394,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1ed425f9-d64e-4cdc-90dd-58de313f0cf6"
  },
  {
   "name": "Ethan Garcia",
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
   "leagueRank": 387,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "54e1e042-3810-4949-90cf-3b134f207f80"
  },
  {
   "name": "Brandon Lofele",
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
   "leagueRank": 393,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "68d08c3a-9282-4fc9-9f3d-4b032889b3db"
  },
  {
   "name": "Karen Veninger",
   "gender": "Female",
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
   "leagueRank": 416,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "name": "Babar Bhatti",
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
   "leagueRank": 371,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9a223962-202a-4334-9396-45c680b0aa30"
  },
  {
   "name": "Farzin Khosrow-Khavar",
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
   "leagueRank": 390,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a8e359ff-faf3-4267-8736-032218c4ed73"
  },
  {
   "name": "Sonia Pego",
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
   "leagueRank": 402,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c9703548-4d44-4960-8212-22be2c048a66"
  },
  {
   "name": "Kayla Gipson",
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
   "leagueRank": 388,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cac68244-9c27-49bf-9354-1e9282427426"
  },
  {
   "name": "Cathy Matko",
   "gender": "Female",
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
   "leagueRank": 395,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "name": "Rommel Santos",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 60,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -24,
   "ppg": 15,
   "leagueRank": 363,
   "rating": -2.4,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "8ce91d1e-e5eb-439f-b181-48332a03f660"
  },
  {
   "name": "Christopher Knapp",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 86,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -40,
   "ppg": 14.3,
   "leagueRank": 358,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.5,
   "playerId": "dfce779b-3ef8-4413-a742-9e06c08782be"
  },
  {
   "name": "Jorge Diaz Iii",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 59,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -46,
   "ppg": 11.8,
   "leagueRank": 367,
   "rating": -3.7,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 2,
   "playerId": "1d102c25-e1fe-4d91-865d-39bd33f9a7cb"
  },
  {
   "name": "Deborah Appleton",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 78,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -48,
   "ppg": 13,
   "leagueRank": 365,
   "rating": -3.5,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "f8db8e6b-5fb0-467a-838b-1c5f790b244a"
  },
  {
   "name": "Gray Ferrante",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 53,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -52,
   "ppg": 10.6,
   "leagueRank": 368,
   "rating": -3.4,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -3.2,
   "strengthOfOpponents": 0.5,
   "playerId": "1e83a359-47bb-49ae-bb0b-116dbd04ef74"
  },
  {
   "name": "Marina Volpe",
   "gender": "Female",
   "team": "Pickle House",
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
   "leagueRank": 366,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 2.6,
   "playerId": "cb063892-906f-4769-8815-2a87da5bf426"
  },
  {
   "name": "Courtney Wu",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 89,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -79,
   "ppg": 11.1,
   "leagueRank": 364,
   "rating": -4.8,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.5,
   "playerId": "e2b67207-a728-4faa-a830-232df72c9abe"
  },
  {
   "name": "Robert Leming",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 0,
   "losses": 10,
   "pointsWon": 122,
   "totalPointsAgainst": 210,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -88,
   "ppg": 12.2,
   "leagueRank": 360,
   "rating": -3.6,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": -3.5,
   "strengthOfOpponents": 0.1,
   "playerId": "a3f274c4-aa04-45ad-879c-233507d87f98"
  },
  {
   "name": "Elizabeth Trimble",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 0,
   "losses": 10,
   "pointsWon": 108,
   "totalPointsAgainst": 210,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -102,
   "ppg": 10.8,
   "leagueRank": 362,
   "rating": -5.6,
   "ratingGames": 10,
   "confidence": 67,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0,
   "playerId": "82c7f594-f817-46ae-a7a0-715f4be5cd76"
  },
  {
   "name": "Lisa Murphy",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 0,
   "losses": 14,
   "pointsWon": 187,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -107,
   "ppg": 13.4,
   "leagueRank": 344,
   "rating": -3.4,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.7,
   "playerId": "3a873bd3-eb02-4d94-9be4-bb19938b9087"
  },
  {
   "name": "Cathy Mclaughlin",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 0,
   "losses": 14,
   "pointsWon": 179,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 9,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -115,
   "ppg": 12.8,
   "leagueRank": 348,
   "rating": -4.2,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 0.1,
   "playerId": "8f4f1a96-9e08-462d-8186-ce4d8389e894"
  },
  {
   "name": "Alexander Babatunde",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 0,
   "losses": 14,
   "pointsWon": 175,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -119,
   "ppg": 12.5,
   "leagueRank": 346,
   "rating": -4,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 0.5,
   "playerId": "8cb755e5-2a87-409f-8bb6-5773012cfca4"
  },
  {
   "name": "Barry Lerner",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 0,
   "losses": 17,
   "pointsWon": 226,
   "totalPointsAgainst": 357,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 12,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -131,
   "ppg": 13.3,
   "leagueRank": 334,
   "rating": -4.7,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.1,
   "playerId": "ab2b42d0-c15e-4983-afb5-cbef2d674af5"
  },
  {
   "name": "Giomarco Urbina",
   "gender": "Male",
   "team": "Open Play",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 0,
   "losses": 17,
   "pointsWon": 219,
   "totalPointsAgainst": 357,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 12,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -138,
   "ppg": 12.9,
   "leagueRank": 336,
   "rating": -4.2,
   "ratingGames": 17,
   "confidence": 76,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.1,
   "playerId": "1d3261f0-c0b4-4f19-93d9-69820d8a9911"
  },
  {
   "name": "John Dechristopher",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 0,
   "losses": 17,
   "pointsWon": 212,
   "totalPointsAgainst": 357,
   "mixedWins": 0,
   "mixedLosses": 9,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -145,
   "ppg": 12.5,
   "leagueRank": 339,
   "rating": -4.1,
   "ratingGames": 17,
   "confidence": 78,
   "strengthOfPartners": -3,
   "strengthOfOpponents": 0.2,
   "playerId": "882e40aa-e8ec-4322-a9f9-f6f3631a43c2"
  },
  {
   "name": "Chantya Roberson",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 124,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -149,
   "ppg": 9.5,
   "leagueRank": 352,
   "rating": -4.1,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -3.3,
   "strengthOfOpponents": 1.4,
   "playerId": "68cbf4f5-a41e-4724-a1b5-b8d3d06767e1"
  },
  {
   "name": "Michele Iannella Sr.",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 17,
   "wins": 0,
   "losses": 17,
   "pointsWon": 192,
   "totalPointsAgainst": 357,
   "mixedWins": 0,
   "mixedLosses": 9,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -165,
   "ppg": 11.3,
   "leagueRank": 342,
   "rating": -5.1,
   "ratingGames": 17,
   "confidence": 78,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.7,
   "playerId": "7aa82eab-c6ff-4d90-ae45-7fbfe063f084"
  },
  {
   "name": "Alexander Masotti",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 0,
   "losses": 14,
   "pointsWon": 128,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -166,
   "ppg": 9.1,
   "leagueRank": 353,
   "rating": -4.3,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -3.2,
   "strengthOfOpponents": 1.6,
   "playerId": "5d975e37-5ced-4065-baf6-b2f949c6c78a"
  }
 ],
 "teams": [
  {
   "name": "PickleRage Union County Net Ninjas",
   "w": 6,
   "l": 0,
   "pf": 3926,
   "pa": 3200,
   "gw": 141,
   "gl": 51,
   "diff": 726,
   "gameDiff": 90,
   "power": 2,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northwest B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     69,
     27
    ],
    "male": [
     34,
     14
    ],
    "female": [
     38,
     10
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Tinton Falls",
   "w": 5,
   "l": 0,
   "pf": 3317,
   "pa": 2397,
   "gw": 136,
   "gl": 24,
   "diff": 920,
   "gameDiff": 112,
   "power": 2.3,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northeast A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     69,
     11
    ],
    "male": [
     32,
     8
    ],
    "female": [
     35,
     5
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hamilton",
   "w": 5,
   "l": 1,
   "pf": 3779,
   "pa": 3362,
   "gw": 119,
   "gl": 73,
   "diff": 417,
   "gameDiff": 46,
   "power": 1.2,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     62,
     34
    ],
    "male": [
     31,
     17
    ],
    "female": [
     26,
     22
    ]
   }
  },
  {
   "name": "ACE Downingtown",
   "w": 4,
   "l": 1,
   "pf": 3129,
   "pa": 2892,
   "gw": 102,
   "gl": 58,
   "diff": 237,
   "gameDiff": 44,
   "power": 1.3,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     51,
     29
    ],
    "male": [
     26,
     14
    ],
    "female": [
     25,
     15
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Lehigh Valley",
   "w": 4,
   "l": 2,
   "pf": 3768,
   "pa": 3439,
   "gw": 121,
   "gl": 71,
   "diff": 329,
   "gameDiff": 50,
   "power": 1.1,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     58,
     38
    ],
    "male": [
     33,
     15
    ],
    "female": [
     30,
     18
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 4,
   "l": 2,
   "pf": 3663,
   "pa": 3410,
   "gw": 114,
   "gl": 78,
   "diff": 253,
   "gameDiff": 36,
   "power": 0.4,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     56,
     40
    ],
    "male": [
     29,
     19
    ],
    "female": [
     29,
     19
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 4,
   "l": 2,
   "pf": 3719,
   "pa": 3535,
   "gw": 112,
   "gl": 80,
   "diff": 184,
   "gameDiff": 32,
   "power": 0.8,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northwest A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     64,
     32
    ],
    "male": [
     18,
     30
    ],
    "female": [
     30,
     18
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 4,
   "l": 2,
   "pf": 3649,
   "pa": 3509,
   "gw": 109,
   "gl": 83,
   "diff": 140,
   "gameDiff": 26,
   "power": 0.6,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northwest B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     49,
     47
    ],
    "male": [
     28,
     20
    ],
    "female": [
     32,
     16
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 4,
   "l": 2,
   "pf": 3628,
   "pa": 3422,
   "gw": 106,
   "gl": 86,
   "diff": 206,
   "gameDiff": 20,
   "power": 0.7,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northeast B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     55,
     41
    ],
    "male": [
     24,
     24
    ],
    "female": [
     27,
     21
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 4,
   "l": 2,
   "pf": 3609,
   "pa": 3590,
   "gw": 95,
   "gl": 97,
   "diff": 19,
   "gameDiff": -2,
   "power": 0.1,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northwest A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     41,
     55
    ],
    "male": [
     29,
     19
    ],
    "female": [
     25,
     23
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 3,
   "l": 2,
   "pf": 3187,
   "pa": 2764,
   "gw": 104,
   "gl": 56,
   "diff": 423,
   "gameDiff": 48,
   "power": 0.7,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northeast B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     51,
     29
    ],
    "male": [
     27,
     13
    ],
    "female": [
     26,
     14
    ]
   }
  },
  {
   "name": "Bounce Philly",
   "w": 3,
   "l": 2,
   "pf": 3151,
   "pa": 2947,
   "gw": 97,
   "gl": 63,
   "diff": 204,
   "gameDiff": 34,
   "power": 1.1,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     49,
     31
    ],
    "male": [
     22,
     18
    ],
    "female": [
     26,
     14
    ]
   }
  },
  {
   "name": "Players Courtyard",
   "w": 3,
   "l": 2,
   "pf": 2970,
   "pa": 2961,
   "gw": 80,
   "gl": 80,
   "diff": 9,
   "gameDiff": 0,
   "power": -0.1,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     38,
     42
    ],
    "male": [
     26,
     14
    ],
    "female": [
     16,
     24
    ]
   }
  },
  {
   "name": "Pickleball HQ",
   "w": 3,
   "l": 3,
   "pf": 3746,
   "pa": 3635,
   "gw": 101,
   "gl": 91,
   "diff": 111,
   "gameDiff": 10,
   "power": 0.7,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northeast A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     43,
     53
    ],
    "male": [
     32,
     16
    ],
    "female": [
     26,
     22
    ]
   }
  },
  {
   "name": "Bounce Tempest",
   "w": 3,
   "l": 3,
   "pf": 3601,
   "pa": 3578,
   "gw": 93,
   "gl": 99,
   "diff": 23,
   "gameDiff": -6,
   "power": 0.2,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     50,
     46
    ],
    "male": [
     17,
     31
    ],
    "female": [
     26,
     22
    ]
   }
  },
  {
   "name": "Picklr Newark",
   "w": 1,
   "l": 4,
   "pf": 2945,
   "pa": 3123,
   "gw": 65,
   "gl": 95,
   "diff": -178,
   "gameDiff": -30,
   "power": -0.9,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     30,
     50
    ],
    "male": [
     17,
     23
    ],
    "female": [
     18,
     22
    ]
   }
  },
  {
   "name": "PickleRage Union County Pandas",
   "w": 1,
   "l": 5,
   "pf": 3403,
   "pa": 3758,
   "gw": 74,
   "gl": 118,
   "diff": -355,
   "gameDiff": -44,
   "power": -0.3,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northwest B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     42,
     54
    ],
    "male": [
     23,
     25
    ],
    "female": [
     9,
     39
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro",
   "w": 1,
   "l": 5,
   "pf": 3379,
   "pa": 3852,
   "gw": 62,
   "gl": 130,
   "diff": -473,
   "gameDiff": -68,
   "power": -0.5,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     33,
     63
    ],
    "male": [
     11,
     37
    ],
    "female": [
     18,
     30
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 1,
   "l": 5,
   "pf": 2938,
   "pa": 3933,
   "gw": 32,
   "gl": 160,
   "diff": -995,
   "gameDiff": -128,
   "power": -2,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northeast A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     16,
     80
    ],
    "male": [
     7,
     41
    ],
    "female": [
     9,
     39
    ]
   }
  },
  {
   "name": "Open Play",
   "w": 0,
   "l": 6,
   "pf": 3165,
   "pa": 3816,
   "gw": 57,
   "gl": 135,
   "diff": -651,
   "gameDiff": -78,
   "power": -0.7,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northwest A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     32,
     64
    ],
    "male": [
     16,
     32
    ],
    "female": [
     9,
     39
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 0,
   "l": 6,
   "pf": 3111,
   "pa": 3839,
   "gw": 53,
   "gl": 139,
   "diff": -728,
   "gameDiff": -86,
   "power": -1.2,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northeast B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     29,
     67
    ],
    "male": [
     10,
     38
    ],
    "female": [
     14,
     34
    ]
   }
  },
  {
   "name": "Pickle Juice Blackwood",
   "w": 0,
   "l": 6,
   "pf": 3111,
   "pa": 3932,
   "gw": 43,
   "gl": 149,
   "diff": -821,
   "gameDiff": -106,
   "power": -1.7,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     21,
     75
    ],
    "male": [
     12,
     36
    ],
    "female": [
     10,
     38
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Rob Stever",
   "b": "Srinath Katari",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 3.3,
   "avgActual": 7.3,
   "avgExpected": 0.8,
   "aId": "519426b7-932a-4dd5-9865-ebaadb3d226d",
   "bId": "abd6070d-3dd7-4313-b27e-2f2c702d0dd5"
  },
  {
   "a": "Mike Fede",
   "b": "Lauren Gabat",
   "team": "Picklr Newark",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.7,
   "avgActual": 7,
   "avgExpected": 1.5,
   "aId": "7663a676-aec1-4dea-9f73-4127a2c88dbb",
   "bId": "ef0b7b1a-41ac-4ccd-b502-a68ad5549a3b"
  },
  {
   "a": "Brian Perlowitz",
   "b": "Danica Bramschreiber",
   "team": "Home Court",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 5.7,
   "avgExpected": 1.7,
   "aId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1",
   "bId": "362cbda8-a78b-43bb-b653-1daef081ce2f"
  },
  {
   "a": "Lily Hahn",
   "b": "Joseph Korom",
   "team": "Open Play",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2.4,
   "avgActual": 7,
   "avgExpected": 2.7,
   "aId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833",
   "bId": "f014daaa-0b2e-4e20-b820-79741affdbcd"
  },
  {
   "a": "Cesar Alvarez",
   "b": "Carlos Echenique",
   "team": "PickleRage Union County Net Ninjas",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 10.8,
   "avgExpected": 6.1,
   "aId": "3b7c9eab-a6e2-4e8d-b0f6-bb9a6b6dc0eb",
   "bId": "74530d59-ff19-42a4-87d4-0e3b9e516c66"
  },
  {
   "a": "Anne Buckley",
   "b": "Line Barlow",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 5.7,
   "avgExpected": 2,
   "aId": "07881006-c083-4729-8424-410aeee08940",
   "bId": "20f0fb60-8e60-448c-b971-40fb6e7fca23"
  },
  {
   "a": "David Horowitz",
   "b": "Brandi Horowitz",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 6.7,
   "avgExpected": 1.5,
   "aId": "8dc8c957-0a4a-411d-b49a-35a35174a5ac",
   "bId": "bc3fda4d-3cf9-4daf-a2f1-6010ce63195e"
  },
  {
   "a": "James Yu",
   "b": "Emily Sowa",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 2.2,
   "avgActual": -2.2,
   "avgExpected": -6.7,
   "aId": "125cee00-5416-44ef-81e6-00818e3c64f6",
   "bId": "42d01dab-4aca-4c74-aa73-47be4fbff788"
  },
  {
   "a": "Sarah Silva",
   "b": "Ed Amato",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.2,
   "avgActual": 2.3,
   "avgExpected": -2,
   "aId": "341e5936-88d4-4231-8cc3-1285a0c2f3e1",
   "bId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "a": "Victor Salicetti",
   "b": "Tony Wong",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2,
   "avgActual": 3,
   "avgExpected": -1.7,
   "aId": "08cb8582-4347-4694-9f58-7e479aa3b7a5",
   "bId": "e3828158-4c75-4583-9a96-c00b2e01252f"
  },
  {
   "a": "Kevin Algarme",
   "b": "Esterlina Wiest",
   "team": "ACE Downingtown",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 8,
   "avgExpected": 4.6,
   "aId": "af1295ea-6786-47fd-8c51-dae10f13070a",
   "bId": "b43f9cca-12f6-4af2-bcb7-1b9debd7514a"
  },
  {
   "a": "Megan Quigley",
   "b": "Thuy Nguyen",
   "team": "Bounce Tempest",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 7.3,
   "avgExpected": 4.3,
   "aId": "37d69abc-9610-4c03-a618-f905bd0e2fb1",
   "bId": "8ea3584b-11a3-4d0c-ace0-bce5bd3a00f1"
  },
  {
   "a": "Danica Bramschreiber",
   "b": "Marc Matalon",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 7.7,
   "avgExpected": 3.3,
   "aId": "362cbda8-a78b-43bb-b653-1daef081ce2f",
   "bId": "7891b1eb-476e-4105-b7d3-36853c9e3b28"
  },
  {
   "a": "Simon Burns",
   "b": "Jonathan Briones",
   "team": "Picklr Newark",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 1.3,
   "avgExpected": -3,
   "aId": "3a1cc58f-1661-41c2-b2cb-4e39a1b60bac",
   "bId": "774f6fd0-33aa-47c2-8b61-167976b46b8e"
  },
  {
   "a": "Alan Weissman",
   "b": "Maxwell Winters",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 6,
   "avgExpected": 1.8,
   "aId": "12febf17-8650-40dd-92ca-a0bda06caf0f",
   "bId": "d5037744-373a-485e-9fd3-5564495b8c2d"
  },
  {
   "a": "Kristin Granath",
   "b": "Jennifer Guldin",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.8,
   "avgActual": 2.8,
   "avgExpected": -0.8,
   "aId": "560573da-979a-4ae6-ae00-90d223db2816",
   "bId": "584e770c-86b1-4561-ba01-4ef1aad6ff9b"
  },
  {
   "a": "Cassie Lou",
   "b": "Connie Tom",
   "team": "PickleRage Union County Net Ninjas",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 5,
   "avgExpected": 1.5,
   "aId": "27f83d5a-2e86-4e5b-af70-9394a8765ac6",
   "bId": "493b9730-cc53-4634-9561-49c6f1ddcb08"
  },
  {
   "a": "Jayson Lee",
   "b": "Kerry Eskay",
   "team": "PickleRage Union County Net Ninjas",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 7.7,
   "avgExpected": 3.5,
   "aId": "145a759d-3547-4ba8-a466-85f7c857a392",
   "bId": "8dc8f169-bf38-463a-b8a0-6c238e275325"
  },
  {
   "a": "Danny Ruiz",
   "b": "Jen Ogorzat",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 5,
   "avgExpected": 1.1,
   "aId": "cf86f914-08ca-4df6-9cdb-74a23afc2478",
   "bId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "a": "Barbara Mccarron",
   "b": "Ryan Peixoto",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 3.8,
   "avgExpected": 0.3,
   "aId": "9179cc04-34f4-48f4-b30d-69ec894d05f4",
   "bId": "95fdba0f-fc53-412d-b050-19808558761f"
  },
  {
   "a": "Nikki Nigro",
   "b": "Reuben Zilber",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 5.6,
   "avgExpected": 2.5,
   "aId": "01c2e4d1-3738-4ee6-8878-4a2559ec006a",
   "bId": "af3befcf-981a-433d-a065-c107cdfa42c4"
  },
  {
   "a": "Alyssa Beattie",
   "b": "Andy Pineda",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 4,
   "avgExpected": 0,
   "aId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf",
   "bId": "bb6c579d-1627-4971-ad0f-4be65598d579"
  },
  {
   "a": "Ismael Hernandez",
   "b": "Esterlina Wiest",
   "team": "ACE Downingtown",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 4.4,
   "avgExpected": 2,
   "aId": "262cf0be-4906-46fb-ab84-f4aa760bac58",
   "bId": "b43f9cca-12f6-4af2-bcb7-1b9debd7514a"
  },
  {
   "a": "Katelyn Carretas",
   "b": "Raymond Duong",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 3.8,
   "avgExpected": 0.6,
   "aId": "9564f996-6460-4bbd-b589-270545a1d4ef",
   "bId": "9b7fad1a-a312-4d60-94e8-a1e138bb38fb"
  },
  {
   "a": "Ryan Peixoto",
   "b": "Suki Wong",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 7.8,
   "avgExpected": 5.2,
   "aId": "95fdba0f-fc53-412d-b050-19808558761f",
   "bId": "b92a5442-fd20-4e2f-896b-26cc5cfa5ea5"
  },
  {
   "a": "Taylor Leuck",
   "b": "Julianna Rodrigues",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 7.7,
   "avgExpected": 3.9,
   "aId": "72954591-9ccc-4961-8505-b9da6cee2320",
   "bId": "77c32d66-d466-4308-9c45-1639e1925b70"
  },
  {
   "a": "Nikki Nigro",
   "b": "Charlene De Lara",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 5.8,
   "avgExpected": 2.6,
   "aId": "01c2e4d1-3738-4ee6-8878-4a2559ec006a",
   "bId": "16f9fddd-e9cd-4e65-9090-2764c44fc74a"
  },
  {
   "a": "Mark Wenstrom",
   "b": "Lakshmikanth Chaluvadi",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 4,
   "avgExpected": 0.9,
   "aId": "12159177-8eb2-4e6f-bb4f-22575eeed130",
   "bId": "377302a4-12da-4449-bbfc-a28248436679"
  },
  {
   "a": "Miles Townsend",
   "b": "Radhika Sud",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 7,
   "avgExpected": 3.4,
   "aId": "cf59ad9f-a37d-44d2-abcf-5ec17532a6aa",
   "bId": "f3d6a801-faed-44cb-a7fa-fd0b3bdff981"
  },
  {
   "a": "Kim Kronberger",
   "b": "James Conroy",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 3,
   "avgExpected": -0.7,
   "aId": "54f3fa64-a224-4f3d-86a4-4353ea31f5a8",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Maggie Wang",
   "b": "Alan Weissman",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 4.3,
   "avgExpected": 1.4,
   "aId": "0c1f375a-1567-4b92-8fb2-907a22d8e2ee",
   "bId": "12febf17-8650-40dd-92ca-a0bda06caf0f"
  },
  {
   "a": "Charlene De Lara",
   "b": "Reuben Zilber",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 4.5,
   "avgExpected": 1.5,
   "aId": "16f9fddd-e9cd-4e65-9090-2764c44fc74a",
   "bId": "af3befcf-981a-433d-a065-c107cdfa42c4"
  },
  {
   "a": "Rob Stever",
   "b": "Christopher Sachs",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.5,
   "avgActual": -2,
   "avgExpected": -5.5,
   "aId": "519426b7-932a-4dd5-9865-ebaadb3d226d",
   "bId": "52e5dfee-42f1-4c8f-b3ee-ca7c6e49a7fb"
  },
  {
   "a": "Hee Kim",
   "b": "Charlene De Lara",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6,
   "avgExpected": 2.6,
   "aId": "03fa8bb2-957d-45f2-9e41-628a2c5ac9e0",
   "bId": "16f9fddd-e9cd-4e65-9090-2764c44fc74a"
  },
  {
   "a": "James Gillick",
   "b": "Matthew Ferrante",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 4.7,
   "avgExpected": 1.2,
   "aId": "60dda206-8284-415e-b83e-3836d61e6701",
   "bId": "b813a895-871c-4e52-a0f8-e723f4066ead"
  },
  {
   "a": "Jebril Guevarra",
   "b": "Patricia Tuquero",
   "team": "PickleRage Union County Pandas",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": 1.4,
   "avgActual": -3.5,
   "avgExpected": -5.6,
   "aId": "08175577-0ebd-4e9d-99f8-27910ed5f02f",
   "bId": "5f5166e1-3615-47ee-b4d6-d03093f180a4"
  },
  {
   "a": "Juri Solano",
   "b": "Ed Amato",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 5.3,
   "avgExpected": 2.1,
   "aId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0",
   "bId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "a": "Rebecca Woofter",
   "b": "Sophie O’Driscoll",
   "team": "Players Courtyard",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 5.3,
   "avgExpected": 2.5,
   "aId": "4032408a-b5eb-41c5-a865-fca764d688a5",
   "bId": "40f98b81-c10a-4e0b-9154-3a8ffa3d784c"
  },
  {
   "a": "Carlos Echenique",
   "b": "Brandon Agudelo",
   "team": "PickleRage Union County Net Ninjas",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7.8,
   "avgExpected": 5,
   "aId": "74530d59-ff19-42a4-87d4-0e3b9e516c66",
   "bId": "a2c6fd48-c70a-4dc1-a1e0-4c177c4b0f58"
  },
  {
   "a": "Huifang Yao",
   "b": "Kerry Eskay",
   "team": "PickleRage Union County Net Ninjas",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 8.4,
   "avgExpected": 6.2,
   "aId": "0678b5e4-cf92-49cb-8689-2d90cc356950",
   "bId": "8dc8f169-bf38-463a-b8a0-6c238e275325"
  },
  {
   "a": "Ashley Altman",
   "b": "Lauren Gabat",
   "team": "Picklr Newark",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.5,
   "avgExpected": 0.7,
   "aId": "57cb28c4-947f-4ea0-a6eb-5e21a777552a",
   "bId": "ef0b7b1a-41ac-4ccd-b502-a68ad5549a3b"
  },
  {
   "a": "Brittany Riccitiello",
   "b": "Papa Aggrey",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 9.7,
   "avgExpected": 6.5,
   "aId": "aea847ce-8af4-4809-b421-b25faeef0563",
   "bId": "b113d589-6857-4555-95d4-935d5f62e50c"
  },
  {
   "a": "Ismael Hernandez",
   "b": "Raymond Duong",
   "team": "ACE Downingtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 5.7,
   "avgExpected": 2.5,
   "aId": "262cf0be-4906-46fb-ab84-f4aa760bac58",
   "bId": "9b7fad1a-a312-4d60-94e8-a1e138bb38fb"
  },
  {
   "a": "Katie Li",
   "b": "Joseph Korom",
   "team": "Open Play",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 6.2,
   "avgExpected": 3.7,
   "aId": "b9087267-ae35-4c4d-baf5-90a51346fb9b",
   "bId": "f014daaa-0b2e-4e20-b820-79741affdbcd"
  },
  {
   "a": "Lukas Chrebet",
   "b": "Nicole Melchionna",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 2.3,
   "avgExpected": -1,
   "aId": "42795346-b8aa-4e5d-80a5-8a1768c094e8",
   "bId": "cce11776-3ad2-4727-8b1d-7e848a1343de"
  },
  {
   "a": "Rachel Searby",
   "b": "Froilan Sunga",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7,
   "avgExpected": 4.3,
   "aId": "3648420d-4dae-4404-8b67-3162f343f6aa",
   "bId": "af6465d2-7a02-4dc5-a6b4-62cee62fe93a"
  },
  {
   "a": "Supriya Kothakonda",
   "b": "Rakesh Roy",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 4.7,
   "avgExpected": 1.4,
   "aId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Rachael Osetkowski",
   "b": "Mayra Tuba",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 0.5,
   "avgExpected": -2,
   "aId": "2f50700d-74d4-426f-85c9-b894f72096f0",
   "bId": "72a2a3e0-df8e-4e68-a685-c6e493bb44f2"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "Paul Matzko",
   "team": "Flemington",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 4.3,
   "avgExpected": 1.7,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Adele Hackney",
   "b": "Jason Rosenberg",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 2,
   "avgExpected": -1,
   "aId": "c1e41980-e98d-4208-aa10-dc04e407cf8f",
   "bId": "ce12bbc9-1bf3-48fa-8c54-15afb33e1dcb"
  },
  {
   "a": "Nathan Trimmer",
   "b": "Michael Guldin",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.3,
   "avgActual": -0.8,
   "avgExpected": -3.1,
   "aId": "9541ec05-a25a-4577-b59c-bdf04006b1b6",
   "bId": "a147036c-405c-4d49-be3b-00a1270f848f"
  },
  {
   "a": "David Schwartz",
   "b": "Rosellen Perlowitz",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.8,
   "avgExpected": 1.4,
   "aId": "908a8539-b3a5-437a-957f-e900db3c01b9",
   "bId": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf"
  },
  {
   "a": "Cassie Lou",
   "b": "Jimmy Tom",
   "team": "PickleRage Union County Net Ninjas",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 8.7,
   "avgExpected": 5.7,
   "aId": "27f83d5a-2e86-4e5b-af70-9394a8765ac6",
   "bId": "4e873e4f-16c8-4504-a702-941e045a7d3b"
  },
  {
   "a": "Sandy Duarte",
   "b": "Bill Dower",
   "team": "Picklr Newark",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.8,
   "avgExpected": 1.2,
   "aId": "be1f6512-56a2-4b91-b483-7677af01867a",
   "bId": "f920b62c-0fa3-417a-ac3e-b7bb6f555fc4"
  },
  {
   "a": "Tuan Nguyen",
   "b": "Jason Nguyen",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 2.3,
   "avgExpected": -0.4,
   "aId": "7bafdd3b-e5cd-4d7a-9098-515a2b560851",
   "bId": "91ee10a7-dbc3-4beb-81cd-3b154b2af0ac"
  },
  {
   "a": "Evelyn Geating",
   "b": "Grady Craig",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 4.3,
   "avgExpected": 1.4,
   "aId": "798a21bd-83e7-42e9-bd86-c74448c7dada",
   "bId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "a": "Chris Alworth",
   "b": "Alina Allakhveranova",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 6.8,
   "avgExpected": 4.9,
   "aId": "286cbda4-8288-4a14-931c-f84521407eb7",
   "bId": "bbf13d1a-5393-4549-9d15-c5d2975f3e55"
  },
  {
   "a": "Zyanya Flores",
   "b": "Michael Alfaro",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.6,
   "avgExpected": 2.4,
   "aId": "148bddd6-0d6a-468a-903d-84ba2da82239",
   "bId": "d060c2f3-016e-4260-97fc-d0cbea4415f5"
  },
  {
   "a": "Julianna Rodrigues",
   "b": "Jaymie Vincelli",
   "team": "Pickleball HQ",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3.5,
   "avgExpected": 1.7,
   "aId": "77c32d66-d466-4308-9c45-1639e1925b70",
   "bId": "daba10b1-0903-4d21-b71f-f2b670a0b428"
  },
  {
   "a": "Jasmine Nguyen",
   "b": "Katelyn Carretas",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2,
   "avgExpected": -0.3,
   "aId": "8621d525-134a-4647-a7bd-98c3a357cdc3",
   "bId": "9564f996-6460-4bbd-b589-270545a1d4ef"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "Jen Ogorzat",
   "team": "Pickle House",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 0.8,
   "avgExpected": -1.2,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "a": "Jonathan Jamison",
   "b": "Andrea Galanti",
   "team": "APC Garden State",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 4.5,
   "avgExpected": 2.5,
   "aId": "8b4ec650-391b-47a7-90e3-af9989d74df0",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Karen Marshall",
   "b": "Jason Grote",
   "team": "Pickle Juice Blackwood",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": -0.2,
   "avgExpected": -2.5,
   "aId": "53a84b91-acc8-4a27-a7e5-2081e1afcc98",
   "bId": "a7e6fe82-3337-42eb-b7b6-8cdde6523ace"
  },
  {
   "a": "Michael Van Horn",
   "b": "Michele Iannella",
   "team": "Pickle Juice Blackwood",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.4,
   "avgExpected": 0.5,
   "aId": "0782db8d-bb52-4a47-88b5-00e8db2358c4",
   "bId": "2ce4041d-b45e-4c9f-87ec-c6ec04dec0e8"
  },
  {
   "a": "Amanda Nguyen",
   "b": "John Danks",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 7.3,
   "avgExpected": 4.6,
   "aId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Hailee Kurlander",
   "b": "Yash Mehta",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 8.3,
   "avgExpected": 5.6,
   "aId": "04504eed-6831-4a3d-9854-8a6ba147e1a8",
   "bId": "adc25ed0-4bc3-47da-9509-4caeb8f90185"
  },
  {
   "a": "Reuben Zilber",
   "b": "Matthew Marciani",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.2,
   "avgActual": -0.2,
   "avgExpected": -2.4,
   "aId": "af3befcf-981a-433d-a065-c107cdfa42c4",
   "bId": "ec0da4c0-f52a-4ab9-a579-6ca3d815f19c"
  },
  {
   "a": "Ashley Altman",
   "b": "Bill Dower",
   "team": "Picklr Newark",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5.4,
   "avgExpected": 3.2,
   "aId": "57cb28c4-947f-4ea0-a6eb-5e21a777552a",
   "bId": "f920b62c-0fa3-417a-ac3e-b7bb6f555fc4"
  },
  {
   "a": "Quynh Nguyen",
   "b": "Thang Nguyen",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.7,
   "avgExpected": 0.8,
   "aId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
   "bId": "915d5222-71a9-4dae-9899-f200fcc8110e"
  },
  {
   "a": "Claire Nguyen",
   "b": "Jason Nguyen",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.3,
   "avgExpected": -0.4,
   "aId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3",
   "bId": "91ee10a7-dbc3-4beb-81cd-3b154b2af0ac"
  },
  {
   "a": "William Waggenspack",
   "b": "Grady Craig",
   "team": "Bounce Philly",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 5.4,
   "avgExpected": 3.5,
   "aId": "8aaeb517-ab68-4f67-9b9b-e347909f52e7",
   "bId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "a": "Zyanya Flores",
   "b": "Kevin Altieri",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 10,
   "avgExpected": 7.7,
   "aId": "148bddd6-0d6a-468a-903d-84ba2da82239",
   "bId": "9b8a71a7-9173-4757-8937-8364922234ef"
  },
  {
   "a": "Andrew Kimmel",
   "b": "Maxwell Winters",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.3,
   "avgExpected": -0.4,
   "aId": "cbd9ae00-0624-49d3-b733-55a2765aff37",
   "bId": "d5037744-373a-485e-9fd3-5564495b8c2d"
  },
  {
   "a": "Rhys Gardiner",
   "b": "Brian Seligson",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.8,
   "avgExpected": 0.6,
   "aId": "084d4f59-84ab-40bb-8503-0495501e1ea9",
   "bId": "66cca19b-c691-4ee2-addb-f8344943103e"
  },
  {
   "a": "Patricia San Andres",
   "b": "Adam Werwie",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 9,
   "avgExpected": 6.1,
   "aId": "42e86266-ff96-4961-8e27-adeac7084f59",
   "bId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "a": "Haidee Midgley",
   "b": "Steven Fernandez",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2,
   "avgExpected": -0.4,
   "aId": "c5bab0da-de53-4551-bfbe-620d61235c2d",
   "bId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "a": "Karthik Duraiyappan",
   "b": "Papa Aggrey",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3,
   "avgExpected": 0.2,
   "aId": "6d4e3d3a-9162-4ee5-a04f-f82a10552bd5",
   "bId": "b113d589-6857-4555-95d4-935d5f62e50c"
  },
  {
   "a": "Liane Feyas",
   "b": "Kelly Aylward",
   "team": "Monroe",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 4.8,
   "avgExpected": 3,
   "aId": "2266824f-5ba8-4da3-a512-94c8e14f7c90",
   "bId": "6068d706-4a9a-4475-8d31-d5a900172f27"
  },
  {
   "a": "Cory Mintz",
   "b": "Stephen Fredericksen",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 8,
   "avgExpected": 5.4,
   "aId": "33feb337-f2ab-4e6d-819b-9535ec743685",
   "bId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "a": "Jamie Walsh",
   "b": "Rebecca Woofter",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3.3,
   "avgExpected": 0.9,
   "aId": "0decf4d5-453b-41f8-b5f8-3ff5ba34237a",
   "bId": "4032408a-b5eb-41c5-a865-fca764d688a5"
  },
  {
   "a": "Kristin Larosa",
   "b": "David Schwartz",
   "team": "Home Court",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 5.3,
   "avgExpected": 3.6,
   "aId": "03162d88-f7e2-4381-9ede-fd884d73940b",
   "bId": "908a8539-b3a5-437a-957f-e900db3c01b9"
  },
  {
   "a": "Ross Bienstock",
   "b": "Alexander Babatunde",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 1.1,
   "avgActual": -6,
   "avgExpected": -8.5,
   "aId": "4464f477-6545-4e8f-8893-af53a8eeefb5",
   "bId": "8cb755e5-2a87-409f-8bb6-5773012cfca4"
  },
  {
   "a": "James Yu",
   "b": "Iqra Hasan-Calmo",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -1.7,
   "avgExpected": -4.3,
   "aId": "125cee00-5416-44ef-81e6-00818e3c64f6",
   "bId": "29c4170e-eb9f-400b-bc22-92f83e056e22"
  },
  {
   "a": "Peter Cao",
   "b": "Adam Werwie",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 6,
   "avgExpected": 3.5,
   "aId": "9472956b-d6dc-4e8b-ae94-523874e5510a",
   "bId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "a": "David Burke",
   "b": "Michele Sagurton",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -2.3,
   "avgExpected": -4.9,
   "aId": "69b99d4e-f80c-480a-a008-33ff326a3c93",
   "bId": "caa5146b-9cc5-4a02-adf0-c70e822854fc"
  },
  {
   "a": "David Horowitz",
   "b": "Michele Costigan",
   "team": "APC Garden State",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 5.8,
   "avgExpected": 3.5,
   "aId": "8dc8c957-0a4a-411d-b49a-35a35174a5ac",
   "bId": "fda078f4-e367-425d-9f16-501fdb5088e8"
  },
  {
   "a": "Jasmine Ho",
   "b": "Diana Tabia",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 0.7,
   "avgExpected": -2,
   "aId": "681fe702-3295-4dba-98a2-15e8aedc2873",
   "bId": "7494f19a-141d-4c00-8d37-d5e79eca4853"
  },
  {
   "a": "Joseph Korom",
   "b": "Todd Woodard",
   "team": "Open Play",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 2.8,
   "avgExpected": 0.8,
   "aId": "f014daaa-0b2e-4e20-b820-79741affdbcd",
   "bId": "f7632286-b2a6-4f7d-aef2-bc85e4b308b0"
  },
  {
   "a": "Annica Jin-Hendel",
   "b": "Jenny Winters",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -0.2,
   "avgExpected": -2.5,
   "aId": "3eccc234-1e37-493c-b4d6-626f1b482fec",
   "bId": "ea0e9b2c-cdde-48d1-8585-fd47053329b6"
  },
  {
   "a": "Jonathan Briones",
   "b": "Thomas Lum",
   "team": "Picklr Newark",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 4,
   "avgExpected": 1.3,
   "aId": "774f6fd0-33aa-47c2-8b61-167976b46b8e",
   "bId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7"
  },
  {
   "a": "Emily Sowa",
   "b": "Jen Ogorzat",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": -3,
   "avgExpected": -5.2,
   "aId": "42d01dab-4aca-4c74-aa73-47be4fbff788",
   "bId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "a": "Gail Hannagan",
   "b": "Jeannine Calhoun",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 10.7,
   "avgExpected": 8.2,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "a": "Kordell Alexander",
   "b": "Jason Grote",
   "team": "Pickle Juice Blackwood",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 1,
   "avgActual": -5.2,
   "avgExpected": -6.9,
   "aId": "133e6ef0-6318-407f-8110-d088f7e00fdc",
   "bId": "a7e6fe82-3337-42eb-b7b6-8cdde6523ace"
  },
  {
   "a": "Thao Tran",
   "b": "John Danks",
   "team": "PickleRage Union County Pandas",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1,
   "avgActual": 6.8,
   "avgExpected": 5.2,
   "aId": "a7416218-74a3-40c5-9327-97840c949fc4",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Robert Paniti",
   "b": "Rosellen Perlowitz",
   "team": "Home Court",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": 1,
   "avgActual": 1.6,
   "avgExpected": 0.3,
   "aId": "d17ff3de-7455-4efb-b1be-4c61b5acbdf2",
   "bId": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf"
  },
  {
   "a": "Kris Miller",
   "b": "Bill Dower",
   "team": "Picklr Newark",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 3,
   "avgExpected": 0.6,
   "aId": "8f90f526-02c7-43e5-84ee-60cc2e7fd1b4",
   "bId": "f920b62c-0fa3-417a-ac3e-b7bb6f555fc4"
  },
  {
   "a": "Kelly Bowers",
   "b": "Butch Kreilick",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 1.7,
   "avgExpected": -0.7,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Chris Balta",
   "b": "Lionell Matthews",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 8.3,
   "avgExpected": 5.9,
   "aId": "2be2d2b6-177e-4378-a33d-49005788a7fd",
   "bId": "331d44ad-9004-4801-9978-45938dc3272d"
  },
  {
   "a": "Anne Buckley",
   "b": "Joan Harris",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": 1,
   "avgExpected": -1.3,
   "aId": "07881006-c083-4729-8424-410aeee08940",
   "bId": "b0132c9e-2a21-45c8-b04d-b84aec626e68"
  },
  {
   "a": "Miles Townsend",
   "b": "Robynn Reeder",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 2.7,
   "avgExpected": 0.3,
   "aId": "cf59ad9f-a37d-44d2-abcf-5ec17532a6aa",
   "bId": "f2b0152e-161a-48bc-86c4-afc14231862c"
  },
  {
   "a": "Rob Stever",
   "b": "Jonathan Nieves",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.8,
   "avgExpected": 0,
   "aId": "519426b7-932a-4dd5-9865-ebaadb3d226d",
   "bId": "bf68b168-b0fb-4c26-bcd0-a9c888363778"
  },
  {
   "a": "Sophie O’Driscoll",
   "b": "Ryan Benetz",
   "team": "Players Courtyard",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 8.7,
   "avgExpected": 6.3,
   "aId": "40f98b81-c10a-4e0b-9154-3a8ffa3d784c",
   "bId": "841719cb-612f-4fea-bb1b-ef09935bb8ba"
  },
  {
   "a": "Juri Solano",
   "b": "Sarah Silva",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 0.5,
   "avgExpected": -1.5,
   "aId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0",
   "bId": "341e5936-88d4-4231-8cc3-1285a0c2f3e1"
  },
  {
   "a": "Christopher Sachs",
   "b": "Ryan Peixoto",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 7.5,
   "avgExpected": 5.5,
   "aId": "52e5dfee-42f1-4c8f-b3ee-ca7c6e49a7fb",
   "bId": "95fdba0f-fc53-412d-b050-19808558761f"
  },
  {
   "a": "Matthew Rafaniello",
   "b": "Jaymie Vincelli",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.2,
   "avgExpected": -1.8,
   "aId": "021fbd88-6b98-47eb-aa92-96ed959d8a4b",
   "bId": "daba10b1-0903-4d21-b71f-f2b670a0b428"
  },
  {
   "a": "Jillian Sorrentino",
   "b": "Aseem Sharma",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 0.7,
   "avgExpected": -1.5,
   "aId": "e08d5c89-c2a7-494f-bc55-2a33e22917fd",
   "bId": "efd507a8-9626-47ba-b98d-3406a951f838"
  },
  {
   "a": "Rebecca Woofter",
   "b": "Ryan Benetz",
   "team": "Players Courtyard",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.3,
   "avgExpected": 1.5,
   "aId": "4032408a-b5eb-41c5-a865-fca764d688a5",
   "bId": "841719cb-612f-4fea-bb1b-ef09935bb8ba"
  },
  {
   "a": "Elizabeth Dailey",
   "b": "Nathan Trimmer",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -2,
   "avgExpected": -3.5,
   "aId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b",
   "bId": "9541ec05-a25a-4577-b59c-bdf04006b1b6"
  },
  {
   "a": "Jayson Lee",
   "b": "Kellie Roshak",
   "team": "PickleRage Union County Net Ninjas",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6.3,
   "avgExpected": 4.2,
   "aId": "145a759d-3547-4ba8-a466-85f7c857a392",
   "bId": "fd9c829a-50de-40a1-8342-7a6afe0fc7b4"
  },
  {
   "a": "Jayson Lee",
   "b": "Freddy Li",
   "team": "PickleRage Union County Net Ninjas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1.3,
   "avgExpected": -0.7,
   "aId": "145a759d-3547-4ba8-a466-85f7c857a392",
   "bId": "455cc819-6519-4c36-9dd7-2dbb33845102"
  },
  {
   "a": "Craig Batzar",
   "b": "Abby Sprinkel",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 3.7,
   "avgExpected": 1.6,
   "aId": "44890b21-f104-4e68-a0a1-607034c2dde6",
   "bId": "491af413-7874-492a-9c92-6dccc6b736e5"
  },
  {
   "a": "Andrew Frey",
   "b": "Adele Hackney",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 0,
   "avgExpected": -1.8,
   "aId": "beb70730-42da-4979-93b9-bd5c88a52d75",
   "bId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "a": "Susan Li",
   "b": "Kristin Granath",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -1.2,
   "avgExpected": -3.1,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "560573da-979a-4ae6-ae00-90d223db2816"
  },
  {
   "a": "Sean Greener",
   "b": "Jason Paderon",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2.4,
   "avgExpected": 0.8,
   "aId": "12f33b3a-b4ea-4b31-affa-dc7917dce94b",
   "bId": "6a1fa95d-2df5-4870-a4b6-51775620f7cf"
  },
  {
   "a": "Jade Chin",
   "b": "David Burke",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.9,
   "avgActual": -1,
   "avgExpected": -2.4,
   "aId": "4fcda82e-e24a-45d7-9784-c230d47a113b",
   "bId": "69b99d4e-f80c-480a-a008-33ff326a3c93"
  },
  {
   "a": "Margo Langer",
   "b": "Jeff Kesner",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 1,
   "avgExpected": -0.8,
   "aId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75",
   "bId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01"
  },
  {
   "a": "Jennifer Guldin",
   "b": "Devin Kenny",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -1.2,
   "avgExpected": -2.7,
   "aId": "584e770c-86b1-4561-ba01-4ef1aad6ff9b",
   "bId": "6a04fe9c-1b2d-4504-b705-db9bd71e94bf"
  },
  {
   "a": "Holden Smith",
   "b": "Jasmine Nguyen",
   "team": "ACE Downingtown",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5,
   "avgExpected": 3.3,
   "aId": "679d2999-1bf2-40ae-a420-9edf09aa8723",
   "bId": "8621d525-134a-4647-a7bd-98c3a357cdc3"
  },
  {
   "a": "Elisabeth Marshall",
   "b": "Kim Kronberger",
   "team": "Players Courtyard",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -1.8,
   "avgExpected": -3.4,
   "aId": "2036b1b8-bfb1-49e9-8a36-3e2d91bc336a",
   "bId": "54f3fa64-a224-4f3d-86a4-4353ea31f5a8"
  },
  {
   "a": "Kelly Bowers",
   "b": "Jeannine Calhoun",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0,
   "avgExpected": -2,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "a": "Meredith Janeiro",
   "b": "John Danks",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2,
   "avgExpected": 0,
   "aId": "4ec66b93-76c9-45ef-b5cb-0b1209e876d9",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Brad De Jesus",
   "b": "Grady Craig",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.7,
   "avgExpected": 0.7,
   "aId": "0dcffbac-6931-400d-b652-41c2720e6311",
   "bId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "a": "Elisabeth Marshall",
   "b": "James Conroy",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2.8,
   "avgExpected": 1,
   "aId": "2036b1b8-bfb1-49e9-8a36-3e2d91bc336a",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Kimberley Levins",
   "b": "Michael Alfaro",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 9.6,
   "avgExpected": 8.1,
   "aId": "c132bfd5-ae12-478d-86bc-e483f85cb26a",
   "bId": "d060c2f3-016e-4260-97fc-d0cbea4415f5"
  },
  {
   "a": "Patricia San Andres",
   "b": "Suzane Sullivan",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.2,
   "avgExpected": 2.8,
   "aId": "42e86266-ff96-4961-8e27-adeac7084f59",
   "bId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6"
  },
  {
   "a": "Kelly Aylward",
   "b": "Stephen Fredericksen",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 6.3,
   "avgExpected": 4.5,
   "aId": "6068d706-4a9a-4475-8d31-d5a900172f27",
   "bId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "a": "Jade Chin",
   "b": "Michelle Cobos",
   "team": "Jersey Pickleball Club",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": 0.8,
   "avgActual": -5.6,
   "avgExpected": -6.8,
   "aId": "4fcda82e-e24a-45d7-9784-c230d47a113b",
   "bId": "94e54237-56df-41b2-8b89-675a69762740"
  },
  {
   "a": "Ross Bienstock",
   "b": "Robert Leming",
   "team": "Pickle House",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.8,
   "avgActual": -5.6,
   "avgExpected": -7,
   "aId": "4464f477-6545-4e8f-8893-af53a8eeefb5",
   "bId": "a3f274c4-aa04-45ad-879c-233507d87f98"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "Eric Brezina",
   "team": "Flemington",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 8.5,
   "avgExpected": 6.9,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Katie O'Mara",
   "b": "Zoe Zapf",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -5.5,
   "avgExpected": -7.2,
   "aId": "99913860-615f-4516-8868-f83a2c029221",
   "bId": "d0f30788-f690-40db-8709-f1e485efc940"
  },
  {
   "a": "Jonathan Jamison",
   "b": "Taylor Runyen",
   "team": "APC Garden State",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.8,
   "avgExpected": 3.1,
   "aId": "8b4ec650-391b-47a7-90e3-af9989d74df0",
   "bId": "cda5a763-48f3-4303-8579-42ff05230f45"
  },
  {
   "a": "Joan Harris",
   "b": "Jenny Winters",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.5,
   "avgExpected": 1,
   "aId": "b0132c9e-2a21-45c8-b04d-b84aec626e68",
   "bId": "ea0e9b2c-cdde-48d1-8585-fd47053329b6"
  },
  {
   "a": "Amanda Nguyen",
   "b": "Thao Tran",
   "team": "PickleRage Union County Pandas",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.4,
   "avgExpected": 0.9,
   "aId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e",
   "bId": "a7416218-74a3-40c5-9327-97840c949fc4"
  },
  {
   "a": "Timothy Lowry",
   "b": "Peter Lien",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3.2,
   "avgExpected": 1.8,
   "aId": "5165ace6-688d-451a-9f96-8e5500cbf46d",
   "bId": "86851415-5e99-413d-b521-cd3b3edc1137"
  },
  {
   "a": "Devin Kenny",
   "b": "Andrew Frey",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -3.3,
   "avgExpected": -5.2,
   "aId": "6a04fe9c-1b2d-4504-b705-db9bd71e94bf",
   "bId": "beb70730-42da-4979-93b9-bd5c88a52d75"
  },
  {
   "a": "James Yu",
   "b": "Rakesh Roy",
   "team": "Pickle House",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.8,
   "avgActual": -0.1,
   "avgExpected": -1.3,
   "aId": "125cee00-5416-44ef-81e6-00818e3c64f6",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Jade Chin",
   "b": "Ricardo Fontanilla",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -4.3,
   "avgExpected": -6.2,
   "aId": "4fcda82e-e24a-45d7-9784-c230d47a113b",
   "bId": "7db295d5-04dd-42cb-bbed-e4ec7856e654"
  },
  {
   "a": "Line Barlow",
   "b": "Brian Seligson",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 1.4,
   "avgExpected": 0.2,
   "aId": "20f0fb60-8e60-448c-b971-40fb6e7fca23",
   "bId": "66cca19b-c691-4ee2-addb-f8344943103e"
  },
  {
   "a": "Jennifer Lynch",
   "b": "Derek Lombardi",
   "team": "Bounce Philly",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.8,
   "avgActual": -1.8,
   "avgExpected": -3.2,
   "aId": "54a0bc36-2277-4497-bb82-d8499157c1fe",
   "bId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72"
  },
  {
   "a": "Taryn Seidner",
   "b": "Supriya Kothakonda",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 0.3,
   "avgExpected": -1.6,
   "aId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "bId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18"
  },
  {
   "a": "Chris Balta",
   "b": "Sarah Dente",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 6,
   "avgExpected": 4.7,
   "aId": "2be2d2b6-177e-4378-a33d-49005788a7fd",
   "bId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f"
  },
  {
   "a": "Lionell Matthews",
   "b": "Sarah Dente",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 6.4,
   "avgExpected": 5.1,
   "aId": "331d44ad-9004-4801-9978-45938dc3272d",
   "bId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f"
  },
  {
   "a": "Sarah Dente",
   "b": "Alina Allakhveranova",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.3,
   "avgExpected": 3.7,
   "aId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f",
   "bId": "bbf13d1a-5393-4549-9d15-c5d2975f3e55"
  },
  {
   "a": "Holden Smith",
   "b": "Maridel Ablaza",
   "team": "ACE Downingtown",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.4,
   "avgExpected": 3.1,
   "aId": "679d2999-1bf2-40ae-a420-9edf09aa8723",
   "bId": "c868d44f-a501-4c1a-8d17-fd6e4a338308"
  },
  {
   "a": "Stephen Fredericksen",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.3,
   "avgExpected": 3.6,
   "aId": "622cb64f-dd0c-4bff-8c19-81d287977c53",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Eric Brezina",
   "b": "Sarah Stangota",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.3,
   "avgExpected": 0.8,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Sahil Agarwala",
   "b": "Todd Woodard",
   "team": "Open Play",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": -0.7,
   "avgExpected": -2.2,
   "aId": "b845549e-8d1c-4f75-8010-630a9fb9281d",
   "bId": "f7632286-b2a6-4f7d-aef2-bc85e4b308b0"
  },
  {
   "a": "Joan Harris",
   "b": "Andrew Kimmel",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.3,
   "avgExpected": 0.8,
   "aId": "b0132c9e-2a21-45c8-b04d-b84aec626e68",
   "bId": "cbd9ae00-0624-49d3-b733-55a2765aff37"
  },
  {
   "a": "Jayson Lee",
   "b": "Jimmy Tom",
   "team": "PickleRage Union County Net Ninjas",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.7,
   "avgExpected": 3.5,
   "aId": "145a759d-3547-4ba8-a466-85f7c857a392",
   "bId": "4e873e4f-16c8-4504-a702-941e045a7d3b"
  },
  {
   "a": "Barbara Fontanella",
   "b": "James Gillick",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.3,
   "avgExpected": 1.8,
   "aId": "3390e1cb-1881-414b-b8cf-9a0c06d13a0f",
   "bId": "60dda206-8284-415e-b83e-3836d61e6701"
  },
  {
   "a": "Rachael Osetkowski",
   "b": "Alex Glushek",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -0.4,
   "avgExpected": -1.7,
   "aId": "2f50700d-74d4-426f-85c9-b894f72096f0",
   "bId": "65e58579-8b95-46f1-9e95-a3e53347de32"
  },
  {
   "a": "Yash Mehta",
   "b": "Miles Townsend",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 9,
   "avgExpected": 7.7,
   "aId": "adc25ed0-4bc3-47da-9509-4caeb8f90185",
   "bId": "cf59ad9f-a37d-44d2-abcf-5ec17532a6aa"
  },
  {
   "a": "John Waggoner",
   "b": "Colin Mackey",
   "team": "Players Courtyard",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 3.3,
   "avgExpected": 1.8,
   "aId": "46d96287-f2e2-4de7-8593-fcde564b9273",
   "bId": "6e5d2bb6-bf2e-4f06-a2f8-24af7eca9cf8"
  },
  {
   "a": "Yash Mehta",
   "b": "Radhika Sud",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 6.7,
   "avgExpected": 5.1,
   "aId": "adc25ed0-4bc3-47da-9509-4caeb8f90185",
   "bId": "f3d6a801-faed-44cb-a7fa-fd0b3bdff981"
  },
  {
   "a": "Victor Salicetti",
   "b": "Diahann Ouly",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.6,
   "aId": "08cb8582-4347-4694-9f58-7e479aa3b7a5",
   "bId": "7f49224e-d530-48a6-acc3-30d8b6357a82"
  },
  {
   "a": "Allison Sobieski",
   "b": "Sarah Dente",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 7.7,
   "avgExpected": 6.1,
   "aId": "7a2cb26b-6e52-4dbd-bab4-83536f4500bb",
   "bId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f"
  },
  {
   "a": "Jaymie Vincelli",
   "b": "Darren Zheng",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.3,
   "avgExpected": 1.9,
   "aId": "daba10b1-0903-4d21-b71f-f2b670a0b428",
   "bId": "fcedde03-815a-4405-9065-c0a473654b8c"
  },
  {
   "a": "Vanessa Tortorice",
   "b": "Sarah Dente",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4.8,
   "avgExpected": 3.7,
   "aId": "818811e5-0eb6-4611-8ac3-f65c10316305",
   "bId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f"
  },
  {
   "a": "Liane Feyas",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 5.6,
   "avgExpected": 4.6,
   "aId": "2266824f-5ba8-4da3-a512-94c8e14f7c90",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Emily Sowa",
   "b": "Gabe Nacion",
   "team": "Pickle House",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -2,
   "avgExpected": -3,
   "aId": "42d01dab-4aca-4c74-aa73-47be4fbff788",
   "bId": "b18fc532-a96e-400d-a321-73d52554df87"
  },
  {
   "a": "Meghan Klein",
   "b": "Sarah Stangota",
   "team": "Flemington",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.8,
   "avgExpected": 2.8,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Sarah Stangota",
   "b": "Paul Matzko",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.5,
   "avgExpected": 2.3,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Udita Agarwala",
   "b": "Rashmi Patade",
   "team": "Open Play",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -7,
   "avgExpected": -8,
   "aId": "2351aaff-bff5-4734-9b22-20ce6988c40d",
   "bId": "c56ab685-5c55-4437-98a6-7a9b8c95895d"
  },
  {
   "a": "Charlene De Lara",
   "b": "Suki Wong",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 2.9,
   "avgExpected": 2,
   "aId": "16f9fddd-e9cd-4e65-9090-2764c44fc74a",
   "bId": "b92a5442-fd20-4e2f-896b-26cc5cfa5ea5"
  },
  {
   "a": "Prasad Mittapalli",
   "b": "Yash Mehta",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 7.3,
   "avgExpected": 6.4,
   "aId": "11ccd85e-b03b-43d1-ae48-bc26b6eb19c8",
   "bId": "adc25ed0-4bc3-47da-9509-4caeb8f90185"
  },
  {
   "a": "Cesar Alvarez",
   "b": "Eva Rodriguez",
   "team": "PickleRage Union County Net Ninjas",
   "n": 12,
   "w": 11,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 5.5,
   "avgExpected": 4.8,
   "aId": "3b7c9eab-a6e2-4e8d-b0f6-bb9a6b6dc0eb",
   "bId": "899c49f1-1839-4eb3-b87e-26a2dba51764"
  },
  {
   "a": "David Cartwright",
   "b": "Emiliya Mizrahi",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 0.9,
   "aId": "d6a6177b-1ee7-410c-bafc-bf1a91628876",
   "bId": "f173be84-93c7-46b8-b828-d44ddc52d63c"
  },
  {
   "a": "Connie Tom",
   "b": "Kellie Roshak",
   "team": "PickleRage Union County Net Ninjas",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 6.2,
   "avgExpected": 5.1,
   "aId": "493b9730-cc53-4634-9561-49c6f1ddcb08",
   "bId": "fd9c829a-50de-40a1-8342-7a6afe0fc7b4"
  },
  {
   "a": "Huifang Yao",
   "b": "Cassie Lou",
   "team": "PickleRage Union County Net Ninjas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 6,
   "avgExpected": 4.7,
   "aId": "0678b5e4-cf92-49cb-8689-2d90cc356950",
   "bId": "27f83d5a-2e86-4e5b-af70-9394a8765ac6"
  },
  {
   "a": "Udita Agarwala",
   "b": "Anbu Cheeralan",
   "team": "Open Play",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0.6,
   "avgActual": -6.9,
   "avgExpected": -7.7,
   "aId": "2351aaff-bff5-4734-9b22-20ce6988c40d",
   "bId": "77f81ccf-106a-4a27-9c3d-5b5383c5db5a"
  },
  {
   "a": "Kristin Larosa",
   "b": "Alyssa Beattie",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.5,
   "avgExpected": 2.3,
   "aId": "03162d88-f7e2-4381-9ede-fd884d73940b",
   "bId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf"
  },
  {
   "a": "Kris Miller",
   "b": "Sandy Duarte",
   "team": "Picklr Newark",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -0.7,
   "avgExpected": -1.7,
   "aId": "8f90f526-02c7-43e5-84ee-60cc2e7fd1b4",
   "bId": "be1f6512-56a2-4b91-b483-7677af01867a"
  },
  {
   "a": "Meggie Hodgson",
   "b": "Evelyn Geating",
   "team": "Bounce Philly",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.2,
   "avgExpected": 4.2,
   "aId": "6386e6cb-1a79-4148-ba25-d735ad30054c",
   "bId": "798a21bd-83e7-42e9-bd86-c74448c7dada"
  },
  {
   "a": "Victor Salicetti",
   "b": "Adam Werwie",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 4.1,
   "avgExpected": 3.2,
   "aId": "08cb8582-4347-4694-9f58-7e479aa3b7a5",
   "bId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "a": "Kenneth Ocasio",
   "b": "Julianna Rodrigues",
   "team": "Pickleball HQ",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 4.9,
   "avgExpected": 4,
   "aId": "1c908613-b93b-43b3-b084-b2da12b2faa2",
   "bId": "77c32d66-d466-4308-9c45-1639e1925b70"
  },
  {
   "a": "Jason Heiselman",
   "b": "Jose Chariez",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -5.3,
   "avgExpected": -6.8,
   "aId": "24b7e6fe-4568-4d20-9cea-6b29169d486e",
   "bId": "4dc234ca-c486-4a9f-adb5-0ab8e257379d"
  },
  {
   "a": "Lisa Dinh",
   "b": "Meg Kelly",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1,
   "avgExpected": -0.3,
   "aId": "aaf27c02-6d20-4a96-835c-3084d799ac0f",
   "bId": "bf9f2dd4-3b39-4c8c-b768-04a47d1b23f9"
  },
  {
   "a": "Halimah Maideen",
   "b": "Marcus Burritt",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.5,
   "avgExpected": 4.4,
   "aId": "5ad51afd-7edc-43c3-b279-8c57c54cc38c",
   "bId": "9605152c-b88b-40bd-b870-e2ea577e376a"
  },
  {
   "a": "Adele Hackney",
   "b": "Haidee Midgley",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0.7,
   "avgExpected": -0.8,
   "aId": "c1e41980-e98d-4208-aa10-dc04e407cf8f",
   "bId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
  },
  {
   "a": "Meggie Hodgson",
   "b": "Meg Kelly",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.2,
   "avgExpected": 3.1,
   "aId": "6386e6cb-1a79-4148-ba25-d735ad30054c",
   "bId": "bf9f2dd4-3b39-4c8c-b768-04a47d1b23f9"
  },
  {
   "a": "Rebecca Woofter",
   "b": "Melissa Mackey",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -2,
   "avgExpected": -3.5,
   "aId": "4032408a-b5eb-41c5-a865-fca764d688a5",
   "bId": "eb92331b-662d-4f91-bf8a-aa8b93c0c02b"
  },
  {
   "a": "Taryn Seidner",
   "b": "Morgan Valencia King",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -3.7,
   "avgExpected": -5,
   "aId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "bId": "ac049c23-359d-4508-8bc1-274a7276239c"
  },
  {
   "a": "Lionell Matthews",
   "b": "James Cooper",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.4,
   "avgExpected": 2.5,
   "aId": "331d44ad-9004-4801-9978-45938dc3272d",
   "bId": "37355d05-aa6b-42d5-a4a2-874c8774bb5d"
  },
  {
   "a": "Eric Brezina",
   "b": "Jeannine Calhoun",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5.7,
   "avgExpected": 4.4,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "a": "Megan Torres",
   "b": "Oanh Quach",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 4.7,
   "avgExpected": 3.5,
   "aId": "45590591-9a85-4098-8ba9-36fc0fa18f4c",
   "bId": "b4ac779e-91e0-46f1-a4c7-92e1068db57a"
  },
  {
   "a": "Anne Buckley",
   "b": "Alexis Kerven",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3.8,
   "avgExpected": 2.8,
   "aId": "07881006-c083-4729-8424-410aeee08940",
   "bId": "a2b836f4-8bfa-4baf-b01a-e342f5947c04"
  },
  {
   "a": "Lili Zhang",
   "b": "Sahil Agarwala",
   "team": "Open Play",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -4.3,
   "avgExpected": -5.4,
   "aId": "219b369d-c5eb-4ef8-bcea-559f56d94ff0",
   "bId": "b845549e-8d1c-4f75-8010-630a9fb9281d"
  },
  {
   "a": "Kenneth Bautista",
   "b": "Rachel Appleton",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "c383dca8-551f-4776-90d7-7f57248d1680",
   "bId": "db90de13-5c04-4d76-b9b8-2cd30c9900a8"
  },
  {
   "a": "Yash Mehta",
   "b": "Brittany Riccitiello",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 8.7,
   "avgExpected": 8,
   "aId": "adc25ed0-4bc3-47da-9509-4caeb8f90185",
   "bId": "aea847ce-8af4-4809-b421-b25faeef0563"
  },
  {
   "a": "Rachel Searby",
   "b": "Brittany Riccitiello",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.5,
   "aId": "3648420d-4dae-4404-8b67-3162f343f6aa",
   "bId": "aea847ce-8af4-4809-b421-b25faeef0563"
  },
  {
   "a": "Eva Rodriguez",
   "b": "Kellie Roshak",
   "team": "PickleRage Union County Net Ninjas",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 5.6,
   "avgExpected": 4.9,
   "aId": "899c49f1-1839-4eb3-b87e-26a2dba51764",
   "bId": "fd9c829a-50de-40a1-8342-7a6afe0fc7b4"
  },
  {
   "a": "Giomarco Urbina",
   "b": "Anbu Cheeralan",
   "team": "Open Play",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.5,
   "avgActual": -6.4,
   "avgExpected": -7.3,
   "aId": "1d3261f0-c0b4-4f19-93d9-69820d8a9911",
   "bId": "77f81ccf-106a-4a27-9c3d-5b5383c5db5a"
  },
  {
   "a": "Ashley Altman",
   "b": "Kris Miller",
   "team": "Picklr Newark",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "57cb28c4-947f-4ea0-a6eb-5e21a777552a",
   "bId": "8f90f526-02c7-43e5-84ee-60cc2e7fd1b4"
  },
  {
   "a": "Katherine Mott",
   "b": "Kordell Alexander",
   "team": "Pickle Juice Blackwood",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -6.5,
   "avgExpected": -7.5,
   "aId": "014db139-e54f-4546-8fdb-77dfe90e5780",
   "bId": "133e6ef0-6318-407f-8110-d088f7e00fdc"
  },
  {
   "a": "Timothy Lowry",
   "b": "Thomas Nguyen",
   "team": "Bounce Tempest",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.5,
   "avgActual": -1,
   "avgExpected": -1.7,
   "aId": "5165ace6-688d-451a-9f96-8e5500cbf46d",
   "bId": "9c6d4e1a-71eb-4c19-af5b-7efc2758939a"
  },
  {
   "a": "Devin Kenny",
   "b": "Michael Guldin",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -1,
   "aId": "6a04fe9c-1b2d-4504-b705-db9bd71e94bf",
   "bId": "a147036c-405c-4d49-be3b-00a1270f848f"
  },
  {
   "a": "Hailee Kurlander",
   "b": "Rachel Searby",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 1.1,
   "aId": "04504eed-6831-4a3d-9854-8a6ba147e1a8",
   "bId": "3648420d-4dae-4404-8b67-3162f343f6aa"
  },
  {
   "a": "Rachael Osetkowski",
   "b": "Jade Chin",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -1.2,
   "avgExpected": -2.3,
   "aId": "2f50700d-74d4-426f-85c9-b894f72096f0",
   "bId": "4fcda82e-e24a-45d7-9784-c230d47a113b"
  },
  {
   "a": "Lisa Dinh",
   "b": "Dung Pham",
   "team": "Bounce Philly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -1.2,
   "avgExpected": -2.1,
   "aId": "aaf27c02-6d20-4a96-835c-3084d799ac0f",
   "bId": "fed512a2-1ec3-42c8-b81d-fe88d4bcae63"
  },
  {
   "a": "Matt Soliman",
   "b": "Lisa Dinh",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.8,
   "aId": "a955b9bb-4b46-4bb5-af0e-2f8c89009b22",
   "bId": "aaf27c02-6d20-4a96-835c-3084d799ac0f"
  },
  {
   "a": "Katie O'Mara",
   "b": "Rakesh Roy",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -3.5,
   "avgExpected": -4.5,
   "aId": "99913860-615f-4516-8868-f83a2c029221",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Papa Aggrey",
   "b": "Radhika Sud",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.3,
   "avgExpected": 0.1,
   "aId": "b113d589-6857-4555-95d4-935d5f62e50c",
   "bId": "f3d6a801-faed-44cb-a7fa-fd0b3bdff981"
  },
  {
   "a": "David Burke",
   "b": "Alex Lopez",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -0.3,
   "avgExpected": -1.5,
   "aId": "69b99d4e-f80c-480a-a008-33ff326a3c93",
   "bId": "93fde1cd-1880-495a-bde8-06dde4e159bf"
  },
  {
   "a": "Meghan Klein",
   "b": "Jeannine Calhoun",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.1,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "a": "Raymond Duong",
   "b": "Kevin Algarme",
   "team": "ACE Downingtown",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 4.4,
   "avgExpected": 3.6,
   "aId": "9b7fad1a-a312-4d60-94e8-a1e138bb38fb",
   "bId": "af1295ea-6786-47fd-8c51-dae10f13070a"
  },
  {
   "a": "Diahann Ouly",
   "b": "Marcus Burritt",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.4,
   "avgExpected": 0.7,
   "aId": "7f49224e-d530-48a6-acc3-30d8b6357a82",
   "bId": "9605152c-b88b-40bd-b870-e2ea577e376a"
  },
  {
   "a": "Terri Pflueger",
   "b": "Filomena Rega",
   "team": "Monroe",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 5.2,
   "avgExpected": 4.5,
   "aId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7",
   "bId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "a": "Lukas Chrebet",
   "b": "Alex Glushek",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1,
   "avgExpected": -1.8,
   "aId": "42795346-b8aa-4e5d-80a5-8a1768c094e8",
   "bId": "65e58579-8b95-46f1-9e95-a3e53347de32"
  },
  {
   "a": "Joseph Mckenna",
   "b": "Brandi Horowitz",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4.3,
   "avgExpected": 3.5,
   "aId": "551c6f9d-b1e1-4b5b-a8cb-bea20a14d9ff",
   "bId": "bc3fda4d-3cf9-4daf-a2f1-6010ce63195e"
  },
  {
   "a": "Jeff Stephenson",
   "b": "Gerry Bissinger",
   "team": "APC Garden State",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.6,
   "avgExpected": -0.2,
   "aId": "002d90d8-3c20-4fe1-adcd-154e02a75a8b",
   "bId": "44999222-7eed-49f7-982b-10ad7155256a"
  },
  {
   "a": "Karen Marshall",
   "b": "Lawrence Dipietro",
   "team": "Pickle Juice Blackwood",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": 0.4,
   "avgActual": -2.2,
   "avgExpected": -2.9,
   "aId": "53a84b91-acc8-4a27-a7e5-2081e1afcc98",
   "bId": "c521a44b-2c1e-43f3-bd58-eccadd1d0433"
  },
  {
   "a": "Colin Mackey",
   "b": "Jackie Bowes",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1.3,
   "avgExpected": -2.4,
   "aId": "6e5d2bb6-bf2e-4f06-a2f8-24af7eca9cf8",
   "bId": "a111c97f-aba4-4850-902b-0730e2160f76"
  },
  {
   "a": "Rebecca Woofter",
   "b": "John Waggoner",
   "team": "Players Courtyard",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.4,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "4032408a-b5eb-41c5-a865-fca764d688a5",
   "bId": "46d96287-f2e2-4de7-8593-fcde564b9273"
  },
  {
   "a": "Stephanie Taxter",
   "b": "Nathan Trimmer",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -2.8,
   "avgExpected": -3.5,
   "aId": "66a38d92-6b44-498c-8828-a8f7cd95fb9f",
   "bId": "9541ec05-a25a-4577-b59c-bdf04006b1b6"
  },
  {
   "a": "Alyssa Beattie",
   "b": "Marvin Lao",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.7,
   "aId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf",
   "bId": "838de378-832d-4d6e-8e6a-44e1edb42719"
  },
  {
   "a": "Lily Hahn",
   "b": "Giang Nguyen",
   "team": "Open Play",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1.7,
   "avgExpected": -2.5,
   "aId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833",
   "bId": "5dd85d77-40ad-476d-a1a4-90dfcfed61a9"
  },
  {
   "a": "Gerry Bissinger",
   "b": "Oanh Quach",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 4,
   "avgExpected": 3.2,
   "aId": "44999222-7eed-49f7-982b-10ad7155256a",
   "bId": "b4ac779e-91e0-46f1-a4c7-92e1068db57a"
  },
  {
   "a": "Aidan Fredericks",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 8.3,
   "avgExpected": 7.3,
   "aId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Brittany Riccitiello",
   "b": "Robynn Reeder",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1.2,
   "avgExpected": 0.4,
   "aId": "aea847ce-8af4-4809-b421-b25faeef0563",
   "bId": "f2b0152e-161a-48bc-86c4-afc14231862c"
  },
  {
   "a": "Kristin Granath",
   "b": "Nathan Trimmer",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -2,
   "avgExpected": -2.9,
   "aId": "560573da-979a-4ae6-ae00-90d223db2816",
   "bId": "9541ec05-a25a-4577-b59c-bdf04006b1b6"
  },
  {
   "a": "Zyanya Flores",
   "b": "Vanessa Tortorice",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 10.3,
   "avgExpected": 9.3,
   "aId": "148bddd6-0d6a-468a-903d-84ba2da82239",
   "bId": "818811e5-0eb6-4611-8ac3-f65c10316305"
  },
  {
   "a": "Alex Sanchez",
   "b": "Eva Rodriguez",
   "team": "PickleRage Union County Net Ninjas",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3,
   "avgExpected": 2.1,
   "aId": "5509090f-bf75-4166-a5ab-c7688cf54353",
   "bId": "899c49f1-1839-4eb3-b87e-26a2dba51764"
  },
  {
   "a": "Michael Van Horn",
   "b": "Jason Grote",
   "team": "Pickle Juice Blackwood",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.3,
   "avgExpected": -1.3,
   "aId": "0782db8d-bb52-4a47-88b5-00e8db2358c4",
   "bId": "a7e6fe82-3337-42eb-b7b6-8cdde6523ace"
  },
  {
   "a": "Peter Lien",
   "b": "Thang Nguyen",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.5,
   "aId": "86851415-5e99-413d-b521-cd3b3edc1137",
   "bId": "915d5222-71a9-4dae-9899-f200fcc8110e"
  },
  {
   "a": "Hee Kim",
   "b": "Sultane Cosaj",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.2,
   "avgExpected": -1,
   "aId": "03fa8bb2-957d-45f2-9e41-628a2c5ac9e0",
   "bId": "c80624a6-0c31-4792-bc8d-c9f1d2153dca"
  },
  {
   "a": "Alex Sanchez",
   "b": "Kerry Eskay",
   "team": "PickleRage Union County Net Ninjas",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4,
   "avgExpected": 3.2,
   "aId": "5509090f-bf75-4166-a5ab-c7688cf54353",
   "bId": "8dc8f169-bf38-463a-b8a0-6c238e275325"
  },
  {
   "a": "Rhys Gardiner",
   "b": "Maxwell Winters",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 6,
   "avgExpected": 5,
   "aId": "084d4f59-84ab-40bb-8503-0495501e1ea9",
   "bId": "d5037744-373a-485e-9fd3-5564495b8c2d"
  },
  {
   "a": "Hee Kim",
   "b": "Christopher Sachs",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.7,
   "avgExpected": 0.8,
   "aId": "03fa8bb2-957d-45f2-9e41-628a2c5ac9e0",
   "bId": "52e5dfee-42f1-4c8f-b3ee-ca7c6e49a7fb"
  },
  {
   "a": "Sabiha Kermalli",
   "b": "Adam Werwie",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.5,
   "aId": "7909f81b-3c87-4f6a-8476-50ae30e2ab4b",
   "bId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "a": "Meghan Klein",
   "b": "Jessica Wormeck",
   "team": "Flemington",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5.5,
   "avgExpected": 5,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "a": "Ross Bienstock",
   "b": "Rakesh Roy",
   "team": "Pickle House",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -2.4,
   "avgExpected": -3,
   "aId": "4464f477-6545-4e8f-8893-af53a8eeefb5",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Abby Sprinkel",
   "b": "Brandi Horowitz",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2,
   "avgExpected": 1.2,
   "aId": "491af413-7874-492a-9c92-6dccc6b736e5",
   "bId": "bc3fda4d-3cf9-4daf-a2f1-6010ce63195e"
  },
  {
   "a": "Kenneth Bautista",
   "b": "Ed Amato",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4,
   "avgExpected": 3.4,
   "aId": "c383dca8-551f-4776-90d7-7f57248d1680",
   "bId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "a": "Megan Quigley",
   "b": "Quynh Nguyen",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 2.8,
   "avgExpected": 2.2,
   "aId": "37d69abc-9610-4c03-a618-f905bd0e2fb1",
   "bId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1"
  },
  {
   "a": "Tuan Nguyen",
   "b": "Juliana Berg",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -6,
   "avgExpected": -6.7,
   "aId": "7bafdd3b-e5cd-4d7a-9098-515a2b560851",
   "bId": "8f9fe430-75af-43c9-9eb3-371d0a9d70d7"
  },
  {
   "a": "Quynh Nguyen",
   "b": "Timothy Lowry",
   "team": "Bounce Tempest",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -0.7,
   "avgExpected": -1.2,
   "aId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
   "bId": "5165ace6-688d-451a-9f96-8e5500cbf46d"
  },
  {
   "a": "Huifang Yao",
   "b": "Brandon Agudelo",
   "team": "PickleRage Union County Net Ninjas",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 4.2,
   "avgExpected": 3.7,
   "aId": "0678b5e4-cf92-49cb-8689-2d90cc356950",
   "bId": "a2c6fd48-c70a-4dc1-a1e0-4c177c4b0f58"
  },
  {
   "a": "Giang Nguyen",
   "b": "Luan Vo",
   "team": "Open Play",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1.2,
   "avgExpected": -1.6,
   "aId": "5dd85d77-40ad-476d-a1a4-90dfcfed61a9",
   "bId": "9b11aeff-377e-48f3-9770-14388ac96b68"
  },
  {
   "a": "Brian Perlowitz",
   "b": "Andy Pineda",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.4,
   "aId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1",
   "bId": "bb6c579d-1627-4971-ad0f-4be65598d579"
  },
  {
   "a": "Simon Burns",
   "b": "Thomas Lum",
   "team": "Picklr Newark",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -6,
   "avgExpected": -6.6,
   "aId": "3a1cc58f-1661-41c2-b2cb-4e39a1b60bac",
   "bId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7"
  },
  {
   "a": "Meggie Hodgson",
   "b": "William Waggenspack",
   "team": "Bounce Philly",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4,
   "avgExpected": 3.5,
   "aId": "6386e6cb-1a79-4148-ba25-d735ad30054c",
   "bId": "8aaeb517-ab68-4f67-9b9b-e347909f52e7"
  },
  {
   "a": "Stephanie Taxter",
   "b": "Devin Kenny",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.6,
   "avgExpected": 1,
   "aId": "66a38d92-6b44-498c-8828-a8f7cd95fb9f",
   "bId": "6a04fe9c-1b2d-4504-b705-db9bd71e94bf"
  },
  {
   "a": "Meghan Klein",
   "b": "Jeff Kesner",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.7,
   "avgExpected": 2.9,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01"
  },
  {
   "a": "Howie Knudson",
   "b": "Diahann Ouly",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.7,
   "aId": "45973650-1f33-43dc-a0f1-1fce356962e0",
   "bId": "7f49224e-d530-48a6-acc3-30d8b6357a82"
  },
  {
   "a": "Lionell Matthews",
   "b": "Allison Sobieski",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 6.7,
   "avgExpected": 6,
   "aId": "331d44ad-9004-4801-9978-45938dc3272d",
   "bId": "7a2cb26b-6e52-4dbd-bab4-83536f4500bb"
  },
  {
   "a": "Elisabeth Marshall",
   "b": "Josh Ruble",
   "team": "Players Courtyard",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.2,
   "avgExpected": -0.3,
   "aId": "2036b1b8-bfb1-49e9-8a36-3e2d91bc336a",
   "bId": "c44c6a71-87d4-4003-8fcb-bb812a3307a3"
  },
  {
   "a": "Meredith Janeiro",
   "b": "Thao Tran",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.7,
   "aId": "4ec66b93-76c9-45ef-b5cb-0b1209e876d9",
   "bId": "a7416218-74a3-40c5-9327-97840c949fc4"
  },
  {
   "a": "Brad De Jesus",
   "b": "Derek Lombardi",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": -0.3,
   "avgExpected": -1.1,
   "aId": "0dcffbac-6931-400d-b652-41c2720e6311",
   "bId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72"
  },
  {
   "a": "Lili Zhang",
   "b": "Todd Woodard",
   "team": "Open Play",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -8,
   "avgExpected": -8.5,
   "aId": "219b369d-c5eb-4ef8-bcea-559f56d94ff0",
   "bId": "f7632286-b2a6-4f7d-aef2-bc85e4b308b0"
  },
  {
   "a": "Chris Alworth",
   "b": "Chris Balta",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 4.6,
   "avgExpected": 4.2,
   "aId": "286cbda4-8288-4a14-931c-f84521407eb7",
   "bId": "2be2d2b6-177e-4378-a33d-49005788a7fd"
  },
  {
   "a": "Patricia San Andres",
   "b": "Marcus Burritt",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 3.2,
   "avgExpected": 2.8,
   "aId": "42e86266-ff96-4961-8e27-adeac7084f59",
   "bId": "9605152c-b88b-40bd-b870-e2ea577e376a"
  },
  {
   "a": "Marcus Burritt",
   "b": "Adam Werwie",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 4.9,
   "avgExpected": 4.6,
   "aId": "9605152c-b88b-40bd-b870-e2ea577e376a",
   "bId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "a": "Jane Pascua",
   "b": "Jasmine Nguyen",
   "team": "ACE Downingtown",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.2,
   "avgExpected": 1.9,
   "aId": "5c79bec7-67d9-4d8b-beef-a6f423475522",
   "bId": "8621d525-134a-4647-a7bd-98c3a357cdc3"
  },
  {
   "a": "Jessica Wormeck",
   "b": "Butch Kreilick",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -2.7,
   "avgExpected": -3.2,
   "aId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Meghan Klein",
   "b": "Lakshmikanth Chaluvadi",
   "team": "Flemington",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 3.9,
   "avgExpected": 3.7,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "377302a4-12da-4449-bbfc-a28248436679"
  },
  {
   "a": "Jeff Kesner",
   "b": "Paul Matzko",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.2,
   "avgExpected": -1.6,
   "aId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Jeff Kesner",
   "b": "Butch Kreilick",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.8,
   "avgExpected": -2.1,
   "aId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Gerry Bissinger",
   "b": "Brandi Horowitz",
   "team": "APC Garden State",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.6,
   "aId": "44999222-7eed-49f7-982b-10ad7155256a",
   "bId": "bc3fda4d-3cf9-4daf-a2f1-6010ce63195e"
  },
  {
   "a": "Trisha Marion",
   "b": "Adolfo Nicdao",
   "team": "Pickle Juice Blackwood",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -4.3,
   "avgExpected": -4.7,
   "aId": "5956c13a-1fe1-45b2-bd4f-d0200d4adda5",
   "bId": "8113bbe4-2b33-431a-8f71-61121ebc956f"
  },
  {
   "a": "Michael Van Horn",
   "b": "Karen Marshall",
   "team": "Pickle Juice Blackwood",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 2,
   "aId": "0782db8d-bb52-4a47-88b5-00e8db2358c4",
   "bId": "53a84b91-acc8-4a27-a7e5-2081e1afcc98"
  },
  {
   "a": "Udita Agarwala",
   "b": "Todd Woodard",
   "team": "Open Play",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -5.7,
   "avgExpected": -6.1,
   "aId": "2351aaff-bff5-4734-9b22-20ce6988c40d",
   "bId": "f7632286-b2a6-4f7d-aef2-bc85e4b308b0"
  },
  {
   "a": "Jamie Walsh",
   "b": "Sophie O’Driscoll",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1.7,
   "avgExpected": 1.2,
   "aId": "0decf4d5-453b-41f8-b5f8-3ff5ba34237a",
   "bId": "40f98b81-c10a-4e0b-9154-3a8ffa3d784c"
  },
  {
   "a": "Peter Hackney",
   "b": "Steven Fernandez",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -3,
   "avgExpected": -3.3,
   "aId": "0839ae18-ad84-45e6-bfde-3d0855e06b22",
   "bId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "a": "Nikki Nigro",
   "b": "Matthew Marciani",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -2.3,
   "avgExpected": -2.7,
   "aId": "01c2e4d1-3738-4ee6-8878-4a2559ec006a",
   "bId": "ec0da4c0-f52a-4ab9-a579-6ca3d815f19c"
  },
  {
   "a": "Freddy Li",
   "b": "Jimmy Tom",
   "team": "PickleRage Union County Net Ninjas",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.6,
   "aId": "455cc819-6519-4c36-9dd7-2dbb33845102",
   "bId": "4e873e4f-16c8-4504-a702-941e045a7d3b"
  },
  {
   "a": "Viviane Tran",
   "b": "Oanh Quach",
   "team": "APC Garden State",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2.2,
   "avgExpected": 1.8,
   "aId": "323329ee-8ba1-4c23-a5f5-1592464e8e0b",
   "bId": "b4ac779e-91e0-46f1-a4c7-92e1068db57a"
  },
  {
   "a": "Viviane Tran",
   "b": "Megan Torres",
   "team": "APC Garden State",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 1.8,
   "avgExpected": 1.4,
   "aId": "323329ee-8ba1-4c23-a5f5-1592464e8e0b",
   "bId": "45590591-9a85-4098-8ba9-36fc0fa18f4c"
  },
  {
   "a": "Jennifer Lynch",
   "b": "Evelyn Geating",
   "team": "Bounce Philly",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.2,
   "avgActual": 0.1,
   "avgExpected": -0.1,
   "aId": "54a0bc36-2277-4497-bb82-d8499157c1fe",
   "bId": "798a21bd-83e7-42e9-bd86-c74448c7dada"
  },
  {
   "a": "Melanie Gibson",
   "b": "Terri Pflueger",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.5,
   "aId": "1fe72cf8-6731-4673-b424-3ae625f4319a",
   "bId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "a": "Anne Buckley",
   "b": "Rhys Gardiner",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 4.8,
   "avgExpected": 4.3,
   "aId": "07881006-c083-4729-8424-410aeee08940",
   "bId": "084d4f59-84ab-40bb-8503-0495501e1ea9"
  },
  {
   "a": "Jebril Guevarra",
   "b": "Ed Amato",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.4,
   "aId": "08175577-0ebd-4e9d-99f8-27910ed5f02f",
   "bId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "a": "Margo Langer",
   "b": "Meghan Klein",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 6,
   "avgExpected": 5.5,
   "aId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75",
   "bId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909"
  },
  {
   "a": "Kenneth Ocasio",
   "b": "Tomas Ruiz",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -2.7,
   "avgExpected": -3.1,
   "aId": "1c908613-b93b-43b3-b084-b2da12b2faa2",
   "bId": "933eb2e5-0a4b-46be-945d-be9e6c70dc7b"
  },
  {
   "a": "Kristin Larosa",
   "b": "Rosellen Perlowitz",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 3.7,
   "avgExpected": 3.1,
   "aId": "03162d88-f7e2-4381-9ede-fd884d73940b",
   "bId": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf"
  },
  {
   "a": "Robert Courchain",
   "b": "Lee Latini",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1.8,
   "avgExpected": 1.4,
   "aId": "371bb742-9ea6-464a-8c27-df8469b90a62",
   "bId": "e5a9569f-f8ce-4c71-912c-a6872bb7de77"
  },
  {
   "a": "Kris Miller",
   "b": "Thomas Lum",
   "team": "Picklr Newark",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.4,
   "aId": "8f90f526-02c7-43e5-84ee-60cc2e7fd1b4",
   "bId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7"
  },
  {
   "a": "Ashley Altman",
   "b": "Matthew Cohen",
   "team": "Picklr Newark",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.1,
   "aId": "57cb28c4-947f-4ea0-a6eb-5e21a777552a",
   "bId": "d068c594-50ee-495b-8997-766c9f6c68d5"
  },
  {
   "a": "Meghan Klein",
   "b": "Mark Wenstrom",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.3,
   "avgExpected": -0.2,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "12159177-8eb2-4e6f-bb4f-22575eeed130"
  },
  {
   "a": "Line Barlow",
   "b": "Alexis Kerven",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.2,
   "avgActual": 0.3,
   "avgExpected": 0,
   "aId": "20f0fb60-8e60-448c-b971-40fb6e7fca23",
   "bId": "a2b836f4-8bfa-4baf-b01a-e342f5947c04"
  },
  {
   "a": "Suzane Sullivan",
   "b": "Diahann Ouly",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0,
   "avgExpected": -0.2,
   "aId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6",
   "bId": "7f49224e-d530-48a6-acc3-30d8b6357a82"
  },
  {
   "a": "Howie Knudson",
   "b": "Adam Werwie",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.2,
   "aId": "45973650-1f33-43dc-a0f1-1fce356962e0",
   "bId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "a": "Keith Fallon",
   "b": "Abby Viola",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.3,
   "avgExpected": -1.5,
   "aId": "49a11c9c-4eed-430b-8c58-053c30246d45",
   "bId": "711bd5d7-fb81-448d-b5db-89e773115943"
  },
  {
   "a": "Michele Iannella",
   "b": "Trisha Marion",
   "team": "Pickle Juice Blackwood",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -2,
   "avgExpected": -2.1,
   "aId": "2ce4041d-b45e-4c9f-87ec-c6ec04dec0e8",
   "bId": "5956c13a-1fe1-45b2-bd4f-d0200d4adda5"
  },
  {
   "a": "Sophie O’Driscoll",
   "b": "James Conroy",
   "team": "Players Courtyard",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 4.3,
   "avgExpected": 4.1,
   "aId": "40f98b81-c10a-4e0b-9154-3a8ffa3d784c",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Tuan Nguyen",
   "b": "Thomas Nguyen",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -2.2,
   "avgExpected": -2.4,
   "aId": "7bafdd3b-e5cd-4d7a-9098-515a2b560851",
   "bId": "9c6d4e1a-71eb-4c19-af5b-7efc2758939a"
  },
  {
   "a": "Colin Mackey",
   "b": "James Conroy",
   "team": "Players Courtyard",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 0.2,
   "avgExpected": -0.1,
   "aId": "6e5d2bb6-bf2e-4f06-a2f8-24af7eca9cf8",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Colin Mackey",
   "b": "Josh Ruble",
   "team": "Players Courtyard",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.8,
   "avgExpected": 2.6,
   "aId": "6e5d2bb6-bf2e-4f06-a2f8-24af7eca9cf8",
   "bId": "c44c6a71-87d4-4003-8fcb-bb812a3307a3"
  },
  {
   "a": "Prasad Mittapalli",
   "b": "Rachel Searby",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.8,
   "aId": "11ccd85e-b03b-43d1-ae48-bc26b6eb19c8",
   "bId": "3648420d-4dae-4404-8b67-3162f343f6aa"
  },
  {
   "a": "Carlos Echenique",
   "b": "Kellie Roshak",
   "team": "PickleRage Union County Net Ninjas",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4.2,
   "avgExpected": 3.9,
   "aId": "74530d59-ff19-42a4-87d4-0e3b9e516c66",
   "bId": "fd9c829a-50de-40a1-8342-7a6afe0fc7b4"
  },
  {
   "a": "Helen Goh",
   "b": "Peter Lien",
   "team": "Bounce Tempest",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -3.3,
   "avgExpected": -3.5,
   "aId": "45230dff-64e7-49b9-b211-595fad5c3e40",
   "bId": "86851415-5e99-413d-b521-cd3b3edc1137"
  },
  {
   "a": "Quynh Nguyen",
   "b": "Mai Chan",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.8,
   "avgExpected": 3.6,
   "aId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
   "bId": "e24d689e-39dd-4423-a9db-0fae7bcc51b4"
  },
  {
   "a": "Jennifer Lynch",
   "b": "Thuy Le",
   "team": "Bounce Philly",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 3.3,
   "avgExpected": 3.1,
   "aId": "54a0bc36-2277-4497-bb82-d8499157c1fe",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Lisa Dinh",
   "b": "Thuy Le",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.3,
   "avgExpected": 2.1,
   "aId": "aaf27c02-6d20-4a96-835c-3084d799ac0f",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Michele Sagurton",
   "b": "Brandon Helicher",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -7,
   "avgExpected": -7.2,
   "aId": "caa5146b-9cc5-4a02-adf0-c70e822854fc",
   "bId": "d3120166-5a46-4711-9975-819941f623c8"
  },
  {
   "a": "Jonathan Wong",
   "b": "Tomas Ruiz",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 3.8,
   "avgExpected": 3.6,
   "aId": "6bc511e7-c686-4a9b-866a-d109aed9104d",
   "bId": "933eb2e5-0a4b-46be-945d-be9e6c70dc7b"
  },
  {
   "a": "Jade Chin",
   "b": "Alex Glushek",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -2.2,
   "avgExpected": -2.4,
   "aId": "4fcda82e-e24a-45d7-9784-c230d47a113b",
   "bId": "65e58579-8b95-46f1-9e95-a3e53347de32"
  },
  {
   "a": "Lukas Chrebet",
   "b": "Brandon Helicher",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -5,
   "avgExpected": -5.2,
   "aId": "42795346-b8aa-4e5d-80a5-8a1768c094e8",
   "bId": "d3120166-5a46-4711-9975-819941f623c8"
  },
  {
   "a": "Lauren Gabat",
   "b": "Bill Dower",
   "team": "Picklr Newark",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 7,
   "avgExpected": 6.8,
   "aId": "ef0b7b1a-41ac-4ccd-b502-a68ad5549a3b",
   "bId": "f920b62c-0fa3-417a-ac3e-b7bb6f555fc4"
  },
  {
   "a": "Lily Hahn",
   "b": "Anbu Cheeralan",
   "team": "Open Play",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -3.7,
   "avgExpected": -3.9,
   "aId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833",
   "bId": "77f81ccf-106a-4a27-9c3d-5b5383c5db5a"
  },
  {
   "a": "Jason Grote",
   "b": "Lawrence Dipietro",
   "team": "Pickle Juice Blackwood",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0,
   "avgActual": -3.6,
   "avgExpected": -3.6,
   "aId": "a7e6fe82-3337-42eb-b7b6-8cdde6523ace",
   "bId": "c521a44b-2c1e-43f3-bd58-eccadd1d0433"
  },
  {
   "a": "Maggie Wang",
   "b": "Andrew Kimmel",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.5,
   "avgExpected": 0.6,
   "aId": "0c1f375a-1567-4b92-8fb2-907a22d8e2ee",
   "bId": "cbd9ae00-0624-49d3-b733-55a2765aff37"
  },
  {
   "a": "Tuan Nguyen",
   "b": "Thuy Nguyen",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0,
   "aId": "7bafdd3b-e5cd-4d7a-9098-515a2b560851",
   "bId": "8ea3584b-11a3-4d0c-ace0-bce5bd3a00f1"
  },
  {
   "a": "Megan Quigley",
   "b": "Helen Goh",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 1.4,
   "avgExpected": 1.5,
   "aId": "37d69abc-9610-4c03-a618-f905bd0e2fb1",
   "bId": "45230dff-64e7-49b9-b211-595fad5c3e40"
  },
  {
   "a": "Danica Bramschreiber",
   "b": "Robert Paniti",
   "team": "Home Court",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 2,
   "aId": "362cbda8-a78b-43bb-b653-1daef081ce2f",
   "bId": "d17ff3de-7455-4efb-b1be-4c61b5acbdf2"
  },
  {
   "a": "Jamie West",
   "b": "Andrea Galanti",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.5,
   "avgExpected": 0.4,
   "aId": "715c1386-54e9-4169-bacb-e206a518f4c5",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Sandy Duarte",
   "b": "Matthew Cohen",
   "team": "Picklr Newark",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -3.7,
   "avgExpected": -3.8,
   "aId": "be1f6512-56a2-4b91-b483-7677af01867a",
   "bId": "d068c594-50ee-495b-8997-766c9f6c68d5"
  },
  {
   "a": "Gerry Bissinger",
   "b": "Jamie West",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.5,
   "avgExpected": 0.5,
   "aId": "44999222-7eed-49f7-982b-10ad7155256a",
   "bId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "a": "Quynh Nguyen",
   "b": "Thomas Nguyen",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.3,
   "avgExpected": 1.2,
   "aId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
   "bId": "9c6d4e1a-71eb-4c19-af5b-7efc2758939a"
  },
  {
   "a": "Evelyn Geating",
   "b": "William Waggenspack",
   "team": "Bounce Philly",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0,
   "avgActual": 3.2,
   "avgExpected": 3.2,
   "aId": "798a21bd-83e7-42e9-bd86-c74448c7dada",
   "bId": "8aaeb517-ab68-4f67-9b9b-e347909f52e7"
  },
  {
   "a": "Jennifer Guldin",
   "b": "Steven Fernandez",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0,
   "avgActual": -3.2,
   "avgExpected": -3.2,
   "aId": "584e770c-86b1-4561-ba01-4ef1aad6ff9b",
   "bId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "a": "Rhys Gardiner",
   "b": "Alexis Kerven",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0,
   "avgActual": 1,
   "avgExpected": 1,
   "aId": "084d4f59-84ab-40bb-8503-0495501e1ea9",
   "bId": "a2b836f4-8bfa-4baf-b01a-e342f5947c04"
  },
  {
   "a": "Jessica Kopec",
   "b": "Thao Tran",
   "team": "PickleRage Union County Pandas",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0,
   "avgActual": -0.7,
   "avgExpected": -0.6,
   "aId": "3b6e4a3b-d867-475c-9418-ea6f854b8dd8",
   "bId": "a7416218-74a3-40c5-9327-97840c949fc4"
  },
  {
   "a": "Brad De Jesus",
   "b": "Matt Soliman",
   "team": "Bounce Philly",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -6.7,
   "avgExpected": -6.6,
   "aId": "0dcffbac-6931-400d-b652-41c2720e6311",
   "bId": "a955b9bb-4b46-4bb5-af0e-2f8c89009b22"
  },
  {
   "a": "Jade Chin",
   "b": "Michele Sagurton",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0,
   "avgActual": -5.4,
   "avgExpected": -5.5,
   "aId": "4fcda82e-e24a-45d7-9784-c230d47a113b",
   "bId": "caa5146b-9cc5-4a02-adf0-c70e822854fc"
  },
  {
   "a": "Jackie Bowes",
   "b": "Josh Ruble",
   "team": "Players Courtyard",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 3,
   "avgExpected": 3,
   "aId": "a111c97f-aba4-4850-902b-0730e2160f76",
   "bId": "c44c6a71-87d4-4003-8fcb-bb812a3307a3"
  },
  {
   "a": "Brad De Jesus",
   "b": "Meg Kelly",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.6,
   "avgExpected": 2.5,
   "aId": "0dcffbac-6931-400d-b652-41c2720e6311",
   "bId": "bf9f2dd4-3b39-4c8c-b768-04a47d1b23f9"
  },
  {
   "a": "Susan Li",
   "b": "Haidee Midgley",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
  },
  {
   "a": "Zyanya Flores",
   "b": "Lionell Matthews",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.6,
   "avgExpected": 4.8,
   "aId": "148bddd6-0d6a-468a-903d-84ba2da82239",
   "bId": "331d44ad-9004-4801-9978-45938dc3272d"
  },
  {
   "a": "Holden Smith",
   "b": "Kevin Algarme",
   "team": "ACE Downingtown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 4,
   "avgExpected": 4.2,
   "aId": "679d2999-1bf2-40ae-a420-9edf09aa8723",
   "bId": "af1295ea-6786-47fd-8c51-dae10f13070a"
  },
  {
   "a": "Victor Salicetti",
   "b": "Suzane Sullivan",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2.1,
   "avgExpected": 2.3,
   "aId": "08cb8582-4347-4694-9f58-7e479aa3b7a5",
   "bId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6"
  },
  {
   "a": "Howie Knudson",
   "b": "Sabiha Kermalli",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.4,
   "aId": "45973650-1f33-43dc-a0f1-1fce356962e0",
   "bId": "7909f81b-3c87-4f6a-8476-50ae30e2ab4b"
  },
  {
   "a": "Sean Greener",
   "b": "Terri Pflueger",
   "team": "Monroe",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": -0.1,
   "avgActual": 2.6,
   "avgExpected": 2.7,
   "aId": "12f33b3a-b4ea-4b31-affa-dc7917dce94b",
   "bId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "a": "Adolfo Nicdao",
   "b": "Cathy Mclaughlin",
   "team": "Pickle Juice Blackwood",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -8.2,
   "avgExpected": -8,
   "aId": "8113bbe4-2b33-431a-8f71-61121ebc956f",
   "bId": "8f4f1a96-9e08-462d-8186-ce4d8389e894"
  },
  {
   "a": "Megan Torres",
   "b": "Joseph Mckenna",
   "team": "APC Garden State",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.1,
   "avgActual": 1.5,
   "avgExpected": 1.7,
   "aId": "45590591-9a85-4098-8ba9-36fc0fa18f4c",
   "bId": "551c6f9d-b1e1-4b5b-a8cb-bea20a14d9ff"
  },
  {
   "a": "Jason Heiselman",
   "b": "Alexis Kerven",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -4.4,
   "avgExpected": -4.2,
   "aId": "24b7e6fe-4568-4d20-9cea-6b29169d486e",
   "bId": "a2b836f4-8bfa-4baf-b01a-e342f5947c04"
  },
  {
   "a": "Lily Hahn",
   "b": "Charishma Serrano",
   "team": "Open Play",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -3.2,
   "avgExpected": -3.2,
   "aId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833",
   "bId": "5fdbcd51-c12c-49f7-84f6-31f8b00ea8b1"
  },
  {
   "a": "Jason Rosenberg",
   "b": "Steven Fernandez",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.7,
   "aId": "ce12bbc9-1bf3-48fa-8c54-15afb33e1dcb",
   "bId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "a": "Prasad Mittapalli",
   "b": "Brittany Riccitiello",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.4,
   "aId": "11ccd85e-b03b-43d1-ae48-bc26b6eb19c8",
   "bId": "aea847ce-8af4-4809-b421-b25faeef0563"
  },
  {
   "a": "Jennifer Guldin",
   "b": "Elizabeth Dailey",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.8,
   "aId": "584e770c-86b1-4561-ba01-4ef1aad6ff9b",
   "bId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b"
  },
  {
   "a": "Cesar Alvarez",
   "b": "Brandon Agudelo",
   "team": "PickleRage Union County Net Ninjas",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 6,
   "avgExpected": 6.1,
   "aId": "3b7c9eab-a6e2-4e8d-b0f6-bb9a6b6dc0eb",
   "bId": "a2c6fd48-c70a-4dc1-a1e0-4c177c4b0f58"
  },
  {
   "a": "Patricia Majowicz",
   "b": "Andy Pineda",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.6,
   "aId": "95bb08f8-b0f7-4849-852e-6bebeb9e3e53",
   "bId": "bb6c579d-1627-4971-ad0f-4be65598d579"
  },
  {
   "a": "Alyssa Beattie",
   "b": "Brian Perlowitz",
   "team": "Home Court",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.1,
   "aId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf",
   "bId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1"
  },
  {
   "a": "Andy Pineda",
   "b": "Robert Paniti",
   "team": "Home Court",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.3,
   "avgExpected": 1.4,
   "aId": "bb6c579d-1627-4971-ad0f-4be65598d579",
   "bId": "d17ff3de-7455-4efb-b1be-4c61b5acbdf2"
  },
  {
   "a": "Jayson Lee",
   "b": "Carlos Echenique",
   "team": "PickleRage Union County Net Ninjas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.2,
   "aId": "145a759d-3547-4ba8-a466-85f7c857a392",
   "bId": "74530d59-ff19-42a4-87d4-0e3b9e516c66"
  },
  {
   "a": "Jennifer Lynch",
   "b": "William Waggenspack",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.5,
   "aId": "54a0bc36-2277-4497-bb82-d8499157c1fe",
   "bId": "8aaeb517-ab68-4f67-9b9b-e347909f52e7"
  },
  {
   "a": "Kenneth Ocasio",
   "b": "Diana Tabia",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1.3,
   "avgExpected": 1.5,
   "aId": "1c908613-b93b-43b3-b084-b2da12b2faa2",
   "bId": "7494f19a-141d-4c00-8d37-d5e79eca4853"
  },
  {
   "a": "Line Barlow",
   "b": "Joan Harris",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.7,
   "avgExpected": 1,
   "aId": "20f0fb60-8e60-448c-b971-40fb6e7fca23",
   "bId": "b0132c9e-2a21-45c8-b04d-b84aec626e68"
  },
  {
   "a": "Alan Weissman",
   "b": "Andrew Kimmel",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.4,
   "aId": "12febf17-8650-40dd-92ca-a0bda06caf0f",
   "bId": "cbd9ae00-0624-49d3-b733-55a2765aff37"
  },
  {
   "a": "Tomas Ruiz",
   "b": "David Abiog",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.5,
   "aId": "933eb2e5-0a4b-46be-945d-be9e6c70dc7b",
   "bId": "d2679852-b0e5-4853-abdf-3253a22fdea4"
  },
  {
   "a": "Kris Miller",
   "b": "Patti Calhoon",
   "team": "Picklr Newark",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.3,
   "avgExpected": -1,
   "aId": "8f90f526-02c7-43e5-84ee-60cc2e7fd1b4",
   "bId": "dda14163-7c4e-4316-90f1-0a3852107876"
  },
  {
   "a": "Hee Kim",
   "b": "Srinath Katari",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 2.7,
   "avgExpected": 2.8,
   "aId": "03fa8bb2-957d-45f2-9e41-628a2c5ac9e0",
   "bId": "abd6070d-3dd7-4313-b27e-2f2c702d0dd5"
  },
  {
   "a": "Meredith Janeiro",
   "b": "Marvin Steller",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.2,
   "avgExpected": -1,
   "aId": "4ec66b93-76c9-45ef-b5cb-0b1209e876d9",
   "bId": "a11d0ccc-a000-4582-bf88-f27df93e00d2"
  },
  {
   "a": "Megan Torres",
   "b": "Andrea Galanti",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.8,
   "aId": "45590591-9a85-4098-8ba9-36fc0fa18f4c",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Michele Sagurton",
   "b": "Nicole Melchionna",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -6.2,
   "avgExpected": -6,
   "aId": "caa5146b-9cc5-4a02-adf0-c70e822854fc",
   "bId": "cce11776-3ad2-4727-8b1d-7e848a1343de"
  },
  {
   "a": "Diana Tabia",
   "b": "Matthew Ferrante",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.5,
   "aId": "7494f19a-141d-4c00-8d37-d5e79eca4853",
   "bId": "b813a895-871c-4e52-a0f8-e723f4066ead"
  },
  {
   "a": "Christopher Sachs",
   "b": "Srinath Katari",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.8,
   "avgExpected": 4.9,
   "aId": "52e5dfee-42f1-4c8f-b3ee-ca7c6e49a7fb",
   "bId": "abd6070d-3dd7-4313-b27e-2f2c702d0dd5"
  },
  {
   "a": "Sarah Dente",
   "b": "Kimberley Levins",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 6.7,
   "avgExpected": 7.1,
   "aId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f",
   "bId": "c132bfd5-ae12-478d-86bc-e483f85cb26a"
  },
  {
   "a": "Jane Pascua",
   "b": "Esterlina Wiest",
   "team": "ACE Downingtown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.2,
   "avgExpected": 2.6,
   "aId": "5c79bec7-67d9-4d8b-beef-a6f423475522",
   "bId": "b43f9cca-12f6-4af2-bcb7-1b9debd7514a"
  },
  {
   "a": "Sean Greener",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 3,
   "avgExpected": 3.3,
   "aId": "12f33b3a-b4ea-4b31-affa-dc7917dce94b",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "David Burke",
   "b": "Barry Lerner",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -6.6,
   "avgExpected": -6.3,
   "aId": "69b99d4e-f80c-480a-a008-33ff326a3c93",
   "bId": "ab2b42d0-c15e-4983-afb5-cbef2d674af5"
  },
  {
   "a": "Cory Mintz",
   "b": "Keith Fallon",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -0.8,
   "avgExpected": -0.4,
   "aId": "33feb337-f2ab-4e6d-819b-9535ec743685",
   "bId": "49a11c9c-4eed-430b-8c58-053c30246d45"
  },
  {
   "a": "Elizabeth Trimble",
   "b": "Katie O'Mara",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -10.7,
   "avgExpected": -10.2,
   "aId": "82c7f594-f817-46ae-a7a0-715f4be5cd76",
   "bId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "a": "Oanh Quach",
   "b": "Andrea Galanti",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1,
   "avgExpected": 1.4,
   "aId": "b4ac779e-91e0-46f1-a4c7-92e1068db57a",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Andrea Galanti",
   "b": "Taylor Runyen",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 4.3,
   "avgExpected": 4.9,
   "aId": "cd5e243a-d109-4637-8372-9330696a943d",
   "bId": "cda5a763-48f3-4303-8579-42ff05230f45"
  },
  {
   "a": "Paul Michael Serrano",
   "b": "Katie Li",
   "team": "Open Play",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -2.8,
   "avgExpected": -2.5,
   "aId": "b0097209-2d93-4856-8887-b040299f9dbd",
   "bId": "b9087267-ae35-4c4d-baf5-90a51346fb9b"
  },
  {
   "a": "Lily Hahn",
   "b": "Katie Li",
   "team": "Open Play",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -0.6,
   "avgExpected": -0.3,
   "aId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833",
   "bId": "b9087267-ae35-4c4d-baf5-90a51346fb9b"
  },
  {
   "a": "Thao Tran",
   "b": "Rachel Appleton",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -2.7,
   "avgExpected": -2.1,
   "aId": "a7416218-74a3-40c5-9327-97840c949fc4",
   "bId": "db90de13-5c04-4d76-b9b8-2cd30c9900a8"
  },
  {
   "a": "Peter Hackney",
   "b": "Susan Li",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2.7,
   "avgExpected": -2.3,
   "aId": "0839ae18-ad84-45e6-bfde-3d0855e06b22",
   "bId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363"
  },
  {
   "a": "Nathan Trimmer",
   "b": "Adele Hackney",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -3.5,
   "avgExpected": -3.2,
   "aId": "9541ec05-a25a-4577-b59c-bdf04006b1b6",
   "bId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "a": "Elizabeth Dailey",
   "b": "Steven Fernandez",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -3.3,
   "avgExpected": -3,
   "aId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b",
   "bId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "a": "Katherine Mott",
   "b": "Trisha Marion",
   "team": "Pickle Juice Blackwood",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -4.4,
   "avgExpected": -4,
   "aId": "014db139-e54f-4546-8fdb-77dfe90e5780",
   "bId": "5956c13a-1fe1-45b2-bd4f-d0200d4adda5"
  },
  {
   "a": "Trisha Marion",
   "b": "John Dechristopher",
   "team": "Pickle Juice Blackwood",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -5,
   "avgExpected": -4.5,
   "aId": "5956c13a-1fe1-45b2-bd4f-d0200d4adda5",
   "bId": "882e40aa-e8ec-4322-a9f9-f6f3631a43c2"
  },
  {
   "a": "Barbara Fontanella",
   "b": "Jaymie Vincelli",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 4.8,
   "avgExpected": 5.2,
   "aId": "3390e1cb-1881-414b-b8cf-9a0c06d13a0f",
   "bId": "daba10b1-0903-4d21-b71f-f2b670a0b428"
  },
  {
   "a": "Taylor Leuck",
   "b": "Matthew Ferrante",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -3.5,
   "avgExpected": -3.1,
   "aId": "72954591-9ccc-4961-8505-b9da6cee2320",
   "bId": "b813a895-871c-4e52-a0f8-e723f4066ead"
  },
  {
   "a": "Viviane Tran",
   "b": "Abby Sprinkel",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.3,
   "avgExpected": -0.8,
   "aId": "323329ee-8ba1-4c23-a5f5-1592464e8e0b",
   "bId": "491af413-7874-492a-9c92-6dccc6b736e5"
  },
  {
   "a": "Lili Zhang",
   "b": "Charishma Serrano",
   "team": "Open Play",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -5.3,
   "avgExpected": -4.8,
   "aId": "219b369d-c5eb-4ef8-bcea-559f56d94ff0",
   "bId": "5fdbcd51-c12c-49f7-84f6-31f8b00ea8b1"
  },
  {
   "a": "Katherine Mott",
   "b": "Jason Grote",
   "team": "Pickle Juice Blackwood",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -3,
   "avgExpected": -2.6,
   "aId": "014db139-e54f-4546-8fdb-77dfe90e5780",
   "bId": "a7e6fe82-3337-42eb-b7b6-8cdde6523ace"
  },
  {
   "a": "Taryn Seidner",
   "b": "Jen Ogorzat",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -3.7,
   "avgExpected": -3.3,
   "aId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "bId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "a": "Jeannine Calhoun",
   "b": "Paul Matzko",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 4.7,
   "avgExpected": 5.4,
   "aId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "James Yu",
   "b": "Katie O'Mara",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -7.3,
   "avgExpected": -6.5,
   "aId": "125cee00-5416-44ef-81e6-00818e3c64f6",
   "bId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "a": "Joan Harris",
   "b": "Maxwell Winters",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.5,
   "aId": "b0132c9e-2a21-45c8-b04d-b84aec626e68",
   "bId": "d5037744-373a-485e-9fd3-5564495b8c2d"
  },
  {
   "a": "Brian Seligson",
   "b": "Maxwell Winters",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.6,
   "aId": "66cca19b-c691-4ee2-addb-f8344943103e",
   "bId": "d5037744-373a-485e-9fd3-5564495b8c2d"
  },
  {
   "a": "Elpidio Arias",
   "b": "Nathan Trimmer",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -3.3,
   "avgExpected": -2.7,
   "aId": "76dcad38-def0-4d35-a58c-8490c6eb642e",
   "bId": "9541ec05-a25a-4577-b59c-bdf04006b1b6"
  },
  {
   "a": "Connie Tom",
   "b": "Jimmy Tom",
   "team": "PickleRage Union County Net Ninjas",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 1.9,
   "avgExpected": 2.3,
   "aId": "493b9730-cc53-4634-9561-49c6f1ddcb08",
   "bId": "4e873e4f-16c8-4504-a702-941e045a7d3b"
  },
  {
   "a": "Katherine Mott",
   "b": "Karen Marshall",
   "team": "Pickle Juice Blackwood",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.5,
   "aId": "014db139-e54f-4546-8fdb-77dfe90e5780",
   "bId": "53a84b91-acc8-4a27-a7e5-2081e1afcc98"
  },
  {
   "a": "Meggie Hodgson",
   "b": "Grady Craig",
   "team": "Bounce Philly",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 2.7,
   "avgExpected": 3.2,
   "aId": "6386e6cb-1a79-4148-ba25-d735ad30054c",
   "bId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "a": "Corey Abrams",
   "b": "Jennifer Lynch",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -0.7,
   "avgExpected": 0.1,
   "aId": "1a37dcd5-8896-4e3e-8219-898b6a418e86",
   "bId": "54a0bc36-2277-4497-bb82-d8499157c1fe"
  },
  {
   "a": "Jose Chariez",
   "b": "Alexis Kerven",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -3.3,
   "avgExpected": -2.7,
   "aId": "4dc234ca-c486-4a9f-adb5-0ab8e257379d",
   "bId": "a2b836f4-8bfa-4baf-b01a-e342f5947c04"
  },
  {
   "a": "Diana Tabia",
   "b": "Agnieszka Procner",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "7494f19a-141d-4c00-8d37-d5e79eca4853",
   "bId": "87f99a20-26ed-4aa8-88de-2842f5a4e389"
  },
  {
   "a": "Kenneth Ocasio",
   "b": "James Gillick",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4.3,
   "avgExpected": 4.9,
   "aId": "1c908613-b93b-43b3-b084-b2da12b2faa2",
   "bId": "60dda206-8284-415e-b83e-3836d61e6701"
  },
  {
   "a": "Alexander Masotti",
   "b": "Chantya Roberson",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -13.2,
   "avgExpected": -12.6,
   "aId": "5d975e37-5ced-4065-baf6-b2f949c6c78a",
   "bId": "68cbf4f5-a41e-4724-a1b5-b8d3d06767e1"
  },
  {
   "a": "Katelyn Carretas",
   "b": "Taylor Newell",
   "team": "ACE Downingtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "9564f996-6460-4bbd-b589-270545a1d4ef",
   "bId": "ff4f3e35-1472-444c-b4d0-aa381bbd12d1"
  },
  {
   "a": "Ismael Hernandez",
   "b": "Maridel Ablaza",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1.3,
   "avgExpected": 1.8,
   "aId": "262cf0be-4906-46fb-ab84-f4aa760bac58",
   "bId": "c868d44f-a501-4c1a-8d17-fd6e4a338308"
  },
  {
   "a": "Mike Fede",
   "b": "Thomas Lum",
   "team": "Picklr Newark",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2.3,
   "avgExpected": -1.7,
   "aId": "7663a676-aec1-4dea-9f73-4127a2c88dbb",
   "bId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7"
  },
  {
   "a": "Nicole Melchionna",
   "b": "Brandon Helicher",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.5,
   "avgExpected": -0.9,
   "aId": "cce11776-3ad2-4727-8b1d-7e848a1343de",
   "bId": "d3120166-5a46-4711-9975-819941f623c8"
  },
  {
   "a": "James Gillick",
   "b": "Jaymie Vincelli",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 0.5,
   "avgExpected": 1.2,
   "aId": "60dda206-8284-415e-b83e-3836d61e6701",
   "bId": "daba10b1-0903-4d21-b71f-f2b670a0b428"
  },
  {
   "a": "Zyanya Flores",
   "b": "Alina Allakhveranova",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 4.2,
   "avgExpected": 4.8,
   "aId": "148bddd6-0d6a-468a-903d-84ba2da82239",
   "bId": "bbf13d1a-5393-4549-9d15-c5d2975f3e55"
  },
  {
   "a": "Jane Pascua",
   "b": "Lanz Santos",
   "team": "ACE Downingtown",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 2.6,
   "avgExpected": 3.3,
   "aId": "5c79bec7-67d9-4d8b-beef-a6f423475522",
   "bId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37"
  },
  {
   "a": "Margo Langer",
   "b": "Butch Kreilick",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -7.7,
   "avgExpected": -6.6,
   "aId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Michele Iannella",
   "b": "Lawrence Dipietro",
   "team": "Pickle Juice Blackwood",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -4.3,
   "avgExpected": -3.6,
   "aId": "2ce4041d-b45e-4c9f-87ec-c6ec04dec0e8",
   "bId": "c521a44b-2c1e-43f3-bd58-eccadd1d0433"
  },
  {
   "a": "Lily Hahn",
   "b": "Luan Vo",
   "team": "Open Play",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.7,
   "aId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833",
   "bId": "9b11aeff-377e-48f3-9770-14388ac96b68"
  },
  {
   "a": "Alan Weissman",
   "b": "Jason Heiselman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -5.3,
   "avgExpected": -4.5,
   "aId": "12febf17-8650-40dd-92ca-a0bda06caf0f",
   "bId": "24b7e6fe-4568-4d20-9cea-6b29169d486e"
  },
  {
   "a": "Marvin Steller",
   "b": "Kenneth Bautista",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2,
   "avgExpected": -1.2,
   "aId": "a11d0ccc-a000-4582-bf88-f27df93e00d2",
   "bId": "c383dca8-551f-4776-90d7-7f57248d1680"
  },
  {
   "a": "Jennifer Guldin",
   "b": "Stephanie Taxter",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -1.9,
   "avgExpected": -1.2,
   "aId": "584e770c-86b1-4561-ba01-4ef1aad6ff9b",
   "bId": "66a38d92-6b44-498c-8828-a8f7cd95fb9f"
  },
  {
   "a": "Freddy Li",
   "b": "Kellie Roshak",
   "team": "PickleRage Union County Net Ninjas",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 1.7,
   "avgExpected": 2.3,
   "aId": "455cc819-6519-4c36-9dd7-2dbb33845102",
   "bId": "fd9c829a-50de-40a1-8342-7a6afe0fc7b4"
  },
  {
   "a": "Alyssa Beattie",
   "b": "David Schwartz",
   "team": "Home Court",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -1.3,
   "avgExpected": -0.6,
   "aId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf",
   "bId": "908a8539-b3a5-437a-957f-e900db3c01b9"
  },
  {
   "a": "Cassie Lou",
   "b": "Brandon Agudelo",
   "team": "PickleRage Union County Net Ninjas",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 0.5,
   "avgExpected": 1.2,
   "aId": "27f83d5a-2e86-4e5b-af70-9394a8765ac6",
   "bId": "a2c6fd48-c70a-4dc1-a1e0-4c177c4b0f58"
  },
  {
   "a": "David Schwartz",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "908a8539-b3a5-437a-957f-e900db3c01b9",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "a": "Kristin Larosa",
   "b": "Marc Matalon",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 1.8,
   "avgExpected": 2.5,
   "aId": "03162d88-f7e2-4381-9ede-fd884d73940b",
   "bId": "7891b1eb-476e-4105-b7d3-36853c9e3b28"
  },
  {
   "a": "Matthew Cohen",
   "b": "Thomas Lum",
   "team": "Picklr Newark",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.5,
   "avgExpected": -1.7,
   "aId": "d068c594-50ee-495b-8997-766c9f6c68d5",
   "bId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7"
  },
  {
   "a": "Thuy Nguyen",
   "b": "Thang Nguyen",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0,
   "avgExpected": 1,
   "aId": "8ea3584b-11a3-4d0c-ace0-bce5bd3a00f1",
   "bId": "915d5222-71a9-4dae-9899-f200fcc8110e"
  },
  {
   "a": "Michele Iannella Sr.",
   "b": "John Dechristopher",
   "team": "Pickle Juice Blackwood",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -11,
   "avgExpected": -10,
   "aId": "7aa82eab-c6ff-4d90-ae45-7fbfe063f084",
   "bId": "882e40aa-e8ec-4322-a9f9-f6f3631a43c2"
  },
  {
   "a": "Sarah Dente",
   "b": "Kevin Altieri",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 2.8,
   "avgExpected": 3.6,
   "aId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f",
   "bId": "9b8a71a7-9173-4757-8937-8364922234ef"
  },
  {
   "a": "Robert Hudson",
   "b": "Yash Mehta",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 4.7,
   "avgExpected": 5.4,
   "aId": "23c04a93-9526-468c-8fdd-a2b36fb10941",
   "bId": "adc25ed0-4bc3-47da-9509-4caeb8f90185"
  },
  {
   "a": "Gail Hannagan",
   "b": "Paul Matzko",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -1.7,
   "avgExpected": -0.7,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Alex Glushek",
   "b": "Ricardo Fontanilla",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -5.7,
   "avgExpected": -4.7,
   "aId": "65e58579-8b95-46f1-9e95-a3e53347de32",
   "bId": "7db295d5-04dd-42cb-bbed-e4ec7856e654"
  },
  {
   "a": "Rachel Searby",
   "b": "Miles Townsend",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0,
   "avgExpected": 0.8,
   "aId": "3648420d-4dae-4404-8b67-3162f343f6aa",
   "bId": "cf59ad9f-a37d-44d2-abcf-5ec17532a6aa"
  },
  {
   "a": "Alex Sanchez",
   "b": "Carlos Echenique",
   "team": "PickleRage Union County Net Ninjas",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -0.5,
   "avgExpected": 0.2,
   "aId": "5509090f-bf75-4166-a5ab-c7688cf54353",
   "bId": "74530d59-ff19-42a4-87d4-0e3b9e516c66"
  },
  {
   "a": "Juri Solano",
   "b": "Rachel Appleton",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -0.5,
   "avgExpected": 0.2,
   "aId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0",
   "bId": "db90de13-5c04-4d76-b9b8-2cd30c9900a8"
  },
  {
   "a": "Kristin Larosa",
   "b": "Danica Bramschreiber",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 3,
   "avgExpected": 3.7,
   "aId": "03162d88-f7e2-4381-9ede-fd884d73940b",
   "bId": "362cbda8-a78b-43bb-b653-1daef081ce2f"
  },
  {
   "a": "Ashley Altman",
   "b": "Sandy Duarte",
   "team": "Picklr Newark",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -0.7,
   "avgExpected": 0,
   "aId": "57cb28c4-947f-4ea0-a6eb-5e21a777552a",
   "bId": "be1f6512-56a2-4b91-b483-7677af01867a"
  },
  {
   "a": "Thomas Carretta",
   "b": "Michael Alfaro",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 6.7,
   "avgExpected": 7.6,
   "aId": "7aaf5ebf-3b96-4c58-9c7d-ae33fb1b9d7c",
   "bId": "d060c2f3-016e-4260-97fc-d0cbea4415f5"
  },
  {
   "a": "Diana Tabia",
   "b": "David Abiog",
   "team": "Pickleball HQ",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.5,
   "avgActual": -4.1,
   "avgExpected": -3.3,
   "aId": "7494f19a-141d-4c00-8d37-d5e79eca4853",
   "bId": "d2679852-b0e5-4853-abdf-3253a22fdea4"
  },
  {
   "a": "James Cooper",
   "b": "Michael Alfaro",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 2.6,
   "avgExpected": 3.5,
   "aId": "37355d05-aa6b-42d5-a4a2-874c8774bb5d",
   "bId": "d060c2f3-016e-4260-97fc-d0cbea4415f5"
  },
  {
   "a": "Howie Knudson",
   "b": "Robin Pagotto",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -3.3,
   "avgExpected": -2.3,
   "aId": "45973650-1f33-43dc-a0f1-1fce356962e0",
   "bId": "d2016fbf-e18d-4051-b3d2-18612ff2a5bf"
  },
  {
   "a": "Cory Mintz",
   "b": "Abby Viola",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": -0.3,
   "avgExpected": 0.9,
   "aId": "33feb337-f2ab-4e6d-819b-9535ec743685",
   "bId": "711bd5d7-fb81-448d-b5db-89e773115943"
  },
  {
   "a": "Terri Pflueger",
   "b": "Stephen Fredericksen",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.6,
   "aId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7",
   "bId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "a": "Liane Feyas",
   "b": "Terri Pflueger",
   "team": "Monroe",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 2.8,
   "avgExpected": 3.4,
   "aId": "2266824f-5ba8-4da3-a512-94c8e14f7c90",
   "bId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "a": "Gail Hannagan",
   "b": "Butch Kreilick",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": -0.7,
   "avgExpected": 0.5,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Jebril Guevarra",
   "b": "Juri Solano",
   "team": "PickleRage Union County Pandas",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -2.6,
   "avgExpected": -1.8,
   "aId": "08175577-0ebd-4e9d-99f8-27910ed5f02f",
   "bId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0"
  },
  {
   "a": "Rob Stever",
   "b": "Suki Wong",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -0.9,
   "avgExpected": -0.2,
   "aId": "519426b7-932a-4dd5-9865-ebaadb3d226d",
   "bId": "b92a5442-fd20-4e2f-896b-26cc5cfa5ea5"
  },
  {
   "a": "Karthik Duraiyappan",
   "b": "Froilan Sunga",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0,
   "avgExpected": 1.1,
   "aId": "6d4e3d3a-9162-4ee5-a04f-f82a10552bd5",
   "bId": "af6465d2-7a02-4dc5-a6b4-62cee62fe93a"
  },
  {
   "a": "Freddy Li",
   "b": "Kerry Eskay",
   "team": "PickleRage Union County Net Ninjas",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.3,
   "aId": "455cc819-6519-4c36-9dd7-2dbb33845102",
   "bId": "8dc8f169-bf38-463a-b8a0-6c238e275325"
  },
  {
   "a": "Nikki Nigro",
   "b": "Suki Wong",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.1,
   "aId": "01c2e4d1-3738-4ee6-8878-4a2559ec006a",
   "bId": "b92a5442-fd20-4e2f-896b-26cc5cfa5ea5"
  },
  {
   "a": "Hee Kim",
   "b": "Jonathan Nieves",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -0.5,
   "aId": "03fa8bb2-957d-45f2-9e41-628a2c5ac9e0",
   "bId": "bf68b168-b0fb-4c26-bcd0-a9c888363778"
  },
  {
   "a": "Halimah Maideen",
   "b": "Robin Pagotto",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.3,
   "avgExpected": 2.4,
   "aId": "5ad51afd-7edc-43c3-b279-8c57c54cc38c",
   "bId": "d2016fbf-e18d-4051-b3d2-18612ff2a5bf"
  },
  {
   "a": "Jeff Stephenson",
   "b": "Viviane Tran",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -4.7,
   "avgExpected": -3.4,
   "aId": "002d90d8-3c20-4fe1-adcd-154e02a75a8b",
   "bId": "323329ee-8ba1-4c23-a5f5-1592464e8e0b"
  },
  {
   "a": "Marc Matalon",
   "b": "Marvin Lao",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -3.3,
   "avgExpected": -2.1,
   "aId": "7891b1eb-476e-4105-b7d3-36853c9e3b28",
   "bId": "838de378-832d-4d6e-8e6a-44e1edb42719"
  },
  {
   "a": "Simon Burns",
   "b": "Ashley Altman",
   "team": "Picklr Newark",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3,
   "avgExpected": -1.9,
   "aId": "3a1cc58f-1661-41c2-b2cb-4e39a1b60bac",
   "bId": "57cb28c4-947f-4ea0-a6eb-5e21a777552a"
  },
  {
   "a": "Kristin Larosa",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.8,
   "avgExpected": 2.8,
   "aId": "03162d88-f7e2-4381-9ede-fd884d73940b",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "a": "Alex Glushek",
   "b": "Mayra Tuba",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -0.5,
   "avgExpected": 0.4,
   "aId": "65e58579-8b95-46f1-9e95-a3e53347de32",
   "bId": "72a2a3e0-df8e-4e68-a685-c6e493bb44f2"
  },
  {
   "a": "Alex Glushek",
   "b": "David Burke",
   "team": "Jersey Pickleball Club",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.6,
   "avgActual": -2.3,
   "avgExpected": -1.4,
   "aId": "65e58579-8b95-46f1-9e95-a3e53347de32",
   "bId": "69b99d4e-f80c-480a-a008-33ff326a3c93"
  },
  {
   "a": "Charishma Serrano",
   "b": "Paul Michael Serrano",
   "team": "Open Play",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.6,
   "avgActual": -3.5,
   "avgExpected": -2.7,
   "aId": "5fdbcd51-c12c-49f7-84f6-31f8b00ea8b1",
   "bId": "b0097209-2d93-4856-8887-b040299f9dbd"
  },
  {
   "a": "Charishma Serrano",
   "b": "Katie Li",
   "team": "Open Play",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -4.3,
   "avgExpected": -3,
   "aId": "5fdbcd51-c12c-49f7-84f6-31f8b00ea8b1",
   "bId": "b9087267-ae35-4c4d-baf5-90a51346fb9b"
  },
  {
   "a": "Megan Quigley",
   "b": "Timothy Lowry",
   "team": "Bounce Tempest",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 1.9,
   "avgExpected": 2.7,
   "aId": "37d69abc-9610-4c03-a618-f905bd0e2fb1",
   "bId": "5165ace6-688d-451a-9f96-8e5500cbf46d"
  },
  {
   "a": "Quynh Nguyen",
   "b": "Jason Nguyen",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 1.8,
   "avgExpected": 2.8,
   "aId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
   "bId": "91ee10a7-dbc3-4beb-81cd-3b154b2af0ac"
  },
  {
   "a": "Matthew Cohen",
   "b": "Bill Dower",
   "team": "Picklr Newark",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 0.5,
   "avgExpected": 1.6,
   "aId": "d068c594-50ee-495b-8997-766c9f6c68d5",
   "bId": "f920b62c-0fa3-417a-ac3e-b7bb6f555fc4"
  },
  {
   "a": "Ashley Altman",
   "b": "Isha Rahalkar",
   "team": "Picklr Newark",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.5,
   "aId": "57cb28c4-947f-4ea0-a6eb-5e21a777552a",
   "bId": "9e3df962-0702-4e31-b6bb-6ade42de72f4"
  },
  {
   "a": "Matt Soliman",
   "b": "Grady Craig",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.2,
   "aId": "a955b9bb-4b46-4bb5-af0e-2f8c89009b22",
   "bId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "a": "Chris Balta",
   "b": "Kevin Altieri",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 4.2,
   "avgExpected": 5.2,
   "aId": "2be2d2b6-177e-4378-a33d-49005788a7fd",
   "bId": "9b8a71a7-9173-4757-8937-8364922234ef"
  },
  {
   "a": "Jeff Kesner",
   "b": "Lakshmikanth Chaluvadi",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -0.2,
   "avgExpected": 0.9,
   "aId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01",
   "bId": "377302a4-12da-4449-bbfc-a28248436679"
  },
  {
   "a": "Hailee Kurlander",
   "b": "Robert Hudson",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -0.6,
   "avgActual": -4.6,
   "avgExpected": -3.7,
   "aId": "04504eed-6831-4a3d-9854-8a6ba147e1a8",
   "bId": "23c04a93-9526-468c-8fdd-a2b36fb10941"
  },
  {
   "a": "Anne Buckley",
   "b": "Maxwell Winters",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -0.5,
   "avgExpected": 0.7,
   "aId": "07881006-c083-4729-8424-410aeee08940",
   "bId": "d5037744-373a-485e-9fd3-5564495b8c2d"
  },
  {
   "a": "Froilan Sunga",
   "b": "Miles Townsend",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -1.2,
   "avgExpected": 0,
   "aId": "af6465d2-7a02-4dc5-a6b4-62cee62fe93a",
   "bId": "cf59ad9f-a37d-44d2-abcf-5ec17532a6aa"
  },
  {
   "a": "Carlos Echenique",
   "b": "Kerry Eskay",
   "team": "PickleRage Union County Net Ninjas",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 5.2,
   "avgExpected": 6.3,
   "aId": "74530d59-ff19-42a4-87d4-0e3b9e516c66",
   "bId": "8dc8f169-bf38-463a-b8a0-6c238e275325"
  },
  {
   "a": "David Schwartz",
   "b": "Robert Paniti",
   "team": "Home Court",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -1.5,
   "avgExpected": -0.5,
   "aId": "908a8539-b3a5-437a-957f-e900db3c01b9",
   "bId": "d17ff3de-7455-4efb-b1be-4c61b5acbdf2"
  },
  {
   "a": "Brian Perlowitz",
   "b": "Marc Matalon",
   "team": "Home Court",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -2.8,
   "avgExpected": -1.6,
   "aId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1",
   "bId": "7891b1eb-476e-4105-b7d3-36853c9e3b28"
  },
  {
   "a": "Michele Iannella",
   "b": "Lisa Murphy",
   "team": "Pickle Juice Blackwood",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -6.7,
   "avgExpected": -5.1,
   "aId": "2ce4041d-b45e-4c9f-87ec-c6ec04dec0e8",
   "bId": "3a873bd3-eb02-4d94-9be4-bb19938b9087"
  },
  {
   "a": "Howie Knudson",
   "b": "Marcus Burritt",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 1,
   "avgExpected": 2.1,
   "aId": "45973650-1f33-43dc-a0f1-1fce356962e0",
   "bId": "9605152c-b88b-40bd-b870-e2ea577e376a"
  },
  {
   "a": "Nikki Nigro",
   "b": "Hee Kim",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.4,
   "avgExpected": 1.6,
   "aId": "01c2e4d1-3738-4ee6-8878-4a2559ec006a",
   "bId": "03fa8bb2-957d-45f2-9e41-628a2c5ac9e0"
  },
  {
   "a": "Morgan Valencia King",
   "b": "Gabe Nacion",
   "team": "Pickle House",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -3.3,
   "avgExpected": -2.2,
   "aId": "ac049c23-359d-4508-8bc1-274a7276239c",
   "bId": "b18fc532-a96e-400d-a321-73d52554df87"
  },
  {
   "a": "Giomarco Urbina",
   "b": "Todd Woodard",
   "team": "Open Play",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -8,
   "avgExpected": -6.6,
   "aId": "1d3261f0-c0b4-4f19-93d9-69820d8a9911",
   "bId": "f7632286-b2a6-4f7d-aef2-bc85e4b308b0"
  },
  {
   "a": "Diana Tabia",
   "b": "Julianna Rodrigues",
   "team": "Pickleball HQ",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -0.1,
   "avgExpected": 1,
   "aId": "7494f19a-141d-4c00-8d37-d5e79eca4853",
   "bId": "77c32d66-d466-4308-9c45-1639e1925b70"
  },
  {
   "a": "Jen Ogorzat",
   "b": "Rakesh Roy",
   "team": "Pickle House",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.2,
   "aId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Amanda Nguyen",
   "b": "Marvin Steller",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -2.7,
   "avgExpected": -1.2,
   "aId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e",
   "bId": "a11d0ccc-a000-4582-bf88-f27df93e00d2"
  },
  {
   "a": "Thuy Nguyen",
   "b": "Thomas Nguyen",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -4.2,
   "avgExpected": -2.7,
   "aId": "8ea3584b-11a3-4d0c-ace0-bce5bd3a00f1",
   "bId": "9c6d4e1a-71eb-4c19-af5b-7efc2758939a"
  },
  {
   "a": "Susan Li",
   "b": "Michael Guldin",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -0.8,
   "avgActual": -4.9,
   "avgExpected": -3.6,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "a147036c-405c-4d49-be3b-00a1270f848f"
  },
  {
   "a": "Wendy Braithwaite",
   "b": "Rachel Searby",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 1,
   "aId": "0214a334-0b6c-4a34-9f61-c4aadd8ad06e",
   "bId": "3648420d-4dae-4404-8b67-3162f343f6aa"
  },
  {
   "a": "Eva Rodriguez",
   "b": "Kerry Eskay",
   "team": "PickleRage Union County Net Ninjas",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 2.8,
   "avgExpected": 4,
   "aId": "899c49f1-1839-4eb3-b87e-26a2dba51764",
   "bId": "8dc8f169-bf38-463a-b8a0-6c238e275325"
  },
  {
   "a": "Marvin Lao",
   "b": "David Schwartz",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -3.3,
   "avgExpected": -1.5,
   "aId": "838de378-832d-4d6e-8e6a-44e1edb42719",
   "bId": "908a8539-b3a5-437a-957f-e900db3c01b9"
  },
  {
   "a": "Ryan Ablaza",
   "b": "Katelyn Carretas",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -4,
   "avgExpected": -2.4,
   "aId": "15b54109-a001-4ad0-acde-bbb49a5909b5",
   "bId": "9564f996-6460-4bbd-b589-270545a1d4ef"
  },
  {
   "a": "Esterlina Wiest",
   "b": "Maridel Ablaza",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -0.7,
   "avgExpected": 0.9,
   "aId": "b43f9cca-12f6-4af2-bcb7-1b9debd7514a",
   "bId": "c868d44f-a501-4c1a-8d17-fd6e4a338308"
  },
  {
   "a": "Juri Solano",
   "b": "Marvin Steller",
   "team": "PickleRage Union County Pandas",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -0.7,
   "avgExpected": 0.6,
   "aId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0",
   "bId": "a11d0ccc-a000-4582-bf88-f27df93e00d2"
  },
  {
   "a": "Sultane Cosaj",
   "b": "Matthew Marciani",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -6.7,
   "avgExpected": -4.9,
   "aId": "c80624a6-0c31-4792-bc8d-c9f1d2153dca",
   "bId": "ec0da4c0-f52a-4ab9-a579-6ca3d815f19c"
  },
  {
   "a": "Elpidio Arias",
   "b": "Steven Fernandez",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -3.2,
   "avgExpected": -1.8,
   "aId": "76dcad38-def0-4d35-a58c-8490c6eb642e",
   "bId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "a": "John Waggoner",
   "b": "Melissa Mackey",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -4,
   "avgExpected": -2.1,
   "aId": "46d96287-f2e2-4de7-8593-fcde564b9273",
   "bId": "eb92331b-662d-4f91-bf8a-aa8b93c0c02b"
  },
  {
   "a": "Michael Guldin",
   "b": "Steven Fernandez",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -4.3,
   "avgExpected": -2.5,
   "aId": "a147036c-405c-4d49-be3b-00a1270f848f",
   "bId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "a": "Julianna Rodrigues",
   "b": "David Abiog",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 0.7,
   "avgExpected": 2.9,
   "aId": "77c32d66-d466-4308-9c45-1639e1925b70",
   "bId": "d2679852-b0e5-4853-abdf-3253a22fdea4"
  },
  {
   "a": "Jade Chin",
   "b": "Mayra Tuba",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -8,
   "avgExpected": -6,
   "aId": "4fcda82e-e24a-45d7-9784-c230d47a113b",
   "bId": "72a2a3e0-df8e-4e68-a685-c6e493bb44f2"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "Gabe Nacion",
   "team": "Pickle House",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -2,
   "avgExpected": -0.5,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "b18fc532-a96e-400d-a321-73d52554df87"
  },
  {
   "a": "Michael Van Horn",
   "b": "Lawrence Dipietro",
   "team": "Pickle Juice Blackwood",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": -0.9,
   "avgActual": -0.6,
   "avgExpected": 0.6,
   "aId": "0782db8d-bb52-4a47-88b5-00e8db2358c4",
   "bId": "c521a44b-2c1e-43f3-bd58-eccadd1d0433"
  },
  {
   "a": "Brian Seligson",
   "b": "Alexis Kerven",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2.5,
   "avgExpected": -0.8,
   "aId": "66cca19b-c691-4ee2-addb-f8344943103e",
   "bId": "a2b836f4-8bfa-4baf-b01a-e342f5947c04"
  },
  {
   "a": "Amanda Nguyen",
   "b": "Juri Solano",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": -3,
   "avgExpected": -0.8,
   "aId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e",
   "bId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0"
  },
  {
   "a": "Jessica Kopec",
   "b": "Rachel Appleton",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -5,
   "avgExpected": -3,
   "aId": "3b6e4a3b-d867-475c-9418-ea6f854b8dd8",
   "bId": "db90de13-5c04-4d76-b9b8-2cd30c9900a8"
  },
  {
   "a": "Sarah Silva",
   "b": "Patricia Tuquero",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -8.2,
   "avgExpected": -6.5,
   "aId": "341e5936-88d4-4231-8cc3-1285a0c2f3e1",
   "bId": "5f5166e1-3615-47ee-b4d6-d03093f180a4"
  },
  {
   "a": "Megan Quigley",
   "b": "Thomas Nguyen",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 0.3,
   "avgExpected": 2.5,
   "aId": "37d69abc-9610-4c03-a618-f905bd0e2fb1",
   "bId": "9c6d4e1a-71eb-4c19-af5b-7efc2758939a"
  },
  {
   "a": "Peter Lien",
   "b": "Jason Nguyen",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -1.7,
   "avgExpected": 0.1,
   "aId": "86851415-5e99-413d-b521-cd3b3edc1137",
   "bId": "91ee10a7-dbc3-4beb-81cd-3b154b2af0ac"
  },
  {
   "a": "Kristin Granath",
   "b": "Adele Hackney",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.9,
   "avgActual": -0.7,
   "avgExpected": 1,
   "aId": "560573da-979a-4ae6-ae00-90d223db2816",
   "bId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "a": "Jason Paderon",
   "b": "Abby Viola",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 0.3,
   "avgExpected": 2.4,
   "aId": "6a1fa95d-2df5-4870-a4b6-51775620f7cf",
   "bId": "711bd5d7-fb81-448d-b5db-89e773115943"
  },
  {
   "a": "Alan Weissman",
   "b": "Joan Harris",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -2.3,
   "avgExpected": -0.9,
   "aId": "12febf17-8650-40dd-92ca-a0bda06caf0f",
   "bId": "b0132c9e-2a21-45c8-b04d-b84aec626e68"
  },
  {
   "a": "Allison Sobieski",
   "b": "Michael Alfaro",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 2.8,
   "avgExpected": 4.7,
   "aId": "7a2cb26b-6e52-4dbd-bab4-83536f4500bb",
   "bId": "d060c2f3-016e-4260-97fc-d0cbea4415f5"
  },
  {
   "a": "Sarah Silva",
   "b": "Kenneth Bautista",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -5,
   "avgExpected": -2.9,
   "aId": "341e5936-88d4-4231-8cc3-1285a0c2f3e1",
   "bId": "c383dca8-551f-4776-90d7-7f57248d1680"
  },
  {
   "a": "Udita Agarwala",
   "b": "Nancy Pace",
   "team": "Open Play",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -7,
   "avgExpected": -4.9,
   "aId": "2351aaff-bff5-4734-9b22-20ce6988c40d",
   "bId": "b051e0af-ace0-4fa2-a58d-e4898c03fa95"
  },
  {
   "a": "Gerry Bissinger",
   "b": "Joseph Mckenna",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -3,
   "avgExpected": -0.8,
   "aId": "44999222-7eed-49f7-982b-10ad7155256a",
   "bId": "551c6f9d-b1e1-4b5b-a8cb-bea20a14d9ff"
  },
  {
   "a": "Suzane Sullivan",
   "b": "Adam Werwie",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -1,
   "avgActual": 4.4,
   "avgExpected": 6.2,
   "aId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6",
   "bId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "a": "Eric Brezina",
   "b": "Paul Matzko",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": -1.5,
   "avgExpected": 0.6,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "Butch Kreilick",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -2,
   "avgExpected": 0.4,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Brandi Horowitz",
   "b": "Michele Costigan",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 1.3,
   "avgExpected": 3.6,
   "aId": "bc3fda4d-3cf9-4daf-a2f1-6010ce63195e",
   "bId": "fda078f4-e367-425d-9f16-501fdb5088e8"
  },
  {
   "a": "Line Barlow",
   "b": "Jenny Winters",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -1,
   "avgExpected": 1.2,
   "aId": "20f0fb60-8e60-448c-b971-40fb6e7fca23",
   "bId": "ea0e9b2c-cdde-48d1-8585-fd47053329b6"
  },
  {
   "a": "Brian Seligson",
   "b": "Andrew Kimmel",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": -0.2,
   "avgExpected": 1.8,
   "aId": "66cca19b-c691-4ee2-addb-f8344943103e",
   "bId": "cbd9ae00-0624-49d3-b733-55a2765aff37"
  },
  {
   "a": "Udita Agarwala",
   "b": "Jeff Pzena",
   "team": "Open Play",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -8.7,
   "avgExpected": -6.4,
   "aId": "2351aaff-bff5-4734-9b22-20ce6988c40d",
   "bId": "51439438-8246-4751-b526-a10c54fb0b73"
  },
  {
   "a": "Susan Li",
   "b": "Adele Hackney",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -3.7,
   "avgExpected": -1.4,
   "aId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363",
   "bId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "a": "Alyssa Beattie",
   "b": "Rosellen Perlowitz",
   "team": "Home Court",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -1,
   "avgActual": -0.1,
   "avgExpected": 1.3,
   "aId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf",
   "bId": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf"
  },
  {
   "a": "Annica Jin-Hendel",
   "b": "Jose Chariez",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -5.7,
   "avgExpected": -3.4,
   "aId": "3eccc234-1e37-493c-b4d6-626f1b482fec",
   "bId": "4dc234ca-c486-4a9f-adb5-0ab8e257379d"
  },
  {
   "a": "James Cooper",
   "b": "Vanessa Tortorice",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 2.7,
   "avgExpected": 4.4,
   "aId": "37355d05-aa6b-42d5-a4a2-874c8774bb5d",
   "bId": "818811e5-0eb6-4611-8ac3-f65c10316305"
  },
  {
   "a": "David Burke",
   "b": "Michelle Cobos",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -8,
   "avgExpected": -5.7,
   "aId": "69b99d4e-f80c-480a-a008-33ff326a3c93",
   "bId": "94e54237-56df-41b2-8b89-675a69762740"
  },
  {
   "a": "Eric Brezina",
   "b": "Butch Kreilick",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -1.7,
   "avgExpected": 1,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Ed Amato",
   "b": "John Danks",
   "team": "PickleRage Union County Pandas",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.1,
   "avgActual": 1.7,
   "avgExpected": 3.5,
   "aId": "ce893b2d-f5ea-40aa-98c0-d67402405b64",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Marvin Steller",
   "b": "Thao Tran",
   "team": "PickleRage Union County Pandas",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -1.8,
   "avgExpected": 0.2,
   "aId": "a11d0ccc-a000-4582-bf88-f27df93e00d2",
   "bId": "a7416218-74a3-40c5-9327-97840c949fc4"
  },
  {
   "a": "Helen Goh",
   "b": "Claire Nguyen",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -4.4,
   "avgExpected": -2.3,
   "aId": "45230dff-64e7-49b9-b211-595fad5c3e40",
   "bId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3"
  },
  {
   "a": "Elizabeth Dailey",
   "b": "Andrew Frey",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -7,
   "avgExpected": -4.5,
   "aId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b",
   "bId": "beb70730-42da-4979-93b9-bd5c88a52d75"
  },
  {
   "a": "Gabe Nacion",
   "b": "Rakesh Roy",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -4,
   "avgExpected": -1.4,
   "aId": "b18fc532-a96e-400d-a321-73d52554df87",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Jebril Guevarra",
   "b": "Kenneth Bautista",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -3,
   "avgExpected": -0.5,
   "aId": "08175577-0ebd-4e9d-99f8-27910ed5f02f",
   "bId": "c383dca8-551f-4776-90d7-7f57248d1680"
  },
  {
   "a": "Jose Chariez",
   "b": "Jenny Winters",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -6.3,
   "avgExpected": -3.7,
   "aId": "4dc234ca-c486-4a9f-adb5-0ab8e257379d",
   "bId": "ea0e9b2c-cdde-48d1-8585-fd47053329b6"
  },
  {
   "a": "Ryan Ablaza",
   "b": "Ismael Hernandez",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -3.7,
   "avgExpected": -1.5,
   "aId": "15b54109-a001-4ad0-acde-bbb49a5909b5",
   "bId": "262cf0be-4906-46fb-ab84-f4aa760bac58"
  },
  {
   "a": "Thomas Lum",
   "b": "Bill Dower",
   "team": "Picklr Newark",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -0.2,
   "avgExpected": 1.7,
   "aId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7",
   "bId": "f920b62c-0fa3-417a-ac3e-b7bb6f555fc4"
  },
  {
   "a": "Alyssa Beattie",
   "b": "Danica Bramschreiber",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -1,
   "avgExpected": 1.1,
   "aId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf",
   "bId": "362cbda8-a78b-43bb-b653-1daef081ce2f"
  },
  {
   "a": "Salini Sontyana",
   "b": "Miles Townsend",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 1,
   "avgExpected": 3.2,
   "aId": "591f053c-743f-44e3-83da-6ad000b7e992",
   "bId": "cf59ad9f-a37d-44d2-abcf-5ec17532a6aa"
  },
  {
   "a": "Taylor Runyen",
   "b": "Michele Costigan",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 1.3,
   "avgExpected": 4.1,
   "aId": "cda5a763-48f3-4303-8579-42ff05230f45",
   "bId": "fda078f4-e367-425d-9f16-501fdb5088e8"
  },
  {
   "a": "Michele Iannella",
   "b": "Karen Marshall",
   "team": "Pickle Juice Blackwood",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -1.2,
   "avgActual": -2.1,
   "avgExpected": -0.4,
   "aId": "2ce4041d-b45e-4c9f-87ec-c6ec04dec0e8",
   "bId": "53a84b91-acc8-4a27-a7e5-2081e1afcc98"
  },
  {
   "a": "John Waggoner",
   "b": "Ryan Benetz",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -0.7,
   "avgExpected": 2.2,
   "aId": "46d96287-f2e2-4de7-8593-fcde564b9273",
   "bId": "841719cb-612f-4fea-bb1b-ef09935bb8ba"
  },
  {
   "a": "Patricia Tuquero",
   "b": "Rachel Appleton",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -10,
   "avgExpected": -7.5,
   "aId": "5f5166e1-3615-47ee-b4d6-d03093f180a4",
   "bId": "db90de13-5c04-4d76-b9b8-2cd30c9900a8"
  },
  {
   "a": "Robert Courchain",
   "b": "Kim Kronberger",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -2.3,
   "avgExpected": 0.5,
   "aId": "371bb742-9ea6-464a-8c27-df8469b90a62",
   "bId": "54f3fa64-a224-4f3d-86a4-4353ea31f5a8"
  },
  {
   "a": "Charlene De Lara",
   "b": "Jonathan Nieves",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -0.3,
   "avgExpected": 2.4,
   "aId": "16f9fddd-e9cd-4e65-9090-2764c44fc74a",
   "bId": "bf68b168-b0fb-4c26-bcd0-a9c888363778"
  },
  {
   "a": "Charlene De Lara",
   "b": "Ryan Peixoto",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 6,
   "avgExpected": 8.3,
   "aId": "16f9fddd-e9cd-4e65-9090-2764c44fc74a",
   "bId": "95fdba0f-fc53-412d-b050-19808558761f"
  },
  {
   "a": "Huifang Yao",
   "b": "Jayson Lee",
   "team": "PickleRage Union County Net Ninjas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 1.5,
   "avgExpected": 4,
   "aId": "0678b5e4-cf92-49cb-8689-2d90cc356950",
   "bId": "145a759d-3547-4ba8-a466-85f7c857a392"
  },
  {
   "a": "Simon Burns",
   "b": "Tiffany Weinert",
   "team": "Picklr Newark",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -11.7,
   "avgExpected": -8.5,
   "aId": "3a1cc58f-1661-41c2-b2cb-4e39a1b60bac",
   "bId": "f8f61519-1394-4768-b963-f811c2b407a0"
  },
  {
   "a": "Victor Salicetti",
   "b": "Marcus Burritt",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.4,
   "avgActual": 2.3,
   "avgExpected": 5.1,
   "aId": "08cb8582-4347-4694-9f58-7e479aa3b7a5",
   "bId": "9605152c-b88b-40bd-b870-e2ea577e376a"
  },
  {
   "a": "Lukas Chrebet",
   "b": "Jade Chin",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -9,
   "avgExpected": -6.4,
   "aId": "42795346-b8aa-4e5d-80a5-8a1768c094e8",
   "bId": "4fcda82e-e24a-45d7-9784-c230d47a113b"
  },
  {
   "a": "Lili Zhang",
   "b": "Lily Hahn",
   "team": "Open Play",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -9.7,
   "avgExpected": -6.9,
   "aId": "219b369d-c5eb-4ef8-bcea-559f56d94ff0",
   "bId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833"
  },
  {
   "a": "Rachael Osetkowski",
   "b": "David Burke",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -4,
   "avgExpected": -1.4,
   "aId": "2f50700d-74d4-426f-85c9-b894f72096f0",
   "bId": "69b99d4e-f80c-480a-a008-33ff326a3c93"
  },
  {
   "a": "Jane Pascua",
   "b": "Taylor Newell",
   "team": "ACE Downingtown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -1.2,
   "avgExpected": 1.5,
   "aId": "5c79bec7-67d9-4d8b-beef-a6f423475522",
   "bId": "ff4f3e35-1472-444c-b4d0-aa381bbd12d1"
  },
  {
   "a": "Keith Fallon",
   "b": "Kelly Aylward",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -2.7,
   "avgExpected": 0.2,
   "aId": "49a11c9c-4eed-430b-8c58-053c30246d45",
   "bId": "6068d706-4a9a-4475-8d31-d5a900172f27"
  },
  {
   "a": "Jessica Kopec",
   "b": "Ed Amato",
   "team": "PickleRage Union County Pandas",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -5,
   "avgExpected": -2.3,
   "aId": "3b6e4a3b-d867-475c-9418-ea6f854b8dd8",
   "bId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "a": "Jennifer Guldin",
   "b": "Michael Guldin",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -8,
   "avgExpected": -5,
   "aId": "584e770c-86b1-4561-ba01-4ef1aad6ff9b",
   "bId": "a147036c-405c-4d49-be3b-00a1270f848f"
  },
  {
   "a": "Danica Bramschreiber",
   "b": "Rosellen Perlowitz",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.5,
   "avgActual": 0.5,
   "avgExpected": 3.5,
   "aId": "362cbda8-a78b-43bb-b653-1daef081ce2f",
   "bId": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf"
  },
  {
   "a": "Isha Rahalkar",
   "b": "Lauren Gabat",
   "team": "Picklr Newark",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -4.2,
   "avgExpected": -1.2,
   "aId": "9e3df962-0702-4e31-b6bb-6ade42de72f4",
   "bId": "ef0b7b1a-41ac-4ccd-b502-a68ad5549a3b"
  },
  {
   "a": "Kordell Alexander",
   "b": "Trisha Marion",
   "team": "Pickle Juice Blackwood",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -9.2,
   "avgExpected": -6.1,
   "aId": "133e6ef0-6318-407f-8110-d088f7e00fdc",
   "bId": "5956c13a-1fe1-45b2-bd4f-d0200d4adda5"
  },
  {
   "a": "Rob Stever",
   "b": "Ryan Peixoto",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -1.6,
   "avgActual": 0.4,
   "avgExpected": 3.3,
   "aId": "519426b7-932a-4dd5-9865-ebaadb3d226d",
   "bId": "95fdba0f-fc53-412d-b050-19808558761f"
  },
  {
   "a": "Ryan Peixoto",
   "b": "Matthew Marciani",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -2.3,
   "avgExpected": 1.3,
   "aId": "95fdba0f-fc53-412d-b050-19808558761f",
   "bId": "ec0da4c0-f52a-4ab9-a579-6ca3d815f19c"
  },
  {
   "a": "Megan Quigley",
   "b": "Jason Nguyen",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.6,
   "avgActual": 1,
   "avgExpected": 4.8,
   "aId": "37d69abc-9610-4c03-a618-f905bd0e2fb1",
   "bId": "91ee10a7-dbc3-4beb-81cd-3b154b2af0ac"
  },
  {
   "a": "Reuben Zilber",
   "b": "Sultane Cosaj",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -5,
   "avgExpected": -1.7,
   "aId": "af3befcf-981a-433d-a065-c107cdfa42c4",
   "bId": "c80624a6-0c31-4792-bc8d-c9f1d2153dca"
  },
  {
   "a": "Meghan Klein",
   "b": "Gail Hannagan",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.7,
   "avgActual": 5.7,
   "avgExpected": 9.7,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "a": "Michelle Cobos",
   "b": "Brandon Helicher",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -9.3,
   "avgExpected": -5.4,
   "aId": "94e54237-56df-41b2-8b89-675a69762740",
   "bId": "d3120166-5a46-4711-9975-819941f623c8"
  },
  {
   "a": "Morgan Valencia King",
   "b": "Jen Ogorzat",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -8.7,
   "avgExpected": -4.8,
   "aId": "ac049c23-359d-4508-8bc1-274a7276239c",
   "bId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "a": "Elisabeth Marshall",
   "b": "Sophie O’Driscoll",
   "team": "Players Courtyard",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.7,
   "avgActual": -2.2,
   "avgExpected": 0.9,
   "aId": "2036b1b8-bfb1-49e9-8a36-3e2d91bc336a",
   "bId": "40f98b81-c10a-4e0b-9154-3a8ffa3d784c"
  },
  {
   "a": "Matthew Rafaniello",
   "b": "Jasmine Ho",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.8,
   "avgActual": -3,
   "avgExpected": 0.6,
   "aId": "021fbd88-6b98-47eb-aa92-96ed959d8a4b",
   "bId": "681fe702-3295-4dba-98a2-15e8aedc2873"
  },
  {
   "a": "Jasmine Nguyen",
   "b": "Raymond Duong",
   "team": "ACE Downingtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -2.3,
   "avgExpected": 2.1,
   "aId": "8621d525-134a-4647-a7bd-98c3a357cdc3",
   "bId": "9b7fad1a-a312-4d60-94e8-a1e138bb38fb"
  },
  {
   "a": "Tuan Nguyen",
   "b": "Thang Nguyen",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -5.3,
   "avgExpected": -0.8,
   "aId": "7bafdd3b-e5cd-4d7a-9098-515a2b560851",
   "bId": "915d5222-71a9-4dae-9899-f200fcc8110e"
  },
  {
   "a": "Devin Kenny",
   "b": "Nathan Trimmer",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.9,
   "avgActual": -5.5,
   "avgExpected": -2.4,
   "aId": "6a04fe9c-1b2d-4504-b705-db9bd71e94bf",
   "bId": "9541ec05-a25a-4577-b59c-bdf04006b1b6"
  },
  {
   "a": "Christopher Sachs",
   "b": "Reuben Zilber",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2,
   "avgActual": -9,
   "avgExpected": -4.3,
   "aId": "52e5dfee-42f1-4c8f-b3ee-ca7c6e49a7fb",
   "bId": "af3befcf-981a-433d-a065-c107cdfa42c4"
  },
  {
   "a": "Charlene De Lara",
   "b": "Rob Stever",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -3,
   "avgExpected": 0.6,
   "aId": "16f9fddd-e9cd-4e65-9090-2764c44fc74a",
   "bId": "519426b7-932a-4dd5-9865-ebaadb3d226d"
  },
  {
   "a": "Craig Batzar",
   "b": "Inho Andrew Yuh",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -4.3,
   "avgExpected": 0.5,
   "aId": "44890b21-f104-4e68-a0a1-607034c2dde6",
   "bId": "d642aa89-5ebe-4bcb-a5e7-fdcc3a9b916e"
  },
  {
   "a": "Zyanya Flores",
   "b": "Allison Sobieski",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -2.1,
   "avgActual": 1,
   "avgExpected": 5.9,
   "aId": "148bddd6-0d6a-468a-903d-84ba2da82239",
   "bId": "7a2cb26b-6e52-4dbd-bab4-83536f4500bb"
  },
  {
   "a": "Paul Michael Serrano",
   "b": "Joseph Korom",
   "team": "Open Play",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2.1,
   "avgActual": -3,
   "avgExpected": 0.7,
   "aId": "b0097209-2d93-4856-8887-b040299f9dbd",
   "bId": "f014daaa-0b2e-4e20-b820-79741affdbcd"
  },
  {
   "a": "Alex Lopez",
   "b": "Michele Sagurton",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -9,
   "avgExpected": -4.7,
   "aId": "93fde1cd-1880-495a-bde8-06dde4e159bf",
   "bId": "caa5146b-9cc5-4a02-adf0-c70e822854fc"
  },
  {
   "a": "Srinath Katari",
   "b": "Suki Wong",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.2,
   "avgActual": -4.7,
   "avgExpected": 0.5,
   "aId": "abd6070d-3dd7-4313-b27e-2f2c702d0dd5",
   "bId": "b92a5442-fd20-4e2f-896b-26cc5cfa5ea5"
  },
  {
   "a": "Brian Perlowitz",
   "b": "David Cartwright",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.5,
   "avgActual": -8,
   "avgExpected": -3.1,
   "aId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1",
   "bId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Pickleball HQ",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-08-24T19:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 674,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jillian Sorrentino",
      "Jonathan Wong"
     ],
     "a": [
      "Kimberley Levins",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jaymie Vincelli",
      "Matthew Rafaniello"
     ],
     "a": [
      "Sarah Dente",
      "Chris Balta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Julianna Rodrigues",
      "Aseem Sharma"
     ],
     "a": [
      "Zyanya Flores",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Diana Tabia",
      "David Abiog"
     ],
     "a": [
      "Alina Allakhveranova",
      "Chris Alworth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julianna Rodrigues",
      "Diana Tabia"
     ],
     "a": [
      "Kimberley Levins",
      "Sarah Dente"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Taylor Leuck",
      "Jillian Sorrentino"
     ],
     "a": [
      "Alina Allakhveranova",
      "Zyanya Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Abiog",
      "Darren Zheng"
     ],
     "a": [
      "Chris Alworth",
      "Chris Balta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Matthew Rafaniello",
      "Aseem Sharma"
     ],
     "a": [
      "Lionell Matthews",
      "James Cooper"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jaymie Vincelli",
      "Jonathan Wong"
     ],
     "a": [
      "Zyanya Flores",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Diana Tabia",
      "Aseem Sharma"
     ],
     "a": [
      "Alina Allakhveranova",
      "Chris Balta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jillian Sorrentino",
      "Matthew Rafaniello"
     ],
     "a": [
      "Sarah Dente",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Julianna Rodrigues",
      "David Abiog"
     ],
     "a": [
      "Kimberley Levins",
      "James Cooper"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jillian Sorrentino",
      "Taylor Leuck"
     ],
     "a": [
      "Alina Allakhveranova",
      "Sarah Dente"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julianna Rodrigues",
      "Jaymie Vincelli"
     ],
     "a": [
      "Kimberley Levins",
      "Zyanya Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "David Abiog",
      "Aseem Sharma"
     ],
     "a": [
      "Michael Alfaro",
      "James Cooper"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Matthew Rafaniello",
      "Darren Zheng"
     ],
     "a": [
      "Chris Alworth",
      "Thomas Carretta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jillian Sorrentino",
      "Matthew Rafaniello"
     ],
     "a": [
      "Kimberley Levins",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Leuck",
      "Jonathan Wong"
     ],
     "a": [
      "Sarah Dente",
      "Chris Balta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jaymie Vincelli",
      "Darren Zheng"
     ],
     "a": [
      "Zyanya Flores",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Julianna Rodrigues",
      "Aseem Sharma"
     ],
     "a": [
      "Alina Allakhveranova",
      "Chris Alworth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Julianna Rodrigues",
      "Diana Tabia"
     ],
     "a": [
      "Alina Allakhveranova",
      "Zyanya Flores"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jaymie Vincelli",
      "Taylor Leuck"
     ],
     "a": [
      "Kimberley Levins",
      "Sarah Dente"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Aseem Sharma",
      "Jonathan Wong"
     ],
     "a": [
      "Michael Alfaro",
      "James Cooper"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Abiog",
      "Darren Zheng"
     ],
     "a": [
      "Thomas Carretta",
      "Chris Alworth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Diana Tabia",
      "Jonathan Wong"
     ],
     "a": [
      "Zyanya Flores",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jaymie Vincelli",
      "Matthew Rafaniello"
     ],
     "a": [
      "Alina Allakhveranova",
      "Chris Balta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jillian Sorrentino",
      "Aseem Sharma"
     ],
     "a": [
      "Sarah Dente",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Julianna Rodrigues",
      "David Abiog"
     ],
     "a": [
      "Vanessa Tortorice",
      "James Cooper"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jaymie Vincelli",
      "Julianna Rodrigues"
     ],
     "a": [
      "Sarah Dente",
      "Vanessa Tortorice"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Taylor Leuck",
      "Diana Tabia"
     ],
     "a": [
      "Kimberley Levins",
      "Zyanya Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jonathan Wong",
      "Matthew Rafaniello"
     ],
     "a": [
      "Chris Balta",
      "Chris Alworth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Aseem Sharma",
      "Darren Zheng"
     ],
     "a": [
      "James Cooper",
      "Lionell Matthews"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "ACE Downingtown",
   "time": "2026-08-24T19:00:00",
   "complete": true,
   "homePoints": 591,
   "awayPoints": 616,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sabiha Kermalli",
      "Adam Werwie"
     ],
     "a": [
      "Jasmine Nguyen",
      "Raymond Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Zhou",
      "Victor Salicetti"
     ],
     "a": [
      "Esterlina Wiest",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Tony Wong"
     ],
     "a": [
      "Maridel Ablaza",
      "Holden Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patricia San Andres",
      "Marcus Burritt"
     ],
     "a": [
      "Jane Pascua",
      "Taylor Newell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Patricia San Andres",
      "Robin Pagotto"
     ],
     "a": [
      "Jane Pascua",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sabiha Kermalli",
      "Diahann Ouly"
     ],
     "a": [
      "Jasmine Nguyen",
      "Katelyn Carretas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Victor Salicetti",
      "Howie Knudson"
     ],
     "a": [
      "Holden Smith",
      "Kevin Algarme"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Adam Werwie",
      "Marcus Burritt"
     ],
     "a": [
      "Taylor Newell",
      "John Defilippo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Suzane Sullivan",
      "Victor Salicetti"
     ],
     "a": [
      "Katelyn Carretas",
      "Raymond Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Amanda Zhou",
      "Marcus Burritt"
     ],
     "a": [
      "Lanz Santos",
      "John Defilippo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Patricia San Andres",
      "Dhanesh Ghia"
     ],
     "a": [
      "Maridel Ablaza",
      "Kevin Algarme"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Robin Pagotto",
      "Tony Wong"
     ],
     "a": [
      "Esterlina Wiest",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sabiha Kermalli",
      "Robin Pagotto"
     ],
     "a": [
      "Jane Pascua",
      "Esterlina Wiest"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Diahann Ouly"
     ],
     "a": [
      "Lanz Santos",
      "Maridel Ablaza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Adam Werwie",
      "Howie Knudson"
     ],
     "a": [
      "Raymond Duong",
      "Kevin Algarme"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Victor Salicetti",
      "Tony Wong"
     ],
     "a": [
      "Ismael Hernandez",
      "Holden Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Diahann Ouly",
      "Marcus Burritt"
     ],
     "a": [
      "Jasmine Nguyen",
      "Raymond Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patricia San Andres",
      "Dhanesh Ghia"
     ],
     "a": [
      "Maridel Ablaza",
      "Holden Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sabiha Kermalli",
      "Howie Knudson"
     ],
     "a": [
      "Jane Pascua",
      "Taylor Newell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amanda Zhou",
      "Adam Werwie"
     ],
     "a": [
      "Katelyn Carretas",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robin Pagotto",
      "Diahann Ouly"
     ],
     "a": [
      "Jane Pascua",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Patricia San Andres",
      "Suzane Sullivan"
     ],
     "a": [
      "Katelyn Carretas",
      "Esterlina Wiest"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Victor Salicetti",
      "Dhanesh Ghia"
     ],
     "a": [
      "Kevin Algarme",
      "Holden Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marcus Burritt",
      "Tony Wong"
     ],
     "a": [
      "John Defilippo",
      "Taylor Newell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Suzane Sullivan",
      "Adam Werwie"
     ],
     "a": [
      "Katelyn Carretas",
      "Raymond Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robin Pagotto",
      "Howie Knudson"
     ],
     "a": [
      "Jasmine Nguyen",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amanda Zhou",
      "Tony Wong"
     ],
     "a": [
      "Maridel Ablaza",
      "John Defilippo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sabiha Kermalli",
      "Dhanesh Ghia"
     ],
     "a": [
      "Esterlina Wiest",
      "Kevin Algarme"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Patricia San Andres",
      "Sabiha Kermalli"
     ],
     "a": [
      "Katelyn Carretas",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Suzane Sullivan",
      "Diahann Ouly"
     ],
     "a": [
      "Jasmine Nguyen",
      "Jane Pascua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Adam Werwie",
      "Howie Knudson"
     ],
     "a": [
      "Raymond Duong",
      "Kevin Algarme"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Victor Salicetti",
      "Marcus Burritt"
     ],
     "a": [
      "Holden Smith",
      "Taylor Newell"
     ]
    }
   ],
   "subs": [
    "Amanda Zhou",
    "Dhanesh Ghia"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Monroe",
   "away": "Jersey Pickleball Club",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 677,
   "awayPoints": 497,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Liane Feyas",
      "Mike Hardy"
     ],
     "a": [
      "Mayra Tuba",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Terri Pflueger",
      "Sean Greener"
     ],
     "a": [
      "Michelle Cobos",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kelly Aylward",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jade Chin",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Abby Viola",
      "Keith Fallon"
     ],
     "a": [
      "Julianna Aiello",
      "Barry Lerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Terri Pflueger",
      "Filomena Rega"
     ],
     "a": [
      "Jade Chin",
      "Michelle Cobos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelly Aylward",
      "Liane Feyas"
     ],
     "a": [
      "Julianna Aiello",
      "Rachael Osetkowski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sean Greener",
      "Mike Hardy"
     ],
     "a": [
      "Alex Glushek",
      "David Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cory Mintz",
      "Stephen Fredericksen"
     ],
     "a": [
      "Barry Lerner",
      "Alex Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kelly Aylward",
      "Stephen Fredericksen"
     ],
     "a": [
      "Mayra Tuba",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Abby Viola",
      "Cory Mintz"
     ],
     "a": [
      "Julianna Aiello",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Filomena Rega",
      "Keith Fallon"
     ],
     "a": [
      "Jade Chin",
      "Barry Lerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Liane Feyas",
      "Mike Hardy"
     ],
     "a": [
      "Rachael Osetkowski",
      "Alex Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Liane Feyas",
      "Kelly Aylward"
     ],
     "a": [
      "Jade Chin",
      "Mayra Tuba"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Terri Pflueger",
      "Filomena Rega"
     ],
     "a": [
      "Rachael Osetkowski",
      "Michelle Cobos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cory Mintz",
      "Stephen Fredericksen"
     ],
     "a": [
      "Alex Glushek",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Sean Greener",
      "Mike Hardy"
     ],
     "a": [
      "David Burke",
      "Barry Lerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Terri Pflueger",
      "Stephen Fredericksen"
     ],
     "a": [
      "Mayra Tuba",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kelly Aylward",
      "Keith Fallon"
     ],
     "a": [
      "Julianna Aiello",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Filomena Rega",
      "Mike Hardy"
     ],
     "a": [
      "Rachael Osetkowski",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Abby Viola",
      "Sean Greener"
     ],
     "a": [
      "Jade Chin",
      "Alex Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liane Feyas",
      "Terri Pflueger"
     ],
     "a": [
      "Mayra Tuba",
      "Jade Chin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Aylward",
      "Abby Viola"
     ],
     "a": [
      "Julianna Aiello",
      "Michelle Cobos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephen Fredericksen",
      "Mike Hardy"
     ],
     "a": [
      "Alex Glushek",
      "Barry Lerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cory Mintz",
      "Keith Fallon"
     ],
     "a": [
      "Alex Lopez",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Liane Feyas",
      "Stephen Fredericksen"
     ],
     "a": [
      "Julianna Aiello",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Terri Pflueger",
      "Sean Greener"
     ],
     "a": [
      "Michelle Cobos",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Filomena Rega",
      "Keith Fallon"
     ],
     "a": [
      "Mayra Tuba",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Abby Viola",
      "Cory Mintz"
     ],
     "a": [
      "Rachael Osetkowski",
      "Alex Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Abby Viola",
      "Filomena Rega"
     ],
     "a": [
      "Rachael Osetkowski",
      "Mayra Tuba"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Liane Feyas",
      "Terri Pflueger"
     ],
     "a": [
      "Jade Chin",
      "Michelle Cobos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mike Hardy",
      "Keith Fallon"
     ],
     "a": [
      "Alex Glushek",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cory Mintz",
      "Sean Greener"
     ],
     "a": [
      "David Burke",
      "Barry Lerner"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Pickle House",
   "away": "Flemington",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 513,
   "awayPoints": 647,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Iqra Hasan-Calmo",
      "Danny Ruiz"
     ],
     "a": [
      "Sarah Stangota",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Gabe Nacion"
     ],
     "a": [
      "Jeannine Calhoun",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jen Ogorzat",
      "Rakesh Roy"
     ],
     "a": [
      "Jessica Wormeck",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Zoe Zapf",
      "James Yu"
     ],
     "a": [
      "Meghan Klein",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Iqra Hasan-Calmo",
      "Jen Ogorzat"
     ],
     "a": [
      "Gail Hannagan",
      "Margo Langer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "Elizabeth Trimble"
     ],
     "a": [
      "Jeannine Calhoun",
      "Sarah Stangota"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Danny Ruiz",
      "Rakesh Roy"
     ],
     "a": [
      "Paul Matzko",
      "Jeff Kesner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Robert Leming",
      "Ross Bienstock"
     ],
     "a": [
      "Eric Brezina",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Danny Ruiz"
     ],
     "a": [
      "Meghan Klein",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jen Ogorzat",
      "Gabe Nacion"
     ],
     "a": [
      "Jessica Wormeck",
      "Jeff Kesner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elizabeth Trimble",
      "Rakesh Roy"
     ],
     "a": [
      "Margo Langer",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Zoe Zapf",
      "James Yu"
     ],
     "a": [
      "Gail Hannagan",
      "Butch Kreilick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zoe Zapf",
      "Katie O'Mara"
     ],
     "a": [
      "Jessica Wormeck",
      "Jeannine Calhoun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Emily Sowa"
     ],
     "a": [
      "Meghan Klein",
      "Sarah Stangota"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gabe Nacion",
      "Danny Ruiz"
     ],
     "a": [
      "Paul Matzko",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "James Yu",
      "Ross Bienstock"
     ],
     "a": [
      "Jeff Kesner",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ],
     "a": [
      "Margo Langer",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elizabeth Trimble",
      "Ross Bienstock"
     ],
     "a": [
      "Gail Hannagan",
      "Jeff Kesner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jen Ogorzat",
      "Danny Ruiz"
     ],
     "a": [
      "Jeannine Calhoun",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Katie O'Mara",
      "Gabe Nacion"
     ],
     "a": [
      "Sarah Stangota",
      "Paul Matzko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Emily Sowa"
     ],
     "a": [
      "Jessica Wormeck",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Zoe Zapf",
      "Elizabeth Trimble"
     ],
     "a": [
      "Jeannine Calhoun",
      "Gail Hannagan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Danny Ruiz",
      "Gabe Nacion"
     ],
     "a": [
      "Paul Matzko",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ross Bienstock",
      "Rakesh Roy"
     ],
     "a": [
      "Butch Kreilick",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zoe Zapf",
      "Rakesh Roy"
     ],
     "a": [
      "Sarah Stangota",
      "Jeff Kesner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Iqra Hasan-Calmo",
      "Gabe Nacion"
     ],
     "a": [
      "Margo Langer",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Ross Bienstock"
     ],
     "a": [
      "Jeannine Calhoun",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "James Yu"
     ],
     "a": [
      "Gail Hannagan",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Margo Langer",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "Elizabeth Trimble"
     ],
     "a": [
      "Gail Hannagan",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ross Bienstock",
      "Rakesh Roy"
     ],
     "a": [
      "Eric Brezina",
      "Butch Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gabe Nacion",
      "James Yu"
     ],
     "a": [
      "Jeff Kesner",
      "Paul Matzko"
     ]
    }
   ],
   "subs": [
    "Danny Ruiz"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "APC Garden State",
   "away": "Pickle Juice Blackwood",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 497,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Brandi Horowitz",
      "Gerry Bissinger"
     ],
     "a": [
      "Cathy Mclaughlin",
      "Adolfo Nicdao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andrea Galanti",
      "Jonathan Jamison"
     ],
     "a": [
      "Karen Marshall",
      "Jason Grote"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michele Costigan",
      "Taylor Runyen"
     ],
     "a": [
      "Michele Iannella",
      "Michael Van Horn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Abby Sprinkel",
      "Jeff Stephenson"
     ],
     "a": [
      "Trisha Marion",
      "Kordell Alexander"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Oanh Quach",
      "Andrea Galanti"
     ],
     "a": [
      "Michele Iannella",
      "Trisha Marion"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Megan Torres",
      "Abby Sprinkel"
     ],
     "a": [
      "Karen Marshall",
      "Michele Iannella Sr."
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Jamison",
      "Joseph Mckenna"
     ],
     "a": [
      "Kordell Alexander",
      "Jason Grote"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Inho Andrew Yuh",
      "Gerry Bissinger"
     ],
     "a": [
      "Lawrence Dipietro",
      "Michael Van Horn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Brandi Horowitz",
      "Joseph Mckenna"
     ],
     "a": [
      "Cathy Mclaughlin",
      "Jason Grote"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Galanti",
      "Inho Andrew Yuh"
     ],
     "a": [
      "Trisha Marion",
      "Adolfo Nicdao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Oanh Quach",
      "Taylor Runyen"
     ],
     "a": [
      "Karen Marshall",
      "Michael Van Horn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michele Costigan",
      "Jeff Stephenson"
     ],
     "a": [
      "Michele Iannella",
      "Lawrence Dipietro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Oanh Quach",
      "Megan Torres"
     ],
     "a": [
      "Cathy Mclaughlin",
      "Trisha Marion"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandi Horowitz",
      "Abby Sprinkel"
     ],
     "a": [
      "Michele Iannella",
      "Karen Marshall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jonathan Jamison",
      "Taylor Runyen"
     ],
     "a": [
      "Kordell Alexander",
      "Adolfo Nicdao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeff Stephenson",
      "Gerry Bissinger"
     ],
     "a": [
      "Lawrence Dipietro",
      "Jason Grote"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Oanh Quach",
      "Jonathan Jamison"
     ],
     "a": [
      "Karen Marshall",
      "Lawrence Dipietro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Andrea Galanti",
      "Gerry Bissinger"
     ],
     "a": [
      "Michele Iannella Sr.",
      "Michael Van Horn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michele Costigan",
      "Inho Andrew Yuh"
     ],
     "a": [
      "Trisha Marion",
      "Kordell Alexander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Megan Torres",
      "Joseph Mckenna"
     ],
     "a": [
      "Michele Iannella",
      "Jason Grote"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Michele Costigan",
      "Brandi Horowitz"
     ],
     "a": [
      "Karen Marshall",
      "Michele Iannella Sr."
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Oanh Quach",
      "Abby Sprinkel"
     ],
     "a": [
      "Michele Iannella",
      "Trisha Marion"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joseph Mckenna",
      "Inho Andrew Yuh"
     ],
     "a": [
      "Kordell Alexander",
      "Jason Grote"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Runyen",
      "Jeff Stephenson"
     ],
     "a": [
      "Lawrence Dipietro",
      "Michael Van Horn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Abby Sprinkel",
      "Gerry Bissinger"
     ],
     "a": [
      "Cathy Mclaughlin",
      "Adolfo Nicdao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michele Costigan",
      "Jonathan Jamison"
     ],
     "a": [
      "Karen Marshall",
      "Lawrence Dipietro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Megan Torres",
      "Joseph Mckenna"
     ],
     "a": [
      "Michele Iannella",
      "Kordell Alexander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrea Galanti",
      "Taylor Runyen"
     ],
     "a": [
      "Michele Iannella Sr.",
      "Michael Van Horn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Michele Costigan",
      "Megan Torres"
     ],
     "a": [
      "Trisha Marion",
      "Michele Iannella Sr."
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Oanh Quach",
      "Brandi Horowitz"
     ],
     "a": [
      "Michele Iannella",
      "Karen Marshall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Taylor Runyen",
      "Inho Andrew Yuh"
     ],
     "a": [
      "Adolfo Nicdao",
      "Michael Van Horn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joseph Mckenna",
      "Jeff Stephenson"
     ],
     "a": [
      "Jason Grote",
      "Lawrence Dipietro"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Open Play",
   "away": "Pickleball Palace",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 559,
   "awayPoints": 616,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lily Hahn",
      "Luan Vo"
     ],
     "a": [
      "Joan Harris",
      "Brian Seligson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katie Li",
      "Robert Janukowicz"
     ],
     "a": [
      "Anne Buckley",
      "Maxwell Winters"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lili Zhang",
      "Jeff Pzena"
     ],
     "a": [
      "Maggie Wang",
      "Andrew Kimmel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Charishma Serrano",
      "Paul Michael Serrano"
     ],
     "a": [
      "Alexis Kerven",
      "Jason Heiselman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lily Hahn",
      "Charishma Serrano"
     ],
     "a": [
      "Line Barlow",
      "Jenny Winters"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Katie Li",
      "Lili Zhang"
     ],
     "a": [
      "Alexis Kerven",
      "Anne Buckley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Luan Vo",
      "Todd Woodard"
     ],
     "a": [
      "Maxwell Winters",
      "Alan Weissman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Robert Janukowicz",
      "Paul Michael Serrano"
     ],
     "a": [
      "Brian Seligson",
      "Andrew Kimmel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katie Li",
      "Robert Janukowicz"
     ],
     "a": [
      "Anne Buckley",
      "Brian Seligson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lily Hahn",
      "Luan Vo"
     ],
     "a": [
      "Joan Harris",
      "Maxwell Winters"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rashmi Patade",
      "Sahil Agarwala"
     ],
     "a": [
      "Maggie Wang",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Udita Agarwala",
      "Todd Woodard"
     ],
     "a": [
      "Line Barlow",
      "Jason Heiselman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rashmi Patade",
      "Udita Agarwala"
     ],
     "a": [
      "Line Barlow",
      "Jenny Winters"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lili Zhang",
      "Lily Hahn"
     ],
     "a": [
      "Maggie Wang",
      "Alexis Kerven"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sahil Agarwala",
      "Todd Woodard"
     ],
     "a": [
      "Brian Seligson",
      "Maxwell Winters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jeff Pzena",
      "Paul Michael Serrano"
     ],
     "a": [
      "Andrew Kimmel",
      "Jason Heiselman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katie Li",
      "Paul Michael Serrano"
     ],
     "a": [
      "Maggie Wang",
      "Maxwell Winters"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Udita Agarwala",
      "Jeff Pzena"
     ],
     "a": [
      "Joan Harris",
      "Andrew Kimmel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Charishma Serrano",
      "Luan Vo"
     ],
     "a": [
      "Jenny Winters",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lili Zhang",
      "Sahil Agarwala"
     ],
     "a": [
      "Alexis Kerven",
      "Jason Heiselman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katie Li",
      "Lily Hahn"
     ],
     "a": [
      "Joan Harris",
      "Maggie Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lili Zhang",
      "Rashmi Patade"
     ],
     "a": [
      "Line Barlow",
      "Anne Buckley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jeff Pzena",
      "Sahil Agarwala"
     ],
     "a": [
      "Brian Seligson",
      "Andrew Kimmel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Robert Janukowicz",
      "Luan Vo"
     ],
     "a": [
      "Jason Heiselman",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Charishma Serrano",
      "Robert Janukowicz"
     ],
     "a": [
      "Alexis Kerven",
      "Brian Seligson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lily Hahn",
      "Paul Michael Serrano"
     ],
     "a": [
      "Joan Harris",
      "Maxwell Winters"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Udita Agarwala",
      "Jeff Pzena"
     ],
     "a": [
      "Jenny Winters",
      "Andrew Kimmel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Rashmi Patade",
      "Todd Woodard"
     ],
     "a": [
      "Maggie Wang",
      "Alan Weissman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Katie Li",
      "Charishma Serrano"
     ],
     "a": [
      "Anne Buckley",
      "Line Barlow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rashmi Patade",
      "Udita Agarwala"
     ],
     "a": [
      "Jenny Winters",
      "Joan Harris"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robert Janukowicz",
      "Luan Vo"
     ],
     "a": [
      "Jason Heiselman",
      "Alan Weissman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sahil Agarwala",
      "Todd Woodard"
     ],
     "a": [
      "Brian Seligson",
      "Maxwell Winters"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "PickleRage Union County Pandas",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 589,
   "awayPoints": 617,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jessica Kopec",
      "Kenneth Bautista"
     ],
     "a": [
      "Charlene De Lara",
      "Reuben Zilber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Appleton",
      "Marvin Steller"
     ],
     "a": [
      "Susan Dente",
      "Ryan Peixoto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amanda Nguyen",
      "Juri Solano"
     ],
     "a": [
      "Jenny Lin",
      "Rob Stever"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Thao Tran",
      "John Danks"
     ],
     "a": [
      "Barbara Mccarron",
      "Christopher Sachs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amanda Nguyen",
      "Sarah Silva"
     ],
     "a": [
      "Charlene De Lara",
      "Suki Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thao Tran",
      "Rachel Appleton"
     ],
     "a": [
      "Barbara Mccarron",
      "Susan Dente"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "John Danks",
      "Ed Amato"
     ],
     "a": [
      "Christopher Sachs",
      "Rob Stever"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Juri Solano",
      "Jebril Guevarra"
     ],
     "a": [
      "Ryan Peixoto",
      "Reuben Zilber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Amanda Nguyen",
      "John Danks"
     ],
     "a": [
      "Charlene De Lara",
      "Rob Stever"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jessica Kopec",
      "Juri Solano"
     ],
     "a": [
      "Jenny Lin",
      "Christopher Sachs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Patricia Tuquero",
      "Jebril Guevarra"
     ],
     "a": [
      "Susan Dente",
      "Reuben Zilber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Thao Tran",
      "Marvin Steller"
     ],
     "a": [
      "Barbara Mccarron",
      "Ryan Peixoto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Thao Tran",
      "Sarah Silva"
     ],
     "a": [
      "Suki Wong",
      "Jenny Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Appleton",
      "Jessica Kopec"
     ],
     "a": [
      "Susan Dente",
      "Barbara Mccarron"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marvin Steller",
      "Kenneth Bautista"
     ],
     "a": [
      "Ryan Peixoto",
      "Reuben Zilber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Danks",
      "Ed Amato"
     ],
     "a": [
      "Christopher Sachs",
      "Rob Stever"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Kenneth Bautista"
     ],
     "a": [
      "Jenny Lin",
      "Christopher Sachs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amanda Nguyen",
      "Marvin Steller"
     ],
     "a": [
      "Charlene De Lara",
      "Rob Stever"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Kopec",
      "Ed Amato"
     ],
     "a": [
      "Barbara Mccarron",
      "Ryan Peixoto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Patricia Tuquero",
      "Jebril Guevarra"
     ],
     "a": [
      "Suki Wong",
      "Reuben Zilber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Patricia Tuquero",
      "Sarah Silva"
     ],
     "a": [
      "Charlene De Lara",
      "Barbara Mccarron"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Amanda Nguyen",
      "Thao Tran"
     ],
     "a": [
      "Susan Dente",
      "Suki Wong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Marvin Steller",
      "Kenneth Bautista"
     ],
     "a": [
      "Ryan Peixoto",
      "Rob Stever"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Juri Solano",
      "Ed Amato"
     ],
     "a": [
      "Christopher Sachs",
      "Reuben Zilber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amanda Nguyen",
      "Marvin Steller"
     ],
     "a": [
      "Suki Wong",
      "Rob Stever"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Patricia Tuquero",
      "Juri Solano"
     ],
     "a": [
      "Susan Dente",
      "Christopher Sachs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Thao Tran",
      "John Danks"
     ],
     "a": [
      "Jenny Lin",
      "Reuben Zilber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sarah Silva",
      "Jebril Guevarra"
     ],
     "a": [
      "Charlene De Lara",
      "Ryan Peixoto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Sarah Silva"
     ],
     "a": [
      "Barbara Mccarron",
      "Suki Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jessica Kopec",
      "Patricia Tuquero"
     ],
     "a": [
      "Jenny Lin",
      "Charlene De Lara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 31,
     "h": [
      "Jebril Guevarra",
      "Juri Solano"
     ],
     "a": [
      "Ryan Peixoto",
      "Rob Stever"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ed Amato",
      "Kenneth Bautista"
     ],
     "a": [
      "Christopher Sachs",
      "Reuben Zilber"
     ]
    }
   ],
   "subs": [
    "Barbara Mccarron",
    "Susan Dente",
    "Jenny Lin"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Bounce Tempest",
   "away": "Players Courtyard",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 563,
   "awayPoints": 632,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Thuy Nguyen",
      "Peter Lien"
     ],
     "a": [
      "Brittni Veyna",
      "John Waggoner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Megan Quigley",
      "Thomas Nguyen"
     ],
     "a": [
      "Jackie Bowes",
      "Colin Mackey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Juliana Berg",
      "Timothy Lowry"
     ],
     "a": [
      "Sophie O’Driscoll",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Briane Cornish",
      "Thang Nguyen"
     ],
     "a": [
      "Jamie Walsh",
      "Ryan Benetz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Megan Quigley"
     ],
     "a": [
      "Sophie O’Driscoll",
      "Brittni Veyna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Thuy Nguyen",
      "Helen Goh"
     ],
     "a": [
      "Jamie Walsh",
      "Rebecca Woofter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jason Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Robert Courchain",
      "Josh Ruble"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tuan Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "James Conroy",
      "Colin Mackey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Megan Quigley",
      "Timothy Lowry"
     ],
     "a": [
      "Brittni Veyna",
      "Josh Ruble"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Juliana Berg",
      "Jason Nguyen"
     ],
     "a": [
      "Rebecca Woofter",
      "John Waggoner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Thuy Nguyen",
      "Tuan Nguyen"
     ],
     "a": [
      "Jackie Bowes",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Briane Cornish",
      "Peter Lien"
     ],
     "a": [
      "Jamie Walsh",
      "Ryan Benetz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Briane Cornish"
     ],
     "a": [
      "Brittni Veyna",
      "Rebecca Woofter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Helen Goh",
      "Megan Quigley"
     ],
     "a": [
      "Jackie Bowes",
      "Sophie O’Driscoll"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Thang Nguyen",
      "Timothy Lowry"
     ],
     "a": [
      "James Conroy",
      "Colin Mackey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Thomas Nguyen",
      "Tuan Nguyen"
     ],
     "a": [
      "Ryan Benetz",
      "John Waggoner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Helen Goh",
      "Timothy Lowry"
     ],
     "a": [
      "Rebecca Woofter",
      "John Waggoner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Quynh Nguyen",
      "Jason Nguyen"
     ],
     "a": [
      "Sophie O’Driscoll",
      "Josh Ruble"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Juliana Berg",
      "Tuan Nguyen"
     ],
     "a": [
      "Brittni Veyna",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Briane Cornish",
      "Thang Nguyen"
     ],
     "a": [
      "Jamie Walsh",
      "James Conroy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Helen Goh",
      "Megan Quigley"
     ],
     "a": [
      "Brittni Veyna",
      "Jackie Bowes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Briane Cornish",
      "Juliana Berg"
     ],
     "a": [
      "Sophie O’Driscoll",
      "Jamie Walsh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Peter Lien",
      "Jason Nguyen"
     ],
     "a": [
      "Josh Ruble",
      "Colin Mackey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thomas Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "John Waggoner",
      "Ryan Benetz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Helen Goh",
      "Jason Nguyen"
     ],
     "a": [
      "Brittni Veyna",
      "Josh Ruble"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Quynh Nguyen",
      "Timothy Lowry"
     ],
     "a": [
      "Jackie Bowes",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Thuy Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Rebecca Woofter",
      "Ryan Benetz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Megan Quigley",
      "Peter Lien"
     ],
     "a": [
      "Jamie Walsh",
      "James Conroy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thuy Nguyen",
      "Megan Quigley"
     ],
     "a": [
      "Brittni Veyna",
      "Jackie Bowes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Briane Cornish"
     ],
     "a": [
      "Sophie O’Driscoll",
      "Rebecca Woofter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Josh Ruble",
      "Colin Mackey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tuan Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Robert Courchain",
      "John Waggoner"
     ]
    }
   ],
   "subs": [
    "Brittni Veyna"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Dill Dinkers Hatboro",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 564,
   "awayPoints": 628,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Adele Hackney",
      "Jason Rosenberg"
     ],
     "a": [
      "Brittany Riccitiello",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Stephanie Taxter",
      "Steven Fernandez"
     ],
     "a": [
      "Rachel Searby",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Nathan Trimmer"
     ],
     "a": [
      "Wendy Braithwaite",
      "Paul Mattessich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Li",
      "Peter Hackney"
     ],
     "a": [
      "Diana Dibuccio",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stephanie Taxter",
      "Jennifer Guldin"
     ],
     "a": [
      "Brittany Riccitiello",
      "Rachel Searby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Kristin Granath"
     ],
     "a": [
      "Wendy Braithwaite",
      "Hailee Kurlander"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Peter Hackney",
      "Michael Guldin"
     ],
     "a": [
      "Prasad Mittapalli",
      "Yash Mehta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jason Rosenberg",
      "Nathan Trimmer"
     ],
     "a": [
      "Froilan Sunga",
      "Miles Townsend"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Adele Hackney",
      "Nathan Trimmer"
     ],
     "a": [
      "Rachel Searby",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jennifer Guldin",
      "Elpidio Arias"
     ],
     "a": [
      "Brittany Riccitiello",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kristin Granath",
      "Steven Fernandez"
     ],
     "a": [
      "Hailee Kurlander",
      "Miles Townsend"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Li",
      "Michael Guldin"
     ],
     "a": [
      "Diana Dibuccio",
      "Paul Mattessich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adele Hackney",
      "Susan Li"
     ],
     "a": [
      "Brittany Riccitiello",
      "Rachel Searby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kristin Granath",
      "Jennifer Guldin"
     ],
     "a": [
      "Wendy Braithwaite",
      "Diana Dibuccio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elpidio Arias",
      "Peter Hackney"
     ],
     "a": [
      "Yash Mehta",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Steven Fernandez",
      "Jason Rosenberg"
     ],
     "a": [
      "Froilan Sunga",
      "Miles Townsend"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Li",
      "Jason Rosenberg"
     ],
     "a": [
      "Brittany Riccitiello",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephanie Taxter",
      "Nathan Trimmer"
     ],
     "a": [
      "Hailee Kurlander",
      "Froilan Sunga"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jennifer Guldin",
      "Michael Guldin"
     ],
     "a": [
      "Diana Dibuccio",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Steven Fernandez"
     ],
     "a": [
      "Wendy Braithwaite",
      "Paul Mattessich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristin Granath",
      "Adele Hackney"
     ],
     "a": [
      "Brittany Riccitiello",
      "Diana Dibuccio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Stephanie Taxter"
     ],
     "a": [
      "Rachel Searby",
      "Wendy Braithwaite"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Guldin",
      "Nathan Trimmer"
     ],
     "a": [
      "Froilan Sunga",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Peter Hackney",
      "Jason Rosenberg"
     ],
     "a": [
      "Yash Mehta",
      "Paul Mattessich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Adele Hackney",
      "Jason Rosenberg"
     ],
     "a": [
      "Brittany Riccitiello",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Guldin",
      "Peter Hackney"
     ],
     "a": [
      "Rachel Searby",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Li",
      "Michael Guldin"
     ],
     "a": [
      "Diana Dibuccio",
      "Paul Mattessich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kristin Granath",
      "Elpidio Arias"
     ],
     "a": [
      "Hailee Kurlander",
      "Yash Mehta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristin Granath",
      "Adele Hackney"
     ],
     "a": [
      "Rachel Searby",
      "Wendy Braithwaite"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Guldin",
      "Elizabeth Dailey"
     ],
     "a": [
      "Hailee Kurlander",
      "Diana Dibuccio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Peter Hackney",
      "Steven Fernandez"
     ],
     "a": [
      "Paul Mattessich",
      "Froilan Sunga"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Elpidio Arias",
      "Nathan Trimmer"
     ],
     "a": [
      "Karthik Duraiyappan",
      "Miles Townsend"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Home Court",
   "away": "PickleRage Union County Net Ninjas",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 570,
   "awayPoints": 616,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patricia Majowicz",
      "Brian Perlowitz"
     ],
     "a": [
      "Kellie Roshak",
      "Freddy Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Beattie",
      "David Schwartz"
     ],
     "a": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Danica Bramschreiber",
      "David Cartwright"
     ],
     "a": [
      "Kerry Eskay",
      "Carlos Echenique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ],
     "a": [
      "Connie Tom",
      "Jimmy Tom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alyssa Beattie",
      "Rosellen Perlowitz"
     ],
     "a": [
      "Kellie Roshak",
      "Eva Rodriguez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emiliya Mizrahi",
      "Patricia Majowicz"
     ],
     "a": [
      "Connie Tom",
      "Cassie Lou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Schwartz",
      "Robert Paniti"
     ],
     "a": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Marvin Lao",
      "Andy Pineda"
     ],
     "a": [
      "Jayson Lee",
      "Jimmy Tom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Majowicz",
      "Andy Pineda"
     ],
     "a": [
      "Connie Tom",
      "Carlos Echenique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Beattie",
      "Marvin Lao"
     ],
     "a": [
      "Kellie Roshak",
      "Jayson Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rosellen Perlowitz",
      "David Schwartz"
     ],
     "a": [
      "Cassie Lou",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emiliya Mizrahi",
      "David Cartwright"
     ],
     "a": [
      "Kerry Eskay",
      "Freddy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Beattie",
      "Patricia Majowicz"
     ],
     "a": [
      "Eva Rodriguez",
      "Kerry Eskay"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Danica Bramschreiber",
      "Emiliya Mizrahi"
     ],
     "a": [
      "Connie Tom",
      "Holly Siu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Schwartz",
      "Marvin Lao"
     ],
     "a": [
      "Freddy Li",
      "Jayson Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brian Perlowitz",
      "David Cartwright"
     ],
     "a": [
      "Carlos Echenique",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Beattie",
      "Brian Perlowitz"
     ],
     "a": [
      "Eva Rodriguez",
      "Carlos Echenique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Patricia Majowicz",
      "Marvin Lao"
     ],
     "a": [
      "Cassie Lou",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emiliya Mizrahi",
      "Andy Pineda"
     ],
     "a": [
      "Kellie Roshak",
      "Jimmy Tom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danica Bramschreiber",
      "Robert Paniti"
     ],
     "a": [
      "Holly Siu",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alyssa Beattie",
      "Rosellen Perlowitz"
     ],
     "a": [
      "Kellie Roshak",
      "Cassie Lou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emiliya Mizrahi",
      "Danica Bramschreiber"
     ],
     "a": [
      "Kerry Eskay",
      "Holly Siu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "David Schwartz",
      "David Cartwright"
     ],
     "a": [
      "Freddy Li",
      "Jayson Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robert Paniti",
      "Andy Pineda"
     ],
     "a": [
      "Jimmy Tom",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emiliya Mizrahi",
      "Andy Pineda"
     ],
     "a": [
      "Kellie Roshak",
      "Freddy Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patricia Majowicz",
      "Brian Perlowitz"
     ],
     "a": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ],
     "a": [
      "Kerry Eskay",
      "Carlos Echenique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alyssa Beattie",
      "David Schwartz"
     ],
     "a": [
      "Holly Siu",
      "Jimmy Tom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rosellen Perlowitz",
      "Emiliya Mizrahi"
     ],
     "a": [
      "Kellie Roshak",
      "Eva Rodriguez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Danica Bramschreiber",
      "Patricia Majowicz"
     ],
     "a": [
      "Kerry Eskay",
      "Holly Siu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Brian Perlowitz",
      "David Cartwright"
     ],
     "a": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Robert Paniti",
      "Marvin Lao"
     ],
     "a": [
      "Freddy Li",
      "Carlos Echenique"
     ]
    }
   ],
   "subs": [
    "Holly Siu",
    "Emiliya Mizrahi"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "PickleRage Union County Net Ninjas",
   "time": "2026-08-31T19:00:00",
   "complete": true,
   "homePoints": 510,
   "awayPoints": 670,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Suki Wong",
      "Rob Stever"
     ],
     "a": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sherry Tomaino",
      "Christopher Sachs"
     ],
     "a": [
      "Kellie Roshak",
      "Carlos Echenique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Barbara Mccarron",
      "Ryan Peixoto"
     ],
     "a": [
      "Kerry Eskay",
      "Freddy Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nikki Nigro",
      "Reuben Zilber"
     ],
     "a": [
      "Connie Tom",
      "Jimmy Tom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sherry Tomaino",
      "Nikki Nigro"
     ],
     "a": [
      "Eva Rodriguez",
      "Kellie Roshak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Barbara Mccarron",
      "Suki Wong"
     ],
     "a": [
      "Kerry Eskay",
      "Huifang Yao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rob Stever",
      "Christopher Sachs"
     ],
     "a": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Peixoto",
      "Matthew Marciani"
     ],
     "a": [
      "Carlos Echenique",
      "Jayson Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sherry Tomaino",
      "Reuben Zilber"
     ],
     "a": [
      "Kellie Roshak",
      "Freddy Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suki Wong",
      "Ryan Peixoto"
     ],
     "a": [
      "Connie Tom",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Matthew Marciani"
     ],
     "a": [
      "Kerry Eskay",
      "Jayson Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Barbara Mccarron",
      "Rob Stever"
     ],
     "a": [
      "Cassie Lou",
      "Jimmy Tom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nikki Nigro",
      "Barbara Mccarron"
     ],
     "a": [
      "Eva Rodriguez",
      "Kerry Eskay"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Suki Wong",
      "Sherry Tomaino"
     ],
     "a": [
      "Connie Tom",
      "Cassie Lou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rob Stever",
      "Reuben Zilber"
     ],
     "a": [
      "Freddy Li",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christopher Sachs",
      "Matthew Marciani"
     ],
     "a": [
      "Carlos Echenique",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Suki Wong",
      "Ryan Peixoto"
     ],
     "a": [
      "Kerry Eskay",
      "Freddy Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sherry Tomaino",
      "Matthew Marciani"
     ],
     "a": [
      "Eva Rodriguez",
      "Jimmy Tom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nikki Nigro",
      "Reuben Zilber"
     ],
     "a": [
      "Huifang Yao",
      "Jayson Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barbara Mccarron",
      "Christopher Sachs"
     ],
     "a": [
      "Cassie Lou",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Suki Wong",
      "Sherry Tomaino"
     ],
     "a": [
      "Kellie Roshak",
      "Connie Tom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Barbara Mccarron",
      "Nikki Nigro"
     ],
     "a": [
      "Cassie Lou",
      "Huifang Yao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Reuben Zilber",
      "Matthew Marciani"
     ],
     "a": [
      "Cesar Alvarez",
      "Carlos Echenique"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rob Stever",
      "Ryan Peixoto"
     ],
     "a": [
      "Jayson Lee",
      "Jimmy Tom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Suki Wong",
      "Rob Stever"
     ],
     "a": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Barbara Mccarron",
      "Ryan Peixoto"
     ],
     "a": [
      "Kellie Roshak",
      "Jayson Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Nikki Nigro",
      "Matthew Marciani"
     ],
     "a": [
      "Huifang Yao",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sherry Tomaino",
      "Christopher Sachs"
     ],
     "a": [
      "Cassie Lou",
      "Carlos Echenique"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suki Wong",
      "Nikki Nigro"
     ],
     "a": [
      "Eva Rodriguez",
      "Kellie Roshak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sherry Tomaino",
      "Barbara Mccarron"
     ],
     "a": [
      "Kerry Eskay",
      "Huifang Yao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christopher Sachs",
      "Reuben Zilber"
     ],
     "a": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ryan Peixoto",
      "Rob Stever"
     ],
     "a": [
      "Freddy Li",
      "Jimmy Tom"
     ]
    }
   ],
   "subs": [
    "Barbara Mccarron",
    "Sherry Tomaino"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Home Court",
   "away": "Open Play",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 669,
   "awayPoints": 543,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Emiliya Mizrahi",
      "David Cartwright"
     ],
     "a": [
      "Lily Hahn",
      "Giang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ],
     "a": [
      "Katie Li",
      "Luan Vo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kristin Larosa",
      "David Schwartz"
     ],
     "a": [
      "Lili Zhang",
      "Sahil Agarwala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alyssa Beattie",
      "Brian Perlowitz"
     ],
     "a": [
      "Udita Agarwala",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alyssa Beattie",
      "Kristin Larosa"
     ],
     "a": [
      "Lily Hahn",
      "Katie Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Danica Bramschreiber",
      "Patricia Majowicz"
     ],
     "a": [
      "Lili Zhang",
      "Yawen Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "David Cartwright",
      "David Schwartz"
     ],
     "a": [
      "Giang Nguyen",
      "Luan Vo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andy Pineda",
      "Brian Perlowitz"
     ],
     "a": [
      "Sahil Agarwala",
      "Giomarco Urbina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alyssa Beattie",
      "David Schwartz"
     ],
     "a": [
      "Katie Li",
      "Giang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ],
     "a": [
      "Lili Zhang",
      "Luan Vo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Danica Bramschreiber",
      "Marc Matalon"
     ],
     "a": [
      "Yawen Zhang",
      "Giomarco Urbina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Emiliya Mizrahi",
      "David Cartwright"
     ],
     "a": [
      "Udita Agarwala",
      "Rohit Kumar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Emiliya Mizrahi",
      "Patricia Majowicz"
     ],
     "a": [
      "Lily Hahn",
      "Lili Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rosellen Perlowitz",
      "Danica Bramschreiber"
     ],
     "a": [
      "Udita Agarwala",
      "Rashmi Patade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Andy Pineda",
      "Robert Paniti"
     ],
     "a": [
      "Sahil Agarwala",
      "Giomarco Urbina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "David Cartwright",
      "Marc Matalon"
     ],
     "a": [
      "Anbu Cheeralan",
      "Rohit Kumar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Patricia Majowicz",
      "Andy Pineda"
     ],
     "a": [
      "Lily Hahn",
      "Giang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rosellen Perlowitz",
      "David Schwartz"
     ],
     "a": [
      "Katie Li",
      "Luan Vo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Danica Bramschreiber",
      "Brian Perlowitz"
     ],
     "a": [
      "Lili Zhang",
      "Rohit Kumar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kristin Larosa",
      "Marc Matalon"
     ],
     "a": [
      "Rashmi Patade",
      "Sahil Agarwala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Alyssa Beattie",
      "Rosellen Perlowitz"
     ],
     "a": [
      "Lily Hahn",
      "Katie Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Emiliya Mizrahi",
      "Kristin Larosa"
     ],
     "a": [
      "Yawen Zhang",
      "Rashmi Patade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Andy Pineda",
      "Brian Perlowitz"
     ],
     "a": [
      "Giang Nguyen",
      "Luan Vo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Schwartz",
      "Robert Paniti"
     ],
     "a": [
      "Anbu Cheeralan",
      "Giomarco Urbina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Patricia Majowicz",
      "Andy Pineda"
     ],
     "a": [
      "Katie Li",
      "Giang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alyssa Beattie",
      "David Cartwright"
     ],
     "a": [
      "Lily Hahn",
      "Luan Vo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Danica Bramschreiber",
      "Robert Paniti"
     ],
     "a": [
      "Udita Agarwala",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristin Larosa",
      "Marc Matalon"
     ],
     "a": [
      "Rashmi Patade",
      "Rohit Kumar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alyssa Beattie",
      "Rosellen Perlowitz"
     ],
     "a": [
      "Lily Hahn",
      "Rashmi Patade"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Patricia Majowicz",
      "Kristin Larosa"
     ],
     "a": [
      "Udita Agarwala",
      "Yawen Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "David Schwartz",
      "Robert Paniti"
     ],
     "a": [
      "Sahil Agarwala",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brian Perlowitz",
      "Marc Matalon"
     ],
     "a": [
      "Giomarco Urbina",
      "Rohit Kumar"
     ]
    }
   ],
   "subs": [
    "Yawen Zhang",
    "Emiliya Mizrahi"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Picklr Newark",
   "away": "APC Garden State",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 540,
   "awayPoints": 635,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ashley Altman",
      "Thomas Lum"
     ],
     "a": [
      "Andrea Galanti",
      "Gerry Bissinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lauren Gabat",
      "Matthew Cohen"
     ],
     "a": [
      "Megan Torres",
      "Joseph Mckenna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kris Miller",
      "Mike Fede"
     ],
     "a": [
      "Abby Sprinkel",
      "Craig Batzar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sandy Duarte",
      "Bill Dower"
     ],
     "a": [
      "Brandi Horowitz",
      "Jonathan Jamison"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ashley Altman",
      "Lauren Gabat"
     ],
     "a": [
      "Andrea Galanti",
      "Brandi Horowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tiffany Weinert",
      "Isha Rahalkar"
     ],
     "a": [
      "Viviane Tran",
      "Oanh Quach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Tyler Kellner",
      "Simon Burns"
     ],
     "a": [
      "Joseph Mckenna",
      "Jamie West"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Matthew Cohen",
      "Thomas Lum"
     ],
     "a": [
      "Jonathan Jamison",
      "Craig Batzar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Kris Miller",
      "Mike Fede"
     ],
     "a": [
      "Andrea Galanti",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tiffany Weinert",
      "Thomas Lum"
     ],
     "a": [
      "Megan Torres",
      "Joseph Mckenna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ashley Altman",
      "Tyler Kellner"
     ],
     "a": [
      "Abby Sprinkel",
      "Jonathan Jamison"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sandy Duarte",
      "Matthew Cohen"
     ],
     "a": [
      "Oanh Quach",
      "Gerry Bissinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Isha Rahalkar",
      "Lauren Gabat"
     ],
     "a": [
      "Megan Torres",
      "Abby Sprinkel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ashley Altman",
      "Kris Miller"
     ],
     "a": [
      "Brandi Horowitz",
      "Viviane Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Simon Burns",
      "Thomas Lum"
     ],
     "a": [
      "Joseph Mckenna",
      "Craig Batzar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matthew Cohen",
      "Bill Dower"
     ],
     "a": [
      "Gerry Bissinger",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Tiffany Weinert",
      "Simon Burns"
     ],
     "a": [
      "Andrea Galanti",
      "Jonathan Jamison"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Isha Rahalkar",
      "Mike Fede"
     ],
     "a": [
      "Brandi Horowitz",
      "Joseph Mckenna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ashley Altman",
      "Bill Dower"
     ],
     "a": [
      "Viviane Tran",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lauren Gabat",
      "Tyler Kellner"
     ],
     "a": [
      "Oanh Quach",
      "Gerry Bissinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lauren Gabat",
      "Isha Rahalkar"
     ],
     "a": [
      "Andrea Galanti",
      "Abby Sprinkel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Kris Miller",
      "Sandy Duarte"
     ],
     "a": [
      "Megan Torres",
      "Viviane Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bill Dower",
      "Mike Fede"
     ],
     "a": [
      "Gerry Bissinger",
      "Craig Batzar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matthew Cohen",
      "Thomas Lum"
     ],
     "a": [
      "Jonathan Jamison",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sandy Duarte",
      "Tyler Kellner"
     ],
     "a": [
      "Andrea Galanti",
      "Craig Batzar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tiffany Weinert",
      "Simon Burns"
     ],
     "a": [
      "Brandi Horowitz",
      "Gerry Bissinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lauren Gabat",
      "Mike Fede"
     ],
     "a": [
      "Viviane Tran",
      "Jonathan Jamison"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kris Miller",
      "Bill Dower"
     ],
     "a": [
      "Oanh Quach",
      "Joseph Mckenna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ashley Altman",
      "Isha Rahalkar"
     ],
     "a": [
      "Megan Torres",
      "Oanh Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kris Miller",
      "Sandy Duarte"
     ],
     "a": [
      "Brandi Horowitz",
      "Abby Sprinkel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Simon Burns",
      "Thomas Lum"
     ],
     "a": [
      "Gerry Bissinger",
      "Jamie West"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bill Dower",
      "Matthew Cohen"
     ],
     "a": [
      "Craig Batzar",
      "Joseph Mckenna"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Pickle Juice Blackwood",
   "away": "Bounce Tempest",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 495,
   "awayPoints": 653,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Katherine Mott",
      "Kordell Alexander"
     ],
     "a": [
      "Quynh Nguyen",
      "Jason Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Lawrence Dipietro"
     ],
     "a": [
      "Thuy Nguyen",
      "Thang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michele Iannella",
      "Michael Van Horn"
     ],
     "a": [
      "Megan Quigley",
      "Timothy Lowry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Michele Iannella Sr.",
      "John Dechristopher"
     ],
     "a": [
      "Mai Chan",
      "Peter Lien"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katherine Mott",
      "Karen Marshall"
     ],
     "a": [
      "Helen Goh",
      "Thuy Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Lisa Murphy"
     ],
     "a": [
      "Megan Quigley",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jason Grote",
      "Rick Khounlavouth"
     ],
     "a": [
      "Timothy Lowry",
      "Thomas Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Van Horn",
      "Lawrence Dipietro"
     ],
     "a": [
      "Thang Nguyen",
      "Tuan Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Rick Khounlavouth"
     ],
     "a": [
      "Helen Goh",
      "Peter Lien"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karen Marshall",
      "Michael Van Horn"
     ],
     "a": [
      "Thuy Nguyen",
      "Jason Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Lawrence Dipietro"
     ],
     "a": [
      "Megan Quigley",
      "Thomas Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lisa Murphy",
      "Jason Grote"
     ],
     "a": [
      "Quynh Nguyen",
      "Thang Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Trisha Marion",
      "Katherine Mott"
     ],
     "a": [
      "Helen Goh",
      "Claire Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Michele Iannella Sr.",
      "Lisa Murphy"
     ],
     "a": [
      "Mai Chan",
      "Quynh Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michael Van Horn",
      "Lawrence Dipietro"
     ],
     "a": [
      "Tuan Nguyen",
      "Thomas Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kordell Alexander",
      "Jason Grote"
     ],
     "a": [
      "Peter Lien",
      "Jason Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Jason Grote"
     ],
     "a": [
      "Claire Nguyen",
      "Jason Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Lawrence Dipietro"
     ],
     "a": [
      "Megan Quigley",
      "Timothy Lowry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katherine Mott",
      "Kordell Alexander"
     ],
     "a": [
      "Mai Chan",
      "Tuan Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michele Iannella Sr.",
      "John Dechristopher"
     ],
     "a": [
      "Quynh Nguyen",
      "Thomas Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Karen Marshall"
     ],
     "a": [
      "Megan Quigley",
      "Thuy Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Katherine Mott"
     ],
     "a": [
      "Helen Goh",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Rick Khounlavouth",
      "John Dechristopher"
     ],
     "a": [
      "Peter Lien",
      "Timothy Lowry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Van Horn",
      "Kordell Alexander"
     ],
     "a": [
      "Thang Nguyen",
      "Thomas Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Trisha Marion",
      "John Dechristopher"
     ],
     "a": [
      "Claire Nguyen",
      "Peter Lien"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michele Iannella Sr.",
      "Kordell Alexander"
     ],
     "a": [
      "Quynh Nguyen",
      "Jason Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Murphy",
      "Michael Van Horn"
     ],
     "a": [
      "Mai Chan",
      "Thang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Marshall",
      "Lawrence Dipietro"
     ],
     "a": [
      "Thuy Nguyen",
      "Tuan Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michele Iannella",
      "Trisha Marion"
     ],
     "a": [
      "Megan Quigley",
      "Helen Goh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lisa Murphy",
      "Katherine Mott"
     ],
     "a": [
      "Thuy Nguyen",
      "Mai Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Grote",
      "Lawrence Dipietro"
     ],
     "a": [
      "Jason Nguyen",
      "Tuan Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Van Horn",
      "Rick Khounlavouth"
     ],
     "a": [
      "Timothy Lowry",
      "Thomas Nguyen"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Bounce Philly",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 681,
   "awayPoints": 574,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meggie Hodgson",
      "Grady Craig"
     ],
     "a": [
      "Adele Hackney",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Evelyn Geating",
      "William Waggenspack"
     ],
     "a": [
      "Jennifer Guldin",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jennifer Lynch",
      "Corey Abrams"
     ],
     "a": [
      "Elizabeth Dailey",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lisa Dinh",
      "Joseph Gronczewski"
     ],
     "a": [
      "Susan Li",
      "Michael Guldin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Lynch",
      "Thuy Le"
     ],
     "a": [
      "Kristin Granath",
      "Stephanie Taxter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Evelyn Geating",
      "Meggie Hodgson"
     ],
     "a": [
      "Elizabeth Dailey",
      "Jennifer Guldin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "William Waggenspack",
      "Corey Abrams"
     ],
     "a": [
      "Steven Fernandez",
      "Peter Hackney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Grady Craig",
      "Matt Soliman"
     ],
     "a": [
      "Devin Kenny",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Meggie Hodgson",
      "William Waggenspack"
     ],
     "a": [
      "Stephanie Taxter",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Thuy Le",
      "Joseph Gronczewski"
     ],
     "a": [
      "Jennifer Guldin",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lisa Dinh",
      "Corey Abrams"
     ],
     "a": [
      "Elizabeth Dailey",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jennifer Lynch",
      "Matt Soliman"
     ],
     "a": [
      "Susan Li",
      "Peter Hackney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lisa Dinh",
      "Thuy Le"
     ],
     "a": [
      "Adele Hackney",
      "Elizabeth Dailey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jennifer Lynch",
      "Evelyn Geating"
     ],
     "a": [
      "Kristin Granath",
      "Susan Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Matt Soliman",
      "Joseph Gronczewski"
     ],
     "a": [
      "Nathan Trimmer",
      "Michael Guldin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Grady Craig",
      "Corey Abrams"
     ],
     "a": [
      "Devin Kenny",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Matt Soliman"
     ],
     "a": [
      "Stephanie Taxter",
      "Devin Kenny"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Thuy Le",
      "Corey Abrams"
     ],
     "a": [
      "Kristin Granath",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Meggie Hodgson",
      "William Waggenspack"
     ],
     "a": [
      "Adele Hackney",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Dinh",
      "Joseph Gronczewski"
     ],
     "a": [
      "Elizabeth Dailey",
      "Peter Hackney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jennifer Lynch",
      "Evelyn Geating"
     ],
     "a": [
      "Adele Hackney",
      "Susan Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Meggie Hodgson",
      "Lisa Dinh"
     ],
     "a": [
      "Jennifer Guldin",
      "Stephanie Taxter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "William Waggenspack",
      "Grady Craig"
     ],
     "a": [
      "Steven Fernandez",
      "Andrew Frey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matt Soliman",
      "Corey Abrams"
     ],
     "a": [
      "Devin Kenny",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Lynch",
      "William Waggenspack"
     ],
     "a": [
      "Adele Hackney",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Meggie Hodgson",
      "Matt Soliman"
     ],
     "a": [
      "Jennifer Guldin",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lisa Dinh",
      "Grady Craig"
     ],
     "a": [
      "Kristin Granath",
      "Peter Hackney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Thuy Le",
      "Joseph Gronczewski"
     ],
     "a": [
      "Stephanie Taxter",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Meggie Hodgson",
      "Evelyn Geating"
     ],
     "a": [
      "Adele Hackney",
      "Jennifer Guldin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Thuy Le",
      "Jennifer Lynch"
     ],
     "a": [
      "Stephanie Taxter",
      "Susan Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joseph Gronczewski",
      "William Waggenspack"
     ],
     "a": [
      "Steven Fernandez",
      "Peter Hackney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Grady Craig",
      "Matt Soliman"
     ],
     "a": [
      "Devin Kenny",
      "Nathan Trimmer"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Monroe",
   "away": "Pickle House",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 642,
   "awayPoints": 492,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelly Aylward",
      "Aidan Fredericks"
     ],
     "a": [
      "Jen Ogorzat",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Terri Pflueger",
      "Sean Greener"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Gabe Nacion"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Abby Viola",
      "Jason Paderon"
     ],
     "a": [
      "Zoe Zapf",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Liane Feyas",
      "Mike Hardy"
     ],
     "a": [
      "Katie O'Mara",
      "James Yu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Liane Feyas",
      "Kelly Aylward"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Jen Ogorzat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Terri Pflueger",
      "Melanie Gibson"
     ],
     "a": [
      "Zoe Zapf",
      "Maryjane Fajardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sean Greener",
      "Mike Hardy"
     ],
     "a": [
      "Gabe Nacion",
      "Rakesh Roy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Keith Fallon",
      "Aidan Fredericks"
     ],
     "a": [
      "Ross Bienstock",
      "Gray Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Liane Feyas",
      "Aidan Fredericks"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Terri Pflueger",
      "Sean Greener"
     ],
     "a": [
      "Jen Ogorzat",
      "James Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Melanie Gibson",
      "Keith Fallon"
     ],
     "a": [
      "Maryjane Fajardo",
      "Alexander Babatunde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Abby Viola",
      "Jason Paderon"
     ],
     "a": [
      "Katie O'Mara",
      "Gray Ferrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Liane Feyas",
      "Terri Pflueger"
     ],
     "a": [
      "Jen Ogorzat",
      "Zoe Zapf"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Aylward",
      "Abby Viola"
     ],
     "a": [
      "Katie O'Mara",
      "Maryjane Fajardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sean Greener",
      "Mike Hardy"
     ],
     "a": [
      "Gabe Nacion",
      "James Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Keith Fallon",
      "Jason Paderon"
     ],
     "a": [
      "Ross Bienstock",
      "Alexander Babatunde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Melanie Gibson",
      "Mike Hardy"
     ],
     "a": [
      "Jen Ogorzat",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Abby Viola",
      "Keith Fallon"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Gabe Nacion"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Liane Feyas",
      "Jason Paderon"
     ],
     "a": [
      "Zoe Zapf",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Terri Pflueger",
      "Aidan Fredericks"
     ],
     "a": [
      "Maryjane Fajardo",
      "Alexander Babatunde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Liane Feyas",
      "Kelly Aylward"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Jen Ogorzat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Melanie Gibson",
      "Abby Viola"
     ],
     "a": [
      "Katie O'Mara",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Keith Fallon",
      "Jason Paderon"
     ],
     "a": [
      "Rakesh Roy",
      "James Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mike Hardy",
      "Aidan Fredericks"
     ],
     "a": [
      "Ross Bienstock",
      "Gray Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kelly Aylward",
      "Keith Fallon"
     ],
     "a": [
      "Jen Ogorzat",
      "Gabe Nacion"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Terri Pflueger",
      "Mike Hardy"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "James Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Melanie Gibson",
      "Aidan Fredericks"
     ],
     "a": [
      "Katie O'Mara",
      "Alexander Babatunde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Abby Viola",
      "Sean Greener"
     ],
     "a": [
      "Maryjane Fajardo",
      "Gray Ferrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Liane Feyas",
      "Terri Pflueger"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelly Aylward",
      "Melanie Gibson"
     ],
     "a": [
      "Maryjane Fajardo",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sean Greener",
      "Jason Paderon"
     ],
     "a": [
      "Gabe Nacion",
      "Rakesh Roy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Aidan Fredericks",
      "Mike Hardy"
     ],
     "a": [
      "Alexander Babatunde",
      "Gray Ferrante"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Flemington",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 654,
   "awayPoints": 537,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Dente",
      "Chris Balta"
     ],
     "a": [
      "Sarah Stangota",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zyanya Flores",
      "Michael Alfaro"
     ],
     "a": [
      "Meghan Klein",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jaerene Medeiros",
      "Lionell Matthews"
     ],
     "a": [
      "Kelly Bowers",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alina Allakhveranova",
      "James Cooper"
     ],
     "a": [
      "Jessica Wormeck",
      "Jeff Kesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Dente",
      "Vanessa Tortorice"
     ],
     "a": [
      "Kelly Bowers",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zyanya Flores",
      "Alina Allakhveranova"
     ],
     "a": [
      "Sarah Stangota",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michael Alfaro",
      "James Cooper"
     ],
     "a": [
      "Paul Matzko",
      "Jeff Kesner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Chris Balta",
      "Lionell Matthews"
     ],
     "a": [
      "Lakshmikanth Chaluvadi",
      "Jorge Diaz Iii"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vanessa Tortorice",
      "James Cooper"
     ],
     "a": [
      "Jessica Wormeck",
      "Jorge Diaz Iii"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zyanya Flores",
      "Kevin Altieri"
     ],
     "a": [
      "Kelly Bowers",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Dente",
      "Michael Alfaro"
     ],
     "a": [
      "Meghan Klein",
      "Jeff Kesner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alina Allakhveranova",
      "Chris Alworth"
     ],
     "a": [
      "Sarah Stangota",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sarah Dente",
      "Alina Allakhveranova"
     ],
     "a": [
      "Sarah Stangota",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jaerene Medeiros",
      "Zyanya Flores"
     ],
     "a": [
      "Kelly Bowers",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lionell Matthews",
      "Chris Alworth"
     ],
     "a": [
      "Paul Matzko",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chris Balta",
      "Kevin Altieri"
     ],
     "a": [
      "Jeff Kesner",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Alina Allakhveranova",
      "Chris Alworth"
     ],
     "a": [
      "Meghan Klein",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Zyanya Flores",
      "Michael Alfaro"
     ],
     "a": [
      "Kelly Bowers",
      "Jorge Diaz Iii"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jaerene Medeiros",
      "James Cooper"
     ],
     "a": [
      "Jessica Wormeck",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Dente",
      "Lionell Matthews"
     ],
     "a": [
      "Sarah Stangota",
      "Jeff Kesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zyanya Flores",
      "Alina Allakhveranova"
     ],
     "a": [
      "Sarah Stangota",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Dente",
      "Vanessa Tortorice"
     ],
     "a": [
      "Meghan Klein",
      "Kelly Bowers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chris Balta",
      "Chris Alworth"
     ],
     "a": [
      "Paul Matzko",
      "Jorge Diaz Iii"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "James Cooper",
      "Lionell Matthews"
     ],
     "a": [
      "Lakshmikanth Chaluvadi",
      "Jeff Kesner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Vanessa Tortorice",
      "James Cooper"
     ],
     "a": [
      "Kelly Bowers",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Dente",
      "Kevin Altieri"
     ],
     "a": [
      "Jessica Wormeck",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alina Allakhveranova",
      "Michael Alfaro"
     ],
     "a": [
      "Sarah Stangota",
      "Jorge Diaz Iii"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zyanya Flores",
      "Chris Alworth"
     ],
     "a": [
      "Meghan Klein",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jaerene Medeiros",
      "Zyanya Flores"
     ],
     "a": [
      "Meghan Klein",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Sarah Dente",
      "Alina Allakhveranova"
     ],
     "a": [
      "Sarah Stangota",
      "Kelly Bowers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Alfaro",
      "Kevin Altieri"
     ],
     "a": [
      "Butch Kreilick",
      "Paul Matzko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Alworth",
      "Chris Balta"
     ],
     "a": [
      "Lakshmikanth Chaluvadi",
      "Jeff Kesner"
     ]
    }
   ],
   "subs": [
    "Jaerene Medeiros"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "PickleRage Union County Pandas",
   "away": "Pickleball Palace",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 597,
   "awayPoints": 620,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thao Tran",
      "John Danks"
     ],
     "a": [
      "Anne Buckley",
      "Jose Chariez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Amanda Nguyen",
      "Juri Solano"
     ],
     "a": [
      "Alexis Kerven",
      "Rhys Gardiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jessica Kopec",
      "Ed Amato"
     ],
     "a": [
      "Joan Harris",
      "Maxwell Winters"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patricia Tuquero",
      "Jebril Guevarra"
     ],
     "a": [
      "Maggie Wang",
      "Alan Weissman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Thao Tran",
      "Amanda Nguyen"
     ],
     "a": [
      "Maria Keselman",
      "Anne Buckley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Jessica Kopec"
     ],
     "a": [
      "Jenny Winters",
      "Joan Harris"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "John Danks",
      "Ed Amato"
     ],
     "a": [
      "Andrew Kimmel",
      "Jose Chariez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Juri Solano",
      "Jebril Guevarra"
     ],
     "a": [
      "Maxwell Winters",
      "Jason Heiselman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amanda Nguyen",
      "John Danks"
     ],
     "a": [
      "Alexis Kerven",
      "Jose Chariez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Patricia Tuquero",
      "Ed Amato"
     ],
     "a": [
      "Anne Buckley",
      "Rhys Gardiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Kopec",
      "Juri Solano"
     ],
     "a": [
      "Maggie Wang",
      "Andrew Kimmel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Appleton",
      "Kenneth Bautista"
     ],
     "a": [
      "Maria Keselman",
      "Jason Heiselman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thao Tran",
      "Jessica Kopec"
     ],
     "a": [
      "Anne Buckley",
      "Joan Harris"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amanda Nguyen",
      "Rachel Appleton"
     ],
     "a": [
      "Jenny Winters",
      "Maggie Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ed Amato",
      "Jebril Guevarra"
     ],
     "a": [
      "Alan Weissman",
      "Maxwell Winters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Juri Solano",
      "Kenneth Bautista"
     ],
     "a": [
      "Andrew Kimmel",
      "Rhys Gardiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thao Tran",
      "John Danks"
     ],
     "a": [
      "Alexis Kerven",
      "Jason Heiselman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jessica Kopec",
      "Ed Amato"
     ],
     "a": [
      "Joan Harris",
      "Maxwell Winters"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amanda Nguyen",
      "Juri Solano"
     ],
     "a": [
      "Maria Keselman",
      "Rhys Gardiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Patricia Tuquero",
      "Kenneth Bautista"
     ],
     "a": [
      "Maggie Wang",
      "Alan Weissman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Patricia Tuquero"
     ],
     "a": [
      "Anne Buckley",
      "Alexis Kerven"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amanda Nguyen",
      "Thao Tran"
     ],
     "a": [
      "Jenny Winters",
      "Maria Keselman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ed Amato",
      "Kenneth Bautista"
     ],
     "a": [
      "Andrew Kimmel",
      "Jason Heiselman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Juri Solano",
      "Jebril Guevarra"
     ],
     "a": [
      "Maxwell Winters",
      "Jose Chariez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amanda Nguyen",
      "John Danks"
     ],
     "a": [
      "Alexis Kerven",
      "Jose Chariez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thao Tran",
      "Juri Solano"
     ],
     "a": [
      "Jenny Winters",
      "Rhys Gardiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Appleton",
      "Kenneth Bautista"
     ],
     "a": [
      "Joan Harris",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Patricia Tuquero",
      "Jebril Guevarra"
     ],
     "a": [
      "Maggie Wang",
      "Jason Heiselman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Patricia Tuquero"
     ],
     "a": [
      "Jenny Winters",
      "Anne Buckley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Thao Tran",
      "Jessica Kopec"
     ],
     "a": [
      "Maggie Wang",
      "Alexis Kerven"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kenneth Bautista",
      "Jebril Guevarra"
     ],
     "a": [
      "Alan Weissman",
      "Jose Chariez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "John Danks",
      "Ed Amato"
     ],
     "a": [
      "Maxwell Winters",
      "Andrew Kimmel"
     ]
    }
   ],
   "subs": [
    "Maria Keselman"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 651,
   "awayPoints": 611,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robynn Reeder",
      "Prasad Mittapalli"
     ],
     "a": [
      "Lana Engler Carss",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Searby",
      "Yash Mehta"
     ],
     "a": [
      "Deb Morisie",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Brittany Riccitiello",
      "Papa Aggrey"
     ],
     "a": [
      "Patricia San Andres",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hailee Kurlander",
      "Robert Hudson"
     ],
     "a": [
      "Suzane Sullivan",
      "Tony Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brittany Riccitiello",
      "Robynn Reeder"
     ],
     "a": [
      "Lana Engler Carss",
      "Robin Pagotto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Wendy Braithwaite",
      "Rachel Searby"
     ],
     "a": [
      "Patricia San Andres",
      "Deb Morisie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Prasad Mittapalli",
      "Yash Mehta"
     ],
     "a": [
      "Adam Werwie",
      "Marcus Burritt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Froilan Sunga",
      "Papa Aggrey"
     ],
     "a": [
      "Victor Salicetti",
      "Tony Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brittany Riccitiello",
      "Yash Mehta"
     ],
     "a": [
      "Lana Engler Carss",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hailee Kurlander",
      "Robert Hudson"
     ],
     "a": [
      "Suzane Sullivan",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Wendy Braithwaite",
      "Papa Aggrey"
     ],
     "a": [
      "Deb Morisie",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robynn Reeder",
      "Miles Townsend"
     ],
     "a": [
      "Diahann Ouly",
      "Howie Knudson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Searby",
      "Brittany Riccitiello"
     ],
     "a": [
      "Suzane Sullivan",
      "Deb Morisie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Wendy Braithwaite",
      "Robynn Reeder"
     ],
     "a": [
      "Lana Engler Carss",
      "Patricia San Andres"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Prasad Mittapalli",
      "Yash Mehta"
     ],
     "a": [
      "Marcus Burritt",
      "Adam Werwie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Froilan Sunga",
      "Miles Townsend"
     ],
     "a": [
      "Victor Salicetti",
      "Tony Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rachel Searby",
      "Yash Mehta"
     ],
     "a": [
      "Lana Engler Carss",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Brittany Riccitiello",
      "Prasad Mittapalli"
     ],
     "a": [
      "Deb Morisie",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Robynn Reeder",
      "Papa Aggrey"
     ],
     "a": [
      "Patricia San Andres",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hailee Kurlander",
      "Miles Townsend"
     ],
     "a": [
      "Robin Pagotto",
      "Tony Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Searby",
      "Hailee Kurlander"
     ],
     "a": [
      "Lana Engler Carss",
      "Diahann Ouly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robynn Reeder",
      "Wendy Braithwaite"
     ],
     "a": [
      "Patricia San Andres",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Prasad Mittapalli",
      "Froilan Sunga"
     ],
     "a": [
      "Adam Werwie",
      "Tony Wong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yash Mehta",
      "Robert Hudson"
     ],
     "a": [
      "Marcus Burritt",
      "Howie Knudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rachel Searby",
      "Papa Aggrey"
     ],
     "a": [
      "Robin Pagotto",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hailee Kurlander",
      "Yash Mehta"
     ],
     "a": [
      "Diahann Ouly",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Wendy Braithwaite",
      "Robert Hudson"
     ],
     "a": [
      "Suzane Sullivan",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Brittany Riccitiello",
      "Froilan Sunga"
     ],
     "a": [
      "Deb Morisie",
      "Howie Knudson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Brittany Riccitiello",
      "Wendy Braithwaite"
     ],
     "a": [
      "Lana Engler Carss",
      "Deb Morisie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hailee Kurlander",
      "Rachel Searby"
     ],
     "a": [
      "Diahann Ouly",
      "Robin Pagotto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Prasad Mittapalli",
      "Froilan Sunga"
     ],
     "a": [
      "Adam Werwie",
      "Victor Salicetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Miles Townsend",
      "Papa Aggrey"
     ],
     "a": [
      "Marcus Burritt",
      "Howie Knudson"
     ]
    }
   ],
   "subs": [
    "Deb Morisie",
    "Lana Engler Carss"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball HQ",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 514,
   "awayPoints": 669,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michele Sagurton",
      "Brandon Helicher"
     ],
     "a": [
      "Jaymie Vincelli",
      "Darren Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mayra Tuba",
      "Alex Glushek"
     ],
     "a": [
      "Barbara Fontanella",
      "James Gillick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michelle Cobos",
      "David Burke"
     ],
     "a": [
      "Diana Tabia",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jade Chin",
      "Lukas Chrebet"
     ],
     "a": [
      "Agnieszka Procner",
      "Jonathan Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachael Osetkowski",
      "Jade Chin"
     ],
     "a": [
      "Agnieszka Procner",
      "Diana Tabia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michelle Cobos",
      "Mayra Tuba"
     ],
     "a": [
      "Jaymie Vincelli",
      "Barbara Fontanella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alex Glushek",
      "David Burke"
     ],
     "a": [
      "Jonathan Wong",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ricardo Fontanilla",
      "Brandon Helicher"
     ],
     "a": [
      "Matthew Ferrante",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michele Sagurton",
      "Ricardo Fontanilla"
     ],
     "a": [
      "Diana Tabia",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jade Chin",
      "Alex Glushek"
     ],
     "a": [
      "Taylor Leuck",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rachael Osetkowski",
      "David Burke"
     ],
     "a": [
      "Jaymie Vincelli",
      "Darren Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michelle Cobos",
      "Lukas Chrebet"
     ],
     "a": [
      "Agnieszka Procner",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mayra Tuba",
      "Rachael Osetkowski"
     ],
     "a": [
      "Diana Tabia",
      "Julianna Rodrigues"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michelle Cobos",
      "Michele Sagurton"
     ],
     "a": [
      "Jaymie Vincelli",
      "Barbara Fontanella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Burke",
      "Ricardo Fontanilla"
     ],
     "a": [
      "Jonathan Wong",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lukas Chrebet",
      "Brandon Helicher"
     ],
     "a": [
      "Darren Zheng",
      "James Gillick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michele Sagurton",
      "Brandon Helicher"
     ],
     "a": [
      "Julianna Rodrigues",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rachael Osetkowski",
      "Lukas Chrebet"
     ],
     "a": [
      "Agnieszka Procner",
      "Darren Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mayra Tuba",
      "Alex Glushek"
     ],
     "a": [
      "Taylor Leuck",
      "Jonathan Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jade Chin",
      "Ricardo Fontanilla"
     ],
     "a": [
      "Jaymie Vincelli",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rachael Osetkowski",
      "Michele Sagurton"
     ],
     "a": [
      "Taylor Leuck",
      "Barbara Fontanella"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michelle Cobos",
      "Jade Chin"
     ],
     "a": [
      "Diana Tabia",
      "Julianna Rodrigues"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lukas Chrebet",
      "Ricardo Fontanilla"
     ],
     "a": [
      "Kenneth Ocasio",
      "James Gillick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Alex Glushek",
      "David Burke"
     ],
     "a": [
      "Tomas Ruiz",
      "Darren Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mayra Tuba",
      "David Burke"
     ],
     "a": [
      "Julianna Rodrigues",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jade Chin",
      "Lukas Chrebet"
     ],
     "a": [
      "Barbara Fontanella",
      "James Gillick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michelle Cobos",
      "Brandon Helicher"
     ],
     "a": [
      "Agnieszka Procner",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Rachael Osetkowski",
      "Alex Glushek"
     ],
     "a": [
      "Taylor Leuck",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Michelle Cobos",
      "Jade Chin"
     ],
     "a": [
      "Julianna Rodrigues",
      "Taylor Leuck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mayra Tuba",
      "Michele Sagurton"
     ],
     "a": [
      "Diana Tabia",
      "Agnieszka Procner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Burke",
      "Lukas Chrebet"
     ],
     "a": [
      "Matthew Ferrante",
      "Jonathan Wong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brandon Helicher",
      "Ricardo Fontanilla"
     ],
     "a": [
      "James Gillick",
      "Kenneth Ocasio"
     ]
    }
   ],
   "subs": [
    "Agnieszka Procner"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Palace",
   "time": "2026-09-14T19:00:00",
   "complete": true,
   "homePoints": 663,
   "awayPoints": 566,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hee Kim",
      "Jonathan Nieves"
     ],
     "a": [
      "Alexis Kerven",
      "Rhys Gardiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Nikki Nigro",
      "Ryan Peixoto"
     ],
     "a": [
      "Anne Buckley",
      "Andrew Kimmel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suki Wong",
      "Reuben Zilber"
     ],
     "a": [
      "Annica Jin-Hendel",
      "Brian Seligson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Charlene De Lara",
      "Rob Stever"
     ],
     "a": [
      "Jenny Winters",
      "Jose Chariez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Charlene De Lara",
      "Nikki Nigro"
     ],
     "a": [
      "Alexis Kerven",
      "Anne Buckley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Hee Kim",
      "Suki Wong"
     ],
     "a": [
      "Line Barlow",
      "Joan Harris"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ryan Peixoto",
      "Matthew Marciani"
     ],
     "a": [
      "Rhys Gardiner",
      "Brian Seligson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rob Stever",
      "Jonathan Nieves"
     ],
     "a": [
      "Jason Heiselman",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Charlene De Lara",
      "Ryan Peixoto"
     ],
     "a": [
      "Annica Jin-Hendel",
      "Andrew Kimmel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nikki Nigro",
      "Reuben Zilber"
     ],
     "a": [
      "Alexis Kerven",
      "Jason Heiselman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Suki Wong",
      "Rob Stever"
     ],
     "a": [
      "Joan Harris",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hee Kim",
      "Matthew Marciani"
     ],
     "a": [
      "Jenny Winters",
      "Jose Chariez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suki Wong",
      "Charlene De Lara"
     ],
     "a": [
      "Line Barlow",
      "Annica Jin-Hendel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hee Kim",
      "Nikki Nigro"
     ],
     "a": [
      "Jenny Winters",
      "Joan Harris"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Nieves",
      "Reuben Zilber"
     ],
     "a": [
      "Andrew Kimmel",
      "Brian Seligson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rob Stever",
      "Matthew Marciani"
     ],
     "a": [
      "Rhys Gardiner",
      "Jose Chariez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Ryan Peixoto"
     ],
     "a": [
      "Anne Buckley",
      "Rhys Gardiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Charlene De Lara",
      "Reuben Zilber"
     ],
     "a": [
      "Line Barlow",
      "Brian Seligson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Hee Kim",
      "Jonathan Nieves"
     ],
     "a": [
      "Alexis Kerven",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suki Wong",
      "Rob Stever"
     ],
     "a": [
      "Jenny Winters",
      "Jason Heiselman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Nikki Nigro",
      "Hee Kim"
     ],
     "a": [
      "Annica Jin-Hendel",
      "Anne Buckley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Charlene De Lara",
      "Suki Wong"
     ],
     "a": [
      "Line Barlow",
      "Joan Harris"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Matthew Marciani",
      "Jonathan Nieves"
     ],
     "a": [
      "Andrew Kimmel",
      "Alan Weissman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rob Stever",
      "Ryan Peixoto"
     ],
     "a": [
      "Jose Chariez",
      "Jason Heiselman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Charlene De Lara",
      "Reuben Zilber"
     ],
     "a": [
      "Alexis Kerven",
      "Rhys Gardiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nikki Nigro",
      "Matthew Marciani"
     ],
     "a": [
      "Anne Buckley",
      "Brian Seligson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Suki Wong",
      "Ryan Peixoto"
     ],
     "a": [
      "Annica Jin-Hendel",
      "Jason Heiselman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hee Kim",
      "Rob Stever"
     ],
     "a": [
      "Joan Harris",
      "Jose Chariez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hee Kim",
      "Charlene De Lara"
     ],
     "a": [
      "Anne Buckley",
      "Alexis Kerven"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Nikki Nigro",
      "Suki Wong"
     ],
     "a": [
      "Jenny Winters",
      "Line Barlow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rob Stever",
      "Reuben Zilber"
     ],
     "a": [
      "Brian Seligson",
      "Rhys Gardiner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ryan Peixoto",
      "Jonathan Nieves"
     ],
     "a": [
      "Andrew Kimmel",
      "Alan Weissman"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Bounce Philly",
   "time": "2026-09-14T19:00:00",
   "complete": true,
   "homePoints": 607,
   "awayPoints": 602,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Diahann Ouly",
      "Peter Cao"
     ],
     "a": [
      "Evelyn Geating",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Patricia San Andres",
      "Marcus Burritt"
     ],
     "a": [
      "Jennifer Lynch",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Halimah Maideen",
      "Adam Werwie"
     ],
     "a": [
      "Meg Kelly",
      "Matt Soliman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzane Sullivan",
      "Victor Salicetti"
     ],
     "a": [
      "Minjel Shah",
      "Christopher Moscony"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patricia San Andres",
      "Suzane Sullivan"
     ],
     "a": [
      "Evelyn Geating",
      "Jennifer Lynch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Halimah Maideen",
      "Diahann Ouly"
     ],
     "a": [
      "Meg Kelly",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Adam Werwie",
      "Victor Salicetti"
     ],
     "a": [
      "William Waggenspack",
      "Dung Pham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marcus Burritt",
      "Peter Cao"
     ],
     "a": [
      "Matt Soliman",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Deb Morisie",
      "Victor Salicetti"
     ],
     "a": [
      "Jennifer Lynch",
      "Christopher Moscony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Patricia San Andres",
      "Howie Knudson"
     ],
     "a": [
      "Minjel Shah",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Halimah Maideen",
      "Marcus Burritt"
     ],
     "a": [
      "Evelyn Geating",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzane Sullivan",
      "Adam Werwie"
     ],
     "a": [
      "Lisa Dinh",
      "Dung Pham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Patricia San Andres",
      "Deb Morisie"
     ],
     "a": [
      "Jennifer Lynch",
      "Minjel Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Halimah Maideen",
      "Robin Pagotto"
     ],
     "a": [
      "Lisa Dinh",
      "Meg Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marcus Burritt",
      "Victor Salicetti"
     ],
     "a": [
      "William Waggenspack",
      "Matt Soliman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Adam Werwie",
      "Peter Cao"
     ],
     "a": [
      "Christopher Moscony",
      "Dung Pham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Deb Morisie",
      "Marcus Burritt"
     ],
     "a": [
      "Evelyn Geating",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robin Pagotto",
      "Howie Knudson"
     ],
     "a": [
      "Meg Kelly",
      "Dung Pham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Patricia San Andres",
      "Victor Salicetti"
     ],
     "a": [
      "Minjel Shah",
      "Christopher Moscony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Diahann Ouly",
      "Peter Cao"
     ],
     "a": [
      "Lisa Dinh",
      "Matt Soliman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Diahann Ouly",
      "Suzane Sullivan"
     ],
     "a": [
      "Jennifer Lynch",
      "Minjel Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Halimah Maideen",
      "Deb Morisie"
     ],
     "a": [
      "Evelyn Geating",
      "Meg Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Howie Knudson",
      "Peter Cao"
     ],
     "a": [
      "William Waggenspack",
      "Christopher Moscony"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Marcus Burritt",
      "Adam Werwie"
     ],
     "a": [
      "Brad De Jesus",
      "Matt Soliman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Robin Pagotto",
      "Marcus Burritt"
     ],
     "a": [
      "Evelyn Geating",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia San Andres",
      "Adam Werwie"
     ],
     "a": [
      "Jennifer Lynch",
      "Matt Soliman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzane Sullivan",
      "Victor Salicetti"
     ],
     "a": [
      "Meg Kelly",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Diahann Ouly",
      "Howie Knudson"
     ],
     "a": [
      "Lisa Dinh",
      "Dung Pham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzane Sullivan",
      "Halimah Maideen"
     ],
     "a": [
      "Evelyn Geating",
      "Jennifer Lynch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Robin Pagotto",
      "Deb Morisie"
     ],
     "a": [
      "Lisa Dinh",
      "Minjel Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Adam Werwie",
      "Victor Salicetti"
     ],
     "a": [
      "William Waggenspack",
      "Brad De Jesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marcus Burritt",
      "Howie Knudson"
     ],
     "a": [
      "Christopher Moscony",
      "Dung Pham"
     ]
    }
   ],
   "subs": [
    "Deb Morisie",
    "Christopher Moscony",
    "Dung Pham"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Flemington",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-14T19:00:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 428,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jessica Neglia",
      "Butch Kreilick"
     ],
     "a": [
      "Chantya Roberson",
      "Alexander Masotti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sarah Stangota",
      "Paul Matzko"
     ],
     "a": [
      "Jade Chin",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Meghan Klein",
      "Jeff Kesner"
     ],
     "a": [
      "Michelle Cobos",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeannine Calhoun",
      "Eric Brezina"
     ],
     "a": [
      "Michele Sagurton",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Meghan Klein",
      "Margo Langer"
     ],
     "a": [
      "Michelle Cobos",
      "Michele Sagurton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jeannine Calhoun",
      "Gail Hannagan"
     ],
     "a": [
      "Chantya Roberson",
      "Jade Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Eric Brezina",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Barry Lerner",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jeff Kesner",
      "Paul Matzko"
     ],
     "a": [
      "Alex Glushek",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 3,
     "h": [
      "Meghan Klein",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Chantya Roberson",
      "Alexander Masotti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jessica Neglia",
      "Jeff Kesner"
     ],
     "a": [
      "Michele Sagurton",
      "Barry Lerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gail Hannagan",
      "Paul Matzko"
     ],
     "a": [
      "Jade Chin",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarah Stangota",
      "Butch Kreilick"
     ],
     "a": [
      "Michelle Cobos",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeannine Calhoun",
      "Sarah Stangota"
     ],
     "a": [
      "Jade Chin",
      "Michele Sagurton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Meghan Klein",
      "Gail Hannagan"
     ],
     "a": [
      "Chantya Roberson",
      "Michelle Cobos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Brezina",
      "Butch Kreilick"
     ],
     "a": [
      "Barry Lerner",
      "Alexander Masotti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lakshmikanth Chaluvadi",
      "Paul Matzko"
     ],
     "a": [
      "David Burke",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jessica Neglia",
      "Butch Kreilick"
     ],
     "a": [
      "Michele Sagurton",
      "Alexander Masotti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Margo Langer",
      "Jeff Kesner"
     ],
     "a": [
      "Chantya Roberson",
      "Barry Lerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Meghan Klein",
      "Eric Brezina"
     ],
     "a": [
      "Michelle Cobos",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jeannine Calhoun",
      "Paul Matzko"
     ],
     "a": [
      "Jade Chin",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Meghan Klein",
      "Margo Langer"
     ],
     "a": [
      "Chantya Roberson",
      "Michele Sagurton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sarah Stangota",
      "Gail Hannagan"
     ],
     "a": [
      "Michelle Cobos",
      "Jade Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jeff Kesner",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "David Burke",
      "Barry Lerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eric Brezina",
      "Paul Matzko"
     ],
     "a": [
      "Ricardo Fontanilla",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jessica Neglia",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Michelle Cobos",
      "Alexander Masotti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeannine Calhoun",
      "Paul Matzko"
     ],
     "a": [
      "Chantya Roberson",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Margo Langer",
      "Eric Brezina"
     ],
     "a": [
      "Michele Sagurton",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Butch Kreilick"
     ],
     "a": [
      "Jade Chin",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Margo Langer",
      "Jessica Neglia"
     ],
     "a": [
      "Michele Sagurton",
      "Chantya Roberson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeannine Calhoun",
      "Gail Hannagan"
     ],
     "a": [
      "Michelle Cobos",
      "Jade Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeff Kesner",
      "Butch Kreilick"
     ],
     "a": [
      "Barry Lerner",
      "Alexander Masotti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Brezina",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "David Burke",
      "Alex Glushek"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "APC Garden State",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 631,
   "awayPoints": 590,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrea Galanti",
      "Taylor Runyen"
     ],
     "a": [
      "Adele Hackney",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brandi Horowitz",
      "David Horowitz"
     ],
     "a": [
      "Stephanie Taxter",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michele Costigan",
      "Craig Batzar"
     ],
     "a": [
      "Kristin Granath",
      "Jason Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Abby Sprinkel",
      "Jamie West"
     ],
     "a": [
      "Jennifer Guldin",
      "Devin Kenny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Oanh Quach"
     ],
     "a": [
      "Jennifer Guldin",
      "Stephanie Taxter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Abby Sprinkel",
      "Viviane Tran"
     ],
     "a": [
      "Adele Hackney",
      "Haidee Midgley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Inho Andrew Yuh",
      "Craig Batzar"
     ],
     "a": [
      "Peter Hackney",
      "Steven Fernandez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jamie West",
      "Jeff Stephenson"
     ],
     "a": [
      "Nathan Trimmer",
      "Devin Kenny"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "David Horowitz"
     ],
     "a": [
      "Adele Hackney",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brandi Horowitz",
      "Taylor Runyen"
     ],
     "a": [
      "Kristin Granath",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michele Costigan",
      "Inho Andrew Yuh"
     ],
     "a": [
      "Haidee Midgley",
      "Jason Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Oanh Quach",
      "Jeff Stephenson"
     ],
     "a": [
      "Jennifer Guldin",
      "Peter Hackney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Oanh Quach",
      "Viviane Tran"
     ],
     "a": [
      "Adele Hackney",
      "Kristin Granath"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Abby Sprinkel",
      "Brandi Horowitz"
     ],
     "a": [
      "Stephanie Taxter",
      "Haidee Midgley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Inho Andrew Yuh",
      "David Horowitz"
     ],
     "a": [
      "Devin Kenny",
      "Michael Guldin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Craig Batzar",
      "Jamie West"
     ],
     "a": [
      "Peter Hackney",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Taylor Runyen"
     ],
     "a": [
      "Jennifer Guldin",
      "Devin Kenny"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michele Costigan",
      "David Horowitz"
     ],
     "a": [
      "Kristin Granath",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Abby Sprinkel",
      "Craig Batzar"
     ],
     "a": [
      "Haidee Midgley",
      "Peter Hackney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Viviane Tran",
      "Jeff Stephenson"
     ],
     "a": [
      "Stephanie Taxter",
      "Michael Guldin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michele Costigan",
      "Brandi Horowitz"
     ],
     "a": [
      "Stephanie Taxter",
      "Jennifer Guldin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Oanh Quach",
      "Viviane Tran"
     ],
     "a": [
      "Adele Hackney",
      "Kristin Granath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Inho Andrew Yuh",
      "Jamie West"
     ],
     "a": [
      "Devin Kenny",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Craig Batzar",
      "Taylor Runyen"
     ],
     "a": [
      "Steven Fernandez",
      "Jason Rosenberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Jamie West"
     ],
     "a": [
      "Jennifer Guldin",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michele Costigan",
      "David Horowitz"
     ],
     "a": [
      "Haidee Midgley",
      "Peter Hackney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brandi Horowitz",
      "Jeff Stephenson"
     ],
     "a": [
      "Stephanie Taxter",
      "Devin Kenny"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Abby Sprinkel",
      "Taylor Runyen"
     ],
     "a": [
      "Adele Hackney",
      "Jason Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Galanti",
      "Oanh Quach"
     ],
     "a": [
      "Jennifer Guldin",
      "Adele Hackney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Abby Sprinkel",
      "Viviane Tran"
     ],
     "a": [
      "Kristin Granath",
      "Haidee Midgley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Inho Andrew Yuh",
      "Taylor Runyen"
     ],
     "a": [
      "Jason Rosenberg",
      "Steven Fernandez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Craig Batzar",
      "Jeff Stephenson"
     ],
     "a": [
      "Michael Guldin",
      "Nathan Trimmer"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Pickle House",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 428,
   "awayPoints": 650,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "Rakesh Roy"
     ],
     "a": [
      "Kimberley Levins",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Marina Volpe",
      "Ross Bienstock"
     ],
     "a": [
      "Zyanya Flores",
      "Chris Balta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Morgan Valencia King"
     ],
     "a": [
      "Alina Allakhveranova",
      "Chris Alworth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Gabe Nacion"
     ],
     "a": [
      "Allison Sobieski",
      "James Cooper"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zoe Zapf",
      "Katie O'Mara"
     ],
     "a": [
      "Alina Allakhveranova",
      "Zyanya Flores"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Kimberley Levins",
      "Allison Sobieski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gabe Nacion",
      "Morgan Valencia King"
     ],
     "a": [
      "Michael Alfaro",
      "Lionell Matthews"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ross Bienstock",
      "Alexander Babatunde"
     ],
     "a": [
      "Chris Balta",
      "Kevin Altieri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zoe Zapf",
      "Alexander Babatunde"
     ],
     "a": [
      "Vanessa Tortorice",
      "James Cooper"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "Rakesh Roy"
     ],
     "a": [
      "Alina Allakhveranova",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Emily Sowa",
      "James Yu"
     ],
     "a": [
      "Kimberley Levins",
      "Kevin Altieri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Marina Volpe",
      "Ross Bienstock"
     ],
     "a": [
      "Zyanya Flores",
      "Lionell Matthews"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Marina Volpe",
      "Emily Sowa"
     ],
     "a": [
      "Vanessa Tortorice",
      "Alina Allakhveranova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Jen Ogorzat",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Zyanya Flores",
      "Allison Sobieski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Morgan Valencia King",
      "Gabe Nacion"
     ],
     "a": [
      "James Cooper",
      "Kevin Altieri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rakesh Roy",
      "James Yu"
     ],
     "a": [
      "Chris Balta",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Gabe Nacion"
     ],
     "a": [
      "Kimberley Levins",
      "James Cooper"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Zoe Zapf",
      "Alexander Babatunde"
     ],
     "a": [
      "Zyanya Flores",
      "Kevin Altieri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Sowa",
      "James Yu"
     ],
     "a": [
      "Allison Sobieski",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Morgan Valencia King"
     ],
     "a": [
      "Vanessa Tortorice",
      "Chris Alworth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Marina Volpe"
     ],
     "a": [
      "Alina Allakhveranova",
      "Kimberley Levins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Zoe Zapf",
      "Katie O'Mara"
     ],
     "a": [
      "Zyanya Flores",
      "Vanessa Tortorice"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ross Bienstock",
      "Alexander Babatunde"
     ],
     "a": [
      "Kevin Altieri",
      "Chris Alworth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rakesh Roy",
      "James Yu"
     ],
     "a": [
      "James Cooper",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jen Ogorzat",
      "Rakesh Roy"
     ],
     "a": [
      "Allison Sobieski",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Marina Volpe",
      "Morgan Valencia King"
     ],
     "a": [
      "Alina Allakhveranova",
      "Chris Alworth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Gabe Nacion"
     ],
     "a": [
      "Kimberley Levins",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "Alexander Babatunde"
     ],
     "a": [
      "Vanessa Tortorice",
      "Chris Balta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Marina Volpe",
      "Zoe Zapf"
     ],
     "a": [
      "Zyanya Flores",
      "Alina Allakhveranova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jen Ogorzat",
      "Emily Sowa"
     ],
     "a": [
      "Kimberley Levins",
      "Vanessa Tortorice"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rakesh Roy",
      "Ross Bienstock"
     ],
     "a": [
      "Chris Balta",
      "Chris Alworth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Morgan Valencia King",
      "James Yu"
     ],
     "a": [
      "James Cooper",
      "Michael Alfaro"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "ACE Downingtown",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 631,
   "awayPoints": 598,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jane Pascua",
      "Taylor Newell"
     ],
     "a": [
      "Brittany Riccitiello",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jasmine Nguyen",
      "Raymond Duong"
     ],
     "a": [
      "Diana Dibuccio",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Esterlina Wiest",
      "Ismael Hernandez"
     ],
     "a": [
      "Hailee Kurlander",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maridel Ablaza",
      "Holden Smith"
     ],
     "a": [
      "Robynn Reeder",
      "Miles Townsend"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jane Pascua",
      "Esterlina Wiest"
     ],
     "a": [
      "Brittany Riccitiello",
      "Robynn Reeder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jasmine Nguyen",
      "Katelyn Carretas"
     ],
     "a": [
      "Diana Dibuccio",
      "Rachel Searby"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Raymond Duong",
      "Ismael Hernandez"
     ],
     "a": [
      "Yash Mehta",
      "Robert Hudson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kevin Algarme",
      "Holden Smith"
     ],
     "a": [
      "Prasad Mittapalli",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jane Pascua",
      "Taylor Newell"
     ],
     "a": [
      "Brittany Riccitiello",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Esterlina Wiest",
      "Ismael Hernandez"
     ],
     "a": [
      "Rachel Searby",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katelyn Carretas",
      "Ryan Ablaza"
     ],
     "a": [
      "Diana Dibuccio",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Maridel Ablaza",
      "Kevin Algarme"
     ],
     "a": [
      "Robynn Reeder",
      "Miles Townsend"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jane Pascua",
      "Jasmine Nguyen"
     ],
     "a": [
      "Robynn Reeder",
      "Brittany Riccitiello"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maridel Ablaza",
      "Katelyn Carretas"
     ],
     "a": [
      "Rachel Searby",
      "Hailee Kurlander"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kevin Algarme",
      "Raymond Duong"
     ],
     "a": [
      "Yash Mehta",
      "Robert Hudson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Holden Smith",
      "Taylor Newell"
     ],
     "a": [
      "Prasad Mittapalli",
      "Miles Townsend"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Katelyn Carretas",
      "Taylor Newell"
     ],
     "a": [
      "Brittany Riccitiello",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Maridel Ablaza",
      "Ryan Ablaza"
     ],
     "a": [
      "Robynn Reeder",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Esterlina Wiest",
      "Raymond Duong"
     ],
     "a": [
      "Diana Dibuccio",
      "Robert Hudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jasmine Nguyen",
      "Holden Smith"
     ],
     "a": [
      "Rachel Searby",
      "Miles Townsend"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Maridel Ablaza",
      "Esterlina Wiest"
     ],
     "a": [
      "Diana Dibuccio",
      "Hailee Kurlander"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jane Pascua",
      "Katelyn Carretas"
     ],
     "a": [
      "Rachel Searby",
      "Brittany Riccitiello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kevin Algarme",
      "Taylor Newell"
     ],
     "a": [
      "Karthik Duraiyappan",
      "Yash Mehta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ismael Hernandez",
      "Ryan Ablaza"
     ],
     "a": [
      "Prasad Mittapalli",
      "Robert Hudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jane Pascua",
      "Kevin Algarme"
     ],
     "a": [
      "Diana Dibuccio",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jasmine Nguyen",
      "Holden Smith"
     ],
     "a": [
      "Robynn Reeder",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Katelyn Carretas",
      "Ryan Ablaza"
     ],
     "a": [
      "Rachel Searby",
      "Miles Townsend"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Maridel Ablaza",
      "Ismael Hernandez"
     ],
     "a": [
      "Hailee Kurlander",
      "Robert Hudson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Maridel Ablaza",
      "Esterlina Wiest"
     ],
     "a": [
      "Brittany Riccitiello",
      "Rachel Searby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jane Pascua",
      "Jasmine Nguyen"
     ],
     "a": [
      "Robynn Reeder",
      "Hailee Kurlander"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kevin Algarme",
      "Holden Smith"
     ],
     "a": [
      "Yash Mehta",
      "Miles Townsend"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Raymond Duong",
      "Ismael Hernandez"
     ],
     "a": [
      "Prasad Mittapalli",
      "Karthik Duraiyappan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "PickleRage Union County Net Ninjas",
   "away": "Open Play",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 671,
   "awayPoints": 524,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kellie Roshak",
      "Freddy Li"
     ],
     "a": [
      "Lily Hahn",
      "Luan Vo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kerry Eskay",
      "Cesar Alvarez"
     ],
     "a": [
      "Nancy Pace",
      "Giang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Huifang Yao",
      "Brandon Agudelo"
     ],
     "a": [
      "Charishma Serrano",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Holly Siu",
      "Carlos Echenique"
     ],
     "a": [
      "Lili Zhang",
      "Joseph Korom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eva Rodriguez",
      "Kellie Roshak"
     ],
     "a": [
      "Lily Hahn",
      "Nancy Pace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Cassie Lou",
      "Huifang Yao"
     ],
     "a": [
      "Lili Zhang",
      "Udita Agarwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ],
     "a": [
      "Giang Nguyen",
      "Luan Vo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carlos Echenique",
      "Alex Sanchez"
     ],
     "a": [
      "Joseph Korom",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ],
     "a": [
      "Lily Hahn",
      "Giang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Holly Siu",
      "Jayson Lee"
     ],
     "a": [
      "Udita Agarwala",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kerry Eskay",
      "Carlos Echenique"
     ],
     "a": [
      "Lili Zhang",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Cassie Lou",
      "Alex Sanchez"
     ],
     "a": [
      "Charishma Serrano",
      "Joseph Korom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Huifang Yao",
      "Kerry Eskay"
     ],
     "a": [
      "Nancy Pace",
      "Charishma Serrano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cassie Lou",
      "Holly Siu"
     ],
     "a": [
      "Udita Agarwala",
      "Yawen Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Freddy Li",
      "Jayson Lee"
     ],
     "a": [
      "Luan Vo",
      "Joseph Korom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brandon Agudelo",
      "Carlos Echenique"
     ],
     "a": [
      "Anbu Cheeralan",
      "Jeff Pzena"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ],
     "a": [
      "Lily Hahn",
      "Giang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cassie Lou",
      "Brandon Agudelo"
     ],
     "a": [
      "Nancy Pace",
      "Jeff Pzena"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Holly Siu",
      "Alex Sanchez"
     ],
     "a": [
      "Yawen Zhang",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Huifang Yao",
      "Jayson Lee"
     ],
     "a": [
      "Udita Agarwala",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kellie Roshak",
      "Holly Siu"
     ],
     "a": [
      "Lily Hahn",
      "Nancy Pace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eva Rodriguez",
      "Kerry Eskay"
     ],
     "a": [
      "Yawen Zhang",
      "Charishma Serrano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cesar Alvarez",
      "Freddy Li"
     ],
     "a": [
      "Giang Nguyen",
      "Luan Vo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alex Sanchez",
      "Jayson Lee"
     ],
     "a": [
      "Jeff Pzena",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kellie Roshak",
      "Freddy Li"
     ],
     "a": [
      "Lily Hahn",
      "Luan Vo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Huifang Yao",
      "Brandon Agudelo"
     ],
     "a": [
      "Udita Agarwala",
      "Jeff Pzena"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Eva Rodriguez",
      "Alex Sanchez"
     ],
     "a": [
      "Yawen Zhang",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cassie Lou",
      "Carlos Echenique"
     ],
     "a": [
      "Charishma Serrano",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eva Rodriguez",
      "Kellie Roshak"
     ],
     "a": [
      "Lily Hahn",
      "Charishma Serrano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Huifang Yao",
      "Kerry Eskay"
     ],
     "a": [
      "Lili Zhang",
      "Nancy Pace"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ],
     "a": [
      "Giang Nguyen",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Carlos Echenique",
      "Jayson Lee"
     ],
     "a": [
      "Joseph Korom",
      "Jeff Pzena"
     ]
    }
   ],
   "subs": [
    "Yawen Zhang",
    "Holly Siu"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Monroe",
   "away": "Pickleball HQ",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 635,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Kelly Aylward",
      "Stephen Fredericksen"
     ],
     "a": [
      "Barbara Fontanella",
      "James Gillick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Aidan Fredericks"
     ],
     "a": [
      "Julianna Rodrigues",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Terri Pflueger",
      "Sean Greener"
     ],
     "a": [
      "Jasmine Ho",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Liane Feyas",
      "Mike Hardy"
     ],
     "a": [
      "Jillian Sorrentino",
      "Aseem Sharma"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Melanie Gibson",
      "Catherine Malabanan"
     ],
     "a": [
      "Barbara Fontanella",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Liane Feyas",
      "Kelly Aylward"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jillian Sorrentino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Aidan Fredericks",
      "Jason Paderon"
     ],
     "a": [
      "Tomas Ruiz",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sean Greener",
      "Mike Hardy"
     ],
     "a": [
      "Aseem Sharma",
      "David Abiog"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Linda Seemann",
      "Stephen Fredericksen"
     ],
     "a": [
      "Diana Tabia",
      "David Abiog"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Catherine Malabanan",
      "Aidan Fredericks"
     ],
     "a": [
      "Julianna Rodrigues",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Aylward",
      "Jason Paderon"
     ],
     "a": [
      "Jasmine Ho",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "Sean Greener"
     ],
     "a": [
      "Jillian Sorrentino",
      "Aseem Sharma"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Melanie Gibson",
      "Linda Seemann"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jillian Sorrentino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Liane Feyas",
      "Terri Pflueger"
     ],
     "a": [
      "Jasmine Ho",
      "Barbara Fontanella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephen Fredericksen",
      "Aidan Fredericks"
     ],
     "a": [
      "Kenneth Ocasio",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sean Greener",
      "Mike Hardy"
     ],
     "a": [
      "Aseem Sharma",
      "James Gillick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melanie Gibson",
      "Sean Greener"
     ],
     "a": [
      "Diana Tabia",
      "David Abiog"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kelly Aylward",
      "Aidan Fredericks"
     ],
     "a": [
      "Jaymie Vincelli",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Catherine Malabanan",
      "Jason Paderon"
     ],
     "a": [
      "Jasmine Ho",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Liane Feyas",
      "Mike Hardy"
     ],
     "a": [
      "Barbara Fontanella",
      "James Gillick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Linda Seemann",
      "Catherine Malabanan"
     ],
     "a": [
      "Barbara Fontanella",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Liane Feyas",
      "Terri Pflueger"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jasmine Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mike Hardy",
      "Aidan Fredericks"
     ],
     "a": [
      "Matthew Rafaniello",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Stephen Fredericksen",
      "Sean Greener"
     ],
     "a": [
      "Aseem Sharma",
      "James Gillick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Catherine Malabanan",
      "Mike Hardy"
     ],
     "a": [
      "Jasmine Ho",
      "Aseem Sharma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Liane Feyas",
      "Aidan Fredericks"
     ],
     "a": [
      "Julianna Rodrigues",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Seemann",
      "Jason Paderon"
     ],
     "a": [
      "Jaymie Vincelli",
      "David Abiog"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Terri Pflueger",
      "Stephen Fredericksen"
     ],
     "a": [
      "Diana Tabia",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelly Aylward",
      "Liane Feyas"
     ],
     "a": [
      "Jaymie Vincelli",
      "Jillian Sorrentino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "Melanie Gibson"
     ],
     "a": [
      "Julianna Rodrigues",
      "Diana Tabia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mike Hardy",
      "Stephen Fredericksen"
     ],
     "a": [
      "Matthew Rafaniello",
      "James Gillick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jason Paderon",
      "Sean Greener"
     ],
     "a": [
      "Tomas Ruiz",
      "David Abiog"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Home Court",
   "away": "PickleRage Union County Pandas",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 589,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Danica Bramschreiber",
      "Marc Matalon"
     ],
     "a": [
      "Amanda Nguyen",
      "Marvin Steller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Alyssa Beattie",
      "Brian Perlowitz"
     ],
     "a": [
      "Rachel Appleton",
      "Juri Solano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristin Larosa",
      "David Schwartz"
     ],
     "a": [
      "Patricia Tuquero",
      "Jebril Guevarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ],
     "a": [
      "Sarah Silva",
      "Ed Amato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Danica Bramschreiber",
      "Andrea Popovich"
     ],
     "a": [
      "Patricia Tuquero",
      "Sarah Silva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rosellen Perlowitz",
      "Kristin Larosa"
     ],
     "a": [
      "Thao Tran",
      "Rachel Appleton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Schwartz",
      "Marvin Lao"
     ],
     "a": [
      "Kenneth Bautista",
      "Jebril Guevarra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brian Perlowitz",
      "Andy Pineda"
     ],
     "a": [
      "Ed Amato",
      "Juri Solano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ],
     "a": [
      "Thao Tran",
      "Marvin Steller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Popovich",
      "Andy Pineda"
     ],
     "a": [
      "Amanda Nguyen",
      "Kenneth Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kristin Larosa",
      "Marc Matalon"
     ],
     "a": [
      "Sarah Silva",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Beattie",
      "David Schwartz"
     ],
     "a": [
      "Rachel Appleton",
      "Juri Solano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Danica Bramschreiber",
      "Kristin Larosa"
     ],
     "a": [
      "Rachel Appleton",
      "Patricia Tuquero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rosellen Perlowitz",
      "Alyssa Beattie"
     ],
     "a": [
      "Amanda Nguyen",
      "Thao Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Schwartz",
      "Robert Paniti"
     ],
     "a": [
      "Marvin Steller",
      "Juri Solano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marc Matalon",
      "Marvin Lao"
     ],
     "a": [
      "Ed Amato",
      "Jebril Guevarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danica Bramschreiber",
      "Robert Paniti"
     ],
     "a": [
      "Amanda Nguyen",
      "Marvin Steller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kristin Larosa",
      "Marvin Lao"
     ],
     "a": [
      "Thao Tran",
      "Juri Solano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alyssa Beattie",
      "Andy Pineda"
     ],
     "a": [
      "Rachel Appleton",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Popovich",
      "Brian Perlowitz"
     ],
     "a": [
      "Sarah Silva",
      "Kenneth Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rosellen Perlowitz",
      "Alyssa Beattie"
     ],
     "a": [
      "Sarah Silva",
      "Patricia Tuquero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristin Larosa",
      "Danica Bramschreiber"
     ],
     "a": [
      "Amanda Nguyen",
      "Thao Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Robert Paniti",
      "David Schwartz"
     ],
     "a": [
      "Kenneth Bautista",
      "Marvin Steller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Marc Matalon",
      "Brian Perlowitz"
     ],
     "a": [
      "Juri Solano",
      "Jebril Guevarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Danica Bramschreiber",
      "Brian Perlowitz"
     ],
     "a": [
      "Sarah Silva",
      "Kenneth Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrea Popovich",
      "Andy Pineda"
     ],
     "a": [
      "Amanda Nguyen",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rosellen Perlowitz",
      "David Schwartz"
     ],
     "a": [
      "Thao Tran",
      "Marvin Steller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alyssa Beattie",
      "Marvin Lao"
     ],
     "a": [
      "Patricia Tuquero",
      "Jebril Guevarra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kristin Larosa",
      "Alyssa Beattie"
     ],
     "a": [
      "Amanda Nguyen",
      "Patricia Tuquero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rosellen Perlowitz",
      "Andrea Popovich"
     ],
     "a": [
      "Thao Tran",
      "Rachel Appleton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marc Matalon",
      "Marvin Lao"
     ],
     "a": [
      "Marvin Steller",
      "Juri Solano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Robert Paniti",
      "Andy Pineda"
     ],
     "a": [
      "Kenneth Bautista",
      "Jebril Guevarra"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Players Courtyard",
   "away": "Pickle Juice Blackwood",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 639,
   "awayPoints": 568,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rebecca Woofter",
      "John Waggoner"
     ],
     "a": [
      "Nicole Dunbar",
      "Jason Grote"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kim Kronberger",
      "Robert Courchain"
     ],
     "a": [
      "Cathy Mclaughlin",
      "Adolfo Nicdao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jackie Bowes",
      "Josh Ruble"
     ],
     "a": [
      "Katherine Mott",
      "Lawrence Dipietro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sophie O’Driscoll",
      "Colin Mackey"
     ],
     "a": [
      "Karen Marshall",
      "Michael Van Horn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Elisabeth Marshall",
      "Sophie O’Driscoll"
     ],
     "a": [
      "Michele Iannella",
      "Nicole Dunbar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kim Kronberger",
      "Jamie Walsh"
     ],
     "a": [
      "Trisha Marion",
      "Katherine Mott"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Colin Mackey",
      "Josh Ruble"
     ],
     "a": [
      "Michael Van Horn",
      "Lawrence Dipietro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ryan Benetz",
      "Lee Latini"
     ],
     "a": [
      "Adolfo Nicdao",
      "Kordell Alexander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kim Kronberger",
      "Robert Courchain"
     ],
     "a": [
      "Michele Iannella",
      "Michael Van Horn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jackie Bowes",
      "Josh Ruble"
     ],
     "a": [
      "Karen Marshall",
      "Lawrence Dipietro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rebecca Woofter",
      "John Waggoner"
     ],
     "a": [
      "Nicole Dunbar",
      "Rick Khounlavouth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sophie O’Driscoll",
      "Ryan Benetz"
     ],
     "a": [
      "Trisha Marion",
      "Kordell Alexander"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elisabeth Marshall",
      "Jamie Walsh"
     ],
     "a": [
      "Cathy Mclaughlin",
      "Katherine Mott"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rebecca Woofter",
      "Jackie Bowes"
     ],
     "a": [
      "Karen Marshall",
      "Michele Iannella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robert Courchain",
      "Lee Latini"
     ],
     "a": [
      "Rick Khounlavouth",
      "Adolfo Nicdao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Colin Mackey",
      "John Waggoner"
     ],
     "a": [
      "Lawrence Dipietro",
      "Jason Grote"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sophie O’Driscoll",
      "Ryan Benetz"
     ],
     "a": [
      "Katherine Mott",
      "Kordell Alexander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jackie Bowes",
      "Colin Mackey"
     ],
     "a": [
      "Nicole Dunbar",
      "Lawrence Dipietro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jamie Walsh",
      "Lee Latini"
     ],
     "a": [
      "Karen Marshall",
      "Jason Grote"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kim Kronberger",
      "Josh Ruble"
     ],
     "a": [
      "Trisha Marion",
      "Rick Khounlavouth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sophie O’Driscoll",
      "Elisabeth Marshall"
     ],
     "a": [
      "Michele Iannella",
      "Nicole Dunbar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rebecca Woofter",
      "Jamie Walsh"
     ],
     "a": [
      "Cathy Mclaughlin",
      "Katherine Mott"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "John Waggoner",
      "Colin Mackey"
     ],
     "a": [
      "Rick Khounlavouth",
      "Michael Van Horn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Courchain",
      "Ryan Benetz"
     ],
     "a": [
      "Lawrence Dipietro",
      "Kordell Alexander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jackie Bowes",
      "Lee Latini"
     ],
     "a": [
      "Cathy Mclaughlin",
      "Adolfo Nicdao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rebecca Woofter",
      "Ryan Benetz"
     ],
     "a": [
      "Karen Marshall",
      "Michael Van Horn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kim Kronberger",
      "John Waggoner"
     ],
     "a": [
      "Nicole Dunbar",
      "Lawrence Dipietro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Elisabeth Marshall",
      "Josh Ruble"
     ],
     "a": [
      "Michele Iannella",
      "Rick Khounlavouth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sophie O’Driscoll",
      "Jamie Walsh"
     ],
     "a": [
      "Nicole Dunbar",
      "Katherine Mott"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kim Kronberger",
      "Elisabeth Marshall"
     ],
     "a": [
      "Karen Marshall",
      "Trisha Marion"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Courchain",
      "Lee Latini"
     ],
     "a": [
      "Rick Khounlavouth",
      "Kordell Alexander"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Josh Ruble",
      "Colin Mackey"
     ],
     "a": [
      "Jason Grote",
      "Michael Van Horn"
     ]
    }
   ],
   "subs": [
    "Nicole Dunbar"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Bounce Tempest",
   "away": "Picklr Newark",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 644,
   "awayPoints": 571,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Quynh Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Ashley Altman",
      "Simon Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Claire Nguyen",
      "Jason Nguyen"
     ],
     "a": [
      "Patti Calhoon",
      "Mike Fede"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "Helen Goh",
      "Thang Nguyen"
     ],
     "a": [
      "Lauren Gabat",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mai Chan",
      "Tuan Nguyen"
     ],
     "a": [
      "Kris Miller",
      "Thomas Lum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Juliana Berg"
     ],
     "a": [
      "Kris Miller",
      "Patti Calhoon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Megan Quigley",
      "Mai Chan"
     ],
     "a": [
      "Ashley Altman",
      "Lauren Gabat"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Timothy Lowry",
      "Peter Lien"
     ],
     "a": [
      "Mike Fede",
      "Simon Burns"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tuan Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Bill Dower",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Megan Quigley",
      "Timothy Lowry"
     ],
     "a": [
      "Sandy Duarte",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Mai Chan",
      "Jason Nguyen"
     ],
     "a": [
      "Ashley Altman",
      "Matthew Cohen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Juliana Berg",
      "Thomas Nguyen"
     ],
     "a": [
      "Lauren Gabat",
      "Mike Fede"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Helen Goh",
      "Peter Lien"
     ],
     "a": [
      "Kris Miller",
      "Bill Dower"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mai Chan",
      "Quynh Nguyen"
     ],
     "a": [
      "Ashley Altman",
      "Kris Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Helen Goh",
      "Juliana Berg"
     ],
     "a": [
      "Lauren Gabat",
      "Sandy Duarte"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Timothy Lowry",
      "Thomas Nguyen"
     ],
     "a": [
      "Matthew Cohen",
      "Thomas Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jason Nguyen",
      "Tuan Nguyen"
     ],
     "a": [
      "Bill Dower",
      "Simon Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Megan Quigley",
      "Jason Nguyen"
     ],
     "a": [
      "Sandy Duarte",
      "Matthew Cohen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Quynh Nguyen",
      "Timothy Lowry"
     ],
     "a": [
      "Kris Miller",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Juliana Berg",
      "Thang Nguyen"
     ],
     "a": [
      "Patti Calhoon",
      "Simon Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Peter Lien"
     ],
     "a": [
      "Lauren Gabat",
      "Mike Fede"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Megan Quigley",
      "Helen Goh"
     ],
     "a": [
      "Sandy Duarte",
      "Ashley Altman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mai Chan",
      "Juliana Berg"
     ],
     "a": [
      "Patti Calhoon",
      "Kris Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Tuan Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Bill Dower",
      "Matthew Cohen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Peter Lien",
      "Thang Nguyen"
     ],
     "a": [
      "Mike Fede",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Lauren Gabat",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Mai Chan",
      "Thomas Nguyen"
     ],
     "a": [
      "Sandy Duarte",
      "Simon Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Megan Quigley",
      "Timothy Lowry"
     ],
     "a": [
      "Ashley Altman",
      "Matthew Cohen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Quynh Nguyen",
      "Jason Nguyen"
     ],
     "a": [
      "Patti Calhoon",
      "Mike Fede"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Megan Quigley",
      "Quynh Nguyen"
     ],
     "a": [
      "Lauren Gabat",
      "Sandy Duarte"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Helen Goh"
     ],
     "a": [
      "Kris Miller",
      "Ashley Altman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tuan Nguyen",
      "Peter Lien"
     ],
     "a": [
      "Thomas Lum",
      "Mike Fede"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Timothy Lowry",
      "Thomas Nguyen"
     ],
     "a": [
      "Bill Dower",
      "Matthew Cohen"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Flemington",
   "away": "Pickleball HQ",
   "time": "2026-09-21T19:00:00",
   "complete": true,
   "homePoints": 637,
   "awayPoints": 586,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jessica Wormeck",
      "Gene Stahl"
     ],
     "a": [
      "Agnieszka Procner",
      "Jonathan Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Meghan Klein",
      "Mark Wenstrom"
     ],
     "a": [
      "Taylor Leuck",
      "Aseem Sharma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gail Hannagan",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Diana Tabia",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Stangota",
      "Butch Kreilick"
     ],
     "a": [
      "Jasmine Ho",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jessica Wormeck",
      "Meghan Klein"
     ],
     "a": [
      "Jasmine Ho",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Sarah Stangota",
      "Kelly Bowers"
     ],
     "a": [
      "Julianna Rodrigues",
      "Diana Tabia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gene Stahl",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Kenneth Ocasio",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tom Dominczyk",
      "Mark Wenstrom"
     ],
     "a": [
      "Matthew Ferrante",
      "Aseem Sharma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Meghan Klein",
      "Gene Stahl"
     ],
     "a": [
      "Julianna Rodrigues",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gail Hannagan",
      "Mark Wenstrom"
     ],
     "a": [
      "Taylor Leuck",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jeannine Calhoun",
      "Tom Dominczyk"
     ],
     "a": [
      "Jaymie Vincelli",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jessica Wormeck",
      "Butch Kreilick"
     ],
     "a": [
      "Agnieszka Procner",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelly Bowers",
      "Jeannine Calhoun"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gail Hannagan",
      "Jessica Wormeck"
     ],
     "a": [
      "Diana Tabia",
      "Agnieszka Procner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mark Wenstrom",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Kenneth Ocasio",
      "Aseem Sharma"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Butch Kreilick",
      "Tom Dominczyk"
     ],
     "a": [
      "Jonathan Wong",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeannine Calhoun",
      "Gene Stahl"
     ],
     "a": [
      "Julianna Rodrigues",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelly Bowers",
      "Tom Dominczyk"
     ],
     "a": [
      "Taylor Leuck",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Meghan Klein",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Jaymie Vincelli",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gail Hannagan",
      "Butch Kreilick"
     ],
     "a": [
      "Jasmine Ho",
      "Jonathan Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Meghan Klein",
      "Jessica Wormeck"
     ],
     "a": [
      "Jasmine Ho",
      "Diana Tabia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kelly Bowers",
      "Gail Hannagan"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Butch Kreilick",
      "Gene Stahl"
     ],
     "a": [
      "Tomas Ruiz",
      "Jonathan Wong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lakshmikanth Chaluvadi",
      "Mark Wenstrom"
     ],
     "a": [
      "Matthew Ferrante",
      "Aseem Sharma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Meghan Klein",
      "Mark Wenstrom"
     ],
     "a": [
      "Julianna Rodrigues",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeannine Calhoun",
      "Tom Dominczyk"
     ],
     "a": [
      "Jasmine Ho",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kelly Bowers",
      "Gene Stahl"
     ],
     "a": [
      "Agnieszka Procner",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Wormeck",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Taylor Leuck",
      "Aseem Sharma"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jeannine Calhoun",
      "Kelly Bowers"
     ],
     "a": [
      "Julianna Rodrigues",
      "Taylor Leuck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Meghan Klein",
      "Gail Hannagan"
     ],
     "a": [
      "Agnieszka Procner",
      "Diana Tabia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mark Wenstrom",
      "Tom Dominczyk"
     ],
     "a": [
      "Matthew Rafaniello",
      "Jonathan Wong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Butch Kreilick",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Aseem Sharma",
      "Kenneth Ocasio"
     ]
    }
   ],
   "subs": [
    "Mark Wenstrom",
    "Gene Stahl",
    "Agnieszka Procner",
    "Tom Dominczyk"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-09-21T19:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 632,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Nikki Nigro",
      "Reuben Zilber"
     ],
     "a": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suki Wong",
      "Srinath Katari"
     ],
     "a": [
      "Alyssa Beattie",
      "David Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sultane Cosaj",
      "Jonathan Nieves"
     ],
     "a": [
      "Kristin Larosa",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Charlene De Lara",
      "Rob Stever"
     ],
     "a": [
      "Danica Bramschreiber",
      "Andy Pineda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suki Wong",
      "Charlene De Lara"
     ],
     "a": [
      "Rosellen Perlowitz",
      "Alyssa Beattie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Hee Kim"
     ],
     "a": [
      "Kristin Larosa",
      "Danica Bramschreiber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Srinath Katari",
      "Rob Stever"
     ],
     "a": [
      "Brian Perlowitz",
      "Marvin Lao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jonathan Nieves",
      "Matthew Marciani"
     ],
     "a": [
      "David Cartwright",
      "David Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suki Wong",
      "Rob Stever"
     ],
     "a": [
      "Danica Bramschreiber",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Charlene De Lara",
      "Jonathan Nieves"
     ],
     "a": [
      "Alyssa Beattie",
      "Andy Pineda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Hee Kim",
      "Reuben Zilber"
     ],
     "a": [
      "Kristin Larosa",
      "David Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sultane Cosaj",
      "Matthew Marciani"
     ],
     "a": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hee Kim",
      "Sultane Cosaj"
     ],
     "a": [
      "Rosellen Perlowitz",
      "Danica Bramschreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nikki Nigro",
      "Charlene De Lara"
     ],
     "a": [
      "Kristin Larosa",
      "Alyssa Beattie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Srinath Katari",
      "Rob Stever"
     ],
     "a": [
      "David Schwartz",
      "Marvin Lao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Matthew Marciani",
      "Reuben Zilber"
     ],
     "a": [
      "Robert Paniti",
      "Andy Pineda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Srinath Katari"
     ],
     "a": [
      "Rosellen Perlowitz",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suki Wong",
      "Rob Stever"
     ],
     "a": [
      "Kristin Larosa",
      "Marvin Lao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Charlene De Lara",
      "Jonathan Nieves"
     ],
     "a": [
      "Danica Bramschreiber",
      "Robert Paniti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sultane Cosaj",
      "Reuben Zilber"
     ],
     "a": [
      "Alyssa Beattie",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suki Wong",
      "Nikki Nigro"
     ],
     "a": [
      "Danica Bramschreiber",
      "Alyssa Beattie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hee Kim",
      "Sultane Cosaj"
     ],
     "a": [
      "Rosellen Perlowitz",
      "Kristin Larosa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jonathan Nieves",
      "Rob Stever"
     ],
     "a": [
      "Robert Paniti",
      "David Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matthew Marciani",
      "Srinath Katari"
     ],
     "a": [
      "Andy Pineda",
      "Marvin Lao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sultane Cosaj",
      "Reuben Zilber"
     ],
     "a": [
      "Rosellen Perlowitz",
      "David Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Suki Wong",
      "Jonathan Nieves"
     ],
     "a": [
      "Kristin Larosa",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Charlene De Lara",
      "Rob Stever"
     ],
     "a": [
      "Danica Bramschreiber",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hee Kim",
      "Srinath Katari"
     ],
     "a": [
      "Alyssa Beattie",
      "Marvin Lao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Suki Wong",
      "Charlene De Lara"
     ],
     "a": [
      "Alyssa Beattie",
      "Rosellen Perlowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hee Kim",
      "Nikki Nigro"
     ],
     "a": [
      "Danica Bramschreiber",
      "Kristin Larosa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonathan Nieves",
      "Rob Stever"
     ],
     "a": [
      "Robert Paniti",
      "Andy Pineda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Matthew Marciani",
      "Reuben Zilber"
     ],
     "a": [
      "Brian Perlowitz",
      "David Cartwright"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "ACE Downingtown",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 663,
   "awayPoints": 505,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Esterlina Wiest",
      "Kevin Algarme"
     ],
     "a": [
      "Jennifer Guldin",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jasmine Nguyen",
      "Holden Smith"
     ],
     "a": [
      "Adele Hackney",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jane Pascua",
      "Ismael Hernandez"
     ],
     "a": [
      "Kristin Granath",
      "Devin Kenny"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katelyn Carretas",
      "Taylor Newell"
     ],
     "a": [
      "Susan Li",
      "Peter Hackney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jasmine Nguyen",
      "Jane Pascua"
     ],
     "a": [
      "Adele Hackney",
      "Haidee Midgley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kay Defilippo",
      "Katelyn Carretas"
     ],
     "a": [
      "Kristin Granath",
      "Elizabeth Dailey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Ismael Hernandez",
      "John Defilippo"
     ],
     "a": [
      "Nathan Trimmer",
      "Elpidio Arias"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Holden Smith",
      "Kevin Algarme"
     ],
     "a": [
      "Peter Hackney",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Esterlina Wiest",
      "Kevin Algarme"
     ],
     "a": [
      "Jennifer Guldin",
      "Devin Kenny"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katelyn Carretas",
      "Taylor Newell"
     ],
     "a": [
      "Elizabeth Dailey",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kay Defilippo",
      "Raymond Duong"
     ],
     "a": [
      "Susan Li",
      "Elpidio Arias"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jane Pascua",
      "John Defilippo"
     ],
     "a": [
      "Haidee Midgley",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jasmine Nguyen",
      "Katelyn Carretas"
     ],
     "a": [
      "Adele Hackney",
      "Susan Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jane Pascua",
      "Kay Defilippo"
     ],
     "a": [
      "Jennifer Guldin",
      "Haidee Midgley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Taylor Newell",
      "Raymond Duong"
     ],
     "a": [
      "Peter Hackney",
      "Steven Fernandez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Holden Smith",
      "Ismael Hernandez"
     ],
     "a": [
      "Devin Kenny",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kay Defilippo",
      "Taylor Newell"
     ],
     "a": [
      "Kristin Granath",
      "Elpidio Arias"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jasmine Nguyen",
      "Ismael Hernandez"
     ],
     "a": [
      "Adele Hackney",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jane Pascua",
      "Kevin Algarme"
     ],
     "a": [
      "Jennifer Guldin",
      "Devin Kenny"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Esterlina Wiest",
      "Holden Smith"
     ],
     "a": [
      "Elizabeth Dailey",
      "Steven Fernandez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jane Pascua",
      "Jasmine Nguyen"
     ],
     "a": [
      "Haidee Midgley",
      "Elizabeth Dailey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Esterlina Wiest",
      "Katelyn Carretas"
     ],
     "a": [
      "Susan Li",
      "Kristin Granath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Holden Smith",
      "John Defilippo"
     ],
     "a": [
      "Devin Kenny",
      "Elpidio Arias"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kevin Algarme",
      "Raymond Duong"
     ],
     "a": [
      "Andrew Frey",
      "Peter Hackney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kay Defilippo",
      "Holden Smith"
     ],
     "a": [
      "Jennifer Guldin",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Esterlina Wiest",
      "Ismael Hernandez"
     ],
     "a": [
      "Elizabeth Dailey",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jasmine Nguyen",
      "Kevin Algarme"
     ],
     "a": [
      "Adele Hackney",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Katelyn Carretas",
      "Raymond Duong"
     ],
     "a": [
      "Susan Li",
      "Peter Hackney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Esterlina Wiest",
      "Jane Pascua"
     ],
     "a": [
      "Adele Hackney",
      "Haidee Midgley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kay Defilippo",
      "Katelyn Carretas"
     ],
     "a": [
      "Jennifer Guldin",
      "Kristin Granath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "John Defilippo",
      "Ismael Hernandez"
     ],
     "a": [
      "Steven Fernandez",
      "Elpidio Arias"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kevin Algarme",
      "Taylor Newell"
     ],
     "a": [
      "Devin Kenny",
      "Nathan Trimmer"
     ]
    }
   ],
   "subs": [
    "Kay Defilippo"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "PickleRage Union County Pandas",
   "away": "Open Play",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 573,
   "awayPoints": 570,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Silva",
      "Ed Amato"
     ],
     "a": [
      "Lily Hahn",
      "Luan Vo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Patricia Tuquero",
      "Jebril Guevarra"
     ],
     "a": [
      "Katie Li",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Meredith Janeiro",
      "Marvin Steller"
     ],
     "a": [
      "Charishma Serrano",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Juri Solano"
     ],
     "a": [
      "Nancy Pace",
      "Todd Woodard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Patricia Tuquero"
     ],
     "a": [
      "Katie Li",
      "Lily Hahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thao Tran",
      "Jessica Kopec"
     ],
     "a": [
      "Lili Zhang",
      "Nancy Pace"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "John Danks",
      "Ed Amato"
     ],
     "a": [
      "Joseph Korom",
      "Todd Woodard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Juri Solano",
      "Jebril Guevarra"
     ],
     "a": [
      "Giang Nguyen",
      "Luan Vo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Sarah Silva",
      "Jebril Guevarra"
     ],
     "a": [
      "Lily Hahn",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Thao Tran",
      "John Danks"
     ],
     "a": [
      "Udita Agarwala",
      "Todd Woodard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Meredith Janeiro",
      "Marvin Steller"
     ],
     "a": [
      "Charishma Serrano",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rachel Appleton",
      "Juri Solano"
     ],
     "a": [
      "Lili Zhang",
      "Sahil Agarwala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Kopec",
      "Rachel Appleton"
     ],
     "a": [
      "Katie Li",
      "Lily Hahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Thao Tran",
      "Meredith Janeiro"
     ],
     "a": [
      "Nancy Pace",
      "Udita Agarwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "John Danks",
      "Ed Amato"
     ],
     "a": [
      "Giang Nguyen",
      "Luan Vo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Juri Solano",
      "Marvin Steller"
     ],
     "a": [
      "Sahil Agarwala",
      "Todd Woodard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meredith Janeiro",
      "John Danks"
     ],
     "a": [
      "Nancy Pace",
      "Todd Woodard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Thao Tran",
      "Marvin Steller"
     ],
     "a": [
      "Katie Li",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Patricia Tuquero",
      "Jebril Guevarra"
     ],
     "a": [
      "Lili Zhang",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Kopec",
      "Ed Amato"
     ],
     "a": [
      "Lily Hahn",
      "Sahil Agarwala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Thao Tran",
      "Jessica Kopec"
     ],
     "a": [
      "Lily Hahn",
      "Udita Agarwala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Silva",
      "Patricia Tuquero"
     ],
     "a": [
      "Lili Zhang",
      "Charishma Serrano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jebril Guevarra",
      "Ed Amato"
     ],
     "a": [
      "Luan Vo",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marvin Steller",
      "Juri Solano"
     ],
     "a": [
      "Giang Nguyen",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Thao Tran",
      "John Danks"
     ],
     "a": [
      "Lily Hahn",
      "Luan Vo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Jebril Guevarra"
     ],
     "a": [
      "Charishma Serrano",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Silva",
      "Juri Solano"
     ],
     "a": [
      "Udita Agarwala",
      "Todd Woodard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Meredith Janeiro",
      "Ed Amato"
     ],
     "a": [
      "Katie Li",
      "Sahil Agarwala"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jessica Kopec",
      "Patricia Tuquero"
     ],
     "a": [
      "Katie Li",
      "Nancy Pace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Thao Tran",
      "Meredith Janeiro"
     ],
     "a": [
      "Lily Hahn",
      "Udita Agarwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Juri Solano",
      "Jebril Guevarra"
     ],
     "a": [
      "Joseph Korom",
      "Sahil Agarwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "John Danks",
      "Marvin Steller"
     ],
     "a": [
      "Luan Vo",
      "Paul Michael Serrano"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickle Juice Blackwood",
   "away": "Picklr Newark",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 582,
   "awayPoints": 646,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Lawrence Dipietro"
     ],
     "a": [
      "Lauren Gabat",
      "Mike Fede"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Adolfo Nicdao"
     ],
     "a": [
      "Sandy Duarte",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karen Marshall",
      "Michael Van Horn"
     ],
     "a": [
      "Ashley Altman",
      "Simon Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katherine Mott",
      "Jason Grote"
     ],
     "a": [
      "Tiffany Weinert",
      "Matthew Cohen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Karen Marshall",
      "Michele Iannella"
     ],
     "a": [
      "Lauren Gabat",
      "Isha Rahalkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Michele Iannella Sr.",
      "Lisa Murphy"
     ],
     "a": [
      "Ashley Altman",
      "Tiffany Weinert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rodney Godwin",
      "John Dechristopher"
     ],
     "a": [
      "Bill Dower",
      "Mike Fede"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Van Horn",
      "Lawrence Dipietro"
     ],
     "a": [
      "Simon Burns",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Michele Iannella Sr.",
      "Adolfo Nicdao"
     ],
     "a": [
      "Lauren Gabat",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Rodney Godwin"
     ],
     "a": [
      "Ashley Altman",
      "Mike Fede"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michele Iannella",
      "Michael Van Horn"
     ],
     "a": [
      "Isha Rahalkar",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Karen Marshall",
      "Lawrence Dipietro"
     ],
     "a": [
      "Sandy Duarte",
      "Matthew Cohen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Lisa Murphy"
     ],
     "a": [
      "Tiffany Weinert",
      "Lauren Gabat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Michele Iannella"
     ],
     "a": [
      "Isha Rahalkar",
      "Sandy Duarte"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jason Grote",
      "John Dechristopher"
     ],
     "a": [
      "Bill Dower",
      "Thomas Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lawrence Dipietro",
      "Rodney Godwin"
     ],
     "a": [
      "Mike Fede",
      "Simon Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Murphy",
      "John Dechristopher"
     ],
     "a": [
      "Tiffany Weinert",
      "Mike Fede"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Katherine Mott",
      "Jason Grote"
     ],
     "a": [
      "Ashley Altman",
      "Simon Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Trisha Marion",
      "Michael Van Horn"
     ],
     "a": [
      "Sandy Duarte",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michele Iannella Sr.",
      "Adolfo Nicdao"
     ],
     "a": [
      "Isha Rahalkar",
      "Matthew Cohen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karen Marshall",
      "Katherine Mott"
     ],
     "a": [
      "Lauren Gabat",
      "Isha Rahalkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Michele Iannella",
      "Lisa Murphy"
     ],
     "a": [
      "Sandy Duarte",
      "Ashley Altman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lawrence Dipietro",
      "Michael Van Horn"
     ],
     "a": [
      "Mike Fede",
      "Thomas Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Adolfo Nicdao",
      "John Dechristopher"
     ],
     "a": [
      "Bill Dower",
      "Matthew Cohen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Michele Iannella Sr.",
      "Jason Grote"
     ],
     "a": [
      "Lauren Gabat",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Katherine Mott",
      "Rodney Godwin"
     ],
     "a": [
      "Ashley Altman",
      "Matthew Cohen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michele Iannella",
      "Lawrence Dipietro"
     ],
     "a": [
      "Tiffany Weinert",
      "Mike Fede"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Karen Marshall",
      "Michael Van Horn"
     ],
     "a": [
      "Isha Rahalkar",
      "Simon Burns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Karen Marshall",
      "Katherine Mott"
     ],
     "a": [
      "Ashley Altman",
      "Isha Rahalkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michele Iannella",
      "Trisha Marion"
     ],
     "a": [
      "Sandy Duarte",
      "Tiffany Weinert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michael Van Horn",
      "Rodney Godwin"
     ],
     "a": [
      "Matthew Cohen",
      "Simon Burns"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lawrence Dipietro",
      "Jason Grote"
     ],
     "a": [
      "Bill Dower",
      "Thomas Lum"
     ]
    }
   ],
   "subs": [
    "Rodney Godwin"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Bounce Philly",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 596,
   "awayPoints": 567,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Radhika Sud",
      "Papa Aggrey"
     ],
     "a": [
      "Thuy Le",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robynn Reeder",
      "Yash Mehta"
     ],
     "a": [
      "Meggie Hodgson",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brittany Riccitiello",
      "Prasad Mittapalli"
     ],
     "a": [
      "Jennifer Lynch",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Searby",
      "Miles Townsend"
     ],
     "a": [
      "Meg Kelly",
      "Brad De Jesus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Searby",
      "Hailee Kurlander"
     ],
     "a": [
      "Lisa Dinh",
      "Thuy Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brittany Riccitiello",
      "Robynn Reeder"
     ],
     "a": [
      "Meggie Hodgson",
      "Jennifer Lynch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Papa Aggrey",
      "Miles Townsend"
     ],
     "a": [
      "Grady Craig",
      "Matt Soliman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yash Mehta",
      "Prasad Mittapalli"
     ],
     "a": [
      "William Waggenspack",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Radhika Sud",
      "Papa Aggrey"
     ],
     "a": [
      "Meggie Hodgson",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Robynn Reeder",
      "Yash Mehta"
     ],
     "a": [
      "Meg Kelly",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brittany Riccitiello",
      "Prasad Mittapalli"
     ],
     "a": [
      "Thuy Le",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rachel Searby",
      "Miles Townsend"
     ],
     "a": [
      "Lisa Dinh",
      "Matt Soliman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robynn Reeder",
      "Brittany Riccitiello"
     ],
     "a": [
      "Thuy Le",
      "Jennifer Lynch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rachel Searby",
      "Hailee Kurlander"
     ],
     "a": [
      "Lisa Dinh",
      "Meg Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Prasad Mittapalli",
      "Papa Aggrey"
     ],
     "a": [
      "Grady Craig",
      "William Waggenspack"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robert Hudson",
      "Yash Mehta"
     ],
     "a": [
      "Matt Soliman",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Searby",
      "Papa Aggrey"
     ],
     "a": [
      "Meggie Hodgson",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Radhika Sud",
      "Miles Townsend"
     ],
     "a": [
      "Lisa Dinh",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Hailee Kurlander",
      "Robert Hudson"
     ],
     "a": [
      "Meg Kelly",
      "Matt Soliman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brittany Riccitiello",
      "Yash Mehta"
     ],
     "a": [
      "Jennifer Lynch",
      "Derek Lombardi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rachel Searby",
      "Brittany Riccitiello"
     ],
     "a": [
      "Thuy Le",
      "Meg Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Radhika Sud",
      "Robynn Reeder"
     ],
     "a": [
      "Meggie Hodgson",
      "Jennifer Lynch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Hudson",
      "Prasad Mittapalli"
     ],
     "a": [
      "Grady Craig",
      "William Waggenspack"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Miles Townsend",
      "Yash Mehta"
     ],
     "a": [
      "Brad De Jesus",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Radhika Sud",
      "Yash Mehta"
     ],
     "a": [
      "Jennifer Lynch",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Searby",
      "Prasad Mittapalli"
     ],
     "a": [
      "Meggie Hodgson",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hailee Kurlander",
      "Robert Hudson"
     ],
     "a": [
      "Lisa Dinh",
      "Matt Soliman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robynn Reeder",
      "Papa Aggrey"
     ],
     "a": [
      "Thuy Le",
      "Derek Lombardi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brittany Riccitiello",
      "Radhika Sud"
     ],
     "a": [
      "Thuy Le",
      "Lisa Dinh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Robynn Reeder",
      "Hailee Kurlander"
     ],
     "a": [
      "Meggie Hodgson",
      "Meg Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Prasad Mittapalli",
      "Papa Aggrey"
     ],
     "a": [
      "Grady Craig",
      "Brad De Jesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Miles Townsend",
      "Yash Mehta"
     ],
     "a": [
      "Matt Soliman",
      "Derek Lombardi"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "APC Garden State",
   "away": "Players Courtyard",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 551,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Viviane Tran",
      "Taylor Runyen"
     ],
     "a": [
      "Rebecca Woofter",
      "John Waggoner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michele Costigan",
      "Gerry Bissinger"
     ],
     "a": [
      "Elisabeth Marshall",
      "Josh Ruble"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Megan Torres",
      "Joseph Mckenna"
     ],
     "a": [
      "Kim Kronberger",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Jonathan Jamison"
     ],
     "a": [
      "Melissa Mackey",
      "Robert Courchain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Viviane Tran",
      "Oanh Quach"
     ],
     "a": [
      "Rebecca Woofter",
      "Melissa Mackey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrea Galanti",
      "Michele Costigan"
     ],
     "a": [
      "Kim Kronberger",
      "Elisabeth Marshall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gerry Bissinger",
      "Jeff Stephenson"
     ],
     "a": [
      "Colin Mackey",
      "Josh Ruble"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joseph Mckenna",
      "Jamie West"
     ],
     "a": [
      "John Waggoner",
      "Lee Latini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michele Costigan",
      "Taylor Runyen"
     ],
     "a": [
      "Rebecca Woofter",
      "Josh Ruble"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Megan Torres",
      "Joseph Mckenna"
     ],
     "a": [
      "Kim Kronberger",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Jeff Stephenson"
     ],
     "a": [
      "Elisabeth Marshall",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andrea Galanti",
      "Jonathan Jamison"
     ],
     "a": [
      "Melissa Mackey",
      "John Waggoner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Michele Costigan",
      "Viviane Tran"
     ],
     "a": [
      "Rebecca Woofter",
      "Elisabeth Marshall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Megan Torres",
      "Oanh Quach"
     ],
     "a": [
      "Melissa Mackey",
      "Kim Kronberger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamie West",
      "Taylor Runyen"
     ],
     "a": [
      "Colin Mackey",
      "James Conroy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joseph Mckenna",
      "Gerry Bissinger"
     ],
     "a": [
      "Lee Latini",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Viviane Tran",
      "Jamie West"
     ],
     "a": [
      "Rebecca Woofter",
      "John Waggoner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Gerry Bissinger"
     ],
     "a": [
      "Melissa Mackey",
      "Lee Latini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Oanh Quach",
      "Jeff Stephenson"
     ],
     "a": [
      "Kim Kronberger",
      "Colin Mackey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Andrea Galanti",
      "Jonathan Jamison"
     ],
     "a": [
      "Elisabeth Marshall",
      "Josh Ruble"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michele Costigan",
      "Oanh Quach"
     ],
     "a": [
      "Rebecca Woofter",
      "Melissa Mackey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Megan Torres",
      "Viviane Tran"
     ],
     "a": [
      "Elisabeth Marshall",
      "Kim Kronberger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jonathan Jamison",
      "Taylor Runyen"
     ],
     "a": [
      "Colin Mackey",
      "James Conroy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joseph Mckenna",
      "Jeff Stephenson"
     ],
     "a": [
      "Lee Latini",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrea Galanti",
      "Jamie West"
     ],
     "a": [
      "Rebecca Woofter",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Joseph Mckenna"
     ],
     "a": [
      "Kim Kronberger",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michele Costigan",
      "Taylor Runyen"
     ],
     "a": [
      "Elisabeth Marshall",
      "Josh Ruble"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Oanh Quach",
      "Gerry Bissinger"
     ],
     "a": [
      "Melissa Mackey",
      "John Waggoner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Andrea Galanti",
      "Megan Torres"
     ],
     "a": [
      "Rebecca Woofter",
      "Kim Kronberger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Oanh Quach",
      "Viviane Tran"
     ],
     "a": [
      "Elisabeth Marshall",
      "Melissa Mackey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeff Stephenson",
      "Jamie West"
     ],
     "a": [
      "Colin Mackey",
      "Josh Ruble"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gerry Bissinger",
      "Jonathan Jamison"
     ],
     "a": [
      "John Waggoner",
      "Lee Latini"
     ]
    }
   ],
   "subs": [
    "Melissa Mackey"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickleball Palace",
   "away": "PickleRage Union County Net Ninjas",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 533,
   "awayPoints": 673,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alexis Kerven",
      "Rhys Gardiner"
     ],
     "a": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Maggie Wang",
      "Andrew Kimmel"
     ],
     "a": [
      "Kellie Roshak",
      "Carlos Echenique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anne Buckley",
      "Maxwell Winters"
     ],
     "a": [
      "Huifang Yao",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jenny Winters",
      "Jose Chariez"
     ],
     "a": [
      "Connie Tom",
      "Jimmy Tom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jenny Winters",
      "Annica Jin-Hendel"
     ],
     "a": [
      "Kellie Roshak",
      "Eva Rodriguez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Line Barlow",
      "Anne Buckley"
     ],
     "a": [
      "Kerry Eskay",
      "Huifang Yao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Rhys Gardiner",
      "Brian Seligson"
     ],
     "a": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jason Heiselman",
      "Jose Chariez"
     ],
     "a": [
      "Freddy Li",
      "Jimmy Tom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Alexis Kerven",
      "Jason Heiselman"
     ],
     "a": [
      "Kellie Roshak",
      "Freddy Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Maggie Wang",
      "Andrew Kimmel"
     ],
     "a": [
      "Kerry Eskay",
      "Alex Sanchez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Anne Buckley",
      "Rhys Gardiner"
     ],
     "a": [
      "Cassie Lou",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Annica Jin-Hendel",
      "Jose Chariez"
     ],
     "a": [
      "Connie Tom",
      "Jimmy Tom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Line Barlow",
      "Alexis Kerven"
     ],
     "a": [
      "Eva Rodriguez",
      "Kerry Eskay"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Maggie Wang",
      "Jenny Winters"
     ],
     "a": [
      "Cassie Lou",
      "Connie Tom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Brian Seligson",
      "Maxwell Winters"
     ],
     "a": [
      "Cesar Alvarez",
      "Carlos Echenique"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jose Chariez",
      "Jason Heiselman"
     ],
     "a": [
      "Jimmy Tom",
      "Alex Sanchez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Line Barlow",
      "Brian Seligson"
     ],
     "a": [
      "Cassie Lou",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anne Buckley",
      "Maxwell Winters"
     ],
     "a": [
      "Kerry Eskay",
      "Carlos Echenique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alexis Kerven",
      "Rhys Gardiner"
     ],
     "a": [
      "Huifang Yao",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Annica Jin-Hendel",
      "Andrew Kimmel"
     ],
     "a": [
      "Eva Rodriguez",
      "Alex Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jenny Winters",
      "Annica Jin-Hendel"
     ],
     "a": [
      "Kellie Roshak",
      "Connie Tom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Anne Buckley",
      "Line Barlow"
     ],
     "a": [
      "Huifang Yao",
      "Cassie Lou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jason Heiselman",
      "Brian Seligson"
     ],
     "a": [
      "Carlos Echenique",
      "Alex Sanchez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rhys Gardiner",
      "Maxwell Winters"
     ],
     "a": [
      "Freddy Li",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Line Barlow",
      "Brian Seligson"
     ],
     "a": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Maggie Wang",
      "Jason Heiselman"
     ],
     "a": [
      "Kerry Eskay",
      "Carlos Echenique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jenny Winters",
      "Andrew Kimmel"
     ],
     "a": [
      "Huifang Yao",
      "Freddy Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Annica Jin-Hendel",
      "Jose Chariez"
     ],
     "a": [
      "Cassie Lou",
      "Jimmy Tom"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alexis Kerven",
      "Line Barlow"
     ],
     "a": [
      "Eva Rodriguez",
      "Kellie Roshak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Maggie Wang",
      "Anne Buckley"
     ],
     "a": [
      "Kerry Eskay",
      "Huifang Yao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rhys Gardiner",
      "Brian Seligson"
     ],
     "a": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Maxwell Winters",
      "Andrew Kimmel"
     ],
     "a": [
      "Carlos Echenique",
      "Alex Sanchez"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickle House",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 570,
   "awayPoints": 594,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Sowa",
      "Gabe Nacion"
     ],
     "a": [
      "Michele Sagurton",
      "Brandon Helicher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Veronica Rosas",
      "James Yu"
     ],
     "a": [
      "Rachael Osetkowski",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Iqra Hasan-Calmo",
      "Morgan Valencia King"
     ],
     "a": [
      "Jade Chin",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Danielle Kuti",
      "Rakesh Roy"
     ],
     "a": [
      "Mayra Tuba",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Danielle Kuti",
      "Veronica Rosas"
     ],
     "a": [
      "Rachael Osetkowski",
      "Mayra Tuba"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Katie O'Mara"
     ],
     "a": [
      "Nicole Melchionna",
      "Jade Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "James Yu",
      "Robert Leming"
     ],
     "a": [
      "Alex Glushek",
      "David Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rakesh Roy",
      "Ross Bienstock"
     ],
     "a": [
      "Alex Lopez",
      "Brandon Helicher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Elizabeth Trimble",
      "Robert Leming"
     ],
     "a": [
      "Jade Chin",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Veronica Rosas",
      "Gabe Nacion"
     ],
     "a": [
      "Michele Sagurton",
      "Alex Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Ross Bienstock"
     ],
     "a": [
      "Nicole Melchionna",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Danielle Kuti",
      "Morgan Valencia King"
     ],
     "a": [
      "Rachael Osetkowski",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Danielle Kuti",
      "Veronica Rosas"
     ],
     "a": [
      "Jade Chin",
      "Mayra Tuba"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elizabeth Trimble",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Michele Sagurton",
      "Nicole Melchionna"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ross Bienstock",
      "Robert Leming"
     ],
     "a": [
      "Alex Glushek",
      "David Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "James Yu",
      "Rakesh Roy"
     ],
     "a": [
      "Lukas Chrebet",
      "Brandon Helicher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Elizabeth Trimble",
      "Robert Leming"
     ],
     "a": [
      "Mayra Tuba",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Emily Sowa",
      "James Yu"
     ],
     "a": [
      "Michele Sagurton",
      "Alex Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Danielle Kuti",
      "Morgan Valencia King"
     ],
     "a": [
      "Nicole Melchionna",
      "Brandon Helicher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katie O'Mara",
      "Rakesh Roy"
     ],
     "a": [
      "Rachael Osetkowski",
      "David Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Danielle Kuti",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Rachael Osetkowski",
      "Mayra Tuba"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "Emily Sowa"
     ],
     "a": [
      "Jade Chin",
      "Michele Sagurton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ross Bienstock",
      "Robert Leming"
     ],
     "a": [
      "Lukas Chrebet",
      "Alex Glushek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gabe Nacion",
      "Morgan Valencia King"
     ],
     "a": [
      "David Burke",
      "Alex Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Iqra Hasan-Calmo",
      "Gabe Nacion"
     ],
     "a": [
      "Nicole Melchionna",
      "Brandon Helicher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Veronica Rosas",
      "James Yu"
     ],
     "a": [
      "Jade Chin",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elizabeth Trimble",
      "Ross Bienstock"
     ],
     "a": [
      "Mayra Tuba",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "Rakesh Roy"
     ],
     "a": [
      "Rachael Osetkowski",
      "David Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "Elizabeth Trimble"
     ],
     "a": [
      "Rachael Osetkowski",
      "Jade Chin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Iqra Hasan-Calmo",
      "Veronica Rosas"
     ],
     "a": [
      "Michele Sagurton",
      "Nicole Melchionna"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gabe Nacion",
      "Morgan Valencia King"
     ],
     "a": [
      "David Burke",
      "Alex Lopez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rakesh Roy",
      "James Yu"
     ],
     "a": [
      "Alex Glushek",
      "Lukas Chrebet"
     ]
    }
   ],
   "subs": [
    "Veronica Rosas",
    "Danielle Kuti"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Bounce Tempest",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 558,
   "awayPoints": 654,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Thuy Nguyen",
      "Tuan Nguyen"
     ],
     "a": [
      "Sabiha Kermalli",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Megan Quigley",
      "Timothy Lowry"
     ],
     "a": [
      "Patricia San Andres",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karen Krasko",
      "Thang Nguyen"
     ],
     "a": [
      "Suzane Sullivan",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Halimah Maideen",
      "Peter Cao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Megan Quigley",
      "Thuy Nguyen"
     ],
     "a": [
      "Sabiha Kermalli",
      "Diahann Ouly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Juliana Berg",
      "Karen Krasko"
     ],
     "a": [
      "Suzane Sullivan",
      "Patricia San Andres"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Thomas Nguyen",
      "Timothy Lowry"
     ],
     "a": [
      "Adam Werwie",
      "Marcus Burritt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Peter Lien",
      "Thang Nguyen"
     ],
     "a": [
      "Peter Cao",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Quynh Nguyen",
      "Timothy Lowry"
     ],
     "a": [
      "Sabiha Kermalli",
      "Peter Cao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Thuy Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Suzane Sullivan",
      "Howie Knudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Juliana Berg",
      "Tuan Nguyen"
     ],
     "a": [
      "Patricia San Andres",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Krasko",
      "Jason Nguyen"
     ],
     "a": [
      "Diahann Ouly",
      "Marcus Burritt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Karen Krasko",
      "Thuy Nguyen"
     ],
     "a": [
      "Halimah Maideen",
      "Patricia San Andres"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Megan Quigley",
      "Quynh Nguyen"
     ],
     "a": [
      "Suzane Sullivan",
      "Sabiha Kermalli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jason Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Victor Salicetti",
      "Marcus Burritt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Timothy Lowry",
      "Thang Nguyen"
     ],
     "a": [
      "Adam Werwie",
      "Peter Cao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Juliana Berg",
      "Tuan Nguyen"
     ],
     "a": [
      "Patricia San Andres",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Quynh Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Diahann Ouly",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Megan Quigley",
      "Thomas Nguyen"
     ],
     "a": [
      "Sabiha Kermalli",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Krasko",
      "Peter Lien"
     ],
     "a": [
      "Halimah Maideen",
      "Howie Knudson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Megan Quigley",
      "Thuy Nguyen"
     ],
     "a": [
      "Suzane Sullivan",
      "Diahann Ouly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Krasko",
      "Juliana Berg"
     ],
     "a": [
      "Halimah Maideen",
      "Sabiha Kermalli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tuan Nguyen",
      "Jason Nguyen"
     ],
     "a": [
      "Adam Werwie",
      "Victor Salicetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thang Nguyen",
      "Peter Lien"
     ],
     "a": [
      "Marcus Burritt",
      "Howie Knudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Megan Quigley",
      "Timothy Lowry"
     ],
     "a": [
      "Halimah Maideen",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Juliana Berg",
      "Jason Nguyen"
     ],
     "a": [
      "Diahann Ouly",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Thuy Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Suzane Sullivan",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Peter Lien"
     ],
     "a": [
      "Sabiha Kermalli",
      "Howie Knudson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Thuy Nguyen",
      "Karen Krasko"
     ],
     "a": [
      "Patricia San Andres",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Megan Quigley",
      "Quynh Nguyen"
     ],
     "a": [
      "Diahann Ouly",
      "Halimah Maideen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tuan Nguyen",
      "Jason Nguyen"
     ],
     "a": [
      "Victor Salicetti",
      "Adam Werwie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Timothy Lowry",
      "Peter Lien"
     ],
     "a": [
      "Marcus Burritt",
      "Howie Knudson"
     ]
    }
   ],
   "subs": [
    "Karen Krasko"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickle Juice Blackwood",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-27T09:00:00",
   "complete": true,
   "homePoints": 504,
   "awayPoints": 664,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Katherine Mott",
      "Jason Grote"
     ],
     "a": [
      "Amanda Zhou",
      "Peter Cao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cathy Mclaughlin",
      "John Dechristopher"
     ],
     "a": [
      "Diahann Ouly",
      "Howie Knudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Michael Van Horn"
     ],
     "a": [
      "Halimah Maideen",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Lawrence Dipietro"
     ],
     "a": [
      "Suzane Sullivan",
      "Victor Salicetti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Michele Iannella"
     ],
     "a": [
      "Amanda Zhou",
      "Robin Pagotto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Katherine Mott"
     ],
     "a": [
      "Halimah Maideen",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "John Dechristopher",
      "Kordell Alexander"
     ],
     "a": [
      "Adam Werwie",
      "Peter Cao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lawrence Dipietro",
      "Michael Van Horn"
     ],
     "a": [
      "Marcus Burritt",
      "Howie Knudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Trisha Marion",
      "Michael Van Horn"
     ],
     "a": [
      "Amanda Zhou",
      "Peter Cao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cathy Mclaughlin",
      "Jason Grote"
     ],
     "a": [
      "Diahann Ouly",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Lawrence Dipietro"
     ],
     "a": [
      "Halimah Maideen",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katherine Mott",
      "Kordell Alexander"
     ],
     "a": [
      "Robin Pagotto",
      "Victor Salicetti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michele Iannella",
      "Trisha Marion"
     ],
     "a": [
      "Amanda Zhou",
      "Diahann Ouly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Katherine Mott"
     ],
     "a": [
      "Robin Pagotto",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jason Grote",
      "Michael Van Horn"
     ],
     "a": [
      "Adam Werwie",
      "Howie Knudson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lawrence Dipietro",
      "John Dechristopher"
     ],
     "a": [
      "Marcus Burritt",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cathy Mclaughlin",
      "Kordell Alexander"
     ],
     "a": [
      "Amanda Zhou",
      "Howie Knudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Katherine Mott",
      "Michael Van Horn"
     ],
     "a": [
      "Robin Pagotto",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michele Iannella",
      "John Dechristopher"
     ],
     "a": [
      "Diahann Ouly",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Lawrence Dipietro"
     ],
     "a": [
      "Suzane Sullivan",
      "Marcus Burritt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Trisha Marion",
      "Karen Marshall"
     ],
     "a": [
      "Amanda Zhou",
      "Halimah Maideen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Cathy Mclaughlin"
     ],
     "a": [
      "Diahann Ouly",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Michael Van Horn",
      "Kordell Alexander"
     ],
     "a": [
      "Marcus Burritt",
      "Adam Werwie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lawrence Dipietro",
      "Jason Grote"
     ],
     "a": [
      "Peter Cao",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Cathy Mclaughlin",
      "Lawrence Dipietro"
     ],
     "a": [
      "Suzane Sullivan",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Michael Van Horn"
     ],
     "a": [
      "Diahann Ouly",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Jason Grote"
     ],
     "a": [
      "Halimah Maideen",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Trisha Marion",
      "John Dechristopher"
     ],
     "a": [
      "Robin Pagotto",
      "Howie Knudson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Cathy Mclaughlin"
     ],
     "a": [
      "Amanda Zhou",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Trisha Marion"
     ],
     "a": [
      "Halimah Maideen",
      "Robin Pagotto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lawrence Dipietro",
      "Michael Van Horn"
     ],
     "a": [
      "Adam Werwie",
      "Victor Salicetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jason Grote",
      "Kordell Alexander"
     ],
     "a": [
      "Howie Knudson",
      "Peter Cao"
     ]
    }
   ],
   "subs": [
    "Amanda Zhou"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Home Court",
   "away": "Pickleball HQ",
   "time": "2026-09-27T10:00:00",
   "complete": true,
   "homePoints": 622,
   "awayPoints": 598,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jonathan Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alyssa Beattie",
      "Brian Perlowitz"
     ],
     "a": [
      "Jaymie Vincelli",
      "James Gillick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristin Larosa",
      "David Cartwright"
     ],
     "a": [
      "Taylor Leuck",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Danica Bramschreiber",
      "Andy Pineda"
     ],
     "a": [
      "Diana Tabia",
      "David Abiog"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Danica Bramschreiber",
      "Alyssa Beattie"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kristin Larosa",
      "Jayne Mayer"
     ],
     "a": [
      "Lisa Sardo",
      "Taylor Leuck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marc Matalon",
      "Brian Perlowitz"
     ],
     "a": [
      "Jonathan Wong",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "David Cartwright",
      "David Schwartz"
     ],
     "a": [
      "James Gillick",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alyssa Beattie",
      "Andy Pineda"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jonathan Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ],
     "a": [
      "Jaymie Vincelli",
      "James Gillick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kristin Larosa",
      "David Schwartz"
     ],
     "a": [
      "Lisa Sardo",
      "David Abiog"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Danica Bramschreiber",
      "Brian Perlowitz"
     ],
     "a": [
      "Diana Tabia",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danica Bramschreiber",
      "Rosellen Perlowitz"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alyssa Beattie",
      "Jayne Mayer"
     ],
     "a": [
      "Diana Tabia",
      "Taylor Leuck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Schwartz",
      "Robert Paniti"
     ],
     "a": [
      "Jonathan Wong",
      "James Gillick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marc Matalon",
      "Andy Pineda"
     ],
     "a": [
      "David Abiog",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Danica Bramschreiber",
      "Robert Paniti"
     ],
     "a": [
      "Lisa Sardo",
      "Jonathan Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rosellen Perlowitz",
      "David Schwartz"
     ],
     "a": [
      "Diana Tabia",
      "David Abiog"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jayne Mayer",
      "David Cartwright"
     ],
     "a": [
      "Taylor Leuck",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kristin Larosa",
      "Marc Matalon"
     ],
     "a": [
      "Jaymie Vincelli",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rosellen Perlowitz",
      "Alyssa Beattie"
     ],
     "a": [
      "Taylor Leuck",
      "Julianna Rodrigues"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kristin Larosa",
      "Jayne Mayer"
     ],
     "a": [
      "Jaymie Vincelli",
      "Lisa Sardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "David Cartwright",
      "Brian Perlowitz"
     ],
     "a": [
      "Tomas Ruiz",
      "David Abiog"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Paniti",
      "Andy Pineda"
     ],
     "a": [
      "Jonathan Wong",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jayne Mayer",
      "David Cartwright"
     ],
     "a": [
      "Julianna Rodrigues",
      "Tomas Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristin Larosa",
      "David Schwartz"
     ],
     "a": [
      "Lisa Sardo",
      "Jonathan Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alyssa Beattie",
      "Brian Perlowitz"
     ],
     "a": [
      "Diana Tabia",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Danica Bramschreiber",
      "Marc Matalon"
     ],
     "a": [
      "Taylor Leuck",
      "James Gillick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristin Larosa",
      "Rosellen Perlowitz"
     ],
     "a": [
      "Julianna Rodrigues",
      "Diana Tabia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Danica Bramschreiber",
      "Alyssa Beattie"
     ],
     "a": [
      "Taylor Leuck",
      "Lisa Sardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Paniti",
      "Andy Pineda"
     ],
     "a": [
      "Tomas Ruiz",
      "David Abiog"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Marc Matalon",
      "Brian Perlowitz"
     ],
     "a": [
      "Matthew Ferrante",
      "James Gillick"
     ]
    }
   ],
   "subs": [
    "Jayne Mayer"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Picklr Newark",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-27T12:00:00",
   "complete": true,
   "homePoints": 608,
   "awayPoints": 638,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ashley Altman",
      "Bill Dower"
     ],
     "a": [
      "Jennifer Guldin",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Isha Rahalkar",
      "Thomas Lum"
     ],
     "a": [
      "Haidee Midgley",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Patti Calhoon",
      "Tyler Kellner"
     ],
     "a": [
      "Stephanie Taxter",
      "Elpidio Arias"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sandy Duarte",
      "Jonathan Briones"
     ],
     "a": [
      "Elizabeth Dailey",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ashley Altman",
      "Isha Rahalkar"
     ],
     "a": [
      "Haidee Midgley",
      "Jennifer Guldin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kris Miller",
      "Patti Calhoon"
     ],
     "a": [
      "Susan Li",
      "Kristin Granath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thomas Lum",
      "Bill Dower"
     ],
     "a": [
      "Michael Guldin",
      "Devin Kenny"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jonathan Briones",
      "Simon Burns"
     ],
     "a": [
      "Steven Fernandez",
      "Elpidio Arias"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandy Duarte",
      "Bill Dower"
     ],
     "a": [
      "Susan Li",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Isha Rahalkar",
      "Tyler Kellner"
     ],
     "a": [
      "Stephanie Taxter",
      "Devin Kenny"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kris Miller",
      "Thomas Lum"
     ],
     "a": [
      "Haidee Midgley",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ashley Altman",
      "Simon Burns"
     ],
     "a": [
      "Elizabeth Dailey",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Isha Rahalkar",
      "Patti Calhoon"
     ],
     "a": [
      "Jennifer Guldin",
      "Elizabeth Dailey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kris Miller",
      "Sandy Duarte"
     ],
     "a": [
      "Stephanie Taxter",
      "Kristin Granath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jonathan Briones",
      "Thomas Lum"
     ],
     "a": [
      "Devin Kenny",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tyler Kellner",
      "Simon Burns"
     ],
     "a": [
      "Steven Fernandez",
      "Elpidio Arias"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ashley Altman",
      "Jonathan Briones"
     ],
     "a": [
      "Stephanie Taxter",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Patti Calhoon",
      "Bill Dower"
     ],
     "a": [
      "Susan Li",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kris Miller",
      "Tyler Kellner"
     ],
     "a": [
      "Elizabeth Dailey",
      "Elpidio Arias"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sandy Duarte",
      "Simon Burns"
     ],
     "a": [
      "Kristin Granath",
      "Devin Kenny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sandy Duarte",
      "Kris Miller"
     ],
     "a": [
      "Haidee Midgley",
      "Susan Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ashley Altman",
      "Isha Rahalkar"
     ],
     "a": [
      "Jennifer Guldin",
      "Stephanie Taxter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Thomas Lum",
      "Jonathan Briones"
     ],
     "a": [
      "Devin Kenny",
      "Elpidio Arias"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Simon Burns",
      "Bill Dower"
     ],
     "a": [
      "Michael Guldin",
      "Steven Fernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ashley Altman",
      "Bill Dower"
     ],
     "a": [
      "Jennifer Guldin",
      "Michael Guldin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Patti Calhoon",
      "Jonathan Briones"
     ],
     "a": [
      "Stephanie Taxter",
      "Devin Kenny"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Isha Rahalkar",
      "Tyler Kellner"
     ],
     "a": [
      "Kristin Granath",
      "Nathan Trimmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kris Miller",
      "Simon Burns"
     ],
     "a": [
      "Elizabeth Dailey",
      "Steven Fernandez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ashley Altman",
      "Sandy Duarte"
     ],
     "a": [
      "Jennifer Guldin",
      "Kristin Granath"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Isha Rahalkar",
      "Patti Calhoon"
     ],
     "a": [
      "Susan Li",
      "Haidee Midgley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jonathan Briones",
      "Bill Dower"
     ],
     "a": [
      "Michael Guldin",
      "Steven Fernandez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thomas Lum",
      "Tyler Kellner"
     ],
     "a": [
      "Nathan Trimmer",
      "Elpidio Arias"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Bounce Tempest",
   "away": "Bounce Philly",
   "time": "2026-09-27T12:00:00",
   "complete": true,
   "homePoints": 598,
   "awayPoints": 655,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Jason Nguyen"
     ],
     "a": [
      "Jennifer Lynch",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Evelyn Geating",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Megan Quigley",
      "Timothy Lowry"
     ],
     "a": [
      "Meggie Hodgson",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Thuy Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Lisa Dinh",
      "Brad De Jesus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Megan Quigley",
      "Thuy Nguyen"
     ],
     "a": [
      "Meg Kelly",
      "Lisa Dinh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Helen Goh",
      "Christina Vuong"
     ],
     "a": [
      "Meggie Hodgson",
      "Evelyn Geating"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "David Nguyen",
      "Jason Nguyen"
     ],
     "a": [
      "Grady Craig",
      "William Waggenspack"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Peter Lien",
      "Thang Nguyen"
     ],
     "a": [
      "Dung Pham",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Megan Quigley",
      "Timothy Lowry"
     ],
     "a": [
      "Jennifer Lynch",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claire Nguyen",
      "Jason Nguyen"
     ],
     "a": [
      "Evelyn Geating",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Meggie Hodgson",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Christina Vuong",
      "Thomas Nguyen"
     ],
     "a": [
      "Meg Kelly",
      "Dung Pham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Thuy Nguyen",
      "Christina Vuong"
     ],
     "a": [
      "Jennifer Lynch",
      "Lisa Dinh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Helen Goh",
      "Claire Nguyen"
     ],
     "a": [
      "Meggie Hodgson",
      "Evelyn Geating"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Peter Lien",
      "Thomas Nguyen"
     ],
     "a": [
      "Grady Craig",
      "Brad De Jesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jason Nguyen",
      "David Nguyen"
     ],
     "a": [
      "Dung Pham",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Quynh Nguyen",
      "Timothy Lowry"
     ],
     "a": [
      "Jennifer Lynch",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thuy Nguyen",
      "David Nguyen"
     ],
     "a": [
      "Meg Kelly",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Megan Quigley",
      "Jason Nguyen"
     ],
     "a": [
      "Lisa Dinh",
      "Dung Pham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Helen Goh",
      "Peter Lien"
     ],
     "a": [
      "Evelyn Geating",
      "Derek Lombardi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Claire Nguyen"
     ],
     "a": [
      "Meggie Hodgson",
      "Meg Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Megan Quigley",
      "Christina Vuong"
     ],
     "a": [
      "Lisa Dinh",
      "Jennifer Lynch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thang Nguyen",
      "David Nguyen"
     ],
     "a": [
      "William Waggenspack",
      "Grady Craig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jason Nguyen",
      "Peter Lien"
     ],
     "a": [
      "Dung Pham",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Timothy Lowry"
     ],
     "a": [
      "Evelyn Geating",
      "William Waggenspack"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thuy Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Meg Kelly",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Helen Goh",
      "Peter Lien"
     ],
     "a": [
      "Meggie Hodgson",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christina Vuong",
      "Thang Nguyen"
     ],
     "a": [
      "Lisa Dinh",
      "Dung Pham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Megan Quigley",
      "Helen Goh"
     ],
     "a": [
      "Jennifer Lynch",
      "Evelyn Geating"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Christina Vuong"
     ],
     "a": [
      "Meggie Hodgson",
      "Meg Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Grady Craig",
      "Brad De Jesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 22,
     "h": [
      "Timothy Lowry",
      "Thomas Nguyen"
     ],
     "a": [
      "William Waggenspack",
      "Derek Lombardi"
     ]
    }
   ],
   "subs": [
    "Christina Vuong",
    "David Nguyen",
    "Dung Pham"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "APC Garden State",
   "away": "ACE Downingtown",
   "time": "2026-09-27T12:00:00",
   "complete": true,
   "homePoints": 552,
   "awayPoints": 647,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brandi Horowitz",
      "David Horowitz"
     ],
     "a": [
      "Katelyn Carretas",
      "Ryan Ablaza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Jonathan Jamison"
     ],
     "a": [
      "Jasmine Nguyen",
      "Holden Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Megan Torres",
      "Joseph Mckenna"
     ],
     "a": [
      "Jane Pascua",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Gerry Bissinger"
     ],
     "a": [
      "Esterlina Wiest",
      "Kevin Algarme"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrea Galanti",
      "Megan Torres"
     ],
     "a": [
      "Jane Pascua",
      "Jasmine Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Brandi Horowitz",
      "Viviane Tran"
     ],
     "a": [
      "Katelyn Carretas",
      "Lanz Santos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "David Horowitz",
      "Taylor Runyen"
     ],
     "a": [
      "Raymond Duong",
      "Jimmy Duong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jeff Stephenson",
      "Gerry Bissinger"
     ],
     "a": [
      "Ismael Hernandez",
      "Ryan Ablaza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Galanti",
      "Jonathan Jamison"
     ],
     "a": [
      "Esterlina Wiest",
      "Raymond Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Megan Torres",
      "Joseph Mckenna"
     ],
     "a": [
      "Maridel Ablaza",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Illyce Katz",
      "David Horowitz"
     ],
     "a": [
      "Jasmine Nguyen",
      "Holden Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Viviane Tran",
      "Jeff Stephenson"
     ],
     "a": [
      "Lanz Santos",
      "Kevin Algarme"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Andrea Galanti",
      "Viviane Tran"
     ],
     "a": [
      "Esterlina Wiest",
      "Jane Pascua"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Brandi Horowitz",
      "Megan Torres"
     ],
     "a": [
      "Maridel Ablaza",
      "Katelyn Carretas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Taylor Runyen",
      "Jonathan Jamison"
     ],
     "a": [
      "Raymond Duong",
      "Kevin Algarme"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gerry Bissinger",
      "Jeff Stephenson"
     ],
     "a": [
      "Holden Smith",
      "Jimmy Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "David Horowitz"
     ],
     "a": [
      "Esterlina Wiest",
      "Kevin Algarme"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brandi Horowitz",
      "Gerry Bissinger"
     ],
     "a": [
      "Maridel Ablaza",
      "Holden Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Viviane Tran",
      "Taylor Runyen"
     ],
     "a": [
      "Katelyn Carretas",
      "Ryan Ablaza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Joseph Mckenna"
     ],
     "a": [
      "Jasmine Nguyen",
      "Jimmy Duong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brandi Horowitz",
      "Andrea Galanti"
     ],
     "a": [
      "Jane Pascua",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Megan Torres",
      "Viviane Tran"
     ],
     "a": [
      "Jasmine Nguyen",
      "Katelyn Carretas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joseph Mckenna",
      "Gerry Bissinger"
     ],
     "a": [
      "Ismael Hernandez",
      "Raymond Duong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jonathan Jamison",
      "Jeff Stephenson"
     ],
     "a": [
      "Kevin Algarme",
      "Jimmy Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandi Horowitz",
      "Joseph Mckenna"
     ],
     "a": [
      "Katelyn Carretas",
      "Raymond Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Megan Torres",
      "David Horowitz"
     ],
     "a": [
      "Jane Pascua",
      "Ryan Ablaza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Viviane Tran",
      "Jeff Stephenson"
     ],
     "a": [
      "Maridel Ablaza",
      "Holden Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Taylor Runyen"
     ],
     "a": [
      "Esterlina Wiest",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brandi Horowitz",
      "Megan Torres"
     ],
     "a": [
      "Jane Pascua",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrea Galanti",
      "Viviane Tran"
     ],
     "a": [
      "Esterlina Wiest",
      "Maridel Ablaza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joseph Mckenna",
      "Gerry Bissinger"
     ],
     "a": [
      "Holden Smith",
      "Kevin Algarme"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Taylor Runyen",
      "Jonathan Jamison"
     ],
     "a": [
      "Ismael Hernandez",
      "Jimmy Duong"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "PickleRage Union County Pandas",
   "away": "Monroe",
   "time": "2026-09-27T12:00:00",
   "complete": true,
   "homePoints": 511,
   "awayPoints": 656,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Courtney Wu",
      "Joshua Reyes"
     ],
     "a": [
      "Linda Seemann",
      "Jason Paderon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Sarah Silva",
      "Juri Solano"
     ],
     "a": [
      "Filomena Rega",
      "Cory Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Appleton",
      "Marvin Steller"
     ],
     "a": [
      "Terri Pflueger",
      "Sean Greener"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Alicia Valko",
      "Jonathan Weisbrod"
     ],
     "a": [
      "Kelly Aylward",
      "Keith Fallon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sarah Silva",
      "Deborah Appleton"
     ],
     "a": [
      "Terri Pflueger",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Courtney Wu"
     ],
     "a": [
      "Melanie Gibson",
      "Linda Seemann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jonathan Weisbrod",
      "Juri Solano"
     ],
     "a": [
      "Sean Greener",
      "Paul Sokolson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joshua Reyes",
      "Jebril Guevarra"
     ],
     "a": [
      "Cory Mintz",
      "Keith Fallon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Jebril Guevarra"
     ],
     "a": [
      "Filomena Rega",
      "Cory Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alicia Valko",
      "Juri Solano"
     ],
     "a": [
      "Linda Seemann",
      "Sean Greener"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Silva",
      "Marvin Steller"
     ],
     "a": [
      "Melanie Gibson",
      "Paul Sokolson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Courtney Wu",
      "Joshua Reyes"
     ],
     "a": [
      "Kelly Aylward",
      "Jason Paderon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Deborah Appleton"
     ],
     "a": [
      "Terri Pflueger",
      "Melanie Gibson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Alicia Valko",
      "Courtney Wu"
     ],
     "a": [
      "Kelly Aylward",
      "Linda Seemann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marvin Steller",
      "Juri Solano"
     ],
     "a": [
      "Cory Mintz",
      "Jason Paderon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jebril Guevarra",
      "Jonathan Weisbrod"
     ],
     "a": [
      "Paul Sokolson",
      "Keith Fallon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Joshua Reyes"
     ],
     "a": [
      "Terri Pflueger",
      "Sean Greener"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Courtney Wu",
      "Marvin Steller"
     ],
     "a": [
      "Filomena Rega",
      "Jason Paderon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alicia Valko",
      "Juri Solano"
     ],
     "a": [
      "Kelly Aylward",
      "Keith Fallon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Deborah Appleton",
      "Jonathan Weisbrod"
     ],
     "a": [
      "Melanie Gibson",
      "Paul Sokolson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rachel Appleton",
      "Deborah Appleton"
     ],
     "a": [
      "Filomena Rega",
      "Kelly Aylward"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Courtney Wu",
      "Alicia Valko"
     ],
     "a": [
      "Terri Pflueger",
      "Linda Seemann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Weisbrod",
      "Juri Solano"
     ],
     "a": [
      "Sean Greener",
      "Jason Paderon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marvin Steller",
      "Joshua Reyes"
     ],
     "a": [
      "Cory Mintz",
      "Keith Fallon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Appleton",
      "Jonathan Weisbrod"
     ],
     "a": [
      "Linda Seemann",
      "Keith Fallon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Courtney Wu",
      "Marvin Steller"
     ],
     "a": [
      "Melanie Gibson",
      "Sean Greener"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Deborah Appleton",
      "Juri Solano"
     ],
     "a": [
      "Terri Pflueger",
      "Cory Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alicia Valko",
      "Joshua Reyes"
     ],
     "a": [
      "Filomena Rega",
      "Paul Sokolson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Appleton",
      "Alicia Valko"
     ],
     "a": [
      "Kelly Aylward",
      "Melanie Gibson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Deborah Appleton",
      "Courtney Wu"
     ],
     "a": [
      "Filomena Rega",
      "Terri Pflueger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jonathan Weisbrod",
      "Marvin Steller"
     ],
     "a": [
      "Paul Sokolson",
      "Jason Paderon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Juri Solano",
      "Joshua Reyes"
     ],
     "a": [
      "Sean Greener",
      "Cory Mintz"
     ]
    }
   ],
   "subs": [
    "Alicia Valko",
    "Joshua Reyes",
    "Jonathan Weisbrod",
    "Paul Sokolson",
    "Courtney Wu",
    "Deborah Appleton"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Players Courtyard",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-27T13:00:00",
   "complete": true,
   "homePoints": 524,
   "awayPoints": 635,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rebecca Woofter",
      "John Waggoner"
     ],
     "a": [
      "Salini Sontyana",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kim Kronberger",
      "Kerrin Wolf"
     ],
     "a": [
      "Rachel Searby",
      "Froilan Sunga"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jamie Walsh",
      "Christopher Knapp"
     ],
     "a": [
      "Radhika Sud",
      "Papa Aggrey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elisabeth Marshall",
      "James Conroy"
     ],
     "a": [
      "Donna Stone",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kim Kronberger",
      "Elisabeth Marshall"
     ],
     "a": [
      "Donna Stone",
      "Radhika Sud"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jamie Walsh",
      "Sophie O’Driscoll"
     ],
     "a": [
      "Lydia Madrilejos",
      "Rachel Searby"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "John Waggoner",
      "Dan Perkins"
     ],
     "a": [
      "Yash Mehta",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "James Conroy",
      "Kerrin Wolf"
     ],
     "a": [
      "Froilan Sunga",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sophie O’Driscoll",
      "Dan Perkins"
     ],
     "a": [
      "Radhika Sud",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rebecca Woofter",
      "John Waggoner"
     ],
     "a": [
      "Donna Stone",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kim Kronberger",
      "Christopher Knapp"
     ],
     "a": [
      "Salini Sontyana",
      "Miles Townsend"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elisabeth Marshall",
      "James Conroy"
     ],
     "a": [
      "Rachel Searby",
      "Froilan Sunga"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sophie O’Driscoll",
      "Elisabeth Marshall"
     ],
     "a": [
      "Radhika Sud",
      "Rachel Searby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamie Walsh",
      "Rebecca Woofter"
     ],
     "a": [
      "Lydia Madrilejos",
      "Salini Sontyana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kerrin Wolf",
      "Christopher Knapp"
     ],
     "a": [
      "Papa Aggrey",
      "Yash Mehta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "John Waggoner",
      "Dan Perkins"
     ],
     "a": [
      "Miles Townsend",
      "Froilan Sunga"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rebecca Woofter",
      "James Conroy"
     ],
     "a": [
      "Salini Sontyana",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sophie O’Driscoll",
      "Dan Perkins"
     ],
     "a": [
      "Donna Stone",
      "Papa Aggrey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kim Kronberger",
      "Kerrin Wolf"
     ],
     "a": [
      "Rachel Searby",
      "Prasad Mittapalli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jamie Walsh",
      "Christopher Knapp"
     ],
     "a": [
      "Lydia Madrilejos",
      "Froilan Sunga"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rebecca Woofter",
      "Kim Kronberger"
     ],
     "a": [
      "Donna Stone",
      "Salini Sontyana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamie Walsh",
      "Elisabeth Marshall"
     ],
     "a": [
      "Radhika Sud",
      "Rachel Searby"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kerrin Wolf",
      "James Conroy"
     ],
     "a": [
      "Prasad Mittapalli",
      "Yash Mehta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "John Waggoner",
      "Christopher Knapp"
     ],
     "a": [
      "Karthik Duraiyappan",
      "Papa Aggrey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Elisabeth Marshall",
      "Dan Perkins"
     ],
     "a": [
      "Radhika Sud",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sophie O’Driscoll",
      "John Waggoner"
     ],
     "a": [
      "Lydia Madrilejos",
      "Papa Aggrey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kim Kronberger",
      "James Conroy"
     ],
     "a": [
      "Salini Sontyana",
      "Miles Townsend"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamie Walsh",
      "Kerrin Wolf"
     ],
     "a": [
      "Donna Stone",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kim Kronberger",
      "Elisabeth Marshall"
     ],
     "a": [
      "Donna Stone",
      "Radhika Sud"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sophie O’Driscoll",
      "Rebecca Woofter"
     ],
     "a": [
      "Lydia Madrilejos",
      "Rachel Searby"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "John Waggoner",
      "James Conroy"
     ],
     "a": [
      "Karthik Duraiyappan",
      "Papa Aggrey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christopher Knapp",
      "Dan Perkins"
     ],
     "a": [
      "Miles Townsend",
      "Yash Mehta"
     ]
    }
   ],
   "subs": [
    "Dan Perkins",
    "Kerrin Wolf",
    "Lydia Madrilejos",
    "Salini Sontyana",
    "Donna Stone",
    "Christopher Knapp"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "PickleRage Union County Net Ninjas",
   "away": "Flemington",
   "time": "2026-09-27T13:00:00",
   "complete": true,
   "homePoints": 647,
   "awayPoints": 519,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ],
     "a": [
      "Meghan Klein",
      "Mark Wenstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kellie Roshak",
      "Carlos Echenique"
     ],
     "a": [
      "Jeannine Calhoun",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cassie Lou",
      "Brandon Agudelo"
     ],
     "a": [
      "Sheila Curran",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kerry Eskay",
      "Alex Sanchez"
     ],
     "a": [
      "Margo Langer",
      "Jeff Kesner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kellie Roshak",
      "Eva Rodriguez"
     ],
     "a": [
      "Jeannine Calhoun",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cassie Lou",
      "Connie Tom"
     ],
     "a": [
      "Sheila Curran",
      "Sharon Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ],
     "a": [
      "Jeff Kesner",
      "Butch Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Carlos Echenique",
      "Alex Sanchez"
     ],
     "a": [
      "Paul Matzko",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kerry Eskay",
      "Alex Sanchez"
     ],
     "a": [
      "Meghan Klein",
      "Mark Wenstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kellie Roshak",
      "Jayson Lee"
     ],
     "a": [
      "Jeannine Calhoun",
      "Jeff Kesner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Connie Tom",
      "Brandon Agudelo"
     ],
     "a": [
      "Sheila Curran",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Cassie Lou",
      "Jimmy Tom"
     ],
     "a": [
      "Margo Langer",
      "Butch Kreilick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cassie Lou",
      "Kerry Eskay"
     ],
     "a": [
      "Margo Langer",
      "Sheila Curran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Eva Rodriguez",
      "Kellie Roshak"
     ],
     "a": [
      "Sharon Oddy",
      "Jeannine Calhoun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Carlos Echenique",
      "Brandon Agudelo"
     ],
     "a": [
      "Butch Kreilick",
      "Paul Matzko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jimmy Tom",
      "Jayson Lee"
     ],
     "a": [
      "Lakshmikanth Chaluvadi",
      "Mark Wenstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eva Rodriguez",
      "Alex Sanchez"
     ],
     "a": [
      "Sharon Oddy",
      "Jeff Kesner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cassie Lou",
      "Brandon Agudelo"
     ],
     "a": [
      "Gail Hannagan",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kerry Eskay",
      "Jayson Lee"
     ],
     "a": [
      "Meghan Klein",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Connie Tom",
      "Jimmy Tom"
     ],
     "a": [
      "Sheila Curran",
      "Butch Kreilick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kellie Roshak",
      "Connie Tom"
     ],
     "a": [
      "Meghan Klein",
      "Margo Langer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eva Rodriguez",
      "Kerry Eskay"
     ],
     "a": [
      "Sharon Oddy",
      "Gail Hannagan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Cesar Alvarez",
      "Carlos Echenique"
     ],
     "a": [
      "Paul Matzko",
      "Mark Wenstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jimmy Tom",
      "Jayson Lee"
     ],
     "a": [
      "Jeff Kesner",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ],
     "a": [
      "Gail Hannagan",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kellie Roshak",
      "Carlos Echenique"
     ],
     "a": [
      "Sheila Curran",
      "Jeff Kesner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerry Eskay",
      "Jayson Lee"
     ],
     "a": [
      "Sharon Oddy",
      "Mark Wenstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Connie Tom",
      "Jimmy Tom"
     ],
     "a": [
      "Meghan Klein",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eva Rodriguez",
      "Kerry Eskay"
     ],
     "a": [
      "Meghan Klein",
      "Sheila Curran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kellie Roshak",
      "Connie Tom"
     ],
     "a": [
      "Gail Hannagan",
      "Margo Langer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cesar Alvarez",
      "Brandon Agudelo"
     ],
     "a": [
      "Jeff Kesner",
      "Paul Matzko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Carlos Echenique",
      "Alex Sanchez"
     ],
     "a": [
      "Mark Wenstrom",
      "Lakshmikanth Chaluvadi"
     ]
    }
   ],
   "subs": [
    "Mark Wenstrom",
    "Sharon Oddy",
    "Sheila Curran"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickle House",
   "time": "2026-09-27T15:00:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 538,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suki Wong",
      "Srinath Katari"
     ],
     "a": [
      "Taryn Seidner",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sultane Cosaj",
      "Reuben Zilber"
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
     "as": 11,
     "h": [
      "Charlene De Lara",
      "Ryan Peixoto"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Robert Leming"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Hee Kim",
      "Christopher Sachs"
     ],
     "a": [
      "Supriya Kothakonda",
      "Rakesh Roy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Suki Wong"
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
     "as": 10,
     "h": [
      "Sultane Cosaj",
      "Charlene De Lara"
     ],
     "a": [
      "Katie O'Mara",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ryan Peixoto",
      "Matthew Marciani"
     ],
     "a": [
      "Ross Bienstock",
      "Robert Leming"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christopher Sachs",
      "Srinath Katari"
     ],
     "a": [
      "Morgan Valencia King",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hee Kim",
      "Srinath Katari"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Charlene De Lara",
      "Reuben Zilber"
     ],
     "a": [
      "Taryn Seidner",
      "James Yu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sultane Cosaj",
      "Matthew Marciani"
     ],
     "a": [
      "Jen Ogorzat",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Suki Wong",
      "Ryan Peixoto"
     ],
     "a": [
      "Katie O'Mara",
      "Ross Bienstock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Charlene De Lara",
      "Hee Kim"
     ],
     "a": [
      "Taryn Seidner",
      "Jen Ogorzat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Sultane Cosaj"
     ],
     "a": [
      "Katie O'Mara",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Marciani",
      "Reuben Zilber"
     ],
     "a": [
      "Danny Ruiz",
      "James Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ryan Peixoto",
      "Christopher Sachs"
     ],
     "a": [
      "Rakesh Roy",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hee Kim",
      "Srinath Katari"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sultane Cosaj",
      "Matthew Marciani"
     ],
     "a": [
      "Supriya Kothakonda",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 2,
     "h": [
      "Nikki Nigro",
      "Reuben Zilber"
     ],
     "a": [
      "Katie O'Mara",
      "Robert Leming"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Suki Wong",
      "Ryan Peixoto"
     ],
     "a": [
      "Jen Ogorzat",
      "James Yu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlene De Lara",
      "Suki Wong"
     ],
     "a": [
      "Taryn Seidner",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nikki Nigro",
      "Hee Kim"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Srinath Katari",
      "Christopher Sachs"
     ],
     "a": [
      "Ross Bienstock",
      "Robert Leming"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Reuben Zilber",
      "Matthew Marciani"
     ],
     "a": [
      "James Yu",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Charlene De Lara",
      "Ryan Peixoto"
     ],
     "a": [
      "Taryn Seidner",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Srinath Katari"
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
     "as": 10,
     "h": [
      "Hee Kim",
      "Christopher Sachs"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sultane Cosaj",
      "Reuben Zilber"
     ],
     "a": [
      "Katie O'Mara",
      "James Yu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Charlene De Lara",
      "Suki Wong"
     ],
     "a": [
      "Taryn Seidner",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Nikki Nigro",
      "Sultane Cosaj"
     ],
     "a": [
      "Jen Ogorzat",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christopher Sachs",
      "Ryan Peixoto"
     ],
     "a": [
      "James Yu",
      "Rakesh Roy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Srinath Katari",
      "Matthew Marciani"
     ],
     "a": [
      "Morgan Valencia King",
      "Danny Ruiz"
     ]
    }
   ],
   "subs": [
    "Taryn Seidner",
    "Supriya Kothakonda",
    "Danny Ruiz",
    "Natalia Maciejewicz"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-27T15:00:00",
   "complete": true,
   "homePoints": 675,
   "awayPoints": 518,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Joan Harris",
      "Maxwell Winters"
     ],
     "a": [
      "Michelle Cobos",
      "Brandon Helicher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alexis Kerven",
      "Manuel Martorell"
     ],
     "a": [
      "Jade Chin",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Line Barlow",
      "Brian Seligson"
     ],
     "a": [
      "Nicole Melchionna",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Annica Jin-Hendel",
      "Alan Weissman"
     ],
     "a": [
      "Michele Sagurton",
      "Alex Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jenny Winters",
      "Annica Jin-Hendel"
     ],
     "a": [
      "Jade Chin",
      "Michele Sagurton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Line Barlow",
      "Alexis Kerven"
     ],
     "a": [
      "Nicole Melchionna",
      "Michelle Cobos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Brian Seligson",
      "Jose Chariez"
     ],
     "a": [
      "David Burke",
      "Barry Lerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maxwell Winters",
      "Manuel Martorell"
     ],
     "a": [
      "Brandon Helicher",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Joan Harris",
      "Alan Weissman"
     ],
     "a": [
      "Michele Sagurton",
      "Alex Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Line Barlow",
      "Jose Chariez"
     ],
     "a": [
      "Michelle Cobos",
      "Brandon Helicher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jenny Winters",
      "Maxwell Winters"
     ],
     "a": [
      "Jade Chin",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alexis Kerven",
      "Brian Seligson"
     ],
     "a": [
      "Nicole Melchionna",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jenny Winters",
      "Annica Jin-Hendel"
     ],
     "a": [
      "Jade Chin",
      "Michele Sagurton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Line Barlow",
      "Joan Harris"
     ],
     "a": [
      "Nicole Melchionna",
      "Michelle Cobos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Maxwell Winters",
      "Alan Weissman"
     ],
     "a": [
      "David Burke",
      "Barry Lerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jose Chariez",
      "Manuel Martorell"
     ],
     "a": [
      "Brandon Helicher",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alexis Kerven",
      "Jose Chariez"
     ],
     "a": [
      "Michele Sagurton",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joan Harris",
      "Brian Seligson"
     ],
     "a": [
      "Nicole Melchionna",
      "Brandon Helicher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jenny Winters",
      "Manuel Martorell"
     ],
     "a": [
      "Jade Chin",
      "Barry Lerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Annica Jin-Hendel",
      "Alan Weissman"
     ],
     "a": [
      "Michelle Cobos",
      "Alex Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Line Barlow",
      "Alexis Kerven"
     ],
     "a": [
      "Nicole Melchionna",
      "Michele Sagurton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joan Harris",
      "Jenny Winters"
     ],
     "a": [
      "Jade Chin",
      "Michelle Cobos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Brian Seligson",
      "Jose Chariez"
     ],
     "a": [
      "Lukas Chrebet",
      "Barry Lerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maxwell Winters",
      "Manuel Martorell"
     ],
     "a": [
      "David Burke",
      "Alex Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Line Barlow",
      "Brian Seligson"
     ],
     "a": [
      "Michele Sagurton",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alexis Kerven",
      "Maxwell Winters"
     ],
     "a": [
      "Nicole Melchionna",
      "Brandon Helicher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joan Harris",
      "Alan Weissman"
     ],
     "a": [
      "Jade Chin",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Annica Jin-Hendel",
      "Jose Chariez"
     ],
     "a": [
      "Michelle Cobos",
      "Alex Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Line Barlow",
      "Annica Jin-Hendel"
     ],
     "a": [
      "Nicole Melchionna",
      "Michele Sagurton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alexis Kerven",
      "Jenny Winters"
     ],
     "a": [
      "Jade Chin",
      "Michelle Cobos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maxwell Winters",
      "Brian Seligson"
     ],
     "a": [
      "David Burke",
      "Lukas Chrebet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alan Weissman",
      "Manuel Martorell"
     ],
     "a": [
      "Brandon Helicher",
      "Barry Lerner"
     ]
    }
   ],
   "subs": [
    "Manuel Martorell"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Open Play",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-27T15:00:00",
   "complete": true,
   "homePoints": 455,
   "awayPoints": 656,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lily Hahn",
      "Joseph Korom"
     ],
     "a": [
      "Allison Sobieski",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katie Li",
      "Paul Michael Serrano"
     ],
     "a": [
      "Zyanya Flores",
      "Thomas Carretta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Udita Agarwala",
      "Anbu Cheeralan"
     ],
     "a": [
      "Vanessa Tortorice",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Rashmi Patade",
      "Giomarco Urbina"
     ],
     "a": [
      "Sarah Dente",
      "Chris Balta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lily Hahn",
      "Katie Li"
     ],
     "a": [
      "Allison Sobieski",
      "Sarah Dente"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Charishma Serrano",
      "Lili Zhang"
     ],
     "a": [
      "Zyanya Flores",
      "Vanessa Tortorice"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Joseph Korom",
      "Paul Michael Serrano"
     ],
     "a": [
      "Michael Alfaro",
      "Lionell Matthews"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Todd Woodard",
      "Giomarco Urbina"
     ],
     "a": [
      "Chris Balta",
      "Kevin Altieri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lily Hahn",
      "Joseph Korom"
     ],
     "a": [
      "Zyanya Flores",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Katie Li",
      "Paul Michael Serrano"
     ],
     "a": [
      "Sarah Dente",
      "Kevin Altieri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lili Zhang",
      "Todd Woodard"
     ],
     "a": [
      "Allison Sobieski",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Udita Agarwala",
      "Anbu Cheeralan"
     ],
     "a": [
      "Vanessa Tortorice",
      "Chris Balta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katie Li",
      "Charishma Serrano"
     ],
     "a": [
      "Vanessa Tortorice",
      "Sarah Dente"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Lily Hahn",
      "Lili Zhang"
     ],
     "a": [
      "Allison Sobieski",
      "Zyanya Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joseph Korom",
      "Todd Woodard"
     ],
     "a": [
      "Michael Alfaro",
      "Thomas Carretta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anbu Cheeralan",
      "Giomarco Urbina"
     ],
     "a": [
      "Chris Balta",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lily Hahn",
      "Anbu Cheeralan"
     ],
     "a": [
      "Allison Sobieski",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Katie Li",
      "Joseph Korom"
     ],
     "a": [
      "Sarah Dente",
      "Kevin Altieri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Charishma Serrano",
      "Paul Michael Serrano"
     ],
     "a": [
      "Vanessa Tortorice",
      "Thomas Carretta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Rashmi Patade",
      "Giomarco Urbina"
     ],
     "a": [
      "Zyanya Flores",
      "Lionell Matthews"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lily Hahn",
      "Katie Li"
     ],
     "a": [
      "Allison Sobieski",
      "Sarah Dente"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rashmi Patade",
      "Udita Agarwala"
     ],
     "a": [
      "Zyanya Flores",
      "Vanessa Tortorice"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joseph Korom",
      "Todd Woodard"
     ],
     "a": [
      "Chris Balta",
      "Kevin Altieri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Anbu Cheeralan",
      "Giomarco Urbina"
     ],
     "a": [
      "Michael Alfaro",
      "Thomas Carretta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Katie Li",
      "Joseph Korom"
     ],
     "a": [
      "Vanessa Tortorice",
      "Michael Alfaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Lily Hahn",
      "Anbu Cheeralan"
     ],
     "a": [
      "Sarah Dente",
      "Lionell Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Charishma Serrano",
      "Paul Michael Serrano"
     ],
     "a": [
      "Allison Sobieski",
      "Thomas Carretta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lili Zhang",
      "Todd Woodard"
     ],
     "a": [
      "Zyanya Flores",
      "Kevin Altieri"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lily Hahn",
      "Charishma Serrano"
     ],
     "a": [
      "Allison Sobieski",
      "Vanessa Tortorice"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rashmi Patade",
      "Udita Agarwala"
     ],
     "a": [
      "Sarah Dente",
      "Zyanya Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Joseph Korom",
      "Paul Michael Serrano"
     ],
     "a": [
      "Chris Balta",
      "Thomas Carretta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Todd Woodard",
      "Giomarco Urbina"
     ],
     "a": [
      "Lionell Matthews",
      "Kevin Altieri"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Flemington",
   "away": "Monroe",
   "time": "2026-09-28T19:00:00",
   "complete": true,
   "homePoints": 629,
   "awayPoints": 594,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Bowers",
      "Eric Brezina"
     ],
     "a": [
      "Terri Pflueger",
      "Sean Greener"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Stangota",
      "Paul Matzko"
     ],
     "a": [
      "Liane Feyas",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Margo Langer",
      "Butch Kreilick"
     ],
     "a": [
      "Filomena Rega",
      "Stephen Fredericksen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Meghan Klein",
      "Jeff Kesner"
     ],
     "a": [
      "Catherine Malabanan",
      "Jason Paderon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelly Bowers",
      "Margo Langer"
     ],
     "a": [
      "Catherine Malabanan",
      "Abby Viola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Meghan Klein",
      "Sarah Stangota"
     ],
     "a": [
      "Liane Feyas",
      "Terri Pflueger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Brezina",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Cory Mintz",
      "Keith Fallon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Paul Matzko",
      "Jeff Kesner"
     ],
     "a": [
      "Sean Greener",
      "Jason Paderon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Margo Langer",
      "Jeff Kesner"
     ],
     "a": [
      "Catherine Malabanan",
      "Cory Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meghan Klein",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Terri Pflueger",
      "Stephen Fredericksen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelly Bowers",
      "Butch Kreilick"
     ],
     "a": [
      "Abby Viola",
      "Keith Fallon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
     ],
     "a": [
      "Filomena Rega",
      "Mike Hardy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Bowers",
      "Jeannine Calhoun"
     ],
     "a": [
      "Liane Feyas",
      "Terri Pflueger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Meghan Klein",
      "Sarah Stangota"
     ],
     "a": [
      "Filomena Rega",
      "Abby Viola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Paul Matzko",
      "Eric Brezina"
     ],
     "a": [
      "Jason Paderon",
      "Sean Greener"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jeff Kesner",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Stephen Fredericksen",
      "Mike Hardy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Jeannine Calhoun",
      "Butch Kreilick"
     ],
     "a": [
      "Abby Viola",
      "Cory Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelly Bowers",
      "Paul Matzko"
     ],
     "a": [
      "Catherine Malabanan",
      "Keith Fallon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meghan Klein",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Liane Feyas",
      "Sean Greener"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margo Langer",
      "Jeff Kesner"
     ],
     "a": [
      "Filomena Rega",
      "Jason Paderon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Meghan Klein",
      "Jeannine Calhoun"
     ],
     "a": [
      "Terri Pflueger",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Margo Langer",
      "Sarah Stangota"
     ],
     "a": [
      "Liane Feyas",
      "Catherine Malabanan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Butch Kreilick",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Keith Fallon",
      "Mike Hardy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Paul Matzko",
      "Eric Brezina"
     ],
     "a": [
      "Stephen Fredericksen",
      "Cory Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Margo Langer",
      "Paul Matzko"
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
     "as": 17,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
     ],
     "a": [
      "Terri Pflueger",
      "Sean Greener"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jeannine Calhoun",
      "Jeff Kesner"
     ],
     "a": [
      "Abby Viola",
      "Jason Paderon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kelly Bowers",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Filomena Rega",
      "Stephen Fredericksen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Margo Langer",
      "Kelly Bowers"
     ],
     "a": [
      "Terri Pflueger",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jeannine Calhoun",
      "Meghan Klein"
     ],
     "a": [
      "Liane Feyas",
      "Catherine Malabanan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeff Kesner",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Cory Mintz",
      "Keith Fallon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Butch Kreilick"
     ],
     "a": [
      "Sean Greener",
      "Stephen Fredericksen"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Open Play",
   "time": "2026-09-28T19:00:00",
   "complete": true,
   "homePoints": 631,
   "awayPoints": 514,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Suki Wong",
      "Srinath Katari"
     ],
     "a": [
      "Lily Hahn",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nikki Nigro",
      "Rob Stever"
     ],
     "a": [
      "Katie Li",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sultane Cosaj",
      "Jonathan Nieves"
     ],
     "a": [
      "Udita Agarwala",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Charlene De Lara",
      "Ryan Peixoto"
     ],
     "a": [
      "Nancy Pace",
      "Giomarco Urbina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Charlene De Lara",
      "Nikki Nigro"
     ],
     "a": [
      "Lily Hahn",
      "Katie Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Suki Wong",
      "Hee Kim"
     ],
     "a": [
      "Charishma Serrano",
      "Lili Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rob Stever",
      "Srinath Katari"
     ],
     "a": [
      "Joseph Korom",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ryan Peixoto",
      "Christopher Sachs"
     ],
     "a": [
      "Todd Woodard",
      "Giomarco Urbina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sultane Cosaj",
      "Ryan Peixoto"
     ],
     "a": [
      "Lily Hahn",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Nikki Nigro",
      "Rob Stever"
     ],
     "a": [
      "Katie Li",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Charlene De Lara",
      "Jonathan Nieves"
     ],
     "a": [
      "Lili Zhang",
      "Todd Woodard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hee Kim",
      "Christopher Sachs"
     ],
     "a": [
      "Udita Agarwala",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suki Wong",
      "Nikki Nigro"
     ],
     "a": [
      "Katie Li",
      "Charishma Serrano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Charlene De Lara",
      "Hee Kim"
     ],
     "a": [
      "Lily Hahn",
      "Lili Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Nieves",
      "Rob Stever"
     ],
     "a": [
      "Joseph Korom",
      "Todd Woodard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Srinath Katari",
      "Christopher Sachs"
     ],
     "a": [
      "Anbu Cheeralan",
      "Giomarco Urbina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hee Kim",
      "Jonathan Nieves"
     ],
     "a": [
      "Lily Hahn",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Charlene De Lara",
      "Rob Stever"
     ],
     "a": [
      "Katie Li",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suki Wong",
      "Ryan Peixoto"
     ],
     "a": [
      "Charishma Serrano",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nikki Nigro",
      "Christopher Sachs"
     ],
     "a": [
      "Nancy Pace",
      "Giomarco Urbina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Suki Wong",
      "Nikki Nigro"
     ],
     "a": [
      "Lily Hahn",
      "Katie Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hee Kim",
      "Sultane Cosaj"
     ],
     "a": [
      "Nancy Pace",
      "Udita Agarwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jonathan Nieves",
      "Rob Stever"
     ],
     "a": [
      "Joseph Korom",
      "Todd Woodard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Srinath Katari",
      "Christopher Sachs"
     ],
     "a": [
      "Anbu Cheeralan",
      "Giomarco Urbina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Suki Wong",
      "Rob Stever"
     ],
     "a": [
      "Katie Li",
      "Joseph Korom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nikki Nigro",
      "Jonathan Nieves"
     ],
     "a": [
      "Lily Hahn",
      "Anbu Cheeralan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sultane Cosaj",
      "Ryan Peixoto"
     ],
     "a": [
      "Charishma Serrano",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Charlene De Lara",
      "Srinath Katari"
     ],
     "a": [
      "Lili Zhang",
      "Todd Woodard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Charlene De Lara",
      "Nikki Nigro"
     ],
     "a": [
      "Lily Hahn",
      "Charishma Serrano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hee Kim",
      "Sultane Cosaj"
     ],
     "a": [
      "Nancy Pace",
      "Udita Agarwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rob Stever",
      "Srinath Katari"
     ],
     "a": [
      "Joseph Korom",
      "Paul Michael Serrano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ryan Peixoto",
      "Christopher Sachs"
     ],
     "a": [
      "Todd Woodard",
      "Giomarco Urbina"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "PickleRage Union County Net Ninjas",
   "away": "PickleRage Union County Pandas",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 649,
   "awayPoints": 544,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ],
     "a": [
      "Jessica Kopec",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kellie Roshak",
      "Carlos Echenique"
     ],
     "a": [
      "Thao Tran",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Huifang Yao",
      "Freddy Li"
     ],
     "a": [
      "Meredith Janeiro",
      "Marvin Steller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Connie Tom",
      "Jimmy Tom"
     ],
     "a": [
      "Sarah Silva",
      "Juri Solano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eva Rodriguez",
      "Kellie Roshak"
     ],
     "a": [
      "Jessica Kopec",
      "Sarah Silva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Huifang Yao",
      "Kerry Eskay"
     ],
     "a": [
      "Thao Tran",
      "Meredith Janeiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cesar Alvarez",
      "Carlos Echenique"
     ],
     "a": [
      "John Danks",
      "Jebril Guevarra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jayson Lee",
      "Jimmy Tom"
     ],
     "a": [
      "Kenneth Bautista",
      "Juri Solano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Huifang Yao",
      "Cesar Alvarez"
     ],
     "a": [
      "Meredith Janeiro",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eva Rodriguez",
      "Alex Sanchez"
     ],
     "a": [
      "Sarah Silva",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerry Eskay",
      "Carlos Echenique"
     ],
     "a": [
      "Jessica Kopec",
      "Jebril Guevarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Connie Tom",
      "Jayson Lee"
     ],
     "a": [
      "Thao Tran",
      "Kenneth Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kellie Roshak",
      "Connie Tom"
     ],
     "a": [
      "Jessica Kopec",
      "Sarah Silva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eva Rodriguez",
      "Kerry Eskay"
     ],
     "a": [
      "Meredith Janeiro",
      "Thao Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alex Sanchez",
      "Freddy Li"
     ],
     "a": [
      "Ed Amato",
      "Kenneth Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carlos Echenique",
      "Jayson Lee"
     ],
     "a": [
      "Marvin Steller",
      "Juri Solano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kellie Roshak",
      "Cesar Alvarez"
     ],
     "a": [
      "Meredith Janeiro",
      "Marvin Steller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Huifang Yao",
      "Jayson Lee"
     ],
     "a": [
      "Thao Tran",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kerry Eskay",
      "Freddy Li"
     ],
     "a": [
      "Jessica Kopec",
      "Jebril Guevarra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Connie Tom",
      "Jimmy Tom"
     ],
     "a": [
      "Sarah Silva",
      "Kenneth Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kellie Roshak",
      "Connie Tom"
     ],
     "a": [
      "Meredith Janeiro",
      "Sarah Silva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eva Rodriguez",
      "Kerry Eskay"
     ],
     "a": [
      "Thao Tran",
      "Jessica Kopec"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jimmy Tom",
      "Jayson Lee"
     ],
     "a": [
      "Marvin Steller",
      "Jebril Guevarra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carlos Echenique",
      "Alex Sanchez"
     ],
     "a": [
      "Juri Solano",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eva Rodriguez",
      "Cesar Alvarez"
     ],
     "a": [
      "Meredith Janeiro",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kellie Roshak",
      "Freddy Li"
     ],
     "a": [
      "Thao Tran",
      "Marvin Steller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kerry Eskay",
      "Alex Sanchez"
     ],
     "a": [
      "Jessica Kopec",
      "Kenneth Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Huifang Yao",
      "Jayson Lee"
     ],
     "a": [
      "Sarah Silva",
      "Juri Solano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Eva Rodriguez",
      "Kellie Roshak"
     ],
     "a": [
      "Thao Tran",
      "Jessica Kopec"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Huifang Yao",
      "Kerry Eskay"
     ],
     "a": [
      "Sarah Silva",
      "Meredith Janeiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cesar Alvarez",
      "Alex Sanchez"
     ],
     "a": [
      "Ed Amato",
      "John Danks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jimmy Tom",
      "Freddy Li"
     ],
     "a": [
      "Juri Solano",
      "Marvin Steller"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "Pickle House",
   "away": "Pickleball HQ",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 570,
   "awayPoints": 668,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Rakesh Roy"
     ],
     "a": [
      "Julianna Rodrigues",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Iqra Hasan-Calmo",
      "James Yu"
     ],
     "a": [
      "Jaymie Vincelli",
      "James Gillick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taryn Seidner",
      "Morgan Valencia King"
     ],
     "a": [
      "Jasmine Ho",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Sowa",
      "Gabe Nacion"
     ],
     "a": [
      "Diana Tabia",
      "David Abiog"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Supriya Kothakonda"
     ],
     "a": [
      "Lisa Sardo",
      "Jasmine Ho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Taryn Seidner"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alexander Babatunde",
      "Gabe Nacion"
     ],
     "a": [
      "Matthew Rafaniello",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rakesh Roy",
      "James Yu"
     ],
     "a": [
      "James Gillick",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Taryn Seidner",
      "Morgan Valencia King"
     ],
     "a": [
      "Julianna Rodrigues",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Alexander Babatunde"
     ],
     "a": [
      "Lisa Sardo",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Supriya Kothakonda",
      "Gabe Nacion"
     ],
     "a": [
      "Diana Tabia",
      "David Abiog"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Rakesh Roy"
     ],
     "a": [
      "Jaymie Vincelli",
      "James Gillick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Taryn Seidner"
     ],
     "a": [
      "Julianna Rodrigues",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Emily Sowa"
     ],
     "a": [
      "Lisa Sardo",
      "Jasmine Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 31,
     "as": 29,
     "h": [
      "Rakesh Roy",
      "James Yu"
     ],
     "a": [
      "Kenneth Ocasio",
      "James Gillick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gabe Nacion",
      "Morgan Valencia King"
     ],
     "a": [
      "Matthew Rafaniello",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Iqra Hasan-Calmo",
      "Morgan Valencia King"
     ],
     "a": [
      "Jaymie Vincelli",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Emily Sowa",
      "James Yu"
     ],
     "a": [
      "Julianna Rodrigues",
      "David Abiog"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Taryn Seidner",
      "Alexander Babatunde"
     ],
     "a": [
      "Diana Tabia",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Supriya Kothakonda",
      "Rakesh Roy"
     ],
     "a": [
      "Jasmine Ho",
      "James Gillick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taryn Seidner",
      "Supriya Kothakonda"
     ],
     "a": [
      "Lisa Sardo",
      "Jaymie Vincelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Emily Sowa"
     ],
     "a": [
      "Diana Tabia",
      "Jasmine Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alexander Babatunde",
      "James Yu"
     ],
     "a": [
      "Matthew Rafaniello",
      "David Abiog"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Morgan Valencia King",
      "Gabe Nacion"
     ],
     "a": [
      "Matthew Ferrante",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "James Yu"
     ],
     "a": [
      "Julianna Rodrigues",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jen Ogorzat",
      "Morgan Valencia King"
     ],
     "a": [
      "Jaymie Vincelli",
      "David Abiog"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Emily Sowa",
      "Gabe Nacion"
     ],
     "a": [
      "Jasmine Ho",
      "Matthew Ferrante"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Supriya Kothakonda",
      "Rakesh Roy"
     ],
     "a": [
      "Lisa Sardo",
      "Kenneth Ocasio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jen Ogorzat",
      "Supriya Kothakonda"
     ],
     "a": [
      "Julianna Rodrigues",
      "Lisa Sardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Iqra Hasan-Calmo",
      "Taryn Seidner"
     ],
     "a": [
      "Diana Tabia",
      "Jasmine Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gabe Nacion",
      "Rakesh Roy"
     ],
     "a": [
      "Matthew Rafaniello",
      "David Abiog"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "James Yu",
      "Morgan Valencia King"
     ],
     "a": [
      "Matthew Ferrante",
      "James Gillick"
     ]
    }
   ],
   "subs": [
    "Taryn Seidner",
    "Supriya Kothakonda"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Dill Dinkers Hatboro",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 508,
   "awayPoints": 641,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kristin Granath",
      "Andrew Frey"
     ],
     "a": [
      "Diahann Ouly",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stephanie Taxter",
      "Devin Kenny"
     ],
     "a": [
      "Halimah Maideen",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Haidee Midgley",
      "Steven Fernandez"
     ],
     "a": [
      "Sabiha Kermalli",
      "Howie Knudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Elizabeth Dailey",
      "Nathan Trimmer"
     ],
     "a": [
      "Patricia San Andres",
      "Peter Cao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Haidee Midgley",
      "Kristin Granath"
     ],
     "a": [
      "Diahann Ouly",
      "Patricia San Andres"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stephanie Taxter",
      "Jennifer Guldin"
     ],
     "a": [
      "Robin Pagotto",
      "Sabiha Kermalli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nathan Trimmer",
      "Andrew Frey"
     ],
     "a": [
      "Adam Werwie",
      "Howie Knudson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Steven Fernandez",
      "Michael Guldin"
     ],
     "a": [
      "Marcus Burritt",
      "Peter Cao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susan Li",
      "Elpidio Arias"
     ],
     "a": [
      "Patricia San Andres",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Guldin",
      "Devin Kenny"
     ],
     "a": [
      "Diahann Ouly",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Haidee Midgley",
      "Michael Guldin"
     ],
     "a": [
      "Halimah Maideen",
      "Peter Cao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Andrew Frey"
     ],
     "a": [
      "Suzane Sullivan",
      "Marcus Burritt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristin Granath",
      "Susan Li"
     ],
     "a": [
      "Halimah Maideen",
      "Robin Pagotto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Guldin",
      "Elizabeth Dailey"
     ],
     "a": [
      "Patricia San Andres",
      "Sabiha Kermalli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Steven Fernandez",
      "Elpidio Arias"
     ],
     "a": [
      "Adam Werwie",
      "Victor Salicetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nathan Trimmer",
      "Devin Kenny"
     ],
     "a": [
      "Howie Knudson",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristin Granath",
      "Andrew Frey"
     ],
     "a": [
      "Sabiha Kermalli",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Steven Fernandez"
     ],
     "a": [
      "Suzane Sullivan",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Susan Li",
      "Michael Guldin"
     ],
     "a": [
      "Robin Pagotto",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stephanie Taxter",
      "Nathan Trimmer"
     ],
     "a": [
      "Halimah Maideen",
      "Howie Knudson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stephanie Taxter",
      "Jennifer Guldin"
     ],
     "a": [
      "Halimah Maideen",
      "Patricia San Andres"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Elizabeth Dailey"
     ],
     "a": [
      "Diahann Ouly",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Guldin",
      "Nathan Trimmer"
     ],
     "a": [
      "Howie Knudson",
      "Victor Salicetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Devin Kenny",
      "Andrew Frey"
     ],
     "a": [
      "Adam Werwie",
      "Marcus Burritt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kristin Granath",
      "Steven Fernandez"
     ],
     "a": [
      "Diahann Ouly",
      "Adam Werwie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Guldin",
      "Devin Kenny"
     ],
     "a": [
      "Robin Pagotto",
      "Victor Salicetti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Susan Li",
      "Michael Guldin"
     ],
     "a": [
      "Suzane Sullivan",
      "Howie Knudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elizabeth Dailey",
      "Elpidio Arias"
     ],
     "a": [
      "Sabiha Kermalli",
      "Marcus Burritt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Haidee Midgley",
      "Susan Li"
     ],
     "a": [
      "Robin Pagotto",
      "Suzane Sullivan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristin Granath",
      "Jennifer Guldin"
     ],
     "a": [
      "Halimah Maideen",
      "Sabiha Kermalli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michael Guldin",
      "Nathan Trimmer"
     ],
     "a": [
      "Adam Werwie",
      "Victor Salicetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steven Fernandez",
      "Elpidio Arias"
     ],
     "a": [
      "Marcus Burritt",
      "Howie Knudson"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 683,
   "awayPoints": 387,
   "homeGW": 32,
   "awayGW": 0,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kimberley Levins",
      "Thomas Carretta"
     ],
     "a": [
      "Michele Sagurton",
      "Alexander Masotti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zyanya Flores",
      "James Cooper"
     ],
     "a": [
      "Nicole Melchionna",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarah Dente",
      "Lionell Matthews"
     ],
     "a": [
      "Jade Chin",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Allison Sobieski",
      "Michael Alfaro"
     ],
     "a": [
      "Rachael Osetkowski",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Zyanya Flores",
      "Sarah Dente"
     ],
     "a": [
      "Jade Chin",
      "Chantya Roberson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Allison Sobieski",
      "Kimberley Levins"
     ],
     "a": [
      "Rachael Osetkowski",
      "Michele Sagurton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Chris Balta",
      "Kevin Altieri"
     ],
     "a": [
      "Alexander Masotti",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Michael Alfaro",
      "James Cooper"
     ],
     "a": [
      "David Burke",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarah Dente",
      "Kevin Altieri"
     ],
     "a": [
      "Nicole Melchionna",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kimberley Levins",
      "Michael Alfaro"
     ],
     "a": [
      "Chantya Roberson",
      "Alexander Masotti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vanessa Tortorice",
      "James Cooper"
     ],
     "a": [
      "Jade Chin",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zyanya Flores",
      "Lionell Matthews"
     ],
     "a": [
      "Rachael Osetkowski",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Vanessa Tortorice",
      "Allison Sobieski"
     ],
     "a": [
      "Nicole Melchionna",
      "Michele Sagurton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kimberley Levins",
      "Sarah Dente"
     ],
     "a": [
      "Rachael Osetkowski",
      "Jade Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Thomas Carretta",
      "Kevin Altieri"
     ],
     "a": [
      "Ricardo Fontanilla",
      "Alexander Masotti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "James Cooper",
      "Lionell Matthews"
     ],
     "a": [
      "David Burke",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zyanya Flores",
      "Kevin Altieri"
     ],
     "a": [
      "Chantya Roberson",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Kimberley Levins",
      "Thomas Carretta"
     ],
     "a": [
      "Nicole Melchionna",
      "Alexander Masotti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vanessa Tortorice",
      "James Cooper"
     ],
     "a": [
      "Rachael Osetkowski",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Allison Sobieski",
      "Lionell Matthews"
     ],
     "a": [
      "Jade Chin",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kimberley Levins",
      "Vanessa Tortorice"
     ],
     "a": [
      "Michele Sagurton",
      "Jade Chin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Allison Sobieski",
      "Sarah Dente"
     ],
     "a": [
      "Rachael Osetkowski",
      "Chantya Roberson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Thomas Carretta",
      "Michael Alfaro"
     ],
     "a": [
      "Alexander Masotti",
      "David Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kevin Altieri",
      "Chris Balta"
     ],
     "a": [
      "Ricardo Fontanilla",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vanessa Tortorice",
      "Lionell Matthews"
     ],
     "a": [
      "Jade Chin",
      "Ricardo Fontanilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sarah Dente",
      "Thomas Carretta"
     ],
     "a": [
      "Chantya Roberson",
      "Alexander Masotti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Allison Sobieski",
      "James Cooper"
     ],
     "a": [
      "Rachael Osetkowski",
      "David Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zyanya Flores",
      "Chris Balta"
     ],
     "a": [
      "Nicole Melchionna",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vanessa Tortorice",
      "Sarah Dente"
     ],
     "a": [
      "Nicole Melchionna",
      "Michele Sagurton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Allison Sobieski",
      "Zyanya Flores"
     ],
     "a": [
      "Jade Chin",
      "Rachael Osetkowski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Thomas Carretta",
      "Chris Balta"
     ],
     "a": [
      "Alexander Masotti",
      "David Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kevin Altieri",
      "James Cooper"
     ],
     "a": [
      "Ricardo Fontanilla",
      "Alex Glushek"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Bounce Philly",
   "away": "ACE Downingtown",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 572,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Meggie Hodgson",
      "Grady Craig"
     ],
     "a": [
      "Jane Pascua",
      "Jimmy Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Meg Kelly",
      "Brad De Jesus"
     ],
     "a": [
      "Lanz Santos",
      "Ryan Ablaza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jennifer Lynch",
      "Derek Lombardi"
     ],
     "a": [
      "Maridel Ablaza",
      "Taylor Newell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Evelyn Geating",
      "William Waggenspack"
     ],
     "a": [
      "Esterlina Wiest",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Meggie Hodgson",
      "Evelyn Geating"
     ],
     "a": [
      "Jane Pascua",
      "Lanz Santos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Thuy Le",
      "Jennifer Lynch"
     ],
     "a": [
      "Maridel Ablaza",
      "Crizle Ong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "William Waggenspack",
      "Grady Craig"
     ],
     "a": [
      "Ismael Hernandez",
      "Ryan Ablaza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brad De Jesus",
      "Corey Abrams"
     ],
     "a": [
      "Taylor Newell",
      "Jimmy Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Meg Kelly",
      "Corey Abrams"
     ],
     "a": [
      "Esterlina Wiest",
      "Jimmy Duong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thuy Le",
      "William Waggenspack"
     ],
     "a": [
      "Jane Pascua",
      "John Defilippo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Meggie Hodgson",
      "Derek Lombardi"
     ],
     "a": [
      "Crizle Ong",
      "Taylor Newell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 31,
     "as": 29,
     "h": [
      "Evelyn Geating",
      "Grady Craig"
     ],
     "a": [
      "Maridel Ablaza",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Jennifer Lynch"
     ],
     "a": [
      "Esterlina Wiest",
      "Jane Pascua"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Meg Kelly",
      "Thuy Le"
     ],
     "a": [
      "Lanz Santos",
      "Crizle Ong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Grady Craig",
      "Corey Abrams"
     ],
     "a": [
      "Ryan Ablaza",
      "Jimmy Duong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brad De Jesus",
      "Derek Lombardi"
     ],
     "a": [
      "John Defilippo",
      "Rommel Santos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Lynch",
      "Corey Abrams"
     ],
     "a": [
      "Lanz Santos",
      "Ryan Ablaza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Meggie Hodgson",
      "Derek Lombardi"
     ],
     "a": [
      "Maridel Ablaza",
      "John Defilippo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Meg Kelly",
      "Brad De Jesus"
     ],
     "a": [
      "Crizle Ong",
      "Rommel Santos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Thuy Le",
      "William Waggenspack"
     ],
     "a": [
      "Esterlina Wiest",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meggie Hodgson",
      "Meg Kelly"
     ],
     "a": [
      "Esterlina Wiest",
      "Jane Pascua"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Evelyn Geating",
      "Jennifer Lynch"
     ],
     "a": [
      "Maridel Ablaza",
      "Lanz Santos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 3,
     "h": [
      "William Waggenspack",
      "Corey Abrams"
     ],
     "a": [
      "Ismael Hernandez",
      "Jimmy Duong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Grady Craig",
      "Derek Lombardi"
     ],
     "a": [
      "Taylor Newell",
      "Ryan Ablaza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Lynch",
      "Corey Abrams"
     ],
     "a": [
      "Jane Pascua",
      "Taylor Newell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thuy Le",
      "Brad De Jesus"
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
     "as": 10,
     "h": [
      "Meggie Hodgson",
      "William Waggenspack"
     ],
     "a": [
      "Crizle Ong",
      "John Defilippo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Evelyn Geating",
      "Grady Craig"
     ],
     "a": [
      "Maridel Ablaza",
      "Ismael Hernandez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Meggie Hodgson",
      "Meg Kelly"
     ],
     "a": [
      "Jane Pascua",
      "Crizle Ong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Thuy Le",
      "Evelyn Geating"
     ],
     "a": [
      "Esterlina Wiest",
      "Maridel Ablaza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "William Waggenspack",
      "Grady Craig"
     ],
     "a": [
      "Ismael Hernandez",
      "Ryan Ablaza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brad De Jesus",
      "Derek Lombardi"
     ],
     "a": [
      "Rommel Santos",
      "Taylor Newell"
     ]
    }
   ],
   "subs": [
    "Crizle Ong"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Pickle Juice Blackwood",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 465,
   "awayPoints": 671,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Trisha Marion",
      "Adolfo Nicdao"
     ],
     "a": [
      "Rachel Searby",
      "Robert Hudson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lisa Murphy",
      "Jason Grote"
     ],
     "a": [
      "Brittany Riccitiello",
      "Papa Aggrey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michele Iannella",
      "Michael Van Horn"
     ],
     "a": [
      "Radhika Sud",
      "Froilan Sunga"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Lawrence Dipietro"
     ],
     "a": [
      "Salini Sontyana",
      "Miles Townsend"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Michele Iannella Sr."
     ],
     "a": [
      "Salini Sontyana",
      "Brittany Riccitiello"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Katherine Mott"
     ],
     "a": [
      "Hailee Kurlander",
      "Rachel Searby"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kordell Alexander",
      "Jason Grote"
     ],
     "a": [
      "Yash Mehta",
      "Miles Townsend"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Michael Van Horn",
      "Lawrence Dipietro"
     ],
     "a": [
      "Papa Aggrey",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Katherine Mott",
      "Adolfo Nicdao"
     ],
     "a": [
      "Brittany Riccitiello",
      "Papa Aggrey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Michael Van Horn"
     ],
     "a": [
      "Rachel Searby",
      "Froilan Sunga"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Kordell Alexander"
     ],
     "a": [
      "Radhika Sud",
      "Miles Townsend"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michele Iannella",
      "Jason Grote"
     ],
     "a": [
      "Hailee Kurlander",
      "Robert Hudson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Katherine Mott"
     ],
     "a": [
      "Brittany Riccitiello",
      "Rachel Searby"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lisa Murphy",
      "Michele Iannella"
     ],
     "a": [
      "Hailee Kurlander",
      "Salini Sontyana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "John Dechristopher",
      "Adolfo Nicdao"
     ],
     "a": [
      "Robert Hudson",
      "Yash Mehta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Van Horn",
      "Lawrence Dipietro"
     ],
     "a": [
      "Karthik Duraiyappan",
      "Froilan Sunga"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Lisa Murphy",
      "Adolfo Nicdao"
     ],
     "a": [
      "Brittany Riccitiello",
      "Yash Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Trisha Marion",
      "John Dechristopher"
     ],
     "a": [
      "Hailee Kurlander",
      "Papa Aggrey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Karen Marshall",
      "Michael Van Horn"
     ],
     "a": [
      "Radhika Sud",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Katherine Mott",
      "Lawrence Dipietro"
     ],
     "a": [
      "Salini Sontyana",
      "Miles Townsend"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Michele Iannella Sr."
     ],
     "a": [
      "Rachel Searby",
      "Salini Sontyana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Michele Iannella"
     ],
     "a": [
      "Hailee Kurlander",
      "Radhika Sud"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kordell Alexander",
      "John Dechristopher"
     ],
     "a": [
      "Yash Mehta",
      "Robert Hudson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lawrence Dipietro",
      "Jason Grote"
     ],
     "a": [
      "Froilan Sunga",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michele Iannella Sr.",
      "John Dechristopher"
     ],
     "a": [
      "Rachel Searby",
      "Froilan Sunga"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Trisha Marion",
      "Jason Grote"
     ],
     "a": [
      "Salini Sontyana",
      "Karthik Duraiyappan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Murphy",
      "Lawrence Dipietro"
     ],
     "a": [
      "Radhika Sud",
      "Miles Townsend"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michele Iannella",
      "Michael Van Horn"
     ],
     "a": [
      "Hailee Kurlander",
      "Robert Hudson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Michele Iannella Sr.",
      "Katherine Mott"
     ],
     "a": [
      "Brittany Riccitiello",
      "Radhika Sud"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Karen Marshall",
      "Lisa Murphy"
     ],
     "a": [
      "Rachel Searby",
      "Salini Sontyana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 3,
     "as": 21,
     "h": [
      "Lawrence Dipietro",
      "Kordell Alexander"
     ],
     "a": [
      "Yash Mehta",
      "Papa Aggrey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Van Horn",
      "Jason Grote"
     ],
     "a": [
      "Miles Townsend",
      "Froilan Sunga"
     ]
    }
   ],
   "subs": [
    "Salini Sontyana"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Bounce Tempest",
   "away": "APC Garden State",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 585,
   "awayPoints": 571,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Megan Quigley",
      "Jason Nguyen"
     ],
     "a": [
      "Andrea Galanti",
      "Inho Andrew Yuh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Thuy Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Abby Sprinkel",
      "Craig Batzar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Quynh Nguyen",
      "David Tran"
     ],
     "a": [
      "Brandi Horowitz",
      "Jeff Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mai Chan",
      "Thomas Nguyen"
     ],
     "a": [
      "Megan Torres",
      "David Horowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Megan Quigley",
      "Claire Nguyen"
     ],
     "a": [
      "Brandi Horowitz",
      "Michele Costigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mai Chan",
      "Helen Goh"
     ],
     "a": [
      "Megan Torres",
      "Viviane Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Timothy Lowry",
      "Peter Lien"
     ],
     "a": [
      "Craig Batzar",
      "Inho Andrew Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jason Nguyen",
      "David Tran"
     ],
     "a": [
      "Gerry Bissinger",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Thuy Nguyen",
      "Jason Nguyen"
     ],
     "a": [
      "Andrea Galanti",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Abby Sprinkel",
      "Jeff Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Megan Quigley",
      "Thang Nguyen"
     ],
     "a": [
      "Brandi Horowitz",
      "Gerry Bissinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Timothy Lowry"
     ],
     "a": [
      "Michele Costigan",
      "David Horowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Megan Quigley",
      "Thuy Nguyen"
     ],
     "a": [
      "Megan Torres",
      "Andrea Galanti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mai Chan",
      "Quynh Nguyen"
     ],
     "a": [
      "Abby Sprinkel",
      "Viviane Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Tran",
      "Thang Nguyen"
     ],
     "a": [
      "Gerry Bissinger",
      "Inho Andrew Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jason Nguyen",
      "Peter Lien"
     ],
     "a": [
      "Craig Batzar",
      "David Horowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Megan Quigley",
      "Timothy Lowry"
     ],
     "a": [
      "Andrea Galanti",
      "Jeff Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Thomas Nguyen"
     ],
     "a": [
      "Brandi Horowitz",
      "David Horowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "David Tran"
     ],
     "a": [
      "Michele Costigan",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Helen Goh",
      "Peter Lien"
     ],
     "a": [
      "Viviane Tran",
      "Craig Batzar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Thuy Nguyen",
      "Mai Chan"
     ],
     "a": [
      "Abby Sprinkel",
      "Michele Costigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Helen Goh"
     ],
     "a": [
      "Megan Torres",
      "Viviane Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Timothy Lowry",
      "Peter Lien"
     ],
     "a": [
      "Inho Andrew Yuh",
      "Craig Batzar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jason Nguyen",
      "David Tran"
     ],
     "a": [
      "Gerry Bissinger",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Claire Nguyen",
      "Thang Nguyen"
     ],
     "a": [
      "Andrea Galanti",
      "Jeff Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Helen Goh",
      "Peter Lien"
     ],
     "a": [
      "Abby Sprinkel",
      "Inho Andrew Yuh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Megan Quigley",
      "David Tran"
     ],
     "a": [
      "Brandi Horowitz",
      "Gerry Bissinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mai Chan",
      "Jason Nguyen"
     ],
     "a": [
      "Michele Costigan",
      "David Horowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Megan Quigley",
      "Thuy Nguyen"
     ],
     "a": [
      "Megan Torres",
      "Andrea Galanti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mai Chan",
      "Quynh Nguyen"
     ],
     "a": [
      "Michele Costigan",
      "Viviane Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Thomas Nguyen",
      "Timothy Lowry"
     ],
     "a": [
      "Craig Batzar",
      "Jamie West"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "David Tran",
      "Thang Nguyen"
     ],
     "a": [
      "Gerry Bissinger",
      "Jeff Stephenson"
     ]
    }
   ],
   "subs": [
    "David Tran"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Pickleball Palace",
   "away": "Home Court",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 599,
   "awayPoints": 580,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Line Barlow",
      "Brian Seligson"
     ],
     "a": [
      "Alyssa Beattie",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joan Harris",
      "Andrew Kimmel"
     ],
     "a": [
      "Kristin Larosa",
      "David Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alexis Kerven",
      "Rhys Gardiner"
     ],
     "a": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Anne Buckley",
      "Maxwell Winters"
     ],
     "a": [
      "Danica Bramschreiber",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Anne Buckley",
      "Line Barlow"
     ],
     "a": [
      "Danica Bramschreiber",
      "Rosellen Perlowitz"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Maggie Wang",
      "Alexis Kerven"
     ],
     "a": [
      "Kristin Larosa",
      "Andrea Popovich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rhys Gardiner",
      "Maxwell Winters"
     ],
     "a": [
      "David Schwartz",
      "Robert Paniti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrew Kimmel",
      "Alan Weissman"
     ],
     "a": [
      "Marc Matalon",
      "Marvin Lao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Joan Harris",
      "Alan Weissman"
     ],
     "a": [
      "Andrea Popovich",
      "Marc Matalon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anne Buckley",
      "Maxwell Winters"
     ],
     "a": [
      "Alyssa Beattie",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alexis Kerven",
      "Brian Seligson"
     ],
     "a": [
      "Kristin Larosa",
      "David Cartwright"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Line Barlow",
      "Rhys Gardiner"
     ],
     "a": [
      "Danica Bramschreiber",
      "Marvin Lao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alexis Kerven",
      "Line Barlow"
     ],
     "a": [
      "Rosellen Perlowitz",
      "Alyssa Beattie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anne Buckley",
      "Joan Harris"
     ],
     "a": [
      "Danica Bramschreiber",
      "Kristin Larosa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maxwell Winters",
      "Andrew Kimmel"
     ],
     "a": [
      "Robert Paniti",
      "Marc Matalon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rhys Gardiner",
      "Alan Weissman"
     ],
     "a": [
      "David Cartwright",
      "David Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anne Buckley",
      "Rhys Gardiner"
     ],
     "a": [
      "Rosellen Perlowitz",
      "Robert Paniti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alexis Kerven",
      "Brian Seligson"
     ],
     "a": [
      "Kristin Larosa",
      "David Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Line Barlow",
      "Maxwell Winters"
     ],
     "a": [
      "Alyssa Beattie",
      "Marvin Lao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joan Harris",
      "Alan Weissman"
     ],
     "a": [
      "Andrea Popovich",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Line Barlow",
      "Alexis Kerven"
     ],
     "a": [
      "Alyssa Beattie",
      "Kristin Larosa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anne Buckley",
      "Joan Harris"
     ],
     "a": [
      "Danica Bramschreiber",
      "Andrea Popovich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andrew Kimmel",
      "Alan Weissman"
     ],
     "a": [
      "Marvin Lao",
      "Brian Perlowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rhys Gardiner",
      "Brian Seligson"
     ],
     "a": [
      "David Cartwright",
      "David Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Anne Buckley",
      "Maxwell Winters"
     ],
     "a": [
      "Alyssa Beattie",
      "David Schwartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alexis Kerven",
      "Rhys Gardiner"
     ],
     "a": [
      "Danica Bramschreiber",
      "Robert Paniti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joan Harris",
      "Andrew Kimmel"
     ],
     "a": [
      "Kristin Larosa",
      "Marc Matalon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Line Barlow",
      "Brian Seligson"
     ],
     "a": [
      "Rosellen Perlowitz",
      "David Cartwright"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Joan Harris",
      "Alexis Kerven"
     ],
     "a": [
      "Rosellen Perlowitz",
      "Andrea Popovich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anne Buckley",
      "Line Barlow"
     ],
     "a": [
      "Alyssa Beattie",
      "Danica Bramschreiber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrew Kimmel",
      "Brian Seligson"
     ],
     "a": [
      "David Cartwright",
      "Marvin Lao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rhys Gardiner",
      "Maxwell Winters"
     ],
     "a": [
      "Brian Perlowitz",
      "Marc Matalon"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Players Courtyard",
   "away": "Picklr Newark",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 624,
   "awayPoints": 580,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rebecca Woofter",
      "John Waggoner"
     ],
     "a": [
      "Ashley Altman",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Elisabeth Marshall",
      "Josh Ruble"
     ],
     "a": [
      "Sandy Duarte",
      "Matthew Cohen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Melissa Mackey",
      "Colin Mackey"
     ],
     "a": [
      "Kris Miller",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sophie O’Driscoll",
      "Ryan Benetz"
     ],
     "a": [
      "Tiffany Weinert",
      "Jonathan Briones"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rebecca Woofter",
      "Sophie O’Driscoll"
     ],
     "a": [
      "Ashley Altman",
      "Lauren Gabat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jackie Bowes",
      "Melissa Mackey"
     ],
     "a": [
      "Kris Miller",
      "Sandy Duarte"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "John Waggoner",
      "Colin Mackey"
     ],
     "a": [
      "Bill Dower",
      "Thomas Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ryan Benetz",
      "James Conroy"
     ],
     "a": [
      "Matthew Cohen",
      "Simon Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Melissa Mackey",
      "Colin Mackey"
     ],
     "a": [
      "Ashley Altman",
      "Jonathan Briones"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jackie Bowes",
      "Josh Ruble"
     ],
     "a": [
      "Kris Miller",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rebecca Woofter",
      "John Waggoner"
     ],
     "a": [
      "Lauren Gabat",
      "Matthew Cohen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Elisabeth Marshall",
      "James Conroy"
     ],
     "a": [
      "Tiffany Weinert",
      "Simon Burns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Melissa Mackey",
      "Rebecca Woofter"
     ],
     "a": [
      "Lauren Gabat",
      "Tiffany Weinert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elisabeth Marshall",
      "Sophie O’Driscoll"
     ],
     "a": [
      "Sandy Duarte",
      "Ashley Altman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Colin Mackey",
      "Josh Ruble"
     ],
     "a": [
      "Thomas Lum",
      "Matthew Cohen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ryan Benetz",
      "James Conroy"
     ],
     "a": [
      "Simon Burns",
      "Jonathan Briones"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Elisabeth Marshall",
      "Josh Ruble"
     ],
     "a": [
      "Lauren Gabat",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jackie Bowes",
      "John Waggoner"
     ],
     "a": [
      "Sandy Duarte",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rebecca Woofter",
      "Ryan Benetz"
     ],
     "a": [
      "Tiffany Weinert",
      "Jonathan Briones"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sophie O’Driscoll",
      "James Conroy"
     ],
     "a": [
      "Kris Miller",
      "Simon Burns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jackie Bowes",
      "Melissa Mackey"
     ],
     "a": [
      "Ashley Altman",
      "Tiffany Weinert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elisabeth Marshall",
      "Sophie O’Driscoll"
     ],
     "a": [
      "Kris Miller",
      "Sandy Duarte"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ryan Benetz",
      "John Waggoner"
     ],
     "a": [
      "Thomas Lum",
      "Jonathan Briones"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Josh Ruble",
      "Colin Mackey"
     ],
     "a": [
      "Matthew Cohen",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jackie Bowes",
      "Colin Mackey"
     ],
     "a": [
      "Ashley Altman",
      "Bill Dower"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sophie O’Driscoll",
      "James Conroy"
     ],
     "a": [
      "Kris Miller",
      "Thomas Lum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rebecca Woofter",
      "Ryan Benetz"
     ],
     "a": [
      "Tiffany Weinert",
      "Matthew Cohen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Melissa Mackey",
      "John Waggoner"
     ],
     "a": [
      "Lauren Gabat",
      "Simon Burns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Elisabeth Marshall",
      "Melissa Mackey"
     ],
     "a": [
      "Ashley Altman",
      "Lauren Gabat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sophie O’Driscoll",
      "Rebecca Woofter"
     ],
     "a": [
      "Sandy Duarte",
      "Tiffany Weinert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "John Waggoner",
      "Josh Ruble"
     ],
     "a": [
      "Bill Dower",
      "Thomas Lum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "James Conroy",
      "Colin Mackey"
     ],
     "a": [
      "Jonathan Briones",
      "Simon Burns"
     ]
    }
   ],
   "subs": [
    "Melissa Mackey"
   ]
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball HQ",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-05T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Flemington",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-10-05T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Palace",
   "away": "PickleRage Union County Pandas",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Players Courtyard",
   "away": "Bounce Tempest",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "PickleRage Union County Net Ninjas",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Picklr Newark",
   "away": "Bounce Philly",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "ACE Downingtown",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickle Juice Blackwood",
   "away": "APC Garden State",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickle House",
   "away": "Monroe",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Open Play",
   "away": "Home Court",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-12T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball HQ",
   "away": "Monroe",
   "time": "2026-10-12T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "APC Garden State",
   "away": "Bounce Tempest",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Picklr Newark",
   "away": "Players Courtyard",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "PickleRage Union County Pandas",
   "away": "Home Court",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "ACE Downingtown",
   "away": "Bounce Philly",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Open Play",
   "away": "PickleRage Union County Net Ninjas",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Pickle House",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Jersey Pickleball Club",
   "away": "Flemington",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Palace",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball HQ",
   "away": "Flemington",
   "time": "2026-10-19T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Hamilton",
   "away": "ACE Downingtown",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Open Play",
   "away": "PickleRage Union County Pandas",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Pickleball Club",
   "away": "Pickle House",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Philly",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Home Court",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickle Juice Blackwood",
   "away": "Players Courtyard",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Monroe",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "PickleRage Union County Net Ninjas",
   "away": "Pickleball Palace",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Picklr Newark",
   "away": "Bounce Tempest",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Philly",
   "away": "APC Garden State",
   "time": "2026-10-24T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickle House",
   "away": "PickleRage Union County Pandas",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Picklr Newark",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Home Court",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Bounce Tempest",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Pickleball Club",
   "away": "Open Play",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball HQ",
   "away": "Pickleball Palace",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro",
   "away": "Players Courtyard",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "ACE Downingtown",
   "away": "Pickle Juice Blackwood",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Monroe",
   "away": "PickleRage Union County Net Ninjas",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-26T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Tempest",
   "away": "ACE Downingtown",
   "time": "2026-10-26T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Players Courtyard",
   "away": "Bounce Philly",
   "time": "2026-10-26T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Newark",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-10-26T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Monroe",
   "time": "2026-10-26T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickle Juice Blackwood",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-26T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Flemington",
   "away": "Pickle House",
   "time": "2026-11-02T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "PickleRage Union County Pandas",
   "time": "2026-11-02T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "PickleRage Union County Net Ninjas",
   "away": "Home Court",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Pickleball HQ",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Philly",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Dill Dinkers Hatboro",
   "away": "ACE Downingtown",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Palace",
   "away": "Open Play",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Jersey Pickleball Club",
   "away": "Monroe",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Players Courtyard",
   "away": "APC Garden State",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Picklr Newark",
   "away": "Pickle Juice Blackwood",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Flemington",
   "away": "PickleRage Union County Pandas",
   "time": "2026-11-09T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Players Courtyard",
   "time": "2026-11-09T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Monroe",
   "time": "2026-11-09T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Palace",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Tempest",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Bounce Philly",
   "away": "Pickle Juice Blackwood",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Hamilton",
   "away": "APC Garden State",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "ACE Downingtown",
   "away": "Picklr Newark",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Open Play",
   "away": "Pickleball HQ",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Home Court",
   "away": "Jersey Pickleball Club",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "PickleRage Union County Net Ninjas",
   "away": "Pickle House",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Pickleball HQ",
   "away": "Pickle House",
   "time": "2026-11-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-11-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Home Court",
   "away": "Pickleball Palace",
   "time": "2026-11-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Players Courtyard",
   "away": "ACE Downingtown",
   "time": "2026-11-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "PickleRage Union County Pandas",
   "away": "PickleRage Union County Net Ninjas",
   "time": "2026-11-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Monroe",
   "away": "Flemington",
   "time": "2026-11-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Open Play",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "APC Garden State",
   "away": "Picklr Newark",
   "time": "2026-11-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-11-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Bounce Tempest",
   "away": "Pickle Juice Blackwood",
   "time": "2026-11-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Philly",
   "time": "2026-11-16T19:30:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Thuy Pham": "03a5e799-1e53-41c8-b62c-99b338ab0b35",
  "Kathi Sheehan": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
  "Jana Bradley": "076a6405-8447-43b9-b8cf-1db5d857979c",
  "Judy Brougham": "076baef0-3766-4902-a737-578d6262a38a",
  "Frank Kong": "33baac8e-fe7f-4c97-8443-0687777b2ed2",
  "Emily Fowler": "42dcd48a-d88f-422d-8a1e-8ea74ba52440",
  "Isabella Chernin": "48fa1082-3f31-4311-b71e-5da89fdb52d0",
  "Khanh NguyêN": "5052b4ec-45c1-4534-8015-358ff0b37831",
  "Mike Esfahani": "5309d94e-5f39-4cca-a25d-cba3773abe73",
  "Kendall Rodgers": "5638eefb-19f5-473a-b9fc-98731a9d458f",
  "Nicholai Ola": "590c2bb4-2fd5-484b-a75f-4863c40c9f66",
  "Roanne Mae Vega": "5a8658ab-fe97-4c51-a0fc-4cd151fc9b2c",
  "Ken Bienkowski": "5cc85746-e4a6-432e-bfe5-8166f02867ce",
  "Theresa Crowther": "5d42dbc9-9c0e-4bf4-bf14-8a94414f08aa",
  "Carolyn Shipe": "6775ab12-38b5-4f41-a6c1-df35276b63c2",
  "Stephanie Li": "6a68ba8e-9700-4e5a-b54e-07160dac5c68",
  "Isabella Silva": "6b4c5230-95a7-4b24-b971-47c8eb53b251",
  "Andrew Tayag": "6c6f580c-14e7-4c43-a9e0-797f1c01b818",
  "Anthony Serratore": "726aafbc-2e11-4f8c-a178-15c4cba5a964",
  "Ion Rabadon": "74a6086f-4c39-45c1-bb62-a90db6c74eab",
  "Steve Nuguid": "761a4cfd-197b-4887-b9d8-ec32a9a7cf10",
  "Azka Rahman": "7c56ac03-eed6-45ec-af77-f1cf413ada9a",
  "Kristin Roberts": "820ca908-1d16-4f16-accb-9a3d78a98600",
  "John Dick": "a16c6053-9417-4888-ab5d-7c08b327c117",
  "Diane Herbst": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9",
  "Jennalee Fede": "d043b0ad-d33b-4f58-b605-709246b23c11",
  "Charlene Fletcher": "d05d7514-8679-4d34-ad12-654b496f2308",
  "Manny Duarte": "d41ad35d-4e13-4f91-97e7-3702dd8d05f2",
  "Lynn Bresnahan": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8",
  "Niman Ahmeti": "e5c7646e-bb30-40b2-bb20-bd4c75e814ce",
  "Anthony Oliver": "e99589b9-dcaa-405f-ad41-0cda95a5f236",
  "Leon Shum": "ea61b0e2-ea10-4b1b-8dab-9086631699bf",
  "Jimmy Nguyen": "eadaa940-5389-48aa-9891-61c20886d34b",
  "Vineet Agarwala": "f160fd0d-11cd-4dd5-865b-0c92d2583949",
  "Brian Criscuolo": "f59307d0-0495-421c-8cee-28c2e2b56bcf",
  "Nina Donnelly": "fd9de335-6ef4-48c0-82ac-c1e618f5f062",
  "Laura Peng": "fee0899c-870f-49f7-b07b-d34ed516a9f9"
 },
 "availableSubs": [
  {
   "name": "Thuy Pham",
   "playerId": "03a5e799-1e53-41c8-b62c-99b338ab0b35",
   "gender": "Female",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kathi Sheehan",
   "playerId": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
   "gender": "Female",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jana Bradley",
   "playerId": "076a6405-8447-43b9-b8cf-1db5d857979c",
   "gender": "Female",
   "team": "Open Play",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Mark Wenstrom",
   "playerId": "12159177-8eb2-4e6f-bb4f-22575eeed130",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dan Perkins",
   "playerId": "1684c22c-38ed-4f23-83bf-7dbd39607280",
   "gender": "Male",
   "team": "Players Courtyard",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Christina Vuong",
   "playerId": "1c8ac03f-c618-46c4-bed2-c8391c4e1028",
   "gender": "Female",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Alicia Valko",
   "playerId": "2d0e1678-9ee4-4889-960c-69370ae8b999",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Taryn Seidner",
   "playerId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "gender": "Female",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Frank Kong",
   "playerId": "33baac8e-fe7f-4c97-8443-0687777b2ed2",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kerrin Wolf",
   "playerId": "380c17c0-ffb6-491c-8771-061102f4ed98",
   "gender": "Male",
   "team": "Players Courtyard",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Lydia Madrilejos",
   "playerId": "39aae561-e09c-4f74-873b-2b5a36c15d05",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Joshua Reyes",
   "playerId": "3d42cfa3-1b3f-49e0-9955-6832d51e6318",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Emily Fowler",
   "playerId": "42dcd48a-d88f-422d-8a1e-8ea74ba52440",
   "gender": "Female",
   "team": "ACE Downingtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Gene Stahl",
   "playerId": "4686f4c7-52b1-456e-8793-d3d1a4bd4878",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Isabella Chernin",
   "playerId": "48fa1082-3f31-4311-b71e-5da89fdb52d0",
   "gender": "Female",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Khanh NguyêN",
   "playerId": "5052b4ec-45c1-4534-8015-358ff0b37831",
   "gender": "Male",
   "team": "Open Play",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Mike Esfahani",
   "playerId": "5309d94e-5f39-4cca-a25d-cba3773abe73",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kendall Rodgers",
   "playerId": "5638eefb-19f5-473a-b9fc-98731a9d458f",
   "gender": "Female",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nicholai Ola",
   "playerId": "590c2bb4-2fd5-484b-a75f-4863c40c9f66",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Salini Sontyana",
   "playerId": "591f053c-743f-44e3-83da-6ad000b7e992",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Roanne Mae Vega",
   "playerId": "5a8658ab-fe97-4c51-a0fc-4cd151fc9b2c",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ken Bienkowski",
   "playerId": "5cc85746-e4a6-432e-bfe5-8166f02867ce",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Theresa Crowther",
   "playerId": "5d42dbc9-9c0e-4bf4-bf14-8a94414f08aa",
   "gender": "Female",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Crizle Ong",
   "playerId": "611e6c5a-d294-40b0-bf75-afbca58b145a",
   "gender": "Female",
   "team": "ACE Downingtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Carolyn Shipe",
   "playerId": "6775ab12-38b5-4f41-a6c1-df35276b63c2",
   "gender": "Female",
   "team": "Bounce Philly",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kay Defilippo",
   "playerId": "688f64da-600b-4449-b9dc-fd2cab2a25a9",
   "gender": "Female",
   "team": "ACE Downingtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Sharon Oddy",
   "playerId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "gender": "Female",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Stephanie Li",
   "playerId": "6a68ba8e-9700-4e5a-b54e-07160dac5c68",
   "gender": "Female",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Isabella Silva",
   "playerId": "6b4c5230-95a7-4b24-b971-47c8eb53b251",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andrew Tayag",
   "playerId": "6c6f580c-14e7-4c43-a9e0-797f1c01b818",
   "gender": "Male",
   "team": "Picklr Newark",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Amanda Zhou",
   "playerId": "70422d8a-2761-48c4-ac68-ae5bfe532394",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Anthony Serratore",
   "playerId": "726aafbc-2e11-4f8c-a178-15c4cba5a964",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ion Rabadon",
   "playerId": "74a6086f-4c39-45c1-bb62-a90db6c74eab",
   "gender": "Male",
   "team": "ACE Downingtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Steve Nuguid",
   "playerId": "761a4cfd-197b-4887-b9d8-ec32a9a7cf10",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jonathan Weisbrod",
   "playerId": "76ad1c55-bbb8-4ea7-9ff4-7fa3f1c96f3f",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Yawen Zhang",
   "playerId": "771ab070-5ea6-4b8f-ba6b-b42a50712034",
   "gender": "Female",
   "team": "Open Play",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Azka Rahman",
   "playerId": "7c56ac03-eed6-45ec-af77-f1cf413ada9a",
   "gender": "Female",
   "team": "Picklr Newark",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kristin Roberts",
   "playerId": "820ca908-1d16-4f16-accb-9a3d78a98600",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Agnieszka Procner",
   "playerId": "87f99a20-26ed-4aa8-88de-2842f5a4e389",
   "gender": "Female",
   "team": "Pickleball HQ",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Barbara Mccarron",
   "playerId": "9179cc04-34f4-48f4-b30d-69ec894d05f4",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dhanesh Ghia",
   "playerId": "9311307c-4c96-4876-9403-41a71e785c3a",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Deb Morisie",
   "playerId": "94d76c8a-d5ee-444b-aa23-3c3ec71e2387",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "isCaptain": true,
   "outsideSub": true
  },
  {
   "name": "Sherry Tomaino",
   "playerId": "981ae183-14b1-4b7f-880e-8f03e94ca703",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Karen Krasko",
   "playerId": "98676da5-63a9-4561-8e5b-9e4b932d7b8b",
   "gender": "Female",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Tom Dominczyk",
   "playerId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "John Dick",
   "playerId": "a16c6053-9417-4888-ab5d-7c08b327c117",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Holly Siu",
   "playerId": "a791b8f6-0e4e-4f6c-afdf-48fa30ef9069",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Veronica Rosas",
   "playerId": "abab39fe-af60-4956-9f97-460189ab90dc",
   "gender": "Female",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Rodney Godwin",
   "playerId": "ac299e7b-727b-439c-9f99-1bb4b1a5a6a9",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Donna Stone",
   "playerId": "af8a6e4b-f588-45db-906e-5766f1307e50",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Paul Sokolson",
   "playerId": "b754b9dc-11ea-4958-8c14-0f667cc0f57e",
   "gender": "Male",
   "team": "Monroe",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Susan Dente",
   "playerId": "b7915e66-3b19-4197-8258-8fa2bd226780",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Sheila Curran",
   "playerId": "bbb3cbbd-edc3-4fa6-adef-800076f97402",
   "gender": "Female",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nicole Dunbar",
   "playerId": "bd063e35-9767-47d6-81e8-58b1625fb2b0",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Brittni Veyna",
   "playerId": "bf60680b-003f-4083-b6ce-25bf3a7cd964",
   "gender": "Female",
   "team": "Players Courtyard",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Danielle Kuti",
   "playerId": "c3902bc0-35a6-490d-9909-6f19b1224b99",
   "gender": "Female",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jayne Mayer",
   "playerId": "c6743f83-5947-4eec-aca8-f4f19b1e7a35",
   "gender": "Female",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Diane Herbst",
   "playerId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9",
   "gender": "Female",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Supriya Kothakonda",
   "playerId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18",
   "gender": "Female",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Danny Ruiz",
   "playerId": "cf86f914-08ca-4df6-9cdb-74a23afc2478",
   "gender": "Male",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jennalee Fede",
   "playerId": "d043b0ad-d33b-4f58-b605-709246b23c11",
   "gender": "Female",
   "team": "Picklr Newark",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Charlene Fletcher",
   "playerId": "d05d7514-8679-4d34-ad12-654b496f2308",
   "gender": "Female",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Manny Duarte",
   "playerId": "d41ad35d-4e13-4f91-97e7-3702dd8d05f2",
   "gender": "Male",
   "team": "Picklr Newark",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jenny Lin",
   "playerId": "d45c0c05-5f76-4025-a4e6-8442591e88ab",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "David Nguyen",
   "playerId": "d59aa569-3fe7-439b-aa5a-c42424c91608",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Manuel Martorell",
   "playerId": "df4f8592-f2f0-4913-a881-54cf6afaf148",
   "gender": "Male",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Lynn Bresnahan",
   "playerId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8",
   "gender": "Female",
   "team": "Players Courtyard",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Christopher Knapp",
   "playerId": "dfce779b-3ef8-4413-a742-9e06c08782be",
   "gender": "Male",
   "team": "Players Courtyard",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Courtney Wu",
   "playerId": "e2b67207-a728-4faa-a830-232df72c9abe",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Niman Ahmeti",
   "playerId": "e5c7646e-bb30-40b2-bb20-bd4c75e814ce",
   "gender": "Male",
   "team": "Monroe",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Lana Engler Carss",
   "playerId": "e832c271-3f52-48b6-8a3f-bdf699531a03",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Anthony Oliver",
   "playerId": "e99589b9-dcaa-405f-ad41-0cda95a5f236",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Maria Keselman",
   "playerId": "ea2f2b11-2538-4f55-b87f-53aea4f5d4d7",
   "gender": "Female",
   "team": "Pickleball Palace",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Leon Shum",
   "playerId": "ea61b0e2-ea10-4b1b-8dab-9086631699bf",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jimmy Nguyen",
   "playerId": "eadaa940-5389-48aa-9891-61c20886d34b",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Melissa Mackey",
   "playerId": "eb92331b-662d-4f91-bf8a-aa8b93c0c02b",
   "gender": "Female",
   "team": "Players Courtyard",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jaerene Medeiros",
   "playerId": "ee6add19-54b8-42db-b4ea-81ea6c1ec00a",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "David Tran",
   "playerId": "ef0a27b4-d6b4-4141-a8f1-448c710934ac",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Vineet Agarwala",
   "playerId": "f160fd0d-11cd-4dd5-865b-0c92d2583949",
   "gender": "Male",
   "team": "Open Play",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Emiliya Mizrahi",
   "playerId": "f173be84-93c7-46b8-b828-d44ddc52d63c",
   "gender": "Female",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Brian Criscuolo",
   "playerId": "f59307d0-0495-421c-8cee-28c2e2b56bcf",
   "gender": "Male",
   "team": "Picklr Newark",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Christopher Moscony",
   "playerId": "f64241ba-e625-4065-b72f-777f5a8fb2bd",
   "gender": "Male",
   "team": "Bounce Philly",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Deborah Appleton",
   "playerId": "f8db8e6b-5fb0-467a-838b-1c5f790b244a",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nina Donnelly",
   "playerId": "fd9de335-6ef4-48c0-82ac-c1e618f5f062",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dung Pham",
   "playerId": "fed512a2-1ec3-42c8-b81d-fe88d4bcae63",
   "gender": "Male",
   "team": "Bounce Philly",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Laura Peng",
   "playerId": "fee0899c-870f-49f7-b07b-d34ed516a9f9",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Natalia Maciejewicz",
   "playerId": "ffd29340-40ba-4a85-a922-f93075d9b0df",
   "gender": "Female",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  }
 ],
 "meta": {
  "matchesPlayed": 63,
  "provisionalMatches": 0,
  "weeks": "1-6",
  "totalPlayers": 377,
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
    "week": 4,
    "label": "4",
    "seq": 2
   },
   {
    "week": 5,
    "label": "5a",
    "seq": 3
   },
   {
    "week": 5,
    "label": "5b",
    "seq": 4
   },
   {
    "week": 6,
    "label": "6",
    "seq": 5
   }
  ],
  "divisionSlug": "e27386b3",
  "hasPlayoffs": false,
  "typicalDay": "Mondays",
  "detailFile": "compiled/detail-e27386b3.js",
  "clubName": "",
  "divisionName": "3.0",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
  "podCount": 2,
  "podNames": [
   "Northeast / Northwest",
   "Southeast / Southwest"
  ],
  "podSource": "api",
  "reportedPods": [
   "Northeast A",
   "Northeast B",
   "Northwest A",
   "Northwest B",
   "Southeast",
   "Southwest"
  ],
  "podMismatch": {
   "crossPodMatchups": 79,
   "totalMatchups": 143,
   "reported": {
    "Northwest B": [
     "Pickleball Kingdom Hillsborough",
     "PickleRage Union County Net Ninjas",
     "PickleRage Union County Pandas"
    ],
    "Northeast A": [
     "Jersey Pickleball Club",
     "Pickleball HQ",
     "Pickleball Kingdom Tinton Falls"
    ],
    "Southwest": [
     "ACE Downingtown",
     "Bounce Philly",
     "Dill Dinkers Hatboro",
     "Pickleball Kingdom Hamilton",
     "Pickleball Kingdom Lehigh Valley"
    ],
    "Southeast": [
     "APC Garden State",
     "Bounce Tempest",
     "Pickle Juice Blackwood",
     "Picklr Newark",
     "Players Courtyard"
    ],
    "Northwest A": [
     "Home Court",
     "Open Play",
     "Pickleball Palace"
    ],
    "Northeast B": [
     "Flemington",
     "Monroe",
     "Pickle House"
    ]
   },
   "schedule": {
    "Pod 1": [
     "Flemington",
     "Home Court",
     "Jersey Pickleball Club",
     "Monroe",
     "Open Play",
     "Pickle House",
     "Pickleball HQ",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Tinton Falls",
     "Pickleball Palace",
     "PickleRage Union County Net Ninjas",
     "PickleRage Union County Pandas"
    ],
    "Pod 2": [
     "ACE Downingtown",
     "APC Garden State",
     "Bounce Philly",
     "Bounce Tempest",
     "Dill Dinkers Hatboro",
     "Pickle Juice Blackwood",
     "Pickleball Kingdom Hamilton",
     "Pickleball Kingdom Lehigh Valley",
     "Picklr Newark",
     "Players Courtyard"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-09-29T17:19:44.267Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["e27386b3"] = DATA;
})();
