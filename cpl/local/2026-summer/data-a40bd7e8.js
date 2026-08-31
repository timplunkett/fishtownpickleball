(function () {
  const DATA = {
 "players": [
  {
   "name": "Paul Mcdonald",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 160,
   "totalPointsAgainst": 141,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "df823bbf-b2be-42e4-9f4d-b50aaabb78d7",
   "winPct": 87.5,
   "diff": 19,
   "ppg": 20,
   "leagueRank": 33,
   "rating": 0.5,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Eric Le",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 288,
   "totalPointsAgainst": 217,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "04d19e47-d435-4eb7-916a-9b5188bd103c",
   "winPct": 85.7,
   "diff": 71,
   "ppg": 20.6,
   "leagueRank": 16,
   "rating": 2.4,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Corey Sawin",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "890620b4-0178-497f-a752-a6f1eeae3a32",
   "winPct": 83.3,
   "diff": 19,
   "ppg": 20.5,
   "leagueRank": 45,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.8
  },
  {
   "name": "Matt Enz",
   "gender": "Male",
   "team": "Kitchen Renegades",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 46,
   "losses": 10,
   "pointsWon": 1134,
   "totalPointsAgainst": 870,
   "mixedWins": 24,
   "mixedLosses": 2,
   "genderWins": 22,
   "genderLosses": 8,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 82.1,
   "diff": 264,
   "ppg": 20.3,
   "leagueRank": 1,
   "rating": 7.1,
   "ratingGames": 56,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.8,
   "playerId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "name": "Mary Beth Devaul",
   "gender": "Female",
   "team": "The Bouncers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 33,
   "losses": 11,
   "pointsWon": 870,
   "totalPointsAgainst": 707,
   "mixedWins": 20,
   "mixedLosses": 2,
   "genderWins": 13,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 75,
   "diff": 163,
   "ppg": 19.8,
   "leagueRank": 2,
   "rating": 1.1,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.8,
   "playerId": "1006ef09-eacb-4614-9b54-529256f87497"
  },
  {
   "name": "Johnny Deng",
   "gender": "Male",
   "team": "Big Dink Energy",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 242,
   "totalPointsAgainst": 195,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "e105f8f9-ac3d-4720-862b-477048d740cd",
   "winPct": 75,
   "diff": 47,
   "ppg": 20.2,
   "leagueRank": 21,
   "rating": 2.1,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Richard Wining",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 242,
   "totalPointsAgainst": 195,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "aefe386c-3a84-4172-9b61-00defc787bf0",
   "winPct": 75,
   "diff": 47,
   "ppg": 20.2,
   "leagueRank": 29,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Carolyn Laroque",
   "gender": "Female",
   "team": "The Bouncers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 31,
   "losses": 11,
   "pointsWon": 833,
   "totalPointsAgainst": 700,
   "mixedWins": 16,
   "mixedLosses": 5,
   "genderWins": 15,
   "genderLosses": 6,
   "clutchWins": 11,
   "clutchLosses": 1,
   "winPct": 73.8,
   "diff": 133,
   "ppg": 19.8,
   "leagueRank": 4,
   "rating": 0.2,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.2,
   "playerId": "1b62307b-ca04-485d-8788-bc54f446a638"
  },
  {
   "name": "Olivia Lee",
   "gender": "Female",
   "team": "The Dilluminati",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 41,
   "losses": 15,
   "pointsWon": 1079,
   "totalPointsAgainst": 952,
   "mixedWins": 17,
   "mixedLosses": 11,
   "genderWins": 24,
   "genderLosses": 4,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 73.2,
   "diff": 127,
   "ppg": 19.3,
   "leagueRank": 5,
   "rating": 2,
   "ratingGames": 56,
   "confidence": 88,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.9,
   "playerId": "af2bdee6-7d41-4730-869b-2c6530e7378d"
  },
  {
   "name": "Justyna Wojdyla",
   "gender": "Female",
   "team": "The Dilluminati",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 40,
   "losses": 16,
   "pointsWon": 1082,
   "totalPointsAgainst": 975,
   "mixedWins": 18,
   "mixedLosses": 11,
   "genderWins": 22,
   "genderLosses": 5,
   "clutchWins": 11,
   "clutchLosses": 3,
   "winPct": 71.4,
   "diff": 107,
   "ppg": 19.3,
   "leagueRank": 6,
   "rating": 2.5,
   "ratingGames": 56,
   "confidence": 88,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 1.3,
   "playerId": "12db9b49-da72-4367-8e2c-b9718a9bc2fb"
  },
  {
   "name": "Jeremy Herrin",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 441,
   "totalPointsAgainst": 353,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 69.6,
   "diff": 88,
   "ppg": 19.2,
   "leagueRank": 3,
   "rating": 3.3,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.7,
   "playerId": "73bc4c66-fbd6-4647-935e-589dac38ab78"
  },
  {
   "name": "Colin Hamilton",
   "gender": "Male",
   "team": "The Dilluminati",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 36,
   "losses": 18,
   "pointsWon": 1044,
   "totalPointsAgainst": 913,
   "mixedWins": 16,
   "mixedLosses": 11,
   "genderWins": 20,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 66.7,
   "diff": 131,
   "ppg": 19.3,
   "leagueRank": 8,
   "rating": 2.2,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.8,
   "playerId": "c77aff78-c746-4adc-84eb-eb589d5a90cd"
  },
  {
   "name": "Patricia Costantini",
   "gender": "Female",
   "team": "The Bouncers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 354,
   "totalPointsAgainst": 311,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 43,
   "ppg": 19.7,
   "leagueRank": 24,
   "rating": 0,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.1,
   "playerId": "a125eb84-bceb-4262-a45a-29df0234e738"
  },
  {
   "name": "Deborah Sawin",
   "gender": "Female",
   "team": "The Bouncers",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 16,
   "losses": 8,
   "pointsWon": 456,
   "totalPointsAgainst": 422,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 7,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 34,
   "ppg": 19,
   "leagueRank": 14,
   "rating": -0.6,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "96775a9e-d923-45e3-a5e4-1754ae3832bd"
  },
  {
   "name": "Crista Renauro",
   "gender": "Female",
   "team": "The Dilluminati",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 235,
   "totalPointsAgainst": 216,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "winPct": 66.7,
   "diff": 19,
   "ppg": 19.6,
   "leagueRank": 35,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Ryan Gerstel",
   "gender": "Male",
   "team": "The Dilluminati",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 42,
   "losses": 22,
   "pointsWon": 1262,
   "totalPointsAgainst": 1110,
   "mixedWins": 20,
   "mixedLosses": 11,
   "genderWins": 22,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 11,
   "winPct": 65.6,
   "diff": 152,
   "ppg": 19.7,
   "leagueRank": 7,
   "rating": 3.7,
   "ratingGames": 64,
   "confidence": 89,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.5,
   "playerId": "de47e045-80e3-4209-a32e-d1c8a6de083b"
  },
  {
   "name": "Brian Schreiber",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 21,
   "losses": 11,
   "pointsWon": 624,
   "totalPointsAgainst": 534,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 65.6,
   "diff": 90,
   "ppg": 19.5,
   "leagueRank": 9,
   "rating": -1.1,
   "ratingGames": 32,
   "confidence": 83,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.9,
   "playerId": "b49e35c9-e930-406b-8a82-1f68c3eb7272"
  },
  {
   "name": "Daniel Seng",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 13,
   "losses": 7,
   "pointsWon": 389,
   "totalPointsAgainst": 331,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 65,
   "diff": 58,
   "ppg": 19.5,
   "leagueRank": 22,
   "rating": 0.3,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1,
   "playerId": "40303bf3-7bee-465b-834a-51847fab81f6"
  },
  {
   "name": "Issac Gao",
   "gender": "Male",
   "team": "Kitchen Renegades",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 24,
   "losses": 14,
   "pointsWon": 716,
   "totalPointsAgainst": 693,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 14,
   "genderLosses": 5,
   "clutchWins": 11,
   "clutchLosses": 2,
   "winPct": 63.2,
   "diff": 23,
   "ppg": 18.8,
   "leagueRank": 10,
   "rating": 0.8,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "ba54259c-c50f-446b-9385-f12e5c6fdf23"
  },
  {
   "name": "Jennifer Minehan",
   "gender": "Female",
   "team": "The Bouncers",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 34,
   "losses": 22,
   "pointsWon": 1065,
   "totalPointsAgainst": 976,
   "mixedWins": 16,
   "mixedLosses": 14,
   "genderWins": 18,
   "genderLosses": 8,
   "clutchWins": 12,
   "clutchLosses": 7,
   "winPct": 60.7,
   "diff": 89,
   "ppg": 19,
   "leagueRank": 11,
   "rating": 2.3,
   "ratingGames": 56,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1,
   "playerId": "e379e47b-dcde-4adb-8cc6-76e5660c457e"
  },
  {
   "name": "Jen Huang",
   "gender": "Female",
   "team": "The Dilluminati",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 26,
   "losses": 17,
   "pointsWon": 824,
   "totalPointsAgainst": 738,
   "mixedWins": 12,
   "mixedLosses": 9,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 60.5,
   "diff": 86,
   "ppg": 19.2,
   "leagueRank": 15,
   "rating": 0.7,
   "ratingGames": 43,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.7,
   "playerId": "382d0871-3d11-4406-8214-0be9c7256390"
  },
  {
   "name": "Jamie Damirgian",
   "gender": "Female",
   "team": "The Dilluminati",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 26,
   "losses": 17,
   "pointsWon": 830,
   "totalPointsAgainst": 755,
   "mixedWins": 11,
   "mixedLosses": 10,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 60.5,
   "diff": 75,
   "ppg": 19.3,
   "leagueRank": 12,
   "rating": 0.9,
   "ratingGames": 43,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "67e72d20-d17c-4480-8159-9e4be9e18459"
  },
  {
   "name": "Linda Goss",
   "gender": "Female",
   "team": "The Dilluminati",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 25,
   "losses": 17,
   "pointsWon": 785,
   "totalPointsAgainst": 701,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 17,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 59.5,
   "diff": 84,
   "ppg": 18.7,
   "leagueRank": 13,
   "rating": 1.6,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "14e5edae-ff22-415b-8267-d46a2117ed8d"
  },
  {
   "name": "Mike Scioli Jr",
   "gender": "Male",
   "team": "The Dilluminati",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 32,
   "losses": 22,
   "pointsWon": 1004,
   "totalPointsAgainst": 967,
   "mixedWins": 16,
   "mixedLosses": 12,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 13,
   "clutchLosses": 8,
   "winPct": 59.3,
   "diff": 37,
   "ppg": 18.6,
   "leagueRank": 20,
   "rating": 0.8,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "6ae15153-88e8-48c0-93b6-8be97adbadce"
  },
  {
   "name": "Matt King",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 39,
   "losses": 27,
   "pointsWon": 1214,
   "totalPointsAgainst": 1139,
   "mixedWins": 21,
   "mixedLosses": 13,
   "genderWins": 18,
   "genderLosses": 14,
   "clutchWins": 11,
   "clutchLosses": 9,
   "winPct": 59.1,
   "diff": 75,
   "ppg": 18.4,
   "leagueRank": 19,
   "rating": 1.4,
   "ratingGames": 66,
   "confidence": 90,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.8,
   "playerId": "875e4351-64ca-4d5a-a719-332b28d40bea"
  },
  {
   "name": "Lauren Brimhall",
   "gender": "Female",
   "team": "Kitchen Renegades",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 19,
   "losses": 16,
   "pointsWon": 662,
   "totalPointsAgainst": 600,
   "mixedWins": 12,
   "mixedLosses": 8,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 54.3,
   "diff": 62,
   "ppg": 18.9,
   "leagueRank": 17,
   "rating": 1.7,
   "ratingGames": 35,
   "confidence": 84,
   "strengthOfPartners": 2.9,
   "strengthOfOpponents": 1.5,
   "playerId": "8caefff0-01e3-4d6a-ae7b-6c96015634c8"
  },
  {
   "name": "Bennett Matthew",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 25,
   "losses": 22,
   "pointsWon": 867,
   "totalPointsAgainst": 799,
   "mixedWins": 13,
   "mixedLosses": 11,
   "genderWins": 12,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 53.2,
   "diff": 68,
   "ppg": 18.4,
   "leagueRank": 26,
   "rating": -0.1,
   "ratingGames": 47,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "460d93c8-9936-43b5-b3ba-7328e174fb2b"
  },
  {
   "name": "Kristen Buenconsejo",
   "gender": "Female",
   "team": "The Bouncers",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 18,
   "losses": 16,
   "pointsWon": 624,
   "totalPointsAgainst": 619,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 52.9,
   "diff": 5,
   "ppg": 18.4,
   "leagueRank": 28,
   "rating": 0.2,
   "ratingGames": 34,
   "confidence": 85,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "11acfc83-ff3d-4e5f-b234-95827745ade8"
  },
  {
   "name": "Caroline Miller",
   "gender": "Female",
   "team": "Kitchen Renegades",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 34,
   "losses": 31,
   "pointsWon": 1227,
   "totalPointsAgainst": 1160,
   "mixedWins": 20,
   "mixedLosses": 11,
   "genderWins": 14,
   "genderLosses": 20,
   "clutchWins": 10,
   "clutchLosses": 15,
   "winPct": 52.3,
   "diff": 67,
   "ppg": 18.9,
   "leagueRank": 18,
   "rating": 2.4,
   "ratingGames": 65,
   "confidence": 89,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.2,
   "playerId": "742d055d-10cf-4e3a-8cba-373b169bad38"
  },
  {
   "name": "Grace Edelson",
   "gender": "Female",
   "team": "The Bouncers",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 31,
   "losses": 31,
   "pointsWon": 1172,
   "totalPointsAgainst": 1128,
   "mixedWins": 13,
   "mixedLosses": 15,
   "genderWins": 18,
   "genderLosses": 16,
   "clutchWins": 12,
   "clutchLosses": 10,
   "winPct": 50,
   "diff": 44,
   "ppg": 18.9,
   "leagueRank": 25,
   "rating": 1.3,
   "ratingGames": 62,
   "confidence": 89,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.9,
   "playerId": "5b378b2c-5bc7-4e9b-a97c-8248e101e4f2"
  },
  {
   "name": "Nicholas Jackson",
   "gender": "Male",
   "team": "Big Dink Energy",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 28,
   "losses": 28,
   "pointsWon": 1026,
   "totalPointsAgainst": 1010,
   "mixedWins": 16,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 18,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 50,
   "diff": 16,
   "ppg": 18.3,
   "leagueRank": 23,
   "rating": 4.2,
   "ratingGames": 56,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 2.2,
   "playerId": "bb72e9bd-3d29-4f40-911c-2c5f07c73da6"
  },
  {
   "name": "Jonathan Miller",
   "gender": "Male",
   "team": "The Dilluminati",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 326,
   "totalPointsAgainst": 312,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 14,
   "ppg": 18.1,
   "leagueRank": 40,
   "rating": -0.5,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -1.4,
   "playerId": "4bdfe049-9d58-4b3e-bdf1-72d3ac296b22"
  },
  {
   "name": "Scott Bersak",
   "gender": "Male",
   "team": "Big Dink Energy",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 108,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "f0d706b3-1a14-4c99-b51e-c9ec5f866834",
   "winPct": 50,
   "diff": 7,
   "ppg": 18,
   "leagueRank": 57,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Ed Ruliff",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 26,
   "losses": 27,
   "pointsWon": 975,
   "totalPointsAgainst": 995,
   "mixedWins": 14,
   "mixedLosses": 11,
   "genderWins": 12,
   "genderLosses": 16,
   "clutchWins": 13,
   "clutchLosses": 6,
   "winPct": 49.1,
   "diff": -20,
   "ppg": 18.4,
   "leagueRank": 30,
   "rating": 1.8,
   "ratingGames": 53,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.8,
   "playerId": "b711163e-e5de-4c9c-83cb-3a46a9c47356"
  },
  {
   "name": "Elliott Knupp",
   "gender": "Male",
   "team": "The Dilluminati",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 21,
   "losses": 23,
   "pointsWon": 792,
   "totalPointsAgainst": 789,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 14,
   "clutchWins": 7,
   "clutchLosses": 10,
   "winPct": 47.7,
   "diff": 3,
   "ppg": 18,
   "leagueRank": 31,
   "rating": -0.1,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "c6c73c33-7fea-49da-acca-cf2022fe122d"
  },
  {
   "name": "Mary Mcnichol",
   "gender": "Female",
   "team": "The Dilluminati",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 17,
   "losses": 19,
   "pointsWon": 637,
   "totalPointsAgainst": 678,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 47.2,
   "diff": -41,
   "ppg": 17.7,
   "leagueRank": 37,
   "rating": -2.2,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.8,
   "playerId": "7c21a869-ee85-4708-8b8f-e4d3e39e7d2c"
  },
  {
   "name": "Justin Villa",
   "gender": "Male",
   "team": "Kitchen Renegades",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 23,
   "losses": 26,
   "pointsWon": 931,
   "totalPointsAgainst": 934,
   "mixedWins": 11,
   "mixedLosses": 16,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 14,
   "winPct": 46.9,
   "diff": -3,
   "ppg": 19,
   "leagueRank": 27,
   "rating": 1.1,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 1.6,
   "playerId": "d66b0fa0-2b50-45d7-a218-2c12d8525ef6"
  },
  {
   "name": "Mary Wu",
   "gender": "Female",
   "team": "Kitchen Renegades",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 18,
   "losses": 21,
   "pointsWon": 707,
   "totalPointsAgainst": 731,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 46.2,
   "diff": -24,
   "ppg": 18.1,
   "leagueRank": 32,
   "rating": -0.1,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "90223335-e0fd-43ac-b08f-089499e91e87"
  },
  {
   "name": "Robert Hansen",
   "gender": "Male",
   "team": "Kitchen Renegades",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 15,
   "losses": 21,
   "pointsWon": 652,
   "totalPointsAgainst": 685,
   "mixedWins": 6,
   "mixedLosses": 12,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 41.7,
   "diff": -33,
   "ppg": 18.1,
   "leagueRank": 38,
   "rating": -2.2,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.9,
   "playerId": "afd103a8-84a1-43c5-99b9-a3f3c280b6b2"
  },
  {
   "name": "William Brown",
   "gender": "Male",
   "team": "Kitchen Renegades",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 15,
   "losses": 21,
   "pointsWon": 621,
   "totalPointsAgainst": 696,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 8,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 41.7,
   "diff": -75,
   "ppg": 17.3,
   "leagueRank": 44,
   "rating": -2.9,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -1.1,
   "playerId": "629db24f-bcf7-4466-80be-53b29218cd69"
  },
  {
   "name": "Maggie Tucker",
   "gender": "Female",
   "team": "Kitchen Renegades",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 12,
   "losses": 17,
   "pointsWon": 512,
   "totalPointsAgainst": 549,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 41.4,
   "diff": -37,
   "ppg": 17.7,
   "leagueRank": 41,
   "rating": -0.7,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "2632c266-629c-4ff2-bb86-31a243b57257"
  },
  {
   "name": "Pam Politis",
   "gender": "Female",
   "team": "Big Dink Energy",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 19,
   "losses": 28,
   "pointsWon": 847,
   "totalPointsAgainst": 916,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 9,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 11,
   "winPct": 40.4,
   "diff": -69,
   "ppg": 18,
   "leagueRank": 34,
   "rating": 0,
   "ratingGames": 47,
   "confidence": 88,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0,
   "playerId": "6b6274a7-77d0-420a-8883-5cac081fdf4d"
  },
  {
   "name": "Heather Triozzi",
   "gender": "Female",
   "team": "Big Dink Energy",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 20,
   "losses": 31,
   "pointsWon": 888,
   "totalPointsAgainst": 965,
   "mixedWins": 10,
   "mixedLosses": 15,
   "genderWins": 10,
   "genderLosses": 16,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 39.2,
   "diff": -77,
   "ppg": 17.4,
   "leagueRank": 36,
   "rating": 1.1,
   "ratingGames": 51,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.6,
   "playerId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e"
  },
  {
   "name": "Gary Raubenheimer",
   "gender": "Male",
   "team": "Big Dink Energy",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 23,
   "losses": 38,
   "pointsWon": 1073,
   "totalPointsAgainst": 1162,
   "mixedWins": 11,
   "mixedLosses": 21,
   "genderWins": 12,
   "genderLosses": 17,
   "clutchWins": 7,
   "clutchLosses": 14,
   "winPct": 37.7,
   "diff": -89,
   "ppg": 17.6,
   "leagueRank": 39,
   "rating": 0.8,
   "ratingGames": 61,
   "confidence": 90,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.4,
   "playerId": "ff4c0faf-d8a4-4af9-bb5d-217b88570d64"
  },
  {
   "name": "Carolina Reese",
   "gender": "Female",
   "team": "The Bouncers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 142,
   "totalPointsAgainst": 152,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "8f93a05d-c51e-48c4-901c-4ddbe881b309",
   "winPct": 37.5,
   "diff": -10,
   "ppg": 17.8,
   "leagueRank": 61,
   "rating": 0.1,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1
  },
  {
   "name": "Michael Weber",
   "gender": "Male",
   "team": "The Dilluminati",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 419,
   "totalPointsAgainst": 479,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 37.5,
   "diff": -60,
   "ppg": 17.5,
   "leagueRank": 51,
   "rating": -4.7,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.6,
   "playerId": "0ab0986a-43d6-477f-842a-49c989fb0b3e"
  },
  {
   "name": "Laura Amato",
   "gender": "Female",
   "team": "Kitchen Renegades",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 14,
   "losses": 24,
   "pointsWon": 664,
   "totalPointsAgainst": 728,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 7,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 36.8,
   "diff": -64,
   "ppg": 17.5,
   "leagueRank": 43,
   "rating": -1.2,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771"
  },
  {
   "name": "Nikki Koons",
   "gender": "Female",
   "team": "Big Dink Energy",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 21,
   "losses": 37,
   "pointsWon": 1019,
   "totalPointsAgainst": 1141,
   "mixedWins": 12,
   "mixedLosses": 19,
   "genderWins": 9,
   "genderLosses": 18,
   "clutchWins": 12,
   "clutchLosses": 12,
   "winPct": 36.2,
   "diff": -122,
   "ppg": 17.6,
   "leagueRank": 42,
   "rating": 0.6,
   "ratingGames": 58,
   "confidence": 88,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.9,
   "playerId": "51eba5fc-d8dc-417a-a4de-051515751377"
  },
  {
   "name": "Yan Wang",
   "gender": "Male",
   "team": "Kitchen Renegades",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 12,
   "losses": 24,
   "pointsWon": 586,
   "totalPointsAgainst": 706,
   "mixedWins": 6,
   "mixedLosses": 12,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 33.3,
   "diff": -120,
   "ppg": 16.3,
   "leagueRank": 53,
   "rating": -3.6,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.9,
   "playerId": "e707a619-46ce-4420-b820-66534b1567d6"
  },
  {
   "name": "Lisa Howdyshell",
   "gender": "Female",
   "team": "Kitchen Renegades",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 13,
   "losses": 27,
   "pointsWon": 699,
   "totalPointsAgainst": 797,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 6,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 11,
   "winPct": 32.5,
   "diff": -98,
   "ppg": 17.5,
   "leagueRank": 46,
   "rating": -1.4,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0,
   "playerId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "name": "Jason Mahoney",
   "gender": "Male",
   "team": "Big Dink Energy",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 15,
   "losses": 33,
   "pointsWon": 816,
   "totalPointsAgainst": 946,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 6,
   "genderLosses": 18,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 31.3,
   "diff": -130,
   "ppg": 17,
   "leagueRank": 47,
   "rating": -2.1,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "2c0bc3dd-201d-4ec0-b317-45fc2f1f4a14"
  },
  {
   "name": "Colin Mahoney",
   "gender": "Male",
   "team": "Big Dink Energy",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 15,
   "losses": 33,
   "pointsWon": 798,
   "totalPointsAgainst": 948,
   "mixedWins": 8,
   "mixedLosses": 16,
   "genderWins": 7,
   "genderLosses": 17,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 31.3,
   "diff": -150,
   "ppg": 16.6,
   "leagueRank": 49,
   "rating": -2.9,
   "ratingGames": 48,
   "confidence": 87,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -1,
   "playerId": "0eb7fa64-4567-48c0-82e6-43beb1a2dfe3"
  },
  {
   "name": "Crystal Mark",
   "gender": "Female",
   "team": "Big Dink Energy",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 11,
   "losses": 26,
   "pointsWon": 631,
   "totalPointsAgainst": 741,
   "mixedWins": 6,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 29.7,
   "diff": -110,
   "ppg": 17.1,
   "leagueRank": 48,
   "rating": -1.6,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "c7347486-6c6f-4143-b74b-f3572653d54f"
  },
  {
   "name": "Yang Pek",
   "gender": "Female",
   "team": "Kitchen Renegades",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 10,
   "losses": 26,
   "pointsWon": 633,
   "totalPointsAgainst": 731,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 27.8,
   "diff": -98,
   "ppg": 17.6,
   "leagueRank": 50,
   "rating": -2.3,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "8b003e56-0468-4f85-8384-aa9d0c76900b"
  },
  {
   "name": "Lynn Snyder",
   "gender": "Female",
   "team": "Big Dink Energy",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 11,
   "losses": 29,
   "pointsWon": 627,
   "totalPointsAgainst": 781,
   "mixedWins": 8,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 17,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 27.5,
   "diff": -154,
   "ppg": 15.7,
   "leagueRank": 55,
   "rating": -2.7,
   "ratingGames": 40,
   "confidence": 86,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "1973cf93-7507-478a-b457-4fa7ec0951af"
  },
  {
   "name": "Melissa Dipierro",
   "gender": "Female",
   "team": "Big Dink Energy",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 8,
   "losses": 23,
   "pointsWon": 515,
   "totalPointsAgainst": 606,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 25.8,
   "diff": -91,
   "ppg": 16.6,
   "leagueRank": 54,
   "rating": -1.6,
   "ratingGames": 31,
   "confidence": 84,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0,
   "playerId": "2ed4e87b-b9f6-4df8-b733-8aaf89ddc285"
  },
  {
   "name": "Mark Thomas",
   "gender": "Male",
   "team": "Kitchen Renegades",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 9,
   "losses": 28,
   "pointsWon": 641,
   "totalPointsAgainst": 736,
   "mixedWins": 4,
   "mixedLosses": 14,
   "genderWins": 5,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 13,
   "winPct": 24.3,
   "diff": -95,
   "ppg": 17.3,
   "leagueRank": 52,
   "rating": -0.8,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "name": "Linda Beaulieu",
   "gender": "Female",
   "team": "Big Dink Energy",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 5,
   "losses": 19,
   "pointsWon": 374,
   "totalPointsAgainst": 474,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 20.8,
   "diff": -100,
   "ppg": 15.6,
   "leagueRank": 56,
   "rating": -2,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": -0.2,
   "playerId": "e5749fbf-5074-4227-b7f7-a57ec077be2a"
  },
  {
   "name": "Andrew Klein",
   "gender": "Male",
   "team": "The Dilluminati",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 6,
   "losses": 24,
   "pointsWon": 451,
   "totalPointsAgainst": 575,
   "mixedWins": 2,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 20,
   "diff": -124,
   "ppg": 15,
   "leagueRank": 59,
   "rating": -5.5,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.1,
   "playerId": "0deaa94b-f2e7-4a54-8ce6-69ed32b6d280"
  },
  {
   "name": "Sean Mahoney",
   "gender": "Male",
   "team": "Big Dink Energy",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 7,
   "losses": 29,
   "pointsWon": 526,
   "totalPointsAgainst": 725,
   "mixedWins": 3,
   "mixedLosses": 15,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 19.4,
   "diff": -199,
   "ppg": 14.6,
   "leagueRank": 58,
   "rating": -4.8,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.9,
   "playerId": "4c6f1793-942d-4ef7-b2d6-b707f18a4002"
  },
  {
   "name": "Tim Phelan",
   "gender": "Male",
   "team": "The Bouncers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 105,
   "totalPointsAgainst": 135,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "f5e62236-e4e5-4b34-865e-c92bf027d21c",
   "winPct": 14.3,
   "diff": -30,
   "ppg": 15,
   "leagueRank": 62,
   "rating": -0.7,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 2.4
  },
  {
   "name": "Steven Mark",
   "gender": "Male",
   "team": "Big Dink Energy",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 3,
   "losses": 18,
   "pointsWon": 330,
   "totalPointsAgainst": 431,
   "mixedWins": 2,
   "mixedLosses": 9,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 14.3,
   "diff": -101,
   "ppg": 15.7,
   "leagueRank": 60,
   "rating": -1.9,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.8,
   "playerId": "a068f4d0-360e-4abf-a7e5-94ae16f56b03"
  },
  {
   "name": "Jennifer Etkin",
   "gender": "Female",
   "team": "Kitchen Renegades",
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
   "playerId": "03674fae-7df5-4402-9e4c-0f36aa38d96b",
   "winPct": 0,
   "diff": -43,
   "ppg": 13.8,
   "leagueRank": 63,
   "rating": -2.8,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.6
  }
 ],
 "teams": [
  {
   "name": "The Dilluminati",
   "w": 8,
   "l": 1,
   "pf": 5518,
   "pa": 5215,
   "gw": 169,
   "gl": 119,
   "diff": 303,
   "gameDiff": 50,
   "power": 0.7,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     77,
     67
    ],
    "male": [
     39,
     33
    ],
    "female": [
     53,
     19
    ]
   }
  },
  {
   "name": "The Bouncers",
   "w": 6,
   "l": 3,
   "pf": 5580,
   "pa": 5087,
   "gw": 176,
   "gl": 112,
   "diff": 493,
   "gameDiff": 64,
   "power": 0.9,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     88,
     56
    ],
    "male": [
     43,
     29
    ],
    "female": [
     45,
     27
    ]
   }
  },
  {
   "name": "Kitchen Renegades",
   "w": 4,
   "l": 5,
   "pf": 5404,
   "pa": 5545,
   "gw": 132,
   "gl": 156,
   "diff": -141,
   "gameDiff": -24,
   "power": 0.2,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     68,
     76
    ],
    "male": [
     38,
     34
    ],
    "female": [
     26,
     46
    ]
   }
  },
  {
   "name": "Big Dink Energy",
   "w": 0,
   "l": 9,
   "pf": 5047,
   "pa": 5702,
   "gw": 99,
   "gl": 189,
   "diff": -655,
   "gameDiff": -90,
   "power": -0.5,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     55,
     89
    ],
    "male": [
     24,
     48
    ],
    "female": [
     20,
     52
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Jeremy Herrin",
   "b": "Matt King",
   "team": "The Bouncers",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.7,
   "avgActual": 11.8,
   "avgExpected": 6.4,
   "aId": "73bc4c66-fbd6-4647-935e-589dac38ab78",
   "bId": "875e4351-64ca-4d5a-a719-332b28d40bea"
  },
  {
   "a": "Mary Wu",
   "b": "Lisa Howdyshell",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.4,
   "avgActual": 2.7,
   "avgExpected": -2.9,
   "aId": "90223335-e0fd-43ac-b08f-089499e91e87",
   "bId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "a": "Linda Goss",
   "b": "Jen Huang",
   "team": "The Dilluminati",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 7.8,
   "avgExpected": 3.1,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "382d0871-3d11-4406-8214-0be9c7256390"
  },
  {
   "a": "Jamie Damirgian",
   "b": "Elliott Knupp",
   "team": "The Dilluminati",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 2.2,
   "avgActual": 4.4,
   "avgExpected": 0.5,
   "aId": "67e72d20-d17c-4480-8159-9e4be9e18459",
   "bId": "c6c73c33-7fea-49da-acca-cf2022fe122d"
  },
  {
   "a": "Jen Huang",
   "b": "Elliott Knupp",
   "team": "The Dilluminati",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 7,
   "avgExpected": 3,
   "aId": "382d0871-3d11-4406-8214-0be9c7256390",
   "bId": "c6c73c33-7fea-49da-acca-cf2022fe122d"
  },
  {
   "a": "Maggie Tucker",
   "b": "Matt Enz",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 8,
   "avgExpected": 3.2,
   "aId": "2632c266-629c-4ff2-bb86-31a243b57257",
   "bId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "a": "Mike Scioli Jr",
   "b": "Colin Hamilton",
   "team": "The Dilluminati",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2,
   "avgActual": 5.8,
   "avgExpected": 2.5,
   "aId": "6ae15153-88e8-48c0-93b6-8be97adbadce",
   "bId": "c77aff78-c746-4adc-84eb-eb589d5a90cd"
  },
  {
   "a": "Laura Amato",
   "b": "Caroline Miller",
   "team": "Kitchen Renegades",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.9,
   "avgActual": 4.2,
   "avgExpected": 0.8,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "742d055d-10cf-4e3a-8cba-373b169bad38"
  },
  {
   "a": "Mary Beth Devaul",
   "b": "Matt King",
   "team": "The Bouncers",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 7.6,
   "avgExpected": 4.4,
   "aId": "1006ef09-eacb-4614-9b54-529256f87497",
   "bId": "875e4351-64ca-4d5a-a719-332b28d40bea"
  },
  {
   "a": "Mike Scioli Jr",
   "b": "Elliott Knupp",
   "team": "The Dilluminati",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 4.7,
   "avgExpected": 0.9,
   "aId": "6ae15153-88e8-48c0-93b6-8be97adbadce",
   "bId": "c6c73c33-7fea-49da-acca-cf2022fe122d"
  },
  {
   "a": "Caroline Miller",
   "b": "Justin Villa",
   "team": "Kitchen Renegades",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 1.6,
   "avgActual": 2.2,
   "avgExpected": 0,
   "aId": "742d055d-10cf-4e3a-8cba-373b169bad38",
   "bId": "d66b0fa0-2b50-45d7-a218-2c12d8525ef6"
  },
  {
   "a": "Andrew Klein",
   "b": "Jen Huang",
   "team": "The Dilluminati",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.6,
   "avgActual": 1.8,
   "avgExpected": -1.5,
   "aId": "0deaa94b-f2e7-4a54-8ce6-69ed32b6d280",
   "bId": "382d0871-3d11-4406-8214-0be9c7256390"
  },
  {
   "a": "Yang Pek",
   "b": "Yan Wang",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.5,
   "avgActual": -1.3,
   "avgExpected": -4.9,
   "aId": "8b003e56-0468-4f85-8384-aa9d0c76900b",
   "bId": "e707a619-46ce-4420-b820-66534b1567d6"
  },
  {
   "a": "Lisa Howdyshell",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 1,
   "avgExpected": -2.3,
   "aId": "90e0fbef-1218-4eb3-887f-b9cc31e73163",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Kristen Buenconsejo",
   "b": "Jennifer Minehan",
   "team": "The Bouncers",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 4.4,
   "avgExpected": 1.8,
   "aId": "11acfc83-ff3d-4e5f-b234-95827745ade8",
   "bId": "e379e47b-dcde-4adb-8cc6-76e5660c457e"
  },
  {
   "a": "Matt Enz",
   "b": "Lauren Brimhall",
   "team": "Kitchen Renegades",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 7.2,
   "avgExpected": 5.3,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "8caefff0-01e3-4d6a-ae7b-6c96015634c8"
  },
  {
   "a": "Colin Mahoney",
   "b": "Lynn Snyder",
   "team": "Big Dink Energy",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.4,
   "avgActual": 1,
   "avgExpected": -1.4,
   "aId": "0eb7fa64-4567-48c0-82e6-43beb1a2dfe3",
   "bId": "1973cf93-7507-478a-b457-4fa7ec0951af"
  },
  {
   "a": "Grace Edelson",
   "b": "Deborah Sawin",
   "team": "The Bouncers",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 3.4,
   "avgExpected": 0.9,
   "aId": "5b378b2c-5bc7-4e9b-a97c-8248e101e4f2",
   "bId": "96775a9e-d923-45e3-a5e4-1754ae3832bd"
  },
  {
   "a": "Justyna Wojdyla",
   "b": "Olivia Lee",
   "team": "The Dilluminati",
   "n": 11,
   "w": 10,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.8,
   "avgExpected": 2,
   "aId": "12db9b49-da72-4367-8e2c-b9718a9bc2fb",
   "bId": "af2bdee6-7d41-4730-869b-2c6530e7378d"
  },
  {
   "a": "Mike Scioli Jr",
   "b": "Ryan Gerstel",
   "team": "The Dilluminati",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 1.3,
   "avgActual": 2.5,
   "avgExpected": 0.7,
   "aId": "6ae15153-88e8-48c0-93b6-8be97adbadce",
   "bId": "de47e045-80e3-4209-a32e-d1c8a6de083b"
  },
  {
   "a": "Matt Enz",
   "b": "Caroline Miller",
   "team": "Kitchen Renegades",
   "n": 9,
   "w": 9,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 8.7,
   "avgExpected": 7,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "742d055d-10cf-4e3a-8cba-373b169bad38"
  },
  {
   "a": "Linda Goss",
   "b": "Olivia Lee",
   "team": "The Dilluminati",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 6.3,
   "avgExpected": 4.3,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "af2bdee6-7d41-4730-869b-2c6530e7378d"
  },
  {
   "a": "Jason Mahoney",
   "b": "Pam Politis",
   "team": "Big Dink Energy",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 1.5,
   "avgExpected": -0.5,
   "aId": "2c0bc3dd-201d-4ec0-b317-45fc2f1f4a14",
   "bId": "6b6274a7-77d0-420a-8883-5cac081fdf4d"
  },
  {
   "a": "William Brown",
   "b": "Justin Villa",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 2.7,
   "avgExpected": -0.2,
   "aId": "629db24f-bcf7-4466-80be-53b29218cd69",
   "bId": "d66b0fa0-2b50-45d7-a218-2c12d8525ef6"
  },
  {
   "a": "Pam Politis",
   "b": "Steven Mark",
   "team": "Big Dink Energy",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -1,
   "avgExpected": -3.6,
   "aId": "6b6274a7-77d0-420a-8883-5cac081fdf4d",
   "bId": "a068f4d0-360e-4abf-a7e5-94ae16f56b03"
  },
  {
   "a": "Eric Le",
   "b": "Mary Beth Devaul",
   "team": "The Bouncers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6.3,
   "avgExpected": 3.8,
   "aId": "04d19e47-d435-4eb7-916a-9b5188bd103c",
   "bId": "1006ef09-eacb-4614-9b54-529256f87497"
  },
  {
   "a": "Crista Renauro",
   "b": "Mary Mcnichol",
   "team": "The Dilluminati",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 1.7,
   "avgExpected": -0.9,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "7c21a869-ee85-4708-8b8f-e4d3e39e7d2c"
  },
  {
   "a": "Grace Edelson",
   "b": "Matt King",
   "team": "The Bouncers",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": 1,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "5b378b2c-5bc7-4e9b-a97c-8248e101e4f2",
   "bId": "875e4351-64ca-4d5a-a719-332b28d40bea"
  },
  {
   "a": "Mary Wu",
   "b": "Robert Hansen",
   "team": "Kitchen Renegades",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1,
   "avgActual": 1.9,
   "avgExpected": 0.3,
   "aId": "90223335-e0fd-43ac-b08f-089499e91e87",
   "bId": "afd103a8-84a1-43c5-99b9-a3f3c280b6b2"
  },
  {
   "a": "William Brown",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1.7,
   "avgExpected": -0.4,
   "aId": "629db24f-bcf7-4466-80be-53b29218cd69",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Jeremy Herrin",
   "b": "Ed Ruliff",
   "team": "The Bouncers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3,
   "avgExpected": 1.2,
   "aId": "73bc4c66-fbd6-4647-935e-589dac38ab78",
   "bId": "b711163e-e5de-4c9c-83cb-3a46a9c47356"
  },
  {
   "a": "Kristen Buenconsejo",
   "b": "Ed Ruliff",
   "team": "The Bouncers",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 0,
   "avgExpected": -1.5,
   "aId": "11acfc83-ff3d-4e5f-b234-95827745ade8",
   "bId": "b711163e-e5de-4c9c-83cb-3a46a9c47356"
  },
  {
   "a": "Carolyn Laroque",
   "b": "Deborah Sawin",
   "team": "The Bouncers",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 4,
   "avgExpected": 2.4,
   "aId": "1b62307b-ca04-485d-8788-bc54f446a638",
   "bId": "96775a9e-d923-45e3-a5e4-1754ae3832bd"
  },
  {
   "a": "William Brown",
   "b": "Robert Hansen",
   "team": "Kitchen Renegades",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2,
   "avgExpected": 0.3,
   "aId": "629db24f-bcf7-4466-80be-53b29218cd69",
   "bId": "afd103a8-84a1-43c5-99b9-a3f3c280b6b2"
  },
  {
   "a": "Heather Triozzi",
   "b": "Nicholas Jackson",
   "team": "Big Dink Energy",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 3.1,
   "avgExpected": 2,
   "aId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e",
   "bId": "bb72e9bd-3d29-4f40-911c-2c5f07c73da6"
  },
  {
   "a": "Nikki Koons",
   "b": "Heather Triozzi",
   "team": "Big Dink Energy",
   "n": 11,
   "w": 4,
   "l": 7,
   "synergy": 0.8,
   "avgActual": -0.8,
   "avgExpected": -1.9,
   "aId": "51eba5fc-d8dc-417a-a4de-051515751377",
   "bId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e"
  },
  {
   "a": "Colin Hamilton",
   "b": "Ryan Gerstel",
   "team": "The Dilluminati",
   "n": 15,
   "w": 12,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 3.9,
   "avgExpected": 2.9,
   "aId": "c77aff78-c746-4adc-84eb-eb589d5a90cd",
   "bId": "de47e045-80e3-4209-a32e-d1c8a6de083b"
  },
  {
   "a": "Mary Beth Devaul",
   "b": "Carolyn Laroque",
   "team": "The Bouncers",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.3,
   "avgExpected": 3,
   "aId": "1006ef09-eacb-4614-9b54-529256f87497",
   "bId": "1b62307b-ca04-485d-8788-bc54f446a638"
  },
  {
   "a": "Issac Gao",
   "b": "Justin Villa",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": -0.3,
   "avgExpected": -2.2,
   "aId": "ba54259c-c50f-446b-9385-f12e5c6fdf23",
   "bId": "d66b0fa0-2b50-45d7-a218-2c12d8525ef6"
  },
  {
   "a": "Daniel Seng",
   "b": "Brian Schreiber",
   "team": "The Bouncers",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 8,
   "avgExpected": 6.5,
   "aId": "40303bf3-7bee-465b-834a-51847fab81f6",
   "bId": "b49e35c9-e930-406b-8a82-1f68c3eb7272"
  },
  {
   "a": "Melissa Dipierro",
   "b": "Gary Raubenheimer",
   "team": "Big Dink Energy",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": -0.6,
   "aId": "2ed4e87b-b9f6-4df8-b733-8aaf89ddc285",
   "bId": "ff4c0faf-d8a4-4af9-bb5d-217b88570d64"
  },
  {
   "a": "Matt Enz",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.7,
   "avgExpected": 3.1,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Nicholas Jackson",
   "b": "Gary Raubenheimer",
   "team": "Big Dink Energy",
   "n": 13,
   "w": 6,
   "l": 7,
   "synergy": 0.7,
   "avgActual": 1.2,
   "avgExpected": 0.3,
   "aId": "bb72e9bd-3d29-4f40-911c-2c5f07c73da6",
   "bId": "ff4c0faf-d8a4-4af9-bb5d-217b88570d64"
  },
  {
   "a": "Robert Hansen",
   "b": "Yan Wang",
   "team": "Kitchen Renegades",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1.5,
   "avgExpected": 0.1,
   "aId": "afd103a8-84a1-43c5-99b9-a3f3c280b6b2",
   "bId": "e707a619-46ce-4420-b820-66534b1567d6"
  },
  {
   "a": "Olivia Lee",
   "b": "Colin Hamilton",
   "team": "The Dilluminati",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 1.8,
   "avgExpected": 0.7,
   "aId": "af2bdee6-7d41-4730-869b-2c6530e7378d",
   "bId": "c77aff78-c746-4adc-84eb-eb589d5a90cd"
  },
  {
   "a": "Grace Edelson",
   "b": "Jennifer Minehan",
   "team": "The Bouncers",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": 0.7,
   "avgActual": 2.8,
   "avgExpected": 1.9,
   "aId": "5b378b2c-5bc7-4e9b-a97c-8248e101e4f2",
   "bId": "e379e47b-dcde-4adb-8cc6-76e5660c457e"
  },
  {
   "a": "Elliott Knupp",
   "b": "Ryan Gerstel",
   "team": "The Dilluminati",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.7,
   "avgActual": 0.4,
   "avgExpected": -0.7,
   "aId": "c6c73c33-7fea-49da-acca-cf2022fe122d",
   "bId": "de47e045-80e3-4209-a32e-d1c8a6de083b"
  },
  {
   "a": "Caroline Miller",
   "b": "Issac Gao",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 0.7,
   "avgExpected": -0.9,
   "aId": "742d055d-10cf-4e3a-8cba-373b169bad38",
   "bId": "ba54259c-c50f-446b-9385-f12e5c6fdf23"
  },
  {
   "a": "Laura Amato",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -1.5,
   "avgExpected": -2.9,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Yang Pek",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.7,
   "avgActual": -1.4,
   "avgExpected": -2.7,
   "aId": "8b003e56-0468-4f85-8384-aa9d0c76900b",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Deborah Sawin",
   "b": "Brian Schreiber",
   "team": "The Bouncers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.3,
   "avgExpected": 2.6,
   "aId": "96775a9e-d923-45e3-a5e4-1754ae3832bd",
   "bId": "b49e35c9-e930-406b-8a82-1f68c3eb7272"
  },
  {
   "a": "Jason Mahoney",
   "b": "Crystal Mark",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.8,
   "avgExpected": -2.9,
   "aId": "2c0bc3dd-201d-4ec0-b317-45fc2f1f4a14",
   "bId": "c7347486-6c6f-4143-b74b-f3572653d54f"
  },
  {
   "a": "Melissa Dipierro",
   "b": "Crystal Mark",
   "team": "Big Dink Energy",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -0.3,
   "avgExpected": -1.8,
   "aId": "2ed4e87b-b9f6-4df8-b733-8aaf89ddc285",
   "bId": "c7347486-6c6f-4143-b74b-f3572653d54f"
  },
  {
   "a": "Kristen Buenconsejo",
   "b": "Daniel Seng",
   "team": "The Bouncers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": 0,
   "aId": "11acfc83-ff3d-4e5f-b234-95827745ade8",
   "bId": "40303bf3-7bee-465b-834a-51847fab81f6"
  },
  {
   "a": "Justyna Wojdyla",
   "b": "Jamie Damirgian",
   "team": "The Dilluminati",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.9,
   "avgExpected": 1.9,
   "aId": "12db9b49-da72-4367-8e2c-b9718a9bc2fb",
   "bId": "67e72d20-d17c-4480-8159-9e4be9e18459"
  },
  {
   "a": "Justyna Wojdyla",
   "b": "Linda Goss",
   "team": "The Dilluminati",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4.3,
   "avgExpected": 3,
   "aId": "12db9b49-da72-4367-8e2c-b9718a9bc2fb",
   "bId": "14e5edae-ff22-415b-8267-d46a2117ed8d"
  },
  {
   "a": "William Brown",
   "b": "Caroline Miller",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -1.3,
   "avgExpected": -2.7,
   "aId": "629db24f-bcf7-4466-80be-53b29218cd69",
   "bId": "742d055d-10cf-4e3a-8cba-373b169bad38"
  },
  {
   "a": "Caroline Miller",
   "b": "Lisa Howdyshell",
   "team": "Kitchen Renegades",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.5,
   "avgExpected": -0.7,
   "aId": "742d055d-10cf-4e3a-8cba-373b169bad38",
   "bId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "a": "Maggie Tucker",
   "b": "Issac Gao",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 1,
   "aId": "2632c266-629c-4ff2-bb86-31a243b57257",
   "bId": "ba54259c-c50f-446b-9385-f12e5c6fdf23"
  },
  {
   "a": "Nikki Koons",
   "b": "Steven Mark",
   "team": "Big Dink Energy",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -5.7,
   "avgExpected": -6.7,
   "aId": "51eba5fc-d8dc-417a-a4de-051515751377",
   "bId": "a068f4d0-360e-4abf-a7e5-94ae16f56b03"
  },
  {
   "a": "Nikki Koons",
   "b": "Crystal Mark",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -2.4,
   "avgExpected": -3.2,
   "aId": "51eba5fc-d8dc-417a-a4de-051515751377",
   "bId": "c7347486-6c6f-4143-b74b-f3572653d54f"
  },
  {
   "a": "Grace Edelson",
   "b": "Ed Ruliff",
   "team": "The Bouncers",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.5,
   "avgActual": 0.2,
   "avgExpected": -0.4,
   "aId": "5b378b2c-5bc7-4e9b-a97c-8248e101e4f2",
   "bId": "b711163e-e5de-4c9c-83cb-3a46a9c47356"
  },
  {
   "a": "Jen Huang",
   "b": "Olivia Lee",
   "team": "The Dilluminati",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 3.3,
   "avgExpected": 2.1,
   "aId": "382d0871-3d11-4406-8214-0be9c7256390",
   "bId": "af2bdee6-7d41-4730-869b-2c6530e7378d"
  },
  {
   "a": "Ed Ruliff",
   "b": "Jennifer Minehan",
   "team": "The Bouncers",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2.1,
   "avgExpected": 1.4,
   "aId": "b711163e-e5de-4c9c-83cb-3a46a9c47356",
   "bId": "e379e47b-dcde-4adb-8cc6-76e5660c457e"
  },
  {
   "a": "Jonathan Miller",
   "b": "Mary Mcnichol",
   "team": "The Dilluminati",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.7,
   "avgExpected": 1.6,
   "aId": "4bdfe049-9d58-4b3e-bdf1-72d3ac296b22",
   "bId": "7c21a869-ee85-4708-8b8f-e4d3e39e7d2c"
  },
  {
   "a": "Colin Mahoney",
   "b": "Pam Politis",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -1.4,
   "avgExpected": -2,
   "aId": "0eb7fa64-4567-48c0-82e6-43beb1a2dfe3",
   "bId": "6b6274a7-77d0-420a-8883-5cac081fdf4d"
  },
  {
   "a": "Mary Mcnichol",
   "b": "Elliott Knupp",
   "team": "The Dilluminati",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": -0.3,
   "avgExpected": -1.2,
   "aId": "7c21a869-ee85-4708-8b8f-e4d3e39e7d2c",
   "bId": "c6c73c33-7fea-49da-acca-cf2022fe122d"
  },
  {
   "a": "Kristen Buenconsejo",
   "b": "Bennett Matthew",
   "team": "The Bouncers",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.3,
   "avgExpected": 1.4,
   "aId": "11acfc83-ff3d-4e5f-b234-95827745ade8",
   "bId": "460d93c8-9936-43b5-b3ba-7328e174fb2b"
  },
  {
   "a": "Patricia Costantini",
   "b": "Brian Schreiber",
   "team": "The Bouncers",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2,
   "avgExpected": 1.2,
   "aId": "a125eb84-bceb-4262-a45a-29df0234e738",
   "bId": "b49e35c9-e930-406b-8a82-1f68c3eb7272"
  },
  {
   "a": "Colin Mahoney",
   "b": "Sean Mahoney",
   "team": "Big Dink Energy",
   "n": 12,
   "w": 3,
   "l": 9,
   "synergy": 0.4,
   "avgActual": -4.9,
   "avgExpected": -5.4,
   "aId": "0eb7fa64-4567-48c0-82e6-43beb1a2dfe3",
   "bId": "4c6f1793-942d-4ef7-b2d6-b707f18a4002"
  },
  {
   "a": "Carolyn Laroque",
   "b": "Bennett Matthew",
   "team": "The Bouncers",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.8,
   "avgExpected": 3,
   "aId": "1b62307b-ca04-485d-8788-bc54f446a638",
   "bId": "460d93c8-9936-43b5-b3ba-7328e174fb2b"
  },
  {
   "a": "Linda Goss",
   "b": "Mike Scioli Jr",
   "team": "The Dilluminati",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4,
   "avgExpected": 3,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "6ae15153-88e8-48c0-93b6-8be97adbadce"
  },
  {
   "a": "Mary Beth Devaul",
   "b": "Bennett Matthew",
   "team": "The Bouncers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 7,
   "avgExpected": 6,
   "aId": "1006ef09-eacb-4614-9b54-529256f87497",
   "bId": "460d93c8-9936-43b5-b3ba-7328e174fb2b"
  },
  {
   "a": "Justyna Wojdyla",
   "b": "Colin Hamilton",
   "team": "The Dilluminati",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1.3,
   "avgExpected": 0.9,
   "aId": "12db9b49-da72-4367-8e2c-b9718a9bc2fb",
   "bId": "c77aff78-c746-4adc-84eb-eb589d5a90cd"
  },
  {
   "a": "Colin Mahoney",
   "b": "Linda Beaulieu",
   "team": "Big Dink Energy",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -3,
   "avgExpected": -3.4,
   "aId": "0eb7fa64-4567-48c0-82e6-43beb1a2dfe3",
   "bId": "e5749fbf-5074-4227-b7f7-a57ec077be2a"
  },
  {
   "a": "Bennett Matthew",
   "b": "Patricia Costantini",
   "team": "The Bouncers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.7,
   "avgExpected": 2.9,
   "aId": "460d93c8-9936-43b5-b3ba-7328e174fb2b",
   "bId": "a125eb84-bceb-4262-a45a-29df0234e738"
  },
  {
   "a": "Mary Beth Devaul",
   "b": "Jennifer Minehan",
   "team": "The Bouncers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 4.5,
   "avgExpected": 4.2,
   "aId": "1006ef09-eacb-4614-9b54-529256f87497",
   "bId": "e379e47b-dcde-4adb-8cc6-76e5660c457e"
  },
  {
   "a": "Crystal Mark",
   "b": "Gary Raubenheimer",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -1.4,
   "avgExpected": -1.8,
   "aId": "c7347486-6c6f-4143-b74b-f3572653d54f",
   "bId": "ff4c0faf-d8a4-4af9-bb5d-217b88570d64"
  },
  {
   "a": "Michael Weber",
   "b": "Elliott Knupp",
   "team": "The Dilluminati",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -3,
   "avgExpected": -3.5,
   "aId": "0ab0986a-43d6-477f-842a-49c989fb0b3e",
   "bId": "c6c73c33-7fea-49da-acca-cf2022fe122d"
  },
  {
   "a": "Lynn Snyder",
   "b": "Pam Politis",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.6,
   "avgExpected": -2,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "6b6274a7-77d0-420a-8883-5cac081fdf4d"
  },
  {
   "a": "Nikki Koons",
   "b": "Pam Politis",
   "team": "Big Dink Energy",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -1.9,
   "avgExpected": -2,
   "aId": "51eba5fc-d8dc-417a-a4de-051515751377",
   "bId": "6b6274a7-77d0-420a-8883-5cac081fdf4d"
  },
  {
   "a": "Heather Triozzi",
   "b": "Gary Raubenheimer",
   "team": "Big Dink Energy",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": 0.1,
   "avgActual": -3.7,
   "avgExpected": -3.8,
   "aId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e",
   "bId": "ff4c0faf-d8a4-4af9-bb5d-217b88570d64"
  },
  {
   "a": "Matt Enz",
   "b": "Mary Wu",
   "team": "Kitchen Renegades",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.8,
   "avgExpected": 3.5,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "90223335-e0fd-43ac-b08f-089499e91e87"
  },
  {
   "a": "Lisa Howdyshell",
   "b": "Yan Wang",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": -1.3,
   "avgExpected": -1.7,
   "aId": "90e0fbef-1218-4eb3-887f-b9cc31e73163",
   "bId": "e707a619-46ce-4420-b820-66534b1567d6"
  },
  {
   "a": "Pam Politis",
   "b": "Linda Beaulieu",
   "team": "Big Dink Energy",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.2,
   "aId": "6b6274a7-77d0-420a-8883-5cac081fdf4d",
   "bId": "e5749fbf-5074-4227-b7f7-a57ec077be2a"
  },
  {
   "a": "Daniel Seng",
   "b": "Matt King",
   "team": "The Bouncers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.5,
   "avgExpected": 2.5,
   "aId": "40303bf3-7bee-465b-834a-51847fab81f6",
   "bId": "875e4351-64ca-4d5a-a719-332b28d40bea"
  },
  {
   "a": "Michael Weber",
   "b": "Mike Scioli Jr",
   "team": "The Dilluminati",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 0.3,
   "avgExpected": 0.3,
   "aId": "0ab0986a-43d6-477f-842a-49c989fb0b3e",
   "bId": "6ae15153-88e8-48c0-93b6-8be97adbadce"
  },
  {
   "a": "Jason Mahoney",
   "b": "Sean Mahoney",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0,
   "avgActual": -3.4,
   "avgExpected": -3.4,
   "aId": "2c0bc3dd-201d-4ec0-b317-45fc2f1f4a14",
   "bId": "4c6f1793-942d-4ef7-b2d6-b707f18a4002"
  },
  {
   "a": "Matt Enz",
   "b": "Robert Hansen",
   "team": "Kitchen Renegades",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -0.5,
   "avgExpected": -0.5,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "afd103a8-84a1-43c5-99b9-a3f3c280b6b2"
  },
  {
   "a": "Steven Mark",
   "b": "Nicholas Jackson",
   "team": "Big Dink Energy",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -4,
   "avgExpected": -3.8,
   "aId": "a068f4d0-360e-4abf-a7e5-94ae16f56b03",
   "bId": "bb72e9bd-3d29-4f40-911c-2c5f07c73da6"
  },
  {
   "a": "Laura Amato",
   "b": "William Brown",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.8,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "629db24f-bcf7-4466-80be-53b29218cd69"
  },
  {
   "a": "Maggie Tucker",
   "b": "Mary Wu",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -3.7,
   "avgExpected": -3.4,
   "aId": "2632c266-629c-4ff2-bb86-31a243b57257",
   "bId": "90223335-e0fd-43ac-b08f-089499e91e87"
  },
  {
   "a": "Kristen Buenconsejo",
   "b": "Jeremy Herrin",
   "team": "The Bouncers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.2,
   "aId": "11acfc83-ff3d-4e5f-b234-95827745ade8",
   "bId": "73bc4c66-fbd6-4647-935e-589dac38ab78"
  },
  {
   "a": "Laura Amato",
   "b": "Yang Pek",
   "team": "Kitchen Renegades",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -3,
   "avgExpected": -2.9,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "8b003e56-0468-4f85-8384-aa9d0c76900b"
  },
  {
   "a": "Bennett Matthew",
   "b": "Brian Schreiber",
   "team": "The Bouncers",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.1,
   "avgActual": 2.4,
   "avgExpected": 2.6,
   "aId": "460d93c8-9936-43b5-b3ba-7328e174fb2b",
   "bId": "b49e35c9-e930-406b-8a82-1f68c3eb7272"
  },
  {
   "a": "Lynn Snyder",
   "b": "Heather Triozzi",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -3.6,
   "avgExpected": -3.5,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e"
  },
  {
   "a": "William Brown",
   "b": "Lisa Howdyshell",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -4.7,
   "avgExpected": -4.2,
   "aId": "629db24f-bcf7-4466-80be-53b29218cd69",
   "bId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "a": "Kristen Buenconsejo",
   "b": "Carolyn Laroque",
   "team": "The Bouncers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.7,
   "avgExpected": 2,
   "aId": "11acfc83-ff3d-4e5f-b234-95827745ade8",
   "bId": "1b62307b-ca04-485d-8788-bc54f446a638"
  },
  {
   "a": "Bennett Matthew",
   "b": "Jennifer Minehan",
   "team": "The Bouncers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2,
   "avgExpected": -1.4,
   "aId": "460d93c8-9936-43b5-b3ba-7328e174fb2b",
   "bId": "e379e47b-dcde-4adb-8cc6-76e5660c457e"
  },
  {
   "a": "Lauren Brimhall",
   "b": "Justin Villa",
   "team": "Kitchen Renegades",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -1.1,
   "avgExpected": -0.8,
   "aId": "8caefff0-01e3-4d6a-ae7b-6c96015634c8",
   "bId": "d66b0fa0-2b50-45d7-a218-2c12d8525ef6"
  },
  {
   "a": "Richard Wining",
   "b": "Brian Schreiber",
   "team": "The Bouncers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 5.3,
   "avgExpected": 5.8,
   "aId": "aefe386c-3a84-4172-9b61-00defc787bf0",
   "bId": "b49e35c9-e930-406b-8a82-1f68c3eb7272"
  },
  {
   "a": "Nikki Koons",
   "b": "Nicholas Jackson",
   "team": "Big Dink Energy",
   "n": 14,
   "w": 7,
   "l": 7,
   "synergy": -0.3,
   "avgActual": -0.1,
   "avgExpected": 0.2,
   "aId": "51eba5fc-d8dc-417a-a4de-051515751377",
   "bId": "bb72e9bd-3d29-4f40-911c-2c5f07c73da6"
  },
  {
   "a": "Laura Amato",
   "b": "Yan Wang",
   "team": "Kitchen Renegades",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -1.5,
   "avgExpected": -0.9,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "e707a619-46ce-4420-b820-66534b1567d6"
  },
  {
   "a": "Colin Mahoney",
   "b": "Gary Raubenheimer",
   "team": "Big Dink Energy",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -2.4,
   "avgExpected": -2,
   "aId": "0eb7fa64-4567-48c0-82e6-43beb1a2dfe3",
   "bId": "ff4c0faf-d8a4-4af9-bb5d-217b88570d64"
  },
  {
   "a": "Jason Mahoney",
   "b": "Nicholas Jackson",
   "team": "Big Dink Energy",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.3,
   "avgActual": -2.6,
   "avgExpected": -2.1,
   "aId": "2c0bc3dd-201d-4ec0-b317-45fc2f1f4a14",
   "bId": "bb72e9bd-3d29-4f40-911c-2c5f07c73da6"
  },
  {
   "a": "Olivia Lee",
   "b": "Ryan Gerstel",
   "team": "The Dilluminati",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 3.4,
   "avgExpected": 3.9,
   "aId": "af2bdee6-7d41-4730-869b-2c6530e7378d",
   "bId": "de47e045-80e3-4209-a32e-d1c8a6de083b"
  },
  {
   "a": "Justyna Wojdyla",
   "b": "Mike Scioli Jr",
   "team": "The Dilluminati",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -0.6,
   "avgExpected": -0.1,
   "aId": "12db9b49-da72-4367-8e2c-b9718a9bc2fb",
   "bId": "6ae15153-88e8-48c0-93b6-8be97adbadce"
  },
  {
   "a": "Jamie Damirgian",
   "b": "Olivia Lee",
   "team": "The Dilluminati",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.4,
   "aId": "67e72d20-d17c-4480-8159-9e4be9e18459",
   "bId": "af2bdee6-7d41-4730-869b-2c6530e7378d"
  },
  {
   "a": "Matt King",
   "b": "Ed Ruliff",
   "team": "The Bouncers",
   "n": 12,
   "w": 5,
   "l": 7,
   "synergy": -0.3,
   "avgActual": -2.1,
   "avgExpected": -1.7,
   "aId": "875e4351-64ca-4d5a-a719-332b28d40bea",
   "bId": "b711163e-e5de-4c9c-83cb-3a46a9c47356"
  },
  {
   "a": "Justin Villa",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3.3,
   "avgExpected": -2.7,
   "aId": "d66b0fa0-2b50-45d7-a218-2c12d8525ef6",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Caroline Miller",
   "b": "Mary Wu",
   "team": "Kitchen Renegades",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.8,
   "avgExpected": 1.4,
   "aId": "742d055d-10cf-4e3a-8cba-373b169bad38",
   "bId": "90223335-e0fd-43ac-b08f-089499e91e87"
  },
  {
   "a": "Lynn Snyder",
   "b": "Jason Mahoney",
   "team": "Big Dink Energy",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -4.8,
   "avgExpected": -4.2,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "2c0bc3dd-201d-4ec0-b317-45fc2f1f4a14"
  },
  {
   "a": "Mary Beth Devaul",
   "b": "Brian Schreiber",
   "team": "The Bouncers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 4,
   "avgExpected": 4.8,
   "aId": "1006ef09-eacb-4614-9b54-529256f87497",
   "bId": "b49e35c9-e930-406b-8a82-1f68c3eb7272"
  },
  {
   "a": "Yan Wang",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -5.6,
   "avgExpected": -4.8,
   "aId": "e707a619-46ce-4420-b820-66534b1567d6",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Lisa Howdyshell",
   "b": "Issac Gao",
   "team": "Kitchen Renegades",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2.5,
   "avgExpected": -1.7,
   "aId": "90e0fbef-1218-4eb3-887f-b9cc31e73163",
   "bId": "ba54259c-c50f-446b-9385-f12e5c6fdf23"
  },
  {
   "a": "Mary Beth Devaul",
   "b": "Grace Edelson",
   "team": "The Bouncers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 1.4,
   "avgExpected": 2.2,
   "aId": "1006ef09-eacb-4614-9b54-529256f87497",
   "bId": "5b378b2c-5bc7-4e9b-a97c-8248e101e4f2"
  },
  {
   "a": "Jen Huang",
   "b": "Mike Scioli Jr",
   "team": "The Dilluminati",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": 0,
   "aId": "382d0871-3d11-4406-8214-0be9c7256390",
   "bId": "6ae15153-88e8-48c0-93b6-8be97adbadce"
  },
  {
   "a": "Linda Goss",
   "b": "Mary Mcnichol",
   "team": "The Dilluminati",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -0.8,
   "avgExpected": 0,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "7c21a869-ee85-4708-8b8f-e4d3e39e7d2c"
  },
  {
   "a": "Carolyn Laroque",
   "b": "Daniel Seng",
   "team": "The Bouncers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 2,
   "avgExpected": 3.2,
   "aId": "1b62307b-ca04-485d-8788-bc54f446a638",
   "bId": "40303bf3-7bee-465b-834a-51847fab81f6"
  },
  {
   "a": "Mary Wu",
   "b": "Justin Villa",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -2.8,
   "aId": "90223335-e0fd-43ac-b08f-089499e91e87",
   "bId": "d66b0fa0-2b50-45d7-a218-2c12d8525ef6"
  },
  {
   "a": "Michael Weber",
   "b": "Jonathan Miller",
   "team": "The Dilluminati",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3.7,
   "avgExpected": -2.7,
   "aId": "0ab0986a-43d6-477f-842a-49c989fb0b3e",
   "bId": "4bdfe049-9d58-4b3e-bdf1-72d3ac296b22"
  },
  {
   "a": "Nikki Koons",
   "b": "Gary Raubenheimer",
   "team": "Big Dink Energy",
   "n": 12,
   "w": 4,
   "l": 8,
   "synergy": -0.5,
   "avgActual": -3.7,
   "avgExpected": -3.1,
   "aId": "51eba5fc-d8dc-417a-a4de-051515751377",
   "bId": "ff4c0faf-d8a4-4af9-bb5d-217b88570d64"
  },
  {
   "a": "Matt Enz",
   "b": "Issac Gao",
   "team": "Kitchen Renegades",
   "n": 10,
   "w": 10,
   "l": 0,
   "synergy": -0.5,
   "avgActual": 3.8,
   "avgExpected": 4.6,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "ba54259c-c50f-446b-9385-f12e5c6fdf23"
  },
  {
   "a": "Bennett Matthew",
   "b": "Ed Ruliff",
   "team": "The Bouncers",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -0.2,
   "avgExpected": 0.5,
   "aId": "460d93c8-9936-43b5-b3ba-7328e174fb2b",
   "bId": "b711163e-e5de-4c9c-83cb-3a46a9c47356"
  },
  {
   "a": "Matt King",
   "b": "Jennifer Minehan",
   "team": "The Bouncers",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": -0.6,
   "avgActual": 0.5,
   "avgExpected": 1.3,
   "aId": "875e4351-64ca-4d5a-a719-332b28d40bea",
   "bId": "e379e47b-dcde-4adb-8cc6-76e5660c457e"
  },
  {
   "a": "Kristen Buenconsejo",
   "b": "Grace Edelson",
   "team": "The Bouncers",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -3.4,
   "avgExpected": -2.3,
   "aId": "11acfc83-ff3d-4e5f-b234-95827745ade8",
   "bId": "5b378b2c-5bc7-4e9b-a97c-8248e101e4f2"
  },
  {
   "a": "Michael Weber",
   "b": "Mary Mcnichol",
   "team": "The Dilluminati",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.7,
   "aId": "0ab0986a-43d6-477f-842a-49c989fb0b3e",
   "bId": "7c21a869-ee85-4708-8b8f-e4d3e39e7d2c"
  },
  {
   "a": "Carolyn Laroque",
   "b": "Brian Schreiber",
   "team": "The Bouncers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 1,
   "avgExpected": 2.5,
   "aId": "1b62307b-ca04-485d-8788-bc54f446a638",
   "bId": "b49e35c9-e930-406b-8a82-1f68c3eb7272"
  },
  {
   "a": "Justyna Wojdyla",
   "b": "Jen Huang",
   "team": "The Dilluminati",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 0.5,
   "avgExpected": 1.8,
   "aId": "12db9b49-da72-4367-8e2c-b9718a9bc2fb",
   "bId": "382d0871-3d11-4406-8214-0be9c7256390"
  },
  {
   "a": "Lauren Brimhall",
   "b": "Issac Gao",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.7,
   "aId": "8caefff0-01e3-4d6a-ae7b-6c96015634c8",
   "bId": "ba54259c-c50f-446b-9385-f12e5c6fdf23"
  },
  {
   "a": "Heather Triozzi",
   "b": "Steven Mark",
   "team": "Big Dink Energy",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -6.7,
   "avgExpected": -5.4,
   "aId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e",
   "bId": "a068f4d0-360e-4abf-a7e5-94ae16f56b03"
  },
  {
   "a": "Linda Goss",
   "b": "Colin Hamilton",
   "team": "The Dilluminati",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 4.7,
   "avgExpected": 6.4,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "c77aff78-c746-4adc-84eb-eb589d5a90cd"
  },
  {
   "a": "Caroline Miller",
   "b": "Yang Pek",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3.3,
   "avgExpected": -1.7,
   "aId": "742d055d-10cf-4e3a-8cba-373b169bad38",
   "bId": "8b003e56-0468-4f85-8384-aa9d0c76900b"
  },
  {
   "a": "Caroline Miller",
   "b": "Lauren Brimhall",
   "team": "Kitchen Renegades",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.7,
   "avgActual": 0.5,
   "avgExpected": 1.5,
   "aId": "742d055d-10cf-4e3a-8cba-373b169bad38",
   "bId": "8caefff0-01e3-4d6a-ae7b-6c96015634c8"
  },
  {
   "a": "Yang Pek",
   "b": "Lisa Howdyshell",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -5.7,
   "avgExpected": -4.1,
   "aId": "8b003e56-0468-4f85-8384-aa9d0c76900b",
   "bId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "a": "Maggie Tucker",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -7.3,
   "avgExpected": -5.5,
   "aId": "2632c266-629c-4ff2-bb86-31a243b57257",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Justyna Wojdyla",
   "b": "Ryan Gerstel",
   "team": "The Dilluminati",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": -0.8,
   "avgActual": 1.5,
   "avgExpected": 2.6,
   "aId": "12db9b49-da72-4367-8e2c-b9718a9bc2fb",
   "bId": "de47e045-80e3-4209-a32e-d1c8a6de083b"
  },
  {
   "a": "Linda Goss",
   "b": "Elliott Knupp",
   "team": "The Dilluminati",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 0.6,
   "avgExpected": 2.1,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "c6c73c33-7fea-49da-acca-cf2022fe122d"
  },
  {
   "a": "Lynn Snyder",
   "b": "Melissa Dipierro",
   "team": "Big Dink Energy",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -6.7,
   "avgExpected": -5.1,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "2ed4e87b-b9f6-4df8-b733-8aaf89ddc285"
  },
  {
   "a": "Jen Huang",
   "b": "Jamie Damirgian",
   "team": "The Dilluminati",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 1,
   "avgExpected": 2.6,
   "aId": "382d0871-3d11-4406-8214-0be9c7256390",
   "bId": "67e72d20-d17c-4480-8159-9e4be9e18459"
  },
  {
   "a": "Jen Huang",
   "b": "Mary Mcnichol",
   "team": "The Dilluminati",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.4,
   "aId": "382d0871-3d11-4406-8214-0be9c7256390",
   "bId": "7c21a869-ee85-4708-8b8f-e4d3e39e7d2c"
  },
  {
   "a": "Jamie Damirgian",
   "b": "Colin Hamilton",
   "team": "The Dilluminati",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -0.2,
   "avgExpected": 1.5,
   "aId": "67e72d20-d17c-4480-8159-9e4be9e18459",
   "bId": "c77aff78-c746-4adc-84eb-eb589d5a90cd"
  },
  {
   "a": "Michael Weber",
   "b": "Linda Goss",
   "team": "The Dilluminati",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2.4,
   "avgExpected": -0.7,
   "aId": "0ab0986a-43d6-477f-842a-49c989fb0b3e",
   "bId": "14e5edae-ff22-415b-8267-d46a2117ed8d"
  },
  {
   "a": "Bennett Matthew",
   "b": "Deborah Sawin",
   "team": "The Bouncers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -1.7,
   "avgExpected": 0.4,
   "aId": "460d93c8-9936-43b5-b3ba-7328e174fb2b",
   "bId": "96775a9e-d923-45e3-a5e4-1754ae3832bd"
  },
  {
   "a": "Lisa Howdyshell",
   "b": "Robert Hansen",
   "team": "Kitchen Renegades",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1,
   "avgActual": -4.2,
   "avgExpected": -2.5,
   "aId": "90e0fbef-1218-4eb3-887f-b9cc31e73163",
   "bId": "afd103a8-84a1-43c5-99b9-a3f3c280b6b2"
  },
  {
   "a": "Steven Mark",
   "b": "Gary Raubenheimer",
   "team": "Big Dink Energy",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.3,
   "avgExpected": -2,
   "aId": "a068f4d0-360e-4abf-a7e5-94ae16f56b03",
   "bId": "ff4c0faf-d8a4-4af9-bb5d-217b88570d64"
  },
  {
   "a": "Carolyn Laroque",
   "b": "Grace Edelson",
   "team": "The Bouncers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": 0,
   "avgExpected": 2.3,
   "aId": "1b62307b-ca04-485d-8788-bc54f446a638",
   "bId": "5b378b2c-5bc7-4e9b-a97c-8248e101e4f2"
  },
  {
   "a": "Andrew Klein",
   "b": "Mary Mcnichol",
   "team": "The Dilluminati",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1,
   "avgActual": -7,
   "avgExpected": -5.2,
   "aId": "0deaa94b-f2e7-4a54-8ce6-69ed32b6d280",
   "bId": "7c21a869-ee85-4708-8b8f-e4d3e39e7d2c"
  },
  {
   "a": "Lynn Snyder",
   "b": "Sean Mahoney",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1,
   "avgActual": -7.2,
   "avgExpected": -5.5,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "4c6f1793-942d-4ef7-b2d6-b707f18a4002"
  },
  {
   "a": "Carolyn Laroque",
   "b": "Patricia Costantini",
   "team": "The Bouncers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 0.3,
   "avgExpected": 2.7,
   "aId": "1b62307b-ca04-485d-8788-bc54f446a638",
   "bId": "a125eb84-bceb-4262-a45a-29df0234e738"
  },
  {
   "a": "Jeremy Herrin",
   "b": "Jennifer Minehan",
   "team": "The Bouncers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.1,
   "avgActual": 1.2,
   "avgExpected": 3.1,
   "aId": "73bc4c66-fbd6-4647-935e-589dac38ab78",
   "bId": "e379e47b-dcde-4adb-8cc6-76e5660c457e"
  },
  {
   "a": "Yang Pek",
   "b": "Mary Wu",
   "team": "Kitchen Renegades",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -4.7,
   "avgExpected": -2.6,
   "aId": "8b003e56-0468-4f85-8384-aa9d0c76900b",
   "bId": "90223335-e0fd-43ac-b08f-089499e91e87"
  },
  {
   "a": "Laura Amato",
   "b": "Mary Wu",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -5.7,
   "avgExpected": -3.1,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "90223335-e0fd-43ac-b08f-089499e91e87"
  },
  {
   "a": "Melissa Dipierro",
   "b": "Nikki Koons",
   "team": "Big Dink Energy",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -5.5,
   "avgExpected": -3.2,
   "aId": "2ed4e87b-b9f6-4df8-b733-8aaf89ddc285",
   "bId": "51eba5fc-d8dc-417a-a4de-051515751377"
  },
  {
   "a": "Laura Amato",
   "b": "Robert Hansen",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -5,
   "avgExpected": -2.1,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "afd103a8-84a1-43c5-99b9-a3f3c280b6b2"
  },
  {
   "a": "Matt Enz",
   "b": "Justin Villa",
   "team": "Kitchen Renegades",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": -1.2,
   "avgActual": 2.1,
   "avgExpected": 3.8,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "d66b0fa0-2b50-45d7-a218-2c12d8525ef6"
  },
  {
   "a": "Jamie Damirgian",
   "b": "Mike Scioli Jr",
   "team": "The Dilluminati",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.2,
   "avgActual": 0.8,
   "avgExpected": 2.8,
   "aId": "67e72d20-d17c-4480-8159-9e4be9e18459",
   "bId": "6ae15153-88e8-48c0-93b6-8be97adbadce"
  },
  {
   "a": "Grace Edelson",
   "b": "Patricia Costantini",
   "team": "The Bouncers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1.3,
   "avgExpected": 1.5,
   "aId": "5b378b2c-5bc7-4e9b-a97c-8248e101e4f2",
   "bId": "a125eb84-bceb-4262-a45a-29df0234e738"
  },
  {
   "a": "Andrew Klein",
   "b": "Mike Scioli Jr",
   "team": "The Dilluminati",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -8.3,
   "avgExpected": -5.4,
   "aId": "0deaa94b-f2e7-4a54-8ce6-69ed32b6d280",
   "bId": "6ae15153-88e8-48c0-93b6-8be97adbadce"
  },
  {
   "a": "Crystal Mark",
   "b": "Linda Beaulieu",
   "team": "Big Dink Energy",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -6.5,
   "avgExpected": -3.9,
   "aId": "c7347486-6c6f-4143-b74b-f3572653d54f",
   "bId": "e5749fbf-5074-4227-b7f7-a57ec077be2a"
  },
  {
   "a": "Robert Hansen",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -4.7,
   "avgExpected": -1.7,
   "aId": "afd103a8-84a1-43c5-99b9-a3f3c280b6b2",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Jen Huang",
   "b": "Jonathan Miller",
   "team": "The Dilluminati",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -0.7,
   "avgExpected": 2.6,
   "aId": "382d0871-3d11-4406-8214-0be9c7256390",
   "bId": "4bdfe049-9d58-4b3e-bdf1-72d3ac296b22"
  },
  {
   "a": "Jason Mahoney",
   "b": "Melissa Dipierro",
   "team": "Big Dink Energy",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -6.7,
   "avgExpected": -3.8,
   "aId": "2c0bc3dd-201d-4ec0-b317-45fc2f1f4a14",
   "bId": "2ed4e87b-b9f6-4df8-b733-8aaf89ddc285"
  },
  {
   "a": "Michael Weber",
   "b": "Jen Huang",
   "team": "The Dilluminati",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -4,
   "avgExpected": -0.5,
   "aId": "0ab0986a-43d6-477f-842a-49c989fb0b3e",
   "bId": "382d0871-3d11-4406-8214-0be9c7256390"
  },
  {
   "a": "Pam Politis",
   "b": "Heather Triozzi",
   "team": "Big Dink Energy",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2.3,
   "avgExpected": 0.3,
   "aId": "6b6274a7-77d0-420a-8883-5cac081fdf4d",
   "bId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e"
  },
  {
   "a": "Sean Mahoney",
   "b": "Linda Beaulieu",
   "team": "Big Dink Energy",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -10.2,
   "avgExpected": -7,
   "aId": "4c6f1793-942d-4ef7-b2d6-b707f18a4002",
   "bId": "e5749fbf-5074-4227-b7f7-a57ec077be2a"
  },
  {
   "a": "William Brown",
   "b": "Yang Pek",
   "team": "Kitchen Renegades",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -2.7,
   "avgExpected": 0,
   "aId": "629db24f-bcf7-4466-80be-53b29218cd69",
   "bId": "8b003e56-0468-4f85-8384-aa9d0c76900b"
  },
  {
   "a": "Jamie Damirgian",
   "b": "Ryan Gerstel",
   "team": "The Dilluminati",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -0.5,
   "avgExpected": 2.8,
   "aId": "67e72d20-d17c-4480-8159-9e4be9e18459",
   "bId": "de47e045-80e3-4209-a32e-d1c8a6de083b"
  },
  {
   "a": "Crista Renauro",
   "b": "Elliott Knupp",
   "team": "The Dilluminati",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -3.3,
   "avgExpected": 0.7,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "c6c73c33-7fea-49da-acca-cf2022fe122d"
  },
  {
   "a": "Andrew Klein",
   "b": "Linda Goss",
   "team": "The Dilluminati",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.8,
   "avgActual": -6.4,
   "avgExpected": -3.2,
   "aId": "0deaa94b-f2e7-4a54-8ce6-69ed32b6d280",
   "bId": "14e5edae-ff22-415b-8267-d46a2117ed8d"
  },
  {
   "a": "Laura Amato",
   "b": "Lisa Howdyshell",
   "team": "Kitchen Renegades",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.9,
   "avgActual": -4.4,
   "avgExpected": -1.1,
   "aId": "34ec3f29-ddb8-41e4-91a0-3ab69dbea771",
   "bId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "a": "Sean Mahoney",
   "b": "Pam Politis",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.9,
   "avgActual": -7,
   "avgExpected": -3.6,
   "aId": "4c6f1793-942d-4ef7-b2d6-b707f18a4002",
   "bId": "6b6274a7-77d0-420a-8883-5cac081fdf4d"
  },
  {
   "a": "Caroline Miller",
   "b": "Mark Thomas",
   "team": "Kitchen Renegades",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2,
   "avgActual": -5.7,
   "avgExpected": -0.9,
   "aId": "742d055d-10cf-4e3a-8cba-373b169bad38",
   "bId": "fec4bba5-3f44-4c2a-8c39-22d9b02207c2"
  },
  {
   "a": "Lynn Snyder",
   "b": "Crystal Mark",
   "team": "Big Dink Energy",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2,
   "avgActual": -9.7,
   "avgExpected": -5.7,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "c7347486-6c6f-4143-b74b-f3572653d54f"
  },
  {
   "a": "Maggie Tucker",
   "b": "Caroline Miller",
   "team": "Kitchen Renegades",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -2.1,
   "avgActual": -3.8,
   "avgExpected": -0.3,
   "aId": "2632c266-629c-4ff2-bb86-31a243b57257",
   "bId": "742d055d-10cf-4e3a-8cba-373b169bad38"
  },
  {
   "a": "Andrew Klein",
   "b": "Elliott Knupp",
   "team": "The Dilluminati",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -2.2,
   "avgActual": -8.2,
   "avgExpected": -4.5,
   "aId": "0deaa94b-f2e7-4a54-8ce6-69ed32b6d280",
   "bId": "c6c73c33-7fea-49da-acca-cf2022fe122d"
  },
  {
   "a": "William Brown",
   "b": "Yan Wang",
   "team": "Kitchen Renegades",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -2.2,
   "avgActual": -9.5,
   "avgExpected": -5.8,
   "aId": "629db24f-bcf7-4466-80be-53b29218cd69",
   "bId": "e707a619-46ce-4420-b820-66534b1567d6"
  },
  {
   "a": "Colin Mahoney",
   "b": "Jason Mahoney",
   "team": "Big Dink Energy",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -2.5,
   "avgActual": -4.8,
   "avgExpected": -0.3,
   "aId": "0eb7fa64-4567-48c0-82e6-43beb1a2dfe3",
   "bId": "2c0bc3dd-201d-4ec0-b317-45fc2f1f4a14"
  },
  {
   "a": "Mary Beth Devaul",
   "b": "Kristen Buenconsejo",
   "team": "The Bouncers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.6,
   "avgActual": -3.7,
   "avgExpected": 2.4,
   "aId": "1006ef09-eacb-4614-9b54-529256f87497",
   "bId": "11acfc83-ff3d-4e5f-b234-95827745ade8"
  },
  {
   "a": "Mike Scioli Jr",
   "b": "Olivia Lee",
   "team": "The Dilluminati",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -3.2,
   "avgActual": -5.5,
   "avgExpected": -0.1,
   "aId": "6ae15153-88e8-48c0-93b6-8be97adbadce",
   "bId": "af2bdee6-7d41-4730-869b-2c6530e7378d"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Kitchen Renegades",
   "away": "Big Dink Energy",
   "time": "2026-06-16T19:30:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 594,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Maggie Tucker",
      "Matt Enz"
     ],
     "a": [
      "Heather Triozzi",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Mark Thomas"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Laura Amato",
      "Yan Wang"
     ],
     "a": [
      "Melissa Dipierro",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lisa Howdyshell",
      "William Brown"
     ],
     "a": [
      "Crystal Mark",
      "Jason Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Maggie Tucker",
      "Lisa Howdyshell"
     ],
     "a": [
      "Nikki Koons",
      "Melissa Dipierro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Caroline Miller",
      "Laura Amato"
     ],
     "a": [
      "Heather Triozzi",
      "Pam Politis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Matt Enz",
      "Mark Thomas"
     ],
     "a": [
      "Steven Mark",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "William Brown",
      "Robert Hansen"
     ],
     "a": [
      "Gary Raubenheimer",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Caroline Miller",
      "Matt Enz"
     ],
     "a": [
      "Nikki Koons",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Maggie Tucker",
      "Mark Thomas"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Laura Amato",
      "Yan Wang"
     ],
     "a": [
      "Pam Politis",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lisa Howdyshell",
      "Robert Hansen"
     ],
     "a": [
      "Crystal Mark",
      "Jason Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maggie Tucker",
      "Caroline Miller"
     ],
     "a": [
      "Nikki Koons",
      "Pam Politis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lisa Howdyshell",
      "Laura Amato"
     ],
     "a": [
      "Melissa Dipierro",
      "Crystal Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Mark Thomas",
      "Yan Wang"
     ],
     "a": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "William Brown",
      "Robert Hansen"
     ],
     "a": [
      "Jason Mahoney",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Matt Enz"
     ],
     "a": [
      "Heather Triozzi",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Maggie Tucker",
      "Yan Wang"
     ],
     "a": [
      "Pam Politis",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Robert Hansen"
     ],
     "a": [
      "Melissa Dipierro",
      "Jason Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Amato",
      "William Brown"
     ],
     "a": [
      "Crystal Mark",
      "Colin Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Maggie Tucker",
      "Caroline Miller"
     ],
     "a": [
      "Heather Triozzi",
      "Nikki Koons"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Laura Amato"
     ],
     "a": [
      "Melissa Dipierro",
      "Crystal Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matt Enz",
      "Yan Wang"
     ],
     "a": [
      "Nicholas Jackson",
      "Jason Mahoney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mark Thomas",
      "William Brown"
     ],
     "a": [
      "Steven Mark",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Maggie Tucker",
      "Matt Enz"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Caroline Miller",
      "Mark Thomas"
     ],
     "a": [
      "Heather Triozzi",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "William Brown"
     ],
     "a": [
      "Pam Politis",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Amato",
      "Robert Hansen"
     ],
     "a": [
      "Melissa Dipierro",
      "Colin Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Maggie Tucker",
      "Lisa Howdyshell"
     ],
     "a": [
      "Heather Triozzi",
      "Pam Politis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Laura Amato"
     ],
     "a": [
      "Nikki Koons",
      "Crystal Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Matt Enz",
      "Mark Thomas"
     ],
     "a": [
      "Steven Mark",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yan Wang",
      "Robert Hansen"
     ],
     "a": [
      "Jason Mahoney",
      "Colin Mahoney"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "The Bouncers",
   "away": "The Dilluminati",
   "time": "2026-06-16T19:30:00",
   "complete": true,
   "homePoints": 613,
   "awayPoints": 510,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristen Buenconsejo",
      "Daniel Seng"
     ],
     "a": [
      "Olivia Lee",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Grace Edelson",
      "Ed Ruliff"
     ],
     "a": [
      "Justyna Wojdyla",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carolyn Laroque",
      "Jeremy Herrin"
     ],
     "a": [
      "Jamie Damirgian",
      "Elliott Knupp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Minehan",
      "Matt King"
     ],
     "a": [
      "Linda Goss",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Grace Edelson"
     ],
     "a": [
      "Olivia Lee",
      "Justyna Wojdyla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jennifer Minehan",
      "Mary Beth Devaul"
     ],
     "a": [
      "Jamie Damirgian",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Daniel Seng",
      "Matt King"
     ],
     "a": [
      "Mike Scioli Jr",
      "Elliott Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ed Ruliff",
      "Jeremy Herrin"
     ],
     "a": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kristen Buenconsejo",
      "Ed Ruliff"
     ],
     "a": [
      "Olivia Lee",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Daniel Seng"
     ],
     "a": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Carolyn Laroque",
      "Jeremy Herrin"
     ],
     "a": [
      "Mary Mcnichol",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Mary Beth Devaul",
      "Matt King"
     ],
     "a": [
      "Linda Goss",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Carolyn Laroque"
     ],
     "a": [
      "Justyna Wojdyla",
      "Jamie Damirgian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jennifer Minehan",
      "Mary Beth Devaul"
     ],
     "a": [
      "Linda Goss",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Seng",
      "Ed Ruliff"
     ],
     "a": [
      "Mike Scioli Jr",
      "Colin Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Matt King",
      "Jeremy Herrin"
     ],
     "a": [
      "Elliott Knupp",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kristen Buenconsejo",
      "Ed Ruliff"
     ],
     "a": [
      "Jamie Damirgian",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carolyn Laroque",
      "Daniel Seng"
     ],
     "a": [
      "Olivia Lee",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Beth Devaul",
      "Matt King"
     ],
     "a": [
      "Linda Goss",
      "Elliott Knupp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jennifer Minehan",
      "Jeremy Herrin"
     ],
     "a": [
      "Mary Mcnichol",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Carolyn Laroque"
     ],
     "a": [
      "Justyna Wojdyla",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Grace Edelson",
      "Jennifer Minehan"
     ],
     "a": [
      "Olivia Lee",
      "Jamie Damirgian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Seng",
      "Ed Ruliff"
     ],
     "a": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Matt King",
      "Jeremy Herrin"
     ],
     "a": [
      "Elliott Knupp",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Daniel Seng"
     ],
     "a": [
      "Justyna Wojdyla",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Ed Ruliff"
     ],
     "a": [
      "Olivia Lee",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Minehan",
      "Matt King"
     ],
     "a": [
      "Jamie Damirgian",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mary Beth Devaul",
      "Jeremy Herrin"
     ],
     "a": [
      "Mary Mcnichol",
      "Elliott Knupp"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Grace Edelson"
     ],
     "a": [
      "Olivia Lee",
      "Justyna Wojdyla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Carolyn Laroque",
      "Mary Beth Devaul"
     ],
     "a": [
      "Linda Goss",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Seng",
      "Matt King"
     ],
     "a": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ed Ruliff",
      "Jeremy Herrin"
     ],
     "a": [
      "Mike Scioli Jr",
      "Andrew Klein"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "The Bouncers",
   "away": "Kitchen Renegades",
   "time": "2026-06-23T19:30:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 552,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Ed Ruliff"
     ],
     "a": [
      "Maggie Tucker",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jennifer Minehan",
      "Jeremy Herrin"
     ],
     "a": [
      "Mary Wu",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Grace Edelson",
      "Matt King"
     ],
     "a": [
      "Lisa Howdyshell",
      "William Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carolyn Laroque",
      "Eric Le"
     ],
     "a": [
      "Caroline Miller",
      "Yan Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kristen Buenconsejo",
      "Grace Edelson"
     ],
     "a": [
      "Maggie Tucker",
      "Caroline Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Mary Beth Devaul"
     ],
     "a": [
      "Mary Wu",
      "Lisa Howdyshell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ed Ruliff",
      "Matt King"
     ],
     "a": [
      "Justin Villa",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jeremy Herrin",
      "Eric Le"
     ],
     "a": [
      "Mark Thomas",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Ed Ruliff"
     ],
     "a": [
      "Mary Wu",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Jeremy Herrin"
     ],
     "a": [
      "Maggie Tucker",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Beth Devaul",
      "Matt King"
     ],
     "a": [
      "Lisa Howdyshell",
      "Mark Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carolyn Laroque",
      "Eric Le"
     ],
     "a": [
      "Caroline Miller",
      "William Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jennifer Minehan",
      "Grace Edelson"
     ],
     "a": [
      "Maggie Tucker",
      "Mary Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mary Beth Devaul",
      "Carolyn Laroque"
     ],
     "a": [
      "Caroline Miller",
      "Lisa Howdyshell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ed Ruliff",
      "Jeremy Herrin"
     ],
     "a": [
      "Matt Enz",
      "Mark Thomas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Matt King",
      "Eric Le"
     ],
     "a": [
      "William Brown",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kristen Buenconsejo",
      "Jeremy Herrin"
     ],
     "a": [
      "Maggie Tucker",
      "Mark Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Grace Edelson",
      "Ed Ruliff"
     ],
     "a": [
      "Mary Wu",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mary Beth Devaul",
      "Eric Le"
     ],
     "a": [
      "Caroline Miller",
      "William Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carolyn Laroque",
      "Matt King"
     ],
     "a": [
      "Lisa Howdyshell",
      "Yan Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Jennifer Minehan"
     ],
     "a": [
      "Maggie Tucker",
      "Caroline Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Carolyn Laroque"
     ],
     "a": [
      "Mary Wu",
      "Lisa Howdyshell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ed Ruliff",
      "Jeremy Herrin"
     ],
     "a": [
      "Justin Villa",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Matt King",
      "Eric Le"
     ],
     "a": [
      "William Brown",
      "Yan Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Jeremy Herrin"
     ],
     "a": [
      "Mary Wu",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jennifer Minehan",
      "Eric Le"
     ],
     "a": [
      "Lisa Howdyshell",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Grace Edelson",
      "Ed Ruliff"
     ],
     "a": [
      "Maggie Tucker",
      "Mark Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Beth Devaul",
      "Matt King"
     ],
     "a": [
      "Caroline Miller",
      "Yan Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristen Buenconsejo",
      "Jennifer Minehan"
     ],
     "a": [
      "Maggie Tucker",
      "Mary Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Beth Devaul",
      "Carolyn Laroque"
     ],
     "a": [
      "Caroline Miller",
      "Lisa Howdyshell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ed Ruliff",
      "Matt King"
     ],
     "a": [
      "Matt Enz",
      "William Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeremy Herrin",
      "Eric Le"
     ],
     "a": [
      "Justin Villa",
      "Mark Thomas"
     ]
    }
   ],
   "subs": [
    "Eric Le"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "The Dilluminati",
   "away": "Big Dink Energy",
   "time": "2026-06-23T19:30:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 572,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ],
     "a": [
      "Pam Politis",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Colin Hamilton"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Linda Goss",
      "Elliott Knupp"
     ],
     "a": [
      "Melissa Dipierro",
      "Scott Bersak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jen Huang",
      "Jonathan Miller"
     ],
     "a": [
      "Lynn Snyder",
      "Johnny Deng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Justyna Wojdyla",
      "Jamie Damirgian"
     ],
     "a": [
      "Heather Triozzi",
      "Melissa Dipierro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Olivia Lee",
      "Jen Huang"
     ],
     "a": [
      "Pam Politis",
      "Crystal Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ],
     "a": [
      "Nicholas Jackson",
      "Steven Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jonathan Miller",
      "Michael Weber"
     ],
     "a": [
      "Scott Bersak",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Olivia Lee",
      "Ryan Gerstel"
     ],
     "a": [
      "Heather Triozzi",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ],
     "a": [
      "Pam Politis",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamie Damirgian",
      "Elliott Knupp"
     ],
     "a": [
      "Crystal Mark",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Linda Goss",
      "Michael Weber"
     ],
     "a": [
      "Lynn Snyder",
      "Johnny Deng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Olivia Lee",
      "Linda Goss"
     ],
     "a": [
      "Melissa Dipierro",
      "Lynn Snyder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jamie Damirgian",
      "Jen Huang"
     ],
     "a": [
      "Pam Politis",
      "Crystal Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ryan Gerstel",
      "Elliott Knupp"
     ],
     "a": [
      "Nicholas Jackson",
      "Scott Bersak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jonathan Miller",
      "Michael Weber"
     ],
     "a": [
      "Gary Raubenheimer",
      "Johnny Deng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jamie Damirgian",
      "Elliott Knupp"
     ],
     "a": [
      "Crystal Mark",
      "Scott Bersak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ],
     "a": [
      "Heather Triozzi",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Linda Goss",
      "Michael Weber"
     ],
     "a": [
      "Melissa Dipierro",
      "Johnny Deng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jen Huang",
      "Jonathan Miller"
     ],
     "a": [
      "Lynn Snyder",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Justyna Wojdyla",
      "Olivia Lee"
     ],
     "a": [
      "Heather Triozzi",
      "Pam Politis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Linda Goss",
      "Jen Huang"
     ],
     "a": [
      "Melissa Dipierro",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ryan Gerstel",
      "Elliott Knupp"
     ],
     "a": [
      "Nicholas Jackson",
      "Scott Bersak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Colin Hamilton",
      "Jonathan Miller"
     ],
     "a": [
      "Steven Mark",
      "Johnny Deng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Olivia Lee",
      "Jonathan Miller"
     ],
     "a": [
      "Melissa Dipierro",
      "Scott Bersak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Jamie Damirgian",
      "Colin Hamilton"
     ],
     "a": [
      "Pam Politis",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jen Huang",
      "Michael Weber"
     ],
     "a": [
      "Crystal Mark",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Justyna Wojdyla",
      "Olivia Lee"
     ],
     "a": [
      "Heather Triozzi",
      "Pam Politis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jamie Damirgian",
      "Linda Goss"
     ],
     "a": [
      "Crystal Mark",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ],
     "a": [
      "Nicholas Jackson",
      "Steven Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elliott Knupp",
      "Michael Weber"
     ],
     "a": [
      "Gary Raubenheimer",
      "Johnny Deng"
     ]
    }
   ],
   "subs": [
    "Johnny Deng",
    "Scott Bersak"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Kitchen Renegades",
   "away": "The Dilluminati",
   "time": "2026-06-30T19:30:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 660,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Caroline Miller",
      "Issac Gao"
     ],
     "a": [
      "Jamie Damirgian",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Maggie Tucker",
      "Justin Villa"
     ],
     "a": [
      "Olivia Lee",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Laura Amato",
      "Mark Thomas"
     ],
     "a": [
      "Linda Goss",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Mary Wu",
      "Robert Hansen"
     ],
     "a": [
      "Mary Mcnichol",
      "Michael Weber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Yang Pek"
     ],
     "a": [
      "Olivia Lee",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Maggie Tucker",
      "Mary Wu"
     ],
     "a": [
      "Jamie Damirgian",
      "Jen Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Issac Gao",
      "Justin Villa"
     ],
     "a": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Robert Hansen",
      "Yan Wang"
     ],
     "a": [
      "Colin Hamilton",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Maggie Tucker",
      "Issac Gao"
     ],
     "a": [
      "Olivia Lee",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Caroline Miller",
      "Justin Villa"
     ],
     "a": [
      "Jamie Damirgian",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Yang Pek",
      "Mark Thomas"
     ],
     "a": [
      "Jen Huang",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Amato",
      "Yan Wang"
     ],
     "a": [
      "Mary Mcnichol",
      "Michael Weber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Maggie Tucker",
      "Laura Amato"
     ],
     "a": [
      "Linda Goss",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Yang Pek",
      "Mary Wu"
     ],
     "a": [
      "Jamie Damirgian",
      "Jen Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Issac Gao",
      "Mark Thomas"
     ],
     "a": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Robert Hansen",
      "Yan Wang"
     ],
     "a": [
      "Andrew Klein",
      "Michael Weber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yang Pek",
      "Mark Thomas"
     ],
     "a": [
      "Jen Huang",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Caroline Miller",
      "Justin Villa"
     ],
     "a": [
      "Olivia Lee",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Amato",
      "Yan Wang"
     ],
     "a": [
      "Linda Goss",
      "Michael Weber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Wu",
      "Robert Hansen"
     ],
     "a": [
      "Mary Mcnichol",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Maggie Tucker"
     ],
     "a": [
      "Olivia Lee",
      "Jamie Damirgian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Amato",
      "Mary Wu"
     ],
     "a": [
      "Linda Goss",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Issac Gao",
      "Mark Thomas"
     ],
     "a": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 31,
     "h": [
      "Justin Villa",
      "Robert Hansen"
     ],
     "a": [
      "Mike Scioli Jr",
      "Michael Weber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Caroline Miller",
      "Issac Gao"
     ],
     "a": [
      "Olivia Lee",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Maggie Tucker",
      "Robert Hansen"
     ],
     "a": [
      "Linda Goss",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Yang Pek",
      "Justin Villa"
     ],
     "a": [
      "Jamie Damirgian",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mary Wu",
      "Yan Wang"
     ],
     "a": [
      "Jen Huang",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Maggie Tucker"
     ],
     "a": [
      "Olivia Lee",
      "Jamie Damirgian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yang Pek",
      "Laura Amato"
     ],
     "a": [
      "Jen Huang",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Issac Gao",
      "Justin Villa"
     ],
     "a": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mark Thomas",
      "Yan Wang"
     ],
     "a": [
      "Andrew Klein",
      "Michael Weber"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Big Dink Energy",
   "away": "The Bouncers",
   "time": "2026-06-30T19:30:00",
   "complete": true,
   "homePoints": 535,
   "awayPoints": 628,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nikki Koons",
      "Nicholas Jackson"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Heather Triozzi",
      "Gary Raubenheimer"
     ],
     "a": [
      "Jennifer Minehan",
      "Jeremy Herrin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Crystal Mark",
      "Jason Mahoney"
     ],
     "a": [
      "Grace Edelson",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Linda Beaulieu",
      "Colin Mahoney"
     ],
     "a": [
      "Patricia Costantini",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Melissa Dipierro"
     ],
     "a": [
      "Jennifer Minehan",
      "Grace Edelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Heather Triozzi",
      "Linda Beaulieu"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Mary Beth Devaul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ],
     "a": [
      "Jeremy Herrin",
      "Bennett Matthew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Colin Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Matt King",
      "Daniel Seng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ],
     "a": [
      "Jennifer Minehan",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Jeremy Herrin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Melissa Dipierro",
      "Jason Mahoney"
     ],
     "a": [
      "Mary Beth Devaul",
      "Daniel Seng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Crystal Mark",
      "Sean Mahoney"
     ],
     "a": [
      "Patricia Costantini",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Heather Triozzi",
      "Crystal Mark"
     ],
     "a": [
      "Grace Edelson",
      "Patricia Costantini"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Melissa Dipierro",
      "Linda Beaulieu"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Mary Beth Devaul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nicholas Jackson",
      "Jason Mahoney"
     ],
     "a": [
      "Jeremy Herrin",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Colin Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Daniel Seng",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Melissa Dipierro",
      "Jason Mahoney"
     ],
     "a": [
      "Mary Beth Devaul",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ],
     "a": [
      "Jennifer Minehan",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Crystal Mark",
      "Sean Mahoney"
     ],
     "a": [
      "Grace Edelson",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Linda Beaulieu",
      "Colin Mahoney"
     ],
     "a": [
      "Patricia Costantini",
      "Daniel Seng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Heather Triozzi"
     ],
     "a": [
      "Jennifer Minehan",
      "Kristen Buenconsejo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Crystal Mark",
      "Linda Beaulieu"
     ],
     "a": [
      "Grace Edelson",
      "Patricia Costantini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Nicholas Jackson",
      "Jason Mahoney"
     ],
     "a": [
      "Jeremy Herrin",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gary Raubenheimer",
      "Colin Mahoney"
     ],
     "a": [
      "Bennett Matthew",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nikki Koons",
      "Nicholas Jackson"
     ],
     "a": [
      "Jennifer Minehan",
      "Jeremy Herrin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Colin Mahoney"
     ],
     "a": [
      "Grace Edelson",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Melissa Dipierro",
      "Gary Raubenheimer"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Linda Beaulieu",
      "Sean Mahoney"
     ],
     "a": [
      "Mary Beth Devaul",
      "Daniel Seng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Heather Triozzi"
     ],
     "a": [
      "Jennifer Minehan",
      "Kristen Buenconsejo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Melissa Dipierro",
      "Crystal Mark"
     ],
     "a": [
      "Mary Beth Devaul",
      "Patricia Costantini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ],
     "a": [
      "Jeremy Herrin",
      "Bennett Matthew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jason Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Daniel Seng",
      "Brian Schreiber"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Big Dink Energy",
   "away": "Kitchen Renegades",
   "time": "2026-07-07T19:30:00",
   "complete": true,
   "homePoints": 571,
   "awayPoints": 673,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nikki Koons",
      "Nicholas Jackson"
     ],
     "a": [
      "Caroline Miller",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Gary Raubenheimer"
     ],
     "a": [
      "Lauren Brimhall",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Melissa Dipierro",
      "Jason Mahoney"
     ],
     "a": [
      "Maggie Tucker",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lynn Snyder",
      "Colin Mahoney"
     ],
     "a": [
      "Yang Pek",
      "William Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Pam Politis"
     ],
     "a": [
      "Lauren Brimhall",
      "Maggie Tucker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Lynn Snyder"
     ],
     "a": [
      "Caroline Miller",
      "Mary Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ],
     "a": [
      "Matt Enz",
      "Justin Villa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Colin Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Issac Gao",
      "Robert Hansen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ],
     "a": [
      "Lauren Brimhall",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ],
     "a": [
      "Caroline Miller",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Pam Politis",
      "Jason Mahoney"
     ],
     "a": [
      "Mary Wu",
      "Robert Hansen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Melissa Dipierro",
      "Sean Mahoney"
     ],
     "a": [
      "Yang Pek",
      "William Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Heather Triozzi",
      "Melissa Dipierro"
     ],
     "a": [
      "Maggie Tucker",
      "Yang Pek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Pam Politis",
      "Lynn Snyder"
     ],
     "a": [
      "Caroline Miller",
      "Mary Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nicholas Jackson",
      "Jason Mahoney"
     ],
     "a": [
      "Matt Enz",
      "Issac Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Colin Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Robert Hansen",
      "William Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Pam Politis",
      "Jason Mahoney"
     ],
     "a": [
      "Mary Wu",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ],
     "a": [
      "Lauren Brimhall",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Melissa Dipierro",
      "Sean Mahoney"
     ],
     "a": [
      "Maggie Tucker",
      "William Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Lynn Snyder",
      "Colin Mahoney"
     ],
     "a": [
      "Yang Pek",
      "Robert Hansen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Heather Triozzi"
     ],
     "a": [
      "Lauren Brimhall",
      "Caroline Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melissa Dipierro",
      "Lynn Snyder"
     ],
     "a": [
      "Maggie Tucker",
      "Yang Pek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nicholas Jackson",
      "Jason Mahoney"
     ],
     "a": [
      "Matt Enz",
      "Issac Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Gary Raubenheimer",
      "Colin Mahoney"
     ],
     "a": [
      "Justin Villa",
      "William Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Nicholas Jackson"
     ],
     "a": [
      "Lauren Brimhall",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Colin Mahoney"
     ],
     "a": [
      "Maggie Tucker",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Pam Politis",
      "Gary Raubenheimer"
     ],
     "a": [
      "Caroline Miller",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lynn Snyder",
      "Sean Mahoney"
     ],
     "a": [
      "Mary Wu",
      "Robert Hansen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Heather Triozzi"
     ],
     "a": [
      "Lauren Brimhall",
      "Caroline Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Pam Politis",
      "Melissa Dipierro"
     ],
     "a": [
      "Mary Wu",
      "Yang Pek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ],
     "a": [
      "Matt Enz",
      "Justin Villa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jason Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Robert Hansen",
      "William Brown"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "The Dilluminati",
   "away": "The Bouncers",
   "time": "2026-07-07T19:30:00",
   "complete": true,
   "homePoints": 655,
   "awayPoints": 543,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ],
     "a": [
      "Jennifer Minehan",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Olivia Lee",
      "Ryan Gerstel"
     ],
     "a": [
      "Grace Edelson",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 3,
     "h": [
      "Jamie Damirgian",
      "Elliott Knupp"
     ],
     "a": [
      "Deborah Sawin",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Crista Renauro",
      "Mike Scioli Jr"
     ],
     "a": [
      "Patricia Costantini",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Justyna Wojdyla",
      "Olivia Lee"
     ],
     "a": [
      "Jennifer Minehan",
      "Grace Edelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jamie Damirgian",
      "Mary Mcnichol"
     ],
     "a": [
      "Patricia Costantini",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Colin Hamilton",
      "Ryan Gerstel"
     ],
     "a": [
      "Ed Ruliff",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mike Scioli Jr",
      "Elliott Knupp"
     ],
     "a": [
      "Bennett Matthew",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ],
     "a": [
      "Jennifer Minehan",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Olivia Lee",
      "Ryan Gerstel"
     ],
     "a": [
      "Grace Edelson",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Crista Renauro",
      "Elliott Knupp"
     ],
     "a": [
      "Carolyn Laroque",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Mcnichol",
      "Mike Scioli Jr"
     ],
     "a": [
      "Deborah Sawin",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Jamie Damirgian"
     ],
     "a": [
      "Grace Edelson",
      "Deborah Sawin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Crista Renauro",
      "Mary Mcnichol"
     ],
     "a": [
      "Patricia Costantini",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Colin Hamilton",
      "Mike Scioli Jr"
     ],
     "a": [
      "Matt King",
      "Brian Schreiber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ryan Gerstel",
      "Elliott Knupp"
     ],
     "a": [
      "Ed Ruliff",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Justyna Wojdyla",
      "Mike Scioli Jr"
     ],
     "a": [
      "Jennifer Minehan",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jamie Damirgian",
      "Colin Hamilton"
     ],
     "a": [
      "Deborah Sawin",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Mcnichol",
      "Ryan Gerstel"
     ],
     "a": [
      "Patricia Costantini",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Crista Renauro",
      "Elliott Knupp"
     ],
     "a": [
      "Carolyn Laroque",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Justyna Wojdyla",
      "Jamie Damirgian"
     ],
     "a": [
      "Grace Edelson",
      "Patricia Costantini"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Olivia Lee",
      "Crista Renauro"
     ],
     "a": [
      "Jennifer Minehan",
      "Deborah Sawin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Colin Hamilton",
      "Ryan Gerstel"
     ],
     "a": [
      "Ed Ruliff",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mike Scioli Jr",
      "Elliott Knupp"
     ],
     "a": [
      "Bennett Matthew",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ],
     "a": [
      "Grace Edelson",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Olivia Lee",
      "Colin Hamilton"
     ],
     "a": [
      "Jennifer Minehan",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Mcnichol",
      "Mike Scioli Jr"
     ],
     "a": [
      "Carolyn Laroque",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jamie Damirgian",
      "Elliott Knupp"
     ],
     "a": [
      "Patricia Costantini",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Justyna Wojdyla",
      "Olivia Lee"
     ],
     "a": [
      "Jennifer Minehan",
      "Grace Edelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Crista Renauro",
      "Mary Mcnichol"
     ],
     "a": [
      "Deborah Sawin",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Colin Hamilton",
      "Mike Scioli Jr"
     ],
     "a": [
      "Ed Ruliff",
      "Bennett Matthew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Gerstel",
      "Elliott Knupp"
     ],
     "a": [
      "Matt King",
      "Brian Schreiber"
     ]
    }
   ],
   "subs": [
    "Crista Renauro"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Big Dink Energy",
   "away": "The Dilluminati",
   "time": "2026-07-14T19:30:00",
   "complete": true,
   "homePoints": 534,
   "awayPoints": 652,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nikki Koons",
      "Nicholas Jackson"
     ],
     "a": [
      "Olivia Lee",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Gary Raubenheimer"
     ],
     "a": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lynn Snyder",
      "Jason Mahoney"
     ],
     "a": [
      "Jen Huang",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Pam Politis",
      "Colin Mahoney"
     ],
     "a": [
      "Mary Mcnichol",
      "Elliott Knupp"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nikki Koons",
      "Pam Politis"
     ],
     "a": [
      "Justyna Wojdyla",
      "Jen Huang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Lynn Snyder"
     ],
     "a": [
      "Olivia Lee",
      "Linda Goss"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ],
     "a": [
      "Mike Scioli Jr",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Colin Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Colin Hamilton",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ],
     "a": [
      "Justyna Wojdyla",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ],
     "a": [
      "Olivia Lee",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lynn Snyder",
      "Jason Mahoney"
     ],
     "a": [
      "Linda Goss",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Pam Politis",
      "Sean Mahoney"
     ],
     "a": [
      "Mary Mcnichol",
      "Elliott Knupp"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Heather Triozzi"
     ],
     "a": [
      "Justyna Wojdyla",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Pam Politis",
      "Lynn Snyder"
     ],
     "a": [
      "Jen Huang",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Gary Raubenheimer",
      "Jason Mahoney"
     ],
     "a": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Colin Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Elliott Knupp",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ],
     "a": [
      "Olivia Lee",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Nikki Koons",
      "Jason Mahoney"
     ],
     "a": [
      "Linda Goss",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Pam Politis",
      "Sean Mahoney"
     ],
     "a": [
      "Jen Huang",
      "Elliott Knupp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lynn Snyder",
      "Colin Mahoney"
     ],
     "a": [
      "Mary Mcnichol",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Heather Triozzi"
     ],
     "a": [
      "Olivia Lee",
      "Justyna Wojdyla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pam Politis",
      "Lynn Snyder"
     ],
     "a": [
      "Jen Huang",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nicholas Jackson",
      "Jason Mahoney"
     ],
     "a": [
      "Ryan Gerstel",
      "Elliott Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Gary Raubenheimer",
      "Colin Mahoney"
     ],
     "a": [
      "Mike Scioli Jr",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Nicholas Jackson"
     ],
     "a": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Heather Triozzi",
      "Gary Raubenheimer"
     ],
     "a": [
      "Olivia Lee",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Pam Politis",
      "Colin Mahoney"
     ],
     "a": [
      "Linda Goss",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 1,
     "as": 21,
     "h": [
      "Lynn Snyder",
      "Sean Mahoney"
     ],
     "a": [
      "Jen Huang",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Pam Politis"
     ],
     "a": [
      "Olivia Lee",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Heather Triozzi",
      "Lynn Snyder"
     ],
     "a": [
      "Justyna Wojdyla",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ],
     "a": [
      "Mike Scioli Jr",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jason Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Elliott Knupp",
      "Andrew Klein"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Kitchen Renegades",
   "away": "The Bouncers",
   "time": "2026-07-14T19:30:00",
   "complete": true,
   "homePoints": 571,
   "awayPoints": 677,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lauren Brimhall",
      "Matt Enz"
     ],
     "a": [
      "Grace Edelson",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Justin Villa"
     ],
     "a": [
      "Jennifer Minehan",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Etkin",
      "Issac Gao"
     ],
     "a": [
      "Mary Beth Devaul",
      "Eric Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 31,
     "h": [
      "Yang Pek",
      "Mark Thomas"
     ],
     "a": [
      "Carolyn Laroque",
      "Bennett Matthew"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lauren Brimhall",
      "Lisa Howdyshell"
     ],
     "a": [
      "Jennifer Minehan",
      "Mary Beth Devaul"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Yang Pek"
     ],
     "a": [
      "Grace Edelson",
      "Deborah Sawin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matt Enz",
      "Justin Villa"
     ],
     "a": [
      "Ed Ruliff",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mark Thomas",
      "Yan Wang"
     ],
     "a": [
      "Eric Le",
      "Corey Sawin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Caroline Miller",
      "Matt Enz"
     ],
     "a": [
      "Jennifer Minehan",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lauren Brimhall",
      "Justin Villa"
     ],
     "a": [
      "Grace Edelson",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lisa Howdyshell",
      "Issac Gao"
     ],
     "a": [
      "Deborah Sawin",
      "Corey Sawin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Etkin",
      "Yan Wang"
     ],
     "a": [
      "Carolyn Laroque",
      "Bennett Matthew"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Jennifer Etkin"
     ],
     "a": [
      "Mary Beth Devaul",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Howdyshell",
      "Yang Pek"
     ],
     "a": [
      "Grace Edelson",
      "Deborah Sawin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matt Enz",
      "Issac Gao"
     ],
     "a": [
      "Ed Ruliff",
      "Eric Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mark Thomas",
      "Yan Wang"
     ],
     "a": [
      "Corey Sawin",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Issac Gao"
     ],
     "a": [
      "Deborah Sawin",
      "Eric Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lauren Brimhall",
      "Justin Villa"
     ],
     "a": [
      "Jennifer Minehan",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jennifer Etkin",
      "Yan Wang"
     ],
     "a": [
      "Mary Beth Devaul",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yang Pek",
      "Mark Thomas"
     ],
     "a": [
      "Carolyn Laroque",
      "Corey Sawin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lauren Brimhall",
      "Caroline Miller"
     ],
     "a": [
      "Jennifer Minehan",
      "Grace Edelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Etkin",
      "Yang Pek"
     ],
     "a": [
      "Mary Beth Devaul",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matt Enz",
      "Issac Gao"
     ],
     "a": [
      "Ed Ruliff",
      "Eric Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Justin Villa",
      "Mark Thomas"
     ],
     "a": [
      "Matt King",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Lauren Brimhall",
      "Matt Enz"
     ],
     "a": [
      "Jennifer Minehan",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Mark Thomas"
     ],
     "a": [
      "Mary Beth Devaul",
      "Eric Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Justin Villa"
     ],
     "a": [
      "Grace Edelson",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Yang Pek",
      "Yan Wang"
     ],
     "a": [
      "Deborah Sawin",
      "Corey Sawin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lauren Brimhall",
      "Caroline Miller"
     ],
     "a": [
      "Jennifer Minehan",
      "Grace Edelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Jennifer Etkin"
     ],
     "a": [
      "Deborah Sawin",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Matt Enz",
      "Justin Villa"
     ],
     "a": [
      "Ed Ruliff",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Issac Gao",
      "Yan Wang"
     ],
     "a": [
      "Corey Sawin",
      "Bennett Matthew"
     ]
    }
   ],
   "subs": [
    "Jennifer Etkin",
    "Eric Le",
    "Corey Sawin"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "The Dilluminati",
   "away": "Kitchen Renegades",
   "time": "2026-07-21T19:30:00",
   "complete": true,
   "homePoints": 612,
   "awayPoints": 584,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ],
     "a": [
      "Caroline Miller",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Colin Hamilton"
     ],
     "a": [
      "Lauren Brimhall",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Linda Goss",
      "Mike Scioli Jr"
     ],
     "a": [
      "Mary Wu",
      "Robert Hansen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jen Huang",
      "Elliott Knupp"
     ],
     "a": [
      "Laura Amato",
      "William Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Justyna Wojdyla",
      "Jamie Damirgian"
     ],
     "a": [
      "Lauren Brimhall",
      "Mary Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Olivia Lee",
      "Jen Huang"
     ],
     "a": [
      "Caroline Miller",
      "Lisa Howdyshell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ],
     "a": [
      "Matt Enz",
      "Justin Villa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elliott Knupp",
      "Michael Weber"
     ],
     "a": [
      "Robert Hansen",
      "Mark Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Olivia Lee",
      "Ryan Gerstel"
     ],
     "a": [
      "Lauren Brimhall",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ],
     "a": [
      "Caroline Miller",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jamie Damirgian",
      "Mike Scioli Jr"
     ],
     "a": [
      "Lisa Howdyshell",
      "Mark Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Linda Goss",
      "Michael Weber"
     ],
     "a": [
      "Laura Amato",
      "William Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Olivia Lee",
      "Linda Goss"
     ],
     "a": [
      "Mary Wu",
      "Laura Amato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jamie Damirgian",
      "Jen Huang"
     ],
     "a": [
      "Caroline Miller",
      "Lisa Howdyshell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ],
     "a": [
      "Matt Enz",
      "Robert Hansen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elliott Knupp",
      "Michael Weber"
     ],
     "a": [
      "Mark Thomas",
      "William Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jamie Damirgian",
      "Mike Scioli Jr"
     ],
     "a": [
      "Lisa Howdyshell",
      "Robert Hansen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ],
     "a": [
      "Lauren Brimhall",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Goss",
      "Michael Weber"
     ],
     "a": [
      "Mary Wu",
      "William Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jen Huang",
      "Elliott Knupp"
     ],
     "a": [
      "Laura Amato",
      "Mark Thomas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Olivia Lee"
     ],
     "a": [
      "Lauren Brimhall",
      "Caroline Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Linda Goss",
      "Jen Huang"
     ],
     "a": [
      "Mary Wu",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ],
     "a": [
      "Matt Enz",
      "Robert Hansen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Colin Hamilton",
      "Elliott Knupp"
     ],
     "a": [
      "Justin Villa",
      "William Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ],
     "a": [
      "Lauren Brimhall",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Elliott Knupp"
     ],
     "a": [
      "Mary Wu",
      "Robert Hansen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jamie Damirgian",
      "Colin Hamilton"
     ],
     "a": [
      "Caroline Miller",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jen Huang",
      "Michael Weber"
     ],
     "a": [
      "Lisa Howdyshell",
      "Mark Thomas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Justyna Wojdyla",
      "Olivia Lee"
     ],
     "a": [
      "Lauren Brimhall",
      "Caroline Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jamie Damirgian",
      "Linda Goss"
     ],
     "a": [
      "Lisa Howdyshell",
      "Laura Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ],
     "a": [
      "Matt Enz",
      "Justin Villa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mike Scioli Jr",
      "Michael Weber"
     ],
     "a": [
      "Mark Thomas",
      "William Brown"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "The Bouncers",
   "away": "Big Dink Energy",
   "time": "2026-07-21T19:30:00",
   "complete": true,
   "homePoints": 640,
   "awayPoints": 541,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Minehan",
      "Ed Ruliff"
     ],
     "a": [
      "Crystal Mark",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Matt King"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Deborah Sawin",
      "Bennett Matthew"
     ],
     "a": [
      "Pam Politis",
      "Jason Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Carolyn Laroque",
      "Richard Wining"
     ],
     "a": [
      "Linda Beaulieu",
      "Sean Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Minehan",
      "Patricia Costantini"
     ],
     "a": [
      "Nikki Koons",
      "Pam Politis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Grace Edelson",
      "Carolyn Laroque"
     ],
     "a": [
      "Crystal Mark",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ed Ruliff",
      "Matt King"
     ],
     "a": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Richard Wining",
      "Brian Schreiber"
     ],
     "a": [
      "Jason Mahoney",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Grace Edelson",
      "Ed Ruliff"
     ],
     "a": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Minehan",
      "Matt King"
     ],
     "a": [
      "Crystal Mark",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Patricia Costantini",
      "Bennett Matthew"
     ],
     "a": [
      "Lynn Snyder",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Deborah Sawin",
      "Brian Schreiber"
     ],
     "a": [
      "Linda Beaulieu",
      "Sean Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Grace Edelson",
      "Deborah Sawin"
     ],
     "a": [
      "Pam Politis",
      "Linda Beaulieu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Costantini",
      "Carolyn Laroque"
     ],
     "a": [
      "Crystal Mark",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Ed Ruliff",
      "Bennett Matthew"
     ],
     "a": [
      "Nicholas Jackson",
      "Jason Mahoney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Richard Wining",
      "Brian Schreiber"
     ],
     "a": [
      "Colin Mahoney",
      "Sean Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patricia Costantini",
      "Bennett Matthew"
     ],
     "a": [
      "Lynn Snyder",
      "Jason Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jennifer Minehan",
      "Matt King"
     ],
     "a": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Deborah Sawin",
      "Brian Schreiber"
     ],
     "a": [
      "Pam Politis",
      "Sean Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carolyn Laroque",
      "Richard Wining"
     ],
     "a": [
      "Linda Beaulieu",
      "Colin Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Minehan",
      "Grace Edelson"
     ],
     "a": [
      "Nikki Koons",
      "Crystal Mark"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Deborah Sawin",
      "Carolyn Laroque"
     ],
     "a": [
      "Pam Politis",
      "Linda Beaulieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ed Ruliff",
      "Bennett Matthew"
     ],
     "a": [
      "Nicholas Jackson",
      "Jason Mahoney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Matt King",
      "Richard Wining"
     ],
     "a": [
      "Gary Raubenheimer",
      "Sean Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Ed Ruliff"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Richard Wining"
     ],
     "a": [
      "Pam Politis",
      "Jason Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Patricia Costantini",
      "Matt King"
     ],
     "a": [
      "Crystal Mark",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carolyn Laroque",
      "Brian Schreiber"
     ],
     "a": [
      "Lynn Snyder",
      "Colin Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jennifer Minehan",
      "Grace Edelson"
     ],
     "a": [
      "Nikki Koons",
      "Crystal Mark"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Patricia Costantini",
      "Deborah Sawin"
     ],
     "a": [
      "Lynn Snyder",
      "Linda Beaulieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ed Ruliff",
      "Matt King"
     ],
     "a": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Bennett Matthew",
      "Brian Schreiber"
     ],
     "a": [
      "Colin Mahoney",
      "Sean Mahoney"
     ]
    }
   ],
   "subs": [
    "Richard Wining"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Kitchen Renegades",
   "away": "Big Dink Energy",
   "time": "2026-07-28T19:30:00",
   "complete": true,
   "homePoints": 611,
   "awayPoints": 599,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lauren Brimhall",
      "Matt Enz"
     ],
     "a": [
      "Heather Triozzi",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Caroline Miller",
      "Issac Gao"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Amato",
      "Robert Hansen"
     ],
     "a": [
      "Crystal Mark",
      "Johnny Deng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Yang Pek",
      "William Brown"
     ],
     "a": [
      "Linda Beaulieu",
      "Colin Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lauren Brimhall",
      "Lisa Howdyshell"
     ],
     "a": [
      "Nikki Koons",
      "Crystal Mark"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Yang Pek"
     ],
     "a": [
      "Heather Triozzi",
      "Pam Politis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Matt Enz",
      "Issac Gao"
     ],
     "a": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "William Brown",
      "Yan Wang"
     ],
     "a": [
      "Johnny Deng",
      "Jason Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Caroline Miller",
      "Matt Enz"
     ],
     "a": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lauren Brimhall",
      "Issac Gao"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Robert Hansen"
     ],
     "a": [
      "Pam Politis",
      "Jason Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Amato",
      "Yan Wang"
     ],
     "a": [
      "Linda Beaulieu",
      "Colin Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Caroline Miller",
      "Laura Amato"
     ],
     "a": [
      "Crystal Mark",
      "Linda Beaulieu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Howdyshell",
      "Yang Pek"
     ],
     "a": [
      "Heather Triozzi",
      "Pam Politis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Matt Enz",
      "Robert Hansen"
     ],
     "a": [
      "Nicholas Jackson",
      "Johnny Deng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "William Brown",
      "Yan Wang"
     ],
     "a": [
      "Jason Mahoney",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Robert Hansen"
     ],
     "a": [
      "Pam Politis",
      "Johnny Deng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lauren Brimhall",
      "Issac Gao"
     ],
     "a": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Laura Amato",
      "Yan Wang"
     ],
     "a": [
      "Crystal Mark",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Yang Pek",
      "William Brown"
     ],
     "a": [
      "Linda Beaulieu",
      "Jason Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lauren Brimhall",
      "Caroline Miller"
     ],
     "a": [
      "Nikki Koons",
      "Heather Triozzi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Amato",
      "Yang Pek"
     ],
     "a": [
      "Crystal Mark",
      "Linda Beaulieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matt Enz",
      "Robert Hansen"
     ],
     "a": [
      "Nicholas Jackson",
      "Johnny Deng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Issac Gao",
      "William Brown"
     ],
     "a": [
      "Gary Raubenheimer",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lauren Brimhall",
      "Matt Enz"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Caroline Miller",
      "William Brown"
     ],
     "a": [
      "Crystal Mark",
      "Johnny Deng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lisa Howdyshell",
      "Issac Gao"
     ],
     "a": [
      "Heather Triozzi",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yang Pek",
      "Yan Wang"
     ],
     "a": [
      "Pam Politis",
      "Jason Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lauren Brimhall",
      "Caroline Miller"
     ],
     "a": [
      "Nikki Koons",
      "Heather Triozzi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Laura Amato"
     ],
     "a": [
      "Pam Politis",
      "Linda Beaulieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Matt Enz",
      "Issac Gao"
     ],
     "a": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Hansen",
      "Yan Wang"
     ],
     "a": [
      "Jason Mahoney",
      "Colin Mahoney"
     ]
    }
   ],
   "subs": [
    "Johnny Deng"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "The Bouncers",
   "away": "The Dilluminati",
   "time": "2026-07-28T19:30:00",
   "complete": true,
   "homePoints": 580,
   "awayPoints": 602,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Tim Phelan"
     ],
     "a": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Matt King"
     ],
     "a": [
      "Olivia Lee",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Beth Devaul",
      "Richard Wining"
     ],
     "a": [
      "Linda Goss",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carolina Reese",
      "Bennett Matthew"
     ],
     "a": [
      "Jen Huang",
      "Elliott Knupp"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Minehan",
      "Carolina Reese"
     ],
     "a": [
      "Olivia Lee",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Mary Beth Devaul"
     ],
     "a": [
      "Justyna Wojdyla",
      "Jamie Damirgian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tim Phelan",
      "Matt King"
     ],
     "a": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bennett Matthew",
      "Brian Schreiber"
     ],
     "a": [
      "Mike Scioli Jr",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Tim Phelan"
     ],
     "a": [
      "Olivia Lee",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Matt King"
     ],
     "a": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Beth Devaul",
      "Richard Wining"
     ],
     "a": [
      "Jamie Damirgian",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carolina Reese",
      "Brian Schreiber"
     ],
     "a": [
      "Jen Huang",
      "Elliott Knupp"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Grace Edelson"
     ],
     "a": [
      "Olivia Lee",
      "Jamie Damirgian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Carolina Reese",
      "Mary Beth Devaul"
     ],
     "a": [
      "Linda Goss",
      "Jen Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Matt King",
      "Richard Wining"
     ],
     "a": [
      "Colin Hamilton",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Bennett Matthew",
      "Brian Schreiber"
     ],
     "a": [
      "Elliott Knupp",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Grace Edelson",
      "Tim Phelan"
     ],
     "a": [
      "Justyna Wojdyla",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jennifer Minehan",
      "Richard Wining"
     ],
     "a": [
      "Jamie Damirgian",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carolina Reese",
      "Brian Schreiber"
     ],
     "a": [
      "Linda Goss",
      "Elliott Knupp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Mary Beth Devaul",
      "Bennett Matthew"
     ],
     "a": [
      "Jen Huang",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Grace Edelson"
     ],
     "a": [
      "Justyna Wojdyla",
      "Olivia Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Carolina Reese",
      "Mary Beth Devaul"
     ],
     "a": [
      "Linda Goss",
      "Jen Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Tim Phelan",
      "Richard Wining"
     ],
     "a": [
      "Colin Hamilton",
      "Elliott Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Matt King",
      "Bennett Matthew"
     ],
     "a": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Tim Phelan"
     ],
     "a": [
      "Olivia Lee",
      "Colin Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Grace Edelson",
      "Matt King"
     ],
     "a": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Carolina Reese",
      "Bennett Matthew"
     ],
     "a": [
      "Jamie Damirgian",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Beth Devaul",
      "Brian Schreiber"
     ],
     "a": [
      "Linda Goss",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Minehan",
      "Carolina Reese"
     ],
     "a": [
      "Justyna Wojdyla",
      "Jamie Damirgian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Grace Edelson",
      "Mary Beth Devaul"
     ],
     "a": [
      "Olivia Lee",
      "Jen Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tim Phelan",
      "Matt King"
     ],
     "a": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Richard Wining",
      "Brian Schreiber"
     ],
     "a": [
      "Elliott Knupp",
      "Andrew Klein"
     ]
    }
   ],
   "subs": [
    "Richard Wining",
    "Carolina Reese",
    "Tim Phelan"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "The Bouncers",
   "away": "Kitchen Renegades",
   "time": "2026-08-04T19:30:00",
   "complete": true,
   "homePoints": 586,
   "awayPoints": 617,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Ed Ruliff"
     ],
     "a": [
      "Lauren Brimhall",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Grace Edelson",
      "Matt King"
     ],
     "a": [
      "Caroline Miller",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Beth Devaul",
      "Paul Mcdonald"
     ],
     "a": [
      "Mary Wu",
      "Robert Hansen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Deborah Sawin",
      "Bennett Matthew"
     ],
     "a": [
      "Laura Amato",
      "Mark Thomas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Grace Edelson"
     ],
     "a": [
      "Lauren Brimhall",
      "Caroline Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Deborah Sawin",
      "Carolyn Laroque"
     ],
     "a": [
      "Mary Wu",
      "Yang Pek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ed Ruliff",
      "Bennett Matthew"
     ],
     "a": [
      "Justin Villa",
      "Robert Hansen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Matt King",
      "Paul Mcdonald"
     ],
     "a": [
      "Matt Enz",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Matt King"
     ],
     "a": [
      "Lauren Brimhall",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Ed Ruliff"
     ],
     "a": [
      "Caroline Miller",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mary Beth Devaul",
      "Paul Mcdonald"
     ],
     "a": [
      "Yang Pek",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Carolyn Laroque",
      "Bennett Matthew"
     ],
     "a": [
      "Laura Amato",
      "Mark Thomas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Grace Edelson",
      "Mary Beth Devaul"
     ],
     "a": [
      "Caroline Miller",
      "Mary Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Deborah Sawin",
      "Carolyn Laroque"
     ],
     "a": [
      "Laura Amato",
      "Yang Pek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ed Ruliff",
      "Matt King"
     ],
     "a": [
      "Justin Villa",
      "Issac Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bennett Matthew",
      "Paul Mcdonald"
     ],
     "a": [
      "Robert Hansen",
      "Mark Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Matt King"
     ],
     "a": [
      "Mary Wu",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mary Beth Devaul",
      "Ed Ruliff"
     ],
     "a": [
      "Lauren Brimhall",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Carolyn Laroque",
      "Bennett Matthew"
     ],
     "a": [
      "Laura Amato",
      "Robert Hansen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Deborah Sawin",
      "Paul Mcdonald"
     ],
     "a": [
      "Yang Pek",
      "Mark Thomas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Mary Beth Devaul"
     ],
     "a": [
      "Caroline Miller",
      "Laura Amato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Grace Edelson",
      "Deborah Sawin"
     ],
     "a": [
      "Lauren Brimhall",
      "Mary Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ed Ruliff",
      "Matt King"
     ],
     "a": [
      "Matt Enz",
      "Justin Villa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bennett Matthew",
      "Paul Mcdonald"
     ],
     "a": [
      "Robert Hansen",
      "Mark Thomas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Ed Ruliff"
     ],
     "a": [
      "Caroline Miller",
      "Justin Villa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Grace Edelson",
      "Matt King"
     ],
     "a": [
      "Lauren Brimhall",
      "Matt Enz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Deborah Sawin",
      "Bennett Matthew"
     ],
     "a": [
      "Mary Wu",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carolyn Laroque",
      "Paul Mcdonald"
     ],
     "a": [
      "Yang Pek",
      "Robert Hansen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristen Buenconsejo",
      "Grace Edelson"
     ],
     "a": [
      "Lauren Brimhall",
      "Caroline Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Beth Devaul",
      "Carolyn Laroque"
     ],
     "a": [
      "Laura Amato",
      "Yang Pek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ed Ruliff",
      "Bennett Matthew"
     ],
     "a": [
      "Matt Enz",
      "Issac Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matt King",
      "Paul Mcdonald"
     ],
     "a": [
      "Justin Villa",
      "Mark Thomas"
     ]
    }
   ],
   "subs": [
    "Paul Mcdonald"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "The Dilluminati",
   "away": "Big Dink Energy",
   "time": "2026-08-04T19:30:00",
   "complete": true,
   "homePoints": 637,
   "awayPoints": 597,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Olivia Lee",
      "Ryan Gerstel"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ],
     "a": [
      "Heather Triozzi",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jen Huang",
      "Mike Scioli Jr"
     ],
     "a": [
      "Lynn Snyder",
      "Jason Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mary Mcnichol",
      "Jonathan Miller"
     ],
     "a": [
      "Pam Politis",
      "Colin Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Justyna Wojdyla",
      "Jen Huang"
     ],
     "a": [
      "Nikki Koons",
      "Pam Politis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Olivia Lee",
      "Jamie Damirgian"
     ],
     "a": [
      "Heather Triozzi",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ],
     "a": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mike Scioli Jr",
      "Michael Weber"
     ],
     "a": [
      "Colin Mahoney",
      "Sean Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Olivia Lee",
      "Colin Hamilton"
     ],
     "a": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jamie Damirgian",
      "Michael Weber"
     ],
     "a": [
      "Lynn Snyder",
      "Jason Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mary Mcnichol",
      "Jonathan Miller"
     ],
     "a": [
      "Pam Politis",
      "Sean Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Jamie Damirgian"
     ],
     "a": [
      "Nikki Koons",
      "Heather Triozzi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 22,
     "h": [
      "Jen Huang",
      "Mary Mcnichol"
     ],
     "a": [
      "Pam Politis",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Colin Hamilton",
      "Mike Scioli Jr"
     ],
     "a": [
      "Gary Raubenheimer",
      "Jason Mahoney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Miller",
      "Michael Weber"
     ],
     "a": [
      "Colin Mahoney",
      "Sean Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Mike Scioli Jr"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jamie Damirgian",
      "Ryan Gerstel"
     ],
     "a": [
      "Nikki Koons",
      "Jason Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jen Huang",
      "Jonathan Miller"
     ],
     "a": [
      "Pam Politis",
      "Sean Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Mary Mcnichol",
      "Michael Weber"
     ],
     "a": [
      "Lynn Snyder",
      "Colin Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Olivia Lee",
      "Justyna Wojdyla"
     ],
     "a": [
      "Nikki Koons",
      "Heather Triozzi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jen Huang",
      "Mary Mcnichol"
     ],
     "a": [
      "Pam Politis",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Colin Hamilton",
      "Jonathan Miller"
     ],
     "a": [
      "Nicholas Jackson",
      "Jason Mahoney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ],
     "a": [
      "Gary Raubenheimer",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Ryan Gerstel"
     ],
     "a": [
      "Heather Triozzi",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jamie Damirgian",
      "Mike Scioli Jr"
     ],
     "a": [
      "Pam Politis",
      "Colin Mahoney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jen Huang",
      "Michael Weber"
     ],
     "a": [
      "Lynn Snyder",
      "Sean Mahoney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Olivia Lee",
      "Jamie Damirgian"
     ],
     "a": [
      "Nikki Koons",
      "Pam Politis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Mary Mcnichol"
     ],
     "a": [
      "Heather Triozzi",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ],
     "a": [
      "Nicholas Jackson",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jonathan Miller",
      "Michael Weber"
     ],
     "a": [
      "Jason Mahoney",
      "Sean Mahoney"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 9,
   "home": "Kitchen Renegades",
   "away": "The Dilluminati",
   "time": "2026-08-11T19:30:00",
   "complete": true,
   "homePoints": 592,
   "awayPoints": 600,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Caroline Miller",
      "Matt Enz"
     ],
     "a": [
      "Jen Huang",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mary Wu",
      "Justin Villa"
     ],
     "a": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Issac Gao"
     ],
     "a": [
      "Linda Goss",
      "Elliott Knupp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yang Pek",
      "William Brown"
     ],
     "a": [
      "Mary Mcnichol",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Caroline Miller",
      "Laura Amato"
     ],
     "a": [
      "Justyna Wojdyla",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Wu",
      "Yang Pek"
     ],
     "a": [
      "Jen Huang",
      "Crista Renauro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matt Enz",
      "Justin Villa"
     ],
     "a": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "William Brown",
      "Yan Wang"
     ],
     "a": [
      "Elliott Knupp",
      "Jonathan Miller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mary Wu",
      "Matt Enz"
     ],
     "a": [
      "Justyna Wojdyla",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Caroline Miller",
      "Justin Villa"
     ],
     "a": [
      "Jen Huang",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Amato",
      "Issac Gao"
     ],
     "a": [
      "Crista Renauro",
      "Jonathan Miller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lisa Howdyshell",
      "Yan Wang"
     ],
     "a": [
      "Mary Mcnichol",
      "Andrew Klein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mary Wu",
      "Lisa Howdyshell"
     ],
     "a": [
      "Linda Goss",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Amato",
      "Yang Pek"
     ],
     "a": [
      "Jen Huang",
      "Crista Renauro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Matt Enz",
      "Issac Gao"
     ],
     "a": [
      "Ryan Gerstel",
      "Elliott Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "William Brown",
      "Yan Wang"
     ],
     "a": [
      "Jonathan Miller",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Laura Amato",
      "Issac Gao"
     ],
     "a": [
      "Crista Renauro",
      "Elliott Knupp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Caroline Miller",
      "Justin Villa"
     ],
     "a": [
      "Justyna Wojdyla",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lisa Howdyshell",
      "Yan Wang"
     ],
     "a": [
      "Linda Goss",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Yang Pek",
      "William Brown"
     ],
     "a": [
      "Mary Mcnichol",
      "Jonathan Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Caroline Miller",
      "Mary Wu"
     ],
     "a": [
      "Justyna Wojdyla",
      "Jen Huang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Yang Pek"
     ],
     "a": [
      "Linda Goss",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matt Enz",
      "Issac Gao"
     ],
     "a": [
      "Ryan Gerstel",
      "Elliott Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Justin Villa",
      "William Brown"
     ],
     "a": [
      "Mike Scioli Jr",
      "Andrew Klein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Caroline Miller",
      "Matt Enz"
     ],
     "a": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Wu",
      "William Brown"
     ],
     "a": [
      "Linda Goss",
      "Elliott Knupp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Laura Amato",
      "Justin Villa"
     ],
     "a": [
      "Jen Huang",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yang Pek",
      "Yan Wang"
     ],
     "a": [
      "Crista Renauro",
      "Jonathan Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Mary Wu"
     ],
     "a": [
      "Justyna Wojdyla",
      "Jen Huang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Amato",
      "Lisa Howdyshell"
     ],
     "a": [
      "Crista Renauro",
      "Mary Mcnichol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Matt Enz",
      "Justin Villa"
     ],
     "a": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Issac Gao",
      "Yan Wang"
     ],
     "a": [
      "Jonathan Miller",
      "Andrew Klein"
     ]
    }
   ],
   "subs": [
    "Crista Renauro"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Big Dink Energy",
   "away": "The Bouncers",
   "time": "2026-08-11T19:30:00",
   "complete": true,
   "homePoints": 504,
   "awayPoints": 667,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nikki Koons",
      "Steven Mark"
     ],
     "a": [
      "Grace Edelson",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Melissa Dipierro",
      "Gary Raubenheimer"
     ],
     "a": [
      "Jennifer Minehan",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lynn Snyder",
      "Jason Mahoney"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Linda Beaulieu",
      "Colin Mahoney"
     ],
     "a": [
      "Carolyn Laroque",
      "Daniel Seng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Crystal Mark"
     ],
     "a": [
      "Jennifer Minehan",
      "Kristen Buenconsejo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Melissa Dipierro",
      "Linda Beaulieu"
     ],
     "a": [
      "Grace Edelson",
      "Mary Beth Devaul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steven Mark",
      "Gary Raubenheimer"
     ],
     "a": [
      "Ed Ruliff",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Colin Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Bennett Matthew",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Melissa Dipierro",
      "Steven Mark"
     ],
     "a": [
      "Jennifer Minehan",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ],
     "a": [
      "Grace Edelson",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Crystal Mark",
      "Jason Mahoney"
     ],
     "a": [
      "Mary Beth Devaul",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Lynn Snyder",
      "Sean Mahoney"
     ],
     "a": [
      "Carolyn Laroque",
      "Daniel Seng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Melissa Dipierro",
      "Lynn Snyder"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Crystal Mark",
      "Linda Beaulieu"
     ],
     "a": [
      "Grace Edelson",
      "Mary Beth Devaul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Steven Mark",
      "Jason Mahoney"
     ],
     "a": [
      "Ed Ruliff",
      "Bennett Matthew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Colin Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Brian Schreiber",
      "Daniel Seng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Crystal Mark",
      "Jason Mahoney"
     ],
     "a": [
      "Mary Beth Devaul",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Gary Raubenheimer"
     ],
     "a": [
      "Jennifer Minehan",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lynn Snyder",
      "Sean Mahoney"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Daniel Seng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Beaulieu",
      "Colin Mahoney"
     ],
     "a": [
      "Carolyn Laroque",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Melissa Dipierro"
     ],
     "a": [
      "Jennifer Minehan",
      "Grace Edelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lynn Snyder",
      "Linda Beaulieu"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Steven Mark",
      "Jason Mahoney"
     ],
     "a": [
      "Ed Ruliff",
      "Bennett Matthew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gary Raubenheimer",
      "Colin Mahoney"
     ],
     "a": [
      "Matt King",
      "Daniel Seng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nikki Koons",
      "Steven Mark"
     ],
     "a": [
      "Jennifer Minehan",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Melissa Dipierro",
      "Colin Mahoney"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Crystal Mark",
      "Gary Raubenheimer"
     ],
     "a": [
      "Grace Edelson",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Linda Beaulieu",
      "Sean Mahoney"
     ],
     "a": [
      "Mary Beth Devaul",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nikki Koons",
      "Melissa Dipierro"
     ],
     "a": [
      "Jennifer Minehan",
      "Grace Edelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Crystal Mark",
      "Lynn Snyder"
     ],
     "a": [
      "Mary Beth Devaul",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steven Mark",
      "Gary Raubenheimer"
     ],
     "a": [
      "Ed Ruliff",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Mahoney",
      "Sean Mahoney"
     ],
     "a": [
      "Brian Schreiber",
      "Daniel Seng"
     ]
    }
   ],
   "subs": []
  }
 ],
 "playoffs": [
  {
   "result": "away",
   "round": 1,
   "home": "The Dilluminati",
   "away": "The Bouncers",
   "time": "2026-08-18T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "provisional": true,
   "homePoints": 598,
   "awayPoints": 639,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Olivia Lee",
      "Ryan Gerstel"
     ],
     "a": [
      "Grace Edelson",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Justyna Wojdyla",
      "Colin Hamilton"
     ],
     "a": [
      "Jennifer Minehan",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Linda Goss",
      "Mike Scioli Jr"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Eric Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jen Huang",
      "Elliott Knupp"
     ],
     "a": [
      "Carolyn Laroque",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Jamie Damirgian"
     ],
     "a": [
      "Jennifer Minehan",
      "Kristen Buenconsejo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Justyna Wojdyla",
      "Jen Huang"
     ],
     "a": [
      "Grace Edelson",
      "Mary Beth Devaul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ],
     "a": [
      "Ed Ruliff",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elliott Knupp",
      "Michael Weber"
     ],
     "a": [
      "Eric Le",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ],
     "a": [
      "Jennifer Minehan",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Olivia Lee",
      "Colin Hamilton"
     ],
     "a": [
      "Grace Edelson",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamie Damirgian",
      "Mike Scioli Jr"
     ],
     "a": [
      "Mary Beth Devaul",
      "Bennett Matthew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Linda Goss",
      "Michael Weber"
     ],
     "a": [
      "Carolyn Laroque",
      "Brian Schreiber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Justyna Wojdyla",
      "Linda Goss"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jamie Damirgian",
      "Jen Huang"
     ],
     "a": [
      "Grace Edelson",
      "Mary Beth Devaul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ],
     "a": [
      "Ed Ruliff",
      "Eric Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elliott Knupp",
      "Michael Weber"
     ],
     "a": [
      "Bennett Matthew",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamie Damirgian",
      "Mike Scioli Jr"
     ],
     "a": [
      "Mary Beth Devaul",
      "Eric Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Olivia Lee",
      "Colin Hamilton"
     ],
     "a": [
      "Jennifer Minehan",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Linda Goss",
      "Michael Weber"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jen Huang",
      "Elliott Knupp"
     ],
     "a": [
      "Carolyn Laroque",
      "Bennett Matthew"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Justyna Wojdyla"
     ],
     "a": [
      "Jennifer Minehan",
      "Grace Edelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Linda Goss",
      "Jen Huang"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ],
     "a": [
      "Ed Ruliff",
      "Eric Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Colin Hamilton",
      "Elliott Knupp"
     ],
     "a": [
      "Matt King",
      "Brian Schreiber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Olivia Lee",
      "Ryan Gerstel"
     ],
     "a": [
      "Jennifer Minehan",
      "Ed Ruliff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Justyna Wojdyla",
      "Elliott Knupp"
     ],
     "a": [
      "Kristen Buenconsejo",
      "Eric Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jamie Damirgian",
      "Colin Hamilton"
     ],
     "a": [
      "Grace Edelson",
      "Matt King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jen Huang",
      "Michael Weber"
     ],
     "a": [
      "Mary Beth Devaul",
      "Bennett Matthew"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Justyna Wojdyla"
     ],
     "a": [
      "Jennifer Minehan",
      "Grace Edelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jamie Damirgian",
      "Linda Goss"
     ],
     "a": [
      "Mary Beth Devaul",
      "Carolyn Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ryan Gerstel",
      "Colin Hamilton"
     ],
     "a": [
      "Ed Ruliff",
      "Matt King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mike Scioli Jr",
      "Michael Weber"
     ],
     "a": [
      "Bennett Matthew",
      "Brian Schreiber"
     ]
    }
   ]
  },
  {
   "result": "away",
   "round": 1,
   "home": "Kitchen Renegades",
   "away": "Big Dink Energy",
   "time": "2026-08-18T19:30:00",
   "complete": true,
   "homeSeed": 3,
   "awaySeed": 4,
   "provisional": true,
   "homePoints": 588,
   "awayPoints": 617,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Caroline Miller",
      "Matt Enz"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mary Wu",
      "Justin Villa"
     ],
     "a": [
      "Nikki Koons",
      "Deepak Patel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Amato",
      "Issac Gao"
     ],
     "a": [
      "Pam Politis",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yang Pek",
      "Robert Hansen"
     ],
     "a": [
      "Crystal Mark",
      "Scott Bersak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Lisa Howdyshell"
     ],
     "a": [
      "Nikki Koons",
      "Pam Politis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Wu",
      "Yang Pek"
     ],
     "a": [
      "Heather Triozzi",
      "Melissa Dipierro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matt Enz",
      "Justin Villa"
     ],
     "a": [
      "Deepak Patel",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Robert Hansen",
      "Mark Thomas"
     ],
     "a": [
      "Steven Mark",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Mary Wu",
      "Matt Enz"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Caroline Miller",
      "Justin Villa"
     ],
     "a": [
      "Heather Triozzi",
      "Deepak Patel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Howdyshell",
      "Issac Gao"
     ],
     "a": [
      "Melissa Dipierro",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Laura Amato",
      "Mark Thomas"
     ],
     "a": [
      "Crystal Mark",
      "Scott Bersak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mary Wu",
      "Laura Amato"
     ],
     "a": [
      "Pam Politis",
      "Crystal Mark"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Howdyshell",
      "Yang Pek"
     ],
     "a": [
      "Heather Triozzi",
      "Melissa Dipierro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matt Enz",
      "Issac Gao"
     ],
     "a": [
      "Deepak Patel",
      "Steven Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Robert Hansen",
      "Mark Thomas"
     ],
     "a": [
      "Gary Raubenheimer",
      "Scott Bersak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Issac Gao"
     ],
     "a": [
      "Melissa Dipierro",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Caroline Miller",
      "Justin Villa"
     ],
     "a": [
      "Nikki Koons",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Amato",
      "Mark Thomas"
     ],
     "a": [
      "Pam Politis",
      "Scott Bersak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yang Pek",
      "Robert Hansen"
     ],
     "a": [
      "Crystal Mark",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Caroline Miller",
      "Mary Wu"
     ],
     "a": [
      "Nikki Koons",
      "Heather Triozzi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Amato",
      "Yang Pek"
     ],
     "a": [
      "Pam Politis",
      "Crystal Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Matt Enz",
      "Issac Gao"
     ],
     "a": [
      "Deepak Patel",
      "Steven Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Justin Villa",
      "Robert Hansen"
     ],
     "a": [
      "Nicholas Jackson",
      "Scott Bersak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Caroline Miller",
      "Matt Enz"
     ],
     "a": [
      "Nikki Koons",
      "Deepak Patel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mary Wu",
      "Robert Hansen"
     ],
     "a": [
      "Pam Politis",
      "Steven Mark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lisa Howdyshell",
      "Justin Villa"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Yang Pek",
      "Mark Thomas"
     ],
     "a": [
      "Melissa Dipierro",
      "Gary Raubenheimer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Caroline Miller",
      "Mary Wu"
     ],
     "a": [
      "Nikki Koons",
      "Heather Triozzi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lisa Howdyshell",
      "Laura Amato"
     ],
     "a": [
      "Melissa Dipierro",
      "Crystal Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Matt Enz",
      "Justin Villa"
     ],
     "a": [
      "Deepak Patel",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Issac Gao",
      "Mark Thomas"
     ],
     "a": [
      "Gary Raubenheimer",
      "Scott Bersak"
     ]
    }
   ]
  }
 ],
 "extraPlayerIds": {
  "Samantha Horning": "3e9d2be9-f191-4239-a4c4-132952585e16",
  "Deepak Patel": "749874a9-bfd1-4ba7-9758-b0dee935ee9f",
  "Michael Scullin": "d9a06ccc-809e-47dc-911b-aa95471cdf4d",
  "Ann Dunn": "fac1e928-060e-4b80-a0e4-bcd4aca0089b"
 },
 "meta": {
  "matchesPlayed": 18,
  "provisionalMatches": 0,
  "weeks": "1-9",
  "totalPlayers": 63,
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
  "divisionSlug": "a40bd7e8",
  "hasPlayoffs": true,
  "typicalDay": "Tuesdays",
  "detailFile": "detail-a40bd7e8.js",
  "clubName": "Bounce - Malvern",
  "divisionName": "3.5 - 4.0",
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
  DATA.meta.asOf = "2026-08-28T16:17:54.802Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["a40bd7e8"] = DATA;
})();
