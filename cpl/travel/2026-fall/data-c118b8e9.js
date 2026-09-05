(function () {
  const DATA = {
 "players": [
  {
   "name": "Steven Hummel",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 12,
   "losses": 0,
   "pointsWon": 252,
   "totalPointsAgainst": 187,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 65,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 3.2,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "name": "Jason Wu",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 85,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 41,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 1.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.7,
   "playerId": "5e42a5f7-22d1-4613-a829-b62121ddc704"
  },
  {
   "name": "Arnold Poblete",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 92,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 34,
   "ppg": 21,
   "leagueRank": 4,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.1,
   "playerId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "name": "Abhishekh Mehra",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 113,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "winPct": 100,
   "diff": 34,
   "ppg": 21,
   "leagueRank": 8,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Jr Burrs",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 93,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 33,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.8,
   "playerId": "870112b1-afc3-4ff6-b784-7f872210bf37"
  },
  {
   "name": "Anil Kumar Jakkaladki",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 116,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 31,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 1.7,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.8,
   "playerId": "176df588-c3ff-4b50-a66a-4df99647254b"
  },
  {
   "name": "Niman Ahmeti",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 99,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 27,
   "ppg": 21,
   "leagueRank": 13,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -2.4,
   "playerId": "40681083-620d-4293-829f-91121323135c"
  },
  {
   "name": "Nesip Cengiz",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 65,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 19,
   "ppg": 21,
   "leagueRank": 24,
   "rating": -0.4,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -2.6,
   "playerId": "c737d3dd-dfe2-4f58-a095-fb40fc601866"
  },
  {
   "name": "Christopher Hendrickson",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 15,
   "losses": 1,
   "pointsWon": 334,
   "totalPointsAgainst": 251,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 93.8,
   "diff": 83,
   "ppg": 20.9,
   "leagueRank": 11,
   "rating": 2.7,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.4,
   "playerId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6"
  },
  {
   "name": "John Manuzza",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 269,
   "totalPointsAgainst": 218,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 92.3,
   "diff": 51,
   "ppg": 20.7,
   "leagueRank": 15,
   "rating": 1.4,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": 0.1,
   "playerId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "name": "Harvey Mitchell",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 250,
   "totalPointsAgainst": 176,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 91.7,
   "diff": 74,
   "ppg": 20.8,
   "leagueRank": 7,
   "rating": 3.7,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "name": "Alessio Muscara",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 250,
   "totalPointsAgainst": 189,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 91.7,
   "diff": 61,
   "ppg": 20.8,
   "leagueRank": 10,
   "rating": 2.5,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1,
   "playerId": "4a5131e4-a912-4913-8ff5-9281e53c6974"
  },
  {
   "name": "Umang Pathak",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 14,
   "losses": 2,
   "pointsWon": 328,
   "totalPointsAgainst": 244,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 84,
   "ppg": 20.5,
   "leagueRank": 16,
   "rating": 3.8,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12"
  },
  {
   "name": "Shalin Rawal",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 63,
   "ppg": 20.8,
   "leagueRank": 9,
   "rating": 4.4,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "08530d21-2dc5-4f71-9d49-9191ec192860"
  },
  {
   "name": "Marc Padre",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 164,
   "totalPointsAgainst": 108,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "winPct": 87.5,
   "diff": 56,
   "ppg": 20.5,
   "leagueRank": 5,
   "rating": 4.8,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Mark Bernstein",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "ddd8803a-e678-4f57-b6e8-68f011cd7108",
   "winPct": 87.5,
   "diff": 49,
   "ppg": 20.8,
   "leagueRank": 12,
   "rating": 2.9,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Kyle Korman",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 44,
   "ppg": 20.8,
   "leagueRank": 19,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.4,
   "playerId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "name": "Sree Harsha Konduru",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 160,
   "totalPointsAgainst": 127,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 33,
   "ppg": 20,
   "leagueRank": 20,
   "rating": 2.6,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "name": "Gary White",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 164,
   "totalPointsAgainst": 131,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 33,
   "ppg": 20.5,
   "leagueRank": 22,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.5,
   "playerId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "name": "Michael Mazzola",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 162,
   "totalPointsAgainst": 137,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "2d37c246-0ab5-45ca-bb7b-c869e24452b5",
   "winPct": 87.5,
   "diff": 25,
   "ppg": 20.3,
   "leagueRank": 25,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Jim Boy Baring",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 158,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "39c75937-8a66-4688-85f8-6c547400e441",
   "winPct": 87.5,
   "diff": 17,
   "ppg": 19.8,
   "leagueRank": 30,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Dennis Yap",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 13,
   "losses": 2,
   "pointsWon": 308,
   "totalPointsAgainst": 227,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 86.7,
   "diff": 81,
   "ppg": 20.5,
   "leagueRank": 18,
   "rating": 3.3,
   "ratingGames": 15,
   "confidence": 69,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "45ea05c6-ef48-4b0a-9f71-a640be038d08"
  },
  {
   "name": "Tyler Bayly",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 142,
   "totalPointsAgainst": 99,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 43,
   "ppg": 20.3,
   "leagueRank": 14,
   "rating": 3.2,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "642b7fc5-f304-459a-889e-e726dc9edeab"
  },
  {
   "name": "Ali Bhimji",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 110,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 35,
   "ppg": 20.7,
   "leagueRank": 21,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -2,
   "playerId": "3651f648-493a-4517-8085-a8b9cb086c07"
  },
  {
   "name": "Rakshit Maddur Gopinath",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 30,
   "ppg": 20.7,
   "leagueRank": 23,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.4,
   "playerId": "1448a485-6172-48af-96e0-f4876e9c5268"
  },
  {
   "name": "Daniel Dechristopher",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 144,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 20,
   "ppg": 20.6,
   "leagueRank": 26,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.2,
   "playerId": "899ba1d1-37e5-4ad6-8daa-f726376776e5"
  },
  {
   "name": "Graham Heavenrich",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 241,
   "totalPointsAgainst": 201,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 40,
   "ppg": 20.1,
   "leagueRank": 27,
   "rating": 1.5,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90"
  },
  {
   "name": "Jeff Axelrad",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 120,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 5,
   "ppg": 20,
   "leagueRank": 36,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.6,
   "playerId": "27009a0b-037c-4934-9f52-d21c928ef173"
  },
  {
   "name": "Jason Feldman",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 13,
   "losses": 3,
   "pointsWon": 322,
   "totalPointsAgainst": 250,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 81.3,
   "diff": 72,
   "ppg": 20.1,
   "leagueRank": 28,
   "rating": 2.1,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.8,
   "playerId": "5636cdc5-7a65-4202-abbb-5999eee35ab3"
  },
  {
   "name": "Matthew Schwartz",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 13,
   "losses": 3,
   "pointsWon": 322,
   "totalPointsAgainst": 262,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f",
   "winPct": 81.3,
   "diff": 60,
   "ppg": 20.1,
   "leagueRank": 29,
   "rating": 1,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Cesar Santamaria",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 13,
   "losses": 3,
   "pointsWon": 326,
   "totalPointsAgainst": 289,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 2,
   "playerId": "fbde98cb-9eee-431b-b164-244249c26728",
   "winPct": 81.3,
   "diff": 37,
   "ppg": 20.4,
   "leagueRank": 31,
   "rating": 1.2,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Ashish Kumar",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 206,
   "totalPointsAgainst": 159,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 80,
   "diff": 47,
   "ppg": 20.6,
   "leagueRank": 17,
   "rating": 3.3,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "5df02573-21d4-40ea-8b41-f81372a474b3"
  },
  {
   "name": "Bryan Mccourt",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 298,
   "totalPointsAgainst": 256,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 42,
   "ppg": 19.9,
   "leagueRank": 38,
   "rating": 0.8,
   "ratingGames": 15,
   "confidence": 70,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.7,
   "playerId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa"
  },
  {
   "name": "Russell Cripps",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 92,
   "totalPointsAgainst": 80,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 12,
   "ppg": 18.4,
   "leagueRank": 53,
   "rating": -0.1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1,
   "playerId": "43d2bf2c-e732-4ce8-adae-035d989fa792"
  },
  {
   "name": "Rajeeth Nadig",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 281,
   "totalPointsAgainst": 241,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 78.6,
   "diff": 40,
   "ppg": 20.1,
   "leagueRank": 40,
   "rating": 1.2,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "20c15f19-5b27-4c9f-bc75-da3d516a015b"
  },
  {
   "name": "Brandon Tsang",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 260,
   "totalPointsAgainst": 232,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 76.9,
   "diff": 28,
   "ppg": 20,
   "leagueRank": 43,
   "rating": 1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "name": "Avneesh Agarwal",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 252,
   "totalPointsAgainst": 228,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 0,
   "winPct": 76.9,
   "diff": 24,
   "ppg": 19.4,
   "leagueRank": 61,
   "rating": 0.4,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "f0ac7d85-0e7b-4f28-80fe-3282c3c875ed"
  },
  {
   "name": "Luca Hendrickson",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 326,
   "totalPointsAgainst": 252,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 74,
   "ppg": 20.4,
   "leagueRank": 34,
   "rating": 1.7,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.5,
   "playerId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "name": "Jose Campos",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 240,
   "totalPointsAgainst": 194,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 46,
   "ppg": 20,
   "leagueRank": 42,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1,
   "playerId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f"
  },
  {
   "name": "Noah Ludwigsen",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 326,
   "totalPointsAgainst": 280,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 46,
   "ppg": 20.4,
   "leagueRank": 45,
   "rating": 1.1,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0,
   "playerId": "67f9503a-202f-4982-8e97-9b3383a35aee"
  },
  {
   "name": "Jordan Demcher",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 243,
   "totalPointsAgainst": 203,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 40,
   "ppg": 20.3,
   "leagueRank": 32,
   "rating": 2.2,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "6d1beb10-bd5c-456f-95b5-1823752e8c62"
  },
  {
   "name": "Jeff Laniado",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 246,
   "totalPointsAgainst": 208,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 38,
   "ppg": 20.5,
   "leagueRank": 37,
   "rating": 0.9,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.2,
   "playerId": "06d52e99-941a-4ced-9968-f56e6075105a"
  },
  {
   "name": "Ramam Durba",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 242,
   "totalPointsAgainst": 205,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 37,
   "ppg": 20.2,
   "leagueRank": 39,
   "rating": 0.9,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.1,
   "playerId": "93280d5d-b0c8-49cd-94fe-0350f3e2dac5"
  },
  {
   "name": "Mathew Yang",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 236,
   "totalPointsAgainst": 211,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 25,
   "ppg": 19.7,
   "leagueRank": 55,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "12ec758b-f05d-40ec-b082-a76f07cbe792"
  },
  {
   "name": "Angelo Disipio",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 237,
   "totalPointsAgainst": 212,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 25,
   "ppg": 19.8,
   "leagueRank": 57,
   "rating": 0.1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.5,
   "playerId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb"
  },
  {
   "name": "Shreyas Suresh Hassan",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 161,
   "totalPointsAgainst": 144,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 17,
   "ppg": 20.1,
   "leagueRank": 44,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.7,
   "playerId": "e1d9f3bc-ec4e-4690-810c-a67452049768"
  },
  {
   "name": "Jack Barry",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 160,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 13,
   "ppg": 20,
   "leagueRank": 56,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1,
   "playerId": "763342e5-4d13-45b7-8630-9d840cb7b8b3"
  },
  {
   "name": "Daniel Borgia",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 11,
   "losses": 4,
   "pointsWon": 289,
   "totalPointsAgainst": 236,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 73.3,
   "diff": 53,
   "ppg": 19.3,
   "leagueRank": 41,
   "rating": 2.8,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "name": "David Brandolph",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 11,
   "losses": 4,
   "pointsWon": 277,
   "totalPointsAgainst": 246,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 73.3,
   "diff": 31,
   "ppg": 18.5,
   "leagueRank": 60,
   "rating": 2,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "name": "Kevin Tran",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 286,
   "totalPointsAgainst": 230,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 71.4,
   "diff": 56,
   "ppg": 20.4,
   "leagueRank": 33,
   "rating": 2.4,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf"
  },
  {
   "name": "Robert Huntley",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 277,
   "totalPointsAgainst": 240,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 37,
   "ppg": 19.8,
   "leagueRank": 58,
   "rating": 0.9,
   "ratingGames": 14,
   "confidence": 65,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3,
   "playerId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "name": "Bennett Pereira",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 266,
   "totalPointsAgainst": 232,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 34,
   "ppg": 19,
   "leagueRank": 72,
   "rating": -0.1,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.1,
   "playerId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655"
  },
  {
   "name": "Ping Peng",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 142,
   "totalPointsAgainst": 108,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 34,
   "ppg": 20.3,
   "leagueRank": 35,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.2,
   "playerId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "name": "Yong Kim",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 141,
   "totalPointsAgainst": 116,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 25,
   "ppg": 20.1,
   "leagueRank": 46,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1,
   "playerId": "ca670ae8-0768-49d4-9984-f708cd52786c"
  },
  {
   "name": "Jun Zhi Tan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 135,
   "totalPointsAgainst": 113,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 22,
   "ppg": 19.3,
   "leagueRank": 48,
   "rating": 0.8,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "name": "Anthony Simonetti",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 143,
   "totalPointsAgainst": 123,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 20,
   "ppg": 20.4,
   "leagueRank": 47,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b"
  },
  {
   "name": "Joseph Luka",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 140,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 20,
   "ppg": 20,
   "leagueRank": 50,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.3,
   "playerId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe"
  },
  {
   "name": "Jarred Goeckeler",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 131,
   "totalPointsAgainst": 114,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "084f4667-3553-4f23-b4c7-62d6c8afb42a",
   "winPct": 71.4,
   "diff": 17,
   "ppg": 18.7,
   "leagueRank": 49,
   "rating": 2.3,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Daniel Antonelli",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 316,
   "totalPointsAgainst": 276,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 68.8,
   "diff": 40,
   "ppg": 19.8,
   "leagueRank": 67,
   "rating": 1.5,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "name": "Joseph Lynskey",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 315,
   "totalPointsAgainst": 286,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 68.8,
   "diff": 29,
   "ppg": 19.7,
   "leagueRank": 75,
   "rating": -0.1,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "0e8c08b7-0e58-434b-8830-f37779f821dc"
  },
  {
   "name": "Jimmy Ramja",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 305,
   "totalPointsAgainst": 253,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 66.7,
   "diff": 52,
   "ppg": 20.3,
   "leagueRank": 63,
   "rating": 0.5,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.8,
   "playerId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "name": "David Wheeler",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 305,
   "totalPointsAgainst": 255,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 66.7,
   "diff": 50,
   "ppg": 20.3,
   "leagueRank": 62,
   "rating": 1,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "name": "Samuel Kashefska",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 303,
   "totalPointsAgainst": 255,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 66.7,
   "diff": 48,
   "ppg": 20.2,
   "leagueRank": 52,
   "rating": 0.8,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "name": "Uzoma Nwankwo",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 295,
   "totalPointsAgainst": 253,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 42,
   "ppg": 19.7,
   "leagueRank": 54,
   "rating": 2.4,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "name": "Sandeep Malhotra",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 96,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 24,
   "ppg": 20,
   "leagueRank": 59,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.9,
   "playerId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "name": "Jamison Rowles",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 117,
   "totalPointsAgainst": 100,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 17,
   "ppg": 19.5,
   "leagueRank": 66,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "name": "Matheus Korndoerfer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 99,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 17,
   "ppg": 19.3,
   "leagueRank": 64,
   "rating": 1,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.2,
   "playerId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "name": "Meet Thakkar",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 104,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 16,
   "ppg": 20,
   "leagueRank": 51,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "name": "Matt Enz",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 107,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 12,
   "ppg": 19.8,
   "leagueRank": 70,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "name": "Neil Dedhia",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 112,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 10,
   "ppg": 20.3,
   "leagueRank": 85,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.4,
   "playerId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa"
  },
  {
   "name": "Bill Olderman",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 108,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 10,
   "ppg": 19.7,
   "leagueRank": 69,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0.7,
   "playerId": "30c847e2-9b5e-4ad7-851d-9d624f94a11b"
  },
  {
   "name": "Salman Saad",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 116,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 0,
   "ppg": 19.3,
   "leagueRank": 73,
   "rating": 1.6,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "name": "Brandon Dejesus",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 275,
   "totalPointsAgainst": 250,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 25,
   "ppg": 19.6,
   "leagueRank": 65,
   "rating": 2,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "name": "Michael Vincent",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 278,
   "totalPointsAgainst": 254,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 64.3,
   "diff": 24,
   "ppg": 19.9,
   "leagueRank": 82,
   "rating": 0.1,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "name": "Jesse Mynahan",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 279,
   "totalPointsAgainst": 258,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 64.3,
   "diff": 21,
   "ppg": 19.9,
   "leagueRank": 81,
   "rating": -0.3,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0,
   "playerId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb"
  },
  {
   "name": "Michael Johnson",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 215,
   "totalPointsAgainst": 190,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 63.6,
   "diff": 25,
   "ppg": 19.5,
   "leagueRank": 76,
   "rating": 0.5,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -1.1,
   "playerId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "name": "Harrison Bohrer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 206,
   "totalPointsAgainst": 199,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 63.6,
   "diff": 7,
   "ppg": 18.7,
   "leagueRank": 92,
   "rating": -0.3,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
  },
  {
   "name": "Ricky Jutkiewicz",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 160,
   "totalPointsAgainst": 125,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 35,
   "ppg": 20,
   "leagueRank": 68,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.1,
   "playerId": "a24bc2af-aca9-45dd-a827-12fb12f7b784"
  },
  {
   "name": "Ayon Codner",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 306,
   "totalPointsAgainst": 272,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 34,
   "ppg": 19.1,
   "leagueRank": 84,
   "rating": 1.2,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "497b0077-b7ae-4025-ad32-94c9da47ab80"
  },
  {
   "name": "Pritpal Singh",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 302,
   "totalPointsAgainst": 280,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 22,
   "ppg": 18.9,
   "leagueRank": 78,
   "rating": 1.8,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "631b24ae-9bc2-4db3-964b-33f86933021e"
  },
  {
   "name": "Roberto Marcillo",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 153,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "4516a66f-67b3-4981-a16d-036deb8db9bc",
   "winPct": 62.5,
   "diff": 15,
   "ppg": 19.1,
   "leagueRank": 79,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Timothy Lynskey",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 152,
   "totalPointsAgainst": 139,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 13,
   "ppg": 19,
   "leagueRank": 89,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "718c6948-a987-43bb-a1f3-cf7aead75edb"
  },
  {
   "name": "Akash Raju",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 158,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 13,
   "ppg": 19.8,
   "leagueRank": 77,
   "rating": 0.1,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "a2fc30f9-b494-4781-900e-1e0b7d531f02"
  },
  {
   "name": "Dan Ruble",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 250,
   "totalPointsAgainst": 224,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "d411862a-491a-47dc-93a8-4a12f821afd7",
   "winPct": 61.5,
   "diff": 26,
   "ppg": 19.2,
   "leagueRank": 71,
   "rating": 2.8,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Sushil Rijhwani",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 240,
   "totalPointsAgainst": 216,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": 24,
   "ppg": 18.5,
   "leagueRank": 94,
   "rating": -0.3,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.9,
   "playerId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "name": "Matthew Inzerillo",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 250,
   "totalPointsAgainst": 227,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 61.5,
   "diff": 23,
   "ppg": 19.2,
   "leagueRank": 83,
   "rating": 1.3,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "name": "Jacob Yoo",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 296,
   "totalPointsAgainst": 268,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 60,
   "diff": 28,
   "ppg": 19.7,
   "leagueRank": 86,
   "rating": 0.7,
   "ratingGames": 15,
   "confidence": 69,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "name": "Andrew Mclean",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 17,
   "ppg": 20.2,
   "leagueRank": 74,
   "rating": 0.9,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -1.4,
   "playerId": "2d439cdc-347e-4beb-9975-1b31bc46f2df"
  },
  {
   "name": "Dan Ladislaw",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 91,
   "totalPointsAgainst": 79,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 12,
   "ppg": 18.2,
   "leagueRank": 87,
   "rating": 1.9,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.1,
   "playerId": "31b78615-afb3-4856-8cb1-de2b8d43a115"
  },
  {
   "name": "Bruce Nguyen",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 284,
   "totalPointsAgainst": 272,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 12,
   "ppg": 18.9,
   "leagueRank": 90,
   "rating": -0.3,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9"
  },
  {
   "name": "Charles Evans",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 90,
   "totalPointsAgainst": 91,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -1,
   "ppg": 18,
   "leagueRank": 109,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "ebc8788f-79c2-4204-a14a-47b6bc480d5d"
  },
  {
   "name": "Andrew Neave",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 230,
   "totalPointsAgainst": 220,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": 10,
   "ppg": 19.2,
   "leagueRank": 96,
   "rating": -0.8,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.3,
   "playerId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0"
  },
  {
   "name": "Christopher Uston",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 132,
   "totalPointsAgainst": 113,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 19,
   "ppg": 18.9,
   "leagueRank": 80,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373"
  },
  {
   "name": "Carlos Idrovo",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 137,
   "totalPointsAgainst": 127,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 10,
   "ppg": 19.6,
   "leagueRank": 93,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "5c6366e8-1fad-44ee-bf38-4ba5d838769d"
  },
  {
   "name": "Marc Kunesch",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 267,
   "totalPointsAgainst": 258,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 9,
   "ppg": 19.1,
   "leagueRank": 102,
   "rating": -0.4,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "name": "Jitendra Arora",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 271,
   "totalPointsAgainst": 265,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 6,
   "ppg": 19.4,
   "leagueRank": 106,
   "rating": -0.8,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "name": "Mark Waters",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 261,
   "totalPointsAgainst": 259,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 2,
   "ppg": 18.6,
   "leagueRank": 100,
   "rating": -0.2,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "1baee0ad-faae-4c61-894a-a347710fdfea"
  },
  {
   "name": "Tim Bruno",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 254,
   "totalPointsAgainst": 259,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -5,
   "ppg": 18.1,
   "leagueRank": 105,
   "rating": 0.3,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "name": "Varun Gurram",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 315,
   "totalPointsAgainst": 291,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 56.3,
   "diff": 24,
   "ppg": 19.7,
   "leagueRank": 95,
   "rating": -0.1,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "name": "Mike Leach",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 191,
   "totalPointsAgainst": 189,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 54.5,
   "diff": 2,
   "ppg": 17.4,
   "leagueRank": 118,
   "rating": -1.1,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "name": "Carlos Rincon",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 249,
   "totalPointsAgainst": 223,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 53.8,
   "diff": 26,
   "ppg": 19.2,
   "leagueRank": 91,
   "rating": 1,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "name": "Neale Smith",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 240,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": 11,
   "ppg": 18.5,
   "leagueRank": 103,
   "rating": 0.8,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "name": "Kevin Sheehan",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 283,
   "totalPointsAgainst": 272,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 53.3,
   "diff": 11,
   "ppg": 18.9,
   "leagueRank": 110,
   "rating": -1.3,
   "ratingGames": 15,
   "confidence": 70,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.7,
   "playerId": "115f3958-d110-41f0-a04c-aa2f8e17a54f"
  },
  {
   "name": "Eric Ruiz",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 272,
   "totalPointsAgainst": 244,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 28,
   "ppg": 19.4,
   "leagueRank": 97,
   "rating": 0.3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527"
  },
  {
   "name": "Michael Barndt",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 268,
   "totalPointsAgainst": 244,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 24,
   "ppg": 19.1,
   "leagueRank": 98,
   "rating": 0.5,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "50853eee-28e0-4380-b379-35935eb2115a"
  },
  {
   "name": "Ryan Hathaway",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 118,
   "totalPointsAgainst": 99,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 19,
   "ppg": 19.7,
   "leagueRank": 88,
   "rating": 2.3,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "8b8ebfab-9618-4bba-a52b-6aa7679d3390"
  },
  {
   "name": "Sal Bwint",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 13,
   "ppg": 19.3,
   "leagueRank": 101,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e"
  },
  {
   "name": "Vincent Demarco",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 107,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 9,
   "ppg": 19.3,
   "leagueRank": 107,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0,
   "playerId": "5c88bc5a-3350-4271-8305-114385b45a3d"
  },
  {
   "name": "Lj Dequina",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 156,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "e4cb9932-d672-4089-a643-f2d16e3bd98a",
   "winPct": 50,
   "diff": 9,
   "ppg": 19.5,
   "leagueRank": 99,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "George Vega Jr",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 152,
   "totalPointsAgainst": 146,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 6,
   "ppg": 19,
   "leagueRank": 104,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "name": "Nacio Marshall",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 146,
   "totalPointsAgainst": 142,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "b4af1ed9-5d7e-4212-a206-3c9a97b6958a",
   "winPct": 50,
   "diff": 4,
   "ppg": 18.3,
   "leagueRank": 124,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Jimmy Shapiro",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 232,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 1,
   "ppg": 19.3,
   "leagueRank": 108,
   "rating": 0.1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "name": "Christopher Giasi",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 155,
   "totalPointsAgainst": 154,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 1,
   "ppg": 19.4,
   "leagueRank": 112,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "d6ca21c0-822e-422f-9721-34120ba90184"
  },
  {
   "name": "Malay Kaity",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 76,
   "totalPointsAgainst": 77,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "199ae8e1-22b4-4d8d-a41d-29cb984a3b33",
   "winPct": 50,
   "diff": -1,
   "ppg": 19,
   "leagueRank": 131,
   "rating": -0.7,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Paul Perumaly",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 261,
   "totalPointsAgainst": 264,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -3,
   "ppg": 18.6,
   "leagueRank": 114,
   "rating": -0.1,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b"
  },
  {
   "name": "Dan Yang",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 146,
   "totalPointsAgainst": 150,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -4,
   "ppg": 18.3,
   "leagueRank": 125,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 48,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9"
  },
  {
   "name": "Andy Ro",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 111,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -4,
   "ppg": 18.5,
   "leagueRank": 122,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "name": "Cosme Tapia",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 63,
   "totalPointsAgainst": 74,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -11,
   "ppg": 15.8,
   "leagueRank": 171,
   "rating": -0.4,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "32712f41-d770-4a6c-b536-d596bab73e13"
  },
  {
   "name": "Lincoln Jensen",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 92,
   "totalPointsAgainst": 109,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -17,
   "ppg": 15.3,
   "leagueRank": 159,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "name": "Bill Brandt",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 140,
   "totalPointsAgainst": 157,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -17,
   "ppg": 17.5,
   "leagueRank": 123,
   "rating": 1.1,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.7,
   "playerId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "name": "Matthew Carrington",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 94,
   "totalPointsAgainst": 116,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -22,
   "ppg": 15.7,
   "leagueRank": 144,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.8,
   "playerId": "6a2f3777-38b2-4f02-b550-ce38395914d2"
  },
  {
   "name": "Rohit Mankotia",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 289,
   "totalPointsAgainst": 280,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 46.7,
   "diff": 9,
   "ppg": 19.3,
   "leagueRank": 113,
   "rating": -0.6,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "name": "John Fallone",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 273,
   "totalPointsAgainst": 282,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 46.7,
   "diff": -9,
   "ppg": 18.2,
   "leagueRank": 115,
   "rating": 1.1,
   "ratingGames": 15,
   "confidence": 70,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8"
  },
  {
   "name": "Eric Berlinger",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 273,
   "totalPointsAgainst": 289,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 46.7,
   "diff": -16,
   "ppg": 18.2,
   "leagueRank": 120,
   "rating": 0.8,
   "ratingGames": 15,
   "confidence": 67,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "name": "Venu Yengala",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 296,
   "totalPointsAgainst": 316,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 43.8,
   "diff": -20,
   "ppg": 18.5,
   "leagueRank": 126,
   "rating": 0.4,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "name": "Jared Rapoport",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 270,
   "totalPointsAgainst": 252,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 42.9,
   "diff": 18,
   "ppg": 19.3,
   "leagueRank": 111,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "b19f3a31-ce60-4c40-b903-1fd60c95f649"
  },
  {
   "name": "Cullen Curley",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 270,
   "totalPointsAgainst": 260,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 42.9,
   "diff": 10,
   "ppg": 19.3,
   "leagueRank": 117,
   "rating": -0.3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "name": "Yashraj Kurani",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 130,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "winPct": 42.9,
   "diff": 4,
   "ppg": 18.6,
   "leagueRank": 116,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Michael Dombrowiecki",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 249,
   "totalPointsAgainst": 263,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -14,
   "ppg": 17.8,
   "leagueRank": 127,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1,
   "playerId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040"
  },
  {
   "name": "Nicholas Lugo",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 123,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -18,
   "ppg": 17.6,
   "leagueRank": 133,
   "rating": -0.2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.4,
   "playerId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f"
  },
  {
   "name": "Jimmy Lee",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 247,
   "totalPointsAgainst": 269,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -22,
   "ppg": 17.6,
   "leagueRank": 138,
   "rating": -0.9,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "name": "David Brond",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 116,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "790dc637-f23d-4942-af8a-bfd20b474282",
   "winPct": 42.9,
   "diff": -25,
   "ppg": 16.6,
   "leagueRank": 158,
   "rating": -2,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Gary Garretson",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 228,
   "totalPointsAgainst": 214,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 41.7,
   "diff": 14,
   "ppg": 19,
   "leagueRank": 119,
   "rating": 0.3,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "name": "Craig Butler",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 267,
   "totalPointsAgainst": 280,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -13,
   "ppg": 17.8,
   "leagueRank": 130,
   "rating": 0.5,
   "ratingGames": 15,
   "confidence": 68,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "name": "Keith Richard",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 263,
   "totalPointsAgainst": 292,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -29,
   "ppg": 17.5,
   "leagueRank": 134,
   "rating": 0.7,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "cb2183c7-8c7b-4ebf-93da-66aeabe13d3b"
  },
  {
   "name": "Jason Mcmanmon",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 229,
   "totalPointsAgainst": 257,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 38.5,
   "diff": -28,
   "ppg": 17.6,
   "leagueRank": 135,
   "rating": 0,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.1,
   "playerId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce"
  },
  {
   "name": "Ren Macalalag",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 151,
   "totalPointsAgainst": 136,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": 15,
   "ppg": 18.9,
   "leagueRank": 121,
   "rating": 0.1,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -1.3,
   "playerId": "24db47b3-dedc-418d-9210-3b5fea1952da"
  },
  {
   "name": "Ziyu Huang",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 297,
   "totalPointsAgainst": 305,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -8,
   "ppg": 18.6,
   "leagueRank": 128,
   "rating": 0.4,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "name": "Eden Ksendzovsky",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 137,
   "totalPointsAgainst": 148,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -11,
   "ppg": 17.1,
   "leagueRank": 151,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "75496a80-8064-40ae-ba4b-36c156d70885"
  },
  {
   "name": "Brian “Bubba” Falco",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 147,
   "totalPointsAgainst": 160,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": -13,
   "ppg": 18.4,
   "leagueRank": 142,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "f53cbe34-439d-4183-8c32-7264fbca23fa"
  },
  {
   "name": "Andy Knight",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 139,
   "totalPointsAgainst": 153,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -14,
   "ppg": 17.4,
   "leagueRank": 153,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.3,
   "playerId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "name": "Sean Majury",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 141,
   "totalPointsAgainst": 162,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -21,
   "ppg": 17.6,
   "leagueRank": 141,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
   "playerId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "name": "Aleks Mirkovic",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 133,
   "totalPointsAgainst": 154,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -21,
   "ppg": 16.6,
   "leagueRank": 149,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.1,
   "playerId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "name": "Ken Weinstein",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 235,
   "totalPointsAgainst": 256,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 35.7,
   "diff": -21,
   "ppg": 16.8,
   "leagueRank": 157,
   "rating": -1.6,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "name": "Jacob Rosengarten",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 248,
   "totalPointsAgainst": 272,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 35.7,
   "diff": -24,
   "ppg": 17.7,
   "leagueRank": 137,
   "rating": 0.7,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.3,
   "playerId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "name": "Kevin Lew",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 239,
   "totalPointsAgainst": 278,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 35.7,
   "diff": -39,
   "ppg": 17.1,
   "leagueRank": 147,
   "rating": -0.8,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "03886b04-b474-4dda-b7f3-eb4f4954399c"
  },
  {
   "name": "Thomas Moran",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 116,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -1,
   "ppg": 19.3,
   "leagueRank": 139,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "9571d7b5-fc34-4c77-a51f-c99b286e4304"
  },
  {
   "name": "Leland Weinert",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 107,
   "totalPointsAgainst": 110,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -3,
   "ppg": 17.8,
   "leagueRank": 148,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "3196f425-e79a-4def-b7c3-bc3205976ba3"
  },
  {
   "name": "Ritesh Patel",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 113,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -9,
   "ppg": 18.8,
   "leagueRank": 140,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7"
  },
  {
   "name": "Uday Acham",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 108,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -10,
   "ppg": 18,
   "leagueRank": 136,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.1,
   "playerId": "29646b59-bcf0-4a90-a70d-2824eb639c4c"
  },
  {
   "name": "J-P Lautenschlager",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 107,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -11,
   "ppg": 17.8,
   "leagueRank": 162,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "5c3659f9-08d3-4745-832b-f7dd3f8c5ae5"
  },
  {
   "name": "Shawn Gold",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 228,
   "totalPointsAgainst": 239,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 33.3,
   "diff": -11,
   "ppg": 19,
   "leagueRank": 129,
   "rating": 0.7,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1,
   "playerId": "e2d70cc7-b655-43d5-a059-063bfe722001"
  },
  {
   "name": "Tom Kresky",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 104,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -13,
   "ppg": 17.3,
   "leagueRank": 163,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.7,
   "playerId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "name": "Pat Wilson",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 104,
   "totalPointsAgainst": 119,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -15,
   "ppg": 17.3,
   "leagueRank": 167,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "2e77eb09-81b2-4cc7-8ed1-4cbf034705f6"
  },
  {
   "name": "Larry Minsky",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 100,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -15,
   "ppg": 16.7,
   "leagueRank": 173,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440"
  },
  {
   "name": "David Reyes",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 106,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -16,
   "ppg": 17.7,
   "leagueRank": 154,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.4,
   "playerId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "name": "David Bogatyrev",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 277,
   "totalPointsAgainst": 297,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -20,
   "ppg": 18.5,
   "leagueRank": 132,
   "rating": 1.1,
   "ratingGames": 15,
   "confidence": 69,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "name": "Jonathan Carter",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 201,
   "totalPointsAgainst": 234,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -33,
   "ppg": 16.8,
   "leagueRank": 166,
   "rating": -1.1,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "name": "David Shapiro",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 257,
   "totalPointsAgainst": 291,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -34,
   "ppg": 17.1,
   "leagueRank": 156,
   "rating": -0.5,
   "ratingGames": 15,
   "confidence": 68,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.8,
   "playerId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "name": "Dilip Patel",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 263,
   "totalPointsAgainst": 299,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -36,
   "ppg": 17.5,
   "leagueRank": 150,
   "rating": -0.8,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168"
  },
  {
   "name": "Kurt Skalamera",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 200,
   "totalPointsAgainst": 238,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -38,
   "ppg": 16.7,
   "leagueRank": 164,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "04000200-8214-42ff-9a0d-2189ffaccd42"
  },
  {
   "name": "Franklin Lupianez",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 260,
   "totalPointsAgainst": 302,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -42,
   "ppg": 17.3,
   "leagueRank": 160,
   "rating": -0.6,
   "ratingGames": 15,
   "confidence": 68,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
   "playerId": "17caef8b-84d4-4052-9695-7c74190925a1"
  },
  {
   "name": "Dhruv Dobariya",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 252,
   "totalPointsAgainst": 299,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -47,
   "ppg": 16.8,
   "leagueRank": 168,
   "rating": -1.3,
   "ratingGames": 15,
   "confidence": 70,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 289,
   "totalPointsAgainst": 324,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 31.3,
   "diff": -35,
   "ppg": 18.1,
   "leagueRank": 143,
   "rating": 0.3,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "name": "Rick Olafsson",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 226,
   "totalPointsAgainst": 255,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 30.8,
   "diff": -29,
   "ppg": 17.4,
   "leagueRank": 155,
   "rating": 0.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "088a0cec-3f4c-4100-afd4-33d4462dc7e3"
  },
  {
   "name": "Steppan Konoplev",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 232,
   "totalPointsAgainst": 263,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 30.8,
   "diff": -31,
   "ppg": 17.8,
   "leagueRank": 152,
   "rating": -0.1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "8f076d51-25ba-4203-97f8-12194ba5b001"
  },
  {
   "name": "Andress Mims",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 215,
   "totalPointsAgainst": 261,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 30.8,
   "diff": -46,
   "ppg": 16.5,
   "leagueRank": 180,
   "rating": -2.5,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "name": "David Fiscella",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 123,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -15,
   "ppg": 17.6,
   "leagueRank": 161,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.8,
   "playerId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
  },
  {
   "name": "Kyle Martin",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 119,
   "totalPointsAgainst": 135,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -16,
   "ppg": 17,
   "leagueRank": 169,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.2,
   "playerId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3"
  },
  {
   "name": "Allan Orchard",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 122,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -19,
   "ppg": 17.4,
   "leagueRank": 165,
   "rating": -0.8,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "4f34c672-f457-467f-98d8-7d5d6c8add16"
  },
  {
   "name": "Ethan Fu",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 249,
   "totalPointsAgainst": 275,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 28.6,
   "diff": -26,
   "ppg": 17.8,
   "leagueRank": 170,
   "rating": -1.4,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "a8585e9c-872e-466c-9583-9680e557f757"
  },
  {
   "name": "Josh Fink",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 112,
   "totalPointsAgainst": 139,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -27,
   "ppg": 16,
   "leagueRank": 174,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.5,
   "playerId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
  },
  {
   "name": "Vincent Rigoglioso",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 110,
   "totalPointsAgainst": 137,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -27,
   "ppg": 15.7,
   "leagueRank": 183,
   "rating": -1.7,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "name": "Stephen Fredericksen",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 203,
   "totalPointsAgainst": 221,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 27.3,
   "diff": -18,
   "ppg": 18.5,
   "leagueRank": 145,
   "rating": -0.5,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "name": "Jimmy Duong",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 194,
   "totalPointsAgainst": 221,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 27.3,
   "diff": -27,
   "ppg": 17.6,
   "leagueRank": 179,
   "rating": -3.6,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea"
  },
  {
   "name": "Derek Livingston",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 204,
   "totalPointsAgainst": 224,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -20,
   "ppg": 17,
   "leagueRank": 172,
   "rating": 0.5,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.2,
   "playerId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "name": "Sean Diamond",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 136,
   "totalPointsAgainst": 157,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -21,
   "ppg": 17,
   "leagueRank": 185,
   "rating": -2.8,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "635ba257-e1ed-4db3-8303-5f241388437e"
  },
  {
   "name": "Chris Machuzak",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 199,
   "totalPointsAgainst": 223,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -24,
   "ppg": 16.6,
   "leagueRank": 178,
   "rating": -1.9,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "name": "Bill Violette",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 132,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -32,
   "ppg": 16.5,
   "leagueRank": 177,
   "rating": -1,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "63eeb91c-2c9c-4dbe-8662-58fbb1d95092"
  },
  {
   "name": "Franklin Yiu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 255,
   "totalPointsAgainst": 326,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -71,
   "ppg": 15.9,
   "leagueRank": 184,
   "rating": -1.1,
   "ratingGames": 16,
   "confidence": 69,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77"
  },
  {
   "name": "Erik Reilly",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 240,
   "totalPointsAgainst": 258,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 23.1,
   "diff": -18,
   "ppg": 18.5,
   "leagueRank": 146,
   "rating": 1.5,
   "ratingGames": 13,
   "confidence": 64,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.7,
   "playerId": "479815f2-1e14-4b96-9423-d99c15b2fe2b"
  },
  {
   "name": "Hua Lin",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 215,
   "totalPointsAgainst": 267,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 23.1,
   "diff": -52,
   "ppg": 16.5,
   "leagueRank": 176,
   "rating": -0.2,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.1,
   "playerId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "name": "Jaiveer Narwal",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 236,
   "totalPointsAgainst": 276,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 21.4,
   "diff": -40,
   "ppg": 16.9,
   "leagueRank": 175,
   "rating": -0.8,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "name": "Prashanth Koshy",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 87,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -16,
   "ppg": 17.4,
   "leagueRank": 181,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "5b619b72-b78a-49ba-872d-c64db6084a67"
  },
  {
   "name": "Uttam Purohit",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 83,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -18,
   "ppg": 16.6,
   "leagueRank": 186,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.9,
   "playerId": "5bec8637-0324-4af8-8084-3779e0f43521"
  },
  {
   "name": "Harsh Upadhyaya",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 252,
   "totalPointsAgainst": 301,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 20,
   "diff": -49,
   "ppg": 16.8,
   "leagueRank": 182,
   "rating": -1.4,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.6,
   "playerId": "3b9648e1-481c-4007-9932-d8df648f7bab"
  },
  {
   "name": "David Tabacco",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 218,
   "totalPointsAgainst": 309,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -91,
   "ppg": 14.5,
   "leagueRank": 203,
   "rating": -3.4,
   "ratingGames": 15,
   "confidence": 68,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "name": "Gianni Roman",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 3,
   "losses": 13,
   "pointsWon": 241,
   "totalPointsAgainst": 330,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 18.8,
   "diff": -89,
   "ppg": 15.1,
   "leagueRank": 196,
   "rating": -2.5,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "22294f41-611f-4e8f-962e-377e43209945"
  },
  {
   "name": "Daniel Hadley",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 92,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -32,
   "ppg": 15.3,
   "leagueRank": 197,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.7,
   "playerId": "23adcd68-130d-4176-b367-d3cd31260d21"
  },
  {
   "name": "Michael Gilbert",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 87,
   "totalPointsAgainst": 123,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -36,
   "ppg": 14.5,
   "leagueRank": 209,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a"
  },
  {
   "name": "Xilin Zhao",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 84,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "bfecc55a-a909-44da-8292-6b59b37a6043",
   "winPct": 16.7,
   "diff": -40,
   "ppg": 14,
   "leagueRank": 207,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Steve Hong",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 198,
   "totalPointsAgainst": 240,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -42,
   "ppg": 16.5,
   "leagueRank": 188,
   "rating": -2.4,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "name": "Ben Cortes",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 185,
   "totalPointsAgainst": 241,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -56,
   "ppg": 15.4,
   "leagueRank": 192,
   "rating": -2,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "name": "Xan Hong",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 162,
   "totalPointsAgainst": 245,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -83,
   "ppg": 13.5,
   "leagueRank": 212,
   "rating": -3.9,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "name": "Ian Diamond",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 200,
   "totalPointsAgainst": 269,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 15.4,
   "diff": -69,
   "ppg": 15.4,
   "leagueRank": 199,
   "rating": -3,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "f5a96445-7d1c-459b-8642-12a5d11554db"
  },
  {
   "name": "Didier Jean-Baptiste",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 118,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -20,
   "ppg": 16.9,
   "leagueRank": 187,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "3ea74039-550d-4a76-a514-e024aea9fd85"
  },
  {
   "name": "Christopher Monzon",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 117,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec",
   "winPct": 14.3,
   "diff": -21,
   "ppg": 16.7,
   "leagueRank": 190,
   "rating": -1.5,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Jesse Pettit",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 117,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 14.3,
   "diff": -28,
   "ppg": 16.7,
   "leagueRank": 191,
   "rating": -0.8,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "name": "Wen Jin",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 116,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "dd2384fe-4bb2-4085-a917-6e7989beb8a7",
   "winPct": 14.3,
   "diff": -29,
   "ppg": 16.6,
   "leagueRank": 189,
   "rating": -0.8,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Elias Eid",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 110,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "77f18b1c-db78-4d0e-b81d-6d1efde8bb08",
   "winPct": 14.3,
   "diff": -33,
   "ppg": 15.7,
   "leagueRank": 193,
   "rating": -0.7,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Josh Rito",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 2,
   "losses": 13,
   "pointsWon": 231,
   "totalPointsAgainst": 309,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 13.3,
   "diff": -78,
   "ppg": 15.4,
   "leagueRank": 205,
   "rating": -3.1,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "name": "Francis Thai",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 135,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "a78758b7-fe50-4865-b059-83a9d177e857",
   "winPct": 12.5,
   "diff": -31,
   "ppg": 16.9,
   "leagueRank": 200,
   "rating": -2.6,
   "ratingGames": 8,
   "confidence": 51,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "John Sallo",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 129,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0",
   "winPct": 12.5,
   "diff": -35,
   "ppg": 16.1,
   "leagueRank": 194,
   "rating": -1.5,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Saad Talat Siddiqui",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 116,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -48,
   "ppg": 14.5,
   "leagueRank": 208,
   "rating": -1.5,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": 0.6,
   "playerId": "ebfeb773-e8cd-4b6a-aafd-ee2772540168"
  },
  {
   "name": "Aaron Chan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 170,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 9.1,
   "diff": -59,
   "ppg": 15.5,
   "leagueRank": 210,
   "rating": -3.3,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "57666861-23d0-4809-9556-b646579f2fd6"
  },
  {
   "name": "Mario Contreras",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 194,
   "totalPointsAgainst": 246,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 11,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 8.3,
   "diff": -52,
   "ppg": 16.2,
   "leagueRank": 202,
   "rating": -1.8,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.8,
   "playerId": "323d96c3-4160-410b-96a5-87263e825f62"
  },
  {
   "name": "Frederick Cox",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 217,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 7.7,
   "diff": -54,
   "ppg": 16.7,
   "leagueRank": 198,
   "rating": -3.7,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.6,
   "playerId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "name": "Michael Vollmer",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 210,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 7.7,
   "diff": -61,
   "ppg": 16.2,
   "leagueRank": 195,
   "rating": -1.5,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.4,
   "playerId": "148387a8-f20a-44df-981d-0d9d2e7bf443"
  },
  {
   "name": "Wensheng Yue",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 207,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 7.7,
   "diff": -64,
   "ppg": 15.9,
   "leagueRank": 204,
   "rating": -2.4,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "name": "Big G",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 205,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 7.7,
   "diff": -66,
   "ppg": 15.8,
   "leagueRank": 201,
   "rating": -2.1,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.3,
   "playerId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "name": "Paul Chantler",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 197,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 7.7,
   "diff": -74,
   "ppg": 15.2,
   "leagueRank": 211,
   "rating": -2.6,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "b1f8fd31-d4ed-4824-9ae6-174e5e2f21c2"
  },
  {
   "name": "John Pineda",
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
   "leagueRank": 247,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "name": "Xavier Vazquez",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
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
   "leagueRank": 259,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "24bfad4a-0221-485a-8550-c0bdd971484a"
  },
  {
   "name": "Dan Carpenter",
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
   "leagueRank": 225,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2811dd08-7b50-455b-bc23-46b064a912eb"
  },
  {
   "name": "Ed Villaverde",
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
   "leagueRank": 260,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3edc72f0-c23d-4ad5-9842-cde023cd7514"
  },
  {
   "name": "Leon Li",
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
   "leagueRank": 241,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "name": "Rick Wickenheisser",
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
   "leagueRank": 262,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "name": "Vinay Mutt",
   "gender": "Male",
   "team": "PickleRage Union County",
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
   "leagueRank": 245,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
  },
  {
   "name": "Mike Konzelman",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
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
   "leagueRank": 239,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8f9053fa-7f27-4269-9b57-24af31d53222"
  },
  {
   "name": "Harlos Vizcarrondo",
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
   "leagueRank": 261,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9e348e82-13d0-4911-8efa-e5a2f7afded1"
  },
  {
   "name": "Corey Chen",
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
   "leagueRank": 226,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b549a93c-acec-4419-9e30-5d8375518d2d"
  },
  {
   "name": "Tom Hadler",
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
   "leagueRank": 236,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c5d07eb6-d276-4503-a077-c092e89c2ae8"
  },
  {
   "name": "Ryan Lehrfeld",
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
   "leagueRank": 240,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cfc63dad-7d45-4fa6-810d-5d3bbc7619ca"
  },
  {
   "name": "Rob Telles",
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
   "leagueRank": 256,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d27652b4-447c-4563-b89f-19a8e1e79568"
  },
  {
   "name": "Joel Steinbrunner",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
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
   "leagueRank": 255,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d6628146-5ecf-46fa-9ec2-4385171098fd"
  },
  {
   "name": "Andrew Ferraro",
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
   "leagueRank": 232,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d7bb9db3-39bc-4f9b-9c8c-f1415ef09a27"
  },
  {
   "name": "Richard Demeuse",
   "gender": "Male",
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
   "leagueRank": 230,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "name": "Samrat Sood",
   "gender": "Male",
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
   "leagueRank": 254,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "da802117-fbc3-4b98-9653-9924387691cc"
  },
  {
   "name": "Yongzhe Tian",
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
   "leagueRank": 257,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "name": "Jonathan Dong",
   "gender": "Male",
   "team": "PickleRage Union County",
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
   "leagueRank": 231,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "name": "Madhu Raghunathan",
   "gender": "Male",
   "team": "Allstar Pickler",
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
   "leagueRank": 249,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f008538f-037a-4850-ad1d-fd9108382a81"
  },
  {
   "name": "Jonathan Lugtu",
   "gender": "Male",
   "team": "Allstar Pickler",
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
   "leagueRank": 244,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f46a315a-aae5-44b5-ab45-6949706396fd"
  },
  {
   "name": "Brian Criscuolo",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
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
   "leagueRank": 229,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f59307d0-0495-421c-8cee-28c2e2b56bcf"
  },
  {
   "name": "Nicholas Brow",
   "gender": "Male",
   "team": "Bounce Tempest",
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
   "leagueRank": 223,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fdbf0c0b-a961-47e4-abbe-5a56ad7a7bec"
  },
  {
   "name": "Ian Kohn",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 76,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -29,
   "ppg": 15.2,
   "leagueRank": 213,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -3,
   "strengthOfOpponents": 0.1,
   "playerId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "name": "Nitin Chawke",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 54,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "e1859a0e-b6a3-451b-a14e-f4d978fc520d",
   "winPct": 0,
   "diff": -30,
   "ppg": 13.5,
   "leagueRank": 221,
   "rating": -2.7,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "John Coyle",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 87,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -39,
   "ppg": 14.5,
   "leagueRank": 214,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.8,
   "playerId": "54d78d2c-c0d7-42c0-aef4-567311f2e51e"
  },
  {
   "name": "Cory Mintz",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 78,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -48,
   "ppg": 13,
   "leagueRank": 218,
   "rating": -2.7,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.3,
   "playerId": "33feb337-f2ab-4e6d-819b-9535ec743685"
  },
  {
   "name": "Tayon Hart",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 97,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -50,
   "ppg": 13.9,
   "leagueRank": 216,
   "rating": -3.2,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "545f9968-fc0a-420b-ba42-db16c6e1f884"
  },
  {
   "name": "Buyi Zhang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 112,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -56,
   "ppg": 14,
   "leagueRank": 215,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.4,
   "playerId": "abd55992-7237-4a92-817d-3d39388369c9"
  },
  {
   "name": "Siva Indupuru",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 216,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 13,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 0,
   "diff": -57,
   "ppg": 16.6,
   "leagueRank": 206,
   "rating": -1.1,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.8,
   "playerId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "name": "Bing Zhu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 105,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "e6f1ad88-f91d-41ca-9771-833b1f38eff3",
   "winPct": 0,
   "diff": -63,
   "ppg": 13.1,
   "leagueRank": 219,
   "rating": -2.9,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Pedro Delgado",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 0,
   "losses": 11,
   "pointsWon": 135,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 11,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -96,
   "ppg": 12.3,
   "leagueRank": 220,
   "rating": -4.8,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "3e2aac0c-7c01-4c71-a288-900b54059019"
  },
  {
   "name": "Peter Chen",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 174,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 13,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -99,
   "ppg": 13.4,
   "leagueRank": 217,
   "rating": -3.5,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.6,
   "playerId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  }
 ],
 "teams": [
  {
   "name": "Montville",
   "w": 2,
   "l": 0,
   "pf": 1335,
   "pa": 1128,
   "gw": 50,
   "gl": 14,
   "diff": 207,
   "gameDiff": 36,
   "power": 1.4,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     50,
     14
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball HQ",
   "w": 2,
   "l": 0,
   "pf": 1348,
   "pa": 1113,
   "gw": 48,
   "gl": 16,
   "diff": 235,
   "gameDiff": 32,
   "power": 1.1,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     48,
     16
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 2,
   "l": 0,
   "pf": 1284,
   "pa": 1121,
   "gw": 47,
   "gl": 17,
   "diff": 163,
   "gameDiff": 30,
   "power": 0.4,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     47,
     17
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 2,
   "l": 0,
   "pf": 1273,
   "pa": 1138,
   "gw": 44,
   "gl": 20,
   "diff": 135,
   "gameDiff": 24,
   "power": 0.6,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     44,
     20
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 2,
   "l": 0,
   "pf": 1250,
   "pa": 1103,
   "gw": 43,
   "gl": 21,
   "diff": 147,
   "gameDiff": 22,
   "power": 0.8,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     43,
     21
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Picklr Newtown",
   "w": 2,
   "l": 0,
   "pf": 1266,
   "pa": 1140,
   "gw": 42,
   "gl": 22,
   "diff": 126,
   "gameDiff": 20,
   "power": 0.3,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     42,
     22
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 1,
   "l": 0,
   "pf": 620,
   "pa": 588,
   "gw": 16,
   "gl": 16,
   "diff": 32,
   "gameDiff": 0,
   "power": 0.5,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     16,
     16
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "PickleRage Union County",
   "w": 1,
   "l": 0,
   "pf": 605,
   "pa": 593,
   "gw": 16,
   "gl": 16,
   "diff": 12,
   "gameDiff": 0,
   "power": -0.4,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     16,
     16
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 1,
   "l": 1,
   "pf": 1281,
   "pa": 1184,
   "gw": 40,
   "gl": 24,
   "diff": 97,
   "gameDiff": 16,
   "power": 0.4,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     40,
     24
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Lehigh Valley",
   "w": 1,
   "l": 1,
   "pf": 1291,
   "pa": 1164,
   "gw": 36,
   "gl": 28,
   "diff": 127,
   "gameDiff": 8,
   "power": 0.6,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     36,
     28
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 1,
   "l": 1,
   "pf": 1221,
   "pa": 1164,
   "gw": 34,
   "gl": 30,
   "diff": 57,
   "gameDiff": 4,
   "power": 0.2,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     34,
     30
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Tempest",
   "w": 1,
   "l": 1,
   "pf": 1190,
   "pa": 1174,
   "gw": 32,
   "gl": 32,
   "diff": 16,
   "gameDiff": 0,
   "power": 0.2,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     32,
     32
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hamilton",
   "w": 0,
   "l": 2,
   "pf": 1169,
   "pa": 1264,
   "gw": 24,
   "gl": 40,
   "diff": -95,
   "gameDiff": -16,
   "power": -0.2,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     24,
     40
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 0,
   "l": 2,
   "pf": 1129,
   "pa": 1236,
   "gw": 24,
   "gl": 40,
   "diff": -107,
   "gameDiff": -16,
   "power": -0.2,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     24,
     40
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 0,
   "l": 2,
   "pf": 1105,
   "pa": 1261,
   "gw": 23,
   "gl": 41,
   "diff": -156,
   "gameDiff": -18,
   "power": -0.5,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     23,
     41
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 0,
   "l": 2,
   "pf": 1140,
   "pa": 1303,
   "gw": 20,
   "gl": 44,
   "diff": -163,
   "gameDiff": -24,
   "power": -0.2,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     20,
     44
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Dill Dinkers Newport",
   "w": 0,
   "l": 2,
   "pf": 1079,
   "pa": 1318,
   "gw": 17,
   "gl": 47,
   "diff": -239,
   "gameDiff": -30,
   "power": -1.2,
   "powerRank": 6,
   "pod": 2,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     17,
     47
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Allstar Pickler",
   "w": 0,
   "l": 2,
   "pf": 1049,
   "pa": 1368,
   "gw": 11,
   "gl": 53,
   "diff": -319,
   "gameDiff": -42,
   "power": -1.6,
   "powerRank": 7,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     11,
     53
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Dill Dinkers Freehold",
   "w": 0,
   "l": 2,
   "pf": 1063,
   "pa": 1338,
   "gw": 9,
   "gl": 55,
   "diff": -275,
   "gameDiff": -46,
   "power": -1.3,
   "powerRank": 6,
   "pod": 2,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     9,
     55
    ],
    "female": [
     0,
     0
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Kurt Skalamera",
   "b": "Jason Mcmanmon",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 4,
   "avgExpected": -1.9,
   "aId": "04000200-8214-42ff-9a0d-2189ffaccd42",
   "bId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce"
  },
  {
   "a": "Ayon Codner",
   "b": "Eric Ruiz",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 7.3,
   "avgExpected": 2.7,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527"
  },
  {
   "a": "Kevin Lew",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 2,
   "avgExpected": -2.4,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "a": "Pritpal Singh",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 4,
   "avgExpected": -0.2,
   "aId": "631b24ae-9bc2-4db3-964b-33f86933021e",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Mark Waters",
   "b": "Matthew Inzerillo",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 7.3,
   "avgExpected": 3.5,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "a": "Franklin Lupianez",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.4,
   "avgActual": -0.7,
   "avgExpected": -3.6,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Dennis Yap",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7.8,
   "avgExpected": 5,
   "aId": "45ea05c6-ef48-4b0a-9f71-a640be038d08",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.3,
   "avgExpected": -0.3,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Ashish Kumar",
   "b": "Pritpal Singh",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 9,
   "avgExpected": 6,
   "aId": "5df02573-21d4-40ea-8b41-f81372a474b3",
   "bId": "631b24ae-9bc2-4db3-964b-33f86933021e"
  },
  {
   "a": "Stephen Fredericksen",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 0.8,
   "avgExpected": -1.6,
   "aId": "622cb64f-dd0c-4bff-8c19-81d287977c53",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Alessio Muscara",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 8.3,
   "avgExpected": 5.6,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Alessio Muscara",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 6.3,
   "avgExpected": 3.6,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Michael Barndt",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 4.5,
   "avgExpected": 2.2,
   "aId": "50853eee-28e0-4380-b379-35935eb2115a",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "Umang Pathak",
   "b": "Ramam Durba",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5.8,
   "avgExpected": 3.4,
   "aId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12",
   "bId": "93280d5d-b0c8-49cd-94fe-0350f3e2dac5"
  },
  {
   "a": "Brandon Dejesus",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 4.3,
   "avgExpected": 1.6,
   "aId": "d50feac2-f147-47d2-8930-99b21b2842ba",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Erik Reilly",
   "b": "Ben Cortes",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1,
   "avgActual": -0.2,
   "avgExpected": -2.3,
   "aId": "479815f2-1e14-4b96-9423-d99c15b2fe2b",
   "bId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "a": "Pedro Delgado",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 1,
   "avgActual": -4.7,
   "avgExpected": -7.1,
   "aId": "3e2aac0c-7c01-4c71-a288-900b54059019",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Angelo Disipio",
   "b": "Steven Hummel",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 5.7,
   "avgExpected": 3.4,
   "aId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Ethan Fu",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": 0,
   "avgExpected": -2.4,
   "aId": "a8585e9c-872e-466c-9583-9680e557f757",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Dilip Patel",
   "b": "Jaiveer Narwal",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": 0.7,
   "avgExpected": -1.7,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "a": "Dilip Patel",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 1,
   "avgExpected": -1.1,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Kevin Tran",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 7,
   "avgExpected": 5,
   "aId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "Christopher Hendrickson",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 5,
   "avgExpected": 3.4,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6"
  },
  {
   "a": "Paul Perumaly",
   "b": "Daniel Borgia",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3,
   "avgExpected": 1.1,
   "aId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Jesse Mynahan",
   "b": "Cesar Santamaria",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.8,
   "avgExpected": 1.1,
   "aId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Michael Vollmer",
   "b": "Siva Indupuru",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -2,
   "avgExpected": -3.6,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -0.7,
   "avgExpected": -2.1,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Ayon Codner",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6,
   "avgExpected": 4.8,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Kevin Tran",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 7,
   "avgExpected": 5.8,
   "aId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "Matthew Inzerillo",
   "b": "Neale Smith",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 5.7,
   "avgExpected": 4.6,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Uzoma Nwankwo",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 5,
   "avgExpected": 3.9,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "a": "John Fallone",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.3,
   "avgExpected": 2.5,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Bryan Mccourt",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.5,
   "avgExpected": 2.7,
   "aId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Dhruv Dobariya",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.5,
   "avgExpected": -1.3,
   "aId": "ac44fd3c-0c87-47aa-bf26-4333b632f524",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Mathew Yang",
   "b": "Angelo Disipio",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.2,
   "aId": "12ec758b-f05d-40ec-b082-a76f07cbe792",
   "bId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb"
  },
  {
   "a": "Craig Butler",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.5,
   "avgExpected": -1,
   "aId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "Eric Berlinger",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -4,
   "avgExpected": -4.5,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Erik Reilly",
   "b": "Wensheng Yue",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.5,
   "aId": "479815f2-1e14-4b96-9423-d99c15b2fe2b",
   "bId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "a": "Shawn Gold",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.2,
   "avgExpected": -0.5,
   "aId": "e2d70cc7-b655-43d5-a059-063bfe722001",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 4,
   "avgExpected": 3.8,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "a": "Kevin Lew",
   "b": "Erik Reilly",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -0.5,
   "avgExpected": -0.6,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "479815f2-1e14-4b96-9423-d99c15b2fe2b"
  },
  {
   "a": "Andrew Neave",
   "b": "Jordan Demcher",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 4.3,
   "avgExpected": 4.2,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "6d1beb10-bd5c-456f-95b5-1823752e8c62"
  },
  {
   "a": "Jeff Laniado",
   "b": "Cesar Santamaria",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.8,
   "avgExpected": 1.5,
   "aId": "06d52e99-941a-4ced-9968-f56e6075105a",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -1.7,
   "avgExpected": -1.7,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Eric Berlinger",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -1.7,
   "avgExpected": -1.7,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Dennis Yap",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 4,
   "avgExpected": 4.1,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "45ea05c6-ef48-4b0a-9f71-a640be038d08"
  },
  {
   "a": "John Manuzza",
   "b": "Cesar Santamaria",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 3.3,
   "avgExpected": 3.4,
   "aId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Jason Mcmanmon",
   "b": "Shawn Gold",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.4,
   "aId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce",
   "bId": "e2d70cc7-b655-43d5-a059-063bfe722001"
  },
  {
   "a": "Jason Mcmanmon",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.7,
   "aId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "John Fallone",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -3,
   "avgExpected": -2.8,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Franklin Yiu",
   "b": "Brandon Fulford",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -3.2,
   "avgExpected": -3.1,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "a": "Christopher Hendrickson",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 5,
   "avgExpected": 5.3,
   "aId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Jimmy Ramja",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.7,
   "avgExpected": 3,
   "aId": "ade57877-7c11-4a46-88bf-789a50906901",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Eric Ruiz",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 3.3,
   "avgExpected": 3.4,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Umang Pathak",
   "b": "John Manuzza",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 5,
   "avgExpected": 5.2,
   "aId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12",
   "bId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "a": "Jason Feldman",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 5.3,
   "avgExpected": 5.6,
   "aId": "5636cdc5-7a65-4202-abbb-5999eee35ab3",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "a": "Josh Rito",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -5,
   "avgExpected": -4.6,
   "aId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Hua Lin",
   "b": "Wensheng Yue",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -5.5,
   "avgExpected": -5,
   "aId": "6b263caa-80f7-40d2-9248-559f91ffe71e",
   "bId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "a": "Dan Ruble",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -0.5,
   "avgExpected": -0.1,
   "aId": "d411862a-491a-47dc-93a8-4a12f821afd7",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.3,
   "avgExpected": 1.8,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Mark Waters",
   "b": "Jimmy Shapiro",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -0.3,
   "avgExpected": 0.4,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Varun Gurram",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 1.3,
   "avgExpected": 2,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Dennis Yap",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.5,
   "avgExpected": 3.4,
   "aId": "45ea05c6-ef48-4b0a-9f71-a640be038d08",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Jesse Mynahan",
   "b": "Brandon Tsang",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.5,
   "avgExpected": 0.5,
   "aId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb",
   "bId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "a": "Chris Machuzak",
   "b": "Andress Mims",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -5.3,
   "avgExpected": -4.1,
   "aId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7",
   "bId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "a": "Christopher Hendrickson",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 4.3,
   "avgExpected": 5.4,
   "aId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "David Brandolph",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 0,
   "avgExpected": 1.5,
   "aId": "be10853a-1f2c-4b56-8fd7-902ddc686401",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Ayon Codner",
   "b": "Rohit Mankotia",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 0.3,
   "avgExpected": 1.8,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 1.5,
   "avgExpected": 3,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Ethan Fu",
   "b": "Ken Weinstein",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -3.3,
   "avgExpected": -1.7,
   "aId": "a8585e9c-872e-466c-9583-9680e557f757",
   "bId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "a": "Bennett Pereira",
   "b": "Sushil Rijhwani",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2,
   "avgExpected": -0.3,
   "aId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "bId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "a": "Mario Contreras",
   "b": "Jonathan Carter",
   "team": "Jersey Devil",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -7.5,
   "avgExpected": -6,
   "aId": "323d96c3-4160-410b-96a5-87263e825f62",
   "bId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "a": "Franklin Yiu",
   "b": "Gianni Roman",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -6.5,
   "avgExpected": -4.9,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "22294f41-611f-4e8f-962e-377e43209945"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1.5,
   "avgExpected": 0.2,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Andrew Neave",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.8,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0"
  },
  {
   "a": "Michael Vollmer",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -5.7,
   "avgExpected": -3.5,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Dilip Patel",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -6.3,
   "avgExpected": -3.9,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168"
  },
  {
   "a": "Aaron Chan",
   "b": "Jaiveer Narwal",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -7.3,
   "avgExpected": -4.8,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "a": "Derek Livingston",
   "b": "Steve Hong",
   "team": "Jersey Devil",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -5.7,
   "avgExpected": -3.4,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Siva Indupuru",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -7.7,
   "avgExpected": -4.5,
   "aId": "5f264528-efdb-4bda-88ed-8003f98c1c9b",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Jonathan Carter",
   "b": "Brandon Dejesus",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -0.5,
   "avgExpected": 2.4,
   "aId": "33fe293d-5913-41af-8f89-4a431ed92ab7",
   "bId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -8,
   "avgExpected": -4.3,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Daniel Borgia",
   "b": "David Brandolph",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.7,
   "avgActual": 0.3,
   "avgExpected": 4.3,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Monroe",
   "away": "Premiere",
   "time": "2026-08-25T19:00:00",
   "complete": true,
   "homePoints": 536,
   "awayPoints": 647,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "John Coyle"
     ],
     "a": [
      "Jason Feldman",
      "Matthew Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jim Boy Baring",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tayon Hart",
      "Kurt Skalamera"
     ],
     "a": [
      "Nacio Marshall",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Jason Mcmanmon",
      "Shawn Gold"
     ],
     "a": [
      "Gary White",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Cory Mintz"
     ],
     "a": [
      "Jason Feldman",
      "Nacio Marshall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Bogatyrev",
      "Shawn Gold"
     ],
     "a": [
      "Jim Boy Baring",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tayon Hart",
      "John Coyle"
     ],
     "a": [
      "Matthew Schwartz",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Jacob Rosengarten"
     ],
     "a": [
      "Gary White",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tayon Hart",
      "Kurt Skalamera"
     ],
     "a": [
      "Matthew Schwartz",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shawn Gold",
      "David Bogatyrev"
     ],
     "a": [
      "Nacio Marshall",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Jacob Rosengarten"
     ],
     "a": [
      "Jim Boy Baring",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Coyle",
      "Stephen Fredericksen"
     ],
     "a": [
      "Joseph Lynskey",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "David Bogatyrev"
     ],
     "a": [
      "Jim Boy Baring",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Nacio Marshall",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shawn Gold",
      "Tayon Hart"
     ],
     "a": [
      "Matthew Schwartz",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kurt Skalamera",
      "Cory Mintz"
     ],
     "a": [
      "Jason Feldman",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Bogatyrev",
      "Cory Mintz"
     ],
     "a": [
      "Jason Feldman",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Kurt Skalamera"
     ],
     "a": [
      "Matthew Schwartz",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tayon Hart",
      "John Coyle"
     ],
     "a": [
      "Nacio Marshall",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jim Boy Baring",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shawn Gold",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Nacio Marshall",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cory Mintz",
      "Kurt Skalamera"
     ],
     "a": [
      "Joseph Lynskey",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Stephen Fredericksen"
     ],
     "a": [
      "Matthew Schwartz",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "John Coyle"
     ],
     "a": [
      "Jim Boy Baring",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jim Boy Baring",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jason Mcmanmon",
      "Kurt Skalamera"
     ],
     "a": [
      "Matthew Schwartz",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Nacio Marshall",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tayon Hart",
      "Cory Mintz"
     ],
     "a": [
      "Michael Mazzola",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Stephen Fredericksen"
     ],
     "a": [
      "Nacio Marshall",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Tayon Hart"
     ],
     "a": [
      "Matthew Schwartz",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jacob Rosengarten",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jim Boy Baring",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "John Coyle",
      "Cory Mintz"
     ],
     "a": [
      "Jason Feldman",
      "Daniel Antonelli"
     ]
    }
   ],
   "subs": [
    "Michael Mazzola",
    "Matthew Schwartz",
    "Jim Boy Baring",
    "Nacio Marshall"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "PickleRage Union County",
   "away": "Flemington",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 605,
   "awayPoints": 593,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Andy Knight",
      "Francis Thai"
     ],
     "a": [
      "Eric Berlinger",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jack Barry",
      "Shreyas Suresh Hassan"
     ],
     "a": [
      "Craig Butler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mark Bernstein",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sean Diamond",
      "Ren Macalalag"
     ],
     "a": [
      "David Tabacco",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andy Knight",
      "Francis Thai"
     ],
     "a": [
      "Eric Berlinger",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jack Barry",
      "Shreyas Suresh Hassan"
     ],
     "a": [
      "Craig Butler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mark Bernstein",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sean Diamond",
      "Ren Macalalag"
     ],
     "a": [
      "Franklin Lupianez",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shreyas Suresh Hassan",
      "Dan Yang"
     ],
     "a": [
      "Craig Butler",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jack Barry",
      "Francis Thai"
     ],
     "a": [
      "Eric Berlinger",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ren Macalalag",
      "Andy Knight"
     ],
     "a": [
      "David Shapiro",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sean Diamond",
      "Mark Bernstein"
     ],
     "a": [
      "John Fallone",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shreyas Suresh Hassan",
      "Dan Yang"
     ],
     "a": [
      "Roberto Marcillo",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jack Barry",
      "Francis Thai"
     ],
     "a": [
      "Josh Rito",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ren Macalalag",
      "Andy Knight"
     ],
     "a": [
      "Franklin Lupianez",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sean Diamond",
      "Mark Bernstein"
     ],
     "a": [
      "David Tabacco",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sean Diamond",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mark Bernstein",
      "Jack Barry"
     ],
     "a": [
      "David Tabacco",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ren Macalalag",
      "Francis Thai"
     ],
     "a": [
      "John Fallone",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shreyas Suresh Hassan",
      "Andy Knight"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sean Diamond",
      "Dan Yang"
     ],
     "a": [
      "Craig Butler",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mark Bernstein",
      "Jack Barry"
     ],
     "a": [
      "David Tabacco",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ren Macalalag",
      "Francis Thai"
     ],
     "a": [
      "John Fallone",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shreyas Suresh Hassan",
      "Andy Knight"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sean Diamond",
      "Andy Knight"
     ],
     "a": [
      "John Fallone",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jack Barry",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mark Bernstein",
      "Ren Macalalag"
     ],
     "a": [
      "David Tabacco",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shreyas Suresh Hassan",
      "Francis Thai"
     ],
     "a": [
      "Franklin Lupianez",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andy Knight",
      "Sean Diamond"
     ],
     "a": [
      "Craig Butler",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jack Barry",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 2,
     "h": [
      "Mark Bernstein",
      "Ren Macalalag"
     ],
     "a": [
      "David Tabacco",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Francis Thai",
      "Shreyas Suresh Hassan"
     ],
     "a": [
      "Eric Berlinger",
      "Franklin Lupianez"
     ]
    }
   ],
   "subs": [
    "Mark Bernstein",
    "Roberto Marcillo",
    "Francis Thai"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Allstar Pickler",
   "away": "Home Court",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 564,
   "awayPoints": 693,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elias Eid",
      "Xilin Zhao"
     ],
     "a": [
      "Bryan Mccourt",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Wen Jin",
      "Allan Orchard"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Franklin Yiu",
      "Gianni Roman"
     ],
     "a": [
      "Robert Huntley",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Brandon Fulford",
      "Sean Majury"
     ],
     "a": [
      "Marc Kunesch",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Wen Jin",
      "Allan Orchard"
     ],
     "a": [
      "Bryan Mccourt",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Elias Eid",
      "Xilin Zhao"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Sean Majury"
     ],
     "a": [
      "Robert Huntley",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Gianni Roman"
     ],
     "a": [
      "Marc Kunesch",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gianni Roman",
      "Sean Majury"
     ],
     "a": [
      "Bryan Mccourt",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elias Eid",
      "Peter Chen"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Franklin Yiu",
      "Allan Orchard"
     ],
     "a": [
      "Robert Huntley",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Wen Jin"
     ],
     "a": [
      "Dennis Yap",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elias Eid",
      "Peter Chen"
     ],
     "a": [
      "Bryan Mccourt",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "Brandon Fulford",
      "Wen Jin"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Franklin Yiu",
      "Allan Orchard"
     ],
     "a": [
      "Robert Huntley",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sean Majury",
      "Gianni Roman"
     ],
     "a": [
      "Dennis Yap",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Elias Eid",
      "Wen Jin"
     ],
     "a": [
      "Bryan Mccourt",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sean Majury",
      "Allan Orchard"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Xilin Zhao",
      "Gianni Roman"
     ],
     "a": [
      "Michael Vincent",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Franklin Yiu"
     ],
     "a": [
      "Robert Huntley",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Peter Chen",
      "Wen Jin"
     ],
     "a": [
      "Bryan Mccourt",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sean Majury",
      "Allan Orchard"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Xilin Zhao",
      "Gianni Roman"
     ],
     "a": [
      "Michael Vincent",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Franklin Yiu"
     ],
     "a": [
      "Robert Huntley",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brandon Fulford",
      "Elias Eid"
     ],
     "a": [
      "Bryan Mccourt",
      "Ricky Jutkiewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Peter Chen",
      "Gianni Roman"
     ],
     "a": [
      "Kevin Sheehan",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Xilin Zhao",
      "Wen Jin"
     ],
     "a": [
      "Marc Kunesch",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 33,
     "as": 31,
     "h": [
      "Sean Majury",
      "Franklin Yiu"
     ],
     "a": [
      "Jacob Yoo",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Peter Chen",
      "Xilin Zhao"
     ],
     "a": [
      "Bryan Mccourt",
      "Ricky Jutkiewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elias Eid",
      "Gianni Roman"
     ],
     "a": [
      "Dennis Yap",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Brandon Fulford",
      "Allan Orchard"
     ],
     "a": [
      "Marc Kunesch",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Sean Majury"
     ],
     "a": [
      "Jacob Yoo",
      "Robert Huntley"
     ]
    }
   ],
   "subs": [
    "Wen Jin",
    "Elias Eid",
    "Xilin Zhao"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball HQ",
   "away": "Dill Dinkers Freehold",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 692,
   "awayPoints": 509,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Noah Ludwigsen",
      "David Wheeler"
     ],
     "a": [
      "Erik Reilly",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jose Campos",
      "Kyle Korman"
     ],
     "a": [
      "Kevin Lew",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Niman Ahmeti",
      "Jimmy Ramja"
     ],
     "a": [
      "Michael Vollmer",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ],
     "a": [
      "Hua Lin",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Noah Ludwigsen",
      "David Wheeler"
     ],
     "a": [
      "Erik Reilly",
      "Kevin Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nesip Cengiz",
      "Niman Ahmeti"
     ],
     "a": [
      "Michael Vollmer",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kyle Korman",
      "Jimmy Ramja"
     ],
     "a": [
      "Siva Indupuru",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christopher Hendrickson",
      "Luca Hendrickson"
     ],
     "a": [
      "Hua Lin",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Noah Ludwigsen",
      "Luca Hendrickson"
     ],
     "a": [
      "Erik Reilly",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "David Wheeler",
      "Kyle Korman"
     ],
     "a": [
      "Kevin Lew",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jose Campos",
      "Nesip Cengiz"
     ],
     "a": [
      "Michael Vollmer",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ],
     "a": [
      "Wensheng Yue",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Noah Ludwigsen",
      "Luca Hendrickson"
     ],
     "a": [
      "Erik Reilly",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kyle Korman",
      "David Wheeler"
     ],
     "a": [
      "Kevin Lew",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ],
     "a": [
      "Ben Cortes",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jose Campos",
      "Niman Ahmeti"
     ],
     "a": [
      "Siva Indupuru",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Noah Ludwigsen",
      "Christopher Hendrickson"
     ],
     "a": [
      "Erik Reilly",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jimmy Ramja",
      "David Wheeler"
     ],
     "a": [
      "Kevin Lew",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Luca Hendrickson",
      "Kyle Korman"
     ],
     "a": [
      "Michael Vollmer",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nesip Cengiz",
      "Jose Campos"
     ],
     "a": [
      "Pedro Delgado",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Noah Ludwigsen",
      "Christopher Hendrickson"
     ],
     "a": [
      "Erik Reilly",
      "Kevin Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Luca Hendrickson",
      "Kyle Korman"
     ],
     "a": [
      "Michael Vollmer",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jimmy Ramja",
      "David Wheeler"
     ],
     "a": [
      "Wensheng Yue",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nesip Cengiz",
      "Niman Ahmeti"
     ],
     "a": [
      "Pedro Delgado",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Noah Ludwigsen",
      "Jimmy Ramja"
     ],
     "a": [
      "Erik Reilly",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 3,
     "h": [
      "Luca Hendrickson",
      "David Wheeler"
     ],
     "a": [
      "Kevin Lew",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jose Campos",
      "Niman Ahmeti"
     ],
     "a": [
      "Michael Vollmer",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christopher Hendrickson",
      "Kyle Korman"
     ],
     "a": [
      "Hua Lin",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Noah Ludwigsen",
      "Jimmy Ramja"
     ],
     "a": [
      "Kevin Lew",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kyle Korman",
      "Niman Ahmeti"
     ],
     "a": [
      "Michael Vollmer",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Luca Hendrickson",
      "Jose Campos"
     ],
     "a": [
      "Wensheng Yue",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christopher Hendrickson",
      "David Wheeler"
     ],
     "a": [
      "Hua Lin",
      "Siva Indupuru"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Dill Dinkers Newport",
   "away": "Picklr Newtown",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 544,
   "awayPoints": 663,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Paul Chantler"
     ],
     "a": [
      "Angelo Disipio",
      "Arnold Poblete"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Ian Diamond"
     ],
     "a": [
      "Gary Garretson",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Keith Richard",
      "Bill Violette"
     ],
     "a": [
      "Steven Hummel",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Xan Hong"
     ],
     "a": [
      "Mike Leach",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Ian Diamond"
     ],
     "a": [
      "Michael Johnson",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Paul Chantler"
     ],
     "a": [
      "Steven Hummel",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Keith Richard",
      "Xan Hong"
     ],
     "a": [
      "Jimmy Duong",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Bill Violette"
     ],
     "a": [
      "Mike Leach",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Aleks Mirkovic",
      "Keith Richard"
     ],
     "a": [
      "Jimmy Duong",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Steppan Konoplev"
     ],
     "a": [
      "Steven Hummel",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Paul Chantler"
     ],
     "a": [
      "Angelo Disipio",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Xan Hong",
      "Bill Violette"
     ],
     "a": [
      "Arnold Poblete",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Keith Richard",
      "Ian Diamond"
     ],
     "a": [
      "Gary Garretson",
      "Michael Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aleks Mirkovic",
      "Paul Chantler"
     ],
     "a": [
      "Jimmy Duong",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Steppan Konoplev",
      "Xan Hong"
     ],
     "a": [
      "Mike Leach",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Bill Violette"
     ],
     "a": [
      "Angelo Disipio",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Keith Richard",
      "Paul Chantler"
     ],
     "a": [
      "Mike Leach",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Ian Diamond"
     ],
     "a": [
      "Steven Hummel",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Xan Hong"
     ],
     "a": [
      "Arnold Poblete",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Steppan Konoplev",
      "Bill Violette"
     ],
     "a": [
      "Gary Garretson",
      "Michael Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Keith Richard"
     ],
     "a": [
      "Angelo Disipio",
      "Arnold Poblete"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rick Olafsson",
      "Aleks Mirkovic"
     ],
     "a": [
      "Mike Leach",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 3,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Xan Hong"
     ],
     "a": [
      "Gary Garretson",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Paul Chantler",
      "Bill Violette"
     ],
     "a": [
      "Jimmy Duong",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Keith Richard"
     ],
     "a": [
      "Arnold Poblete",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Aleks Mirkovic"
     ],
     "a": [
      "Angelo Disipio",
      "Steven Hummel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Paul Chantler",
      "Xan Hong"
     ],
     "a": [
      "Jimmy Duong",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Bill Violette"
     ],
     "a": [
      "Michael Johnson",
      "Mike Leach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Paul Chantler"
     ],
     "a": [
      "Arnold Poblete",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Rick Olafsson",
      "Ian Diamond"
     ],
     "a": [
      "Jimmy Duong",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Keith Richard",
      "Bill Violette"
     ],
     "a": [
      "Steven Hummel",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aleks Mirkovic",
      "Xan Hong"
     ],
     "a": [
      "Angelo Disipio",
      "Michael Johnson"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Bounce Malvern",
   "away": "Bounce Tempest",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 639,
   "awayPoints": 535,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dan Ladislaw",
      "Jordan Demcher"
     ],
     "a": [
      "Daniel Borgia",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matt Enz",
      "Harvey Mitchell"
     ],
     "a": [
      "Paul Perumaly",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ryan Hathaway",
      "Andrew Neave"
     ],
     "a": [
      "David Brandolph",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jr Burrs",
      "Leland Weinert"
     ],
     "a": [
      "Ethan Fu",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Leland Weinert",
      "Matheus Korndoerfer"
     ],
     "a": [
      "David Brandolph",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jr Burrs",
      "Ryan Hathaway"
     ],
     "a": [
      "Ken Weinstein",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Harrison Bohrer",
      "Graham Heavenrich"
     ],
     "a": [
      "Jimmy Lee",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jordan Demcher",
      "Andrew Neave"
     ],
     "a": [
      "Paul Perumaly",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Graham Heavenrich",
      "Harvey Mitchell"
     ],
     "a": [
      "David Brandolph",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harrison Bohrer",
      "Ryan Hathaway"
     ],
     "a": [
      "Jimmy Lee",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matt Enz",
      "Andrew Neave"
     ],
     "a": [
      "Paul Perumaly",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dan Ladislaw",
      "Leland Weinert"
     ],
     "a": [
      "Daniel Borgia",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jr Burrs",
      "Graham Heavenrich"
     ],
     "a": [
      "Jimmy Lee",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jordan Demcher",
      "Andrew Neave"
     ],
     "a": [
      "Paul Perumaly",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dan Ladislaw",
      "Matheus Korndoerfer"
     ],
     "a": [
      "Daniel Borgia",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matt Enz",
      "Leland Weinert"
     ],
     "a": [
      "David Brandolph",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ryan Hathaway",
      "Matheus Korndoerfer"
     ],
     "a": [
      "David Brandolph",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jordan Demcher",
      "Graham Heavenrich"
     ],
     "a": [
      "Daniel Borgia",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harrison Bohrer",
      "Harvey Mitchell"
     ],
     "a": [
      "Kyle Martin",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Matt Enz",
      "Andrew Neave"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harvey Mitchell",
      "Jordan Demcher"
     ],
     "a": [
      "Daniel Borgia",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Harrison Bohrer",
      "Dan Ladislaw"
     ],
     "a": [
      "David Brandolph",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jr Burrs",
      "Matt Enz"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Matheus Korndoerfer",
      "Leland Weinert"
     ],
     "a": [
      "Ken Weinstein",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Harvey Mitchell",
      "Dan Ladislaw"
     ],
     "a": [
      "David Brandolph",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jr Burrs",
      "Matheus Korndoerfer"
     ],
     "a": [
      "Paul Perumaly",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Hathaway",
      "Leland Weinert"
     ],
     "a": [
      "Daniel Borgia",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Graham Heavenrich",
      "Andrew Neave"
     ],
     "a": [
      "Jared Rapoport",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jordan Demcher",
      "Ryan Hathaway"
     ],
     "a": [
      "David Brandolph",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Harvey Mitchell",
      "Jr Burrs"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Matt Enz",
      "Harrison Bohrer"
     ],
     "a": [
      "Ken Weinstein",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Graham Heavenrich",
      "Matheus Korndoerfer"
     ],
     "a": [
      "Jimmy Lee",
      "Ethan Fu"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickle House",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 567,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jitendra Arora",
      "Sushil Rijhwani"
     ],
     "a": [
      "Dhruv Dobariya",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rajeeth Nadig",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Varun Gurram",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Pritpal Singh",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Bennett Pereira",
      "Ping Peng"
     ],
     "a": [
      "Aaron Chan",
      "Jaiveer Narwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jitendra Arora",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Dhruv Dobariya",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rajeeth Nadig",
      "Bennett Pereira"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ],
     "a": [
      "Pritpal Singh",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sushil Rijhwani",
      "Avneesh Agarwal"
     ],
     "a": [
      "Jaiveer Narwal",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jitendra Arora",
      "Ping Peng"
     ],
     "a": [
      "Dhruv Dobariya",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sushil Rijhwani",
      "Bennett Pereira"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ],
     "a": [
      "Pritpal Singh",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Avneesh Agarwal",
      "Varun Gurram"
     ],
     "a": [
      "Venu Yengala",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Anil Kumar Jakkaladki",
      "Sushil Rijhwani"
     ],
     "a": [
      "Dhruv Dobariya",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "Avneesh Agarwal"
     ],
     "a": [
      "Ziyu Huang",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Pritpal Singh",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sree Harsha Konduru",
      "Ping Peng"
     ],
     "a": [
      "Jaiveer Narwal",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sushil Rijhwani",
      "Ping Peng"
     ],
     "a": [
      "Dhruv Dobariya",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ],
     "a": [
      "Ziyu Huang",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Varun Gurram",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Pritpal Singh",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jitendra Arora",
      "Bennett Pereira"
     ],
     "a": [
      "Jaiveer Narwal",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Ping Peng"
     ],
     "a": [
      "Dhruv Dobariya",
      "Pritpal Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sree Harsha Konduru",
      "Sushil Rijhwani"
     ],
     "a": [
      "Ziyu Huang",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jitendra Arora",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bennett Pereira",
      "Avneesh Agarwal"
     ],
     "a": [
      "Jaiveer Narwal",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Dilip Patel",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Jaiveer Narwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bennett Pereira",
      "Sushil Rijhwani"
     ],
     "a": [
      "Pritpal Singh",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ping Peng",
      "Avneesh Agarwal"
     ],
     "a": [
      "Aaron Chan",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Anil Kumar Jakkaladki",
      "Avneesh Agarwal"
     ],
     "a": [
      "Dhruv Dobariya",
      "Jaiveer Narwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sree Harsha Konduru",
      "Jitendra Arora"
     ],
     "a": [
      "Ziyu Huang",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rajeeth Nadig",
      "Bennett Pereira"
     ],
     "a": [
      "Pritpal Singh",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Varun Gurram",
      "Ping Peng"
     ],
     "a": [
      "Venu Yengala",
      "Dilip Patel"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Montville",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 679,
   "awayPoints": 616,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brandon Tsang",
      "Jeff Axelrad"
     ],
     "a": [
      "Ayon Codner",
      "Rohit Mankotia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jesse Mynahan",
      "Cesar Santamaria"
     ],
     "a": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Olderman",
      "Meet Thakkar"
     ],
     "a": [
      "Cullen Curley",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Umang Pathak",
      "John Manuzza"
     ],
     "a": [
      "Michael Barndt",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cesar Santamaria",
      "John Manuzza"
     ],
     "a": [
      "Michael Barndt",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ramam Durba",
      "Brandon Tsang"
     ],
     "a": [
      "Ayon Codner",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Umang Pathak",
      "Jesse Mynahan"
     ],
     "a": [
      "Rohit Mankotia",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeff Laniado",
      "Bill Olderman"
     ],
     "a": [
      "Cullen Curley",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jesse Mynahan",
      "Cesar Santamaria"
     ],
     "a": [
      "Kevin Tran",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Jeff Axelrad",
      "John Manuzza"
     ],
     "a": [
      "Samuel Kashefska",
      "Rohit Mankotia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bill Olderman",
      "Umang Pathak"
     ],
     "a": [
      "Ayon Codner",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jeff Laniado",
      "Meet Thakkar"
     ],
     "a": [
      "Michael Barndt",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Umang Pathak",
      "Ramam Durba"
     ],
     "a": [
      "Cullen Curley",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jeff Axelrad",
      "Cesar Santamaria"
     ],
     "a": [
      "Samuel Kashefska",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ],
     "a": [
      "Rohit Mankotia",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jeff Laniado",
      "Meet Thakkar"
     ],
     "a": [
      "Ayon Codner",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jeff Laniado",
      "Cesar Santamaria"
     ],
     "a": [
      "Ayon Codner",
      "Cullen Curley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brandon Tsang",
      "Meet Thakkar"
     ],
     "a": [
      "Rohit Mankotia",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ramam Durba",
      "Bill Olderman"
     ],
     "a": [
      "Samuel Kashefska",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Umang Pathak",
      "John Manuzza"
     ],
     "a": [
      "Carlos Rincon",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ],
     "a": [
      "Cullen Curley",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Bill Olderman",
      "Umang Pathak"
     ],
     "a": [
      "Ayon Codner",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cesar Santamaria",
      "Meet Thakkar"
     ],
     "a": [
      "Kevin Tran",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "John Manuzza",
      "Jeff Axelrad"
     ],
     "a": [
      "Michael Barndt",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeff Axelrad",
      "Jesse Mynahan"
     ],
     "a": [
      "Eric Ruiz",
      "Cullen Curley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeff Laniado",
      "Cesar Santamaria"
     ],
     "a": [
      "Rohit Mankotia",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Umang Pathak",
      "Ramam Durba"
     ],
     "a": [
      "Ayon Codner",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brandon Tsang",
      "John Manuzza"
     ],
     "a": [
      "David Reyes",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ramam Durba",
      "Brandon Tsang"
     ],
     "a": [
      "Cullen Curley",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bill Olderman",
      "Meet Thakkar"
     ],
     "a": [
      "Ayon Codner",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeff Axelrad",
      "Cesar Santamaria"
     ],
     "a": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jesse Mynahan",
      "Umang Pathak"
     ],
     "a": [
      "Rohit Mankotia",
      "Carlos Rincon"
     ]
    }
   ],
   "subs": [
    "Cesar Santamaria"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Jersey Devil",
   "away": "APC Garden State",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 561,
   "awayPoints": 625,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Dan Ruble"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jarred Goeckeler",
      "Tom Kresky"
     ],
     "a": [
      "Mark Waters",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Frederick Cox",
      "Brandon Dejesus"
     ],
     "a": [
      "Matthew Inzerillo",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Steve Hong",
      "Derek Livingston"
     ],
     "a": [
      "Daniel Dechristopher",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Steve Hong",
      "Mario Contreras"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brandon Dejesus",
      "Jarred Goeckeler"
     ],
     "a": [
      "Mark Waters",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tom Kresky",
      "Dan Ruble"
     ],
     "a": [
      "Jimmy Shapiro",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jonathan Carter",
      "Derek Livingston"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tim Bruno",
      "Dan Ruble"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Frederick Cox"
     ],
     "a": [
      "Mark Waters",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Carter",
      "Brandon Dejesus"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jarred Goeckeler",
      "Tom Kresky"
     ],
     "a": [
      "Matthew Inzerillo",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tom Kresky",
      "Dan Ruble"
     ],
     "a": [
      "Mark Waters",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Steve Hong",
      "Derek Livingston"
     ],
     "a": [
      "Chris Machuzak",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tim Bruno",
      "Brandon Dejesus"
     ],
     "a": [
      "Matthew Inzerillo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 22,
     "h": [
      "Mario Contreras",
      "Frederick Cox"
     ],
     "a": [
      "Daniel Dechristopher",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jarred Goeckeler",
      "Dan Ruble"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Frederick Cox",
      "Steve Hong"
     ],
     "a": [
      "Chris Machuzak",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Tom Kresky"
     ],
     "a": [
      "Matthew Inzerillo",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Derek Livingston"
     ],
     "a": [
      "Tyler Bayly",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Frederick Cox"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Tom Kresky"
     ],
     "a": [
      "Matthew Inzerillo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Mario Contreras"
     ],
     "a": [
      "Bruce Nguyen",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jarred Goeckeler",
      "Dan Ruble"
     ],
     "a": [
      "Neale Smith",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandon Dejesus",
      "Jarred Goeckeler"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Derek Livingston"
     ],
     "a": [
      "Bruce Nguyen",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 22,
     "h": [
      "Frederick Cox",
      "Steve Hong"
     ],
     "a": [
      "Matthew Inzerillo",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Mario Contreras"
     ],
     "a": [
      "Neale Smith",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jarred Goeckeler",
      "Frederick Cox"
     ],
     "a": [
      "Tyler Bayly",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tim Bruno",
      "Derek Livingston"
     ],
     "a": [
      "Mark Waters",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Brandon Dejesus"
     ],
     "a": [
      "Jimmy Shapiro",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Steve Hong"
     ],
     "a": [
      "Bruce Nguyen",
      "Daniel Dechristopher"
     ]
    }
   ],
   "subs": [
    "Jarred Goeckeler",
    "Dan Ruble"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Allstar Pickler",
   "time": "2026-09-01T19:00:00",
   "complete": true,
   "homePoints": 675,
   "awayPoints": 485,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ayon Codner",
      "Ali Bhimji"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ],
     "a": [
      "Peter Chen",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cullen Curley",
      "Rohit Mankotia"
     ],
     "a": [
      "Brandon Fulford",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carlos Rincon",
      "Kevin Tran"
     ],
     "a": [
      "Franklin Yiu",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carlos Rincon",
      "Michael Barndt"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ayon Codner",
      "Samuel Kashefska"
     ],
     "a": [
      "Peter Chen",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cullen Curley",
      "Eric Ruiz"
     ],
     "a": [
      "Brandon Fulford",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rohit Mankotia",
      "Kevin Tran"
     ],
     "a": [
      "Franklin Yiu",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ayon Codner",
      "Rohit Mankotia"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michael Barndt",
      "Eric Ruiz"
     ],
     "a": [
      "Peter Chen",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cullen Curley",
      "Ali Bhimji"
     ],
     "a": [
      "Brandon Fulford",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Samuel Kashefska",
      "Kevin Tran"
     ],
     "a": [
      "Franklin Yiu",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carlos Rincon",
      "Kevin Tran"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rohit Mankotia",
      "Ali Bhimji"
     ],
     "a": [
      "Peter Chen",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Samuel Kashefska",
      "Cullen Curley"
     ],
     "a": [
      "Brandon Fulford",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ayon Codner",
      "Eric Ruiz"
     ],
     "a": [
      "Franklin Yiu",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Michael Barndt",
      "Cullen Curley"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Peter Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ],
     "a": [
      "Gianni Roman",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carlos Rincon",
      "Ali Bhimji"
     ],
     "a": [
      "Buyi Zhang",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ayon Codner",
      "Rohit Mankotia"
     ],
     "a": [
      "Franklin Yiu",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kevin Tran",
      "Ali Bhimji"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carlos Rincon",
      "Michael Barndt"
     ],
     "a": [
      "Peter Chen",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ayon Codner",
      "Eric Ruiz"
     ],
     "a": [
      "Bing Zhu",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Samuel Kashefska",
      "Rohit Mankotia"
     ],
     "a": [
      "Franklin Yiu",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eric Ruiz",
      "Rohit Mankotia"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Barndt",
      "Ali Bhimji"
     ],
     "a": [
      "Gianni Roman",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Samuel Kashefska",
      "Kevin Tran"
     ],
     "a": [
      "Franklin Yiu",
      "Peter Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ayon Codner",
      "Cullen Curley"
     ],
     "a": [
      "Brandon Fulford",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ali Bhimji",
      "Michael Barndt"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rohit Mankotia",
      "Carlos Rincon"
     ],
     "a": [
      "Buyi Zhang",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ayon Codner",
      "Samuel Kashefska"
     ],
     "a": [
      "Franklin Yiu",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kevin Tran",
      "Cullen Curley"
     ],
     "a": [
      "Brandon Fulford",
      "Peter Chen"
     ]
    }
   ],
   "subs": [
    "John Sallo",
    "Bing Zhu"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-09-01T19:00:00",
   "complete": true,
   "homePoints": 620,
   "awayPoints": 588,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lj Dequina",
      "Marc Padre"
     ],
     "a": [
      "Bryan Mccourt",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jun Zhi Tan",
      "Ritesh Patel"
     ],
     "a": [
      "Jacob Yoo",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Akash Raju",
      "Yashraj Kurani"
     ],
     "a": [
      "Michael Gilbert",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Christopher Monzon",
      "George Vega Jr"
     ],
     "a": [
      "Dennis Yap",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ritesh Patel",
      "Prashanth Koshy"
     ],
     "a": [
      "Bryan Mccourt",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lj Dequina",
      "Akash Raju"
     ],
     "a": [
      "Michael Gilbert",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jun Zhi Tan",
      "George Vega Jr"
     ],
     "a": [
      "Pat Wilson",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Christopher Monzon",
      "Marc Padre"
     ],
     "a": [
      "Robert Huntley",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ritesh Patel",
      "Yashraj Kurani"
     ],
     "a": [
      "Michael Vincent",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Akash Raju",
      "Jun Zhi Tan"
     ],
     "a": [
      "Michael Gilbert",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christopher Monzon",
      "Lj Dequina"
     ],
     "a": [
      "Marc Kunesch",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "George Vega Jr",
      "Marc Padre"
     ],
     "a": [
      "Dennis Yap",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Prashanth Koshy",
      "Ritesh Patel"
     ],
     "a": [
      "Bryan Mccourt",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Yashraj Kurani",
      "Lj Dequina"
     ],
     "a": [
      "Pat Wilson",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "George Vega Jr",
      "Christopher Monzon"
     ],
     "a": [
      "Robert Huntley",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Akash Raju",
      "Marc Padre"
     ],
     "a": [
      "Kevin Sheehan",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Prashanth Koshy",
      "Yashraj Kurani"
     ],
     "a": [
      "Bryan Mccourt",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Akash Raju",
      "George Vega Jr"
     ],
     "a": [
      "Michael Vincent",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Jun Zhi Tan",
      "Marc Padre"
     ],
     "a": [
      "Michael Gilbert",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lj Dequina",
      "Christopher Monzon"
     ],
     "a": [
      "Robert Huntley",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Akash Raju",
      "Christopher Monzon"
     ],
     "a": [
      "Bryan Mccourt",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Padre",
      "Yashraj Kurani"
     ],
     "a": [
      "Michael Vincent",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lj Dequina",
      "George Vega Jr"
     ],
     "a": [
      "Marc Kunesch",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jun Zhi Tan",
      "Prashanth Koshy"
     ],
     "a": [
      "Dennis Yap",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ritesh Patel",
      "Akash Raju"
     ],
     "a": [
      "Bryan Mccourt",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jun Zhi Tan",
      "George Vega Jr"
     ],
     "a": [
      "Michael Gilbert",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lj Dequina",
      "Marc Padre"
     ],
     "a": [
      "Pat Wilson",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Yashraj Kurani",
      "Christopher Monzon"
     ],
     "a": [
      "Robert Huntley",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ritesh Patel",
      "Marc Padre"
     ],
     "a": [
      "Bryan Mccourt",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Akash Raju",
      "Jun Zhi Tan"
     ],
     "a": [
      "Michael Gilbert",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Prashanth Koshy",
      "Lj Dequina"
     ],
     "a": [
      "Marc Kunesch",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yashraj Kurani",
      "George Vega Jr"
     ],
     "a": [
      "Dennis Yap",
      "Kevin Sheehan"
     ]
    }
   ],
   "subs": [
    "Marc Padre",
    "Lj Dequina",
    "Yashraj Kurani",
    "Christopher Monzon"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Picklr Newtown",
   "away": "APC Garden State",
   "time": "2026-09-01T19:00:00",
   "complete": true,
   "homePoints": 603,
   "awayPoints": 596,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mathew Yang",
      "Andy Ro"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Steven Hummel",
      "Angelo Disipio"
     ],
     "a": [
      "Neale Smith",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gary Garretson",
      "Alessio Muscara"
     ],
     "a": [
      "Jimmy Shapiro",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Larry Minsky",
      "Michael Johnson"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mathew Yang",
      "Angelo Disipio"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "J-P Lautenschlager",
      "Mike Leach"
     ],
     "a": [
      "Matthew Inzerillo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jimmy Duong",
      "Alessio Muscara"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Steven Hummel",
      "Gary Garretson"
     ],
     "a": [
      "Neale Smith",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mathew Yang",
      "Gary Garretson"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "J-P Lautenschlager",
      "Mike Leach"
     ],
     "a": [
      "Chris Machuzak",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Andy Ro",
      "Angelo Disipio"
     ],
     "a": [
      "Bruce Nguyen",
      "Didier Jean-Baptiste"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Larry Minsky",
      "Michael Johnson"
     ],
     "a": [
      "Neale Smith",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andy Ro",
      "Steven Hummel"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alessio Muscara",
      "J-P Lautenschlager"
     ],
     "a": [
      "Mark Waters",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Jimmy Duong"
     ],
     "a": [
      "Matthew Inzerillo",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mathew Yang",
      "Michael Johnson"
     ],
     "a": [
      "Andress Mims",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Gary Garretson"
     ],
     "a": [
      "Neale Smith",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jimmy Duong",
      "Angelo Disipio"
     ],
     "a": [
      "Mark Waters",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Mike Leach",
      "Alessio Muscara"
     ],
     "a": [
      "Matthew Inzerillo",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mathew Yang",
      "Steven Hummel"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mike Leach",
      "Jimmy Duong"
     ],
     "a": [
      "Andress Mims",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "J-P Lautenschlager",
      "Alessio Muscara"
     ],
     "a": [
      "Jimmy Shapiro",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Angelo Disipio",
      "Gary Garretson"
     ],
     "a": [
      "Matthew Inzerillo",
      "Didier Jean-Baptiste"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andy Ro",
      "Michael Johnson"
     ],
     "a": [
      "Chris Machuzak",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Mike Leach"
     ],
     "a": [
      "Chris Machuzak",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Mathew Yang",
      "Alessio Muscara"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andy Ro",
      "Steven Hummel"
     ],
     "a": [
      "Jimmy Shapiro",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "J-P Lautenschlager",
      "Michael Johnson"
     ],
     "a": [
      "Andress Mims",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Gary Garretson"
     ],
     "a": [
      "Bruce Nguyen",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Michael Johnson",
      "Jimmy Duong"
     ],
     "a": [
      "Matthew Inzerillo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andy Ro",
      "J-P Lautenschlager"
     ],
     "a": [
      "Jimmy Shapiro",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Angelo Disipio",
      "Steven Hummel"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Neale Smith"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Flemington",
   "away": "Montville",
   "time": "2026-09-01T19:00:00",
   "complete": true,
   "homePoints": 512,
   "awayPoints": 656,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "John Fallone",
      "Josh Fink"
     ],
     "a": [
      "John Manuzza",
      "Umang Pathak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Brandt",
      "Eric Berlinger"
     ],
     "a": [
      "Jesse Mynahan",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Shapiro",
      "Craig Butler"
     ],
     "a": [
      "Cesar Santamaria",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Tabacco",
      "Franklin Lupianez"
     ],
     "a": [
      "Brandon Tsang",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Tabacco",
      "Franklin Lupianez"
     ],
     "a": [
      "John Manuzza",
      "Cesar Santamaria"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Josh Fink",
      "Josh Rito"
     ],
     "a": [
      "Jesse Mynahan",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "David Shapiro",
      "Craig Butler"
     ],
     "a": [
      "Umang Pathak",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Bill Brandt"
     ],
     "a": [
      "Ramam Durba",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bill Brandt",
      "David Shapiro"
     ],
     "a": [
      "Umang Pathak",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Franklin Lupianez"
     ],
     "a": [
      "Shalin Rawal",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Craig Butler",
      "Josh Rito"
     ],
     "a": [
      "Jesse Mynahan",
      "Cesar Santamaria"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Josh Fink",
      "John Fallone"
     ],
     "a": [
      "Brandon Tsang",
      "John Manuzza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bill Brandt",
      "David Shapiro"
     ],
     "a": [
      "Jeff Laniado",
      "Umang Pathak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Franklin Lupianez",
      "Josh Fink"
     ],
     "a": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Craig Butler",
      "Josh Rito"
     ],
     "a": [
      "Cesar Santamaria",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "John Fallone",
      "David Tabacco"
     ],
     "a": [
      "Sandeep Malhotra",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "David Tabacco",
      "Josh Fink"
     ],
     "a": [
      "John Manuzza",
      "Umang Pathak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Brandt",
      "Craig Butler"
     ],
     "a": [
      "Cesar Santamaria",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Josh Rito",
      "John Fallone"
     ],
     "a": [
      "Brandon Tsang",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "David Shapiro"
     ],
     "a": [
      "Shalin Rawal",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Franklin Lupianez"
     ],
     "a": [
      "John Manuzza",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Craig Butler",
      "Bill Brandt"
     ],
     "a": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "David Tabacco",
      "Josh Fink"
     ],
     "a": [
      "Umang Pathak",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "John Fallone",
      "Josh Rito"
     ],
     "a": [
      "Cesar Santamaria",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Josh Fink"
     ],
     "a": [
      "John Manuzza",
      "Cesar Santamaria"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Bill Brandt",
      "David Tabacco"
     ],
     "a": [
      "Jesse Mynahan",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Franklin Lupianez",
      "John Fallone"
     ],
     "a": [
      "Umang Pathak",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Shapiro",
      "Josh Rito"
     ],
     "a": [
      "Jeff Laniado",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bill Brandt",
      "Franklin Lupianez"
     ],
     "a": [
      "John Manuzza",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Craig Butler",
      "John Fallone"
     ],
     "a": [
      "Umang Pathak",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "David Tabacco"
     ],
     "a": [
      "Jesse Mynahan",
      "Cesar Santamaria"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Josh Rito",
      "David Shapiro"
     ],
     "a": [
      "Brandon Tsang",
      "Jeff Laniado"
     ]
    }
   ],
   "subs": [
    "Cesar Santamaria"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Dill Dinkers Newport",
   "away": "Bounce Tempest",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 535,
   "awayPoints": 655,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Fiscella",
      "Paul Chantler"
     ],
     "a": [
      "Daniel Borgia",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Keith Richard",
      "Rick Olafsson"
     ],
     "a": [
      "Jared Rapoport",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jesse Pettit",
      "Ian Diamond"
     ],
     "a": [
      "Jimmy Lee",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Brond",
      "Steppan Konoplev"
     ],
     "a": [
      "Ethan Fu",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Keith Richard",
      "Steppan Konoplev"
     ],
     "a": [
      "Daniel Borgia",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "David Fiscella",
      "Ian Diamond"
     ],
     "a": [
      "David Brandolph",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Paul Chantler"
     ],
     "a": [
      "Jared Rapoport",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "David Brond",
      "Rick Olafsson"
     ],
     "a": [
      "Ethan Fu",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "David Brond",
      "Nitin Chawke"
     ],
     "a": [
      "David Brandolph",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Xan Hong"
     ],
     "a": [
      "Daniel Borgia",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Keith Richard",
      "Cosme Tapia"
     ],
     "a": [
      "Paul Perumaly",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "David Fiscella",
      "Malay Kaity"
     ],
     "a": [
      "Ethan Fu",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Fiscella",
      "Steppan Konoplev"
     ],
     "a": [
      "David Brandolph",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Rick Olafsson"
     ],
     "a": [
      "Yong Kim",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Keith Richard",
      "Ian Diamond"
     ],
     "a": [
      "Paul Perumaly",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "David Brond",
      "Paul Chantler"
     ],
     "a": [
      "Daniel Borgia",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Fiscella",
      "Xan Hong"
     ],
     "a": [
      "David Brandolph",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Cosme Tapia"
     ],
     "a": [
      "Daniel Borgia",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Keith Richard",
      "Nitin Chawke"
     ],
     "a": [
      "Ethan Fu",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Brond",
      "Malay Kaity"
     ],
     "a": [
      "Jared Rapoport",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "David Fiscella"
     ],
     "a": [
      "Daniel Borgia",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Brond",
      "Keith Richard"
     ],
     "a": [
      "Paul Perumaly",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Steppan Konoplev",
      "Rick Olafsson"
     ],
     "a": [
      "Jared Rapoport",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ian Diamond",
      "Paul Chantler"
     ],
     "a": [
      "Ken Weinstein",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Keith Richard",
      "Xan Hong"
     ],
     "a": [
      "David Brandolph",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Fiscella",
      "Nitin Chawke"
     ],
     "a": [
      "Paul Perumaly",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "David Brond",
      "Cosme Tapia"
     ],
     "a": [
      "Jared Rapoport",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jesse Pettit",
      "Malay Kaity"
     ],
     "a": [
      "Ethan Fu",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Paul Chantler",
      "Nitin Chawke"
     ],
     "a": [
      "Daniel Borgia",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Xan Hong"
     ],
     "a": [
      "David Brandolph",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Cosme Tapia"
     ],
     "a": [
      "Jared Rapoport",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Malay Kaity"
     ],
     "a": [
      "Ethan Fu",
      "Jimmy Lee"
     ]
    }
   ],
   "subs": [
    "Malay Kaity",
    "David Brond",
    "Nitin Chawke"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Monroe",
   "away": "Pickleball HQ",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 656,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Luca Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Uttam Purohit",
      "Salman Saad"
     ],
     "a": [
      "Thomas Moran",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shawn Gold",
      "Jason Mcmanmon"
     ],
     "a": [
      "Carlos Idrovo",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Shawn Gold",
      "David Bogatyrev"
     ],
     "a": [
      "Luca Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Salman Saad",
      "Nicholas Lugo"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Mcmanmon",
      "Kurt Skalamera"
     ],
     "a": [
      "Thomas Moran",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Anthony Simonetti",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kurt Skalamera",
      "Salman Saad"
     ],
     "a": [
      "Christopher Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shawn Gold",
      "David Bogatyrev"
     ],
     "a": [
      "Luca Hendrickson",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nicholas Lugo",
      "Uttam Purohit"
     ],
     "a": [
      "Carlos Idrovo",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jimmy Ramja",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Nicholas Lugo"
     ],
     "a": [
      "Christopher Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Uttam Purohit"
     ],
     "a": [
      "Luca Hendrickson",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jason Mcmanmon",
      "Kurt Skalamera"
     ],
     "a": [
      "Carlos Idrovo",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Dombrowiecki",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jimmy Ramja",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Mcmanmon",
      "Jacob Rosengarten"
     ],
     "a": [
      "Noah Ludwigsen",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nicholas Lugo",
      "Shawn Gold"
     ],
     "a": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jimmy Ramja",
      "Carlos Idrovo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kurt Skalamera",
      "Salman Saad"
     ],
     "a": [
      "Thomas Moran",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shawn Gold",
      "Nicholas Lugo"
     ],
     "a": [
      "David Wheeler",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Salman Saad",
      "Uttam Purohit"
     ],
     "a": [
      "Jimmy Ramja",
      "Carlos Idrovo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kurt Skalamera",
      "Stephen Fredericksen"
     ],
     "a": [
      "Thomas Moran",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Nicholas Lugo",
      "Salman Saad"
     ],
     "a": [
      "Carlos Idrovo",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Jacob Rosengarten"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Uttam Purohit"
     ],
     "a": [
      "Anthony Simonetti",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Mcmanmon",
      "Shawn Gold"
     ],
     "a": [
      "Luca Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Kurt Skalamera"
     ],
     "a": [
      "Anthony Simonetti",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jacob Rosengarten",
      "Nicholas Lugo"
     ],
     "a": [
      "Luca Hendrickson",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shawn Gold",
      "Stephen Fredericksen"
     ],
     "a": [
      "Thomas Moran",
      "Carlos Idrovo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Premiere",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 602,
   "awayPoints": 626,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Aaron Chan",
      "Venu Yengala"
     ],
     "a": [
      "Matthew Schwartz",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Pritpal Singh",
      "Ashish Kumar"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Dhruv Dobariya",
      "Ziyu Huang"
     ],
     "a": [
      "Joseph Lynskey",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Harsh Upadhyaya",
      "Dilip Patel"
     ],
     "a": [
      "Daniel Antonelli",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Ziyu Huang"
     ],
     "a": [
      "Jason Feldman",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jaiveer Narwal",
      "Dilip Patel"
     ],
     "a": [
      "Daniel Antonelli",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harsh Upadhyaya",
      "Venu Yengala"
     ],
     "a": [
      "Matthew Schwartz",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pritpal Singh",
      "Ashish Kumar"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jaiveer Narwal",
      "Dilip Patel"
     ],
     "a": [
      "Matthew Schwartz",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ziyu Huang",
      "Ashish Kumar"
     ],
     "a": [
      "Jason Feldman",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Venu Yengala",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Joseph Lynskey",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pritpal Singh",
      "Dhruv Dobariya"
     ],
     "a": [
      "Brian “Bubba” Falco",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Jason Feldman",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ziyu Huang",
      "Jaiveer Narwal"
     ],
     "a": [
      "Matthew Schwartz",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pritpal Singh",
      "Aaron Chan"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Venu Yengala",
      "Dilip Patel"
     ],
     "a": [
      "Joseph Lynskey",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ashish Kumar",
      "Venu Yengala"
     ],
     "a": [
      "Brian “Bubba” Falco",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pritpal Singh",
      "Ziyu Huang"
     ],
     "a": [
      "Joseph Lynskey",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jaiveer Narwal",
      "Aaron Chan"
     ],
     "a": [
      "Timothy Lynskey",
      "Matthew Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pritpal Singh",
      "Ziyu Huang"
     ],
     "a": [
      "Joseph Lynskey",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Venu Yengala",
      "Dilip Patel"
     ],
     "a": [
      "Jason Feldman",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ashish Kumar",
      "Aaron Chan"
     ],
     "a": [
      "Matthew Schwartz",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Jaiveer Narwal"
     ],
     "a": [
      "Daniel Antonelli",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Pritpal Singh",
      "Jaiveer Narwal"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Dilip Patel"
     ],
     "a": [
      "Matthew Schwartz",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ashish Kumar",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Christopher Giasi",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Venu Yengala",
      "Ziyu Huang"
     ],
     "a": [
      "Joseph Lynskey",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ziyu Huang",
      "Dilip Patel"
     ],
     "a": [
      "Brian “Bubba” Falco",
      "Matthew Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pritpal Singh",
      "Dhruv Dobariya"
     ],
     "a": [
      "Daniel Antonelli",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Aaron Chan",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Venu Yengala",
      "Jaiveer Narwal"
     ],
     "a": [
      "Jason Feldman",
      "Joseph Lynskey"
     ]
    }
   ],
   "subs": [
    "Matthew Schwartz"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickle House",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 554,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Rajeeth Nadig",
      "Jitendra Arora"
     ],
     "a": [
      "Erik Reilly",
      "Kevin Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Varun Gurram",
      "Bennett Pereira"
     ],
     "a": [
      "Hua Lin",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Avneesh Agarwal",
      "Abhishekh Mehra"
     ],
     "a": [
      "Uday Acham",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rakshit Maddur Gopinath",
      "Neil Dedhia"
     ],
     "a": [
      "Big G",
      "Ian Kohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "Sushil Rijhwani"
     ],
     "a": [
      "Erik Reilly",
      "Kevin Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Hua Lin",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Abhishekh Mehra",
      "Bennett Pereira"
     ],
     "a": [
      "Michael Vollmer",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Avneesh Agarwal",
      "Neil Dedhia"
     ],
     "a": [
      "Ian Kohn",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sushil Rijhwani",
      "Rajeeth Nadig"
     ],
     "a": [
      "Erik Reilly",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Neil Dedhia"
     ],
     "a": [
      "Michael Vollmer",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bennett Pereira",
      "Abhishekh Mehra"
     ],
     "a": [
      "Ian Kohn",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rakshit Maddur Gopinath",
      "Avneesh Agarwal"
     ],
     "a": [
      "Siva Indupuru",
      "Uday Acham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jitendra Arora",
      "Rajeeth Nadig"
     ],
     "a": [
      "Erik Reilly",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Varun Gurram",
      "Sushil Rijhwani"
     ],
     "a": [
      "Kevin Lew",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Avneesh Agarwal",
      "Abhishekh Mehra"
     ],
     "a": [
      "Michael Vollmer",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bennett Pereira",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Big G",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sushil Rijhwani",
      "Abhishekh Mehra"
     ],
     "a": [
      "Erik Reilly",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Varun Gurram",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Hua Lin",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Avneesh Agarwal",
      "Jitendra Arora"
     ],
     "a": [
      "Kevin Lew",
      "Uday Acham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rajeeth Nadig",
      "Neil Dedhia"
     ],
     "a": [
      "Michael Vollmer",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Jitendra Arora",
      "Neil Dedhia"
     ],
     "a": [
      "Erik Reilly",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Varun Gurram",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Kevin Lew",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sushil Rijhwani",
      "Bennett Pereira"
     ],
     "a": [
      "Pedro Delgado",
      "Uday Acham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rajeeth Nadig",
      "Abhishekh Mehra"
     ],
     "a": [
      "Michael Vollmer",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Michael Vollmer",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jitendra Arora",
      "Bennett Pereira"
     ],
     "a": [
      "Uday Acham",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sushil Rijhwani",
      "Avneesh Agarwal"
     ],
     "a": [
      "Ian Kohn",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rakshit Maddur Gopinath",
      "Abhishekh Mehra"
     ],
     "a": [
      "Big G",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Varun Gurram",
      "Jitendra Arora"
     ],
     "a": [
      "Kevin Lew",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rajeeth Nadig",
      "Sushil Rijhwani"
     ],
     "a": [
      "Pedro Delgado",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Avneesh Agarwal",
      "Bennett Pereira"
     ],
     "a": [
      "Uday Acham",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Neil Dedhia",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Ian Kohn",
      "Siva Indupuru"
     ]
    }
   ],
   "subs": [
    "Abhishekh Mehra"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 568,
   "awayPoints": 611,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tim Bruno",
      "Brandon Dejesus"
     ],
     "a": [
      "Graham Heavenrich",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Derek Livingston",
      "Frederick Cox"
     ],
     "a": [
      "Harrison Bohrer",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Mario Contreras"
     ],
     "a": [
      "Harvey Mitchell",
      "Vincent Demarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Hadley",
      "Christopher Uston"
     ],
     "a": [
      "Sal Bwint",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Daniel Hadley",
      "Frederick Cox"
     ],
     "a": [
      "Sal Bwint",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dan Ruble",
      "Christopher Uston"
     ],
     "a": [
      "Charles Evans",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandon Dejesus",
      "Jonathan Carter"
     ],
     "a": [
      "Andrew Neave",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Steve Hong"
     ],
     "a": [
      "Jordan Demcher",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Brandon Dejesus",
      "Christopher Uston"
     ],
     "a": [
      "Lincoln Jensen",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tim Bruno",
      "Dan Ruble"
     ],
     "a": [
      "Jordan Demcher",
      "Vincent Demarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Daniel Hadley",
      "Jonathan Carter"
     ],
     "a": [
      "Harvey Mitchell",
      "Sal Bwint"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Steve Hong",
      "Derek Livingston"
     ],
     "a": [
      "Graham Heavenrich",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brandon Dejesus",
      "Christopher Uston"
     ],
     "a": [
      "Harrison Bohrer",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dan Ruble",
      "Tim Bruno"
     ],
     "a": [
      "Sal Bwint",
      "Vincent Demarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Derek Livingston",
      "Frederick Cox"
     ],
     "a": [
      "Graham Heavenrich",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Jonathan Carter"
     ],
     "a": [
      "Jordan Demcher",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Daniel Hadley",
      "Frederick Cox"
     ],
     "a": [
      "Jordan Demcher",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christopher Uston",
      "Dan Ruble"
     ],
     "a": [
      "Harvey Mitchell",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Derek Livingston"
     ],
     "a": [
      "Graham Heavenrich",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Steve Hong"
     ],
     "a": [
      "Russell Cripps",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Daniel Hadley",
      "Jonathan Carter"
     ],
     "a": [
      "Russell Cripps",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mario Contreras",
      "Derek Livingston"
     ],
     "a": [
      "Sal Bwint",
      "Vincent Demarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dan Ruble",
      "Steve Hong"
     ],
     "a": [
      "Harrison Bohrer",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tim Bruno",
      "Brandon Dejesus"
     ],
     "a": [
      "Andrew Neave",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Frederick Cox",
      "Dan Ruble"
     ],
     "a": [
      "Harvey Mitchell",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tim Bruno",
      "Christopher Uston"
     ],
     "a": [
      "Jordan Demcher",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Steve Hong"
     ],
     "a": [
      "Andrew Neave",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Daniel Hadley"
     ],
     "a": [
      "Vincent Demarco",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Jonathan Carter"
     ],
     "a": [
      "Sal Bwint",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Frederick Cox",
      "Christopher Uston"
     ],
     "a": [
      "Harrison Bohrer",
      "Lincoln Jensen"
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
      "Harvey Mitchell",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dan Ruble",
      "Mario Contreras"
     ],
     "a": [
      "Jordan Demcher",
      "Vincent Demarco"
     ]
    }
   ],
   "subs": [
    "Dan Ruble"
   ]
  },
  {
   "result": null,
   "week": 3,
   "home": "Bounce Malvern",
   "away": "APC Garden State",
   "time": "2026-09-08T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Premiere",
   "away": "Pickleball HQ",
   "time": "2026-09-08T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-08T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Flemington",
   "time": "2026-09-08T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Newport",
   "time": "2026-09-08T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Bounce Tempest",
   "away": "Picklr Newtown",
   "time": "2026-09-08T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Monroe",
   "away": "Pickle House",
   "time": "2026-09-08T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Montville",
   "away": "PickleRage Union County",
   "time": "2026-09-08T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Allstar Pickler",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-08T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Flemington",
   "time": "2026-09-15T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Dill Dinkers Freehold",
   "away": "Jersey Devil",
   "time": "2026-09-15T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Monroe",
   "away": "Bounce Tempest",
   "time": "2026-09-15T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Montville",
   "away": "Home Court",
   "time": "2026-09-15T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Bounce Malvern",
   "time": "2026-09-15T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickle House",
   "away": "Picklr Newtown",
   "time": "2026-09-15T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Allstar Pickler",
   "away": "PickleRage Union County",
   "time": "2026-09-15T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball HQ",
   "away": "APC Garden State",
   "time": "2026-09-15T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Montville",
   "time": "2026-09-22T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Freehold",
   "away": "Premiere",
   "time": "2026-09-22T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington",
   "away": "PickleRage Union County",
   "time": "2026-09-22T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Picklr Newtown",
   "away": "Jersey Devil",
   "time": "2026-09-22T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Monroe",
   "time": "2026-09-22T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "APC Garden State",
   "away": "Bounce Tempest",
   "time": "2026-09-22T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Home Court",
   "away": "Allstar Pickler",
   "time": "2026-09-22T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Newport",
   "away": "Bounce Malvern",
   "time": "2026-09-22T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle House",
   "away": "Pickleball HQ",
   "time": "2026-09-22T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Newport",
   "away": "Pickleball HQ",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "PickleRage Union County",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-27T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Home Court",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-27T16:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Allstar Pickler",
   "away": "Flemington",
   "time": "2026-09-27T16:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Freehold",
   "away": "Monroe",
   "time": "2026-09-29T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere",
   "away": "Pickle House",
   "time": "2026-09-29T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Malvern",
   "away": "Picklr Newtown",
   "time": "2026-09-29T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "APC Garden State",
   "away": "Dill Dinkers Newport",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Allstar Pickler",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Tempest",
   "away": "Jersey Devil",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Montville",
   "away": "Flemington",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball HQ",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Home Court",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Flemington",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-06T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Allstar Pickler",
   "time": "2026-10-06T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Picklr Newtown",
   "away": "Bounce Malvern",
   "time": "2026-10-06T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "PickleRage Union County",
   "away": "Montville",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Monroe",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Pickleball HQ",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickle House",
   "away": "Premiere",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Dill Dinkers Newport",
   "away": "APC Garden State",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Jersey Devil",
   "away": "Bounce Tempest",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-13T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Picklr Newtown",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-10-13T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Malvern",
   "away": "Premiere",
   "time": "2026-10-13T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "APC Garden State",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "PickleRage Union County",
   "away": "Home Court",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Tempest",
   "away": "Pickle House",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Jersey Devil",
   "away": "Monroe",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Allstar Pickler",
   "away": "Montville",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Malvern",
   "away": "Jersey Devil",
   "time": "2026-10-20T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Premiere",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-10-20T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Freehold",
   "away": "Pickle House",
   "time": "2026-10-20T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-20T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "PickleRage Union County",
   "away": "Allstar Pickler",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "APC Garden State",
   "away": "Picklr Newtown",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Tempest",
   "away": "Dill Dinkers Newport",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Home Court",
   "away": "Montville",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball HQ",
   "away": "Monroe",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Home Court",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington",
   "away": "Allstar Pickler",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "PickleRage Union County",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Premiere",
   "away": "Dill Dinkers Newport",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Newtown",
   "away": "Bounce Tempest",
   "time": "2026-10-27T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Montville",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Bounce Malvern",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball HQ",
   "away": "Premiere",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickle House",
   "away": "Monroe",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Home Court",
   "away": "Flemington",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "PickleRage Union County",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Dill Dinkers Newport",
   "away": "Jersey Devil",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "PickleRage Union County",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Premiere",
   "away": "Monroe",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Flemington",
   "away": "Home Court",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball HQ",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Montville",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Picklr Newtown",
   "away": "Dill Dinkers Newport",
   "time": "2026-11-03T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Pickle House",
   "time": "2026-11-03T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Tempest",
   "away": "Bounce Malvern",
   "time": "2026-11-03T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "APC Garden State",
   "away": "Jersey Devil",
   "time": "2026-11-03T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Newport",
   "time": "2026-11-10T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Premiere",
   "away": "Dill Dinkers Freehold",
   "time": "2026-11-10T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-10T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Home Court",
   "away": "PickleRage Union County",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball HQ",
   "away": "Pickle House",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Montville",
   "away": "Allstar Pickler",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Monroe",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Devil",
   "away": "Picklr Newtown",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Bounce Tempest",
   "away": "APC Garden State",
   "time": "2026-11-10T19:30:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Luke Simon": "0069c456-f712-435e-abd7-461018159661",
  "Matthew Rafaniello": "021fbd88-6b98-47eb-aa92-96ed959d8a4b",
  "Alexander King": "08f3645c-2c99-4ed0-9b8b-62b9be1a97a8",
  "Chris Cheng": "0c6bb34d-2f84-4d14-b3c7-378346532a11",
  "Sujoy Gayen": "159ef92f-0a83-4619-b65d-3ba60a2ba992",
  "Steve Peck": "17c1d95a-2f52-4329-a52a-a991d1fc3335",
  "Steve Roth": "183983b9-993f-471e-ac3d-224dcee6d80f",
  "Jacob Alpert": "1cd5949a-4196-4e3a-a611-7188d34f4708",
  "Chris Shung": "2253df3c-7a50-4a9a-b197-2f80d64b089f",
  "Yiqun (Nina) Chen": "39da74b5-60a5-49cf-ae21-80b24602c3f4",
  "Dion Brown": "4c6d1b49-9a66-4e43-8a49-cf56c2901a3b",
  "Justin Umana": "5eba9352-3bf9-4927-831e-52eaa3fb65a7",
  "Craig Wu": "8667ff30-fa9e-4078-a6a0-63fcb68c8425",
  "Steven Santiago": "add792d2-e174-42b1-8bf8-bc9e2c2aa354",
  "Edward Fu": "b243c9db-ff2c-4db7-bcfd-27f3b0e7b6f1",
  "Sean Liotine": "b7a5d158-2b7c-4fdc-83ab-aea797095631",
  "Jason Ilkowitz": "dcd4414c-5981-4a70-a4dc-fd943d6d5e17",
  "Chris Gander": "ebc6c2b2-f16d-478f-90fb-886d4e67f0aa",
  "Andrew Liou": "fd14ada2-5855-4bb3-a8cd-d68aba23ba95"
 },
 "meta": {
  "matchesPlayed": 18,
  "provisionalMatches": 0,
  "weeks": "1-2",
  "totalPlayers": 244,
  "ratingHistoryWeeks": [
   1,
   2
  ],
  "divisionSlug": "c118b8e9",
  "hasPlayoffs": false,
  "typicalDay": "Tuesdays",
  "detailFile": "detail-c118b8e9.js",
  "clubName": "",
  "divisionName": "3.75 Mens",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
  "singleGender": "Male",
  "podCount": 2,
  "podNames": [
   "North",
   "East / South"
  ],
  "podSource": "api",
  "reportedPods": [
   "East",
   "North",
   "South"
  ],
  "podMismatch": {
   "crossPodMatchups": 12,
   "totalMatchups": 114,
   "reported": {
    "North": [
     "Allstar Pickler",
     "Flemington",
     "Home Court",
     "Montville",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Lehigh Valley",
     "PickleRage Union County"
    ],
    "East": [
     "Dill Dinkers Freehold",
     "Monroe",
     "Pickle House",
     "Pickleball HQ",
     "Pickleball Kingdom Hamilton",
     "Premiere"
    ],
    "South": [
     "APC Garden State",
     "Bounce Malvern",
     "Bounce Tempest",
     "Dill Dinkers Newport",
     "Jersey Devil",
     "Picklr Newtown"
    ]
   },
   "schedule": {
    "Pod 1": [
     "Allstar Pickler",
     "Flemington",
     "Home Court",
     "Montville",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Lehigh Valley",
     "PickleRage Union County"
    ],
    "Pod 2": [
     "APC Garden State",
     "Bounce Malvern",
     "Bounce Tempest",
     "Dill Dinkers Freehold",
     "Dill Dinkers Newport",
     "Jersey Devil",
     "Monroe",
     "Pickle House",
     "Pickleball HQ",
     "Pickleball Kingdom Hamilton",
     "Picklr Newtown",
     "Premiere"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-09-05T03:51:18.717Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["c118b8e9"] = DATA;
})();
