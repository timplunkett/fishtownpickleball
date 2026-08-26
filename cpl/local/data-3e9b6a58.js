(function () {
  const DATA = {
 "players": [
  {
   "name": "Joe Gronczewski",
   "gender": "Male",
   "team": "Picholas Cage",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 22,
   "losses": 2,
   "pointsWon": 498,
   "totalPointsAgainst": 376,
   "mixedWins": 10,
   "mixedLosses": 2,
   "genderWins": 12,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 91.7,
   "diff": 122,
   "ppg": 20.8,
   "leagueRank": 2,
   "rating": 1.3,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.9,
   "playerId": "f6eef486-8999-4247-a7d8-20251377021c"
  },
  {
   "name": "Jordan Clever",
   "gender": "Male",
   "team": "Balls of Fury",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 29,
   "losses": 7,
   "pointsWon": 738,
   "totalPointsAgainst": 592,
   "mixedWins": 15,
   "mixedLosses": 2,
   "genderWins": 14,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 80.6,
   "diff": 146,
   "ppg": 20.5,
   "leagueRank": 1,
   "rating": 6,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.6,
   "playerId": "d64db065-87c9-4e7f-989b-6f0ec53240c9"
  },
  {
   "name": "Maggie Malloy",
   "gender": "Female",
   "team": "Balls of Fury",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 31,
   "losses": 8,
   "pointsWon": 781,
   "totalPointsAgainst": 652,
   "mixedWins": 17,
   "mixedLosses": 2,
   "genderWins": 14,
   "genderLosses": 6,
   "clutchWins": 10,
   "clutchLosses": 3,
   "winPct": 79.5,
   "diff": 129,
   "ppg": 20,
   "leagueRank": 3,
   "rating": 3.1,
   "ratingGames": 39,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "c1251904-fef6-4eb5-9b49-06c8335e3546"
  },
  {
   "name": "Joseph Luka",
   "gender": "Male",
   "team": "Picholas Cage",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 22,
   "losses": 8,
   "pointsWon": 594,
   "totalPointsAgainst": 519,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 73.3,
   "diff": 75,
   "ppg": 19.8,
   "leagueRank": 6,
   "rating": 1,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe"
  },
  {
   "name": "Jonathan Macqueen",
   "gender": "Male",
   "team": "Picholas Cage",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 22,
   "losses": 10,
   "pointsWon": 607,
   "totalPointsAgainst": 558,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 12,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 68.8,
   "diff": 49,
   "ppg": 19,
   "leagueRank": 10,
   "rating": 1.1,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "9aa0ff6c-0210-4a91-885f-ae3d4813f1c3"
  },
  {
   "name": "Shania Bui",
   "gender": "Female",
   "team": "Picholas Cage",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 19,
   "losses": 9,
   "pointsWon": 546,
   "totalPointsAgainst": 504,
   "mixedWins": 9,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 67.9,
   "diff": 42,
   "ppg": 19.5,
   "leagueRank": 7,
   "rating": 2.8,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "714331ee-d124-483d-a89e-11d1431a7fca"
  },
  {
   "name": "Andrew Martin",
   "gender": "Male",
   "team": "License to Dill",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 27,
   "losses": 13,
   "pointsWon": 778,
   "totalPointsAgainst": 710,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 14,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 67.5,
   "diff": 68,
   "ppg": 19.5,
   "leagueRank": 5,
   "rating": 2.4,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "name": "Nikhil Sachdeva",
   "gender": "Male",
   "team": "License to Dill",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 20,
   "losses": 10,
   "pointsWon": 568,
   "totalPointsAgainst": 534,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 34,
   "ppg": 18.9,
   "leagueRank": 11,
   "rating": 0.3,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "aa811676-fda4-47ba-81a9-3a0feb35cc6a"
  },
  {
   "name": "Christopher Moscony",
   "gender": "Male",
   "team": "Picholas Cage",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 111,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 7,
   "ppg": 18.5,
   "leagueRank": 65,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -1.7,
   "playerId": "f64241ba-e625-4065-b72f-777f5a8fb2bd"
  },
  {
   "name": "Bianca Previdi",
   "gender": "Female",
   "team": "Baggers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 33,
   "losses": 17,
   "pointsWon": 987,
   "totalPointsAgainst": 854,
   "mixedWins": 13,
   "mixedLosses": 11,
   "genderWins": 20,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 66,
   "diff": 133,
   "ppg": 19.7,
   "leagueRank": 4,
   "rating": 2.4,
   "ratingGames": 50,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2"
  },
  {
   "name": "Eileen Zhang",
   "gender": "Female",
   "team": "Balls of Fury",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 31,
   "losses": 17,
   "pointsWon": 941,
   "totalPointsAgainst": 866,
   "mixedWins": 12,
   "mixedLosses": 10,
   "genderWins": 19,
   "genderLosses": 7,
   "clutchWins": 14,
   "clutchLosses": 6,
   "winPct": 64.6,
   "diff": 75,
   "ppg": 19.6,
   "leagueRank": 9,
   "rating": 2.7,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1,
   "playerId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a"
  },
  {
   "name": "Cait Kearney",
   "gender": "Female",
   "team": "Baggers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 32,
   "losses": 18,
   "pointsWon": 976,
   "totalPointsAgainst": 853,
   "mixedWins": 16,
   "mixedLosses": 10,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 64,
   "diff": 123,
   "ppg": 19.5,
   "leagueRank": 8,
   "rating": 3.1,
   "ratingGames": 50,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.1,
   "playerId": "b104bb38-14f6-40b1-8666-faf327d5f415"
  },
  {
   "name": "Christina Sheehan",
   "gender": "Female",
   "team": "Baggers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 33,
   "losses": 19,
   "pointsWon": 1008,
   "totalPointsAgainst": 942,
   "mixedWins": 17,
   "mixedLosses": 9,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 9,
   "winPct": 63.5,
   "diff": 66,
   "ppg": 19.4,
   "leagueRank": 13,
   "rating": 2.2,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.3,
   "playerId": "ed037154-d16e-4bb2-a2d2-d485c6f5d870"
  },
  {
   "name": "Jeremy Chen",
   "gender": "Male",
   "team": "Kitchen Nightmares",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 159,
   "totalPointsAgainst": 150,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "3c293cfa-d13b-4c0d-8cfe-057058b886d8",
   "winPct": 62.5,
   "diff": 9,
   "ppg": 19.9,
   "leagueRank": 56,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Deborah Chapman",
   "gender": "Female",
   "team": "Picholas Cage",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 22,
   "losses": 14,
   "pointsWon": 686,
   "totalPointsAgainst": 639,
   "mixedWins": 13,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 61.1,
   "diff": 47,
   "ppg": 19.1,
   "leagueRank": 20,
   "rating": -0.7,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.9,
   "playerId": "6c27f09f-99d8-46e0-bd7f-d50809759eff"
  },
  {
   "name": "Corey Neel",
   "gender": "Male",
   "team": "Baggers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 25,
   "losses": 16,
   "pointsWon": 785,
   "totalPointsAgainst": 726,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 61,
   "diff": 59,
   "ppg": 19.1,
   "leagueRank": 14,
   "rating": 1.9,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1,
   "playerId": "7dbbd17e-9bc8-440d-a09c-dcbe4da688bd"
  },
  {
   "name": "Brad De Jesus",
   "gender": "Male",
   "team": "Balls of Fury",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 15,
   "losses": 10,
   "pointsWon": 471,
   "totalPointsAgainst": 458,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 13,
   "ppg": 18.8,
   "leagueRank": 25,
   "rating": -1,
   "ratingGames": 25,
   "confidence": 81,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "0dcffbac-6931-400d-b652-41c2720e6311"
  },
  {
   "name": "Ross Cogan",
   "gender": "Male",
   "team": "Kitchen Nightmares",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 21,
   "losses": 15,
   "pointsWon": 697,
   "totalPointsAgainst": 621,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 58.3,
   "diff": 76,
   "ppg": 19.4,
   "leagueRank": 12,
   "rating": 3.6,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.6,
   "playerId": "1b682816-9513-4797-b836-6279e1ffda38"
  },
  {
   "name": "Julia Manetta",
   "gender": "Female",
   "team": "Kitchen Nightmares",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 30,
   "losses": 22,
   "pointsWon": 989,
   "totalPointsAgainst": 918,
   "mixedWins": 15,
   "mixedLosses": 13,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 57.7,
   "diff": 71,
   "ppg": 19,
   "leagueRank": 16,
   "rating": 2.4,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.3,
   "playerId": "4977544e-0c7f-4151-815c-51f68473862f"
  },
  {
   "name": "Thuy Le",
   "gender": "Female",
   "team": "Balls of Fury",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 34,
   "losses": 25,
   "pointsWon": 1121,
   "totalPointsAgainst": 1028,
   "mixedWins": 14,
   "mixedLosses": 15,
   "genderWins": 20,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 10,
   "winPct": 57.6,
   "diff": 93,
   "ppg": 19,
   "leagueRank": 17,
   "rating": 0.3,
   "ratingGames": 59,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.7,
   "playerId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "name": "Daniel Borgia",
   "gender": "Male",
   "team": "Baggers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 28,
   "losses": 21,
   "pointsWon": 931,
   "totalPointsAgainst": 874,
   "mixedWins": 15,
   "mixedLosses": 9,
   "genderWins": 13,
   "genderLosses": 12,
   "clutchWins": 7,
   "clutchLosses": 10,
   "winPct": 57.1,
   "diff": 57,
   "ppg": 19,
   "leagueRank": 18,
   "rating": 2.7,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.5,
   "playerId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "name": "John Sehi",
   "gender": "Male",
   "team": "Picholas Cage",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 23,
   "losses": 18,
   "pointsWon": 795,
   "totalPointsAgainst": 734,
   "mixedWins": 13,
   "mixedLosses": 6,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 56.1,
   "diff": 61,
   "ppg": 19.4,
   "leagueRank": 15,
   "rating": 3.2,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.4,
   "playerId": "c5ea40be-2d6c-47ce-a2d1-dce40a3756a5"
  },
  {
   "name": "Ben Turchin",
   "gender": "Male",
   "team": "License to Dill",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 23,
   "losses": 18,
   "pointsWon": 763,
   "totalPointsAgainst": 758,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 56.1,
   "diff": 5,
   "ppg": 18.6,
   "leagueRank": 22,
   "rating": 1.4,
   "ratingGames": 41,
   "confidence": 86,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "aed3d38c-77cb-48fa-ac41-3ff4b3664978"
  },
  {
   "name": "Mira Sigal-Feldman",
   "gender": "Female",
   "team": "Baggers",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 33,
   "losses": 27,
   "pointsWon": 1136,
   "totalPointsAgainst": 1089,
   "mixedWins": 17,
   "mixedLosses": 13,
   "genderWins": 16,
   "genderLosses": 14,
   "clutchWins": 7,
   "clutchLosses": 13,
   "winPct": 55,
   "diff": 47,
   "ppg": 18.9,
   "leagueRank": 23,
   "rating": -0.5,
   "ratingGames": 60,
   "confidence": 89,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.8,
   "playerId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc"
  },
  {
   "name": "Conor Malloy",
   "gender": "Male",
   "team": "Picholas Cage",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 17,
   "losses": 14,
   "pointsWon": 575,
   "totalPointsAgainst": 545,
   "mixedWins": 6,
   "mixedLosses": 10,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 54.8,
   "diff": 30,
   "ppg": 18.5,
   "leagueRank": 24,
   "rating": 0.5,
   "ratingGames": 31,
   "confidence": 84,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "79791efb-c2d0-449d-8572-a99a1f2a5200"
  },
  {
   "name": "Ted Asavamongkolkul",
   "gender": "Male",
   "team": "Kitchen Nightmares",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 13,
   "losses": 11,
   "pointsWon": 444,
   "totalPointsAgainst": 434,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 54.2,
   "diff": 10,
   "ppg": 18.5,
   "leagueRank": 19,
   "rating": 1.3,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "ee07033c-b5a8-4d28-8920-7873dc8ffac0"
  },
  {
   "name": "Pamela Toy",
   "gender": "Female",
   "team": "Balls of Fury",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 24,
   "losses": 21,
   "pointsWon": 845,
   "totalPointsAgainst": 839,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 53.3,
   "diff": 6,
   "ppg": 18.8,
   "leagueRank": 34,
   "rating": -1.9,
   "ratingGames": 45,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1,
   "playerId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003"
  },
  {
   "name": "Sarina Manetta",
   "gender": "Female",
   "team": "Kitchen Nightmares",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 23,
   "losses": 21,
   "pointsWon": 823,
   "totalPointsAgainst": 806,
   "mixedWins": 11,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 52.3,
   "diff": 17,
   "ppg": 18.7,
   "leagueRank": 21,
   "rating": 2.6,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.2,
   "playerId": "55ccbdaa-8f11-4c08-abb5-6e71438471b1"
  },
  {
   "name": "Minjel Shah",
   "gender": "Female",
   "team": "Picholas Cage",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 19,
   "losses": 18,
   "pointsWon": 686,
   "totalPointsAgainst": 657,
   "mixedWins": 11,
   "mixedLosses": 7,
   "genderWins": 8,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 51.4,
   "diff": 29,
   "ppg": 18.5,
   "leagueRank": 28,
   "rating": 0.3,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "name": "Anthony Prusich",
   "gender": "Male",
   "team": "Kitchen Nightmares",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 18,
   "losses": 17,
   "pointsWon": 652,
   "totalPointsAgainst": 651,
   "mixedWins": 9,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 51.4,
   "diff": 1,
   "ppg": 18.6,
   "leagueRank": 26,
   "rating": 1.4,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.4,
   "playerId": "41cd934f-66b0-4f22-b2e1-74955db922ce"
  },
  {
   "name": "Lisa Dinh",
   "gender": "Female",
   "team": "Picholas Cage",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 18,
   "losses": 18,
   "pointsWon": 678,
   "totalPointsAgainst": 664,
   "mixedWins": 11,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": 14,
   "ppg": 18.8,
   "leagueRank": 40,
   "rating": -1.8,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.2,
   "playerId": "aaf27c02-6d20-4a96-835c-3084d799ac0f"
  },
  {
   "name": "Carlos Lichty",
   "gender": "Male",
   "team": "Kitchen Nightmares",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 16,
   "losses": 16,
   "pointsWon": 592,
   "totalPointsAgainst": 600,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": -8,
   "ppg": 18.5,
   "leagueRank": 27,
   "rating": 0.7,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "5c5c0d00-e20c-456e-b53e-890845310916"
  },
  {
   "name": "Derek Lombardi",
   "gender": "Male",
   "team": "Balls of Fury",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 443,
   "totalPointsAgainst": 453,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -10,
   "ppg": 18.5,
   "leagueRank": 44,
   "rating": -1.2,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.5,
   "playerId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72"
  },
  {
   "name": "Joshua Kim",
   "gender": "Male",
   "team": "License to Dill",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 14,
   "losses": 14,
   "pointsWon": 510,
   "totalPointsAgainst": 528,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 12,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -18,
   "ppg": 18.2,
   "leagueRank": 36,
   "rating": 0.2,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.1,
   "playerId": "24c3c526-8dd1-4ed0-adcf-ca7857e8b0ec"
  },
  {
   "name": "Donny Wong",
   "gender": "Male",
   "team": "Balls of Fury",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 431,
   "totalPointsAgainst": 451,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -20,
   "ppg": 18,
   "leagueRank": 43,
   "rating": -1.3,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -1,
   "playerId": "ea83bd99-bf9c-4d3a-8fc4-80d939f4c466"
  },
  {
   "name": "Paula Cuerquis",
   "gender": "Female",
   "team": "Balls of Fury",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 25,
   "losses": 26,
   "pointsWon": 971,
   "totalPointsAgainst": 959,
   "mixedWins": 12,
   "mixedLosses": 16,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 49,
   "diff": 12,
   "ppg": 19,
   "leagueRank": 29,
   "rating": 1.5,
   "ratingGames": 51,
   "confidence": 87,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 1.7,
   "playerId": "ac412cd9-bd0a-4f98-8253-9c8c12911465"
  },
  {
   "name": "Caity Rietzen",
   "gender": "Female",
   "team": "Picholas Cage",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 20,
   "losses": 22,
   "pointsWon": 755,
   "totalPointsAgainst": 809,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 8,
   "genderLosses": 11,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 47.6,
   "diff": -54,
   "ppg": 18,
   "leagueRank": 45,
   "rating": 0.6,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.6,
   "playerId": "417f3210-fcc8-4e63-a512-9eb872adb4e5"
  },
  {
   "name": "Tim Manzi",
   "gender": "Male",
   "team": "License to Dill",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 353,
   "totalPointsAgainst": 362,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 47.4,
   "diff": -9,
   "ppg": 18.6,
   "leagueRank": 35,
   "rating": -0.2,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "79832eb5-9a38-482c-a71e-7903fcb4c205"
  },
  {
   "name": "Mike Dochney",
   "gender": "Male",
   "team": "Kitchen Nightmares",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 15,
   "losses": 17,
   "pointsWon": 586,
   "totalPointsAgainst": 592,
   "mixedWins": 6,
   "mixedLosses": 10,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 46.9,
   "diff": -6,
   "ppg": 18.3,
   "leagueRank": 30,
   "rating": 0.5,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": -0.6,
   "playerId": "aa63d50a-88e6-4de7-9592-1546f21d8648"
  },
  {
   "name": "Kevin Chang",
   "gender": "Male",
   "team": "Baggers",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 11,
   "losses": 13,
   "pointsWon": 442,
   "totalPointsAgainst": 436,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 45.8,
   "diff": 6,
   "ppg": 18.4,
   "leagueRank": 33,
   "rating": -0.5,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -1,
   "playerId": "8d18b5f7-dfba-4159-b614-0ae432db99c5"
  },
  {
   "name": "Zach Strickland",
   "gender": "Male",
   "team": "Balls of Fury",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 16,
   "losses": 19,
   "pointsWon": 645,
   "totalPointsAgainst": 647,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 45.7,
   "diff": -2,
   "ppg": 18.4,
   "leagueRank": 39,
   "rating": -0.2,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.7,
   "playerId": "e6deea54-c0bb-40c7-83d0-b65c6eb1fcb2"
  },
  {
   "name": "Evelyn Geating",
   "gender": "Female",
   "team": "License to Dill",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 21,
   "losses": 25,
   "pointsWon": 834,
   "totalPointsAgainst": 869,
   "mixedWins": 11,
   "mixedLosses": 11,
   "genderWins": 10,
   "genderLosses": 14,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 45.7,
   "diff": -35,
   "ppg": 18.1,
   "leagueRank": 38,
   "rating": 0.1,
   "ratingGames": 46,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "798a21bd-83e7-42e9-bd86-c74448c7dada"
  },
  {
   "name": "Micah Weaver",
   "gender": "Male",
   "team": "Picholas Cage",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 19,
   "losses": 23,
   "pointsWon": 758,
   "totalPointsAgainst": 807,
   "mixedWins": 12,
   "mixedLosses": 10,
   "genderWins": 7,
   "genderLosses": 13,
   "clutchWins": 11,
   "clutchLosses": 6,
   "winPct": 45.2,
   "diff": -49,
   "ppg": 18,
   "leagueRank": 46,
   "rating": 0.5,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.5,
   "playerId": "cef2997a-d41d-42b0-8a70-373738e0fe60"
  },
  {
   "name": "Alex Pond",
   "gender": "Female",
   "team": "License to Dill",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 22,
   "losses": 27,
   "pointsWon": 898,
   "totalPointsAgainst": 938,
   "mixedWins": 15,
   "mixedLosses": 13,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 9,
   "clutchLosses": 11,
   "winPct": 44.9,
   "diff": -40,
   "ppg": 18.3,
   "leagueRank": 48,
   "rating": 1.9,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.9,
   "playerId": "ca2c7d14-de39-45a1-805a-ff1ab5be31d9"
  },
  {
   "name": "Brian Cook",
   "gender": "Male",
   "team": "Balls of Fury",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 12,
   "losses": 15,
   "pointsWon": 504,
   "totalPointsAgainst": 499,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 44.4,
   "diff": 5,
   "ppg": 18.7,
   "leagueRank": 37,
   "rating": 0.7,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 1.4,
   "playerId": "85520ff7-80c8-4a80-8af0-93889a7a61e6"
  },
  {
   "name": "Nate Y",
   "gender": "Male",
   "team": "Picholas Cage",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 326,
   "totalPointsAgainst": 339,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 44.4,
   "diff": -13,
   "ppg": 18.1,
   "leagueRank": 50,
   "rating": -3.3,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.6,
   "playerId": "9d619008-c628-408e-8301-855b82ee4c6e"
  },
  {
   "name": "Gianna Medeiros",
   "gender": "Female",
   "team": "License to Dill",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 21,
   "losses": 27,
   "pointsWon": 898,
   "totalPointsAgainst": 909,
   "mixedWins": 9,
   "mixedLosses": 13,
   "genderWins": 12,
   "genderLosses": 14,
   "clutchWins": 6,
   "clutchLosses": 12,
   "winPct": 43.8,
   "diff": -11,
   "ppg": 18.7,
   "leagueRank": 32,
   "rating": 1.2,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.1,
   "playerId": "b63ec8b5-b659-4404-92b0-8e577c87534a"
  },
  {
   "name": "Justin Chung",
   "gender": "Male",
   "team": "Baggers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 17,
   "losses": 23,
   "pointsWon": 718,
   "totalPointsAgainst": 748,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 14,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 42.5,
   "diff": -30,
   "ppg": 18,
   "leagueRank": 49,
   "rating": -0.7,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.8,
   "playerId": "775b540e-c0e6-4810-9547-fcdfe94548c7"
  },
  {
   "name": "Victoria Young",
   "gender": "Female",
   "team": "Kitchen Nightmares",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 466,
   "totalPointsAgainst": 498,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 42.3,
   "diff": -32,
   "ppg": 17.9,
   "leagueRank": 47,
   "rating": 0.1,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.6,
   "playerId": "184907fa-5d07-4ab9-a1c5-f0007af00d59"
  },
  {
   "name": "Christina Vuong",
   "gender": "Female",
   "team": "License to Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 223,
   "totalPointsAgainst": 230,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "1c8ac03f-c618-46c4-bed2-c8391c4e1028",
   "winPct": 41.7,
   "diff": -7,
   "ppg": 18.6,
   "leagueRank": 71,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Elizabeth Krebs",
   "gender": "Female",
   "team": "Baggers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 206,
   "totalPointsAgainst": 235,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 41.7,
   "diff": -29,
   "ppg": 17.2,
   "leagueRank": 68,
   "rating": -0.9,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "d9e6d209-acce-4fc1-ad2b-1b944fd3e45c"
  },
  {
   "name": "Ryo Inkyo",
   "gender": "Male",
   "team": "License to Dill",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 552,
   "totalPointsAgainst": 551,
   "mixedWins": 5,
   "mixedLosses": 10,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 40,
   "diff": 1,
   "ppg": 18.4,
   "leagueRank": 41,
   "rating": -1.1,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "e0fdd367-8a48-44ae-a889-ca5cdffdd623"
  },
  {
   "name": "Tim Plunkett",
   "gender": "Male",
   "team": "Baggers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 14,
   "losses": 22,
   "pointsWon": 633,
   "totalPointsAgainst": 690,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 38.9,
   "diff": -57,
   "ppg": 17.6,
   "leagueRank": 52,
   "rating": -1.4,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "f2f802bc-e8dc-4229-ab6f-3e5372fb7761"
  },
  {
   "name": "Erin Hanson",
   "gender": "Female",
   "team": "Kitchen Nightmares",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 7,
   "losses": 12,
   "pointsWon": 332,
   "totalPointsAgainst": 377,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 36.8,
   "diff": -45,
   "ppg": 17.5,
   "leagueRank": 51,
   "rating": -1.4,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "76b1a759-e777-46d6-873a-a36d4df796b2"
  },
  {
   "name": "Gabby Frieder",
   "gender": "Female",
   "team": "Picholas Cage",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 109,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b3e8de81-d69a-4912-b366-f6b66ea6dd8e",
   "winPct": 33.3,
   "diff": -8,
   "ppg": 18.2,
   "leagueRank": 74,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Alex Ehrenman",
   "gender": "Female",
   "team": "License to Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 100,
   "totalPointsAgainst": 119,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "fb562cfa-a6fa-40f3-9c7e-e67f9a7925d1",
   "winPct": 33.3,
   "diff": -19,
   "ppg": 16.7,
   "leagueRank": 76,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Joe Arancio",
   "gender": "Male",
   "team": "License to Dill",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 6,
   "losses": 12,
   "pointsWon": 303,
   "totalPointsAgainst": 358,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -55,
   "ppg": 16.8,
   "leagueRank": 59,
   "rating": -3,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.8,
   "playerId": "75c46f4d-9fcc-4e7f-bd3a-581f167e64ad"
  },
  {
   "name": "Adam Shaw",
   "gender": "Male",
   "team": "Balls of Fury",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 9,
   "losses": 19,
   "pointsWon": 506,
   "totalPointsAgainst": 549,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 32.1,
   "diff": -43,
   "ppg": 18.1,
   "leagueRank": 53,
   "rating": -0.6,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.1,
   "playerId": "3d20f9f4-9428-430e-bb21-0c710b896c03"
  },
  {
   "name": "Julie Randall",
   "gender": "Female",
   "team": "License to Dill",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 12,
   "losses": 26,
   "pointsWon": 662,
   "totalPointsAgainst": 740,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 31.6,
   "diff": -78,
   "ppg": 17.4,
   "leagueRank": 55,
   "rating": -1.9,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5"
  },
  {
   "name": "Claire Nguyen",
   "gender": "Female",
   "team": "Baggers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 12,
   "losses": 26,
   "pointsWon": 676,
   "totalPointsAgainst": 755,
   "mixedWins": 6,
   "mixedLosses": 13,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 31.6,
   "diff": -79,
   "ppg": 17.8,
   "leagueRank": 54,
   "rating": -2.4,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3"
  },
  {
   "name": "Laura Amato",
   "gender": "Female",
   "team": "License to Dill",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 10,
   "losses": 22,
   "pointsWon": 557,
   "totalPointsAgainst": 628,
   "mixedWins": 6,
   "mixedLosses": 10,
   "genderWins": 4,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 31.3,
   "diff": -71,
   "ppg": 17.4,
   "leagueRank": 57,
   "rating": -2.5,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.8,
   "playerId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771"
  },
  {
   "name": "Brenton Pham",
   "gender": "Male",
   "team": "Baggers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 11,
   "losses": 25,
   "pointsWon": 626,
   "totalPointsAgainst": 714,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 30.6,
   "diff": -88,
   "ppg": 17.4,
   "leagueRank": 58,
   "rating": -2.1,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "8302852a-f3d0-449f-a45f-efa2757b56e0"
  },
  {
   "name": "Carolyn Shipe",
   "gender": "Female",
   "team": "Kitchen Nightmares",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 6,
   "losses": 14,
   "pointsWon": 334,
   "totalPointsAgainst": 408,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 2,
   "playerId": "6775ab12-38b5-4f41-a6c1-df35276b63c2",
   "winPct": 30,
   "diff": -74,
   "ppg": 16.7,
   "leagueRank": 60,
   "rating": -1.7,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Grady Craig",
   "gender": "Male",
   "team": "License to Dill",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 312,
   "totalPointsAgainst": 357,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 27.8,
   "diff": -45,
   "ppg": 17.3,
   "leagueRank": 61,
   "rating": -2.2,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.7,
   "playerId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "name": "Anil Rajpal",
   "gender": "Male",
   "team": "Baggers",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 7,
   "losses": 23,
   "pointsWon": 492,
   "totalPointsAgainst": 598,
   "mixedWins": 5,
   "mixedLosses": 10,
   "genderWins": 2,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 23.3,
   "diff": -106,
   "ppg": 16.4,
   "leagueRank": 66,
   "rating": -3.2,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.6,
   "playerId": "37323b1c-a567-46f2-9a10-8941d923697e"
  },
  {
   "name": "Nick Boyes",
   "gender": "Male",
   "team": "Kitchen Nightmares",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 7,
   "losses": 25,
   "pointsWon": 539,
   "totalPointsAgainst": 643,
   "mixedWins": 2,
   "mixedLosses": 14,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 21.9,
   "diff": -104,
   "ppg": 16.8,
   "leagueRank": 63,
   "rating": -2.7,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.3,
   "playerId": "eb0839fd-375d-4291-95f0-145106f0555f"
  },
  {
   "name": "Steven Garfinkel",
   "gender": "Male",
   "team": "Balls of Fury",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 5,
   "losses": 19,
   "pointsWon": 392,
   "totalPointsAgainst": 482,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 20.8,
   "diff": -90,
   "ppg": 16.3,
   "leagueRank": 69,
   "rating": -4.2,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.9,
   "playerId": "78c3e57f-d029-472e-a0d8-5d25ff0975c5"
  },
  {
   "name": "Taylor Johns",
   "gender": "Female",
   "team": "License to Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 112,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "7e92032d-7d47-485c-8641-ae8a7af4e3ac",
   "winPct": 16.7,
   "diff": -6,
   "ppg": 18.7,
   "leagueRank": 75,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Robert Courchain",
   "gender": "Male",
   "team": "Kitchen Nightmares",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 4,
   "losses": 20,
   "pointsWon": 400,
   "totalPointsAgainst": 481,
   "mixedWins": 1,
   "mixedLosses": 11,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 16.7,
   "diff": -81,
   "ppg": 16.7,
   "leagueRank": 67,
   "rating": -2.7,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "371bb742-9ea6-464a-8c27-df8469b90a62"
  },
  {
   "name": "Quynh Nguyen",
   "gender": "Female",
   "team": "Kitchen Nightmares",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 4,
   "losses": 22,
   "pointsWon": 382,
   "totalPointsAgainst": 534,
   "mixedWins": 1,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 15.4,
   "diff": -152,
   "ppg": 14.7,
   "leagueRank": 72,
   "rating": -4.9,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1"
  },
  {
   "name": "Meghan Plunkett",
   "gender": "Female",
   "team": "Kitchen Nightmares",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 5,
   "losses": 28,
   "pointsWon": 503,
   "totalPointsAgainst": 667,
   "mixedWins": 3,
   "mixedLosses": 14,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 15.2,
   "diff": -164,
   "ppg": 15.2,
   "leagueRank": 70,
   "rating": -4.2,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "5a6e7604-4d88-490b-b4da-b1cd33a17c27"
  }
 ],
 "teams": [
  {
   "name": "Balls of Fury",
   "w": 5,
   "l": 2,
   "pf": 4335,
   "pa": 4198,
   "gw": 121,
   "gl": 103,
   "diff": 137,
   "gameDiff": 18,
   "power": 0.6,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     58,
     54
    ],
    "male": [
     26,
     30
    ],
    "female": [
     37,
     19
    ]
   }
  },
  {
   "name": "Picholas Cage",
   "w": 4,
   "l": 3,
   "pf": 4325,
   "pa": 4166,
   "gw": 127,
   "gl": 97,
   "diff": 159,
   "gameDiff": 30,
   "power": 0.6,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     67,
     45
    ],
    "male": [
     35,
     21
    ],
    "female": [
     25,
     31
    ]
   }
  },
  {
   "name": "License to Dill",
   "w": 4,
   "l": 3,
   "pf": 4190,
   "pa": 4341,
   "gw": 101,
   "gl": 123,
   "diff": -151,
   "gameDiff": -22,
   "power": 0,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     48,
     64
    ],
    "male": [
     34,
     22
    ],
    "female": [
     19,
     37
    ]
   }
  },
  {
   "name": "Baggers",
   "w": 4,
   "l": 4,
   "pf": 4877,
   "pa": 4830,
   "gw": 129,
   "gl": 127,
   "diff": 47,
   "gameDiff": 2,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     67,
     61
    ],
    "male": [
     23,
     41
    ],
    "female": [
     39,
     25
    ]
   }
  },
  {
   "name": "Kitchen Nightmares",
   "w": 1,
   "l": 6,
   "pf": 4120,
   "pa": 4312,
   "gw": 98,
   "gl": 126,
   "diff": -192,
   "gameDiff": -28,
   "power": 0.1,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     48,
     64
    ],
    "male": [
     26,
     30
    ],
    "female": [
     24,
     32
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Julie Randall",
   "b": "Nikhil Sachdeva",
   "team": "License to Dill",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.9,
   "avgActual": 7.3,
   "avgExpected": 0.5,
   "aId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5",
   "bId": "aa811676-fda4-47ba-81a9-3a0feb35cc6a"
  },
  {
   "a": "Victoria Young",
   "b": "Ted Asavamongkolkul",
   "team": "Kitchen Nightmares",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.8,
   "avgActual": 4.8,
   "avgExpected": -0.8,
   "aId": "184907fa-5d07-4ab9-a1c5-f0007af00d59",
   "bId": "ee07033c-b5a8-4d28-8920-7873dc8ffac0"
  },
  {
   "a": "Conor Malloy",
   "b": "Micah Weaver",
   "team": "Picholas Cage",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.7,
   "avgActual": 5.7,
   "avgExpected": -0.6,
   "aId": "79791efb-c2d0-449d-8572-a99a1f2a5200",
   "bId": "cef2997a-d41d-42b0-8a70-373738e0fe60"
  },
  {
   "a": "Joshua Kim",
   "b": "Andrew Martin",
   "team": "License to Dill",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 5.7,
   "avgExpected": 2,
   "aId": "24c3c526-8dd1-4ed0-adcf-ca7857e8b0ec",
   "bId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "a": "Evelyn Geating",
   "b": "Gianna Medeiros",
   "team": "License to Dill",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 3.2,
   "avgExpected": 0,
   "aId": "798a21bd-83e7-42e9-bd86-c74448c7dada",
   "bId": "b63ec8b5-b659-4404-92b0-8e577c87534a"
  },
  {
   "a": "Brad De Jesus",
   "b": "Derek Lombardi",
   "team": "Balls of Fury",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 3.5,
   "avgExpected": 0.3,
   "aId": "0dcffbac-6931-400d-b652-41c2720e6311",
   "bId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72"
  },
  {
   "a": "Joseph Luka",
   "b": "John Sehi",
   "team": "Picholas Cage",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5,
   "avgExpected": 1.9,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "c5ea40be-2d6c-47ce-a2d1-dce40a3756a5"
  },
  {
   "a": "Laura Amato",
   "b": "Joe Arancio",
   "team": "License to Dill",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 0,
   "avgExpected": -2.6,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "75c46f4d-9fcc-4e7f-bd3a-581f167e64ad"
  },
  {
   "a": "Justin Chung",
   "b": "Cait Kearney",
   "team": "Baggers",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 1.5,
   "avgActual": 3.1,
   "avgExpected": 0.9,
   "aId": "775b540e-c0e6-4810-9547-fcdfe94548c7",
   "bId": "b104bb38-14f6-40b1-8666-faf327d5f415"
  },
  {
   "a": "Ross Cogan",
   "b": "Julia Manetta",
   "team": "Kitchen Nightmares",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 1.5,
   "avgActual": 3.5,
   "avgExpected": 1.4,
   "aId": "1b682816-9513-4797-b836-6279e1ffda38",
   "bId": "4977544e-0c7f-4151-815c-51f68473862f"
  },
  {
   "a": "Corey Neel",
   "b": "Bianca Previdi",
   "team": "Baggers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 4.8,
   "avgExpected": 1.9,
   "aId": "7dbbd17e-9bc8-440d-a09c-dcbe4da688bd",
   "bId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2"
  },
  {
   "a": "Carlos Lichty",
   "b": "Erin Hanson",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 3.3,
   "avgExpected": 0.4,
   "aId": "5c5c0d00-e20c-456e-b53e-890845310916",
   "bId": "76b1a759-e777-46d6-873a-a36d4df796b2"
  },
  {
   "a": "Bianca Previdi",
   "b": "Cait Kearney",
   "team": "Baggers",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 6.8,
   "avgExpected": 4.7,
   "aId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2",
   "bId": "b104bb38-14f6-40b1-8666-faf327d5f415"
  },
  {
   "a": "Eileen Zhang",
   "b": "Thuy Le",
   "team": "Balls of Fury",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6.2,
   "avgExpected": 4.4,
   "aId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Ross Cogan",
   "b": "Anthony Prusich",
   "team": "Kitchen Nightmares",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3.8,
   "avgExpected": 1.9,
   "aId": "1b682816-9513-4797-b836-6279e1ffda38",
   "bId": "41cd934f-66b0-4f22-b2e1-74955db922ce"
  },
  {
   "a": "Maggie Malloy",
   "b": "Donny Wong",
   "team": "Balls of Fury",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6.8,
   "avgExpected": 4.6,
   "aId": "c1251904-fef6-4eb5-9b49-06c8335e3546",
   "bId": "ea83bd99-bf9c-4d3a-8fc4-80d939f4c466"
  },
  {
   "a": "Brian Cook",
   "b": "Maggie Malloy",
   "team": "Balls of Fury",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 6.3,
   "avgExpected": 3.9,
   "aId": "85520ff7-80c8-4a80-8af0-93889a7a61e6",
   "bId": "c1251904-fef6-4eb5-9b49-06c8335e3546"
  },
  {
   "a": "Corey Neel",
   "b": "Brenton Pham",
   "team": "Baggers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 0,
   "avgExpected": -2.3,
   "aId": "7dbbd17e-9bc8-440d-a09c-dcbe4da688bd",
   "bId": "8302852a-f3d0-449f-a45f-efa2757b56e0"
  },
  {
   "a": "Corey Neel",
   "b": "Daniel Borgia",
   "team": "Baggers",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.4,
   "avgExpected": 3,
   "aId": "7dbbd17e-9bc8-440d-a09c-dcbe4da688bd",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Anthony Prusich",
   "b": "Sarina Manetta",
   "team": "Kitchen Nightmares",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2.2,
   "avgExpected": 0.5,
   "aId": "41cd934f-66b0-4f22-b2e1-74955db922ce",
   "bId": "55ccbdaa-8f11-4c08-abb5-6e71438471b1"
  },
  {
   "a": "Alex Pond",
   "b": "Andrew Martin",
   "team": "License to Dill",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.1,
   "avgExpected": 0.8,
   "aId": "ca2c7d14-de39-45a1-805a-ff1ab5be31d9",
   "bId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "a": "Claire Nguyen",
   "b": "Tim Plunkett",
   "team": "Baggers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -0.6,
   "avgExpected": -2.2,
   "aId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3",
   "bId": "f2f802bc-e8dc-4229-ab6f-3e5372fb7761"
  },
  {
   "a": "Julie Randall",
   "b": "Gianna Medeiros",
   "team": "License to Dill",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 0,
   "avgExpected": -1.5,
   "aId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5",
   "bId": "b63ec8b5-b659-4404-92b0-8e577c87534a"
  },
  {
   "a": "Eileen Zhang",
   "b": "Jordan Clever",
   "team": "Balls of Fury",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 6.8,
   "avgExpected": 5.1,
   "aId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a",
   "bId": "d64db065-87c9-4e7f-989b-6f0ec53240c9"
  },
  {
   "a": "Daniel Borgia",
   "b": "Tim Plunkett",
   "team": "Baggers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -1.8,
   "avgExpected": -3.2,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "f2f802bc-e8dc-4229-ab6f-3e5372fb7761"
  },
  {
   "a": "Adam Shaw",
   "b": "Paula Cuerquis",
   "team": "Balls of Fury",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0.8,
   "avgActual": -1,
   "avgExpected": -2.2,
   "aId": "3d20f9f4-9428-430e-bb21-0c710b896c03",
   "bId": "ac412cd9-bd0a-4f98-8253-9c8c12911465"
  },
  {
   "a": "Paula Cuerquis",
   "b": "Thuy Le",
   "team": "Balls of Fury",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 1.6,
   "avgExpected": 0.2,
   "aId": "ac412cd9-bd0a-4f98-8253-9c8c12911465",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Lisa Dinh",
   "b": "Joe Gronczewski",
   "team": "Picholas Cage",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.3,
   "avgExpected": 3.2,
   "aId": "aaf27c02-6d20-4a96-835c-3084d799ac0f",
   "bId": "f6eef486-8999-4247-a7d8-20251377021c"
  },
  {
   "a": "Maggie Malloy",
   "b": "Thuy Le",
   "team": "Balls of Fury",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 8,
   "avgExpected": 6.4,
   "aId": "c1251904-fef6-4eb5-9b49-06c8335e3546",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Nikhil Sachdeva",
   "b": "Grady Craig",
   "team": "License to Dill",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1.8,
   "avgExpected": 0.3,
   "aId": "aa811676-fda4-47ba-81a9-3a0feb35cc6a",
   "bId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Anil Rajpal",
   "team": "Baggers",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -0.1,
   "avgExpected": -1,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "37323b1c-a567-46f2-9a10-8941d923697e"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Bianca Previdi",
   "team": "Baggers",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 7.6,
   "avgExpected": 6.6,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2"
  },
  {
   "a": "Bianca Previdi",
   "b": "Christina Sheehan",
   "team": "Baggers",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.7,
   "avgExpected": 2.7,
   "aId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2",
   "bId": "ed037154-d16e-4bb2-a2d2-d485c6f5d870"
  },
  {
   "a": "Tim Manzi",
   "b": "Ryo Inkyo",
   "team": "License to Dill",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.7,
   "avgExpected": 4.2,
   "aId": "79832eb5-9a38-482c-a71e-7903fcb4c205",
   "bId": "e0fdd367-8a48-44ae-a889-ca5cdffdd623"
  },
  {
   "a": "Julia Manetta",
   "b": "Carolyn Shipe",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": -0.7,
   "avgExpected": -2,
   "aId": "4977544e-0c7f-4151-815c-51f68473862f",
   "bId": "6775ab12-38b5-4f41-a6c1-df35276b63c2"
  },
  {
   "a": "Ben Turchin",
   "b": "Andrew Martin",
   "team": "License to Dill",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "aed3d38c-77cb-48fa-ac41-3ff4b3664978",
   "bId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "a": "Claire Nguyen",
   "b": "Brenton Pham",
   "team": "Baggers",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -1.7,
   "avgExpected": -3,
   "aId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3",
   "bId": "8302852a-f3d0-449f-a45f-efa2757b56e0"
  },
  {
   "a": "Joseph Luka",
   "b": "Lisa Dinh",
   "team": "Picholas Cage",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0,
   "avgExpected": -1.4,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "aaf27c02-6d20-4a96-835c-3084d799ac0f"
  },
  {
   "a": "Caity Rietzen",
   "b": "John Sehi",
   "team": "Picholas Cage",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 0.9,
   "avgExpected": 0.1,
   "aId": "417f3210-fcc8-4e63-a512-9eb872adb4e5",
   "bId": "c5ea40be-2d6c-47ce-a2d1-dce40a3756a5"
  },
  {
   "a": "Julia Manetta",
   "b": "Sarina Manetta",
   "team": "Kitchen Nightmares",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 2.3,
   "aId": "4977544e-0c7f-4151-815c-51f68473862f",
   "bId": "55ccbdaa-8f11-4c08-abb5-6e71438471b1"
  },
  {
   "a": "Corey Neel",
   "b": "Christina Sheehan",
   "team": "Baggers",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.5,
   "aId": "7dbbd17e-9bc8-440d-a09c-dcbe4da688bd",
   "bId": "ed037154-d16e-4bb2-a2d2-d485c6f5d870"
  },
  {
   "a": "Sarina Manetta",
   "b": "Carlos Lichty",
   "team": "Kitchen Nightmares",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.4,
   "avgExpected": -0.4,
   "aId": "55ccbdaa-8f11-4c08-abb5-6e71438471b1",
   "bId": "5c5c0d00-e20c-456e-b53e-890845310916"
  },
  {
   "a": "Victoria Young",
   "b": "Quynh Nguyen",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -3,
   "avgExpected": -4.1,
   "aId": "184907fa-5d07-4ab9-a1c5-f0007af00d59",
   "bId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1"
  },
  {
   "a": "Daniel Borgia",
   "b": "Christina Sheehan",
   "team": "Baggers",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 0.4,
   "avgActual": 1.6,
   "avgExpected": 1.1,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "ed037154-d16e-4bb2-a2d2-d485c6f5d870"
  },
  {
   "a": "Daniel Borgia",
   "b": "Cait Kearney",
   "team": "Baggers",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 3.5,
   "avgExpected": 2.9,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "b104bb38-14f6-40b1-8666-faf327d5f415"
  },
  {
   "a": "Pamela Toy",
   "b": "Thuy Le",
   "team": "Balls of Fury",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 2.2,
   "avgExpected": 1.6,
   "aId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Brenton Pham",
   "team": "Baggers",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -2.2,
   "avgExpected": -2.9,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "8302852a-f3d0-449f-a45f-efa2757b56e0"
  },
  {
   "a": "Robert Courchain",
   "b": "Quynh Nguyen",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -6,
   "avgExpected": -6.9,
   "aId": "371bb742-9ea6-464a-8c27-df8469b90a62",
   "bId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1"
  },
  {
   "a": "Quynh Nguyen",
   "b": "Sarina Manetta",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": -1,
   "avgExpected": -1.9,
   "aId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
   "bId": "55ccbdaa-8f11-4c08-abb5-6e71438471b1"
  },
  {
   "a": "Laura Amato",
   "b": "Evelyn Geating",
   "team": "License to Dill",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -1.1,
   "avgExpected": -1.5,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "798a21bd-83e7-42e9-bd86-c74448c7dada"
  },
  {
   "a": "Paula Cuerquis",
   "b": "Zach Strickland",
   "team": "Balls of Fury",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -1.7,
   "avgExpected": -2.2,
   "aId": "ac412cd9-bd0a-4f98-8253-9c8c12911465",
   "bId": "e6deea54-c0bb-40c7-83d0-b65c6eb1fcb2"
  },
  {
   "a": "Brad De Jesus",
   "b": "Pamela Toy",
   "team": "Balls of Fury",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.3,
   "avgExpected": -0.2,
   "aId": "0dcffbac-6931-400d-b652-41c2720e6311",
   "bId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003"
  },
  {
   "a": "Bianca Previdi",
   "b": "Tim Plunkett",
   "team": "Baggers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.3,
   "avgExpected": 2.8,
   "aId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2",
   "bId": "f2f802bc-e8dc-4229-ab6f-3e5372fb7761"
  },
  {
   "a": "Brenton Pham",
   "b": "Tim Plunkett",
   "team": "Baggers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1,
   "avgExpected": -1.6,
   "aId": "8302852a-f3d0-449f-a45f-efa2757b56e0",
   "bId": "f2f802bc-e8dc-4229-ab6f-3e5372fb7761"
  },
  {
   "a": "Steven Garfinkel",
   "b": "Thuy Le",
   "team": "Balls of Fury",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -2.5,
   "avgExpected": -3.2,
   "aId": "78c3e57f-d029-472e-a0d8-5d25ff0975c5",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Victoria Young",
   "b": "Julia Manetta",
   "team": "Kitchen Nightmares",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.3,
   "avgExpected": -0.3,
   "aId": "184907fa-5d07-4ab9-a1c5-f0007af00d59",
   "bId": "4977544e-0c7f-4151-815c-51f68473862f"
  },
  {
   "a": "Anthony Prusich",
   "b": "Ted Asavamongkolkul",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.7,
   "aId": "41cd934f-66b0-4f22-b2e1-74955db922ce",
   "bId": "ee07033c-b5a8-4d28-8920-7873dc8ffac0"
  },
  {
   "a": "Laura Amato",
   "b": "Ryo Inkyo",
   "team": "License to Dill",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.3,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "e0fdd367-8a48-44ae-a889-ca5cdffdd623"
  },
  {
   "a": "Shania Bui",
   "b": "John Sehi",
   "team": "Picholas Cage",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3,
   "avgExpected": 2.7,
   "aId": "714331ee-d124-483d-a89e-11d1431a7fca",
   "bId": "c5ea40be-2d6c-47ce-a2d1-dce40a3756a5"
  },
  {
   "a": "Deborah Chapman",
   "b": "Lisa Dinh",
   "team": "Picholas Cage",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -0.3,
   "avgExpected": -0.7,
   "aId": "6c27f09f-99d8-46e0-bd7f-d50809759eff",
   "bId": "aaf27c02-6d20-4a96-835c-3084d799ac0f"
  },
  {
   "a": "Jonathan Macqueen",
   "b": "Joe Gronczewski",
   "team": "Picholas Cage",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 5.2,
   "avgExpected": 4.9,
   "aId": "9aa0ff6c-0210-4a91-885f-ae3d4813f1c3",
   "bId": "f6eef486-8999-4247-a7d8-20251377021c"
  },
  {
   "a": "Paula Cuerquis",
   "b": "Jordan Clever",
   "team": "Balls of Fury",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.4,
   "avgExpected": 3.2,
   "aId": "ac412cd9-bd0a-4f98-8253-9c8c12911465",
   "bId": "d64db065-87c9-4e7f-989b-6f0ec53240c9"
  },
  {
   "a": "Pamela Toy",
   "b": "Derek Lombardi",
   "team": "Balls of Fury",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 0,
   "avgExpected": -0.5,
   "aId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003",
   "bId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72"
  },
  {
   "a": "Justin Chung",
   "b": "Daniel Borgia",
   "team": "Baggers",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 0.2,
   "avgActual": -0.2,
   "avgExpected": -0.6,
   "aId": "775b540e-c0e6-4810-9547-fcdfe94548c7",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Claire Nguyen",
   "team": "Baggers",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -0.9,
   "avgExpected": -1.2,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3"
  },
  {
   "a": "Brian Cook",
   "b": "Jordan Clever",
   "team": "Balls of Fury",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 3.8,
   "avgExpected": 3.5,
   "aId": "85520ff7-80c8-4a80-8af0-93889a7a61e6",
   "bId": "d64db065-87c9-4e7f-989b-6f0ec53240c9"
  },
  {
   "a": "Eileen Zhang",
   "b": "Paula Cuerquis",
   "team": "Balls of Fury",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": 0.2,
   "avgActual": 1.2,
   "avgExpected": 0.9,
   "aId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a",
   "bId": "ac412cd9-bd0a-4f98-8253-9c8c12911465"
  },
  {
   "a": "Joshua Kim",
   "b": "Ben Turchin",
   "team": "License to Dill",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 0.3,
   "avgExpected": 0,
   "aId": "24c3c526-8dd1-4ed0-adcf-ca7857e8b0ec",
   "bId": "aed3d38c-77cb-48fa-ac41-3ff4b3664978"
  },
  {
   "a": "Mike Dochney",
   "b": "Nick Boyes",
   "team": "Kitchen Nightmares",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0.6,
   "avgExpected": 0.2,
   "aId": "aa63d50a-88e6-4de7-9592-1546f21d8648",
   "bId": "eb0839fd-375d-4291-95f0-145106f0555f"
  },
  {
   "a": "Micah Weaver",
   "b": "Minjel Shah",
   "team": "Picholas Cage",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -2.5,
   "avgExpected": -2.8,
   "aId": "cef2997a-d41d-42b0-8a70-373738e0fe60",
   "bId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Justin Chung",
   "team": "Baggers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.6,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "775b540e-c0e6-4810-9547-fcdfe94548c7"
  },
  {
   "a": "Shania Bui",
   "b": "Micah Weaver",
   "team": "Picholas Cage",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0.3,
   "avgExpected": 0.1,
   "aId": "714331ee-d124-483d-a89e-11d1431a7fca",
   "bId": "cef2997a-d41d-42b0-8a70-373738e0fe60"
  },
  {
   "a": "Jonathan Macqueen",
   "b": "Lisa Dinh",
   "team": "Picholas Cage",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4,
   "avgExpected": 3.7,
   "aId": "9aa0ff6c-0210-4a91-885f-ae3d4813f1c3",
   "bId": "aaf27c02-6d20-4a96-835c-3084d799ac0f"
  },
  {
   "a": "Deborah Chapman",
   "b": "Shania Bui",
   "team": "Picholas Cage",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.4,
   "avgExpected": 2.3,
   "aId": "6c27f09f-99d8-46e0-bd7f-d50809759eff",
   "bId": "714331ee-d124-483d-a89e-11d1431a7fca"
  },
  {
   "a": "Caity Rietzen",
   "b": "Micah Weaver",
   "team": "Picholas Cage",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -2.5,
   "avgExpected": -2.7,
   "aId": "417f3210-fcc8-4e63-a512-9eb872adb4e5",
   "bId": "cef2997a-d41d-42b0-8a70-373738e0fe60"
  },
  {
   "a": "Caity Rietzen",
   "b": "Conor Malloy",
   "team": "Picholas Cage",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -2.3,
   "avgExpected": -2.5,
   "aId": "417f3210-fcc8-4e63-a512-9eb872adb4e5",
   "bId": "79791efb-c2d0-449d-8572-a99a1f2a5200"
  },
  {
   "a": "Justin Chung",
   "b": "Christina Sheehan",
   "team": "Baggers",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.6,
   "avgExpected": -1.8,
   "aId": "775b540e-c0e6-4810-9547-fcdfe94548c7",
   "bId": "ed037154-d16e-4bb2-a2d2-d485c6f5d870"
  },
  {
   "a": "Julia Manetta",
   "b": "Erin Hanson",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.2,
   "aId": "4977544e-0c7f-4151-815c-51f68473862f",
   "bId": "76b1a759-e777-46d6-873a-a36d4df796b2"
  },
  {
   "a": "Adam Shaw",
   "b": "Jordan Clever",
   "team": "Balls of Fury",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.4,
   "avgExpected": 2.2,
   "aId": "3d20f9f4-9428-430e-bb21-0c710b896c03",
   "bId": "d64db065-87c9-4e7f-989b-6f0ec53240c9"
  },
  {
   "a": "Corey Neel",
   "b": "Cait Kearney",
   "team": "Baggers",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.1,
   "avgActual": 2.1,
   "avgExpected": 1.9,
   "aId": "7dbbd17e-9bc8-440d-a09c-dcbe4da688bd",
   "bId": "b104bb38-14f6-40b1-8666-faf327d5f415"
  },
  {
   "a": "Joseph Luka",
   "b": "Minjel Shah",
   "team": "Picholas Cage",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4.3,
   "avgExpected": 4,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "a": "Meghan Plunkett",
   "b": "Nick Boyes",
   "team": "Kitchen Nightmares",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -6.7,
   "avgExpected": -7,
   "aId": "5a6e7604-4d88-490b-b4da-b1cd33a17c27",
   "bId": "eb0839fd-375d-4291-95f0-145106f0555f"
  },
  {
   "a": "Caity Rietzen",
   "b": "Jonathan Macqueen",
   "team": "Picholas Cage",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -1.9,
   "aId": "417f3210-fcc8-4e63-a512-9eb872adb4e5",
   "bId": "9aa0ff6c-0210-4a91-885f-ae3d4813f1c3"
  },
  {
   "a": "Evelyn Geating",
   "b": "Nikhil Sachdeva",
   "team": "License to Dill",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 1.9,
   "aId": "798a21bd-83e7-42e9-bd86-c74448c7dada",
   "bId": "aa811676-fda4-47ba-81a9-3a0feb35cc6a"
  },
  {
   "a": "Evelyn Geating",
   "b": "Julie Randall",
   "team": "License to Dill",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -2.2,
   "avgExpected": -2.3,
   "aId": "798a21bd-83e7-42e9-bd86-c74448c7dada",
   "bId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5"
  },
  {
   "a": "Conor Malloy",
   "b": "Minjel Shah",
   "team": "Picholas Cage",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 1.9,
   "aId": "79791efb-c2d0-449d-8572-a99a1f2a5200",
   "bId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "a": "Pamela Toy",
   "b": "Eileen Zhang",
   "team": "Balls of Fury",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.2,
   "avgExpected": 1.2,
   "aId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003",
   "bId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a"
  },
  {
   "a": "Cait Kearney",
   "b": "Christina Sheehan",
   "team": "Baggers",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 0,
   "avgActual": 1.5,
   "avgExpected": 1.5,
   "aId": "b104bb38-14f6-40b1-8666-faf327d5f415",
   "bId": "ed037154-d16e-4bb2-a2d2-d485c6f5d870"
  },
  {
   "a": "Meghan Plunkett",
   "b": "Mike Dochney",
   "team": "Kitchen Nightmares",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0,
   "avgActual": -1.4,
   "avgExpected": -1.5,
   "aId": "5a6e7604-4d88-490b-b4da-b1cd33a17c27",
   "bId": "aa63d50a-88e6-4de7-9592-1546f21d8648"
  },
  {
   "a": "Gianna Medeiros",
   "b": "Alex Pond",
   "team": "License to Dill",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": 0,
   "avgActual": -0.8,
   "avgExpected": -0.8,
   "aId": "b63ec8b5-b659-4404-92b0-8e577c87534a",
   "bId": "ca2c7d14-de39-45a1-805a-ff1ab5be31d9"
  },
  {
   "a": "Shania Bui",
   "b": "Minjel Shah",
   "team": "Picholas Cage",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.5,
   "aId": "714331ee-d124-483d-a89e-11d1431a7fca",
   "bId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "a": "John Sehi",
   "b": "Minjel Shah",
   "team": "Picholas Cage",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3,
   "avgExpected": 3.2,
   "aId": "c5ea40be-2d6c-47ce-a2d1-dce40a3756a5",
   "bId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "a": "Eileen Zhang",
   "b": "Zach Strickland",
   "team": "Balls of Fury",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.5,
   "aId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a",
   "bId": "e6deea54-c0bb-40c7-83d0-b65c6eb1fcb2"
  },
  {
   "a": "Jordan Clever",
   "b": "Zach Strickland",
   "team": "Balls of Fury",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 3.3,
   "avgExpected": 3.5,
   "aId": "d64db065-87c9-4e7f-989b-6f0ec53240c9",
   "bId": "e6deea54-c0bb-40c7-83d0-b65c6eb1fcb2"
  },
  {
   "a": "Evelyn Geating",
   "b": "Andrew Martin",
   "team": "License to Dill",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.7,
   "avgExpected": 0.8,
   "aId": "798a21bd-83e7-42e9-bd86-c74448c7dada",
   "bId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "a": "Carlos Lichty",
   "b": "Nick Boyes",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.4,
   "aId": "5c5c0d00-e20c-456e-b53e-890845310916",
   "bId": "eb0839fd-375d-4291-95f0-145106f0555f"
  },
  {
   "a": "Lisa Dinh",
   "b": "Thuy Le",
   "team": "Picholas Cage",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.6,
   "aId": "aaf27c02-6d20-4a96-835c-3084d799ac0f",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Joe Arancio",
   "b": "Evelyn Geating",
   "team": "License to Dill",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2,
   "avgExpected": -1.6,
   "aId": "75c46f4d-9fcc-4e7f-bd3a-581f167e64ad",
   "bId": "798a21bd-83e7-42e9-bd86-c74448c7dada"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Christina Sheehan",
   "team": "Baggers",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.2,
   "avgActual": 1.6,
   "avgExpected": 1.9,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "ed037154-d16e-4bb2-a2d2-d485c6f5d870"
  },
  {
   "a": "Anil Rajpal",
   "b": "Kevin Chang",
   "team": "Baggers",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -3.2,
   "avgExpected": -2.9,
   "aId": "37323b1c-a567-46f2-9a10-8941d923697e",
   "bId": "8d18b5f7-dfba-4159-b614-0ae432db99c5"
  },
  {
   "a": "Ben Turchin",
   "b": "Gianna Medeiros",
   "team": "License to Dill",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.2,
   "avgActual": 0.4,
   "avgExpected": 0.7,
   "aId": "aed3d38c-77cb-48fa-ac41-3ff4b3664978",
   "bId": "b63ec8b5-b659-4404-92b0-8e577c87534a"
  },
  {
   "a": "Steven Garfinkel",
   "b": "Donny Wong",
   "team": "Balls of Fury",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.2,
   "avgActual": -4.1,
   "avgExpected": -3.8,
   "aId": "78c3e57f-d029-472e-a0d8-5d25ff0975c5",
   "bId": "ea83bd99-bf9c-4d3a-8fc4-80d939f4c466"
  },
  {
   "a": "Anil Rajpal",
   "b": "Brenton Pham",
   "team": "Baggers",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.2,
   "avgActual": -5.5,
   "avgExpected": -5.1,
   "aId": "37323b1c-a567-46f2-9a10-8941d923697e",
   "bId": "8302852a-f3d0-449f-a45f-efa2757b56e0"
  },
  {
   "a": "Quynh Nguyen",
   "b": "Nick Boyes",
   "team": "Kitchen Nightmares",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -6.7,
   "avgExpected": -6.3,
   "aId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
   "bId": "eb0839fd-375d-4291-95f0-145106f0555f"
  },
  {
   "a": "Sarina Manetta",
   "b": "Nick Boyes",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2,
   "avgExpected": -1.6,
   "aId": "55ccbdaa-8f11-4c08-abb5-6e71438471b1",
   "bId": "eb0839fd-375d-4291-95f0-145106f0555f"
  },
  {
   "a": "Caity Rietzen",
   "b": "Shania Bui",
   "team": "Picholas Cage",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -0.4,
   "avgExpected": 0.2,
   "aId": "417f3210-fcc8-4e63-a512-9eb872adb4e5",
   "bId": "714331ee-d124-483d-a89e-11d1431a7fca"
  },
  {
   "a": "Claire Nguyen",
   "b": "Kevin Chang",
   "team": "Baggers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.6,
   "aId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3",
   "bId": "8d18b5f7-dfba-4159-b614-0ae432db99c5"
  },
  {
   "a": "Ben Turchin",
   "b": "Alex Pond",
   "team": "License to Dill",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.6,
   "aId": "aed3d38c-77cb-48fa-ac41-3ff4b3664978",
   "bId": "ca2c7d14-de39-45a1-805a-ff1ab5be31d9"
  },
  {
   "a": "Joseph Luka",
   "b": "Joe Gronczewski",
   "team": "Picholas Cage",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 5.6,
   "avgExpected": 6.2,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "f6eef486-8999-4247-a7d8-20251377021c"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Tim Plunkett",
   "team": "Baggers",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -1.1,
   "avgExpected": -0.6,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "f2f802bc-e8dc-4229-ab6f-3e5372fb7761"
  },
  {
   "a": "Anil Rajpal",
   "b": "Claire Nguyen",
   "team": "Baggers",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -4.8,
   "avgExpected": -4.1,
   "aId": "37323b1c-a567-46f2-9a10-8941d923697e",
   "bId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3"
  },
  {
   "a": "Pamela Toy",
   "b": "Donny Wong",
   "team": "Balls of Fury",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -2,
   "avgExpected": -1.4,
   "aId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003",
   "bId": "ea83bd99-bf9c-4d3a-8fc4-80d939f4c466"
  },
  {
   "a": "Adam Shaw",
   "b": "Eileen Zhang",
   "team": "Balls of Fury",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2.7,
   "avgExpected": -1.8,
   "aId": "3d20f9f4-9428-430e-bb21-0c710b896c03",
   "bId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a"
  },
  {
   "a": "Julie Randall",
   "b": "Grady Craig",
   "team": "License to Dill",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -2.8,
   "avgExpected": -2.1,
   "aId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5",
   "bId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "a": "Laura Amato",
   "b": "Nikhil Sachdeva",
   "team": "License to Dill",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.7,
   "avgExpected": 0.2,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "aa811676-fda4-47ba-81a9-3a0feb35cc6a"
  },
  {
   "a": "Conor Malloy",
   "b": "John Sehi",
   "team": "Picholas Cage",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -0.4,
   "avgExpected": 0.3,
   "aId": "79791efb-c2d0-449d-8572-a99a1f2a5200",
   "bId": "c5ea40be-2d6c-47ce-a2d1-dce40a3756a5"
  },
  {
   "a": "Joe Arancio",
   "b": "Ryo Inkyo",
   "team": "License to Dill",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3.7,
   "avgExpected": -2.6,
   "aId": "75c46f4d-9fcc-4e7f-bd3a-581f167e64ad",
   "bId": "e0fdd367-8a48-44ae-a889-ca5cdffdd623"
  },
  {
   "a": "Robert Courchain",
   "b": "Erin Hanson",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -4.3,
   "avgExpected": -3.1,
   "aId": "371bb742-9ea6-464a-8c27-df8469b90a62",
   "bId": "76b1a759-e777-46d6-873a-a36d4df796b2"
  },
  {
   "a": "Justin Chung",
   "b": "Bianca Previdi",
   "team": "Baggers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -0.6,
   "aId": "775b540e-c0e6-4810-9547-fcdfe94548c7",
   "bId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2"
  },
  {
   "a": "Tim Manzi",
   "b": "Ben Turchin",
   "team": "License to Dill",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -3,
   "aId": "79832eb5-9a38-482c-a71e-7903fcb4c205",
   "bId": "aed3d38c-77cb-48fa-ac41-3ff4b3664978"
  },
  {
   "a": "Quynh Nguyen",
   "b": "Meghan Plunkett",
   "team": "Kitchen Nightmares",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -10,
   "avgExpected": -9.1,
   "aId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
   "bId": "5a6e7604-4d88-490b-b4da-b1cd33a17c27"
  },
  {
   "a": "Joshua Kim",
   "b": "Gianna Medeiros",
   "team": "License to Dill",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3,
   "avgExpected": -1.8,
   "aId": "24c3c526-8dd1-4ed0-adcf-ca7857e8b0ec",
   "bId": "b63ec8b5-b659-4404-92b0-8e577c87534a"
  },
  {
   "a": "Kevin Chang",
   "b": "Tim Plunkett",
   "team": "Baggers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1.3,
   "avgExpected": 0,
   "aId": "8d18b5f7-dfba-4159-b614-0ae432db99c5",
   "bId": "f2f802bc-e8dc-4229-ab6f-3e5372fb7761"
  },
  {
   "a": "Bianca Previdi",
   "b": "Claire Nguyen",
   "team": "Baggers",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -1.9,
   "avgExpected": -0.9,
   "aId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2",
   "bId": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3"
  },
  {
   "a": "Brian Cook",
   "b": "Eileen Zhang",
   "team": "Balls of Fury",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.9,
   "aId": "85520ff7-80c8-4a80-8af0-93889a7a61e6",
   "bId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a"
  },
  {
   "a": "Gianna Medeiros",
   "b": "Andrew Martin",
   "team": "License to Dill",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -0.3,
   "avgExpected": 0.9,
   "aId": "b63ec8b5-b659-4404-92b0-8e577c87534a",
   "bId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "a": "Deborah Chapman",
   "b": "Joe Gronczewski",
   "team": "Picholas Cage",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.7,
   "avgActual": 4.3,
   "avgExpected": 5.7,
   "aId": "6c27f09f-99d8-46e0-bd7f-d50809759eff",
   "bId": "f6eef486-8999-4247-a7d8-20251377021c"
  },
  {
   "a": "Paula Cuerquis",
   "b": "Maggie Malloy",
   "team": "Balls of Fury",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0,
   "avgExpected": 1.3,
   "aId": "ac412cd9-bd0a-4f98-8253-9c8c12911465",
   "bId": "c1251904-fef6-4eb5-9b49-06c8335e3546"
  },
  {
   "a": "Julia Manetta",
   "b": "Carlos Lichty",
   "team": "Kitchen Nightmares",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.6,
   "avgExpected": 0.7,
   "aId": "4977544e-0c7f-4151-815c-51f68473862f",
   "bId": "5c5c0d00-e20c-456e-b53e-890845310916"
  },
  {
   "a": "Anthony Prusich",
   "b": "Carlos Lichty",
   "team": "Kitchen Nightmares",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -3.2,
   "avgExpected": -2,
   "aId": "41cd934f-66b0-4f22-b2e1-74955db922ce",
   "bId": "5c5c0d00-e20c-456e-b53e-890845310916"
  },
  {
   "a": "Derek Lombardi",
   "b": "Thuy Le",
   "team": "Balls of Fury",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0,
   "avgExpected": 1.5,
   "aId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Caity Rietzen",
   "b": "Minjel Shah",
   "team": "Picholas Cage",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2,
   "avgExpected": -0.4,
   "aId": "417f3210-fcc8-4e63-a512-9eb872adb4e5",
   "bId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "a": "John Sehi",
   "b": "Micah Weaver",
   "team": "Picholas Cage",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": -0.9,
   "avgActual": -0.9,
   "avgExpected": 0.4,
   "aId": "c5ea40be-2d6c-47ce-a2d1-dce40a3756a5",
   "bId": "cef2997a-d41d-42b0-8a70-373738e0fe60"
  },
  {
   "a": "Robert Courchain",
   "b": "Mike Dochney",
   "team": "Kitchen Nightmares",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -1.3,
   "avgExpected": 0.1,
   "aId": "371bb742-9ea6-464a-8c27-df8469b90a62",
   "bId": "aa63d50a-88e6-4de7-9592-1546f21d8648"
  },
  {
   "a": "Sarina Manetta",
   "b": "Meghan Plunkett",
   "team": "Kitchen Nightmares",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -4.8,
   "avgExpected": -3.3,
   "aId": "55ccbdaa-8f11-4c08-abb5-6e71438471b1",
   "bId": "5a6e7604-4d88-490b-b4da-b1cd33a17c27"
  },
  {
   "a": "Evelyn Geating",
   "b": "Alex Pond",
   "team": "License to Dill",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -2.8,
   "avgExpected": -1.1,
   "aId": "798a21bd-83e7-42e9-bd86-c74448c7dada",
   "bId": "ca2c7d14-de39-45a1-805a-ff1ab5be31d9"
  },
  {
   "a": "Joseph Luka",
   "b": "Deborah Chapman",
   "team": "Picholas Cage",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 0,
   "avgExpected": 1.5,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "6c27f09f-99d8-46e0-bd7f-d50809759eff"
  },
  {
   "a": "Bianca Previdi",
   "b": "Brenton Pham",
   "team": "Baggers",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1,
   "avgActual": -2,
   "avgExpected": -0.4,
   "aId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2",
   "bId": "8302852a-f3d0-449f-a45f-efa2757b56e0"
  },
  {
   "a": "Maggie Malloy",
   "b": "Derek Lombardi",
   "team": "Balls of Fury",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": -0.2,
   "avgExpected": 1.8,
   "aId": "c1251904-fef6-4eb5-9b49-06c8335e3546",
   "bId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72"
  },
  {
   "a": "Laura Amato",
   "b": "Grady Craig",
   "team": "License to Dill",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.7,
   "avgExpected": -2.4,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "d97c3295-9f2a-479e-be7f-d55442287ea7"
  },
  {
   "a": "Julie Randall",
   "b": "Andrew Martin",
   "team": "License to Dill",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -0.7,
   "avgExpected": 1.4,
   "aId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5",
   "bId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "a": "Brad De Jesus",
   "b": "Thuy Le",
   "team": "Balls of Fury",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.1,
   "avgActual": 0.6,
   "avgExpected": 2.3,
   "aId": "0dcffbac-6931-400d-b652-41c2720e6311",
   "bId": "f89874de-ee0c-486f-af7d-32e4aed59df8"
  },
  {
   "a": "Zach Strickland",
   "b": "Derek Lombardi",
   "team": "Balls of Fury",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -4,
   "avgExpected": -1.4,
   "aId": "e6deea54-c0bb-40c7-83d0-b65c6eb1fcb2",
   "bId": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72"
  },
  {
   "a": "Anthony Prusich",
   "b": "Julia Manetta",
   "team": "Kitchen Nightmares",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -1,
   "avgExpected": 1,
   "aId": "41cd934f-66b0-4f22-b2e1-74955db922ce",
   "bId": "4977544e-0c7f-4151-815c-51f68473862f"
  },
  {
   "a": "Nikhil Sachdeva",
   "b": "Ben Turchin",
   "team": "License to Dill",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -0.4,
   "avgExpected": 1.6,
   "aId": "aa811676-fda4-47ba-81a9-3a0feb35cc6a",
   "bId": "aed3d38c-77cb-48fa-ac41-3ff4b3664978"
  },
  {
   "a": "Nate Y",
   "b": "Lisa Dinh",
   "team": "Picholas Cage",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -4.3,
   "avgExpected": -1.4,
   "aId": "9d619008-c628-408e-8301-855b82ee4c6e",
   "bId": "aaf27c02-6d20-4a96-835c-3084d799ac0f"
  },
  {
   "a": "Laura Amato",
   "b": "Julie Randall",
   "team": "License to Dill",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -1.2,
   "avgActual": -5,
   "avgExpected": -3.1,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5"
  },
  {
   "a": "Ryo Inkyo",
   "b": "Andrew Martin",
   "team": "License to Dill",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -1,
   "avgExpected": 1.9,
   "aId": "e0fdd367-8a48-44ae-a889-ca5cdffdd623",
   "bId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "a": "Ross Cogan",
   "b": "Carlos Lichty",
   "team": "Kitchen Nightmares",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -0.2,
   "avgExpected": 2.4,
   "aId": "1b682816-9513-4797-b836-6279e1ffda38",
   "bId": "5c5c0d00-e20c-456e-b53e-890845310916"
  },
  {
   "a": "Pamela Toy",
   "b": "Maggie Malloy",
   "team": "Balls of Fury",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -0.9,
   "avgExpected": 1.4,
   "aId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003",
   "bId": "c1251904-fef6-4eb5-9b49-06c8335e3546"
  },
  {
   "a": "Bianca Previdi",
   "b": "Daniel Borgia",
   "team": "Baggers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -0.4,
   "avgExpected": 2.1,
   "aId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Joshua Kim",
   "b": "Alex Pond",
   "team": "License to Dill",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -3.5,
   "avgExpected": -1.2,
   "aId": "24c3c526-8dd1-4ed0-adcf-ca7857e8b0ec",
   "bId": "ca2c7d14-de39-45a1-805a-ff1ab5be31d9"
  },
  {
   "a": "Lisa Dinh",
   "b": "Minjel Shah",
   "team": "Picholas Cage",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -2.7,
   "avgExpected": 0,
   "aId": "aaf27c02-6d20-4a96-835c-3084d799ac0f",
   "bId": "e9933537-c449-42e8-b742-0fd7e4ea8619"
  },
  {
   "a": "Jonathan Macqueen",
   "b": "Micah Weaver",
   "team": "Picholas Cage",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -4.6,
   "avgExpected": -1.7,
   "aId": "9aa0ff6c-0210-4a91-885f-ae3d4813f1c3",
   "bId": "cef2997a-d41d-42b0-8a70-373738e0fe60"
  },
  {
   "a": "Brad De Jesus",
   "b": "Adam Shaw",
   "team": "Balls of Fury",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -6,
   "avgExpected": -2.3,
   "aId": "0dcffbac-6931-400d-b652-41c2720e6311",
   "bId": "3d20f9f4-9428-430e-bb21-0c710b896c03"
  },
  {
   "a": "Brian Cook",
   "b": "Paula Cuerquis",
   "team": "Balls of Fury",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.7,
   "avgActual": -4.8,
   "avgExpected": -1.8,
   "aId": "85520ff7-80c8-4a80-8af0-93889a7a61e6",
   "bId": "ac412cd9-bd0a-4f98-8253-9c8c12911465"
  },
  {
   "a": "Pamela Toy",
   "b": "Steven Garfinkel",
   "team": "Balls of Fury",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.8,
   "avgActual": -6,
   "avgExpected": -2.9,
   "aId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003",
   "bId": "78c3e57f-d029-472e-a0d8-5d25ff0975c5"
  },
  {
   "a": "Quynh Nguyen",
   "b": "Mike Dochney",
   "team": "Kitchen Nightmares",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -7,
   "avgExpected": -3.1,
   "aId": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
   "bId": "aa63d50a-88e6-4de7-9592-1546f21d8648"
  },
  {
   "a": "Justin Chung",
   "b": "Corey Neel",
   "team": "Baggers",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2,
   "avgActual": -5.7,
   "avgExpected": -1.7,
   "aId": "775b540e-c0e6-4810-9547-fcdfe94548c7",
   "bId": "7dbbd17e-9bc8-440d-a09c-dcbe4da688bd"
  },
  {
   "a": "Ross Cogan",
   "b": "Ted Asavamongkolkul",
   "team": "Kitchen Nightmares",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -2.5,
   "avgExpected": 1.9,
   "aId": "1b682816-9513-4797-b836-6279e1ffda38",
   "bId": "ee07033c-b5a8-4d28-8920-7873dc8ffac0"
  },
  {
   "a": "Mira Sigal-Feldman",
   "b": "Cait Kearney",
   "team": "Baggers",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.7,
   "avgActual": -2.7,
   "avgExpected": 2.6,
   "aId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
   "bId": "b104bb38-14f6-40b1-8666-faf327d5f415"
  },
  {
   "a": "Victoria Young",
   "b": "Erin Hanson",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.7,
   "avgActual": -8.7,
   "avgExpected": -2.3,
   "aId": "184907fa-5d07-4ab9-a1c5-f0007af00d59",
   "bId": "76b1a759-e777-46d6-873a-a36d4df796b2"
  },
  {
   "a": "Julia Manetta",
   "b": "Ted Asavamongkolkul",
   "team": "Kitchen Nightmares",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.9,
   "avgActual": -6.7,
   "avgExpected": 0.1,
   "aId": "4977544e-0c7f-4151-815c-51f68473862f",
   "bId": "ee07033c-b5a8-4d28-8920-7873dc8ffac0"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Picholas Cage",
   "away": "License to Dill",
   "time": "2026-06-17T19:30:00",
   "complete": true,
   "homePoints": 666,
   "awayPoints": 519,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Caity Rietzen",
      "John Sehi"
     ],
     "a": [
      "Julie Randall",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Shania Bui",
      "Micah Weaver"
     ],
     "a": [
      "Gianna Medeiros",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Deborah Chapman",
      "Conor Malloy"
     ],
     "a": [
      "Laura Amato",
      "Ryo Inkyo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Dinh",
      "Jonathan Macqueen"
     ],
     "a": [
      "Evelyn Geating",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shania Bui",
      "Deborah Chapman"
     ],
     "a": [
      "Julie Randall",
      "Evelyn Geating"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Caity Rietzen",
      "Minjel Shah"
     ],
     "a": [
      "Gianna Medeiros",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Sehi",
      "Micah Weaver"
     ],
     "a": [
      "Joshua Kim",
      "Andrew Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Conor Malloy",
      "Joe Gronczewski"
     ],
     "a": [
      "Nikhil Sachdeva",
      "Joe Arancio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shania Bui",
      "John Sehi"
     ],
     "a": [
      "Gianna Medeiros",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Caity Rietzen",
      "Micah Weaver"
     ],
     "a": [
      "Julie Randall",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Minjel Shah",
      "Joe Gronczewski"
     ],
     "a": [
      "Laura Amato",
      "Ryo Inkyo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lisa Dinh",
      "Jonathan Macqueen"
     ],
     "a": [
      "Evelyn Geating",
      "Joe Arancio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Shania Bui",
      "Minjel Shah"
     ],
     "a": [
      "Julie Randall",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Deborah Chapman",
      "Lisa Dinh"
     ],
     "a": [
      "Evelyn Geating",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Micah Weaver",
      "Conor Malloy"
     ],
     "a": [
      "Andrew Martin",
      "Ryo Inkyo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jonathan Macqueen",
      "Joe Gronczewski"
     ],
     "a": [
      "Nikhil Sachdeva",
      "Joe Arancio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Caity Rietzen",
      "Conor Malloy"
     ],
     "a": [
      "Gianna Medeiros",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Minjel Shah",
      "John Sehi"
     ],
     "a": [
      "Julie Randall",
      "Ryo Inkyo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Deborah Chapman",
      "Jonathan Macqueen"
     ],
     "a": [
      "Evelyn Geating",
      "Joe Arancio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lisa Dinh",
      "Joe Gronczewski"
     ],
     "a": [
      "Laura Amato",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Caity Rietzen",
      "Shania Bui"
     ],
     "a": [
      "Julie Randall",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Deborah Chapman",
      "Lisa Dinh"
     ],
     "a": [
      "Evelyn Geating",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Micah Weaver",
      "Jonathan Macqueen"
     ],
     "a": [
      "Joshua Kim",
      "Ryo Inkyo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "John Sehi",
      "Conor Malloy"
     ],
     "a": [
      "Andrew Martin",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shania Bui",
      "Micah Weaver"
     ],
     "a": [
      "Julie Randall",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Caity Rietzen",
      "John Sehi"
     ],
     "a": [
      "Gianna Medeiros",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Minjel Shah",
      "Conor Malloy"
     ],
     "a": [
      "Evelyn Geating",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Deborah Chapman",
      "Joe Gronczewski"
     ],
     "a": [
      "Laura Amato",
      "Joe Arancio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Caity Rietzen",
      "Minjel Shah"
     ],
     "a": [
      "Julie Randall",
      "Evelyn Geating"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shania Bui",
      "Lisa Dinh"
     ],
     "a": [
      "Gianna Medeiros",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Sehi",
      "Micah Weaver"
     ],
     "a": [
      "Joshua Kim",
      "Andrew Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Macqueen",
      "Joe Gronczewski"
     ],
     "a": [
      "Ryo Inkyo",
      "Joe Arancio"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Balls of Fury",
   "away": "Baggers",
   "time": "2026-06-17T19:30:00",
   "complete": true,
   "homePoints": 678,
   "awayPoints": 547,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Paula Cuerquis",
      "Jordan Clever"
     ],
     "a": [
      "Cait Kearney",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Eileen Zhang",
      "Zach Strickland"
     ],
     "a": [
      "Christina Sheehan",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Thuy Le",
      "Brian Cook"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pamela Toy",
      "Derek Lombardi"
     ],
     "a": [
      "Claire Nguyen",
      "Anil Rajpal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Paula Cuerquis",
      "Maggie Malloy"
     ],
     "a": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Eileen Zhang",
      "Pamela Toy"
     ],
     "a": [
      "Cait Kearney",
      "Elizabeth Krebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jordan Clever",
      "Zach Strickland"
     ],
     "a": [
      "Daniel Borgia",
      "Justin Chung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Derek Lombardi",
      "Brad De Jesus"
     ],
     "a": [
      "Tim Plunkett",
      "Kevin Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Eileen Zhang",
      "Jordan Clever"
     ],
     "a": [
      "Christina Sheehan",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Zach Strickland"
     ],
     "a": [
      "Cait Kearney",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Maggie Malloy",
      "Brian Cook"
     ],
     "a": [
      "Elizabeth Krebs",
      "Kevin Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Thuy Le",
      "Brad De Jesus"
     ],
     "a": [
      "Claire Nguyen",
      "Anil Rajpal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eileen Zhang",
      "Thuy Le"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Claire Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Maggie Malloy",
      "Pamela Toy"
     ],
     "a": [
      "Cait Kearney",
      "Elizabeth Krebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jordan Clever",
      "Brian Cook"
     ],
     "a": [
      "Daniel Borgia",
      "Tim Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Derek Lombardi",
      "Brad De Jesus"
     ],
     "a": [
      "Kevin Chang",
      "Anil Rajpal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Maggie Malloy",
      "Brian Cook"
     ],
     "a": [
      "Elizabeth Krebs",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Paula Cuerquis",
      "Zach Strickland"
     ],
     "a": [
      "Christina Sheehan",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Thuy Le",
      "Brad De Jesus"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Anil Rajpal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Pamela Toy",
      "Derek Lombardi"
     ],
     "a": [
      "Claire Nguyen",
      "Kevin Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ],
     "a": [
      "Christina Sheehan",
      "Cait Kearney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thuy Le",
      "Pamela Toy"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jordan Clever",
      "Brian Cook"
     ],
     "a": [
      "Daniel Borgia",
      "Tim Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zach Strickland",
      "Derek Lombardi"
     ],
     "a": [
      "Justin Chung",
      "Anil Rajpal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Paula Cuerquis",
      "Jordan Clever"
     ],
     "a": [
      "Christina Sheehan",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eileen Zhang",
      "Derek Lombardi"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maggie Malloy",
      "Zach Strickland"
     ],
     "a": [
      "Cait Kearney",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Brad De Jesus"
     ],
     "a": [
      "Elizabeth Krebs",
      "Kevin Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ],
     "a": [
      "Christina Sheehan",
      "Cait Kearney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maggie Malloy",
      "Thuy Le"
     ],
     "a": [
      "Elizabeth Krebs",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jordan Clever",
      "Zach Strickland"
     ],
     "a": [
      "Daniel Borgia",
      "Justin Chung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brian Cook",
      "Brad De Jesus"
     ],
     "a": [
      "Kevin Chang",
      "Anil Rajpal"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Baggers",
   "away": "Kitchen Nightmares",
   "time": "2026-06-24T19:30:00",
   "complete": true,
   "homePoints": 622,
   "awayPoints": 611,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christina Sheehan",
      "Daniel Borgia"
     ],
     "a": [
      "Sarina Manetta",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cait Kearney",
      "Justin Chung"
     ],
     "a": [
      "Meghan Plunkett",
      "Anthony Prusich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Corey Neel"
     ],
     "a": [
      "Julia Manetta",
      "Carlos Lichty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bianca Previdi",
      "Tim Plunkett"
     ],
     "a": [
      "Erin Hanson",
      "Robert Courchain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christina Sheehan",
      "Cait Kearney"
     ],
     "a": [
      "Sarina Manetta",
      "Julia Manetta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Bianca Previdi",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Meghan Plunkett",
      "Erin Hanson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Daniel Borgia",
      "Justin Chung"
     ],
     "a": [
      "Ross Cogan",
      "Anthony Prusich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Corey Neel",
      "Brenton Pham"
     ],
     "a": [
      "Robert Courchain",
      "Mike Dochney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christina Sheehan",
      "Daniel Borgia"
     ],
     "a": [
      "Julia Manetta",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Cait Kearney",
      "Justin Chung"
     ],
     "a": [
      "Sarina Manetta",
      "Anthony Prusich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Tim Plunkett"
     ],
     "a": [
      "Meghan Plunkett",
      "Mike Dochney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Brenton Pham"
     ],
     "a": [
      "Erin Hanson",
      "Carlos Lichty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Christina Sheehan",
      "Bianca Previdi"
     ],
     "a": [
      "Julia Manetta",
      "Erin Hanson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cait Kearney",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Sarina Manetta",
      "Meghan Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Justin Chung",
      "Corey Neel"
     ],
     "a": [
      "Anthony Prusich",
      "Carlos Lichty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tim Plunkett",
      "Brenton Pham"
     ],
     "a": [
      "Robert Courchain",
      "Mike Dochney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Daniel Borgia"
     ],
     "a": [
      "Julia Manetta",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christina Sheehan",
      "Corey Neel"
     ],
     "a": [
      "Sarina Manetta",
      "Carlos Lichty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cait Kearney",
      "Brenton Pham"
     ],
     "a": [
      "Meghan Plunkett",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Tim Plunkett"
     ],
     "a": [
      "Erin Hanson",
      "Mike Dochney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christina Sheehan",
      "Cait Kearney"
     ],
     "a": [
      "Sarina Manetta",
      "Julia Manetta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bianca Previdi",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Meghan Plunkett",
      "Erin Hanson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Daniel Borgia",
      "Corey Neel"
     ],
     "a": [
      "Anthony Prusich",
      "Robert Courchain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Justin Chung",
      "Tim Plunkett"
     ],
     "a": [
      "Ross Cogan",
      "Carlos Lichty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cait Kearney",
      "Daniel Borgia"
     ],
     "a": [
      "Sarina Manetta",
      "Anthony Prusich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christina Sheehan",
      "Justin Chung"
     ],
     "a": [
      "Meghan Plunkett",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Brenton Pham"
     ],
     "a": [
      "Julia Manetta",
      "Mike Dochney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mira Sigal-Feldman",
      "Corey Neel"
     ],
     "a": [
      "Erin Hanson",
      "Robert Courchain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christina Sheehan",
      "Bianca Previdi"
     ],
     "a": [
      "Sarina Manetta",
      "Meghan Plunkett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cait Kearney",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Julia Manetta",
      "Erin Hanson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Borgia",
      "Justin Chung"
     ],
     "a": [
      "Ross Cogan",
      "Anthony Prusich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tim Plunkett",
      "Brenton Pham"
     ],
     "a": [
      "Carlos Lichty",
      "Mike Dochney"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "License to Dill",
   "away": "Balls of Fury",
   "time": "2026-06-24T19:30:00",
   "complete": true,
   "homePoints": 629,
   "awayPoints": 578,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alex Pond",
      "Joshua Kim"
     ],
     "a": [
      "Eileen Zhang",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Andrew Martin"
     ],
     "a": [
      "Paula Cuerquis",
      "Adam Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Vuong",
      "Ben Turchin"
     ],
     "a": [
      "Maggie Malloy",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Ehrenman",
      "Tim Manzi"
     ],
     "a": [
      "Pamela Toy",
      "Donny Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Pond",
      "Gianna Medeiros"
     ],
     "a": [
      "Paula Cuerquis",
      "Maggie Malloy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Alex Ehrenman"
     ],
     "a": [
      "Eileen Zhang",
      "Thuy Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Joshua Kim",
      "Andrew Martin"
     ],
     "a": [
      "Adam Shaw",
      "Zach Strickland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tim Manzi",
      "Ryo Inkyo"
     ],
     "a": [
      "Derek Lombardi",
      "Steven Garfinkel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Joshua Kim"
     ],
     "a": [
      "Paula Cuerquis",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Pond",
      "Andrew Martin"
     ],
     "a": [
      "Eileen Zhang",
      "Adam Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Gianna Medeiros",
      "Ben Turchin"
     ],
     "a": [
      "Thuy Le",
      "Steven Garfinkel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christina Vuong",
      "Ryo Inkyo"
     ],
     "a": [
      "Pamela Toy",
      "Donny Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Evelyn Geating",
      "Christina Vuong"
     ],
     "a": [
      "Maggie Malloy",
      "Pamela Toy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gianna Medeiros",
      "Alex Ehrenman"
     ],
     "a": [
      "Eileen Zhang",
      "Thuy Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Joshua Kim",
      "Ben Turchin"
     ],
     "a": [
      "Adam Shaw",
      "Derek Lombardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tim Manzi",
      "Ryo Inkyo"
     ],
     "a": [
      "Steven Garfinkel",
      "Donny Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gianna Medeiros",
      "Ben Turchin"
     ],
     "a": [
      "Thuy Le",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Pond",
      "Andrew Martin"
     ],
     "a": [
      "Paula Cuerquis",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christina Vuong",
      "Ryo Inkyo"
     ],
     "a": [
      "Maggie Malloy",
      "Donny Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Ehrenman",
      "Tim Manzi"
     ],
     "a": [
      "Pamela Toy",
      "Steven Garfinkel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alex Pond",
      "Evelyn Geating"
     ],
     "a": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christina Vuong",
      "Alex Ehrenman"
     ],
     "a": [
      "Maggie Malloy",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joshua Kim",
      "Ben Turchin"
     ],
     "a": [
      "Adam Shaw",
      "Derek Lombardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrew Martin",
      "Tim Manzi"
     ],
     "a": [
      "Zach Strickland",
      "Donny Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Pond",
      "Joshua Kim"
     ],
     "a": [
      "Paula Cuerquis",
      "Adam Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Tim Manzi"
     ],
     "a": [
      "Maggie Malloy",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gianna Medeiros",
      "Andrew Martin"
     ],
     "a": [
      "Eileen Zhang",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alex Ehrenman",
      "Ryo Inkyo"
     ],
     "a": [
      "Thuy Le",
      "Steven Garfinkel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Pond",
      "Evelyn Geating"
     ],
     "a": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gianna Medeiros",
      "Christina Vuong"
     ],
     "a": [
      "Thuy Le",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joshua Kim",
      "Andrew Martin"
     ],
     "a": [
      "Adam Shaw",
      "Zach Strickland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ben Turchin",
      "Ryo Inkyo"
     ],
     "a": [
      "Steven Garfinkel",
      "Donny Wong"
     ]
    }
   ],
   "subs": [
    "Christina Vuong",
    "Alex Ehrenman"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Kitchen Nightmares",
   "away": "Balls of Fury",
   "time": "2026-07-01T19:30:00",
   "complete": true,
   "homePoints": 567,
   "awayPoints": 617,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Ross Cogan"
     ],
     "a": [
      "Paula Cuerquis",
      "Jordan Clever"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Victoria Young",
      "Anthony Prusich"
     ],
     "a": [
      "Eileen Zhang",
      "Adam Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Carolyn Shipe",
      "Nick Boyes"
     ],
     "a": [
      "Pamela Toy",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Erin Hanson",
      "Carlos Lichty"
     ],
     "a": [
      "Thuy Le",
      "Brad De Jesus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Julia Manetta",
      "Victoria Young"
     ],
     "a": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Carolyn Shipe",
      "Erin Hanson"
     ],
     "a": [
      "Thuy Le",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ross Cogan",
      "Anthony Prusich"
     ],
     "a": [
      "Jordan Clever",
      "Zach Strickland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ted Asavamongkolkul",
      "Nick Boyes"
     ],
     "a": [
      "Adam Shaw",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Victoria Young",
      "Anthony Prusich"
     ],
     "a": [
      "Thuy Le",
      "Jordan Clever"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Carolyn Shipe",
      "Ross Cogan"
     ],
     "a": [
      "Paula Cuerquis",
      "Adam Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Eileen Zhang",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Erin Hanson",
      "Carlos Lichty"
     ],
     "a": [
      "Pamela Toy",
      "Brad De Jesus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Victoria Young",
      "Erin Hanson"
     ],
     "a": [
      "Paula Cuerquis",
      "Thuy Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Julia Manetta",
      "Carolyn Shipe"
     ],
     "a": [
      "Eileen Zhang",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ross Cogan",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Jordan Clever",
      "Adam Shaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carlos Lichty",
      "Nick Boyes"
     ],
     "a": [
      "Zach Strickland",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julia Manetta",
      "Anthony Prusich"
     ],
     "a": [
      "Paula Cuerquis",
      "Adam Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Victoria Young",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Thuy Le",
      "Jordan Clever"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carolyn Shipe",
      "Carlos Lichty"
     ],
     "a": [
      "Eileen Zhang",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Erin Hanson",
      "Nick Boyes"
     ],
     "a": [
      "Pamela Toy",
      "Brad De Jesus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Victoria Young"
     ],
     "a": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carolyn Shipe",
      "Erin Hanson"
     ],
     "a": [
      "Thuy Le",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ross Cogan",
      "Anthony Prusich"
     ],
     "a": [
      "Jordan Clever",
      "Adam Shaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carlos Lichty",
      "Nick Boyes"
     ],
     "a": [
      "Zach Strickland",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Ross Cogan"
     ],
     "a": [
      "Paula Cuerquis",
      "Jordan Clever"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carolyn Shipe",
      "Anthony Prusich"
     ],
     "a": [
      "Thuy Le",
      "Adam Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Victoria Young",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Eileen Zhang",
      "Brad De Jesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Erin Hanson",
      "Nick Boyes"
     ],
     "a": [
      "Pamela Toy",
      "Zach Strickland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Victoria Young",
      "Erin Hanson"
     ],
     "a": [
      "Paula Cuerquis",
      "Thuy Le"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Julia Manetta",
      "Carolyn Shipe"
     ],
     "a": [
      "Eileen Zhang",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Anthony Prusich",
      "Carlos Lichty"
     ],
     "a": [
      "Jordan Clever",
      "Zach Strickland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ross Cogan",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Adam Shaw",
      "Brad De Jesus"
     ]
    }
   ],
   "subs": [
    "Carolyn Shipe"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Baggers",
   "away": "Picholas Cage",
   "time": "2026-07-01T19:30:00",
   "complete": true,
   "homePoints": 610,
   "awayPoints": 613,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cait Kearney",
      "Corey Neel"
     ],
     "a": [
      "Shania Bui",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Sheehan",
      "Justin Chung"
     ],
     "a": [
      "Caity Rietzen",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Brenton Pham"
     ],
     "a": [
      "Minjel Shah",
      "Joseph Luka"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Claire Nguyen",
      "Kevin Chang"
     ],
     "a": [
      "Lisa Dinh",
      "Nate Y"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cait Kearney",
      "Bianca Previdi"
     ],
     "a": [
      "Caity Rietzen",
      "Minjel Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christina Sheehan",
      "Claire Nguyen"
     ],
     "a": [
      "Shania Bui",
      "Deborah Chapman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Corey Neel",
      "Justin Chung"
     ],
     "a": [
      "John Sehi",
      "Micah Weaver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kevin Chang",
      "Anil Rajpal"
     ],
     "a": [
      "Joseph Luka",
      "Christopher Moscony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Christina Sheehan",
      "Corey Neel"
     ],
     "a": [
      "Caity Rietzen",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cait Kearney",
      "Justin Chung"
     ],
     "a": [
      "Shania Bui",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bianca Previdi",
      "Brenton Pham"
     ],
     "a": [
      "Deborah Chapman",
      "Christopher Moscony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mira Sigal-Feldman",
      "Anil Rajpal"
     ],
     "a": [
      "Lisa Dinh",
      "Nate Y"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Minjel Shah",
      "Lisa Dinh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Claire Nguyen"
     ],
     "a": [
      "Shania Bui",
      "Deborah Chapman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Corey Neel",
      "Brenton Pham"
     ],
     "a": [
      "John Sehi",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kevin Chang",
      "Anil Rajpal"
     ],
     "a": [
      "Christopher Moscony",
      "Nate Y"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bianca Previdi",
      "Brenton Pham"
     ],
     "a": [
      "Deborah Chapman",
      "Joseph Luka"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Cait Kearney",
      "Justin Chung"
     ],
     "a": [
      "Caity Rietzen",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mira Sigal-Feldman",
      "Anil Rajpal"
     ],
     "a": [
      "Minjel Shah",
      "Nate Y"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Kevin Chang"
     ],
     "a": [
      "Lisa Dinh",
      "Christopher Moscony"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cait Kearney",
      "Christina Sheehan"
     ],
     "a": [
      "Caity Rietzen",
      "Shania Bui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mira Sigal-Feldman",
      "Claire Nguyen"
     ],
     "a": [
      "Minjel Shah",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Corey Neel",
      "Brenton Pham"
     ],
     "a": [
      "John Sehi",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Justin Chung",
      "Kevin Chang"
     ],
     "a": [
      "Micah Weaver",
      "Nate Y"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cait Kearney",
      "Corey Neel"
     ],
     "a": [
      "Caity Rietzen",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christina Sheehan",
      "Kevin Chang"
     ],
     "a": [
      "Minjel Shah",
      "Joseph Luka"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Justin Chung"
     ],
     "a": [
      "Shania Bui",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Anil Rajpal"
     ],
     "a": [
      "Deborah Chapman",
      "Christopher Moscony"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cait Kearney",
      "Christina Sheehan"
     ],
     "a": [
      "Caity Rietzen",
      "Shania Bui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bianca Previdi",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Deborah Chapman",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Corey Neel",
      "Justin Chung"
     ],
     "a": [
      "John Sehi",
      "Micah Weaver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Brenton Pham",
      "Anil Rajpal"
     ],
     "a": [
      "Christopher Moscony",
      "Nate Y"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Kitchen Nightmares",
   "away": "License to Dill",
   "time": "2026-07-08T19:30:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 605,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sarina Manetta",
      "Anthony Prusich"
     ],
     "a": [
      "Gianna Medeiros",
      "Tim Manzi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Alex Pond",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Meghan Plunkett",
      "Nick Boyes"
     ],
     "a": [
      "Evelyn Geating",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Erin Hanson",
      "Robert Courchain"
     ],
     "a": [
      "Laura Amato",
      "Joe Arancio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarina Manetta",
      "Victoria Young"
     ],
     "a": [
      "Alex Pond",
      "Evelyn Geating"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Erin Hanson"
     ],
     "a": [
      "Gianna Medeiros",
      "Julie Randall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anthony Prusich",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Ben Turchin",
      "Tim Manzi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robert Courchain",
      "Mike Dochney"
     ],
     "a": [
      "Nikhil Sachdeva",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Anthony Prusich"
     ],
     "a": [
      "Alex Pond",
      "Tim Manzi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarina Manetta",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Gianna Medeiros",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Victoria Young",
      "Nick Boyes"
     ],
     "a": [
      "Julie Randall",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Meghan Plunkett",
      "Mike Dochney"
     ],
     "a": [
      "Laura Amato",
      "Joe Arancio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Meghan Plunkett"
     ],
     "a": [
      "Evelyn Geating",
      "Laura Amato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Victoria Young",
      "Erin Hanson"
     ],
     "a": [
      "Gianna Medeiros",
      "Julie Randall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anthony Prusich",
      "Nick Boyes"
     ],
     "a": [
      "Ben Turchin",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Robert Courchain",
      "Mike Dochney"
     ],
     "a": [
      "Grady Craig",
      "Joe Arancio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Victoria Young",
      "Nick Boyes"
     ],
     "a": [
      "Julie Randall",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarina Manetta",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Alex Pond",
      "Tim Manzi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Meghan Plunkett",
      "Mike Dochney"
     ],
     "a": [
      "Evelyn Geating",
      "Joe Arancio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Julia Manetta",
      "Robert Courchain"
     ],
     "a": [
      "Laura Amato",
      "Grady Craig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sarina Manetta",
      "Julia Manetta"
     ],
     "a": [
      "Alex Pond",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Meghan Plunkett",
      "Victoria Young"
     ],
     "a": [
      "Evelyn Geating",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Anthony Prusich",
      "Nick Boyes"
     ],
     "a": [
      "Ben Turchin",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ted Asavamongkolkul",
      "Robert Courchain"
     ],
     "a": [
      "Tim Manzi",
      "Joe Arancio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarina Manetta",
      "Anthony Prusich"
     ],
     "a": [
      "Alex Pond",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Julia Manetta",
      "Robert Courchain"
     ],
     "a": [
      "Evelyn Geating",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Victoria Young",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Gianna Medeiros",
      "Tim Manzi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Meghan Plunkett",
      "Mike Dochney"
     ],
     "a": [
      "Julie Randall",
      "Grady Craig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sarina Manetta",
      "Julia Manetta"
     ],
     "a": [
      "Alex Pond",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Victoria Young",
      "Meghan Plunkett"
     ],
     "a": [
      "Julie Randall",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anthony Prusich",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Ben Turchin",
      "Tim Manzi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nick Boyes",
      "Mike Dochney"
     ],
     "a": [
      "Grady Craig",
      "Joe Arancio"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Balls of Fury",
   "away": "Picholas Cage",
   "time": "2026-07-08T19:30:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 616,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Paula Cuerquis",
      "Jordan Clever"
     ],
     "a": [
      "Minjel Shah",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eileen Zhang",
      "Adam Shaw"
     ],
     "a": [
      "Shania Bui",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Maggie Malloy",
      "Brad De Jesus"
     ],
     "a": [
      "Gabby Frieder",
      "Conor Malloy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Steven Garfinkel"
     ],
     "a": [
      "Deborah Chapman",
      "Nate Y"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Thuy Le"
     ],
     "a": [
      "Shania Bui",
      "Gabby Frieder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eileen Zhang",
      "Pamela Toy"
     ],
     "a": [
      "Minjel Shah",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jordan Clever",
      "Adam Shaw"
     ],
     "a": [
      "John Sehi",
      "Micah Weaver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Steven Garfinkel",
      "Donny Wong"
     ],
     "a": [
      "Conor Malloy",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eileen Zhang",
      "Jordan Clever"
     ],
     "a": [
      "Shania Bui",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Paula Cuerquis",
      "Adam Shaw"
     ],
     "a": [
      "Minjel Shah",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Thuy Le",
      "Brad De Jesus"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Maggie Malloy",
      "Donny Wong"
     ],
     "a": [
      "Deborah Chapman",
      "Nate Y"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eileen Zhang",
      "Maggie Malloy"
     ],
     "a": [
      "Gabby Frieder",
      "Deborah Chapman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thuy Le",
      "Pamela Toy"
     ],
     "a": [
      "Minjel Shah",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jordan Clever",
      "Brad De Jesus"
     ],
     "a": [
      "John Sehi",
      "Conor Malloy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steven Garfinkel",
      "Donny Wong"
     ],
     "a": [
      "Jonathan Macqueen",
      "Nate Y"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Thuy Le",
      "Brad De Jesus"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Conor Malloy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Adam Shaw"
     ],
     "a": [
      "Shania Bui",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Maggie Malloy",
      "Donny Wong"
     ],
     "a": [
      "Gabby Frieder",
      "Nate Y"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Steven Garfinkel"
     ],
     "a": [
      "Deborah Chapman",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ],
     "a": [
      "Shania Bui",
      "Minjel Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maggie Malloy",
      "Pamela Toy"
     ],
     "a": [
      "Gabby Frieder",
      "Deborah Chapman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jordan Clever",
      "Brad De Jesus"
     ],
     "a": [
      "John Sehi",
      "Conor Malloy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Adam Shaw",
      "Steven Garfinkel"
     ],
     "a": [
      "Micah Weaver",
      "Nate Y"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Paula Cuerquis",
      "Jordan Clever"
     ],
     "a": [
      "Shania Bui",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eileen Zhang",
      "Steven Garfinkel"
     ],
     "a": [
      "Gabby Frieder",
      "Conor Malloy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thuy Le",
      "Adam Shaw"
     ],
     "a": [
      "Minjel Shah",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Donny Wong"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ],
     "a": [
      "Shania Bui",
      "Minjel Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thuy Le",
      "Maggie Malloy"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Deborah Chapman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jordan Clever",
      "Adam Shaw"
     ],
     "a": [
      "John Sehi",
      "Micah Weaver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brad De Jesus",
      "Donny Wong"
     ],
     "a": [
      "Jonathan Macqueen",
      "Nate Y"
     ]
    }
   ],
   "subs": [
    "Mira Sigal-Feldman",
    "Gabby Frieder"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Picholas Cage",
   "away": "Kitchen Nightmares",
   "time": "2026-07-15T19:30:00",
   "complete": true,
   "homePoints": 613,
   "awayPoints": 548,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Caity Rietzen",
      "John Sehi"
     ],
     "a": [
      "Sarina Manetta",
      "Carlos Lichty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Thuy Le",
      "Conor Malloy"
     ],
     "a": [
      "Julia Manetta",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Deborah Chapman",
      "Joseph Luka"
     ],
     "a": [
      "Victoria Young",
      "Ted Asavamongkolkul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lisa Dinh",
      "Jonathan Macqueen"
     ],
     "a": [
      "Quynh Nguyen",
      "Robert Courchain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Caity Rietzen",
      "Minjel Shah"
     ],
     "a": [
      "Julia Manetta",
      "Victoria Young"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thuy Le",
      "Lisa Dinh"
     ],
     "a": [
      "Sarina Manetta",
      "Meghan Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "John Sehi",
      "Conor Malloy"
     ],
     "a": [
      "Ross Cogan",
      "Carlos Lichty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jonathan Macqueen",
      "Joe Gronczewski"
     ],
     "a": [
      "Ted Asavamongkolkul",
      "Nick Boyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Thuy Le",
      "John Sehi"
     ],
     "a": [
      "Julia Manetta",
      "Carlos Lichty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Caity Rietzen",
      "Conor Malloy"
     ],
     "a": [
      "Sarina Manetta",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Minjel Shah",
      "Joseph Luka"
     ],
     "a": [
      "Meghan Plunkett",
      "Nick Boyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Deborah Chapman",
      "Joe Gronczewski"
     ],
     "a": [
      "Quynh Nguyen",
      "Robert Courchain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thuy Le",
      "Deborah Chapman"
     ],
     "a": [
      "Victoria Young",
      "Quynh Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Minjel Shah",
      "Lisa Dinh"
     ],
     "a": [
      "Sarina Manetta",
      "Meghan Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "John Sehi",
      "Joseph Luka"
     ],
     "a": [
      "Ross Cogan",
      "Ted Asavamongkolkul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jonathan Macqueen",
      "Joe Gronczewski"
     ],
     "a": [
      "Nick Boyes",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Minjel Shah",
      "Joseph Luka"
     ],
     "a": [
      "Meghan Plunkett",
      "Ted Asavamongkolkul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Caity Rietzen",
      "Conor Malloy"
     ],
     "a": [
      "Julia Manetta",
      "Carlos Lichty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Deborah Chapman",
      "Joe Gronczewski"
     ],
     "a": [
      "Victoria Young",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lisa Dinh",
      "Jonathan Macqueen"
     ],
     "a": [
      "Quynh Nguyen",
      "Nick Boyes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Caity Rietzen",
      "Thuy Le"
     ],
     "a": [
      "Julia Manetta",
      "Sarina Manetta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Deborah Chapman",
      "Lisa Dinh"
     ],
     "a": [
      "Victoria Young",
      "Quynh Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "John Sehi",
      "Joseph Luka"
     ],
     "a": [
      "Ross Cogan",
      "Ted Asavamongkolkul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Conor Malloy",
      "Jonathan Macqueen"
     ],
     "a": [
      "Carlos Lichty",
      "Robert Courchain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Caity Rietzen",
      "John Sehi"
     ],
     "a": [
      "Julia Manetta",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thuy Le",
      "Jonathan Macqueen"
     ],
     "a": [
      "Victoria Young",
      "Ted Asavamongkolkul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Minjel Shah",
      "Conor Malloy"
     ],
     "a": [
      "Sarina Manetta",
      "Carlos Lichty"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lisa Dinh",
      "Joe Gronczewski"
     ],
     "a": [
      "Meghan Plunkett",
      "Nick Boyes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Caity Rietzen",
      "Thuy Le"
     ],
     "a": [
      "Julia Manetta",
      "Sarina Manetta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Minjel Shah",
      "Deborah Chapman"
     ],
     "a": [
      "Meghan Plunkett",
      "Quynh Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "John Sehi",
      "Conor Malloy"
     ],
     "a": [
      "Ross Cogan",
      "Carlos Lichty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joseph Luka",
      "Joe Gronczewski"
     ],
     "a": [
      "Nick Boyes",
      "Robert Courchain"
     ]
    }
   ],
   "subs": [
    "Thuy Le"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "License to Dill",
   "away": "Baggers",
   "time": "2026-07-15T19:30:00",
   "complete": true,
   "homePoints": 634,
   "awayPoints": 607,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Pond",
      "Joshua Kim"
     ],
     "a": [
      "Christina Sheehan",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Ben Turchin"
     ],
     "a": [
      "Bianca Previdi",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Julie Randall",
      "Andrew Martin"
     ],
     "a": [
      "Claire Nguyen",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Amato",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Brenton Pham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Julie Randall"
     ],
     "a": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alex Pond",
      "Gianna Medeiros"
     ],
     "a": [
      "Bianca Previdi",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joshua Kim",
      "Ben Turchin"
     ],
     "a": [
      "Daniel Borgia",
      "Justin Chung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrew Martin",
      "Ryo Inkyo"
     ],
     "a": [
      "Brenton Pham",
      "Anil Rajpal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Joshua Kim"
     ],
     "a": [
      "Bianca Previdi",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alex Pond",
      "Ben Turchin"
     ],
     "a": [
      "Christina Sheehan",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gianna Medeiros",
      "Ryo Inkyo"
     ],
     "a": [
      "Claire Nguyen",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Amato",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Anil Rajpal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Gianna Medeiros"
     ],
     "a": [
      "Christina Sheehan",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Julie Randall",
      "Laura Amato"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ben Turchin",
      "Andrew Martin"
     ],
     "a": [
      "Justin Chung",
      "Tim Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nikhil Sachdeva",
      "Ryo Inkyo"
     ],
     "a": [
      "Brenton Pham",
      "Anil Rajpal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Pond",
      "Andrew Martin"
     ],
     "a": [
      "Bianca Previdi",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gianna Medeiros",
      "Joshua Kim"
     ],
     "a": [
      "Christina Sheehan",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Julie Randall",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Anil Rajpal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Amato",
      "Ryo Inkyo"
     ],
     "a": [
      "Claire Nguyen",
      "Brenton Pham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alex Pond",
      "Evelyn Geating"
     ],
     "a": [
      "Christina Sheehan",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Julie Randall",
      "Laura Amato"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ben Turchin",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Daniel Borgia",
      "Tim Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joshua Kim",
      "Andrew Martin"
     ],
     "a": [
      "Justin Chung",
      "Brenton Pham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Ben Turchin"
     ],
     "a": [
      "Christina Sheehan",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Alex Pond",
      "Joshua Kim"
     ],
     "a": [
      "Bianca Previdi",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gianna Medeiros",
      "Andrew Martin"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Brenton Pham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Julie Randall",
      "Ryo Inkyo"
     ],
     "a": [
      "Claire Nguyen",
      "Anil Rajpal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Pond",
      "Gianna Medeiros"
     ],
     "a": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Laura Amato"
     ],
     "a": [
      "Bianca Previdi",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Joshua Kim",
      "Ben Turchin"
     ],
     "a": [
      "Daniel Borgia",
      "Justin Chung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nikhil Sachdeva",
      "Ryo Inkyo"
     ],
     "a": [
      "Tim Plunkett",
      "Anil Rajpal"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Baggers",
   "away": "Balls of Fury",
   "time": "2026-07-22T19:30:00",
   "complete": true,
   "homePoints": 644,
   "awayPoints": 569,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christina Sheehan",
      "Daniel Borgia"
     ],
     "a": [
      "Eileen Zhang",
      "Brian Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bianca Previdi",
      "Corey Neel"
     ],
     "a": [
      "Paula Cuerquis",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mira Sigal-Feldman",
      "Justin Chung"
     ],
     "a": [
      "Maggie Malloy",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Tim Plunkett"
     ],
     "a": [
      "Pamela Toy",
      "Donny Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Sheehan",
      "Cait Kearney"
     ],
     "a": [
      "Paula Cuerquis",
      "Maggie Malloy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bianca Previdi",
      "Claire Nguyen"
     ],
     "a": [
      "Eileen Zhang",
      "Thuy Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Daniel Borgia",
      "Corey Neel"
     ],
     "a": [
      "Zach Strickland",
      "Brian Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tim Plunkett",
      "Brenton Pham"
     ],
     "a": [
      "Derek Lombardi",
      "Steven Garfinkel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Bianca Previdi",
      "Daniel Borgia"
     ],
     "a": [
      "Paula Cuerquis",
      "Brian Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christina Sheehan",
      "Corey Neel"
     ],
     "a": [
      "Eileen Zhang",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cait Kearney",
      "Justin Chung"
     ],
     "a": [
      "Thuy Le",
      "Steven Garfinkel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mira Sigal-Feldman",
      "Brenton Pham"
     ],
     "a": [
      "Pamela Toy",
      "Donny Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Bianca Previdi",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Maggie Malloy",
      "Pamela Toy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cait Kearney",
      "Claire Nguyen"
     ],
     "a": [
      "Eileen Zhang",
      "Thuy Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Daniel Borgia",
      "Justin Chung"
     ],
     "a": [
      "Zach Strickland",
      "Derek Lombardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tim Plunkett",
      "Brenton Pham"
     ],
     "a": [
      "Steven Garfinkel",
      "Donny Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cait Kearney",
      "Justin Chung"
     ],
     "a": [
      "Thuy Le",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christina Sheehan",
      "Corey Neel"
     ],
     "a": [
      "Paula Cuerquis",
      "Brian Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Brenton Pham"
     ],
     "a": [
      "Maggie Malloy",
      "Donny Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Claire Nguyen",
      "Tim Plunkett"
     ],
     "a": [
      "Pamela Toy",
      "Steven Garfinkel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christina Sheehan",
      "Bianca Previdi"
     ],
     "a": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mira Sigal-Feldman",
      "Claire Nguyen"
     ],
     "a": [
      "Maggie Malloy",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Daniel Borgia",
      "Justin Chung"
     ],
     "a": [
      "Zach Strickland",
      "Derek Lombardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Corey Neel",
      "Tim Plunkett"
     ],
     "a": [
      "Brian Cook",
      "Donny Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christina Sheehan",
      "Daniel Borgia"
     ],
     "a": [
      "Paula Cuerquis",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Tim Plunkett"
     ],
     "a": [
      "Maggie Malloy",
      "Derek Lombardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cait Kearney",
      "Corey Neel"
     ],
     "a": [
      "Eileen Zhang",
      "Brian Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Brenton Pham"
     ],
     "a": [
      "Thuy Le",
      "Steven Garfinkel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christina Sheehan",
      "Bianca Previdi"
     ],
     "a": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cait Kearney",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Thuy Le",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Borgia",
      "Corey Neel"
     ],
     "a": [
      "Zach Strickland",
      "Brian Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Justin Chung",
      "Brenton Pham"
     ],
     "a": [
      "Steven Garfinkel",
      "Donny Wong"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "License to Dill",
   "away": "Picholas Cage",
   "time": "2026-07-22T19:30:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 637,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Pond",
      "Ben Turchin"
     ],
     "a": [
      "Shania Bui",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gianna Medeiros",
      "Andrew Martin"
     ],
     "a": [
      "Caity Rietzen",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Julie Randall",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Christina Vuong",
      "Conor Malloy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Johns",
      "Ryo Inkyo"
     ],
     "a": [
      "Lisa Dinh",
      "Joe Gronczewski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alex Pond",
      "Evelyn Geating"
     ],
     "a": [
      "Caity Rietzen",
      "Christina Vuong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gianna Medeiros",
      "Taylor Johns"
     ],
     "a": [
      "Shania Bui",
      "Deborah Chapman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ben Turchin",
      "Andrew Martin"
     ],
     "a": [
      "Micah Weaver",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ryo Inkyo",
      "Grady Craig"
     ],
     "a": [
      "Conor Malloy",
      "Joseph Luka"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gianna Medeiros",
      "Ben Turchin"
     ],
     "a": [
      "Caity Rietzen",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Alex Pond",
      "Andrew Martin"
     ],
     "a": [
      "Shania Bui",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Evelyn Geating",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Deborah Chapman",
      "Joseph Luka"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Julie Randall",
      "Grady Craig"
     ],
     "a": [
      "Lisa Dinh",
      "Joe Gronczewski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gianna Medeiros",
      "Julie Randall"
     ],
     "a": [
      "Christina Vuong",
      "Lisa Dinh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Evelyn Geating",
      "Taylor Johns"
     ],
     "a": [
      "Shania Bui",
      "Deborah Chapman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ben Turchin",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Micah Weaver",
      "Conor Malloy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ryo Inkyo",
      "Grady Craig"
     ],
     "a": [
      "Joseph Luka",
      "Joe Gronczewski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Evelyn Geating",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Deborah Chapman",
      "Conor Malloy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Pond",
      "Andrew Martin"
     ],
     "a": [
      "Caity Rietzen",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Julie Randall",
      "Grady Craig"
     ],
     "a": [
      "Christina Vuong",
      "Joe Gronczewski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taylor Johns",
      "Ryo Inkyo"
     ],
     "a": [
      "Lisa Dinh",
      "Joseph Luka"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Alex Pond",
      "Gianna Medeiros"
     ],
     "a": [
      "Caity Rietzen",
      "Shania Bui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julie Randall",
      "Taylor Johns"
     ],
     "a": [
      "Christina Vuong",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ben Turchin",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Micah Weaver",
      "Conor Malloy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrew Martin",
      "Ryo Inkyo"
     ],
     "a": [
      "Jonathan Macqueen",
      "Joe Gronczewski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Pond",
      "Ben Turchin"
     ],
     "a": [
      "Caity Rietzen",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gianna Medeiros",
      "Ryo Inkyo"
     ],
     "a": [
      "Christina Vuong",
      "Conor Malloy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Andrew Martin"
     ],
     "a": [
      "Shania Bui",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Johns",
      "Grady Craig"
     ],
     "a": [
      "Deborah Chapman",
      "Joseph Luka"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alex Pond",
      "Gianna Medeiros"
     ],
     "a": [
      "Caity Rietzen",
      "Shania Bui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Evelyn Geating",
      "Julie Randall"
     ],
     "a": [
      "Deborah Chapman",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ben Turchin",
      "Andrew Martin"
     ],
     "a": [
      "Micah Weaver",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nikhil Sachdeva",
      "Grady Craig"
     ],
     "a": [
      "Joseph Luka",
      "Joe Gronczewski"
     ]
    }
   ],
   "subs": [
    "Christina Vuong",
    "Taylor Johns"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Balls of Fury",
   "away": "License to Dill",
   "time": "2026-07-29T19:30:00",
   "complete": true,
   "homePoints": 637,
   "awayPoints": 584,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Paula Cuerquis",
      "Jordan Clever"
     ],
     "a": [
      "Gianna Medeiros",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Maggie Malloy",
      "Brian Cook"
     ],
     "a": [
      "Alex Pond",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Thuy Le",
      "Zach Strickland"
     ],
     "a": [
      "Julie Randall",
      "Tim Manzi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Steven Garfinkel"
     ],
     "a": [
      "Laura Amato",
      "Joe Arancio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ],
     "a": [
      "Alex Pond",
      "Julie Randall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Maggie Malloy",
      "Pamela Toy"
     ],
     "a": [
      "Gianna Medeiros",
      "Evelyn Geating"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jordan Clever",
      "Brian Cook"
     ],
     "a": [
      "Ben Turchin",
      "Andrew Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Steven Garfinkel",
      "Donny Wong"
     ],
     "a": [
      "Tim Manzi",
      "Ryo Inkyo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Maggie Malloy",
      "Jordan Clever"
     ],
     "a": [
      "Alex Pond",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Brian Cook"
     ],
     "a": [
      "Gianna Medeiros",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eileen Zhang",
      "Zach Strickland"
     ],
     "a": [
      "Evelyn Geating",
      "Ryo Inkyo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Thuy Le",
      "Donny Wong"
     ],
     "a": [
      "Laura Amato",
      "Joe Arancio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Maggie Malloy",
      "Thuy Le"
     ],
     "a": [
      "Julie Randall",
      "Laura Amato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eileen Zhang",
      "Pamela Toy"
     ],
     "a": [
      "Gianna Medeiros",
      "Evelyn Geating"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jordan Clever",
      "Zach Strickland"
     ],
     "a": [
      "Ben Turchin",
      "Tim Manzi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Steven Garfinkel",
      "Donny Wong"
     ],
     "a": [
      "Ryo Inkyo",
      "Joe Arancio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eileen Zhang",
      "Zach Strickland"
     ],
     "a": [
      "Evelyn Geating",
      "Tim Manzi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Brian Cook"
     ],
     "a": [
      "Alex Pond",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thuy Le",
      "Donny Wong"
     ],
     "a": [
      "Julie Randall",
      "Joe Arancio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Steven Garfinkel"
     ],
     "a": [
      "Laura Amato",
      "Ryo Inkyo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paula Cuerquis",
      "Maggie Malloy"
     ],
     "a": [
      "Alex Pond",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Thuy Le",
      "Pamela Toy"
     ],
     "a": [
      "Julie Randall",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jordan Clever",
      "Zach Strickland"
     ],
     "a": [
      "Ben Turchin",
      "Tim Manzi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brian Cook",
      "Steven Garfinkel"
     ],
     "a": [
      "Andrew Martin",
      "Joe Arancio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Paula Cuerquis",
      "Jordan Clever"
     ],
     "a": [
      "Alex Pond",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Maggie Malloy",
      "Steven Garfinkel"
     ],
     "a": [
      "Julie Randall",
      "Tim Manzi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eileen Zhang",
      "Brian Cook"
     ],
     "a": [
      "Gianna Medeiros",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Donny Wong"
     ],
     "a": [
      "Evelyn Geating",
      "Ryo Inkyo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Paula Cuerquis",
      "Maggie Malloy"
     ],
     "a": [
      "Alex Pond",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eileen Zhang",
      "Thuy Le"
     ],
     "a": [
      "Evelyn Geating",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jordan Clever",
      "Brian Cook"
     ],
     "a": [
      "Ben Turchin",
      "Andrew Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zach Strickland",
      "Donny Wong"
     ],
     "a": [
      "Ryo Inkyo",
      "Joe Arancio"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 7,
   "home": "Kitchen Nightmares",
   "away": "Baggers",
   "time": "2026-07-29T19:30:00",
   "complete": true,
   "homePoints": 517,
   "awayPoints": 652,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Anthony Prusich"
     ],
     "a": [
      "Cait Kearney",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarina Manetta",
      "Carlos Lichty"
     ],
     "a": [
      "Christina Sheehan",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Meghan Plunkett",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Mike Dochney"
     ],
     "a": [
      "Bianca Previdi",
      "Tim Plunkett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sarina Manetta",
      "Meghan Plunkett"
     ],
     "a": [
      "Cait Kearney",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Julia Manetta",
      "Carolyn Shipe"
     ],
     "a": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Prusich",
      "Carlos Lichty"
     ],
     "a": [
      "Daniel Borgia",
      "Corey Neel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ted Asavamongkolkul",
      "Robert Courchain"
     ],
     "a": [
      "Tim Plunkett",
      "Kevin Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarina Manetta",
      "Anthony Prusich"
     ],
     "a": [
      "Christina Sheehan",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Carlos Lichty"
     ],
     "a": [
      "Cait Kearney",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Carolyn Shipe",
      "Robert Courchain"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Mike Dochney"
     ],
     "a": [
      "Bianca Previdi",
      "Kevin Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarina Manetta",
      "Carolyn Shipe"
     ],
     "a": [
      "Cait Kearney",
      "Christina Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Meghan Plunkett",
      "Quynh Nguyen"
     ],
     "a": [
      "Bianca Previdi",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Carlos Lichty",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Corey Neel",
      "Justin Chung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mike Dochney",
      "Robert Courchain"
     ],
     "a": [
      "Tim Plunkett",
      "Kevin Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Christina Sheehan",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carolyn Shipe",
      "Anthony Prusich"
     ],
     "a": [
      "Cait Kearney",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Meghan Plunkett",
      "Mike Dochney"
     ],
     "a": [
      "Bianca Previdi",
      "Kevin Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Robert Courchain"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tim Plunkett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Julia Manetta",
      "Sarina Manetta"
     ],
     "a": [
      "Cait Kearney",
      "Christina Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Meghan Plunkett",
      "Quynh Nguyen"
     ],
     "a": [
      "Bianca Previdi",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carlos Lichty",
      "Mike Dochney"
     ],
     "a": [
      "Daniel Borgia",
      "Justin Chung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Prusich",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Corey Neel",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarina Manetta",
      "Carlos Lichty"
     ],
     "a": [
      "Cait Kearney",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Anthony Prusich"
     ],
     "a": [
      "Christina Sheehan",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carolyn Shipe",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Bianca Previdi",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Meghan Plunkett",
      "Robert Courchain"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Kevin Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Carolyn Shipe"
     ],
     "a": [
      "Cait Kearney",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sarina Manetta",
      "Quynh Nguyen"
     ],
     "a": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anthony Prusich",
      "Carlos Lichty"
     ],
     "a": [
      "Daniel Borgia",
      "Corey Neel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Mike Dochney",
      "Robert Courchain"
     ],
     "a": [
      "Justin Chung",
      "Kevin Chang"
     ]
    }
   ],
   "subs": [
    "Carolyn Shipe"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Kitchen Nightmares",
   "away": "Picholas Cage",
   "time": "2026-08-05T19:30:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 565,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Julia Manetta",
      "Ross Cogan"
     ],
     "a": [
      "Caity Rietzen",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Maggie Malloy",
      "Anthony Prusich"
     ],
     "a": [
      "Carolyn Shipe",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Carlos Lichty"
     ],
     "a": [
      "Thuy Le",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarina Manetta",
      "Mike Dochney"
     ],
     "a": [
      "Lisa Dinh",
      "Joseph Luka"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Julia Manetta",
      "Sarina Manetta"
     ],
     "a": [
      "Carolyn Shipe",
      "Thuy Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Maggie Malloy",
      "Quynh Nguyen"
     ],
     "a": [
      "Caity Rietzen",
      "Minjel Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ross Cogan",
      "Anthony Prusich"
     ],
     "a": [
      "Micah Weaver",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mike Dochney",
      "Nick Boyes"
     ],
     "a": [
      "John Sehi",
      "Nate Y"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maggie Malloy",
      "Ross Cogan"
     ],
     "a": [
      "Carolyn Shipe",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julia Manetta",
      "Anthony Prusich"
     ],
     "a": [
      "Caity Rietzen",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Quynh Nguyen",
      "Carlos Lichty"
     ],
     "a": [
      "Minjel Shah",
      "Nate Y"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarina Manetta",
      "Nick Boyes"
     ],
     "a": [
      "Lisa Dinh",
      "Joseph Luka"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julia Manetta",
      "Maggie Malloy"
     ],
     "a": [
      "Carolyn Shipe",
      "Minjel Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarina Manetta",
      "Quynh Nguyen"
     ],
     "a": [
      "Thuy Le",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Prusich",
      "Carlos Lichty"
     ],
     "a": [
      "Jonathan Macqueen",
      "John Sehi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mike Dochney",
      "Nick Boyes"
     ],
     "a": [
      "Joseph Luka",
      "Nate Y"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maggie Malloy",
      "Ross Cogan"
     ],
     "a": [
      "Caity Rietzen",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Julia Manetta",
      "Carlos Lichty"
     ],
     "a": [
      "Minjel Shah",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarina Manetta",
      "Nick Boyes"
     ],
     "a": [
      "Thuy Le",
      "Joseph Luka"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Quynh Nguyen",
      "Mike Dochney"
     ],
     "a": [
      "Lisa Dinh",
      "Nate Y"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Julia Manetta",
      "Maggie Malloy"
     ],
     "a": [
      "Caity Rietzen",
      "Carolyn Shipe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sarina Manetta",
      "Quynh Nguyen"
     ],
     "a": [
      "Thuy Le",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Ross Cogan",
      "Carlos Lichty"
     ],
     "a": [
      "Jonathan Macqueen",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Prusich",
      "Mike Dochney"
     ],
     "a": [
      "Micah Weaver",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Julia Manetta",
      "Ross Cogan"
     ],
     "a": [
      "Carolyn Shipe",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Maggie Malloy",
      "Anthony Prusich"
     ],
     "a": [
      "Caity Rietzen",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarina Manetta",
      "Mike Dochney"
     ],
     "a": [
      "Minjel Shah",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Quynh Nguyen",
      "Nick Boyes"
     ],
     "a": [
      "Thuy Le",
      "Nate Y"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Julia Manetta",
      "Sarina Manetta"
     ],
     "a": [
      "Caity Rietzen",
      "Minjel Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maggie Malloy",
      "Quynh Nguyen"
     ],
     "a": [
      "Carolyn Shipe",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ross Cogan",
      "Anthony Prusich"
     ],
     "a": [
      "Micah Weaver",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carlos Lichty",
      "Nick Boyes"
     ],
     "a": [
      "Joseph Luka",
      "Nate Y"
     ]
    }
   ],
   "subs": [
    "Maggie Malloy",
    "Thuy Le",
    "Carolyn Shipe"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Baggers",
   "away": "License to Dill",
   "time": "2026-08-05T19:30:00",
   "complete": true,
   "homePoints": 593,
   "awayPoints": 593,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cait Kearney",
      "Daniel Borgia"
     ],
     "a": [
      "Gianna Medeiros",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christina Sheehan",
      "Corey Neel"
     ],
     "a": [
      "Alex Pond",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Brenton Pham"
     ],
     "a": [
      "Julie Randall",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Claire Nguyen",
      "Kevin Chang"
     ],
     "a": [
      "Laura Amato",
      "Grady Craig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Cait Kearney",
      "Bianca Previdi"
     ],
     "a": [
      "Alex Pond",
      "Julie Randall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christina Sheehan",
      "Claire Nguyen"
     ],
     "a": [
      "Gianna Medeiros",
      "Evelyn Geating"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Daniel Borgia",
      "Corey Neel"
     ],
     "a": [
      "Joshua Kim",
      "Ben Turchin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kevin Chang",
      "Anil Rajpal"
     ],
     "a": [
      "Andrew Martin",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christina Sheehan",
      "Daniel Borgia"
     ],
     "a": [
      "Alex Pond",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cait Kearney",
      "Corey Neel"
     ],
     "a": [
      "Gianna Medeiros",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Brenton Pham"
     ],
     "a": [
      "Evelyn Geating",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mira Sigal-Feldman",
      "Anil Rajpal"
     ],
     "a": [
      "Laura Amato",
      "Grady Craig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Julie Randall",
      "Laura Amato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Claire Nguyen"
     ],
     "a": [
      "Gianna Medeiros",
      "Evelyn Geating"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Daniel Borgia",
      "Brenton Pham"
     ],
     "a": [
      "Joshua Kim",
      "Andrew Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kevin Chang",
      "Anil Rajpal"
     ],
     "a": [
      "Nikhil Sachdeva",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Brenton Pham"
     ],
     "a": [
      "Evelyn Geating",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cait Kearney",
      "Corey Neel"
     ],
     "a": [
      "Alex Pond",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mira Sigal-Feldman",
      "Anil Rajpal"
     ],
     "a": [
      "Julie Randall",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Kevin Chang"
     ],
     "a": [
      "Laura Amato",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cait Kearney",
      "Christina Sheehan"
     ],
     "a": [
      "Alex Pond",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mira Sigal-Feldman",
      "Claire Nguyen"
     ],
     "a": [
      "Julie Randall",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Daniel Borgia",
      "Brenton Pham"
     ],
     "a": [
      "Joshua Kim",
      "Andrew Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Corey Neel",
      "Kevin Chang"
     ],
     "a": [
      "Ben Turchin",
      "Grady Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cait Kearney",
      "Daniel Borgia"
     ],
     "a": [
      "Alex Pond",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christina Sheehan",
      "Kevin Chang"
     ],
     "a": [
      "Julie Randall",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bianca Previdi",
      "Corey Neel"
     ],
     "a": [
      "Gianna Medeiros",
      "Ben Turchin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claire Nguyen",
      "Anil Rajpal"
     ],
     "a": [
      "Evelyn Geating",
      "Nikhil Sachdeva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cait Kearney",
      "Christina Sheehan"
     ],
     "a": [
      "Alex Pond",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bianca Previdi",
      "Mira Sigal-Feldman"
     ],
     "a": [
      "Evelyn Geating",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Daniel Borgia",
      "Corey Neel"
     ],
     "a": [
      "Joshua Kim",
      "Ben Turchin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brenton Pham",
      "Anil Rajpal"
     ],
     "a": [
      "Nikhil Sachdeva",
      "Grady Craig"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 9,
   "home": "Balls of Fury",
   "away": "Kitchen Nightmares",
   "time": "2026-08-12T19:30:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 611,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Jordan Clever"
     ],
     "a": [
      "Julia Manetta",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Eileen Zhang",
      "Brian Cook"
     ],
     "a": [
      "Sarina Manetta",
      "Jeremy Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Derek Lombardi"
     ],
     "a": [
      "Victoria Young",
      "Mike Dochney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Thuy Le",
      "Brad De Jesus"
     ],
     "a": [
      "Quynh Nguyen",
      "Nick Boyes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Paula Cuerquis",
      "Thuy Le"
     ],
     "a": [
      "Julia Manetta",
      "Victoria Young"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eileen Zhang",
      "Pamela Toy"
     ],
     "a": [
      "Sarina Manetta",
      "Meghan Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jordan Clever",
      "Brian Cook"
     ],
     "a": [
      "Ross Cogan",
      "Mike Dochney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Adam Shaw",
      "Brad De Jesus"
     ],
     "a": [
      "Jeremy Chen",
      "Nick Boyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eileen Zhang",
      "Jordan Clever"
     ],
     "a": [
      "Julia Manetta",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Brian Cook"
     ],
     "a": [
      "Sarina Manetta",
      "Jeremy Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pamela Toy",
      "Adam Shaw"
     ],
     "a": [
      "Meghan Plunkett",
      "Mike Dochney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Thuy Le",
      "Derek Lombardi"
     ],
     "a": [
      "Quynh Nguyen",
      "Nick Boyes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ],
     "a": [
      "Sarina Manetta",
      "Victoria Young"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Thuy Le",
      "Pamela Toy"
     ],
     "a": [
      "Meghan Plunkett",
      "Quynh Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brian Cook",
      "Adam Shaw"
     ],
     "a": [
      "Ross Cogan",
      "Jeremy Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 34,
     "as": 32,
     "h": [
      "Derek Lombardi",
      "Brad De Jesus"
     ],
     "a": [
      "Mike Dochney",
      "Nick Boyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Paula Cuerquis",
      "Adam Shaw"
     ],
     "a": [
      "Julia Manetta",
      "Jeremy Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eileen Zhang",
      "Jordan Clever"
     ],
     "a": [
      "Victoria Young",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Thuy Le",
      "Derek Lombardi"
     ],
     "a": [
      "Meghan Plunkett",
      "Nick Boyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pamela Toy",
      "Brad De Jesus"
     ],
     "a": [
      "Quynh Nguyen",
      "Mike Dochney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Thuy Le"
     ],
     "a": [
      "Julia Manetta",
      "Sarina Manetta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eileen Zhang",
      "Pamela Toy"
     ],
     "a": [
      "Victoria Young",
      "Quynh Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jordan Clever",
      "Brian Cook"
     ],
     "a": [
      "Ross Cogan",
      "Jeremy Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Derek Lombardi",
      "Brad De Jesus"
     ],
     "a": [
      "Mike Dochney",
      "Nick Boyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eileen Zhang",
      "Brian Cook"
     ],
     "a": [
      "Julia Manetta",
      "Jeremy Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pamela Toy",
      "Jordan Clever"
     ],
     "a": [
      "Sarina Manetta",
      "Nick Boyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Adam Shaw"
     ],
     "a": [
      "Victoria Young",
      "Ross Cogan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Thuy Le",
      "Brad De Jesus"
     ],
     "a": [
      "Meghan Plunkett",
      "Mike Dochney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ],
     "a": [
      "Julia Manetta",
      "Sarina Manetta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Thuy Le",
      "Pamela Toy"
     ],
     "a": [
      "Meghan Plunkett",
      "Quynh Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brian Cook",
      "Derek Lombardi"
     ],
     "a": [
      "Ross Cogan",
      "Mike Dochney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jordan Clever",
      "Adam Shaw"
     ],
     "a": [
      "Jeremy Chen",
      "Nick Boyes"
     ]
    }
   ],
   "subs": [
    "Jeremy Chen"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Picholas Cage",
   "away": "Baggers",
   "time": "2026-08-12T19:30:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 602,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alex Pond",
      "John Sehi"
     ],
     "a": [
      "Bianca Previdi",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Caity Rietzen",
      "Micah Weaver"
     ],
     "a": [
      "Cait Kearney",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lisa Dinh",
      "Conor Malloy"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Deborah Chapman",
      "Joseph Luka"
     ],
     "a": [
      "Elizabeth Krebs",
      "Anil Rajpal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Alex Pond",
      "Minjel Shah"
     ],
     "a": [
      "Cait Kearney",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Caity Rietzen",
      "Deborah Chapman"
     ],
     "a": [
      "Bianca Previdi",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Sehi",
      "Micah Weaver"
     ],
     "a": [
      "Daniel Borgia",
      "Corey Neel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joseph Luka",
      "Joe Gronczewski"
     ],
     "a": [
      "Tim Plunkett",
      "Brenton Pham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Caity Rietzen",
      "John Sehi"
     ],
     "a": [
      "Cait Kearney",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Pond",
      "Micah Weaver"
     ],
     "a": [
      "Bianca Previdi",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Minjel Shah",
      "Conor Malloy"
     ],
     "a": [
      "Claire Nguyen",
      "Brenton Pham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lisa Dinh",
      "Joe Gronczewski"
     ],
     "a": [
      "Elizabeth Krebs",
      "Anil Rajpal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Caity Rietzen",
      "Lisa Dinh"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Elizabeth Krebs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Minjel Shah",
      "Deborah Chapman"
     ],
     "a": [
      "Bianca Previdi",
      "Claire Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "John Sehi",
      "Conor Malloy"
     ],
     "a": [
      "Daniel Borgia",
      "Tim Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joseph Luka",
      "Joe Gronczewski"
     ],
     "a": [
      "Brenton Pham",
      "Anil Rajpal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Minjel Shah",
      "Conor Malloy"
     ],
     "a": [
      "Claire Nguyen",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Pond",
      "Micah Weaver"
     ],
     "a": [
      "Cait Kearney",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lisa Dinh",
      "Joe Gronczewski"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Anil Rajpal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Deborah Chapman",
      "Joseph Luka"
     ],
     "a": [
      "Elizabeth Krebs",
      "Brenton Pham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alex Pond",
      "Caity Rietzen"
     ],
     "a": [
      "Cait Kearney",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Dinh",
      "Deborah Chapman"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Elizabeth Krebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "John Sehi",
      "Conor Malloy"
     ],
     "a": [
      "Daniel Borgia",
      "Tim Plunkett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Micah Weaver",
      "Joseph Luka"
     ],
     "a": [
      "Corey Neel",
      "Anil Rajpal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Pond",
      "John Sehi"
     ],
     "a": [
      "Cait Kearney",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Caity Rietzen",
      "Joseph Luka"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Minjel Shah",
      "Micah Weaver"
     ],
     "a": [
      "Bianca Previdi",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Deborah Chapman",
      "Joe Gronczewski"
     ],
     "a": [
      "Claire Nguyen",
      "Brenton Pham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alex Pond",
      "Caity Rietzen"
     ],
     "a": [
      "Cait Kearney",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Minjel Shah",
      "Lisa Dinh"
     ],
     "a": [
      "Claire Nguyen",
      "Elizabeth Krebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "John Sehi",
      "Micah Weaver"
     ],
     "a": [
      "Daniel Borgia",
      "Corey Neel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Conor Malloy",
      "Joe Gronczewski"
     ],
     "a": [
      "Brenton Pham",
      "Anil Rajpal"
     ]
    }
   ],
   "subs": [
    "Alex Pond"
   ]
  }
 ],
 "playoffs": [
  {
   "result": "away",
   "round": 1,
   "home": "Balls of Fury",
   "away": "Picholas Cage",
   "time": "2026-08-19T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "provisional": true,
   "homePoints": 623,
   "awayPoints": 639,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Paula Cuerquis",
      "Jordan Clever"
     ],
     "a": [
      "Caity Rietzen",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eileen Zhang",
      "Brian Cook"
     ],
     "a": [
      "Shania Bui",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Victoria Young",
      "Adam Shaw"
     ],
     "a": [
      "Minjel Shah",
      "Conor Malloy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Brad De Jesus"
     ],
     "a": [
      "Deborah Chapman",
      "Joseph Luka"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Gabby Frieder"
     ],
     "a": [
      "Shania Bui",
      "Minjel Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eileen Zhang",
      "Pamela Toy"
     ],
     "a": [
      "Caity Rietzen",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jordan Clever",
      "Brian Cook"
     ],
     "a": [
      "John Sehi",
      "Micah Weaver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Brad De Jesus",
      "Derek Lombardi"
     ],
     "a": [
      "Conor Malloy",
      "Joe Gronczewski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eileen Zhang",
      "Jordan Clever"
     ],
     "a": [
      "Shania Bui",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Brian Cook"
     ],
     "a": [
      "Caity Rietzen",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gabby Frieder",
      "Adam Shaw"
     ],
     "a": [
      "Lisa Dinh",
      "Joe Gronczewski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Victoria Young",
      "Derek Lombardi"
     ],
     "a": [
      "Deborah Chapman",
      "Joseph Luka"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Eileen Zhang",
      "Victoria Young"
     ],
     "a": [
      "Minjel Shah",
      "Deborah Chapman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gabby Frieder",
      "Pamela Toy"
     ],
     "a": [
      "Caity Rietzen",
      "Lisa Dinh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jordan Clever",
      "Adam Shaw"
     ],
     "a": [
      "John Sehi",
      "Conor Malloy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Brad De Jesus",
      "Derek Lombardi"
     ],
     "a": [
      "Joe Gronczewski",
      "Joseph Luka"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gabby Frieder",
      "Adam Shaw"
     ],
     "a": [
      "Lisa Dinh",
      "Conor Malloy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Paula Cuerquis",
      "Brian Cook"
     ],
     "a": [
      "Shania Bui",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Victoria Young",
      "Derek Lombardi"
     ],
     "a": [
      "Minjel Shah",
      "Joseph Luka"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Pamela Toy",
      "Brad De Jesus"
     ],
     "a": [
      "Deborah Chapman",
      "Joe Gronczewski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ],
     "a": [
      "Shania Bui",
      "Caity Rietzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Victoria Young",
      "Pamela Toy"
     ],
     "a": [
      "Minjel Shah",
      "Deborah Chapman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jordan Clever",
      "Adam Shaw"
     ],
     "a": [
      "John Sehi",
      "Conor Malloy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brian Cook",
      "Brad De Jesus"
     ],
     "a": [
      "Micah Weaver",
      "Joseph Luka"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Paula Cuerquis",
      "Jordan Clever"
     ],
     "a": [
      "Shania Bui",
      "John Sehi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eileen Zhang",
      "Brad De Jesus"
     ],
     "a": [
      "Minjel Shah",
      "Conor Malloy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gabby Frieder",
      "Brian Cook"
     ],
     "a": [
      "Caity Rietzen",
      "Micah Weaver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Derek Lombardi"
     ],
     "a": [
      "Lisa Dinh",
      "Joe Gronczewski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Paula Cuerquis",
      "Eileen Zhang"
     ],
     "a": [
      "Shania Bui",
      "Caity Rietzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gabby Frieder",
      "Victoria Young"
     ],
     "a": [
      "Lisa Dinh",
      "Deborah Chapman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jordan Clever",
      "Brian Cook"
     ],
     "a": [
      "John Sehi",
      "Micah Weaver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Adam Shaw",
      "Derek Lombardi"
     ],
     "a": [
      "Joe Gronczewski",
      "Joseph Luka"
     ]
    }
   ]
  },
  {
   "result": "away",
   "round": 1,
   "home": "License to Dill",
   "away": "Baggers",
   "time": "2026-08-19T19:30:00",
   "complete": true,
   "homeSeed": 3,
   "awaySeed": 4,
   "provisional": true,
   "homePoints": 578,
   "awayPoints": 633,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Pond",
      "Ben Turchin"
     ],
     "a": [
      "Christina Sheehan",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gianna Medeiros",
      "Tim Manzi"
     ],
     "a": [
      "Cait Kearney",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Evelyn Geating",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Bianca Previdi",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Amato",
      "Grady Craig"
     ],
     "a": [
      "Elizabeth Krebs",
      "Kevin Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alex Pond",
      "Julie Randall"
     ],
     "a": [
      "Cait Kearney",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gianna Medeiros",
      "Laura Amato"
     ],
     "a": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ben Turchin",
      "Tim Manzi"
     ],
     "a": [
      "Daniel Borgia",
      "Corey Neel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Grady Craig",
      "Joe Arancio"
     ],
     "a": [
      "Justin Chung",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gianna Medeiros",
      "Ben Turchin"
     ],
     "a": [
      "Cait Kearney",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alex Pond",
      "Tim Manzi"
     ],
     "a": [
      "Christina Sheehan",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Julie Randall",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tim Plunkett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Joe Arancio"
     ],
     "a": [
      "Elizabeth Krebs",
      "Kevin Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Gianna Medeiros",
      "Evelyn Geating"
     ],
     "a": [
      "Bianca Previdi",
      "Elizabeth Krebs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Julie Randall",
      "Laura Amato"
     ],
     "a": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ben Turchin",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Daniel Borgia",
      "Justin Chung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Grady Craig",
      "Joe Arancio"
     ],
     "a": [
      "Tim Plunkett",
      "Kevin Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julie Randall",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Alex Pond",
      "Tim Manzi"
     ],
     "a": [
      "Cait Kearney",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Evelyn Geating",
      "Joe Arancio"
     ],
     "a": [
      "Bianca Previdi",
      "Kevin Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Amato",
      "Grady Craig"
     ],
     "a": [
      "Elizabeth Krebs",
      "Tim Plunkett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alex Pond",
      "Gianna Medeiros"
     ],
     "a": [
      "Cait Kearney",
      "Christina Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Evelyn Geating",
      "Laura Amato"
     ],
     "a": [
      "Bianca Previdi",
      "Elizabeth Krebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ben Turchin",
      "Nikhil Sachdeva"
     ],
     "a": [
      "Daniel Borgia",
      "Justin Chung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tim Manzi",
      "Grady Craig"
     ],
     "a": [
      "Corey Neel",
      "Kevin Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alex Pond",
      "Ben Turchin"
     ],
     "a": [
      "Cait Kearney",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gianna Medeiros",
      "Grady Craig"
     ],
     "a": [
      "Bianca Previdi",
      "Justin Chung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Julie Randall",
      "Tim Manzi"
     ],
     "a": [
      "Christina Sheehan",
      "Corey Neel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Laura Amato",
      "Joe Arancio"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Tim Plunkett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alex Pond",
      "Gianna Medeiros"
     ],
     "a": [
      "Cait Kearney",
      "Christina Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Julie Randall",
      "Evelyn Geating"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Elizabeth Krebs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ben Turchin",
      "Tim Manzi"
     ],
     "a": [
      "Daniel Borgia",
      "Corey Neel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Nikhil Sachdeva",
      "Joe Arancio"
     ],
     "a": [
      "Tim Plunkett",
      "Kevin Chang"
     ]
    }
   ]
  }
 ],
 "playerIdsByName": {
  "Brad De Jesus": "0dcffbac-6931-400d-b652-41c2720e6311",
  "Victoria Young": "184907fa-5d07-4ab9-a1c5-f0007af00d59",
  "Ross Cogan": "1b682816-9513-4797-b836-6279e1ffda38",
  "Christina Vuong": "1c8ac03f-c618-46c4-bed2-c8391c4e1028",
  "Joshua Kim": "24c3c526-8dd1-4ed0-adcf-ca7857e8b0ec",
  "Mira Sigal-Feldman": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc",
  "Laura Amato": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
  "Robert Courchain": "371bb742-9ea6-464a-8c27-df8469b90a62",
  "Anil Rajpal": "37323b1c-a567-46f2-9a10-8941d923697e",
  "Jeremy Chen": "3c293cfa-d13b-4c0d-8cfe-057058b886d8",
  "Adam Shaw": "3d20f9f4-9428-430e-bb21-0c710b896c03",
  "Caity Rietzen": "417f3210-fcc8-4e63-a512-9eb872adb4e5",
  "Anthony Prusich": "41cd934f-66b0-4f22-b2e1-74955db922ce",
  "Joseph Luka": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
  "Julia Manetta": "4977544e-0c7f-4151-815c-51f68473862f",
  "Quynh Nguyen": "4b57327b-cf8c-41d3-8b29-6884a8d927f1",
  "Pamela Toy": "53a2fafe-37e7-4673-ae8d-a6c36cf06003",
  "Sarina Manetta": "55ccbdaa-8f11-4c08-abb5-6e71438471b1",
  "Meghan Plunkett": "5a6e7604-4d88-490b-b4da-b1cd33a17c27",
  "Carlos Lichty": "5c5c0d00-e20c-456e-b53e-890845310916",
  "Carolyn Shipe": "6775ab12-38b5-4f41-a6c1-df35276b63c2",
  "Deborah Chapman": "6c27f09f-99d8-46e0-bd7f-d50809759eff",
  "Shania Bui": "714331ee-d124-483d-a89e-11d1431a7fca",
  "Joe Arancio": "75c46f4d-9fcc-4e7f-bd3a-581f167e64ad",
  "Erin Hanson": "76b1a759-e777-46d6-873a-a36d4df796b2",
  "Justin Chung": "775b540e-c0e6-4810-9547-fcdfe94548c7",
  "Steven Garfinkel": "78c3e57f-d029-472e-a0d8-5d25ff0975c5",
  "Conor Malloy": "79791efb-c2d0-449d-8572-a99a1f2a5200",
  "Tim Manzi": "79832eb5-9a38-482c-a71e-7903fcb4c205",
  "Evelyn Geating": "798a21bd-83e7-42e9-bd86-c74448c7dada",
  "Corey Neel": "7dbbd17e-9bc8-440d-a09c-dcbe4da688bd",
  "Taylor Johns": "7e92032d-7d47-485c-8641-ae8a7af4e3ac",
  "Bianca Previdi": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2",
  "Claire Nguyen": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3",
  "Brenton Pham": "8302852a-f3d0-449f-a45f-efa2757b56e0",
  "Brian Cook": "85520ff7-80c8-4a80-8af0-93889a7a61e6",
  "Julie Randall": "871e077e-f25b-4c8d-8a7b-871d22ebc3b5",
  "Kevin Chang": "8d18b5f7-dfba-4159-b614-0ae432db99c5",
  "Jonathan Macqueen": "9aa0ff6c-0210-4a91-885f-ae3d4813f1c3",
  "Nate Y": "9d619008-c628-408e-8301-855b82ee4c6e",
  "Eileen Zhang": "a97005b1-7cac-40b0-b0c0-c4e1a359418a",
  "Mike Dochney": "aa63d50a-88e6-4de7-9592-1546f21d8648",
  "Nikhil Sachdeva": "aa811676-fda4-47ba-81a9-3a0feb35cc6a",
  "Lisa Dinh": "aaf27c02-6d20-4a96-835c-3084d799ac0f",
  "Paula Cuerquis": "ac412cd9-bd0a-4f98-8253-9c8c12911465",
  "Daniel Borgia": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
  "Ben Turchin": "aed3d38c-77cb-48fa-ac41-3ff4b3664978",
  "Cait Kearney": "b104bb38-14f6-40b1-8666-faf327d5f415",
  "Gabby Frieder": "b3e8de81-d69a-4912-b366-f6b66ea6dd8e",
  "Gianna Medeiros": "b63ec8b5-b659-4404-92b0-8e577c87534a",
  "Maggie Malloy": "c1251904-fef6-4eb5-9b49-06c8335e3546",
  "John Sehi": "c5ea40be-2d6c-47ce-a2d1-dce40a3756a5",
  "Alex Pond": "ca2c7d14-de39-45a1-805a-ff1ab5be31d9",
  "Micah Weaver": "cef2997a-d41d-42b0-8a70-373738e0fe60",
  "Jordan Clever": "d64db065-87c9-4e7f-989b-6f0ec53240c9",
  "Grady Craig": "d97c3295-9f2a-479e-be7f-d55442287ea7",
  "Elizabeth Krebs": "d9e6d209-acce-4fc1-ad2b-1b944fd3e45c",
  "Ryo Inkyo": "e0fdd367-8a48-44ae-a889-ca5cdffdd623",
  "Zach Strickland": "e6deea54-c0bb-40c7-83d0-b65c6eb1fcb2",
  "Andrew Martin": "e8b51e9c-3814-42e1-8413-2c1734514ea1",
  "Minjel Shah": "e9933537-c449-42e8-b742-0fd7e4ea8619",
  "Donny Wong": "ea83bd99-bf9c-4d3a-8fc4-80d939f4c466",
  "Nick Boyes": "eb0839fd-375d-4291-95f0-145106f0555f",
  "Christina Sheehan": "ed037154-d16e-4bb2-a2d2-d485c6f5d870",
  "Ted Asavamongkolkul": "ee07033c-b5a8-4d28-8920-7873dc8ffac0",
  "Derek Lombardi": "eee52ed7-e9da-4d89-93fa-52a6dfc07e72",
  "Tim Plunkett": "f2f802bc-e8dc-4229-ab6f-3e5372fb7761",
  "Christopher Moscony": "f64241ba-e625-4065-b72f-777f5a8fb2bd",
  "Joe Gronczewski": "f6eef486-8999-4247-a7d8-20251377021c",
  "Thuy Le": "f89874de-ee0c-486f-af7d-32e4aed59df8",
  "Alex Ehrenman": "fb562cfa-a6fa-40f3-9c7e-e67f9a7925d1"
 },
 "meta": {
  "matchesPlayed": 18,
  "weeks": "1-9",
  "totalPlayers": 71,
  "ratingHistoryWeeks": [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8,
   9
  ],
  "divisionSlug": "3e9b6a58",
  "hasPlayoffs": true,
  "typicalDay": "Wednesdays",
  "detailFile": "detail-3e9b6a58.js",
  "clubName": "Bounce - Philly",
  "divisionName": "3.5 - 4.0",
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
  window.CPL_DATASETS["3e9b6a58"] = DATA;
})();
