(function () {
  const DATA = {
 "players": [
  {
   "name": "Luca Hendrickson",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 102,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 66,
   "ppg": 21,
   "leagueRank": 5,
   "rating": 3.7,
   "ratingGames": 8,
   "confidence": 51,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.8,
   "playerId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "name": "Dennis Yap",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 111,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 57,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 3.5,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.7,
   "playerId": "45ea05c6-ef48-4b0a-9f71-a640be038d08"
  },
  {
   "name": "Christopher Hendrickson",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 46,
   "ppg": 21,
   "leagueRank": 10,
   "rating": 1.7,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.7,
   "playerId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6"
  },
  {
   "name": "Harvey Mitchell",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 42,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 3.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
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
   "rating": 2.3,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.2,
   "playerId": "5e42a5f7-22d1-4613-a829-b62121ddc704"
  },
  {
   "name": "Alessio Muscara",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 87,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 39,
   "ppg": 21,
   "leagueRank": 4,
   "rating": 2.2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1,
   "playerId": "4a5131e4-a912-4913-8ff5-9281e53c6974"
  },
  {
   "name": "Jose Campos",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 89,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 37,
   "ppg": 21,
   "leagueRank": 11,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.7,
   "playerId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f"
  },
  {
   "name": "Steven Hummel",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 89,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 37,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.5,
   "playerId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "name": "Noah Ludwigsen",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 133,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 35,
   "ppg": 21,
   "leagueRank": 13,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 42,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.7,
   "playerId": "67f9503a-202f-4982-8e97-9b3383a35aee"
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
   "leagueRank": 8,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.6,
   "playerId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
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
   "leagueRank": 7,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.3,
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
   "leagueRank": 9,
   "rating": 1.6,
   "ratingGames": 7,
   "confidence": 48,
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
   "leagueRank": 15,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -2,
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
   "leagueRank": 14,
   "rating": -0.2,
   "ratingGames": 4,
   "confidence": 37,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -2.3,
   "playerId": "c737d3dd-dfe2-4f58-a095-fb40fc601866"
  },
  {
   "name": "John Manuzza",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 110,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 16,
   "ppg": 21,
   "leagueRank": 16,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "name": "Jimmy Ramja",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 51,
   "ppg": 20.8,
   "leagueRank": 18,
   "rating": 1.7,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.4,
   "playerId": "ade57877-7c11-4a46-88bf-789a50906901"
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
   "rating": 3.3,
   "ratingGames": 8,
   "confidence": 45,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Jason Feldman",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 161,
   "totalPointsAgainst": 116,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 45,
   "ppg": 20.1,
   "leagueRank": 21,
   "rating": 1.7,
   "ratingGames": 8,
   "confidence": 49,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.3,
   "playerId": "5636cdc5-7a65-4202-abbb-5999eee35ab3"
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
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.2,
   "playerId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "name": "Matthew Schwartz",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 164,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f",
   "winPct": 87.5,
   "diff": 42,
   "ppg": 20.5,
   "leagueRank": 20,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Bryan Mccourt",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 164,
   "totalPointsAgainst": 127,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 37,
   "ppg": 20.5,
   "leagueRank": 24,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1,
   "playerId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa"
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
   "leagueRank": 23,
   "rating": 2.3,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "name": "Gary White",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
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
   "playerId": "9a26eab9-96be-45e1-b380-2845a0e8e668",
   "winPct": 87.5,
   "diff": 33,
   "ppg": 20.5,
   "leagueRank": 27,
   "rating": 0.5,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Umang Pathak",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 164,
   "totalPointsAgainst": 136,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 28,
   "ppg": 20.5,
   "leagueRank": 26,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 50,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12"
  },
  {
   "name": "Joseph Lynskey",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 158,
   "totalPointsAgainst": 133,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 25,
   "ppg": 19.8,
   "leagueRank": 34,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.2,
   "playerId": "0e8c08b7-0e58-434b-8830-f37779f821dc"
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
   "leagueRank": 30,
   "rating": 1.1,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5
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
   "leagueRank": 36,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 51,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3
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
   "leagueRank": 17,
   "rating": 3.3,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0,
   "playerId": "642b7fc5-f304-459a-889e-e726dc9edeab"
  },
  {
   "name": "Bruce Nguyen",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 123,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 22,
   "ppg": 20.7,
   "leagueRank": 29,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.3,
   "playerId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9"
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
   "leagueRank": 31,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.2,
   "playerId": "899ba1d1-37e5-4ad6-8daa-f726376776e5"
  },
  {
   "name": "Jordan Demcher",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 96,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 27,
   "ppg": 20.5,
   "leagueRank": 25,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.5,
   "playerId": "6d1beb10-bd5c-456f-95b5-1823752e8c62"
  },
  {
   "name": "Graham Heavenrich",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 99,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 24,
   "ppg": 20.5,
   "leagueRank": 32,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.5,
   "playerId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90"
  },
  {
   "name": "Matthew Inzerillo",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 102,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 22,
   "ppg": 20.7,
   "leagueRank": 28,
   "rating": 2.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.8,
   "playerId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "name": "Angelo Disipio",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 21,
   "ppg": 20.7,
   "leagueRank": 33,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.8,
   "playerId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb"
  },
  {
   "name": "Mike Leach",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 116,
   "totalPointsAgainst": 95,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 21,
   "ppg": 19.3,
   "leagueRank": 37,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1,
   "playerId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "name": "Mathew Yang",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 116,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 13,
   "ppg": 19.3,
   "leagueRank": 47,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.5,
   "playerId": "12ec758b-f05d-40ec-b082-a76f07cbe792"
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
   "leagueRank": 49,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "27009a0b-037c-4934-9f52-d21c928ef173"
  },
  {
   "name": "Jeff Laniado",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 86,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 17,
   "ppg": 20.6,
   "leagueRank": 35,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 40,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.8,
   "playerId": "06d52e99-941a-4ced-9968-f56e6075105a"
  },
  {
   "name": "Ramam Durba",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 99,
   "totalPointsAgainst": 86,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 13,
   "ppg": 19.8,
   "leagueRank": 45,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "93280d5d-b0c8-49cd-94fe-0350f3e2dac5"
  },
  {
   "name": "Harrison Bohrer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 98,
   "totalPointsAgainst": 86,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 12,
   "ppg": 19.6,
   "leagueRank": 48,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.6,
   "playerId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
  },
  {
   "name": "David Wheeler",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 123,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 41,
   "ppg": 20.5,
   "leagueRank": 38,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.8,
   "playerId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "name": "Kevin Sheehan",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 129,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 35,
   "ppg": 20.5,
   "leagueRank": 40,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 49,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1.1,
   "playerId": "115f3958-d110-41f0-a04c-aa2f8e17a54f"
  },
  {
   "name": "Daniel Antonelli",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 159,
   "totalPointsAgainst": 128,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 31,
   "ppg": 19.9,
   "leagueRank": 44,
   "rating": 1.8,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "name": "Jacob Yoo",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 135,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 29,
   "ppg": 20.5,
   "leagueRank": 42,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "name": "Michael Vincent",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 136,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 28,
   "ppg": 20.5,
   "leagueRank": 46,
   "rating": 0.5,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1,
   "playerId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "name": "Ashish Kumar",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 82,
   "totalPointsAgainst": 61,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 21,
   "ppg": 20.5,
   "leagueRank": 22,
   "rating": 2,
   "ratingGames": 4,
   "confidence": 38,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.5,
   "playerId": "5df02573-21d4-40ea-8b41-f81372a474b3"
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
   "leagueRank": 43,
   "rating": 1.6,
   "ratingGames": 8,
   "confidence": 48,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.2,
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
   "leagueRank": 50,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "763342e5-4d13-45b7-8630-9d840cb7b8b3"
  },
  {
   "name": "Cesar Santamaria",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 160,
   "totalPointsAgainst": 155,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 1,
   "playerId": "fbde98cb-9eee-431b-b164-244249c26728",
   "winPct": 75,
   "diff": 5,
   "ppg": 20,
   "leagueRank": 56,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2
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
   "leagueRank": 39,
   "rating": 1.7,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1.3,
   "playerId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "name": "Rajeeth Nadig",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 143,
   "totalPointsAgainst": 113,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 30,
   "ppg": 20.4,
   "leagueRank": 41,
   "rating": 1.7,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.8,
   "playerId": "20c15f19-5b27-4c9f-bc75-da3d516a015b"
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
   "leagueRank": 51,
   "rating": 2.4,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Brandon Tsang",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 139,
   "totalPointsAgainst": 129,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 10,
   "ppg": 19.9,
   "leagueRank": 57,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "name": "Jitendra Arora",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 138,
   "totalPointsAgainst": 130,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 8,
   "ppg": 19.7,
   "leagueRank": 60,
   "rating": -0.2,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3,
   "playerId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "name": "Jesse Mynahan",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 143,
   "totalPointsAgainst": 137,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 6,
   "ppg": 20.4,
   "leagueRank": 59,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb"
  },
  {
   "name": "Neale Smith",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 114,
   "totalPointsAgainst": 95,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 19,
   "ppg": 19,
   "leagueRank": 52,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
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
   "leagueRank": 58,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1,
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
   "leagueRank": 54,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "name": "Andrew Neave",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 117,
   "totalPointsAgainst": 104,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 13,
   "ppg": 19.5,
   "leagueRank": 64,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0"
  },
  {
   "name": "Dan Ruble",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 115,
   "totalPointsAgainst": 102,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "d411862a-491a-47dc-93a8-4a12f821afd7",
   "winPct": 66.7,
   "diff": 13,
   "ppg": 19.2,
   "leagueRank": 53,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5
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
   "leagueRank": 63,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.8,
   "playerId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
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
   "leagueRank": 66,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "30c847e2-9b5e-4ad7-851d-9d624f94a11b"
  },
  {
   "name": "Avneesh Agarwal",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 111,
   "totalPointsAgainst": 107,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 4,
   "ppg": 18.5,
   "leagueRank": 72,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "f0ac7d85-0e7b-4f28-80fe-3282c3c875ed"
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
   "leagueRank": 55,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.8,
   "playerId": "a24bc2af-aca9-45dd-a827-12fb12f7b784"
  },
  {
   "name": "Marc Kunesch",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 160,
   "totalPointsAgainst": 140,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 20,
   "ppg": 20,
   "leagueRank": 65,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "name": "Robert Huntley",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 160,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 17,
   "ppg": 20,
   "leagueRank": 68,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 44,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.5,
   "playerId": "b5dec967-9e3a-49b4-b136-597711d099cc"
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
   "leagueRank": 70,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "John Fallone",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 154,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": 13,
   "ppg": 19.3,
   "leagueRank": 67,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8"
  },
  {
   "name": "Eric Berlinger",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 158,
   "totalPointsAgainst": 146,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 12,
   "ppg": 19.8,
   "leagueRank": 62,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 45,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.4,
   "playerId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "name": "David Shapiro",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 155,
   "totalPointsAgainst": 144,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": 11,
   "ppg": 19.4,
   "leagueRank": 69,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 48,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "name": "Franklin Lupianez",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 153,
   "totalPointsAgainst": 155,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": -2,
   "ppg": 19.1,
   "leagueRank": 77,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 47,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "17caef8b-84d4-4052-9695-7c74190925a1"
  },
  {
   "name": "David Brandolph",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 134,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": -11,
   "ppg": 16.8,
   "leagueRank": 81,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.7,
   "playerId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
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
   "leagueRank": 61,
   "rating": 1.1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -1,
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
   "leagueRank": 74,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "31b78615-afb3-4856-8cb1-de2b8d43a115"
  },
  {
   "name": "Uzoma Nwankwo",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 133,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 16,
   "ppg": 19,
   "leagueRank": 71,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "name": "Sushil Rijhwani",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 127,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 7,
   "ppg": 18.1,
   "leagueRank": 80,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "name": "Brandon Dejesus",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 138,
   "totalPointsAgainst": 135,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 3,
   "ppg": 19.7,
   "leagueRank": 73,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "name": "Bennett Pereira",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 121,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": -3,
   "ppg": 17.3,
   "leagueRank": 86,
   "rating": -1.3,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655"
  },
  {
   "name": "Mark Waters",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 124,
   "totalPointsAgainst": 134,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": -10,
   "ppg": 17.7,
   "leagueRank": 89,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "1baee0ad-faae-4c61-894a-a347710fdfea"
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
   "leagueRank": 75,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "8b8ebfab-9618-4bba-a52b-6aa7679d3390"
  },
  {
   "name": "Craig Butler",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 156,
   "totalPointsAgainst": 140,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 16,
   "ppg": 19.5,
   "leagueRank": 76,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 49,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
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
   "leagueRank": 88,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3
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
   "leagueRank": 84,
   "rating": 0.3,
   "ratingGames": 8,
   "confidence": 43,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9"
  },
  {
   "name": "Pritpal Singh",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 142,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -5,
   "ppg": 17.8,
   "leagueRank": 82,
   "rating": 0.5,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "631b24ae-9bc2-4db3-964b-33f86933021e"
  },
  {
   "name": "Kevin Tran",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 139,
   "totalPointsAgainst": 135,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 42.9,
   "diff": 4,
   "ppg": 19.9,
   "leagueRank": 78,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf"
  },
  {
   "name": "Michael Dombrowiecki",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 123,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -1,
   "ppg": 17.6,
   "leagueRank": 87,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9,
   "playerId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040"
  },
  {
   "name": "Tim Bruno",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 121,
   "totalPointsAgainst": 131,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -10,
   "ppg": 17.3,
   "leagueRank": 94,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "name": "Daniel Borgia",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 121,
   "totalPointsAgainst": 135,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -14,
   "ppg": 17.3,
   "leagueRank": 95,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "name": "Michael Johnson",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 99,
   "totalPointsAgainst": 92,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": 7,
   "ppg": 19.8,
   "leagueRank": 85,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.5,
   "playerId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "name": "Shawn Gold",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 99,
   "totalPointsAgainst": 96,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": 3,
   "ppg": 19.8,
   "leagueRank": 79,
   "rating": 1.4,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "e2d70cc7-b655-43d5-a059-063bfe722001"
  },
  {
   "name": "Jimmy Shapiro",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 94,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -7,
   "ppg": 18.8,
   "leagueRank": 96,
   "rating": -0.6,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
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
   "leagueRank": 83,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.7,
   "playerId": "24db47b3-dedc-418d-9210-3b5fea1952da"
  },
  {
   "name": "Varun Gurram",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 151,
   "totalPointsAgainst": 153,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 37.5,
   "diff": -2,
   "ppg": 18.9,
   "leagueRank": 97,
   "rating": -1.6,
   "ratingGames": 8,
   "confidence": 49,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.2,
   "playerId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "name": "Ziyu Huang",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 147,
   "totalPointsAgainst": 149,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -2,
   "ppg": 18.4,
   "leagueRank": 90,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.6,
   "playerId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "name": "Ayon Codner",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 140,
   "totalPointsAgainst": 154,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -14,
   "ppg": 17.5,
   "leagueRank": 100,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "497b0077-b7ae-4025-ad32-94c9da47ab80"
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 146,
   "totalPointsAgainst": 160,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -14,
   "ppg": 18.3,
   "leagueRank": 93,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.1,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62"
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
   "leagueRank": 106,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "name": "Venu Yengala",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 141,
   "totalPointsAgainst": 156,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -15,
   "ppg": 17.6,
   "leagueRank": 102,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.6,
   "playerId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "name": "Keith Richard",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 140,
   "totalPointsAgainst": 159,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -19,
   "ppg": 17.5,
   "leagueRank": 101,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "cb2183c7-8c7b-4ebf-93da-66aeabe13d3b"
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
   "leagueRank": 104,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7,
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
   "leagueRank": 108,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "name": "Franklin Yiu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 135,
   "totalPointsAgainst": 160,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -25,
   "ppg": 16.9,
   "leagueRank": 111,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 44,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77"
  },
  {
   "name": "Dilip Patel",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 136,
   "totalPointsAgainst": 162,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -26,
   "ppg": 17,
   "leagueRank": 114,
   "rating": -1.3,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168"
  },
  {
   "name": "Gary Garretson",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 115,
   "totalPointsAgainst": 104,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": 11,
   "ppg": 19.2,
   "leagueRank": 91,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.2,
   "playerId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "name": "Derek Livingston",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 104,
   "totalPointsAgainst": 104,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": 0,
   "ppg": 17.3,
   "leagueRank": 99,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "name": "Jimmy Duong",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 115,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -3,
   "ppg": 19.2,
   "leagueRank": 105,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1,
   "playerId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea"
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
   "leagueRank": 110,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.9,
   "playerId": "3196f425-e79a-4def-b7c3-bc3205976ba3"
  },
  {
   "name": "Jonathan Carter",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 101,
   "totalPointsAgainst": 112,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -11,
   "ppg": 16.8,
   "leagueRank": 115,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
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
   "leagueRank": 116,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 43,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.6,
   "playerId": "81875a5e-2b65-4152-bace-b4c96517579d"
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
   "leagueRank": 109,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "name": "Andress Mims",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 93,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -29,
   "ppg": 15.5,
   "leagueRank": 131,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "name": "Samuel Kashefska",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 135,
   "totalPointsAgainst": 135,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 28.6,
   "diff": 0,
   "ppg": 19.3,
   "leagueRank": 92,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "name": "Jared Rapoport",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 131,
   "totalPointsAgainst": 136,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -5,
   "ppg": 18.7,
   "leagueRank": 98,
   "rating": 0.8,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "b19f3a31-ce60-4c40-b903-1fd60c95f649"
  },
  {
   "name": "Jacob Rosengarten",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 124,
   "totalPointsAgainst": 131,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -7,
   "ppg": 17.7,
   "leagueRank": 103,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
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
   "leagueRank": 117,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3"
  },
  {
   "name": "Paul Perumaly",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 124,
   "totalPointsAgainst": 140,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -16,
   "ppg": 17.7,
   "leagueRank": 112,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.1,
   "playerId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b"
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
   "leagueRank": 118,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "4f34c672-f457-467f-98d8-7d5d6c8add16"
  },
  {
   "name": "Dhruv Dobariya",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 118,
   "totalPointsAgainst": 142,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -24,
   "ppg": 16.9,
   "leagueRank": 121,
   "rating": -1,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "name": "Hua Lin",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 116,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -27,
   "ppg": 16.6,
   "leagueRank": 120,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.9,
   "playerId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
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
   "leagueRank": 126,
   "rating": -1.6,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "name": "David Bogatyrev",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 147,
   "totalPointsAgainst": 158,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -11,
   "ppg": 18.4,
   "leagueRank": 107,
   "rating": 0.5,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "name": "Rick Olafsson",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 142,
   "totalPointsAgainst": 156,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -14,
   "ppg": 17.8,
   "leagueRank": 113,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.9,
   "playerId": "088a0cec-3f4c-4100-afd4-33d4462dc7e3"
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
   "leagueRank": 125,
   "rating": -2.2,
   "ratingGames": 8,
   "confidence": 49,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "635ba257-e1ed-4db3-8303-5f241388437e"
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
   "leagueRank": 124,
   "rating": -1.2,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "63eeb91c-2c9c-4dbe-8662-58fbb1d95092"
  },
  {
   "name": "Gianni Roman",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 124,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -40,
   "ppg": 15.5,
   "leagueRank": 130,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 49,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.2,
   "playerId": "22294f41-611f-4e8f-962e-377e43209945"
  },
  {
   "name": "Kevin Lew",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 123,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -41,
   "ppg": 15.4,
   "leagueRank": 129,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.3,
   "playerId": "03886b04-b474-4dda-b7f3-eb4f4954399c"
  },
  {
   "name": "David Tabacco",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 120,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -44,
   "ppg": 15,
   "leagueRank": 146,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 41,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "name": "Xan Hong",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 116,
   "totalPointsAgainst": 161,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -45,
   "ppg": 14.5,
   "leagueRank": 141,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "name": "Ian Diamond",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 119,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -45,
   "ppg": 14.9,
   "leagueRank": 139,
   "rating": -2.9,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "f5a96445-7d1c-459b-8642-12a5d11554db"
  },
  {
   "name": "Stephen Fredericksen",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 90,
   "totalPointsAgainst": 99,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -9,
   "ppg": 18,
   "leagueRank": 119,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "name": "Chris Machuzak",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 97,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -18,
   "ppg": 16.2,
   "leagueRank": 145,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "name": "Steve Hong",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 101,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -23,
   "ppg": 16.8,
   "leagueRank": 134,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.4,
   "playerId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "name": "Kurt Skalamera",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 90,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -32,
   "ppg": 15,
   "leagueRank": 147,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.9,
   "playerId": "04000200-8214-42ff-9a0d-2189ffaccd42"
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
   "leagueRank": 151,
   "rating": -2.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1
  },
  {
   "name": "Eric Ruiz",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 129,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 14.3,
   "diff": -14,
   "ppg": 18.4,
   "leagueRank": 122,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527"
  },
  {
   "name": "Rohit Mankotia",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 127,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 14.3,
   "diff": -18,
   "ppg": 18.1,
   "leagueRank": 123,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "name": "Jaiveer Narwal",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 117,
   "totalPointsAgainst": 139,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -22,
   "ppg": 16.7,
   "leagueRank": 133,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.5,
   "playerId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "name": "Carlos Rincon",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 123,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 14.3,
   "diff": -22,
   "ppg": 17.6,
   "leagueRank": 127,
   "rating": -0.8,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "name": "Frederick Cox",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 122,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -23,
   "ppg": 17.4,
   "leagueRank": 132,
   "rating": -2.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "name": "Jason Mcmanmon",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 115,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -28,
   "ppg": 16.4,
   "leagueRank": 137,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1,
   "playerId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce"
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
   "leagueRank": 136,
   "rating": -0.7,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Ethan Fu",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 115,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 14.3,
   "diff": -30,
   "ppg": 16.4,
   "leagueRank": 142,
   "rating": -2.4,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "a8585e9c-872e-466c-9583-9680e557f757"
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
   "leagueRank": 144,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Jimmy Lee",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 104,
   "totalPointsAgainst": 144,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -40,
   "ppg": 14.9,
   "leagueRank": 150,
   "rating": -2.1,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "name": "Michael Barndt",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 142,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 12.5,
   "diff": -24,
   "ppg": 17.8,
   "leagueRank": 128,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "50853eee-28e0-4380-b379-35935eb2115a"
  },
  {
   "name": "Harsh Upadhyaya",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 129,
   "totalPointsAgainst": 158,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 12.5,
   "diff": -29,
   "ppg": 16.1,
   "leagueRank": 143,
   "rating": -1.4,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "3b9648e1-481c-4007-9932-d8df648f7bab"
  },
  {
   "name": "Steppan Konoplev",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 136,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -30,
   "ppg": 17,
   "leagueRank": 135,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.1,
   "playerId": "8f076d51-25ba-4203-97f8-12194ba5b001"
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
   "leagueRank": 148,
   "rating": -2.4,
   "ratingGames": 8,
   "confidence": 45,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Paul Chantler",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 134,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -32,
   "ppg": 16.8,
   "leagueRank": 138,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "b1f8fd31-d4ed-4824-9ae6-174e5e2f21c2"
  },
  {
   "name": "Josh Rito",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 121,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 12.5,
   "diff": -45,
   "ppg": 15.1,
   "leagueRank": 153,
   "rating": -3.1,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "name": "Shalin Rawal",
   "gender": "Male",
   "team": "Montville",
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
   "playerId": "08530d21-2dc5-4f71-9d49-9191ec192860"
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
   "leagueRank": 222,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "name": "Rakshit Maddur Gopinath",
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
   "leagueRank": 214,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1448a485-6172-48af-96e0-f4876e9c5268"
  },
  {
   "name": "Daniel Hadley",
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
   "leagueRank": 195,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "23adcd68-130d-4176-b367-d3cd31260d21"
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
   "leagueRank": 245,
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
   "leagueRank": 173,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2811dd08-7b50-455b-bc23-46b064a912eb"
  },
  {
   "name": "Uday Acham",
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
   "leagueRank": 167,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "29646b59-bcf0-4a90-a70d-2824eb639c4c"
  },
  {
   "name": "Pat Wilson",
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
   "leagueRank": 248,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2e77eb09-81b2-4cc7-8ed1-4cbf034705f6"
  },
  {
   "name": "Cosme Tapia",
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
   "leagueRank": 240,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "32712f41-d770-4a6c-b536-d596bab73e13"
  },
  {
   "name": "Ali Abbas",
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
   "leagueRank": 166,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3651f648-493a-4517-8085-a8b9cb086c07"
  },
  {
   "name": "Anthony Simonetti",
   "gender": "Male",
   "team": "Pickleball HQ",
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
   "leagueRank": 236,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b"
  },
  {
   "name": "Didier Jean-Baptiste",
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
   "leagueRank": 198,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3ea74039-550d-4a76-a514-e024aea9fd85"
  },
  {
   "name": "Larry Minsky",
   "gender": "Male",
   "team": "Picklr Newtown",
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
   "leagueRank": 216,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440"
  },
  {
   "name": "Russell Cripps",
   "gender": "Male",
   "team": "Bounce Malvern",
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
   "playerId": "43d2bf2c-e732-4ce8-adae-035d989fa792"
  },
  {
   "name": "Joseph Luka",
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
   "leagueRank": 212,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe"
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
   "leagueRank": 208,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "name": "Michael Gilbert",
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
   "leagueRank": 193,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a"
  },
  {
   "name": "Uttam Purohit",
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
   "leagueRank": 223,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5bec8637-0324-4af8-8084-3779e0f43521"
  },
  {
   "name": "J-P Lautenschlager",
   "gender": "Male",
   "team": "Picklr Newtown",
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
   "leagueRank": 206,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5c3659f9-08d3-4745-832b-f7dd3f8c5ae5"
  },
  {
   "name": "Carlos Idrovo",
   "gender": "Male",
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
   "leagueRank": 196,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5c6366e8-1fad-44ee-bf38-4ba5d838769d"
  },
  {
   "name": "Vincent Demarco",
   "gender": "Male",
   "team": "Bounce Malvern",
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
   "leagueRank": 181,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5c88bc5a-3350-4271-8305-114385b45a3d"
  },
  {
   "name": "Matthew Carrington",
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
   "leagueRank": 174,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6a2f3777-38b2-4f02-b550-ce38395914d2"
  },
  {
   "name": "Josh Fink",
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
   "leagueRank": 187,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
  },
  {
   "name": "Timothy Lynskey",
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
   "leagueRank": 213,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "718c6948-a987-43bb-a1f3-cf7aead75edb"
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
   "leagueRank": 247,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "name": "Eden Ksendzovsky",
   "gender": "Male",
   "team": "Premiere",
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
   "leagueRank": 205,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "75496a80-8064-40ae-ba4b-36c156d70885"
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
   "leagueRank": 218,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
  },
  {
   "name": "Sal Bwint",
   "gender": "Male",
   "team": "Bounce Malvern",
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
   "playerId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e"
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
   "leagueRank": 204,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8f9053fa-7f27-4269-9b57-24af31d53222"
  },
  {
   "name": "Nicholas Lugo",
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
   "leagueRank": 211,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f"
  },
  {
   "name": "Thomas Moran",
   "gender": "Male",
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
   "leagueRank": 217,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9571d7b5-fc34-4c77-a51f-c99b286e4304"
  },
  {
   "name": "Lincoln Jensen",
   "gender": "Male",
   "team": "Bounce Malvern",
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
   "leagueRank": 199,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "98842749-0d7d-4b20-b78a-50c79d087699"
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
   "leagueRank": 246,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9e348e82-13d0-4911-8efa-e5a2f7afded1"
  },
  {
   "name": "Buyi Zhang",
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
   "leagueRank": 250,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "abd55992-7237-4a92-817d-3d39388369c9"
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
   "leagueRank": 176,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b549a93c-acec-4419-9e30-5d8375518d2d"
  },
  {
   "name": "Sandeep Malhotra",
   "gender": "Male",
   "team": "Montville",
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
   "leagueRank": 215,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
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
   "leagueRank": 194,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c5d07eb6-d276-4503-a077-c092e89c2ae8"
  },
  {
   "name": "Yong Kim",
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
   "leagueRank": 201,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ca670ae8-0768-49d4-9984-f708cd52786c"
  },
  {
   "name": "Jamison Rowles",
   "gender": "Male",
   "team": "Bounce Malvern",
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
   "playerId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
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
   "leagueRank": 207,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cfc63dad-7d45-4fa6-810d-5d3bbc7619ca"
  },
  {
   "name": "Jun Zhi Tan",
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
   "leagueRank": 239,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
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
   "leagueRank": 241,
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
   "leagueRank": 238,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d6628146-5ecf-46fa-9ec2-4385171098fd"
  },
  {
   "name": "Christopher Giasi",
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
   "leagueRank": 192,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d6ca21c0-822e-422f-9721-34120ba90184"
  },
  {
   "name": "Jesse Pettit",
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
   "leagueRank": 221,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d6e30691-3b20-465b-8fa8-560017c20c15"
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
   "leagueRank": 186,
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
   "leagueRank": 182,
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
   "leagueRank": 237,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "da802117-fbc3-4b98-9653-9924387691cc"
  },
  {
   "name": "Bill Brandt",
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
   "leagueRank": 168,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "dc530014-0e3b-4485-b265-8555bafe6e19"
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
   "leagueRank": 242,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "name": "Christopher Uston",
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
   "leagueRank": 244,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373"
  },
  {
   "name": "Ritesh Patel",
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
   "leagueRank": 219,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7"
  },
  {
   "name": "Charles Evans",
   "gender": "Male",
   "team": "Bounce Malvern",
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
   "playerId": "ebc8788f-79c2-4204-a14a-47b6bc480d5d"
  },
  {
   "name": "Saad Talat Siddiqui",
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
   "leagueRank": 234,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ebfeb773-e8cd-4b6a-aafd-ee2772540168"
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
   "leagueRank": 183,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "name": "Ian Kohn",
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
   "leagueRank": 203,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
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
   "leagueRank": 225,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f008538f-037a-4850-ad1d-fd9108382a81"
  },
  {
   "name": "Andy Ro",
   "gender": "Male",
   "team": "Picklr Newtown",
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
   "leagueRank": 227,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "name": "Brian “Bubba” Falco",
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
   "leagueRank": 185,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f53cbe34-439d-4183-8c32-7264fbca23fa"
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
   "leagueRank": 180,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f59307d0-0495-421c-8cee-28c2e2b56bcf"
  },
  {
   "name": "Salman Saad",
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
   "leagueRank": 230,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "name": "David Fiscella",
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
   "leagueRank": 188,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
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
   "leagueRank": 170,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fdbf0c0b-a961-47e4-abbe-5a56ad7a7bec"
  },
  {
   "name": "Cullen Curley",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 125,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 0,
   "diff": -22,
   "ppg": 17.9,
   "leagueRank": 149,
   "rating": -1.4,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "name": "Erik Reilly",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 123,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 0,
   "diff": -24,
   "ppg": 17.6,
   "leagueRank": 140,
   "rating": 0.8,
   "ratingGames": 7,
   "confidence": 40,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.4,
   "playerId": "479815f2-1e14-4b96-9423-d99c15b2fe2b"
  },
  {
   "name": "Mario Contreras",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 95,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -31,
   "ppg": 15.8,
   "leagueRank": 155,
   "rating": -2,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.7,
   "playerId": "323d96c3-4160-410b-96a5-87263e825f62"
  },
  {
   "name": "Siva Indupuru",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 111,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -36,
   "ppg": 15.9,
   "leagueRank": 152,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.2,
   "playerId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "name": "Peter Chen",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 68,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -37,
   "ppg": 13.6,
   "leagueRank": 163,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.2,
   "playerId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
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
   "leagueRank": 159,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.8,
   "playerId": "54d78d2c-c0d7-42c0-aef4-567311f2e51e"
  },
  {
   "name": "Aaron Chan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 86,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -40,
   "ppg": 14.3,
   "leagueRank": 161,
   "rating": -3.3,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "57666861-23d0-4809-9556-b646579f2fd6"
  },
  {
   "name": "Michael Vollmer",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 106,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -41,
   "ppg": 15.1,
   "leagueRank": 154,
   "rating": -1.4,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.9,
   "playerId": "148387a8-f20a-44df-981d-0d9d2e7bf443"
  },
  {
   "name": "Wensheng Yue",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 104,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -43,
   "ppg": 14.9,
   "leagueRank": 156,
   "rating": -0.8,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 2.2,
   "playerId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "name": "Big G",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 103,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -44,
   "ppg": 14.7,
   "leagueRank": 157,
   "rating": -2.1,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
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
   "leagueRank": 164,
   "rating": -2.9,
   "ratingGames": 6,
   "confidence": 44,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "33feb337-f2ab-4e6d-819b-9535ec743685"
  },
  {
   "name": "Ben Cortes",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 99,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -48,
   "ppg": 14.1,
   "leagueRank": 158,
   "rating": -2.4,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "name": "Ken Weinstein",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 98,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -49,
   "ppg": 14,
   "leagueRank": 162,
   "rating": -3.4,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
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
   "leagueRank": 160,
   "rating": -3,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.6,
   "playerId": "545f9968-fc0a-420b-ba42-db16c6e1f884"
  },
  {
   "name": "Pedro Delgado",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 85,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -62,
   "ppg": 12.1,
   "leagueRank": 165,
   "rating": -3.3,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.1,
   "playerId": "3e2aac0c-7c01-4c71-a288-900b54059019"
  }
 ],
 "teams": [
  {
   "name": "Pickleball HQ",
   "w": 1,
   "l": 0,
   "pf": 692,
   "pa": 509,
   "gw": 30,
   "gl": 2,
   "diff": 183,
   "gameDiff": 28,
   "power": 1.3,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     30,
     2
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 1,
   "l": 0,
   "pf": 647,
   "pa": 536,
   "gw": 26,
   "gl": 6,
   "diff": 111,
   "gameDiff": 20,
   "power": 0.8,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     26,
     6
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Montville",
   "w": 1,
   "l": 0,
   "pf": 679,
   "pa": 616,
   "gw": 25,
   "gl": 7,
   "diff": 63,
   "gameDiff": 18,
   "power": 0.4,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     25,
     7
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
   "l": 0,
   "pf": 693,
   "pa": 564,
   "gw": 24,
   "gl": 8,
   "diff": 129,
   "gameDiff": 16,
   "power": 1,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     24,
     8
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Picklr Newtown",
   "w": 1,
   "l": 0,
   "pf": 663,
   "pa": 544,
   "gw": 24,
   "gl": 8,
   "diff": 119,
   "gameDiff": 16,
   "power": 0.7,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     24,
     8
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 1,
   "l": 0,
   "pf": 639,
   "pa": 535,
   "gw": 23,
   "gl": 9,
   "diff": 104,
   "gameDiff": 14,
   "power": 0.6,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     23,
     9
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 1,
   "l": 0,
   "pf": 638,
   "pa": 567,
   "gw": 22,
   "gl": 10,
   "diff": 71,
   "gameDiff": 12,
   "power": 0.5,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     22,
     10
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
   "l": 0,
   "pf": 625,
   "pa": 561,
   "gw": 20,
   "gl": 12,
   "diff": 64,
   "gameDiff": 8,
   "power": 0.5,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     20,
     12
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
   "power": 0.1,
   "powerRank": 3,
   "pod": 2,
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
   "name": "Flemington",
   "w": 0,
   "l": 1,
   "pf": 593,
   "pa": 605,
   "gw": 16,
   "gl": 16,
   "diff": -12,
   "gameDiff": 0,
   "power": -0.1,
   "powerRank": 4,
   "pod": 2,
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
   "name": "Jersey Devil",
   "w": 0,
   "l": 1,
   "pf": 561,
   "pa": 625,
   "gw": 12,
   "gl": 20,
   "diff": -64,
   "gameDiff": -8,
   "power": -0.4,
   "powerRank": 7,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     12,
     20
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
   "l": 1,
   "pf": 567,
   "pa": 638,
   "gw": 10,
   "gl": 22,
   "diff": -71,
   "gameDiff": -12,
   "power": -0.5,
   "powerRank": 8,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     10,
     22
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Tempest",
   "w": 0,
   "l": 1,
   "pf": 535,
   "pa": 639,
   "gw": 9,
   "gl": 23,
   "diff": -104,
   "gameDiff": -14,
   "power": -0.8,
   "powerRank": 10,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     9,
     23
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
   "l": 1,
   "pf": 544,
   "pa": 663,
   "gw": 8,
   "gl": 24,
   "diff": -119,
   "gameDiff": -16,
   "power": -0.9,
   "powerRank": 11,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     8,
     24
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
   "l": 1,
   "pf": 564,
   "pa": 693,
   "gw": 8,
   "gl": 24,
   "diff": -129,
   "gameDiff": -16,
   "power": -0.8,
   "powerRank": 6,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     8,
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
   "w": 0,
   "l": 1,
   "pf": 616,
   "pa": 679,
   "gw": 7,
   "gl": 25,
   "diff": -63,
   "gameDiff": -18,
   "power": -0.5,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     7,
     25
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
   "l": 1,
   "pf": 536,
   "pa": 647,
   "gw": 6,
   "gl": 26,
   "diff": -111,
   "gameDiff": -20,
   "power": -0.7,
   "powerRank": 9,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     6,
     26
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
   "l": 1,
   "pf": 509,
   "pa": 692,
   "gw": 2,
   "gl": 30,
   "diff": -183,
   "gameDiff": -28,
   "power": -1.2,
   "powerRank": 12,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     2,
     30
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 0,
   "l": 0,
   "pf": 0,
   "pa": 0,
   "gw": 0,
   "gl": 0,
   "diff": 0,
   "gameDiff": 0,
   "power": null,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
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
    "Matthew Schwartz",
    "Gary White",
    "Michael Mazzola",
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
   "result": null,
   "week": 2,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Allstar Pickler",
   "time": "2026-09-01T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-09-01T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Picklr Newtown",
   "away": "APC Garden State",
   "time": "2026-09-01T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Flemington",
   "away": "Montville",
   "time": "2026-09-01T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Dill Dinkers Newport",
   "away": "Bounce Tempest",
   "time": "2026-09-01T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
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
     "h": [
      "Steppan Konoplev",
      "Malay Kaity"
     ],
     "a": [
      "Ethan Fu",
      "Jimmy Lee"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 2,
   "home": "Monroe",
   "away": "Pickleball HQ",
   "time": "2026-09-01T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
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
     "h": [
      "Shawn Gold",
      "Stephen Fredericksen"
     ],
     "a": [
      "Thomas Moran",
      "Carlos Idrovo"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 2,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Premiere",
   "time": "2026-09-01T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Pickle House",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-01T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 2,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-09-01T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
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
     "h": [
      "Dan Ruble",
      "Mario Contreras"
     ],
     "a": [
      "Jordan Demcher",
      "Vincent Demarco"
     ]
    }
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
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball Kingdom Hamilton",
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
   "time": "2026-09-15T19:30:00",
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
   "home": "Dill Dinkers Freehold",
   "away": "Premiere",
   "time": "2026-09-22T19:30:00",
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
   "home": "Dill Dinkers Freehold",
   "away": "Monroe",
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
   "home": "Dill Dinkers Freehold",
   "away": "Pickle House",
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
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball HQ",
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
  "Malay Kaity": "199ae8e1-22b4-4d8d-a41d-29cb984a3b33",
  "Chris Shung": "2253df3c-7a50-4a9a-b197-2f80d64b089f",
  "Yiqun (Nina) Chen": "39da74b5-60a5-49cf-ae21-80b24602c3f4",
  "Dion Brown": "4c6d1b49-9a66-4e43-8a49-cf56c2901a3b",
  "Justin Umana": "5eba9352-3bf9-4927-831e-52eaa3fb65a7",
  "David Brond": "790dc637-f23d-4942-af8a-bfd20b474282",
  "Craig Wu": "8667ff30-fa9e-4078-a6a0-63fcb68c8425",
  "Steven Santiago": "add792d2-e174-42b1-8bf8-bc9e2c2aa354",
  "Edward Fu": "b243c9db-ff2c-4db7-bcfd-27f3b0e7b6f1",
  "John Sallo": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0",
  "Sean Liotine": "b7a5d158-2b7c-4fdc-83ab-aea797095631",
  "Jason Ilkowitz": "dcd4414c-5981-4a70-a4dc-fd943d6d5e17",
  "Nitin Chawke": "e1859a0e-b6a3-451b-a14e-f4d978fc520d",
  "Chris Gander": "ebc6c2b2-f16d-478f-90fb-886d4e67f0aa",
  "Andrew Liou": "fd14ada2-5855-4bb3-a8cd-d68aba23ba95"
 },
 "meta": {
  "matchesPlayed": 9,
  "weeks": "1",
  "totalPlayers": 228,
  "ratingHistoryWeeks": [
   1
  ],
  "divisionSlug": "c118b8e9",
  "hasPlayoffs": false,
  "typicalDay": "Tuesdays",
  "detailFile": "detail-c118b8e9.js",
  "clubName": "",
  "divisionName": "3.75 Mens",
  "leagueType": "travel",
  "singleGender": "Male",
  "podCount": 2,
  "podNames": [
   "East / South",
   "North"
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
    "East": [
     "Dill Dinkers Freehold",
     "Monroe",
     "Pickle House",
     "Pickleball HQ",
     "Pickleball Kingdom Hamilton",
     "Premiere"
    ],
    "North": [
     "Allstar Pickler",
     "Flemington",
     "Home Court",
     "Montville",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Lehigh Valley",
     "PickleRage Union County"
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
    ],
    "Pod 2": [
     "Allstar Pickler",
     "Flemington",
     "Home Court",
     "Montville",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Lehigh Valley",
     "PickleRage Union County"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-08-31";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["c118b8e9"] = DATA;
})();
