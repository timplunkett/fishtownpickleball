(function () {
  const DATA = {
 "players": [
  {
   "name": "Sean Greener",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 12,
   "losses": 0,
   "pointsWon": 252,
   "totalPointsAgainst": 172,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 80,
   "ppg": 21,
   "leagueRank": 8,
   "rating": 3.5,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "12f33b3a-b4ea-4b31-affa-dc7917dce94b"
  },
  {
   "name": "Aidan Fredericks",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 74,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 73,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 3.9,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.6,
   "playerId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce"
  },
  {
   "name": "William Waggenspack",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 97,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 50,
   "ppg": 21,
   "leagueRank": 4,
   "rating": 3.1,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.7,
   "playerId": "8aaeb517-ab68-4f67-9b9b-e347909f52e7"
  },
  {
   "name": "Abby Sprinkel",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 10,
   "losses": 0,
   "pointsWon": 210,
   "totalPointsAgainst": 166,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 44,
   "ppg": 21,
   "leagueRank": 18,
   "rating": 1.3,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.7,
   "playerId": "491af413-7874-492a-9c92-6dccc6b736e5"
  },
  {
   "name": "Kenneth Ocasio",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 104,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 43,
   "ppg": 21,
   "leagueRank": 13,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.5,
   "playerId": "1c908613-b93b-43b3-b084-b2da12b2faa2"
  },
  {
   "name": "Barbara Fontanella",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 66,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 39,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 1.6,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -2.1,
   "playerId": "3390e1cb-1881-414b-b8cf-9a0c06d13a0f"
  },
  {
   "name": "Cesar Alvarez",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 88,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 38,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 3.1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "3b7c9eab-a6e2-4e8d-b0f6-bb9a6b6dc0eb"
  },
  {
   "name": "Stephen Fredericksen",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 110,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 37,
   "ppg": 21,
   "leagueRank": 16,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.4,
   "playerId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "name": "James Gillick",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 69,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 36,
   "ppg": 21,
   "leagueRank": 11,
   "rating": 1.3,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.7,
   "playerId": "60dda206-8284-415e-b83e-3836d61e6701"
  },
  {
   "name": "Craig Batzar",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 92,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 34,
   "ppg": 21,
   "leagueRank": 10,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.5,
   "playerId": "44890b21-f104-4e68-a0a1-607034c2dde6"
  },
  {
   "name": "Thuy Le",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 94,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 32,
   "ppg": 21,
   "leagueRank": 7,
   "rating": 2.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
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
   "leagueRank": 9,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1,
   "playerId": "274efbd2-5814-4956-834d-b6389c1b2f1c"
  },
  {
   "name": "Inho Andrew Yuh",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 75,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 30,
   "ppg": 21,
   "leagueRank": 15,
   "rating": 0.9,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1.4,
   "playerId": "d642aa89-5ebe-4bcb-a5e7-fdcc3a9b916e"
  },
  {
   "name": "Paul Michael Serrano",
   "gender": "Male",
   "team": "Open Play",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 80,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 25,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 2.5,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "b0097209-2d93-4856-8887-b040299f9dbd"
  },
  {
   "name": "Maridel Ablaza",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 82,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 23,
   "ppg": 21,
   "leagueRank": 5,
   "rating": 2.8,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "c868d44f-a501-4c1a-8d17-fd6e4a338308"
  },
  {
   "name": "Colin Mackey",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 84,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 21,
   "ppg": 21,
   "leagueRank": 12,
   "rating": 1.9,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.5,
   "playerId": "6e5d2bb6-bf2e-4f06-a2f8-24af7eca9cf8"
  },
  {
   "name": "Kevin Altieri",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 63,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 21,
   "ppg": 21,
   "leagueRank": 27,
   "rating": 0.5,
   "ratingGames": 4,
   "confidence": 39,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -1.1,
   "playerId": "9b8a71a7-9173-4757-8937-8364922234ef"
  },
  {
   "name": "Giang Nguyen",
   "gender": "Male",
   "team": "Open Play",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 110,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 16,
   "ppg": 21,
   "leagueRank": 14,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "5dd85d77-40ad-476d-a1a4-90dfcfed61a9"
  },
  {
   "name": "Sarah Dente",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 15,
   "losses": 1,
   "pointsWon": 334,
   "totalPointsAgainst": 274,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 93.8,
   "diff": 60,
   "ppg": 20.9,
   "leagueRank": 21,
   "rating": 2.7,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f"
  },
  {
   "name": "Liane Feyas",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 291,
   "totalPointsAgainst": 186,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 92.9,
   "diff": 105,
   "ppg": 20.8,
   "leagueRank": 17,
   "rating": 4,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.6,
   "playerId": "2266824f-5ba8-4da3-a512-94c8e14f7c90"
  },
  {
   "name": "Mike Hardy",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 291,
   "totalPointsAgainst": 202,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 92.9,
   "diff": 89,
   "ppg": 20.8,
   "leagueRank": 19,
   "rating": 1.5,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -1,
   "playerId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "name": "Terri Pflueger",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 292,
   "totalPointsAgainst": 204,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 92.9,
   "diff": 88,
   "ppg": 20.9,
   "leagueRank": 20,
   "rating": 1,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -1.3,
   "playerId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "name": "Gerry Bissinger",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 250,
   "totalPointsAgainst": 184,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 91.7,
   "diff": 66,
   "ppg": 20.8,
   "leagueRank": 22,
   "rating": 2.1,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.6,
   "playerId": "44999222-7eed-49f7-982b-10ad7155256a"
  },
  {
   "name": "Andrea Galanti",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 10,
   "losses": 1,
   "pointsWon": 225,
   "totalPointsAgainst": 155,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 90.9,
   "diff": 70,
   "ppg": 20.5,
   "leagueRank": 23,
   "rating": 2.6,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.8,
   "playerId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "name": "Ryan Peixoto",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 161,
   "totalPointsAgainst": 129,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 32,
   "ppg": 20.1,
   "leagueRank": 32,
   "rating": 2.3,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "95fdba0f-fc53-412d-b050-19808558761f"
  },
  {
   "name": "Kimberley Levins",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 144,
   "totalPointsAgainst": 110,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 34,
   "ppg": 20.6,
   "leagueRank": 28,
   "rating": 1.8,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0,
   "playerId": "c132bfd5-ae12-478d-86bc-e483f85cb26a"
  },
  {
   "name": "Meggie Hodgson",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 120,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 25,
   "ppg": 20.7,
   "leagueRank": 38,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "6386e6cb-1a79-4148-ba25-d735ad30054c"
  },
  {
   "name": "Barbara Mccarron",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 137,
   "totalPointsAgainst": 114,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "9179cc04-34f4-48f4-b30d-69ec894d05f4",
   "winPct": 85.7,
   "diff": 23,
   "ppg": 19.6,
   "leagueRank": 44,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Jennifer Lynch",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 125,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 20,
   "ppg": 20.7,
   "leagueRank": 43,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.4,
   "playerId": "54a0bc36-2277-4497-bb82-d8499157c1fe"
  },
  {
   "name": "Michael Alfaro",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 244,
   "totalPointsAgainst": 185,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 59,
   "ppg": 20.3,
   "leagueRank": 35,
   "rating": 2.9,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "d060c2f3-016e-4260-97fc-d0cbea4415f5"
  },
  {
   "name": "Jeannine Calhoun",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 67,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 56,
   "ppg": 20.5,
   "leagueRank": 24,
   "rating": 2.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -2,
   "playerId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "name": "Gail Hannagan",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 75,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 48,
   "ppg": 20.5,
   "leagueRank": 26,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -2.1,
   "playerId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "name": "Agnieszka Procner",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 120,
   "totalPointsAgainst": 86,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "87f99a20-26ed-4aa8-88de-2842f5a4e389",
   "winPct": 83.3,
   "diff": 34,
   "ppg": 20,
   "leagueRank": 40,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -2.1
  },
  {
   "name": "Jane Pascua",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 94,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 29,
   "ppg": 20.5,
   "leagueRank": 31,
   "rating": 1.6,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1,
   "playerId": "5c79bec7-67d9-4d8b-beef-a6f423475522"
  },
  {
   "name": "Jason Paderon",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 118,
   "totalPointsAgainst": 90,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 28,
   "ppg": 19.7,
   "leagueRank": 51,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.7,
   "playerId": "6a1fa95d-2df5-4870-a4b6-51775620f7cf"
  },
  {
   "name": "Rebecca Woofter",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 96,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 27,
   "ppg": 20.5,
   "leagueRank": 37,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1,
   "playerId": "4032408a-b5eb-41c5-a865-fca764d688a5"
  },
  {
   "name": "Taylor Runyen",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 119,
   "totalPointsAgainst": 92,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 27,
   "ppg": 19.8,
   "leagueRank": 52,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.9,
   "playerId": "cda5a763-48f3-4303-8579-42ff05230f45"
  },
  {
   "name": "Suki Wong",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 97,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "b92a5442-fd20-4e2f-896b-26cc5cfa5ea5",
   "winPct": 83.3,
   "diff": 27,
   "ppg": 20.7,
   "leagueRank": 33,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Cory Mintz",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 121,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 25,
   "ppg": 20.2,
   "leagueRank": 54,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.7,
   "playerId": "33feb337-f2ab-4e6d-819b-9535ec743685"
  },
  {
   "name": "Evelyn Geating",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 97,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 25,
   "ppg": 20.3,
   "leagueRank": 42,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.7,
   "playerId": "798a21bd-83e7-42e9-bd86-c74448c7dada"
  },
  {
   "name": "Filomena Rega",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 104,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 20,
   "ppg": 20.7,
   "leagueRank": 55,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.7,
   "playerId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "name": "Grady Craig",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 102,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 20,
   "ppg": 20.3,
   "leagueRank": 45,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "name": "Eva Rodriguez",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 104,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 18,
   "ppg": 20.3,
   "leagueRank": 41,
   "rating": 1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.1,
   "playerId": "899c49f1-1839-4eb3-b87e-26a2dba51764"
  },
  {
   "name": "Kevin Algarme",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 108,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 16,
   "ppg": 20.7,
   "leagueRank": 47,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.5,
   "playerId": "af1295ea-6786-47fd-8c51-dae10f13070a"
  },
  {
   "name": "Vanessa Tortorice",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 110,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 14,
   "ppg": 20.7,
   "leagueRank": 50,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "818811e5-0eb6-4611-8ac3-f65c10316305"
  },
  {
   "name": "Anne Buckley",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 9,
   "losses": 2,
   "pointsWon": 221,
   "totalPointsAgainst": 155,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 81.8,
   "diff": 66,
   "ppg": 20.1,
   "leagueRank": 30,
   "rating": 3.6,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "07881006-c083-4729-8424-410aeee08940"
  },
  {
   "name": "John Danks",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 9,
   "losses": 2,
   "pointsWon": 226,
   "totalPointsAgainst": 170,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 81.8,
   "diff": 56,
   "ppg": 20.5,
   "leagueRank": 29,
   "rating": 3.1,
   "ratingGames": 11,
   "confidence": 59,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "name": "Oanh Quach",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 9,
   "losses": 2,
   "pointsWon": 222,
   "totalPointsAgainst": 200,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 81.8,
   "diff": 22,
   "ppg": 20.2,
   "leagueRank": 65,
   "rating": 0.4,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "b4ac779e-91e0-46f1-a4c7-92e1068db57a"
  },
  {
   "name": "Alina Allakhveranova",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 300,
   "totalPointsAgainst": 239,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 61,
   "ppg": 20,
   "leagueRank": 48,
   "rating": 1.9,
   "ratingGames": 15,
   "confidence": 70,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.2,
   "playerId": "bbf13d1a-5393-4549-9d15-c5d2975f3e55"
  },
  {
   "name": "Brandon Agudelo",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 102,
   "totalPointsAgainst": 72,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 30,
   "ppg": 20.4,
   "leagueRank": 25,
   "rating": 3.1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "a2c6fd48-c70a-4dc1-a1e0-4c177c4b0f58"
  },
  {
   "name": "Marc Matalon",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 74,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 29,
   "ppg": 20.6,
   "leagueRank": 39,
   "rating": 1.5,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.3,
   "playerId": "7891b1eb-476e-4105-b7d3-36853c9e3b28"
  },
  {
   "name": "Rhys Gardiner",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 102,
   "totalPointsAgainst": 76,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 26,
   "ppg": 20.4,
   "leagueRank": 34,
   "rating": 2,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.2,
   "playerId": "084d4f59-84ab-40bb-8503-0495501e1ea9"
  },
  {
   "name": "Jeff Stephenson",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 100,
   "totalPointsAgainst": 81,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 19,
   "ppg": 20,
   "leagueRank": 58,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.5,
   "playerId": "002d90d8-3c20-4fe1-adcd-154e02a75a8b"
  },
  {
   "name": "Charishma Serrano",
   "gender": "Female",
   "team": "Open Play",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 95,
   "totalPointsAgainst": 76,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 19,
   "ppg": 19,
   "leagueRank": 46,
   "rating": 2.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "5fdbcd51-c12c-49f7-84f6-31f8b00ea8b1"
  },
  {
   "name": "Matthew Ferrante",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 87,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 16,
   "ppg": 20.6,
   "leagueRank": 59,
   "rating": -0.5,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.5,
   "playerId": "b813a895-871c-4e52-a0f8-e723f4066ead"
  },
  {
   "name": "Esterlina Wiest",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 97,
   "totalPointsAgainst": 84,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 13,
   "ppg": 19.4,
   "leagueRank": 57,
   "rating": 1.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "b43f9cca-12f6-4af2-bcb7-1b9debd7514a"
  },
  {
   "name": "Yash Mehta",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 288,
   "totalPointsAgainst": 206,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 78.6,
   "diff": 82,
   "ppg": 20.6,
   "leagueRank": 36,
   "rating": 4.5,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "adc25ed0-4bc3-47da-9509-4caeb8f90185"
  },
  {
   "name": "Joseph Mckenna",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 264,
   "totalPointsAgainst": 193,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 76.9,
   "diff": 71,
   "ppg": 20.3,
   "leagueRank": 53,
   "rating": 2,
   "ratingGames": 13,
   "confidence": 63,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.9,
   "playerId": "551c6f9d-b1e1-4b5b-a8cb-bea20a14d9ff"
  },
  {
   "name": "Chris Alworth",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 246,
   "totalPointsAgainst": 194,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 52,
   "ppg": 20.5,
   "leagueRank": 49,
   "rating": 2.6,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "286cbda4-8288-4a14-931c-f84521407eb7"
  },
  {
   "name": "Zyanya Flores",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 318,
   "totalPointsAgainst": 269,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 49,
   "ppg": 19.9,
   "leagueRank": 61,
   "rating": 1.8,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "148bddd6-0d6a-468a-903d-84ba2da82239"
  },
  {
   "name": "Abby Viola",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 236,
   "totalPointsAgainst": 200,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 36,
   "ppg": 19.7,
   "leagueRank": 75,
   "rating": -0.2,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.4,
   "playerId": "711bd5d7-fb81-448d-b5db-89e773115943"
  },
  {
   "name": "Maggie Wang",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 240,
   "totalPointsAgainst": 206,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 34,
   "ppg": 20,
   "leagueRank": 64,
   "rating": 0.6,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1,
   "playerId": "0c1f375a-1567-4b92-8fb2-907a22d8e2ee"
  },
  {
   "name": "Rosellen Perlowitz",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 243,
   "totalPointsAgainst": 211,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 32,
   "ppg": 20.3,
   "leagueRank": 60,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf"
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
   "playerId": "bf60680b-003f-4083-b6ce-25bf3a7cd964",
   "winPct": 75,
   "diff": 32,
   "ppg": 20.1,
   "leagueRank": 56,
   "rating": 2.6,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Jayson Lee",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 79,
   "totalPointsAgainst": 60,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 19,
   "ppg": 19.8,
   "leagueRank": 72,
   "rating": 1.9,
   "ratingGames": 4,
   "confidence": 38,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "145a759d-3547-4ba8-a466-85f7c857a392"
  },
  {
   "name": "Brandi Horowitz",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 214,
   "totalPointsAgainst": 173,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 72.7,
   "diff": 41,
   "ppg": 19.5,
   "leagueRank": 70,
   "rating": 1.2,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "bc3fda4d-3cf9-4daf-a2f1-6010ce63195e"
  },
  {
   "name": "Chris Balta",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 220,
   "totalPointsAgainst": 183,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 72.7,
   "diff": 37,
   "ppg": 20,
   "leagueRank": 66,
   "rating": 0.8,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.1,
   "playerId": "2be2d2b6-177e-4378-a33d-49005788a7fd"
  },
  {
   "name": "Jonathan Jamison",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 216,
   "totalPointsAgainst": 184,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 72.7,
   "diff": 32,
   "ppg": 19.6,
   "leagueRank": 77,
   "rating": 0.4,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.6,
   "playerId": "8b4ec650-391b-47a7-90e3-af9989d74df0"
  },
  {
   "name": "Matthew Rafaniello",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 128,
   "totalPointsAgainst": 137,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": -9,
   "ppg": 18.3,
   "leagueRank": 96,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.5,
   "playerId": "021fbd88-6b98-47eb-aa92-96ed959d8a4b"
  },
  {
   "name": "Danica Bramschreiber",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 198,
   "totalPointsAgainst": 161,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 70,
   "diff": 37,
   "ppg": 19.8,
   "leagueRank": 67,
   "rating": 1.2,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.7,
   "playerId": "362cbda8-a78b-43bb-b653-1daef081ce2f"
  },
  {
   "name": "Megan Torres",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 203,
   "totalPointsAgainst": 168,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 70,
   "diff": 35,
   "ppg": 20.3,
   "leagueRank": 71,
   "rating": 0.8,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.7,
   "playerId": "45590591-9a85-4098-8ba9-36fc0fa18f4c"
  },
  {
   "name": "Jenny Winters",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 186,
   "totalPointsAgainst": 170,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 70,
   "diff": 16,
   "ppg": 18.6,
   "leagueRank": 85,
   "rating": 0,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "ea0e9b2c-cdde-48d1-8585-fd47053329b6"
  },
  {
   "name": "Froilan Sunga",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 196,
   "totalPointsAgainst": 192,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 70,
   "diff": 4,
   "ppg": 19.6,
   "leagueRank": 92,
   "rating": -0.1,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "af6465d2-7a02-4dc5-a6b4-62cee62fe93a"
  },
  {
   "name": "Robert Paniti",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 236,
   "totalPointsAgainst": 201,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 35,
   "ppg": 19.7,
   "leagueRank": 76,
   "rating": 1.5,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "d17ff3de-7455-4efb-b1be-4c61b5acbdf2"
  },
  {
   "name": "Keith Fallon",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 219,
   "totalPointsAgainst": 185,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 34,
   "ppg": 18.3,
   "leagueRank": 98,
   "rating": 0,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.3,
   "playerId": "49a11c9c-4eed-430b-8c58-053c30246d45"
  },
  {
   "name": "Kelly Aylward",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 226,
   "totalPointsAgainst": 192,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 34,
   "ppg": 18.8,
   "leagueRank": 91,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.3,
   "playerId": "6068d706-4a9a-4475-8d31-d5a900172f27"
  },
  {
   "name": "Josh Ruble",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 88,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 34,
   "ppg": 20.3,
   "leagueRank": 62,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 41,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.5,
   "playerId": "c44c6a71-87d4-4003-8fcb-bb812a3307a3"
  },
  {
   "name": "Kristin Larosa",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 86,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 33,
   "ppg": 19.8,
   "leagueRank": 68,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.5,
   "playerId": "03162d88-f7e2-4381-9ede-fd884d73940b"
  },
  {
   "name": "Jamie West",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 115,
   "totalPointsAgainst": 83,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 32,
   "ppg": 19.2,
   "leagueRank": 73,
   "rating": 1.9,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "name": "Prasad Mittapalli",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 243,
   "totalPointsAgainst": 217,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 26,
   "ppg": 20.3,
   "leagueRank": 79,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.2,
   "playerId": "11ccd85e-b03b-43d1-ae48-bc26b6eb19c8"
  },
  {
   "name": "Sophie O’Driscoll",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 24,
   "ppg": 20,
   "leagueRank": 69,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "40f98b81-c10a-4e0b-9154-3a8ffa3d784c"
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
   "leagueRank": 74,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.9,
   "playerId": "f6eef486-8999-4247-a7d8-20251377021c"
  },
  {
   "name": "Michele Costigan",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 114,
   "totalPointsAgainst": 94,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 20,
   "ppg": 19,
   "leagueRank": 89,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.8,
   "playerId": "fda078f4-e367-425d-9f16-501fdb5088e8"
  },
  {
   "name": "Holden Smith",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 114,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 15,
   "ppg": 19,
   "leagueRank": 82,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "679d2999-1bf2-40ae-a420-9edf09aa8723"
  },
  {
   "name": "Corey Abrams",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 106,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 14,
   "ppg": 20,
   "leagueRank": 83,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.8,
   "playerId": "1a37dcd5-8896-4e3e-8219-898b6a418e86"
  },
  {
   "name": "Bill Dower",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 105,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 14,
   "ppg": 19.8,
   "leagueRank": 63,
   "rating": 3.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.3,
   "playerId": "f920b62c-0fa3-417a-ac3e-b7bb6f555fc4"
  },
  {
   "name": "John Waggoner",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 121,
   "totalPointsAgainst": 112,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 9,
   "ppg": 20.2,
   "leagueRank": 84,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.7,
   "playerId": "46d96287-f2e2-4de7-8593-fcde564b9273"
  },
  {
   "name": "Lisa Dinh",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 113,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 9,
   "ppg": 20.3,
   "leagueRank": 90,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.8,
   "playerId": "aaf27c02-6d20-4a96-835c-3084d799ac0f"
  },
  {
   "name": "Robynn Reeder",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 121,
   "totalPointsAgainst": 112,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 9,
   "ppg": 20.2,
   "leagueRank": 81,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.3,
   "playerId": "f2b0152e-161a-48bc-86c4-afc14231862c"
  },
  {
   "name": "Kerry Eskay",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 111,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 8,
   "ppg": 19.8,
   "leagueRank": 78,
   "rating": 1.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "8dc8f169-bf38-463a-b8a0-6c238e275325"
  },
  {
   "name": "Danny Ruiz",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 111,
   "totalPointsAgainst": 115,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "cf86f914-08ca-4df6-9cdb-74a23afc2478",
   "winPct": 66.7,
   "diff": -4,
   "ppg": 18.5,
   "leagueRank": 105,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Brittany Riccitiello",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 280,
   "totalPointsAgainst": 258,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 64.3,
   "diff": 22,
   "ppg": 20,
   "leagueRank": 88,
   "rating": 0.4,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0,
   "playerId": "aea847ce-8af4-4809-b421-b25faeef0563"
  },
  {
   "name": "Marcus Burritt",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 261,
   "totalPointsAgainst": 251,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 64.3,
   "diff": 10,
   "ppg": 18.6,
   "leagueRank": 95,
   "rating": 2.2,
   "ratingGames": 14,
   "confidence": 66,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "9605152c-b88b-40bd-b870-e2ea577e376a"
  },
  {
   "name": "Andrew Kimmel",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 216,
   "totalPointsAgainst": 198,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 63.6,
   "diff": 18,
   "ppg": 19.6,
   "leagueRank": 86,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 60,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "cbd9ae00-0624-49d3-b733-55a2765aff37"
  },
  {
   "name": "Jonathan Wong",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 209,
   "totalPointsAgainst": 199,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 63.6,
   "diff": 10,
   "ppg": 19,
   "leagueRank": 97,
   "rating": 1.5,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "6bc511e7-c686-4a9b-866a-d109aed9104d"
  },
  {
   "name": "Amanda Nguyen",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 244,
   "totalPointsAgainst": 236,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 61.5,
   "diff": 8,
   "ppg": 18.8,
   "leagueRank": 102,
   "rating": 0.7,
   "ratingGames": 13,
   "confidence": 64,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e"
  },
  {
   "name": "Lily Hahn",
   "gender": "Female",
   "team": "Open Play",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 238,
   "totalPointsAgainst": 241,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": -3,
   "ppg": 18.3,
   "leagueRank": 119,
   "rating": 0.5,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833"
  },
  {
   "name": "Line Barlow",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 92,
   "totalPointsAgainst": 73,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 19,
   "ppg": 18.4,
   "leagueRank": 94,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1,
   "playerId": "20f0fb60-8e60-448c-b971-40fb6e7fca23"
  },
  {
   "name": "Tomas Ruiz",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 87,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 14,
   "ppg": 20.2,
   "leagueRank": 93,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.9,
   "playerId": "933eb2e5-0a4b-46be-945d-be9e6c70dc7b"
  },
  {
   "name": "David Cartwright",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 182,
   "totalPointsAgainst": 173,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 9,
   "ppg": 18.2,
   "leagueRank": 108,
   "rating": 2,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "d6a6177b-1ee7-410c-bafc-bf1a91628876"
  },
  {
   "name": "Robert Courchain",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 97,
   "totalPointsAgainst": 89,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 8,
   "ppg": 19.4,
   "leagueRank": 100,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "371bb742-9ea6-464a-8c27-df8469b90a62"
  },
  {
   "name": "Jimmy Tom",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 93,
   "totalPointsAgainst": 85,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 8,
   "ppg": 18.6,
   "leagueRank": 99,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "4e873e4f-16c8-4504-a702-941e045a7d3b"
  },
  {
   "name": "Devin Kenny",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 95,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 6,
   "ppg": 20.2,
   "leagueRank": 80,
   "rating": 1,
   "ratingGames": 5,
   "confidence": 38,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "6a04fe9c-1b2d-4504-b705-db9bd71e94bf"
  },
  {
   "name": "Lanz Santos",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 89,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 5,
   "ppg": 17.8,
   "leagueRank": 123,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "bd10ce5c-8ee4-4df1-a2f5-20b49a1a8b37"
  },
  {
   "name": "Holly Siu",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 95,
   "totalPointsAgainst": 93,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "a791b8f6-0e4e-4f6c-afdf-48fa30ef9069",
   "winPct": 60,
   "diff": 2,
   "ppg": 19,
   "leagueRank": 104,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Ismael Hernandez",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 84,
   "totalPointsAgainst": 89,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -5,
   "ppg": 16.8,
   "leagueRank": 157,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.9,
   "playerId": "262cf0be-4906-46fb-ab84-f4aa760bac58"
  },
  {
   "name": "James Conroy",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 89,
   "totalPointsAgainst": 95,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -6,
   "ppg": 17.8,
   "leagueRank": 154,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "name": "Ed Amato",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 222,
   "totalPointsAgainst": 211,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": 11,
   "ppg": 18.5,
   "leagueRank": 113,
   "rating": 0.2,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "name": "James Cooper",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 233,
   "totalPointsAgainst": 225,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 8,
   "ppg": 19.4,
   "leagueRank": 118,
   "rating": 0.3,
   "ratingGames": 12,
   "confidence": 63,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "37355d05-aa6b-42d5-a4a2-874c8774bb5d"
  },
  {
   "name": "David Schwartz",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 224,
   "totalPointsAgainst": 226,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": -2,
   "ppg": 18.7,
   "leagueRank": 124,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "908a8539-b3a5-437a-957f-e900db3c01b9"
  },
  {
   "name": "Charlene De Lara",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 133,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "16f9fddd-e9cd-4e65-9090-2764c44fc74a",
   "winPct": 57.1,
   "diff": 16,
   "ppg": 19,
   "leagueRank": 106,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Megan Quigley",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 136,
   "totalPointsAgainst": 123,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 13,
   "ppg": 19.4,
   "leagueRank": 87,
   "rating": 2.4,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "37d69abc-9610-4c03-a618-f905bd0e2fb1"
  },
  {
   "name": "Diana Dibuccio",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 136,
   "totalPointsAgainst": 124,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 12,
   "ppg": 19.4,
   "leagueRank": 117,
   "rating": -1,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1,
   "playerId": "f1342844-3771-46a6-bada-39bd0aa96692"
  },
  {
   "name": "Kellie Roshak",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 132,
   "totalPointsAgainst": 126,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 6,
   "ppg": 18.9,
   "leagueRank": 116,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "fd9c829a-50de-40a1-8342-7a6afe0fc7b4"
  },
  {
   "name": "Deb Morisie",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 137,
   "totalPointsAgainst": 133,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "94d76c8a-d5ee-444b-aa23-3c3ec71e2387",
   "winPct": 57.1,
   "diff": 4,
   "ppg": 19.6,
   "leagueRank": 101,
   "rating": 1,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Paul Matzko",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 268,
   "totalPointsAgainst": 270,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": -2,
   "ppg": 19.1,
   "leagueRank": 120,
   "rating": 1.1,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "name": "Alexis Kerven",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 205,
   "totalPointsAgainst": 178,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": 27,
   "ppg": 18.6,
   "leagueRank": 103,
   "rating": 2.3,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "a2b836f4-8bfa-4baf-b01a-e342f5947c04"
  },
  {
   "name": "Lionell Matthews",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 221,
   "totalPointsAgainst": 205,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 54.5,
   "diff": 16,
   "ppg": 20.1,
   "leagueRank": 107,
   "rating": 0.5,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "331d44ad-9004-4801-9978-45938dc3272d"
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
   "playerId": "f173be84-93c7-46b8-b828-d44ddc52d63c",
   "winPct": 54.5,
   "diff": 7,
   "ppg": 18.9,
   "leagueRank": 126,
   "rating": -1,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Suzane Sullivan",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 210,
   "totalPointsAgainst": 207,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": 3,
   "ppg": 19.1,
   "leagueRank": 122,
   "rating": 0.3,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "631b19a7-f176-4a1d-a7be-2fdf764b2dd6"
  },
  {
   "name": "Alan Weissman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 202,
   "totalPointsAgainst": 200,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 54.5,
   "diff": 2,
   "ppg": 18.4,
   "leagueRank": 138,
   "rating": -0.8,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.9,
   "playerId": "12febf17-8650-40dd-92ca-a0bda06caf0f"
  },
  {
   "name": "Patricia San Andres",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 211,
   "totalPointsAgainst": 211,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 54.5,
   "diff": 0,
   "ppg": 19.2,
   "leagueRank": 121,
   "rating": 0.4,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "42e86266-ff96-4961-8e27-adeac7084f59"
  },
  {
   "name": "Meghan Klein",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 235,
   "totalPointsAgainst": 210,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 53.8,
   "diff": 25,
   "ppg": 18.1,
   "leagueRank": 115,
   "rating": 1.9,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909"
  },
  {
   "name": "Thao Tran",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 248,
   "totalPointsAgainst": 236,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": 12,
   "ppg": 19.1,
   "leagueRank": 114,
   "rating": 1,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "a7416218-74a3-40c5-9327-97840c949fc4"
  },
  {
   "name": "Rakesh Roy",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 237,
   "totalPointsAgainst": 238,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 53.8,
   "diff": -1,
   "ppg": 18.2,
   "leagueRank": 127,
   "rating": 1.1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "name": "Jen Ogorzat",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 242,
   "totalPointsAgainst": 250,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 53.8,
   "diff": -8,
   "ppg": 18.6,
   "leagueRank": 128,
   "rating": 1.1,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.2,
   "playerId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "name": "Rachel Searby",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 268,
   "totalPointsAgainst": 254,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 14,
   "ppg": 19.1,
   "leagueRank": 133,
   "rating": 0.1,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "3648420d-4dae-4404-8b67-3162f343f6aa"
  },
  {
   "name": "Jaymie Vincelli",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 229,
   "totalPointsAgainst": 215,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 14,
   "ppg": 19.1,
   "leagueRank": 125,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "daba10b1-0903-4d21-b71f-f2b670a0b428"
  },
  {
   "name": "Amanda Zhou",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 73,
   "totalPointsAgainst": 59,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "70422d8a-2761-48c4-ac68-ae5bfe532394",
   "winPct": 50,
   "diff": 14,
   "ppg": 18.3,
   "leagueRank": 141,
   "rating": 0.9,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6
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
   "leagueRank": 134,
   "rating": 0,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "0214a334-0b6c-4a34-9f61-c4aadd8ad06e"
  },
  {
   "name": "Melanie Gibson",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 103,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 11,
   "ppg": 19,
   "leagueRank": 145,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.9,
   "playerId": "1fe72cf8-6731-4673-b424-3ae625f4319a"
  },
  {
   "name": "Ashley Altman",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 106,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 7,
   "ppg": 18.8,
   "leagueRank": 110,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "57cb28c4-947f-4ea0-a6eb-5e21a777552a"
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
   "leagueRank": 132,
   "rating": 0.1,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "fcedde03-815a-4405-9065-c0a473654b8c"
  },
  {
   "name": "Aseem Sharma",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 158,
   "totalPointsAgainst": 152,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 6,
   "ppg": 19.8,
   "leagueRank": 109,
   "rating": 2.1,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.3,
   "playerId": "efd507a8-9626-47ba-b98d-3406a951f838"
  },
  {
   "name": "Thomas Carretta",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 2,
   "wins": 1,
   "losses": 1,
   "pointsWon": 40,
   "totalPointsAgainst": 35,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 5,
   "ppg": 20,
   "leagueRank": 212,
   "rating": -0.1,
   "ratingGames": 2,
   "confidence": 26,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": -0.1,
   "playerId": "7aaf5ebf-3b96-4c58-9c7d-ae33fb1b9d7c"
  },
  {
   "name": "Carlos Echenique",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 3,
   "ppg": 19.3,
   "leagueRank": 129,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "74530d59-ff19-42a4-87d4-0e3b9e516c66"
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
   "playerId": "d45c0c05-5f76-4025-a4e6-8442591e88ab",
   "winPct": 50,
   "diff": 3,
   "ppg": 18.2,
   "leagueRank": 146,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Peter Lien",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 71,
   "totalPointsAgainst": 69,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": 2,
   "ppg": 17.8,
   "leagueRank": 169,
   "rating": 0.6,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "86851415-5e99-413d-b521-cd3b3edc1137"
  },
  {
   "name": "Lauren Gabat",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 2,
   "ppg": 19.2,
   "leagueRank": 111,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "ef0b7b1a-41ac-4ccd-b502-a68ad5549a3b"
  },
  {
   "name": "Raymond Duong",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 118,
   "totalPointsAgainst": 118,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 0,
   "ppg": 19.7,
   "leagueRank": 136,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "9b7fad1a-a312-4d60-94e8-a1e138bb38fb"
  },
  {
   "name": "Miles Townsend",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 152,
   "totalPointsAgainst": 152,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 0,
   "ppg": 19,
   "leagueRank": 153,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.9,
   "playerId": "cf59ad9f-a37d-44d2-abcf-5ec17532a6aa"
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
   "leagueRank": 140,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "fe90f290-74af-47c7-9711-ee0079260258"
  },
  {
   "name": "Papa Aggrey",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -1,
   "ppg": 19.2,
   "leagueRank": 144,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.2,
   "playerId": "b113d589-6857-4555-95d4-935d5f62e50c"
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
   "playerId": "b7915e66-3b19-4197-8258-8fa2bd226780",
   "winPct": 50,
   "diff": -2,
   "ppg": 18.8,
   "leagueRank": 158,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Luan Vo",
   "gender": "Male",
   "team": "Open Play",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 222,
   "totalPointsAgainst": 225,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -3,
   "ppg": 18.5,
   "leagueRank": 147,
   "rating": -0.5,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "9b11aeff-377e-48f3-9770-14388ac96b68"
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
   "leagueRank": 148,
   "rating": 0.1,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0,
   "playerId": "e3828158-4c75-4583-9a96-c00b2e01252f"
  },
  {
   "name": "Sabiha Kermalli",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 110,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -7,
   "ppg": 18.3,
   "leagueRank": 155,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0,
   "playerId": "7909f81b-3c87-4f6a-8476-50ae30e2ab4b"
  },
  {
   "name": "Thang Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 112,
   "totalPointsAgainst": 119,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -7,
   "ppg": 18.7,
   "leagueRank": 150,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "915d5222-71a9-4dae-9899-f200fcc8110e"
  },
  {
   "name": "Rob Stever",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 147,
   "totalPointsAgainst": 155,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -8,
   "ppg": 18.4,
   "leagueRank": 159,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "519426b7-932a-4dd5-9865-ebaadb3d226d"
  },
  {
   "name": "Adele Hackney",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 225,
   "totalPointsAgainst": 236,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -11,
   "ppg": 18.8,
   "leagueRank": 135,
   "rating": 1.3,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
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
   "leagueRank": 177,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "f0f1b01e-6653-44a4-8773-97a78ce3e757"
  },
  {
   "name": "Kris Miller",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 97,
   "totalPointsAgainst": 115,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -18,
   "ppg": 16.2,
   "leagueRank": 179,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "8f90f526-02c7-43e5-84ee-60cc2e7fd1b4"
  },
  {
   "name": "Julianna Rodrigues",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 250,
   "totalPointsAgainst": 237,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 46.2,
   "diff": 13,
   "ppg": 19.2,
   "leagueRank": 131,
   "rating": 1.2,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "77c32d66-d466-4308-9c45-1639e1925b70"
  },
  {
   "name": "Maxwell Winters",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 244,
   "totalPointsAgainst": 233,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 46.2,
   "diff": 11,
   "ppg": 18.8,
   "leagueRank": 142,
   "rating": 0.6,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "d5037744-373a-485e-9fd3-5564495b8c2d"
  },
  {
   "name": "Alyssa Beattie",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 244,
   "totalPointsAgainst": 239,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 46.2,
   "diff": 5,
   "ppg": 18.8,
   "leagueRank": 143,
   "rating": 0.9,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf"
  },
  {
   "name": "Lakshmikanth Chaluvadi",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 233,
   "totalPointsAgainst": 232,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 46.2,
   "diff": 1,
   "ppg": 17.9,
   "leagueRank": 160,
   "rating": 0.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "377302a4-12da-4449-bbfc-a28248436679"
  },
  {
   "name": "Iqra Hasan-Calmo",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 239,
   "totalPointsAgainst": 245,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 46.2,
   "diff": -6,
   "ppg": 18.4,
   "leagueRank": 149,
   "rating": 1.6,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.4,
   "playerId": "29c4170e-eb9f-400b-bc22-92f83e056e22"
  },
  {
   "name": "Victor Salicetti",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 234,
   "totalPointsAgainst": 248,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 46.2,
   "diff": -14,
   "ppg": 18,
   "leagueRank": 164,
   "rating": -0.8,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "08cb8582-4347-4694-9f58-7e479aa3b7a5"
  },
  {
   "name": "Hailee Kurlander",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 206,
   "totalPointsAgainst": 185,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 45.5,
   "diff": 21,
   "ppg": 18.7,
   "leagueRank": 139,
   "rating": -0.2,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.9,
   "playerId": "04504eed-6831-4a3d-9854-8a6ba147e1a8"
  },
  {
   "name": "Kenneth Bautista",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 213,
   "totalPointsAgainst": 203,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 45.5,
   "diff": 10,
   "ppg": 19.4,
   "leagueRank": 130,
   "rating": 0.4,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "c383dca8-551f-4776-90d7-7f57248d1680"
  },
  {
   "name": "Eric Brezina",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 138,
   "totalPointsAgainst": 106,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": 32,
   "ppg": 19.7,
   "leagueRank": 112,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.7,
   "playerId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "name": "Brian Seligson",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 139,
   "totalPointsAgainst": 136,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 42.9,
   "diff": 3,
   "ppg": 19.9,
   "leagueRank": 152,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "66cca19b-c691-4ee2-addb-f8344943103e"
  },
  {
   "name": "Matt Soliman",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 137,
   "totalPointsAgainst": 141,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -4,
   "ppg": 19.6,
   "leagueRank": 167,
   "rating": -1.4,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "a955b9bb-4b46-4bb5-af0e-2f8c89009b22"
  },
  {
   "name": "Patricia Majowicz",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
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
   "playerId": "95bb08f8-b0f7-4849-852e-6bebeb9e3e53",
   "winPct": 41.7,
   "diff": 21,
   "ppg": 19.2,
   "leagueRank": 137,
   "rating": 1.2,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Nathan Trimmer",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 217,
   "totalPointsAgainst": 227,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": -10,
   "ppg": 18.1,
   "leagueRank": 165,
   "rating": -0.2,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "9541ec05-a25a-4577-b59c-bdf04006b1b6"
  },
  {
   "name": "Diana Tabia",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 206,
   "totalPointsAgainst": 223,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": -17,
   "ppg": 17.2,
   "leagueRank": 189,
   "rating": -1.6,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "7494f19a-141d-4c00-8d37-d5e79eca4853"
  },
  {
   "name": "Katie Li",
   "gender": "Female",
   "team": "Open Play",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 210,
   "totalPointsAgainst": 233,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": -23,
   "ppg": 17.5,
   "leagueRank": 182,
   "rating": -0.1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "b9087267-ae35-4c4d-baf5-90a51346fb9b"
  },
  {
   "name": "Ryan Benetz",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 99,
   "totalPointsAgainst": 92,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": 7,
   "ppg": 19.8,
   "leagueRank": 151,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1,
   "playerId": "841719cb-612f-4fea-bb1b-ef09935bb8ba"
  },
  {
   "name": "Andy Pineda",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 184,
   "totalPointsAgainst": 182,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": 2,
   "ppg": 18.4,
   "leagueRank": 163,
   "rating": 0.4,
   "ratingGames": 10,
   "confidence": 60,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0,
   "playerId": "bb6c579d-1627-4971-ad0f-4be65598d579"
  },
  {
   "name": "Taylor Newell",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 89,
   "totalPointsAgainst": 90,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -1,
   "ppg": 17.8,
   "leagueRank": 174,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "ff4f3e35-1472-444c-b4d0-aa381bbd12d1"
  },
  {
   "name": "Timothy Lowry",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 96,
   "totalPointsAgainst": 98,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -2,
   "ppg": 19.2,
   "leagueRank": 156,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "5165ace6-688d-451a-9f96-8e5500cbf46d"
  },
  {
   "name": "Jasmine Nguyen",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 96,
   "totalPointsAgainst": 98,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -2,
   "ppg": 19.2,
   "leagueRank": 171,
   "rating": -0.8,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.7,
   "playerId": "8621d525-134a-4647-a7bd-98c3a357cdc3"
  },
  {
   "name": "Margo Langer",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 91,
   "totalPointsAgainst": 95,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -4,
   "ppg": 18.2,
   "leagueRank": 176,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75"
  },
  {
   "name": "Sandy Duarte",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 91,
   "totalPointsAgainst": 97,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -6,
   "ppg": 18.2,
   "leagueRank": 166,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1,
   "playerId": "be1f6512-56a2-4b91-b483-7677af01867a"
  },
  {
   "name": "Stephanie Taxter",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 179,
   "totalPointsAgainst": 189,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -10,
   "ppg": 17.9,
   "leagueRank": 168,
   "rating": 0.7,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "66a38d92-6b44-498c-8828-a8f7cd95fb9f"
  },
  {
   "name": "Quynh Nguyen",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 86,
   "totalPointsAgainst": 98,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -12,
   "ppg": 17.2,
   "leagueRank": 185,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.4,
   "playerId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1"
  },
  {
   "name": "Taylor Leuck",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 176,
   "totalPointsAgainst": 188,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -12,
   "ppg": 17.6,
   "leagueRank": 183,
   "rating": -0.6,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "72954591-9ccc-4961-8505-b9da6cee2320"
  },
  {
   "name": "Thuy Nguyen",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 84,
   "totalPointsAgainst": 97,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -13,
   "ppg": 16.8,
   "leagueRank": 191,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "8ea3584b-11a3-4d0c-ace0-bce5bd3a00f1"
  },
  {
   "name": "Todd Woodard",
   "gender": "Male",
   "team": "Open Play",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 78,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -23,
   "ppg": 15.6,
   "leagueRank": 208,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": -0.3,
   "playerId": "f7632286-b2a6-4f7d-aef2-bc85e4b308b0"
  },
  {
   "name": "Jessica Wormeck",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 244,
   "totalPointsAgainst": 243,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 38.5,
   "diff": 1,
   "ppg": 18.8,
   "leagueRank": 162,
   "rating": 0.8,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "name": "Sarah Stangota",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 231,
   "totalPointsAgainst": 234,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 38.5,
   "diff": -3,
   "ppg": 17.8,
   "leagueRank": 173,
   "rating": 0.8,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "name": "Gabe Nacion",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 244,
   "totalPointsAgainst": 251,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 38.5,
   "diff": -7,
   "ppg": 18.8,
   "leagueRank": 161,
   "rating": 1.3,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.1,
   "playerId": "b18fc532-a96e-400d-a321-73d52554df87"
  },
  {
   "name": "Jeff Kesner",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 234,
   "totalPointsAgainst": 246,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 38.5,
   "diff": -12,
   "ppg": 18,
   "leagueRank": 178,
   "rating": -0.4,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01"
  },
  {
   "name": "Juri Solano",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 226,
   "totalPointsAgainst": 248,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 38.5,
   "diff": -22,
   "ppg": 17.4,
   "leagueRank": 187,
   "rating": -0.5,
   "ratingGames": 13,
   "confidence": 65,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0"
  },
  {
   "name": "Reuben Zilber",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 139,
   "totalPointsAgainst": 151,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "af3befcf-981a-433d-a065-c107cdfa42c4",
   "winPct": 37.5,
   "diff": -12,
   "ppg": 17.4,
   "leagueRank": 194,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Christopher Sachs",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 129,
   "totalPointsAgainst": 152,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 37.5,
   "diff": -23,
   "ppg": 16.1,
   "leagueRank": 203,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "52e5dfee-42f1-4c8f-b3ee-ca7c6e49a7fb"
  },
  {
   "name": "Joan Harris",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 203,
   "totalPointsAgainst": 208,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 36.4,
   "diff": -5,
   "ppg": 18.5,
   "leagueRank": 180,
   "rating": -1.2,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "b0132c9e-2a21-45c8-b04d-b84aec626e68"
  },
  {
   "name": "Jessica Kopec",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 197,
   "totalPointsAgainst": 214,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 36.4,
   "diff": -17,
   "ppg": 17.9,
   "leagueRank": 184,
   "rating": -0.6,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "3b6e4a3b-d867-475c-9418-ea6f854b8dd8"
  },
  {
   "name": "Jason Heiselman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 193,
   "totalPointsAgainst": 215,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 36.4,
   "diff": -22,
   "ppg": 17.5,
   "leagueRank": 196,
   "rating": -2.6,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "24b7e6fe-4568-4d20-9cea-6b29169d486e"
  },
  {
   "name": "Adam Werwie",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 264,
   "totalPointsAgainst": 267,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 35.7,
   "diff": -3,
   "ppg": 18.9,
   "leagueRank": 170,
   "rating": 0.2,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "name": "Freddy Li",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 113,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -3,
   "ppg": 18.8,
   "leagueRank": 181,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.3,
   "playerId": "455cc819-6519-4c36-9dd7-2dbb33845102"
  },
  {
   "name": "Marvin Steller",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 112,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -4,
   "ppg": 18.7,
   "leagueRank": 175,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "a11d0ccc-a000-4582-bf88-f27df93e00d2"
  },
  {
   "name": "Jamie Walsh",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 106,
   "totalPointsAgainst": 112,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -6,
   "ppg": 17.7,
   "leagueRank": 195,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "0decf4d5-453b-41f8-b5f8-3ff5ba34237a"
  },
  {
   "name": "Jason Rosenberg",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 116,
   "totalPointsAgainst": 122,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -6,
   "ppg": 19.3,
   "leagueRank": 172,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "ce12bbc9-1bf3-48fa-8c54-15afb33e1dcb"
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
   "leagueRank": 186,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.8,
   "playerId": "c1fc38fe-8943-422e-8400-0f93d16db597"
  },
  {
   "name": "Jackie Bowes",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 109,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -12,
   "ppg": 18.2,
   "leagueRank": 200,
   "rating": -2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.2,
   "playerId": "a111c97f-aba4-4850-902b-0730e2160f76"
  },
  {
   "name": "Matthew Cohen",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 107,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17.8,
   "leagueRank": 190,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.5,
   "playerId": "d068c594-50ee-495b-8997-766c9f6c68d5"
  },
  {
   "name": "Diahann Ouly",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 3,
   "losses": 6,
   "pointsWon": 153,
   "totalPointsAgainst": 180,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -27,
   "ppg": 17,
   "leagueRank": 202,
   "rating": -1.4,
   "ratingGames": 9,
   "confidence": 59,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "7f49224e-d530-48a6-acc3-30d8b6357a82"
  },
  {
   "name": "Jason Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 88,
   "totalPointsAgainst": 121,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -33,
   "ppg": 14.7,
   "leagueRank": 215,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 41,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.5,
   "playerId": "91ee10a7-dbc3-4beb-81cd-3b154b2af0ac"
  },
  {
   "name": "Susan Li",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 181,
   "totalPointsAgainst": 204,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 30,
   "diff": -23,
   "ppg": 18.1,
   "leagueRank": 192,
   "rating": -1,
   "ratingGames": 10,
   "confidence": 60,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "151dccc8-ebe2-4f25-a27c-11a6ba2bf363"
  },
  {
   "name": "Brian Perlowitz",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 174,
   "totalPointsAgainst": 198,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -24,
   "ppg": 17.4,
   "leagueRank": 206,
   "rating": -2.5,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "1d2109cd-c3a4-44e8-b21a-5e0909045be1"
  },
  {
   "name": "Rashmi Patade",
   "gender": "Female",
   "team": "Open Play",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 150,
   "totalPointsAgainst": 201,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "c56ab685-5c55-4437-98a6-7a9b8c95895d",
   "winPct": 30,
   "diff": -51,
   "ppg": 15,
   "leagueRank": 219,
   "rating": -1.2,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Lawrence Dipietro",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 125,
   "totalPointsAgainst": 137,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -12,
   "ppg": 17.9,
   "leagueRank": 188,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1,
   "playerId": "c521a44b-2c1e-43f3-bd58-eccadd1d0433"
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
   "playerId": "e832c271-3f52-48b6-8a3f-bdf699531a03",
   "winPct": 28.6,
   "diff": -15,
   "ppg": 17.6,
   "leagueRank": 198,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Rachel Appleton",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 193,
   "totalPointsAgainst": 212,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 27.3,
   "diff": -19,
   "ppg": 17.5,
   "leagueRank": 197,
   "rating": -0.4,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "db90de13-5c04-4d76-b9b8-2cd30c9900a8"
  },
  {
   "name": "Michael Guldin",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 186,
   "totalPointsAgainst": 221,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 27.3,
   "diff": -35,
   "ppg": 16.9,
   "leagueRank": 209,
   "rating": -1.3,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "a147036c-405c-4d49-be3b-00a1270f848f"
  },
  {
   "name": "Peter Hackney",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 189,
   "totalPointsAgainst": 225,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -36,
   "ppg": 17.2,
   "leagueRank": 204,
   "rating": 0.1,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1,
   "playerId": "0839ae18-ad84-45e6-bfde-3d0855e06b22"
  },
  {
   "name": "Jebril Guevarra",
   "gender": "Male",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 185,
   "totalPointsAgainst": 222,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 27.3,
   "diff": -37,
   "ppg": 16.8,
   "leagueRank": 210,
   "rating": -2,
   "ratingGames": 11,
   "confidence": 61,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.4,
   "playerId": "08175577-0ebd-4e9d-99f8-27910ed5f02f"
  },
  {
   "name": "Robert Hudson",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 73,
   "totalPointsAgainst": 78,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -5,
   "ppg": 18.3,
   "leagueRank": 216,
   "rating": -1.1,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "23c04a93-9526-468c-8fdd-a2b36fb10941"
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
   "playerId": "9311307c-4c96-4876-9403-41a71e785c3a",
   "winPct": 25,
   "diff": -6,
   "ppg": 19,
   "leagueRank": 207,
   "rating": 0.4,
   "ratingGames": 4,
   "confidence": 36,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.2
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
   "playerId": "ea2f2b11-2538-4f55-b87f-53aea4f5d4d7",
   "winPct": 25,
   "diff": -9,
   "ppg": 17.8,
   "leagueRank": 227,
   "rating": -1.1,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Cassie Lou",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 70,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -12,
   "ppg": 17.5,
   "leagueRank": 234,
   "rating": -1.9,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "27f83d5a-2e86-4e5b-af70-9394a8765ac6"
  },
  {
   "name": "Michele Iannella",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 142,
   "totalPointsAgainst": 156,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -14,
   "ppg": 17.8,
   "leagueRank": 193,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.1,
   "playerId": "2ce4041d-b45e-4c9f-87ec-c6ec04dec0e8"
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
   "playerId": "ee6add19-54b8-42db-b4ea-81ea6c1ec00a",
   "winPct": 25,
   "diff": -14,
   "ppg": 17,
   "leagueRank": 245,
   "rating": -2,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Juliana Berg",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 65,
   "totalPointsAgainst": 81,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -16,
   "ppg": 16.3,
   "leagueRank": 240,
   "rating": -1,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "8f9fe430-75af-43c9-9eb3-371d0a9d70d7"
  },
  {
   "name": "Karthik Duraiyappan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 61,
   "totalPointsAgainst": 80,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -19,
   "ppg": 15.3,
   "leagueRank": 260,
   "rating": -3,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.8,
   "playerId": "6d4e3d3a-9162-4ee5-a04f-f82a10552bd5"
  },
  {
   "name": "John Defilippo",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 57,
   "totalPointsAgainst": 76,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -19,
   "ppg": 14.3,
   "leagueRank": 242,
   "rating": -1.7,
   "ratingGames": 4,
   "confidence": 37,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "a5e93c3d-2397-4974-b96c-035f5ec57152"
  },
  {
   "name": "Tiffany Weinert",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 60,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -22,
   "ppg": 15,
   "leagueRank": 224,
   "rating": -0.5,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": 0.9,
   "playerId": "f8f61519-1394-4768-b963-f811c2b407a0"
  },
  {
   "name": "Kelly Bowers",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 141,
   "totalPointsAgainst": 164,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -23,
   "ppg": 17.6,
   "leagueRank": 205,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "25c2cf33-ede0-4610-85d6-e08cddc05484"
  },
  {
   "name": "Elpidio Arias",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 53,
   "totalPointsAgainst": 76,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -23,
   "ppg": 13.3,
   "leagueRank": 261,
   "rating": -1.2,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.3,
   "playerId": "76dcad38-def0-4d35-a58c-8490c6eb642e"
  },
  {
   "name": "Rachael Osetkowski",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 209,
   "totalPointsAgainst": 237,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -28,
   "ppg": 17.4,
   "leagueRank": 199,
   "rating": 0.3,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.5,
   "playerId": "2f50700d-74d4-426f-85c9-b894f72096f0"
  },
  {
   "name": "Yawen Zhang",
   "gender": "Female",
   "team": "Open Play",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 46,
   "totalPointsAgainst": 79,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "771ab070-5ea6-4b8f-ba6b-b42a50712034",
   "winPct": 25,
   "diff": -33,
   "ppg": 11.5,
   "leagueRank": 270,
   "rating": -1.8,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": 1
  },
  {
   "name": "Butch Kreilick",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 198,
   "totalPointsAgainst": 237,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -39,
   "ppg": 16.5,
   "leagueRank": 214,
   "rating": -2.6,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "name": "Jade Chin",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 196,
   "totalPointsAgainst": 284,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 21.4,
   "diff": -88,
   "ppg": 14,
   "leagueRank": 241,
   "rating": -1.8,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.9,
   "playerId": "4fcda82e-e24a-45d7-9784-c230d47a113b"
  },
  {
   "name": "Tuan Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 93,
   "totalPointsAgainst": 102,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -9,
   "ppg": 18.6,
   "leagueRank": 201,
   "rating": -0.1,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.2,
   "playerId": "7bafdd3b-e5cd-4d7a-9098-515a2b560851"
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
   "leagueRank": 211,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.5,
   "playerId": "b419f11c-70a5-4f4b-86cf-27626609f808"
  },
  {
   "name": "Viviane Tran",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 85,
   "totalPointsAgainst": 102,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -17,
   "ppg": 17,
   "leagueRank": 232,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "323329ee-8ba1-4c23-a5f5-1592464e8e0b"
  },
  {
   "name": "Andrew Frey",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 82,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "beb70730-42da-4979-93b9-bd5c88a52d75",
   "winPct": 20,
   "diff": -19,
   "ppg": 16.4,
   "leagueRank": 217,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Helen Goh",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 81,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -20,
   "ppg": 16.2,
   "leagueRank": 226,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "45230dff-64e7-49b9-b211-595fad5c3e40"
  },
  {
   "name": "Jeff Pzena",
   "gender": "Male",
   "team": "Open Play",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 80,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -23,
   "ppg": 16,
   "leagueRank": 228,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.1,
   "playerId": "51439438-8246-4751-b526-a10c54fb0b73"
  },
  {
   "name": "Marvin Lao",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 79,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -24,
   "ppg": 15.8,
   "leagueRank": 237,
   "rating": -2.4,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "838de378-832d-4d6e-8e6a-44e1edb42719"
  },
  {
   "name": "Anbu Cheeralan",
   "gender": "Male",
   "team": "Open Play",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 78,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -25,
   "ppg": 15.6,
   "leagueRank": 233,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 0.7,
   "playerId": "77f81ccf-106a-4a27-9c3d-5b5383c5db5a"
  },
  {
   "name": "Mike Fede",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 70,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -31,
   "ppg": 14,
   "leagueRank": 246,
   "rating": -2.2,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.3,
   "playerId": "7663a676-aec1-4dea-9f73-4127a2c88dbb"
  },
  {
   "name": "Kristin Granath",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 171,
   "totalPointsAgainst": 203,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 20,
   "diff": -32,
   "ppg": 17.1,
   "leagueRank": 213,
   "rating": -1.2,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "560573da-979a-4ae6-ae00-90d223db2816"
  },
  {
   "name": "Elizabeth Dailey",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 163,
   "totalPointsAgainst": 201,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -38,
   "ppg": 16.3,
   "leagueRank": 220,
   "rating": -1.9,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "8cbd2f67-4bd0-4641-a88a-e35ccccc711b"
  },
  {
   "name": "Sahil Agarwala",
   "gender": "Male",
   "team": "Open Play",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 155,
   "totalPointsAgainst": 206,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -51,
   "ppg": 15.5,
   "leagueRank": 235,
   "rating": -2,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.1,
   "playerId": "b845549e-8d1c-4f75-8010-630a9fb9281d"
  },
  {
   "name": "Udita Agarwala",
   "gender": "Female",
   "team": "Open Play",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 139,
   "totalPointsAgainst": 206,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -67,
   "ppg": 13.9,
   "leagueRank": 249,
   "rating": -3.6,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "2351aaff-bff5-4734-9b22-20ce6988c40d"
  },
  {
   "name": "Zoe Zapf",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 153,
   "totalPointsAgainst": 222,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 18.2,
   "diff": -69,
   "ppg": 13.9,
   "leagueRank": 248,
   "rating": -2.3,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.7,
   "playerId": "d0f30788-f690-40db-8709-f1e485efc940"
  },
  {
   "name": "Ross Bienstock",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 142,
   "totalPointsAgainst": 222,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 18.2,
   "diff": -80,
   "ppg": 12.9,
   "leagueRank": 257,
   "rating": -3,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.6,
   "playerId": "4464f477-6545-4e8f-8893-af53a8eeefb5"
  },
  {
   "name": "Katelyn Carretas",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 98,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -24,
   "ppg": 16.3,
   "leagueRank": 239,
   "rating": -2.2,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0,
   "playerId": "9564f996-6460-4bbd-b589-270545a1d4ef"
  },
  {
   "name": "Thomas Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
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
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -24,
   "ppg": 16.7,
   "leagueRank": 225,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "9c6d4e1a-71eb-4c19-af5b-7efc2758939a"
  },
  {
   "name": "Jose Chariez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 98,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -26,
   "ppg": 16.3,
   "leagueRank": 238,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "4dc234ca-c486-4a9f-adb5-0ab8e257379d"
  },
  {
   "name": "Ricardo Fontanilla",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 97,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -27,
   "ppg": 16.2,
   "leagueRank": 222,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.9,
   "playerId": "7db295d5-04dd-42cb-bbed-e4ec7856e654"
  },
  {
   "name": "Jillian Sorrentino",
   "gender": "Female",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 97,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -27,
   "ppg": 16.2,
   "leagueRank": 231,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 2,
   "playerId": "e08d5c89-c2a7-494f-bc55-2a33e22917fd"
  },
  {
   "name": "Thomas Lum",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 244,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.6,
   "playerId": "eabe4829-5c59-4dc9-8caf-0aa28ec41cc7"
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
   "leagueRank": 250,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": 0.4,
   "playerId": "8416fd0a-5644-46d0-b00e-48009144847d"
  },
  {
   "name": "Jennifer Guldin",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 191,
   "totalPointsAgainst": 243,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 16.7,
   "diff": -52,
   "ppg": 15.9,
   "leagueRank": 230,
   "rating": -1.6,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "584e770c-86b1-4561-ba01-4ef1aad6ff9b"
  },
  {
   "name": "Alex Glushek",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 216,
   "totalPointsAgainst": 269,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 15.4,
   "diff": -53,
   "ppg": 16.6,
   "leagueRank": 221,
   "rating": -0.8,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1,
   "playerId": "65e58579-8b95-46f1-9e95-a3e53347de32"
  },
  {
   "name": "Michael Van Horn",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 109,
   "totalPointsAgainst": 140,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -31,
   "ppg": 15.6,
   "leagueRank": 229,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 46,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.3,
   "playerId": "0782db8d-bb52-4a47-88b5-00e8db2358c4"
  },
  {
   "name": "David Burke",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 229,
   "totalPointsAgainst": 282,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 14.3,
   "diff": -53,
   "ppg": 16.4,
   "leagueRank": 223,
   "rating": 0.2,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.2,
   "playerId": "69b99d4e-f80c-480a-a008-33ff326a3c93"
  },
  {
   "name": "Karen Marshall",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 137,
   "totalPointsAgainst": 163,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 12.5,
   "diff": -26,
   "ppg": 17.1,
   "leagueRank": 218,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "53a84b91-acc8-4a27-a7e5-2081e1afcc98"
  },
  {
   "name": "Howie Knudson",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 1,
   "losses": 8,
   "pointsWon": 152,
   "totalPointsAgainst": 185,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 11.1,
   "diff": -33,
   "ppg": 16.9,
   "leagueRank": 236,
   "rating": -2.2,
   "ratingGames": 9,
   "confidence": 61,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "45973650-1f33-43dc-a0f1-1fce356962e0"
  },
  {
   "name": "Robin Pagotto",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 1,
   "losses": 8,
   "pointsWon": 135,
   "totalPointsAgainst": 187,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 11.1,
   "diff": -52,
   "ppg": 15,
   "leagueRank": 256,
   "rating": -3.5,
   "ratingGames": 9,
   "confidence": 60,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "d2016fbf-e18d-4051-b3d2-18612ff2a5bf"
  },
  {
   "name": "James Yu",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 154,
   "totalPointsAgainst": 202,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 10,
   "diff": -48,
   "ppg": 15.4,
   "leagueRank": 247,
   "rating": -1.6,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1,
   "playerId": "125cee00-5416-44ef-81e6-00818e3c64f6"
  },
  {
   "name": "Steven Fernandez",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 148,
   "totalPointsAgainst": 201,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 10,
   "diff": -53,
   "ppg": 14.8,
   "leagueRank": 251,
   "rating": -2.4,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "name": "Patricia Tuquero",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 163,
   "totalPointsAgainst": 227,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 9.1,
   "diff": -64,
   "ppg": 14.8,
   "leagueRank": 258,
   "rating": -2.9,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.4,
   "playerId": "5f5166e1-3615-47ee-b4d6-d03093f180a4"
  },
  {
   "name": "Katie O'Mara",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 149,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 9.1,
   "diff": -80,
   "ppg": 13.5,
   "leagueRank": 262,
   "rating": -2.2,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.2,
   "playerId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "name": "Mayra Tuba",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 206,
   "totalPointsAgainst": 266,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 7.7,
   "diff": -60,
   "ppg": 15.8,
   "leagueRank": 243,
   "rating": -1.1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1,
   "playerId": "72a2a3e0-df8e-4e68-a685-c6e493bb44f2"
  },
  {
   "name": "Michelle Cobos",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 171,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 7.7,
   "diff": -100,
   "ppg": 13.2,
   "leagueRank": 264,
   "rating": -3.7,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.9,
   "playerId": "94e54237-56df-41b2-8b89-675a69762740"
  },
  {
   "name": "Lukas Chrebet",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 205,
   "totalPointsAgainst": 289,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 7.1,
   "diff": -84,
   "ppg": 14.6,
   "leagueRank": 255,
   "rating": -2.9,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.6,
   "playerId": "42795346-b8aa-4e5d-80a5-8a1768c094e8"
  },
  {
   "name": "Katherine Mott",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
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
   "leagueRank": 333,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "014db139-e54f-4546-8fdb-77dfe90e5780"
  },
  {
   "name": "Rick Khounlavouth",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
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
   "leagueRank": 315,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "081547e3-0672-4e71-8ccd-b223d5ecc211"
  },
  {
   "name": "Brad De Jesus",
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
   "leagueRank": 293,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0dcffbac-6931-400d-b652-41c2720e6311"
  },
  {
   "name": "Ryan Ablaza",
   "gender": "Male",
   "team": "ACE Downingtown",
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
   "leagueRank": 285,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "15b54109-a001-4ad0-acde-bbb49a5909b5"
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
   "leagueRank": 324,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1ed425f9-d64e-4cdc-90dd-58de313f0cf6"
  },
  {
   "name": "Elisabeth Marshall",
   "gender": "Female",
   "team": "Players Courtyard",
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
   "leagueRank": 328,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2036b1b8-bfb1-49e9-8a36-3e2d91bc336a"
  },
  {
   "name": "Lisa Murphy",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
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
   "leagueRank": 334,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3a873bd3-eb02-4d94-9be4-bb19938b9087"
  },
  {
   "name": "Annica Jin-Hendel",
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
   "leagueRank": 311,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3eccc234-1e37-493c-b4d6-626f1b482fec"
  },
  {
   "name": "Catherine Malabanan",
   "gender": "Female",
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
   "leagueRank": 326,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "431b6290-28c1-49a9-b2a1-a0bb26532cca"
  },
  {
   "name": "Meredith Janeiro",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
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
   "leagueRank": 310,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4ec66b93-76c9-45ef-b5cb-0b1209e876d9"
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
   "leagueRank": 304,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "54e1e042-3810-4949-90cf-3b134f207f80"
  },
  {
   "name": "Kim Kronberger",
   "gender": "Female",
   "team": "Players Courtyard",
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
   "leagueRank": 318,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "54f3fa64-a224-4f3d-86a4-4353ea31f5a8"
  },
  {
   "name": "Alex Sanchez",
   "gender": "Male",
   "team": "PickleRage Union County Net Ninjas",
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
   "leagueRank": 352,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5509090f-bf75-4166-a5ab-c7688cf54353"
  },
  {
   "name": "Halimah Maideen",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
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
   "leagueRank": 325,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5ad51afd-7edc-43c3-b279-8c57c54cc38c"
  },
  {
   "name": "Alexander Masotti",
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
   "leagueRank": 329,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5d975e37-5ced-4065-baf6-b2f949c6c78a"
  },
  {
   "name": "Jasmine Ho",
   "gender": "Female",
   "team": "Pickleball HQ",
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
   "leagueRank": 308,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "681fe702-3295-4dba-98a2-15e8aedc2873"
  },
  {
   "name": "Chantya Roberson",
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
   "leagueRank": 349,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "68cbf4f5-a41e-4724-a1b5-b8d3d06767e1"
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
   "leagueRank": 321,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "68d08c3a-9282-4fc9-9f3d-4b032889b3db"
  },
  {
   "name": "Allison Sobieski",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
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
   "leagueRank": 361,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7a2cb26b-6e52-4dbd-bab4-83536f4500bb"
  },
  {
   "name": "Linda Seemann",
   "gender": "Female",
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
   "leagueRank": 354,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7ae5ec6e-df01-41bd-b4e7-85522efbbd2c"
  },
  {
   "name": "Jessica Neglia",
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
   "leagueRank": 335,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7c876269-7c67-41a9-9857-2dae62608a57"
  },
  {
   "name": "John Dechristopher",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
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
   "leagueRank": 294,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "882e40aa-e8ec-4322-a9f9-f6f3631a43c2"
  },
  {
   "name": "Rommel Santos",
   "gender": "Male",
   "team": "ACE Downingtown",
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
   "leagueRank": 353,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8ce91d1e-e5eb-439f-b181-48332a03f660"
  },
  {
   "name": "David Horowitz",
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
   "leagueRank": 309,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8dc8c957-0a4a-411d-b49a-35a35174a5ac"
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
   "leagueRank": 366,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "name": "Peter Cao",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
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
   "leagueRank": 290,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9472956b-d6dc-4e8b-ae94-523874e5510a"
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
   "leagueRank": 287,
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
   "leagueRank": 314,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a8e359ff-faf3-4267-8736-032218c4ed73"
  },
  {
   "name": "Morgan Valencia King",
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
   "leagueRank": 365,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ac049c23-359d-4508-8bc1-274a7276239c"
  },
  {
   "name": "Andrea Popovich",
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
   "leagueRank": 346,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "bb972ecf-d484-48e5-a77c-1a7389abe438"
  },
  {
   "name": "Meg Kelly",
   "gender": "Female",
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
   "leagueRank": 313,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "bf9f2dd4-3b39-4c8c-b768-04a47d1b23f9"
  },
  {
   "name": "Jimmy Duong",
   "gender": "Male",
   "team": "ACE Downingtown",
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
   "leagueRank": 299,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c19baf91-31e2-4024-881f-d5c4cdb9d311"
  },
  {
   "name": "Haidee Midgley",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
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
   "leagueRank": 332,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c5bab0da-de53-4551-bfbe-620d61235c2d"
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
   "leagueRank": 344,
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
   "leagueRank": 305,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cac68244-9c27-49bf-9354-1e9282427426"
  },
  {
   "name": "Marina Volpe",
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
   "leagueRank": 367,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cb063892-906f-4769-8815-2a87da5bf426"
  },
  {
   "name": "Nicole Melchionna",
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
   "leagueRank": 331,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cce11776-3ad2-4727-8b1d-7e848a1343de"
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
   "leagueRank": 330,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "name": "Patti Calhoon",
   "gender": "Female",
   "team": "Picklr Newark",
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
   "leagueRank": 289,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "dda14163-7c4e-4316-90f1-0a3852107876"
  },
  {
   "name": "Illyce Katz",
   "gender": "Female",
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
   "leagueRank": 312,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "de04d961-7500-4b47-9e75-f882615afb19"
  },
  {
   "name": "Mai Chan",
   "gender": "Female",
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
   "leagueRank": 291,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e24d689e-39dd-4423-a9db-0fae7bcc51b4"
  },
  {
   "name": "Lee Latini",
   "gender": "Male",
   "team": "Players Courtyard",
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
   "leagueRank": 319,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e5a9569f-f8ce-4c71-912c-a6872bb7de77"
  },
  {
   "name": "Minjel Shah",
   "gender": "Female",
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
   "leagueRank": 356,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "name": "Matthew Marciani",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
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
   "leagueRank": 327,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ec0da4c0-f52a-4ab9-a579-6ca3d815f19c"
  },
  {
   "name": "Derek Lombardi",
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
   "leagueRank": 322,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72"
  },
  {
   "name": "Radhika Sud",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
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
   "leagueRank": 362,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f3d6a801-faed-44cb-a7fa-fd0b3bdff981"
  },
  {
   "name": "Robert Leming",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 1,
   "wins": 0,
   "losses": 1,
   "pointsWon": 10,
   "totalPointsAgainst": 21,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -11,
   "ppg": 10,
   "leagueRank": 284,
   "rating": -1.3,
   "ratingGames": 1,
   "confidence": 17,
   "strengthOfPartners": -3,
   "strengthOfOpponents": 0.8,
   "playerId": "a3f274c4-aa04-45ad-879c-233507d87f98"
  },
  {
   "name": "Tyler Kellner",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 64,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -20,
   "ppg": 16,
   "leagueRank": 254,
   "rating": -1,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.6,
   "playerId": "6d5137ae-c91c-4070-9012-aa20f6cb62a3"
  },
  {
   "name": "Isha Rahalkar",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 83,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -22,
   "ppg": 16.6,
   "leagueRank": 252,
   "rating": -1.8,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "9e3df962-0702-4e31-b6bb-6ade42de72f4"
  },
  {
   "name": "Connie Tom",
   "gender": "Female",
   "team": "PickleRage Union County Net Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 59,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -25,
   "ppg": 14.8,
   "leagueRank": 279,
   "rating": -2.5,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "493b9730-cc53-4634-9561-49c6f1ddcb08"
  },
  {
   "name": "David Abiog",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 101,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -25,
   "ppg": 16.8,
   "leagueRank": 253,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.4,
   "playerId": "d2679852-b0e5-4853-abdf-3253a22fdea4"
  },
  {
   "name": "Cathy Mclaughlin",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 54,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -30,
   "ppg": 13.5,
   "leagueRank": 276,
   "rating": -1.4,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.4,
   "playerId": "8f4f1a96-9e08-462d-8186-ce4d8389e894"
  },
  {
   "name": "Giomarco Urbina",
   "gender": "Male",
   "team": "Open Play",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 70,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -35,
   "ppg": 14,
   "leagueRank": 271,
   "rating": -2.9,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "1d3261f0-c0b4-4f19-93d9-69820d8a9911"
  },
  {
   "name": "Sarah Silva",
   "gender": "Female",
   "team": "PickleRage Union County Pandas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 69,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -36,
   "ppg": 13.8,
   "leagueRank": 272,
   "rating": -2.2,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.3,
   "playerId": "341e5936-88d4-4231-8cc3-1285a0c2f3e1"
  },
  {
   "name": "Alex Lopez",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 68,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -37,
   "ppg": 13.6,
   "leagueRank": 269,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1,
   "playerId": "93fde1cd-1880-495a-bde8-06dde4e159bf"
  },
  {
   "name": "Adolfo Nicdao",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 67,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -38,
   "ppg": 13.4,
   "leagueRank": 268,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.4,
   "playerId": "8113bbe4-2b33-431a-8f71-61121ebc956f"
  },
  {
   "name": "Kordell Alexander",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 85,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -41,
   "ppg": 14.2,
   "leagueRank": 265,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.1,
   "playerId": "133e6ef0-6318-407f-8110-d088f7e00fdc"
  },
  {
   "name": "Trisha Marion",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 106,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -41,
   "ppg": 15.1,
   "leagueRank": 259,
   "rating": -1.7,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1,
   "playerId": "5956c13a-1fe1-45b2-bd4f-d0200d4adda5"
  },
  {
   "name": "Barry Lerner",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 84,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -42,
   "ppg": 14,
   "leagueRank": 266,
   "rating": -2.7,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "ab2b42d0-c15e-4983-afb5-cbef2d674af5"
  },
  {
   "name": "Brandon Helicher",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
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
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -42,
   "ppg": 14,
   "leagueRank": 267,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.9,
   "playerId": "d3120166-5a46-4711-9975-819941f623c8"
  },
  {
   "name": "Michele Iannella Sr.",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 60,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -45,
   "ppg": 12,
   "leagueRank": 275,
   "rating": -3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.4,
   "playerId": "7aa82eab-c6ff-4d90-ae45-7fbfe063f084"
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
   "leagueRank": 278,
   "rating": -3.7,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.5,
   "playerId": "1d102c25-e1fe-4d91-865d-39bd33f9a7cb"
  },
  {
   "name": "Jason Grote",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 101,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -46,
   "ppg": 14.4,
   "leagueRank": 263,
   "rating": -2,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.4,
   "playerId": "a7e6fe82-3337-42eb-b7b6-8cdde6523ace"
  },
  {
   "name": "Michele Sagurton",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 80,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -46,
   "ppg": 13.3,
   "leagueRank": 273,
   "rating": -3,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "caa5146b-9cc5-4a02-adf0-c70e822854fc"
  },
  {
   "name": "Emily Sowa",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 58,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -47,
   "ppg": 11.6,
   "leagueRank": 282,
   "rating": -3.6,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.6,
   "playerId": "42d01dab-4aca-4c74-aa73-47be4fbff788"
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
   "leagueRank": 277,
   "rating": -2.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": 1.8,
   "playerId": "1e83a359-47bb-49ae-bb0b-116dbd04ef74"
  },
  {
   "name": "Simon Burns",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 50,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -55,
   "ppg": 10,
   "leagueRank": 281,
   "rating": -3.6,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.8,
   "playerId": "3a1cc58f-1661-41c2-b2cb-4e39a1b60bac"
  },
  {
   "name": "Alexander Babatunde",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 50,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -55,
   "ppg": 10,
   "leagueRank": 280,
   "rating": -3.7,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 1.1,
   "playerId": "8cb755e5-2a87-409f-8bb6-5773012cfca4"
  },
  {
   "name": "Elizabeth Trimble",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 45,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -60,
   "ppg": 9,
   "leagueRank": 283,
   "rating": -4.2,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.4,
   "playerId": "82c7f594-f817-46ae-a7a0-715f4be5cd76"
  },
  {
   "name": "Lili Zhang",
   "gender": "Female",
   "team": "Open Play",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 0,
   "losses": 10,
   "pointsWon": 137,
   "totalPointsAgainst": 210,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -73,
   "ppg": 13.7,
   "leagueRank": 274,
   "rating": -3.3,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "219b369d-c5eb-4ef8-bcea-559f56d94ff0"
  }
 ],
 "teams": [
  {
   "name": "Monroe",
   "w": 2,
   "l": 0,
   "pf": 1319,
   "pa": 989,
   "gw": 54,
   "gl": 10,
   "diff": 330,
   "gameDiff": 44,
   "power": 1.2,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northeast B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     27,
     5
    ],
    "male": [
     15,
     1
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 2,
   "l": 0,
   "pf": 1294,
   "pa": 1037,
   "gw": 51,
   "gl": 13,
   "diff": 257,
   "gameDiff": 38,
   "power": 1.2,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     23,
     9
    ],
    "male": [
     15,
     1
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
   "l": 0,
   "pf": 681,
   "pa": 574,
   "gw": 25,
   "gl": 7,
   "diff": 107,
   "gameDiff": 18,
   "power": 0.8,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     13,
     3
    ],
    "male": [
     5,
     3
    ],
    "female": [
     7,
     1
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Tinton Falls",
   "w": 2,
   "l": 0,
   "pf": 1328,
   "pa": 1127,
   "gw": 48,
   "gl": 16,
   "diff": 201,
   "gameDiff": 32,
   "power": 1.5,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northeast A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     25,
     7
    ],
    "male": [
     10,
     6
    ],
    "female": [
     13,
     3
    ]
   }
  },
  {
   "name": "Players Courtyard",
   "w": 1,
   "l": 0,
   "pf": 632,
   "pa": 563,
   "gw": 20,
   "gl": 12,
   "diff": 69,
   "gameDiff": 8,
   "power": 0.5,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     7,
     9
    ],
    "male": [
     7,
     1
    ],
    "female": [
     6,
     2
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hamilton",
   "w": 2,
   "l": 0,
   "pf": 1279,
   "pa": 1175,
   "gw": 38,
   "gl": 26,
   "diff": 104,
   "gameDiff": 12,
   "power": 0.4,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     19,
     13
    ],
    "male": [
     11,
     5
    ],
    "female": [
     8,
     8
    ]
   }
  },
  {
   "name": "PickleRage Union County Net Ninjas",
   "w": 1,
   "l": 0,
   "pf": 616,
   "pa": 570,
   "gw": 19,
   "gl": 13,
   "diff": 46,
   "gameDiff": 6,
   "power": 0.7,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northwest B",
   "podName": "Northeast / Northwest",
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
   "name": "Pickleball Kingdom Hillsborough",
   "w": 1,
   "l": 0,
   "pf": 617,
   "pa": 589,
   "gw": 19,
   "gl": 13,
   "diff": 28,
   "gameDiff": 6,
   "power": 0.2,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northwest B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     7,
     9
    ],
    "male": [
     5,
     3
    ],
    "female": [
     7,
     1
    ]
   }
  },
  {
   "name": "ACE Downingtown",
   "w": 1,
   "l": 0,
   "pf": 616,
   "pa": 591,
   "gw": 19,
   "gl": 13,
   "diff": 25,
   "gameDiff": 6,
   "power": 0.1,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     10,
     6
    ],
    "male": [
     4,
     4
    ],
    "female": [
     5,
     3
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 2,
   "l": 0,
   "pf": 1236,
   "pa": 1156,
   "gw": 35,
   "gl": 29,
   "diff": 80,
   "gameDiff": 6,
   "power": 0.2,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northwest A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     15,
     17
    ],
    "male": [
     8,
     8
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "Pickleball HQ",
   "w": 1,
   "l": 1,
   "pf": 1259,
   "pa": 1188,
   "gw": 36,
   "gl": 28,
   "diff": 71,
   "gameDiff": 8,
   "power": 0.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northeast A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     18,
     14
    ],
    "male": [
     11,
     5
    ],
    "female": [
     7,
     9
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 1,
   "l": 1,
   "pf": 1239,
   "pa": 1159,
   "gw": 35,
   "gl": 29,
   "diff": 80,
   "gameDiff": 6,
   "power": 0.4,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northwest A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     17,
     15
    ],
    "male": [
     8,
     8
    ],
    "female": [
     10,
     6
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 1,
   "l": 1,
   "pf": 1184,
   "pa": 1167,
   "gw": 28,
   "gl": 36,
   "diff": 17,
   "gameDiff": -8,
   "power": 0.4,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northeast B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     13,
     19
    ],
    "male": [
     6,
     10
    ],
    "female": [
     9,
     7
    ]
   }
  },
  {
   "name": "PickleRage Union County Pandas",
   "w": 0,
   "l": 2,
   "pf": 1186,
   "pa": 1237,
   "gw": 27,
   "gl": 37,
   "diff": -51,
   "gameDiff": -10,
   "power": -0.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northwest B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     17,
     15
    ],
    "male": [
     7,
     9
    ],
    "female": [
     3,
     13
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Lehigh Valley",
   "w": 0,
   "l": 2,
   "pf": 1202,
   "pa": 1267,
   "gw": 27,
   "gl": 37,
   "diff": -65,
   "gameDiff": -10,
   "power": -0.2,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     13,
     19
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
   "name": "Open Play",
   "w": 0,
   "l": 2,
   "pf": 1102,
   "pa": 1285,
   "gw": 25,
   "gl": 39,
   "diff": -183,
   "gameDiff": -14,
   "power": -0.8,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northwest A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     15,
     17
    ],
    "male": [
     6,
     10
    ],
    "female": [
     4,
     12
    ]
   }
  },
  {
   "name": "Bounce Tempest",
   "w": 0,
   "l": 1,
   "pf": 563,
   "pa": 632,
   "gw": 12,
   "gl": 20,
   "diff": -69,
   "gameDiff": -8,
   "power": -0.4,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     9,
     7
    ],
    "male": [
     1,
     7
    ],
    "female": [
     2,
     6
    ]
   }
  },
  {
   "name": "Picklr Newark",
   "w": 0,
   "l": 1,
   "pf": 540,
   "pa": 635,
   "gw": 10,
   "gl": 22,
   "diff": -95,
   "gameDiff": -12,
   "power": -0.2,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     6,
     10
    ],
    "male": [
     1,
     7
    ],
    "female": [
     3,
     5
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro",
   "w": 0,
   "l": 2,
   "pf": 1138,
   "pa": 1309,
   "gw": 19,
   "gl": 45,
   "diff": -171,
   "gameDiff": -26,
   "power": -0.6,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     9,
     23
    ],
    "male": [
     5,
     11
    ],
    "female": [
     5,
     11
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 0,
   "l": 2,
   "pf": 1005,
   "pa": 1289,
   "gw": 18,
   "gl": 46,
   "diff": -284,
   "gameDiff": -28,
   "power": -0.9,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northeast B",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     9,
     23
    ],
    "male": [
     5,
     11
    ],
    "female": [
     4,
     12
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 0,
   "l": 2,
   "pf": 1011,
   "pa": 1346,
   "gw": 8,
   "gl": 56,
   "diff": -335,
   "gameDiff": -48,
   "power": -1.5,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northeast A",
   "podName": "Northeast / Northwest",
   "fmt": {
    "mixed": [
     4,
     28
    ],
    "male": [
     1,
     15
    ],
    "female": [
     3,
     13
    ]
   }
  },
  {
   "name": "Pickle Juice Blackwood",
   "w": 0,
   "l": 1,
   "pf": 497,
   "pa": 659,
   "gw": 3,
   "gl": 29,
   "diff": -162,
   "gameDiff": -26,
   "power": -1,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     3,
     13
    ],
    "male": [
     0,
     8
    ],
    "female": [
     0,
     8
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Zyanya Flores",
   "b": "Michael Alfaro",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 8,
   "avgExpected": 4.6,
   "aId": "148bddd6-0d6a-468a-903d-84ba2da82239",
   "bId": "d060c2f3-016e-4260-97fc-d0cbea4415f5"
  },
  {
   "a": "Thao Tran",
   "b": "John Danks",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 7.3,
   "avgExpected": 4.2,
   "aId": "a7416218-74a3-40c5-9327-97840c949fc4",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Amanda Nguyen",
   "b": "John Danks",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 7.3,
   "avgExpected": 3.9,
   "aId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Chris Alworth",
   "b": "Alina Allakhveranova",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7,
   "avgExpected": 4.3,
   "aId": "286cbda4-8288-4a14-931c-f84521407eb7",
   "bId": "bbf13d1a-5393-4549-9d15-c5d2975f3e55"
  },
  {
   "a": "Liane Feyas",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 11.3,
   "avgExpected": 8.1,
   "aId": "2266824f-5ba8-4da3-a512-94c8e14f7c90",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Victor Salicetti",
   "b": "Tony Wong",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3,
   "avgExpected": 0,
   "aId": "08cb8582-4347-4694-9f58-7e479aa3b7a5",
   "bId": "e3828158-4c75-4583-9a96-c00b2e01252f"
  },
  {
   "a": "Lionell Matthews",
   "b": "James Cooper",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 1.7,
   "avgExpected": -0.8,
   "aId": "331d44ad-9004-4801-9978-45938dc3272d",
   "bId": "37355d05-aa6b-42d5-a4a2-874c8774bb5d"
  },
  {
   "a": "Liane Feyas",
   "b": "Kelly Aylward",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 5.8,
   "avgExpected": 3.5,
   "aId": "2266824f-5ba8-4da3-a512-94c8e14f7c90",
   "bId": "6068d706-4a9a-4475-8d31-d5a900172f27"
  },
  {
   "a": "Chris Balta",
   "b": "Sarah Dente",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 4.3,
   "avgExpected": 2.1,
   "aId": "2be2d2b6-177e-4378-a33d-49005788a7fd",
   "bId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f"
  },
  {
   "a": "Marcus Burritt",
   "b": "Adam Werwie",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1.3,
   "avgExpected": -0.7,
   "aId": "9605152c-b88b-40bd-b870-e2ea577e376a",
   "bId": "9fed5c28-a77a-444e-9812-2aad47084c7e"
  },
  {
   "a": "Sean Greener",
   "b": "Terri Pflueger",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 7.5,
   "avgExpected": 5.7,
   "aId": "12f33b3a-b4ea-4b31-affa-dc7917dce94b",
   "bId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "a": "Jaymie Vincelli",
   "b": "Darren Zheng",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3.3,
   "avgExpected": 1.6,
   "aId": "daba10b1-0903-4d21-b71f-f2b670a0b428",
   "bId": "fcedde03-815a-4405-9065-c0a473654b8c"
  },
  {
   "a": "Alyssa Beattie",
   "b": "Rosellen Perlowitz",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.3,
   "avgExpected": 1.9,
   "aId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf",
   "bId": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf"
  },
  {
   "a": "Jeff Kesner",
   "b": "Paul Matzko",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 0.7,
   "avgExpected": -0.9,
   "aId": "26116ec9-7f8d-4944-8c35-d2e0ad651a01",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Rachel Searby",
   "b": "Brittany Riccitiello",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2,
   "avgExpected": 0.3,
   "aId": "3648420d-4dae-4404-8b67-3162f343f6aa",
   "bId": "aea847ce-8af4-4809-b421-b25faeef0563"
  },
  {
   "a": "Sarah Dente",
   "b": "Alina Allakhveranova",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.3,
   "avgExpected": 3.9,
   "aId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f",
   "bId": "bbf13d1a-5393-4549-9d15-c5d2975f3e55"
  },
  {
   "a": "Vanessa Tortorice",
   "b": "Sarah Dente",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 3.3,
   "avgExpected": 2,
   "aId": "818811e5-0eb6-4611-8ac3-f65c10316305",
   "bId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f"
  },
  {
   "a": "Froilan Sunga",
   "b": "Miles Townsend",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1,
   "avgExpected": -0.3,
   "aId": "af6465d2-7a02-4dc5-a6b4-62cee62fe93a",
   "bId": "cf59ad9f-a37d-44d2-abcf-5ec17532a6aa"
  },
  {
   "a": "David Cartwright",
   "b": "Emiliya Mizrahi",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.2,
   "aId": "d6a6177b-1ee7-410c-bafc-bf1a91628876",
   "bId": "f173be84-93c7-46b8-b828-d44ddc52d63c"
  },
  {
   "a": "Maggie Wang",
   "b": "Alan Weissman",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.3,
   "avgExpected": 3.2,
   "aId": "0c1f375a-1567-4b92-8fb2-907a22d8e2ee",
   "bId": "12febf17-8650-40dd-92ca-a0bda06caf0f"
  },
  {
   "a": "Jebril Guevarra",
   "b": "Patricia Tuquero",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -2.7,
   "avgExpected": -3.6,
   "aId": "08175577-0ebd-4e9d-99f8-27910ed5f02f",
   "bId": "5f5166e1-3615-47ee-b4d6-d03093f180a4"
  },
  {
   "a": "Meghan Klein",
   "b": "Lakshmikanth Chaluvadi",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.4,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "377302a4-12da-4449-bbfc-a28248436679"
  },
  {
   "a": "Meghan Klein",
   "b": "Sarah Stangota",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1.3,
   "avgExpected": 0.6,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "Gabe Nacion",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1.7,
   "avgExpected": 1,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "b18fc532-a96e-400d-a321-73d52554df87"
  },
  {
   "a": "Prasad Mittapalli",
   "b": "Brittany Riccitiello",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.3,
   "aId": "11ccd85e-b03b-43d1-ae48-bc26b6eb19c8",
   "bId": "aea847ce-8af4-4809-b421-b25faeef0563"
  },
  {
   "a": "Lily Hahn",
   "b": "Katie Li",
   "team": "Open Play",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": -0.3,
   "avgExpected": -0.7,
   "aId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833",
   "bId": "b9087267-ae35-4c4d-baf5-90a51346fb9b"
  },
  {
   "a": "Chris Alworth",
   "b": "Chris Balta",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4,
   "avgExpected": 3.8,
   "aId": "286cbda4-8288-4a14-931c-f84521407eb7",
   "bId": "2be2d2b6-177e-4378-a33d-49005788a7fd"
  },
  {
   "a": "Sean Greener",
   "b": "Mike Hardy",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 5.5,
   "avgExpected": 5.3,
   "aId": "12f33b3a-b4ea-4b31-affa-dc7917dce94b",
   "bId": "e8434ae3-5d11-4d76-9e67-82f56d4f3db8"
  },
  {
   "a": "Robert Paniti",
   "b": "Rosellen Perlowitz",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.8,
   "avgExpected": 3.5,
   "aId": "d17ff3de-7455-4efb-b1be-4c61b5acbdf2",
   "bId": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf"
  },
  {
   "a": "Yash Mehta",
   "b": "Brittany Riccitiello",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4.7,
   "avgExpected": 4.5,
   "aId": "adc25ed0-4bc3-47da-9509-4caeb8f90185",
   "bId": "aea847ce-8af4-4809-b421-b25faeef0563"
  },
  {
   "a": "Jade Chin",
   "b": "Michelle Cobos",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -7,
   "avgExpected": -7,
   "aId": "4fcda82e-e24a-45d7-9784-c230d47a113b",
   "bId": "94e54237-56df-41b2-8b89-675a69762740"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "Jen Ogorzat",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -0.2,
   "avgExpected": -0.3,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "a": "Kenneth Bautista",
   "b": "Rachel Appleton",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2,
   "avgExpected": 2.1,
   "aId": "c383dca8-551f-4776-90d7-7f57248d1680",
   "bId": "db90de13-5c04-4d76-b9b8-2cd30c9900a8"
  },
  {
   "a": "Amanda Nguyen",
   "b": "Thao Tran",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.7,
   "avgExpected": 1,
   "aId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e",
   "bId": "a7416218-74a3-40c5-9327-97840c949fc4"
  },
  {
   "a": "Prasad Mittapalli",
   "b": "Yash Mehta",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.5,
   "avgExpected": 4.7,
   "aId": "11ccd85e-b03b-43d1-ae48-bc26b6eb19c8",
   "bId": "adc25ed0-4bc3-47da-9509-4caeb8f90185"
  },
  {
   "a": "James Cooper",
   "b": "Vanessa Tortorice",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.3,
   "avgExpected": 1.7,
   "aId": "37355d05-aa6b-42d5-a4a2-874c8774bb5d",
   "bId": "818811e5-0eb6-4611-8ac3-f65c10316305"
  },
  {
   "a": "Patricia Majowicz",
   "b": "Andy Pineda",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0.3,
   "avgExpected": 0.9,
   "aId": "95bb08f8-b0f7-4849-852e-6bebeb9e3e53",
   "bId": "bb6c579d-1627-4971-ad0f-4be65598d579"
  },
  {
   "a": "Diana Tabia",
   "b": "Julianna Rodrigues",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1.5,
   "avgExpected": -0.9,
   "aId": "7494f19a-141d-4c00-8d37-d5e79eca4853",
   "bId": "77c32d66-d466-4308-9c45-1639e1925b70"
  },
  {
   "a": "Lionell Matthews",
   "b": "Sarah Dente",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2,
   "avgExpected": 2.6,
   "aId": "331d44ad-9004-4801-9978-45938dc3272d",
   "bId": "95d554c7-4cd5-4e2a-8502-46479d0b1e8f"
  },
  {
   "a": "David Schwartz",
   "b": "Robert Paniti",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 0.9,
   "aId": "908a8539-b3a5-437a-957f-e900db3c01b9",
   "bId": "d17ff3de-7455-4efb-b1be-4c61b5acbdf2"
  },
  {
   "a": "Susan Li",
   "b": "Michael Guldin",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3.3,
   "avgExpected": -2.7,
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
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": 0,
   "aId": "0214a334-0b6c-4a34-9f61-c4aadd8ad06e",
   "bId": "3648420d-4dae-4404-8b67-3162f343f6aa"
  },
  {
   "a": "Peter Hackney",
   "b": "Steven Fernandez",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -6,
   "avgExpected": -5.1,
   "aId": "0839ae18-ad84-45e6-bfde-3d0855e06b22",
   "bId": "cfe27f22-d878-4a3c-a680-7c04f44f5b0d"
  },
  {
   "a": "Zyanya Flores",
   "b": "Alina Allakhveranova",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2,
   "avgExpected": 3.1,
   "aId": "148bddd6-0d6a-468a-903d-84ba2da82239",
   "bId": "bbf13d1a-5393-4549-9d15-c5d2975f3e55"
  },
  {
   "a": "Liane Feyas",
   "b": "Terri Pflueger",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.5,
   "avgActual": 6.5,
   "avgExpected": 7.5,
   "aId": "2266824f-5ba8-4da3-a512-94c8e14f7c90",
   "bId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "a": "Alyssa Beattie",
   "b": "David Schwartz",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -3.3,
   "avgExpected": -2.1,
   "aId": "0b4ee4e6-7740-49a4-abca-c6602b3f72bf",
   "bId": "908a8539-b3a5-437a-957f-e900db3c01b9"
  },
  {
   "a": "Megan Torres",
   "b": "Joseph Mckenna",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 2.3,
   "avgExpected": 3.2,
   "aId": "45590591-9a85-4098-8ba9-36fc0fa18f4c",
   "bId": "551c6f9d-b1e1-4b5b-a8cb-bea20a14d9ff"
  },
  {
   "a": "Joan Harris",
   "b": "Maxwell Winters",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -2.2,
   "avgExpected": -1.2,
   "aId": "b0132c9e-2a21-45c8-b04d-b84aec626e68",
   "bId": "d5037744-373a-485e-9fd3-5564495b8c2d"
  },
  {
   "a": "David Burke",
   "b": "Michelle Cobos",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -8,
   "avgExpected": -6.6,
   "aId": "69b99d4e-f80c-480a-a008-33ff326a3c93",
   "bId": "94e54237-56df-41b2-8b89-675a69762740"
  },
  {
   "a": "Alex Glushek",
   "b": "David Burke",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -4.3,
   "avgExpected": -2.9,
   "aId": "65e58579-8b95-46f1-9e95-a3e53347de32",
   "bId": "69b99d4e-f80c-480a-a008-33ff326a3c93"
  },
  {
   "a": "Amanda Nguyen",
   "b": "Juri Solano",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -3,
   "avgExpected": -1.6,
   "aId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e",
   "bId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0"
  },
  {
   "a": "Jason Heiselman",
   "b": "Alexis Kerven",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -3,
   "avgExpected": -1.5,
   "aId": "24b7e6fe-4568-4d20-9cea-6b29169d486e",
   "bId": "a2b836f4-8bfa-4baf-b01a-e342f5947c04"
  },
  {
   "a": "Jebril Guevarra",
   "b": "Juri Solano",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3.5,
   "avgExpected": -2.2,
   "aId": "08175577-0ebd-4e9d-99f8-27910ed5f02f",
   "bId": "2b5ef7ee-a894-44c4-bc05-180b5d913ee0"
  },
  {
   "a": "Alex Glushek",
   "b": "Mayra Tuba",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -6.5,
   "avgExpected": -4.7,
   "aId": "65e58579-8b95-46f1-9e95-a3e53347de32",
   "bId": "72a2a3e0-df8e-4e68-a685-c6e493bb44f2"
  },
  {
   "a": "Jen Ogorzat",
   "b": "Rakesh Roy",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": -0.7,
   "avgExpected": 1.5,
   "aId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Udita Agarwala",
   "b": "Rashmi Patade",
   "team": "Open Play",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -7.3,
   "avgExpected": -5.3,
   "aId": "2351aaff-bff5-4734-9b22-20ce6988c40d",
   "bId": "c56ab685-5c55-4437-98a6-7a9b8c95895d"
  },
  {
   "a": "Jessica Kopec",
   "b": "Ed Amato",
   "team": "PickleRage Union County Pandas",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -3.7,
   "avgExpected": -1.3,
   "aId": "3b6e4a3b-d867-475c-9418-ea6f854b8dd8",
   "bId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "a": "Lily Hahn",
   "b": "Luan Vo",
   "team": "Open Play",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": -2.3,
   "avgExpected": 0,
   "aId": "25f3341a-bb15-4f08-b0d5-11b8d78c8833",
   "bId": "9b11aeff-377e-48f3-9770-14388ac96b68"
  },
  {
   "a": "Stephanie Taxter",
   "b": "Nathan Trimmer",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -4.7,
   "avgExpected": -1.8,
   "aId": "66a38d92-6b44-498c-8828-a8f7cd95fb9f",
   "bId": "9541ec05-a25a-4577-b59c-bdf04006b1b6"
  },
  {
   "a": "Ed Amato",
   "b": "John Danks",
   "team": "PickleRage Union County Pandas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 1.3,
   "avgExpected": 3.9,
   "aId": "ce893b2d-f5ea-40aa-98c0-d67402405b64",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Lukas Chrebet",
   "b": "Jade Chin",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -10.3,
   "avgExpected": -7,
   "aId": "42795346-b8aa-4e5d-80a5-8a1768c094e8",
   "bId": "4fcda82e-e24a-45d7-9784-c230d47a113b"
  },
  {
   "a": "James Cooper",
   "b": "Michael Alfaro",
   "team": "Pickleball Kingdom Tinton Falls",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -2,
   "avgExpected": 1.5,
   "aId": "37355d05-aa6b-42d5-a4a2-874c8774bb5d",
   "bId": "d060c2f3-016e-4260-97fc-d0cbea4415f5"
  }
 ],
 "matches": [
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
    "Emiliya Mizrahi",
    "Patricia Majowicz"
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
    "Suki Wong",
    "Barbara Mccarron",
    "Charlene De Lara",
    "Jenny Lin",
    "Susan Dente",
    "Reuben Zilber"
   ]
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
   "subs": [
    "Rashmi Patade"
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
   "result": null,
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "PickleRage Union County Net Ninjas",
   "time": "2026-08-31T19:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
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
     "h": [
      "Ryan Peixoto",
      "Rob Stever"
     ],
     "a": [
      "Freddy Li",
      "Jimmy Tom"
     ]
    }
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
    "Emiliya Mizrahi",
    "Patricia Majowicz",
    "Rashmi Patade",
    "Yawen Zhang"
   ]
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
   "subs": [
    "Andrew Frey"
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
   "result": null,
   "week": 2,
   "home": "Pickle Juice Blackwood",
   "away": "Bounce Tempest",
   "time": "2026-08-31T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
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
     "h": [
      "Michael Van Horn",
      "Rick Khounlavouth"
     ],
     "a": [
      "Timothy Lowry",
      "Thomas Nguyen"
     ]
    }
   ]
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
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Bounce Philly",
   "time": "2026-09-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Palace",
   "time": "2026-09-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Flemington",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "PickleRage Union County Net Ninjas",
   "away": "Open Play",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Players Courtyard",
   "away": "Pickle Juice Blackwood",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "APC Garden State",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Monroe",
   "away": "Pickleball HQ",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Bounce Tempest",
   "away": "Picklr Newark",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "ACE Downingtown",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Home Court",
   "away": "PickleRage Union County Pandas",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickle House",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington",
   "away": "Pickleball HQ",
   "time": "2026-09-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-09-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle Juice Blackwood",
   "away": "Picklr Newark",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Palace",
   "away": "PickleRage Union County Net Ninjas",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Tempest",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Bounce Philly",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "PickleRage Union County Pandas",
   "away": "Open Play",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle House",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "ACE Downingtown",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "APC Garden State",
   "away": "Players Courtyard",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle Juice Blackwood",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Home Court",
   "away": "Pickleball HQ",
   "time": "2026-09-27T10:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "APC Garden State",
   "away": "ACE Downingtown",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Picklr Newark",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "PickleRage Union County Pandas",
   "away": "Monroe",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Tempest",
   "away": "Bounce Philly",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Players Courtyard",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-27T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "PickleRage Union County Net Ninjas",
   "away": "Flemington",
   "time": "2026-09-27T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Open Play",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-27T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-27T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickle House",
   "time": "2026-09-27T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Monroe",
   "time": "2026-10-26T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Flemington",
   "away": "Monroe",
   "time": "2026-09-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Open Play",
   "time": "2026-09-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Hatboro",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickle House",
   "away": "Pickleball HQ",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Players Courtyard",
   "away": "Picklr Newark",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Philly",
   "away": "ACE Downingtown",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickle Juice Blackwood",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "PickleRage Union County Net Ninjas",
   "away": "PickleRage Union County Pandas",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Palace",
   "away": "Home Court",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Tempest",
   "away": "APC Garden State",
   "time": "2026-09-28T19:30:00",
   "complete": false
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
   "home": "Picklr Newark",
   "away": "Bounce Philly",
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
   "week": 7,
   "home": "PickleRage Union County Net Ninjas",
   "away": "Pickleball Kingdom Hillsborough",
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
   "home": "Players Courtyard",
   "away": "Bounce Tempest",
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
   "home": "Pickleball Palace",
   "away": "PickleRage Union County Pandas",
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
   "week": 8,
   "home": "Pickleball HQ",
   "away": "Monroe",
   "time": "2026-10-12T19:00:00",
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
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Pickle House",
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
   "home": "Open Play",
   "away": "PickleRage Union County Net Ninjas",
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
   "home": "APC Garden State",
   "away": "Bounce Tempest",
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
   "home": "Picklr Newark",
   "away": "Players Courtyard",
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
   "home": "Bounce Philly",
   "away": "Pickleball Kingdom Lehigh Valley",
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
   "home": "Monroe",
   "away": "Pickleball Kingdom Tinton Falls",
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
   "home": "Picklr Newark",
   "away": "Bounce Tempest",
   "time": "2026-10-19T19:30:00",
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
   "home": "Pickle Juice Blackwood",
   "away": "Players Courtyard",
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
   "home": "Jersey Pickleball Club",
   "away": "Pickle House",
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
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Picklr Newark",
   "time": "2026-10-25T09:00:00",
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
   "home": "Dill Dinkers Hatboro",
   "away": "Players Courtyard",
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
   "home": "Bounce Tempest",
   "away": "ACE Downingtown",
   "time": "2026-10-26T19:30:00",
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
   "home": "Players Courtyard",
   "away": "Bounce Philly",
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
   "week": 10,
   "home": "Picklr Newark",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-10-26T19:30:00",
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
   "home": "Flemington",
   "away": "Pickle House",
   "time": "2026-11-02T19:00:00",
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
   "home": "Players Courtyard",
   "away": "APC Garden State",
   "time": "2026-11-02T19:30:00",
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
   "home": "Picklr Newark",
   "away": "Pickle Juice Blackwood",
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
   "home": "Dill Dinkers Hatboro",
   "away": "ACE Downingtown",
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
   "home": "Pickleball Palace",
   "away": "Open Play",
   "time": "2026-11-02T19:30:00",
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
   "home": "Flemington",
   "away": "PickleRage Union County Pandas",
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
   "home": "PickleRage Union County Net Ninjas",
   "away": "Pickle House",
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
   "home": "ACE Downingtown",
   "away": "Picklr Newark",
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
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Tinton Falls",
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
   "home": "Players Courtyard",
   "away": "ACE Downingtown",
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
   "home": "Bounce Tempest",
   "away": "Pickle Juice Blackwood",
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
   "home": "Home Court",
   "away": "Pickleball Palace",
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
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Nikki Nigro": "01c2e4d1-3738-4ee6-8878-4a2559ec006a",
  "Thuy Pham": "03a5e799-1e53-41c8-b62c-99b338ab0b35",
  "Huifang Yao": "0678b5e4-cf92-49cb-8689-2d90cc356950",
  "Kathi Sheehan": "074e66af-6079-4c8e-aa69-e01f488ba5b0",
  "Judy Brougham": "076baef0-3766-4902-a737-578d6262a38a",
  "Frank Kong": "33baac8e-fe7f-4c97-8443-0687777b2ed2",
  "Emily Fowler": "42dcd48a-d88f-422d-8a1e-8ea74ba52440",
  "Mike Esfahani": "5309d94e-5f39-4cca-a25d-cba3773abe73",
  "Kendall Rodgers": "5638eefb-19f5-473a-b9fc-98731a9d458f",
  "Crizle Ong": "611e6c5a-d294-40b0-bf75-afbca58b145a",
  "Carolyn Shipe": "6775ab12-38b5-4f41-a6c1-df35276b63c2",
  "Kay Defilippo": "688f64da-600b-4449-b9dc-fd2cab2a25a9",
  "Stephanie Li": "6a68ba8e-9700-4e5a-b54e-07160dac5c68",
  "Isabella Silva": "6b4c5230-95a7-4b24-b971-47c8eb53b251",
  "Andrew Tayag": "6c6f580c-14e7-4c43-a9e0-797f1c01b818",
  "Anthony Serratore": "726aafbc-2e11-4f8c-a178-15c4cba5a964",
  "Ion Rabadon": "74a6086f-4c39-45c1-bb62-a90db6c74eab",
  "Steve Nuguid": "761a4cfd-197b-4887-b9d8-ec32a9a7cf10",
  "Azka Rahman": "7c56ac03-eed6-45ec-af77-f1cf413ada9a",
  "Kristin Roberts": "820ca908-1d16-4f16-accb-9a3d78a98600",
  "Claire Nguyen": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3",
  "Sherry Tomaino": "981ae183-14b1-4b7f-880e-8f03e94ca703",
  "John Dick": "a16c6053-9417-4888-ab5d-7c08b327c117",
  "Rodney Godwin": "ac299e7b-727b-439c-9f99-1bb4b1a5a6a9",
  "Nancy Pace": "b051e0af-ace0-4fa2-a58d-e4898c03fa95",
  "Nicole Dunbar": "bd063e35-9767-47d6-81e8-58b1625fb2b0",
  "Diane Herbst": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9",
  "Jennalee Fede": "d043b0ad-d33b-4f58-b605-709246b23c11",
  "Charlene Fletcher": "d05d7514-8679-4d34-ad12-654b496f2308",
  "Manny Duarte": "d41ad35d-4e13-4f91-97e7-3702dd8d05f2",
  "Anthony Oliver": "e99589b9-dcaa-405f-ad41-0cda95a5f236",
  "Leon Shum": "ea61b0e2-ea10-4b1b-8dab-9086631699bf",
  "Jimmy Nguyen": "eadaa940-5389-48aa-9891-61c20886d34b",
  "Melissa Mackey": "eb92331b-662d-4f91-bf8a-aa8b93c0c02b",
  "Joseph Korom": "f014daaa-0b2e-4e20-b820-79741affdbcd",
  "Vineet Agarwala": "f160fd0d-11cd-4dd5-865b-0c92d2583949",
  "Brian Criscuolo": "f59307d0-0495-421c-8cee-28c2e2b56bcf"
 },
 "meta": {
  "matchesPlayed": 18,
  "provisionalMatches": 0,
  "weeks": "1-2",
  "totalPlayers": 330,
  "ratingHistoryWeeks": [
   1,
   2
  ],
  "divisionSlug": "e27386b3",
  "hasPlayoffs": false,
  "typicalDay": "Mondays",
  "detailFile": "detail-e27386b3.js",
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
    "Northeast B": [
     "Flemington",
     "Monroe",
     "Pickle House"
    ],
    "Southeast": [
     "APC Garden State",
     "Bounce Tempest",
     "Pickle Juice Blackwood",
     "Picklr Newark",
     "Players Courtyard"
    ],
    "Southwest": [
     "ACE Downingtown",
     "Bounce Philly",
     "Dill Dinkers Hatboro",
     "Pickleball Kingdom Hamilton",
     "Pickleball Kingdom Lehigh Valley"
    ],
    "Northeast A": [
     "Jersey Pickleball Club",
     "Pickleball HQ",
     "Pickleball Kingdom Tinton Falls"
    ],
    "Northwest B": [
     "Pickleball Kingdom Hillsborough",
     "PickleRage Union County Net Ninjas",
     "PickleRage Union County Pandas"
    ],
    "Northwest A": [
     "Home Court",
     "Open Play",
     "Pickleball Palace"
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
  DATA.meta.asOf = "2026-09-01T15:47:29.748Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["e27386b3"] = DATA;
})();
