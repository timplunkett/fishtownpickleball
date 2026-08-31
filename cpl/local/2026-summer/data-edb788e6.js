(function () {
  const DATA = {
 "players": [
  {
   "name": "Dave Govan",
   "gender": "Male",
   "team": "Dinking Around",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 103,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "5c1e16e3-303e-48ca-8ad7-77077727394d",
   "winPct": 83.3,
   "diff": 21,
   "ppg": 20.7,
   "leagueRank": 56,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -2.7
  },
  {
   "name": "Richard Livornese",
   "gender": "Male",
   "team": "Dinking Around",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 105,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "65eebb53-e684-4819-bf57-99a241c04812",
   "winPct": 83.3,
   "diff": 19,
   "ppg": 20.7,
   "leagueRank": 60,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -2.7
  },
  {
   "name": "Johanna Kreilick",
   "gender": "Female",
   "team": "The Mighty Dinks",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 30,
   "losses": 7,
   "pointsWon": 739,
   "totalPointsAgainst": 578,
   "mixedWins": 18,
   "mixedLosses": 1,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 81.1,
   "diff": 161,
   "ppg": 20,
   "leagueRank": 1,
   "rating": 4.2,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7,
   "playerId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "name": "Eric Berlinger",
   "gender": "Male",
   "team": "Summer of Slam",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 46,
   "losses": 12,
   "pointsWon": 1156,
   "totalPointsAgainst": 934,
   "mixedWins": 22,
   "mixedLosses": 6,
   "genderWins": 24,
   "genderLosses": 6,
   "clutchWins": 12,
   "clutchLosses": 2,
   "winPct": 79.3,
   "diff": 222,
   "ppg": 19.9,
   "leagueRank": 2,
   "rating": 4.1,
   "ratingGames": 58,
   "confidence": 89,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "name": "Addison Stewart",
   "gender": "Male",
   "team": "The Mighty Dinks",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 28,
   "losses": 9,
   "pointsWon": 730,
   "totalPointsAgainst": 623,
   "mixedWins": 11,
   "mixedLosses": 7,
   "genderWins": 17,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 75.7,
   "diff": 107,
   "ppg": 19.7,
   "leagueRank": 7,
   "rating": 2.2,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "bde51a59-4c56-4d7a-a0e3-a9041baf8583"
  },
  {
   "name": "Patricia Kavanaugh",
   "gender": "Female",
   "team": "Pickleball Addicts",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 27,
   "losses": 9,
   "pointsWon": 723,
   "totalPointsAgainst": 601,
   "mixedWins": 14,
   "mixedLosses": 5,
   "genderWins": 13,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 75,
   "diff": 122,
   "ppg": 20.1,
   "leagueRank": 3,
   "rating": 3.8,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1,
   "playerId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "name": "Naveen Elangovan",
   "gender": "Male",
   "team": "Pickleball Addicts",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 18,
   "losses": 6,
   "pointsWon": 470,
   "totalPointsAgainst": 378,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 92,
   "ppg": 19.6,
   "leagueRank": 4,
   "rating": 2.4,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "887b93c9-f19a-4451-8ac6-28610a218ea8"
  },
  {
   "name": "Lakshmikanth Chaluvadi",
   "gender": "Male",
   "team": "Pickleball Addicts",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 28,
   "losses": 10,
   "pointsWon": 768,
   "totalPointsAgainst": 623,
   "mixedWins": 14,
   "mixedLosses": 5,
   "genderWins": 14,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 73.7,
   "diff": 145,
   "ppg": 20.2,
   "leagueRank": 6,
   "rating": 1,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1.4,
   "playerId": "377302a4-12da-4449-bbfc-a28248436679"
  },
  {
   "name": "Mary Brashier",
   "gender": "Female",
   "team": "Summer of Slam",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 30,
   "losses": 11,
   "pointsWon": 817,
   "totalPointsAgainst": 703,
   "mixedWins": 18,
   "mixedLosses": 5,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 73.2,
   "diff": 114,
   "ppg": 19.9,
   "leagueRank": 9,
   "rating": 2.3,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.7,
   "playerId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "name": "Craig Butler",
   "gender": "Male",
   "team": "The Mighty Dinks",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 43,
   "losses": 16,
   "pointsWon": 1181,
   "totalPointsAgainst": 983,
   "mixedWins": 21,
   "mixedLosses": 9,
   "genderWins": 22,
   "genderLosses": 7,
   "clutchWins": 10,
   "clutchLosses": 9,
   "winPct": 72.9,
   "diff": 198,
   "ppg": 20,
   "leagueRank": 5,
   "rating": 4.2,
   "ratingGames": 59,
   "confidence": 90,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "name": "Trevor Foraker",
   "gender": "Male",
   "team": "Power Picklers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 15,
   "losses": 6,
   "pointsWon": 413,
   "totalPointsAgainst": 364,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 49,
   "ppg": 19.7,
   "leagueRank": 8,
   "rating": 2.9,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "76ac11d3-ccdc-4009-b836-99023d2722ca"
  },
  {
   "name": "Gabe Lantos",
   "gender": "Male",
   "team": "Pickleball Addicts",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 27,
   "losses": 11,
   "pointsWon": 746,
   "totalPointsAgainst": 614,
   "mixedWins": 15,
   "mixedLosses": 4,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 71.1,
   "diff": 132,
   "ppg": 19.6,
   "leagueRank": 10,
   "rating": 1.6,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "87637937-3a92-4bbd-bc21-627094ef39c5"
  },
  {
   "name": "Rick Wickenheisser",
   "gender": "Male",
   "team": "Summer of Slam",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 15,
   "losses": 7,
   "pointsWon": 418,
   "totalPointsAgainst": 378,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 68.2,
   "diff": 40,
   "ppg": 19,
   "leagueRank": 12,
   "rating": 0.2,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "name": "Dan Stanton",
   "gender": "Male",
   "team": "The Mighty Dinks",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 22,
   "losses": 11,
   "pointsWon": 631,
   "totalPointsAgainst": 596,
   "mixedWins": 9,
   "mixedLosses": 8,
   "genderWins": 13,
   "genderLosses": 3,
   "clutchWins": 11,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 35,
   "ppg": 19.1,
   "leagueRank": 19,
   "rating": 1,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "08f765a3-1ebf-4b7f-afe1-e815112ee581"
  },
  {
   "name": "Sherri Falsetti",
   "gender": "Female",
   "team": "Pickleball Addicts",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 108,
   "totalPointsAgainst": 115,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "57f76666-8731-4408-9e83-fbab3d007fae",
   "winPct": 66.7,
   "diff": -7,
   "ppg": 18,
   "leagueRank": 74,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Steve Tosi",
   "gender": "Male",
   "team": "The Mighty Dinks",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 22,
   "losses": 12,
   "pointsWon": 653,
   "totalPointsAgainst": 599,
   "mixedWins": 13,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 64.7,
   "diff": 54,
   "ppg": 19.2,
   "leagueRank": 13,
   "rating": 0,
   "ratingGames": 34,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "682dd503-f067-4547-b5c0-c9ce1cc6609b"
  },
  {
   "name": "Noelle Villa",
   "gender": "Female",
   "team": "Pickleball Addicts",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 18,
   "losses": 10,
   "pointsWon": 537,
   "totalPointsAgainst": 488,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 64.3,
   "diff": 49,
   "ppg": 19.2,
   "leagueRank": 11,
   "rating": 1.8,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "1898b8fb-ea1d-4bb8-bcc5-17b1fba29700"
  },
  {
   "name": "Meghan Klein",
   "gender": "Female",
   "team": "The Mighty Dinks",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 33,
   "losses": 19,
   "pointsWon": 976,
   "totalPointsAgainst": 896,
   "mixedWins": 17,
   "mixedLosses": 9,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 63.5,
   "diff": 80,
   "ppg": 18.8,
   "leagueRank": 14,
   "rating": 0.3,
   "ratingGames": 52,
   "confidence": 89,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909"
  },
  {
   "name": "John Fallone",
   "gender": "Male",
   "team": "Pickleball Addicts",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 156,
   "totalPointsAgainst": 137,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "winPct": 62.5,
   "diff": 19,
   "ppg": 19.5,
   "leagueRank": 58,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Lynda Levan",
   "gender": "Female",
   "team": "Summer of Slam",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 29,
   "losses": 20,
   "pointsWon": 924,
   "totalPointsAgainst": 884,
   "mixedWins": 15,
   "mixedLosses": 9,
   "genderWins": 14,
   "genderLosses": 11,
   "clutchWins": 13,
   "clutchLosses": 6,
   "winPct": 59.2,
   "diff": 40,
   "ppg": 18.9,
   "leagueRank": 15,
   "rating": 0.8,
   "ratingGames": 49,
   "confidence": 89,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.5,
   "playerId": "ca92ce54-a58c-4bf2-a49b-125be4b376ba"
  },
  {
   "name": "John Lottier",
   "gender": "Male",
   "team": "Pickleball Addicts",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 23,
   "losses": 16,
   "pointsWon": 744,
   "totalPointsAgainst": 675,
   "mixedWins": 12,
   "mixedLosses": 7,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 59,
   "diff": 69,
   "ppg": 19.1,
   "leagueRank": 16,
   "rating": 1.7,
   "ratingGames": 39,
   "confidence": 86,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "name": "Janice Aliberti",
   "gender": "Female",
   "team": "The Mighty Dinks",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 36,
   "losses": 25,
   "pointsWon": 1154,
   "totalPointsAgainst": 1096,
   "mixedWins": 19,
   "mixedLosses": 11,
   "genderWins": 17,
   "genderLosses": 14,
   "clutchWins": 14,
   "clutchLosses": 6,
   "winPct": 59,
   "diff": 58,
   "ppg": 18.9,
   "leagueRank": 24,
   "rating": 0.7,
   "ratingGames": 61,
   "confidence": 90,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "078bc1a3-2897-4dc0-ae17-26b349108047"
  },
  {
   "name": "Gail Welkes",
   "gender": "Female",
   "team": "Summer of Slam",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 24,
   "losses": 17,
   "pointsWon": 792,
   "totalPointsAgainst": 734,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 58.5,
   "diff": 58,
   "ppg": 19.3,
   "leagueRank": 18,
   "rating": 1.1,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.5,
   "playerId": "ef42e106-1059-4976-98c3-daccda942f56"
  },
  {
   "name": "Laura Govan",
   "gender": "Female",
   "team": "Dinking Around",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 21,
   "losses": 15,
   "pointsWon": 688,
   "totalPointsAgainst": 676,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 13,
   "genderLosses": 4,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 58.3,
   "diff": 12,
   "ppg": 19.1,
   "leagueRank": 17,
   "rating": 2.1,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "110b981a-77ae-42b0-8200-4e30e9ce157a"
  },
  {
   "name": "Marguerite Greener",
   "gender": "Female",
   "team": "Pickleball Addicts",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 27,
   "losses": 20,
   "pointsWon": 901,
   "totalPointsAgainst": 866,
   "mixedWins": 18,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 13,
   "clutchLosses": 12,
   "winPct": 57.4,
   "diff": 35,
   "ppg": 19.2,
   "leagueRank": 22,
   "rating": 0.4,
   "ratingGames": 47,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "name": "Monika Torbus",
   "gender": "Female",
   "team": "Dinking Around",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 32,
   "losses": 24,
   "pointsWon": 1009,
   "totalPointsAgainst": 1045,
   "mixedWins": 13,
   "mixedLosses": 15,
   "genderWins": 19,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": -36,
   "ppg": 18,
   "leagueRank": 29,
   "rating": 0.3,
   "ratingGames": 56,
   "confidence": 90,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "name": "Kelly Bowers",
   "gender": "Female",
   "team": "Summer of Slam",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 26,
   "losses": 20,
   "pointsWon": 883,
   "totalPointsAgainst": 850,
   "mixedWins": 13,
   "mixedLosses": 10,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 12,
   "winPct": 56.5,
   "diff": 33,
   "ppg": 19.2,
   "leagueRank": 20,
   "rating": -0.2,
   "ratingGames": 46,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "25c2cf33-ede0-4610-85d6-e08cddc05484"
  },
  {
   "name": "Mike Leach",
   "gender": "Male",
   "team": "Pickleball Addicts",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 30,
   "losses": 24,
   "pointsWon": 1024,
   "totalPointsAgainst": 947,
   "mixedWins": 12,
   "mixedLosses": 15,
   "genderWins": 18,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 55.6,
   "diff": 77,
   "ppg": 19,
   "leagueRank": 26,
   "rating": 0.1,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "name": "David Tabacco",
   "gender": "Male",
   "team": "Pickleball Addicts",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 26,
   "losses": 21,
   "pointsWon": 884,
   "totalPointsAgainst": 816,
   "mixedWins": 16,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 55.3,
   "diff": 68,
   "ppg": 18.8,
   "leagueRank": 23,
   "rating": 0.8,
   "ratingGames": 47,
   "confidence": 88,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "name": "Elizabeth Biehl",
   "gender": "Female",
   "team": "Summer of Slam",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 19,
   "losses": 16,
   "pointsWon": 674,
   "totalPointsAgainst": 650,
   "mixedWins": 11,
   "mixedLosses": 7,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 54.3,
   "diff": 24,
   "ppg": 19.3,
   "leagueRank": 27,
   "rating": 0.4,
   "ratingGames": 35,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "a10029d9-c75f-4a33-98cd-6173faa99ddc"
  },
  {
   "name": "Mariola Biekisz",
   "gender": "Female",
   "team": "Dinking Around",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 22,
   "losses": 19,
   "pointsWon": 766,
   "totalPointsAgainst": 744,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 15,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 53.7,
   "diff": 22,
   "ppg": 18.7,
   "leagueRank": 25,
   "rating": 1.7,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "188e1231-451b-48a6-84b8-9a9b11524618"
  },
  {
   "name": "Ken Carlson",
   "gender": "Male",
   "team": "The Mighty Dinks",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 17,
   "losses": 15,
   "pointsWon": 605,
   "totalPointsAgainst": 585,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 53.1,
   "diff": 20,
   "ppg": 18.9,
   "leagueRank": 28,
   "rating": -0.6,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "b93dc821-ad17-49b2-8561-0c9da7614364"
  },
  {
   "name": "Christine Ziegler",
   "gender": "Female",
   "team": "Dinking Around",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 13,
   "losses": 12,
   "pointsWon": 481,
   "totalPointsAgainst": 459,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 52,
   "diff": 22,
   "ppg": 19.2,
   "leagueRank": 21,
   "rating": 0,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "63946930-2dca-489e-8158-028722c045f5"
  },
  {
   "name": "Jeff Barna",
   "gender": "Male",
   "team": "Summer of Slam",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 27,
   "losses": 27,
   "pointsWon": 1000,
   "totalPointsAgainst": 965,
   "mixedWins": 12,
   "mixedLosses": 15,
   "genderWins": 15,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 50,
   "diff": 35,
   "ppg": 18.5,
   "leagueRank": 30,
   "rating": 0.4,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "ec541044-1910-40ee-86e0-5763640772b0"
  },
  {
   "name": "Andy Ro",
   "gender": "Male",
   "team": "Power Picklers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 11,
   "losses": 11,
   "pointsWon": 414,
   "totalPointsAgainst": 394,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 20,
   "ppg": 18.8,
   "leagueRank": 63,
   "rating": 2.4,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.4,
   "playerId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "name": "Nancy Cook",
   "gender": "Female",
   "team": "Pickleball Addicts",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 20,
   "losses": 20,
   "pointsWon": 733,
   "totalPointsAgainst": 719,
   "mixedWins": 15,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 50,
   "diff": 14,
   "ppg": 18.3,
   "leagueRank": 32,
   "rating": -1.9,
   "ratingGames": 40,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.2,
   "playerId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "name": "Ed Villaverde",
   "gender": "Male",
   "team": "Summer of Slam",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 331,
   "totalPointsAgainst": 328,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 3,
   "ppg": 18.4,
   "leagueRank": 43,
   "rating": 0,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "3edc72f0-c23d-4ad5-9842-cde023cd7514"
  },
  {
   "name": "Anthony Leone",
   "gender": "Male",
   "team": "Power Picklers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 324,
   "totalPointsAgainst": 327,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "a8715ef7-f760-4097-b642-eae44c0a5de7",
   "winPct": 50,
   "diff": -3,
   "ppg": 18,
   "leagueRank": 54,
   "rating": -0.1,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Steven Levin",
   "gender": "Male",
   "team": "The Mighty Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 20,
   "losses": 20,
   "pointsWon": 734,
   "totalPointsAgainst": 741,
   "mixedWins": 8,
   "mixedLosses": 12,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": -7,
   "ppg": 18.4,
   "leagueRank": 33,
   "rating": -2.2,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.1,
   "playerId": "da15ed15-38dd-423e-8d4e-963a596450fe"
  },
  {
   "name": "Beth Knoble",
   "gender": "Female",
   "team": "Summer of Slam",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 106,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "2a31bf75-6b8c-4df5-8a70-daaf9a5a4265",
   "winPct": 50,
   "diff": -13,
   "ppg": 17.7,
   "leagueRank": 79,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Margo Langer",
   "gender": "Female",
   "team": "Dinking Around",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 20,
   "losses": 21,
   "pointsWon": 753,
   "totalPointsAgainst": 763,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 48.8,
   "diff": -10,
   "ppg": 18.4,
   "leagueRank": 31,
   "rating": -0.9,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75"
  },
  {
   "name": "Joaquin Cruz",
   "gender": "Male",
   "team": "Summer of Slam",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 25,
   "losses": 27,
   "pointsWon": 945,
   "totalPointsAgainst": 974,
   "mixedWins": 14,
   "mixedLosses": 12,
   "genderWins": 11,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 9,
   "winPct": 48.1,
   "diff": -29,
   "ppg": 18.2,
   "leagueRank": 35,
   "rating": -1.9,
   "ratingGames": 52,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "86b8ddd8-79bf-414d-ae7e-5c958d4f2899"
  },
  {
   "name": "Karen Veninger",
   "gender": "Female",
   "team": "Pickleball Addicts",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 20,
   "losses": 22,
   "pointsWon": 782,
   "totalPointsAgainst": 787,
   "mixedWins": 12,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 47.6,
   "diff": -5,
   "ppg": 18.6,
   "leagueRank": 37,
   "rating": -2.4,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.1,
   "playerId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "name": "Sharon Oddy",
   "gender": "Female",
   "team": "Pickleball Addicts",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 20,
   "losses": 22,
   "pointsWon": 751,
   "totalPointsAgainst": 759,
   "mixedWins": 10,
   "mixedLosses": 11,
   "genderWins": 10,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 47.6,
   "diff": -8,
   "ppg": 17.9,
   "leagueRank": 39,
   "rating": -1,
   "ratingGames": 42,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "name": "Cathy Matko",
   "gender": "Female",
   "team": "The Mighty Dinks",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 358,
   "totalPointsAgainst": 351,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 47.4,
   "diff": 7,
   "ppg": 18.8,
   "leagueRank": 45,
   "rating": 0.2,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "name": "Greg August",
   "gender": "Male",
   "team": "The Mighty Dinks",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 13,
   "losses": 15,
   "pointsWon": 520,
   "totalPointsAgainst": 521,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 46.4,
   "diff": -1,
   "ppg": 18.6,
   "leagueRank": 38,
   "rating": -2.1,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.3,
   "playerId": "ad2273bf-d15d-4687-b222-7db8cd6f3abd"
  },
  {
   "name": "Tammie Destefano",
   "gender": "Female",
   "team": "The Mighty Dinks",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 23,
   "losses": 27,
   "pointsWon": 899,
   "totalPointsAgainst": 955,
   "mixedWins": 11,
   "mixedLosses": 13,
   "genderWins": 12,
   "genderLosses": 14,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 46,
   "diff": -56,
   "ppg": 18,
   "leagueRank": 44,
   "rating": -1.5,
   "ratingGames": 50,
   "confidence": 89,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "4d9ce370-c177-4fea-87a0-089117702814"
  },
  {
   "name": "Lisa Viola",
   "gender": "Female",
   "team": "Dinking Around",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 22,
   "losses": 27,
   "pointsWon": 902,
   "totalPointsAgainst": 925,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 12,
   "genderLosses": 13,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 44.9,
   "diff": -23,
   "ppg": 18.4,
   "leagueRank": 34,
   "rating": -0.7,
   "ratingGames": 49,
   "confidence": 89,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "643d57f1-e4de-431d-b486-01fcc266501f"
  },
  {
   "name": "Jessica Wormeck",
   "gender": "Female",
   "team": "The Mighty Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 17,
   "losses": 21,
   "pointsWon": 714,
   "totalPointsAgainst": 733,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 11,
   "winPct": 44.7,
   "diff": -19,
   "ppg": 18.8,
   "leagueRank": 40,
   "rating": -1.7,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.8,
   "playerId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "name": "Susan St. Pierre",
   "gender": "Female",
   "team": "Summer of Slam",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 134,
   "totalPointsAgainst": 131,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "001c2d38-829b-4fd0-b249-472f78337387",
   "winPct": 42.9,
   "diff": 3,
   "ppg": 19.1,
   "leagueRank": 69,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Alex Lawrason",
   "gender": "Male",
   "team": "Power Picklers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 129,
   "totalPointsAgainst": 128,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b925cfcd-a7a4-4c6c-a604-5b7997bceebb",
   "winPct": 42.9,
   "diff": 1,
   "ppg": 18.4,
   "leagueRank": 66,
   "rating": 2.6,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 2.1
  },
  {
   "name": "Tom Matko",
   "gender": "Male",
   "team": "Power Picklers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 17,
   "losses": 24,
   "pointsWon": 725,
   "totalPointsAgainst": 782,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 41.5,
   "diff": -57,
   "ppg": 17.7,
   "leagueRank": 42,
   "rating": 0.4,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5"
  },
  {
   "name": "Karen Waldon",
   "gender": "Female",
   "team": "Pickleball Addicts",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 276,
   "totalPointsAgainst": 277,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -1,
   "ppg": 18.4,
   "leagueRank": 62,
   "rating": 0.6,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.1,
   "playerId": "c9f10502-3413-4189-87c9-d05ec7accae3"
  },
  {
   "name": "Paul Matzko",
   "gender": "Male",
   "team": "Dinking Around",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 17,
   "losses": 27,
   "pointsWon": 760,
   "totalPointsAgainst": 839,
   "mixedWins": 12,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 18,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 38.6,
   "diff": -79,
   "ppg": 17.3,
   "leagueRank": 49,
   "rating": 1,
   "ratingGames": 44,
   "confidence": 88,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.3,
   "playerId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "name": "Sarah Stangota",
   "gender": "Female",
   "team": "Power Picklers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 15,
   "losses": 24,
   "pointsWon": 712,
   "totalPointsAgainst": 753,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 8,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 38.5,
   "diff": -41,
   "ppg": 18.3,
   "leagueRank": 41,
   "rating": -0.2,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.2,
   "playerId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "name": "Jeannine Calhoun",
   "gender": "Female",
   "team": "Power Picklers",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 13,
   "losses": 22,
   "pointsWon": 622,
   "totalPointsAgainst": 662,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 11,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 37.1,
   "diff": -40,
   "ppg": 17.8,
   "leagueRank": 46,
   "rating": 0.5,
   "ratingGames": 35,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "name": "Ethan Garcia",
   "gender": "Male",
   "team": "Dinking Around",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 15,
   "losses": 26,
   "pointsWon": 741,
   "totalPointsAgainst": 796,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 7,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 36.6,
   "diff": -55,
   "ppg": 18.1,
   "leagueRank": 48,
   "rating": -1.4,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "54e1e042-3810-4949-90cf-3b134f207f80"
  },
  {
   "name": "Tyler Brandt",
   "gender": "Male",
   "team": "Power Picklers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 13,
   "losses": 23,
   "pointsWon": 614,
   "totalPointsAgainst": 701,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 36.1,
   "diff": -87,
   "ppg": 17.1,
   "leagueRank": 57,
   "rating": -1.9,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": -0.9,
   "playerId": "3bbbfe7f-9cc8-482f-83e4-9160a9234a28"
  },
  {
   "name": "Josh Rito",
   "gender": "Male",
   "team": "Summer of Slam",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 243,
   "totalPointsAgainst": 267,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d",
   "winPct": 35.7,
   "diff": -24,
   "ppg": 17.4,
   "leagueRank": 77,
   "rating": -1.1,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Eric Brezina",
   "gender": "Male",
   "team": "Power Picklers",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 19,
   "losses": 35,
   "pointsWon": 941,
   "totalPointsAgainst": 1043,
   "mixedWins": 9,
   "mixedLosses": 20,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 35.2,
   "diff": -102,
   "ppg": 17.4,
   "leagueRank": 51,
   "rating": -0.2,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.8,
   "playerId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "name": "Christian Osborne",
   "gender": "Male",
   "team": "Dinking Around",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 15,
   "losses": 28,
   "pointsWon": 758,
   "totalPointsAgainst": 830,
   "mixedWins": 6,
   "mixedLosses": 16,
   "genderWins": 9,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 34.9,
   "diff": -72,
   "ppg": 17.6,
   "leagueRank": 52,
   "rating": -0.1,
   "ratingGames": 43,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "74c7d469-a382-4768-aca9-2ea376436dcd"
  },
  {
   "name": "Tammy Dragon",
   "gender": "Female",
   "team": "Power Picklers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 16,
   "losses": 33,
   "pointsWon": 869,
   "totalPointsAgainst": 925,
   "mixedWins": 9,
   "mixedLosses": 18,
   "genderWins": 7,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 13,
   "winPct": 32.7,
   "diff": -56,
   "ppg": 17.7,
   "leagueRank": 47,
   "rating": 1.1,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "name": "Gail Hannagan",
   "gender": "Female",
   "team": "Power Picklers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 12,
   "losses": 25,
   "pointsWon": 653,
   "totalPointsAgainst": 716,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 5,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 32.4,
   "diff": -63,
   "ppg": 17.6,
   "leagueRank": 53,
   "rating": -0.7,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "name": "Toby Athron",
   "gender": "Male",
   "team": "Dinking Around",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 11,
   "losses": 23,
   "pointsWon": 588,
   "totalPointsAgainst": 663,
   "mixedWins": 7,
   "mixedLosses": 10,
   "genderWins": 4,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 32.4,
   "diff": -75,
   "ppg": 17.3,
   "leagueRank": 59,
   "rating": 0,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "65e91297-9d8e-4aad-a836-8458adc59a75"
  },
  {
   "name": "Doug Brown",
   "gender": "Male",
   "team": "Dinking Around",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 11,
   "losses": 26,
   "pointsWon": 557,
   "totalPointsAgainst": 726,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 2,
   "genderLosses": 16,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 29.7,
   "diff": -169,
   "ppg": 15.1,
   "leagueRank": 65,
   "rating": -2.3,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "81a3934b-14bc-45ea-a4f9-03e548c16dcd"
  },
  {
   "name": "Kathleen Deangelis",
   "gender": "Female",
   "team": "Summer of Slam",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 108,
   "totalPointsAgainst": 140,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "9bcbd522-d5da-4f16-8179-cb6ad029563d",
   "winPct": 28.6,
   "diff": -32,
   "ppg": 15.4,
   "leagueRank": 82,
   "rating": -1.7,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Diane Bracco",
   "gender": "Female",
   "team": "Summer of Slam",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 12,
   "losses": 30,
   "pointsWon": 738,
   "totalPointsAgainst": 825,
   "mixedWins": 6,
   "mixedLosses": 15,
   "genderWins": 6,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 13,
   "winPct": 28.6,
   "diff": -87,
   "ppg": 17.6,
   "leagueRank": 61,
   "rating": -2.8,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.7,
   "playerId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "name": "Mahesh Jonnalagdda",
   "gender": "Male",
   "team": "Summer of Slam",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 5,
   "losses": 19,
   "pointsWon": 387,
   "totalPointsAgainst": 483,
   "mixedWins": 1,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 20.8,
   "diff": -96,
   "ppg": 16.1,
   "leagueRank": 71,
   "rating": -3.6,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "b644a972-573e-4953-9b2f-6f6a8ba22813"
  },
  {
   "name": "Jamie Levin",
   "gender": "Female",
   "team": "Power Picklers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 8,
   "losses": 31,
   "pointsWon": 618,
   "totalPointsAgainst": 783,
   "mixedWins": 3,
   "mixedLosses": 16,
   "genderWins": 5,
   "genderLosses": 15,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 20.5,
   "diff": -165,
   "ppg": 15.8,
   "leagueRank": 68,
   "rating": -2.5,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "name": "Mike Fuchs",
   "gender": "Male",
   "team": "Dinking Around",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 8,
   "losses": 31,
   "pointsWon": 579,
   "totalPointsAgainst": 791,
   "mixedWins": 3,
   "mixedLosses": 16,
   "genderWins": 5,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 20.5,
   "diff": -212,
   "ppg": 14.8,
   "leagueRank": 75,
   "rating": -4.8,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0,
   "playerId": "310ae077-8a59-4cb5-a97d-d1c41cfbc846"
  },
  {
   "name": "Gary Dorin",
   "gender": "Male",
   "team": "Power Picklers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 8,
   "losses": 34,
   "pointsWon": 666,
   "totalPointsAgainst": 844,
   "mixedWins": 3,
   "mixedLosses": 18,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 10,
   "winPct": 19,
   "diff": -178,
   "ppg": 15.9,
   "leagueRank": 70,
   "rating": -3.5,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.5,
   "playerId": "445a429f-5a53-4ad8-94a2-929a77b27c37"
  },
  {
   "name": "Susan Goeckeler",
   "gender": "Female",
   "team": "Power Picklers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 112,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "winPct": 16.7,
   "diff": -12,
   "ppg": 18.7,
   "leagueRank": 81,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1
  },
  {
   "name": "Peggy Matzen",
   "gender": "Female",
   "team": "Power Picklers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 5,
   "losses": 31,
   "pointsWon": 551,
   "totalPointsAgainst": 731,
   "mixedWins": 0,
   "mixedLosses": 18,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 13.9,
   "diff": -180,
   "ppg": 15.3,
   "leagueRank": 73,
   "rating": -4.1,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.7,
   "playerId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "name": "Roy Dragon",
   "gender": "Male",
   "team": "Power Picklers",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 4,
   "losses": 32,
   "pointsWon": 568,
   "totalPointsAgainst": 748,
   "mixedWins": 0,
   "mixedLosses": 18,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 11.1,
   "diff": -180,
   "ppg": 15.8,
   "leagueRank": 72,
   "rating": -3.4,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": -0.3,
   "playerId": "b11eb919-2ee8-4767-8adf-aee1acd0a11a"
  }
 ],
 "teams": [
  {
   "name": "Pickleball Addicts",
   "w": 7,
   "l": 1,
   "pf": 4973,
   "pa": 4578,
   "gw": 151,
   "gl": 105,
   "diff": 395,
   "gameDiff": 46,
   "power": 0.5,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     82,
     46
    ],
    "male": [
     39,
     25
    ],
    "female": [
     30,
     34
    ]
   }
  },
  {
   "name": "The Mighty Dinks",
   "w": 6,
   "l": 2,
   "pf": 4990,
   "pa": 4681,
   "gw": 153,
   "gl": 103,
   "diff": 309,
   "gameDiff": 50,
   "power": 0.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     77,
     51
    ],
    "male": [
     41,
     23
    ],
    "female": [
     35,
     29
    ]
   }
  },
  {
   "name": "Summer of Slam",
   "w": 5,
   "l": 3,
   "pf": 4900,
   "pa": 4735,
   "gw": 141,
   "gl": 115,
   "diff": 165,
   "gameDiff": 26,
   "power": 0.2,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     70,
     58
    ],
    "male": [
     36,
     28
    ],
    "female": [
     35,
     29
    ]
   }
  },
  {
   "name": "Dinking Around",
   "w": 1,
   "l": 7,
   "pf": 4714,
   "pa": 5018,
   "gw": 113,
   "gl": 143,
   "diff": -304,
   "gameDiff": -30,
   "power": -0.4,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     54,
     74
    ],
    "male": [
     19,
     45
    ],
    "female": [
     40,
     24
    ]
   }
  },
  {
   "name": "Power Picklers",
   "w": 1,
   "l": 7,
   "pf": 4496,
   "pa": 5061,
   "gw": 82,
   "gl": 174,
   "diff": -565,
   "gameDiff": -92,
   "power": -0.8,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     37,
     91
    ],
    "male": [
     25,
     39
    ],
    "female": [
     20,
     44
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Margo Langer",
   "b": "Doug Brown",
   "team": "Dinking Around",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 3.3,
   "avgActual": 5.3,
   "avgExpected": -2.3,
   "aId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75",
   "bId": "81a3934b-14bc-45ea-a4f9-03e548c16dcd"
  },
  {
   "a": "Gail Hannagan",
   "b": "Peggy Matzen",
   "team": "Power Picklers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 3,
   "avgActual": 1.6,
   "avgExpected": -3.7,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Naveen Elangovan",
   "b": "Mike Leach",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 7.8,
   "avgExpected": 2.7,
   "aId": "887b93c9-f19a-4451-8ac6-28610a218ea8",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Eric Brezina",
   "b": "Sarah Stangota",
   "team": "Power Picklers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 5.3,
   "avgExpected": -0.3,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "David Tabacco",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.4,
   "avgActual": 3.8,
   "avgExpected": -1.1,
   "aId": "717d97f0-4f08-476f-9c53-7595605bc0b0",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Steve Tosi",
   "b": "Johanna Kreilick",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 6.3,
   "avgExpected": 1.9,
   "aId": "682dd503-f067-4547-b5c0-c9ce1cc6609b",
   "bId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "a": "Noelle Villa",
   "b": "David Tabacco",
   "team": "Pickleball Addicts",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2.2,
   "avgActual": 4.6,
   "avgExpected": 0.6,
   "aId": "1898b8fb-ea1d-4bb8-bcc5-17b1fba29700",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Jeannine Calhoun",
   "b": "Tammy Dragon",
   "team": "Power Picklers",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 2.1,
   "avgActual": 2.9,
   "avgExpected": -0.5,
   "aId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc",
   "bId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "a": "Janice Aliberti",
   "b": "Johanna Kreilick",
   "team": "The Mighty Dinks",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 2,
   "avgActual": 6.6,
   "avgExpected": 3.5,
   "aId": "078bc1a3-2897-4dc0-ae17-26b349108047",
   "bId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "a": "Janice Aliberti",
   "b": "Meghan Klein",
   "team": "The Mighty Dinks",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1.9,
   "avgActual": 4,
   "avgExpected": 1.2,
   "aId": "078bc1a3-2897-4dc0-ae17-26b349108047",
   "bId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909"
  },
  {
   "a": "Eric Brezina",
   "b": "Trevor Foraker",
   "team": "Power Picklers",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 6.6,
   "avgExpected": 3.2,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "76ac11d3-ccdc-4009-b836-99023d2722ca"
  },
  {
   "a": "Mike Leach",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 3,
   "avgExpected": -0.3,
   "aId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Laura Govan",
   "b": "Monika Torbus",
   "team": "Dinking Around",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 4.8,
   "avgExpected": 1.2,
   "aId": "110b981a-77ae-42b0-8200-4e30e9ce157a",
   "bId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "a": "Mike Fuchs",
   "b": "Ethan Garcia",
   "team": "Dinking Around",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1.8,
   "avgActual": -1.5,
   "avgExpected": -5.2,
   "aId": "310ae077-8a59-4cb5-a97d-d1c41cfbc846",
   "bId": "54e1e042-3810-4949-90cf-3b134f207f80"
  },
  {
   "a": "Tom Matko",
   "b": "Gail Hannagan",
   "team": "Power Picklers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 5.7,
   "avgExpected": 1.7,
   "aId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5",
   "bId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "a": "Mariola Biekisz",
   "b": "Paul Matzko",
   "team": "Dinking Around",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.6,
   "avgActual": 0.3,
   "avgExpected": -3.4,
   "aId": "188e1231-451b-48a6-84b8-9a9b11524618",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Mary Brashier",
   "b": "Elizabeth Biehl",
   "team": "Summer of Slam",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 5.7,
   "avgExpected": 2.1,
   "aId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45",
   "bId": "a10029d9-c75f-4a33-98cd-6173faa99ddc"
  },
  {
   "a": "Greg August",
   "b": "Addison Stewart",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2.3,
   "avgExpected": -1.1,
   "aId": "ad2273bf-d15d-4687-b222-7db8cd6f3abd",
   "bId": "bde51a59-4c56-4d7a-a0e3-a9041baf8583"
  },
  {
   "a": "Sharon Oddy",
   "b": "Karen Veninger",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 1,
   "avgExpected": -1.9,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "a": "Mary Brashier",
   "b": "Gail Welkes",
   "team": "Summer of Slam",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 4,
   "avgExpected": 1.8,
   "aId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45",
   "bId": "ef42e106-1059-4976-98c3-daccda942f56"
  },
  {
   "a": "Tammie Destefano",
   "b": "Craig Butler",
   "team": "The Mighty Dinks",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": 1.4,
   "avgActual": 1.7,
   "avgExpected": -0.2,
   "aId": "4d9ce370-c177-4fea-87a0-089117702814",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Dan Stanton",
   "b": "Craig Butler",
   "team": "The Mighty Dinks",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 4.4,
   "avgExpected": 1.9,
   "aId": "08f765a3-1ebf-4b7f-afe1-e815112ee581",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "Nancy Cook",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7.3,
   "avgExpected": 4.4,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Mike Leach",
   "b": "Nancy Cook",
   "team": "Pickleball Addicts",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 4.2,
   "avgExpected": 1.7,
   "aId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Eric Berlinger",
   "b": "Andy Ro",
   "team": "Summer of Slam",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 6.5,
   "avgExpected": 3.7,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Ethan Garcia",
   "b": "Christian Osborne",
   "team": "Dinking Around",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.2,
   "avgExpected": 0.8,
   "aId": "54e1e042-3810-4949-90cf-3b134f207f80",
   "bId": "74c7d469-a382-4768-aca9-2ea376436dcd"
  },
  {
   "a": "Toby Athron",
   "b": "Christian Osborne",
   "team": "Dinking Around",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 2,
   "avgExpected": -1.1,
   "aId": "65e91297-9d8e-4aad-a836-8458adc59a75",
   "bId": "74c7d469-a382-4768-aca9-2ea376436dcd"
  },
  {
   "a": "Sharon Oddy",
   "b": "Patricia Kavanaugh",
   "team": "Pickleball Addicts",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 6.3,
   "avgExpected": 3.4,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "a": "Gary Dorin",
   "b": "Roy Dragon",
   "team": "Power Picklers",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 1.3,
   "avgActual": -3.8,
   "avgExpected": -6.1,
   "aId": "445a429f-5a53-4ad8-94a2-929a77b27c37",
   "bId": "b11eb919-2ee8-4767-8adf-aee1acd0a11a"
  },
  {
   "a": "Addison Stewart",
   "b": "Johanna Kreilick",
   "team": "The Mighty Dinks",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 8,
   "avgExpected": 6.1,
   "aId": "bde51a59-4c56-4d7a-a0e3-a9041baf8583",
   "bId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "a": "Tyler Brandt",
   "b": "Jamie Levin",
   "team": "Power Picklers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1,
   "avgExpected": -1.8,
   "aId": "3bbbfe7f-9cc8-482f-83e4-9160a9234a28",
   "bId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "a": "Tammie Destefano",
   "b": "Jessica Wormeck",
   "team": "The Mighty Dinks",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.2,
   "avgActual": -0.2,
   "avgExpected": -2.2,
   "aId": "4d9ce370-c177-4fea-87a0-089117702814",
   "bId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "a": "Margo Langer",
   "b": "Ethan Garcia",
   "team": "Dinking Around",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 1.3,
   "avgExpected": -0.6,
   "aId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75",
   "bId": "54e1e042-3810-4949-90cf-3b134f207f80"
  },
  {
   "a": "David Tabacco",
   "b": "Patricia Kavanaugh",
   "team": "Pickleball Addicts",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 4,
   "avgExpected": 2.1,
   "aId": "717d97f0-4f08-476f-9c53-7595605bc0b0",
   "bId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "a": "Eric Berlinger",
   "b": "Jeff Barna",
   "team": "Summer of Slam",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 5.2,
   "avgExpected": 3.6,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "ec541044-1910-40ee-86e0-5763640772b0"
  },
  {
   "a": "David Tabacco",
   "b": "John Lottier",
   "team": "Pickleball Addicts",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 1.7,
   "avgExpected": -0.2,
   "aId": "717d97f0-4f08-476f-9c53-7595605bc0b0",
   "bId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "a": "Joaquin Cruz",
   "b": "Lynda Levan",
   "team": "Summer of Slam",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1,
   "avgActual": 2.3,
   "avgExpected": 0.9,
   "aId": "86b8ddd8-79bf-414d-ae7e-5c958d4f2899",
   "bId": "ca92ce54-a58c-4bf2-a49b-125be4b376ba"
  },
  {
   "a": "Patricia Kavanaugh",
   "b": "Karen Waldon",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.5,
   "avgExpected": 2.4,
   "aId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2",
   "bId": "c9f10502-3413-4189-87c9-d05ec7accae3"
  },
  {
   "a": "Gary Dorin",
   "b": "Sarah Stangota",
   "team": "Power Picklers",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1,
   "avgActual": 0.3,
   "avgExpected": -1.3,
   "aId": "445a429f-5a53-4ad8-94a2-929a77b27c37",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Trevor Foraker",
   "b": "Jeannine Calhoun",
   "team": "Power Picklers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 4,
   "avgExpected": 1.7,
   "aId": "76ac11d3-ccdc-4009-b836-99023d2722ca",
   "bId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "a": "Eric Berlinger",
   "b": "Gail Welkes",
   "team": "Summer of Slam",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.8,
   "avgExpected": 3.1,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "ef42e106-1059-4976-98c3-daccda942f56"
  },
  {
   "a": "Lisa Viola",
   "b": "Doug Brown",
   "team": "Dinking Around",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1,
   "avgActual": -1.4,
   "avgExpected": -3.2,
   "aId": "643d57f1-e4de-431d-b486-01fcc266501f",
   "bId": "81a3934b-14bc-45ea-a4f9-03e548c16dcd"
  },
  {
   "a": "Noelle Villa",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 4,
   "avgExpected": 2,
   "aId": "1898b8fb-ea1d-4bb8-bcc5-17b1fba29700",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Steve Tosi",
   "b": "Jessica Wormeck",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 1.7,
   "avgExpected": -0.7,
   "aId": "682dd503-f067-4547-b5c0-c9ce1cc6609b",
   "bId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "a": "Ethan Garcia",
   "b": "Toby Athron",
   "team": "Dinking Around",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": -1,
   "avgExpected": -3.4,
   "aId": "54e1e042-3810-4949-90cf-3b134f207f80",
   "bId": "65e91297-9d8e-4aad-a836-8458adc59a75"
  },
  {
   "a": "Craig Butler",
   "b": "Steven Levin",
   "team": "The Mighty Dinks",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.4,
   "avgExpected": 2.6,
   "aId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17",
   "bId": "da15ed15-38dd-423e-8d4e-963a596450fe"
  },
  {
   "a": "Meghan Klein",
   "b": "Steve Tosi",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.3,
   "avgExpected": 3.4,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "682dd503-f067-4547-b5c0-c9ce1cc6609b"
  },
  {
   "a": "David Tabacco",
   "b": "Gabe Lantos",
   "team": "Pickleball Addicts",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 4.1,
   "avgExpected": 2.8,
   "aId": "717d97f0-4f08-476f-9c53-7595605bc0b0",
   "bId": "87637937-3a92-4bbd-bc21-627094ef39c5"
  },
  {
   "a": "Kelly Bowers",
   "b": "Eric Berlinger",
   "team": "Summer of Slam",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 4.7,
   "avgExpected": 2.9,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "a": "Mariola Biekisz",
   "b": "Christine Ziegler",
   "team": "Dinking Around",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 5,
   "avgExpected": 3.2,
   "aId": "188e1231-451b-48a6-84b8-9a9b11524618",
   "bId": "63946930-2dca-489e-8158-028722c045f5"
  },
  {
   "a": "Doug Brown",
   "b": "Monika Torbus",
   "team": "Dinking Around",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -2.5,
   "avgExpected": -3.8,
   "aId": "81a3934b-14bc-45ea-a4f9-03e548c16dcd",
   "bId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "a": "Diane Bracco",
   "b": "Jeff Barna",
   "team": "Summer of Slam",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 1.4,
   "avgExpected": 0.3,
   "aId": "c7dd526f-b8fe-4172-977d-912044350954",
   "bId": "ec541044-1910-40ee-86e0-5763640772b0"
  },
  {
   "a": "Meghan Klein",
   "b": "Ken Carlson",
   "team": "The Mighty Dinks",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.6,
   "avgExpected": 2.4,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "b93dc821-ad17-49b2-8561-0c9da7614364"
  },
  {
   "a": "Sarah Stangota",
   "b": "Jamie Levin",
   "team": "Power Picklers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -2.7,
   "avgExpected": -4.3,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "a": "Sarah Stangota",
   "b": "Tammy Dragon",
   "team": "Power Picklers",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 1.8,
   "avgExpected": 0.6,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "a": "Margo Langer",
   "b": "Mariola Biekisz",
   "team": "Dinking Around",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": -0.3,
   "aId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75",
   "bId": "188e1231-451b-48a6-84b8-9a9b11524618"
  },
  {
   "a": "Mahesh Jonnalagdda",
   "b": "Diane Bracco",
   "team": "Summer of Slam",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -4.2,
   "avgExpected": -5.3,
   "aId": "b644a972-573e-4953-9b2f-6f6a8ba22813",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Kelly Bowers",
   "b": "Diane Bracco",
   "team": "Summer of Slam",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.2,
   "avgExpected": -2.4,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Mike Fuchs",
   "b": "Paul Matzko",
   "team": "Dinking Around",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -5.2,
   "avgExpected": -6.5,
   "aId": "310ae077-8a59-4cb5-a97d-d1c41cfbc846",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Mariola Biekisz",
   "b": "Monika Torbus",
   "team": "Dinking Around",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.4,
   "avgExpected": -0.5,
   "aId": "188e1231-451b-48a6-84b8-9a9b11524618",
   "bId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "a": "Gabe Lantos",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.4,
   "avgExpected": 2.4,
   "aId": "87637937-3a92-4bbd-bc21-627094ef39c5",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Trevor Foraker",
   "b": "Tammy Dragon",
   "team": "Power Picklers",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.5,
   "avgExpected": 0.4,
   "aId": "76ac11d3-ccdc-4009-b836-99023d2722ca",
   "bId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "a": "Gail Hannagan",
   "b": "Jamie Levin",
   "team": "Power Picklers",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -1.7,
   "avgExpected": -2.6,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "a": "Tyler Brandt",
   "b": "Roy Dragon",
   "team": "Power Picklers",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -3.6,
   "avgExpected": -4.5,
   "aId": "3bbbfe7f-9cc8-482f-83e4-9160a9234a28",
   "bId": "b11eb919-2ee8-4767-8adf-aee1acd0a11a"
  },
  {
   "a": "Karen Veninger",
   "b": "Nancy Cook",
   "team": "Pickleball Addicts",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.6,
   "avgActual": 0.1,
   "avgExpected": -0.7,
   "aId": "9057a78b-0136-4bb6-92e9-508f621b51e1",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Craig Butler",
   "b": "Ken Carlson",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.8,
   "avgExpected": 3.6,
   "aId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17",
   "bId": "b93dc821-ad17-49b2-8561-0c9da7614364"
  },
  {
   "a": "Christine Ziegler",
   "b": "Monika Torbus",
   "team": "Dinking Around",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.8,
   "aId": "63946930-2dca-489e-8158-028722c045f5",
   "bId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "a": "Tom Matko",
   "b": "Jeannine Calhoun",
   "team": "Power Picklers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.6,
   "aId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5",
   "bId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "a": "Monika Torbus",
   "b": "Paul Matzko",
   "team": "Dinking Around",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -0.7,
   "aId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Laura Govan",
   "b": "Lisa Viola",
   "team": "Dinking Around",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0.7,
   "avgExpected": -0.5,
   "aId": "110b981a-77ae-42b0-8200-4e30e9ce157a",
   "bId": "643d57f1-e4de-431d-b486-01fcc266501f"
  },
  {
   "a": "Tammie Destefano",
   "b": "Steven Levin",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -1.7,
   "avgExpected": -2.8,
   "aId": "4d9ce370-c177-4fea-87a0-089117702814",
   "bId": "da15ed15-38dd-423e-8d4e-963a596450fe"
  },
  {
   "a": "Christian Osborne",
   "b": "Doug Brown",
   "team": "Dinking Around",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -5.2,
   "avgExpected": -6.1,
   "aId": "74c7d469-a382-4768-aca9-2ea376436dcd",
   "bId": "81a3934b-14bc-45ea-a4f9-03e548c16dcd"
  },
  {
   "a": "Laura Govan",
   "b": "Mariola Biekisz",
   "team": "Dinking Around",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.6,
   "avgExpected": 1.8,
   "aId": "110b981a-77ae-42b0-8200-4e30e9ce157a",
   "bId": "188e1231-451b-48a6-84b8-9a9b11524618"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "Mike Leach",
   "team": "Pickleball Addicts",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 3.6,
   "avgExpected": 3,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Laura Govan",
   "b": "Paul Matzko",
   "team": "Dinking Around",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2,
   "avgExpected": 1.3,
   "aId": "110b981a-77ae-42b0-8200-4e30e9ce157a",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Greg August",
   "b": "Jessica Wormeck",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 3.7,
   "avgExpected": 2.8,
   "aId": "ad2273bf-d15d-4687-b222-7db8cd6f3abd",
   "bId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "a": "Mike Fuchs",
   "b": "Lisa Viola",
   "team": "Dinking Around",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -4.8,
   "avgExpected": -5.3,
   "aId": "310ae077-8a59-4cb5-a97d-d1c41cfbc846",
   "bId": "643d57f1-e4de-431d-b486-01fcc266501f"
  },
  {
   "a": "Kelly Bowers",
   "b": "Mahesh Jonnalagdda",
   "team": "Summer of Slam",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -4,
   "avgExpected": -4.7,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "b644a972-573e-4953-9b2f-6f6a8ba22813"
  },
  {
   "a": "Jessica Wormeck",
   "b": "Steven Levin",
   "team": "The Mighty Dinks",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -2.1,
   "avgExpected": -2.6,
   "aId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9",
   "bId": "da15ed15-38dd-423e-8d4e-963a596450fe"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "Sharon Oddy",
   "team": "Pickleball Addicts",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 2.8,
   "avgExpected": 2.2,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "a": "Craig Butler",
   "b": "Addison Stewart",
   "team": "The Mighty Dinks",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 5.2,
   "avgExpected": 4.7,
   "aId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17",
   "bId": "bde51a59-4c56-4d7a-a0e3-a9041baf8583"
  },
  {
   "a": "Meghan Klein",
   "b": "Cathy Matko",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.7,
   "avgExpected": 3,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "a": "Mike Fuchs",
   "b": "Toby Athron",
   "team": "Dinking Around",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -7,
   "avgExpected": -7.4,
   "aId": "310ae077-8a59-4cb5-a97d-d1c41cfbc846",
   "bId": "65e91297-9d8e-4aad-a836-8458adc59a75"
  },
  {
   "a": "Joaquin Cruz",
   "b": "Jeff Barna",
   "team": "Summer of Slam",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.2,
   "avgActual": 1.2,
   "avgExpected": 0.9,
   "aId": "86b8ddd8-79bf-414d-ae7e-5c958d4f2899",
   "bId": "ec541044-1910-40ee-86e0-5763640772b0"
  },
  {
   "a": "Ken Carlson",
   "b": "Steven Levin",
   "team": "The Mighty Dinks",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.8,
   "avgExpected": -2.2,
   "aId": "b93dc821-ad17-49b2-8561-0c9da7614364",
   "bId": "da15ed15-38dd-423e-8d4e-963a596450fe"
  },
  {
   "a": "Lynda Levan",
   "b": "Jeff Barna",
   "team": "Summer of Slam",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.9,
   "aId": "ca92ce54-a58c-4bf2-a49b-125be4b376ba",
   "bId": "ec541044-1910-40ee-86e0-5763640772b0"
  },
  {
   "a": "Steve Tosi",
   "b": "Steven Levin",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.5,
   "avgExpected": 1.2,
   "aId": "682dd503-f067-4547-b5c0-c9ce1cc6609b",
   "bId": "da15ed15-38dd-423e-8d4e-963a596450fe"
  },
  {
   "a": "Janice Aliberti",
   "b": "Greg August",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.3,
   "avgExpected": 2.2,
   "aId": "078bc1a3-2897-4dc0-ae17-26b349108047",
   "bId": "ad2273bf-d15d-4687-b222-7db8cd6f3abd"
  },
  {
   "a": "Ed Villaverde",
   "b": "Elizabeth Biehl",
   "team": "Summer of Slam",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 0.5,
   "avgExpected": 0.3,
   "aId": "3edc72f0-c23d-4ad5-9842-cde023cd7514",
   "bId": "a10029d9-c75f-4a33-98cd-6173faa99ddc"
  },
  {
   "a": "Elizabeth Biehl",
   "b": "Gail Welkes",
   "team": "Summer of Slam",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0.6,
   "avgExpected": 0.4,
   "aId": "a10029d9-c75f-4a33-98cd-6173faa99ddc",
   "bId": "ef42e106-1059-4976-98c3-daccda942f56"
  },
  {
   "a": "Christian Osborne",
   "b": "Paul Matzko",
   "team": "Dinking Around",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": 0.1,
   "avgActual": -2.5,
   "avgExpected": -2.7,
   "aId": "74c7d469-a382-4768-aca9-2ea376436dcd",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Rick Wickenheisser",
   "b": "Joaquin Cruz",
   "team": "Summer of Slam",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.5,
   "avgExpected": -0.8,
   "aId": "741048e8-2c91-4466-bb1c-1a624d1dabd9",
   "bId": "86b8ddd8-79bf-414d-ae7e-5c958d4f2899"
  },
  {
   "a": "Christine Ziegler",
   "b": "Paul Matzko",
   "team": "Dinking Around",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.3,
   "avgExpected": 2.4,
   "aId": "63946930-2dca-489e-8158-028722c045f5",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Lisa Viola",
   "b": "Monika Torbus",
   "team": "Dinking Around",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0,
   "avgActual": -0.9,
   "avgExpected": -0.9,
   "aId": "643d57f1-e4de-431d-b486-01fcc266501f",
   "bId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "a": "Gabe Lantos",
   "b": "Nancy Cook",
   "team": "Pickleball Addicts",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 2,
   "aId": "87637937-3a92-4bbd-bc21-627094ef39c5",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Tom Matko",
   "b": "Jamie Levin",
   "team": "Power Picklers",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -4.2,
   "avgExpected": -4.3,
   "aId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5",
   "bId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "a": "Meghan Klein",
   "b": "Greg August",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.8,
   "avgExpected": 0.7,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "ad2273bf-d15d-4687-b222-7db8cd6f3abd"
  },
  {
   "a": "Tyler Brandt",
   "b": "Eric Brezina",
   "team": "Power Picklers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -1,
   "avgExpected": -1.1,
   "aId": "3bbbfe7f-9cc8-482f-83e4-9160a9234a28",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "Karen Veninger",
   "team": "Pickleball Addicts",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0,
   "avgActual": 2.7,
   "avgExpected": 2.7,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "a": "Noelle Villa",
   "b": "Patricia Kavanaugh",
   "team": "Pickleball Addicts",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0,
   "avgActual": 4.2,
   "avgExpected": 4.2,
   "aId": "1898b8fb-ea1d-4bb8-bcc5-17b1fba29700",
   "bId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "a": "Sarah Stangota",
   "b": "Peggy Matzen",
   "team": "Power Picklers",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0,
   "avgActual": -2.2,
   "avgExpected": -2.2,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Dan Stanton",
   "b": "Addison Stewart",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 2,
   "aId": "08f765a3-1ebf-4b7f-afe1-e815112ee581",
   "bId": "bde51a59-4c56-4d7a-a0e3-a9041baf8583"
  },
  {
   "a": "Joaquin Cruz",
   "b": "Mahesh Jonnalagdda",
   "team": "Summer of Slam",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -3.6,
   "avgExpected": -3.5,
   "aId": "86b8ddd8-79bf-414d-ae7e-5c958d4f2899",
   "bId": "b644a972-573e-4953-9b2f-6f6a8ba22813"
  },
  {
   "a": "Mary Brashier",
   "b": "Andy Ro",
   "team": "Summer of Slam",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 2.8,
   "avgExpected": 2.8,
   "aId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Eric Berlinger",
   "b": "Rick Wickenheisser",
   "team": "Summer of Slam",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.8,
   "avgExpected": 5,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "a": "Ethan Garcia",
   "b": "Monika Torbus",
   "team": "Dinking Around",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.2,
   "avgExpected": 0,
   "aId": "54e1e042-3810-4949-90cf-3b134f207f80",
   "bId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "a": "Rick Wickenheisser",
   "b": "Mary Brashier",
   "team": "Summer of Slam",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 1.5,
   "avgExpected": 1.9,
   "aId": "741048e8-2c91-4466-bb1c-1a624d1dabd9",
   "bId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "a": "Christine Ziegler",
   "b": "Christian Osborne",
   "team": "Dinking Around",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.5,
   "aId": "63946930-2dca-489e-8158-028722c045f5",
   "bId": "74c7d469-a382-4768-aca9-2ea376436dcd"
  },
  {
   "a": "Janice Aliberti",
   "b": "Craig Butler",
   "team": "The Mighty Dinks",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.5,
   "avgExpected": 2.8,
   "aId": "078bc1a3-2897-4dc0-ae17-26b349108047",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Mike Leach",
   "b": "John Lottier",
   "team": "Pickleball Addicts",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 1.5,
   "avgExpected": 1.8,
   "aId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b",
   "bId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "a": "Jeannine Calhoun",
   "b": "Roy Dragon",
   "team": "Power Picklers",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -2.7,
   "avgExpected": -2.3,
   "aId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc",
   "bId": "b11eb919-2ee8-4767-8adf-aee1acd0a11a"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 4,
   "avgExpected": 4.4,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Roy Dragon",
   "b": "Jamie Levin",
   "team": "Power Picklers",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -5,
   "avgExpected": -4.6,
   "aId": "b11eb919-2ee8-4767-8adf-aee1acd0a11a",
   "bId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "a": "Tyler Brandt",
   "b": "Sarah Stangota",
   "team": "Power Picklers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -0.3,
   "avgExpected": 0.1,
   "aId": "3bbbfe7f-9cc8-482f-83e4-9160a9234a28",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Mariola Biekisz",
   "b": "Christian Osborne",
   "team": "Dinking Around",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "188e1231-451b-48a6-84b8-9a9b11524618",
   "bId": "74c7d469-a382-4768-aca9-2ea376436dcd"
  },
  {
   "a": "Diane Bracco",
   "b": "Lynda Levan",
   "team": "Summer of Slam",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -0.9,
   "avgExpected": -0.5,
   "aId": "c7dd526f-b8fe-4172-977d-912044350954",
   "bId": "ca92ce54-a58c-4bf2-a49b-125be4b376ba"
  },
  {
   "a": "Janice Aliberti",
   "b": "Tammie Destefano",
   "team": "The Mighty Dinks",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -3.3,
   "avgExpected": -2.8,
   "aId": "078bc1a3-2897-4dc0-ae17-26b349108047",
   "bId": "4d9ce370-c177-4fea-87a0-089117702814"
  },
  {
   "a": "John Lottier",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.5,
   "avgExpected": 2.2,
   "aId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Laura Govan",
   "b": "Christian Osborne",
   "team": "Dinking Around",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1.6,
   "avgExpected": -1.1,
   "aId": "110b981a-77ae-42b0-8200-4e30e9ce157a",
   "bId": "74c7d469-a382-4768-aca9-2ea376436dcd"
  },
  {
   "a": "Doug Brown",
   "b": "Paul Matzko",
   "team": "Dinking Around",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5.7,
   "avgExpected": -5.1,
   "aId": "81a3934b-14bc-45ea-a4f9-03e548c16dcd",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Laura Govan",
   "b": "Toby Athron",
   "team": "Dinking Around",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.3,
   "avgExpected": -0.3,
   "aId": "110b981a-77ae-42b0-8200-4e30e9ce157a",
   "bId": "65e91297-9d8e-4aad-a836-8458adc59a75"
  },
  {
   "a": "Elizabeth Biehl",
   "b": "Diane Bracco",
   "team": "Summer of Slam",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -2.5,
   "avgExpected": -1.8,
   "aId": "a10029d9-c75f-4a33-98cd-6173faa99ddc",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Janice Aliberti",
   "b": "Ken Carlson",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.7,
   "avgExpected": -0.7,
   "aId": "078bc1a3-2897-4dc0-ae17-26b349108047",
   "bId": "b93dc821-ad17-49b2-8561-0c9da7614364"
  },
  {
   "a": "Tom Matko",
   "b": "Eric Brezina",
   "team": "Power Picklers",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -3.7,
   "avgExpected": -3,
   "aId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Tyler Brandt",
   "b": "Gary Dorin",
   "team": "Power Picklers",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -2.5,
   "avgExpected": -1.8,
   "aId": "3bbbfe7f-9cc8-482f-83e4-9160a9234a28",
   "bId": "445a429f-5a53-4ad8-94a2-929a77b27c37"
  },
  {
   "a": "Tom Matko",
   "b": "Tammy Dragon",
   "team": "Power Picklers",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -2,
   "avgExpected": -1.4,
   "aId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5",
   "bId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "a": "Kelly Bowers",
   "b": "Jeff Barna",
   "team": "Summer of Slam",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.4,
   "avgActual": 0.6,
   "avgExpected": 1.3,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "ec541044-1910-40ee-86e0-5763640772b0"
  },
  {
   "a": "Joaquin Cruz",
   "b": "Diane Bracco",
   "team": "Summer of Slam",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -2.7,
   "avgExpected": -2,
   "aId": "86b8ddd8-79bf-414d-ae7e-5c958d4f2899",
   "bId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "a": "Eric Berlinger",
   "b": "Elizabeth Biehl",
   "team": "Summer of Slam",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 4,
   "avgExpected": 4.9,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "a10029d9-c75f-4a33-98cd-6173faa99ddc"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "John Lottier",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 2.3,
   "avgExpected": 3.1,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "a": "Christine Ziegler",
   "b": "Lisa Viola",
   "team": "Dinking Around",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0.7,
   "avgExpected": 1.7,
   "aId": "63946930-2dca-489e-8158-028722c045f5",
   "bId": "643d57f1-e4de-431d-b486-01fcc266501f"
  },
  {
   "a": "Toby Athron",
   "b": "Paul Matzko",
   "team": "Dinking Around",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.2,
   "avgExpected": -1.5,
   "aId": "65e91297-9d8e-4aad-a836-8458adc59a75",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Eric Berlinger",
   "b": "Mary Brashier",
   "team": "Summer of Slam",
   "n": 11,
   "w": 10,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 4.4,
   "avgExpected": 5,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "a": "Joaquin Cruz",
   "b": "Elizabeth Biehl",
   "team": "Summer of Slam",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -0.7,
   "avgExpected": 0.1,
   "aId": "86b8ddd8-79bf-414d-ae7e-5c958d4f2899",
   "bId": "a10029d9-c75f-4a33-98cd-6173faa99ddc"
  },
  {
   "a": "Naveen Elangovan",
   "b": "Patricia Kavanaugh",
   "team": "Pickleball Addicts",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 3.6,
   "avgExpected": 4.4,
   "aId": "887b93c9-f19a-4451-8ac6-28610a218ea8",
   "bId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "a": "Sharon Oddy",
   "b": "Nancy Cook",
   "team": "Pickleball Addicts",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.5,
   "avgActual": -3.2,
   "avgExpected": -2.5,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "c3649296-108a-4a74-ad2a-e045d2fdee4c"
  },
  {
   "a": "Tammie Destefano",
   "b": "Steve Tosi",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -2.9,
   "aId": "4d9ce370-c177-4fea-87a0-089117702814",
   "bId": "682dd503-f067-4547-b5c0-c9ce1cc6609b"
  },
  {
   "a": "Mariola Biekisz",
   "b": "Toby Athron",
   "team": "Dinking Around",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.2,
   "aId": "188e1231-451b-48a6-84b8-9a9b11524618",
   "bId": "65e91297-9d8e-4aad-a836-8458adc59a75"
  },
  {
   "a": "Gail Hannagan",
   "b": "Eric Brezina",
   "team": "Power Picklers",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -2.8,
   "avgExpected": -1.9,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Toby Athron",
   "b": "Monika Torbus",
   "team": "Dinking Around",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -0.8,
   "aId": "65e91297-9d8e-4aad-a836-8458adc59a75",
   "bId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "a": "Dan Stanton",
   "b": "Meghan Klein",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -1,
   "avgExpected": 0.4,
   "aId": "08f765a3-1ebf-4b7f-afe1-e815112ee581",
   "bId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909"
  },
  {
   "a": "Tyler Brandt",
   "b": "Gail Hannagan",
   "team": "Power Picklers",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.9,
   "aId": "3bbbfe7f-9cc8-482f-83e4-9160a9234a28",
   "bId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "a": "Tom Matko",
   "b": "Roy Dragon",
   "team": "Power Picklers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -7,
   "avgExpected": -5.5,
   "aId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5",
   "bId": "b11eb919-2ee8-4767-8adf-aee1acd0a11a"
  },
  {
   "a": "Tyler Brandt",
   "b": "Peggy Matzen",
   "team": "Power Picklers",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -5.8,
   "avgExpected": -4.7,
   "aId": "3bbbfe7f-9cc8-482f-83e4-9160a9234a28",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Peggy Matzen",
   "b": "Jamie Levin",
   "team": "Power Picklers",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -6,
   "avgExpected": -4.8,
   "aId": "d64631c2-5086-4d28-b93e-26c8661af87b",
   "bId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "a": "Mariola Biekisz",
   "b": "Ethan Garcia",
   "team": "Dinking Around",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.7,
   "avgExpected": 0.9,
   "aId": "188e1231-451b-48a6-84b8-9a9b11524618",
   "bId": "54e1e042-3810-4949-90cf-3b134f207f80"
  },
  {
   "a": "Janice Aliberti",
   "b": "Dan Stanton",
   "team": "The Mighty Dinks",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.2,
   "avgExpected": 1,
   "aId": "078bc1a3-2897-4dc0-ae17-26b349108047",
   "bId": "08f765a3-1ebf-4b7f-afe1-e815112ee581"
  },
  {
   "a": "Eric Brezina",
   "b": "Tammy Dragon",
   "team": "Power Picklers",
   "n": 12,
   "w": 3,
   "l": 9,
   "synergy": -0.7,
   "avgActual": -2.8,
   "avgExpected": -1.9,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "a": "Mike Fuchs",
   "b": "Christine Ziegler",
   "team": "Dinking Around",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -5.7,
   "avgExpected": -4.1,
   "aId": "310ae077-8a59-4cb5-a97d-d1c41cfbc846",
   "bId": "63946930-2dca-489e-8158-028722c045f5"
  },
  {
   "a": "Lisa Viola",
   "b": "Toby Athron",
   "team": "Dinking Around",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -1.4,
   "aId": "643d57f1-e4de-431d-b486-01fcc266501f",
   "bId": "65e91297-9d8e-4aad-a836-8458adc59a75"
  },
  {
   "a": "Craig Butler",
   "b": "Johanna Kreilick",
   "team": "The Mighty Dinks",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 5.4,
   "avgExpected": 6.6,
   "aId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17",
   "bId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "a": "Patricia Kavanaugh",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0.8,
   "avgExpected": 2.4,
   "aId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Jessica Wormeck",
   "b": "Ken Carlson",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -0.3,
   "avgExpected": 1.5,
   "aId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9",
   "bId": "b93dc821-ad17-49b2-8561-0c9da7614364"
  },
  {
   "a": "Ethan Garcia",
   "b": "Lisa Viola",
   "team": "Dinking Around",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -2.3,
   "avgExpected": -0.4,
   "aId": "54e1e042-3810-4949-90cf-3b134f207f80",
   "bId": "643d57f1-e4de-431d-b486-01fcc266501f"
  },
  {
   "a": "Karen Veninger",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.2,
   "avgExpected": -1.5,
   "aId": "9057a78b-0136-4bb6-92e9-508f621b51e1",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Mahesh Jonnalagdda",
   "b": "Jeff Barna",
   "team": "Summer of Slam",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -4.3,
   "avgExpected": -2.7,
   "aId": "b644a972-573e-4953-9b2f-6f6a8ba22813",
   "bId": "ec541044-1910-40ee-86e0-5763640772b0"
  },
  {
   "a": "Sharon Oddy",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2.8,
   "avgExpected": -1.1,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  },
  {
   "a": "Gail Welkes",
   "b": "Andy Ro",
   "team": "Summer of Slam",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -0.2,
   "avgExpected": 1.5,
   "aId": "ef42e106-1059-4976-98c3-daccda942f56",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Mike Leach",
   "b": "Karen Waldon",
   "team": "Pickleball Addicts",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -5.3,
   "avgExpected": -3.1,
   "aId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b",
   "bId": "c9f10502-3413-4189-87c9-d05ec7accae3"
  },
  {
   "a": "Meghan Klein",
   "b": "Jessica Wormeck",
   "team": "The Mighty Dinks",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -1,
   "avgActual": -0.7,
   "avgExpected": 0.8,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9"
  },
  {
   "a": "Lakshmikanth Chaluvadi",
   "b": "Gabe Lantos",
   "team": "Pickleball Addicts",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1,
   "avgActual": 5.5,
   "avgExpected": 7.5,
   "aId": "377302a4-12da-4449-bbfc-a28248436679",
   "bId": "87637937-3a92-4bbd-bc21-627094ef39c5"
  },
  {
   "a": "Gary Dorin",
   "b": "Peggy Matzen",
   "team": "Power Picklers",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1,
   "avgActual": -8.3,
   "avgExpected": -6.7,
   "aId": "445a429f-5a53-4ad8-94a2-929a77b27c37",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Gary Dorin",
   "b": "Eric Brezina",
   "team": "Power Picklers",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1,
   "avgActual": -5.2,
   "avgExpected": -3.4,
   "aId": "445a429f-5a53-4ad8-94a2-929a77b27c37",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Eric Brezina",
   "b": "Jeannine Calhoun",
   "team": "Power Picklers",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.2,
   "avgExpected": -2.2,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "a": "Ethan Garcia",
   "b": "Paul Matzko",
   "team": "Dinking Around",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -3.7,
   "avgExpected": -1,
   "aId": "54e1e042-3810-4949-90cf-3b134f207f80",
   "bId": "faab88e7-d3ba-4516-bdd0-e37c622ce5de"
  },
  {
   "a": "Jessica Wormeck",
   "b": "Johanna Kreilick",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -2,
   "avgExpected": 0.5,
   "aId": "b3448785-cc93-4aed-9940-a4cc2e7a66d9",
   "bId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "a": "Kelly Bowers",
   "b": "Gail Welkes",
   "team": "Summer of Slam",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 0.4,
   "avgExpected": 2.4,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "ef42e106-1059-4976-98c3-daccda942f56"
  },
  {
   "a": "Margo Langer",
   "b": "Lisa Viola",
   "team": "Dinking Around",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -1,
   "avgExpected": 0.8,
   "aId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75",
   "bId": "643d57f1-e4de-431d-b486-01fcc266501f"
  },
  {
   "a": "Steve Tosi",
   "b": "Craig Butler",
   "team": "The Mighty Dinks",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.2,
   "avgActual": 2.3,
   "avgExpected": 4.3,
   "aId": "682dd503-f067-4547-b5c0-c9ce1cc6609b",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Tom Matko",
   "b": "Trevor Foraker",
   "team": "Power Picklers",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.2,
   "avgActual": 0.8,
   "avgExpected": 2.9,
   "aId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5",
   "bId": "76ac11d3-ccdc-4009-b836-99023d2722ca"
  },
  {
   "a": "Sharon Oddy",
   "b": "Mike Leach",
   "team": "Pickleball Addicts",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -2,
   "avgExpected": 0,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Eric Berlinger",
   "b": "Ed Villaverde",
   "team": "Summer of Slam",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.2,
   "avgActual": 0,
   "avgExpected": 2,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "3edc72f0-c23d-4ad5-9842-cde023cd7514"
  },
  {
   "a": "Margo Langer",
   "b": "Monika Torbus",
   "team": "Dinking Around",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 0.6,
   "avgExpected": 2.7,
   "aId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75",
   "bId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "a": "Kelly Bowers",
   "b": "Lynda Levan",
   "team": "Summer of Slam",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 0,
   "avgExpected": 2.5,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "ca92ce54-a58c-4bf2-a49b-125be4b376ba"
  },
  {
   "a": "Patricia Kavanaugh",
   "b": "John Lottier",
   "team": "Pickleball Addicts",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 0.6,
   "avgExpected": 2.9,
   "aId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2",
   "bId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "a": "David Tabacco",
   "b": "Mike Leach",
   "team": "Pickleball Addicts",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.3,
   "avgActual": 0.8,
   "avgExpected": 3.1,
   "aId": "717d97f0-4f08-476f-9c53-7595605bc0b0",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Greg August",
   "b": "Ken Carlson",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -2.5,
   "avgExpected": 0.2,
   "aId": "ad2273bf-d15d-4687-b222-7db8cd6f3abd",
   "bId": "b93dc821-ad17-49b2-8561-0c9da7614364"
  },
  {
   "a": "David Tabacco",
   "b": "Karen Veninger",
   "team": "Pickleball Addicts",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -2.3,
   "avgExpected": 0.7,
   "aId": "717d97f0-4f08-476f-9c53-7595605bc0b0",
   "bId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "a": "Kelly Bowers",
   "b": "Mary Brashier",
   "team": "Summer of Slam",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -1.8,
   "avgExpected": 0.8,
   "aId": "25c2cf33-ede0-4610-85d6-e08cddc05484",
   "bId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "a": "Tammy Dragon",
   "b": "Jamie Levin",
   "team": "Power Picklers",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -7.2,
   "avgExpected": -4.4,
   "aId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f",
   "bId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "a": "Steve Tosi",
   "b": "Ken Carlson",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -2,
   "avgExpected": 1.6,
   "aId": "682dd503-f067-4547-b5c0-c9ce1cc6609b",
   "bId": "b93dc821-ad17-49b2-8561-0c9da7614364"
  },
  {
   "a": "Jeff Barna",
   "b": "Gail Welkes",
   "team": "Summer of Slam",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -4.7,
   "avgExpected": -1.3,
   "aId": "ec541044-1910-40ee-86e0-5763640772b0",
   "bId": "ef42e106-1059-4976-98c3-daccda942f56"
  },
  {
   "a": "Roy Dragon",
   "b": "Peggy Matzen",
   "team": "Power Picklers",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.5,
   "avgActual": -7.7,
   "avgExpected": -5.2,
   "aId": "b11eb919-2ee8-4767-8adf-aee1acd0a11a",
   "bId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "a": "Joaquin Cruz",
   "b": "Andy Ro",
   "team": "Summer of Slam",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -5,
   "avgExpected": -1.5,
   "aId": "86b8ddd8-79bf-414d-ae7e-5c958d4f2899",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Laura Govan",
   "b": "Mike Fuchs",
   "team": "Dinking Around",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -9.3,
   "avgExpected": -5.7,
   "aId": "110b981a-77ae-42b0-8200-4e30e9ce157a",
   "bId": "310ae077-8a59-4cb5-a97d-d1c41cfbc846"
  },
  {
   "a": "Tammie Destefano",
   "b": "Johanna Kreilick",
   "team": "The Mighty Dinks",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -0.4,
   "avgExpected": 2,
   "aId": "4d9ce370-c177-4fea-87a0-089117702814",
   "bId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "a": "Meghan Klein",
   "b": "Steven Levin",
   "team": "The Mighty Dinks",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -1.8,
   "avgExpected": 0.8,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "da15ed15-38dd-423e-8d4e-963a596450fe"
  },
  {
   "a": "Tom Matko",
   "b": "Gary Dorin",
   "team": "Power Picklers",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -9.7,
   "avgExpected": -5.8,
   "aId": "0ae368c3-2417-42c2-bf5b-5b9f314c9da5",
   "bId": "445a429f-5a53-4ad8-94a2-929a77b27c37"
  },
  {
   "a": "Tammie Destefano",
   "b": "Addison Stewart",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -4,
   "avgExpected": -0.2,
   "aId": "4d9ce370-c177-4fea-87a0-089117702814",
   "bId": "bde51a59-4c56-4d7a-a0e3-a9041baf8583"
  },
  {
   "a": "Noelle Villa",
   "b": "Karen Veninger",
   "team": "Pickleball Addicts",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -3.7,
   "avgExpected": 0.3,
   "aId": "1898b8fb-ea1d-4bb8-bcc5-17b1fba29700",
   "bId": "9057a78b-0136-4bb6-92e9-508f621b51e1"
  },
  {
   "a": "Margo Langer",
   "b": "Mike Fuchs",
   "team": "Dinking Around",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.7,
   "avgActual": -7,
   "avgExpected": -3.9,
   "aId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75",
   "bId": "310ae077-8a59-4cb5-a97d-d1c41cfbc846"
  },
  {
   "a": "Karen Veninger",
   "b": "Mike Leach",
   "team": "Pickleball Addicts",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.8,
   "avgActual": -2.3,
   "avgExpected": 0.7,
   "aId": "9057a78b-0136-4bb6-92e9-508f621b51e1",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Janice Aliberti",
   "b": "Addison Stewart",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2,
   "avgActual": -2.5,
   "avgExpected": 1.6,
   "aId": "078bc1a3-2897-4dc0-ae17-26b349108047",
   "bId": "bde51a59-4c56-4d7a-a0e3-a9041baf8583"
  },
  {
   "a": "Christian Osborne",
   "b": "Monika Torbus",
   "team": "Dinking Around",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -2,
   "avgActual": -5.7,
   "avgExpected": -2.3,
   "aId": "74c7d469-a382-4768-aca9-2ea376436dcd",
   "bId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "a": "Janice Aliberti",
   "b": "Cathy Matko",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2,
   "avgActual": -5.2,
   "avgExpected": -1.2,
   "aId": "078bc1a3-2897-4dc0-ae17-26b349108047",
   "bId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "a": "Ethan Garcia",
   "b": "Doug Brown",
   "team": "Dinking Around",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -8.7,
   "avgExpected": -4.5,
   "aId": "54e1e042-3810-4949-90cf-3b134f207f80",
   "bId": "81a3934b-14bc-45ea-a4f9-03e548c16dcd"
  },
  {
   "a": "Mike Fuchs",
   "b": "Doug Brown",
   "team": "Dinking Around",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -12,
   "avgExpected": -7.8,
   "aId": "310ae077-8a59-4cb5-a97d-d1c41cfbc846",
   "bId": "81a3934b-14bc-45ea-a4f9-03e548c16dcd"
  },
  {
   "a": "Gary Dorin",
   "b": "Jamie Levin",
   "team": "Power Picklers",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -9.2,
   "avgExpected": -5.1,
   "aId": "445a429f-5a53-4ad8-94a2-929a77b27c37",
   "bId": "ff2e2bfb-12b9-4b51-abbd-8b868ce0f78e"
  },
  {
   "a": "Sarah Stangota",
   "b": "Anthony Leone",
   "team": "Power Picklers",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.3,
   "avgActual": -5.3,
   "avgExpected": 0,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Sarah Stangota",
   "b": "Jeannine Calhoun",
   "team": "Power Picklers",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -6.7,
   "avgExpected": -1.1,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "85643f89-6cfc-4c76-8d09-0f0e4869a9dc"
  },
  {
   "a": "Greg August",
   "b": "Steven Levin",
   "team": "The Mighty Dinks",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.4,
   "avgActual": -4.5,
   "avgExpected": 0.3,
   "aId": "ad2273bf-d15d-4687-b222-7db8cd6f3abd",
   "bId": "da15ed15-38dd-423e-8d4e-963a596450fe"
  },
  {
   "a": "Gail Hannagan",
   "b": "Tammy Dragon",
   "team": "Power Picklers",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.5,
   "avgActual": -5.7,
   "avgExpected": -0.8,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "f4a55eec-b8bb-4826-ba80-aba2c6d91f1f"
  },
  {
   "a": "Meghan Klein",
   "b": "Tammie Destefano",
   "team": "The Mighty Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.7,
   "avgActual": -5.7,
   "avgExpected": 0.6,
   "aId": "0b21bd3b-0ab8-4dc8-9b09-5c47b57d5909",
   "bId": "4d9ce370-c177-4fea-87a0-089117702814"
  },
  {
   "a": "Sharon Oddy",
   "b": "David Tabacco",
   "team": "Pickleball Addicts",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.8,
   "avgActual": -5.7,
   "avgExpected": 0.9,
   "aId": "697e9a10-3950-4376-96f8-8b1f083875f1",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Nancy Cook",
   "b": "Marguerite Greener",
   "team": "Pickleball Addicts",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -2.9,
   "avgActual": -5.2,
   "avgExpected": -0.1,
   "aId": "c3649296-108a-4a74-ad2a-e045d2fdee4c",
   "bId": "e4917a8d-1ea7-491b-a6cb-6a4f51566f3d"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Summer of Slam",
   "away": "Dinking Around",
   "time": "2026-06-15T19:30:00",
   "complete": true,
   "homePoints": 593,
   "awayPoints": 586,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mary Brashier",
      "Eric Berlinger"
     ],
     "a": [
      "Lisa Viola",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelly Bowers",
      "Rick Wickenheisser"
     ],
     "a": [
      "Laura Govan",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lynda Levan",
      "Joaquin Cruz"
     ],
     "a": [
      "Christine Ziegler",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Mariola Biekisz",
      "Christian Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Brashier",
      "Elizabeth Biehl"
     ],
     "a": [
      "Laura Govan",
      "Christine Ziegler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kelly Bowers",
      "Diane Bracco"
     ],
     "a": [
      "Lisa Viola",
      "Monika Torbus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Eric Berlinger",
      "Rick Wickenheisser"
     ],
     "a": [
      "Mike Fuchs",
      "Toby Athron"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mahesh Jonnalagdda",
      "Jeff Barna"
     ],
     "a": [
      "Paul Matzko",
      "Ethan Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Bowers",
      "Eric Berlinger"
     ],
     "a": [
      "Laura Govan",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ],
     "a": [
      "Lisa Viola",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elizabeth Biehl",
      "Joaquin Cruz"
     ],
     "a": [
      "Monika Torbus",
      "Ethan Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lynda Levan",
      "Jeff Barna"
     ],
     "a": [
      "Mariola Biekisz",
      "Christian Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelly Bowers",
      "Lynda Levan"
     ],
     "a": [
      "Christine Ziegler",
      "Mariola Biekisz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elizabeth Biehl",
      "Diane Bracco"
     ],
     "a": [
      "Lisa Viola",
      "Monika Torbus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Berlinger",
      "Joaquin Cruz"
     ],
     "a": [
      "Mike Fuchs",
      "Paul Matzko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mahesh Jonnalagdda",
      "Jeff Barna"
     ],
     "a": [
      "Ethan Garcia",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elizabeth Biehl",
      "Joaquin Cruz"
     ],
     "a": [
      "Monika Torbus",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ],
     "a": [
      "Laura Govan",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lynda Levan",
      "Jeff Barna"
     ],
     "a": [
      "Christine Ziegler",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Mariola Biekisz",
      "Ethan Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Brashier",
      "Kelly Bowers"
     ],
     "a": [
      "Laura Govan",
      "Lisa Viola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lynda Levan",
      "Diane Bracco"
     ],
     "a": [
      "Christine Ziegler",
      "Mariola Biekisz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eric Berlinger",
      "Joaquin Cruz"
     ],
     "a": [
      "Mike Fuchs",
      "Paul Matzko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rick Wickenheisser",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Toby Athron",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Mary Brashier",
      "Eric Berlinger"
     ],
     "a": [
      "Laura Govan",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kelly Bowers",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Christine Ziegler",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Elizabeth Biehl",
      "Rick Wickenheisser"
     ],
     "a": [
      "Lisa Viola",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Diane Bracco",
      "Jeff Barna"
     ],
     "a": [
      "Monika Torbus",
      "Ethan Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mary Brashier",
      "Kelly Bowers"
     ],
     "a": [
      "Laura Govan",
      "Lisa Viola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elizabeth Biehl",
      "Lynda Levan"
     ],
     "a": [
      "Monika Torbus",
      "Mariola Biekisz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Eric Berlinger",
      "Rick Wickenheisser"
     ],
     "a": [
      "Mike Fuchs",
      "Toby Athron"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joaquin Cruz",
      "Jeff Barna"
     ],
     "a": [
      "Ethan Garcia",
      "Christian Osborne"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "The Mighty Dinks",
   "away": "Pickleball Addicts",
   "time": "2026-06-23T19:30:00",
   "complete": true,
   "homePoints": 570,
   "awayPoints": 619,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tammie Destefano",
      "Craig Butler"
     ],
     "a": [
      "Karen Waldon",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Johanna Kreilick",
      "Steve Tosi"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Naveen Elangovan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Janice Aliberti",
      "Ken Carlson"
     ],
     "a": [
      "Marguerite Greener",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jessica Wormeck",
      "Steven Levin"
     ],
     "a": [
      "Sharon Oddy",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tammie Destefano",
      "Johanna Kreilick"
     ],
     "a": [
      "Karen Waldon",
      "Patricia Kavanaugh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Janice Aliberti",
      "Meghan Klein"
     ],
     "a": [
      "Sharon Oddy",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steve Tosi",
      "Ken Carlson"
     ],
     "a": [
      "Mike Leach",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Craig Butler",
      "Dan Stanton"
     ],
     "a": [
      "Naveen Elangovan",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tammie Destefano",
      "Steve Tosi"
     ],
     "a": [
      "Karen Waldon",
      "Naveen Elangovan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Kreilick",
      "Craig Butler"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Meghan Klein",
      "Dan Stanton"
     ],
     "a": [
      "Marguerite Greener",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jessica Wormeck",
      "Steven Levin"
     ],
     "a": [
      "Nancy Cook",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Johanna Kreilick",
      "Janice Aliberti"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Marguerite Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessica Wormeck",
      "Meghan Klein"
     ],
     "a": [
      "Sharon Oddy",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Steve Tosi",
      "Dan Stanton"
     ],
     "a": [
      "Mike Leach",
      "Naveen Elangovan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ken Carlson",
      "Steven Levin"
     ],
     "a": [
      "Lakshmikanth Chaluvadi",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Janice Aliberti",
      "Craig Butler"
     ],
     "a": [
      "Karen Waldon",
      "Naveen Elangovan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tammie Destefano",
      "Dan Stanton"
     ],
     "a": [
      "Marguerite Greener",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jessica Wormeck",
      "Ken Carlson"
     ],
     "a": [
      "Nancy Cook",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Meghan Klein",
      "Steven Levin"
     ],
     "a": [
      "Sharon Oddy",
      "Gabe Lantos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Johanna Kreilick",
      "Jessica Wormeck"
     ],
     "a": [
      "Karen Waldon",
      "Marguerite Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tammie Destefano",
      "Janice Aliberti"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Sharon Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Craig Butler",
      "Steve Tosi"
     ],
     "a": [
      "Mike Leach",
      "Naveen Elangovan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ken Carlson",
      "Steven Levin"
     ],
     "a": [
      "Lakshmikanth Chaluvadi",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Kreilick",
      "Steve Tosi"
     ],
     "a": [
      "Karen Waldon",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tammie Destefano",
      "Craig Butler"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Naveen Elangovan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Janice Aliberti",
      "Dan Stanton"
     ],
     "a": [
      "Sharon Oddy",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meghan Klein",
      "Ken Carlson"
     ],
     "a": [
      "Nancy Cook",
      "Gabe Lantos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tammie Destefano",
      "Johanna Kreilick"
     ],
     "a": [
      "Karen Waldon",
      "Patricia Kavanaugh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Wormeck",
      "Meghan Klein"
     ],
     "a": [
      "Marguerite Greener",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Craig Butler",
      "Dan Stanton"
     ],
     "a": [
      "Mike Leach",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Steve Tosi",
      "Steven Levin"
     ],
     "a": [
      "Naveen Elangovan",
      "Gabe Lantos"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Power Picklers",
   "away": "The Mighty Dinks",
   "time": "2026-06-29T19:30:00",
   "complete": true,
   "homePoints": 573,
   "awayPoints": 610,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tammy Dragon",
      "Trevor Foraker"
     ],
     "a": [
      "Johanna Kreilick",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jamie Levin",
      "Tom Matko"
     ],
     "a": [
      "Janice Aliberti",
      "Addison Stewart"
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
      "Tammie Destefano",
      "Steve Tosi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jeannine Calhoun",
      "Gary Dorin"
     ],
     "a": [
      "Meghan Klein",
      "Greg August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Jamie Levin"
     ],
     "a": [
      "Johanna Kreilick",
      "Tammie Destefano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeannine Calhoun",
      "Sarah Stangota"
     ],
     "a": [
      "Janice Aliberti",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Trevor Foraker",
      "Tom Matko"
     ],
     "a": [
      "Craig Butler",
      "Addison Stewart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Brezina",
      "Tyler Brandt"
     ],
     "a": [
      "Greg August",
      "Steven Levin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Trevor Foraker"
     ],
     "a": [
      "Tammie Destefano",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Tom Matko"
     ],
     "a": [
      "Johanna Kreilick",
      "Addison Stewart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Sarah Stangota",
      "Gary Dorin"
     ],
     "a": [
      "Janice Aliberti",
      "Steven Levin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jeannine Calhoun",
      "Tyler Brandt"
     ],
     "a": [
      "Meghan Klein",
      "Steve Tosi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Tammy Dragon",
      "Jeannine Calhoun"
     ],
     "a": [
      "Tammie Destefano",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Sarah Stangota"
     ],
     "a": [
      "Johanna Kreilick",
      "Janice Aliberti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tom Matko",
      "Eric Brezina"
     ],
     "a": [
      "Addison Stewart",
      "Steve Tosi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gary Dorin",
      "Tyler Brandt"
     ],
     "a": [
      "Greg August",
      "Steven Levin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jeannine Calhoun",
      "Trevor Foraker"
     ],
     "a": [
      "Tammie Destefano",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Eric Brezina"
     ],
     "a": [
      "Johanna Kreilick",
      "Steve Tosi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jamie Levin",
      "Tyler Brandt"
     ],
     "a": [
      "Janice Aliberti",
      "Greg August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Stangota",
      "Gary Dorin"
     ],
     "a": [
      "Meghan Klein",
      "Steven Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Jamie Levin"
     ],
     "a": [
      "Johanna Kreilick",
      "Tammie Destefano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jeannine Calhoun",
      "Sarah Stangota"
     ],
     "a": [
      "Janice Aliberti",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Trevor Foraker",
      "Eric Brezina"
     ],
     "a": [
      "Addison Stewart",
      "Greg August"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tom Matko",
      "Gary Dorin"
     ],
     "a": [
      "Craig Butler",
      "Steve Tosi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Trevor Foraker"
     ],
     "a": [
      "Johanna Kreilick",
      "Addison Stewart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tammy Dragon",
      "Tom Matko"
     ],
     "a": [
      "Janice Aliberti",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jeannine Calhoun",
      "Tyler Brandt"
     ],
     "a": [
      "Tammie Destefano",
      "Steven Levin"
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
      "Meghan Klein",
      "Greg August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Jeannine Calhoun"
     ],
     "a": [
      "Johanna Kreilick",
      "Janice Aliberti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jamie Levin",
      "Sarah Stangota"
     ],
     "a": [
      "Tammie Destefano",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Trevor Foraker",
      "Tom Matko"
     ],
     "a": [
      "Craig Butler",
      "Addison Stewart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gary Dorin",
      "Tyler Brandt"
     ],
     "a": [
      "Steve Tosi",
      "Steven Levin"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickleball Addicts",
   "away": "Summer of Slam",
   "time": "2026-06-30T19:30:00",
   "complete": true,
   "homePoints": 617,
   "awayPoints": 574,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Waldon",
      "John Lottier"
     ],
     "a": [
      "Gail Welkes",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Kavanaugh",
      "David Tabacco"
     ],
     "a": [
      "Kelly Bowers",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sharon Oddy",
      "Naveen Elangovan"
     ],
     "a": [
      "Diane Bracco",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Veninger",
      "Mike Leach"
     ],
     "a": [
      "Lynda Levan",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Karen Waldon",
      "Karen Veninger"
     ],
     "a": [
      "Gail Welkes",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Kavanaugh",
      "Sharon Oddy"
     ],
     "a": [
      "Elizabeth Biehl",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "John Lottier",
      "Mike Leach"
     ],
     "a": [
      "Eric Berlinger",
      "Jeff Barna"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Tabacco",
      "Naveen Elangovan"
     ],
     "a": [
      "Ed Villaverde",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karen Waldon",
      "David Tabacco"
     ],
     "a": [
      "Gail Welkes",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Veninger",
      "John Lottier"
     ],
     "a": [
      "Kelly Bowers",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Kavanaugh",
      "Naveen Elangovan"
     ],
     "a": [
      "Lynda Levan",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Mike Leach"
     ],
     "a": [
      "Elizabeth Biehl",
      "Ed Villaverde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Waldon",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Gail Welkes",
      "Elizabeth Biehl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Veninger",
      "Sharon Oddy"
     ],
     "a": [
      "Lynda Levan",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "John Lottier",
      "David Tabacco"
     ],
     "a": [
      "Eric Berlinger",
      "Ed Villaverde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mike Leach",
      "Naveen Elangovan"
     ],
     "a": [
      "Joaquin Cruz",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Karen Waldon",
      "John Lottier"
     ],
     "a": [
      "Kelly Bowers",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Kavanaugh",
      "David Tabacco"
     ],
     "a": [
      "Elizabeth Biehl",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Mike Leach"
     ],
     "a": [
      "Lynda Levan",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Karen Veninger",
      "Naveen Elangovan"
     ],
     "a": [
      "Diane Bracco",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Karen Waldon",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Gail Welkes",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Veninger",
      "Sharon Oddy"
     ],
     "a": [
      "Lynda Levan",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "John Lottier",
      "David Tabacco"
     ],
     "a": [
      "Eric Berlinger",
      "Jeff Barna"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mike Leach",
      "Naveen Elangovan"
     ],
     "a": [
      "Joaquin Cruz",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Waldon",
      "Mike Leach"
     ],
     "a": [
      "Elizabeth Biehl",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Kavanaugh",
      "John Lottier"
     ],
     "a": [
      "Gail Welkes",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "David Tabacco"
     ],
     "a": [
      "Kelly Bowers",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Karen Veninger",
      "Naveen Elangovan"
     ],
     "a": [
      "Diane Bracco",
      "Ed Villaverde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Waldon",
      "Karen Veninger"
     ],
     "a": [
      "Kelly Bowers",
      "Lynda Levan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Patricia Kavanaugh",
      "Sharon Oddy"
     ],
     "a": [
      "Gail Welkes",
      "Elizabeth Biehl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "John Lottier",
      "Mike Leach"
     ],
     "a": [
      "Jeff Barna",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "David Tabacco",
      "Naveen Elangovan"
     ],
     "a": [
      "Eric Berlinger",
      "Ed Villaverde"
     ]
    }
   ],
   "subs": [
    "Josh Rito"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Dinking Around",
   "away": "Pickleball Addicts",
   "time": "2026-07-06T19:30:00",
   "complete": true,
   "homePoints": 583,
   "awayPoints": 632,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Monika Torbus",
      "Paul Matzko"
     ],
     "a": [
      "Noelle Villa",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Govan",
      "Ethan Garcia"
     ],
     "a": [
      "Marguerite Greener",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lisa Viola",
      "Doug Brown"
     ],
     "a": [
      "Karen Veninger",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Kelly Bowers",
      "Christian Osborne"
     ],
     "a": [
      "Sharon Oddy",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Lisa Viola"
     ],
     "a": [
      "Noelle Villa",
      "Marguerite Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Govan",
      "Kelly Bowers"
     ],
     "a": [
      "Sherri Falsetti",
      "Karen Veninger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Paul Matzko",
      "Ethan Garcia"
     ],
     "a": [
      "David Tabacco",
      "John Lottier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christian Osborne",
      "Doug Brown"
     ],
     "a": [
      "Mike Leach",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Christian Osborne"
     ],
     "a": [
      "Marguerite Greener",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Govan",
      "Paul Matzko"
     ],
     "a": [
      "Noelle Villa",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Viola",
      "Ethan Garcia"
     ],
     "a": [
      "Sherri Falsetti",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kelly Bowers",
      "Doug Brown"
     ],
     "a": [
      "Sharon Oddy",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Monika Torbus",
      "Laura Govan"
     ],
     "a": [
      "Noelle Villa",
      "Sherri Falsetti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lisa Viola",
      "Kelly Bowers"
     ],
     "a": [
      "Sharon Oddy",
      "Karen Veninger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Paul Matzko",
      "Christian Osborne"
     ],
     "a": [
      "John Lottier",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ethan Garcia",
      "Doug Brown"
     ],
     "a": [
      "David Tabacco",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Govan",
      "Paul Matzko"
     ],
     "a": [
      "Marguerite Greener",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Christian Osborne"
     ],
     "a": [
      "Sherri Falsetti",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lisa Viola",
      "Ethan Garcia"
     ],
     "a": [
      "Sharon Oddy",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kelly Bowers",
      "Doug Brown"
     ],
     "a": [
      "Karen Veninger",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Laura Govan"
     ],
     "a": [
      "Noelle Villa",
      "Marguerite Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lisa Viola",
      "Kelly Bowers"
     ],
     "a": [
      "Sharon Oddy",
      "Karen Veninger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paul Matzko",
      "Ethan Garcia"
     ],
     "a": [
      "David Tabacco",
      "John Lottier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christian Osborne",
      "Doug Brown"
     ],
     "a": [
      "Mike Leach",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Paul Matzko"
     ],
     "a": [
      "Noelle Villa",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Govan",
      "Christian Osborne"
     ],
     "a": [
      "Marguerite Greener",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kelly Bowers",
      "Ethan Garcia"
     ],
     "a": [
      "Sherri Falsetti",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lisa Viola",
      "Doug Brown"
     ],
     "a": [
      "Karen Veninger",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Lisa Viola"
     ],
     "a": [
      "Marguerite Greener",
      "Sharon Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Laura Govan",
      "Kelly Bowers"
     ],
     "a": [
      "Noelle Villa",
      "Sherri Falsetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Paul Matzko",
      "Christian Osborne"
     ],
     "a": [
      "John Lottier",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Ethan Garcia",
      "Doug Brown"
     ],
     "a": [
      "David Tabacco",
      "Mike Leach"
     ]
    }
   ],
   "subs": [
    "Sherri Falsetti",
    "Kelly Bowers"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Summer of Slam",
   "away": "Power Picklers",
   "time": "2026-07-07T19:30:00",
   "complete": true,
   "homePoints": 668,
   "awayPoints": 518,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mary Brashier",
      "Eric Berlinger"
     ],
     "a": [
      "Jamie Levin",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Gail Welkes",
      "Rick Wickenheisser"
     ],
     "a": [
      "Tammy Dragon",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Elizabeth Biehl",
      "Jeff Barna"
     ],
     "a": [
      "Jeannine Calhoun",
      "Roy Dragon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lynda Levan",
      "Joaquin Cruz"
     ],
     "a": [
      "Peggy Matzen",
      "Gary Dorin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Kelly Bowers"
     ],
     "a": [
      "Tammy Dragon",
      "Jeannine Calhoun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gail Welkes",
      "Lynda Levan"
     ],
     "a": [
      "Jamie Levin",
      "Gail Hannagan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Berlinger",
      "Rick Wickenheisser"
     ],
     "a": [
      "Tom Matko",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joaquin Cruz",
      "Jeff Barna"
     ],
     "a": [
      "Roy Dragon",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gail Welkes",
      "Eric Berlinger"
     ],
     "a": [
      "Tammy Dragon",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ],
     "a": [
      "Jamie Levin",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Bowers",
      "Jeff Barna"
     ],
     "a": [
      "Gail Hannagan",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Elizabeth Biehl",
      "Joaquin Cruz"
     ],
     "a": [
      "Peggy Matzen",
      "Gary Dorin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gail Welkes",
      "Elizabeth Biehl"
     ],
     "a": [
      "Jeannine Calhoun",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Bowers",
      "Lynda Levan"
     ],
     "a": [
      "Jamie Levin",
      "Gail Hannagan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Berlinger",
      "Jeff Barna"
     ],
     "a": [
      "Tom Matko",
      "Roy Dragon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joaquin Cruz",
      "Rick Wickenheisser"
     ],
     "a": [
      "Tyler Brandt",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelly Bowers",
      "Jeff Barna"
     ],
     "a": [
      "Gail Hannagan",
      "Roy Dragon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ],
     "a": [
      "Tammy Dragon",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elizabeth Biehl",
      "Eric Berlinger"
     ],
     "a": [
      "Jeannine Calhoun",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lynda Levan",
      "Joaquin Cruz"
     ],
     "a": [
      "Peggy Matzen",
      "Tyler Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Mary Brashier",
      "Gail Welkes"
     ],
     "a": [
      "Tammy Dragon",
      "Jamie Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Elizabeth Biehl",
      "Lynda Levan"
     ],
     "a": [
      "Jeannine Calhoun",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 2,
     "h": [
      "Eric Berlinger",
      "Jeff Barna"
     ],
     "a": [
      "Tom Matko",
      "Roy Dragon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Rick Wickenheisser",
      "Joaquin Cruz"
     ],
     "a": [
      "Eric Brezina",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Brashier",
      "Eric Berlinger"
     ],
     "a": [
      "Tammy Dragon",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gail Welkes",
      "Joaquin Cruz"
     ],
     "a": [
      "Jeannine Calhoun",
      "Roy Dragon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelly Bowers",
      "Rick Wickenheisser"
     ],
     "a": [
      "Jamie Levin",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lynda Levan",
      "Jeff Barna"
     ],
     "a": [
      "Gail Hannagan",
      "Tyler Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mary Brashier",
      "Gail Welkes"
     ],
     "a": [
      "Tammy Dragon",
      "Jamie Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kelly Bowers",
      "Elizabeth Biehl"
     ],
     "a": [
      "Gail Hannagan",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Berlinger",
      "Rick Wickenheisser"
     ],
     "a": [
      "Tom Matko",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jeff Barna",
      "Joaquin Cruz"
     ],
     "a": [
      "Tyler Brandt",
      "Gary Dorin"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Addicts",
   "away": "Power Picklers",
   "time": "2026-07-13T19:30:00",
   "complete": true,
   "homePoints": 628,
   "awayPoints": 520,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Patricia Kavanaugh",
      "John Lottier"
     ],
     "a": [
      "Tammy Dragon",
      "Andy Ro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Noelle Villa",
      "Naveen Elangovan"
     ],
     "a": [
      "Jeannine Calhoun",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marguerite Greener",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Sarah Stangota",
      "Roy Dragon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Veninger",
      "Mike Leach"
     ],
     "a": [
      "Gail Hannagan",
      "Tyler Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patricia Kavanaugh",
      "Noelle Villa"
     ],
     "a": [
      "Tammy Dragon",
      "Jeannine Calhoun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Veninger",
      "Nancy Cook"
     ],
     "a": [
      "Sarah Stangota",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "John Lottier",
      "Mike Leach"
     ],
     "a": [
      "Eric Brezina",
      "Roy Dragon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Naveen Elangovan",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Andy Ro",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patricia Kavanaugh",
      "Naveen Elangovan"
     ],
     "a": [
      "Tammy Dragon",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Noelle Villa",
      "John Lottier"
     ],
     "a": [
      "Jeannine Calhoun",
      "Andy Ro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Marguerite Greener",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Peggy Matzen",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nancy Cook",
      "Mike Leach"
     ],
     "a": [
      "Gail Hannagan",
      "Tyler Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Noelle Villa",
      "Marguerite Greener"
     ],
     "a": [
      "Jeannine Calhoun",
      "Sarah Stangota"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Karen Veninger",
      "Nancy Cook"
     ],
     "a": [
      "Gail Hannagan",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "John Lottier",
      "Naveen Elangovan"
     ],
     "a": [
      "Eric Brezina",
      "Gary Dorin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mike Leach",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Roy Dragon",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patricia Kavanaugh",
      "Naveen Elangovan"
     ],
     "a": [
      "Sarah Stangota",
      "Andy Ro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marguerite Greener",
      "John Lottier"
     ],
     "a": [
      "Tammy Dragon",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nancy Cook",
      "Mike Leach"
     ],
     "a": [
      "Gail Hannagan",
      "Roy Dragon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Karen Veninger",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Peggy Matzen",
      "Tyler Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Kavanaugh",
      "Marguerite Greener"
     ],
     "a": [
      "Jeannine Calhoun",
      "Gail Hannagan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Noelle Villa",
      "Karen Veninger"
     ],
     "a": [
      "Tammy Dragon",
      "Sarah Stangota"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "John Lottier",
      "Naveen Elangovan"
     ],
     "a": [
      "Andy Ro",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mike Leach",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Roy Dragon",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Patricia Kavanaugh",
      "John Lottier"
     ],
     "a": [
      "Jeannine Calhoun",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Noelle Villa",
      "Naveen Elangovan"
     ],
     "a": [
      "Tammy Dragon",
      "Andy Ro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karen Veninger",
      "Mike Leach"
     ],
     "a": [
      "Sarah Stangota",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Nancy Cook",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Peggy Matzen",
      "Roy Dragon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Kavanaugh",
      "Noelle Villa"
     ],
     "a": [
      "Tammy Dragon",
      "Jeannine Calhoun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "Nancy Cook"
     ],
     "a": [
      "Gail Hannagan",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "John Lottier",
      "Mike Leach"
     ],
     "a": [
      "Andy Ro",
      "Gary Dorin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Naveen Elangovan",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Eric Brezina",
      "Tyler Brandt"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Dinking Around",
   "away": "The Mighty Dinks",
   "time": "2026-07-14T19:30:00",
   "complete": true,
   "homePoints": 540,
   "awayPoints": 624,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Monika Torbus",
      "Christian Osborne"
     ],
     "a": [
      "Tammie Destefano",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lisa Viola",
      "Doug Brown"
     ],
     "a": [
      "Johanna Kreilick",
      "Addison Stewart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margo Langer",
      "Toby Athron"
     ],
     "a": [
      "Janice Aliberti",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Ziegler",
      "Mike Fuchs"
     ],
     "a": [
      "Meghan Klein",
      "Ken Carlson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Mariola Biekisz"
     ],
     "a": [
      "Johanna Kreilick",
      "Janice Aliberti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lisa Viola",
      "Christine Ziegler"
     ],
     "a": [
      "Tammie Destefano",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christian Osborne",
      "Doug Brown"
     ],
     "a": [
      "Addison Stewart",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mike Fuchs",
      "Ethan Garcia"
     ],
     "a": [
      "Dan Stanton",
      "Steve Tosi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lisa Viola",
      "Christian Osborne"
     ],
     "a": [
      "Johanna Kreilick",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Monika Torbus",
      "Doug Brown"
     ],
     "a": [
      "Tammie Destefano",
      "Addison Stewart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mariola Biekisz",
      "Toby Athron"
     ],
     "a": [
      "Jessica Wormeck",
      "Steve Tosi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Margo Langer",
      "Ethan Garcia"
     ],
     "a": [
      "Meghan Klein",
      "Ken Carlson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lisa Viola",
      "Margo Langer"
     ],
     "a": [
      "Janice Aliberti",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Christine Ziegler"
     ],
     "a": [
      "Tammie Destefano",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Christian Osborne",
      "Toby Athron"
     ],
     "a": [
      "Addison Stewart",
      "Dan Stanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mike Fuchs",
      "Ethan Garcia"
     ],
     "a": [
      "Steve Tosi",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mariola Biekisz",
      "Toby Athron"
     ],
     "a": [
      "Jessica Wormeck",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Doug Brown"
     ],
     "a": [
      "Johanna Kreilick",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margo Langer",
      "Ethan Garcia"
     ],
     "a": [
      "Janice Aliberti",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lisa Viola",
      "Mike Fuchs"
     ],
     "a": [
      "Meghan Klein",
      "Steve Tosi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Monika Torbus",
      "Lisa Viola"
     ],
     "a": [
      "Johanna Kreilick",
      "Tammie Destefano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Margo Langer",
      "Mariola Biekisz"
     ],
     "a": [
      "Janice Aliberti",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christian Osborne",
      "Toby Athron"
     ],
     "a": [
      "Addison Stewart",
      "Dan Stanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Doug Brown",
      "Mike Fuchs"
     ],
     "a": [
      "Craig Butler",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Christian Osborne"
     ],
     "a": [
      "Johanna Kreilick",
      "Addison Stewart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lisa Viola",
      "Mike Fuchs"
     ],
     "a": [
      "Janice Aliberti",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Doug Brown"
     ],
     "a": [
      "Tammie Destefano",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margo Langer",
      "Ethan Garcia"
     ],
     "a": [
      "Jessica Wormeck",
      "Steve Tosi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Lisa Viola"
     ],
     "a": [
      "Johanna Kreilick",
      "Tammie Destefano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mariola Biekisz",
      "Margo Langer"
     ],
     "a": [
      "Jessica Wormeck",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christian Osborne",
      "Doug Brown"
     ],
     "a": [
      "Addison Stewart",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Toby Athron",
      "Ethan Garcia"
     ],
     "a": [
      "Steve Tosi",
      "Ken Carlson"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "Power Picklers",
   "away": "Dinking Around",
   "time": "2026-07-20T19:30:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 640,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tammy Dragon",
      "Trevor Foraker"
     ],
     "a": [
      "Monika Torbus",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
     ],
     "a": [
      "Laura Govan",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Tom Matko"
     ],
     "a": [
      "Mariola Biekisz",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Gary Dorin"
     ],
     "a": [
      "Lisa Viola",
      "Richard Livornese"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Gail Hannagan"
     ],
     "a": [
      "Laura Govan",
      "Mariola Biekisz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Peggy Matzen"
     ],
     "a": [
      "Monika Torbus",
      "Margo Langer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Trevor Foraker",
      "Eric Brezina"
     ],
     "a": [
      "Paul Matzko",
      "Christian Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Gary Dorin",
      "Roy Dragon"
     ],
     "a": [
      "Mike Fuchs",
      "Dave Govan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Trevor Foraker"
     ],
     "a": [
      "Laura Govan",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Eric Brezina"
     ],
     "a": [
      "Monika Torbus",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Tom Matko"
     ],
     "a": [
      "Margo Langer",
      "Dave Govan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jamie Levin",
      "Roy Dragon"
     ],
     "a": [
      "Lisa Viola",
      "Richard Livornese"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Jamie Levin"
     ],
     "a": [
      "Mariola Biekisz",
      "Lisa Viola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Gail Hannagan",
      "Peggy Matzen"
     ],
     "a": [
      "Monika Torbus",
      "Margo Langer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Trevor Foraker",
      "Tom Matko"
     ],
     "a": [
      "Paul Matzko",
      "Mike Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Gary Dorin",
      "Roy Dragon"
     ],
     "a": [
      "Dave Govan",
      "Richard Livornese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Gail Hannagan",
      "Tom Matko"
     ],
     "a": [
      "Margo Langer",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tammy Dragon",
      "Eric Brezina"
     ],
     "a": [
      "Laura Govan",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Roy Dragon"
     ],
     "a": [
      "Mariola Biekisz",
      "Richard Livornese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Gary Dorin"
     ],
     "a": [
      "Lisa Viola",
      "Dave Govan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Sarah Stangota"
     ],
     "a": [
      "Laura Govan",
      "Monika Torbus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Peggy Matzen"
     ],
     "a": [
      "Mariola Biekisz",
      "Lisa Viola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Trevor Foraker",
      "Tom Matko"
     ],
     "a": [
      "Paul Matzko",
      "Mike Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Eric Brezina",
      "Gary Dorin"
     ],
     "a": [
      "Christian Osborne",
      "Richard Livornese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Trevor Foraker"
     ],
     "a": [
      "Laura Govan",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sarah Stangota",
      "Gary Dorin"
     ],
     "a": [
      "Mariola Biekisz",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Eric Brezina"
     ],
     "a": [
      "Monika Torbus",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Roy Dragon"
     ],
     "a": [
      "Margo Langer",
      "Dave Govan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Sarah Stangota"
     ],
     "a": [
      "Laura Govan",
      "Monika Torbus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Jamie Levin"
     ],
     "a": [
      "Margo Langer",
      "Lisa Viola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Trevor Foraker",
      "Eric Brezina"
     ],
     "a": [
      "Paul Matzko",
      "Christian Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tom Matko",
      "Roy Dragon"
     ],
     "a": [
      "Dave Govan",
      "Richard Livornese"
     ]
    }
   ],
   "subs": [
    "Dave Govan",
    "Richard Livornese"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "The Mighty Dinks",
   "away": "Summer of Slam",
   "time": "2026-07-21T19:30:00",
   "complete": true,
   "homePoints": 632,
   "awayPoints": 546,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Kreilick",
      "Craig Butler"
     ],
     "a": [
      "Susan St. Pierre",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tammie Destefano",
      "Addison Stewart"
     ],
     "a": [
      "Kathleen Deangelis",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Janice Aliberti",
      "Greg August"
     ],
     "a": [
      "Beth Knoble",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jessica Wormeck",
      "Steven Levin"
     ],
     "a": [
      "Lynda Levan",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Johanna Kreilick",
      "Tammie Destefano"
     ],
     "a": [
      "Susan St. Pierre",
      "Kathleen Deangelis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jessica Wormeck",
      "Meghan Klein"
     ],
     "a": [
      "Beth Knoble",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Craig Butler",
      "Steven Levin"
     ],
     "a": [
      "Jeff Barna",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Addison Stewart",
      "Greg August"
     ],
     "a": [
      "Eric Berlinger",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Johanna Kreilick",
      "Addison Stewart"
     ],
     "a": [
      "Susan St. Pierre",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tammie Destefano",
      "Craig Butler"
     ],
     "a": [
      "Kathleen Deangelis",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janice Aliberti",
      "Greg August"
     ],
     "a": [
      "Diane Bracco",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Meghan Klein",
      "Steven Levin"
     ],
     "a": [
      "Lynda Levan",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tammie Destefano",
      "Janice Aliberti"
     ],
     "a": [
      "Kathleen Deangelis",
      "Beth Knoble"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jessica Wormeck",
      "Meghan Klein"
     ],
     "a": [
      "Lynda Levan",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Craig Butler",
      "Addison Stewart"
     ],
     "a": [
      "Jeff Barna",
      "Ed Villaverde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steven Levin",
      "Greg August"
     ],
     "a": [
      "Joaquin Cruz",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Kreilick",
      "Addison Stewart"
     ],
     "a": [
      "Beth Knoble",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Janice Aliberti",
      "Craig Butler"
     ],
     "a": [
      "Susan St. Pierre",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Meghan Klein",
      "Steven Levin"
     ],
     "a": [
      "Lynda Levan",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Wormeck",
      "Greg August"
     ],
     "a": [
      "Diane Bracco",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Johanna Kreilick",
      "Janice Aliberti"
     ],
     "a": [
      "Kathleen Deangelis",
      "Lynda Levan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tammie Destefano",
      "Jessica Wormeck"
     ],
     "a": [
      "Susan St. Pierre",
      "Beth Knoble"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Craig Butler",
      "Addison Stewart"
     ],
     "a": [
      "Eric Berlinger",
      "Jeff Barna"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Steven Levin",
      "Greg August"
     ],
     "a": [
      "Joaquin Cruz",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Johanna Kreilick",
      "Craig Butler"
     ],
     "a": [
      "Kathleen Deangelis",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tammie Destefano",
      "Addison Stewart"
     ],
     "a": [
      "Susan St. Pierre",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jessica Wormeck",
      "Steven Levin"
     ],
     "a": [
      "Beth Knoble",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Meghan Klein",
      "Greg August"
     ],
     "a": [
      "Diane Bracco",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Johanna Kreilick",
      "Tammie Destefano"
     ],
     "a": [
      "Susan St. Pierre",
      "Kathleen Deangelis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janice Aliberti",
      "Meghan Klein"
     ],
     "a": [
      "Lynda Levan",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Craig Butler",
      "Steven Levin"
     ],
     "a": [
      "Eric Berlinger",
      "Ed Villaverde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Addison Stewart",
      "Greg August"
     ],
     "a": [
      "Jeff Barna",
      "Mahesh Jonnalagdda"
     ]
    }
   ],
   "subs": [
    "Susan St. Pierre",
    "Kathleen Deangelis",
    "Beth Knoble"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Summer of Slam",
   "away": "Pickleball Addicts",
   "time": "2026-07-27T19:30:00",
   "complete": true,
   "homePoints": 596,
   "awayPoints": 636,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ],
     "a": [
      "Noelle Villa",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gail Welkes",
      "Eric Berlinger"
     ],
     "a": [
      "Patricia Kavanaugh",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kelly Bowers",
      "Joaquin Cruz"
     ],
     "a": [
      "Marguerite Greener",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Jeff Barna"
     ],
     "a": [
      "Nancy Cook",
      "Gabe Lantos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Lynda Levan"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Marguerite Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gail Welkes",
      "Diane Bracco"
     ],
     "a": [
      "Noelle Villa",
      "Karen Veninger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rick Wickenheisser",
      "Eric Berlinger"
     ],
     "a": [
      "John Lottier",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jeff Barna",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Lakshmikanth Chaluvadi",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gail Welkes",
      "Rick Wickenheisser"
     ],
     "a": [
      "Patricia Kavanaugh",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Mary Brashier",
      "Eric Berlinger"
     ],
     "a": [
      "Noelle Villa",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lynda Levan",
      "Joaquin Cruz"
     ],
     "a": [
      "Karen Veninger",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Bowers",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Nancy Cook",
      "Gabe Lantos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gail Welkes",
      "Kelly Bowers"
     ],
     "a": [
      "Marguerite Greener",
      "Nancy Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lynda Levan",
      "Diane Bracco"
     ],
     "a": [
      "Noelle Villa",
      "Karen Veninger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rick Wickenheisser",
      "Joaquin Cruz"
     ],
     "a": [
      "John Lottier",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jeff Barna",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Mike Leach",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lynda Levan",
      "Joaquin Cruz"
     ],
     "a": [
      "Karen Veninger",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mary Brashier",
      "Eric Berlinger"
     ],
     "a": [
      "Patricia Kavanaugh",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelly Bowers",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Marguerite Greener",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Diane Bracco",
      "Jeff Barna"
     ],
     "a": [
      "Nancy Cook",
      "Mike Leach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Gail Welkes"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Noelle Villa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Bowers",
      "Diane Bracco"
     ],
     "a": [
      "Marguerite Greener",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rick Wickenheisser",
      "Joaquin Cruz"
     ],
     "a": [
      "John Lottier",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eric Berlinger",
      "Jeff Barna"
     ],
     "a": [
      "David Tabacco",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ],
     "a": [
      "Patricia Kavanaugh",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gail Welkes",
      "Jeff Barna"
     ],
     "a": [
      "Marguerite Greener",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lynda Levan",
      "Eric Berlinger"
     ],
     "a": [
      "Noelle Villa",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Karen Veninger",
      "Mike Leach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mary Brashier",
      "Gail Welkes"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Noelle Villa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lynda Levan",
      "Kelly Bowers"
     ],
     "a": [
      "Karen Veninger",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rick Wickenheisser",
      "Eric Berlinger"
     ],
     "a": [
      "John Lottier",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joaquin Cruz",
      "Mahesh Jonnalagdda"
     ],
     "a": [
      "Mike Leach",
      "Gabe Lantos"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "The Mighty Dinks",
   "away": "Dinking Around",
   "time": "2026-07-27T19:30:00",
   "complete": true,
   "homePoints": 669,
   "awayPoints": 594,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Johanna Kreilick",
      "Craig Butler"
     ],
     "a": [
      "Mariola Biekisz",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Janice Aliberti",
      "Addison Stewart"
     ],
     "a": [
      "Laura Govan",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Meghan Klein",
      "Steven Levin"
     ],
     "a": [
      "Lisa Viola",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Wormeck",
      "Steve Tosi"
     ],
     "a": [
      "Margo Langer",
      "Ethan Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Johanna Kreilick",
      "Jessica Wormeck"
     ],
     "a": [
      "Mariola Biekisz",
      "Laura Govan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Janice Aliberti",
      "Meghan Klein"
     ],
     "a": [
      "Monika Torbus",
      "Lisa Viola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Craig Butler",
      "Steve Tosi"
     ],
     "a": [
      "Paul Matzko",
      "Christian Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Addison Stewart",
      "Steven Levin"
     ],
     "a": [
      "Toby Athron",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Kreilick",
      "Addison Stewart"
     ],
     "a": [
      "Mariola Biekisz",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jessica Wormeck",
      "Craig Butler"
     ],
     "a": [
      "Laura Govan",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 31,
     "as": 33,
     "h": [
      "Janice Aliberti",
      "Steven Levin"
     ],
     "a": [
      "Margo Langer",
      "Ethan Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Meghan Klein",
      "Steve Tosi"
     ],
     "a": [
      "Monika Torbus",
      "Toby Athron"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Kreilick",
      "Janice Aliberti"
     ],
     "a": [
      "Mariola Biekisz",
      "Monika Torbus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Wormeck",
      "Meghan Klein"
     ],
     "a": [
      "Margo Langer",
      "Lisa Viola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Craig Butler",
      "Addison Stewart"
     ],
     "a": [
      "Paul Matzko",
      "Toby Athron"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Steve Tosi",
      "Steven Levin"
     ],
     "a": [
      "Ethan Garcia",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Kreilick",
      "Craig Butler"
     ],
     "a": [
      "Laura Govan",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janice Aliberti",
      "Addison Stewart"
     ],
     "a": [
      "Monika Torbus",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meghan Klein",
      "Steve Tosi"
     ],
     "a": [
      "Margo Langer",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jessica Wormeck",
      "Steven Levin"
     ],
     "a": [
      "Lisa Viola",
      "Ethan Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Johanna Kreilick",
      "Janice Aliberti"
     ],
     "a": [
      "Mariola Biekisz",
      "Laura Govan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jessica Wormeck",
      "Meghan Klein"
     ],
     "a": [
      "Margo Langer",
      "Lisa Viola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Craig Butler",
      "Addison Stewart"
     ],
     "a": [
      "Paul Matzko",
      "Christian Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Steve Tosi",
      "Steven Levin"
     ],
     "a": [
      "Ethan Garcia",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Kreilick",
      "Steve Tosi"
     ],
     "a": [
      "Monika Torbus",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janice Aliberti",
      "Craig Butler"
     ],
     "a": [
      "Mariola Biekisz",
      "Christian Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Meghan Klein",
      "Addison Stewart"
     ],
     "a": [
      "Laura Govan",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Wormeck",
      "Steven Levin"
     ],
     "a": [
      "Lisa Viola",
      "Toby Athron"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Johanna Kreilick",
      "Jessica Wormeck"
     ],
     "a": [
      "Laura Govan",
      "Margo Langer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Janice Aliberti",
      "Meghan Klein"
     ],
     "a": [
      "Mariola Biekisz",
      "Monika Torbus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Craig Butler",
      "Steve Tosi"
     ],
     "a": [
      "Christian Osborne",
      "Ethan Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Addison Stewart",
      "Steven Levin"
     ],
     "a": [
      "Paul Matzko",
      "Toby Athron"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "The Mighty Dinks",
   "away": "Power Picklers",
   "time": "2026-07-28T19:30:00",
   "complete": true,
   "homePoints": 663,
   "awayPoints": 533,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janice Aliberti",
      "Craig Butler"
     ],
     "a": [
      "Gail Hannagan",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tammie Destefano",
      "Steve Tosi"
     ],
     "a": [
      "Tammy Dragon",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meghan Klein",
      "Steven Levin"
     ],
     "a": [
      "Sarah Stangota",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Wormeck",
      "Greg August"
     ],
     "a": [
      "Peggy Matzen",
      "Tyler Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Janice Aliberti",
      "Cathy Matko"
     ],
     "a": [
      "Tammy Dragon",
      "Sarah Stangota"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tammie Destefano",
      "Jessica Wormeck"
     ],
     "a": [
      "Gail Hannagan",
      "Jamie Levin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Craig Butler",
      "Steve Tosi"
     ],
     "a": [
      "Tom Matko",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Greg August",
      "Ken Carlson"
     ],
     "a": [
      "Gary Dorin",
      "Roy Dragon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tammie Destefano",
      "Craig Butler"
     ],
     "a": [
      "Tammy Dragon",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janice Aliberti",
      "Steve Tosi"
     ],
     "a": [
      "Gail Hannagan",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Cathy Matko",
      "Steven Levin"
     ],
     "a": [
      "Jamie Levin",
      "Roy Dragon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meghan Klein",
      "Ken Carlson"
     ],
     "a": [
      "Peggy Matzen",
      "Tyler Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tammie Destefano",
      "Meghan Klein"
     ],
     "a": [
      "Sarah Stangota",
      "Peggy Matzen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cathy Matko",
      "Jessica Wormeck"
     ],
     "a": [
      "Gail Hannagan",
      "Jamie Levin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Craig Butler",
      "Steven Levin"
     ],
     "a": [
      "Tom Matko",
      "Gary Dorin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Greg August",
      "Ken Carlson"
     ],
     "a": [
      "Roy Dragon",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Cathy Matko",
      "Steven Levin"
     ],
     "a": [
      "Jamie Levin",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Janice Aliberti",
      "Steve Tosi"
     ],
     "a": [
      "Tammy Dragon",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meghan Klein",
      "Ken Carlson"
     ],
     "a": [
      "Sarah Stangota",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Wormeck",
      "Greg August"
     ],
     "a": [
      "Peggy Matzen",
      "Roy Dragon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Janice Aliberti",
      "Tammie Destefano"
     ],
     "a": [
      "Tammy Dragon",
      "Gail Hannagan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meghan Klein",
      "Jessica Wormeck"
     ],
     "a": [
      "Sarah Stangota",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Craig Butler",
      "Steven Levin"
     ],
     "a": [
      "Tom Matko",
      "Gary Dorin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Steve Tosi",
      "Greg August"
     ],
     "a": [
      "Eric Brezina",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Janice Aliberti",
      "Craig Butler"
     ],
     "a": [
      "Tammy Dragon",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tammie Destefano",
      "Greg August"
     ],
     "a": [
      "Sarah Stangota",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cathy Matko",
      "Steve Tosi"
     ],
     "a": [
      "Gail Hannagan",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Wormeck",
      "Ken Carlson"
     ],
     "a": [
      "Jamie Levin",
      "Roy Dragon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Janice Aliberti",
      "Tammie Destefano"
     ],
     "a": [
      "Tammy Dragon",
      "Gail Hannagan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cathy Matko",
      "Meghan Klein"
     ],
     "a": [
      "Jamie Levin",
      "Peggy Matzen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Craig Butler",
      "Steve Tosi"
     ],
     "a": [
      "Tom Matko",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Steven Levin",
      "Ken Carlson"
     ],
     "a": [
      "Roy Dragon",
      "Tyler Brandt"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 8,
   "home": "Pickleball Addicts",
   "away": "The Mighty Dinks",
   "time": "2026-08-03T19:30:00",
   "complete": true,
   "homePoints": 598,
   "awayPoints": 600,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Patricia Kavanaugh",
      "David Tabacco"
     ],
     "a": [
      "Janice Aliberti",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Noelle Villa",
      "Gabe Lantos"
     ],
     "a": [
      "Tammie Destefano",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marguerite Greener",
      "Josh Rito"
     ],
     "a": [
      "Cathy Matko",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Oddy",
      "John Fallone"
     ],
     "a": [
      "Lynda Levan",
      "Greg August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patricia Kavanaugh",
      "Noelle Villa"
     ],
     "a": [
      "Janice Aliberti",
      "Tammie Destefano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "Nancy Cook"
     ],
     "a": [
      "Lynda Levan",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "David Tabacco",
      "Gabe Lantos"
     ],
     "a": [
      "Craig Butler",
      "Dan Stanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "John Fallone",
      "Josh Rito"
     ],
     "a": [
      "Ken Carlson",
      "Greg August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patricia Kavanaugh",
      "David Tabacco"
     ],
     "a": [
      "Janice Aliberti",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Noelle Villa",
      "Gabe Lantos"
     ],
     "a": [
      "Tammie Destefano",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Josh Rito"
     ],
     "a": [
      "Meghan Klein",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nancy Cook",
      "John Fallone"
     ],
     "a": [
      "Cathy Matko",
      "Greg August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Noelle Villa",
      "Marguerite Greener"
     ],
     "a": [
      "Tammie Destefano",
      "Cathy Matko"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Nancy Cook"
     ],
     "a": [
      "Lynda Levan",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Tabacco",
      "John Fallone"
     ],
     "a": [
      "Dan Stanton",
      "Greg August"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gabe Lantos",
      "Josh Rito"
     ],
     "a": [
      "Craig Butler",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Patricia Kavanaugh",
      "John Fallone"
     ],
     "a": [
      "Janice Aliberti",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marguerite Greener",
      "David Tabacco"
     ],
     "a": [
      "Cathy Matko",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nancy Cook",
      "Gabe Lantos"
     ],
     "a": [
      "Lynda Levan",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sharon Oddy",
      "Josh Rito"
     ],
     "a": [
      "Meghan Klein",
      "Greg August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Patricia Kavanaugh",
      "Marguerite Greener"
     ],
     "a": [
      "Tammie Destefano",
      "Lynda Levan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Noelle Villa",
      "Sharon Oddy"
     ],
     "a": [
      "Janice Aliberti",
      "Cathy Matko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "David Tabacco",
      "Gabe Lantos"
     ],
     "a": [
      "Craig Butler",
      "Dan Stanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "John Fallone",
      "Josh Rito"
     ],
     "a": [
      "Ken Carlson",
      "Greg August"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Kavanaugh",
      "Gabe Lantos"
     ],
     "a": [
      "Tammie Destefano",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Noelle Villa",
      "David Tabacco"
     ],
     "a": [
      "Janice Aliberti",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nancy Cook",
      "John Fallone"
     ],
     "a": [
      "Meghan Klein",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marguerite Greener",
      "Josh Rito"
     ],
     "a": [
      "Lynda Levan",
      "Greg August"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Kavanaugh",
      "Noelle Villa"
     ],
     "a": [
      "Janice Aliberti",
      "Tammie Destefano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Nancy Cook"
     ],
     "a": [
      "Cathy Matko",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "David Tabacco",
      "John Fallone"
     ],
     "a": [
      "Craig Butler",
      "Ken Carlson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gabe Lantos",
      "Josh Rito"
     ],
     "a": [
      "Dan Stanton",
      "Greg August"
     ]
    }
   ],
   "subs": [
    "Josh Rito",
    "John Fallone",
    "Lynda Levan"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Dinking Around",
   "away": "Summer of Slam",
   "time": "2026-08-04T19:30:00",
   "complete": true,
   "homePoints": 581,
   "awayPoints": 621,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mariola Biekisz",
      "Paul Matzko"
     ],
     "a": [
      "Mary Brashier",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Doug Brown"
     ],
     "a": [
      "Gail Welkes",
      "Andy Ro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Christine Ziegler",
      "Ethan Garcia"
     ],
     "a": [
      "Diane Bracco",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Margo Langer",
      "Christian Osborne"
     ],
     "a": [
      "Elizabeth Biehl",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Margo Langer"
     ],
     "a": [
      "Mary Brashier",
      "Gail Welkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Christine Ziegler"
     ],
     "a": [
      "Kelly Bowers",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Paul Matzko",
      "Christian Osborne"
     ],
     "a": [
      "Eric Berlinger",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Doug Brown",
      "Ethan Garcia"
     ],
     "a": [
      "Jeff Barna",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Doug Brown"
     ],
     "a": [
      "Mary Brashier",
      "Andy Ro"
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
      "Gail Welkes",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Monika Torbus",
      "Ethan Garcia"
     ],
     "a": [
      "Elizabeth Biehl",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christine Ziegler",
      "Christian Osborne"
     ],
     "a": [
      "Kelly Bowers",
      "Jeff Barna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Mariola Biekisz",
      "Monika Torbus"
     ],
     "a": [
      "Mary Brashier",
      "Kelly Bowers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Margo Langer",
      "Christine Ziegler"
     ],
     "a": [
      "Elizabeth Biehl",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Paul Matzko",
      "Doug Brown"
     ],
     "a": [
      "Eric Berlinger",
      "Jeff Barna"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christian Osborne",
      "Ethan Garcia"
     ],
     "a": [
      "Joaquin Cruz",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mariola Biekisz",
      "Paul Matzko"
     ],
     "a": [
      "Gail Welkes",
      "Andy Ro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Monika Torbus",
      "Doug Brown"
     ],
     "a": [
      "Kelly Bowers",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Ziegler",
      "Christian Osborne"
     ],
     "a": [
      "Elizabeth Biehl",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Margo Langer",
      "Ethan Garcia"
     ],
     "a": [
      "Diane Bracco",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mariola Biekisz",
      "Monika Torbus"
     ],
     "a": [
      "Mary Brashier",
      "Gail Welkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Margo Langer",
      "Christine Ziegler"
     ],
     "a": [
      "Elizabeth Biehl",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Paul Matzko",
      "Doug Brown"
     ],
     "a": [
      "Eric Berlinger",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christian Osborne",
      "Ethan Garcia"
     ],
     "a": [
      "Joaquin Cruz",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Christian Osborne"
     ],
     "a": [
      "Kelly Bowers",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Monika Torbus",
      "Paul Matzko"
     ],
     "a": [
      "Mary Brashier",
      "Andy Ro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Ziegler",
      "Doug Brown"
     ],
     "a": [
      "Gail Welkes",
      "Mahesh Jonnalagdda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Margo Langer",
      "Ethan Garcia"
     ],
     "a": [
      "Diane Bracco",
      "Jeff Barna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Margo Langer"
     ],
     "a": [
      "Gail Welkes",
      "Elizabeth Biehl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Monika Torbus",
      "Christine Ziegler"
     ],
     "a": [
      "Mary Brashier",
      "Kelly Bowers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Paul Matzko",
      "Christian Osborne"
     ],
     "a": [
      "Andy Ro",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Doug Brown",
      "Ethan Garcia"
     ],
     "a": [
      "Eric Berlinger",
      "Jeff Barna"
     ]
    }
   ],
   "subs": [
    "Andy Ro"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Power Picklers",
   "away": "Pickleball Addicts",
   "time": "2026-08-04T19:30:00",
   "complete": true,
   "homePoints": 552,
   "awayPoints": 621,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tammy Dragon",
      "Tom Matko"
     ],
     "a": [
      "Marguerite Greener",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeannine Calhoun",
      "Eric Brezina"
     ],
     "a": [
      "Sharon Oddy",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Roy Dragon"
     ],
     "a": [
      "Nancy Cook",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Gary Dorin"
     ],
     "a": [
      "Karen Veninger",
      "Gabe Lantos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Jeannine Calhoun"
     ],
     "a": [
      "Marguerite Greener",
      "Karen Veninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Peggy Matzen"
     ],
     "a": [
      "Sharon Oddy",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tom Matko",
      "Eric Brezina"
     ],
     "a": [
      "David Tabacco",
      "Gabe Lantos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Anthony Leone",
      "Roy Dragon"
     ],
     "a": [
      "Mike Leach",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Eric Brezina"
     ],
     "a": [
      "Marguerite Greener",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jeannine Calhoun",
      "Tom Matko"
     ],
     "a": [
      "Karen Veninger",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Gary Dorin"
     ],
     "a": [
      "Sharon Oddy",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Nancy Cook",
      "Gabe Lantos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tammy Dragon",
      "Sarah Stangota"
     ],
     "a": [
      "Marguerite Greener",
      "Sharon Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Peggy Matzen"
     ],
     "a": [
      "Karen Veninger",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tom Matko",
      "Anthony Leone"
     ],
     "a": [
      "David Tabacco",
      "Mike Leach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Gary Dorin",
      "Roy Dragon"
     ],
     "a": [
      "Gabe Lantos",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeannine Calhoun",
      "Eric Brezina"
     ],
     "a": [
      "Marguerite Greener",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Sharon Oddy",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jamie Levin",
      "Roy Dragon"
     ],
     "a": [
      "Nancy Cook",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Gary Dorin"
     ],
     "a": [
      "Karen Veninger",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tammy Dragon",
      "Jeannine Calhoun"
     ],
     "a": [
      "Marguerite Greener",
      "Sharon Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jamie Levin",
      "Peggy Matzen"
     ],
     "a": [
      "Karen Veninger",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tom Matko",
      "Eric Brezina"
     ],
     "a": [
      "David Tabacco",
      "Mike Leach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gary Dorin",
      "Roy Dragon"
     ],
     "a": [
      "Gabe Lantos",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Tom Matko"
     ],
     "a": [
      "Marguerite Greener",
      "Gabe Lantos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tammy Dragon",
      "Eric Brezina"
     ],
     "a": [
      "Sharon Oddy",
      "David Tabacco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jeannine Calhoun",
      "Roy Dragon"
     ],
     "a": [
      "Nancy Cook",
      "Mike Leach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Anthony Leone"
     ],
     "a": [
      "Karen Veninger",
      "Lakshmikanth Chaluvadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jeannine Calhoun",
      "Jamie Levin"
     ],
     "a": [
      "Marguerite Greener",
      "Karen Veninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tammy Dragon",
      "Sarah Stangota"
     ],
     "a": [
      "Sharon Oddy",
      "Nancy Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Gary Dorin"
     ],
     "a": [
      "David Tabacco",
      "Gabe Lantos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tom Matko",
      "Anthony Leone"
     ],
     "a": [
      "Mike Leach",
      "Lakshmikanth Chaluvadi"
     ]
    }
   ],
   "subs": [
    "Anthony Leone"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Dinking Around",
   "away": "Power Picklers",
   "time": "2026-08-10T19:30:00",
   "complete": true,
   "homePoints": 607,
   "awayPoints": 634,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Toby Athron"
     ],
     "a": [
      "Janice Aliberti",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Laura Govan",
      "Ethan Garcia"
     ],
     "a": [
      "Jeannine Calhoun",
      "Trevor Foraker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Margo Langer",
      "Doug Brown"
     ],
     "a": [
      "Gail Hannagan",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lisa Viola",
      "Anthony Leone"
     ],
     "a": [
      "Jamie Levin",
      "Tyler Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 15,
     "h": [
      "Mariola Biekisz",
      "Monika Torbus"
     ],
     "a": [
      "Jeannine Calhoun",
      "Gail Hannagan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Govan",
      "Lisa Viola"
     ],
     "a": [
      "Janice Aliberti",
      "Lynda Levan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Toby Athron",
      "Ethan Garcia"
     ],
     "a": [
      "Trevor Foraker",
      "Tom Matko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anthony Leone",
      "Mike Fuchs"
     ],
     "a": [
      "Eric Brezina",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Govan",
      "Toby Athron"
     ],
     "a": [
      "Jeannine Calhoun",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Ethan Garcia"
     ],
     "a": [
      "Janice Aliberti",
      "Trevor Foraker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Monika Torbus",
      "Doug Brown"
     ],
     "a": [
      "Lynda Levan",
      "Gary Dorin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Margo Langer",
      "Mike Fuchs"
     ],
     "a": [
      "Jamie Levin",
      "Tyler Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Govan",
      "Margo Langer"
     ],
     "a": [
      "Gail Hannagan",
      "Jamie Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Lisa Viola"
     ],
     "a": [
      "Janice Aliberti",
      "Lynda Levan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Toby Athron",
      "Doug Brown"
     ],
     "a": [
      "Trevor Foraker",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anthony Leone",
      "Mike Fuchs"
     ],
     "a": [
      "Gary Dorin",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Doug Brown"
     ],
     "a": [
      "Lynda Levan",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Ethan Garcia"
     ],
     "a": [
      "Jeannine Calhoun",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Margo Langer",
      "Mike Fuchs"
     ],
     "a": [
      "Gail Hannagan",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lisa Viola",
      "Anthony Leone"
     ],
     "a": [
      "Jamie Levin",
      "Gary Dorin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mariola Biekisz",
      "Laura Govan"
     ],
     "a": [
      "Jeannine Calhoun",
      "Janice Aliberti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Margo Langer",
      "Lisa Viola"
     ],
     "a": [
      "Gail Hannagan",
      "Jamie Levin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Toby Athron",
      "Doug Brown"
     ],
     "a": [
      "Trevor Foraker",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ethan Garcia",
      "Anthony Leone"
     ],
     "a": [
      "Tom Matko",
      "Tyler Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mariola Biekisz",
      "Toby Athron"
     ],
     "a": [
      "Jeannine Calhoun",
      "Trevor Foraker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Laura Govan",
      "Anthony Leone"
     ],
     "a": [
      "Gail Hannagan",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Ethan Garcia"
     ],
     "a": [
      "Janice Aliberti",
      "Tom Matko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lisa Viola",
      "Mike Fuchs"
     ],
     "a": [
      "Lynda Levan",
      "Gary Dorin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mariola Biekisz",
      "Laura Govan"
     ],
     "a": [
      "Jeannine Calhoun",
      "Janice Aliberti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Margo Langer"
     ],
     "a": [
      "Lynda Levan",
      "Jamie Levin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Toby Athron",
      "Ethan Garcia"
     ],
     "a": [
      "Trevor Foraker",
      "Tom Matko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Doug Brown",
      "Mike Fuchs"
     ],
     "a": [
      "Gary Dorin",
      "Tyler Brandt"
     ]
    }
   ],
   "subs": [
    "Lynda Levan",
    "Janice Aliberti",
    "Anthony Leone"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Summer of Slam",
   "away": "The Mighty Dinks",
   "time": "2026-08-11T19:30:00",
   "complete": true,
   "homePoints": 678,
   "awayPoints": 622,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Brashier",
      "Eric Berlinger"
     ],
     "a": [
      "Cathy Matko",
      "Addison Stewart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gail Welkes",
      "Andy Ro"
     ],
     "a": [
      "Janice Aliberti",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Elizabeth Biehl",
      "Joaquin Cruz"
     ],
     "a": [
      "Meghan Klein",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Lynda Levan",
      "Jeff Barna"
     ],
     "a": [
      "Tammie Destefano",
      "Steven Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Brashier",
      "Gail Welkes"
     ],
     "a": [
      "Cathy Matko",
      "Janice Aliberti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lynda Levan",
      "Diane Bracco"
     ],
     "a": [
      "Meghan Klein",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Berlinger",
      "Jeff Barna"
     ],
     "a": [
      "Craig Butler",
      "Ken Carlson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andy Ro",
      "Joaquin Cruz"
     ],
     "a": [
      "Addison Stewart",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Andy Ro"
     ],
     "a": [
      "Cathy Matko",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gail Welkes",
      "Eric Berlinger"
     ],
     "a": [
      "Janice Aliberti",
      "Addison Stewart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Elizabeth Biehl",
      "Joaquin Cruz"
     ],
     "a": [
      "Jessica Wormeck",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Diane Bracco",
      "Jeff Barna"
     ],
     "a": [
      "Tammie Destefano",
      "Steven Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gail Welkes",
      "Elizabeth Biehl"
     ],
     "a": [
      "Janice Aliberti",
      "Meghan Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Lynda Levan",
      "Diane Bracco"
     ],
     "a": [
      "Tammie Destefano",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Eric Berlinger",
      "Andy Ro"
     ],
     "a": [
      "Craig Butler",
      "Dan Stanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeff Barna",
      "Joaquin Cruz"
     ],
     "a": [
      "Ken Carlson",
      "Steven Levin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Brashier",
      "Andy Ro"
     ],
     "a": [
      "Meghan Klein",
      "Addison Stewart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Elizabeth Biehl",
      "Eric Berlinger"
     ],
     "a": [
      "Cathy Matko",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Jeff Barna"
     ],
     "a": [
      "Tammie Destefano",
      "Ken Carlson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lynda Levan",
      "Joaquin Cruz"
     ],
     "a": [
      "Jessica Wormeck",
      "Steven Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Mary Brashier",
      "Elizabeth Biehl"
     ],
     "a": [
      "Janice Aliberti",
      "Tammie Destefano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gail Welkes",
      "Lynda Levan"
     ],
     "a": [
      "Cathy Matko",
      "Meghan Klein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Berlinger",
      "Andy Ro"
     ],
     "a": [
      "Addison Stewart",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jeff Barna",
      "Joaquin Cruz"
     ],
     "a": [
      "Ken Carlson",
      "Steven Levin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Eric Berlinger"
     ],
     "a": [
      "Tammie Destefano",
      "Craig Butler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gail Welkes",
      "Andy Ro"
     ],
     "a": [
      "Cathy Matko",
      "Addison Stewart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lynda Levan",
      "Jeff Barna"
     ],
     "a": [
      "Meghan Klein",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Diane Bracco",
      "Joaquin Cruz"
     ],
     "a": [
      "Jessica Wormeck",
      "Ken Carlson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Mary Brashier",
      "Gail Welkes"
     ],
     "a": [
      "Cathy Matko",
      "Janice Aliberti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lynda Levan",
      "Diane Bracco"
     ],
     "a": [
      "Tammie Destefano",
      "Jessica Wormeck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Berlinger",
      "Jeff Barna"
     ],
     "a": [
      "Addison Stewart",
      "Dan Stanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andy Ro",
      "Joaquin Cruz"
     ],
     "a": [
      "Craig Butler",
      "Steven Levin"
     ]
    }
   ],
   "subs": [
    "Andy Ro"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Pickleball Addicts",
   "away": "Dinking Around",
   "time": "2026-08-17T19:30:00",
   "complete": true,
   "homePoints": 622,
   "awayPoints": 583,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "John Lottier"
     ],
     "a": [
      "Christine Ziegler",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Marguerite Greener",
      "Mike Leach"
     ],
     "a": [
      "Monika Torbus",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Karen Veninger",
      "Gabe Lantos"
     ],
     "a": [
      "Margo Langer",
      "Doug Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Nancy Cook",
      "David Tabacco"
     ],
     "a": [
      "Lisa Viola",
      "Mike Fuchs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "Sharon Oddy"
     ],
     "a": [
      "Monika Torbus",
      "Christine Ziegler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Veninger",
      "Nancy Cook"
     ],
     "a": [
      "Margo Langer",
      "Lisa Viola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "John Lottier",
      "Mike Leach"
     ],
     "a": [
      "Paul Matzko",
      "Toby Athron"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Gabe Lantos",
      "David Tabacco"
     ],
     "a": [
      "Doug Brown",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sharon Oddy",
      "John Lottier"
     ],
     "a": [
      "Christine Ziegler",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marguerite Greener",
      "Gabe Lantos"
     ],
     "a": [
      "Monika Torbus",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nancy Cook",
      "Mike Leach"
     ],
     "a": [
      "Margo Langer",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Karen Veninger",
      "David Tabacco"
     ],
     "a": [
      "Lisa Viola",
      "Doug Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "Karen Veninger"
     ],
     "a": [
      "Christine Ziegler",
      "Lisa Viola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sharon Oddy",
      "Nancy Cook"
     ],
     "a": [
      "Monika Torbus",
      "Margo Langer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "John Lottier",
      "Gabe Lantos"
     ],
     "a": [
      "Paul Matzko",
      "Doug Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mike Leach",
      "David Tabacco"
     ],
     "a": [
      "Toby Athron",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karen Veninger",
      "John Lottier"
     ],
     "a": [
      "Monika Torbus",
      "Toby Athron"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "Mike Leach"
     ],
     "a": [
      "Margo Langer",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nancy Cook",
      "Gabe Lantos"
     ],
     "a": [
      "Christine Ziegler",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sharon Oddy",
      "David Tabacco"
     ],
     "a": [
      "Lisa Viola",
      "Doug Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "Sharon Oddy"
     ],
     "a": [
      "Monika Torbus",
      "Christine Ziegler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Karen Veninger",
      "Nancy Cook"
     ],
     "a": [
      "Margo Langer",
      "Lisa Viola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "John Lottier",
      "Mike Leach"
     ],
     "a": [
      "Paul Matzko",
      "Toby Athron"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Gabe Lantos",
      "David Tabacco"
     ],
     "a": [
      "Doug Brown",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "John Lottier"
     ],
     "a": [
      "Monika Torbus",
      "Paul Matzko"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Mike Leach"
     ],
     "a": [
      "Margo Langer",
      "Doug Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Karen Veninger",
      "David Tabacco"
     ],
     "a": [
      "Christine Ziegler",
      "Mike Fuchs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nancy Cook",
      "Gabe Lantos"
     ],
     "a": [
      "Lisa Viola",
      "Toby Athron"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Marguerite Greener",
      "Karen Veninger"
     ],
     "a": [
      "Christine Ziegler",
      "Lisa Viola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Nancy Cook"
     ],
     "a": [
      "Monika Torbus",
      "Margo Langer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "John Lottier",
      "Gabe Lantos"
     ],
     "a": [
      "Toby Athron",
      "Mike Fuchs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mike Leach",
      "David Tabacco"
     ],
     "a": [
      "Paul Matzko",
      "Doug Brown"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 10,
   "home": "Power Picklers",
   "away": "Summer of Slam",
   "time": "2026-08-18T19:30:00",
   "complete": true,
   "homePoints": 543,
   "awayPoints": 624,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tammy Dragon",
      "Alex Lawrason"
     ],
     "a": [
      "Gail Welkes",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Goeckeler",
      "Eric Brezina"
     ],
     "a": [
      "Mary Brashier",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Elizabeth Biehl",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Roy Dragon"
     ],
     "a": [
      "Diane Bracco",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Gail Hannagan"
     ],
     "a": [
      "Mary Brashier",
      "Elizabeth Biehl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Goeckeler",
      "Peggy Matzen"
     ],
     "a": [
      "Gail Welkes",
      "Kelly Bowers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alex Lawrason",
      "Eric Brezina"
     ],
     "a": [
      "Eric Berlinger",
      "Dan Stanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Roy Dragon",
      "Tyler Brandt"
     ],
     "a": [
      "Ed Villaverde",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan Goeckeler",
      "Alex Lawrason"
     ],
     "a": [
      "Mary Brashier",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Eric Brezina"
     ],
     "a": [
      "Gail Welkes",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Kelly Bowers",
      "Jeff Barna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Stangota",
      "Tyler Brandt"
     ],
     "a": [
      "Diane Bracco",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Goeckeler",
      "Sarah Stangota"
     ],
     "a": [
      "Elizabeth Biehl",
      "Diane Bracco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Peggy Matzen"
     ],
     "a": [
      "Gail Welkes",
      "Kelly Bowers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Lawrason",
      "Anthony Leone"
     ],
     "a": [
      "Eric Berlinger",
      "Ed Villaverde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Roy Dragon",
      "Tyler Brandt"
     ],
     "a": [
      "Jeff Barna",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Kelly Bowers",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tammy Dragon",
      "Eric Brezina"
     ],
     "a": [
      "Mary Brashier",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Stangota",
      "Tyler Brandt"
     ],
     "a": [
      "Elizabeth Biehl",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Roy Dragon"
     ],
     "a": [
      "Diane Bracco",
      "Jeff Barna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Tammy Dragon",
      "Susan Goeckeler"
     ],
     "a": [
      "Mary Brashier",
      "Gail Welkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Stangota",
      "Peggy Matzen"
     ],
     "a": [
      "Elizabeth Biehl",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alex Lawrason",
      "Anthony Leone"
     ],
     "a": [
      "Eric Berlinger",
      "Ed Villaverde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Roy Dragon"
     ],
     "a": [
      "Dan Stanton",
      "Joaquin Cruz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tammy Dragon",
      "Alex Lawrason"
     ],
     "a": [
      "Mary Brashier",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Goeckeler",
      "Roy Dragon"
     ],
     "a": [
      "Elizabeth Biehl",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Eric Brezina"
     ],
     "a": [
      "Gail Welkes",
      "Dan Stanton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Peggy Matzen",
      "Tyler Brandt"
     ],
     "a": [
      "Kelly Bowers",
      "Jeff Barna"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Tammy Dragon",
      "Susan Goeckeler"
     ],
     "a": [
      "Mary Brashier",
      "Gail Welkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gail Hannagan",
      "Sarah Stangota"
     ],
     "a": [
      "Kelly Bowers",
      "Diane Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alex Lawrason",
      "Eric Brezina"
     ],
     "a": [
      "Eric Berlinger",
      "Dan Stanton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Anthony Leone",
      "Tyler Brandt"
     ],
     "a": [
      "Jeff Barna",
      "Joaquin Cruz"
     ]
    }
   ],
   "subs": [
    "Dan Stanton",
    "Susan Goeckeler",
    "Alex Lawrason",
    "Anthony Leone"
   ]
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Roger Slane": "753f08a2-4d12-4a23-9444-c626c29a7f98"
 },
 "meta": {
  "matchesPlayed": 20,
  "provisionalMatches": 0,
  "weeks": "1-10",
  "totalPlayers": 74,
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
  "divisionSlug": "edb788e6",
  "hasPlayoffs": false,
  "typicalDay": "Mondays",
  "detailFile": "detail-edb788e6.js",
  "clubName": "Flemington",
  "divisionName": "3.25 - 3.99",
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
  DATA.meta.asOf = "2026-08-28T16:18:28.986Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["edb788e6"] = DATA;
})();
