(function () {
  const DATA = {
 "players": [
  {
   "name": "Eleni Leone",
   "gender": "Female",
   "team": "Pickle Bunch",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 288,
   "totalPointsAgainst": 236,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "2e5dc033-4c92-4dbf-b52a-5e29efc8d009",
   "winPct": 85.7,
   "diff": 52,
   "ppg": 20.6,
   "leagueRank": 24,
   "rating": 2.7,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Sharon Oddy",
   "gender": "Female",
   "team": "Pickle Bunch",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 49,
   "losses": 13,
   "pointsWon": 1245,
   "totalPointsAgainst": 1014,
   "mixedWins": 24,
   "mixedLosses": 7,
   "genderWins": 25,
   "genderLosses": 6,
   "clutchWins": 12,
   "clutchLosses": 4,
   "winPct": 79,
   "diff": 231,
   "ppg": 20.1,
   "leagueRank": 1,
   "rating": 3.1,
   "ratingGames": 62,
   "confidence": 89,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.5,
   "playerId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "name": "Sam Doctor",
   "gender": "Male",
   "team": "Honeydrippers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 28,
   "losses": 8,
   "pointsWon": 737,
   "totalPointsAgainst": 630,
   "mixedWins": 18,
   "mixedLosses": 1,
   "genderWins": 10,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 6,
   "playerId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "winPct": 77.8,
   "diff": 107,
   "ppg": 20.5,
   "leagueRank": 2,
   "rating": 2.7,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Brett Wilson",
   "gender": "Male",
   "team": "Spin Doctors",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 21,
   "losses": 8,
   "pointsWon": 585,
   "totalPointsAgainst": 497,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 12,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 6,
   "playerId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "winPct": 72.4,
   "diff": 88,
   "ppg": 20.2,
   "leagueRank": 3,
   "rating": 1.3,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Marianne Rosato",
   "gender": "Female",
   "team": "Honeydrippers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 21,
   "losses": 8,
   "pointsWon": 573,
   "totalPointsAgainst": 504,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 9,
   "clutchLosses": 2,
   "playerId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3",
   "winPct": 72.4,
   "diff": 69,
   "ppg": 19.8,
   "leagueRank": 5,
   "rating": 2.1,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Natalia Fischer",
   "gender": "Female",
   "team": "Honeydrippers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 37,
   "losses": 16,
   "pointsWon": 1050,
   "totalPointsAgainst": 938,
   "mixedWins": 19,
   "mixedLosses": 6,
   "genderWins": 18,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 69.8,
   "diff": 112,
   "ppg": 19.8,
   "leagueRank": 7,
   "rating": 2.1,
   "ratingGames": 53,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "79578efc-55c2-49fb-9f69-2f776055ff70"
  },
  {
   "name": "Cathy Orourke",
   "gender": "Female",
   "team": "Honeydrippers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 452,
   "totalPointsAgainst": 370,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "d0485529-ede0-4a73-b48c-a0a57803ff25",
   "winPct": 69.6,
   "diff": 82,
   "ppg": 19.7,
   "leagueRank": 4,
   "rating": 3.2,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Anthony Leone",
   "gender": "Male",
   "team": "Spin Doctors",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 15,
   "losses": 7,
   "pointsWon": 436,
   "totalPointsAgainst": 374,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "a8715ef7-f760-4097-b642-eae44c0a5de7",
   "winPct": 68.2,
   "diff": 62,
   "ppg": 19.8,
   "leagueRank": 15,
   "rating": 2.9,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Grace Brennan",
   "gender": "Female",
   "team": "Pickle Bunch",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 36,
   "losses": 18,
   "pointsWon": 1057,
   "totalPointsAgainst": 883,
   "mixedWins": 17,
   "mixedLosses": 10,
   "genderWins": 19,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 66.7,
   "diff": 174,
   "ppg": 19.6,
   "leagueRank": 6,
   "rating": 3,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "15778391-96b7-4888-9d08-d63b96e104ca"
  },
  {
   "name": "Tao Zhu",
   "gender": "Female",
   "team": "Spin Doctors",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 411,
   "totalPointsAgainst": 354,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91",
   "winPct": 66.7,
   "diff": 57,
   "ppg": 19.6,
   "leagueRank": 19,
   "rating": 3,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Anthony Deangelis",
   "gender": "Male",
   "team": "Pickle Bunch",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 41,
   "losses": 21,
   "pointsWon": 1192,
   "totalPointsAgainst": 1059,
   "mixedWins": 25,
   "mixedLosses": 7,
   "genderWins": 16,
   "genderLosses": 14,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 66.1,
   "diff": 133,
   "ppg": 19.2,
   "leagueRank": 8,
   "rating": 2.4,
   "ratingGames": 62,
   "confidence": 89,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.8,
   "playerId": "4b9f7f7b-5027-482c-93aa-66ca594436db"
  },
  {
   "name": "Ren Mortara",
   "gender": "Male",
   "team": "Spin Doctors",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 40,
   "losses": 21,
   "pointsWon": 1188,
   "totalPointsAgainst": 1105,
   "mixedWins": 20,
   "mixedLosses": 11,
   "genderWins": 20,
   "genderLosses": 10,
   "clutchWins": 14,
   "clutchLosses": 9,
   "winPct": 65.6,
   "diff": 83,
   "ppg": 19.5,
   "leagueRank": 9,
   "rating": 1,
   "ratingGames": 61,
   "confidence": 89,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "name": "Jennifer Hurley",
   "gender": "Female",
   "team": "Spin Doctors",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 19,
   "losses": 11,
   "pointsWon": 567,
   "totalPointsAgainst": 548,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 63.3,
   "diff": 19,
   "ppg": 18.9,
   "leagueRank": 12,
   "rating": -0.9,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1,
   "playerId": "347f856f-cd7e-411b-bed9-3d4670a88221"
  },
  {
   "name": "Jane Straley",
   "gender": "Female",
   "team": "Spin Doctors",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 291,
   "totalPointsAgainst": 265,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "fe7c9b2d-efd7-4497-beb6-f1041afa73ec",
   "winPct": 60,
   "diff": 26,
   "ppg": 19.4,
   "leagueRank": 34,
   "rating": 0.4,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Tracey Garcia",
   "gender": "Female",
   "team": "Spin Doctors",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 27,
   "losses": 19,
   "pointsWon": 861,
   "totalPointsAgainst": 812,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 58.7,
   "diff": 49,
   "ppg": 18.7,
   "leagueRank": 13,
   "rating": -0.1,
   "ratingGames": 46,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "74eac1f8-7aa0-4c21-ace3-55d26eca09c8"
  },
  {
   "name": "Apparao Avancha",
   "gender": "Male",
   "team": "Honeydrippers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 31,
   "losses": 22,
   "pointsWon": 1025,
   "totalPointsAgainst": 940,
   "mixedWins": 15,
   "mixedLosses": 10,
   "genderWins": 16,
   "genderLosses": 12,
   "clutchWins": 7,
   "clutchLosses": 10,
   "winPct": 58.5,
   "diff": 85,
   "ppg": 19.3,
   "leagueRank": 10,
   "rating": 2,
   "ratingGames": 53,
   "confidence": 88,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "d84632f4-bec0-4399-8b04-64c6ea340362"
  },
  {
   "name": "Butch Kreilick",
   "gender": "Male",
   "team": "Honeydrippers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 29,
   "losses": 21,
   "pointsWon": 964,
   "totalPointsAgainst": 896,
   "mixedWins": 13,
   "mixedLosses": 13,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 12,
   "winPct": 58,
   "diff": 68,
   "ppg": 19.3,
   "leagueRank": 11,
   "rating": 1.5,
   "ratingGames": 50,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "name": "Kathie Vit",
   "gender": "Female",
   "team": "Honeydrippers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 134,
   "totalPointsAgainst": 136,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "8d78e179-2297-4a1d-b9b0-0f340202b367",
   "winPct": 57.1,
   "diff": -2,
   "ppg": 19.1,
   "leagueRank": 51,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0
  },
  {
   "name": "Judy Macarthur",
   "gender": "Female",
   "team": "Honeydrippers",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 20,
   "losses": 16,
   "pointsWon": 662,
   "totalPointsAgainst": 660,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 55.6,
   "diff": 2,
   "ppg": 18.4,
   "leagueRank": 23,
   "rating": -0.8,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "5033e2ab-5a4b-4f98-b5b1-ed9b53bc57a2"
  },
  {
   "name": "Dan Amabile",
   "gender": "Male",
   "team": "Spin Doctors",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 30,
   "losses": 24,
   "pointsWon": 1020,
   "totalPointsAgainst": 1024,
   "mixedWins": 12,
   "mixedLosses": 16,
   "genderWins": 18,
   "genderLosses": 8,
   "clutchWins": 15,
   "clutchLosses": 7,
   "winPct": 55.6,
   "diff": -4,
   "ppg": 18.9,
   "leagueRank": 17,
   "rating": 1.1,
   "ratingGames": 54,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1,
   "playerId": "3d3123f8-a4db-460f-8df3-70e6271cacfa"
  },
  {
   "name": "Jennifer Czech",
   "gender": "Female",
   "team": "Honeydrippers",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 18,
   "losses": 15,
   "pointsWon": 626,
   "totalPointsAgainst": 586,
   "mixedWins": 6,
   "mixedLosses": 11,
   "genderWins": 12,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 54.5,
   "diff": 40,
   "ppg": 19,
   "leagueRank": 14,
   "rating": 1.1,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "24c88ced-2e38-4ea6-b2ec-d76c42a6112c"
  },
  {
   "name": "Hector Lopez",
   "gender": "Male",
   "team": "Pickle Bunch",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 14,
   "losses": 12,
   "pointsWon": 477,
   "totalPointsAgainst": 476,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 4,
   "playerId": "e02b2266-0586-4da7-9451-b90445d145bf",
   "winPct": 53.8,
   "diff": 1,
   "ppg": 18.3,
   "leagueRank": 27,
   "rating": 0.3,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0
  },
  {
   "name": "Tom Dominczyk",
   "gender": "Male",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 29,
   "losses": 26,
   "pointsWon": 1010,
   "totalPointsAgainst": 1017,
   "mixedWins": 11,
   "mixedLosses": 17,
   "genderWins": 18,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 9,
   "winPct": 52.7,
   "diff": -7,
   "ppg": 18.4,
   "leagueRank": 16,
   "rating": 2.3,
   "ratingGames": 55,
   "confidence": 88,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1,
   "playerId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5"
  },
  {
   "name": "Rich Aronow",
   "gender": "Male",
   "team": "Spin Doctors",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 24,
   "losses": 22,
   "pointsWon": 874,
   "totalPointsAgainst": 835,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 14,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 52.2,
   "diff": 39,
   "ppg": 19,
   "leagueRank": 18,
   "rating": 1,
   "ratingGames": 46,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "0ca5c008-b5e9-428e-968c-216e1882c348"
  },
  {
   "name": "Amy Brown",
   "gender": "Female",
   "team": "Honeydrippers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 25,
   "losses": 23,
   "pointsWon": 891,
   "totalPointsAgainst": 876,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 52.1,
   "diff": 15,
   "ppg": 18.6,
   "leagueRank": 21,
   "rating": -0.4,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "f837b726-d8f1-4a80-a687-b170c415b752"
  },
  {
   "name": "Jackie Fuchs",
   "gender": "Female",
   "team": "Pickle Bunch",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 26,
   "losses": 26,
   "pointsWon": 961,
   "totalPointsAgainst": 940,
   "mixedWins": 12,
   "mixedLosses": 14,
   "genderWins": 14,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 50,
   "diff": 21,
   "ppg": 18.5,
   "leagueRank": 25,
   "rating": 0.4,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "9018196a-ba52-4fca-a1d2-3b2b8a6cbedc"
  },
  {
   "name": "Alfred Soliman",
   "gender": "Male",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 11,
   "losses": 11,
   "pointsWon": 394,
   "totalPointsAgainst": 400,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 2,
   "playerId": "bb9067e6-d693-47c2-840a-c21a08812694",
   "winPct": 50,
   "diff": -6,
   "ppg": 17.9,
   "leagueRank": 22,
   "rating": 0,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Alexey Kudymov",
   "gender": "Male",
   "team": "Spin Doctors",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 26,
   "losses": 26,
   "pointsWon": 952,
   "totalPointsAgainst": 969,
   "mixedWins": 14,
   "mixedLosses": 12,
   "genderWins": 12,
   "genderLosses": 14,
   "clutchWins": 12,
   "clutchLosses": 8,
   "winPct": 50,
   "diff": -17,
   "ppg": 18.3,
   "leagueRank": 29,
   "rating": -2.5,
   "ratingGames": 52,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1,
   "playerId": "25db4299-16c8-47b6-84d5-bcf3bafba874"
  },
  {
   "name": "Sheila Curran",
   "gender": "Female",
   "team": "Pickle Bunch",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 405,
   "totalPointsAgainst": 377,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 6,
   "playerId": "bbb3cbbd-edc3-4fa6-adef-800076f97402",
   "winPct": 47.6,
   "diff": 28,
   "ppg": 19.3,
   "leagueRank": 20,
   "rating": 2,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Rob Oddy",
   "gender": "Male",
   "team": "Pickle Bunch",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 28,
   "losses": 32,
   "pointsWon": 1092,
   "totalPointsAgainst": 1071,
   "mixedWins": 17,
   "mixedLosses": 13,
   "genderWins": 11,
   "genderLosses": 19,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 46.7,
   "diff": 21,
   "ppg": 18.2,
   "leagueRank": 26,
   "rating": 0.4,
   "ratingGames": 60,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "name": "Christine Levesque",
   "gender": "Female",
   "team": "Spin Doctors",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 22,
   "losses": 26,
   "pointsWon": 851,
   "totalPointsAgainst": 892,
   "mixedWins": 13,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 45.8,
   "diff": -41,
   "ppg": 17.7,
   "leagueRank": 30,
   "rating": 0.7,
   "ratingGames": 48,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1,
   "playerId": "e34d4b70-a0fc-4087-8386-98fb172aee4c"
  },
  {
   "name": "Kerry Andrews",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 297,
   "totalPointsAgainst": 293,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "3b0373be-f09e-4371-8c6a-242a8366fb3a",
   "winPct": 43.8,
   "diff": 4,
   "ppg": 18.6,
   "leagueRank": 35,
   "rating": 0.4,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0
  },
  {
   "name": "Holly Ferguson",
   "gender": "Female",
   "team": "Spin Doctors",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 24,
   "losses": 31,
   "pointsWon": 1013,
   "totalPointsAgainst": 1033,
   "mixedWins": 11,
   "mixedLosses": 16,
   "genderWins": 13,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 13,
   "winPct": 43.6,
   "diff": -20,
   "ppg": 18.4,
   "leagueRank": 28,
   "rating": 0.9,
   "ratingGames": 55,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1,
   "playerId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "name": "Hafeez Saheed",
   "gender": "Male",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 22,
   "losses": 32,
   "pointsWon": 976,
   "totalPointsAgainst": 1030,
   "mixedWins": 10,
   "mixedLosses": 17,
   "genderWins": 12,
   "genderLosses": 15,
   "clutchWins": 12,
   "clutchLosses": 15,
   "winPct": 40.7,
   "diff": -54,
   "ppg": 18.1,
   "leagueRank": 33,
   "rating": -1,
   "ratingGames": 54,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "name": "Paul Phillips",
   "gender": "Male",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 22,
   "losses": 32,
   "pointsWon": 967,
   "totalPointsAgainst": 1045,
   "mixedWins": 10,
   "mixedLosses": 17,
   "genderWins": 12,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 40.7,
   "diff": -78,
   "ppg": 17.9,
   "leagueRank": 31,
   "rating": -0.1,
   "ratingGames": 54,
   "confidence": 88,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "name": "Shannon Dominczyk",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 22,
   "losses": 32,
   "pointsWon": 945,
   "totalPointsAgainst": 1036,
   "mixedWins": 12,
   "mixedLosses": 15,
   "genderWins": 10,
   "genderLosses": 17,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 40.7,
   "diff": -91,
   "ppg": 17.5,
   "leagueRank": 39,
   "rating": -1,
   "ratingGames": 54,
   "confidence": 88,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "d2c9d478-0edf-4328-b736-e63fa11ba882"
  },
  {
   "name": "Scott Heist",
   "gender": "Male",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 25,
   "losses": 38,
   "pointsWon": 1148,
   "totalPointsAgainst": 1207,
   "mixedWins": 8,
   "mixedLosses": 23,
   "genderWins": 17,
   "genderLosses": 15,
   "clutchWins": 10,
   "clutchLosses": 13,
   "winPct": 39.7,
   "diff": -59,
   "ppg": 18.2,
   "leagueRank": 32,
   "rating": -0.8,
   "ratingGames": 63,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "3949f105-cb2f-459e-8396-d0d76a350480"
  },
  {
   "name": "Lucia Capone",
   "gender": "Female",
   "team": "Pickle Bunch",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 18,
   "losses": 28,
   "pointsWon": 836,
   "totalPointsAgainst": 876,
   "mixedWins": 9,
   "mixedLosses": 14,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 39.1,
   "diff": -40,
   "ppg": 18.2,
   "leagueRank": 38,
   "rating": -0.7,
   "ratingGames": 46,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0,
   "playerId": "df798628-8a59-49a0-959b-4885dd5dc7c9"
  },
  {
   "name": "Dave Digrius",
   "gender": "Male",
   "team": "Honeydrippers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 15,
   "losses": 24,
   "pointsWon": 705,
   "totalPointsAgainst": 751,
   "mixedWins": 9,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 38.5,
   "diff": -46,
   "ppg": 18.1,
   "leagueRank": 41,
   "rating": -1.6,
   "ratingGames": 39,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "0ff57cbc-6f0e-4940-bc65-3b671dcbfabf"
  },
  {
   "name": "Mary Pat Chiswick",
   "gender": "Female",
   "team": "Spin Doctors",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 15,
   "losses": 24,
   "pointsWon": 660,
   "totalPointsAgainst": 738,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 8,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 38.5,
   "diff": -78,
   "ppg": 16.9,
   "leagueRank": 45,
   "rating": -2,
   "ratingGames": 39,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "9e69c47b-3aa5-45bf-b385-c688cadbfc3a"
  },
  {
   "name": "Bill Vit",
   "gender": "Male",
   "team": "Spin Doctors",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 297,
   "totalPointsAgainst": 298,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "1993029d-4e84-416d-a8aa-48fde81e5ad9",
   "winPct": 37.5,
   "diff": -1,
   "ppg": 18.6,
   "leagueRank": 52,
   "rating": 2.2,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Lynn Bresnahan",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 142,
   "totalPointsAgainst": 151,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8",
   "winPct": 37.5,
   "diff": -9,
   "ppg": 17.8,
   "leagueRank": 57,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Kara Chubrik",
   "gender": "Female",
   "team": "Spin Doctors",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 147,
   "totalPointsAgainst": 160,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "6848f02a-1acc-47f8-8743-3525311031a9",
   "winPct": 37.5,
   "diff": -13,
   "ppg": 18.4,
   "leagueRank": 56,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 2
  },
  {
   "name": "Jeannine Kreilick",
   "gender": "Female",
   "team": "Honeydrippers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 7,
   "losses": 12,
   "pointsWon": 332,
   "totalPointsAgainst": 363,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 36.8,
   "diff": -31,
   "ppg": 17.5,
   "leagueRank": 49,
   "rating": -2.8,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.9,
   "playerId": "6e8c421e-71c9-4331-8b77-54fef8181744"
  },
  {
   "name": "Martin Clifford",
   "gender": "Male",
   "team": "Honeydrippers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 255,
   "totalPointsAgainst": 276,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "9d4a74f8-90f6-4b40-b714-9c72f7cd9dcc",
   "winPct": 35.7,
   "diff": -21,
   "ppg": 18.2,
   "leagueRank": 60,
   "rating": -1.2,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Warren Meade",
   "gender": "Male",
   "team": "Pickle Bunch",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 253,
   "totalPointsAgainst": 281,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 6,
   "playerId": "57c42d81-72e1-4e3c-8f52-397d8030a513",
   "winPct": 35.7,
   "diff": -28,
   "ppg": 18.1,
   "leagueRank": 53,
   "rating": -2.2,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Rob Hammer",
   "gender": "Male",
   "team": "Honeydrippers",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 11,
   "losses": 20,
   "pointsWon": 552,
   "totalPointsAgainst": 600,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 35.5,
   "diff": -48,
   "ppg": 17.8,
   "leagueRank": 43,
   "rating": -1.7,
   "ratingGames": 31,
   "confidence": 83,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "8be9c038-7619-4b46-af98-fc5be2811cd0"
  },
  {
   "name": "Jessica Neglia",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 13,
   "losses": 24,
   "pointsWon": 633,
   "totalPointsAgainst": 714,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 35.1,
   "diff": -81,
   "ppg": 17.1,
   "leagueRank": 44,
   "rating": -0.1,
   "ratingGames": 37,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1,
   "playerId": "7c876269-7c67-41a9-9857-2dae62608a57"
  },
  {
   "name": "Manuela Caiati",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 17,
   "losses": 35,
   "pointsWon": 889,
   "totalPointsAgainst": 1020,
   "mixedWins": 11,
   "mixedLosses": 15,
   "genderWins": 6,
   "genderLosses": 20,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 32.7,
   "diff": -131,
   "ppg": 17.1,
   "leagueRank": 46,
   "rating": -0.4,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb"
  },
  {
   "name": "Brogan O'Connell",
   "gender": "Male",
   "team": "Pickle Bunch",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 12,
   "losses": 26,
   "pointsWon": 640,
   "totalPointsAgainst": 749,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 31.6,
   "diff": -109,
   "ppg": 16.8,
   "leagueRank": 48,
   "rating": -2.8,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "b592a65c-858e-4bdd-9ea1-c23404ada7ff"
  },
  {
   "name": "Paul King",
   "gender": "Male",
   "team": "Honeydrippers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 127,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "610394c3-e392-4396-8c66-148087a639cd",
   "winPct": 28.6,
   "diff": -16,
   "ppg": 18.1,
   "leagueRank": 62,
   "rating": -0.2,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Judy Livermore",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 10,
   "losses": 27,
   "pointsWon": 617,
   "totalPointsAgainst": 715,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 27,
   "diff": -98,
   "ppg": 16.7,
   "leagueRank": 47,
   "rating": -0.3,
   "ratingGames": 37,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.1,
   "playerId": "2031316a-f325-44c0-80e5-098323882939"
  },
  {
   "name": "Jim August",
   "gender": "Male",
   "team": "Pickle Bunch",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 10,
   "losses": 28,
   "pointsWon": 647,
   "totalPointsAgainst": 766,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 16,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 26.3,
   "diff": -119,
   "ppg": 17,
   "leagueRank": 50,
   "rating": -3.3,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "b60a9885-3603-43d6-8c68-0fad529269b4"
  },
  {
   "name": "Leah Greenstein",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 237,
   "totalPointsAgainst": 278,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "ca06b5ce-3001-408e-bdc6-9e183022b9f3",
   "winPct": 21.4,
   "diff": -41,
   "ppg": 16.9,
   "leagueRank": 55,
   "rating": -1.7,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Corinne Demeuse",
   "gender": "Female",
   "team": "Pickle Bunch",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 224,
   "totalPointsAgainst": 283,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "2a820b56-af8a-4856-8db8-fb8e7c133e08",
   "winPct": 21.4,
   "diff": -59,
   "ppg": 16,
   "leagueRank": 61,
   "rating": -4.2,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Cole Curran",
   "gender": "Male",
   "team": "Pickle Bunch",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 208,
   "totalPointsAgainst": 282,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "64f61bb2-93df-457a-8822-15aafeba1c25",
   "winPct": 21.4,
   "diff": -74,
   "ppg": 14.9,
   "leagueRank": 63,
   "rating": -3.6,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Maryann Tapp",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 124,
   "totalPointsAgainst": 165,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 12.5,
   "diff": -41,
   "ppg": 15.5,
   "leagueRank": 67,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "fba82708-f25f-4a0a-a8b0-9d509a126e1d"
  },
  {
   "name": "Nancy Johnston",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 77,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "41a15db4-e9ec-48ed-9ec9-f49ab12c9578",
   "winPct": 0,
   "diff": -91,
   "ppg": 9.6,
   "leagueRank": 68,
   "rating": -4.5,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 2.1
  },
  {
   "name": "Milinda Heist",
   "gender": "Female",
   "team": "Ladies & Lords of Dinkingham",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 0,
   "losses": 15,
   "pointsWon": 201,
   "totalPointsAgainst": 315,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "563e3cdf-0512-46c8-8d14-a59d83cd4f88",
   "winPct": 0,
   "diff": -114,
   "ppg": 13.4,
   "leagueRank": 66,
   "rating": -2.2,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 2.3
  }
 ],
 "teams": [
  {
   "name": "Honeydrippers",
   "w": 6,
   "l": 2,
   "pf": 4896,
   "pa": 4684,
   "gw": 141,
   "gl": 115,
   "diff": 212,
   "gameDiff": 26,
   "power": 0.7,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     71,
     57
    ],
    "male": [
     31,
     33
    ],
    "female": [
     39,
     25
    ]
   }
  },
  {
   "name": "Pickle Bunch",
   "w": 6,
   "l": 2,
   "pf": 4840,
   "pa": 4685,
   "gw": 136,
   "gl": 120,
   "diff": 155,
   "gameDiff": 16,
   "power": 0.4,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     71,
     57
    ],
    "male": [
     24,
     40
    ],
    "female": [
     41,
     23
    ]
   }
  },
  {
   "name": "Spin Doctors",
   "w": 4,
   "l": 4,
   "pf": 4802,
   "pa": 4715,
   "gw": 140,
   "gl": 116,
   "diff": 87,
   "gameDiff": 24,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     68,
     60
    ],
    "male": [
     40,
     24
    ],
    "female": [
     32,
     32
    ]
   }
  },
  {
   "name": "Ladies & Lords of Dinkingham",
   "w": 0,
   "l": 8,
   "pf": 4584,
   "pa": 5038,
   "gw": 95,
   "gl": 161,
   "diff": -454,
   "gameDiff": -66,
   "power": -0.4,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     46,
     82
    ],
    "male": [
     33,
     31
    ],
    "female": [
     16,
     48
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Jeannine Kreilick",
   "b": "Rob Hammer",
   "team": "Honeydrippers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.8,
   "avgActual": 4,
   "avgExpected": -2.5,
   "aId": "6e8c421e-71c9-4331-8b77-54fef8181744",
   "bId": "8be9c038-7619-4b46-af98-fc5be2811cd0"
  },
  {
   "a": "Manuela Caiati",
   "b": "Alfred Soliman",
   "team": "Ladies & Lords of Dinkingham",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 5.3,
   "avgExpected": -0.6,
   "aId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb",
   "bId": "bb9067e6-d693-47c2-840a-c21a08812694"
  },
  {
   "a": "Manuela Caiati",
   "b": "Paul Phillips",
   "team": "Ladies & Lords of Dinkingham",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 3,
   "avgExpected": -1.5,
   "aId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Brett Wilson",
   "b": "Butch Kreilick",
   "team": "Honeydrippers",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 8.8,
   "avgExpected": 4.1,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Jennifer Hurley",
   "b": "Mary Pat Chiswick",
   "team": "Spin Doctors",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2.2,
   "avgActual": 2.3,
   "avgExpected": -1.4,
   "aId": "347f856f-cd7e-411b-bed9-3d4670a88221",
   "bId": "9e69c47b-3aa5-45bf-b385-c688cadbfc3a"
  },
  {
   "a": "Jennifer Czech",
   "b": "Amy Brown",
   "team": "Honeydrippers",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 5.5,
   "avgExpected": 2,
   "aId": "24c88ced-2e38-4ea6-b2ec-d76c42a6112c",
   "bId": "f837b726-d8f1-4a80-a687-b170c415b752"
  },
  {
   "a": "Alexey Kudymov",
   "b": "Hector Lopez",
   "team": "Spin Doctors",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 4,
   "avgExpected": 0.1,
   "aId": "25db4299-16c8-47b6-84d5-bcf3bafba874",
   "bId": "e02b2266-0586-4da7-9451-b90445d145bf"
  },
  {
   "a": "Natalia Fischer",
   "b": "Amy Brown",
   "team": "Honeydrippers",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 4.8,
   "avgExpected": 1.3,
   "aId": "79578efc-55c2-49fb-9f69-2f776055ff70",
   "bId": "f837b726-d8f1-4a80-a687-b170c415b752"
  },
  {
   "a": "Dave Digrius",
   "b": "Judy Macarthur",
   "team": "Honeydrippers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 1.3,
   "avgExpected": -2.6,
   "aId": "0ff57cbc-6f0e-4940-bc65-3b671dcbfabf",
   "bId": "5033e2ab-5a4b-4f98-b5b1-ed9b53bc57a2"
  },
  {
   "a": "Cathy Orourke",
   "b": "Amy Brown",
   "team": "Honeydrippers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 7.7,
   "avgExpected": 3.6,
   "aId": "d0485529-ede0-4a73-b48c-a0a57803ff25",
   "bId": "f837b726-d8f1-4a80-a687-b170c415b752"
  },
  {
   "a": "Alexey Kudymov",
   "b": "Mary Pat Chiswick",
   "team": "Spin Doctors",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 1.5,
   "avgExpected": -1.7,
   "aId": "25db4299-16c8-47b6-84d5-bcf3bafba874",
   "bId": "9e69c47b-3aa5-45bf-b385-c688cadbfc3a"
  },
  {
   "a": "Tracey Garcia",
   "b": "Christine Levesque",
   "team": "Spin Doctors",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 1.6,
   "avgActual": 2,
   "avgExpected": -0.4,
   "aId": "74eac1f8-7aa0-4c21-ace3-55d26eca09c8",
   "bId": "e34d4b70-a0fc-4087-8386-98fb172aee4c"
  },
  {
   "a": "Holly Ferguson",
   "b": "Jane Straley",
   "team": "Spin Doctors",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5.5,
   "avgExpected": 2.2,
   "aId": "a1b6d08e-816a-4e07-84f2-616a7050b00b",
   "bId": "fe7c9b2d-efd7-4497-beb6-f1041afa73ec"
  },
  {
   "a": "Anthony Deangelis",
   "b": "Jackie Fuchs",
   "team": "Pickle Bunch",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 5.4,
   "avgExpected": 2.6,
   "aId": "4b9f7f7b-5027-482c-93aa-66ca594436db",
   "bId": "9018196a-ba52-4fca-a1d2-3b2b8a6cbedc"
  },
  {
   "a": "Ren Mortara",
   "b": "Christine Levesque",
   "team": "Spin Doctors",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 4.7,
   "avgExpected": 2.3,
   "aId": "91b2bf26-24f1-437f-82d4-f8ad382c0479",
   "bId": "e34d4b70-a0fc-4087-8386-98fb172aee4c"
  },
  {
   "a": "Sam Doctor",
   "b": "Natalia Fischer",
   "team": "Honeydrippers",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 4.9,
   "avgExpected": 2.8,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "79578efc-55c2-49fb-9f69-2f776055ff70"
  },
  {
   "a": "Jessica Neglia",
   "b": "Tom Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.2,
   "avgExpected": 0.8,
   "aId": "7c876269-7c67-41a9-9857-2dae62608a57",
   "bId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5"
  },
  {
   "a": "Scott Heist",
   "b": "Alfred Soliman",
   "team": "Ladies & Lords of Dinkingham",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 6.3,
   "avgExpected": 3.2,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "bb9067e6-d693-47c2-840a-c21a08812694"
  },
  {
   "a": "Tom Dominczyk",
   "b": "Paul Phillips",
   "team": "Ladies & Lords of Dinkingham",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.4,
   "avgExpected": 1.5,
   "aId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Brogan O'Connell",
   "b": "Lucia Capone",
   "team": "Pickle Bunch",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.2,
   "avgActual": -0.8,
   "avgExpected": -3,
   "aId": "b592a65c-858e-4bdd-9ea1-c23404ada7ff",
   "bId": "df798628-8a59-49a0-959b-4885dd5dc7c9"
  },
  {
   "a": "Anthony Deangelis",
   "b": "Anthony Leone",
   "team": "Pickle Bunch",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.8,
   "avgExpected": 2.3,
   "aId": "4b9f7f7b-5027-482c-93aa-66ca594436db",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Sam Doctor",
   "b": "Cathy Orourke",
   "team": "Honeydrippers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 6.3,
   "avgExpected": 3.4,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "d0485529-ede0-4a73-b48c-a0a57803ff25"
  },
  {
   "a": "Paul Phillips",
   "b": "Shannon Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 1.7,
   "avgExpected": -0.9,
   "aId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3",
   "bId": "d2c9d478-0edf-4328-b736-e63fa11ba882"
  },
  {
   "a": "Jessica Neglia",
   "b": "Paul Phillips",
   "team": "Ladies & Lords of Dinkingham",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 1,
   "avgActual": -1.1,
   "avgExpected": -2.7,
   "aId": "7c876269-7c67-41a9-9857-2dae62608a57",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Grace Brennan",
   "b": "Sharon Oddy",
   "team": "Pickle Bunch",
   "n": 12,
   "w": 12,
   "l": 0,
   "synergy": 1,
   "avgActual": 7,
   "avgExpected": 5.7,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "a": "Sharon Oddy",
   "b": "Rob Oddy",
   "team": "Pickle Bunch",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.7,
   "avgExpected": 3.3,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "a": "Scott Heist",
   "b": "Tom Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 1,
   "avgActual": 1.4,
   "avgExpected": 0,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5"
  },
  {
   "a": "Grace Brennan",
   "b": "Rob Oddy",
   "team": "Pickle Bunch",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 5.3,
   "avgExpected": 3.9,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "a": "Apparao Avancha",
   "b": "Butch Kreilick",
   "team": "Honeydrippers",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 0.9,
   "avgActual": 2.3,
   "avgExpected": 1,
   "aId": "d84632f4-bec0-4399-8b04-64c6ea340362",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Hafeez Saheed",
   "b": "Shannon Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.8,
   "avgActual": 0.4,
   "avgExpected": -0.8,
   "aId": "a0d294b1-27ed-4751-ae6c-eadf62746d20",
   "bId": "d2c9d478-0edf-4328-b736-e63fa11ba882"
  },
  {
   "a": "Jackie Fuchs",
   "b": "Jim August",
   "team": "Pickle Bunch",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.6,
   "avgExpected": -2,
   "aId": "9018196a-ba52-4fca-a1d2-3b2b8a6cbedc",
   "bId": "b60a9885-3603-43d6-8c68-0fad529269b4"
  },
  {
   "a": "Rich Aronow",
   "b": "Alexey Kudymov",
   "team": "Spin Doctors",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.8,
   "avgActual": 0.4,
   "avgExpected": -0.7,
   "aId": "0ca5c008-b5e9-428e-968c-216e1882c348",
   "bId": "25db4299-16c8-47b6-84d5-bcf3bafba874"
  },
  {
   "a": "Scott Heist",
   "b": "Leah Greenstein",
   "team": "Ladies & Lords of Dinkingham",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -3,
   "avgExpected": -4.8,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "ca06b5ce-3001-408e-bdc6-9e183022b9f3"
  },
  {
   "a": "Brett Wilson",
   "b": "Judy Macarthur",
   "team": "Honeydrippers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 3.7,
   "avgExpected": 1.8,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "5033e2ab-5a4b-4f98-b5b1-ed9b53bc57a2"
  },
  {
   "a": "Judy Livermore",
   "b": "Leah Greenstein",
   "team": "Ladies & Lords of Dinkingham",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -1.5,
   "avgExpected": -2.9,
   "aId": "2031316a-f325-44c0-80e5-098323882939",
   "bId": "ca06b5ce-3001-408e-bdc6-9e183022b9f3"
  },
  {
   "a": "Judy Macarthur",
   "b": "Amy Brown",
   "team": "Honeydrippers",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": 0.1,
   "aId": "5033e2ab-5a4b-4f98-b5b1-ed9b53bc57a2",
   "bId": "f837b726-d8f1-4a80-a687-b170c415b752"
  },
  {
   "a": "Scott Heist",
   "b": "Hafeez Saheed",
   "team": "Ladies & Lords of Dinkingham",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.6,
   "avgActual": 1.1,
   "avgExpected": 0.3,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Dan Amabile",
   "b": "Ren Mortara",
   "team": "Spin Doctors",
   "n": 13,
   "w": 10,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 1.7,
   "avgExpected": 0.8,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "a": "Jennifer Czech",
   "b": "Judy Macarthur",
   "team": "Honeydrippers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": 0,
   "aId": "24c88ced-2e38-4ea6-b2ec-d76c42a6112c",
   "bId": "5033e2ab-5a4b-4f98-b5b1-ed9b53bc57a2"
  },
  {
   "a": "Marianne Rosato",
   "b": "Butch Kreilick",
   "team": "Honeydrippers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4,
   "avgExpected": 2.9,
   "aId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Rich Aronow",
   "b": "Holly Ferguson",
   "team": "Spin Doctors",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 0.4,
   "avgActual": 0.6,
   "avgExpected": 0,
   "aId": "0ca5c008-b5e9-428e-968c-216e1882c348",
   "bId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "a": "Holly Ferguson",
   "b": "Christine Levesque",
   "team": "Spin Doctors",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 0.4,
   "avgActual": -0.9,
   "avgExpected": -1.4,
   "aId": "a1b6d08e-816a-4e07-84f2-616a7050b00b",
   "bId": "e34d4b70-a0fc-4087-8386-98fb172aee4c"
  },
  {
   "a": "Grace Brennan",
   "b": "Sheila Curran",
   "team": "Pickle Bunch",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 6.3,
   "avgExpected": 5.4,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "a": "Manuela Caiati",
   "b": "Shannon Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 0.4,
   "avgActual": -1.6,
   "avgExpected": -2.1,
   "aId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb",
   "bId": "d2c9d478-0edf-4328-b736-e63fa11ba882"
  },
  {
   "a": "Dave Digrius",
   "b": "Butch Kreilick",
   "team": "Honeydrippers",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.5,
   "aId": "0ff57cbc-6f0e-4940-bc65-3b671dcbfabf",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Judy Livermore",
   "b": "Scott Heist",
   "team": "Ladies & Lords of Dinkingham",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.8,
   "aId": "2031316a-f325-44c0-80e5-098323882939",
   "bId": "3949f105-cb2f-459e-8396-d0d76a350480"
  },
  {
   "a": "Grace Brennan",
   "b": "Anthony Deangelis",
   "team": "Pickle Bunch",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.5,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "4b9f7f7b-5027-482c-93aa-66ca594436db"
  },
  {
   "a": "Judy Macarthur",
   "b": "Natalia Fischer",
   "team": "Honeydrippers",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1.8,
   "avgExpected": 1.3,
   "aId": "5033e2ab-5a4b-4f98-b5b1-ed9b53bc57a2",
   "bId": "79578efc-55c2-49fb-9f69-2f776055ff70"
  },
  {
   "a": "Grace Brennan",
   "b": "Anthony Leone",
   "team": "Pickle Bunch",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 4.3,
   "avgExpected": 3.5,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Rich Aronow",
   "b": "Dan Amabile",
   "team": "Spin Doctors",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1.3,
   "avgExpected": 0.9,
   "aId": "0ca5c008-b5e9-428e-968c-216e1882c348",
   "bId": "3d3123f8-a4db-460f-8df3-70e6271cacfa"
  },
  {
   "a": "Warren Meade",
   "b": "Jim August",
   "team": "Pickle Bunch",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -3.5,
   "avgExpected": -4.1,
   "aId": "57c42d81-72e1-4e3c-8f52-397d8030a513",
   "bId": "b60a9885-3603-43d6-8c68-0fad529269b4"
  },
  {
   "a": "Jennifer Hurley",
   "b": "Tracey Garcia",
   "team": "Spin Doctors",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.5,
   "avgExpected": 2.8,
   "aId": "347f856f-cd7e-411b-bed9-3d4670a88221",
   "bId": "74eac1f8-7aa0-4c21-ace3-55d26eca09c8"
  },
  {
   "a": "Natalia Fischer",
   "b": "Cathy Orourke",
   "team": "Honeydrippers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.8,
   "avgExpected": 4.1,
   "aId": "79578efc-55c2-49fb-9f69-2f776055ff70",
   "bId": "d0485529-ede0-4a73-b48c-a0a57803ff25"
  },
  {
   "a": "Manuela Caiati",
   "b": "Milinda Heist",
   "team": "Ladies & Lords of Dinkingham",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -7,
   "avgExpected": -7.6,
   "aId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb",
   "bId": "563e3cdf-0512-46c8-8d14-a59d83cd4f88"
  },
  {
   "a": "Rob Hammer",
   "b": "Amy Brown",
   "team": "Honeydrippers",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.5,
   "avgExpected": -1.9,
   "aId": "8be9c038-7619-4b46-af98-fc5be2811cd0",
   "bId": "f837b726-d8f1-4a80-a687-b170c415b752"
  },
  {
   "a": "Tracey Garcia",
   "b": "Mary Pat Chiswick",
   "team": "Spin Doctors",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.2,
   "avgExpected": -0.7,
   "aId": "74eac1f8-7aa0-4c21-ace3-55d26eca09c8",
   "bId": "9e69c47b-3aa5-45bf-b385-c688cadbfc3a"
  },
  {
   "a": "Dave Digrius",
   "b": "Apparao Avancha",
   "team": "Honeydrippers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -0.6,
   "avgExpected": -1,
   "aId": "0ff57cbc-6f0e-4940-bc65-3b671dcbfabf",
   "bId": "d84632f4-bec0-4399-8b04-64c6ea340362"
  },
  {
   "a": "Jackie Fuchs",
   "b": "Brogan O'Connell",
   "team": "Pickle Bunch",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -2.3,
   "avgExpected": -2.7,
   "aId": "9018196a-ba52-4fca-a1d2-3b2b8a6cbedc",
   "bId": "b592a65c-858e-4bdd-9ea1-c23404ada7ff"
  },
  {
   "a": "Rob Oddy",
   "b": "Jim August",
   "team": "Pickle Bunch",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -2,
   "avgExpected": -2.4,
   "aId": "89ba31d0-20be-4443-b93e-aab0866ad62d",
   "bId": "b60a9885-3603-43d6-8c68-0fad529269b4"
  },
  {
   "a": "Grace Brennan",
   "b": "Jim August",
   "team": "Pickle Bunch",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.4,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "b60a9885-3603-43d6-8c68-0fad529269b4"
  },
  {
   "a": "Anthony Deangelis",
   "b": "Sharon Oddy",
   "team": "Pickle Bunch",
   "n": 16,
   "w": 13,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 3.8,
   "avgExpected": 3.7,
   "aId": "4b9f7f7b-5027-482c-93aa-66ca594436db",
   "bId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "a": "Scott Heist",
   "b": "Shannon Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": 0.1,
   "avgActual": -0.4,
   "avgExpected": -0.4,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "d2c9d478-0edf-4328-b736-e63fa11ba882"
  },
  {
   "a": "Kerry Andrews",
   "b": "Hafeez Saheed",
   "team": "Ladies & Lords of Dinkingham",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.3,
   "avgExpected": 0,
   "aId": "3b0373be-f09e-4371-8c6a-242a8366fb3a",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Kerry Andrews",
   "b": "Shannon Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1,
   "aId": "3b0373be-f09e-4371-8c6a-242a8366fb3a",
   "bId": "d2c9d478-0edf-4328-b736-e63fa11ba882"
  },
  {
   "a": "Jessica Neglia",
   "b": "Shannon Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.6,
   "avgExpected": -1.7,
   "aId": "7c876269-7c67-41a9-9857-2dae62608a57",
   "bId": "d2c9d478-0edf-4328-b736-e63fa11ba882"
  },
  {
   "a": "Rob Oddy",
   "b": "Brogan O'Connell",
   "team": "Pickle Bunch",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0,
   "avgActual": -2.1,
   "avgExpected": -2.2,
   "aId": "89ba31d0-20be-4443-b93e-aab0866ad62d",
   "bId": "b592a65c-858e-4bdd-9ea1-c23404ada7ff"
  },
  {
   "a": "Natalia Fischer",
   "b": "Butch Kreilick",
   "team": "Honeydrippers",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.6,
   "avgExpected": 0.7,
   "aId": "79578efc-55c2-49fb-9f69-2f776055ff70",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Alexey Kudymov",
   "b": "Tracey Garcia",
   "team": "Spin Doctors",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 0,
   "avgActual": 0.6,
   "avgExpected": 0.6,
   "aId": "25db4299-16c8-47b6-84d5-bcf3bafba874",
   "bId": "74eac1f8-7aa0-4c21-ace3-55d26eca09c8"
  },
  {
   "a": "Alfred Soliman",
   "b": "Shannon Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 1.3,
   "avgExpected": 1.4,
   "aId": "bb9067e6-d693-47c2-840a-c21a08812694",
   "bId": "d2c9d478-0edf-4328-b736-e63fa11ba882"
  },
  {
   "a": "Jim August",
   "b": "Lucia Capone",
   "team": "Pickle Bunch",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0,
   "avgActual": -2.3,
   "avgExpected": -2.2,
   "aId": "b60a9885-3603-43d6-8c68-0fad529269b4",
   "bId": "df798628-8a59-49a0-959b-4885dd5dc7c9"
  },
  {
   "a": "Ren Mortara",
   "b": "Holly Ferguson",
   "team": "Spin Doctors",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 0.2,
   "avgExpected": 0.3,
   "aId": "91b2bf26-24f1-437f-82d4-f8ad382c0479",
   "bId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "a": "Grace Brennan",
   "b": "Lucia Capone",
   "team": "Pickle Bunch",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.1,
   "avgActual": 1.1,
   "avgExpected": 1.3,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "df798628-8a59-49a0-959b-4885dd5dc7c9"
  },
  {
   "a": "Rob Oddy",
   "b": "Jackie Fuchs",
   "team": "Pickle Bunch",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.3,
   "aId": "89ba31d0-20be-4443-b93e-aab0866ad62d",
   "bId": "9018196a-ba52-4fca-a1d2-3b2b8a6cbedc"
  },
  {
   "a": "Dan Amabile",
   "b": "Mary Pat Chiswick",
   "team": "Spin Doctors",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -5,
   "avgExpected": -4.9,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "9e69c47b-3aa5-45bf-b385-c688cadbfc3a"
  },
  {
   "a": "Jennifer Czech",
   "b": "Cathy Orourke",
   "team": "Honeydrippers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1.7,
   "avgExpected": 1.9,
   "aId": "24c88ced-2e38-4ea6-b2ec-d76c42a6112c",
   "bId": "d0485529-ede0-4a73-b48c-a0a57803ff25"
  },
  {
   "a": "Dan Amabile",
   "b": "Holly Ferguson",
   "team": "Spin Doctors",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": -0.2,
   "avgActual": -2.1,
   "avgExpected": -1.7,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "a": "Natalia Fischer",
   "b": "Apparao Avancha",
   "team": "Honeydrippers",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 2.4,
   "avgExpected": 2.9,
   "aId": "79578efc-55c2-49fb-9f69-2f776055ff70",
   "bId": "d84632f4-bec0-4399-8b04-64c6ea340362"
  },
  {
   "a": "Sam Doctor",
   "b": "Butch Kreilick",
   "team": "Honeydrippers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.7,
   "avgExpected": 2.4,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Cathy Orourke",
   "b": "Apparao Avancha",
   "team": "Honeydrippers",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 2.5,
   "avgExpected": 3,
   "aId": "d0485529-ede0-4a73-b48c-a0a57803ff25",
   "bId": "d84632f4-bec0-4399-8b04-64c6ea340362"
  },
  {
   "a": "Milinda Heist",
   "b": "Paul Phillips",
   "team": "Ladies & Lords of Dinkingham",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -7.7,
   "avgExpected": -7,
   "aId": "563e3cdf-0512-46c8-8d14-a59d83cd4f88",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Scott Heist",
   "b": "Paul Phillips",
   "team": "Ladies & Lords of Dinkingham",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.4,
   "avgActual": -1.8,
   "avgExpected": -1.2,
   "aId": "3949f105-cb2f-459e-8396-d0d76a350480",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Jackie Fuchs",
   "b": "Lucia Capone",
   "team": "Pickle Bunch",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": -0.4,
   "avgActual": -1.2,
   "avgExpected": -0.6,
   "aId": "9018196a-ba52-4fca-a1d2-3b2b8a6cbedc",
   "bId": "df798628-8a59-49a0-959b-4885dd5dc7c9"
  },
  {
   "a": "Anthony Deangelis",
   "b": "Rob Oddy",
   "team": "Pickle Bunch",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": -0.5,
   "avgActual": 1.1,
   "avgExpected": 1.7,
   "aId": "4b9f7f7b-5027-482c-93aa-66ca594436db",
   "bId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "a": "Natalia Fischer",
   "b": "Marianne Rosato",
   "team": "Honeydrippers",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1.7,
   "avgExpected": 2.4,
   "aId": "79578efc-55c2-49fb-9f69-2f776055ff70",
   "bId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3"
  },
  {
   "a": "Dave Digrius",
   "b": "Jeannine Kreilick",
   "team": "Honeydrippers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.3,
   "avgExpected": -0.3,
   "aId": "0ff57cbc-6f0e-4940-bc65-3b671dcbfabf",
   "bId": "6e8c421e-71c9-4331-8b77-54fef8181744"
  },
  {
   "a": "Tracey Garcia",
   "b": "Ren Mortara",
   "team": "Spin Doctors",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.1,
   "aId": "74eac1f8-7aa0-4c21-ace3-55d26eca09c8",
   "bId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "a": "Dan Amabile",
   "b": "Christine Levesque",
   "team": "Spin Doctors",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -2,
   "avgExpected": -1.3,
   "aId": "3d3123f8-a4db-460f-8df3-70e6271cacfa",
   "bId": "e34d4b70-a0fc-4087-8386-98fb172aee4c"
  },
  {
   "a": "Manuela Caiati",
   "b": "Judy Livermore",
   "team": "Ladies & Lords of Dinkingham",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -5.2,
   "avgExpected": -4.3,
   "aId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb",
   "bId": "2031316a-f325-44c0-80e5-098323882939"
  },
  {
   "a": "Grace Brennan",
   "b": "Brogan O'Connell",
   "team": "Pickle Bunch",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -0.5,
   "avgExpected": 0.6,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "b592a65c-858e-4bdd-9ea1-c23404ada7ff"
  },
  {
   "a": "Manuela Caiati",
   "b": "Tom Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -2.2,
   "avgExpected": -1.1,
   "aId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb",
   "bId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5"
  },
  {
   "a": "Jessica Neglia",
   "b": "Hafeez Saheed",
   "team": "Ladies & Lords of Dinkingham",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.8,
   "aId": "7c876269-7c67-41a9-9857-2dae62608a57",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Judy Livermore",
   "b": "Paul Phillips",
   "team": "Ladies & Lords of Dinkingham",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3,
   "avgExpected": -2,
   "aId": "2031316a-f325-44c0-80e5-098323882939",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Alexey Kudymov",
   "b": "Jennifer Hurley",
   "team": "Spin Doctors",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -0.3,
   "avgExpected": 0.8,
   "aId": "25db4299-16c8-47b6-84d5-bcf3bafba874",
   "bId": "347f856f-cd7e-411b-bed9-3d4670a88221"
  },
  {
   "a": "Jennifer Hurley",
   "b": "Christine Levesque",
   "team": "Spin Doctors",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -5,
   "avgExpected": -3.5,
   "aId": "347f856f-cd7e-411b-bed9-3d4670a88221",
   "bId": "e34d4b70-a0fc-4087-8386-98fb172aee4c"
  },
  {
   "a": "Tom Dominczyk",
   "b": "Hafeez Saheed",
   "team": "Ladies & Lords of Dinkingham",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -2,
   "avgExpected": -1,
   "aId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Rich Aronow",
   "b": "Tracey Garcia",
   "team": "Spin Doctors",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.8,
   "avgExpected": 2.1,
   "aId": "0ca5c008-b5e9-428e-968c-216e1882c348",
   "bId": "74eac1f8-7aa0-4c21-ace3-55d26eca09c8"
  },
  {
   "a": "Judy Macarthur",
   "b": "Butch Kreilick",
   "team": "Honeydrippers",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 0.2,
   "avgExpected": 1.5,
   "aId": "5033e2ab-5a4b-4f98-b5b1-ed9b53bc57a2",
   "bId": "f302c81f-4189-4e74-882c-6d8809e73152"
  },
  {
   "a": "Sam Doctor",
   "b": "Apparao Avancha",
   "team": "Honeydrippers",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.8,
   "avgActual": 1.1,
   "avgExpected": 2.4,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "d84632f4-bec0-4399-8b04-64c6ea340362"
  },
  {
   "a": "Judy Livermore",
   "b": "Jessica Neglia",
   "team": "Ladies & Lords of Dinkingham",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -4.7,
   "avgExpected": -2.7,
   "aId": "2031316a-f325-44c0-80e5-098323882939",
   "bId": "7c876269-7c67-41a9-9857-2dae62608a57"
  },
  {
   "a": "Brett Wilson",
   "b": "Sam Doctor",
   "team": "Honeydrippers",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 3.2,
   "avgExpected": 4.7,
   "aId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e",
   "bId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845"
  },
  {
   "a": "Marianne Rosato",
   "b": "Apparao Avancha",
   "team": "Honeydrippers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 0.3,
   "avgExpected": 2.4,
   "aId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3",
   "bId": "d84632f4-bec0-4399-8b04-64c6ea340362"
  },
  {
   "a": "Alexey Kudymov",
   "b": "Ren Mortara",
   "team": "Spin Doctors",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": -0.9,
   "avgActual": -1.6,
   "avgExpected": -0.4,
   "aId": "25db4299-16c8-47b6-84d5-bcf3bafba874",
   "bId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "a": "Sharon Oddy",
   "b": "Jackie Fuchs",
   "team": "Pickle Bunch",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": -0.9,
   "avgActual": 1.4,
   "avgExpected": 2.5,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "9018196a-ba52-4fca-a1d2-3b2b8a6cbedc"
  },
  {
   "a": "Rob Oddy",
   "b": "Lucia Capone",
   "team": "Pickle Bunch",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -2.2,
   "avgExpected": -0.7,
   "aId": "89ba31d0-20be-4443-b93e-aab0866ad62d",
   "bId": "df798628-8a59-49a0-959b-4885dd5dc7c9"
  },
  {
   "a": "Dave Digrius",
   "b": "Jennifer Czech",
   "team": "Honeydrippers",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -1.2,
   "avgExpected": 1.3,
   "aId": "0ff57cbc-6f0e-4940-bc65-3b671dcbfabf",
   "bId": "24c88ced-2e38-4ea6-b2ec-d76c42a6112c"
  },
  {
   "a": "Anthony Deangelis",
   "b": "Hector Lopez",
   "team": "Pickle Bunch",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.2,
   "avgActual": -1.3,
   "avgExpected": 1.4,
   "aId": "4b9f7f7b-5027-482c-93aa-66ca594436db",
   "bId": "e02b2266-0586-4da7-9451-b90445d145bf"
  },
  {
   "a": "Judy Livermore",
   "b": "Tom Dominczyk",
   "team": "Ladies & Lords of Dinkingham",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.3,
   "avgActual": -3,
   "avgExpected": -0.9,
   "aId": "2031316a-f325-44c0-80e5-098323882939",
   "bId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5"
  },
  {
   "a": "Judy Macarthur",
   "b": "Rob Hammer",
   "team": "Honeydrippers",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -5.7,
   "avgExpected": -3,
   "aId": "5033e2ab-5a4b-4f98-b5b1-ed9b53bc57a2",
   "bId": "8be9c038-7619-4b46-af98-fc5be2811cd0"
  },
  {
   "a": "Dave Digrius",
   "b": "Amy Brown",
   "team": "Honeydrippers",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -2.8,
   "avgExpected": -0.5,
   "aId": "0ff57cbc-6f0e-4940-bc65-3b671dcbfabf",
   "bId": "f837b726-d8f1-4a80-a687-b170c415b752"
  },
  {
   "a": "Paul Phillips",
   "b": "Hafeez Saheed",
   "team": "Ladies & Lords of Dinkingham",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -1.4,
   "avgActual": -2.9,
   "avgExpected": -0.9,
   "aId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3",
   "bId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "a": "Dave Digrius",
   "b": "Rob Hammer",
   "team": "Honeydrippers",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1.5,
   "avgActual": -4.1,
   "avgExpected": -1.8,
   "aId": "0ff57cbc-6f0e-4940-bc65-3b671dcbfabf",
   "bId": "8be9c038-7619-4b46-af98-fc5be2811cd0"
  },
  {
   "a": "Brogan O'Connell",
   "b": "Jim August",
   "team": "Pickle Bunch",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -8,
   "avgExpected": -4.9,
   "aId": "b592a65c-858e-4bdd-9ea1-c23404ada7ff",
   "bId": "b60a9885-3603-43d6-8c68-0fad529269b4"
  },
  {
   "a": "Corinne Demeuse",
   "b": "Rob Oddy",
   "team": "Pickle Bunch",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -8,
   "avgExpected": -4.2,
   "aId": "2a820b56-af8a-4856-8db8-fb8e7c133e08",
   "bId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "a": "Alexey Kudymov",
   "b": "Christine Levesque",
   "team": "Spin Doctors",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -5,
   "avgExpected": -1.2,
   "aId": "25db4299-16c8-47b6-84d5-bcf3bafba874",
   "bId": "e34d4b70-a0fc-4087-8386-98fb172aee4c"
  },
  {
   "a": "Jennifer Hurley",
   "b": "Ren Mortara",
   "team": "Spin Doctors",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.7,
   "avgActual": 0.3,
   "avgExpected": 3.7,
   "aId": "347f856f-cd7e-411b-bed9-3d4670a88221",
   "bId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "a": "Mary Pat Chiswick",
   "b": "Holly Ferguson",
   "team": "Spin Doctors",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1.7,
   "avgActual": -4.4,
   "avgExpected": -1.8,
   "aId": "9e69c47b-3aa5-45bf-b385-c688cadbfc3a",
   "bId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "a": "Rich Aronow",
   "b": "Christine Levesque",
   "team": "Spin Doctors",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -4.7,
   "avgExpected": -0.5,
   "aId": "0ca5c008-b5e9-428e-968c-216e1882c348",
   "bId": "e34d4b70-a0fc-4087-8386-98fb172aee4c"
  },
  {
   "a": "Manuela Caiati",
   "b": "Scott Heist",
   "team": "Ladies & Lords of Dinkingham",
   "n": 9,
   "w": 1,
   "l": 8,
   "synergy": -2,
   "avgActual": -4.9,
   "avgExpected": -2,
   "aId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb",
   "bId": "3949f105-cb2f-459e-8396-d0d76a350480"
  },
  {
   "a": "Butch Kreilick",
   "b": "Amy Brown",
   "team": "Honeydrippers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2,
   "avgActual": -3.7,
   "avgExpected": 1,
   "aId": "f302c81f-4189-4e74-882c-6d8809e73152",
   "bId": "f837b726-d8f1-4a80-a687-b170c415b752"
  },
  {
   "a": "Jeannine Kreilick",
   "b": "Amy Brown",
   "team": "Honeydrippers",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -6,
   "avgExpected": -1.7,
   "aId": "6e8c421e-71c9-4331-8b77-54fef8181744",
   "bId": "f837b726-d8f1-4a80-a687-b170c415b752"
  },
  {
   "a": "Mary Pat Chiswick",
   "b": "Hector Lopez",
   "team": "Spin Doctors",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -7.3,
   "avgExpected": -2.4,
   "aId": "9e69c47b-3aa5-45bf-b385-c688cadbfc3a",
   "bId": "e02b2266-0586-4da7-9451-b90445d145bf"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Pickle Bunch",
   "away": "Spin Doctors",
   "time": "2026-06-28T15:30:00",
   "complete": true,
   "homePoints": 570,
   "awayPoints": 605,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ],
     "a": [
      "Christine Levesque",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sheila Curran",
      "Cole Curran"
     ],
     "a": [
      "Holly Ferguson",
      "Rich Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Grace Brennan",
      "Rob Oddy"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Corinne Demeuse",
      "Brogan O'Connell"
     ],
     "a": [
      "Jennifer Hurley",
      "Ren Mortara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sheila Curran",
      "Sharon Oddy"
     ],
     "a": [
      "Holly Ferguson",
      "Christine Levesque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Corinne Demeuse"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Jennifer Hurley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "Cole Curran"
     ],
     "a": [
      "Rich Aronow",
      "Anthony Leone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Brogan O'Connell"
     ],
     "a": [
      "Brett Wilson",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ],
     "a": [
      "Christine Levesque",
      "Rich Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sheila Curran",
      "Rob Oddy"
     ],
     "a": [
      "Holly Ferguson",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Corinne Demeuse",
      "Cole Curran"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Brogan O'Connell"
     ],
     "a": [
      "Jennifer Hurley",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sheila Curran",
      "Grace Brennan"
     ],
     "a": [
      "Christine Levesque",
      "Jennifer Hurley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sharon Oddy",
      "Corinne Demeuse"
     ],
     "a": [
      "Holly Ferguson",
      "Mary Pat Chiswick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "Rob Oddy"
     ],
     "a": [
      "Rich Aronow",
      "Brett Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cole Curran",
      "Brogan O'Connell"
     ],
     "a": [
      "Anthony Leone",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Grace Brennan",
      "Anthony Deangelis"
     ],
     "a": [
      "Holly Ferguson",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sheila Curran",
      "Cole Curran"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Rich Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Corinne Demeuse",
      "Rob Oddy"
     ],
     "a": [
      "Christine Levesque",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Brogan O'Connell"
     ],
     "a": [
      "Jennifer Hurley",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sheila Curran",
      "Sharon Oddy"
     ],
     "a": [
      "Holly Ferguson",
      "Christine Levesque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Corinne Demeuse"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Jennifer Hurley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anthony Deangelis",
      "Cole Curran"
     ],
     "a": [
      "Rich Aronow",
      "Anthony Leone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Brogan O'Connell"
     ],
     "a": [
      "Brett Wilson",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sheila Curran",
      "Anthony Deangelis"
     ],
     "a": [
      "Holly Ferguson",
      "Rich Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sharon Oddy",
      "Cole Curran"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Grace Brennan",
      "Brogan O'Connell"
     ],
     "a": [
      "Christine Levesque",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Corinne Demeuse",
      "Rob Oddy"
     ],
     "a": [
      "Jennifer Hurley",
      "Anthony Leone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sheila Curran",
      "Grace Brennan"
     ],
     "a": [
      "Christine Levesque",
      "Jennifer Hurley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sharon Oddy",
      "Corinne Demeuse"
     ],
     "a": [
      "Holly Ferguson",
      "Mary Pat Chiswick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "Rob Oddy"
     ],
     "a": [
      "Anthony Leone",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Cole Curran",
      "Brogan O'Connell"
     ],
     "a": [
      "Rich Aronow",
      "Brett Wilson"
     ]
    }
   ],
   "subs": [
    "Sheila Curran",
    "Brett Wilson",
    "Anthony Leone",
    "Corinne Demeuse",
    "Cole Curran"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Ladies & Lords of Dinkingham",
   "away": "Honeydrippers",
   "time": "2026-06-28T15:30:00",
   "complete": true,
   "homePoints": 599,
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
      "Jessica Neglia",
      "Paul Phillips"
     ],
     "a": [
      "Marianne Rosato",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Manuela Caiati",
      "Tom Dominczyk"
     ],
     "a": [
      "Natalia Fischer",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Scott Heist"
     ],
     "a": [
      "Judy Macarthur",
      "Dave Digrius"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kerry Andrews",
      "Hafeez Saheed"
     ],
     "a": [
      "Amy Brown",
      "Rob Hammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Jessica Neglia"
     ],
     "a": [
      "Natalia Fischer",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shannon Dominczyk",
      "Kerry Andrews"
     ],
     "a": [
      "Judy Macarthur",
      "Amy Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paul Phillips",
      "Tom Dominczyk"
     ],
     "a": [
      "Butch Kreilick",
      "Apparao Avancha"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Scott Heist",
      "Hafeez Saheed"
     ],
     "a": [
      "Dave Digrius",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessica Neglia",
      "Paul Phillips"
     ],
     "a": [
      "Marianne Rosato",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Scott Heist"
     ],
     "a": [
      "Natalia Fischer",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kerry Andrews",
      "Tom Dominczyk"
     ],
     "a": [
      "Judy Macarthur",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Shannon Dominczyk",
      "Hafeez Saheed"
     ],
     "a": [
      "Amy Brown",
      "Dave Digrius"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Shannon Dominczyk"
     ],
     "a": [
      "Marianne Rosato",
      "Amy Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jessica Neglia",
      "Kerry Andrews"
     ],
     "a": [
      "Natalia Fischer",
      "Judy Macarthur"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paul Phillips",
      "Scott Heist"
     ],
     "a": [
      "Butch Kreilick",
      "Dave Digrius"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tom Dominczyk",
      "Hafeez Saheed"
     ],
     "a": [
      "Apparao Avancha",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Paul Phillips"
     ],
     "a": [
      "Natalia Fischer",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Tom Dominczyk"
     ],
     "a": [
      "Judy Macarthur",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kerry Andrews",
      "Scott Heist"
     ],
     "a": [
      "Marianne Rosato",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Jessica Neglia",
      "Hafeez Saheed"
     ],
     "a": [
      "Amy Brown",
      "Dave Digrius"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Jessica Neglia"
     ],
     "a": [
      "Natalia Fischer",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Kerry Andrews"
     ],
     "a": [
      "Judy Macarthur",
      "Amy Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Paul Phillips",
      "Tom Dominczyk"
     ],
     "a": [
      "Butch Kreilick",
      "Apparao Avancha"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Scott Heist",
      "Hafeez Saheed"
     ],
     "a": [
      "Dave Digrius",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Paul Phillips"
     ],
     "a": [
      "Natalia Fischer",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Neglia",
      "Tom Dominczyk"
     ],
     "a": [
      "Judy Macarthur",
      "Dave Digrius"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Hafeez Saheed"
     ],
     "a": [
      "Marianne Rosato",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kerry Andrews",
      "Scott Heist"
     ],
     "a": [
      "Amy Brown",
      "Apparao Avancha"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Manuela Caiati",
      "Shannon Dominczyk"
     ],
     "a": [
      "Marianne Rosato",
      "Amy Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jessica Neglia",
      "Kerry Andrews"
     ],
     "a": [
      "Natalia Fischer",
      "Judy Macarthur"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paul Phillips",
      "Scott Heist"
     ],
     "a": [
      "Apparao Avancha",
      "Rob Hammer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tom Dominczyk",
      "Hafeez Saheed"
     ],
     "a": [
      "Butch Kreilick",
      "Dave Digrius"
     ]
    }
   ],
   "subs": [
    "Marianne Rosato",
    "Kerry Andrews"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Honeydrippers",
   "away": "Spin Doctors",
   "time": "2026-07-12T15:30:00",
   "complete": true,
   "homePoints": 537,
   "awayPoints": 565,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Natalia Fischer",
      "Apparao Avancha"
     ],
     "a": [
      "Holly Ferguson",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Czech",
      "Paul King"
     ],
     "a": [
      "Christine Levesque",
      "Bill Vit"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeannine Kreilick",
      "Dave Digrius"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Judy Macarthur",
      "Rob Hammer"
     ],
     "a": [
      "Tracey Garcia",
      "Ren Mortara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Natalia Fischer",
      "Jennifer Czech"
     ],
     "a": [
      "Holly Ferguson",
      "Mary Pat Chiswick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Brown",
      "Jeannine Kreilick"
     ],
     "a": [
      "Christine Levesque",
      "Tracey Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Apparao Avancha",
      "Paul King"
     ],
     "a": [
      "Dan Amabile",
      "Bill Vit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dave Digrius",
      "Rob Hammer"
     ],
     "a": [
      "Ren Mortara",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Czech",
      "Paul King"
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
     "as": 17,
     "h": [
      "Natalia Fischer",
      "Dave Digrius"
     ],
     "a": [
      "Christine Levesque",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Brown",
      "Apparao Avancha"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Bill Vit"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Judy Macarthur",
      "Rob Hammer"
     ],
     "a": [
      "Tracey Garcia",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Natalia Fischer",
      "Amy Brown"
     ],
     "a": [
      "Holly Ferguson",
      "Christine Levesque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Judy Macarthur",
      "Jeannine Kreilick"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Tracey Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Paul King",
      "Rob Hammer"
     ],
     "a": [
      "Dan Amabile",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Apparao Avancha",
      "Dave Digrius"
     ],
     "a": [
      "Bill Vit",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Czech",
      "Apparao Avancha"
     ],
     "a": [
      "Christine Levesque",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Brown",
      "Paul King"
     ],
     "a": [
      "Holly Ferguson",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Judy Macarthur",
      "Dave Digrius"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Bill Vit"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeannine Kreilick",
      "Rob Hammer"
     ],
     "a": [
      "Tracey Garcia",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Jennifer Czech"
     ],
     "a": [
      "Holly Ferguson",
      "Christine Levesque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Judy Macarthur",
      "Jeannine Kreilick"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Tracey Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Apparao Avancha",
      "Paul King"
     ],
     "a": [
      "Dan Amabile",
      "Bill Vit"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Dave Digrius",
      "Rob Hammer"
     ],
     "a": [
      "Ren Mortara",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Natalia Fischer",
      "Apparao Avancha"
     ],
     "a": [
      "Holly Ferguson",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Czech",
      "Dave Digrius"
     ],
     "a": [
      "Christine Levesque",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Brown",
      "Paul King"
     ],
     "a": [
      "Tracey Garcia",
      "Bill Vit"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Jeannine Kreilick",
      "Rob Hammer"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jennifer Czech",
      "Judy Macarthur"
     ],
     "a": [
      "Holly Ferguson",
      "Mary Pat Chiswick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Amy Brown"
     ],
     "a": [
      "Christine Levesque",
      "Tracey Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Paul King",
      "Rob Hammer"
     ],
     "a": [
      "Dan Amabile",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Apparao Avancha",
      "Dave Digrius"
     ],
     "a": [
      "Bill Vit",
      "Alexey Kudymov"
     ]
    }
   ],
   "subs": [
    "Bill Vit",
    "Paul King"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Ladies & Lords of Dinkingham",
   "away": "Pickle Bunch",
   "time": "2026-07-12T15:30:00",
   "complete": true,
   "homePoints": 555,
   "awayPoints": 585,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Judy Livermore",
      "Tom Dominczyk"
     ],
     "a": [
      "Grace Brennan",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nancy Johnston",
      "Hafeez Saheed"
     ],
     "a": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Alfred Soliman"
     ],
     "a": [
      "Jackie Fuchs",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Scott Heist"
     ],
     "a": [
      "Lucia Capone",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Johnston",
      "Judy Livermore"
     ],
     "a": [
      "Sharon Oddy",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Manuela Caiati"
     ],
     "a": [
      "Jackie Fuchs",
      "Lucia Capone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tom Dominczyk",
      "Hafeez Saheed"
     ],
     "a": [
      "Anthony Deangelis",
      "Rob Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alfred Soliman",
      "Scott Heist"
     ],
     "a": [
      "Jim August",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Judy Livermore",
      "Tom Dominczyk"
     ],
     "a": [
      "Grace Brennan",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Johnston",
      "Alfred Soliman"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Manuela Caiati",
      "Hafeez Saheed"
     ],
     "a": [
      "Jackie Fuchs",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shannon Dominczyk",
      "Scott Heist"
     ],
     "a": [
      "Lucia Capone",
      "Jim August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nancy Johnston",
      "Shannon Dominczyk"
     ],
     "a": [
      "Grace Brennan",
      "Lucia Capone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Judy Livermore",
      "Manuela Caiati"
     ],
     "a": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Tom Dominczyk",
      "Alfred Soliman"
     ],
     "a": [
      "Anthony Deangelis",
      "Jim August"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hafeez Saheed",
      "Scott Heist"
     ],
     "a": [
      "Rob Oddy",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Tom Dominczyk"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Nancy Johnston",
      "Hafeez Saheed"
     ],
     "a": [
      "Jackie Fuchs",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Manuela Caiati",
      "Alfred Soliman"
     ],
     "a": [
      "Grace Brennan",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Judy Livermore",
      "Scott Heist"
     ],
     "a": [
      "Lucia Capone",
      "Jim August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nancy Johnston",
      "Judy Livermore"
     ],
     "a": [
      "Sharon Oddy",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shannon Dominczyk",
      "Manuela Caiati"
     ],
     "a": [
      "Jackie Fuchs",
      "Lucia Capone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tom Dominczyk",
      "Hafeez Saheed"
     ],
     "a": [
      "Anthony Deangelis",
      "Rob Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alfred Soliman",
      "Scott Heist"
     ],
     "a": [
      "Jim August",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Nancy Johnston",
      "Tom Dominczyk"
     ],
     "a": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Judy Livermore",
      "Hafeez Saheed"
     ],
     "a": [
      "Jackie Fuchs",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Scott Heist"
     ],
     "a": [
      "Grace Brennan",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Alfred Soliman"
     ],
     "a": [
      "Lucia Capone",
      "Rob Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Nancy Johnston",
      "Shannon Dominczyk"
     ],
     "a": [
      "Grace Brennan",
      "Lucia Capone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Judy Livermore",
      "Manuela Caiati"
     ],
     "a": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Tom Dominczyk",
      "Alfred Soliman"
     ],
     "a": [
      "Rob Oddy",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hafeez Saheed",
      "Scott Heist"
     ],
     "a": [
      "Anthony Deangelis",
      "Jim August"
     ]
    }
   ],
   "subs": [
    "Alfred Soliman",
    "Nancy Johnston"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickle Bunch",
   "away": "Honeydrippers",
   "time": "2026-07-19T15:30:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 580,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ],
     "a": [
      "Natalia Fischer",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Grace Brennan",
      "Anthony Leone"
     ],
     "a": [
      "Sheila Curran",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucia Capone",
      "Brogan O'Connell"
     ],
     "a": [
      "Jennifer Czech",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jackie Fuchs",
      "Rob Oddy"
     ],
     "a": [
      "Amy Brown",
      "Cole Curran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ],
     "a": [
      "Natalia Fischer",
      "Sheila Curran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Lucia Capone"
     ],
     "a": [
      "Marianne Rosato",
      "Jennifer Czech"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "Rob Oddy"
     ],
     "a": [
      "Apparao Avancha",
      "Butch Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anthony Leone",
      "Brogan O'Connell"
     ],
     "a": [
      "Dave Digrius",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Anthony Leone"
     ],
     "a": [
      "Natalia Fischer",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jackie Fuchs",
      "Anthony Deangelis"
     ],
     "a": [
      "Sheila Curran",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Grace Brennan",
      "Brogan O'Connell"
     ],
     "a": [
      "Amy Brown",
      "Cole Curran"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lucia Capone",
      "Rob Oddy"
     ],
     "a": [
      "Marianne Rosato",
      "Dave Digrius"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sharon Oddy",
      "Grace Brennan"
     ],
     "a": [
      "Natalia Fischer",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jackie Fuchs",
      "Lucia Capone"
     ],
     "a": [
      "Amy Brown",
      "Jennifer Czech"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anthony Deangelis",
      "Anthony Leone"
     ],
     "a": [
      "Apparao Avancha",
      "Dave Digrius"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rob Oddy",
      "Brogan O'Connell"
     ],
     "a": [
      "Cole Curran",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ],
     "a": [
      "Sheila Curran",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Grace Brennan",
      "Anthony Leone"
     ],
     "a": [
      "Marianne Rosato",
      "Dave Digrius"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lucia Capone",
      "Rob Oddy"
     ],
     "a": [
      "Amy Brown",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jackie Fuchs",
      "Brogan O'Connell"
     ],
     "a": [
      "Jennifer Czech",
      "Cole Curran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sharon Oddy",
      "Grace Brennan"
     ],
     "a": [
      "Natalia Fischer",
      "Sheila Curran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jackie Fuchs",
      "Lucia Capone"
     ],
     "a": [
      "Amy Brown",
      "Jennifer Czech"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anthony Deangelis",
      "Anthony Leone"
     ],
     "a": [
      "Apparao Avancha",
      "Butch Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rob Oddy",
      "Brogan O'Connell"
     ],
     "a": [
      "Cole Curran",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sharon Oddy",
      "Rob Oddy"
     ],
     "a": [
      "Marianne Rosato",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Grace Brennan",
      "Anthony Deangelis"
     ],
     "a": [
      "Natalia Fischer",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lucia Capone",
      "Anthony Leone"
     ],
     "a": [
      "Sheila Curran",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jackie Fuchs",
      "Brogan O'Connell"
     ],
     "a": [
      "Jennifer Czech",
      "Dave Digrius"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ],
     "a": [
      "Sheila Curran",
      "Amy Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Lucia Capone"
     ],
     "a": [
      "Natalia Fischer",
      "Marianne Rosato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anthony Deangelis",
      "Rob Oddy"
     ],
     "a": [
      "Butch Kreilick",
      "Cole Curran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anthony Leone",
      "Brogan O'Connell"
     ],
     "a": [
      "Apparao Avancha",
      "Dave Digrius"
     ]
    }
   ],
   "subs": [
    "Marianne Rosato",
    "Anthony Leone",
    "Sheila Curran",
    "Cole Curran"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Spin Doctors",
   "away": "Ladies & Lords of Dinkingham",
   "time": "2026-07-19T15:30:00",
   "complete": true,
   "homePoints": 624,
   "awayPoints": 586,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Levesque",
      "Dan Amabile"
     ],
     "a": [
      "Jessica Neglia",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Maryann Tapp",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jane Straley",
      "Rich Aronow"
     ],
     "a": [
      "Manuela Caiati",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tracey Garcia",
      "Alexey Kudymov"
     ],
     "a": [
      "Shannon Dominczyk",
      "Paul Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Holly Ferguson",
      "Christine Levesque"
     ],
     "a": [
      "Maryann Tapp",
      "Jessica Neglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jane Straley",
      "Tracey Garcia"
     ],
     "a": [
      "Manuela Caiati",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dan Amabile",
      "Ren Mortara"
     ],
     "a": [
      "Tom Dominczyk",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rich Aronow",
      "Alexey Kudymov"
     ],
     "a": [
      "Scott Heist",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Christine Levesque",
      "Dan Amabile"
     ],
     "a": [
      "Jessica Neglia",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Holly Ferguson",
      "Rich Aronow"
     ],
     "a": [
      "Maryann Tapp",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tracey Garcia",
      "Ren Mortara"
     ],
     "a": [
      "Manuela Caiati",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jane Straley",
      "Alexey Kudymov"
     ],
     "a": [
      "Shannon Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Holly Ferguson",
      "Jane Straley"
     ],
     "a": [
      "Jessica Neglia",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christine Levesque",
      "Tracey Garcia"
     ],
     "a": [
      "Maryann Tapp",
      "Manuela Caiati"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dan Amabile",
      "Rich Aronow"
     ],
     "a": [
      "Tom Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ren Mortara",
      "Alexey Kudymov"
     ],
     "a": [
      "Hafeez Saheed",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jane Straley",
      "Dan Amabile"
     ],
     "a": [
      "Maryann Tapp",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Manuela Caiati",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tracey Garcia",
      "Rich Aronow"
     ],
     "a": [
      "Jessica Neglia",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Levesque",
      "Alexey Kudymov"
     ],
     "a": [
      "Shannon Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Holly Ferguson",
      "Christine Levesque"
     ],
     "a": [
      "Maryann Tapp",
      "Jessica Neglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jane Straley",
      "Tracey Garcia"
     ],
     "a": [
      "Manuela Caiati",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Dan Amabile",
      "Ren Mortara"
     ],
     "a": [
      "Tom Dominczyk",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rich Aronow",
      "Alexey Kudymov"
     ],
     "a": [
      "Scott Heist",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Holly Ferguson",
      "Dan Amabile"
     ],
     "a": [
      "Maryann Tapp",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Levesque",
      "Ren Mortara"
     ],
     "a": [
      "Manuela Caiati",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jane Straley",
      "Alexey Kudymov"
     ],
     "a": [
      "Jessica Neglia",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tracey Garcia",
      "Rich Aronow"
     ],
     "a": [
      "Shannon Dominczyk",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Holly Ferguson",
      "Jane Straley"
     ],
     "a": [
      "Jessica Neglia",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Levesque",
      "Tracey Garcia"
     ],
     "a": [
      "Maryann Tapp",
      "Manuela Caiati"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dan Amabile",
      "Rich Aronow"
     ],
     "a": [
      "Hafeez Saheed",
      "Paul Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ren Mortara",
      "Alexey Kudymov"
     ],
     "a": [
      "Tom Dominczyk",
      "Scott Heist"
     ]
    }
   ],
   "subs": [
    "Jane Straley"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Spin Doctors",
   "away": "Pickle Bunch",
   "time": "2026-07-26T15:30:00",
   "complete": true,
   "homePoints": 624,
   "awayPoints": 605,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Levesque",
      "Dan Amabile"
     ],
     "a": [
      "Grace Brennan",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Rich Aronow"
     ],
     "a": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tao Zhu",
      "Ren Mortara"
     ],
     "a": [
      "Jackie Fuchs",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tracey Garcia",
      "Alexey Kudymov"
     ],
     "a": [
      "Lucia Capone",
      "Jim August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Holly Ferguson",
      "Christine Levesque"
     ],
     "a": [
      "Sharon Oddy",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tao Zhu",
      "Tracey Garcia"
     ],
     "a": [
      "Jackie Fuchs",
      "Lucia Capone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dan Amabile",
      "Rich Aronow"
     ],
     "a": [
      "Anthony Deangelis",
      "Rob Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ren Mortara",
      "Alexey Kudymov"
     ],
     "a": [
      "Brogan O'Connell",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christine Levesque",
      "Dan Amabile"
     ],
     "a": [
      "Grace Brennan",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Sharon Oddy",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tracey Garcia",
      "Rich Aronow"
     ],
     "a": [
      "Jackie Fuchs",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tao Zhu",
      "Alexey Kudymov"
     ],
     "a": [
      "Lucia Capone",
      "Brogan O'Connell"
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
      "Grace Brennan",
      "Lucia Capone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Levesque",
      "Tracey Garcia"
     ],
     "a": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dan Amabile",
      "Ren Mortara"
     ],
     "a": [
      "Anthony Deangelis",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rich Aronow",
      "Alexey Kudymov"
     ],
     "a": [
      "Rob Oddy",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tao Zhu",
      "Dan Amabile"
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
     "as": 23,
     "h": [
      "Holly Ferguson",
      "Rich Aronow"
     ],
     "a": [
      "Jackie Fuchs",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tracey Garcia",
      "Ren Mortara"
     ],
     "a": [
      "Grace Brennan",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christine Levesque",
      "Alexey Kudymov"
     ],
     "a": [
      "Lucia Capone",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Christine Levesque"
     ],
     "a": [
      "Sharon Oddy",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tao Zhu",
      "Tracey Garcia"
     ],
     "a": [
      "Jackie Fuchs",
      "Lucia Capone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dan Amabile",
      "Rich Aronow"
     ],
     "a": [
      "Anthony Deangelis",
      "Rob Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ren Mortara",
      "Alexey Kudymov"
     ],
     "a": [
      "Brogan O'Connell",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Dan Amabile"
     ],
     "a": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Levesque",
      "Rich Aronow"
     ],
     "a": [
      "Jackie Fuchs",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tao Zhu",
      "Alexey Kudymov"
     ],
     "a": [
      "Grace Brennan",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tracey Garcia",
      "Ren Mortara"
     ],
     "a": [
      "Lucia Capone",
      "Rob Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Holly Ferguson",
      "Tao Zhu"
     ],
     "a": [
      "Grace Brennan",
      "Lucia Capone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christine Levesque",
      "Tracey Garcia"
     ],
     "a": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dan Amabile",
      "Ren Mortara"
     ],
     "a": [
      "Rob Oddy",
      "Jim August"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rich Aronow",
      "Alexey Kudymov"
     ],
     "a": [
      "Anthony Deangelis",
      "Brogan O'Connell"
     ]
    }
   ],
   "subs": [
    "Tao Zhu"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Honeydrippers",
   "away": "Ladies & Lords of Dinkingham",
   "time": "2026-07-26T15:30:00",
   "complete": true,
   "homePoints": 603,
   "awayPoints": 590,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Apparao Avancha"
     ],
     "a": [
      "Lynn Bresnahan",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathie Vit",
      "Sam Doctor"
     ],
     "a": [
      "Kerry Andrews",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Amy Brown",
      "Dave Digrius"
     ],
     "a": [
      "Shannon Dominczyk",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Czech",
      "Martin Clifford"
     ],
     "a": [
      "Manuela Caiati",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Kathie Vit"
     ],
     "a": [
      "Lynn Bresnahan",
      "Manuela Caiati"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jeannine Kreilick",
      "Amy Brown"
     ],
     "a": [
      "Kerry Andrews",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Apparao Avancha",
      "Sam Doctor"
     ],
     "a": [
      "Tom Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Butch Kreilick",
      "Dave Digrius"
     ],
     "a": [
      "Hafeez Saheed",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Natalia Fischer",
      "Sam Doctor"
     ],
     "a": [
      "Lynn Bresnahan",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathie Vit",
      "Apparao Avancha"
     ],
     "a": [
      "Manuela Caiati",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Czech",
      "Martin Clifford"
     ],
     "a": [
      "Kerry Andrews",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeannine Kreilick",
      "Butch Kreilick"
     ],
     "a": [
      "Shannon Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Natalia Fischer",
      "Jeannine Kreilick"
     ],
     "a": [
      "Lynn Bresnahan",
      "Kerry Andrews"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jennifer Czech",
      "Amy Brown"
     ],
     "a": [
      "Manuela Caiati",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Apparao Avancha",
      "Butch Kreilick"
     ],
     "a": [
      "Tom Dominczyk",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Martin Clifford",
      "Dave Digrius"
     ],
     "a": [
      "Scott Heist",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kathie Vit",
      "Sam Doctor"
     ],
     "a": [
      "Lynn Bresnahan",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jeannine Kreilick",
      "Butch Kreilick"
     ],
     "a": [
      "Kerry Andrews",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jennifer Czech",
      "Dave Digrius"
     ],
     "a": [
      "Shannon Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Brown",
      "Martin Clifford"
     ],
     "a": [
      "Manuela Caiati",
      "Paul Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Kathie Vit"
     ],
     "a": [
      "Lynn Bresnahan",
      "Kerry Andrews"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Czech",
      "Amy Brown"
     ],
     "a": [
      "Manuela Caiati",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Apparao Avancha",
      "Sam Doctor"
     ],
     "a": [
      "Tom Dominczyk",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Martin Clifford",
      "Dave Digrius"
     ],
     "a": [
      "Scott Heist",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jeannine Kreilick",
      "Apparao Avancha"
     ],
     "a": [
      "Lynn Bresnahan",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Natalia Fischer",
      "Sam Doctor"
     ],
     "a": [
      "Kerry Andrews",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kathie Vit",
      "Dave Digrius"
     ],
     "a": [
      "Shannon Dominczyk",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Brown",
      "Butch Kreilick"
     ],
     "a": [
      "Manuela Caiati",
      "Paul Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kathie Vit",
      "Jennifer Czech"
     ],
     "a": [
      "Lynn Bresnahan",
      "Manuela Caiati"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Natalia Fischer",
      "Jeannine Kreilick"
     ],
     "a": [
      "Kerry Andrews",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sam Doctor",
      "Martin Clifford"
     ],
     "a": [
      "Tom Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Apparao Avancha",
      "Butch Kreilick"
     ],
     "a": [
      "Hafeez Saheed",
      "Paul Phillips"
     ]
    }
   ],
   "subs": [
    "Sam Doctor",
    "Kerry Andrews",
    "Kathie Vit",
    "Lynn Bresnahan",
    "Martin Clifford"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Pickle Bunch",
   "away": "Ladies & Lords of Dinkingham",
   "time": "2026-08-02T15:30:00",
   "complete": true,
   "homePoints": 656,
   "awayPoints": 620,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ],
     "a": [
      "Judy Livermore",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Eleni Leone",
      "Rob Oddy"
     ],
     "a": [
      "Tao Zhu",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jackie Fuchs",
      "Warren Meade"
     ],
     "a": [
      "Jessica Neglia",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lucia Capone",
      "Jim August"
     ],
     "a": [
      "Manuela Caiati",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sharon Oddy",
      "Eleni Leone"
     ],
     "a": [
      "Judy Livermore",
      "Tao Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jackie Fuchs",
      "Lucia Capone"
     ],
     "a": [
      "Manuela Caiati",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rob Oddy",
      "Warren Meade"
     ],
     "a": [
      "Tom Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anthony Deangelis",
      "Hector Lopez"
     ],
     "a": [
      "Paul Phillips",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sharon Oddy",
      "Rob Oddy"
     ],
     "a": [
      "Judy Livermore",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eleni Leone",
      "Anthony Deangelis"
     ],
     "a": [
      "Tao Zhu",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Jackie Fuchs",
      "Hector Lopez"
     ],
     "a": [
      "Jessica Neglia",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lucia Capone",
      "Jim August"
     ],
     "a": [
      "Shannon Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eleni Leone",
      "Jackie Fuchs"
     ],
     "a": [
      "Tao Zhu",
      "Jessica Neglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucia Capone",
      "Sharon Oddy"
     ],
     "a": [
      "Manuela Caiati",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Hector Lopez"
     ],
     "a": [
      "Tom Dominczyk",
      "Paul Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Warren Meade",
      "Jim August"
     ],
     "a": [
      "Scott Heist",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jackie Fuchs",
      "Anthony Deangelis"
     ],
     "a": [
      "Judy Livermore",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Hector Lopez"
     ],
     "a": [
      "Jessica Neglia",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lucia Capone",
      "Warren Meade"
     ],
     "a": [
      "Shannon Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eleni Leone",
      "Jim August"
     ],
     "a": [
      "Manuela Caiati",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eleni Leone",
      "Lucia Capone"
     ],
     "a": [
      "Judy Livermore",
      "Jessica Neglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ],
     "a": [
      "Tao Zhu",
      "Manuela Caiati"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "Rob Oddy"
     ],
     "a": [
      "Tom Dominczyk",
      "Paul Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Warren Meade",
      "Jim August"
     ],
     "a": [
      "Scott Heist",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Eleni Leone",
      "Rob Oddy"
     ],
     "a": [
      "Judy Livermore",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ],
     "a": [
      "Tao Zhu",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jackie Fuchs",
      "Hector Lopez"
     ],
     "a": [
      "Manuela Caiati",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lucia Capone",
      "Warren Meade"
     ],
     "a": [
      "Shannon Dominczyk",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Eleni Leone"
     ],
     "a": [
      "Judy Livermore",
      "Tao Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lucia Capone",
      "Jackie Fuchs"
     ],
     "a": [
      "Jessica Neglia",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Deangelis",
      "Hector Lopez"
     ],
     "a": [
      "Tom Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rob Oddy",
      "Jim August"
     ],
     "a": [
      "Paul Phillips",
      "Hafeez Saheed"
     ]
    }
   ],
   "subs": [
    "Eleni Leone",
    "Warren Meade",
    "Hector Lopez",
    "Tao Zhu"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Spin Doctors",
   "away": "Honeydrippers",
   "time": "2026-08-02T15:30:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 621,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Dan Amabile"
     ],
     "a": [
      "Natalia Fischer",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Levesque",
      "Rich Aronow"
     ],
     "a": [
      "Marianne Rosato",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Hurley",
      "Ren Mortara"
     ],
     "a": [
      "Amy Brown",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mary Pat Chiswick",
      "Alexey Kudymov"
     ],
     "a": [
      "Jeannine Kreilick",
      "Dave Digrius"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Holly Ferguson",
      "Christine Levesque"
     ],
     "a": [
      "Natalia Fischer",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Mary Pat Chiswick",
      "Jennifer Hurley"
     ],
     "a": [
      "Amy Brown",
      "Jeannine Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dan Amabile",
      "Ren Mortara"
     ],
     "a": [
      "Sam Doctor",
      "Butch Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rich Aronow",
      "Alexey Kudymov"
     ],
     "a": [
      "Brett Wilson",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mary Pat Chiswick",
      "Dan Amabile"
     ],
     "a": [
      "Marianne Rosato",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Holly Ferguson",
      "Rich Aronow"
     ],
     "a": [
      "Amy Brown",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Levesque",
      "Ren Mortara"
     ],
     "a": [
      "Natalia Fischer",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Hurley",
      "Alexey Kudymov"
     ],
     "a": [
      "Jeannine Kreilick",
      "Dave Digrius"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Holly Ferguson",
      "Mary Pat Chiswick"
     ],
     "a": [
      "Marianne Rosato",
      "Jeannine Kreilick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Levesque",
      "Jennifer Hurley"
     ],
     "a": [
      "Natalia Fischer",
      "Amy Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dan Amabile",
      "Rich Aronow"
     ],
     "a": [
      "Sam Doctor",
      "Brett Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ren Mortara",
      "Alexey Kudymov"
     ],
     "a": [
      "Dave Digrius",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Holly Ferguson",
      "Rich Aronow"
     ],
     "a": [
      "Natalia Fischer",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Pat Chiswick",
      "Dan Amabile"
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
     "as": 15,
     "h": [
      "Christine Levesque",
      "Ren Mortara"
     ],
     "a": [
      "Amy Brown",
      "Dave Digrius"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jennifer Hurley",
      "Alexey Kudymov"
     ],
     "a": [
      "Jeannine Kreilick",
      "Rob Hammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Christine Levesque"
     ],
     "a": [
      "Natalia Fischer",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mary Pat Chiswick",
      "Jennifer Hurley"
     ],
     "a": [
      "Amy Brown",
      "Jeannine Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dan Amabile",
      "Rich Aronow"
     ],
     "a": [
      "Sam Doctor",
      "Butch Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ren Mortara",
      "Alexey Kudymov"
     ],
     "a": [
      "Dave Digrius",
      "Rob Hammer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Dan Amabile"
     ],
     "a": [
      "Natalia Fischer",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mary Pat Chiswick",
      "Rich Aronow"
     ],
     "a": [
      "Amy Brown",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christine Levesque",
      "Alexey Kudymov"
     ],
     "a": [
      "Marianne Rosato",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jennifer Hurley",
      "Ren Mortara"
     ],
     "a": [
      "Jeannine Kreilick",
      "Rob Hammer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Holly Ferguson",
      "Mary Pat Chiswick"
     ],
     "a": [
      "Marianne Rosato",
      "Jeannine Kreilick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Levesque",
      "Jennifer Hurley"
     ],
     "a": [
      "Natalia Fischer",
      "Amy Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dan Amabile",
      "Ren Mortara"
     ],
     "a": [
      "Butch Kreilick",
      "Dave Digrius"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rich Aronow",
      "Alexey Kudymov"
     ],
     "a": [
      "Sam Doctor",
      "Brett Wilson"
     ]
    }
   ],
   "subs": [
    "Sam Doctor",
    "Brett Wilson",
    "Marianne Rosato"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Spin Doctors",
   "away": "Ladies & Lords of Dinkingham",
   "time": "2026-08-09T15:30:00",
   "complete": true,
   "homePoints": 624,
   "awayPoints": 585,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Dan Amabile"
     ],
     "a": [
      "Jessica Neglia",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jane Straley",
      "Ren Mortara"
     ],
     "a": [
      "Judy Livermore",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tracey Garcia",
      "Rich Aronow"
     ],
     "a": [
      "Shannon Dominczyk",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Hurley",
      "Alexey Kudymov"
     ],
     "a": [
      "Leah Greenstein",
      "Paul Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Holly Ferguson",
      "Jane Straley"
     ],
     "a": [
      "Jessica Neglia",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eleni Leone",
      "Tracey Garcia"
     ],
     "a": [
      "Judy Livermore",
      "Leah Greenstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dan Amabile",
      "Ren Mortara"
     ],
     "a": [
      "Tom Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rich Aronow",
      "Alexey Kudymov"
     ],
     "a": [
      "Paul Phillips",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jane Straley",
      "Ren Mortara"
     ],
     "a": [
      "Jessica Neglia",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Holly Ferguson",
      "Rich Aronow"
     ],
     "a": [
      "Judy Livermore",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eleni Leone",
      "Dan Amabile"
     ],
     "a": [
      "Shannon Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Hurley",
      "Alexey Kudymov"
     ],
     "a": [
      "Leah Greenstein",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Holly Ferguson",
      "Eleni Leone"
     ],
     "a": [
      "Jessica Neglia",
      "Judy Livermore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jennifer Hurley",
      "Tracey Garcia"
     ],
     "a": [
      "Shannon Dominczyk",
      "Leah Greenstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Ren Mortara",
      "Alexey Kudymov"
     ],
     "a": [
      "Tom Dominczyk",
      "Paul Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dan Amabile",
      "Rich Aronow"
     ],
     "a": [
      "Scott Heist",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jane Straley",
      "Dan Amabile"
     ],
     "a": [
      "Judy Livermore",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eleni Leone",
      "Ren Mortara"
     ],
     "a": [
      "Jessica Neglia",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jennifer Hurley",
      "Rich Aronow"
     ],
     "a": [
      "Shannon Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tracey Garcia",
      "Alexey Kudymov"
     ],
     "a": [
      "Leah Greenstein",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Holly Ferguson",
      "Jane Straley"
     ],
     "a": [
      "Jessica Neglia",
      "Judy Livermore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Hurley",
      "Tracey Garcia"
     ],
     "a": [
      "Shannon Dominczyk",
      "Leah Greenstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dan Amabile",
      "Ren Mortara"
     ],
     "a": [
      "Tom Dominczyk",
      "Scott Heist"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rich Aronow",
      "Alexey Kudymov"
     ],
     "a": [
      "Paul Phillips",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Holly Ferguson",
      "Dan Amabile"
     ],
     "a": [
      "Jessica Neglia",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jane Straley",
      "Rich Aronow"
     ],
     "a": [
      "Judy Livermore",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Eleni Leone",
      "Ren Mortara"
     ],
     "a": [
      "Leah Greenstein",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tracey Garcia",
      "Alexey Kudymov"
     ],
     "a": [
      "Shannon Dominczyk",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jane Straley",
      "Jennifer Hurley"
     ],
     "a": [
      "Jessica Neglia",
      "Shannon Dominczyk"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Holly Ferguson",
      "Eleni Leone"
     ],
     "a": [
      "Judy Livermore",
      "Leah Greenstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Ren Mortara",
      "Alexey Kudymov"
     ],
     "a": [
      "Tom Dominczyk",
      "Paul Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dan Amabile",
      "Rich Aronow"
     ],
     "a": [
      "Scott Heist",
      "Hafeez Saheed"
     ]
    }
   ],
   "subs": [
    "Eleni Leone",
    "Jane Straley",
    "Leah Greenstein"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Honeydrippers",
   "away": "Pickle Bunch",
   "time": "2026-08-09T15:30:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 558,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cathy Orourke",
      "Apparao Avancha"
     ],
     "a": [
      "Sharon Oddy",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Natalia Fischer",
      "Sam Doctor"
     ],
     "a": [
      "Grace Brennan",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Judy Macarthur",
      "Brett Wilson"
     ],
     "a": [
      "Jackie Fuchs",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jennifer Czech",
      "Butch Kreilick"
     ],
     "a": [
      "Lucia Capone",
      "Hector Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cathy Orourke",
      "Jennifer Czech"
     ],
     "a": [
      "Sharon Oddy",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Natalia Fischer",
      "Judy Macarthur"
     ],
     "a": [
      "Jackie Fuchs",
      "Lucia Capone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Apparao Avancha",
      "Butch Kreilick"
     ],
     "a": [
      "Anthony Leone",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sam Doctor",
      "Brett Wilson"
     ],
     "a": [
      "Rob Oddy",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cathy Orourke",
      "Sam Doctor"
     ],
     "a": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Czech",
      "Apparao Avancha"
     ],
     "a": [
      "Grace Brennan",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Natalia Fischer",
      "Brett Wilson"
     ],
     "a": [
      "Lucia Capone",
      "Hector Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Judy Macarthur",
      "Butch Kreilick"
     ],
     "a": [
      "Jackie Fuchs",
      "Rob Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cathy Orourke",
      "Natalia Fischer"
     ],
     "a": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Czech",
      "Judy Macarthur"
     ],
     "a": [
      "Lucia Capone",
      "Grace Brennan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Apparao Avancha",
      "Sam Doctor"
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
      "Butch Kreilick",
      "Brett Wilson"
     ],
     "a": [
      "Hector Lopez",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cathy Orourke",
      "Apparao Avancha"
     ],
     "a": [
      "Grace Brennan",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Natalia Fischer",
      "Sam Doctor"
     ],
     "a": [
      "Jackie Fuchs",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Judy Macarthur",
      "Butch Kreilick"
     ],
     "a": [
      "Lucia Capone",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Czech",
      "Brett Wilson"
     ],
     "a": [
      "Sharon Oddy",
      "Hector Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cathy Orourke",
      "Natalia Fischer"
     ],
     "a": [
      "Sharon Oddy",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Czech",
      "Judy Macarthur"
     ],
     "a": [
      "Jackie Fuchs",
      "Lucia Capone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Apparao Avancha",
      "Sam Doctor"
     ],
     "a": [
      "Anthony Leone",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Butch Kreilick",
      "Brett Wilson"
     ],
     "a": [
      "Hector Lopez",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cathy Orourke",
      "Butch Kreilick"
     ],
     "a": [
      "Jackie Fuchs",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Natalia Fischer",
      "Apparao Avancha"
     ],
     "a": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Judy Macarthur",
      "Sam Doctor"
     ],
     "a": [
      "Grace Brennan",
      "Brogan O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Czech",
      "Brett Wilson"
     ],
     "a": [
      "Lucia Capone",
      "Rob Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cathy Orourke",
      "Jennifer Czech"
     ],
     "a": [
      "Grace Brennan",
      "Lucia Capone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Natalia Fischer",
      "Judy Macarthur"
     ],
     "a": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Apparao Avancha",
      "Butch Kreilick"
     ],
     "a": [
      "Anthony Deangelis",
      "Hector Lopez"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Sam Doctor",
      "Brett Wilson"
     ],
     "a": [
      "Anthony Leone",
      "Rob Oddy"
     ]
    }
   ],
   "subs": [
    "Sam Doctor",
    "Brett Wilson",
    "Cathy Orourke",
    "Anthony Leone",
    "Hector Lopez"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Ladies & Lords of Dinkingham",
   "away": "Honeydrippers",
   "time": "2026-08-16T15:30:00",
   "complete": true,
   "homePoints": 528,
   "awayPoints": 640,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Alfred Soliman"
     ],
     "a": [
      "Natalia Fischer",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Neglia",
      "Bill Vit"
     ],
     "a": [
      "Cathy Orourke",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Judy Livermore",
      "Paul Phillips"
     ],
     "a": [
      "Judy Macarthur",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Leah Greenstein",
      "Scott Heist"
     ],
     "a": [
      "Amy Brown",
      "Sam Doctor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Milinda Heist",
      "Jessica Neglia"
     ],
     "a": [
      "Natalia Fischer",
      "Judy Macarthur"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Judy Livermore"
     ],
     "a": [
      "Cathy Orourke",
      "Amy Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alfred Soliman",
      "Bill Vit"
     ],
     "a": [
      "Apparao Avancha",
      "Butch Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paul Phillips",
      "Scott Heist"
     ],
     "a": [
      "Sam Doctor",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jessica Neglia",
      "Bill Vit"
     ],
     "a": [
      "Natalia Fischer",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Paul Phillips"
     ],
     "a": [
      "Cathy Orourke",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Manuela Caiati",
      "Alfred Soliman"
     ],
     "a": [
      "Judy Macarthur",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Leah Greenstein",
      "Scott Heist"
     ],
     "a": [
      "Amy Brown",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Manuela Caiati"
     ],
     "a": [
      "Natalia Fischer",
      "Cathy Orourke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Leah Greenstein",
      "Judy Livermore"
     ],
     "a": [
      "Judy Macarthur",
      "Amy Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Bill Vit",
      "Scott Heist"
     ],
     "a": [
      "Apparao Avancha",
      "Sam Doctor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alfred Soliman",
      "Paul Phillips"
     ],
     "a": [
      "Butch Kreilick",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Jessica Neglia",
      "Alfred Soliman"
     ],
     "a": [
      "Cathy Orourke",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Bill Vit"
     ],
     "a": [
      "Natalia Fischer",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Leah Greenstein",
      "Paul Phillips"
     ],
     "a": [
      "Judy Macarthur",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Judy Livermore",
      "Scott Heist"
     ],
     "a": [
      "Amy Brown",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Jessica Neglia"
     ],
     "a": [
      "Natalia Fischer",
      "Cathy Orourke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Leah Greenstein",
      "Judy Livermore"
     ],
     "a": [
      "Judy Macarthur",
      "Amy Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alfred Soliman",
      "Bill Vit"
     ],
     "a": [
      "Apparao Avancha",
      "Butch Kreilick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Paul Phillips",
      "Scott Heist"
     ],
     "a": [
      "Sam Doctor",
      "Brett Wilson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Alfred Soliman"
     ],
     "a": [
      "Natalia Fischer",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jessica Neglia",
      "Paul Phillips"
     ],
     "a": [
      "Cathy Orourke",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Manuela Caiati",
      "Bill Vit"
     ],
     "a": [
      "Amy Brown",
      "Butch Kreilick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Judy Livermore",
      "Scott Heist"
     ],
     "a": [
      "Judy Macarthur",
      "Brett Wilson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jessica Neglia",
      "Leah Greenstein"
     ],
     "a": [
      "Natalia Fischer",
      "Judy Macarthur"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Manuela Caiati"
     ],
     "a": [
      "Cathy Orourke",
      "Amy Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bill Vit",
      "Scott Heist"
     ],
     "a": [
      "Apparao Avancha",
      "Sam Doctor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Alfred Soliman",
      "Paul Phillips"
     ],
     "a": [
      "Butch Kreilick",
      "Brett Wilson"
     ]
    }
   ],
   "subs": [
    "Sam Doctor",
    "Brett Wilson",
    "Cathy Orourke",
    "Alfred Soliman",
    "Bill Vit",
    "Leah Greenstein",
    "Milinda Heist"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Pickle Bunch",
   "away": "Spin Doctors",
   "time": "2026-08-16T15:30:00",
   "complete": true,
   "homePoints": 588,
   "awayPoints": 557,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ],
     "a": [
      "Christine Levesque",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Grace Brennan",
      "Martin Clifford"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Corinne Demeuse",
      "Rob Oddy"
     ],
     "a": [
      "Tracey Garcia",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lucia Capone",
      "Jim August"
     ],
     "a": [
      "Jennifer Hurley",
      "Hector Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sharon Oddy",
      "Grace Brennan"
     ],
     "a": [
      "Christine Levesque",
      "Tracey Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jackie Fuchs",
      "Corinne Demeuse"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Jennifer Hurley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Deangelis",
      "Martin Clifford"
     ],
     "a": [
      "Dan Amabile",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Jim August"
     ],
     "a": [
      "Hector Lopez",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Martin Clifford"
     ],
     "a": [
      "Christine Levesque",
      "Hector Lopez"
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
      "Mary Pat Chiswick",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jackie Fuchs",
      "Anthony Deangelis"
     ],
     "a": [
      "Tracey Garcia",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lucia Capone",
      "Jim August"
     ],
     "a": [
      "Jennifer Hurley",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ],
     "a": [
      "Christine Levesque",
      "Mary Pat Chiswick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lucia Capone",
      "Corinne Demeuse"
     ],
     "a": [
      "Tracey Garcia",
      "Jennifer Hurley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Martin Clifford",
      "Jim August"
     ],
     "a": [
      "Dan Amabile",
      "Hector Lopez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anthony Deangelis",
      "Rob Oddy"
     ],
     "a": [
      "Ren Mortara",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Grace Brennan",
      "Anthony Deangelis"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jackie Fuchs",
      "Martin Clifford"
     ],
     "a": [
      "Christine Levesque",
      "Hector Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lucia Capone",
      "Rob Oddy"
     ],
     "a": [
      "Tracey Garcia",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Corinne Demeuse",
      "Jim August"
     ],
     "a": [
      "Jennifer Hurley",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Oddy",
      "Grace Brennan"
     ],
     "a": [
      "Christine Levesque",
      "Mary Pat Chiswick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lucia Capone",
      "Corinne Demeuse"
     ],
     "a": [
      "Tracey Garcia",
      "Jennifer Hurley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anthony Deangelis",
      "Martin Clifford"
     ],
     "a": [
      "Dan Amabile",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rob Oddy",
      "Jim August"
     ],
     "a": [
      "Hector Lopez",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ],
     "a": [
      "Christine Levesque",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Grace Brennan",
      "Rob Oddy"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Hector Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jackie Fuchs",
      "Martin Clifford"
     ],
     "a": [
      "Jennifer Hurley",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Corinne Demeuse",
      "Jim August"
     ],
     "a": [
      "Tracey Garcia",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Grace Brennan",
      "Lucia Capone"
     ],
     "a": [
      "Christine Levesque",
      "Tracey Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Oddy",
      "Jackie Fuchs"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Jennifer Hurley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Martin Clifford",
      "Jim August"
     ],
     "a": [
      "Dan Amabile",
      "Hector Lopez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Anthony Deangelis",
      "Rob Oddy"
     ],
     "a": [
      "Ren Mortara",
      "Alexey Kudymov"
     ]
    }
   ],
   "subs": [
    "Hector Lopez",
    "Martin Clifford",
    "Corinne Demeuse"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Ladies & Lords of Dinkingham",
   "away": "Pickle Bunch",
   "time": "2026-08-23T15:30:00",
   "complete": true,
   "homePoints": 521,
   "awayPoints": 637,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Tom Dominczyk"
     ],
     "a": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Scott Heist"
     ],
     "a": [
      "Grace Brennan",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Judy Livermore",
      "Alfred Soliman"
     ],
     "a": [
      "Tao Zhu",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Hafeez Saheed"
     ],
     "a": [
      "Jackie Fuchs",
      "Jim August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Shannon Dominczyk"
     ],
     "a": [
      "Sharon Oddy",
      "Tao Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Judy Livermore"
     ],
     "a": [
      "Grace Brennan",
      "Sheila Curran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tom Dominczyk",
      "Scott Heist"
     ],
     "a": [
      "Anthony Deangelis",
      "Warren Meade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paul Phillips",
      "Hafeez Saheed"
     ],
     "a": [
      "Rob Oddy",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Tom Dominczyk"
     ],
     "a": [
      "Sharon Oddy",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Scott Heist"
     ],
     "a": [
      "Grace Brennan",
      "Rob Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Judy Livermore",
      "Paul Phillips"
     ],
     "a": [
      "Sheila Curran",
      "Warren Meade"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Shannon Dominczyk",
      "Alfred Soliman"
     ],
     "a": [
      "Jackie Fuchs",
      "Jim August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Manuela Caiati"
     ],
     "a": [
      "Grace Brennan",
      "Tao Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Judy Livermore"
     ],
     "a": [
      "Sheila Curran",
      "Jackie Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Scott Heist",
      "Paul Phillips"
     ],
     "a": [
      "Anthony Deangelis",
      "Rob Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alfred Soliman",
      "Hafeez Saheed"
     ],
     "a": [
      "Warren Meade",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Paul Phillips"
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
      "Manuela Caiati",
      "Tom Dominczyk"
     ],
     "a": [
      "Tao Zhu",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shannon Dominczyk",
      "Alfred Soliman"
     ],
     "a": [
      "Sheila Curran",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Judy Livermore",
      "Hafeez Saheed"
     ],
     "a": [
      "Jackie Fuchs",
      "Warren Meade"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Shannon Dominczyk"
     ],
     "a": [
      "Sharon Oddy",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Judy Livermore"
     ],
     "a": [
      "Tao Zhu",
      "Jackie Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tom Dominczyk",
      "Scott Heist"
     ],
     "a": [
      "Anthony Deangelis",
      "Rob Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alfred Soliman",
      "Hafeez Saheed"
     ],
     "a": [
      "Warren Meade",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Scott Heist"
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
     "as": 17,
     "h": [
      "Judy Livermore",
      "Tom Dominczyk"
     ],
     "a": [
      "Grace Brennan",
      "Jim August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Paul Phillips"
     ],
     "a": [
      "Tao Zhu",
      "Anthony Deangelis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Hafeez Saheed"
     ],
     "a": [
      "Sheila Curran",
      "Warren Meade"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Milinda Heist",
      "Manuela Caiati"
     ],
     "a": [
      "Sharon Oddy",
      "Grace Brennan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shannon Dominczyk",
      "Judy Livermore"
     ],
     "a": [
      "Sheila Curran",
      "Jackie Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Scott Heist",
      "Alfred Soliman"
     ],
     "a": [
      "Anthony Deangelis",
      "Warren Meade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tom Dominczyk",
      "Paul Phillips"
     ],
     "a": [
      "Rob Oddy",
      "Jim August"
     ]
    }
   ],
   "subs": [
    "Tao Zhu",
    "Sheila Curran",
    "Alfred Soliman",
    "Warren Meade",
    "Milinda Heist"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Honeydrippers",
   "away": "Spin Doctors",
   "time": "2026-08-23T15:30:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 597,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marianne Rosato",
      "Sam Doctor"
     ],
     "a": [
      "Holly Ferguson",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cathy Orourke",
      "Apparao Avancha"
     ],
     "a": [
      "Kara Chubrik",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Czech",
      "Butch Kreilick"
     ],
     "a": [
      "Tracey Garcia",
      "Rich Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Brown",
      "Dave Digrius"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Hector Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Cathy Orourke",
      "Jennifer Czech"
     ],
     "a": [
      "Holly Ferguson",
      "Mary Pat Chiswick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "Judy Macarthur"
     ],
     "a": [
      "Kara Chubrik",
      "Tracey Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sam Doctor",
      "Apparao Avancha"
     ],
     "a": [
      "Dan Amabile",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Butch Kreilick",
      "Rob Hammer"
     ],
     "a": [
      "Hector Lopez",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cathy Orourke",
      "Sam Doctor"
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
     "as": 19,
     "h": [
      "Marianne Rosato",
      "Apparao Avancha"
     ],
     "a": [
      "Holly Ferguson",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Judy Macarthur",
      "Rob Hammer"
     ],
     "a": [
      "Tracey Garcia",
      "Rich Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amy Brown",
      "Dave Digrius"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cathy Orourke",
      "Judy Macarthur"
     ],
     "a": [
      "Holly Ferguson",
      "Kara Chubrik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jennifer Czech",
      "Amy Brown"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Tracey Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Apparao Avancha",
      "Butch Kreilick"
     ],
     "a": [
      "Ren Mortara",
      "Rich Aronow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Dave Digrius",
      "Rob Hammer"
     ],
     "a": [
      "Hector Lopez",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marianne Rosato",
      "Butch Kreilick"
     ],
     "a": [
      "Kara Chubrik",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Judy Macarthur",
      "Sam Doctor"
     ],
     "a": [
      "Holly Ferguson",
      "Rich Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Czech",
      "Dave Digrius"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Brown",
      "Rob Hammer"
     ],
     "a": [
      "Tracey Garcia",
      "Hector Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Marianne Rosato",
      "Cathy Orourke"
     ],
     "a": [
      "Holly Ferguson",
      "Kara Chubrik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Czech",
      "Amy Brown"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Tracey Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Apparao Avancha",
      "Dave Digrius"
     ],
     "a": [
      "Dan Amabile",
      "Rich Aronow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sam Doctor",
      "Butch Kreilick"
     ],
     "a": [
      "Ren Mortara",
      "Hector Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cathy Orourke",
      "Apparao Avancha"
     ],
     "a": [
      "Holly Ferguson",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marianne Rosato",
      "Sam Doctor"
     ],
     "a": [
      "Kara Chubrik",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Judy Macarthur",
      "Butch Kreilick"
     ],
     "a": [
      "Mary Pat Chiswick",
      "Hector Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Czech",
      "Rob Hammer"
     ],
     "a": [
      "Tracey Garcia",
      "Alexey Kudymov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Marianne Rosato",
      "Judy Macarthur"
     ],
     "a": [
      "Holly Ferguson",
      "Mary Pat Chiswick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Cathy Orourke",
      "Amy Brown"
     ],
     "a": [
      "Kara Chubrik",
      "Tracey Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sam Doctor",
      "Apparao Avancha"
     ],
     "a": [
      "Dan Amabile",
      "Ren Mortara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dave Digrius",
      "Rob Hammer"
     ],
     "a": [
      "Rich Aronow",
      "Alexey Kudymov"
     ]
    }
   ],
   "subs": [
    "Sam Doctor",
    "Cathy Orourke",
    "Marianne Rosato",
    "Hector Lopez",
    "Kara Chubrik"
   ]
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {},
 "meta": {
  "matchesPlayed": 16,
  "provisionalMatches": 0,
  "weeks": "1-9",
  "totalPlayers": 59,
  "ratingHistoryWeeks": [
   1,
   3,
   4,
   5,
   6,
   7,
   8,
   9
  ],
  "divisionSlug": "b9b8230d",
  "hasPlayoffs": false,
  "typicalDay": "Sundays",
  "detailFile": "detail-b9b8230d.js",
  "clubName": "Flemington",
  "divisionName": "3.25 & Under",
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
  DATA.meta.asOf = "2026-08-31T20:15:24.032Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["b9b8230d"] = DATA;
})();
