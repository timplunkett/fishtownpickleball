(function () {
  const DATA = {
 "players": [
  {
   "name": "Kerrin Maurer",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 27,
   "losses": 3,
   "pointsWon": 622,
   "totalPointsAgainst": 459,
   "mixedWins": 14,
   "mixedLosses": 2,
   "genderWins": 13,
   "genderLosses": 1,
   "clutchWins": 7,
   "clutchLosses": 2,
   "playerId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "winPct": 90,
   "diff": 163,
   "ppg": 20.7,
   "leagueRank": 1,
   "rating": 5.6,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Lilie Sen",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 135,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "winPct": 87.5,
   "diff": 31,
   "ppg": 20.8,
   "leagueRank": 29,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1
  },
  {
   "name": "Tessa Arendt",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 40,
   "losses": 12,
   "pointsWon": 1045,
   "totalPointsAgainst": 815,
   "mixedWins": 18,
   "mixedLosses": 7,
   "genderWins": 22,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 6,
   "playerId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc",
   "winPct": 76.9,
   "diff": 230,
   "ppg": 20.1,
   "leagueRank": 2,
   "rating": 2.6,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Deepak Sunku",
   "gender": "Male",
   "team": "The Robbinsvilians",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 37,
   "losses": 12,
   "pointsWon": 968,
   "totalPointsAgainst": 838,
   "mixedWins": 15,
   "mixedLosses": 8,
   "genderWins": 22,
   "genderLosses": 4,
   "clutchWins": 11,
   "clutchLosses": 5,
   "playerId": "ce590106-6f19-43b7-8a91-4dc31d28eb31",
   "winPct": 75.5,
   "diff": 130,
   "ppg": 19.8,
   "leagueRank": 3,
   "rating": 3.3,
   "ratingGames": 49,
   "confidence": 87,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1
  },
  {
   "name": "Noelle Ramirez",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 154,
   "totalPointsAgainst": 134,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "f30428dd-bc5a-4535-94b3-b8779e958ada",
   "winPct": 75,
   "diff": 20,
   "ppg": 19.3,
   "leagueRank": 38,
   "rating": 2.6,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Varun Gurram",
   "gender": "Male",
   "team": "Baggers, Sand",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 26,
   "losses": 10,
   "pointsWon": 717,
   "totalPointsAgainst": 605,
   "mixedWins": 15,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 3,
   "playerId": "44864b51-f901-4470-a6bd-891495ffd132",
   "winPct": 72.2,
   "diff": 112,
   "ppg": 19.9,
   "leagueRank": 4,
   "rating": 1.1,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Kelsey Miller",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 13,
   "losses": 5,
   "pointsWon": 356,
   "totalPointsAgainst": 308,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "playerId": "218e6e5d-e016-4509-9642-c40f2304d76b",
   "winPct": 72.2,
   "diff": 48,
   "ppg": 19.8,
   "leagueRank": 15,
   "rating": 0.5,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Lindsey Allumbaugh",
   "gender": "Female",
   "team": "Eagles Erne Empire ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 128,
   "totalPointsAgainst": 108,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "6c8e2373-9549-4f25-9cbf-4264745eda64",
   "winPct": 71.4,
   "diff": 20,
   "ppg": 18.3,
   "leagueRank": 44,
   "rating": 1.6,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Rakshit Maddur Gopinath",
   "gender": "Male",
   "team": "Baggers, Sand",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 17,
   "losses": 7,
   "pointsWon": 479,
   "totalPointsAgainst": 407,
   "mixedWins": 10,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 3,
   "playerId": "1448a485-6172-48af-96e0-f4876e9c5268",
   "winPct": 70.8,
   "diff": 72,
   "ppg": 20,
   "leagueRank": 5,
   "rating": 1.1,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Emily Babinsky",
   "gender": "Female",
   "team": "The Robbinsvilians",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 25,
   "losses": 12,
   "pointsWon": 717,
   "totalPointsAgainst": 627,
   "mixedWins": 12,
   "mixedLosses": 7,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 4,
   "playerId": "d0e2c1ea-529d-4364-b521-cb205ecdded3",
   "winPct": 67.6,
   "diff": 90,
   "ppg": 19.4,
   "leagueRank": 7,
   "rating": 1.4,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Chris Damato",
   "gender": "Male",
   "team": "The Robbinsvilians",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 29,
   "losses": 14,
   "pointsWon": 833,
   "totalPointsAgainst": 740,
   "mixedWins": 14,
   "mixedLosses": 10,
   "genderWins": 15,
   "genderLosses": 4,
   "clutchWins": 8,
   "clutchLosses": 5,
   "playerId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "winPct": 67.4,
   "diff": 93,
   "ppg": 19.4,
   "leagueRank": 6,
   "rating": 2.2,
   "ratingGames": 43,
   "confidence": 86,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Jesse Martinez",
   "gender": "Male",
   "team": "Baggers, Sand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 32,
   "losses": 16,
   "pointsWon": 913,
   "totalPointsAgainst": 845,
   "mixedWins": 18,
   "mixedLosses": 7,
   "genderWins": 14,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 3,
   "playerId": "9d3d247f-e4a6-4cdb-89f8-ddfdc2264aa8",
   "winPct": 66.7,
   "diff": 68,
   "ppg": 19,
   "leagueRank": 11,
   "rating": 1.5,
   "ratingGames": 48,
   "confidence": 87,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 1
  },
  {
   "name": "Steph Wachino",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 234,
   "totalPointsAgainst": 191,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "63870355-c8af-48c8-8472-f6cc82db5508",
   "winPct": 66.7,
   "diff": 43,
   "ppg": 19.5,
   "leagueRank": 39,
   "rating": 0,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.7
  },
  {
   "name": "Maeve Mcgowan",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 39,
   "losses": 21,
   "pointsWon": 1165,
   "totalPointsAgainst": 1021,
   "mixedWins": 16,
   "mixedLosses": 14,
   "genderWins": 23,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 9,
   "playerId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "winPct": 65,
   "diff": 144,
   "ppg": 19.4,
   "leagueRank": 9,
   "rating": 1.8,
   "ratingGames": 60,
   "confidence": 89,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Evan Woerner",
   "gender": "Male",
   "team": "The Robbinsvilians",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 22,
   "losses": 12,
   "pointsWon": 656,
   "totalPointsAgainst": 582,
   "mixedWins": 10,
   "mixedLosses": 7,
   "genderWins": 12,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 4,
   "playerId": "4e12c5c9-dcc8-48c8-96da-c0070a03583b",
   "winPct": 64.7,
   "diff": 74,
   "ppg": 19.3,
   "leagueRank": 8,
   "rating": 2.1,
   "ratingGames": 34,
   "confidence": 85,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Elliott Bauer",
   "gender": "Male",
   "team": "Eagles Erne Empire ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 24,
   "losses": 14,
   "pointsWon": 743,
   "totalPointsAgainst": 687,
   "mixedWins": 12,
   "mixedLosses": 8,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 10,
   "clutchLosses": 7,
   "playerId": "eea6a616-e242-4a3c-9a46-098432e0ab91",
   "winPct": 63.2,
   "diff": 56,
   "ppg": 19.6,
   "leagueRank": 10,
   "rating": 1.8,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Rajeeth Nadig",
   "gender": "Male",
   "team": "Paddle Taps",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 463,
   "totalPointsAgainst": 444,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 1,
   "playerId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "winPct": 62.5,
   "diff": 19,
   "ppg": 19.3,
   "leagueRank": 13,
   "rating": -0.2,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Guadalupe Reyes",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 32,
   "losses": 20,
   "pointsWon": 1017,
   "totalPointsAgainst": 890,
   "mixedWins": 15,
   "mixedLosses": 11,
   "genderWins": 17,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 8,
   "playerId": "88069b92-8946-4a56-a1be-c0bb2bc00221",
   "winPct": 61.5,
   "diff": 127,
   "ppg": 19.6,
   "leagueRank": 12,
   "rating": 0.1,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Abhishekh Mehra",
   "gender": "Male",
   "team": "The Robbinsvilians",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 27,
   "losses": 17,
   "pointsWon": 837,
   "totalPointsAgainst": 784,
   "mixedWins": 14,
   "mixedLosses": 8,
   "genderWins": 13,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 5,
   "playerId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "winPct": 61.4,
   "diff": 53,
   "ppg": 19,
   "leagueRank": 14,
   "rating": 1.4,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0
  },
  {
   "name": "Margaret Robb",
   "gender": "Female",
   "team": "The Robbinsvilians",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 38,
   "losses": 24,
   "pointsWon": 1178,
   "totalPointsAgainst": 1111,
   "mixedWins": 17,
   "mixedLosses": 14,
   "genderWins": 21,
   "genderLosses": 10,
   "clutchWins": 13,
   "clutchLosses": 10,
   "playerId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7",
   "winPct": 61.3,
   "diff": 67,
   "ppg": 19,
   "leagueRank": 16,
   "rating": 1.6,
   "ratingGames": 62,
   "confidence": 89,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Al Mancini",
   "gender": "Male",
   "team": "Baggers, Sand",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 19,
   "losses": 13,
   "pointsWon": 610,
   "totalPointsAgainst": 599,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 6,
   "playerId": "51352d99-02ac-4299-abac-a688bfade22f",
   "winPct": 59.4,
   "diff": 11,
   "ppg": 19.1,
   "leagueRank": 20,
   "rating": 0.6,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Sree Harsha Konduru",
   "gender": "Male",
   "team": "Eagles Erne Empire ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 21,
   "losses": 15,
   "pointsWon": 662,
   "totalPointsAgainst": 627,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 3,
   "playerId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "winPct": 58.3,
   "diff": 35,
   "ppg": 18.4,
   "leagueRank": 17,
   "rating": 1,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Dipen Bhatt",
   "gender": "Male",
   "team": "Baggers, Sand",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 23,
   "losses": 18,
   "pointsWon": 780,
   "totalPointsAgainst": 736,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 9,
   "playerId": "fe8af1d3-ff62-430d-90af-32794cc7b912",
   "winPct": 56.1,
   "diff": 44,
   "ppg": 19,
   "leagueRank": 22,
   "rating": 1.5,
   "ratingGames": 41,
   "confidence": 86,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Joey Angelson",
   "gender": "Female",
   "team": "The Robbinsvilians",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 26,
   "losses": 21,
   "pointsWon": 876,
   "totalPointsAgainst": 845,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 12,
   "genderLosses": 12,
   "clutchWins": 9,
   "clutchLosses": 7,
   "playerId": "6035850e-af27-40db-bb81-f5787f344871",
   "winPct": 55.3,
   "diff": 31,
   "ppg": 18.6,
   "leagueRank": 23,
   "rating": 0.6,
   "ratingGames": 47,
   "confidence": 88,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Lissa Eagles",
   "gender": "Female",
   "team": "Eagles Erne Empire ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 23,
   "losses": 19,
   "pointsWon": 765,
   "totalPointsAgainst": 747,
   "mixedWins": 15,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 5,
   "playerId": "9ec39678-a120-45de-b8a5-897b8cf900cd",
   "winPct": 54.8,
   "diff": 18,
   "ppg": 18.2,
   "leagueRank": 21,
   "rating": 2.8,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Marc Pellicane",
   "gender": "Male",
   "team": "Eagles Erne Empire ",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 17,
   "losses": 14,
   "pointsWon": 586,
   "totalPointsAgainst": 568,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 2,
   "playerId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "winPct": 54.8,
   "diff": 18,
   "ppg": 18.9,
   "leagueRank": 19,
   "rating": 1.4,
   "ratingGames": 31,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Angela Luo",
   "gender": "Female",
   "team": "The Robbinsvilians",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 564,
   "totalPointsAgainst": 511,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 6,
   "playerId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "winPct": 53.3,
   "diff": 53,
   "ppg": 18.8,
   "leagueRank": 18,
   "rating": 2,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Jorge Valencia King",
   "gender": "Male",
   "team": "Paddle Taps",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 552,
   "totalPointsAgainst": 547,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 8,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "41bb8b59-b2a3-4b27-9f26-66d45a2cddc8",
   "winPct": 53.3,
   "diff": 5,
   "ppg": 18.4,
   "leagueRank": 25,
   "rating": -0.6,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Christopher Venuto",
   "gender": "Male",
   "team": "Paddle Taps",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 19,
   "losses": 17,
   "pointsWon": 674,
   "totalPointsAgainst": 659,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 6,
   "playerId": "19d10737-b8cb-4106-9b6d-1c9aced87b19",
   "winPct": 52.8,
   "diff": 15,
   "ppg": 18.7,
   "leagueRank": 24,
   "rating": 0.5,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Eva Danieli",
   "gender": "Female",
   "team": "The Robbinsvilians",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 27,
   "losses": 25,
   "pointsWon": 951,
   "totalPointsAgainst": 922,
   "mixedWins": 13,
   "mixedLosses": 13,
   "genderWins": 14,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 7,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "winPct": 51.9,
   "diff": 29,
   "ppg": 18.3,
   "leagueRank": 26,
   "rating": -0.1,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Michelle Friedman",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 141,
   "totalPointsAgainst": 134,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "95b1b428-2e56-4578-8cb3-574954ba8922",
   "winPct": 50,
   "diff": 7,
   "ppg": 17.6,
   "leagueRank": 54,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Perri Goldstein",
   "gender": "Female",
   "team": "Eagles Erne Empire ",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 21,
   "losses": 23,
   "pointsWon": 823,
   "totalPointsAgainst": 824,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 14,
   "clutchWins": 10,
   "clutchLosses": 10,
   "playerId": "c314fe29-19de-4c08-956b-ae10493edcc8",
   "winPct": 47.7,
   "diff": -1,
   "ppg": 18.7,
   "leagueRank": 27,
   "rating": -0.8,
   "ratingGames": 44,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Tony Scharko",
   "gender": "Male",
   "team": "Paddle Taps",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 20,
   "losses": 22,
   "pointsWon": 784,
   "totalPointsAgainst": 785,
   "mixedWins": 7,
   "mixedLosses": 14,
   "genderWins": 13,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 10,
   "playerId": "a67d258e-70c9-4c03-974a-7cd0620b15ff",
   "winPct": 47.6,
   "diff": -1,
   "ppg": 18.7,
   "leagueRank": 28,
   "rating": 0.2,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Stephany Venuto",
   "gender": "Female",
   "team": "Paddle Taps",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 17,
   "losses": 19,
   "pointsWon": 647,
   "totalPointsAgainst": 684,
   "mixedWins": 11,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 6,
   "playerId": "06ae7962-cab5-454b-8788-76ccc249930f",
   "winPct": 47.2,
   "diff": -37,
   "ppg": 18,
   "leagueRank": 35,
   "rating": -1.7,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Charlotte Healey",
   "gender": "Female",
   "team": "Eagles Erne Empire ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 274,
   "totalPointsAgainst": 274,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "winPct": 46.7,
   "diff": 0,
   "ppg": 18.3,
   "leagueRank": 47,
   "rating": 1.5,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Tom Laiso",
   "gender": "Male",
   "team": "Eagles Erne Empire ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 19,
   "losses": 23,
   "pointsWon": 757,
   "totalPointsAgainst": 769,
   "mixedWins": 10,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 6,
   "playerId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "winPct": 45.2,
   "diff": -12,
   "ppg": 18,
   "leagueRank": 32,
   "rating": 1,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Lance Brown",
   "gender": "Male",
   "team": "The Robbinsvilians",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 14,
   "losses": 17,
   "pointsWon": 567,
   "totalPointsAgainst": 587,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 6,
   "playerId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "winPct": 45.2,
   "diff": -20,
   "ppg": 18.3,
   "leagueRank": 37,
   "rating": -1,
   "ratingGames": 31,
   "confidence": 84,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0
  },
  {
   "name": "Taylor Hartman",
   "gender": "Female",
   "team": "Paddle Taps",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 22,
   "losses": 27,
   "pointsWon": 880,
   "totalPointsAgainst": 927,
   "mixedWins": 15,
   "mixedLosses": 13,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 10,
   "clutchLosses": 10,
   "playerId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "winPct": 44.9,
   "diff": -47,
   "ppg": 18,
   "leagueRank": 30,
   "rating": 1.9,
   "ratingGames": 49,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Jim Pagano",
   "gender": "Male",
   "team": "The Robbinsvilians",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 4,
   "losses": 5,
   "pointsWon": 170,
   "totalPointsAgainst": 166,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "f1012c67-b6ba-4270-8d7a-53a9aa34b7df",
   "winPct": 44.4,
   "diff": 4,
   "ppg": 18.9,
   "leagueRank": 57,
   "rating": 0,
   "ratingGames": 9,
   "confidence": 65,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Lauren Mammano",
   "gender": "Female",
   "team": "Eagles Erne Empire ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 18,
   "losses": 24,
   "pointsWon": 731,
   "totalPointsAgainst": 769,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 4,
   "playerId": "8d896637-2c2a-4541-9155-257bf5a37055",
   "winPct": 42.9,
   "diff": -38,
   "ppg": 17.4,
   "leagueRank": 36,
   "rating": 1.5,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Xavier Yandoli",
   "gender": "Male",
   "team": "Eagles Erne Empire ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 449,
   "totalPointsAgainst": 442,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 6,
   "playerId": "51dd0df2-d833-4037-a26d-5da2eb3d570e",
   "winPct": 41.7,
   "diff": 7,
   "ppg": 18.7,
   "leagueRank": 31,
   "rating": 0.2,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Zach Hollmann",
   "gender": "Male",
   "team": "Paddle Taps",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 23,
   "losses": 33,
   "pointsWon": 1020,
   "totalPointsAgainst": 1068,
   "mixedWins": 11,
   "mixedLosses": 16,
   "genderWins": 12,
   "genderLosses": 17,
   "clutchWins": 8,
   "clutchLosses": 7,
   "playerId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "winPct": 41.1,
   "diff": -48,
   "ppg": 18.2,
   "leagueRank": 33,
   "rating": 1.7,
   "ratingGames": 56,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Angelique Gallucci",
   "gender": "Female",
   "team": "Paddle Taps",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 11,
   "losses": 16,
   "pointsWon": 492,
   "totalPointsAgainst": 509,
   "mixedWins": 4,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "bdf67f01-a772-481e-976a-0c44364c6f34",
   "winPct": 40.7,
   "diff": -17,
   "ppg": 18.2,
   "leagueRank": 34,
   "rating": 0,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Amanda Mcalister",
   "gender": "Female",
   "team": "The Robbinsvilians",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 11,
   "losses": 17,
   "pointsWon": 475,
   "totalPointsAgainst": 531,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 3,
   "playerId": "9aa220fa-3161-4faa-ac70-8dfaf3ac3192",
   "winPct": 39.3,
   "diff": -56,
   "ppg": 17,
   "leagueRank": 46,
   "rating": -3.6,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.1
  },
  {
   "name": "Alyssa Boyle",
   "gender": "Female",
   "team": "Baggers, Sand",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 140,
   "totalPointsAgainst": 134,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "winPct": 37.5,
   "diff": 6,
   "ppg": 17.5,
   "leagueRank": 61,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Nick Babinsky",
   "gender": "Male",
   "team": "Baggers, Sand",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 10,
   "losses": 17,
   "pointsWon": 481,
   "totalPointsAgainst": 521,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 7,
   "playerId": "9790dabb-8be3-48df-9fc4-eecb920ec98c",
   "winPct": 37,
   "diff": -40,
   "ppg": 17.8,
   "leagueRank": 45,
   "rating": -1.2,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Gabby Gonzalez",
   "gender": "Female",
   "team": "Eagles Erne Empire ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 14,
   "losses": 24,
   "pointsWon": 655,
   "totalPointsAgainst": 715,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 5,
   "playerId": "957ef2de-1e80-4ec9-b5cd-96d11bef6383",
   "winPct": 36.8,
   "diff": -60,
   "ppg": 17.2,
   "leagueRank": 41,
   "rating": -1.3,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Gage Cvijic",
   "gender": "Male",
   "team": "Paddle Taps",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 18,
   "losses": 31,
   "pointsWon": 845,
   "totalPointsAgainst": 945,
   "mixedWins": 10,
   "mixedLosses": 16,
   "genderWins": 8,
   "genderLosses": 15,
   "clutchWins": 7,
   "clutchLosses": 8,
   "playerId": "4572bf15-1066-42b7-ae74-94d6175b1b96",
   "winPct": 36.7,
   "diff": -100,
   "ppg": 17.2,
   "leagueRank": 40,
   "rating": 0.1,
   "ratingGames": 49,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Craig Frame",
   "gender": "Male",
   "team": "Eagles Erne Empire ",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 17,
   "losses": 32,
   "pointsWon": 873,
   "totalPointsAgainst": 961,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 8,
   "genderLosses": 17,
   "clutchWins": 10,
   "clutchLosses": 12,
   "playerId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "winPct": 34.7,
   "diff": -88,
   "ppg": 17.8,
   "leagueRank": 42,
   "rating": -0.7,
   "ratingGames": 49,
   "confidence": 87,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Jitendra Arora",
   "gender": "Male",
   "team": "The Robbinsvilians",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 9,
   "losses": 18,
   "pointsWon": 476,
   "totalPointsAgainst": 521,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 4,
   "playerId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0",
   "winPct": 33.3,
   "diff": -45,
   "ppg": 17.6,
   "leagueRank": 43,
   "rating": -1.4,
   "ratingGames": 27,
   "confidence": 81,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0
  },
  {
   "name": "Mira Sigal-Feldman",
   "gender": "Female",
   "team": "Paddle Taps",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 10,
   "losses": 20,
   "pointsWon": 512,
   "totalPointsAgainst": 582,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 6,
   "playerId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "winPct": 33.3,
   "diff": -70,
   "ppg": 17.1,
   "leagueRank": 48,
   "rating": -3.4,
   "ratingGames": 30,
   "confidence": 82,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Alicia Campbell",
   "gender": "Female",
   "team": "Paddle Taps",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 11,
   "losses": 25,
   "pointsWon": 570,
   "totalPointsAgainst": 707,
   "mixedWins": 6,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 4,
   "playerId": "4052933b-54a7-407d-97df-697a796cf798",
   "winPct": 30.6,
   "diff": -137,
   "ppg": 15.8,
   "leagueRank": 49,
   "rating": -1.4,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1
  },
  {
   "name": "Stephanie Ho",
   "gender": "Female",
   "team": "Paddle Taps",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 9,
   "losses": 23,
   "pointsWon": 529,
   "totalPointsAgainst": 634,
   "mixedWins": 4,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 5,
   "clutchLosses": 4,
   "playerId": "815aa4ab-dc28-4202-bd71-c0209705cf1a",
   "winPct": 28.1,
   "diff": -105,
   "ppg": 16.5,
   "leagueRank": 50,
   "rating": -2.3,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Nikhil Khasnis",
   "gender": "Male",
   "team": "Eagles Erne Empire ",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 308,
   "totalPointsAgainst": 353,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 5,
   "playerId": "6cabc42a-ee6e-4ac3-8e69-5c4792687888",
   "winPct": 27.8,
   "diff": -45,
   "ppg": 17.1,
   "leagueRank": 53,
   "rating": -1.8,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Michael Vollmer",
   "gender": "Male",
   "team": "Eagles Erne Empire ",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 293,
   "totalPointsAgainst": 361,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "winPct": 27.8,
   "diff": -68,
   "ppg": 16.3,
   "leagueRank": 56,
   "rating": -2.9,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Bennett Pereira",
   "gender": "Male",
   "team": "Baggers, Sand",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 6,
   "losses": 18,
   "pointsWon": 403,
   "totalPointsAgainst": 456,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 12,
   "clutchWins": 0,
   "clutchLosses": 4,
   "playerId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "winPct": 25,
   "diff": -53,
   "ppg": 16.8,
   "leagueRank": 51,
   "rating": -0.7,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Julie Randall",
   "gender": "Female",
   "team": "Eagles Erne Empire ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 8,
   "losses": 28,
   "pointsWon": 586,
   "totalPointsAgainst": 721,
   "mixedWins": 3,
   "mixedLosses": 15,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 4,
   "playerId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5",
   "winPct": 22.2,
   "diff": -135,
   "ppg": 16.3,
   "leagueRank": 52,
   "rating": -4.1,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0
  },
  {
   "name": "Lizz Dunn",
   "gender": "Female",
   "team": "Paddle Taps",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 8,
   "losses": 30,
   "pointsWon": 582,
   "totalPointsAgainst": 750,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 3,
   "genderLosses": 17,
   "clutchWins": 3,
   "clutchLosses": 4,
   "playerId": "26d1dea5-a222-41e0-b8eb-152de6a397fc",
   "winPct": 21.1,
   "diff": -168,
   "ppg": 15.3,
   "leagueRank": 55,
   "rating": -3.4,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0
  },
  {
   "name": "Jodie Bennett",
   "gender": "Female",
   "team": "Eagles Erne Empire ",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 6,
   "losses": 26,
   "pointsWon": 459,
   "totalPointsAgainst": 652,
   "mixedWins": 3,
   "mixedLosses": 13,
   "genderWins": 3,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "44a54409-964b-44ae-a670-c69f7edf9600",
   "winPct": 18.8,
   "diff": -193,
   "ppg": 14.3,
   "leagueRank": 60,
   "rating": -5,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Thomas Ridolfi",
   "gender": "Male",
   "team": "Baggers, Sand",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 4,
   "losses": 20,
   "pointsWon": 381,
   "totalPointsAgainst": 484,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 1,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "6ae44f81-744f-42af-9df7-7ff1f0a759e7",
   "winPct": 16.7,
   "diff": -103,
   "ppg": 15.9,
   "leagueRank": 58,
   "rating": -3.6,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Keith Glock",
   "gender": "Male",
   "team": "Paddle Taps",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 3,
   "losses": 16,
   "pointsWon": 315,
   "totalPointsAgainst": 391,
   "mixedWins": 0,
   "mixedLosses": 9,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "36031ffa-4c01-40b0-9fa1-2e164ca313f8",
   "winPct": 15.8,
   "diff": -76,
   "ppg": 16.6,
   "leagueRank": 59,
   "rating": -1.5,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Armando Lugo",
   "gender": "Male",
   "team": "The Robbinsvilians",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 1,
   "losses": 18,
   "pointsWon": 280,
   "totalPointsAgainst": 397,
   "mixedWins": 1,
   "mixedLosses": 9,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "b19e749a-26c5-4240-9f43-35559a12683f",
   "winPct": 5.3,
   "diff": -117,
   "ppg": 14.7,
   "leagueRank": 62,
   "rating": -7.1,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Sue Lyle",
   "gender": "Female",
   "team": "Paddle Taps",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 105,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "5b600631-57fc-476c-9bbb-6951d5ffd294",
   "winPct": 0,
   "diff": -63,
   "ppg": 13.1,
   "leagueRank": 63,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.5
  }
 ],
 "teams": [
  {
   "name": "Baggers, Sand",
   "w": 6,
   "l": 2,
   "pf": 5014,
   "pa": 4549,
   "gw": 158,
   "gl": 98,
   "diff": 465,
   "gameDiff": 60,
   "power": 1.1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     81,
     47
    ],
    "male": [
     28,
     36
    ],
    "female": [
     49,
     15
    ]
   }
  },
  {
   "name": "The Robbinsvilians",
   "w": 6,
   "l": 2,
   "pf": 4895,
   "pa": 4702,
   "gw": 143,
   "gl": 113,
   "diff": 193,
   "gameDiff": 30,
   "power": 0.6,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     67,
     61
    ],
    "male": [
     38,
     26
    ],
    "female": [
     38,
     26
    ]
   }
  },
  {
   "name": "Eagles Erne Empire ",
   "w": 3,
   "l": 5,
   "pf": 4686,
   "pa": 4929,
   "gw": 110,
   "gl": 146,
   "diff": -243,
   "gameDiff": -36,
   "power": -0.2,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     56,
     72
    ],
    "male": [
     31,
     33
    ],
    "female": [
     23,
     41
    ]
   }
  },
  {
   "name": "Paddle Taps",
   "w": 1,
   "l": 7,
   "pf": 4628,
   "pa": 5043,
   "gw": 101,
   "gl": 155,
   "diff": -415,
   "gameDiff": -54,
   "power": -0.5,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     52,
     76
    ],
    "male": [
     31,
     33
    ],
    "female": [
     18,
     46
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Xavier Yandoli",
   "b": "Gabby Gonzalez",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.7,
   "avgActual": 7,
   "avgExpected": 1.7,
   "aId": "51dd0df2-d833-4037-a26d-5da2eb3d570e",
   "bId": "957ef2de-1e80-4ec9-b5cd-96d11bef6383"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Varun Gurram",
   "team": "Baggers, Sand",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.7,
   "avgActual": 10.3,
   "avgExpected": 4.1,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Taylor Hartman",
   "b": "Gage Cvijic",
   "team": "Paddle Taps",
   "n": 12,
   "w": 7,
   "l": 5,
   "synergy": 2.4,
   "avgActual": 2,
   "avgExpected": -1.1,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "4572bf15-1066-42b7-ae74-94d6175b1b96"
  },
  {
   "a": "Alicia Campbell",
   "b": "Angelique Gallucci",
   "team": "Paddle Taps",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 3.6,
   "avgExpected": -0.5,
   "aId": "4052933b-54a7-407d-97df-697a796cf798",
   "bId": "bdf67f01-a772-481e-976a-0c44364c6f34"
  },
  {
   "a": "Evan Woerner",
   "b": "Joey Angelson",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 6.5,
   "avgExpected": 2,
   "aId": "4e12c5c9-dcc8-48c8-96da-c0070a03583b",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Varun Gurram",
   "b": "Tessa Arendt",
   "team": "Baggers, Sand",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 10.3,
   "avgExpected": 5,
   "aId": "44864b51-f901-4470-a6bd-891495ffd132",
   "bId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc"
  },
  {
   "a": "Alicia Campbell",
   "b": "Zach Hollmann",
   "team": "Paddle Taps",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 2.2,
   "avgActual": 0.8,
   "avgExpected": -2.9,
   "aId": "4052933b-54a7-407d-97df-697a796cf798",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Angela Luo",
   "b": "Eva Danieli",
   "team": "The Robbinsvilians",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 2,
   "avgActual": 3.7,
   "avgExpected": 0.4,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Lauren Mammano",
   "b": "Gabby Gonzalez",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.8,
   "avgActual": 3,
   "avgExpected": -0.6,
   "aId": "8d896637-2c2a-4541-9155-257bf5a37055",
   "bId": "957ef2de-1e80-4ec9-b5cd-96d11bef6383"
  },
  {
   "a": "Stephany Venuto",
   "b": "Stephanie Ho",
   "team": "Paddle Taps",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.7,
   "avgActual": 0.6,
   "avgExpected": -2.5,
   "aId": "06ae7962-cab5-454b-8788-76ccc249930f",
   "bId": "815aa4ab-dc28-4202-bd71-c0209705cf1a"
  },
  {
   "a": "Bennett Pereira",
   "b": "Guadalupe Reyes",
   "team": "Baggers, Sand",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.7,
   "avgActual": 3.5,
   "avgExpected": 0.7,
   "aId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "bId": "88069b92-8946-4a56-a1be-c0bb2bc00221"
  },
  {
   "a": "Al Mancini",
   "b": "Guadalupe Reyes",
   "team": "Baggers, Sand",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 5.7,
   "avgExpected": 1.7,
   "aId": "51352d99-02ac-4299-abac-a688bfade22f",
   "bId": "88069b92-8946-4a56-a1be-c0bb2bc00221"
  },
  {
   "a": "Lance Brown",
   "b": "Deepak Sunku",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6,
   "avgExpected": 2.4,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Lizz Dunn",
   "b": "Stephanie Ho",
   "team": "Paddle Taps",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1.4,
   "avgActual": -2.7,
   "avgExpected": -5.5,
   "aId": "26d1dea5-a222-41e0-b8eb-152de6a397fc",
   "bId": "815aa4ab-dc28-4202-bd71-c0209705cf1a"
  },
  {
   "a": "Marc Pellicane",
   "b": "Craig Frame",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 1,
   "avgExpected": -1.9,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Dipen Bhatt",
   "team": "Baggers, Sand",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 6.4,
   "avgExpected": 4.1,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Deepak Sunku",
   "b": "Emily Babinsky",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5.7,
   "avgExpected": 2.8,
   "aId": "ce590106-6f19-43b7-8a91-4dc31d28eb31",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Marc Pellicane",
   "b": "Sree Harsha Konduru",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 6.3,
   "avgExpected": 3.9,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "a": "Joey Angelson",
   "b": "Abhishekh Mehra",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 6,
   "avgExpected": 3.2,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "6e92db16-8465-411e-bc3f-935badc74f47"
  },
  {
   "a": "Nikhil Khasnis",
   "b": "Gabby Gonzalez",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 4.3,
   "avgExpected": 1.8,
   "aId": "6cabc42a-ee6e-4ac3-8e69-5c4792687888",
   "bId": "957ef2de-1e80-4ec9-b5cd-96d11bef6383"
  },
  {
   "a": "Chris Damato",
   "b": "Margaret Robb",
   "team": "The Robbinsvilians",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 1.1,
   "avgActual": 2.5,
   "avgExpected": 1.1,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Stephany Venuto",
   "b": "Jorge Valencia King",
   "team": "Paddle Taps",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 0,
   "avgExpected": -2.6,
   "aId": "06ae7962-cab5-454b-8788-76ccc249930f",
   "bId": "41bb8b59-b2a3-4b27-9f26-66d45a2cddc8"
  },
  {
   "a": "Eva Danieli",
   "b": "Emily Babinsky",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 4,
   "avgExpected": 1.9,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Abhishekh Mehra",
   "b": "Jitendra Arora",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 0.8,
   "avgExpected": -1.4,
   "aId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Tom Laiso",
   "b": "Elliott Bauer",
   "team": "Eagles Erne Empire ",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 3.5,
   "avgExpected": 1.8,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "eea6a616-e242-4a3c-9a46-098432e0ab91"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Maeve Mcgowan",
   "team": "Baggers, Sand",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1,
   "avgActual": 7.5,
   "avgExpected": 5.8,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c"
  },
  {
   "a": "Jodie Bennett",
   "b": "Perri Goldstein",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": -1.2,
   "avgExpected": -3.3,
   "aId": "44a54409-964b-44ae-a670-c69f7edf9600",
   "bId": "c314fe29-19de-4c08-956b-ae10493edcc8"
  },
  {
   "a": "Lizz Dunn",
   "b": "Jorge Valencia King",
   "team": "Paddle Taps",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.5,
   "avgExpected": -0.5,
   "aId": "26d1dea5-a222-41e0-b8eb-152de6a397fc",
   "bId": "41bb8b59-b2a3-4b27-9f26-66d45a2cddc8"
  },
  {
   "a": "Rakshit Maddur Gopinath",
   "b": "Tessa Arendt",
   "team": "Baggers, Sand",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 5,
   "avgExpected": 3.1,
   "aId": "1448a485-6172-48af-96e0-f4876e9c5268",
   "bId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc"
  },
  {
   "a": "Julie Randall",
   "b": "Elliott Bauer",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0.3,
   "avgExpected": -1.5,
   "aId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5",
   "bId": "eea6a616-e242-4a3c-9a46-098432e0ab91"
  },
  {
   "a": "Stephany Venuto",
   "b": "Rajeeth Nadig",
   "team": "Paddle Taps",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 4,
   "avgExpected": 2.3,
   "aId": "06ae7962-cab5-454b-8788-76ccc249930f",
   "bId": "20c15f19-5b27-4c9f-bc75-da3d516a015b"
  },
  {
   "a": "Lizz Dunn",
   "b": "Tony Scharko",
   "team": "Paddle Taps",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 1.3,
   "avgExpected": -0.5,
   "aId": "26d1dea5-a222-41e0-b8eb-152de6a397fc",
   "bId": "a67d258e-70c9-4c03-974a-7cd0620b15ff"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Tony Scharko",
   "team": "Paddle Taps",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 1,
   "avgExpected": -0.5,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "a67d258e-70c9-4c03-974a-7cd0620b15ff"
  },
  {
   "a": "Christopher Venuto",
   "b": "Mira Sigal-Feldman",
   "team": "Paddle Taps",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -0.5,
   "avgExpected": -2,
   "aId": "19d10737-b8cb-4106-9b6d-1c9aced87b19",
   "bId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc"
  },
  {
   "a": "Charlotte Healey",
   "b": "Perri Goldstein",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 1,
   "avgExpected": -0.8,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "c314fe29-19de-4c08-956b-ae10493edcc8"
  },
  {
   "a": "Al Mancini",
   "b": "Jesse Martinez",
   "team": "Baggers, Sand",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 0,
   "avgExpected": -1.9,
   "aId": "51352d99-02ac-4299-abac-a688bfade22f",
   "bId": "9d3d247f-e4a6-4cdb-89f8-ddfdc2264aa8"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Jesse Martinez",
   "team": "Baggers, Sand",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2.1,
   "avgExpected": 1,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "9d3d247f-e4a6-4cdb-89f8-ddfdc2264aa8"
  },
  {
   "a": "Evan Woerner",
   "b": "Deepak Sunku",
   "team": "The Robbinsvilians",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 5,
   "avgExpected": 3.6,
   "aId": "4e12c5c9-dcc8-48c8-96da-c0070a03583b",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Jesse Martinez",
   "b": "Dipen Bhatt",
   "team": "Baggers, Sand",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 1.3,
   "avgExpected": 0,
   "aId": "9d3d247f-e4a6-4cdb-89f8-ddfdc2264aa8",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Tom Laiso",
   "b": "Lissa Eagles",
   "team": "Eagles Erne Empire ",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Craig Frame",
   "b": "Lissa Eagles",
   "team": "Eagles Erne Empire ",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 0.4,
   "avgExpected": -0.9,
   "aId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Abhishekh Mehra",
   "b": "Deepak Sunku",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 5,
   "avgExpected": 3.1,
   "aId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Keith Glock",
   "b": "Tony Scharko",
   "team": "Paddle Taps",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -0.8,
   "avgExpected": -2,
   "aId": "36031ffa-4c01-40b0-9fa1-2e164ca313f8",
   "bId": "a67d258e-70c9-4c03-974a-7cd0620b15ff"
  },
  {
   "a": "Margaret Robb",
   "b": "Deepak Sunku",
   "team": "The Robbinsvilians",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 2.9,
   "avgExpected": 2,
   "aId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Chris Damato",
   "b": "Evan Woerner",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.5,
   "avgExpected": 3.2,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "4e12c5c9-dcc8-48c8-96da-c0070a03583b"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Xavier Yandoli",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4,
   "avgExpected": 2.6,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "51dd0df2-d833-4037-a26d-5da2eb3d570e"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Tessa Arendt",
   "team": "Baggers, Sand",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.8,
   "avgExpected": 4.9,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc"
  },
  {
   "a": "Kelsey Miller",
   "b": "Maeve Mcgowan",
   "team": "Baggers, Sand",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4.8,
   "avgExpected": 3.7,
   "aId": "218e6e5d-e016-4509-9642-c40f2304d76b",
   "bId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c"
  },
  {
   "a": "Varun Gurram",
   "b": "Jesse Martinez",
   "team": "Baggers, Sand",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.7,
   "avgExpected": 1.6,
   "aId": "44864b51-f901-4470-a6bd-891495ffd132",
   "bId": "9d3d247f-e4a6-4cdb-89f8-ddfdc2264aa8"
  },
  {
   "a": "Amanda Mcalister",
   "b": "Margaret Robb",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3,
   "avgExpected": 1.7,
   "aId": "9aa220fa-3161-4faa-ac70-8dfaf3ac3192",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Christopher Venuto",
   "b": "Angelique Gallucci",
   "team": "Paddle Taps",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3,
   "avgExpected": 1.6,
   "aId": "19d10737-b8cb-4106-9b6d-1c9aced87b19",
   "bId": "bdf67f01-a772-481e-976a-0c44364c6f34"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Stephanie Ho",
   "team": "Paddle Taps",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0.8,
   "avgExpected": -0.4,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "815aa4ab-dc28-4202-bd71-c0209705cf1a"
  },
  {
   "a": "Lance Brown",
   "b": "Abhishekh Mehra",
   "team": "The Robbinsvilians",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0,
   "avgExpected": -1,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "6e92db16-8465-411e-bc3f-935badc74f47"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Elliott Bauer",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.8,
   "avgExpected": 3.5,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "eea6a616-e242-4a3c-9a46-098432e0ab91"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Jorge Valencia King",
   "team": "Paddle Taps",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1,
   "avgExpected": -0.4,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "41bb8b59-b2a3-4b27-9f26-66d45a2cddc8"
  },
  {
   "a": "Kelsey Miller",
   "b": "Varun Gurram",
   "team": "Baggers, Sand",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6.5,
   "avgExpected": 5.4,
   "aId": "218e6e5d-e016-4509-9642-c40f2304d76b",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Rakshit Maddur Gopinath",
   "b": "Al Mancini",
   "team": "Baggers, Sand",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 1.9,
   "aId": "1448a485-6172-48af-96e0-f4876e9c5268",
   "bId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "a": "Gage Cvijic",
   "b": "Zach Hollmann",
   "team": "Paddle Taps",
   "n": 14,
   "w": 6,
   "l": 8,
   "synergy": 0.4,
   "avgActual": -0.6,
   "avgExpected": -1,
   "aId": "4572bf15-1066-42b7-ae74-94d6175b1b96",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Jesse Martinez",
   "team": "Baggers, Sand",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 5.3,
   "avgExpected": 4.7,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "9d3d247f-e4a6-4cdb-89f8-ddfdc2264aa8"
  },
  {
   "a": "Thomas Ridolfi",
   "b": "Guadalupe Reyes",
   "team": "Baggers, Sand",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -2,
   "avgExpected": -2.8,
   "aId": "6ae44f81-744f-42af-9df7-7ff1f0a759e7",
   "bId": "88069b92-8946-4a56-a1be-c0bb2bc00221"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Jodie Bennett",
   "team": "Eagles Erne Empire ",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -2.6,
   "avgExpected": -3.4,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "44a54409-964b-44ae-a670-c69f7edf9600"
  },
  {
   "a": "Tom Laiso",
   "b": "Marc Pellicane",
   "team": "Eagles Erne Empire ",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1.6,
   "avgExpected": 0.8,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81"
  },
  {
   "a": "Jitendra Arora",
   "b": "Armando Lugo",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -5,
   "avgExpected": -6,
   "aId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0",
   "bId": "b19e749a-26c5-4240-9f43-35559a12683f"
  },
  {
   "a": "Lauren Mammano",
   "b": "Perri Goldstein",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.7,
   "avgExpected": 1.7,
   "aId": "8d896637-2c2a-4541-9155-257bf5a37055",
   "bId": "c314fe29-19de-4c08-956b-ae10493edcc8"
  },
  {
   "a": "Nikhil Khasnis",
   "b": "Julie Randall",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -4.5,
   "avgExpected": -5,
   "aId": "6cabc42a-ee6e-4ac3-8e69-5c4792687888",
   "bId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5"
  },
  {
   "a": "Michael Vollmer",
   "b": "Sree Harsha Konduru",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0.3,
   "avgExpected": -0.4,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "a": "Angela Luo",
   "b": "Jitendra Arora",
   "team": "The Robbinsvilians",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 2.2,
   "avgExpected": 1.6,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Jorge Valencia King",
   "b": "Tony Scharko",
   "team": "Paddle Taps",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5.2,
   "avgExpected": 4.7,
   "aId": "41bb8b59-b2a3-4b27-9f26-66d45a2cddc8",
   "bId": "a67d258e-70c9-4c03-974a-7cd0620b15ff"
  },
  {
   "a": "Chris Damato",
   "b": "Joey Angelson",
   "team": "The Robbinsvilians",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.2,
   "avgExpected": -0.5,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Joey Angelson",
   "b": "Margaret Robb",
   "team": "The Robbinsvilians",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 0.2,
   "avgActual": 0.9,
   "avgExpected": 0.6,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Abhishekh Mehra",
   "b": "Eva Danieli",
   "team": "The Robbinsvilians",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 2.7,
   "avgExpected": 2.4,
   "aId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Lauren Mammano",
   "b": "Lissa Eagles",
   "team": "Eagles Erne Empire ",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 0.2,
   "avgActual": 1.6,
   "avgExpected": 1.3,
   "aId": "8d896637-2c2a-4541-9155-257bf5a37055",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Jodie Bennett",
   "b": "Gabby Gonzalez",
   "team": "Eagles Erne Empire ",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -8.8,
   "avgExpected": -9.2,
   "aId": "44a54409-964b-44ae-a670-c69f7edf9600",
   "bId": "957ef2de-1e80-4ec9-b5cd-96d11bef6383"
  },
  {
   "a": "Michael Vollmer",
   "b": "Nikhil Khasnis",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.2,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "6cabc42a-ee6e-4ac3-8e69-5c4792687888"
  },
  {
   "a": "Joey Angelson",
   "b": "Amanda Mcalister",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.7,
   "avgExpected": -2.1,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "9aa220fa-3161-4faa-ac70-8dfaf3ac3192"
  },
  {
   "a": "Chris Damato",
   "b": "Deepak Sunku",
   "team": "The Robbinsvilians",
   "n": 11,
   "w": 10,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4.1,
   "avgExpected": 4,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Al Mancini",
   "b": "Dipen Bhatt",
   "team": "Baggers, Sand",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.5,
   "avgExpected": 0.3,
   "aId": "51352d99-02ac-4299-abac-a688bfade22f",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Jodie Bennett",
   "b": "Lauren Mammano",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -4.2,
   "avgExpected": -4.4,
   "aId": "44a54409-964b-44ae-a670-c69f7edf9600",
   "bId": "8d896637-2c2a-4541-9155-257bf5a37055"
  },
  {
   "a": "Margaret Robb",
   "b": "Emily Babinsky",
   "team": "The Robbinsvilians",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.5,
   "avgExpected": 2.4,
   "aId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Nick Babinsky",
   "b": "Dipen Bhatt",
   "team": "Baggers, Sand",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.3,
   "avgExpected": -1.5,
   "aId": "9790dabb-8be3-48df-9fc4-eecb920ec98c",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Tom Laiso",
   "b": "Craig Frame",
   "team": "Eagles Erne Empire ",
   "n": 10,
   "w": 2,
   "l": 8,
   "synergy": 0,
   "avgActual": -1.7,
   "avgExpected": -1.7,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc"
  },
  {
   "a": "Angela Luo",
   "b": "Margaret Robb",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -3,
   "avgExpected": -3,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Tessa Arendt",
   "team": "Baggers, Sand",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0,
   "avgActual": 5.7,
   "avgExpected": 5.7,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc"
  },
  {
   "a": "Taylor Hartman",
   "b": "Angelique Gallucci",
   "team": "Paddle Taps",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -0.5,
   "avgExpected": -0.5,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "bdf67f01-a772-481e-976a-0c44364c6f34"
  },
  {
   "a": "Tessa Arendt",
   "b": "Guadalupe Reyes",
   "team": "Baggers, Sand",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0,
   "avgActual": 5.6,
   "avgExpected": 5.6,
   "aId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc",
   "bId": "88069b92-8946-4a56-a1be-c0bb2bc00221"
  },
  {
   "a": "Lizz Dunn",
   "b": "Gage Cvijic",
   "team": "Paddle Taps",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -6.5,
   "avgExpected": -6.4,
   "aId": "26d1dea5-a222-41e0-b8eb-152de6a397fc",
   "bId": "4572bf15-1066-42b7-ae74-94d6175b1b96"
  },
  {
   "a": "Christopher Venuto",
   "b": "Tony Scharko",
   "team": "Paddle Taps",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2,
   "avgExpected": 2.1,
   "aId": "19d10737-b8cb-4106-9b6d-1c9aced87b19",
   "bId": "a67d258e-70c9-4c03-974a-7cd0620b15ff"
  },
  {
   "a": "Marc Pellicane",
   "b": "Perri Goldstein",
   "team": "Eagles Erne Empire ",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.4,
   "avgExpected": 1.6,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "c314fe29-19de-4c08-956b-ae10493edcc8"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Craig Frame",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.8,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc"
  },
  {
   "a": "Christopher Venuto",
   "b": "Gage Cvijic",
   "team": "Paddle Taps",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.7,
   "aId": "19d10737-b8cb-4106-9b6d-1c9aced87b19",
   "bId": "4572bf15-1066-42b7-ae74-94d6175b1b96"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Nick Babinsky",
   "team": "Baggers, Sand",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -1.2,
   "avgExpected": -1.1,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "9790dabb-8be3-48df-9fc4-eecb920ec98c"
  },
  {
   "a": "Evan Woerner",
   "b": "Emily Babinsky",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2.8,
   "avgExpected": 3,
   "aId": "4e12c5c9-dcc8-48c8-96da-c0070a03583b",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Craig Frame",
   "b": "Elliott Bauer",
   "team": "Eagles Erne Empire ",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.9,
   "aId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "bId": "eea6a616-e242-4a3c-9a46-098432e0ab91"
  },
  {
   "a": "Lance Brown",
   "b": "Amanda Mcalister",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -3.3,
   "avgExpected": -3.2,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "9aa220fa-3161-4faa-ac70-8dfaf3ac3192"
  },
  {
   "a": "Taylor Hartman",
   "b": "Zach Hollmann",
   "team": "Paddle Taps",
   "n": 14,
   "w": 7,
   "l": 7,
   "synergy": -0.2,
   "avgActual": 0.1,
   "avgExpected": 0.4,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Michael Vollmer",
   "b": "Jodie Bennett",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -7.7,
   "avgExpected": -7.2,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "44a54409-964b-44ae-a670-c69f7edf9600"
  },
  {
   "a": "Eva Danieli",
   "b": "Jitendra Arora",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -3,
   "avgExpected": -2.5,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Perri Goldstein",
   "b": "Elliott Bauer",
   "team": "Eagles Erne Empire ",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 2.6,
   "avgExpected": 3.2,
   "aId": "c314fe29-19de-4c08-956b-ae10493edcc8",
   "bId": "eea6a616-e242-4a3c-9a46-098432e0ab91"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Tony Scharko",
   "team": "Paddle Taps",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -1.9,
   "avgExpected": -1.4,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "a67d258e-70c9-4c03-974a-7cd0620b15ff"
  },
  {
   "a": "Abhishekh Mehra",
   "b": "Armando Lugo",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5,
   "avgExpected": -4.2,
   "aId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "bId": "b19e749a-26c5-4240-9f43-35559a12683f"
  },
  {
   "a": "Craig Frame",
   "b": "Charlotte Healey",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.7,
   "avgExpected": -0.9,
   "aId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Tessa Arendt",
   "b": "Dipen Bhatt",
   "team": "Baggers, Sand",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 4,
   "avgExpected": 5,
   "aId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Lissa Eagles",
   "b": "Elliott Bauer",
   "team": "Eagles Erne Empire ",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 2.3,
   "avgExpected": 3.1,
   "aId": "9ec39678-a120-45de-b8a5-897b8cf900cd",
   "bId": "eea6a616-e242-4a3c-9a46-098432e0ab91"
  },
  {
   "a": "Christopher Venuto",
   "b": "Zach Hollmann",
   "team": "Paddle Taps",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -0.2,
   "avgExpected": 0.5,
   "aId": "19d10737-b8cb-4106-9b6d-1c9aced87b19",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Thomas Ridolfi",
   "b": "Tessa Arendt",
   "team": "Baggers, Sand",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -0.5,
   "aId": "6ae44f81-744f-42af-9df7-7ff1f0a759e7",
   "bId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc"
  },
  {
   "a": "Tessa Arendt",
   "b": "Jesse Martinez",
   "team": "Baggers, Sand",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 2,
   "avgExpected": 2.7,
   "aId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc",
   "bId": "9d3d247f-e4a6-4cdb-89f8-ddfdc2264aa8"
  },
  {
   "a": "Marc Pellicane",
   "b": "Gabby Gonzalez",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": 0.3,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "957ef2de-1e80-4ec9-b5cd-96d11bef6383"
  },
  {
   "a": "Jorge Valencia King",
   "b": "Zach Hollmann",
   "team": "Paddle Taps",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -1.6,
   "avgExpected": -0.7,
   "aId": "41bb8b59-b2a3-4b27-9f26-66d45a2cddc8",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Eva Danieli",
   "b": "Amanda Mcalister",
   "team": "The Robbinsvilians",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": -0.1,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "9aa220fa-3161-4faa-ac70-8dfaf3ac3192"
  },
  {
   "a": "Julie Randall",
   "b": "Lissa Eagles",
   "team": "Eagles Erne Empire ",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -3.9,
   "avgExpected": -3.1,
   "aId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Evan Woerner",
   "b": "Lance Brown",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.3,
   "aId": "4e12c5c9-dcc8-48c8-96da-c0070a03583b",
   "bId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "a": "Tom Laiso",
   "b": "Lauren Mammano",
   "team": "Eagles Erne Empire ",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -2.6,
   "avgExpected": -1.4,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "8d896637-2c2a-4541-9155-257bf5a37055"
  },
  {
   "a": "Alicia Campbell",
   "b": "Gage Cvijic",
   "team": "Paddle Taps",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -4.5,
   "avgExpected": -3.5,
   "aId": "4052933b-54a7-407d-97df-697a796cf798",
   "bId": "4572bf15-1066-42b7-ae74-94d6175b1b96"
  },
  {
   "a": "Tom Laiso",
   "b": "Julie Randall",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -8.7,
   "avgExpected": -7.1,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5"
  },
  {
   "a": "Xavier Yandoli",
   "b": "Julie Randall",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -5.3,
   "avgExpected": -3.8,
   "aId": "51dd0df2-d833-4037-a26d-5da2eb3d570e",
   "bId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5"
  },
  {
   "a": "Stephany Venuto",
   "b": "Christopher Venuto",
   "team": "Paddle Taps",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -1.3,
   "avgExpected": -0.1,
   "aId": "06ae7962-cab5-454b-8788-76ccc249930f",
   "bId": "19d10737-b8cb-4106-9b6d-1c9aced87b19"
  },
  {
   "a": "Joey Angelson",
   "b": "Eva Danieli",
   "team": "The Robbinsvilians",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -1.9,
   "avgExpected": -0.7,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Angela Luo",
   "b": "Abhishekh Mehra",
   "team": "The Robbinsvilians",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 1.8,
   "avgExpected": 3.2,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "6e92db16-8465-411e-bc3f-935badc74f47"
  },
  {
   "a": "Bennett Pereira",
   "b": "Thomas Ridolfi",
   "team": "Baggers, Sand",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": -0.8,
   "avgActual": -7.1,
   "avgExpected": -5.9,
   "aId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "bId": "6ae44f81-744f-42af-9df7-7ff1f0a759e7"
  },
  {
   "a": "Steph Wachino",
   "b": "Tessa Arendt",
   "team": "Baggers, Sand",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 5.3,
   "avgExpected": 7.3,
   "aId": "63870355-c8af-48c8-8472-f6cc82db5508",
   "bId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc"
  },
  {
   "a": "Lance Brown",
   "b": "Eva Danieli",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.5,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Julie Randall",
   "b": "Lauren Mammano",
   "team": "Eagles Erne Empire ",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -6.2,
   "avgExpected": -4.7,
   "aId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5",
   "bId": "8d896637-2c2a-4541-9155-257bf5a37055"
  },
  {
   "a": "Evan Woerner",
   "b": "Abhishekh Mehra",
   "team": "The Robbinsvilians",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 1.2,
   "avgExpected": 2.9,
   "aId": "4e12c5c9-dcc8-48c8-96da-c0070a03583b",
   "bId": "6e92db16-8465-411e-bc3f-935badc74f47"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Dipen Bhatt",
   "team": "Baggers, Sand",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -1.3,
   "avgExpected": 0.1,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Gabby Gonzalez",
   "b": "Perri Goldstein",
   "team": "Eagles Erne Empire ",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -1,
   "avgActual": -2.1,
   "avgExpected": -0.7,
   "aId": "957ef2de-1e80-4ec9-b5cd-96d11bef6383",
   "bId": "c314fe29-19de-4c08-956b-ae10493edcc8"
  },
  {
   "a": "Lizz Dunn",
   "b": "Taylor Hartman",
   "team": "Paddle Taps",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1,
   "avgActual": -7,
   "avgExpected": -5.1,
   "aId": "26d1dea5-a222-41e0-b8eb-152de6a397fc",
   "bId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "a": "Taylor Hartman",
   "b": "Alicia Campbell",
   "team": "Paddle Taps",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1,
   "avgActual": -5,
   "avgExpected": -3.3,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "4052933b-54a7-407d-97df-697a796cf798"
  },
  {
   "a": "Jodie Bennett",
   "b": "Xavier Yandoli",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -5.3,
   "avgExpected": -3,
   "aId": "44a54409-964b-44ae-a670-c69f7edf9600",
   "bId": "51dd0df2-d833-4037-a26d-5da2eb3d570e"
  },
  {
   "a": "Stephanie Ho",
   "b": "Tony Scharko",
   "team": "Paddle Taps",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -3,
   "avgExpected": -1.2,
   "aId": "815aa4ab-dc28-4202-bd71-c0209705cf1a",
   "bId": "a67d258e-70c9-4c03-974a-7cd0620b15ff"
  },
  {
   "a": "Stephany Venuto",
   "b": "Mira Sigal-Feldman",
   "team": "Paddle Taps",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -5.2,
   "avgExpected": -2.9,
   "aId": "06ae7962-cab5-454b-8788-76ccc249930f",
   "bId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Al Mancini",
   "team": "Baggers, Sand",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -1.7,
   "avgExpected": 0.1,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "a": "Lizz Dunn",
   "b": "Alicia Campbell",
   "team": "Paddle Taps",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -8.7,
   "avgExpected": -6.5,
   "aId": "26d1dea5-a222-41e0-b8eb-152de6a397fc",
   "bId": "4052933b-54a7-407d-97df-697a796cf798"
  },
  {
   "a": "Michael Vollmer",
   "b": "Perri Goldstein",
   "team": "Eagles Erne Empire ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -4.7,
   "avgExpected": -2.1,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "c314fe29-19de-4c08-956b-ae10493edcc8"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Guadalupe Reyes",
   "team": "Baggers, Sand",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -0.4,
   "avgExpected": 1.4,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "88069b92-8946-4a56-a1be-c0bb2bc00221"
  },
  {
   "a": "Angela Luo",
   "b": "Emily Babinsky",
   "team": "The Robbinsvilians",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 5.3,
   "avgExpected": 8.1,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Stephany Venuto",
   "b": "Taylor Hartman",
   "team": "Paddle Taps",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -2.3,
   "avgExpected": -0.2,
   "aId": "06ae7962-cab5-454b-8788-76ccc249930f",
   "bId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "a": "Chris Damato",
   "b": "Emily Babinsky",
   "team": "The Robbinsvilians",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -0.1,
   "avgExpected": 1.8,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Zach Hollmann",
   "b": "Angelique Gallucci",
   "team": "Paddle Taps",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -5.7,
   "avgExpected": -2.6,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "bdf67f01-a772-481e-976a-0c44364c6f34"
  },
  {
   "a": "Varun Gurram",
   "b": "Guadalupe Reyes",
   "team": "Baggers, Sand",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.3,
   "avgActual": 1,
   "avgExpected": 3.2,
   "aId": "44864b51-f901-4470-a6bd-891495ffd132",
   "bId": "88069b92-8946-4a56-a1be-c0bb2bc00221"
  },
  {
   "a": "Craig Frame",
   "b": "Lauren Mammano",
   "team": "Eagles Erne Empire ",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -1.4,
   "avgActual": -4.6,
   "avgExpected": -2.5,
   "aId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "bId": "8d896637-2c2a-4541-9155-257bf5a37055"
  },
  {
   "a": "Rakshit Maddur Gopinath",
   "b": "Varun Gurram",
   "team": "Baggers, Sand",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 0.8,
   "avgExpected": 3.4,
   "aId": "1448a485-6172-48af-96e0-f4876e9c5268",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Abhishekh Mehra",
   "b": "Amanda Mcalister",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -5.5,
   "avgExpected": -2.2,
   "aId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "bId": "9aa220fa-3161-4faa-ac70-8dfaf3ac3192"
  },
  {
   "a": "Lance Brown",
   "b": "Margaret Robb",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -3.5,
   "avgExpected": 0,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Evan Woerner",
   "b": "Margaret Robb",
   "team": "The Robbinsvilians",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.9,
   "avgActual": -4,
   "avgExpected": -0.5,
   "aId": "4e12c5c9-dcc8-48c8-96da-c0070a03583b",
   "bId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Lizz Dunn",
   "team": "Paddle Taps",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -2,
   "avgActual": -7.8,
   "avgExpected": -4.6,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "26d1dea5-a222-41e0-b8eb-152de6a397fc"
  },
  {
   "a": "Nick Babinsky",
   "b": "Jesse Martinez",
   "team": "Baggers, Sand",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -2,
   "avgActual": -4.6,
   "avgExpected": -1,
   "aId": "9790dabb-8be3-48df-9fc4-eecb920ec98c",
   "bId": "9d3d247f-e4a6-4cdb-89f8-ddfdc2264aa8"
  },
  {
   "a": "Kelsey Miller",
   "b": "Guadalupe Reyes",
   "team": "Baggers, Sand",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.1,
   "avgActual": -3.7,
   "avgExpected": 1.2,
   "aId": "218e6e5d-e016-4509-9642-c40f2304d76b",
   "bId": "88069b92-8946-4a56-a1be-c0bb2bc00221"
  },
  {
   "a": "Keith Glock",
   "b": "Stephanie Ho",
   "team": "Paddle Taps",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.2,
   "avgActual": -7.5,
   "avgExpected": -3.1,
   "aId": "36031ffa-4c01-40b0-9fa1-2e164ca313f8",
   "bId": "815aa4ab-dc28-4202-bd71-c0209705cf1a"
  },
  {
   "a": "Joey Angelson",
   "b": "Deepak Sunku",
   "team": "The Robbinsvilians",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -2.2,
   "avgActual": -2.7,
   "avgExpected": 0.7,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Eva Danieli",
   "b": "Armando Lugo",
   "team": "The Robbinsvilians",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.5,
   "avgActual": -9,
   "avgExpected": -4,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "b19e749a-26c5-4240-9f43-35559a12683f"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Gabby Gonzalez",
   "team": "Eagles Erne Empire ",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -3.2,
   "avgActual": -4.7,
   "avgExpected": 0.7,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "957ef2de-1e80-4ec9-b5cd-96d11bef6383"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Paddle Taps",
   "away": "Eagles Erne Empire ",
   "time": "2026-07-02T19:30:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 642,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Lindsey Allumbaugh",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Gage Cvijic"
     ],
     "a": [
      "Charlotte Healey",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Christopher Venuto"
     ],
     "a": [
      "Perri Goldstein",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stephanie Ho",
      "Keith Glock"
     ],
     "a": [
      "Gabby Gonzalez",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Taylor Hartman",
      "Stephany Venuto"
     ],
     "a": [
      "Charlotte Healey",
      "Perri Goldstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Stephanie Ho"
     ],
     "a": [
      "Lindsey Allumbaugh",
      "Julie Randall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zach Hollmann",
      "Gage Cvijic"
     ],
     "a": [
      "Tom Laiso",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Keith Glock",
      "Tony Scharko"
     ],
     "a": [
      "Elliott Bauer",
      "Nikhil Khasnis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Zach Hollmann"
     ],
     "a": [
      "Charlotte Healey",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Taylor Hartman",
      "Gage Cvijic"
     ],
     "a": [
      "Lindsey Allumbaugh",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephany Venuto",
      "Christopher Venuto"
     ],
     "a": [
      "Julie Randall",
      "Nikhil Khasnis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Tony Scharko"
     ],
     "a": [
      "Gabby Gonzalez",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Perri Goldstein",
      "Gabby Gonzalez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stephany Venuto",
      "Stephanie Ho"
     ],
     "a": [
      "Lindsey Allumbaugh",
      "Julie Randall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Christopher Venuto"
     ],
     "a": [
      "Tom Laiso",
      "Elliott Bauer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "Keith Glock",
      "Tony Scharko"
     ],
     "a": [
      "Nikhil Khasnis",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stephany Venuto",
      "Christopher Venuto"
     ],
     "a": [
      "Julie Randall",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Gage Cvijic"
     ],
     "a": [
      "Charlotte Healey",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mira Sigal-Feldman",
      "Tony Scharko"
     ],
     "a": [
      "Perri Goldstein",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stephanie Ho",
      "Keith Glock"
     ],
     "a": [
      "Gabby Gonzalez",
      "Nikhil Khasnis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Lizz Dunn"
     ],
     "a": [
      "Charlotte Healey",
      "Lindsey Allumbaugh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mira Sigal-Feldman",
      "Stephanie Ho"
     ],
     "a": [
      "Perri Goldstein",
      "Gabby Gonzalez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zach Hollmann",
      "Christopher Venuto"
     ],
     "a": [
      "Tom Laiso",
      "Elliott Bauer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gage Cvijic",
      "Keith Glock"
     ],
     "a": [
      "Craig Frame",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Charlotte Healey",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lizz Dunn",
      "Keith Glock"
     ],
     "a": [
      "Perri Goldstein",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Stephany Venuto",
      "Gage Cvijic"
     ],
     "a": [
      "Lindsey Allumbaugh",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stephanie Ho",
      "Tony Scharko"
     ],
     "a": [
      "Julie Randall",
      "Nikhil Khasnis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Lizz Dunn"
     ],
     "a": [
      "Charlotte Healey",
      "Lindsey Allumbaugh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stephany Venuto",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Julie Randall",
      "Gabby Gonzalez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zach Hollmann",
      "Gage Cvijic"
     ],
     "a": [
      "Tom Laiso",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Christopher Venuto",
      "Tony Scharko"
     ],
     "a": [
      "Nikhil Khasnis",
      "Xavier Yandoli"
     ]
    }
   ],
   "subs": [
    "Lindsey Allumbaugh",
    "Charlotte Healey"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "The Robbinsvilians",
   "away": "Baggers, Sand",
   "time": "2026-07-02T19:30:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 602,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Chris Damato"
     ],
     "a": [
      "Kerrin Maurer",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joey Angelson",
      "Deepak Sunku"
     ],
     "a": [
      "Maeve Mcgowan",
      "Al Mancini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eva Danieli",
      "Evan Woerner"
     ],
     "a": [
      "Guadalupe Reyes",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Angela Luo",
      "Jim Pagano"
     ],
     "a": [
      "Kelsey Miller",
      "Bennett Pereira"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Margaret Robb",
      "Angela Luo"
     ],
     "a": [
      "Maeve Mcgowan",
      "Guadalupe Reyes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Eva Danieli"
     ],
     "a": [
      "Kerrin Maurer",
      "Tessa Arendt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Damato",
      "Deepak Sunku"
     ],
     "a": [
      "Jesse Martinez",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jim Pagano",
      "Abhishekh Mehra"
     ],
     "a": [
      "Dipen Bhatt",
      "Thomas Ridolfi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joey Angelson",
      "Chris Damato"
     ],
     "a": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Margaret Robb",
      "Deepak Sunku"
     ],
     "a": [
      "Kerrin Maurer",
      "Al Mancini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eva Danieli",
      "Evan Woerner"
     ],
     "a": [
      "Tessa Arendt",
      "Thomas Ridolfi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Angela Luo",
      "Abhishekh Mehra"
     ],
     "a": [
      "Kelsey Miller",
      "Bennett Pereira"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Joey Angelson"
     ],
     "a": [
      "Maeve Mcgowan",
      "Tessa Arendt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Angela Luo",
      "Eva Danieli"
     ],
     "a": [
      "Guadalupe Reyes",
      "Kelsey Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Deepak Sunku",
      "Evan Woerner"
     ],
     "a": [
      "Al Mancini",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jim Pagano",
      "Abhishekh Mehra"
     ],
     "a": [
      "Bennett Pereira",
      "Thomas Ridolfi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Chris Damato"
     ],
     "a": [
      "Kerrin Maurer",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Evan Woerner"
     ],
     "a": [
      "Tessa Arendt",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Angela Luo",
      "Abhishekh Mehra"
     ],
     "a": [
      "Guadalupe Reyes",
      "Bennett Pereira"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Jim Pagano"
     ],
     "a": [
      "Kelsey Miller",
      "Thomas Ridolfi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Joey Angelson"
     ],
     "a": [
      "Kerrin Maurer",
      "Maeve Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Angela Luo",
      "Eva Danieli"
     ],
     "a": [
      "Guadalupe Reyes",
      "Kelsey Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Damato",
      "Evan Woerner"
     ],
     "a": [
      "Al Mancini",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Deepak Sunku",
      "Jim Pagano"
     ],
     "a": [
      "Jesse Martinez",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Margaret Robb",
      "Chris Damato"
     ],
     "a": [
      "Maeve Mcgowan",
      "Al Mancini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Deepak Sunku"
     ],
     "a": [
      "Kerrin Maurer",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Angela Luo",
      "Jim Pagano"
     ],
     "a": [
      "Tessa Arendt",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eva Danieli",
      "Abhishekh Mehra"
     ],
     "a": [
      "Guadalupe Reyes",
      "Thomas Ridolfi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Angela Luo"
     ],
     "a": [
      "Kerrin Maurer",
      "Tessa Arendt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joey Angelson",
      "Eva Danieli"
     ],
     "a": [
      "Maeve Mcgowan",
      "Kelsey Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Damato",
      "Deepak Sunku"
     ],
     "a": [
      "Jesse Martinez",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Evan Woerner",
      "Abhishekh Mehra"
     ],
     "a": [
      "Bennett Pereira",
      "Thomas Ridolfi"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Eagles Erne Empire ",
   "away": "Baggers, Sand",
   "time": "2026-07-09T19:30:00",
   "complete": true,
   "homePoints": 544,
   "awayPoints": 645,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Tom Laiso"
     ],
     "a": [
      "Tessa Arendt",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lauren Mammano",
      "Craig Frame"
     ],
     "a": [
      "Kerrin Maurer",
      "Nick Babinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gabby Gonzalez",
      "Marc Pellicane"
     ],
     "a": [
      "Maeve Mcgowan",
      "Al Mancini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Kelsey Miller",
      "Varun Gurram"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Perri Goldstein"
     ],
     "a": [
      "Kerrin Maurer",
      "Maeve Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lauren Mammano",
      "Jodie Bennett"
     ],
     "a": [
      "Tessa Arendt",
      "Steph Wachino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tom Laiso",
      "Craig Frame"
     ],
     "a": [
      "Nick Babinsky",
      "Jesse Martinez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Michael Vollmer"
     ],
     "a": [
      "Al Mancini",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lauren Mammano",
      "Tom Laiso"
     ],
     "a": [
      "Kerrin Maurer",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lissa Eagles",
      "Craig Frame"
     ],
     "a": [
      "Tessa Arendt",
      "Nick Babinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Perri Goldstein",
      "Marc Pellicane"
     ],
     "a": [
      "Steph Wachino",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gabby Gonzalez",
      "Michael Vollmer"
     ],
     "a": [
      "Kelsey Miller",
      "Varun Gurram"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lauren Mammano",
      "Gabby Gonzalez"
     ],
     "a": [
      "Maeve Mcgowan",
      "Kelsey Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Jodie Bennett"
     ],
     "a": [
      "Tessa Arendt",
      "Steph Wachino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tom Laiso",
      "Marc Pellicane"
     ],
     "a": [
      "Nick Babinsky",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sree Harsha Konduru",
      "Michael Vollmer"
     ],
     "a": [
      "Rakshit Maddur Gopinath",
      "Varun Gurram"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Marc Pellicane"
     ],
     "a": [
      "Steph Wachino",
      "Al Mancini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lissa Eagles",
      "Craig Frame"
     ],
     "a": [
      "Kerrin Maurer",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Gabby Gonzalez",
      "Michael Vollmer"
     ],
     "a": [
      "Maeve Mcgowan",
      "Varun Gurram"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jodie Bennett",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Kelsey Miller",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Lauren Mammano"
     ],
     "a": [
      "Kerrin Maurer",
      "Tessa Arendt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gabby Gonzalez",
      "Jodie Bennett"
     ],
     "a": [
      "Maeve Mcgowan",
      "Kelsey Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tom Laiso",
      "Marc Pellicane"
     ],
     "a": [
      "Nick Babinsky",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Craig Frame",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Jesse Martinez",
      "Varun Gurram"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Tom Laiso"
     ],
     "a": [
      "Kerrin Maurer",
      "Nick Babinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lauren Mammano",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Maeve Mcgowan",
      "Al Mancini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Perri Goldstein",
      "Craig Frame"
     ],
     "a": [
      "Tessa Arendt",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Michael Vollmer"
     ],
     "a": [
      "Steph Wachino",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Lauren Mammano"
     ],
     "a": [
      "Kerrin Maurer",
      "Tessa Arendt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Gabby Gonzalez"
     ],
     "a": [
      "Steph Wachino",
      "Kelsey Miller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Tom Laiso",
      "Craig Frame"
     ],
     "a": [
      "Nick Babinsky",
      "Jesse Martinez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marc Pellicane",
      "Michael Vollmer"
     ],
     "a": [
      "Rakshit Maddur Gopinath",
      "Varun Gurram"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Paddle Taps",
   "away": "The Robbinsvilians",
   "time": "2026-07-09T19:30:00",
   "complete": true,
   "homePoints": 577,
   "awayPoints": 615,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Margaret Robb",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Angelique Gallucci",
      "Gage Cvijic"
     ],
     "a": [
      "Emily Babinsky",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Stephany Venuto",
      "Jorge Valencia King"
     ],
     "a": [
      "Angela Luo",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mira Sigal-Feldman",
      "Christopher Venuto"
     ],
     "a": [
      "Eva Danieli",
      "Armando Lugo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Lizz Dunn"
     ],
     "a": [
      "Emily Babinsky",
      "Angela Luo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Angelique Gallucci",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Margaret Robb",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Gage Cvijic"
     ],
     "a": [
      "Chris Damato",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christopher Venuto",
      "Rajeeth Nadig"
     ],
     "a": [
      "Jitendra Arora",
      "Jim Pagano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Angelique Gallucci",
      "Zach Hollmann"
     ],
     "a": [
      "Emily Babinsky",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Gage Cvijic"
     ],
     "a": [
      "Margaret Robb",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Jorge Valencia King"
     ],
     "a": [
      "Amanda Mcalister",
      "Jim Pagano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Stephany Venuto",
      "Rajeeth Nadig"
     ],
     "a": [
      "Eva Danieli",
      "Armando Lugo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Angelique Gallucci",
      "Stephany Venuto"
     ],
     "a": [
      "Angela Luo",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Margaret Robb",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zach Hollmann",
      "Jorge Valencia King"
     ],
     "a": [
      "Chris Damato",
      "Jitendra Arora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christopher Venuto",
      "Rajeeth Nadig"
     ],
     "a": [
      "Jim Pagano",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lizz Dunn",
      "Jorge Valencia King"
     ],
     "a": [
      "Amanda Mcalister",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Gage Cvijic"
     ],
     "a": [
      "Emily Babinsky",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Stephany Venuto",
      "Rajeeth Nadig"
     ],
     "a": [
      "Angela Luo",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Christopher Venuto"
     ],
     "a": [
      "Eva Danieli",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Taylor Hartman",
      "Angelique Gallucci"
     ],
     "a": [
      "Emily Babinsky",
      "Margaret Robb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Stephany Venuto",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Angela Luo",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Jorge Valencia King"
     ],
     "a": [
      "Chris Damato",
      "Jitendra Arora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gage Cvijic",
      "Christopher Venuto"
     ],
     "a": [
      "Deepak Sunku",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Emily Babinsky",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Angelique Gallucci",
      "Christopher Venuto"
     ],
     "a": [
      "Angela Luo",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Gage Cvijic"
     ],
     "a": [
      "Margaret Robb",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mira Sigal-Feldman",
      "Rajeeth Nadig"
     ],
     "a": [
      "Amanda Mcalister",
      "Armando Lugo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Angelique Gallucci"
     ],
     "a": [
      "Emily Babinsky",
      "Margaret Robb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lizz Dunn",
      "Stephany Venuto"
     ],
     "a": [
      "Amanda Mcalister",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Gage Cvijic"
     ],
     "a": [
      "Chris Damato",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jorge Valencia King",
      "Rajeeth Nadig"
     ],
     "a": [
      "Jitendra Arora",
      "Armando Lugo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Baggers, Sand",
   "away": "Paddle Taps",
   "time": "2026-07-16T19:30:00",
   "complete": true,
   "homePoints": 617,
   "awayPoints": 570,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ],
     "a": [
      "Alicia Campbell",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tessa Arendt",
      "Nick Babinsky"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Guadalupe Reyes",
      "Varun Gurram"
     ],
     "a": [
      "Stephany Venuto",
      "Jorge Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Steph Wachino",
      "Thomas Ridolfi"
     ],
     "a": [
      "Stephanie Ho",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Maeve Mcgowan",
      "Kelsey Miller"
     ],
     "a": [
      "Taylor Hartman",
      "Stephany Venuto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tessa Arendt",
      "Steph Wachino"
     ],
     "a": [
      "Alicia Campbell",
      "Lizz Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jesse Martinez",
      "Nick Babinsky"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Thomas Ridolfi",
      "Bennett Pereira"
     ],
     "a": [
      "Jorge Valencia King",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tessa Arendt",
      "Jesse Martinez"
     ],
     "a": [
      "Taylor Hartman",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Maeve Mcgowan",
      "Nick Babinsky"
     ],
     "a": [
      "Alicia Campbell",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelsey Miller",
      "Varun Gurram"
     ],
     "a": [
      "Lizz Dunn",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Guadalupe Reyes",
      "Bennett Pereira"
     ],
     "a": [
      "Stephanie Ho",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tessa Arendt",
      "Guadalupe Reyes"
     ],
     "a": [
      "Stephany Venuto",
      "Stephanie Ho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelsey Miller",
      "Steph Wachino"
     ],
     "a": [
      "Alicia Campbell",
      "Lizz Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jesse Martinez",
      "Varun Gurram"
     ],
     "a": [
      "Zach Hollmann",
      "Jorge Valencia King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Thomas Ridolfi",
      "Bennett Pereira"
     ],
     "a": [
      "Tony Scharko",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelsey Miller",
      "Varun Gurram"
     ],
     "a": [
      "Lizz Dunn",
      "Jorge Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Nick Babinsky"
     ],
     "a": [
      "Taylor Hartman",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Guadalupe Reyes",
      "Bennett Pereira"
     ],
     "a": [
      "Stephany Venuto",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steph Wachino",
      "Thomas Ridolfi"
     ],
     "a": [
      "Stephanie Ho",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Maeve Mcgowan",
      "Tessa Arendt"
     ],
     "a": [
      "Taylor Hartman",
      "Alicia Campbell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Guadalupe Reyes",
      "Steph Wachino"
     ],
     "a": [
      "Stephany Venuto",
      "Stephanie Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jesse Martinez",
      "Varun Gurram"
     ],
     "a": [
      "Zach Hollmann",
      "Jorge Valencia King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nick Babinsky",
      "Thomas Ridolfi"
     ],
     "a": [
      "Gage Cvijic",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tessa Arendt",
      "Thomas Ridolfi"
     ],
     "a": [
      "Stephany Venuto",
      "Jorge Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelsey Miller",
      "Nick Babinsky"
     ],
     "a": [
      "Alicia Campbell",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Steph Wachino",
      "Bennett Pereira"
     ],
     "a": [
      "Lizz Dunn",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maeve Mcgowan",
      "Tessa Arendt"
     ],
     "a": [
      "Taylor Hartman",
      "Alicia Campbell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelsey Miller",
      "Guadalupe Reyes"
     ],
     "a": [
      "Lizz Dunn",
      "Stephanie Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jesse Martinez",
      "Nick Babinsky"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Bennett Pereira"
     ],
     "a": [
      "Tony Scharko",
      "Rajeeth Nadig"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "The Robbinsvilians",
   "away": "Eagles Erne Empire ",
   "time": "2026-07-16T19:30:00",
   "complete": true,
   "homePoints": 632,
   "awayPoints": 560,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Chris Damato"
     ],
     "a": [
      "Lissa Eagles",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Margaret Robb",
      "Deepak Sunku"
     ],
     "a": [
      "Lauren Mammano",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amanda Mcalister",
      "Evan Woerner"
     ],
     "a": [
      "Perri Goldstein",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eva Danieli",
      "Abhishekh Mehra"
     ],
     "a": [
      "Jodie Bennett",
      "Elliott Bauer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Emily Babinsky",
      "Eva Danieli"
     ],
     "a": [
      "Lauren Mammano",
      "Perri Goldstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Amanda Mcalister"
     ],
     "a": [
      "Lissa Eagles",
      "Julie Randall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Chris Damato",
      "Deepak Sunku"
     ],
     "a": [
      "Tom Laiso",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Abhishekh Mehra",
      "Lance Brown"
     ],
     "a": [
      "Marc Pellicane",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Margaret Robb",
      "Chris Damato"
     ],
     "a": [
      "Lauren Mammano",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Emily Babinsky",
      "Deepak Sunku"
     ],
     "a": [
      "Lissa Eagles",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amanda Mcalister",
      "Evan Woerner"
     ],
     "a": [
      "Julie Randall",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eva Danieli",
      "Lance Brown"
     ],
     "a": [
      "Jodie Bennett",
      "Elliott Bauer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Emily Babinsky",
      "Margaret Robb"
     ],
     "a": [
      "Lauren Mammano",
      "Julie Randall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eva Danieli",
      "Amanda Mcalister"
     ],
     "a": [
      "Perri Goldstein",
      "Jodie Bennett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Deepak Sunku",
      "Evan Woerner"
     ],
     "a": [
      "Craig Frame",
      "Marc Pellicane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Abhishekh Mehra",
      "Lance Brown"
     ],
     "a": [
      "Elliott Bauer",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Margaret Robb",
      "Chris Damato"
     ],
     "a": [
      "Lissa Eagles",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Emily Babinsky",
      "Evan Woerner"
     ],
     "a": [
      "Julie Randall",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Lance Brown"
     ],
     "a": [
      "Perri Goldstein",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amanda Mcalister",
      "Abhishekh Mehra"
     ],
     "a": [
      "Jodie Bennett",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Emily Babinsky",
      "Margaret Robb"
     ],
     "a": [
      "Lissa Eagles",
      "Lauren Mammano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Amanda Mcalister"
     ],
     "a": [
      "Perri Goldstein",
      "Jodie Bennett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Chris Damato",
      "Evan Woerner"
     ],
     "a": [
      "Craig Frame",
      "Elliott Bauer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Deepak Sunku",
      "Abhishekh Mehra"
     ],
     "a": [
      "Tom Laiso",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Emily Babinsky",
      "Chris Damato"
     ],
     "a": [
      "Lauren Mammano",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Deepak Sunku"
     ],
     "a": [
      "Lissa Eagles",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eva Danieli",
      "Abhishekh Mehra"
     ],
     "a": [
      "Julie Randall",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amanda Mcalister",
      "Lance Brown"
     ],
     "a": [
      "Perri Goldstein",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Emily Babinsky",
      "Eva Danieli"
     ],
     "a": [
      "Lissa Eagles",
      "Julie Randall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Margaret Robb",
      "Amanda Mcalister"
     ],
     "a": [
      "Lauren Mammano",
      "Jodie Bennett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Damato",
      "Deepak Sunku"
     ],
     "a": [
      "Tom Laiso",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Evan Woerner",
      "Lance Brown"
     ],
     "a": [
      "Elliott Bauer",
      "Sree Harsha Konduru"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Eagles Erne Empire ",
   "away": "Paddle Taps",
   "time": "2026-07-23T19:30:00",
   "complete": true,
   "homePoints": 607,
   "awayPoints": 669,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lissa Eagles",
      "Craig Frame"
     ],
     "a": [
      "Alicia Campbell",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lauren Mammano",
      "Elliott Bauer"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Perri Goldstein",
      "Nikhil Khasnis"
     ],
     "a": [
      "Stephany Venuto",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Xavier Yandoli"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Julie Randall"
     ],
     "a": [
      "Taylor Hartman",
      "Stephany Venuto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lauren Mammano",
      "Jodie Bennett"
     ],
     "a": [
      "Alicia Campbell",
      "Angelique Gallucci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Craig Frame",
      "Elliott Bauer"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Xavier Yandoli",
      "Michael Vollmer"
     ],
     "a": [
      "Christopher Venuto",
      "Jorge Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lauren Mammano",
      "Craig Frame"
     ],
     "a": [
      "Taylor Hartman",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lissa Eagles",
      "Elliott Bauer"
     ],
     "a": [
      "Alicia Campbell",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Julie Randall",
      "Nikhil Khasnis"
     ],
     "a": [
      "Angelique Gallucci",
      "Jorge Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Michael Vollmer"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lauren Mammano",
      "Perri Goldstein"
     ],
     "a": [
      "Stephany Venuto",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Julie Randall",
      "Jodie Bennett"
     ],
     "a": [
      "Alicia Campbell",
      "Angelique Gallucci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Craig Frame",
      "Nikhil Khasnis"
     ],
     "a": [
      "Zach Hollmann",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Xavier Yandoli",
      "Michael Vollmer"
     ],
     "a": [
      "Jorge Valencia King",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Julie Randall",
      "Nikhil Khasnis"
     ],
     "a": [
      "Angelique Gallucci",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lissa Eagles",
      "Elliott Bauer"
     ],
     "a": [
      "Taylor Hartman",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Michael Vollmer"
     ],
     "a": [
      "Stephany Venuto",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Xavier Yandoli"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Jorge Valencia King"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lissa Eagles",
      "Lauren Mammano"
     ],
     "a": [
      "Taylor Hartman",
      "Alicia Campbell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Perri Goldstein",
      "Jodie Bennett"
     ],
     "a": [
      "Stephany Venuto",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Craig Frame",
      "Nikhil Khasnis"
     ],
     "a": [
      "Zach Hollmann",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elliott Bauer",
      "Xavier Yandoli"
     ],
     "a": [
      "Gage Cvijic",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Craig Frame"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Lauren Mammano",
      "Xavier Yandoli"
     ],
     "a": [
      "Stephany Venuto",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Julie Randall",
      "Elliott Bauer"
     ],
     "a": [
      "Alicia Campbell",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Michael Vollmer"
     ],
     "a": [
      "Angelique Gallucci",
      "Jorge Valencia King"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lissa Eagles",
      "Lauren Mammano"
     ],
     "a": [
      "Taylor Hartman",
      "Alicia Campbell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Julie Randall",
      "Perri Goldstein"
     ],
     "a": [
      "Angelique Gallucci",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Craig Frame",
      "Elliott Bauer"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nikhil Khasnis",
      "Michael Vollmer"
     ],
     "a": [
      "Jorge Valencia King",
      "Tony Scharko"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Baggers, Sand",
   "away": "The Robbinsvilians",
   "time": "2026-07-23T19:30:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 593,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kerrin Maurer",
      "Dipen Bhatt"
     ],
     "a": [
      "Margaret Robb",
      "Evan Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tessa Arendt",
      "Jesse Martinez"
     ],
     "a": [
      "Angela Luo",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Al Mancini"
     ],
     "a": [
      "Eva Danieli",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Guadalupe Reyes",
      "Varun Gurram"
     ],
     "a": [
      "Joey Angelson",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kerrin Maurer",
      "Tessa Arendt"
     ],
     "a": [
      "Margaret Robb",
      "Angela Luo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Maeve Mcgowan",
      "Guadalupe Reyes"
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
     "as": 12,
     "h": [
      "Dipen Bhatt",
      "Jesse Martinez"
     ],
     "a": [
      "Evan Woerner",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rakshit Maddur Gopinath",
      "Al Mancini"
     ],
     "a": [
      "Deepak Sunku",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tessa Arendt",
      "Jesse Martinez"
     ],
     "a": [
      "Joey Angelson",
      "Evan Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Dipen Bhatt"
     ],
     "a": [
      "Margaret Robb",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerrin Maurer",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Angela Luo",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Guadalupe Reyes",
      "Varun Gurram"
     ],
     "a": [
      "Eva Danieli",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tessa Arendt",
      "Guadalupe Reyes"
     ],
     "a": [
      "Margaret Robb",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kerrin Maurer",
      "Maeve Mcgowan"
     ],
     "a": [
      "Angela Luo",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Evan Woerner",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Varun Gurram",
      "Al Mancini"
     ],
     "a": [
      "Abhishekh Mehra",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Kerrin Maurer",
      "Jesse Martinez"
     ],
     "a": [
      "Margaret Robb",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tessa Arendt",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Joey Angelson",
      "Evan Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maeve Mcgowan",
      "Varun Gurram"
     ],
     "a": [
      "Angela Luo",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Guadalupe Reyes",
      "Al Mancini"
     ],
     "a": [
      "Eva Danieli",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Kerrin Maurer",
      "Tessa Arendt"
     ],
     "a": [
      "Margaret Robb",
      "Angela Luo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Maeve Mcgowan",
      "Guadalupe Reyes"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Jesse Martinez"
     ],
     "a": [
      "Evan Woerner",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Varun Gurram",
      "Al Mancini"
     ],
     "a": [
      "Abhishekh Mehra",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kerrin Maurer",
      "Dipen Bhatt"
     ],
     "a": [
      "Margaret Robb",
      "Evan Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ],
     "a": [
      "Joey Angelson",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tessa Arendt",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Angela Luo",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Guadalupe Reyes",
      "Al Mancini"
     ],
     "a": [
      "Eva Danieli",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tessa Arendt",
      "Guadalupe Reyes"
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
     "as": 10,
     "h": [
      "Kerrin Maurer",
      "Maeve Mcgowan"
     ],
     "a": [
      "Angela Luo",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jesse Martinez",
      "Varun Gurram"
     ],
     "a": [
      "Evan Woerner",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dipen Bhatt",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Deepak Sunku",
      "Jitendra Arora"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "The Robbinsvilians",
   "away": "Paddle Taps",
   "time": "2026-07-30T19:30:00",
   "complete": true,
   "homePoints": 633,
   "awayPoints": 560,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Margaret Robb",
      "Chris Damato"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Emily Babinsky",
      "Evan Woerner"
     ],
     "a": [
      "Alicia Campbell",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eva Danieli",
      "Deepak Sunku"
     ],
     "a": [
      "Lizz Dunn",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joey Angelson",
      "Abhishekh Mehra"
     ],
     "a": [
      "Stephanie Ho",
      "Keith Glock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Margaret Robb",
      "Joey Angelson"
     ],
     "a": [
      "Alicia Campbell",
      "Lizz Dunn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Eva Danieli"
     ],
     "a": [
      "Taylor Hartman",
      "Angelique Gallucci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Damato",
      "Evan Woerner"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Abhishekh Mehra",
      "Lance Brown"
     ],
     "a": [
      "Christopher Venuto",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Chris Damato"
     ],
     "a": [
      "Alicia Campbell",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Evan Woerner"
     ],
     "a": [
      "Taylor Hartman",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eva Danieli",
      "Deepak Sunku"
     ],
     "a": [
      "Angelique Gallucci",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joey Angelson",
      "Lance Brown"
     ],
     "a": [
      "Stephanie Ho",
      "Keith Glock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Margaret Robb",
      "Emily Babinsky"
     ],
     "a": [
      "Alicia Campbell",
      "Angelique Gallucci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Eva Danieli"
     ],
     "a": [
      "Lizz Dunn",
      "Stephanie Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Evan Woerner",
      "Deepak Sunku"
     ],
     "a": [
      "Gage Cvijic",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Abhishekh Mehra",
      "Lance Brown"
     ],
     "a": [
      "Keith Glock",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Chris Damato"
     ],
     "a": [
      "Taylor Hartman",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Deepak Sunku"
     ],
     "a": [
      "Angelique Gallucci",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joey Angelson",
      "Lance Brown"
     ],
     "a": [
      "Lizz Dunn",
      "Keith Glock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eva Danieli",
      "Abhishekh Mehra"
     ],
     "a": [
      "Stephanie Ho",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Margaret Robb",
      "Emily Babinsky"
     ],
     "a": [
      "Taylor Hartman",
      "Alicia Campbell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Joey Angelson",
      "Eva Danieli"
     ],
     "a": [
      "Lizz Dunn",
      "Stephanie Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Damato",
      "Deepak Sunku"
     ],
     "a": [
      "Gage Cvijic",
      "Keith Glock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Evan Woerner",
      "Abhishekh Mehra"
     ],
     "a": [
      "Zach Hollmann",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Margaret Robb",
      "Chris Damato"
     ],
     "a": [
      "Alicia Campbell",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Evan Woerner"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joey Angelson",
      "Abhishekh Mehra"
     ],
     "a": [
      "Angelique Gallucci",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Lance Brown"
     ],
     "a": [
      "Lizz Dunn",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Margaret Robb",
      "Joey Angelson"
     ],
     "a": [
      "Taylor Hartman",
      "Angelique Gallucci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Emily Babinsky",
      "Eva Danieli"
     ],
     "a": [
      "Alicia Campbell",
      "Stephanie Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chris Damato",
      "Evan Woerner"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Deepak Sunku",
      "Lance Brown"
     ],
     "a": [
      "Keith Glock",
      "Tony Scharko"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Baggers, Sand",
   "away": "Eagles Erne Empire ",
   "time": "2026-07-30T19:30:00",
   "complete": true,
   "homePoints": 579,
   "awayPoints": 596,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alyssa Boyle",
      "Dipen Bhatt"
     ],
     "a": [
      "Lissa Eagles",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Maeve Mcgowan",
      "Nick Babinsky"
     ],
     "a": [
      "Lauren Mammano",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Guadalupe Reyes",
      "Varun Gurram"
     ],
     "a": [
      "Perri Goldstein",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michelle Friedman",
      "Bennett Pereira"
     ],
     "a": [
      "Gabby Gonzalez",
      "Marc Pellicane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alyssa Boyle",
      "Michelle Friedman"
     ],
     "a": [
      "Lauren Mammano",
      "Perri Goldstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Maeve Mcgowan",
      "Guadalupe Reyes"
     ],
     "a": [
      "Lissa Eagles",
      "Julie Randall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Nick Babinsky"
     ],
     "a": [
      "Tom Laiso",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bennett Pereira",
      "Thomas Ridolfi"
     ],
     "a": [
      "Elliott Bauer",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maeve Mcgowan",
      "Dipen Bhatt"
     ],
     "a": [
      "Lauren Mammano",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alyssa Boyle",
      "Nick Babinsky"
     ],
     "a": [
      "Lissa Eagles",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Guadalupe Reyes",
      "Varun Gurram"
     ],
     "a": [
      "Julie Randall",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michelle Friedman",
      "Thomas Ridolfi"
     ],
     "a": [
      "Gabby Gonzalez",
      "Marc Pellicane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alyssa Boyle",
      "Maeve Mcgowan"
     ],
     "a": [
      "Lauren Mammano",
      "Julie Randall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michelle Friedman",
      "Guadalupe Reyes"
     ],
     "a": [
      "Perri Goldstein",
      "Gabby Gonzalez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nick Babinsky",
      "Varun Gurram"
     ],
     "a": [
      "Craig Frame",
      "Elliott Bauer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bennett Pereira",
      "Thomas Ridolfi"
     ],
     "a": [
      "Marc Pellicane",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Maeve Mcgowan",
      "Dipen Bhatt"
     ],
     "a": [
      "Lissa Eagles",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alyssa Boyle",
      "Varun Gurram"
     ],
     "a": [
      "Julie Randall",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michelle Friedman",
      "Thomas Ridolfi"
     ],
     "a": [
      "Perri Goldstein",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Guadalupe Reyes",
      "Bennett Pereira"
     ],
     "a": [
      "Gabby Gonzalez",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Boyle",
      "Maeve Mcgowan"
     ],
     "a": [
      "Lissa Eagles",
      "Lauren Mammano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michelle Friedman",
      "Guadalupe Reyes"
     ],
     "a": [
      "Perri Goldstein",
      "Gabby Gonzalez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Varun Gurram"
     ],
     "a": [
      "Craig Frame",
      "Marc Pellicane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nick Babinsky",
      "Bennett Pereira"
     ],
     "a": [
      "Tom Laiso",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Boyle",
      "Dipen Bhatt"
     ],
     "a": [
      "Lauren Mammano",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Nick Babinsky"
     ],
     "a": [
      "Lissa Eagles",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michelle Friedman",
      "Bennett Pereira"
     ],
     "a": [
      "Julie Randall",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Guadalupe Reyes",
      "Thomas Ridolfi"
     ],
     "a": [
      "Perri Goldstein",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Alyssa Boyle",
      "Michelle Friedman"
     ],
     "a": [
      "Lissa Eagles",
      "Julie Randall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Guadalupe Reyes"
     ],
     "a": [
      "Lauren Mammano",
      "Gabby Gonzalez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dipen Bhatt",
      "Nick Babinsky"
     ],
     "a": [
      "Tom Laiso",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Thomas Ridolfi"
     ],
     "a": [
      "Marc Pellicane",
      "Sree Harsha Konduru"
     ]
    }
   ],
   "subs": [
    "Michelle Friedman",
    "Alyssa Boyle"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Paddle Taps",
   "away": "Baggers, Sand",
   "time": "2026-08-06T19:30:00",
   "complete": true,
   "homePoints": 514,
   "awayPoints": 677,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alicia Campbell",
      "Zach Hollmann"
     ],
     "a": [
      "Tessa Arendt",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Keith Glock"
     ],
     "a": [
      "Guadalupe Reyes",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Stephanie Ho",
      "Jorge Valencia King"
     ],
     "a": [
      "Maeve Mcgowan",
      "Varun Gurram"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Angelique Gallucci",
      "Tony Scharko"
     ],
     "a": [
      "Lilie Sen",
      "Al Mancini"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Sue Lyle"
     ],
     "a": [
      "Tessa Arendt",
      "Maeve Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angelique Gallucci",
      "Stephanie Ho"
     ],
     "a": [
      "Guadalupe Reyes",
      "Lilie Sen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Keith Glock"
     ],
     "a": [
      "Jesse Martinez",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jorge Valencia King",
      "Rajeeth Nadig"
     ],
     "a": [
      "Al Mancini",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Zach Hollmann"
     ],
     "a": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Keith Glock"
     ],
     "a": [
      "Tessa Arendt",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Stephanie Ho",
      "Tony Scharko"
     ],
     "a": [
      "Guadalupe Reyes",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Angelique Gallucci",
      "Rajeeth Nadig"
     ],
     "a": [
      "Lilie Sen",
      "Varun Gurram"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alicia Campbell",
      "Angelique Gallucci"
     ],
     "a": [
      "Maeve Mcgowan",
      "Lilie Sen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Stephanie Ho"
     ],
     "a": [
      "Tessa Arendt",
      "Guadalupe Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Keith Glock",
      "Jorge Valencia King"
     ],
     "a": [
      "Dipen Bhatt",
      "Varun Gurram"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tony Scharko",
      "Rajeeth Nadig"
     ],
     "a": [
      "Al Mancini",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angelique Gallucci",
      "Zach Hollmann"
     ],
     "a": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Jorge Valencia King"
     ],
     "a": [
      "Tessa Arendt",
      "Varun Gurram"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Rajeeth Nadig"
     ],
     "a": [
      "Guadalupe Reyes",
      "Al Mancini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stephanie Ho",
      "Tony Scharko"
     ],
     "a": [
      "Lilie Sen",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Sue Lyle"
     ],
     "a": [
      "Tessa Arendt",
      "Maeve Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Angelique Gallucci",
      "Stephanie Ho"
     ],
     "a": [
      "Guadalupe Reyes",
      "Lilie Sen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Jorge Valencia King"
     ],
     "a": [
      "Dipen Bhatt",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Keith Glock",
      "Tony Scharko"
     ],
     "a": [
      "Jesse Martinez",
      "Varun Gurram"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Zach Hollmann"
     ],
     "a": [
      "Tessa Arendt",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Keith Glock"
     ],
     "a": [
      "Guadalupe Reyes",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Angelique Gallucci",
      "Rajeeth Nadig"
     ],
     "a": [
      "Maeve Mcgowan",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stephanie Ho",
      "Jorge Valencia King"
     ],
     "a": [
      "Lilie Sen",
      "Al Mancini"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alicia Campbell",
      "Angelique Gallucci"
     ],
     "a": [
      "Tessa Arendt",
      "Guadalupe Reyes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Stephanie Ho"
     ],
     "a": [
      "Maeve Mcgowan",
      "Lilie Sen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Keith Glock"
     ],
     "a": [
      "Jesse Martinez",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tony Scharko",
      "Rajeeth Nadig"
     ],
     "a": [
      "Varun Gurram",
      "Rakshit Maddur Gopinath"
     ]
    }
   ],
   "subs": [
    "Lilie Sen",
    "Sue Lyle"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Eagles Erne Empire ",
   "away": "The Robbinsvilians",
   "time": "2026-08-06T19:30:00",
   "complete": true,
   "homePoints": 545,
   "awayPoints": 630,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Craig Frame"
     ],
     "a": [
      "Margaret Robb",
      "Evan Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Marc Pellicane"
     ],
     "a": [
      "Emily Babinsky",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gabby Gonzalez",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Joey Angelson",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Nikhil Khasnis"
     ],
     "a": [
      "Angela Luo",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Charlotte Healey",
      "Perri Goldstein"
     ],
     "a": [
      "Margaret Robb",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Gabby Gonzalez"
     ],
     "a": [
      "Emily Babinsky",
      "Angela Luo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Craig Frame",
      "Marc Pellicane"
     ],
     "a": [
      "Evan Woerner",
      "Lance Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sree Harsha Konduru",
      "Michael Vollmer"
     ],
     "a": [
      "Jitendra Arora",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Craig Frame"
     ],
     "a": [
      "Joey Angelson",
      "Evan Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Perri Goldstein",
      "Marc Pellicane"
     ],
     "a": [
      "Margaret Robb",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Gabby Gonzalez",
      "Nikhil Khasnis"
     ],
     "a": [
      "Emily Babinsky",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Michael Vollmer"
     ],
     "a": [
      "Angela Luo",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Jodie Bennett"
     ],
     "a": [
      "Joey Angelson",
      "Angela Luo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Gabby Gonzalez"
     ],
     "a": [
      "Margaret Robb",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marc Pellicane",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Lance Brown",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nikhil Khasnis",
      "Michael Vollmer"
     ],
     "a": [
      "Jitendra Arora",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Craig Frame"
     ],
     "a": [
      "Joey Angelson",
      "Evan Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Margaret Robb",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Michael Vollmer"
     ],
     "a": [
      "Emily Babinsky",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gabby Gonzalez",
      "Nikhil Khasnis"
     ],
     "a": [
      "Angela Luo",
      "Armando Lugo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Charlotte Healey",
      "Perri Goldstein"
     ],
     "a": [
      "Margaret Robb",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Gabby Gonzalez"
     ],
     "a": [
      "Emily Babinsky",
      "Angela Luo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Craig Frame",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Lance Brown",
      "Jitendra Arora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Marc Pellicane",
      "Nikhil Khasnis"
     ],
     "a": [
      "Evan Woerner",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Craig Frame"
     ],
     "a": [
      "Margaret Robb",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlotte Healey",
      "Marc Pellicane"
     ],
     "a": [
      "Emily Babinsky",
      "Evan Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jodie Bennett",
      "Michael Vollmer"
     ],
     "a": [
      "Joey Angelson",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gabby Gonzalez",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Angela Luo",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Jodie Bennett"
     ],
     "a": [
      "Margaret Robb",
      "Emily Babinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Gabby Gonzalez"
     ],
     "a": [
      "Joey Angelson",
      "Angela Luo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Craig Frame",
      "Marc Pellicane"
     ],
     "a": [
      "Evan Woerner",
      "Lance Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nikhil Khasnis",
      "Michael Vollmer"
     ],
     "a": [
      "Abhishekh Mehra",
      "Armando Lugo"
     ]
    }
   ],
   "subs": [
    "Charlotte Healey"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "The Robbinsvilians",
   "away": "Baggers, Sand",
   "time": "2026-08-13T19:30:00",
   "complete": true,
   "homePoints": 548,
   "awayPoints": 611,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Chris Damato"
     ],
     "a": [
      "Noelle Ramirez",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Deepak Sunku"
     ],
     "a": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Lance Brown"
     ],
     "a": [
      "Guadalupe Reyes",
      "Nick Babinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amanda Mcalister",
      "Abhishekh Mehra"
     ],
     "a": [
      "Tessa Arendt",
      "Varun Gurram"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Eva Danieli"
     ],
     "a": [
      "Noelle Ramirez",
      "Tessa Arendt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Margaret Robb",
      "Emily Babinsky"
     ],
     "a": [
      "Maeve Mcgowan",
      "Guadalupe Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chris Damato",
      "Deepak Sunku"
     ],
     "a": [
      "Dipen Bhatt",
      "Jesse Martinez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lance Brown",
      "Jitendra Arora"
     ],
     "a": [
      "Varun Gurram",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joey Angelson",
      "Chris Damato"
     ],
     "a": [
      "Maeve Mcgowan",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Margaret Robb",
      "Deepak Sunku"
     ],
     "a": [
      "Noelle Ramirez",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Emily Babinsky",
      "Jitendra Arora"
     ],
     "a": [
      "Guadalupe Reyes",
      "Nick Babinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amanda Mcalister",
      "Abhishekh Mehra"
     ],
     "a": [
      "Tessa Arendt",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Emily Babinsky"
     ],
     "a": [
      "Noelle Ramirez",
      "Maeve Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Amanda Mcalister"
     ],
     "a": [
      "Tessa Arendt",
      "Guadalupe Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Deepak Sunku",
      "Lance Brown"
     ],
     "a": [
      "Jesse Martinez",
      "Nick Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Abhishekh Mehra",
      "Jitendra Arora"
     ],
     "a": [
      "Varun Gurram",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Lance Brown"
     ],
     "a": [
      "Maeve Mcgowan",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Chris Damato"
     ],
     "a": [
      "Noelle Ramirez",
      "Nick Babinsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Abhishekh Mehra"
     ],
     "a": [
      "Tessa Arendt",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Mcalister",
      "Jitendra Arora"
     ],
     "a": [
      "Guadalupe Reyes",
      "Varun Gurram"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Margaret Robb",
      "Joey Angelson"
     ],
     "a": [
      "Noelle Ramirez",
      "Maeve Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Amanda Mcalister"
     ],
     "a": [
      "Tessa Arendt",
      "Guadalupe Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Deepak Sunku",
      "Abhishekh Mehra"
     ],
     "a": [
      "Dipen Bhatt",
      "Nick Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Damato",
      "Lance Brown"
     ],
     "a": [
      "Jesse Martinez",
      "Varun Gurram"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Deepak Sunku"
     ],
     "a": [
      "Noelle Ramirez",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margaret Robb",
      "Chris Damato"
     ],
     "a": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Lance Brown"
     ],
     "a": [
      "Tessa Arendt",
      "Varun Gurram"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Jitendra Arora"
     ],
     "a": [
      "Guadalupe Reyes",
      "Rakshit Maddur Gopinath"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Margaret Robb",
      "Emily Babinsky"
     ],
     "a": [
      "Noelle Ramirez",
      "Tessa Arendt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Amanda Mcalister"
     ],
     "a": [
      "Maeve Mcgowan",
      "Guadalupe Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Damato",
      "Deepak Sunku"
     ],
     "a": [
      "Dipen Bhatt",
      "Jesse Martinez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Abhishekh Mehra",
      "Jitendra Arora"
     ],
     "a": [
      "Nick Babinsky",
      "Rakshit Maddur Gopinath"
     ]
    }
   ],
   "subs": [
    "Noelle Ramirez"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Eagles Erne Empire ",
   "away": "Paddle Taps",
   "time": "2026-08-13T19:30:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 556,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lissa Eagles",
      "Tom Laiso"
     ],
     "a": [
      "Lizz Dunn",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lauren Mammano",
      "Elliott Bauer"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Julie Randall",
      "Marc Pellicane"
     ],
     "a": [
      "Stephany Venuto",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gabby Gonzalez",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Stephanie Ho",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lissa Eagles",
      "Perri Goldstein"
     ],
     "a": [
      "Taylor Hartman",
      "Stephany Venuto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lauren Mammano",
      "Gabby Gonzalez"
     ],
     "a": [
      "Lizz Dunn",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tom Laiso",
      "Elliott Bauer"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Xavier Yandoli"
     ],
     "a": [
      "Christopher Venuto",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lauren Mammano",
      "Tom Laiso"
     ],
     "a": [
      "Taylor Hartman",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lissa Eagles",
      "Elliott Bauer"
     ],
     "a": [
      "Lizz Dunn",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Perri Goldstein",
      "Marc Pellicane"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Julie Randall",
      "Xavier Yandoli"
     ],
     "a": [
      "Stephanie Ho",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lauren Mammano",
      "Julie Randall"
     ],
     "a": [
      "Stephany Venuto",
      "Stephanie Ho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Perri Goldstein",
      "Gabby Gonzalez"
     ],
     "a": [
      "Lizz Dunn",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tom Laiso",
      "Marc Pellicane"
     ],
     "a": [
      "Zach Hollmann",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Xavier Yandoli"
     ],
     "a": [
      "Tony Scharko",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Perri Goldstein",
      "Marc Pellicane"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lissa Eagles",
      "Elliott Bauer"
     ],
     "a": [
      "Taylor Hartman",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julie Randall",
      "Xavier Yandoli"
     ],
     "a": [
      "Stephany Venuto",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gabby Gonzalez",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Stephanie Ho",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Lissa Eagles",
      "Lauren Mammano"
     ],
     "a": [
      "Taylor Hartman",
      "Lizz Dunn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Julie Randall",
      "Gabby Gonzalez"
     ],
     "a": [
      "Stephany Venuto",
      "Stephanie Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tom Laiso",
      "Marc Pellicane"
     ],
     "a": [
      "Zach Hollmann",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Elliott Bauer",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Gage Cvijic",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lissa Eagles",
      "Tom Laiso"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lauren Mammano",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Stephany Venuto",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Elliott Bauer"
     ],
     "a": [
      "Lizz Dunn",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gabby Gonzalez",
      "Xavier Yandoli"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lissa Eagles",
      "Lauren Mammano"
     ],
     "a": [
      "Taylor Hartman",
      "Lizz Dunn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Perri Goldstein",
      "Julie Randall"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Stephanie Ho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tom Laiso",
      "Elliott Bauer"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marc Pellicane",
      "Xavier Yandoli"
     ],
     "a": [
      "Tony Scharko",
      "Rajeeth Nadig"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 8,
   "home": "Paddle Taps",
   "away": "The Robbinsvilians",
   "time": "2026-08-20T19:30:00",
   "complete": true,
   "homePoints": 588,
   "awayPoints": 606,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Margaret Robb",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Gage Cvijic"
     ],
     "a": [
      "Joey Angelson",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lizz Dunn",
      "Christopher Venuto"
     ],
     "a": [
      "Amanda Mcalister",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Jorge Valencia King"
     ],
     "a": [
      "Eva Danieli",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Lizz Dunn"
     ],
     "a": [
      "Margaret Robb",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Hartman",
      "Stephany Venuto"
     ],
     "a": [
      "Joey Angelson",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Gage Cvijic"
     ],
     "a": [
      "Chris Damato",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christopher Venuto",
      "Tony Scharko"
     ],
     "a": [
      "Abhishekh Mehra",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alicia Campbell",
      "Zach Hollmann"
     ],
     "a": [
      "Joey Angelson",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Hartman",
      "Gage Cvijic"
     ],
     "a": [
      "Margaret Robb",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stephany Venuto",
      "Tony Scharko"
     ],
     "a": [
      "Amanda Mcalister",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mira Sigal-Feldman",
      "Jorge Valencia King"
     ],
     "a": [
      "Eva Danieli",
      "Armando Lugo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Stephany Venuto"
     ],
     "a": [
      "Margaret Robb",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Eva Danieli",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Gage Cvijic",
      "Christopher Venuto"
     ],
     "a": [
      "Deepak Sunku",
      "Lance Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jorge Valencia King",
      "Tony Scharko"
     ],
     "a": [
      "Abhishekh Mehra",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Christopher Venuto"
     ],
     "a": [
      "Joey Angelson",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stephany Venuto",
      "Zach Hollmann"
     ],
     "a": [
      "Margaret Robb",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lizz Dunn",
      "Jorge Valencia King"
     ],
     "a": [
      "Eva Danieli",
      "Armando Lugo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Tony Scharko"
     ],
     "a": [
      "Amanda Mcalister",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Alicia Campbell"
     ],
     "a": [
      "Margaret Robb",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Eva Danieli",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gage Cvijic",
      "Jorge Valencia King"
     ],
     "a": [
      "Chris Damato",
      "Lance Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Christopher Venuto"
     ],
     "a": [
      "Deepak Sunku",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Gage Cvijic"
     ],
     "a": [
      "Margaret Robb",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Joey Angelson",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stephany Venuto",
      "Christopher Venuto"
     ],
     "a": [
      "Eva Danieli",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Lizz Dunn",
      "Tony Scharko"
     ],
     "a": [
      "Amanda Mcalister",
      "Armando Lugo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Stephany Venuto"
     ],
     "a": [
      "Margaret Robb",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alicia Campbell",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Joey Angelson",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Gage Cvijic"
     ],
     "a": [
      "Chris Damato",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jorge Valencia King",
      "Tony Scharko"
     ],
     "a": [
      "Lance Brown",
      "Armando Lugo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 8,
   "home": "Baggers, Sand",
   "away": "Eagles Erne Empire ",
   "time": "2026-08-20T19:30:00",
   "complete": true,
   "homePoints": 624,
   "awayPoints": 546,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kerrin Maurer",
      "Dipen Bhatt"
     ],
     "a": [
      "Lissa Eagles",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maeve Mcgowan",
      "Al Mancini"
     ],
     "a": [
      "Lauren Mammano",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tessa Arendt",
      "Jesse Martinez"
     ],
     "a": [
      "Gabby Gonzalez",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Guadalupe Reyes",
      "Bennett Pereira"
     ],
     "a": [
      "Jodie Bennett",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kerrin Maurer",
      "Guadalupe Reyes"
     ],
     "a": [
      "Lauren Mammano",
      "Gabby Gonzalez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Maeve Mcgowan",
      "Tessa Arendt"
     ],
     "a": [
      "Lissa Eagles",
      "Julie Randall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dipen Bhatt",
      "Al Mancini"
     ],
     "a": [
      "Tom Laiso",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bennett Pereira",
      "Thomas Ridolfi"
     ],
     "a": [
      "Elliott Bauer",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Dipen Bhatt"
     ],
     "a": [
      "Lauren Mammano",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerrin Maurer",
      "Al Mancini"
     ],
     "a": [
      "Lissa Eagles",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tessa Arendt",
      "Jesse Martinez"
     ],
     "a": [
      "Julie Randall",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Guadalupe Reyes",
      "Thomas Ridolfi"
     ],
     "a": [
      "Jodie Bennett",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerrin Maurer",
      "Maeve Mcgowan"
     ],
     "a": [
      "Lauren Mammano",
      "Julie Randall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Guadalupe Reyes",
      "Tessa Arendt"
     ],
     "a": [
      "Gabby Gonzalez",
      "Jodie Bennett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Al Mancini",
      "Jesse Martinez"
     ],
     "a": [
      "Craig Frame",
      "Elliott Bauer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Bennett Pereira",
      "Thomas Ridolfi"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Dipen Bhatt"
     ],
     "a": [
      "Lissa Eagles",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kerrin Maurer",
      "Jesse Martinez"
     ],
     "a": [
      "Julie Randall",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Guadalupe Reyes",
      "Thomas Ridolfi"
     ],
     "a": [
      "Gabby Gonzalez",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tessa Arendt",
      "Bennett Pereira"
     ],
     "a": [
      "Jodie Bennett",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerrin Maurer",
      "Maeve Mcgowan"
     ],
     "a": [
      "Lissa Eagles",
      "Lauren Mammano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Guadalupe Reyes",
      "Tessa Arendt"
     ],
     "a": [
      "Gabby Gonzalez",
      "Jodie Bennett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dipen Bhatt",
      "Jesse Martinez"
     ],
     "a": [
      "Craig Frame",
      "Sree Harsha Konduru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Al Mancini",
      "Bennett Pereira"
     ],
     "a": [
      "Tom Laiso",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kerrin Maurer",
      "Dipen Bhatt"
     ],
     "a": [
      "Lauren Mammano",
      "Craig Frame"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Al Mancini"
     ],
     "a": [
      "Lissa Eagles",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Guadalupe Reyes",
      "Bennett Pereira"
     ],
     "a": [
      "Julie Randall",
      "Elliott Bauer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tessa Arendt",
      "Thomas Ridolfi"
     ],
     "a": [
      "Gabby Gonzalez",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kerrin Maurer",
      "Guadalupe Reyes"
     ],
     "a": [
      "Lissa Eagles",
      "Julie Randall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maeve Mcgowan",
      "Tessa Arendt"
     ],
     "a": [
      "Lauren Mammano",
      "Jodie Bennett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dipen Bhatt",
      "Al Mancini"
     ],
     "a": [
      "Tom Laiso",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jesse Martinez",
      "Thomas Ridolfi"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Xavier Yandoli"
     ]
    }
   ],
   "subs": []
  }
 ],
 "playoffs": [
  {
   "result": "home",
   "round": 1,
   "home": "Baggers, Sand",
   "away": "The Robbinsvilians",
   "time": "2026-08-21T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "provisional": true,
   "homePoints": 625,
   "awayPoints": 589,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ],
     "a": [
      "Angela Luo",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kerrin Maurer",
      "Dipen Bhatt"
     ],
     "a": [
      "Margaret Robb",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Guadalupe Reyes",
      "Al Mancini"
     ],
     "a": [
      "Joey Angelson",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tessa Arendt",
      "Varun Gurram"
     ],
     "a": [
      "Amanda Mcalister",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kerrin Maurer",
      "Maeve Mcgowan"
     ],
     "a": [
      "Margaret Robb",
      "Angela Luo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Guadalupe Reyes",
      "Tessa Arendt"
     ],
     "a": [
      "Joey Angelson",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jesse Martinez",
      "Dipen Bhatt"
     ],
     "a": [
      "Chris Damato",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Al Mancini",
      "Varun Gurram"
     ],
     "a": [
      "Lance Brown",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maeve Mcgowan",
      "Jesse Martinez"
     ],
     "a": [
      "Angela Luo",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerrin Maurer",
      "Al Mancini"
     ],
     "a": [
      "Margaret Robb",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tessa Arendt",
      "Dipen Bhatt"
     ],
     "a": [
      "Joey Angelson",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Guadalupe Reyes",
      "Varun Gurram"
     ],
     "a": [
      "Amanda Mcalister",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kerrin Maurer",
      "Guadalupe Reyes"
     ],
     "a": [
      "Angela Luo",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Maeve Mcgowan",
      "Tessa Arendt"
     ],
     "a": [
      "Margaret Robb",
      "Joey Angelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jesse Martinez",
      "Al Mancini"
     ],
     "a": [
      "Chris Damato",
      "Lance Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dipen Bhatt",
      "Varun Gurram"
     ],
     "a": [
      "Deepak Sunku",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Guadalupe Reyes",
      "Jesse Martinez"
     ],
     "a": [
      "Margaret Robb",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kerrin Maurer",
      "Dipen Bhatt"
     ],
     "a": [
      "Joey Angelson",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tessa Arendt",
      "Al Mancini"
     ],
     "a": [
      "Angela Luo",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Maeve Mcgowan",
      "Varun Gurram"
     ],
     "a": [
      "Amanda Mcalister",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kerrin Maurer",
      "Maeve Mcgowan"
     ],
     "a": [
      "Margaret Robb",
      "Angela Luo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Guadalupe Reyes",
      "Tessa Arendt"
     ],
     "a": [
      "Joey Angelson",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jesse Martinez",
      "Dipen Bhatt"
     ],
     "a": [
      "Chris Damato",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Al Mancini",
      "Varun Gurram"
     ],
     "a": [
      "Lance Brown",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kerrin Maurer",
      "Jesse Martinez"
     ],
     "a": [
      "Margaret Robb",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Maeve Mcgowan",
      "Dipen Bhatt"
     ],
     "a": [
      "Joey Angelson",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Guadalupe Reyes",
      "Varun Gurram"
     ],
     "a": [
      "Angela Luo",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tessa Arendt",
      "Al Mancini"
     ],
     "a": [
      "Amanda Mcalister",
      "Deepak Sunku"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kerrin Maurer",
      "Guadalupe Reyes"
     ],
     "a": [
      "Angela Luo",
      "Amanda Mcalister"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Maeve Mcgowan",
      "Tessa Arendt"
     ],
     "a": [
      "Margaret Robb",
      "Joey Angelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jesse Martinez",
      "Al Mancini"
     ],
     "a": [
      "Deepak Sunku",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dipen Bhatt",
      "Varun Gurram"
     ],
     "a": [
      "Chris Damato",
      "Lance Brown"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Eagles Erne Empire ",
   "away": "Paddle Taps",
   "time": "2026-08-21T19:30:00",
   "complete": true,
   "homeSeed": 3,
   "awaySeed": 4,
   "provisional": true,
   "homePoints": 605,
   "awayPoints": 592,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lissa Eagles",
      "Tom Laiso"
     ],
     "a": [
      "Angelique Gallucci",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Charlotte Healey",
      "Craig Frame"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Julie Randall",
      "Elliott Bauer"
     ],
     "a": [
      "Stephany Venuto",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Caitlin Hall",
      "Marc Pellicane"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Sue Lyle"
     ],
     "a": [
      "Taylor Hartman",
      "Stephany Venuto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Charlotte Healey",
      "Caitlin Hall"
     ],
     "a": [
      "Angelique Gallucci",
      "Lizz Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tom Laiso",
      "Craig Frame"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marc Pellicane",
      "Nikhil Khasnis"
     ],
     "a": [
      "Christopher Venuto",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Tom Laiso"
     ],
     "a": [
      "Taylor Hartman",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lissa Eagles",
      "Craig Frame"
     ],
     "a": [
      "Angelique Gallucci",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sue Lyle",
      "Elliott Bauer"
     ],
     "a": [
      "Lizz Dunn",
      "Tony Scharko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Julie Randall",
      "Nikhil Khasnis"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlotte Healey",
      "Julie Randall"
     ],
     "a": [
      "Stephany Venuto",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Caitlin Hall"
     ],
     "a": [
      "Angelique Gallucci",
      "Lizz Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tom Laiso",
      "Elliott Bauer"
     ],
     "a": [
      "Zach Hollmann",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marc Pellicane",
      "Nikhil Khasnis"
     ],
     "a": [
      "Tony Scharko",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sue Lyle",
      "Elliott Bauer"
     ],
     "a": [
      "Lizz Dunn",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lissa Eagles",
      "Craig Frame"
     ],
     "a": [
      "Taylor Hartman",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Julie Randall",
      "Nikhil Khasnis"
     ],
     "a": [
      "Stephany Venuto",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Caitlin Hall",
      "Marc Pellicane"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lissa Eagles",
      "Charlotte Healey"
     ],
     "a": [
      "Taylor Hartman",
      "Angelique Gallucci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julie Randall",
      "Caitlin Hall"
     ],
     "a": [
      "Stephany Venuto",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tom Laiso",
      "Elliott Bauer"
     ],
     "a": [
      "Zach Hollmann",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Craig Frame",
      "Marc Pellicane"
     ],
     "a": [
      "Gage Cvijic",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lissa Eagles",
      "Tom Laiso"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Charlotte Healey",
      "Marc Pellicane"
     ],
     "a": [
      "Stephany Venuto",
      "Christopher Venuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Craig Frame"
     ],
     "a": [
      "Angelique Gallucci",
      "Gage Cvijic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Caitlin Hall",
      "Nikhil Khasnis"
     ],
     "a": [
      "Lizz Dunn",
      "Tony Scharko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lissa Eagles",
      "Charlotte Healey"
     ],
     "a": [
      "Taylor Hartman",
      "Angelique Gallucci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Julie Randall"
     ],
     "a": [
      "Lizz Dunn",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tom Laiso",
      "Craig Frame"
     ],
     "a": [
      "Zach Hollmann",
      "Gage Cvijic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Elliott Bauer",
      "Nikhil Khasnis"
     ],
     "a": [
      "Tony Scharko",
      "Rajeeth Nadig"
     ]
    }
   ]
  }
 ],
 "meta": {
  "matchesPlayed": 16,
  "weeks": "1-8",
  "totalPlayers": 63,
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
  "divisionSlug": "a85172dd",
  "hasPlayoffs": true,
  "typicalDay": "Thursdays",
  "detailFile": "detail-a85172dd.js",
  "clubName": "Robbinsville Pickle House",
  "divisionName": "4.0 - 4.99",
  "leagueType": "local",
  "podCount": 1,
  "podNames": null,
  "podSource": "schedule",
  "reportedPods": null
 }
};
  DATA.meta.asOf = "2026-08-25";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["a85172dd"] = DATA;
})();
